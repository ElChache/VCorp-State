(ns vcorpstate.graph
  "Graph builder functions - pure functions that build React Flow nodes from state"
  (:require [clojure.set]))

;; ====================================
;; LAYOUT CONSTANTS
;; ====================================

(def squad-columns
  "Squad column layout - 7 independent vertical columns"
  [{:slug "human" :name "Human Director" :x 100}
   {:slug "pd" :name "Product Designer" :x 250}
   {:slug "arch" :name "Architect" :x 400} 
   {:slug "fe" :name "FE Squad" :x 550}
   {:slug "be" :name "BE Squad" :x 700}
   {:slug "ai" :name "AI Squad" :x 850}
   {:slug "qa" :name "QA Squad" :x 1000}])

(def node-colors
  {:collection-input "#3B82F6"    ; Blue - input collections
   :collection-output "#10B981"   ; Green - output collections  
   :job "#F59E0B"                 ; Orange - jobs/processing
   :job-completed "#059669"       ; Dark green - completed jobs
   :job-paused "#6B7280"})        ; Gray - paused jobs

;; ====================================
;; SIMPLE TREE BUILDING ALGORITHM  
;; ====================================

;; Simple lookup maps for navigation
(defn create-collection-lookup-maps
  "Create maps for easy navigation: collection → producer job, collection → consumer jobs"
  [squad-jobs]
  (let [collection-to-producer (into {}
                                    (for [job squad-jobs
                                          output-slug (map :slug (:outputs job))]
                                      [output-slug job]))
        collection-to-consumers (reduce (fn [acc job]
                                         (reduce (fn [acc2 input-slug]
                                                  (update acc2 input-slug (fnil conj []) job))
                                                acc (map :slug (:inputs job))))
                                       {} squad-jobs)]
    {:collection-to-producer collection-to-producer
     :collection-to-consumers collection-to-consumers}))

