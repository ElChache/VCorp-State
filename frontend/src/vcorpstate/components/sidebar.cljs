(ns vcorpstate.components.sidebar
  (:require [re-frame.core :as rf]
            [vcorpstate.routes :as routes]))

(defn sidebar-back-button
  "Back button component for sidebar"
  []
  [:div {:class "h-16 flex items-center justify-center border-b border-gray-200"}
   [:button {:class "p-1 hover:bg-gray-100 rounded transition-colors w-16 h-12 flex items-center justify-center"
             :on-click #(routes/navigate-to-route! {:name :home})}
    [:div {:class "text-gray-600 font-bold text-center" :style {:font-size "34px"}} "←"]]])

(defn sidebar-icon-button
  "Single sidebar icon button component"
  [{:keys [title icon section hover-class]}]
  [:button {:class (str "mx-1 p-1 " hover-class " text-gray-600 rounded transition-colors mb-1 flex items-center justify-center w-16 h-16")
            :title title
            :on-click #(rf/dispatch [:toggle-sidebar-section section])}
   [:div {:class "text-center font-bold" :style {:font-size "34px"}} icon]])

(defn sidebar-content-item
  "Single item in sidebar content panel"
  [text]
  [:div {:class "text-sm text-gray-700 cursor-pointer hover:bg-gray-50 p-2 rounded"} text])

(defn sidebar-content-section
  "Content section for expanded sidebar"
  [title items]
  [:div
   [:h3 {:class "font-semibold text-gray-800 mb-3"} title]
   [:div {:class "space-y-2"}
    (for [item items]
      ^{:key item} [sidebar-content-item item])]])

(defn sidebar-icons-column
  "Fixed left column with navigation icons"
  []
  [:div {:class "bg-white shadow-lg border-r border-gray-200"
         :style {:position "absolute" :top "0" :left "0" :width "66px" :height "100vh" :z-index "100"}}
   [sidebar-back-button]
   [:div {:class "flex-1 flex flex-col pt-4"}
    [sidebar-icon-button {:title "Agents" :icon "👥" :section :agents :hover-class "hover:bg-blue-50 hover:text-blue-600"}]
    [sidebar-icon-button {:title "Tickets" :icon "🎫" :section :tickets :hover-class "hover:bg-green-50 hover:text-green-600"}]
    [sidebar-icon-button {:title "Documents" :icon "📄" :section :documents :hover-class "hover:bg-purple-50 hover:text-purple-600"}]]])

(defn sidebar-expanded-panel
  "Expandable content panel that slides out from icons"
  [expanded-section]
  (when (some? expanded-section)
    [:div {:class "bg-white shadow-lg border-r border-gray-200 transition-all duration-300"
           :style {:position "absolute" :top "0" :left "66px" :width "214px" :height "100vh" :z-index "90"}
           :on-click (fn [e] (.stopPropagation e))}
     [:div {:class "p-4"}
      (case expanded-section
        :agents [sidebar-content-section "Agents" ["Manolo" "Juan" "Carlos"]]
        :tickets [sidebar-content-section "Tickets" ["#001 - Setup issue" "#002 - Bug report" "#003 - Feature request"]]
        :documents [sidebar-content-section "Documents" ["README.md" "API_DOCS.md" "CHANGELOG.md"]]
        nil)]]))

(defn sidebar
  "Complete sidebar component with icons and expandable panel"
  []
  (let [expanded-section @(rf/subscribe [:expanded-sidebar-section])]
    [:div
     [sidebar-icons-column]
     [sidebar-expanded-panel expanded-section]]))