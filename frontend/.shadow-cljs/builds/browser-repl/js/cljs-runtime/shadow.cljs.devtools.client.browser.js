goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21949 = arguments.length;
var i__5727__auto___21950 = (0);
while(true){
if((i__5727__auto___21950 < len__5726__auto___21949)){
args__5732__auto__.push((arguments[i__5727__auto___21950]));

var G__21951 = (i__5727__auto___21950 + (1));
i__5727__auto___21950 = G__21951;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq21422){
var G__21423 = cljs.core.first(seq21422);
var seq21422__$1 = cljs.core.next(seq21422);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21423,seq21422__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__21432 = cljs.core.seq(sources);
var chunk__21433 = null;
var count__21434 = (0);
var i__21435 = (0);
while(true){
if((i__21435 < count__21434)){
var map__21446 = chunk__21433.cljs$core$IIndexed$_nth$arity$2(null,i__21435);
var map__21446__$1 = cljs.core.__destructure_map(map__21446);
var src = map__21446__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21446__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21446__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21446__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21446__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21449){var e_21952 = e21449;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21952);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21952.message)].join('')));
}

var G__21953 = seq__21432;
var G__21954 = chunk__21433;
var G__21955 = count__21434;
var G__21956 = (i__21435 + (1));
seq__21432 = G__21953;
chunk__21433 = G__21954;
count__21434 = G__21955;
i__21435 = G__21956;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21432);
if(temp__5804__auto__){
var seq__21432__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21432__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21432__$1);
var G__21957 = cljs.core.chunk_rest(seq__21432__$1);
var G__21958 = c__5525__auto__;
var G__21959 = cljs.core.count(c__5525__auto__);
var G__21960 = (0);
seq__21432 = G__21957;
chunk__21433 = G__21958;
count__21434 = G__21959;
i__21435 = G__21960;
continue;
} else {
var map__21450 = cljs.core.first(seq__21432__$1);
var map__21450__$1 = cljs.core.__destructure_map(map__21450);
var src = map__21450__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21450__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21450__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21450__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21450__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21451){var e_21961 = e21451;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21961);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21961.message)].join('')));
}

var G__21962 = cljs.core.next(seq__21432__$1);
var G__21963 = null;
var G__21964 = (0);
var G__21965 = (0);
seq__21432 = G__21962;
chunk__21433 = G__21963;
count__21434 = G__21964;
i__21435 = G__21965;
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
var seq__21468 = cljs.core.seq(js_requires);
var chunk__21469 = null;
var count__21470 = (0);
var i__21471 = (0);
while(true){
if((i__21471 < count__21470)){
var js_ns = chunk__21469.cljs$core$IIndexed$_nth$arity$2(null,i__21471);
var require_str_21966 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21966);


var G__21967 = seq__21468;
var G__21968 = chunk__21469;
var G__21969 = count__21470;
var G__21970 = (i__21471 + (1));
seq__21468 = G__21967;
chunk__21469 = G__21968;
count__21470 = G__21969;
i__21471 = G__21970;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21468);
if(temp__5804__auto__){
var seq__21468__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21468__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21468__$1);
var G__21971 = cljs.core.chunk_rest(seq__21468__$1);
var G__21972 = c__5525__auto__;
var G__21973 = cljs.core.count(c__5525__auto__);
var G__21974 = (0);
seq__21468 = G__21971;
chunk__21469 = G__21972;
count__21470 = G__21973;
i__21471 = G__21974;
continue;
} else {
var js_ns = cljs.core.first(seq__21468__$1);
var require_str_21975 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21975);


