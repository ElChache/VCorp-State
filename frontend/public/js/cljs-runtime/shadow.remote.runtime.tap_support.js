goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__17204,p__17205){
var map__17207 = p__17204;
var map__17207__$1 = cljs.core.__destructure_map(map__17207);
var svc = map__17207__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17207__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17207__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17207__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__17208 = p__17205;
var map__17208__$1 = cljs.core.__destructure_map(map__17208);
var msg = map__17208__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17208__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17208__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17208__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17208__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__17218,p__17219){
var map__17221 = p__17218;
var map__17221__$1 = cljs.core.__destructure_map(map__17221);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17221__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__17222 = p__17219;
var map__17222__$1 = cljs.core.__destructure_map(map__17222);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17222__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__17225,p__17226){
var map__17228 = p__17225;
var map__17228__$1 = cljs.core.__destructure_map(map__17228);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17228__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17228__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__17229 = p__17226;
var map__17229__$1 = cljs.core.__destructure_map(map__17229);
var msg = map__17229__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17229__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__17232,tid){
var map__17233 = p__17232;
var map__17233__$1 = cljs.core.__destructure_map(map__17233);
var svc = map__17233__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17233__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__17243 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__17244 = null;
var count__17245 = (0);
var i__17246 = (0);
while(true){
if((i__17246 < count__17245)){
var vec__17260 = chunk__17244.cljs$core$IIndexed$_nth$arity$2(null,i__17246);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17260,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17260,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__17283 = seq__17243;
var G__17284 = chunk__17244;
var G__17285 = count__17245;
var G__17286 = (i__17246 + (1));
seq__17243 = G__17283;
chunk__17244 = G__17284;
count__17245 = G__17285;
i__17246 = G__17286;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17243);
if(temp__5804__auto__){
var seq__17243__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17243__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__17243__$1);
var G__17289 = cljs.core.chunk_rest(seq__17243__$1);
var G__17290 = c__5525__auto__;
var G__17291 = cljs.core.count(c__5525__auto__);
var G__17292 = (0);
seq__17243 = G__17289;
chunk__17244 = G__17290;
count__17245 = G__17291;
i__17246 = G__17292;
continue;
} else {
var vec__17265 = cljs.core.first(seq__17243__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17265,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17265,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__17293 = cljs.core.next(seq__17243__$1);
var G__17294 = null;
var G__17295 = (0);
var G__17296 = (0);
seq__17243 = G__17293;
chunk__17244 = G__17294;
count__17245 = G__17295;
i__17246 = G__17296;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__17234_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__17234_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__17235_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__17235_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__17236_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__17236_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__17237_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__17237_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__17270){
var map__17271 = p__17270;
var map__17271__$1 = cljs.core.__destructure_map(map__17271);
var svc = map__17271__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17271__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17271__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
