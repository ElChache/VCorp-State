goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21463 = arguments.length;
var i__5727__auto___21464 = (0);
while(true){
if((i__5727__auto___21464 < len__5726__auto___21463)){
args__5732__auto__.push((arguments[i__5727__auto___21464]));

var G__21465 = (i__5727__auto___21464 + (1));
i__5727__auto___21464 = G__21465;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20863){
var G__20864 = cljs.core.first(seq20863);
var seq20863__$1 = cljs.core.next(seq20863);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20864,seq20863__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20869 = cljs.core.seq(sources);
var chunk__20870 = null;
var count__20871 = (0);
var i__20872 = (0);
while(true){
if((i__20872 < count__20871)){
var map__20908 = chunk__20870.cljs$core$IIndexed$_nth$arity$2(null,i__20872);
var map__20908__$1 = cljs.core.__destructure_map(map__20908);
var src = map__20908__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20908__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20908__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20908__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20908__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20911){var e_21466 = e20911;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21466);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21466.message)].join('')));
}

var G__21467 = seq__20869;
var G__21468 = chunk__20870;
var G__21469 = count__20871;
var G__21470 = (i__20872 + (1));
seq__20869 = G__21467;
chunk__20870 = G__21468;
count__20871 = G__21469;
i__20872 = G__21470;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20869);
if(temp__5804__auto__){
var seq__20869__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20869__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20869__$1);
var G__21471 = cljs.core.chunk_rest(seq__20869__$1);
var G__21472 = c__5525__auto__;
var G__21473 = cljs.core.count(c__5525__auto__);
var G__21474 = (0);
seq__20869 = G__21471;
chunk__20870 = G__21472;
count__20871 = G__21473;
i__20872 = G__21474;
continue;
} else {
var map__20913 = cljs.core.first(seq__20869__$1);
var map__20913__$1 = cljs.core.__destructure_map(map__20913);
var src = map__20913__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20913__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20913__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20913__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20913__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20916){var e_21475 = e20916;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21475);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21475.message)].join('')));
}

var G__21476 = cljs.core.next(seq__20869__$1);
var G__21477 = null;
var G__21478 = (0);
var G__21479 = (0);
seq__20869 = G__21476;
chunk__20870 = G__21477;
count__20871 = G__21478;
i__20872 = G__21479;
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
var seq__20921 = cljs.core.seq(js_requires);
var chunk__20922 = null;
var count__20923 = (0);
var i__20924 = (0);
while(true){
if((i__20924 < count__20923)){
var js_ns = chunk__20922.cljs$core$IIndexed$_nth$arity$2(null,i__20924);
var require_str_21480 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21480);


var G__21481 = seq__20921;
var G__21482 = chunk__20922;
var G__21483 = count__20923;
var G__21484 = (i__20924 + (1));
seq__20921 = G__21481;
chunk__20922 = G__21482;
count__20923 = G__21483;
i__20924 = G__21484;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20921);
if(temp__5804__auto__){
var seq__20921__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20921__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20921__$1);
var G__21485 = cljs.core.chunk_rest(seq__20921__$1);
var G__21486 = c__5525__auto__;
var G__21487 = cljs.core.count(c__5525__auto__);
var G__21488 = (0);
seq__20921 = G__21485;
chunk__20922 = G__21486;
count__20923 = G__21487;
i__20924 = G__21488;
continue;
} else {
var js_ns = cljs.core.first(seq__20921__$1);
var require_str_21489 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21489);


