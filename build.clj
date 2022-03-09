#!/usr/local/bin/bb

(ns build
  (:require 
   [clojure.string :as str]
   [babashka.fs :as fs]))

(defn make-new-root [old-path new-root]
  (let [[_ _ & path] (str/split (str old-path) #"/")]
    (->> (into [new-root] path)
         (str/join "/"))))

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
  (let [components (re-seq #"\@\{.*\}" file)
        expanded
        (reduce (fn [doc comp]
                  (let [[comp-name & args] (-> (str/replace comp #"\@|\{|\}" "")
                                               (str/split #" "))
                        [comp-args comp-body] (parse-component comp-name)]
                    (->> (zipmap comp-args args)
                         (reduce-kv
                          #(str/replace % (re-pattern (str "\\@\\{" %2 "\\}")) %3)
                          comp-body)
                         (str/replace doc comp))))
                file components)]
    (if (re-find #"\@\{.*\}" expanded)
      (expand-components expanded)
      expanded)))

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
