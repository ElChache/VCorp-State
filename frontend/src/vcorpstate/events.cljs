(ns vcorpstate.events
  (:require [re-frame.core :as rf]
            [ajax.core :as ajax]
            [day8.re-frame.http-fx]
            [vcorpstate.config :as config]
            [vcorpstate.db :as db]))

;; Initialize app state
(rf/reg-event-db
 :initialize-db
 (fn [_ _]
   db/default-db))

;; Fetch projects from backend
(rf/reg-event-fx
 :fetch-projects
 (fn [{:keys [db]} _]
   {:db (assoc db :loading? true :error nil)
    :http-xhrio {:method :get
                 :uri (str (:backend-url config/config) (:api-base config/config) "/projects")
                 :format (ajax/json-request-format)
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success [:fetch-projects-success]
                 :on-failure [:fetch-projects-failure]}}))

;; Handle successful projects fetch
(rf/reg-event-fx
 :fetch-projects-success
 (fn [{:keys [db]} [_ projects]]
   (let [updated-db (assoc db
                           :loading? false
                           :projects projects
                           :error nil)
         pending-route (:pending-route db)]
     (if pending-route
       ;; We have a pending route, try to navigate to it now
       {:db (dissoc updated-db :pending-route)
        :dispatch [:navigate-to-project-by-id (get-in pending-route [:params :id])]}
       ;; No pending route, just update the db
       {:db updated-db}))))

;; Handle failed projects fetch
(rf/reg-event-db
 :fetch-projects-failure
 (fn [db [_ error]]
   (assoc db
          :loading? false
          :error "Failed to fetch projects")))

;; Set selected project
(rf/reg-event-db
 :set-selected-project
 (fn [db [_ project-id]]
   (println "set-selected-project event received with project-id:" project-id)
   (println "Type of project-id:" (type project-id))
   (assoc db :selected-project-id project-id)))

;; Navigate to main view with selected project
(rf/reg-event-db
 :navigate-to-main
 (fn [db [_ project-id]]
   (println "navigate-to-main event received with project-id:" project-id)
   (println "Current db:" db)
   (let [new-db (assoc db 
                       :current-view :main
                       :selected-project-id project-id)]
     (println "New db:" new-db)
     new-db)))

;; Set current view
(rf/reg-event-db
 :set-current-view
 (fn [db [_ view]]
   (assoc db :current-view view)))

;; Set current route
(rf/reg-event-db
 :set-route
 (fn [db [_ route]]
   (assoc db :current-route route)))

;; Navigate to project by ID from URL
(rf/reg-event-fx
 :navigate-to-project-by-id
 (fn [{:keys [db]} [_ project-id]]
   (let [projects (:projects db)
         project (some #(when (= (:id %) project-id) %) projects)]
     (if (and project (seq projects))
       ;; Project found, navigate to it
       {:db (assoc db 
                   :current-view :main
                   :selected-project-id project-id
                   :current-route {:name :project :params {:id project-id}})}
       ;; Projects not loaded yet or project not found
       (if (empty? projects)
         ;; Projects not loaded, store the pending route and wait
         {:db (assoc db 
                     :pending-route {:name :project :params {:id project-id}}
                     :current-view :project-selector)}
         ;; Projects loaded but project not found, redirect home
         {:db (assoc db 
                     :current-view :project-selector
                     :current-route {:name :home})})))))

;; Navigate to home
(rf/reg-event-db
 :navigate-to-home
 (fn [db _]
   (assoc db 
          :current-view :project-selector
          :selected-project-id nil
          :current-route {:name :home})))