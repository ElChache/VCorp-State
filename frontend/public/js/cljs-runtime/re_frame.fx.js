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
var _STAR_current_trace_STAR__orig_val__23000 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__23001 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__23001);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___23131 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___23131)){
var new_db_23133 = temp__5804__auto___23131;
var fexpr__23006_23134 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__23006_23134.cljs$core$IFn$_invoke$arity$1 ? fexpr__23006_23134.cljs$core$IFn$_invoke$arity$1(new_db_23133) : fexpr__23006_23134.call(null,new_db_23133));
} else {
}

var seq__23007 = cljs.core.seq(effects_without_db);
var chunk__23008 = null;
var count__23009 = (0);
var i__23010 = (0);
while(true){
if((i__23010 < count__23009)){
var vec__23021 = chunk__23008.cljs$core$IIndexed$_nth$arity$2(null,i__23010);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23021,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23021,(1),null);
var temp__5802__auto___23135 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23135)){
var effect_fn_23136 = temp__5802__auto___23135;
(effect_fn_23136.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23136.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23136.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23137 = seq__23007;
var G__23138 = chunk__23008;
var G__23139 = count__23009;
var G__23140 = (i__23010 + (1));
seq__23007 = G__23137;
chunk__23008 = G__23138;
count__23009 = G__23139;
i__23010 = G__23140;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23007);
if(temp__5804__auto__){
var seq__23007__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23007__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23007__$1);
var G__23141 = cljs.core.chunk_rest(seq__23007__$1);
var G__23142 = c__5525__auto__;
var G__23143 = cljs.core.count(c__5525__auto__);
var G__23144 = (0);
seq__23007 = G__23141;
chunk__23008 = G__23142;
count__23009 = G__23143;
i__23010 = G__23144;
continue;
} else {
var vec__23030 = cljs.core.first(seq__23007__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23030,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23030,(1),null);
var temp__5802__auto___23145 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23145)){
var effect_fn_23146 = temp__5802__auto___23145;
(effect_fn_23146.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23146.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23146.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23147 = cljs.core.next(seq__23007__$1);
var G__23148 = null;
var G__23149 = (0);
var G__23150 = (0);
seq__23007 = G__23147;
chunk__23008 = G__23148;
count__23009 = G__23149;
i__23010 = G__23150;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__22595__auto___23151 = re_frame.interop.now();
var duration__22596__auto___23152 = (end__22595__auto___23151 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22596__auto___23152,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__22595__auto___23151);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__23000);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___23153 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___23153)){
var new_db_23154 = temp__5804__auto___23153;
var fexpr__23039_23155 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__23039_23155.cljs$core$IFn$_invoke$arity$1 ? fexpr__23039_23155.cljs$core$IFn$_invoke$arity$1(new_db_23154) : fexpr__23039_23155.call(null,new_db_23154));
} else {
}