var G__21490 = cljs.core.next(seq__20921__$1);
var G__21491 = null;
var G__21492 = (0);
var G__21493 = (0);
seq__20921 = G__21490;
chunk__20922 = G__21491;
count__20923 = G__21492;
i__20924 = G__21493;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20935){
var map__20939 = p__20935;
var map__20939__$1 = cljs.core.__destructure_map(map__20939);
var msg = map__20939__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20939__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20939__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20950(s__20951){
return (new cljs.core.LazySeq(null,(function (){
var s__20951__$1 = s__20951;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20951__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__20964 = cljs.core.first(xs__6360__auto__);
var map__20964__$1 = cljs.core.__destructure_map(map__20964);
var src = map__20964__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20964__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20964__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__20951__$1,map__20964,map__20964__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20939,map__20939__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20950_$_iter__20952(s__20953){
return (new cljs.core.LazySeq(null,((function (s__20951__$1,map__20964,map__20964__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20939,map__20939__$1,msg,info,reload_info){
return (function (){
var s__20953__$1 = s__20953;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20953__$1);
if(temp__5804__auto____$1){
var s__20953__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20953__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20953__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20955 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20954 = (0);
while(true){
if((i__20954 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__20954);
cljs.core.chunk_append(b__20955,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21494 = (i__20954 + (1));
i__20954 = G__21494;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20955),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20950_$_iter__20952(cljs.core.chunk_rest(s__20953__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20955),null);
}
} else {
var warning = cljs.core.first(s__20953__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20950_$_iter__20952(cljs.core.rest(s__20953__$2)));
}
} else {
return null;
}
break;
}
});})(s__20951__$1,map__20964,map__20964__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20939,map__20939__$1,msg,info,reload_info))
,null,null));
});})(s__20951__$1,map__20964,map__20964__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20939,map__20939__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20950(cljs.core.rest(s__20951__$1)));
} else {
var G__21495 = cljs.core.rest(s__20951__$1);
s__20951__$1 = G__21495;
continue;
}
} else {
var G__21496 = cljs.core.rest(s__20951__$1);
s__20951__$1 = G__21496;
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
var seq__20978_21497 = cljs.core.seq(warnings);
var chunk__20979_21498 = null;
var count__20980_21499 = (0);
var i__20981_21500 = (0);
while(true){
if((i__20981_21500 < count__20980_21499)){
var map__20994_21501 = chunk__20979_21498.cljs$core$IIndexed$_nth$arity$2(null,i__20981_21500);
var map__20994_21502__$1 = cljs.core.__destructure_map(map__20994_21501);
var w_21503 = map__20994_21502__$1;
var msg_21504__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20994_21502__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21505 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20994_21502__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20994_21502__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21507 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20994_21502__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21507)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21505),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21506),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21504__$1)].join(''));


var G__21508 = seq__20978_21497;
var G__21509 = chunk__20979_21498;
var G__21510 = count__20980_21499;
var G__21511 = (i__20981_21500 + (1));
seq__20978_21497 = G__21508;
chunk__20979_21498 = G__21509;
count__20980_21499 = G__21510;
i__20981_21500 = G__21511;
continue;
} else {
var temp__5804__auto___21512 = cljs.core.seq(seq__20978_21497);
if(temp__5804__auto___21512){
var seq__20978_21513__$1 = temp__5804__auto___21512;
if(cljs.core.chunked_seq_QMARK_(seq__20978_21513__$1)){
var c__5525__auto___21514 = cljs.core.chunk_first(seq__20978_21513__$1);
var G__21515 = cljs.core.chunk_rest(seq__20978_21513__$1);
var G__21516 = c__5525__auto___21514;
var G__21517 = cljs.core.count(c__5525__auto___21514);
var G__21518 = (0);
seq__20978_21497 = G__21515;
chunk__20979_21498 = G__21516;
count__20980_21499 = G__21517;
i__20981_21500 = G__21518;
continue;
} else {
var map__21003_21519 = cljs.core.first(seq__20978_21513__$1);
var map__21003_21520__$1 = cljs.core.__destructure_map(map__21003_21519);
var w_21521 = map__21003_21520__$1;
var msg_21522__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21003_21520__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21523 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21003_21520__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21524 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21003_21520__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21003_21520__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21525)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21523),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21524),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21522__$1)].join(''));


var G__21526 = cljs.core.next(seq__20978_21513__$1);
var G__21527 = null;
var G__21528 = (0);
var G__21529 = (0);
seq__20978_21497 = G__21526;
chunk__20979_21498 = G__21527;
count__20980_21499 = G__21528;
i__20981_21500 = G__21529;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20928_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20928_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21039 = node_uri;
G__21039.setQuery(null);

G__21039.setPath(new$);

