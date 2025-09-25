goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18513 = arguments.length;
var i__5727__auto___18514 = (0);
while(true){
if((i__5727__auto___18514 < len__5726__auto___18513)){
args__5732__auto__.push((arguments[i__5727__auto___18514]));

var G__18517 = (i__5727__auto___18514 + (1));
i__5727__auto___18514 = G__18517;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq17825){
var G__17826 = cljs.core.first(seq17825);
var seq17825__$1 = cljs.core.next(seq17825);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17826,seq17825__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__17884 = cljs.core.seq(sources);
var chunk__17886 = null;
var count__17887 = (0);
var i__17888 = (0);
while(true){
if((i__17888 < count__17887)){
var map__17910 = chunk__17886.cljs$core$IIndexed$_nth$arity$2(null,i__17888);
var map__17910__$1 = cljs.core.__destructure_map(map__17910);
var src = map__17910__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17910__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17910__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17910__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17910__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e17913){var e_18523 = e17913;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_18523);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_18523.message)].join('')));
}

var G__18525 = seq__17884;
var G__18526 = chunk__17886;
var G__18527 = count__17887;
var G__18528 = (i__17888 + (1));
seq__17884 = G__18525;
chunk__17886 = G__18526;
count__17887 = G__18527;
i__17888 = G__18528;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17884);
if(temp__5804__auto__){
var seq__17884__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17884__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__17884__$1);
var G__18531 = cljs.core.chunk_rest(seq__17884__$1);
var G__18532 = c__5525__auto__;
var G__18533 = cljs.core.count(c__5525__auto__);
var G__18534 = (0);
seq__17884 = G__18531;
chunk__17886 = G__18532;
count__17887 = G__18533;
i__17888 = G__18534;
continue;
} else {
var map__17927 = cljs.core.first(seq__17884__$1);
var map__17927__$1 = cljs.core.__destructure_map(map__17927);
var src = map__17927__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17927__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17927__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17927__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17927__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e17928){var e_18539 = e17928;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_18539);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_18539.message)].join('')));
}

var G__18544 = cljs.core.next(seq__17884__$1);
var G__18545 = null;
var G__18546 = (0);
var G__18547 = (0);
seq__17884 = G__18544;
chunk__17886 = G__18545;
count__17887 = G__18546;
i__17888 = G__18547;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__17942 = cljs.core.seq(js_requires);
var chunk__17943 = null;
var count__17944 = (0);
var i__17945 = (0);
while(true){
if((i__17945 < count__17944)){
var js_ns = chunk__17943.cljs$core$IIndexed$_nth$arity$2(null,i__17945);
var require_str_18549 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_18549);


var G__18550 = seq__17942;
var G__18551 = chunk__17943;
var G__18552 = count__17944;
var G__18553 = (i__17945 + (1));
seq__17942 = G__18550;
chunk__17943 = G__18551;
count__17944 = G__18552;
i__17945 = G__18553;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17942);
if(temp__5804__auto__){
var seq__17942__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17942__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__17942__$1);
var G__18554 = cljs.core.chunk_rest(seq__17942__$1);
var G__18555 = c__5525__auto__;
var G__18556 = cljs.core.count(c__5525__auto__);
var G__18557 = (0);
seq__17942 = G__18554;
chunk__17943 = G__18555;
count__17944 = G__18556;
i__17945 = G__18557;
continue;
} else {
var js_ns = cljs.core.first(seq__17942__$1);
var require_str_18558 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_18558);


