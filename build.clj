#!/usr/local/bin/bb

(ns build
  (:require 
   [clojure.string :as str]
   [babashka.fs :as fs]))

(defn make-new-root [old-path new-root]
  (let [[_ _ & path] (str/split (str old-path) #"/")]
    (->> (into [new-root] path)
         (str/join "/"))))

(defn zipmap-extra [a b]
  (let [c (count a)
        mapping (zipmap (take c a) (take c b))]
    (assoc mapping (last a) (drop (dec c) b))))

(defn get-template [template-name]
  (slurp (str "templates/" template-name ".html")))

(defn make-html [file opts]
  (let [html (slurp "html.html")]
    (cond-> html
      true (str/replace "@{content}" file)
      (:title opts) (str/replace "@{title}" (:title opts)))))

(defn parse-component [name]
  (let [component (fs/read-all-lines (str "components/" name ".html"))
        args (-> (take-while #(not= % "---") component)
                 (first)
                 (str/split #" "))
        body (->> (drop (inc (count args)) component)
                  (str/join "\n"))]
    [args body]))

(defn expand-components [file]
  (loop [char (first file)
         lookahead (second file)
         after (drop 2 file)
         expanded []]
    (cond
      (empty? after) (apply str (into expanded [char lookahead]))
      (= (str char lookahead) "@{") 
      (let [comp-call (take-while #(not= % \}) after)
            [comp-name & comp-vals] (->> (partition-by #(= % \space) comp-call)
                                         (filter #(not= [\space] %))
                                         (map #(str/join "" %)))
            [comp-args comp-body] (parse-component comp-name)
            replaced (->> (zipmap-extra comp-args comp-vals)
                          (reduce-kv 
                           (fn [a k v]
                             (let [replacement (if (seq? v)
                                                 (if (some-> (first v) (str/starts-with? " "))
                                                   (let [indent (re-pattern (first v))]
                                                     (->> (map #(str/replace-first % indent "") v)
                                                          (str/join " ")))
                                                   (str/join " " v))
                                                 (str/trim-newline v))]
                               (str/replace a (re-pattern (str "\\@\\{" k "\\}")) replacement)))
                           comp-body)
                          (expand-components))
            [char lookahead & after] (drop (inc (count comp-call)) after)]
        (recur char lookahead after (conj expanded replaced)))
      :else (recur lookahead (first after) (rest after) (conj expanded char)))))

(defn apply-template [template file]
  (str/replace template "@{content}" (str/join "\n" file)))

(defn generate-page [name contents opts]
  (when-not (fs/exists? name)
    (fs/create-file name))
  (let [doc (-> (:template opts)
                (get-template)
                (apply-template contents)
                (expand-components)
                (make-html opts))]
    (spit name doc)))

(let [pages "./pages"
      docs "./docs"]
  (fs/walk-file-tree pages
   {:pre-visit-dir (fn [d _] 
                       (let [new-dir (make-new-root d docs)]
                         (when-not (fs/exists? new-dir)
                           (fs/create-dir new-dir)))
                     :continue)
    :visit-file (fn [f _]
                  (when-not (fs/directory? f)
                    (let [new-file-name (make-new-root f docs)
                          file-contents (fs/read-all-lines f)
                          build-opts (->> (take-while #(not= % "---") file-contents)
                                          (map #(str/split % #":"))
                                          (map #(vector (keyword (% 0)) (% 1)))
                                          (into {}))
                          file-contents (drop (inc (count build-opts)) file-contents)]
                      (generate-page new-file-name file-contents build-opts)))
                  :continue)}))

:done
