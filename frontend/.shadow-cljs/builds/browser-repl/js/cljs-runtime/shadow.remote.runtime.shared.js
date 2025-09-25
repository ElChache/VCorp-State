goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__14879){
var map__14880 = p__14879;
var map__14880__$1 = cljs.core.__destructure_map(map__14880);
var runtime = map__14880__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14880__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_15155 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_15155)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__14891 = runtime;
var G__14892 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_15155);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__14891,G__14892) : shadow.remote.runtime.shared.process.call(null,G__14891,G__14892));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__14894,res){
var map__14895 = p__14894;
var map__14895__$1 = cljs.core.__destructure_map(map__14895);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14895__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14895__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__14907 = res;
var G__14907__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14907,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__14907);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14907__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__14907__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__14918 = arguments.length;
switch (G__14918) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__14923,msg,handlers,timeout_after_ms){
var map__14924 = p__14923;
var map__14924__$1 = cljs.core.__destructure_map(map__14924);
var runtime = map__14924__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14924__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15170 = arguments.length;
var i__5727__auto___15171 = (0);
while(true){
if((i__5727__auto___15171 < len__5726__auto___15170)){
args__5732__auto__.push((arguments[i__5727__auto___15171]));

var G__15173 = (i__5727__auto___15171 + (1));
i__5727__auto___15171 = G__15173;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__14931,ev,args){
var map__14932 = p__14931;
var map__14932__$1 = cljs.core.__destructure_map(map__14932);
var runtime = map__14932__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14932__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__14933 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14936 = null;
var count__14937 = (0);
var i__14938 = (0);
while(true){
if((i__14938 < count__14937)){
var ext = chunk__14936.cljs$core$IIndexed$_nth$arity$2(null,i__14938);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__15181 = seq__14933;
var G__15182 = chunk__14936;
var G__15183 = count__14937;
var G__15184 = (i__14938 + (1));
seq__14933 = G__15181;
chunk__14936 = G__15182;
count__14937 = G__15183;
i__14938 = G__15184;
continue;
} else {
var G__15185 = seq__14933;
var G__15186 = chunk__14936;
var G__15187 = count__14937;
var G__15188 = (i__14938 + (1));
seq__14933 = G__15185;
chunk__14936 = G__15186;
count__14937 = G__15187;
i__14938 = G__15188;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14933);
if(temp__5804__auto__){
var seq__14933__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14933__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14933__$1);
var G__15189 = cljs.core.chunk_rest(seq__14933__$1);
var G__15190 = c__5525__auto__;
var G__15191 = cljs.core.count(c__5525__auto__);
var G__15192 = (0);
seq__14933 = G__15189;
chunk__14936 = G__15190;
count__14937 = G__15191;
i__14938 = G__15192;
continue;
} else {
var ext = cljs.core.first(seq__14933__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__15193 = cljs.core.next(seq__14933__$1);
var G__15194 = null;
var G__15195 = (0);
var G__15196 = (0);
seq__14933 = G__15193;
chunk__14936 = G__15194;
count__14937 = G__15195;
i__14938 = G__15196;
continue;
} else {
var G__15197 = cljs.core.next(seq__14933__$1);
var G__15198 = null;
var G__15199 = (0);
var G__15200 = (0);
seq__14933 = G__15197;
chunk__14936 = G__15198;
count__14937 = G__15199;
i__14938 = G__15200;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq14927){
var G__14928 = cljs.core.first(seq14927);
var seq14927__$1 = cljs.core.next(seq14927);
var G__14929 = cljs.core.first(seq14927__$1);
var seq14927__$2 = cljs.core.next(seq14927__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14928,G__14929,seq14927__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__14949,p__14950){
var map__14951 = p__14949;
var map__14951__$1 = cljs.core.__destructure_map(map__14951);
var runtime = map__14951__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14951__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14952 = p__14950;
var map__14952__$1 = cljs.core.__destructure_map(map__14952);
var msg = map__14952__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14952__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__14953 = cljs.core.deref(state_ref);
var map__14953__$1 = cljs.core.__destructure_map(map__14953);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14953__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14953__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__14954,msg){
var map__14959 = p__14954;
var map__14959__$1 = cljs.core.__destructure_map(map__14959);
var runtime = map__14959__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14959__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__14961,key,p__14962){
var map__14963 = p__14961;
var map__14963__$1 = cljs.core.__destructure_map(map__14963);
var state = map__14963__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14963__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__14964 = p__14962;
var map__14964__$1 = cljs.core.__destructure_map(map__14964);
var spec = map__14964__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14964__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14964__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__15004,key,spec){
var map__15006 = p__15004;
var map__15006__$1 = cljs.core.__destructure_map(map__15006);
var runtime = map__15006__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15006__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___15281 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___15281 == null)){
} else {
var on_welcome_15286 = temp__5808__auto___15281;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_15286.cljs$core$IFn$_invoke$arity$0 ? on_welcome_15286.cljs$core$IFn$_invoke$arity$0() : on_welcome_15286.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__15008_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__15008_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__15010_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__15010_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__15011_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__15011_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__15012_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__15012_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__15013_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__15013_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__15017,key){
var map__15018 = p__15017;
var map__15018__$1 = cljs.core.__destructure_map(map__15018);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15018__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__15020,msg){
var map__15021 = p__15020;
var map__15021__$1 = cljs.core.__destructure_map(map__15021);
var runtime = map__15021__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15021__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__15027,p__15028){
var map__15029 = p__15027;
var map__15029__$1 = cljs.core.__destructure_map(map__15029);
var runtime = map__15029__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15029__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__15030 = p__15028;
var map__15030__$1 = cljs.core.__destructure_map(map__15030);
var msg = map__15030__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15030__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15030__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__15056 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__15058 = null;
var count__15059 = (0);
var i__15060 = (0);
while(true){
if((i__15060 < count__15059)){
var map__15141 = chunk__15058.cljs$core$IIndexed$_nth$arity$2(null,i__15060);
var map__15141__$1 = cljs.core.__destructure_map(map__15141);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15141__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__15396 = seq__15056;
var G__15399 = chunk__15058;
var G__15400 = count__15059;
var G__15401 = (i__15060 + (1));
seq__15056 = G__15396;
chunk__15058 = G__15399;
count__15059 = G__15400;
i__15060 = G__15401;
continue;
} else {
var G__15402 = seq__15056;
var G__15403 = chunk__15058;
var G__15404 = count__15059;
var G__15405 = (i__15060 + (1));
seq__15056 = G__15402;
chunk__15058 = G__15403;
count__15059 = G__15404;
i__15060 = G__15405;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15056);
if(temp__5804__auto__){
var seq__15056__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15056__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15056__$1);
var G__15407 = cljs.core.chunk_rest(seq__15056__$1);
var G__15408 = c__5525__auto__;
var G__15410 = cljs.core.count(c__5525__auto__);
var G__15411 = (0);
seq__15056 = G__15407;
chunk__15058 = G__15408;
count__15059 = G__15410;
i__15060 = G__15411;
continue;
} else {
var map__15142 = cljs.core.first(seq__15056__$1);
var map__15142__$1 = cljs.core.__destructure_map(map__15142);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15142__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__15412 = cljs.core.next(seq__15056__$1);
var G__15413 = null;
var G__15414 = (0);
var G__15415 = (0);
seq__15056 = G__15412;
chunk__15058 = G__15413;
count__15059 = G__15414;
i__15060 = G__15415;
continue;
} else {
var G__15416 = cljs.core.next(seq__15056__$1);
var G__15417 = null;
var G__15418 = (0);
var G__15419 = (0);
seq__15056 = G__15416;
chunk__15058 = G__15417;
count__15059 = G__15418;
i__15060 = G__15419;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
