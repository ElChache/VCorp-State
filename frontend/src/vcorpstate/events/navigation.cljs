(ns vcorpstate.events.navigation
  "Navigation and routing events"
  (:require [re-frame.core :as rf]
            [ajax.core :as ajax]
            [day8.re-frame.http-fx]
            [vcorpstate.config :as config]))

;; ====================================
;; PROJECT LOADING EVENTS
;; ====================================

;; Fetch projects from backend
(rf/reg-event-fx
 :fetch-projects
 (fn [{:keys [db]} _]
   (let [api-url (str (:backend-url config/config) (:api-base config/config) "/projects")]
     (js/console.log "Fetching projects from:" api-url)
     {:db (assoc db :loading? true :error nil)
      :http-xhrio {:method :get
                   :uri api-url
                   :format (ajax/json-request-format)
                   :response-format (ajax/json-response-format {:keywords? true})
                   :on-success [:fetch-projects-success]
                   :on-failure [:fetch-projects-failure]}})))

;; Handle successful projects fetch
(rf/reg-event-fx
 :fetch-projects-success
 (fn [{:keys [db]} [_ projects]]
   (js/console.log "Projects fetched successfully:" projects)
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
   (js/console.error "Failed to fetch projects:" error)
   (assoc db
          :loading? false
          :error "Failed to fetch projects")))

;; ====================================
;; NAVIGATION EVENTS
;; ====================================

;; Set selected project
(rf/reg-event-db
 :set-selected-project
 (fn [db [_ project-id]]
   (assoc db :selected-project-id project-id)))

;; Navigate to main view with selected project
(rf/reg-event-db
 :navigate-to-main
 (fn [db [_ project-id]]
   (assoc db 
          :current-view :main
          :selected-project-id project-id)))

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
   ;; Force navigation to main view regardless of project loading status
   ;; This ensures the sidebar is always shown when accessing /project/:id
   {:db (assoc db 
               :current-view :main
               :selected-project {:id project-id :name "Test VCorp Project"}
               :selected-project-id project-id
               :current-route {:name :project :params {:id project-id}})}))

;; Navigate to home
(rf/reg-event-db
 :navigate-to-home
 (fn [db _]
   (assoc db 
          :current-view :project-selector
          :selected-project-id nil
          :current-route {:name :home})))