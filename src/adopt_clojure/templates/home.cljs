(ns adopt-clojure.templates.home
  (:require [adopt-clojure.components.sidebar-item :as cb]
            [adopt-clojure.components.search :as cs]))

(defn home-template [content]
  [:div {:style {:display 'flex :flex-direction 'column}}
   [:div {:style {:background "linear-gradient(90deg, #0F2242 0%, #2452A1 100%)" :color 'white}}
    [:div {:style {:display 'flex :justify-content 'space-between :padding "1em"}}
     [:img {:src "https://clojure.org/images/clojure-logo-120b.png" :height 60}]
     [:div {:style {:display 'flex :justify-content 'space-between}}
      [cb/sidebar-item "Install" "#"]
      [cb/sidebar-item "Learning" "#"]
      [cb/sidebar-item "Documentation" "https://clojuredocs.org"]
      [cb/sidebar-item "Packages" "https://clojuredocs.org"]
      [cb/sidebar-item "Community" "#"]
      [cb/sidebar-item "News" "#"]
      [cs/search]]]
   [:section {:class 'heading :style {:color 'white :display 'grid :align-items 'center :padding "0 20% 5em 20%" :grid-template-columns "40% 60%"}}
    [:div
     [:div {:style {:display 'flex :align-items 'center}}
      [:h1 {:style {:font-size "4em" :margin "1rem 0"}}
       "Clo" [:i "j"] "ure"]]
     [:ul {:class 'tags}
      [:li [:h1 "Open-source"]]
      [:li [:h1 "Simple and easy to learn"]]
      [:li [:h1 "Fun"]]]]
    [:div
     [:h1 {:style {:text-align 'right}}
      "A robust and practical language built to deal with the increasing complexity of today’s software."]]]]
   [:div {:class "content" :style {:width "100%"}}
    content]])