(ns adopt-clojure.components.sidebar-item)

(defn sidebar-item [name link]
  [:div {:style {:padding "1em"} :class "headling-link"}
   [:a {:href link :style {:color 'white :text-decoration 'none}} name]])