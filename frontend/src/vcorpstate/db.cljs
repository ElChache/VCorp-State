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
   :expanded-sidebar-section nil})