var G__18562 = cljs.core.next(seq__17942__$1);
var G__18563 = null;
var G__18564 = (0);
var G__18565 = (0);
seq__17942 = G__18562;
chunk__17943 = G__18563;
count__17944 = G__18564;
i__17945 = G__18565;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__17950){
var map__17951 = p__17950;
var map__17951__$1 = cljs.core.__destructure_map(map__17951);
var msg = map__17951__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17951__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17951__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__17952(s__17953){
return (new cljs.core.LazySeq(null,(function (){
var s__17953__$1 = s__17953;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17953__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__17958 = cljs.core.first(xs__6360__auto__);
var map__17958__$1 = cljs.core.__destructure_map(map__17958);
var src = map__17958__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17958__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17958__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__17953__$1,map__17958,map__17958__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__17951,map__17951__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__17952_$_iter__17954(s__17955){
return (new cljs.core.LazySeq(null,((function (s__17953__$1,map__17958,map__17958__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__17951,map__17951__$1,msg,info,reload_info){
return (function (){
var s__17955__$1 = s__17955;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__17955__$1);
if(temp__5804__auto____$1){
var s__17955__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17955__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__17955__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__17957 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__17956 = (0);
while(true){
if((i__17956 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__17956);
cljs.core.chunk_append(b__17957,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__18572 = (i__17956 + (1));
i__17956 = G__18572;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17957),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__17952_$_iter__17954(cljs.core.chunk_rest(s__17955__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17957),null);
}
} else {
var warning = cljs.core.first(s__17955__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__17952_$_iter__17954(cljs.core.rest(s__17955__$2)));
}
} else {
return null;
}
break;
}
});})(s__17953__$1,map__17958,map__17958__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__17951,map__17951__$1,msg,info,reload_info))
,null,null));
});})(s__17953__$1,map__17958,map__17958__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__17951,map__17951__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__17952(cljs.core.rest(s__17953__$1)));
} else {
var G__18577 = cljs.core.rest(s__17953__$1);
s__17953__$1 = G__18577;
continue;
}
} else {
var G__18578 = cljs.core.rest(s__17953__$1);
s__17953__$1 = G__18578;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__17969_18579 = cljs.core.seq(warnings);
var chunk__17970_18580 = null;
var count__17971_18581 = (0);
var i__17972_18582 = (0);
while(true){
if((i__17972_18582 < count__17971_18581)){
var map__17979_18583 = chunk__17970_18580.cljs$core$IIndexed$_nth$arity$2(null,i__17972_18582);
var map__17979_18584__$1 = cljs.core.__destructure_map(map__17979_18583);
var w_18585 = map__17979_18584__$1;
var msg_18586__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17979_18584__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_18587 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17979_18584__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_18588 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17979_18584__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_18589 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17979_18584__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_18589)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_18587),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_18588),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_18586__$1)].join(''));


var G__18593 = seq__17969_18579;
var G__18594 = chunk__17970_18580;
var G__18595 = count__17971_18581;
var G__18596 = (i__17972_18582 + (1));
seq__17969_18579 = G__18593;
chunk__17970_18580 = G__18594;
count__17971_18581 = G__18595;
i__17972_18582 = G__18596;
continue;
} else {
var temp__5804__auto___18597 = cljs.core.seq(seq__17969_18579);
if(temp__5804__auto___18597){
var seq__17969_18600__$1 = temp__5804__auto___18597;
if(cljs.core.chunked_seq_QMARK_(seq__17969_18600__$1)){
var c__5525__auto___18601 = cljs.core.chunk_first(seq__17969_18600__$1);
var G__18602 = cljs.core.chunk_rest(seq__17969_18600__$1);
var G__18603 = c__5525__auto___18601;
var G__18604 = cljs.core.count(c__5525__auto___18601);
var G__18605 = (0);
seq__17969_18579 = G__18602;
chunk__17970_18580 = G__18603;
count__17971_18581 = G__18604;
i__17972_18582 = G__18605;
continue;
} else {
var map__17980_18606 = cljs.core.first(seq__17969_18600__$1);
var map__17980_18607__$1 = cljs.core.__destructure_map(map__17980_18606);
var w_18608 = map__17980_18607__$1;
var msg_18609__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17980_18607__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_18610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17980_18607__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_18611 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17980_18607__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_18612 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17980_18607__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_18612)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_18610),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_18611),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_18609__$1)].join(''));


var G__18614 = cljs.core.next(seq__17969_18600__$1);
var G__18615 = null;
var G__18616 = (0);
var G__18617 = (0);
seq__17969_18579 = G__18614;
chunk__17970_18580 = G__18615;
count__17971_18581 = G__18616;
i__17972_18582 = G__18617;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__17949_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__17949_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__17982 = node_uri;
G__17982.setQuery(null);

G__17982.setPath(new$);

