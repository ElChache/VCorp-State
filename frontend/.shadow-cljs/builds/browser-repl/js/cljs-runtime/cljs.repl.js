goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19948){
var map__19950 = p__19948;
var map__19950__$1 = cljs.core.__destructure_map(map__19950);
var m = map__19950__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19950__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19950__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19966_20273 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19967_20274 = null;
var count__19968_20275 = (0);
var i__19969_20276 = (0);
while(true){
if((i__19969_20276 < count__19968_20275)){
var f_20277 = chunk__19967_20274.cljs$core$IIndexed$_nth$arity$2(null,i__19969_20276);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20277], 0));


var G__20278 = seq__19966_20273;
var G__20279 = chunk__19967_20274;
var G__20280 = count__19968_20275;
var G__20281 = (i__19969_20276 + (1));
seq__19966_20273 = G__20278;
chunk__19967_20274 = G__20279;
count__19968_20275 = G__20280;
i__19969_20276 = G__20281;
continue;
} else {
var temp__5804__auto___20287 = cljs.core.seq(seq__19966_20273);
if(temp__5804__auto___20287){
var seq__19966_20288__$1 = temp__5804__auto___20287;
if(cljs.core.chunked_seq_QMARK_(seq__19966_20288__$1)){
var c__5525__auto___20290 = cljs.core.chunk_first(seq__19966_20288__$1);
var G__20291 = cljs.core.chunk_rest(seq__19966_20288__$1);
var G__20292 = c__5525__auto___20290;
var G__20293 = cljs.core.count(c__5525__auto___20290);
var G__20294 = (0);
seq__19966_20273 = G__20291;
chunk__19967_20274 = G__20292;
count__19968_20275 = G__20293;
i__19969_20276 = G__20294;
continue;
} else {
var f_20295 = cljs.core.first(seq__19966_20288__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20295], 0));


var G__20296 = cljs.core.next(seq__19966_20288__$1);
var G__20297 = null;
var G__20298 = (0);
var G__20299 = (0);
seq__19966_20273 = G__20296;
chunk__19967_20274 = G__20297;
count__19968_20275 = G__20298;
i__19969_20276 = G__20299;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20300 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_20300], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_20300)))?cljs.core.second(arglists_20300):arglists_20300)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20074_20307 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20075_20308 = null;
var count__20076_20309 = (0);
var i__20077_20310 = (0);
while(true){
if((i__20077_20310 < count__20076_20309)){
var vec__20128_20311 = chunk__20075_20308.cljs$core$IIndexed$_nth$arity$2(null,i__20077_20310);
var name_20312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20128_20311,(0),null);
var map__20131_20313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20128_20311,(1),null);
var map__20131_20314__$1 = cljs.core.__destructure_map(map__20131_20313);
var doc_20315 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20131_20314__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20316 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20131_20314__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20312], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20316], 0));

if(cljs.core.truth_(doc_20315)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20315], 0));
} else {
}


var G__20320 = seq__20074_20307;
var G__20321 = chunk__20075_20308;
var G__20322 = count__20076_20309;
var G__20323 = (i__20077_20310 + (1));
seq__20074_20307 = G__20320;
chunk__20075_20308 = G__20321;
count__20076_20309 = G__20322;
i__20077_20310 = G__20323;
continue;
} else {
var temp__5804__auto___20324 = cljs.core.seq(seq__20074_20307);
if(temp__5804__auto___20324){
var seq__20074_20326__$1 = temp__5804__auto___20324;
if(cljs.core.chunked_seq_QMARK_(seq__20074_20326__$1)){
var c__5525__auto___20327 = cljs.core.chunk_first(seq__20074_20326__$1);
var G__20328 = cljs.core.chunk_rest(seq__20074_20326__$1);
var G__20329 = c__5525__auto___20327;
var G__20330 = cljs.core.count(c__5525__auto___20327);
var G__20331 = (0);
seq__20074_20307 = G__20328;
chunk__20075_20308 = G__20329;
count__20076_20309 = G__20330;
i__20077_20310 = G__20331;
continue;
} else {
var vec__20132_20332 = cljs.core.first(seq__20074_20326__$1);
var name_20333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20132_20332,(0),null);
var map__20135_20334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20132_20332,(1),null);
var map__20135_20335__$1 = cljs.core.__destructure_map(map__20135_20334);
var doc_20336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20135_20335__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20337 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20135_20335__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20333], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20337], 0));

if(cljs.core.truth_(doc_20336)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20336], 0));
} else {
}


var G__20340 = cljs.core.next(seq__20074_20326__$1);
var G__20341 = null;
var G__20342 = (0);
var G__20343 = (0);
seq__20074_20307 = G__20340;
chunk__20075_20308 = G__20341;
count__20076_20309 = G__20342;
i__20077_20310 = G__20343;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__20136 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20137 = null;
var count__20138 = (0);
var i__20139 = (0);
while(true){
if((i__20139 < count__20138)){
var role = chunk__20137.cljs$core$IIndexed$_nth$arity$2(null,i__20139);
var temp__5804__auto___20348__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20348__$1)){
var spec_20351 = temp__5804__auto___20348__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20351)], 0));
} else {
}


