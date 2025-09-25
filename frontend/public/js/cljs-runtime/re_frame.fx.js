goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__10115 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__10116 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__10116);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___10252 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___10252)){
var new_db_10254 = temp__5804__auto___10252;
var fexpr__10118_10255 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__10118_10255.cljs$core$IFn$_invoke$arity$1 ? fexpr__10118_10255.cljs$core$IFn$_invoke$arity$1(new_db_10254) : fexpr__10118_10255.call(null,new_db_10254));
} else {
}

var seq__10119 = cljs.core.seq(effects_without_db);
var chunk__10120 = null;
var count__10121 = (0);
var i__10122 = (0);
while(true){
if((i__10122 < count__10121)){
var vec__10148 = chunk__10120.cljs$core$IIndexed$_nth$arity$2(null,i__10122);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10148,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10148,(1),null);
var temp__5802__auto___10265 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___10265)){
var effect_fn_10271 = temp__5802__auto___10265;
(effect_fn_10271.cljs$core$IFn$_invoke$arity$1 ? effect_fn_10271.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_10271.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__10273 = seq__10119;
var G__10274 = chunk__10120;
var G__10275 = count__10121;
var G__10276 = (i__10122 + (1));
seq__10119 = G__10273;
chunk__10120 = G__10274;
count__10121 = G__10275;
i__10122 = G__10276;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__10119);
if(temp__5804__auto__){
var seq__10119__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10119__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__10119__$1);
var G__10280 = cljs.core.chunk_rest(seq__10119__$1);
var G__10281 = c__5525__auto__;
var G__10282 = cljs.core.count(c__5525__auto__);
var G__10283 = (0);
seq__10119 = G__10280;
chunk__10120 = G__10281;
count__10121 = G__10282;
i__10122 = G__10283;
continue;
} else {
var vec__10151 = cljs.core.first(seq__10119__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10151,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10151,(1),null);
var temp__5802__auto___10287 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___10287)){
var effect_fn_10288 = temp__5802__auto___10287;
(effect_fn_10288.cljs$core$IFn$_invoke$arity$1 ? effect_fn_10288.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_10288.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__10290 = cljs.core.next(seq__10119__$1);
var G__10291 = null;
var G__10292 = (0);
var G__10293 = (0);
seq__10119 = G__10290;
chunk__10120 = G__10291;
count__10121 = G__10292;
i__10122 = G__10293;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__9544__auto___10298 = re_frame.interop.now();
var duration__9545__auto___10299 = (end__9544__auto___10298 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__9545__auto___10299,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__9544__auto___10298);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__10115);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___10303 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___10303)){
var new_db_10304 = temp__5804__auto___10303;
var fexpr__10155_10305 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__10155_10305.cljs$core$IFn$_invoke$arity$1 ? fexpr__10155_10305.cljs$core$IFn$_invoke$arity$1(new_db_10304) : fexpr__10155_10305.call(null,new_db_10304));
} else {
}

