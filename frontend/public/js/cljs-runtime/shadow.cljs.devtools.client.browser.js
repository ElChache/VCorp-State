goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21459 = arguments.length;
var i__5727__auto___21460 = (0);
while(true){
if((i__5727__auto___21460 < len__5726__auto___21459)){
args__5732__auto__.push((arguments[i__5727__auto___21460]));

var G__21461 = (i__5727__auto___21460 + (1));
i__5727__auto___21460 = G__21461;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20785){
var G__20786 = cljs.core.first(seq20785);
var seq20785__$1 = cljs.core.next(seq20785);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20786,seq20785__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20787 = cljs.core.seq(sources);
var chunk__20788 = null;
var count__20789 = (0);
var i__20790 = (0);
while(true){
if((i__20790 < count__20789)){
var map__20795 = chunk__20788.cljs$core$IIndexed$_nth$arity$2(null,i__20790);
var map__20795__$1 = cljs.core.__destructure_map(map__20795);
var src = map__20795__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20795__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20795__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20795__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20795__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20796){var e_21462 = e20796;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21462);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21462.message)].join('')));
}

var G__21463 = seq__20787;
var G__21464 = chunk__20788;
var G__21465 = count__20789;
var G__21466 = (i__20790 + (1));
seq__20787 = G__21463;
chunk__20788 = G__21464;
count__20789 = G__21465;
i__20790 = G__21466;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20787);
if(temp__5804__auto__){
var seq__20787__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20787__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20787__$1);
var G__21467 = cljs.core.chunk_rest(seq__20787__$1);
var G__21468 = c__5525__auto__;
var G__21469 = cljs.core.count(c__5525__auto__);
var G__21470 = (0);
seq__20787 = G__21467;
chunk__20788 = G__21468;
count__20789 = G__21469;
i__20790 = G__21470;
continue;
} else {
var map__20800 = cljs.core.first(seq__20787__$1);
var map__20800__$1 = cljs.core.__destructure_map(map__20800);
var src = map__20800__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20800__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20800__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20800__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20800__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20801){var e_21471 = e20801;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21471);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21471.message)].join('')));
}

var G__21472 = cljs.core.next(seq__20787__$1);
var G__21473 = null;
var G__21474 = (0);
var G__21475 = (0);
seq__20787 = G__21472;
chunk__20788 = G__21473;
count__20789 = G__21474;
i__20790 = G__21475;
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
var seq__20802 = cljs.core.seq(js_requires);
var chunk__20803 = null;
var count__20804 = (0);
var i__20805 = (0);
while(true){
if((i__20805 < count__20804)){
var js_ns = chunk__20803.cljs$core$IIndexed$_nth$arity$2(null,i__20805);
var require_str_21476 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21476);


var G__21478 = seq__20802;
var G__21479 = chunk__20803;
var G__21480 = count__20804;
var G__21481 = (i__20805 + (1));
seq__20802 = G__21478;
chunk__20803 = G__21479;
count__20804 = G__21480;
i__20805 = G__21481;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20802);
if(temp__5804__auto__){
var seq__20802__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20802__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20802__$1);
var G__21482 = cljs.core.chunk_rest(seq__20802__$1);
var G__21483 = c__5525__auto__;
var G__21484 = cljs.core.count(c__5525__auto__);
var G__21485 = (0);
seq__20802 = G__21482;
chunk__20803 = G__21483;
count__20804 = G__21484;
i__20805 = G__21485;
continue;
} else {
var js_ns = cljs.core.first(seq__20802__$1);
var require_str_21486 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21486);