return G__17982;
})());
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__17983){
var map__17984 = p__17983;
var map__17984__$1 = cljs.core.__destructure_map(map__17984);
var msg = map__17984__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17984__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17984__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__17985 = cljs.core.seq(updates);
var chunk__17987 = null;
var count__17988 = (0);
var i__17989 = (0);
while(true){
if((i__17989 < count__17988)){
var path = chunk__17987.cljs$core$IIndexed$_nth$arity$2(null,i__17989);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__18179_18628 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__18183_18629 = null;
var count__18184_18630 = (0);
var i__18185_18631 = (0);
while(true){
if((i__18185_18631 < count__18184_18630)){
var node_18634 = chunk__18183_18629.cljs$core$IIndexed$_nth$arity$2(null,i__18185_18631);
if(cljs.core.not(node_18634.shadow$old)){
var path_match_18636 = shadow.cljs.devtools.client.browser.match_paths(node_18634.getAttribute("href"),path);
if(cljs.core.truth_(path_match_18636)){
var new_link_18638 = (function (){var G__18277 = node_18634.cloneNode(true);
G__18277.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_18636),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__18277;
})();
(node_18634.shadow$old = true);

(new_link_18638.onload = ((function (seq__18179_18628,chunk__18183_18629,count__18184_18630,i__18185_18631,seq__17985,chunk__17987,count__17988,i__17989,new_link_18638,path_match_18636,node_18634,path,map__17984,map__17984__$1,msg,updates,reload_info){
return (function (e){
var seq__18278_18639 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__18280_18640 = null;
var count__18281_18641 = (0);
var i__18282_18642 = (0);
while(true){
if((i__18282_18642 < count__18281_18641)){
var map__18290_18644 = chunk__18280_18640.cljs$core$IIndexed$_nth$arity$2(null,i__18282_18642);
var map__18290_18645__$1 = cljs.core.__destructure_map(map__18290_18644);
var task_18646 = map__18290_18645__$1;
var fn_str_18647 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18290_18645__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18648 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18290_18645__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18651 = goog.getObjectByName(fn_str_18647,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18648)].join(''));

(fn_obj_18651.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18651.cljs$core$IFn$_invoke$arity$2(path,new_link_18638) : fn_obj_18651.call(null,path,new_link_18638));


var G__18654 = seq__18278_18639;
var G__18655 = chunk__18280_18640;
var G__18656 = count__18281_18641;
var G__18657 = (i__18282_18642 + (1));
seq__18278_18639 = G__18654;
chunk__18280_18640 = G__18655;
count__18281_18641 = G__18656;
i__18282_18642 = G__18657;
continue;
} else {
var temp__5804__auto___18658 = cljs.core.seq(seq__18278_18639);
if(temp__5804__auto___18658){
var seq__18278_18659__$1 = temp__5804__auto___18658;
if(cljs.core.chunked_seq_QMARK_(seq__18278_18659__$1)){
var c__5525__auto___18660 = cljs.core.chunk_first(seq__18278_18659__$1);
var G__18661 = cljs.core.chunk_rest(seq__18278_18659__$1);
var G__18662 = c__5525__auto___18660;
var G__18663 = cljs.core.count(c__5525__auto___18660);
var G__18664 = (0);
seq__18278_18639 = G__18661;
chunk__18280_18640 = G__18662;
count__18281_18641 = G__18663;
i__18282_18642 = G__18664;
continue;
} else {
var map__18297_18666 = cljs.core.first(seq__18278_18659__$1);
var map__18297_18667__$1 = cljs.core.__destructure_map(map__18297_18666);
var task_18668 = map__18297_18667__$1;
var fn_str_18669 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18297_18667__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18670 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18297_18667__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18671 = goog.getObjectByName(fn_str_18669,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18670)].join(''));

(fn_obj_18671.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18671.cljs$core$IFn$_invoke$arity$2(path,new_link_18638) : fn_obj_18671.call(null,path,new_link_18638));


var G__18674 = cljs.core.next(seq__18278_18659__$1);
var G__18675 = null;
var G__18676 = (0);
var G__18677 = (0);
seq__18278_18639 = G__18674;
chunk__18280_18640 = G__18675;
count__18281_18641 = G__18676;
i__18282_18642 = G__18677;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_18634);
});})(seq__18179_18628,chunk__18183_18629,count__18184_18630,i__18185_18631,seq__17985,chunk__17987,count__17988,i__17989,new_link_18638,path_match_18636,node_18634,path,map__17984,map__17984__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_18636], 0));

goog.dom.insertSiblingAfter(new_link_18638,node_18634);


var G__18680 = seq__18179_18628;
var G__18681 = chunk__18183_18629;
var G__18682 = count__18184_18630;
var G__18683 = (i__18185_18631 + (1));
seq__18179_18628 = G__18680;
chunk__18183_18629 = G__18681;
count__18184_18630 = G__18682;
i__18185_18631 = G__18683;
continue;
} else {
var G__18684 = seq__18179_18628;
var G__18685 = chunk__18183_18629;
var G__18686 = count__18184_18630;
var G__18687 = (i__18185_18631 + (1));
seq__18179_18628 = G__18684;
chunk__18183_18629 = G__18685;
count__18184_18630 = G__18686;
i__18185_18631 = G__18687;
continue;
}
} else {
var G__18688 = seq__18179_18628;
var G__18689 = chunk__18183_18629;
var G__18690 = count__18184_18630;
var G__18691 = (i__18185_18631 + (1));
seq__18179_18628 = G__18688;
chunk__18183_18629 = G__18689;
count__18184_18630 = G__18690;
i__18185_18631 = G__18691;
continue;
}
} else {
var temp__5804__auto___18692 = cljs.core.seq(seq__18179_18628);
if(temp__5804__auto___18692){
var seq__18179_18694__$1 = temp__5804__auto___18692;
if(cljs.core.chunked_seq_QMARK_(seq__18179_18694__$1)){
var c__5525__auto___18695 = cljs.core.chunk_first(seq__18179_18694__$1);
var G__18696 = cljs.core.chunk_rest(seq__18179_18694__$1);
var G__18697 = c__5525__auto___18695;
var G__18698 = cljs.core.count(c__5525__auto___18695);
var G__18699 = (0);
seq__18179_18628 = G__18696;
chunk__18183_18629 = G__18697;
count__18184_18630 = G__18698;
i__18185_18631 = G__18699;
continue;
} else {
var node_18700 = cljs.core.first(seq__18179_18694__$1);
if(cljs.core.not(node_18700.shadow$old)){
var path_match_18703 = shadow.cljs.devtools.client.browser.match_paths(node_18700.getAttribute("href"),path);
if(cljs.core.truth_(path_match_18703)){
var new_link_18705 = (function (){var G__18318 = node_18700.cloneNode(true);
G__18318.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_18703),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__18318;
})();
(node_18700.shadow$old = true);

(new_link_18705.onload = ((function (seq__18179_18628,chunk__18183_18629,count__18184_18630,i__18185_18631,seq__17985,chunk__17987,count__17988,i__17989,new_link_18705,path_match_18703,node_18700,seq__18179_18694__$1,temp__5804__auto___18692,path,map__17984,map__17984__$1,msg,updates,reload_info){
return (function (e){
var seq__18319_18707 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__18323_18708 = null;
var count__18324_18709 = (0);
var i__18325_18710 = (0);
while(true){
if((i__18325_18710 < count__18324_18709)){
var map__18343_18712 = chunk__18323_18708.cljs$core$IIndexed$_nth$arity$2(null,i__18325_18710);
var map__18343_18713__$1 = cljs.core.__destructure_map(map__18343_18712);
var task_18714 = map__18343_18713__$1;
var fn_str_18715 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18343_18713__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18343_18713__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18719 = goog.getObjectByName(fn_str_18715,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18716)].join(''));

(fn_obj_18719.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18719.cljs$core$IFn$_invoke$arity$2(path,new_link_18705) : fn_obj_18719.call(null,path,new_link_18705));


var G__18722 = seq__18319_18707;
var G__18723 = chunk__18323_18708;
var G__18724 = count__18324_18709;
var G__18725 = (i__18325_18710 + (1));
seq__18319_18707 = G__18722;
chunk__18323_18708 = G__18723;
count__18324_18709 = G__18724;
i__18325_18710 = G__18725;
continue;
} else {
var temp__5804__auto___18726__$1 = cljs.core.seq(seq__18319_18707);
if(temp__5804__auto___18726__$1){
var seq__18319_18727__$1 = temp__5804__auto___18726__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18319_18727__$1)){
var c__5525__auto___18728 = cljs.core.chunk_first(seq__18319_18727__$1);
var G__18729 = cljs.core.chunk_rest(seq__18319_18727__$1);
var G__18730 = c__5525__auto___18728;
var G__18731 = cljs.core.count(c__5525__auto___18728);
var G__18732 = (0);
seq__18319_18707 = G__18729;
chunk__18323_18708 = G__18730;
count__18324_18709 = G__18731;
i__18325_18710 = G__18732;
continue;
} else {
var map__18344_18733 = cljs.core.first(seq__18319_18727__$1);
var map__18344_18734__$1 = cljs.core.__destructure_map(map__18344_18733);
var task_18735 = map__18344_18734__$1;
var fn_str_18736 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18344_18734__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18737 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18344_18734__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18739 = goog.getObjectByName(fn_str_18736,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18737)].join(''));

(fn_obj_18739.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18739.cljs$core$IFn$_invoke$arity$2(path,new_link_18705) : fn_obj_18739.call(null,path,new_link_18705));


var G__18741 = cljs.core.next(seq__18319_18727__$1);
var G__18742 = null;
var G__18744 = (0);
var G__18745 = (0);
seq__18319_18707 = G__18741;
chunk__18323_18708 = G__18742;
count__18324_18709 = G__18744;
i__18325_18710 = G__18745;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_18700);
});})(seq__18179_18628,chunk__18183_18629,count__18184_18630,i__18185_18631,seq__17985,chunk__17987,count__17988,i__17989,new_link_18705,path_match_18703,node_18700,seq__18179_18694__$1,temp__5804__auto___18692,path,map__17984,map__17984__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_18703], 0));

goog.dom.insertSiblingAfter(new_link_18705,node_18700);


var G__18748 = cljs.core.next(seq__18179_18694__$1);
var G__18749 = null;
var G__18750 = (0);
var G__18751 = (0);
seq__18179_18628 = G__18748;
chunk__18183_18629 = G__18749;
count__18184_18630 = G__18750;
i__18185_18631 = G__18751;
continue;
} else {
var G__18752 = cljs.core.next(seq__18179_18694__$1);
var G__18753 = null;
var G__18754 = (0);
var G__18755 = (0);
seq__18179_18628 = G__18752;
chunk__18183_18629 = G__18753;
count__18184_18630 = G__18754;
i__18185_18631 = G__18755;
continue;
}
} else {
var G__18756 = cljs.core.next(seq__18179_18694__$1);
var G__18757 = null;
var G__18758 = (0);
var G__18759 = (0);
seq__18179_18628 = G__18756;
chunk__18183_18629 = G__18757;
count__18184_18630 = G__18758;
i__18185_18631 = G__18759;
continue;
}
}
} else {
}
}
break;
}


