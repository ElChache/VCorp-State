(ns vcorpstate.events.dialogs
  (:require [re-frame.core :as rf]
            [vcorpstate.http :as http]
            [vcorpstate.routes :as routes]))

;; Show launch agents dialog
(rf/reg-event-db
 :show-launch-agents-dialog
 (fn [db _]
   (-> db
       (assoc-in [:dialogs :launch-agents-open?] true)
       (assoc-in [:dialogs :role-counts] {}))))

;; Hide launch agents dialog
(rf/reg-event-db
 :hide-launch-agents-dialog
 (fn [db _]
   (-> db
       (assoc-in [:dialogs :launch-agents-open?] false)
       (assoc-in [:dialogs :role-counts] {}))))

;; Update role count
(rf/reg-event-db
 :update-role-count
 (fn [db [_ role-short-name new-count]]
   (let [count (max 0 new-count)]
     (assoc-in db [:dialogs :role-counts role-short-name] count))))

;; Launch agents (triggers multiple API calls)
(rf/reg-event-fx
 :launch-agents
 (fn [{:keys [db]} _]
   (let [role-counts (get-in db [:dialogs :role-counts])
         project-id (js/parseInt (or (get-in db [:route :params :id])
                                      (get-in db [:data :selected-project-id]) 
                                      (:selected-project-id db)
                                      "1"))
         launch-requests (filter #(> (second %) 0) role-counts)]
     (if (and project-id (seq launch-requests))
       {:db (-> db
                (assoc-in [:dialogs :launching-agents?] true)
                (assoc-in [:dialogs :agent-launch-results] [])
                (assoc-in [:dialogs :agent-launch-error] nil)
                (assoc-in [:dialogs :launch-agents-open?] false)
                (assoc-in [:dialogs :role-counts] {}))
        :dispatch-n (mapv (fn [[role count]]
                            [:http/launch-agents project-id role count])
                          launch-requests)}
       {:db (assoc-in db [:dialogs :agent-launch-error] "Please select roles to launch")}))))

;; HTTP event handler for launching agents
(rf/reg-event-fx
 :http/launch-agents
 (fn [_ [_ project-id role count]]
   (http/launch-agents project-id role count)
   {}))

;; Handle successful agent launch
(rf/reg-event-db
 :agents/launch-success
 (fn [db [_ role response]]
   (let [new-result {:role role :success true :response response}]
     (-> db
         (update-in [:dialogs :agent-launch-results] conj new-result)
         (assoc-in [:dialogs :launching-agents?] false)))))

;; Handle agent launch failure  
(rf/reg-event-db
 :agents/launch-error
 (fn [db [_ role error]]
   (let [new-result {:role role :success false :error error}]
     (-> db
         (update-in [:dialogs :agent-launch-results] conj new-result)
         (assoc-in [:dialogs :launching-agents?] false)
         (assoc-in [:dialogs :agent-launch-error] (str "Failed to launch " role " agents: " (or (:message error) "Unknown error")))))))

;; ====================================
;; DOCUMENT DIALOG
;; ====================================

;; Show document dialog
(rf/reg-event-db
 :show-document-dialog
 (fn [db [_ document-slug]]
   (js/console.log "Opening document dialog for:" document-slug)
   (-> db
       (assoc-in [:dialogs :document-open?] true)
       (assoc-in [:dialogs :selected-document] document-slug))))

;; Hide document dialog
(rf/reg-event-db
 :hide-document-dialog
 (fn [db _]
   (-> db
       (assoc-in [:dialogs :document-open?] false)
       (assoc-in [:dialogs :selected-document] nil))))

;; Set document status directly
(rf/reg-event-fx
 :set-document-status
 (fn [_ [_ document-id ready?]]
   {:dispatch [:http/update-document-status document-id ready?]}))

;; HTTP event handler for updating document status
(rf/reg-event-fx
 :http/update-document-status
 (fn [_ [_ document-id ready?]]
   (http/update-document-status document-id ready?)
   {}))

;; Handle successful document status update
(rf/reg-event-db
 :document/status-updated
 (fn [db [_ _document-id _ready? _response]]
   ;; Update by finding the document in the collections with matching ID
   ;; The real-time WebSocket updates should handle this automatically
   db))

;; Handle document status update failure
(rf/reg-event-db
 :document/status-update-failed
 (fn [db [_ _document-slug _error]]
   db))

;; ====================================
;; CREATE PROJECT DIALOG
;; ====================================

;; Show create project dialog
(rf/reg-event-db
 :show-create-project-dialog
 (fn [db _]
   (js/console.log "Opening create project dialog")
   (-> db
       (assoc-in [:dialogs :create-project-open?] true)
       (assoc-in [:dialogs :create-project-form] {:name "Monitors"
                                                  :description "Monitoring magic"
                                                  :path "/Users/davidcerezo/Projects/monitors"
                                                  :github_origin "https://github.com/ElChache/monitors.git"
                                                  :template_id "vcorp_standard"})
       (assoc-in [:dialogs :creating-project?] false)
       (assoc-in [:dialogs :create-project-error] nil))))

;; Hide create project dialog
(rf/reg-event-db
 :hide-create-project-dialog
 (fn [db _]
   (-> db
       (assoc-in [:dialogs :create-project-open?] false)
       (assoc-in [:dialogs :create-project-form] {})
       (assoc-in [:dialogs :creating-project?] false)
       (assoc-in [:dialogs :create-project-error] nil))))

;; Update create project form field
(rf/reg-event-db
 :update-create-project-form
 (fn [db [_ field value]]
   (assoc-in db [:dialogs :create-project-form field] value)))

;; Create project (starts the process)
(rf/reg-event-fx
 :create-project
 (fn [{:keys [db]} _]
   (let [form-data (get-in db [:dialogs :create-project-form])]
     (js/console.log "Creating project with data:" (clj->js form-data))
     {:db (-> db
              (assoc-in [:dialogs :creating-project?] true)
              (assoc-in [:dialogs :create-project-error] nil))
      :dispatch [:http/create-project form-data]})))

;; Handle successful project creation
(rf/reg-event-fx
 :create-project-success
 (fn [{:keys [db]} [_ response]]
   (js/console.log "Project created successfully:" (clj->js response))
   (let [project-id (get-in response [:project :id])]
     (js/console.log "Navigating to project ID:" project-id)
     ;; Navigate to the newly created project
     (routes/navigate-to-route! {:name :project :params {:id project-id}})
     {:db (-> db
              (assoc-in [:dialogs :creating-project?] false)
              (assoc-in [:dialogs :create-project-open?] false)
              (assoc-in [:dialogs :create-project-form] {}))})))

;; Handle project creation failure
(rf/reg-event-db
 :create-project-error
 (fn [db [_ error]]
   (js/console.error "Project creation failed:" (clj->js error))
   (-> db
       (assoc-in [:dialogs :creating-project?] false)
       (assoc-in [:dialogs :create-project-error] (or (:message error) "Failed to create project")))))

;; HTTP event handler for creating project
(rf/reg-event-fx
 :http/create-project
 (fn [_ [_ project-data]]
   (http/create-project project-data)
   {}))