var G__21487 = cljs.core.next(seq__20802__$1);
var G__21488 = null;
var G__21489 = (0);
var G__21490 = (0);
seq__20802 = G__21487;
chunk__20803 = G__21488;
count__20804 = G__21489;
i__20805 = G__21490;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20848){
var map__20849 = p__20848;
var map__20849__$1 = cljs.core.__destructure_map(map__20849);
var msg = map__20849__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20849__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20849__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20850(s__20851){
return (new cljs.core.LazySeq(null,(function (){
var s__20851__$1 = s__20851;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20851__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__20856 = cljs.core.first(xs__6360__auto__);
var map__20856__$1 = cljs.core.__destructure_map(map__20856);
var src = map__20856__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20856__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20856__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__20851__$1,map__20856,map__20856__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20849,map__20849__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20850_$_iter__20852(s__20853){
return (new cljs.core.LazySeq(null,((function (s__20851__$1,map__20856,map__20856__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20849,map__20849__$1,msg,info,reload_info){
return (function (){
var s__20853__$1 = s__20853;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20853__$1);
if(temp__5804__auto____$1){
var s__20853__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20853__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20853__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20855 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20854 = (0);
while(true){
if((i__20854 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__20854);
cljs.core.chunk_append(b__20855,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21491 = (i__20854 + (1));
i__20854 = G__21491;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20855),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20850_$_iter__20852(cljs.core.chunk_rest(s__20853__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20855),null);
}
} else {
var warning = cljs.core.first(s__20853__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20850_$_iter__20852(cljs.core.rest(s__20853__$2)));
}
} else {
return null;
}
break;
}
});})(s__20851__$1,map__20856,map__20856__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20849,map__20849__$1,msg,info,reload_info))
,null,null));
});})(s__20851__$1,map__20856,map__20856__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20849,map__20849__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20850(cljs.core.rest(s__20851__$1)));
} else {
var G__21492 = cljs.core.rest(s__20851__$1);
s__20851__$1 = G__21492;
continue;
}
} else {
var G__21493 = cljs.core.rest(s__20851__$1);
s__20851__$1 = G__21493;
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
var seq__20874_21494 = cljs.core.seq(warnings);
var chunk__20875_21495 = null;
var count__20876_21496 = (0);
var i__20877_21497 = (0);
while(true){
if((i__20877_21497 < count__20876_21496)){
var map__20893_21502 = chunk__20875_21495.cljs$core$IIndexed$_nth$arity$2(null,i__20877_21497);
var map__20893_21503__$1 = cljs.core.__destructure_map(map__20893_21502);
var w_21504 = map__20893_21503__$1;
var msg_21505__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20893_21503__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20893_21503__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21507 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20893_21503__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20893_21503__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21508)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21506),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21507),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21505__$1)].join(''));


var G__21509 = seq__20874_21494;
var G__21510 = chunk__20875_21495;
var G__21511 = count__20876_21496;
var G__21512 = (i__20877_21497 + (1));
seq__20874_21494 = G__21509;
chunk__20875_21495 = G__21510;
count__20876_21496 = G__21511;
i__20877_21497 = G__21512;
continue;
} else {
var temp__5804__auto___21513 = cljs.core.seq(seq__20874_21494);
if(temp__5804__auto___21513){
var seq__20874_21514__$1 = temp__5804__auto___21513;
if(cljs.core.chunked_seq_QMARK_(seq__20874_21514__$1)){
var c__5525__auto___21515 = cljs.core.chunk_first(seq__20874_21514__$1);
var G__21516 = cljs.core.chunk_rest(seq__20874_21514__$1);
var G__21517 = c__5525__auto___21515;
var G__21518 = cljs.core.count(c__5525__auto___21515);
var G__21519 = (0);
seq__20874_21494 = G__21516;
chunk__20875_21495 = G__21517;
count__20876_21496 = G__21518;
i__20877_21497 = G__21519;
continue;
} else {
var map__20897_21520 = cljs.core.first(seq__20874_21514__$1);
var map__20897_21521__$1 = cljs.core.__destructure_map(map__20897_21520);
var w_21522 = map__20897_21521__$1;
var msg_21523__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20897_21521__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21524 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20897_21521__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20897_21521__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21526 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20897_21521__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21526)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21524),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21525),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21523__$1)].join(''));


var G__21527 = cljs.core.next(seq__20874_21514__$1);
var G__21528 = null;
var G__21529 = (0);
var G__21530 = (0);
seq__20874_21494 = G__21527;
chunk__20875_21495 = G__21528;
count__20876_21496 = G__21529;
i__20877_21497 = G__21530;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20846_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20846_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__20900 = node_uri;
G__20900.setQuery(null);

G__20900.setPath(new$);

