(ns vcorpstate.components.ui.dialog-modal
  "Reusable modal dialog component")

(defn dialog-overlay
  "Modal overlay that handles backdrop clicks.
  
  Props:
  - on-backdrop-click: Function - handler for backdrop clicks
  - children: Vector - child components to render inside modal"
  [{:keys [on-backdrop-click]} & children]
  [:div {:class "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
         :on-click on-backdrop-click}
   (into [:div {:class "bg-white rounded-lg shadow-xl p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto"
                :on-click (fn [e] (.stopPropagation e))}]
         children)])

(defn dialog-header
  "Dialog header with title and optional subtitle.
  
  Props:
  - title: String - main title
  - subtitle: String - optional subtitle"
  [{:keys [title subtitle]}]
  [:div {:class "mb-6"}
   [:h2 {:class "text-lg font-semibold text-gray-900 mb-2"} title]
   (when subtitle
     [:p {:class "text-sm text-gray-600"} subtitle])])

(defn dialog-actions
  "Dialog action buttons container.
  
  Props:
  - children: Vector - button components"
  [& children]
  [:div {:class "flex justify-end gap-3 mt-6"}
   children])

(defn dialog-button
  "Standard dialog button.
  
  Props:
  - variant: Keyword - :primary or :secondary (default)
  - on-click: Function - click handler
  - disabled?: Boolean - whether button is disabled
  - children: String or Vector - button content"
  [{:keys [variant on-click disabled?]
    :or {variant :secondary}}
   & children]
  (let [base-classes "px-4 py-2 rounded-md font-medium text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
        variant-classes (case variant
                          :primary "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
                          :secondary "bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-500")
        disabled-classes (when disabled? " opacity-50 cursor-not-allowed")]
    [:button {:class (str base-classes " " variant-classes disabled-classes)
              :on-click on-click
              :disabled disabled?}
     children]))