return G__21039;
})());
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21057){
var map__21059 = p__21057;
var map__21059__$1 = cljs.core.__destructure_map(map__21059);
var msg = map__21059__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21059__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21059__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21067 = cljs.core.seq(updates);
var chunk__21069 = null;
var count__21070 = (0);
var i__21071 = (0);
while(true){
if((i__21071 < count__21070)){
var path = chunk__21069.cljs$core$IIndexed$_nth$arity$2(null,i__21071);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21271_21530 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21275_21531 = null;
var count__21276_21532 = (0);
var i__21277_21533 = (0);
while(true){
if((i__21277_21533 < count__21276_21532)){
var node_21535 = chunk__21275_21531.cljs$core$IIndexed$_nth$arity$2(null,i__21277_21533);
if(cljs.core.not(node_21535.shadow$old)){
var path_match_21538 = shadow.cljs.devtools.client.browser.match_paths(node_21535.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21538)){
var new_link_21539 = (function (){var G__21303 = node_21535.cloneNode(true);
G__21303.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21538),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21303;
})();
(node_21535.shadow$old = true);

(new_link_21539.onload = ((function (seq__21271_21530,chunk__21275_21531,count__21276_21532,i__21277_21533,seq__21067,chunk__21069,count__21070,i__21071,new_link_21539,path_match_21538,node_21535,path,map__21059,map__21059__$1,msg,updates,reload_info){
return (function (e){
var seq__21304_21541 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21306_21542 = null;
var count__21307_21543 = (0);
var i__21308_21544 = (0);
while(true){
if((i__21308_21544 < count__21307_21543)){
var map__21312_21545 = chunk__21306_21542.cljs$core$IIndexed$_nth$arity$2(null,i__21308_21544);
var map__21312_21546__$1 = cljs.core.__destructure_map(map__21312_21545);
var task_21547 = map__21312_21546__$1;
var fn_str_21548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21312_21546__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21312_21546__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21550 = goog.getObjectByName(fn_str_21548,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21549)].join(''));

(fn_obj_21550.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21550.cljs$core$IFn$_invoke$arity$2(path,new_link_21539) : fn_obj_21550.call(null,path,new_link_21539));


var G__21553 = seq__21304_21541;
var G__21554 = chunk__21306_21542;
var G__21555 = count__21307_21543;
var G__21556 = (i__21308_21544 + (1));
seq__21304_21541 = G__21553;
chunk__21306_21542 = G__21554;
count__21307_21543 = G__21555;
i__21308_21544 = G__21556;
continue;
} else {
var temp__5804__auto___21557 = cljs.core.seq(seq__21304_21541);
if(temp__5804__auto___21557){
var seq__21304_21558__$1 = temp__5804__auto___21557;
if(cljs.core.chunked_seq_QMARK_(seq__21304_21558__$1)){
var c__5525__auto___21559 = cljs.core.chunk_first(seq__21304_21558__$1);
var G__21560 = cljs.core.chunk_rest(seq__21304_21558__$1);
var G__21561 = c__5525__auto___21559;
var G__21562 = cljs.core.count(c__5525__auto___21559);
var G__21563 = (0);
seq__21304_21541 = G__21560;
chunk__21306_21542 = G__21561;
count__21307_21543 = G__21562;
i__21308_21544 = G__21563;
continue;
} else {
var map__21313_21564 = cljs.core.first(seq__21304_21558__$1);
var map__21313_21565__$1 = cljs.core.__destructure_map(map__21313_21564);
var task_21566 = map__21313_21565__$1;
var fn_str_21567 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21313_21565__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21568 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21313_21565__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21572 = goog.getObjectByName(fn_str_21567,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21568)].join(''));

(fn_obj_21572.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21572.cljs$core$IFn$_invoke$arity$2(path,new_link_21539) : fn_obj_21572.call(null,path,new_link_21539));


var G__21573 = cljs.core.next(seq__21304_21558__$1);
var G__21574 = null;
var G__21575 = (0);
var G__21576 = (0);
seq__21304_21541 = G__21573;
chunk__21306_21542 = G__21574;
count__21307_21543 = G__21575;
i__21308_21544 = G__21576;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21535);
});})(seq__21271_21530,chunk__21275_21531,count__21276_21532,i__21277_21533,seq__21067,chunk__21069,count__21070,i__21071,new_link_21539,path_match_21538,node_21535,path,map__21059,map__21059__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21538], 0));

goog.dom.insertSiblingAfter(new_link_21539,node_21535);


var G__21580 = seq__21271_21530;
var G__21581 = chunk__21275_21531;
var G__21582 = count__21276_21532;
var G__21583 = (i__21277_21533 + (1));
seq__21271_21530 = G__21580;
chunk__21275_21531 = G__21581;
count__21276_21532 = G__21582;
i__21277_21533 = G__21583;
continue;
} else {
var G__21584 = seq__21271_21530;
var G__21585 = chunk__21275_21531;
var G__21586 = count__21276_21532;
var G__21587 = (i__21277_21533 + (1));
seq__21271_21530 = G__21584;
chunk__21275_21531 = G__21585;
count__21276_21532 = G__21586;
i__21277_21533 = G__21587;
continue;
}
} else {
var G__21588 = seq__21271_21530;
var G__21589 = chunk__21275_21531;
var G__21590 = count__21276_21532;
var G__21591 = (i__21277_21533 + (1));
seq__21271_21530 = G__21588;
chunk__21275_21531 = G__21589;
count__21276_21532 = G__21590;
i__21277_21533 = G__21591;
continue;
}
} else {
var temp__5804__auto___21594 = cljs.core.seq(seq__21271_21530);
if(temp__5804__auto___21594){
var seq__21271_21595__$1 = temp__5804__auto___21594;
if(cljs.core.chunked_seq_QMARK_(seq__21271_21595__$1)){
var c__5525__auto___21596 = cljs.core.chunk_first(seq__21271_21595__$1);
var G__21597 = cljs.core.chunk_rest(seq__21271_21595__$1);
var G__21598 = c__5525__auto___21596;
var G__21599 = cljs.core.count(c__5525__auto___21596);
var G__21600 = (0);
seq__21271_21530 = G__21597;
chunk__21275_21531 = G__21598;
count__21276_21532 = G__21599;
i__21277_21533 = G__21600;
continue;
} else {
var node_21601 = cljs.core.first(seq__21271_21595__$1);
if(cljs.core.not(node_21601.shadow$old)){
var path_match_21602 = shadow.cljs.devtools.client.browser.match_paths(node_21601.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21602)){
var new_link_21603 = (function (){var G__21317 = node_21601.cloneNode(true);
G__21317.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21602),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21317;
})();
(node_21601.shadow$old = true);

(new_link_21603.onload = ((function (seq__21271_21530,chunk__21275_21531,count__21276_21532,i__21277_21533,seq__21067,chunk__21069,count__21070,i__21071,new_link_21603,path_match_21602,node_21601,seq__21271_21595__$1,temp__5804__auto___21594,path,map__21059,map__21059__$1,msg,updates,reload_info){
return (function (e){
var seq__21320_21606 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21322_21607 = null;
var count__21323_21608 = (0);
var i__21324_21609 = (0);
while(true){
if((i__21324_21609 < count__21323_21608)){
var map__21329_21610 = chunk__21322_21607.cljs$core$IIndexed$_nth$arity$2(null,i__21324_21609);
var map__21329_21611__$1 = cljs.core.__destructure_map(map__21329_21610);
var task_21612 = map__21329_21611__$1;
var fn_str_21613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21329_21611__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21614 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21329_21611__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21615 = goog.getObjectByName(fn_str_21613,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21614)].join(''));

(fn_obj_21615.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21615.cljs$core$IFn$_invoke$arity$2(path,new_link_21603) : fn_obj_21615.call(null,path,new_link_21603));


var G__21616 = seq__21320_21606;
var G__21617 = chunk__21322_21607;
var G__21618 = count__21323_21608;
var G__21619 = (i__21324_21609 + (1));
seq__21320_21606 = G__21616;
chunk__21322_21607 = G__21617;
count__21323_21608 = G__21618;
i__21324_21609 = G__21619;
continue;
} else {
var temp__5804__auto___21620__$1 = cljs.core.seq(seq__21320_21606);
if(temp__5804__auto___21620__$1){
var seq__21320_21621__$1 = temp__5804__auto___21620__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21320_21621__$1)){
var c__5525__auto___21622 = cljs.core.chunk_first(seq__21320_21621__$1);
var G__21623 = cljs.core.chunk_rest(seq__21320_21621__$1);
var G__21624 = c__5525__auto___21622;
var G__21625 = cljs.core.count(c__5525__auto___21622);
var G__21626 = (0);
seq__21320_21606 = G__21623;
chunk__21322_21607 = G__21624;
count__21323_21608 = G__21625;
i__21324_21609 = G__21626;
continue;
} else {
var map__21330_21627 = cljs.core.first(seq__21320_21621__$1);
var map__21330_21628__$1 = cljs.core.__destructure_map(map__21330_21627);
var task_21629 = map__21330_21628__$1;
var fn_str_21630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21330_21628__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21631 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21330_21628__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21632 = goog.getObjectByName(fn_str_21630,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21631)].join(''));

(fn_obj_21632.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21632.cljs$core$IFn$_invoke$arity$2(path,new_link_21603) : fn_obj_21632.call(null,path,new_link_21603));


var G__21633 = cljs.core.next(seq__21320_21621__$1);
var G__21634 = null;
var G__21635 = (0);
var G__21636 = (0);
seq__21320_21606 = G__21633;
chunk__21322_21607 = G__21634;
count__21323_21608 = G__21635;
i__21324_21609 = G__21636;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21601);
});})(seq__21271_21530,chunk__21275_21531,count__21276_21532,i__21277_21533,seq__21067,chunk__21069,count__21070,i__21071,new_link_21603,path_match_21602,node_21601,seq__21271_21595__$1,temp__5804__auto___21594,path,map__21059,map__21059__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21602], 0));

goog.dom.insertSiblingAfter(new_link_21603,node_21601);


var G__21637 = cljs.core.next(seq__21271_21595__$1);
var G__21638 = null;
var G__21639 = (0);
var G__21640 = (0);
seq__21271_21530 = G__21637;
chunk__21275_21531 = G__21638;
count__21276_21532 = G__21639;
i__21277_21533 = G__21640;
continue;
} else {
var G__21641 = cljs.core.next(seq__21271_21595__$1);
var G__21642 = null;
var G__21643 = (0);
var G__21644 = (0);
seq__21271_21530 = G__21641;
chunk__21275_21531 = G__21642;
count__21276_21532 = G__21643;
i__21277_21533 = G__21644;
continue;
}
} else {
var G__21645 = cljs.core.next(seq__21271_21595__$1);
var G__21646 = null;
var G__21647 = (0);
var G__21648 = (0);
seq__21271_21530 = G__21645;
chunk__21275_21531 = G__21646;
count__21276_21532 = G__21647;
i__21277_21533 = G__21648;
continue;
}
}
} else {
}
}
break;
}


