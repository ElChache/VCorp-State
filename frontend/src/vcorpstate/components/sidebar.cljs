(ns vcorpstate.components.sidebar
  (:require [re-frame.core :as rf]
            [vcorpstate.components.agents-section :refer [agents-section]]
            [vcorpstate.components.sidebar-utils :refer [sidebar-content-item]]))

(defn sidebar-icon-button
  "Single sidebar icon button component"
  [{:keys [title icon section hover-class]}]
  [:button {:class (str "mx-1 p-1 " hover-class " text-gray-600 rounded transition-colors mb-1 flex items-center justify-center w-16 h-16")
            :title title
            :on-click #(rf/dispatch [:toggle-sidebar-section section])}
   [:div {:class "text-center font-bold" :style {:font-size "34px"}} icon]])


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
  [:div {:class "bg-white shadow-lg border-r border-gray-200 flex flex-col"
         :style {:width "66px" :height "100vh"}}
   [:div {:class "flex-1 flex flex-col pt-4"}
    [sidebar-icon-button {:title "Agents" :icon "👥" :section :agents :hover-class "hover:bg-blue-50 hover:text-blue-600"}]
    [sidebar-icon-button {:title "Tickets" :icon "🎫" :section :tickets :hover-class "hover:bg-green-50 hover:text-green-600"}]
    [sidebar-icon-button {:title "Documents" :icon "📄" :section :documents :hover-class "hover:bg-purple-50 hover:text-purple-600"}]]])

(defn sidebar-expanded-panel
  "Expandable content panel that slides out from icons"
  [expanded-section]
  [:div {:class "bg-white shadow-lg border-r border-gray-200 transition-all duration-300 overflow-hidden"
         :style {:width (if (some? expanded-section) "214px" "0px") :height "100vh" :overflow-y "scroll"}
         :on-click (fn [e] (.stopPropagation e))}
   (when (some? expanded-section)
     [:div {:class "p-4 h-full flex flex-col" :style {:width "214px"}}
      (case expanded-section
        :agents [agents-section]
        :tickets [sidebar-content-section "Tickets" ["#001 - Setup issue" "#002 - Bug report" "#003 - Feature request"]]
        :documents [sidebar-content-section "Documents" ["README.md" "API_DOCS.md" "CHANGELOG.md"]]
        nil)])])

(defn sidebar
  "Complete sidebar component with icons and expandable panel"
  []
  (let [expanded-section @(rf/subscribe [:expanded-sidebar-section])]
    [:div {:class "flex"}
     [sidebar-icons-column]
     [sidebar-expanded-panel expanded-section]]))