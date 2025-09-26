(ns vcorpstate.components.document-dialog
  "Document collection status dialog component"
  (:require [re-frame.core :as rf]
            [vcorpstate.components.ui.dialog-modal :as modal]
            [vcorpstate.components.ui.status-pill :as pill]
            [vcorpstate.components.ui.data-table :as table]))

(defn- calculate-collection-status
  "Calculate overall collection status based on document statuses"
  [documents]
  (if (and (seq documents) 
           (every? #(= (:status %) "ready") documents))
    "ready"
    "not ready"))

(defn- collection-status-pill
  "Non-clickable status pill for collection overall status"
  [status]
  (let [is-ready? (= status "ready")
        classes (str "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium "
                    (if is-ready?
                      "bg-green-100 text-green-800"
                      "bg-gray-100 text-gray-800"))]
    [:span {:class classes}
     (if is-ready? "Ready" "Not Ready")]))

(defn- documents-table
  "Table showing all documents in the collection with their status"
  [documents]
  (let [columns [{:key :slug :label "Document"}
                 {:key :status :label "Status"}]
        render-cell (fn [column-key row-data]
                      (case column-key
                        :slug [:span {:class "font-medium text-gray-900"} (:slug row-data)]
                        :status [pill/status-pill {:document-slug (:slug row-data)
                                                   :status (or (:status row-data) "not ready")}]))]
    [table/data-table {:data documents
                       :columns columns
                       :render-cell render-cell
                       :empty-message "No documents in this collection"
                       :row-key :slug}]))

(defn document-dialog
  "Dialog for viewing and managing document collection status.
  
  Shows:
  - Collection name and overall status (calculated from documents)
  - Table of all documents with clickable status pills
  - Close button to dismiss dialog"
  []
  (let [is-open? @(rf/subscribe [:document-dialog-open?])
        selected-document-slug @(rf/subscribe [:selected-document])
        collections-by-slug @(rf/subscribe [:data/collections-with-stats])
        collection (get collections-by-slug selected-document-slug)
        documents (when collection (:documents collection))
        collection-status (calculate-collection-status documents)]
    
    (when is-open?
      [modal/dialog-overlay {:on-backdrop-click #(rf/dispatch [:hide-document-dialog])}
       
       [modal/dialog-header {:title (str "Collection: " selected-document-slug)}]
       
       ;; Collection status section
       [:div {:class "mb-6"}
        [:div {:class "flex items-center gap-2"}
         [:span {:class "text-sm text-gray-600"} "Status:"]
         [collection-status-pill collection-status]]]
       
       ;; Documents section
       [:div {:class "mb-6"}
        [:h3 {:class "text-md font-medium text-gray-900 mb-3"} "Documents"]
        [documents-table documents]]
       
       [modal/dialog-actions
        [modal/dialog-button {:on-click #(rf/dispatch [:hide-document-dialog])}
         "Close"]]])))