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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__22615){
var map__22616 = p__22615;
var map__22616__$1 = cljs.core.__destructure_map(map__22616);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22616__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22616__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22616__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22616__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__22617_22649 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__22618_22650 = null;
var count__22619_22651 = (0);
var i__22620_22652 = (0);
while(true){
if((i__22620_22652 < count__22619_22651)){
var vec__22633_22653 = chunk__22618_22650.cljs$core$IIndexed$_nth$arity$2(null,i__22620_22652);
var k_22654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22633_22653,(0),null);
var cb_22655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22633_22653,(1),null);
try{var G__22637_22656 = cljs.core.deref(re_frame.trace.traces);
(cb_22655.cljs$core$IFn$_invoke$arity$1 ? cb_22655.cljs$core$IFn$_invoke$arity$1(G__22637_22656) : cb_22655.call(null,G__22637_22656));
}catch (e22636){var e_22657 = e22636;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_22654,"while storing",cljs.core.deref(re_frame.trace.traces),e_22657], 0));
}

var G__22658 = seq__22617_22649;
var G__22659 = chunk__22618_22650;
var G__22660 = count__22619_22651;
var G__22661 = (i__22620_22652 + (1));
seq__22617_22649 = G__22658;
chunk__22618_22650 = G__22659;
count__22619_22651 = G__22660;
i__22620_22652 = G__22661;
continue;
} else {
var temp__5804__auto___22662 = cljs.core.seq(seq__22617_22649);
if(temp__5804__auto___22662){
var seq__22617_22663__$1 = temp__5804__auto___22662;
if(cljs.core.chunked_seq_QMARK_(seq__22617_22663__$1)){
var c__5525__auto___22664 = cljs.core.chunk_first(seq__22617_22663__$1);
var G__22665 = cljs.core.chunk_rest(seq__22617_22663__$1);
var G__22666 = c__5525__auto___22664;
var G__22667 = cljs.core.count(c__5525__auto___22664);
var G__22668 = (0);
seq__22617_22649 = G__22665;
chunk__22618_22650 = G__22666;
count__22619_22651 = G__22667;
i__22620_22652 = G__22668;
continue;
} else {
var vec__22638_22669 = cljs.core.first(seq__22617_22663__$1);
var k_22670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22638_22669,(0),null);
var cb_22671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22638_22669,(1),null);
try{var G__22642_22672 = cljs.core.deref(re_frame.trace.traces);
(cb_22671.cljs$core$IFn$_invoke$arity$1 ? cb_22671.cljs$core$IFn$_invoke$arity$1(G__22642_22672) : cb_22671.call(null,G__22642_22672));
}catch (e22641){var e_22673 = e22641;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_22670,"while storing",cljs.core.deref(re_frame.trace.traces),e_22673], 0));
}

var G__22674 = cljs.core.next(seq__22617_22663__$1);
var G__22675 = null;
var G__22676 = (0);
var G__22677 = (0);
seq__22617_22649 = G__22674;
chunk__22618_22650 = G__22675;
count__22619_22651 = G__22676;
i__22620_22652 = G__22677;
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
