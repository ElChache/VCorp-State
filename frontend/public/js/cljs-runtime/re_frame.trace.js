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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__9580){
var map__9583 = p__9580;
var map__9583__$1 = cljs.core.__destructure_map(map__9583);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9583__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9583__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9583__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9583__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__9588_9667 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__9589_9668 = null;
var count__9590_9669 = (0);
var i__9591_9670 = (0);
while(true){
if((i__9591_9670 < count__9590_9669)){
var vec__9618_9671 = chunk__9589_9668.cljs$core$IIndexed$_nth$arity$2(null,i__9591_9670);
var k_9672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9618_9671,(0),null);
var cb_9673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9618_9671,(1),null);
try{var G__9624_9674 = cljs.core.deref(re_frame.trace.traces);
(cb_9673.cljs$core$IFn$_invoke$arity$1 ? cb_9673.cljs$core$IFn$_invoke$arity$1(G__9624_9674) : cb_9673.call(null,G__9624_9674));
}catch (e9621){var e_9676 = e9621;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_9672,"while storing",cljs.core.deref(re_frame.trace.traces),e_9676], 0));
}

var G__9682 = seq__9588_9667;
var G__9683 = chunk__9589_9668;
var G__9684 = count__9590_9669;
var G__9685 = (i__9591_9670 + (1));
seq__9588_9667 = G__9682;
chunk__9589_9668 = G__9683;
count__9590_9669 = G__9684;
i__9591_9670 = G__9685;
continue;
} else {
var temp__5804__auto___9686 = cljs.core.seq(seq__9588_9667);
if(temp__5804__auto___9686){
var seq__9588_9687__$1 = temp__5804__auto___9686;
if(cljs.core.chunked_seq_QMARK_(seq__9588_9687__$1)){
var c__5525__auto___9688 = cljs.core.chunk_first(seq__9588_9687__$1);
var G__9689 = cljs.core.chunk_rest(seq__9588_9687__$1);
var G__9690 = c__5525__auto___9688;
var G__9691 = cljs.core.count(c__5525__auto___9688);
var G__9692 = (0);
seq__9588_9667 = G__9689;
chunk__9589_9668 = G__9690;
count__9590_9669 = G__9691;
i__9591_9670 = G__9692;
continue;
} else {
var vec__9626_9696 = cljs.core.first(seq__9588_9687__$1);
var k_9697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9626_9696,(0),null);
var cb_9698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9626_9696,(1),null);
try{var G__9634_9699 = cljs.core.deref(re_frame.trace.traces);
(cb_9698.cljs$core$IFn$_invoke$arity$1 ? cb_9698.cljs$core$IFn$_invoke$arity$1(G__9634_9699) : cb_9698.call(null,G__9634_9699));
}catch (e9629){var e_9700 = e9629;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_9697,"while storing",cljs.core.deref(re_frame.trace.traces),e_9700], 0));
}

var G__9701 = cljs.core.next(seq__9588_9687__$1);
var G__9702 = null;
var G__9703 = (0);
var G__9704 = (0);
seq__9588_9667 = G__9701;
chunk__9589_9668 = G__9702;
count__9590_9669 = G__9703;
i__9591_9670 = G__9704;
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