var G__21976 = cljs.core.next(seq__21468__$1);
var G__21977 = null;
var G__21978 = (0);
var G__21979 = (0);
seq__21468 = G__21976;
chunk__21469 = G__21977;
count__21470 = G__21978;
i__21471 = G__21979;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21477){
var map__21478 = p__21477;
var map__21478__$1 = cljs.core.__destructure_map(map__21478);
var msg = map__21478__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21478__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21478__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21479(s__21480){
return (new cljs.core.LazySeq(null,(function (){
var s__21480__$1 = s__21480;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21480__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__21485 = cljs.core.first(xs__6360__auto__);
var map__21485__$1 = cljs.core.__destructure_map(map__21485);
var src = map__21485__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21485__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21485__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__21480__$1,map__21485,map__21485__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21478,map__21478__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21479_$_iter__21481(s__21482){
return (new cljs.core.LazySeq(null,((function (s__21480__$1,map__21485,map__21485__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21478,map__21478__$1,msg,info,reload_info){
return (function (){
var s__21482__$1 = s__21482;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__21482__$1);
if(temp__5804__auto____$1){
var s__21482__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21482__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__21482__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__21484 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__21483 = (0);
while(true){
if((i__21483 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__21483);
cljs.core.chunk_append(b__21484,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21980 = (i__21483 + (1));
i__21483 = G__21980;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21484),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21479_$_iter__21481(cljs.core.chunk_rest(s__21482__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21484),null);
}
} else {
var warning = cljs.core.first(s__21482__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21479_$_iter__21481(cljs.core.rest(s__21482__$2)));
}
} else {
return null;
}
break;
}
});})(s__21480__$1,map__21485,map__21485__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21478,map__21478__$1,msg,info,reload_info))
,null,null));
});})(s__21480__$1,map__21485,map__21485__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21478,map__21478__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21479(cljs.core.rest(s__21480__$1)));
} else {
var G__21981 = cljs.core.rest(s__21480__$1);
s__21480__$1 = G__21981;
continue;
}
} else {
var G__21982 = cljs.core.rest(s__21480__$1);
s__21480__$1 = G__21982;
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
var seq__21488_21983 = cljs.core.seq(warnings);
var chunk__21489_21984 = null;
var count__21490_21985 = (0);
var i__21491_21986 = (0);
while(true){
if((i__21491_21986 < count__21490_21985)){
var map__21515_21987 = chunk__21489_21984.cljs$core$IIndexed$_nth$arity$2(null,i__21491_21986);
var map__21515_21988__$1 = cljs.core.__destructure_map(map__21515_21987);
var w_21989 = map__21515_21988__$1;
var msg_21990__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21515_21988__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21991 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21515_21988__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21992 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21515_21988__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21993 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21515_21988__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21993)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21991),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21992),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21990__$1)].join(''));


var G__21994 = seq__21488_21983;
var G__21995 = chunk__21489_21984;
var G__21996 = count__21490_21985;
var G__21997 = (i__21491_21986 + (1));
seq__21488_21983 = G__21994;
chunk__21489_21984 = G__21995;
count__21490_21985 = G__21996;
i__21491_21986 = G__21997;
continue;
} else {
var temp__5804__auto___21998 = cljs.core.seq(seq__21488_21983);
if(temp__5804__auto___21998){
var seq__21488_21999__$1 = temp__5804__auto___21998;
if(cljs.core.chunked_seq_QMARK_(seq__21488_21999__$1)){
var c__5525__auto___22000 = cljs.core.chunk_first(seq__21488_21999__$1);
var G__22001 = cljs.core.chunk_rest(seq__21488_21999__$1);
var G__22002 = c__5525__auto___22000;
var G__22003 = cljs.core.count(c__5525__auto___22000);
var G__22004 = (0);
seq__21488_21983 = G__22001;
chunk__21489_21984 = G__22002;
count__21490_21985 = G__22003;
i__21491_21986 = G__22004;
continue;
} else {
var map__21535_22005 = cljs.core.first(seq__21488_21999__$1);
var map__21535_22006__$1 = cljs.core.__destructure_map(map__21535_22005);
var w_22007 = map__21535_22006__$1;
var msg_22008__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21535_22006__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22009 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21535_22006__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22010 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21535_22006__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22011 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21535_22006__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22011)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22009),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22010),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22008__$1)].join(''));


var G__22012 = cljs.core.next(seq__21488_21999__$1);
var G__22013 = null;
var G__22014 = (0);
var G__22015 = (0);
seq__21488_21983 = G__22012;
chunk__21489_21984 = G__22013;
count__21490_21985 = G__22014;
i__21491_21986 = G__22015;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21475_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21475_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21584 = node_uri;
G__21584.setQuery(null);

G__21584.setPath(new$);