var seq__10156 = cljs.core.seq(effects_without_db);
var chunk__10157 = null;
var count__10158 = (0);
var i__10159 = (0);
while(true){
if((i__10159 < count__10158)){
var vec__10170 = chunk__10157.cljs$core$IIndexed$_nth$arity$2(null,i__10159);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10170,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10170,(1),null);
var temp__5802__auto___10311 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___10311)){
var effect_fn_10313 = temp__5802__auto___10311;
(effect_fn_10313.cljs$core$IFn$_invoke$arity$1 ? effect_fn_10313.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_10313.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__10315 = seq__10156;
var G__10316 = chunk__10157;
var G__10317 = count__10158;
var G__10318 = (i__10159 + (1));
seq__10156 = G__10315;
chunk__10157 = G__10316;
count__10158 = G__10317;
i__10159 = G__10318;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__10156);
if(temp__5804__auto__){
var seq__10156__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10156__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__10156__$1);
var G__10322 = cljs.core.chunk_rest(seq__10156__$1);
var G__10323 = c__5525__auto__;
var G__10324 = cljs.core.count(c__5525__auto__);
var G__10325 = (0);
seq__10156 = G__10322;
chunk__10157 = G__10323;
count__10158 = G__10324;
i__10159 = G__10325;
continue;
} else {
var vec__10179 = cljs.core.first(seq__10156__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10179,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10179,(1),null);
var temp__5802__auto___10326 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___10326)){
var effect_fn_10327 = temp__5802__auto___10326;
(effect_fn_10327.cljs$core$IFn$_invoke$arity$1 ? effect_fn_10327.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_10327.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__10328 = cljs.core.next(seq__10156__$1);
var G__10329 = null;
var G__10330 = (0);
var G__10331 = (0);
seq__10156 = G__10328;
chunk__10157 = G__10329;
count__10158 = G__10330;
i__10159 = G__10331;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__10182){
var map__10185 = p__10182;
var map__10185__$1 = cljs.core.__destructure_map(map__10185);
var effect = map__10185__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10185__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10185__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__10190 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__10191 = null;
var count__10192 = (0);
var i__10193 = (0);
while(true){
if((i__10193 < count__10192)){
var effect = chunk__10191.cljs$core$IIndexed$_nth$arity$2(null,i__10193);
re_frame.fx.dispatch_later(effect);


var G__10337 = seq__10190;
var G__10338 = chunk__10191;
var G__10339 = count__10192;
var G__10340 = (i__10193 + (1));
seq__10190 = G__10337;
chunk__10191 = G__10338;
count__10192 = G__10339;
i__10193 = G__10340;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__10190);
if(temp__5804__auto__){
var seq__10190__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10190__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__10190__$1);
var G__10341 = cljs.core.chunk_rest(seq__10190__$1);
var G__10342 = c__5525__auto__;
var G__10343 = cljs.core.count(c__5525__auto__);
var G__10344 = (0);
seq__10190 = G__10341;
chunk__10191 = G__10342;
count__10192 = G__10343;
i__10193 = G__10344;
continue;
} else {
var effect = cljs.core.first(seq__10190__$1);
re_frame.fx.dispatch_later(effect);


var G__10345 = cljs.core.next(seq__10190__$1);
var G__10346 = null;
var G__10347 = (0);
var G__10348 = (0);
seq__10190 = G__10345;
chunk__10191 = G__10346;
count__10192 = G__10347;
i__10193 = G__10348;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__10206 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__10207 = null;
var count__10208 = (0);
var i__10209 = (0);
while(true){
if((i__10209 < count__10208)){
var vec__10219 = chunk__10207.cljs$core$IIndexed$_nth$arity$2(null,i__10209);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10219,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10219,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___10352 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___10352)){
var effect_fn_10353 = temp__5802__auto___10352;
(effect_fn_10353.cljs$core$IFn$_invoke$arity$1 ? effect_fn_10353.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_10353.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__10358 = seq__10206;
var G__10359 = chunk__10207;
var G__10360 = count__10208;
var G__10361 = (i__10209 + (1));
seq__10206 = G__10358;
chunk__10207 = G__10359;
count__10208 = G__10360;
i__10209 = G__10361;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__10206);
if(temp__5804__auto__){
var seq__10206__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10206__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__10206__$1);
var G__10363 = cljs.core.chunk_rest(seq__10206__$1);
var G__10364 = c__5525__auto__;
var G__10365 = cljs.core.count(c__5525__auto__);
var G__10366 = (0);
seq__10206 = G__10363;
chunk__10207 = G__10364;
count__10208 = G__10365;
i__10209 = G__10366;
continue;
} else {
var vec__10223 = cljs.core.first(seq__10206__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10223,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10223,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___10367 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___10367)){
var effect_fn_10368 = temp__5802__auto___10367;
(effect_fn_10368.cljs$core$IFn$_invoke$arity$1 ? effect_fn_10368.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_10368.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__10369 = cljs.core.next(seq__10206__$1);
var G__10370 = null;
var G__10371 = (0);
var G__10372 = (0);
seq__10206 = G__10369;
chunk__10207 = G__10370;
count__10208 = G__10371;
i__10209 = G__10372;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__10228 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__10229 = null;
var count__10230 = (0);
var i__10231 = (0);
while(true){
if((i__10231 < count__10230)){
var event = chunk__10229.cljs$core$IIndexed$_nth$arity$2(null,i__10231);
re_frame.router.dispatch(event);


var G__10374 = seq__10228;
var G__10375 = chunk__10229;
var G__10376 = count__10230;
var G__10377 = (i__10231 + (1));
seq__10228 = G__10374;
chunk__10229 = G__10375;
count__10230 = G__10376;
i__10231 = G__10377;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__10228);
if(temp__5804__auto__){
var seq__10228__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10228__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__10228__$1);
var G__10379 = cljs.core.chunk_rest(seq__10228__$1);
var G__10380 = c__5525__auto__;
var G__10381 = cljs.core.count(c__5525__auto__);
var G__10382 = (0);
seq__10228 = G__10379;
chunk__10229 = G__10380;
count__10230 = G__10381;
i__10231 = G__10382;
continue;
} else {
var event = cljs.core.first(seq__10228__$1);
re_frame.router.dispatch(event);


var G__10383 = cljs.core.next(seq__10228__$1);
var G__10384 = null;
var G__10385 = (0);
var G__10386 = (0);
seq__10228 = G__10383;
chunk__10229 = G__10384;
count__10230 = G__10385;
i__10231 = G__10386;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__10241 = cljs.core.seq(value);
var chunk__10242 = null;
var count__10243 = (0);
var i__10244 = (0);
while(true){
if((i__10244 < count__10243)){
var event = chunk__10242.cljs$core$IIndexed$_nth$arity$2(null,i__10244);
clear_event(event);


var G__10387 = seq__10241;
var G__10388 = chunk__10242;
var G__10389 = count__10243;
var G__10390 = (i__10244 + (1));
seq__10241 = G__10387;
chunk__10242 = G__10388;
count__10243 = G__10389;
i__10244 = G__10390;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__10241);
if(temp__5804__auto__){
var seq__10241__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10241__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__10241__$1);
var G__10391 = cljs.core.chunk_rest(seq__10241__$1);
var G__10392 = c__5525__auto__;
var G__10393 = cljs.core.count(c__5525__auto__);
var G__10394 = (0);
seq__10241 = G__10391;
chunk__10242 = G__10392;
count__10243 = G__10393;
i__10244 = G__10394;
continue;
} else {
var event = cljs.core.first(seq__10241__$1);
clear_event(event);


var G__10395 = cljs.core.next(seq__10241__$1);
var G__10396 = null;
var G__10397 = (0);
var G__10398 = (0);
seq__10241 = G__10395;
chunk__10242 = G__10396;
count__10243 = G__10397;
i__10244 = G__10398;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
