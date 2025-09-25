(ns vcorpstate.views
  (:require [re-frame.core :as rf]
            [vcorpstate.views.main :as main]
            [vcorpstate.views.project-main :as project-main]
            [vcorpstate.components.dialogs :as dialogs]))

(defn app []
  (let [current-view @(rf/subscribe [:current-view])]
    [:div
     (case current-view
       :main [project-main/project-main-view]
       :project-selector [main/project-selector]
       [main/project-selector])
     [dialogs/dialogs]]))