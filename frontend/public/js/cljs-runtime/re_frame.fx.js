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
var _STAR_current_trace_STAR__orig_val__23028 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__23029 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__23029);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___23109 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___23109)){
var new_db_23110 = temp__5804__auto___23109;
var fexpr__23033_23111 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__23033_23111.cljs$core$IFn$_invoke$arity$1 ? fexpr__23033_23111.cljs$core$IFn$_invoke$arity$1(new_db_23110) : fexpr__23033_23111.call(null,new_db_23110));
} else {
}

var seq__23034 = cljs.core.seq(effects_without_db);
var chunk__23035 = null;
var count__23036 = (0);
var i__23037 = (0);
while(true){
if((i__23037 < count__23036)){
var vec__23046 = chunk__23035.cljs$core$IIndexed$_nth$arity$2(null,i__23037);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23046,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23046,(1),null);
var temp__5802__auto___23112 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23112)){
var effect_fn_23113 = temp__5802__auto___23112;
(effect_fn_23113.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23113.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23113.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23114 = seq__23034;
var G__23115 = chunk__23035;
var G__23116 = count__23036;
var G__23117 = (i__23037 + (1));
seq__23034 = G__23114;
chunk__23035 = G__23115;
count__23036 = G__23116;
i__23037 = G__23117;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23034);
if(temp__5804__auto__){
var seq__23034__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23034__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23034__$1);
var G__23118 = cljs.core.chunk_rest(seq__23034__$1);
var G__23119 = c__5525__auto__;
var G__23120 = cljs.core.count(c__5525__auto__);
var G__23121 = (0);
seq__23034 = G__23118;
chunk__23035 = G__23119;
count__23036 = G__23120;
i__23037 = G__23121;
continue;
} else {
var vec__23051 = cljs.core.first(seq__23034__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23051,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23051,(1),null);
var temp__5802__auto___23122 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23122)){
var effect_fn_23123 = temp__5802__auto___23122;
(effect_fn_23123.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23123.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23123.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23124 = cljs.core.next(seq__23034__$1);
var G__23125 = null;
var G__23126 = (0);
var G__23127 = (0);
seq__23034 = G__23124;
chunk__23035 = G__23125;
count__23036 = G__23126;
i__23037 = G__23127;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__22634__auto___23128 = re_frame.interop.now();
var duration__22635__auto___23129 = (end__22634__auto___23128 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22635__auto___23129,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__22634__auto___23128);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__23028);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___23130 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___23130)){
var new_db_23131 = temp__5804__auto___23130;
var fexpr__23054_23132 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__23054_23132.cljs$core$IFn$_invoke$arity$1 ? fexpr__23054_23132.cljs$core$IFn$_invoke$arity$1(new_db_23131) : fexpr__23054_23132.call(null,new_db_23131));
} else {
}

