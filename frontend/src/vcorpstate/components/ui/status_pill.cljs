(ns vcorpstate.components.ui.status-pill
  "Reusable status pill component"
  (:require [re-frame.core :as rf]))

(defn status-badge
  "A non-clickable status badge that shows ready/not ready state.
  
  Props:
  - status: String - current status ('ready' or 'not ready')"
  [{:keys [status]}]
  (let [is-ready? (= status "ready")
        badge-classes (str "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium "
                          (if is-ready?
                            "bg-green-100 text-green-800"
                            "bg-gray-100 text-gray-800"))]
    [:span {:class badge-classes}
     (if is-ready? "Ready" "Not Ready")]))