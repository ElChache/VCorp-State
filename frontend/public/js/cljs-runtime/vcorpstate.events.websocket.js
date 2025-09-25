goog.provide('vcorpstate.events.websocket');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("websocket","connect","websocket/connect",1397358632),(function (p__11212,p__11213){
var map__11214 = p__11212;
var map__11214__$1 = cljs.core.__destructure_map(map__11214);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11214__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__11215 = p__11213;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11215,(0),null);
var project_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11215,(1),null);
var ws_connection = vcorpstate.websocket.create_websocket_connection(project_id);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),new cljs.core.Keyword(null,"connection","connection",-123599300)], null),ws_connection)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("websocket","connected","websocket/connected",1045426566),(function (db,p__11218){
var vec__11219 = p__11218;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11219,(0),null);
var ws = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11219,(1),null);
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),new cljs.core.Keyword(null,"connected?","connected?",-1197551387)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),new cljs.core.Keyword(null,"connection","connection",-123599300)], null),ws),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),new cljs.core.Keyword(null,"reconnect-attempts","reconnect-attempts",-1994972943)], null),(0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph","graph",1558099509),new cljs.core.Keyword(null,"connected?","connected?",-1197551387)], null),true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("websocket","disconnected","websocket/disconnected",-1676204563),(function (db,_){
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),new cljs.core.Keyword(null,"connected?","connected?",-1197551387)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph","graph",1558099509),new cljs.core.Keyword(null,"connected?","connected?",-1197551387)], null),false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("websocket","error","websocket/error",-948632993),(function (db,p__11222){
var vec__11229 = p__11222;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11229,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11229,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),new cljs.core.Keyword(null,"connected?","connected?",-1197551387)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph","graph",1558099509),new cljs.core.Keyword(null,"connected?","connected?",-1197551387)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),new cljs.core.Keyword(null,"reconnect-attempts","reconnect-attempts",-1994972943)], null),cljs.core.inc);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("websocket","event-received","websocket/event-received",1127274852),(function (db,p__11241){
var vec__11242 = p__11241;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11242,(0),null);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11242,(1),null);
var event_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(event);
var G__11248_11260 = event_type;
switch (G__11248_11260) {
case "document_status_changed":
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","document-status-changed","graph/document-status-changed",-164205867),event], null));

break;
case "job_status_changed":
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","job-status-changed","graph/job-status-changed",-335897525),event], null));

break;
case "collection_progress_updated":
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","collection-progress-updated","graph/collection-progress-updated",-783101299),event], null));

break;
case "document_created":
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("graph","document-created","graph/document-created",-424135234),event], null));

break;
default:
console.log("Unknown WebSocket event type:",event_type);

}

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),new cljs.core.Keyword(null,"last-event","last-event",2067154394)], null),event);
}));

//# sourceMappingURL=vcorpstate.events.websocket.js.map