var G__18760 = seq__17985;
var G__18761 = chunk__17987;
var G__18762 = count__17988;
var G__18763 = (i__17989 + (1));
seq__17985 = G__18760;
chunk__17987 = G__18761;
count__17988 = G__18762;
i__17989 = G__18763;
continue;
} else {
var G__18764 = seq__17985;
var G__18765 = chunk__17987;
var G__18766 = count__17988;
var G__18767 = (i__17989 + (1));
seq__17985 = G__18764;
chunk__17987 = G__18765;
count__17988 = G__18766;
i__17989 = G__18767;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17985);
if(temp__5804__auto__){
var seq__17985__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17985__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__17985__$1);
var G__18769 = cljs.core.chunk_rest(seq__17985__$1);
var G__18770 = c__5525__auto__;
var G__18771 = cljs.core.count(c__5525__auto__);
var G__18772 = (0);
seq__17985 = G__18769;
chunk__17987 = G__18770;
count__17988 = G__18771;
i__17989 = G__18772;
continue;
} else {
var path = cljs.core.first(seq__17985__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__18346_18775 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__18350_18776 = null;
var count__18351_18777 = (0);
var i__18352_18778 = (0);
while(true){
if((i__18352_18778 < count__18351_18777)){
var node_18781 = chunk__18350_18776.cljs$core$IIndexed$_nth$arity$2(null,i__18352_18778);
if(cljs.core.not(node_18781.shadow$old)){
var path_match_18782 = shadow.cljs.devtools.client.browser.match_paths(node_18781.getAttribute("href"),path);
if(cljs.core.truth_(path_match_18782)){
var new_link_18783 = (function (){var G__18403 = node_18781.cloneNode(true);
G__18403.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_18782),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__18403;
})();
(node_18781.shadow$old = true);

(new_link_18783.onload = ((function (seq__18346_18775,chunk__18350_18776,count__18351_18777,i__18352_18778,seq__17985,chunk__17987,count__17988,i__17989,new_link_18783,path_match_18782,node_18781,path,seq__17985__$1,temp__5804__auto__,map__17984,map__17984__$1,msg,updates,reload_info){
return (function (e){
var seq__18404_18785 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__18406_18786 = null;
var count__18407_18787 = (0);
var i__18408_18788 = (0);
while(true){
if((i__18408_18788 < count__18407_18787)){
var map__18412_18791 = chunk__18406_18786.cljs$core$IIndexed$_nth$arity$2(null,i__18408_18788);
var map__18412_18792__$1 = cljs.core.__destructure_map(map__18412_18791);
var task_18793 = map__18412_18792__$1;
var fn_str_18794 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18412_18792__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18795 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18412_18792__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18798 = goog.getObjectByName(fn_str_18794,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18795)].join(''));

(fn_obj_18798.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18798.cljs$core$IFn$_invoke$arity$2(path,new_link_18783) : fn_obj_18798.call(null,path,new_link_18783));


var G__18799 = seq__18404_18785;
var G__18800 = chunk__18406_18786;
var G__18801 = count__18407_18787;
var G__18802 = (i__18408_18788 + (1));
seq__18404_18785 = G__18799;
chunk__18406_18786 = G__18800;
count__18407_18787 = G__18801;
i__18408_18788 = G__18802;
continue;
} else {
var temp__5804__auto___18803__$1 = cljs.core.seq(seq__18404_18785);
if(temp__5804__auto___18803__$1){
var seq__18404_18804__$1 = temp__5804__auto___18803__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18404_18804__$1)){
var c__5525__auto___18805 = cljs.core.chunk_first(seq__18404_18804__$1);
var G__18806 = cljs.core.chunk_rest(seq__18404_18804__$1);
var G__18807 = c__5525__auto___18805;
var G__18808 = cljs.core.count(c__5525__auto___18805);
var G__18809 = (0);
seq__18404_18785 = G__18806;
chunk__18406_18786 = G__18807;
count__18407_18787 = G__18808;
i__18408_18788 = G__18809;
continue;
} else {
var map__18415_18810 = cljs.core.first(seq__18404_18804__$1);
var map__18415_18811__$1 = cljs.core.__destructure_map(map__18415_18810);
var task_18812 = map__18415_18811__$1;
var fn_str_18813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18415_18811__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18415_18811__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18816 = goog.getObjectByName(fn_str_18813,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18814)].join(''));

(fn_obj_18816.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18816.cljs$core$IFn$_invoke$arity$2(path,new_link_18783) : fn_obj_18816.call(null,path,new_link_18783));


var G__18818 = cljs.core.next(seq__18404_18804__$1);
var G__18819 = null;
var G__18820 = (0);
var G__18821 = (0);
seq__18404_18785 = G__18818;
chunk__18406_18786 = G__18819;
count__18407_18787 = G__18820;
i__18408_18788 = G__18821;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_18781);
});})(seq__18346_18775,chunk__18350_18776,count__18351_18777,i__18352_18778,seq__17985,chunk__17987,count__17988,i__17989,new_link_18783,path_match_18782,node_18781,path,seq__17985__$1,temp__5804__auto__,map__17984,map__17984__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_18782], 0));

goog.dom.insertSiblingAfter(new_link_18783,node_18781);


var G__18824 = seq__18346_18775;
var G__18825 = chunk__18350_18776;
var G__18826 = count__18351_18777;
var G__18827 = (i__18352_18778 + (1));
seq__18346_18775 = G__18824;
chunk__18350_18776 = G__18825;
count__18351_18777 = G__18826;
i__18352_18778 = G__18827;
continue;
} else {
var G__18828 = seq__18346_18775;
var G__18829 = chunk__18350_18776;
var G__18830 = count__18351_18777;
var G__18831 = (i__18352_18778 + (1));
seq__18346_18775 = G__18828;
chunk__18350_18776 = G__18829;
count__18351_18777 = G__18830;
i__18352_18778 = G__18831;
continue;
}
} else {
var G__18832 = seq__18346_18775;
var G__18833 = chunk__18350_18776;
var G__18834 = count__18351_18777;
var G__18835 = (i__18352_18778 + (1));
seq__18346_18775 = G__18832;
chunk__18350_18776 = G__18833;
count__18351_18777 = G__18834;
i__18352_18778 = G__18835;
continue;
}
} else {
var temp__5804__auto___18836__$1 = cljs.core.seq(seq__18346_18775);
if(temp__5804__auto___18836__$1){
var seq__18346_18837__$1 = temp__5804__auto___18836__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18346_18837__$1)){
var c__5525__auto___18838 = cljs.core.chunk_first(seq__18346_18837__$1);
var G__18839 = cljs.core.chunk_rest(seq__18346_18837__$1);
var G__18840 = c__5525__auto___18838;
var G__18841 = cljs.core.count(c__5525__auto___18838);
var G__18842 = (0);
seq__18346_18775 = G__18839;
chunk__18350_18776 = G__18840;
count__18351_18777 = G__18841;
i__18352_18778 = G__18842;
continue;
} else {
var node_18843 = cljs.core.first(seq__18346_18837__$1);
if(cljs.core.not(node_18843.shadow$old)){
var path_match_18845 = shadow.cljs.devtools.client.browser.match_paths(node_18843.getAttribute("href"),path);
if(cljs.core.truth_(path_match_18845)){
var new_link_18847 = (function (){var G__18422 = node_18843.cloneNode(true);
G__18422.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_18845),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__18422;
})();
(node_18843.shadow$old = true);

(new_link_18847.onload = ((function (seq__18346_18775,chunk__18350_18776,count__18351_18777,i__18352_18778,seq__17985,chunk__17987,count__17988,i__17989,new_link_18847,path_match_18845,node_18843,seq__18346_18837__$1,temp__5804__auto___18836__$1,path,seq__17985__$1,temp__5804__auto__,map__17984,map__17984__$1,msg,updates,reload_info){
return (function (e){
var seq__18423_18848 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__18425_18849 = null;
var count__18426_18850 = (0);
var i__18427_18851 = (0);
while(true){
if((i__18427_18851 < count__18426_18850)){
var map__18438_18852 = chunk__18425_18849.cljs$core$IIndexed$_nth$arity$2(null,i__18427_18851);
var map__18438_18853__$1 = cljs.core.__destructure_map(map__18438_18852);
var task_18854 = map__18438_18853__$1;
var fn_str_18855 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18438_18853__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18856 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18438_18853__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18857 = goog.getObjectByName(fn_str_18855,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18856)].join(''));

(fn_obj_18857.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18857.cljs$core$IFn$_invoke$arity$2(path,new_link_18847) : fn_obj_18857.call(null,path,new_link_18847));


var G__18858 = seq__18423_18848;
var G__18859 = chunk__18425_18849;
var G__18860 = count__18426_18850;
var G__18861 = (i__18427_18851 + (1));
seq__18423_18848 = G__18858;
chunk__18425_18849 = G__18859;
count__18426_18850 = G__18860;
i__18427_18851 = G__18861;
continue;
} else {
var temp__5804__auto___18862__$2 = cljs.core.seq(seq__18423_18848);
if(temp__5804__auto___18862__$2){
var seq__18423_18863__$1 = temp__5804__auto___18862__$2;
if(cljs.core.chunked_seq_QMARK_(seq__18423_18863__$1)){
var c__5525__auto___18864 = cljs.core.chunk_first(seq__18423_18863__$1);
var G__18865 = cljs.core.chunk_rest(seq__18423_18863__$1);
var G__18866 = c__5525__auto___18864;
var G__18867 = cljs.core.count(c__5525__auto___18864);
var G__18868 = (0);
seq__18423_18848 = G__18865;
chunk__18425_18849 = G__18866;
count__18426_18850 = G__18867;
i__18427_18851 = G__18868;
continue;
} else {
var map__18442_18870 = cljs.core.first(seq__18423_18863__$1);
var map__18442_18871__$1 = cljs.core.__destructure_map(map__18442_18870);
var task_18872 = map__18442_18871__$1;
var fn_str_18873 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18442_18871__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18874 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18442_18871__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18875 = goog.getObjectByName(fn_str_18873,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18874)].join(''));

(fn_obj_18875.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18875.cljs$core$IFn$_invoke$arity$2(path,new_link_18847) : fn_obj_18875.call(null,path,new_link_18847));


var G__18876 = cljs.core.next(seq__18423_18863__$1);
var G__18877 = null;
var G__18878 = (0);
var G__18879 = (0);
seq__18423_18848 = G__18876;
chunk__18425_18849 = G__18877;
count__18426_18850 = G__18878;
i__18427_18851 = G__18879;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_18843);
});})(seq__18346_18775,chunk__18350_18776,count__18351_18777,i__18352_18778,seq__17985,chunk__17987,count__17988,i__17989,new_link_18847,path_match_18845,node_18843,seq__18346_18837__$1,temp__5804__auto___18836__$1,path,seq__17985__$1,temp__5804__auto__,map__17984,map__17984__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_18845], 0));

goog.dom.insertSiblingAfter(new_link_18847,node_18843);


var G__18880 = cljs.core.next(seq__18346_18837__$1);
var G__18881 = null;
var G__18882 = (0);
var G__18883 = (0);
seq__18346_18775 = G__18880;
chunk__18350_18776 = G__18881;
count__18351_18777 = G__18882;
i__18352_18778 = G__18883;
continue;
} else {
var G__18884 = cljs.core.next(seq__18346_18837__$1);
var G__18885 = null;
var G__18886 = (0);
var G__18887 = (0);
seq__18346_18775 = G__18884;
chunk__18350_18776 = G__18885;
count__18351_18777 = G__18886;
i__18352_18778 = G__18887;
continue;
}
} else {
var G__18888 = cljs.core.next(seq__18346_18837__$1);
var G__18889 = null;
var G__18890 = (0);
var G__18891 = (0);
seq__18346_18775 = G__18888;
chunk__18350_18776 = G__18889;
count__18351_18777 = G__18890;
i__18352_18778 = G__18891;
continue;
}
}
} else {
}
}
break;
}


