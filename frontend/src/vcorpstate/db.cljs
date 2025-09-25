(ns vcorpstate.db)

;; VCorpState application state schema
(def default-db
  {;; Currently selected project ID (integer or nil)
   :selected-project-id nil
   
   ;; List of all available projects from backend
   :projects []
   
   ;; Current view/route (:project-selector or :main)
   :current-view :project-selector
   
   ;; Current route information
   :current-route {:name :home}
   
   ;; Pending route to navigate to after projects are loaded
   :pending-route nil
   
   ;; Loading state for async operations
   :loading? false
   
   ;; Error message (string or nil)
   :error nil
   
   ;; Expanded sidebar section (:agents, :tickets, :documents, or nil)
   :expanded-sidebar-section nil
   
   ;; Project data loaded from backend
   :data {:collections {}     ;; Keyed by collection-id  
          :documents {}       ;; Keyed by document-id
          :jobs {}           ;; Keyed by job-id
          :squads {}         ;; Keyed by squad-id
          :roles {}          ;; Keyed by role short-name
          :graph_structure [] ;; Pre-computed squad columns with root jobs
          :last-updated nil} ;; Timestamp of last update
   
   ;; App-level state
   :app {:loading? false      ;; Loading state for initial data
         :error nil}          ;; Error message
   
   ;; WebSocket connection
   :websocket {:connection nil
               :connected? false
               :reconnect-attempts 0
               :last-event nil}})