return G__20900;
})());
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__20902){
var map__20903 = p__20902;
var map__20903__$1 = cljs.core.__destructure_map(map__20903);
var msg = map__20903__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20903__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20903__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__20904 = cljs.core.seq(updates);
var chunk__20906 = null;
var count__20907 = (0);
var i__20908 = (0);
while(true){
if((i__20908 < count__20907)){
var path = chunk__20906.cljs$core$IIndexed$_nth$arity$2(null,i__20908);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21038_21539 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21046_21540 = null;
var count__21047_21541 = (0);
var i__21049_21542 = (0);
while(true){
if((i__21049_21542 < count__21047_21541)){
var node_21543 = chunk__21046_21540.cljs$core$IIndexed$_nth$arity$2(null,i__21049_21542);
if(cljs.core.not(node_21543.shadow$old)){
var path_match_21544 = shadow.cljs.devtools.client.browser.match_paths(node_21543.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21544)){
var new_link_21545 = (function (){var G__21079 = node_21543.cloneNode(true);
G__21079.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21544),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21079;
})();
(node_21543.shadow$old = true);

(new_link_21545.onload = ((function (seq__21038_21539,chunk__21046_21540,count__21047_21541,i__21049_21542,seq__20904,chunk__20906,count__20907,i__20908,new_link_21545,path_match_21544,node_21543,path,map__20903,map__20903__$1,msg,updates,reload_info){
return (function (e){
var seq__21080_21546 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21082_21547 = null;
var count__21083_21548 = (0);
var i__21084_21549 = (0);
while(true){
if((i__21084_21549 < count__21083_21548)){
var map__21088_21550 = chunk__21082_21547.cljs$core$IIndexed$_nth$arity$2(null,i__21084_21549);
var map__21088_21551__$1 = cljs.core.__destructure_map(map__21088_21550);
var task_21552 = map__21088_21551__$1;
var fn_str_21553 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21088_21551__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21554 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21088_21551__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21555 = goog.getObjectByName(fn_str_21553,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21554)].join(''));

(fn_obj_21555.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21555.cljs$core$IFn$_invoke$arity$2(path,new_link_21545) : fn_obj_21555.call(null,path,new_link_21545));


var G__21556 = seq__21080_21546;
var G__21557 = chunk__21082_21547;
var G__21558 = count__21083_21548;
var G__21559 = (i__21084_21549 + (1));
seq__21080_21546 = G__21556;
chunk__21082_21547 = G__21557;
count__21083_21548 = G__21558;
i__21084_21549 = G__21559;
continue;
} else {
var temp__5804__auto___21560 = cljs.core.seq(seq__21080_21546);
if(temp__5804__auto___21560){
var seq__21080_21561__$1 = temp__5804__auto___21560;
if(cljs.core.chunked_seq_QMARK_(seq__21080_21561__$1)){
var c__5525__auto___21562 = cljs.core.chunk_first(seq__21080_21561__$1);
var G__21566 = cljs.core.chunk_rest(seq__21080_21561__$1);
var G__21567 = c__5525__auto___21562;
var G__21568 = cljs.core.count(c__5525__auto___21562);
var G__21569 = (0);
seq__21080_21546 = G__21566;
chunk__21082_21547 = G__21567;
count__21083_21548 = G__21568;
i__21084_21549 = G__21569;
continue;
} else {
var map__21089_21570 = cljs.core.first(seq__21080_21561__$1);
var map__21089_21571__$1 = cljs.core.__destructure_map(map__21089_21570);
var task_21572 = map__21089_21571__$1;
var fn_str_21573 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21089_21571__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21089_21571__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21575 = goog.getObjectByName(fn_str_21573,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21574)].join(''));

(fn_obj_21575.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21575.cljs$core$IFn$_invoke$arity$2(path,new_link_21545) : fn_obj_21575.call(null,path,new_link_21545));


var G__21576 = cljs.core.next(seq__21080_21561__$1);
var G__21577 = null;
var G__21578 = (0);
var G__21579 = (0);
seq__21080_21546 = G__21576;
chunk__21082_21547 = G__21577;
count__21083_21548 = G__21578;
i__21084_21549 = G__21579;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21543);
});})(seq__21038_21539,chunk__21046_21540,count__21047_21541,i__21049_21542,seq__20904,chunk__20906,count__20907,i__20908,new_link_21545,path_match_21544,node_21543,path,map__20903,map__20903__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21544], 0));

goog.dom.insertSiblingAfter(new_link_21545,node_21543);


var G__21580 = seq__21038_21539;
var G__21581 = chunk__21046_21540;
var G__21582 = count__21047_21541;
var G__21583 = (i__21049_21542 + (1));
seq__21038_21539 = G__21580;
chunk__21046_21540 = G__21581;
count__21047_21541 = G__21582;
i__21049_21542 = G__21583;
continue;
} else {
var G__21584 = seq__21038_21539;
var G__21585 = chunk__21046_21540;
var G__21586 = count__21047_21541;
var G__21587 = (i__21049_21542 + (1));
seq__21038_21539 = G__21584;
chunk__21046_21540 = G__21585;
count__21047_21541 = G__21586;
i__21049_21542 = G__21587;
continue;
}
} else {
var G__21588 = seq__21038_21539;
var G__21589 = chunk__21046_21540;
var G__21590 = count__21047_21541;
var G__21591 = (i__21049_21542 + (1));
seq__21038_21539 = G__21588;
chunk__21046_21540 = G__21589;
count__21047_21541 = G__21590;
i__21049_21542 = G__21591;
continue;
}
} else {
var temp__5804__auto___21592 = cljs.core.seq(seq__21038_21539);
if(temp__5804__auto___21592){
var seq__21038_21593__$1 = temp__5804__auto___21592;
if(cljs.core.chunked_seq_QMARK_(seq__21038_21593__$1)){
var c__5525__auto___21594 = cljs.core.chunk_first(seq__21038_21593__$1);
var G__21595 = cljs.core.chunk_rest(seq__21038_21593__$1);
var G__21596 = c__5525__auto___21594;
var G__21597 = cljs.core.count(c__5525__auto___21594);
var G__21598 = (0);
seq__21038_21539 = G__21595;
chunk__21046_21540 = G__21596;
count__21047_21541 = G__21597;
i__21049_21542 = G__21598;
continue;
} else {
var node_21599 = cljs.core.first(seq__21038_21593__$1);
if(cljs.core.not(node_21599.shadow$old)){
var path_match_21600 = shadow.cljs.devtools.client.browser.match_paths(node_21599.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21600)){
var new_link_21601 = (function (){var G__21094 = node_21599.cloneNode(true);
G__21094.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21600),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21094;
})();
(node_21599.shadow$old = true);

(new_link_21601.onload = ((function (seq__21038_21539,chunk__21046_21540,count__21047_21541,i__21049_21542,seq__20904,chunk__20906,count__20907,i__20908,new_link_21601,path_match_21600,node_21599,seq__21038_21593__$1,temp__5804__auto___21592,path,map__20903,map__20903__$1,msg,updates,reload_info){
return (function (e){
var seq__21099_21602 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21101_21603 = null;
var count__21102_21604 = (0);
var i__21103_21605 = (0);
while(true){
if((i__21103_21605 < count__21102_21604)){
var map__21122_21608 = chunk__21101_21603.cljs$core$IIndexed$_nth$arity$2(null,i__21103_21605);
var map__21122_21609__$1 = cljs.core.__destructure_map(map__21122_21608);
var task_21610 = map__21122_21609__$1;
var fn_str_21611 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21122_21609__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21612 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21122_21609__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21613 = goog.getObjectByName(fn_str_21611,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21612)].join(''));

(fn_obj_21613.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21613.cljs$core$IFn$_invoke$arity$2(path,new_link_21601) : fn_obj_21613.call(null,path,new_link_21601));


var G__21614 = seq__21099_21602;
var G__21615 = chunk__21101_21603;
var G__21616 = count__21102_21604;
var G__21617 = (i__21103_21605 + (1));
seq__21099_21602 = G__21614;
chunk__21101_21603 = G__21615;
count__21102_21604 = G__21616;
i__21103_21605 = G__21617;
continue;
} else {
var temp__5804__auto___21618__$1 = cljs.core.seq(seq__21099_21602);
if(temp__5804__auto___21618__$1){
var seq__21099_21619__$1 = temp__5804__auto___21618__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21099_21619__$1)){
var c__5525__auto___21620 = cljs.core.chunk_first(seq__21099_21619__$1);
var G__21621 = cljs.core.chunk_rest(seq__21099_21619__$1);
var G__21622 = c__5525__auto___21620;
var G__21623 = cljs.core.count(c__5525__auto___21620);
var G__21624 = (0);
seq__21099_21602 = G__21621;
chunk__21101_21603 = G__21622;
count__21102_21604 = G__21623;
i__21103_21605 = G__21624;
continue;
} else {
var map__21124_21625 = cljs.core.first(seq__21099_21619__$1);
var map__21124_21626__$1 = cljs.core.__destructure_map(map__21124_21625);
var task_21627 = map__21124_21626__$1;
var fn_str_21628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21124_21626__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21124_21626__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21630 = goog.getObjectByName(fn_str_21628,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21629)].join(''));

(fn_obj_21630.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21630.cljs$core$IFn$_invoke$arity$2(path,new_link_21601) : fn_obj_21630.call(null,path,new_link_21601));


var G__21631 = cljs.core.next(seq__21099_21619__$1);
var G__21632 = null;
var G__21633 = (0);
var G__21634 = (0);
seq__21099_21602 = G__21631;
chunk__21101_21603 = G__21632;
count__21102_21604 = G__21633;
i__21103_21605 = G__21634;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21599);
});})(seq__21038_21539,chunk__21046_21540,count__21047_21541,i__21049_21542,seq__20904,chunk__20906,count__20907,i__20908,new_link_21601,path_match_21600,node_21599,seq__21038_21593__$1,temp__5804__auto___21592,path,map__20903,map__20903__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21600], 0));

goog.dom.insertSiblingAfter(new_link_21601,node_21599);


var G__21635 = cljs.core.next(seq__21038_21593__$1);
var G__21636 = null;
var G__21637 = (0);
var G__21638 = (0);
seq__21038_21539 = G__21635;
chunk__21046_21540 = G__21636;
count__21047_21541 = G__21637;
i__21049_21542 = G__21638;
continue;
} else {
var G__21639 = cljs.core.next(seq__21038_21593__$1);
var G__21640 = null;
var G__21641 = (0);
var G__21642 = (0);
seq__21038_21539 = G__21639;
chunk__21046_21540 = G__21640;
count__21047_21541 = G__21641;
i__21049_21542 = G__21642;
continue;
}
} else {
var G__21643 = cljs.core.next(seq__21038_21593__$1);
var G__21644 = null;
var G__21645 = (0);
var G__21646 = (0);
seq__21038_21539 = G__21643;
chunk__21046_21540 = G__21644;
count__21047_21541 = G__21645;
i__21049_21542 = G__21646;
continue;
}
}
} else {
}
}
break;
}