var G__20352 = seq__20136;
var G__20353 = chunk__20137;
var G__20354 = count__20138;
var G__20355 = (i__20139 + (1));
seq__20136 = G__20352;
chunk__20137 = G__20353;
count__20138 = G__20354;
i__20139 = G__20355;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__20136);
if(temp__5804__auto____$1){
var seq__20136__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__20136__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20136__$1);
var G__20356 = cljs.core.chunk_rest(seq__20136__$1);
var G__20357 = c__5525__auto__;
var G__20358 = cljs.core.count(c__5525__auto__);
var G__20359 = (0);
seq__20136 = G__20356;
chunk__20137 = G__20357;
count__20138 = G__20358;
i__20139 = G__20359;
continue;
} else {
var role = cljs.core.first(seq__20136__$1);
var temp__5804__auto___20360__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20360__$2)){
var spec_20361 = temp__5804__auto___20360__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20361)], 0));
} else {
}


var G__20363 = cljs.core.next(seq__20136__$1);
var G__20364 = null;
var G__20365 = (0);
var G__20366 = (0);
seq__20136 = G__20363;
chunk__20137 = G__20364;
count__20138 = G__20365;
i__20139 = G__20366;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__20161 = datafied_throwable;
var map__20161__$1 = cljs.core.__destructure_map(map__20161);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20161__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20161__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20161__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20162 = cljs.core.last(via);
var map__20162__$1 = cljs.core.__destructure_map(map__20162);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20162__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20162__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20162__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20163 = data;
var map__20163__$1 = cljs.core.__destructure_map(map__20163);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20163__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20163__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20163__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20164 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__20164__$1 = cljs.core.__destructure_map(map__20164);
var top_data = map__20164__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20164__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__20165 = phase;
var G__20165__$1 = (((G__20165 instanceof cljs.core.Keyword))?G__20165.fqn:null);
switch (G__20165__$1) {
case "read-source":
var map__20166 = data;
var map__20166__$1 = cljs.core.__destructure_map(map__20166);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20166__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20166__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20167 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__20167__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20167,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20167);
var G__20167__$2 = (cljs.core.truth_((function (){var fexpr__20168 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20168.cljs$core$IFn$_invoke$arity$1 ? fexpr__20168.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20168.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20167__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20167__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20167__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20167__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20169 = top_data;
var G__20169__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20169,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20169);
var G__20169__$2 = (cljs.core.truth_((function (){var fexpr__20170 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20170.cljs$core$IFn$_invoke$arity$1 ? fexpr__20170.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20170.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20169__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20169__$1);
var G__20169__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20169__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20169__$2);
var G__20169__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20169__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20169__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20169__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20169__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20171 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20171,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20171,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20171,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20171,(3),null);
var G__20174 = top_data;
var G__20174__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20174,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20174);
var G__20174__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20174__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20174__$1);
var G__20174__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20174__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20174__$2);
var G__20174__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20174__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20174__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20174__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20174__$4;
}

break;
case "execution":
var vec__20175 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20175,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20175,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20175,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20175,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20159_SHARP_){
var or__5002__auto__ = (p1__20159_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__20178 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20178.cljs$core$IFn$_invoke$arity$1 ? fexpr__20178.cljs$core$IFn$_invoke$arity$1(p1__20159_SHARP_) : fexpr__20178.call(null,p1__20159_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__20179 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20179__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20179,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20179);
var G__20179__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20179__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20179__$1);
var G__20179__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20179__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20179__$2);
var G__20179__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20179__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20179__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20179__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20179__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20165__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20183){
var map__20184 = p__20183;
var map__20184__$1 = cljs.core.__destructure_map(map__20184);
var triage_data = map__20184__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20184__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20184__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20184__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20184__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20184__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20184__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20184__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20184__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__20185 = phase;
var G__20185__$1 = (((G__20185 instanceof cljs.core.Keyword))?G__20185.fqn:null);
switch (G__20185__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__20186 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__20187 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20188 = loc;
var G__20189 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20191_20467 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20192_20468 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20193_20469 = true;
var _STAR_print_fn_STAR__temp_val__20194_20470 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20193_20469);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20194_20470);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20181_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20181_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20192_20468);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20191_20467);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20186,G__20187,G__20188,G__20189) : format.call(null,G__20186,G__20187,G__20188,G__20189));

break;
case "macroexpansion":
var G__20207 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__20208 = cause_type;
var G__20209 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20210 = loc;
var G__20211 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20207,G__20208,G__20209,G__20210,G__20211) : format.call(null,G__20207,G__20208,G__20209,G__20210,G__20211));

break;
case "compile-syntax-check":
var G__20216 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__20217 = cause_type;
var G__20218 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20219 = loc;
var G__20220 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20216,G__20217,G__20218,G__20219,G__20220) : format.call(null,G__20216,G__20217,G__20218,G__20219,G__20220));

break;
case "compilation":
var G__20232 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__20233 = cause_type;
var G__20234 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20235 = loc;
var G__20236 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20232,G__20233,G__20234,G__20235,G__20236) : format.call(null,G__20232,G__20233,G__20234,G__20235,G__20236));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__20237 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__20238 = symbol;
var G__20239 = loc;
var G__20240 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20242_20480 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20243_20481 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20244_20482 = true;
var _STAR_print_fn_STAR__temp_val__20245_20483 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20244_20482);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20245_20483);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20182_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20182_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20243_20481);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20242_20480);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20237,G__20238,G__20239,G__20240) : format.call(null,G__20237,G__20238,G__20239,G__20240));
} else {
var G__20252 = "Execution error%s at %s(%s).\n%s\n";
var G__20253 = cause_type;
var G__20254 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20255 = loc;
var G__20256 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20252,G__20253,G__20254,G__20255,G__20256) : format.call(null,G__20252,G__20253,G__20254,G__20255,G__20256));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20185__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
