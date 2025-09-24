goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__20322,p__20323){
var map__20326 = p__20322;
var map__20326__$1 = cljs.core.__destructure_map(map__20326);
var svc = map__20326__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20326__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20326__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20326__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20327 = p__20323;
var map__20327__$1 = cljs.core.__destructure_map(map__20327);
var msg = map__20327__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20327__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20327__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20327__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20327__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__20339,p__20340){
var map__20342 = p__20339;
var map__20342__$1 = cljs.core.__destructure_map(map__20342);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20342__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__20343 = p__20340;
var map__20343__$1 = cljs.core.__destructure_map(map__20343);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20343__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__20346,p__20347){
var map__20348 = p__20346;
var map__20348__$1 = cljs.core.__destructure_map(map__20348);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20348__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20348__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20349 = p__20347;
var map__20349__$1 = cljs.core.__destructure_map(map__20349);
var msg = map__20349__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20349__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__20351,tid){
var map__20352 = p__20351;
var map__20352__$1 = cljs.core.__destructure_map(map__20352);
var svc = map__20352__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20352__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__20358 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__20359 = null;
var count__20360 = (0);
var i__20361 = (0);
while(true){
if((i__20361 < count__20360)){
var vec__20368 = chunk__20359.cljs$core$IIndexed$_nth$arity$2(null,i__20361);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20368,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20368,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20376 = seq__20358;
var G__20377 = chunk__20359;
var G__20378 = count__20360;
var G__20379 = (i__20361 + (1));
seq__20358 = G__20376;
chunk__20359 = G__20377;
count__20360 = G__20378;
i__20361 = G__20379;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20358);
if(temp__5804__auto__){
var seq__20358__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20358__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20358__$1);
var G__20380 = cljs.core.chunk_rest(seq__20358__$1);
var G__20381 = c__5525__auto__;
var G__20382 = cljs.core.count(c__5525__auto__);
var G__20383 = (0);
seq__20358 = G__20380;
chunk__20359 = G__20381;
count__20360 = G__20382;
i__20361 = G__20383;
continue;
} else {
var vec__20371 = cljs.core.first(seq__20358__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20371,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20371,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20384 = cljs.core.next(seq__20358__$1);
var G__20385 = null;
var G__20386 = (0);
var G__20387 = (0);
seq__20358 = G__20384;
chunk__20359 = G__20385;
count__20360 = G__20386;
i__20361 = G__20387;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__20354_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__20354_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__20355_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__20355_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__20356_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__20356_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__20357_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__20357_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__20374){
var map__20375 = p__20374;
var map__20375__$1 = cljs.core.__destructure_map(map__20375);
var svc = map__20375__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20375__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20375__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