var G__21647 = seq__20904;
var G__21648 = chunk__20906;
var G__21649 = count__20907;
var G__21650 = (i__20908 + (1));
seq__20904 = G__21647;
chunk__20906 = G__21648;
count__20907 = G__21649;
i__20908 = G__21650;
continue;
} else {
var G__21651 = seq__20904;
var G__21652 = chunk__20906;
var G__21653 = count__20907;
var G__21654 = (i__20908 + (1));
seq__20904 = G__21651;
chunk__20906 = G__21652;
count__20907 = G__21653;
i__20908 = G__21654;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20904);
if(temp__5804__auto__){
var seq__20904__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20904__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20904__$1);
var G__21655 = cljs.core.chunk_rest(seq__20904__$1);
var G__21656 = c__5525__auto__;
var G__21657 = cljs.core.count(c__5525__auto__);
var G__21658 = (0);
seq__20904 = G__21655;
chunk__20906 = G__21656;
count__20907 = G__21657;
i__20908 = G__21658;
continue;
} else {
var path = cljs.core.first(seq__20904__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21128_21659 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21133_21660 = null;
var count__21134_21661 = (0);
var i__21135_21662 = (0);
while(true){
if((i__21135_21662 < count__21134_21661)){
var node_21663 = chunk__21133_21660.cljs$core$IIndexed$_nth$arity$2(null,i__21135_21662);
if(cljs.core.not(node_21663.shadow$old)){
var path_match_21664 = shadow.cljs.devtools.client.browser.match_paths(node_21663.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21664)){
var new_link_21665 = (function (){var G__21191 = node_21663.cloneNode(true);
G__21191.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21664),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21191;
})();
(node_21663.shadow$old = true);

(new_link_21665.onload = ((function (seq__21128_21659,chunk__21133_21660,count__21134_21661,i__21135_21662,seq__20904,chunk__20906,count__20907,i__20908,new_link_21665,path_match_21664,node_21663,path,seq__20904__$1,temp__5804__auto__,map__20903,map__20903__$1,msg,updates,reload_info){
return (function (e){
var seq__21194_21666 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21196_21667 = null;
var count__21197_21668 = (0);
var i__21198_21669 = (0);
while(true){
if((i__21198_21669 < count__21197_21668)){
var map__21209_21670 = chunk__21196_21667.cljs$core$IIndexed$_nth$arity$2(null,i__21198_21669);
var map__21209_21671__$1 = cljs.core.__destructure_map(map__21209_21670);
var task_21672 = map__21209_21671__$1;
var fn_str_21673 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21209_21671__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21674 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21209_21671__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21675 = goog.getObjectByName(fn_str_21673,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21674)].join(''));

(fn_obj_21675.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21675.cljs$core$IFn$_invoke$arity$2(path,new_link_21665) : fn_obj_21675.call(null,path,new_link_21665));


var G__21676 = seq__21194_21666;
var G__21677 = chunk__21196_21667;
var G__21678 = count__21197_21668;
var G__21679 = (i__21198_21669 + (1));
seq__21194_21666 = G__21676;
chunk__21196_21667 = G__21677;
count__21197_21668 = G__21678;
i__21198_21669 = G__21679;
continue;
} else {
var temp__5804__auto___21680__$1 = cljs.core.seq(seq__21194_21666);
if(temp__5804__auto___21680__$1){
var seq__21194_21681__$1 = temp__5804__auto___21680__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21194_21681__$1)){
var c__5525__auto___21682 = cljs.core.chunk_first(seq__21194_21681__$1);
var G__21683 = cljs.core.chunk_rest(seq__21194_21681__$1);
var G__21684 = c__5525__auto___21682;
var G__21685 = cljs.core.count(c__5525__auto___21682);
var G__21686 = (0);
seq__21194_21666 = G__21683;
chunk__21196_21667 = G__21684;
count__21197_21668 = G__21685;
i__21198_21669 = G__21686;
continue;
} else {
var map__21212_21687 = cljs.core.first(seq__21194_21681__$1);
var map__21212_21688__$1 = cljs.core.__destructure_map(map__21212_21687);
var task_21689 = map__21212_21688__$1;
var fn_str_21690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21212_21688__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21691 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21212_21688__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21692 = goog.getObjectByName(fn_str_21690,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21691)].join(''));

(fn_obj_21692.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21692.cljs$core$IFn$_invoke$arity$2(path,new_link_21665) : fn_obj_21692.call(null,path,new_link_21665));


var G__21693 = cljs.core.next(seq__21194_21681__$1);
var G__21694 = null;
var G__21695 = (0);
var G__21696 = (0);
seq__21194_21666 = G__21693;
chunk__21196_21667 = G__21694;
count__21197_21668 = G__21695;
i__21198_21669 = G__21696;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21663);
});})(seq__21128_21659,chunk__21133_21660,count__21134_21661,i__21135_21662,seq__20904,chunk__20906,count__20907,i__20908,new_link_21665,path_match_21664,node_21663,path,seq__20904__$1,temp__5804__auto__,map__20903,map__20903__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21664], 0));

goog.dom.insertSiblingAfter(new_link_21665,node_21663);


var G__21697 = seq__21128_21659;
var G__21698 = chunk__21133_21660;
var G__21699 = count__21134_21661;
var G__21700 = (i__21135_21662 + (1));
seq__21128_21659 = G__21697;
chunk__21133_21660 = G__21698;
count__21134_21661 = G__21699;
i__21135_21662 = G__21700;
continue;
} else {
var G__21701 = seq__21128_21659;
var G__21702 = chunk__21133_21660;
var G__21703 = count__21134_21661;
var G__21704 = (i__21135_21662 + (1));
seq__21128_21659 = G__21701;
chunk__21133_21660 = G__21702;
count__21134_21661 = G__21703;
i__21135_21662 = G__21704;
continue;
}
} else {
var G__21705 = seq__21128_21659;
var G__21706 = chunk__21133_21660;
var G__21707 = count__21134_21661;
var G__21708 = (i__21135_21662 + (1));
seq__21128_21659 = G__21705;
chunk__21133_21660 = G__21706;
count__21134_21661 = G__21707;
i__21135_21662 = G__21708;
continue;
}
} else {
var temp__5804__auto___21709__$1 = cljs.core.seq(seq__21128_21659);
if(temp__5804__auto___21709__$1){
var seq__21128_21710__$1 = temp__5804__auto___21709__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21128_21710__$1)){
var c__5525__auto___21711 = cljs.core.chunk_first(seq__21128_21710__$1);
var G__21712 = cljs.core.chunk_rest(seq__21128_21710__$1);
var G__21713 = c__5525__auto___21711;
var G__21714 = cljs.core.count(c__5525__auto___21711);
var G__21715 = (0);
seq__21128_21659 = G__21712;
chunk__21133_21660 = G__21713;
count__21134_21661 = G__21714;
i__21135_21662 = G__21715;
continue;
} else {
var node_21716 = cljs.core.first(seq__21128_21710__$1);
if(cljs.core.not(node_21716.shadow$old)){
var path_match_21717 = shadow.cljs.devtools.client.browser.match_paths(node_21716.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21717)){
var new_link_21718 = (function (){var G__21217 = node_21716.cloneNode(true);
G__21217.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21717),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21217;
})();
(node_21716.shadow$old = true);

(new_link_21718.onload = ((function (seq__21128_21659,chunk__21133_21660,count__21134_21661,i__21135_21662,seq__20904,chunk__20906,count__20907,i__20908,new_link_21718,path_match_21717,node_21716,seq__21128_21710__$1,temp__5804__auto___21709__$1,path,seq__20904__$1,temp__5804__auto__,map__20903,map__20903__$1,msg,updates,reload_info){
return (function (e){
var seq__21220_21719 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21222_21720 = null;
var count__21223_21721 = (0);
var i__21224_21722 = (0);
while(true){
if((i__21224_21722 < count__21223_21721)){
var map__21257_21723 = chunk__21222_21720.cljs$core$IIndexed$_nth$arity$2(null,i__21224_21722);
var map__21257_21724__$1 = cljs.core.__destructure_map(map__21257_21723);
var task_21725 = map__21257_21724__$1;
var fn_str_21726 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21257_21724__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21727 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21257_21724__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21728 = goog.getObjectByName(fn_str_21726,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21727)].join(''));

(fn_obj_21728.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21728.cljs$core$IFn$_invoke$arity$2(path,new_link_21718) : fn_obj_21728.call(null,path,new_link_21718));


var G__21729 = seq__21220_21719;
var G__21730 = chunk__21222_21720;
var G__21731 = count__21223_21721;
var G__21732 = (i__21224_21722 + (1));
seq__21220_21719 = G__21729;
chunk__21222_21720 = G__21730;
count__21223_21721 = G__21731;
i__21224_21722 = G__21732;
continue;
} else {
var temp__5804__auto___21733__$2 = cljs.core.seq(seq__21220_21719);
if(temp__5804__auto___21733__$2){
var seq__21220_21734__$1 = temp__5804__auto___21733__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21220_21734__$1)){
var c__5525__auto___21735 = cljs.core.chunk_first(seq__21220_21734__$1);
var G__21736 = cljs.core.chunk_rest(seq__21220_21734__$1);
var G__21737 = c__5525__auto___21735;
var G__21738 = cljs.core.count(c__5525__auto___21735);
var G__21739 = (0);
seq__21220_21719 = G__21736;
chunk__21222_21720 = G__21737;
count__21223_21721 = G__21738;
i__21224_21722 = G__21739;
continue;
} else {
var map__21267_21741 = cljs.core.first(seq__21220_21734__$1);
var map__21267_21742__$1 = cljs.core.__destructure_map(map__21267_21741);
var task_21743 = map__21267_21742__$1;
var fn_str_21744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21267_21742__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21267_21742__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21747 = goog.getObjectByName(fn_str_21744,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21745)].join(''));

(fn_obj_21747.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21747.cljs$core$IFn$_invoke$arity$2(path,new_link_21718) : fn_obj_21747.call(null,path,new_link_21718));


var G__21748 = cljs.core.next(seq__21220_21734__$1);
var G__21749 = null;
var G__21750 = (0);
var G__21751 = (0);
seq__21220_21719 = G__21748;
chunk__21222_21720 = G__21749;
count__21223_21721 = G__21750;
i__21224_21722 = G__21751;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21716);
});})(seq__21128_21659,chunk__21133_21660,count__21134_21661,i__21135_21662,seq__20904,chunk__20906,count__20907,i__20908,new_link_21718,path_match_21717,node_21716,seq__21128_21710__$1,temp__5804__auto___21709__$1,path,seq__20904__$1,temp__5804__auto__,map__20903,map__20903__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21717], 0));

