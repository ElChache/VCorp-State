(ns vcorpstate.events.dialogs
  (:require [re-frame.core :as rf]
            [vcorpstate.http :as http]
            [vcorpstate.routes :as routes]))

;; Show launch agents dialog
(rf/reg-event-db
 :show-launch-agents-dialog
 (fn [db _]
   (js/console.log "Opening launch agents dialog")
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