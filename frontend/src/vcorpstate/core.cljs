(ns vcorpstate.core
  (:require [reagent.dom.client :as rdom]
            [re-frame.core :as rf]
            [vcorpstate.events]
            [vcorpstate.subs]
            [vcorpstate.views :as views]
            [vcorpstate.routes :as routes]))

(defonce root (rdom/create-root (.getElementById js/document "app")))

(defn mount-root []
  (rf/clear-subscription-cache!)
  (rdom/render root [views/app]))

(defn ^:export init! []
  (rf/dispatch-sync [:initialize-db])
  (routes/init-routes!)
  (mount-root))