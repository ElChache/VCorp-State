goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__12346){
var map__12347 = p__12346;
var map__12347__$1 = cljs.core.__destructure_map(map__12347);
var runtime = map__12347__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12347__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_12522 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_12522)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__12354 = runtime;
var G__12355 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_12522);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__12354,G__12355) : shadow.remote.runtime.shared.process.call(null,G__12354,G__12355));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__12357,res){
var map__12358 = p__12357;
var map__12358__$1 = cljs.core.__destructure_map(map__12358);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12358__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12358__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__12360 = res;
var G__12360__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12360,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__12360);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12360__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__12360__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__12363 = arguments.length;
switch (G__12363) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__12364,msg,handlers,timeout_after_ms){
var map__12365 = p__12364;
var map__12365__$1 = cljs.core.__destructure_map(map__12365);
var runtime = map__12365__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12365__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
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
var len__5726__auto___12526 = arguments.length;
var i__5727__auto___12527 = (0);
while(true){
if((i__5727__auto___12527 < len__5726__auto___12526)){
args__5732__auto__.push((arguments[i__5727__auto___12527]));

var G__12528 = (i__5727__auto___12527 + (1));
i__5727__auto___12527 = G__12528;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__12369,ev,args){
var map__12370 = p__12369;
var map__12370__$1 = cljs.core.__destructure_map(map__12370);
var runtime = map__12370__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12370__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__12371 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__12374 = null;
var count__12375 = (0);
var i__12376 = (0);
while(true){
if((i__12376 < count__12375)){
var ext = chunk__12374.cljs$core$IIndexed$_nth$arity$2(null,i__12376);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__12532 = seq__12371;
var G__12533 = chunk__12374;
var G__12534 = count__12375;
var G__12535 = (i__12376 + (1));
seq__12371 = G__12532;
chunk__12374 = G__12533;
count__12375 = G__12534;
i__12376 = G__12535;
continue;
} else {
var G__12536 = seq__12371;
var G__12537 = chunk__12374;
var G__12538 = count__12375;
var G__12539 = (i__12376 + (1));
seq__12371 = G__12536;
chunk__12374 = G__12537;
count__12375 = G__12538;
i__12376 = G__12539;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12371);
if(temp__5804__auto__){
var seq__12371__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12371__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12371__$1);
var G__12540 = cljs.core.chunk_rest(seq__12371__$1);
var G__12541 = c__5525__auto__;
var G__12542 = cljs.core.count(c__5525__auto__);
var G__12543 = (0);
seq__12371 = G__12540;
chunk__12374 = G__12541;
count__12375 = G__12542;
i__12376 = G__12543;
continue;
} else {
var ext = cljs.core.first(seq__12371__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__12544 = cljs.core.next(seq__12371__$1);
var G__12545 = null;
var G__12546 = (0);
var G__12547 = (0);
seq__12371 = G__12544;
chunk__12374 = G__12545;
count__12375 = G__12546;
i__12376 = G__12547;
continue;
} else {
var G__12548 = cljs.core.next(seq__12371__$1);
var G__12549 = null;
var G__12550 = (0);
var G__12551 = (0);
seq__12371 = G__12548;
chunk__12374 = G__12549;
count__12375 = G__12550;
i__12376 = G__12551;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq12366){
var G__12367 = cljs.core.first(seq12366);
var seq12366__$1 = cljs.core.next(seq12366);
var G__12368 = cljs.core.first(seq12366__$1);
var seq12366__$2 = cljs.core.next(seq12366__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12367,G__12368,seq12366__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__12381,p__12382){
var map__12383 = p__12381;
var map__12383__$1 = cljs.core.__destructure_map(map__12383);
var runtime = map__12383__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12383__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__12384 = p__12382;
var map__12384__$1 = cljs.core.__destructure_map(map__12384);
var msg = map__12384__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12384__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__12385 = cljs.core.deref(state_ref);
var map__12385__$1 = cljs.core.__destructure_map(map__12385);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12385__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12385__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__12386,msg){
var map__12387 = p__12386;
var map__12387__$1 = cljs.core.__destructure_map(map__12387);
var runtime = map__12387__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12387__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__12391,key,p__12392){
var map__12393 = p__12391;
var map__12393__$1 = cljs.core.__destructure_map(map__12393);
var state = map__12393__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12393__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__12394 = p__12392;
var map__12394__$1 = cljs.core.__destructure_map(map__12394);
var spec = map__12394__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12394__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12394__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__12395,key,spec){
var map__12396 = p__12395;
var map__12396__$1 = cljs.core.__destructure_map(map__12396);
var runtime = map__12396__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12396__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___12557 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___12557 == null)){
} else {
var on_welcome_12558 = temp__5808__auto___12557;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_12558.cljs$core$IFn$_invoke$arity$0 ? on_welcome_12558.cljs$core$IFn$_invoke$arity$0() : on_welcome_12558.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__12397_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__12397_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__12398_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__12398_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__12399_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__12399_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__12400_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__12400_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__12401_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__12401_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__12402,key){
var map__12403 = p__12402;
var map__12403__$1 = cljs.core.__destructure_map(map__12403);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12403__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__12404,msg){
var map__12405 = p__12404;
var map__12405__$1 = cljs.core.__destructure_map(map__12405);
var runtime = map__12405__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12405__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__12417,p__12418){
var map__12420 = p__12417;
var map__12420__$1 = cljs.core.__destructure_map(map__12420);
var runtime = map__12420__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12420__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__12421 = p__12418;
var map__12421__$1 = cljs.core.__destructure_map(map__12421);
var msg = map__12421__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12421__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12421__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__12490 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__12492 = null;
var count__12493 = (0);
var i__12494 = (0);
while(true){
if((i__12494 < count__12493)){
var map__12508 = chunk__12492.cljs$core$IIndexed$_nth$arity$2(null,i__12494);
var map__12508__$1 = cljs.core.__destructure_map(map__12508);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12508__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__12559 = seq__12490;
var G__12560 = chunk__12492;
var G__12561 = count__12493;
var G__12562 = (i__12494 + (1));
seq__12490 = G__12559;
chunk__12492 = G__12560;
count__12493 = G__12561;
i__12494 = G__12562;
continue;
} else {
var G__12563 = seq__12490;
var G__12564 = chunk__12492;
var G__12565 = count__12493;
var G__12566 = (i__12494 + (1));
seq__12490 = G__12563;
chunk__12492 = G__12564;
count__12493 = G__12565;
i__12494 = G__12566;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12490);
if(temp__5804__auto__){
var seq__12490__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12490__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12490__$1);
var G__12567 = cljs.core.chunk_rest(seq__12490__$1);
var G__12568 = c__5525__auto__;
var G__12569 = cljs.core.count(c__5525__auto__);
var G__12570 = (0);
seq__12490 = G__12567;
chunk__12492 = G__12568;
count__12493 = G__12569;
i__12494 = G__12570;
continue;
} else {
var map__12512 = cljs.core.first(seq__12490__$1);
var map__12512__$1 = cljs.core.__destructure_map(map__12512);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12512__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__12571 = cljs.core.next(seq__12490__$1);
var G__12572 = null;
var G__12573 = (0);
var G__12574 = (0);
seq__12490 = G__12571;
chunk__12492 = G__12572;
count__12493 = G__12573;
i__12494 = G__12574;
continue;
} else {
var G__12575 = cljs.core.next(seq__12490__$1);
var G__12576 = null;
var G__12577 = (0);
var G__12578 = (0);
seq__12490 = G__12575;
chunk__12492 = G__12576;
count__12493 = G__12577;
i__12494 = G__12578;
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
