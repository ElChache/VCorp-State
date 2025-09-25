goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__7716__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__7716 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7717__i = 0, G__7717__a = new Array(arguments.length -  0);
while (G__7717__i < G__7717__a.length) {G__7717__a[G__7717__i] = arguments[G__7717__i + 0]; ++G__7717__i;}
  args = new cljs.core.IndexedSeq(G__7717__a,0,null);
} 
return G__7716__delegate.call(this,args);};
G__7716.cljs$lang$maxFixedArity = 0;
G__7716.cljs$lang$applyTo = (function (arglist__7718){
var args = cljs.core.seq(arglist__7718);
return G__7716__delegate(args);
});
G__7716.cljs$core$IFn$_invoke$arity$variadic = G__7716__delegate;
return G__7716;
})()
);

(o.error = (function() { 
var G__7719__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__7719 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7720__i = 0, G__7720__a = new Array(arguments.length -  0);
while (G__7720__i < G__7720__a.length) {G__7720__a[G__7720__i] = arguments[G__7720__i + 0]; ++G__7720__i;}
  args = new cljs.core.IndexedSeq(G__7720__a,0,null);
} 
return G__7719__delegate.call(this,args);};
G__7719.cljs$lang$maxFixedArity = 0;
G__7719.cljs$lang$applyTo = (function (arglist__7721){
var args = cljs.core.seq(arglist__7721);
return G__7719__delegate(args);
});
G__7719.cljs$core$IFn$_invoke$arity$variadic = G__7719__delegate;
return G__7719;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
