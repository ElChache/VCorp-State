goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19339){
var map__19340 = p__19339;
var map__19340__$1 = cljs.core.__destructure_map(map__19340);
var m = map__19340__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19340__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19340__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__19342_19667 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19343_19668 = null;
var count__19344_19669 = (0);
var i__19345_19670 = (0);
while(true){
if((i__19345_19670 < count__19344_19669)){
var f_19672 = chunk__19343_19668.cljs$core$IIndexed$_nth$arity$2(null,i__19345_19670);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19672], 0));


var G__19673 = seq__19342_19667;
var G__19674 = chunk__19343_19668;
var G__19675 = count__19344_19669;
var G__19676 = (i__19345_19670 + (1));
seq__19342_19667 = G__19673;
chunk__19343_19668 = G__19674;
count__19344_19669 = G__19675;
i__19345_19670 = G__19676;
continue;
} else {
var temp__5804__auto___19677 = cljs.core.seq(seq__19342_19667);
if(temp__5804__auto___19677){
var seq__19342_19678__$1 = temp__5804__auto___19677;
if(cljs.core.chunked_seq_QMARK_(seq__19342_19678__$1)){
var c__5525__auto___19679 = cljs.core.chunk_first(seq__19342_19678__$1);
var G__19680 = cljs.core.chunk_rest(seq__19342_19678__$1);
var G__19681 = c__5525__auto___19679;
var G__19682 = cljs.core.count(c__5525__auto___19679);
var G__19683 = (0);
seq__19342_19667 = G__19680;
chunk__19343_19668 = G__19681;
count__19344_19669 = G__19682;
i__19345_19670 = G__19683;
continue;
} else {
var f_19685 = cljs.core.first(seq__19342_19678__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19685], 0));


var G__19686 = cljs.core.next(seq__19342_19678__$1);
var G__19687 = null;
var G__19688 = (0);
var G__19689 = (0);
seq__19342_19667 = G__19686;
chunk__19343_19668 = G__19687;
count__19344_19669 = G__19688;
i__19345_19670 = G__19689;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19690 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19690], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19690)))?cljs.core.second(arglists_19690):arglists_19690)], 0));
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
var seq__19356_19696 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19357_19697 = null;
var count__19358_19698 = (0);
var i__19359_19699 = (0);
while(true){
if((i__19359_19699 < count__19358_19698)){
var vec__19387_19705 = chunk__19357_19697.cljs$core$IIndexed$_nth$arity$2(null,i__19359_19699);
var name_19706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19387_19705,(0),null);
var map__19390_19707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19387_19705,(1),null);
var map__19390_19708__$1 = cljs.core.__destructure_map(map__19390_19707);
var doc_19709 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19390_19708__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19390_19708__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19706], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19710], 0));

if(cljs.core.truth_(doc_19709)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19709], 0));
} else {
}


var G__19712 = seq__19356_19696;
var G__19713 = chunk__19357_19697;
var G__19714 = count__19358_19698;
var G__19715 = (i__19359_19699 + (1));
seq__19356_19696 = G__19712;
chunk__19357_19697 = G__19713;
count__19358_19698 = G__19714;
i__19359_19699 = G__19715;
continue;
} else {
var temp__5804__auto___19720 = cljs.core.seq(seq__19356_19696);
if(temp__5804__auto___19720){
var seq__19356_19721__$1 = temp__5804__auto___19720;
if(cljs.core.chunked_seq_QMARK_(seq__19356_19721__$1)){
var c__5525__auto___19722 = cljs.core.chunk_first(seq__19356_19721__$1);
var G__19723 = cljs.core.chunk_rest(seq__19356_19721__$1);
var G__19724 = c__5525__auto___19722;
var G__19725 = cljs.core.count(c__5525__auto___19722);
var G__19726 = (0);
seq__19356_19696 = G__19723;
chunk__19357_19697 = G__19724;
count__19358_19698 = G__19725;
i__19359_19699 = G__19726;
continue;
} else {
var vec__19396_19728 = cljs.core.first(seq__19356_19721__$1);
var name_19729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19396_19728,(0),null);
var map__19399_19730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19396_19728,(1),null);
var map__19399_19731__$1 = cljs.core.__destructure_map(map__19399_19730);
var doc_19732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19399_19731__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19399_19731__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19729], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19733], 0));

if(cljs.core.truth_(doc_19732)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19732], 0));
} else {
}


var G__19734 = cljs.core.next(seq__19356_19721__$1);
var G__19735 = null;
var G__19736 = (0);
var G__19737 = (0);
seq__19356_19696 = G__19734;
chunk__19357_19697 = G__19735;
count__19358_19698 = G__19736;
i__19359_19699 = G__19737;
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

var seq__19403 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19404 = null;
var count__19405 = (0);
var i__19406 = (0);
while(true){
if((i__19406 < count__19405)){
var role = chunk__19404.cljs$core$IIndexed$_nth$arity$2(null,i__19406);
var temp__5804__auto___19742__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19742__$1)){
var spec_19743 = temp__5804__auto___19742__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19743)], 0));
} else {
}


