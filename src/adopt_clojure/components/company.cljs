(ns adopt-clojure.components.company)

(defn company [& {:keys [logo quote source]}]
  [:div 
   [:img {:width 120 :src logo}]
   [:div
    [:i quote]
    [:p source]]])
