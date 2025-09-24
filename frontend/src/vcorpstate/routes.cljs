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
  "Handle route changes and dispatch appropriate events"
  (let [route (parse-url)]
    (case (:name route)
      :home (rf/dispatch [:navigate-to-home])
      :project (rf/dispatch [:navigate-to-project-by-id (get-in route [:params :id])]))))

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