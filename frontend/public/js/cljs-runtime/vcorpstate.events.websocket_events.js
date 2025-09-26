goog.provide('vcorpstate.events.websocket_events');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("websocket","connect","websocket/connect",1397358632),(function (p__12475,p__12476){
var map__12477 = p__12475;
var map__12477__$1 = cljs.core.__destructure_map(map__12477);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12477__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12478 = p__12476;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12478,(0),null);
var project_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12478,(1),null);
var ws_connection = vcorpstate.websocket.create_websocket_connection(project_id);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),new cljs.core.Keyword(null,"connection","connection",-123599300)], null),ws_connection)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("websocket","connected","websocket/connected",1045426566),(function (db,p__12481){
var vec__12482 = p__12481;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12482,(0),null);
var ws = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12482,(1),null);
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),new cljs.core.Keyword(null,"connected?","connected?",-1197551387)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),new cljs.core.Keyword(null,"connection","connection",-123599300)], null),ws),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),new cljs.core.Keyword(null,"reconnect-attempts","reconnect-attempts",-1994972943)], null),(0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph","graph",1558099509),new cljs.core.Keyword(null,"connected?","connected?",-1197551387)], null),true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("websocket","disconnected","websocket/disconnected",-1676204563),(function (db,_){
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),new cljs.core.Keyword(null,"connected?","connected?",-1197551387)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph","graph",1558099509),new cljs.core.Keyword(null,"connected?","connected?",-1197551387)], null),false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("websocket","error","websocket/error",-948632993),(function (db,p__12485){
var vec__12486 = p__12485;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12486,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12486,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),new cljs.core.Keyword(null,"connected?","connected?",-1197551387)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph","graph",1558099509),new cljs.core.Keyword(null,"connected?","connected?",-1197551387)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),new cljs.core.Keyword(null,"reconnect-attempts","reconnect-attempts",-1994972943)], null),cljs.core.inc);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("websocket","event-received","websocket/event-received",1127274852),(function (db,p__12489){
var vec__12490 = p__12489;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12490,(0),null);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12490,(1),null);
var event_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(event);
var G__12493_12494 = event_type;
switch (G__12493_12494) {
case "document_status_changed":
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","document-status-changed","data/document-status-changed",-273122727),event], null));

break;
case "job_status_changed":
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","job-status-changed","data/job-status-changed",-194475209),event], null));

break;
case "collection_progress_updated":
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","collection-progress-updated","data/collection-progress-updated",-738056983),event], null));

break;
case "collection_changed":
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","collection-changed","data/collection-changed",-1837672645),event], null));

break;
case "document_created":
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("data","document-created","data/document-created",-259390310),event], null));

break;
case "connection_established":
console.log("WebSocket connection established");

break;
case "subscription_confirmed":
console.log("Project subscription confirmed");

break;
default:
console.log("Unknown WebSocket event type:",event_type);

}

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),new cljs.core.Keyword(null,"last-event","last-event",2067154394)], null),event);
}));

//# sourceMappingURL=vcorpstate.events.websocket_events.js.map
