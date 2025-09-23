goog.provide('vcorpstate.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),null,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false,new cljs.core.Keyword(null,"error","error",-978969032),null], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fetch-hello","fetch-hello",-1629224157),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"loading?","loading?",1905707049),true,new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"message","message",-406056002),null], null),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"backend-url","backend-url",-283436201).cljs$core$IFn$_invoke$arity$1(vcorpstate.config.config)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"api-base","api-base",891294827).cljs$core$IFn$_invoke$arity$1(vcorpstate.config.config)),"/hello"].join(''),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch-hello-success","fetch-hello-success",1629132133)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch-hello-failure","fetch-hello-failure",-107744878)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fetch-hello-success","fetch-hello-success",1629132133),(function (db,p__23608){
var vec__23609 = p__23608;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23609,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23609,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(response),new cljs.core.Keyword(null,"error","error",-978969032),null], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fetch-hello-failure","fetch-hello-failure",-107744878),(function (db,p__23615){
var vec__23616 = p__23615;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23616,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23616,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),"Failed to fetch message from backend",new cljs.core.Keyword(null,"message","message",-406056002),null], 0));
}));

//# sourceMappingURL=vcorpstate.events.js.map
