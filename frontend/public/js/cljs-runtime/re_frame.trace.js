goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__22654){
var map__22655 = p__22654;
var map__22655__$1 = cljs.core.__destructure_map(map__22655);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22655__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22655__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22655__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22655__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5002__auto__ = child_of;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__22656_22688 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__22657_22689 = null;
var count__22658_22690 = (0);
var i__22659_22691 = (0);
while(true){
if((i__22659_22691 < count__22658_22690)){
var vec__22672_22692 = chunk__22657_22689.cljs$core$IIndexed$_nth$arity$2(null,i__22659_22691);
var k_22693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22672_22692,(0),null);
var cb_22694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22672_22692,(1),null);
try{var G__22676_22695 = cljs.core.deref(re_frame.trace.traces);
(cb_22694.cljs$core$IFn$_invoke$arity$1 ? cb_22694.cljs$core$IFn$_invoke$arity$1(G__22676_22695) : cb_22694.call(null,G__22676_22695));
}catch (e22675){var e_22696 = e22675;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_22693,"while storing",cljs.core.deref(re_frame.trace.traces),e_22696], 0));
}

var G__22697 = seq__22656_22688;
var G__22698 = chunk__22657_22689;
var G__22699 = count__22658_22690;
var G__22700 = (i__22659_22691 + (1));
seq__22656_22688 = G__22697;
chunk__22657_22689 = G__22698;
count__22658_22690 = G__22699;
i__22659_22691 = G__22700;
continue;
} else {
var temp__5804__auto___22701 = cljs.core.seq(seq__22656_22688);
if(temp__5804__auto___22701){
var seq__22656_22702__$1 = temp__5804__auto___22701;
if(cljs.core.chunked_seq_QMARK_(seq__22656_22702__$1)){
var c__5525__auto___22703 = cljs.core.chunk_first(seq__22656_22702__$1);
var G__22704 = cljs.core.chunk_rest(seq__22656_22702__$1);
var G__22705 = c__5525__auto___22703;
var G__22706 = cljs.core.count(c__5525__auto___22703);
var G__22707 = (0);
seq__22656_22688 = G__22704;
chunk__22657_22689 = G__22705;
count__22658_22690 = G__22706;
i__22659_22691 = G__22707;
continue;
} else {
var vec__22677_22708 = cljs.core.first(seq__22656_22702__$1);
var k_22709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22677_22708,(0),null);
var cb_22710 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22677_22708,(1),null);
try{var G__22681_22712 = cljs.core.deref(re_frame.trace.traces);
(cb_22710.cljs$core$IFn$_invoke$arity$1 ? cb_22710.cljs$core$IFn$_invoke$arity$1(G__22681_22712) : cb_22710.call(null,G__22681_22712));
}catch (e22680){var e_22713 = e22680;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_22709,"while storing",cljs.core.deref(re_frame.trace.traces),e_22713], 0));
}

var G__22714 = cljs.core.next(seq__22656_22702__$1);
var G__22715 = null;
var G__22716 = (0);
var G__22717 = (0);
seq__22656_22688 = G__22714;
chunk__22657_22689 = G__22715;
count__22658_22690 = G__22716;
i__22659_22691 = G__22717;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