var G__18892 = cljs.core.next(seq__17985__$1);
var G__18893 = null;
var G__18894 = (0);
var G__18895 = (0);
seq__17985 = G__18892;
chunk__17987 = G__18893;
count__17988 = G__18894;
i__17989 = G__18895;
continue;
} else {
var G__18896 = cljs.core.next(seq__17985__$1);
var G__18897 = null;
var G__18898 = (0);
var G__18899 = (0);
seq__17985 = G__18896;
chunk__17987 = G__18897;
count__17988 = G__18898;
i__17989 = G__18899;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__18465 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__18465) : success.call(null,G__18465));
}catch (e18464){var e = e18464;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__18468,success,fail){
var map__18469 = p__18468;
var map__18469__$1 = cljs.core.__destructure_map(map__18469);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18469__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__18473 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__18473) : success.call(null,G__18473));
}catch (e18470){var e = e18470;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__18476,done,error){
var map__18477 = p__18476;
var map__18477__$1 = cljs.core.__destructure_map(map__18477);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18477__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__18483,done,error){
var map__18484 = p__18483;
var map__18484__$1 = cljs.core.__destructure_map(map__18484);
var msg = map__18484__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18484__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18484__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18484__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__18487){
var map__18488 = p__18487;
var map__18488__$1 = cljs.core.__destructure_map(map__18488);
var src = map__18488__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18488__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__18490 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__18490) : done.call(null,G__18490));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__18495){
var map__18497 = p__18495;
var map__18497__$1 = cljs.core.__destructure_map(map__18497);
var msg__$1 = map__18497__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18497__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e18498){var ex = e18498;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__18500){
var map__18501 = p__18500;
var map__18501__$1 = cljs.core.__destructure_map(map__18501);
var env = map__18501__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18501__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__18506){
var map__18507 = p__18506;
var map__18507__$1 = cljs.core.__destructure_map(map__18507);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18507__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18507__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__18508){
var map__18509 = p__18508;
var map__18509__$1 = cljs.core.__destructure_map(map__18509);
var svc = map__18509__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18509__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
