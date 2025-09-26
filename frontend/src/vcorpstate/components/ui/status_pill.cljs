(ns vcorpstate.components.ui.status-pill
  "Reusable status pill component"
  (:require [re-frame.core :as rf]))

(defn status-pill
  "A clickable status pill that toggles between ready/not ready states.
  
  Props:
  - document-slug: String - unique identifier for the document
  - status: String - current status ('ready' or 'not ready')
  - clickable?: Boolean - whether the pill is clickable (default: true)
  - on-click: Function - optional custom click handler"
  [{:keys [document-slug status clickable? on-click]
    :or {clickable? true}}]
  (let [is-ready? (= status "ready")
        pill-classes (str "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border transition-colors duration-200 "
                         (if is-ready?
                           "bg-green-100 text-green-800 border-green-200 hover:bg-green-50"
                           "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-50")
                         (when clickable? " cursor-pointer"))
        click-handler (or on-click 
                          (when clickable?
                            #(rf/dispatch [:toggle-document-status document-slug])))]
    [:span {:class pill-classes
            :on-click click-handler}
     (if is-ready? "Ready" "Not Ready")]))