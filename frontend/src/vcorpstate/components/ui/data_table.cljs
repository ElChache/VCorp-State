(ns vcorpstate.components.ui.data-table
  "Reusable data table component")

(defn table-header
  "Table header component.
  
  Props:
  - columns: Vector of maps with :key and :label"
  [columns]
  [:thead {:class "bg-gray-50"}
   [:tr
    (for [col columns]
      ^{:key (:key col)}
      [:th {:class "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}
       (:label col)])]])

(defn table-row
  "Table row component.
  
  Props:
  - row-data: Map - data for this row
  - columns: Vector - column definitions
  - render-cell: Function - (fn [column-key row-data] ...) to render cell content"
  [row-data columns render-cell]
  [:tr {:class "hover:bg-gray-50"}
   (for [col columns]
     ^{:key (str (:key row-data) "-" (:key col))}
     [:td {:class "px-4 py-3 text-sm"}
      (render-cell (:key col) row-data)])])

(defn data-table
  "Generic data table component.
  
  Props:
  - data: Vector - array of data objects
  - columns: Vector - column definitions with :key and :label
  - render-cell: Function - (fn [column-key row-data] ...) to render cell content
  - empty-message: String - message when no data
  - row-key: Function - (fn [row-data] ...) to generate unique row keys"
  [{:keys [data columns render-cell empty-message row-key]
    :or {empty-message "No data available"
         row-key :id}}]
  (if (seq data)
    [:div {:class "border border-gray-200 rounded-lg overflow-hidden"}
     [:table {:class "min-w-full divide-y divide-gray-200"}
      [table-header columns]
      [:tbody {:class "bg-white divide-y divide-gray-200"}
       (for [row data]
         ^{:key (row-key row)}
         [table-row row columns render-cell])]]]
    [:div {:class "text-center py-8 text-gray-500"}
     [:p empty-message]]))