(ns vcorpstate.components.sidebar-utils)

(defn sidebar-content-item
  "Single item in sidebar content panel"
  [text]
  [:div {:class "text-sm text-gray-700 cursor-pointer hover:bg-gray-50 p-2 rounded"}
   text])