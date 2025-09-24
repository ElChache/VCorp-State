(ns vcorpstate.components.main-content
  (:require [vcorpstate.components.header :as header]))

(defn workspace-content
  "Main workspace content area"
  [project]
  [:div {:class "h-full p-4"}
   [header/project-title-header project]])

(defn main-content-area
  "Main content area with proper layout"
  [project]
  [:div {:class "flex-1 flex flex-col min-h-0"}
   [:div {:class "flex-1 overflow-auto"}
    [:div {:class "h-full"}
     [workspace-content project]]]])