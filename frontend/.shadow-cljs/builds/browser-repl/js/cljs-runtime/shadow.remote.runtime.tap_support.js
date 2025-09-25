goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__20791,p__20792){
var map__20794 = p__20791;
var map__20794__$1 = cljs.core.__destructure_map(map__20794);
var svc = map__20794__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20794__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20794__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20794__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20795 = p__20792;
var map__20795__$1 = cljs.core.__destructure_map(map__20795);
var msg = map__20795__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20795__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20795__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20795__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20795__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__20819,p__20820){
var map__20821 = p__20819;
var map__20821__$1 = cljs.core.__destructure_map(map__20821);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20821__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__20822 = p__20820;
var map__20822__$1 = cljs.core.__destructure_map(map__20822);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20822__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__20829,p__20830){
var map__20831 = p__20829;
var map__20831__$1 = cljs.core.__destructure_map(map__20831);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20831__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20831__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20832 = p__20830;
var map__20832__$1 = cljs.core.__destructure_map(map__20832);
var msg = map__20832__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20832__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__20833,tid){
var map__20834 = p__20833;
var map__20834__$1 = cljs.core.__destructure_map(map__20834);
var svc = map__20834__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20834__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__20841 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__20842 = null;
var count__20843 = (0);
var i__20844 = (0);
while(true){
if((i__20844 < count__20843)){
var vec__20856 = chunk__20842.cljs$core$IIndexed$_nth$arity$2(null,i__20844);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20856,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20856,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20906 = seq__20841;
var G__20907 = chunk__20842;
var G__20908 = count__20843;
var G__20909 = (i__20844 + (1));
seq__20841 = G__20906;
chunk__20842 = G__20907;
count__20843 = G__20908;
i__20844 = G__20909;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20841);
if(temp__5804__auto__){
var seq__20841__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20841__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20841__$1);
var G__20912 = cljs.core.chunk_rest(seq__20841__$1);
var G__20913 = c__5525__auto__;
var G__20914 = cljs.core.count(c__5525__auto__);
var G__20915 = (0);
seq__20841 = G__20912;
chunk__20842 = G__20913;
count__20843 = G__20914;
i__20844 = G__20915;
continue;
} else {
var vec__20862 = cljs.core.first(seq__20841__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20862,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20862,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20916 = cljs.core.next(seq__20841__$1);
var G__20917 = null;
var G__20918 = (0);
var G__20919 = (0);
seq__20841 = G__20916;
chunk__20842 = G__20917;
count__20843 = G__20918;
i__20844 = G__20919;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__20835_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__20835_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__20836_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__20836_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__20837_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__20837_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__20838_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__20838_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__20871){
var map__20873 = p__20871;
var map__20873__$1 = cljs.core.__destructure_map(map__20873);
var svc = map__20873__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20873__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20873__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
