(ns adopt-clojure.components.usage)

(defn usage [& {:keys [name icon desc color pkgs]}]
  [:div {:style {:border-bottom (str "4px solid " color)}}
   [:div {:class 'heading}
    [:img {:height 30 :src icon}]
    [:h3 name]]
   [:p desc]
   [:div {:class 'packages}
    [:strong "Using..."]
    (map-indexed 
     (fn [i [name link]] 
       [:span {:key i :style {:border "thin solid black" :padding "2px 5px" :margin-bottom "3px"}}
        [:a {:href link} name]])
     pkgs)]])