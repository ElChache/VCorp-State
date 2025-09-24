(ns vcorpstate.views
  (:require [re-frame.core :as rf]
            [vcorpstate.views.main :as main]
            [vcorpstate.views.project-main :as project-main]))

(defn app []
  (let [current-view @(rf/subscribe [:current-view])]
    (case current-view
      :main [project-main/project-main-view]
      :project-selector [main/project-selector]
      [main/project-selector])))