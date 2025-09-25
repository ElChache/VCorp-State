(ns vcorpstate.components.dialogs
  (:require [vcorpstate.components.launch-agents-dialog :refer [launch-agents-dialog]]))

(defn dialogs
  "Container for all dialogs"
  []
  [:div
   [launch-agents-dialog]])