var G__19744 = seq__19403;
var G__19745 = chunk__19404;
var G__19746 = count__19405;
var G__19747 = (i__19406 + (1));
seq__19403 = G__19744;
chunk__19404 = G__19745;
count__19405 = G__19746;
i__19406 = G__19747;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__19403);
if(temp__5804__auto____$1){
var seq__19403__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19403__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19403__$1);
var G__19748 = cljs.core.chunk_rest(seq__19403__$1);
var G__19749 = c__5525__auto__;
var G__19750 = cljs.core.count(c__5525__auto__);
var G__19751 = (0);
seq__19403 = G__19748;
chunk__19404 = G__19749;
count__19405 = G__19750;
i__19406 = G__19751;
continue;
} else {
var role = cljs.core.first(seq__19403__$1);
var temp__5804__auto___19752__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19752__$2)){
var spec_19753 = temp__5804__auto___19752__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19753)], 0));
} else {
}


var G__19754 = cljs.core.next(seq__19403__$1);
var G__19755 = null;
var G__19756 = (0);
var G__19757 = (0);
seq__19403 = G__19754;
chunk__19404 = G__19755;
count__19405 = G__19756;
i__19406 = G__19757;
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
var map__19468 = datafied_throwable;
var map__19468__$1 = cljs.core.__destructure_map(map__19468);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19468__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19468__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19468__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19469 = cljs.core.last(via);
var map__19469__$1 = cljs.core.__destructure_map(map__19469);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19469__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19469__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19469__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19470 = data;
var map__19470__$1 = cljs.core.__destructure_map(map__19470);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19470__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19470__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19470__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19472 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19472__$1 = cljs.core.__destructure_map(map__19472);
var top_data = map__19472__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19472__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19478 = phase;
var G__19478__$1 = (((G__19478 instanceof cljs.core.Keyword))?G__19478.fqn:null);
switch (G__19478__$1) {
case "read-source":
var map__19528 = data;
var map__19528__$1 = cljs.core.__destructure_map(map__19528);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19528__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19528__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19529 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19529__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19529,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19529);
var G__19529__$2 = (cljs.core.truth_((function (){var fexpr__19530 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19530.cljs$core$IFn$_invoke$arity$1 ? fexpr__19530.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19530.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19529__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19529__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19529__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19529__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19534 = top_data;
var G__19534__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19534,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19534);
var G__19534__$2 = (cljs.core.truth_((function (){var fexpr__19535 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19535.cljs$core$IFn$_invoke$arity$1 ? fexpr__19535.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19535.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19534__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19534__$1);
var G__19534__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19534__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19534__$2);
var G__19534__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19534__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19534__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19534__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19534__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19536 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19536,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19536,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19536,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19536,(3),null);
var G__19539 = top_data;
var G__19539__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19539,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19539);
var G__19539__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19539__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19539__$1);
var G__19539__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19539__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19539__$2);
var G__19539__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19539__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19539__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19539__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19539__$4;
}

break;
case "execution":
var vec__19551 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19551,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19551,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19551,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19551,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19457_SHARP_){
var or__5002__auto__ = (p1__19457_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__19563 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19563.cljs$core$IFn$_invoke$arity$1 ? fexpr__19563.cljs$core$IFn$_invoke$arity$1(p1__19457_SHARP_) : fexpr__19563.call(null,p1__19457_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__19568 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19568__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19568,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19568);
var G__19568__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19568__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19568__$1);
var G__19568__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19568__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19568__$2);
var G__19568__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19568__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19568__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19568__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19568__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19478__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19601){
var map__19603 = p__19601;
var map__19603__$1 = cljs.core.__destructure_map(map__19603);
var triage_data = map__19603__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19603__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19603__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19603__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19603__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19603__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19603__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19603__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19603__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__19619 = phase;
var G__19619__$1 = (((G__19619 instanceof cljs.core.Keyword))?G__19619.fqn:null);
switch (G__19619__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19620 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19621 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19622 = loc;
var G__19623 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19624_19779 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19625_19780 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19626_19781 = true;
var _STAR_print_fn_STAR__temp_val__19627_19782 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19626_19781);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19627_19782);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19593_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19593_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19625_19780);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19624_19779);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19620,G__19621,G__19622,G__19623) : format.call(null,G__19620,G__19621,G__19622,G__19623));

break;
case "macroexpansion":
var G__19629 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19630 = cause_type;
var G__19631 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19632 = loc;
var G__19633 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19629,G__19630,G__19631,G__19632,G__19633) : format.call(null,G__19629,G__19630,G__19631,G__19632,G__19633));

break;
case "compile-syntax-check":
var G__19634 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19635 = cause_type;
var G__19636 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19637 = loc;
var G__19638 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19634,G__19635,G__19636,G__19637,G__19638) : format.call(null,G__19634,G__19635,G__19636,G__19637,G__19638));

break;
case "compilation":
var G__19639 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19640 = cause_type;
var G__19641 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19642 = loc;
var G__19643 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19639,G__19640,G__19641,G__19642,G__19643) : format.call(null,G__19639,G__19640,G__19641,G__19642,G__19643));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19645 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19646 = symbol;
var G__19647 = loc;
var G__19648 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19649_19785 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19650_19786 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19651_19787 = true;
var _STAR_print_fn_STAR__temp_val__19652_19788 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19651_19787);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19652_19788);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19595_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19595_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19650_19786);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19649_19785);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19645,G__19646,G__19647,G__19648) : format.call(null,G__19645,G__19646,G__19647,G__19648));
} else {
var G__19655 = "Execution error%s at %s(%s).\n%s\n";
var G__19656 = cause_type;
var G__19657 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19658 = loc;
var G__19659 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19655,G__19656,G__19657,G__19658,G__19659) : format.call(null,G__19655,G__19656,G__19657,G__19658,G__19659));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19619__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