var seq__23044 = cljs.core.seq(effects_without_db);
var chunk__23045 = null;
var count__23046 = (0);
var i__23047 = (0);
while(true){
if((i__23047 < count__23046)){
var vec__23060 = chunk__23045.cljs$core$IIndexed$_nth$arity$2(null,i__23047);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23060,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23060,(1),null);
var temp__5802__auto___23156 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23156)){
var effect_fn_23157 = temp__5802__auto___23156;
(effect_fn_23157.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23157.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23157.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23162 = seq__23044;
var G__23163 = chunk__23045;
var G__23164 = count__23046;
var G__23165 = (i__23047 + (1));
seq__23044 = G__23162;
chunk__23045 = G__23163;
count__23046 = G__23164;
i__23047 = G__23165;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23044);
if(temp__5804__auto__){
var seq__23044__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23044__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23044__$1);
var G__23166 = cljs.core.chunk_rest(seq__23044__$1);
var G__23167 = c__5525__auto__;
var G__23168 = cljs.core.count(c__5525__auto__);
var G__23169 = (0);
seq__23044 = G__23166;
chunk__23045 = G__23167;
count__23046 = G__23168;
i__23047 = G__23169;
continue;
} else {
var vec__23067 = cljs.core.first(seq__23044__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23067,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23067,(1),null);
var temp__5802__auto___23170 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23170)){
var effect_fn_23171 = temp__5802__auto___23170;
(effect_fn_23171.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23171.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23171.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23173 = cljs.core.next(seq__23044__$1);
var G__23174 = null;
var G__23175 = (0);
var G__23176 = (0);
seq__23044 = G__23173;
chunk__23045 = G__23174;
count__23046 = G__23175;
i__23047 = G__23176;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__23071){
var map__23072 = p__23071;
var map__23072__$1 = cljs.core.__destructure_map(map__23072);
var effect = map__23072__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23072__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23072__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var chunk__23077 = null;
var count__23078 = (0);
var i__23079 = (0);
while(true){
if((i__23079 < count__23078)){
var effect = chunk__23077.cljs$core$IIndexed$_nth$arity$2(null,i__23079);
re_frame.fx.dispatch_later(effect);


var G__23177 = seq__23075;
var G__23178 = chunk__23077;
var G__23179 = count__23078;
var G__23180 = (i__23079 + (1));
seq__23075 = G__23177;
chunk__23077 = G__23178;
count__23078 = G__23179;
i__23079 = G__23180;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23075);
if(temp__5804__auto__){
var seq__23075__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23075__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23075__$1);
var G__23181 = cljs.core.chunk_rest(seq__23075__$1);
var G__23182 = c__5525__auto__;
var G__23183 = cljs.core.count(c__5525__auto__);
var G__23184 = (0);
seq__23075 = G__23181;
chunk__23077 = G__23182;
count__23078 = G__23183;
i__23079 = G__23184;
continue;
} else {
var effect = cljs.core.first(seq__23075__$1);
re_frame.fx.dispatch_later(effect);


var G__23185 = cljs.core.next(seq__23075__$1);
var G__23186 = null;
var G__23187 = (0);
var G__23188 = (0);
seq__23075 = G__23185;
chunk__23077 = G__23186;
count__23078 = G__23187;
i__23079 = G__23188;
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
var seq__23083 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__23084 = null;
var count__23085 = (0);
var i__23086 = (0);
while(true){
if((i__23086 < count__23085)){
var vec__23099 = chunk__23084.cljs$core$IIndexed$_nth$arity$2(null,i__23086);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23099,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23099,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___23190 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23190)){
var effect_fn_23191 = temp__5802__auto___23190;
(effect_fn_23191.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23191.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23191.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__23193 = seq__23083;
var G__23194 = chunk__23084;
var G__23195 = count__23085;
var G__23196 = (i__23086 + (1));
seq__23083 = G__23193;
chunk__23084 = G__23194;
count__23085 = G__23195;
i__23086 = G__23196;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23083);
if(temp__5804__auto__){
var seq__23083__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23083__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23083__$1);
var G__23200 = cljs.core.chunk_rest(seq__23083__$1);
var G__23201 = c__5525__auto__;
var G__23202 = cljs.core.count(c__5525__auto__);
var G__23203 = (0);
seq__23083 = G__23200;
chunk__23084 = G__23201;
count__23085 = G__23202;
i__23086 = G__23203;
continue;
} else {
var vec__23103 = cljs.core.first(seq__23083__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23103,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23103,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___23205 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23205)){
var effect_fn_23207 = temp__5802__auto___23205;
(effect_fn_23207.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23207.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23207.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__23208 = cljs.core.next(seq__23083__$1);
var G__23209 = null;
var G__23210 = (0);
var G__23211 = (0);
seq__23083 = G__23208;
chunk__23084 = G__23209;
count__23085 = G__23210;
i__23086 = G__23211;
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
var seq__23113 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23114 = null;
var count__23115 = (0);
var i__23116 = (0);
while(true){
if((i__23116 < count__23115)){
var event = chunk__23114.cljs$core$IIndexed$_nth$arity$2(null,i__23116);
re_frame.router.dispatch(event);


var G__23213 = seq__23113;
var G__23214 = chunk__23114;
var G__23215 = count__23115;
var G__23216 = (i__23116 + (1));
seq__23113 = G__23213;
chunk__23114 = G__23214;
count__23115 = G__23215;
i__23116 = G__23216;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23113);
if(temp__5804__auto__){
var seq__23113__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23113__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23113__$1);
var G__23217 = cljs.core.chunk_rest(seq__23113__$1);
var G__23218 = c__5525__auto__;
var G__23219 = cljs.core.count(c__5525__auto__);
var G__23220 = (0);
seq__23113 = G__23217;
chunk__23114 = G__23218;
count__23115 = G__23219;
i__23116 = G__23220;
continue;
} else {
var event = cljs.core.first(seq__23113__$1);
re_frame.router.dispatch(event);


var G__23221 = cljs.core.next(seq__23113__$1);
var G__23222 = null;
var G__23223 = (0);
var G__23224 = (0);
seq__23113 = G__23221;
chunk__23114 = G__23222;
count__23115 = G__23223;
i__23116 = G__23224;
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
var seq__23123 = cljs.core.seq(value);
var chunk__23124 = null;
var count__23125 = (0);
var i__23126 = (0);
while(true){
if((i__23126 < count__23125)){
var event = chunk__23124.cljs$core$IIndexed$_nth$arity$2(null,i__23126);
clear_event(event);


var G__23225 = seq__23123;
var G__23226 = chunk__23124;
var G__23227 = count__23125;
var G__23228 = (i__23126 + (1));
seq__23123 = G__23225;
chunk__23124 = G__23226;
count__23125 = G__23227;
i__23126 = G__23228;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23123);
if(temp__5804__auto__){
var seq__23123__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23123__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23123__$1);
var G__23229 = cljs.core.chunk_rest(seq__23123__$1);
var G__23230 = c__5525__auto__;
var G__23231 = cljs.core.count(c__5525__auto__);
var G__23232 = (0);
seq__23123 = G__23229;
chunk__23124 = G__23230;
count__23125 = G__23231;
i__23126 = G__23232;
continue;
} else {
var event = cljs.core.first(seq__23123__$1);
clear_event(event);


var G__23233 = cljs.core.next(seq__23123__$1);
var G__23234 = null;
var G__23235 = (0);
var G__23236 = (0);
seq__23123 = G__23233;
chunk__23124 = G__23234;
count__23125 = G__23235;
i__23126 = G__23236;
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