var G__21649 = seq__21067;
var G__21650 = chunk__21069;
var G__21651 = count__21070;
var G__21652 = (i__21071 + (1));
seq__21067 = G__21649;
chunk__21069 = G__21650;
count__21070 = G__21651;
i__21071 = G__21652;
continue;
} else {
var G__21653 = seq__21067;
var G__21654 = chunk__21069;
var G__21655 = count__21070;
var G__21656 = (i__21071 + (1));
seq__21067 = G__21653;
chunk__21069 = G__21654;
count__21070 = G__21655;
i__21071 = G__21656;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21067);
if(temp__5804__auto__){
var seq__21067__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21067__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21067__$1);
var G__21659 = cljs.core.chunk_rest(seq__21067__$1);
var G__21660 = c__5525__auto__;
var G__21661 = cljs.core.count(c__5525__auto__);
var G__21662 = (0);
seq__21067 = G__21659;
chunk__21069 = G__21660;
count__21070 = G__21661;
i__21071 = G__21662;
continue;
} else {
var path = cljs.core.first(seq__21067__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21331_21663 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21335_21664 = null;
var count__21336_21665 = (0);
var i__21337_21666 = (0);
while(true){
if((i__21337_21666 < count__21336_21665)){
var node_21667 = chunk__21335_21664.cljs$core$IIndexed$_nth$arity$2(null,i__21337_21666);
if(cljs.core.not(node_21667.shadow$old)){
var path_match_21668 = shadow.cljs.devtools.client.browser.match_paths(node_21667.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21668)){
var new_link_21669 = (function (){var G__21388 = node_21667.cloneNode(true);
G__21388.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21668),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21388;
})();
(node_21667.shadow$old = true);

(new_link_21669.onload = ((function (seq__21331_21663,chunk__21335_21664,count__21336_21665,i__21337_21666,seq__21067,chunk__21069,count__21070,i__21071,new_link_21669,path_match_21668,node_21667,path,seq__21067__$1,temp__5804__auto__,map__21059,map__21059__$1,msg,updates,reload_info){
return (function (e){
var seq__21393_21670 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21395_21671 = null;
var count__21396_21672 = (0);
var i__21397_21673 = (0);
while(true){
if((i__21397_21673 < count__21396_21672)){
var map__21409_21674 = chunk__21395_21671.cljs$core$IIndexed$_nth$arity$2(null,i__21397_21673);
var map__21409_21675__$1 = cljs.core.__destructure_map(map__21409_21674);
var task_21676 = map__21409_21675__$1;
var fn_str_21677 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21409_21675__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21678 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21409_21675__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21679 = goog.getObjectByName(fn_str_21677,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21678)].join(''));

(fn_obj_21679.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21679.cljs$core$IFn$_invoke$arity$2(path,new_link_21669) : fn_obj_21679.call(null,path,new_link_21669));


var G__21680 = seq__21393_21670;
var G__21681 = chunk__21395_21671;
var G__21682 = count__21396_21672;
var G__21683 = (i__21397_21673 + (1));
seq__21393_21670 = G__21680;
chunk__21395_21671 = G__21681;
count__21396_21672 = G__21682;
i__21397_21673 = G__21683;
continue;
} else {
var temp__5804__auto___21684__$1 = cljs.core.seq(seq__21393_21670);
if(temp__5804__auto___21684__$1){
var seq__21393_21685__$1 = temp__5804__auto___21684__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21393_21685__$1)){
var c__5525__auto___21686 = cljs.core.chunk_first(seq__21393_21685__$1);
var G__21687 = cljs.core.chunk_rest(seq__21393_21685__$1);
var G__21688 = c__5525__auto___21686;
var G__21689 = cljs.core.count(c__5525__auto___21686);
var G__21690 = (0);
seq__21393_21670 = G__21687;
chunk__21395_21671 = G__21688;
count__21396_21672 = G__21689;
i__21397_21673 = G__21690;
continue;
} else {
var map__21410_21691 = cljs.core.first(seq__21393_21685__$1);
var map__21410_21692__$1 = cljs.core.__destructure_map(map__21410_21691);
var task_21693 = map__21410_21692__$1;
var fn_str_21694 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21410_21692__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21695 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21410_21692__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21696 = goog.getObjectByName(fn_str_21694,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21695)].join(''));

(fn_obj_21696.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21696.cljs$core$IFn$_invoke$arity$2(path,new_link_21669) : fn_obj_21696.call(null,path,new_link_21669));


var G__21697 = cljs.core.next(seq__21393_21685__$1);
var G__21698 = null;
var G__21699 = (0);
var G__21700 = (0);
seq__21393_21670 = G__21697;
chunk__21395_21671 = G__21698;
count__21396_21672 = G__21699;
i__21397_21673 = G__21700;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21667);
});})(seq__21331_21663,chunk__21335_21664,count__21336_21665,i__21337_21666,seq__21067,chunk__21069,count__21070,i__21071,new_link_21669,path_match_21668,node_21667,path,seq__21067__$1,temp__5804__auto__,map__21059,map__21059__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21668], 0));

goog.dom.insertSiblingAfter(new_link_21669,node_21667);


var G__21702 = seq__21331_21663;
var G__21703 = chunk__21335_21664;
var G__21704 = count__21336_21665;
var G__21705 = (i__21337_21666 + (1));
seq__21331_21663 = G__21702;
chunk__21335_21664 = G__21703;
count__21336_21665 = G__21704;
i__21337_21666 = G__21705;
continue;
} else {
var G__21706 = seq__21331_21663;
var G__21707 = chunk__21335_21664;
var G__21708 = count__21336_21665;
var G__21709 = (i__21337_21666 + (1));
seq__21331_21663 = G__21706;
chunk__21335_21664 = G__21707;
count__21336_21665 = G__21708;
i__21337_21666 = G__21709;
continue;
}
} else {
var G__21710 = seq__21331_21663;
var G__21711 = chunk__21335_21664;
var G__21712 = count__21336_21665;
var G__21713 = (i__21337_21666 + (1));
seq__21331_21663 = G__21710;
chunk__21335_21664 = G__21711;
count__21336_21665 = G__21712;
i__21337_21666 = G__21713;
continue;
}
} else {
var temp__5804__auto___21714__$1 = cljs.core.seq(seq__21331_21663);
if(temp__5804__auto___21714__$1){
var seq__21331_21715__$1 = temp__5804__auto___21714__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21331_21715__$1)){
var c__5525__auto___21716 = cljs.core.chunk_first(seq__21331_21715__$1);
var G__21717 = cljs.core.chunk_rest(seq__21331_21715__$1);
var G__21718 = c__5525__auto___21716;
var G__21719 = cljs.core.count(c__5525__auto___21716);
var G__21720 = (0);
seq__21331_21663 = G__21717;
chunk__21335_21664 = G__21718;
count__21336_21665 = G__21719;
i__21337_21666 = G__21720;
continue;
} else {
var node_21721 = cljs.core.first(seq__21331_21715__$1);
if(cljs.core.not(node_21721.shadow$old)){
var path_match_21722 = shadow.cljs.devtools.client.browser.match_paths(node_21721.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21722)){
var new_link_21723 = (function (){var G__21416 = node_21721.cloneNode(true);
G__21416.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21722),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21416;
})();
(node_21721.shadow$old = true);

(new_link_21723.onload = ((function (seq__21331_21663,chunk__21335_21664,count__21336_21665,i__21337_21666,seq__21067,chunk__21069,count__21070,i__21071,new_link_21723,path_match_21722,node_21721,seq__21331_21715__$1,temp__5804__auto___21714__$1,path,seq__21067__$1,temp__5804__auto__,map__21059,map__21059__$1,msg,updates,reload_info){
return (function (e){
var seq__21417_21724 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21419_21725 = null;
var count__21420_21726 = (0);
var i__21421_21727 = (0);
while(true){
if((i__21421_21727 < count__21420_21726)){
var map__21427_21729 = chunk__21419_21725.cljs$core$IIndexed$_nth$arity$2(null,i__21421_21727);
var map__21427_21730__$1 = cljs.core.__destructure_map(map__21427_21729);
var task_21731 = map__21427_21730__$1;
var fn_str_21732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21427_21730__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21427_21730__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21734 = goog.getObjectByName(fn_str_21732,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21733)].join(''));

(fn_obj_21734.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21734.cljs$core$IFn$_invoke$arity$2(path,new_link_21723) : fn_obj_21734.call(null,path,new_link_21723));


var G__21735 = seq__21417_21724;
var G__21736 = chunk__21419_21725;
var G__21737 = count__21420_21726;
var G__21738 = (i__21421_21727 + (1));
seq__21417_21724 = G__21735;
chunk__21419_21725 = G__21736;
count__21420_21726 = G__21737;
i__21421_21727 = G__21738;
continue;
} else {
var temp__5804__auto___21739__$2 = cljs.core.seq(seq__21417_21724);
if(temp__5804__auto___21739__$2){
var seq__21417_21740__$1 = temp__5804__auto___21739__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21417_21740__$1)){
var c__5525__auto___21741 = cljs.core.chunk_first(seq__21417_21740__$1);
var G__21742 = cljs.core.chunk_rest(seq__21417_21740__$1);
var G__21743 = c__5525__auto___21741;
var G__21744 = cljs.core.count(c__5525__auto___21741);
var G__21745 = (0);
seq__21417_21724 = G__21742;
chunk__21419_21725 = G__21743;
count__21420_21726 = G__21744;
i__21421_21727 = G__21745;
continue;
} else {
var map__21428_21746 = cljs.core.first(seq__21417_21740__$1);
var map__21428_21747__$1 = cljs.core.__destructure_map(map__21428_21746);
var task_21748 = map__21428_21747__$1;
var fn_str_21749 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21428_21747__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21750 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21428_21747__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21751 = goog.getObjectByName(fn_str_21749,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21750)].join(''));

(fn_obj_21751.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21751.cljs$core$IFn$_invoke$arity$2(path,new_link_21723) : fn_obj_21751.call(null,path,new_link_21723));


var G__21752 = cljs.core.next(seq__21417_21740__$1);
var G__21753 = null;
var G__21754 = (0);
var G__21755 = (0);
seq__21417_21724 = G__21752;
chunk__21419_21725 = G__21753;
count__21420_21726 = G__21754;
i__21421_21727 = G__21755;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21721);
});})(seq__21331_21663,chunk__21335_21664,count__21336_21665,i__21337_21666,seq__21067,chunk__21069,count__21070,i__21071,new_link_21723,path_match_21722,node_21721,seq__21331_21715__$1,temp__5804__auto___21714__$1,path,seq__21067__$1,temp__5804__auto__,map__21059,map__21059__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21722], 0));

