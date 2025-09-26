(ns vcorpstate.components.graph
  (:require [re-frame.core :as rf]))

(defn get-collection-border-class
  "Returns CSS class for collection border based on whether it has a path"
  [collections-by-slug slug]
  (let [collection (get collections-by-slug slug)
        has-path? (and collection (:path collection))]
    (if has-path? "collection-with-path" "collection-without-path")))

(defn render-job-level
  "Renders a single level of jobs horizontally (side by side)"
  [jobs-map jobs-by-slug collections-by-slug level]
  (when (not-empty jobs-map)
    [:div {:class "mb-4"}
     ;; Current level jobs rendered horizontally and centered
     [:div {:class "flex justify-center"
            :style {:gap "0.5rem"}}
      (map (fn [[job-slug _children]]
             (let [job (get jobs-by-slug job-slug)]
               ^{:key (str level "-" job-slug)}
               [:div {:class "flex flex-col items-center"}
                ;; Input documents (above job) - only for level 0 (root jobs)
                (when (and (= level 0) (not-empty (:inputs job)))
                  [:div {:class "flex justify-center mb-1"
                         :style {:gap "0.5rem"}}
                   (map (fn [input]
                          (let [collection (get collections-by-slug (:slug input))
                                border-class (get-collection-border-class collections-by-slug (:slug input))
                                all-ready? (:all-documents-ready? collection false)
                                ready-count (:ready-documents collection 0)
                                total-count (:total-documents collection 0)
                                bg-class (if all-ready? "bg-blue-200" "bg-blue-100")]
                            ^{:key (str job-slug "-input-" (:slug input))}
                            [:div {:class (str bg-class " rounded px-3 py-2 text-sm cursor-pointer " border-class)
                                   :on-click #(rf/dispatch [:show-document-dialog (:slug input)])}
                             [:div {:class "font-medium text-blue-800"}
                              (str (:slug input) " " ready-count "/" total-count)]]))
                        (:inputs job))])
                
                ;; Job box
                [:div {:class "bg-orange-100 border border-orange-400 rounded px-3 py-2 text-sm"}
                 [:div {:class "font-medium text-orange-800"}
                  (or (:name job) job-slug)]]
                
                ;; Output documents (below job)
                (when (not-empty (:outputs job))
                  [:div {:class "flex justify-center mt-1"
                         :style {:gap "0.5rem"}}
                   (map (fn [output]
                          (let [collection (get collections-by-slug (:slug output))
                                border-class (get-collection-border-class collections-by-slug (:slug output))
                                all-ready? (:all-documents-ready? collection false)
                                ready-count (:ready-documents collection 0)
                                total-count (:total-documents collection 0)
                                bg-class (if all-ready? "bg-green-200" "bg-green-100")]
                            ^{:key (str job-slug "-output-" (:slug output))}
                            [:div {:class (str bg-class " rounded px-3 py-2 text-sm cursor-pointer " border-class)
                                   :on-click #(rf/dispatch [:show-document-dialog (:slug output)])}
                             [:div {:class "font-medium text-green-800"}
                              (str (:slug output) " " ready-count "/" total-count)]]))
                        (:outputs job))])]))
           jobs-map)]
     ;; Recursively render next level - collect all children from current level
     (let [all-children (apply merge (vals jobs-map))]
       [render-job-level all-children jobs-by-slug collections-by-slug (inc level)])]))

(defn squad-column
  "Renders a single squad column with title and jobs"
  [squad-data]
  (let [{:keys [squad jobs]} squad-data]
    [:div {:class "flex-shrink-0 min-w-0 mx-2"}
     [:div {:class "bg-white border border-gray-200 rounded-lg shadow-sm min-h-96"}
      ;; Squad title - subtle like in reference
      [:div {:class "px-3 py-2 border-b border-gray-100"}
       [:h3 {:class "text-xs font-medium text-gray-400 uppercase tracking-wide"}
        (str squad " Squad")]]
      
      ;; Jobs content area
      [:div {:class "p-3"}
       (let [jobs-by-slug @(rf/subscribe [:data/jobs-by-slug])
             collections-with-stats @(rf/subscribe [:data/collections-with-stats])]
         [render-job-level jobs jobs-by-slug collections-with-stats 0])]]]))

(defn graph-component
  []
  (let [loading? @(rf/subscribe [:app/loading?])
        graph-structure @(rf/subscribe [:data/graph-structure])
        has-graph-structure? (and graph-structure (pos? (count graph-structure)))]
    [:div {:class "relative w-full h-full bg-gray-50 overflow-auto"}
     (cond 
       loading? [:div {:class "flex items-center justify-center h-full"}
                 [:div {:class "text-gray-600"} "Loading project data..."]]
       has-graph-structure? 
       [:div {:class "p-4"}
        ;; Horizontal scrollable container for columns
        [:div {:class "flex items-start overflow-x-auto pb-4"}
         (map-indexed 
           (fn [idx squad-data]
             ^{:key (str "squad-" idx "-" (:squad squad-data))}
             [squad-column squad-data])
           graph-structure)]]
       :else [:div {:class "flex items-center justify-center h-full"}
              [:div {:class "text-gray-500"} "No project data available"]])]))