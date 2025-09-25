goog.provide('vcorpstate.websocket');
vcorpstate.websocket.websocket_url = "ws://localhost:3003/ws";
/**
 * Create and configure WebSocket connection
 */
vcorpstate.websocket.create_websocket_connection = (function vcorpstate$websocket$create_websocket_connection(project_id){
var ws = (new WebSocket(vcorpstate.websocket.websocket_url));
(ws.onopen = (function (event){
console.log("WebSocket connected");

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("websocket","connected","websocket/connected",1045426566),ws], null));

return ws.send(JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"subscribe_project",new cljs.core.Keyword(null,"projectId","projectId",-1551013096),project_id], null))));
}));

(ws.onmessage = (function (event){
var data = JSON.parse(event.data);
var event_data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
console.log("WebSocket event received:",event_data);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("websocket","event-received","websocket/event-received",1127274852),event_data], null));
}));

(ws.onclose = (function (event){
console.log("WebSocket disconnected");

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("websocket","disconnected","websocket/disconnected",-1676204563)], null));
}));

(ws.onerror = (function (event){
console.error("WebSocket error:",event);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("websocket","error","websocket/error",-948632993),event], null));
}));

return ws;
});
/**
 * Close WebSocket connection
 */
vcorpstate.websocket.close_websocket_connection = (function vcorpstate$websocket$close_websocket_connection(ws){
if(cljs.core.truth_(ws)){
return ws.close();
} else {
return null;
}
});

//# sourceMappingURL=vcorpstate.websocket.js.map
