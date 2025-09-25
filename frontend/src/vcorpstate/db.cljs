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
   
   ;; Graph data structure (following architecture plan)
   :graph {:collections {}     ;; Keyed by collection-id  
           :documents {}       ;; Keyed by document-id
           :jobs {}           ;; Keyed by job-id
           :squads {}         ;; For layout columns
           :roles {}          ;; Role information
           :layout {}         ;; Node positions and layout data
           :loading? false    ;; Loading state for initial data
           :connected? false  ;; WebSocket connection status
           :last-updated nil} ;; Timestamp of last update
   
   ;; WebSocket connection
   :websocket {:connection nil
               :connected? false
               :reconnect-attempts 0
               :last-event nil}})