return G__21584;
})());
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21675){
var map__21676 = p__21675;
var map__21676__$1 = cljs.core.__destructure_map(map__21676);
var msg = map__21676__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21676__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21676__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21690 = cljs.core.seq(updates);
var chunk__21692 = null;
var count__21693 = (0);
var i__21694 = (0);
while(true){
if((i__21694 < count__21693)){
var path = chunk__21692.cljs$core$IIndexed$_nth$arity$2(null,i__21694);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21819_22016 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21823_22017 = null;
var count__21824_22018 = (0);
var i__21825_22019 = (0);
while(true){
if((i__21825_22019 < count__21824_22018)){
var node_22020 = chunk__21823_22017.cljs$core$IIndexed$_nth$arity$2(null,i__21825_22019);
if(cljs.core.not(node_22020.shadow$old)){
var path_match_22021 = shadow.cljs.devtools.client.browser.match_paths(node_22020.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22021)){
var new_link_22022 = (function (){var G__21851 = node_22020.cloneNode(true);
G__21851.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22021),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21851;
})();
(node_22020.shadow$old = true);

(new_link_22022.onload = ((function (seq__21819_22016,chunk__21823_22017,count__21824_22018,i__21825_22019,seq__21690,chunk__21692,count__21693,i__21694,new_link_22022,path_match_22021,node_22020,path,map__21676,map__21676__$1,msg,updates,reload_info){
return (function (e){
var seq__21852_22023 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21854_22024 = null;
var count__21855_22025 = (0);
var i__21856_22026 = (0);
while(true){
if((i__21856_22026 < count__21855_22025)){
var map__21860_22027 = chunk__21854_22024.cljs$core$IIndexed$_nth$arity$2(null,i__21856_22026);
var map__21860_22028__$1 = cljs.core.__destructure_map(map__21860_22027);
var task_22029 = map__21860_22028__$1;
var fn_str_22030 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21860_22028__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22031 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21860_22028__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22032 = goog.getObjectByName(fn_str_22030,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22031)].join(''));

(fn_obj_22032.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22032.cljs$core$IFn$_invoke$arity$2(path,new_link_22022) : fn_obj_22032.call(null,path,new_link_22022));


var G__22033 = seq__21852_22023;
var G__22034 = chunk__21854_22024;
var G__22035 = count__21855_22025;
var G__22036 = (i__21856_22026 + (1));
seq__21852_22023 = G__22033;
chunk__21854_22024 = G__22034;
count__21855_22025 = G__22035;
i__21856_22026 = G__22036;
continue;
} else {
var temp__5804__auto___22037 = cljs.core.seq(seq__21852_22023);
if(temp__5804__auto___22037){
var seq__21852_22038__$1 = temp__5804__auto___22037;
if(cljs.core.chunked_seq_QMARK_(seq__21852_22038__$1)){
var c__5525__auto___22039 = cljs.core.chunk_first(seq__21852_22038__$1);
var G__22040 = cljs.core.chunk_rest(seq__21852_22038__$1);
var G__22041 = c__5525__auto___22039;
var G__22042 = cljs.core.count(c__5525__auto___22039);
var G__22043 = (0);
seq__21852_22023 = G__22040;
chunk__21854_22024 = G__22041;
count__21855_22025 = G__22042;
i__21856_22026 = G__22043;
continue;
} else {
var map__21861_22044 = cljs.core.first(seq__21852_22038__$1);
var map__21861_22045__$1 = cljs.core.__destructure_map(map__21861_22044);
var task_22046 = map__21861_22045__$1;
var fn_str_22047 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21861_22045__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22048 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21861_22045__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22049 = goog.getObjectByName(fn_str_22047,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22048)].join(''));

(fn_obj_22049.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22049.cljs$core$IFn$_invoke$arity$2(path,new_link_22022) : fn_obj_22049.call(null,path,new_link_22022));


var G__22050 = cljs.core.next(seq__21852_22038__$1);
var G__22051 = null;
var G__22052 = (0);
var G__22053 = (0);
seq__21852_22023 = G__22050;
chunk__21854_22024 = G__22051;
count__21855_22025 = G__22052;
i__21856_22026 = G__22053;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22020);
});})(seq__21819_22016,chunk__21823_22017,count__21824_22018,i__21825_22019,seq__21690,chunk__21692,count__21693,i__21694,new_link_22022,path_match_22021,node_22020,path,map__21676,map__21676__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22021], 0));

goog.dom.insertSiblingAfter(new_link_22022,node_22020);


var G__22054 = seq__21819_22016;
var G__22055 = chunk__21823_22017;
var G__22056 = count__21824_22018;
var G__22057 = (i__21825_22019 + (1));
seq__21819_22016 = G__22054;
chunk__21823_22017 = G__22055;
count__21824_22018 = G__22056;
i__21825_22019 = G__22057;
continue;
} else {
var G__22058 = seq__21819_22016;
var G__22059 = chunk__21823_22017;
var G__22060 = count__21824_22018;
var G__22061 = (i__21825_22019 + (1));
seq__21819_22016 = G__22058;
chunk__21823_22017 = G__22059;
count__21824_22018 = G__22060;
i__21825_22019 = G__22061;
continue;
}
} else {
var G__22062 = seq__21819_22016;
var G__22063 = chunk__21823_22017;
var G__22064 = count__21824_22018;
var G__22065 = (i__21825_22019 + (1));
seq__21819_22016 = G__22062;
chunk__21823_22017 = G__22063;
count__21824_22018 = G__22064;
i__21825_22019 = G__22065;
continue;
}
} else {
var temp__5804__auto___22066 = cljs.core.seq(seq__21819_22016);
if(temp__5804__auto___22066){
var seq__21819_22067__$1 = temp__5804__auto___22066;
if(cljs.core.chunked_seq_QMARK_(seq__21819_22067__$1)){
var c__5525__auto___22068 = cljs.core.chunk_first(seq__21819_22067__$1);
var G__22069 = cljs.core.chunk_rest(seq__21819_22067__$1);
var G__22070 = c__5525__auto___22068;
var G__22071 = cljs.core.count(c__5525__auto___22068);
var G__22072 = (0);
seq__21819_22016 = G__22069;
chunk__21823_22017 = G__22070;
count__21824_22018 = G__22071;
i__21825_22019 = G__22072;
continue;
} else {
var node_22073 = cljs.core.first(seq__21819_22067__$1);
if(cljs.core.not(node_22073.shadow$old)){
var path_match_22074 = shadow.cljs.devtools.client.browser.match_paths(node_22073.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22074)){
var new_link_22075 = (function (){var G__21862 = node_22073.cloneNode(true);
G__21862.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22074),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21862;
})();
(node_22073.shadow$old = true);

(new_link_22075.onload = ((function (seq__21819_22016,chunk__21823_22017,count__21824_22018,i__21825_22019,seq__21690,chunk__21692,count__21693,i__21694,new_link_22075,path_match_22074,node_22073,seq__21819_22067__$1,temp__5804__auto___22066,path,map__21676,map__21676__$1,msg,updates,reload_info){
return (function (e){
var seq__21863_22076 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21865_22077 = null;
var count__21866_22078 = (0);
var i__21867_22079 = (0);
while(true){
if((i__21867_22079 < count__21866_22078)){
var map__21871_22080 = chunk__21865_22077.cljs$core$IIndexed$_nth$arity$2(null,i__21867_22079);
var map__21871_22081__$1 = cljs.core.__destructure_map(map__21871_22080);
var task_22082 = map__21871_22081__$1;
var fn_str_22083 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21871_22081__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21871_22081__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22085 = goog.getObjectByName(fn_str_22083,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22084)].join(''));

(fn_obj_22085.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22085.cljs$core$IFn$_invoke$arity$2(path,new_link_22075) : fn_obj_22085.call(null,path,new_link_22075));


var G__22086 = seq__21863_22076;
var G__22087 = chunk__21865_22077;
var G__22088 = count__21866_22078;
var G__22089 = (i__21867_22079 + (1));
seq__21863_22076 = G__22086;
chunk__21865_22077 = G__22087;
count__21866_22078 = G__22088;
i__21867_22079 = G__22089;
continue;
} else {
var temp__5804__auto___22090__$1 = cljs.core.seq(seq__21863_22076);
if(temp__5804__auto___22090__$1){
var seq__21863_22091__$1 = temp__5804__auto___22090__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21863_22091__$1)){
var c__5525__auto___22092 = cljs.core.chunk_first(seq__21863_22091__$1);
var G__22093 = cljs.core.chunk_rest(seq__21863_22091__$1);
var G__22094 = c__5525__auto___22092;
var G__22095 = cljs.core.count(c__5525__auto___22092);
var G__22096 = (0);
seq__21863_22076 = G__22093;
chunk__21865_22077 = G__22094;
count__21866_22078 = G__22095;
i__21867_22079 = G__22096;
continue;
} else {
var map__21872_22097 = cljs.core.first(seq__21863_22091__$1);
var map__21872_22098__$1 = cljs.core.__destructure_map(map__21872_22097);
var task_22099 = map__21872_22098__$1;
var fn_str_22100 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21872_22098__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21872_22098__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22102 = goog.getObjectByName(fn_str_22100,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22101)].join(''));

(fn_obj_22102.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22102.cljs$core$IFn$_invoke$arity$2(path,new_link_22075) : fn_obj_22102.call(null,path,new_link_22075));


var G__22103 = cljs.core.next(seq__21863_22091__$1);
var G__22104 = null;
var G__22105 = (0);
var G__22106 = (0);
seq__21863_22076 = G__22103;
chunk__21865_22077 = G__22104;
count__21866_22078 = G__22105;
i__21867_22079 = G__22106;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22073);
});})(seq__21819_22016,chunk__21823_22017,count__21824_22018,i__21825_22019,seq__21690,chunk__21692,count__21693,i__21694,new_link_22075,path_match_22074,node_22073,seq__21819_22067__$1,temp__5804__auto___22066,path,map__21676,map__21676__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22074], 0));

goog.dom.insertSiblingAfter(new_link_22075,node_22073);


var G__22107 = cljs.core.next(seq__21819_22067__$1);
var G__22108 = null;
var G__22109 = (0);
var G__22110 = (0);
seq__21819_22016 = G__22107;
chunk__21823_22017 = G__22108;
count__21824_22018 = G__22109;
i__21825_22019 = G__22110;
continue;
} else {
var G__22111 = cljs.core.next(seq__21819_22067__$1);
var G__22112 = null;
var G__22113 = (0);
var G__22114 = (0);
seq__21819_22016 = G__22111;
chunk__21823_22017 = G__22112;
count__21824_22018 = G__22113;
i__21825_22019 = G__22114;
continue;
}
} else {
var G__22115 = cljs.core.next(seq__21819_22067__$1);
var G__22116 = null;
var G__22117 = (0);
var G__22118 = (0);
seq__21819_22016 = G__22115;
chunk__21823_22017 = G__22116;
count__21824_22018 = G__22117;
i__21825_22019 = G__22118;
continue;
}
}
} else {
}
}
break;
}


