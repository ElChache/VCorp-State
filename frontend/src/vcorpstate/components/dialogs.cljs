(ns vcorpstate.components.dialogs
  (:require [vcorpstate.components.launch-agents-dialog :refer [launch-agents-dialog]]
            [vcorpstate.components.create-project-dialog :refer [create-project-dialog]]))

(defn dialogs
  "Container for all dialogs"
  []
  [:div
   [launch-agents-dialog]
   [create-project-dialog]])