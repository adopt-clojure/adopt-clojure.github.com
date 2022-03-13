(ns adopt-clojure.components.examples)

(defn examples []
  [:section {:class 'examples}])

(comment 

; Create simple pipelines of data to clearly express any transformation.
user=> (->> [1 2 3 4 5]
            (map inc)
            (filter even?)
            (apply +))
12

; Write multi-threaded code with thread-safe wrappers so values are always synchronized.
user=> (def x (atom 0))
user=> (repeatedly 10
        (fn [] (future (swap! x inc))))
user=> @x
10 

; Define simple macros to gain access to a whole new layer of abstraction.
user=> (defmacro unless [condition & body]
         (list 'if condition 
               (cons 'do body)))
user=> (unless false (println "false!"))
false!
  
)