var G__22119 = seq__21690;
var G__22120 = chunk__21692;
var G__22121 = count__21693;
var G__22122 = (i__21694 + (1));
seq__21690 = G__22119;
chunk__21692 = G__22120;
count__21693 = G__22121;
i__21694 = G__22122;
continue;
} else {
var G__22123 = seq__21690;
var G__22124 = chunk__21692;
var G__22125 = count__21693;
var G__22126 = (i__21694 + (1));
seq__21690 = G__22123;
chunk__21692 = G__22124;
count__21693 = G__22125;
i__21694 = G__22126;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21690);
if(temp__5804__auto__){
var seq__21690__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21690__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21690__$1);
var G__22127 = cljs.core.chunk_rest(seq__21690__$1);
var G__22128 = c__5525__auto__;
var G__22129 = cljs.core.count(c__5525__auto__);
var G__22130 = (0);
seq__21690 = G__22127;
chunk__21692 = G__22128;
count__21693 = G__22129;
i__21694 = G__22130;
continue;
} else {
var path = cljs.core.first(seq__21690__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21873_22131 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21877_22132 = null;
var count__21878_22133 = (0);
var i__21879_22134 = (0);
while(true){
if((i__21879_22134 < count__21878_22133)){
var node_22135 = chunk__21877_22132.cljs$core$IIndexed$_nth$arity$2(null,i__21879_22134);
if(cljs.core.not(node_22135.shadow$old)){
var path_match_22136 = shadow.cljs.devtools.client.browser.match_paths(node_22135.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22136)){
var new_link_22137 = (function (){var G__21905 = node_22135.cloneNode(true);
G__21905.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22136),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21905;
})();
(node_22135.shadow$old = true);

(new_link_22137.onload = ((function (seq__21873_22131,chunk__21877_22132,count__21878_22133,i__21879_22134,seq__21690,chunk__21692,count__21693,i__21694,new_link_22137,path_match_22136,node_22135,path,seq__21690__$1,temp__5804__auto__,map__21676,map__21676__$1,msg,updates,reload_info){
return (function (e){
var seq__21906_22138 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21908_22139 = null;
var count__21909_22140 = (0);
var i__21910_22141 = (0);
while(true){
if((i__21910_22141 < count__21909_22140)){
var map__21914_22142 = chunk__21908_22139.cljs$core$IIndexed$_nth$arity$2(null,i__21910_22141);
var map__21914_22143__$1 = cljs.core.__destructure_map(map__21914_22142);
var task_22144 = map__21914_22143__$1;
var fn_str_22145 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21914_22143__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22146 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21914_22143__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22147 = goog.getObjectByName(fn_str_22145,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22146)].join(''));

(fn_obj_22147.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22147.cljs$core$IFn$_invoke$arity$2(path,new_link_22137) : fn_obj_22147.call(null,path,new_link_22137));


var G__22148 = seq__21906_22138;
var G__22149 = chunk__21908_22139;
var G__22150 = count__21909_22140;
var G__22151 = (i__21910_22141 + (1));
seq__21906_22138 = G__22148;
chunk__21908_22139 = G__22149;
count__21909_22140 = G__22150;
i__21910_22141 = G__22151;
continue;
} else {
var temp__5804__auto___22152__$1 = cljs.core.seq(seq__21906_22138);
if(temp__5804__auto___22152__$1){
var seq__21906_22153__$1 = temp__5804__auto___22152__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21906_22153__$1)){
var c__5525__auto___22154 = cljs.core.chunk_first(seq__21906_22153__$1);
var G__22155 = cljs.core.chunk_rest(seq__21906_22153__$1);
var G__22156 = c__5525__auto___22154;
var G__22157 = cljs.core.count(c__5525__auto___22154);
var G__22158 = (0);
seq__21906_22138 = G__22155;
chunk__21908_22139 = G__22156;
count__21909_22140 = G__22157;
i__21910_22141 = G__22158;
continue;
} else {
var map__21915_22159 = cljs.core.first(seq__21906_22153__$1);
var map__21915_22160__$1 = cljs.core.__destructure_map(map__21915_22159);
var task_22161 = map__21915_22160__$1;
var fn_str_22162 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21915_22160__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22163 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21915_22160__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22164 = goog.getObjectByName(fn_str_22162,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22163)].join(''));

(fn_obj_22164.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22164.cljs$core$IFn$_invoke$arity$2(path,new_link_22137) : fn_obj_22164.call(null,path,new_link_22137));


var G__22165 = cljs.core.next(seq__21906_22153__$1);
var G__22166 = null;
var G__22167 = (0);
var G__22168 = (0);
seq__21906_22138 = G__22165;
chunk__21908_22139 = G__22166;
count__21909_22140 = G__22167;
i__21910_22141 = G__22168;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22135);
});})(seq__21873_22131,chunk__21877_22132,count__21878_22133,i__21879_22134,seq__21690,chunk__21692,count__21693,i__21694,new_link_22137,path_match_22136,node_22135,path,seq__21690__$1,temp__5804__auto__,map__21676,map__21676__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22136], 0));

goog.dom.insertSiblingAfter(new_link_22137,node_22135);


var G__22169 = seq__21873_22131;
var G__22170 = chunk__21877_22132;
var G__22171 = count__21878_22133;
var G__22172 = (i__21879_22134 + (1));
seq__21873_22131 = G__22169;
chunk__21877_22132 = G__22170;
count__21878_22133 = G__22171;
i__21879_22134 = G__22172;
continue;
} else {
var G__22173 = seq__21873_22131;
var G__22174 = chunk__21877_22132;
var G__22175 = count__21878_22133;
var G__22176 = (i__21879_22134 + (1));
seq__21873_22131 = G__22173;
chunk__21877_22132 = G__22174;
count__21878_22133 = G__22175;
i__21879_22134 = G__22176;
continue;
}
} else {
var G__22177 = seq__21873_22131;
var G__22178 = chunk__21877_22132;
var G__22179 = count__21878_22133;
var G__22180 = (i__21879_22134 + (1));
seq__21873_22131 = G__22177;
chunk__21877_22132 = G__22178;
count__21878_22133 = G__22179;
i__21879_22134 = G__22180;
continue;
}
} else {
var temp__5804__auto___22181__$1 = cljs.core.seq(seq__21873_22131);
if(temp__5804__auto___22181__$1){
var seq__21873_22182__$1 = temp__5804__auto___22181__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21873_22182__$1)){
var c__5525__auto___22183 = cljs.core.chunk_first(seq__21873_22182__$1);
var G__22184 = cljs.core.chunk_rest(seq__21873_22182__$1);
var G__22185 = c__5525__auto___22183;
var G__22186 = cljs.core.count(c__5525__auto___22183);
var G__22187 = (0);
seq__21873_22131 = G__22184;
chunk__21877_22132 = G__22185;
count__21878_22133 = G__22186;
i__21879_22134 = G__22187;
continue;
} else {
var node_22188 = cljs.core.first(seq__21873_22182__$1);
if(cljs.core.not(node_22188.shadow$old)){
var path_match_22189 = shadow.cljs.devtools.client.browser.match_paths(node_22188.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22189)){
var new_link_22190 = (function (){var G__21916 = node_22188.cloneNode(true);
G__21916.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22189),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21916;
})();
(node_22188.shadow$old = true);

(new_link_22190.onload = ((function (seq__21873_22131,chunk__21877_22132,count__21878_22133,i__21879_22134,seq__21690,chunk__21692,count__21693,i__21694,new_link_22190,path_match_22189,node_22188,seq__21873_22182__$1,temp__5804__auto___22181__$1,path,seq__21690__$1,temp__5804__auto__,map__21676,map__21676__$1,msg,updates,reload_info){
return (function (e){
var seq__21917_22191 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21919_22192 = null;
var count__21920_22193 = (0);
var i__21921_22194 = (0);
while(true){
if((i__21921_22194 < count__21920_22193)){
var map__21925_22195 = chunk__21919_22192.cljs$core$IIndexed$_nth$arity$2(null,i__21921_22194);
var map__21925_22196__$1 = cljs.core.__destructure_map(map__21925_22195);
var task_22197 = map__21925_22196__$1;
var fn_str_22198 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21925_22196__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22199 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21925_22196__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22200 = goog.getObjectByName(fn_str_22198,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22199)].join(''));

(fn_obj_22200.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22200.cljs$core$IFn$_invoke$arity$2(path,new_link_22190) : fn_obj_22200.call(null,path,new_link_22190));


var G__22201 = seq__21917_22191;
var G__22202 = chunk__21919_22192;
var G__22203 = count__21920_22193;
var G__22204 = (i__21921_22194 + (1));
seq__21917_22191 = G__22201;
chunk__21919_22192 = G__22202;
count__21920_22193 = G__22203;
i__21921_22194 = G__22204;
continue;
} else {
var temp__5804__auto___22205__$2 = cljs.core.seq(seq__21917_22191);
if(temp__5804__auto___22205__$2){
var seq__21917_22206__$1 = temp__5804__auto___22205__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21917_22206__$1)){
var c__5525__auto___22207 = cljs.core.chunk_first(seq__21917_22206__$1);
var G__22208 = cljs.core.chunk_rest(seq__21917_22206__$1);
var G__22209 = c__5525__auto___22207;
var G__22210 = cljs.core.count(c__5525__auto___22207);
var G__22211 = (0);
seq__21917_22191 = G__22208;
chunk__21919_22192 = G__22209;
count__21920_22193 = G__22210;
i__21921_22194 = G__22211;
continue;
} else {
var map__21926_22212 = cljs.core.first(seq__21917_22206__$1);
var map__21926_22213__$1 = cljs.core.__destructure_map(map__21926_22212);
var task_22214 = map__21926_22213__$1;
var fn_str_22215 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21926_22213__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22216 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21926_22213__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22217 = goog.getObjectByName(fn_str_22215,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22216)].join(''));

(fn_obj_22217.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22217.cljs$core$IFn$_invoke$arity$2(path,new_link_22190) : fn_obj_22217.call(null,path,new_link_22190));


var G__22218 = cljs.core.next(seq__21917_22206__$1);
var G__22219 = null;
var G__22220 = (0);
var G__22221 = (0);
seq__21917_22191 = G__22218;
chunk__21919_22192 = G__22219;
count__21920_22193 = G__22220;
i__21921_22194 = G__22221;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22188);
});})(seq__21873_22131,chunk__21877_22132,count__21878_22133,i__21879_22134,seq__21690,chunk__21692,count__21693,i__21694,new_link_22190,path_match_22189,node_22188,seq__21873_22182__$1,temp__5804__auto___22181__$1,path,seq__21690__$1,temp__5804__auto__,map__21676,map__21676__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22189], 0));