goog.dom.insertSiblingAfter(new_link_21718,node_21716);


var G__21752 = cljs.core.next(seq__21128_21710__$1);
var G__21753 = null;
var G__21754 = (0);
var G__21755 = (0);
seq__21128_21659 = G__21752;
chunk__21133_21660 = G__21753;
count__21134_21661 = G__21754;
i__21135_21662 = G__21755;
continue;
} else {
var G__21756 = cljs.core.next(seq__21128_21710__$1);
var G__21757 = null;
var G__21758 = (0);
var G__21759 = (0);
seq__21128_21659 = G__21756;
chunk__21133_21660 = G__21757;
count__21134_21661 = G__21758;
i__21135_21662 = G__21759;
continue;
}
} else {
var G__21760 = cljs.core.next(seq__21128_21710__$1);
var G__21761 = null;
var G__21762 = (0);
var G__21763 = (0);
seq__21128_21659 = G__21760;
chunk__21133_21660 = G__21761;
count__21134_21661 = G__21762;
i__21135_21662 = G__21763;
continue;
}
}
} else {
}
}
break;
}


var G__21764 = cljs.core.next(seq__20904__$1);
var G__21765 = null;
var G__21766 = (0);
var G__21767 = (0);
seq__20904 = G__21764;
chunk__20906 = G__21765;
count__20907 = G__21766;
i__20908 = G__21767;
continue;
} else {
var G__21768 = cljs.core.next(seq__20904__$1);
var G__21769 = null;
var G__21770 = (0);
var G__21771 = (0);
seq__20904 = G__21768;
chunk__20906 = G__21769;
count__20907 = G__21770;
i__20908 = G__21771;
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
try{var G__21380 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21380) : success.call(null,G__21380));
}catch (e21373){var e = e21373;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__21394,success,fail){
var map__21397 = p__21394;
var map__21397__$1 = cljs.core.__destructure_map(map__21397);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21397__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__21409 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21409) : success.call(null,G__21409));
}catch (e21404){var e = e21404;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21425,done,error){
var map__21426 = p__21425;
var map__21426__$1 = cljs.core.__destructure_map(map__21426);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21426__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21444,done,error){
var map__21445 = p__21444;
var map__21445__$1 = cljs.core.__destructure_map(map__21445);
var msg = map__21445__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21445__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21445__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21445__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21446){
var map__21447 = p__21446;
var map__21447__$1 = cljs.core.__destructure_map(map__21447);
var src = map__21447__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21447__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21448 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21448) : done.call(null,G__21448));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21449){
var map__21450 = p__21449;
var map__21450__$1 = cljs.core.__destructure_map(map__21450);
var msg__$1 = map__21450__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21450__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21451){var ex = e21451;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21452){
var map__21453 = p__21452;
var map__21453__$1 = cljs.core.__destructure_map(map__21453);
var env = map__21453__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21453__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21454){
var map__21455 = p__21454;
var map__21455__$1 = cljs.core.__destructure_map(map__21455);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21455__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21455__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__21456){
var map__21457 = p__21456;
var map__21457__$1 = cljs.core.__destructure_map(map__21457);
var svc = map__21457__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21457__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