var seq__23055 = cljs.core.seq(effects_without_db);
var chunk__23056 = null;
var count__23057 = (0);
var i__23058 = (0);
while(true){
if((i__23058 < count__23057)){
var vec__23067 = chunk__23056.cljs$core$IIndexed$_nth$arity$2(null,i__23058);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23067,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23067,(1),null);
var temp__5802__auto___23133 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23133)){
var effect_fn_23134 = temp__5802__auto___23133;
(effect_fn_23134.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23134.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23134.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23135 = seq__23055;
var G__23136 = chunk__23056;
var G__23137 = count__23057;
var G__23138 = (i__23058 + (1));
seq__23055 = G__23135;
chunk__23056 = G__23136;
count__23057 = G__23137;
i__23058 = G__23138;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23055);
if(temp__5804__auto__){
var seq__23055__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23055__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23055__$1);
var G__23139 = cljs.core.chunk_rest(seq__23055__$1);
var G__23140 = c__5525__auto__;
var G__23141 = cljs.core.count(c__5525__auto__);
var G__23142 = (0);
seq__23055 = G__23139;
chunk__23056 = G__23140;
count__23057 = G__23141;
i__23058 = G__23142;
continue;
} else {
var vec__23070 = cljs.core.first(seq__23055__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23070,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23070,(1),null);
var temp__5802__auto___23143 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23143)){
var effect_fn_23145 = temp__5802__auto___23143;
(effect_fn_23145.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23145.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23145.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23146 = cljs.core.next(seq__23055__$1);
var G__23147 = null;
var G__23148 = (0);
var G__23149 = (0);
seq__23055 = G__23146;
chunk__23056 = G__23147;
count__23057 = G__23148;
i__23058 = G__23149;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__23073){
var map__23074 = p__23073;
var map__23074__$1 = cljs.core.__destructure_map(map__23074);
var effect = map__23074__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23074__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23074__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__23075 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23076 = null;
var count__23077 = (0);
var i__23078 = (0);
while(true){
if((i__23078 < count__23077)){
var effect = chunk__23076.cljs$core$IIndexed$_nth$arity$2(null,i__23078);
re_frame.fx.dispatch_later(effect);


var G__23152 = seq__23075;
var G__23153 = chunk__23076;
var G__23154 = count__23077;
var G__23155 = (i__23078 + (1));
seq__23075 = G__23152;
chunk__23076 = G__23153;
count__23077 = G__23154;
i__23078 = G__23155;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23075);
if(temp__5804__auto__){
var seq__23075__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23075__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23075__$1);
var G__23156 = cljs.core.chunk_rest(seq__23075__$1);
var G__23157 = c__5525__auto__;
var G__23158 = cljs.core.count(c__5525__auto__);
var G__23159 = (0);
seq__23075 = G__23156;
chunk__23076 = G__23157;
count__23077 = G__23158;
i__23078 = G__23159;
continue;
} else {
var effect = cljs.core.first(seq__23075__$1);
re_frame.fx.dispatch_later(effect);


var G__23161 = cljs.core.next(seq__23075__$1);
var G__23162 = null;
var G__23163 = (0);
var G__23164 = (0);
seq__23075 = G__23161;
chunk__23076 = G__23162;
count__23077 = G__23163;
i__23078 = G__23164;
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
var seq__23079 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__23080 = null;
var count__23081 = (0);
var i__23082 = (0);
while(true){
if((i__23082 < count__23081)){
var vec__23089 = chunk__23080.cljs$core$IIndexed$_nth$arity$2(null,i__23082);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23089,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23089,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___23165 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23165)){
var effect_fn_23166 = temp__5802__auto___23165;
(effect_fn_23166.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23166.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23166.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__23167 = seq__23079;
var G__23168 = chunk__23080;
var G__23169 = count__23081;
var G__23170 = (i__23082 + (1));
seq__23079 = G__23167;
chunk__23080 = G__23168;
count__23081 = G__23169;
i__23082 = G__23170;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23079);
if(temp__5804__auto__){
var seq__23079__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23079__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23079__$1);
var G__23171 = cljs.core.chunk_rest(seq__23079__$1);
var G__23172 = c__5525__auto__;
var G__23173 = cljs.core.count(c__5525__auto__);
var G__23174 = (0);
seq__23079 = G__23171;
chunk__23080 = G__23172;
count__23081 = G__23173;
i__23082 = G__23174;
continue;
} else {
var vec__23092 = cljs.core.first(seq__23079__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23092,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23092,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___23175 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23175)){
var effect_fn_23176 = temp__5802__auto___23175;
(effect_fn_23176.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23176.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23176.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__23177 = cljs.core.next(seq__23079__$1);
var G__23178 = null;
var G__23179 = (0);
var G__23180 = (0);
seq__23079 = G__23177;
chunk__23080 = G__23178;
count__23081 = G__23179;
i__23082 = G__23180;
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
var seq__23095 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23096 = null;
var count__23097 = (0);
var i__23098 = (0);
while(true){
if((i__23098 < count__23097)){
var event = chunk__23096.cljs$core$IIndexed$_nth$arity$2(null,i__23098);
re_frame.router.dispatch(event);


var G__23182 = seq__23095;
var G__23183 = chunk__23096;
var G__23184 = count__23097;
var G__23185 = (i__23098 + (1));
seq__23095 = G__23182;
chunk__23096 = G__23183;
count__23097 = G__23184;
i__23098 = G__23185;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23095);
if(temp__5804__auto__){
var seq__23095__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23095__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23095__$1);
var G__23186 = cljs.core.chunk_rest(seq__23095__$1);
var G__23187 = c__5525__auto__;
var G__23188 = cljs.core.count(c__5525__auto__);
var G__23189 = (0);
seq__23095 = G__23186;
chunk__23096 = G__23187;
count__23097 = G__23188;
i__23098 = G__23189;
continue;
} else {
var event = cljs.core.first(seq__23095__$1);
re_frame.router.dispatch(event);


var G__23190 = cljs.core.next(seq__23095__$1);
var G__23191 = null;
var G__23192 = (0);
var G__23193 = (0);
seq__23095 = G__23190;
chunk__23096 = G__23191;
count__23097 = G__23192;
i__23098 = G__23193;
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
var seq__23099 = cljs.core.seq(value);
var chunk__23100 = null;
var count__23101 = (0);
var i__23102 = (0);
while(true){
if((i__23102 < count__23101)){
var event = chunk__23100.cljs$core$IIndexed$_nth$arity$2(null,i__23102);
clear_event(event);


var G__23194 = seq__23099;
var G__23195 = chunk__23100;
var G__23196 = count__23101;
var G__23197 = (i__23102 + (1));
seq__23099 = G__23194;
chunk__23100 = G__23195;
count__23101 = G__23196;
i__23102 = G__23197;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23099);
if(temp__5804__auto__){
var seq__23099__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23099__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23099__$1);
var G__23198 = cljs.core.chunk_rest(seq__23099__$1);
var G__23199 = c__5525__auto__;
var G__23200 = cljs.core.count(c__5525__auto__);
var G__23201 = (0);
seq__23099 = G__23198;
chunk__23100 = G__23199;
count__23101 = G__23200;
i__23102 = G__23201;
continue;
} else {
var event = cljs.core.first(seq__23099__$1);
clear_event(event);


var G__23202 = cljs.core.next(seq__23099__$1);
var G__23203 = null;
var G__23204 = (0);
var G__23205 = (0);
seq__23099 = G__23202;
chunk__23100 = G__23203;
count__23101 = G__23204;
i__23102 = G__23205;
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