goog.dom.insertSiblingAfter(new_link_22190,node_22188);


var G__22222 = cljs.core.next(seq__21873_22182__$1);
var G__22223 = null;
var G__22224 = (0);
var G__22225 = (0);
seq__21873_22131 = G__22222;
chunk__21877_22132 = G__22223;
count__21878_22133 = G__22224;
i__21879_22134 = G__22225;
continue;
} else {
var G__22226 = cljs.core.next(seq__21873_22182__$1);
var G__22227 = null;
var G__22228 = (0);
var G__22229 = (0);
seq__21873_22131 = G__22226;
chunk__21877_22132 = G__22227;
count__21878_22133 = G__22228;
i__21879_22134 = G__22229;
continue;
}
} else {
var G__22230 = cljs.core.next(seq__21873_22182__$1);
var G__22231 = null;
var G__22232 = (0);
var G__22233 = (0);
seq__21873_22131 = G__22230;
chunk__21877_22132 = G__22231;
count__21878_22133 = G__22232;
i__21879_22134 = G__22233;
continue;
}
}
} else {
}
}
break;
}


var G__22234 = cljs.core.next(seq__21690__$1);
var G__22235 = null;
var G__22236 = (0);
var G__22237 = (0);
seq__21690 = G__22234;
chunk__21692 = G__22235;
count__21693 = G__22236;
i__21694 = G__22237;
continue;
} else {
var G__22238 = cljs.core.next(seq__21690__$1);
var G__22239 = null;
var G__22240 = (0);
var G__22241 = (0);
seq__21690 = G__22238;
chunk__21692 = G__22239;
count__21693 = G__22240;
i__21694 = G__22241;
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
try{var G__21928 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21928) : success.call(null,G__21928));
}catch (e21927){var e = e21927;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__21929,success,fail){
var map__21930 = p__21929;
var map__21930__$1 = cljs.core.__destructure_map(map__21930);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21930__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__21932 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21932) : success.call(null,G__21932));
}catch (e21931){var e = e21931;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21933,done,error){
var map__21934 = p__21933;
var map__21934__$1 = cljs.core.__destructure_map(map__21934);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21934__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21935,done,error){
var map__21936 = p__21935;
var map__21936__$1 = cljs.core.__destructure_map(map__21936);
var msg = map__21936__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21936__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21936__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21936__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21937){
var map__21938 = p__21937;
var map__21938__$1 = cljs.core.__destructure_map(map__21938);
var src = map__21938__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21938__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21939 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21939) : done.call(null,G__21939));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21940){
var map__21941 = p__21940;
var map__21941__$1 = cljs.core.__destructure_map(map__21941);
var msg__$1 = map__21941__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21941__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21942){var ex = e21942;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21943){
var map__21944 = p__21943;
var map__21944__$1 = cljs.core.__destructure_map(map__21944);
var env = map__21944__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21944__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21945){
var map__21946 = p__21945;
var map__21946__$1 = cljs.core.__destructure_map(map__21946);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21946__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21946__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__21947){
var map__21948 = p__21947;
var map__21948__$1 = cljs.core.__destructure_map(map__21948);
var svc = map__21948__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21948__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
