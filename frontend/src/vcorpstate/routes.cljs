(ns vcorpstate.routes
  (:require [re-frame.core :as rf]
            [clojure.string :as str]))

(defn parse-url 
  ([]
   (parse-url js/window.location.hash))
  ([url]
   "Parse URL and return route info"
   (let [path (or url js/window.location.hash)
         path (if (str/starts-with? path "#") (subs path 1) path)]
     (cond
       (or (empty? path) (= path "/")) {:name :home}
       (str/starts-with? path "/project/") 
       (let [id-str (-> path (str/split #"/") last)]
         (if-let [id (parse-long id-str)]
           {:name :project :params {:id id}}
           {:name :home}))
       :else {:name :home}))))

(defn handle-route-change []
  "Handle route changes and load data based on route"
  (let [route (parse-url)]
    (js/console.log "Route changed to:" route)
    ;; Set the route in db first
    (rf/dispatch [:set-route route])
    
    ;; Load data based on route
    (case (:name route)
      :home (do
              (js/console.log "Loading home view, dispatching :fetch-projects")
              (rf/dispatch [:set-current-view :project-selector])
              (rf/dispatch [:fetch-projects]))
      :project (let [project-id (get-in route [:params :id])]
                 (js/console.log "Loading project view for ID:" project-id)
                 (rf/dispatch [:set-current-view :main])
                 (rf/dispatch [:set-selected-project project-id])
                 (rf/dispatch [:graph/load-initial-data project-id])
                 (rf/dispatch [:websocket/connect project-id])))))

(defn navigate-to-route! [route]
  "Navigate to a route and update browser history"
  (let [hash (case (:name route)
               :home "#/"
               :project (str "#/project/" (get-in route [:params :id])))]
    (set! js/window.location.hash hash)
    (handle-route-change)))

(defn init-routes! []
  "Initialize routing"
  ;; Handle initial page load
  (handle-route-change)
  
  ;; Handle browser back/forward buttons and hash changes
  (.addEventListener js/window "popstate" handle-route-change)
  (.addEventListener js/window "hashchange" handle-route-change))