goog.dom.insertSiblingAfter(new_link_21723,node_21721);


var G__21756 = cljs.core.next(seq__21331_21715__$1);
var G__21757 = null;
var G__21758 = (0);
var G__21759 = (0);
seq__21331_21663 = G__21756;
chunk__21335_21664 = G__21757;
count__21336_21665 = G__21758;
i__21337_21666 = G__21759;
continue;
} else {
var G__21760 = cljs.core.next(seq__21331_21715__$1);
var G__21761 = null;
var G__21762 = (0);
var G__21763 = (0);
seq__21331_21663 = G__21760;
chunk__21335_21664 = G__21761;
count__21336_21665 = G__21762;
i__21337_21666 = G__21763;
continue;
}
} else {
var G__21764 = cljs.core.next(seq__21331_21715__$1);
var G__21765 = null;
var G__21766 = (0);
var G__21767 = (0);
seq__21331_21663 = G__21764;
chunk__21335_21664 = G__21765;
count__21336_21665 = G__21766;
i__21337_21666 = G__21767;
continue;
}
}
} else {
}
}
break;
}


var G__21768 = cljs.core.next(seq__21067__$1);
var G__21769 = null;
var G__21770 = (0);
var G__21771 = (0);
seq__21067 = G__21768;
chunk__21069 = G__21769;
count__21070 = G__21770;
i__21071 = G__21771;
continue;
} else {
var G__21774 = cljs.core.next(seq__21067__$1);
var G__21775 = null;
var G__21776 = (0);
var G__21777 = (0);
seq__21067 = G__21774;
chunk__21069 = G__21775;
count__21070 = G__21776;
i__21071 = G__21777;
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
try{var G__21434 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21434) : success.call(null,G__21434));
}catch (e21433){var e = e21433;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__21435,success,fail){
var map__21436 = p__21435;
var map__21436__$1 = cljs.core.__destructure_map(map__21436);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21436__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__21440 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21440) : success.call(null,G__21440));
}catch (e21437){var e = e21437;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21441,done,error){
var map__21442 = p__21441;
var map__21442__$1 = cljs.core.__destructure_map(map__21442);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21442__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21443,done,error){
var map__21444 = p__21443;
var map__21444__$1 = cljs.core.__destructure_map(map__21444);
var msg = map__21444__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21444__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21444__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21444__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21445){
var map__21446 = p__21445;
var map__21446__$1 = cljs.core.__destructure_map(map__21446);
var src = map__21446__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21446__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21447 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21447) : done.call(null,G__21447));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21448){
var map__21449 = p__21448;
var map__21449__$1 = cljs.core.__destructure_map(map__21449);
var msg__$1 = map__21449__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21449__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21450){var ex = e21450;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21451){
var map__21452 = p__21451;
var map__21452__$1 = cljs.core.__destructure_map(map__21452);
var env = map__21452__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21452__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21456){
var map__21457 = p__21456;
var map__21457__$1 = cljs.core.__destructure_map(map__21457);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21457__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21457__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__21459){
var map__21460 = p__21459;
var map__21460__$1 = cljs.core.__destructure_map(map__21460);
var svc = map__21460__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21460__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