;; Simple first job detection (the key algorithm!)
(defn find-first-jobs-in-column
  "Find the beginning jobs using the simple rule"
  [squad-jobs all-jobs-by-squad is-first-column?]
  (let [;; Get all outputs produced by ANY job (for first column detection)
        all-outputs-by-any-job (set (mapcat (fn [jobs] (mapcat #(map :slug (:outputs %)) jobs))
                                           (vals all-jobs-by-squad)))]
    (if is-first-column?
      ;; Column 1: jobs whose inputs are NOT outputs of any other job
      (filter (fn [job]
               (let [input-slugs (map :slug (:inputs job))]
                 (not-any? all-outputs-by-any-job input-slugs)))
             squad-jobs)
      ;; Other columns: jobs whose inputs ARE outputs from ANY other column
      (filter (fn [job]
               (let [input-slugs (set (map :slug (:inputs job)))]
                 (some all-outputs-by-any-job input-slugs)))
             squad-jobs))))

;; Simple tree building by following the chain
(defn build-simple-tree-chain
  "Build tree by following job → outputs → consuming jobs chain"
  [first-jobs lookup-maps]
  (let [{:keys [collection-to-consumers]} lookup-maps
        build-chain (fn build-chain-fn [job visited]
                     (if (contains? visited (:id job))
                       [] ; Avoid cycles
                       (let [visited' (conj visited (:id job))
                             outputs (map :slug (:outputs job))
                             next-jobs (mapcat #(get collection-to-consumers % []) outputs)]
                         (cons job (mapcat #(build-chain-fn % visited') next-jobs)))))]
    (distinct (mapcat #(build-chain % #{}) first-jobs))))

;; Position jobs and collections in workflow order
(defn position-workflow-chain
  "Position jobs and collections in proper workflow order: input → job → output"
  [job-chain column-x]
  (let [y-start 50
        y-step 80]
    (mapcat (fn [idx job]
              (let [base-y (+ y-start (* idx y-step 3))  ; Space for input → job → output
                    input-collections (map :slug (:inputs job))
                    output-collections (map :slug (:outputs job))]
                (concat
                  ;; Input collections first
                  (map-indexed (fn [i-idx input-slug]
                                {:type :collection
                                 :id (str "collection-" input-slug)
                                 :position {:x column-x :y (+ base-y (* i-idx 25))}
                                 :slug input-slug})
                              input-collections)
                  ;; Job in the middle
                  [{:type :job
                    :job job
                    :position {:x column-x :y (+ base-y y-step)}}]
                  ;; Output collections last  
                  (map-indexed (fn [o-idx output-slug]
                                {:type :collection
                                 :id (str "collection-" output-slug) 
                                 :position {:x column-x :y (+ base-y (* 2 y-step) (* o-idx 25))}
                                 :slug output-slug})
                              output-collections))))
            (range (count job-chain)) job-chain)))

;; ====================================
;; HELPER FUNCTIONS
;; ====================================

(defn get-squad-x-position
  "Get X position for a squad column"
  [squad-slug]
  (-> (filter #(= (:slug %) squad-slug) squad-columns)
      first
      :x
      (or 600))) ; Default fallback

(defn collection-status
  "Calculate collection status based on documents"
  [collection documents]
  (let [collection-docs (filter #(= (:document_collection_id %) (:id collection)) (vals documents))
        total (count collection-docs)
        completed (count (filter #(= (:status %) "done") collection-docs))]
    (if (zero? total)
      :empty
      (if (= completed total)
        :completed
        :in-progress))))

(defn job-visual-status
  "Get visual status for job (affects color)"
  [job]
  (cond
    (:completed job) :completed
    (:paused job) :paused
    :else :running))

;; ====================================
;; NODE BUILDERS
;; ====================================

(defn build-collection-node
  "Create a React Flow node for a document collection"
  [collection documents squads y-offset]
  (let [status (collection-status collection documents)
        color (if (= status :completed) 
                (:collection-output node-colors)
                (:collection-input node-colors))]
    {:id (str "collection-" (:id collection))
     :type "default"
     :position {:x 50 :y y-offset}
     :data {:label (:name collection)
            :description (:description collection)
            :type :collection
            :collection-id (:id collection)
            :slug (:slug collection)
            :status status}
     :style {:backgroundColor color
             :color "white"
             :border "none"
             :borderRadius "6px"
             :padding "8px 12px"
             :fontSize "12px"
             :fontWeight "500"}}))

(defn build-job-node
  "Create a React Flow node for a job - new simplified version"
  [job roles squads position]
  (let [role (get roles (:role job))
        squad-slug (or (:squad_slug role) "arch")
        visual-status (job-visual-status job)
        color (get node-colors (keyword (str "job-" (name visual-status))) (:job node-colors))]
    {:id (str "job-" (:id job))
     :type "default"
     :position position
     :data {:label (:name job)
            :description (:description job)
            :type :job
            :job-id (:id job)
            :role (:role job)
            :slug (:slug job)
            :squad squad-slug
            :status visual-status}
     :style {:backgroundColor color
             :color "white"
             :border "none"
             :borderRadius "6px"
             :padding "8px 12px"
             :fontSize "12px"
             :fontWeight "500"}}))


;; ====================================
;; SIMPLE COLUMN BUILDER
;; ====================================

(defn build-simple-column
  "Build column using the simple chain algorithm"
  [squad-slug squad-jobs all-jobs-by-squad column-x is-first-column?]
  (when (not-empty squad-jobs)
    (let [;; 1. Find first jobs using the simple rule
          first-jobs (find-first-jobs-in-column squad-jobs all-jobs-by-squad is-first-column?)
          ;; 2. Create lookup maps for navigation
          lookup-maps (create-collection-lookup-maps squad-jobs)
          
          ;; 3. Build chain by following job → outputs → consuming jobs
          job-chain (build-simple-tree-chain first-jobs lookup-maps)
          
          ;; 4. Position jobs and collections in workflow order: input → job → output  
          workflow-nodes (position-workflow-chain job-chain column-x)
          
          ;; 5. Separate jobs and collections
          job-nodes (filter #(= (:type %) :job) workflow-nodes)
          collection-nodes (filter #(= (:type %) :collection) workflow-nodes)
          
          result {:job-nodes job-nodes
                  :collection-nodes collection-nodes
                  :job-chain job-chain
                  :output-slugs (set (mapcat #(map :slug (:outputs %)) job-chain))}]
      
      result)))

(defn build-graph-data
  "Build React Flow graph using simple column algorithm"
  [collections documents jobs squads roles]
  (when (and collections jobs)
    (js/console.log "=== BUILD GRAPH DEBUG ===")
    (js/console.log "Total jobs:" (count (vals jobs)))
    (js/console.log "Total collections:" (count (vals collections)))
    (let [;; Group jobs by squad (simple)
          jobs-by-squad (group-by (fn [job] 
                                   (let [role-key (:role job)
                                         role (get roles role-key)]
                                     (or (:squad_slug role) "unknown"))) 
                                 (vals jobs))
          ;; Build each column independently (no need to pass outputs between them)
          _ (js/console.log "Jobs grouped by squad:" (clj->js jobs-by-squad))
          column-results (map (fn [{:keys [slug x]}]
                               (let [is-first? (= slug "human")  ; First column
                                     squad-jobs (get jobs-by-squad slug [])]
                                 (js/console.log "Building column" slug "with" (count squad-jobs) "jobs at x=" x)
                                 (build-simple-column slug squad-jobs jobs-by-squad x is-first?)))
                             squad-columns)
          _ (js/console.log "Column results:" (clj->js (remove nil? column-results)))
          
          ;; Combine all nodes
          all-job-nodes (mapcat :job-nodes (remove nil? column-results))
          all-collection-nodes (mapcat :collection-nodes (remove nil? column-results))
          
          ;; Convert to React Flow format
          react-flow-jobs (map-indexed (fn [idx {:keys [job position]}]
                                (js/console.log "Job" (:slug job) "at position" position)
                                {:id (str "job-" (:id job))
                                 :type "default"
                                 :position (clj->js position)  ; Convert ClojureScript to JavaScript!
                                 :data {:label (:name job) :type :job}
                                 :style {:backgroundColor "#f59e0b" :color "white" 
                                        :border "none" :borderRadius "6px"
                                        :padding "8px 12px" :fontSize "12px"}})
                              all-job-nodes)
          react-flow-collections (map (fn [{:keys [id position slug]}]
                                       (js/console.log "Collection" slug "at position" position)
                                       {:id id :position (clj->js position) :data {:label slug}
                                        :style {:fontSize "11px" :color "#666"}}) 
                                     all-collection-nodes)
          
          all-nodes (concat react-flow-jobs react-flow-collections)
          all-edges []] ; Simple for now - no edges
      
      {:nodes all-nodes
       :edges all-edges})))