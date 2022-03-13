(ns adopt-clojure.pages.index
  (:require [adopt-clojure.components.usage :as cu]
            [adopt-clojure.components.company :as cc]
            [adopt-clojure.components.examples :as ce]))

(defn index-page []
  [:div
   [:section {:style {:padding "5em 20%"}}
    [:h1 {:style {:margin-top 0}} "Why Clojure?"]
    [:div {:style {:display "grid" :grid-template-columns "32% 1% 32% 1% 32%" :gap "1em"}}
     [:div
      [:h3 "Reliable"]
      [:p "Clojure's immutable data structures and thread-safe mutation allow you to write robust, scalable code. Clojure's contract system promotes natural code growth without maintenance pains."]]
     [:hr {:style {:width 0 :height "100%"}}]
     [:div
      [:h3 "Pragmatic"]
      [:p "Clojure aims to get stuff done. Eliminate boilerplate, take advantage of libraries, develop quickly from the REPL. Clojure gets out of your way so you can get stuff done."]]
     [:hr {:style {:width 0 :height "100%"}}]
     [:div 
      [:h3 "Simple"]
      [:p "Clojure is a very simple language. Follow it's philosophy of treating everything as maps and vectors, and profit from countless functions to work on them."]]]]
   [ce/examples]
   [:section {:class 'uses :style {:padding "6em 20%" :background "#9DAAB5"}}
    [:h1 "Use Clojure For..."]
    [:div {:style {:display 'grid :grid-template-columns "32% 32% 32%" :gap "1em"}}
     [cu/usage 
      :name "Web Applications"
      :color "#0E73D3"
      :icon "https://cdn-icons-png.flaticon.com/512/1336/1336494.png"
      :desc "Use Clojure in the backend and ClojureScript in the front to build highly performant and reliable web applications, taking advantage of first-in-class tools and technologies."
      :pkgs '{reagent "https://github.com/reagent-project/reagent"
              re-frame "https://github.com/Day8/re-frame"
              shadow-cljs "https://github.com/thheller/shadow-cljs"
              compojure "https://github.com/weavejester/compojure"
              ring "https://github.com/ring-clojure/ring"}]
     [cu/usage 
      :name "Data Science"
      :color "#7E64B4"
      :icon "https://static.thenounproject.com/png/2245695-200.png"
      :desc "Clojure's excellent data structures and sequence interface make it a natural choice for data science. Clojure allows you to easily model your domain data and work with it in a seamless interactive environment."
      :pkgs '{incanter "https://github.com/incanter/incanter"
              quil "http://quil.info/"
              neanderthal "https://neanderthal.uncomplicate.org/"
              specter "https://github.com/redplanetlabs/specter"}]
     [cu/usage 
      :name "Command-Line Interfaces"
      :color "#EF5BA1"
      :icon "https://static.thenounproject.com/png/133029-200.png"
      :desc "Taking advantage of GraalVM, Clojure can be compiled to native binaries in just a couple simple steps, allowing for 0 startup time applications. Quickly develop your next command line tool using Clojure."
      :pkgs '{babashka "https://github.com/borkdude/babashka"
              cli-matic "https://github.com/l3nz/cli-matic"
              clj-easy "https://github.com/clj-easy/graal-build-time"
              tools.cli "https://github.com/clojure/tools.cli"
              pretty "https://github.com/AvisoNovate/pretty"}]]]
   [:section {:class "production"}
    [:h1 "Who's using Clojure?"]
    [cc/company
     :logo "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Puppet_transparent_logo.svg/1200px-Puppet_transparent_logo.svg.png"
     :quote "“Clojure is a functional programming language from top to bottom. This means that code written in Clojure is very modular, composable, reusable and easy to reason about.”"
     :source "Chris Price, Software Engineer"]
    [cc/company
     :logo "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/2560px-Walmart_logo.svg.png"
     :quote "“Our Clojure system just handled its first Walmart black Friday and came out without a scratch.”"
     :source "Anthony Marcar, Senior Architect"]
    [cc/company
     :logo "https://www.thoughtworks.com/etc.clientlibs/thoughtworks/clientlibs/clientlib-site/resources/images/thoughtworks-logo.svg"
     :quote "“We discussed the existing Clojure community, the maturity of the language itself and the momentum we saw in the industry. Companies are seeing speed to market deliveries ... based on Clojure.”"
     :source "Dave Elliman, Head of Technology"]
    [:div {:style {:display 'flex :flex-wrap 'wrap :justify-content 'center :padding "3em 120px"}}
     ; https://www.reddit.com/r/programming/comments/af8vp4/clojure_at_apple_with_david_taylor/
     [:img {:height "40" :src "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"}]
     ; https://news.ycombinator.com/item?id=18345341
     [:img {:height "40" :src "https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"}]
     ; https://www.reddit.com/r/Clojure/comments/8l8zax/clojure_is_coming_to_adobe/
     [:img {:height "40" :src "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.png/1200px-Adobe_Corporate_Logo.png"}]
     ; https://www.reddit.com/r/Clojure/comments/m5s0f1/job_cisco_is_hiring_remote_us/
     [:img {:height "40" :src "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/2560px-Cisco_logo_blue_2016.svg.png"}]
     [:img {:height "40" :src "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Circleci-icon-logo.svg/1200px-Circleci-icon-logo.svg.png"}]
     [:img {:height "40" :src "https://lever-client-logos.s3-us-west-2.amazonaws.com/ed85a5b5-f81d-4f67-b11d-371c5bade52a-1586410063682.png"}]
     [:img {:height "40" :src "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Nubank_logo.svg/2560px-Nubank_logo.svg.png"}]
     [:img {:height "40" :src "https://d2tbsidvy9xjt9.cloudfront.net/logos/reify-health-square/svg-png.png"}]
     ; https://developers.soundcloud.com/blog/building-clojure-services-at-scale
     [:img {:height "40" :src "https://logos-world.net/wp-content/uploads/2020/10/SoundCloud-Logo.png"}]
     [:img {:height "40" :src "http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"}]
     ]
    ]
   '[:footer
     [:div {:style {:display flex :flex-direction column}}
      [:h3 "Community"]
      [:div {:style {:display flex :gap "0.5em"}}
       [:a {:href "https://twitter.com/cognitect"} [:img {:height "30" :src "https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"}]]                
       [:a {:href "https://www.youtube.com/user/ClojureTV/videos"} [:img {:height "30" :src "http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c545.png"}]]
       [:a {:href "http://clojurians.net/"} [:img {:height "30" :src "https://cdn.freebiesupply.com/logos/large/2x/slack-icon.svg"}]]
       [:a {:href "https://discord.gg/discljord"} [:img {:height "30" :src "https://cdn.freebiesupply.com/logos/thumbs/2x/discord-logo.png"}]]
       [:a {:href "https://github.com/clojure/"} [:img {:height "30" :src "https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Github-512.png"}]]]
      [:a Resources]
      [:a Contributing]
      [:a Companies]]
     [:div {:style {display flex flex-direction column}}
      [:h3 Documentation]
      [:a Learning]
      [:a Reference]
      [:a Cheatsheet]
      [:a API]
      [:a Guides]
      [:a "Libraries & Tools"]]
     [:div {:style {display flex flex-direction column}}
      [:h3 Updates]
      [:a News]
      [:a Events]
      [:h3 Code]
      [:a Releases]
      [:a Source]]]])