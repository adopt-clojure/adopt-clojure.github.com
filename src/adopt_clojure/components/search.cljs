(ns adopt-clojure.components.search)

(defn search []
  [:div
   [:div {:style {:display 'flex :border-radius "5px" :align-items 'center :background-color "#E9E9E9"}}
    [:input {:type 'text :placeholder "Search..." :style {:padding "1em" :border 'none :border-radius "5px"}}]
    [:img {:height 30 :style {:margin "5px"} :src "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/1200px-Magnifying_glass_icon.svg.png"}]]
   [:a {:href "./community" :style {:color 'white :text-decoration 'none :font-size "0.8rem"}}
    "Can't find what you're looking for?"]])
