goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12495 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_12495(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12503 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_12503(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11705 = coll;
var G__11706 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11705,G__11706) : shadow.dom.lazy_native_coll_seq.call(null,G__11705,G__11706));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__11722 = arguments.length;
switch (G__11722) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__11735 = arguments.length;
switch (G__11735) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__11739 = arguments.length;
switch (G__11739) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__11751 = arguments.length;
switch (G__11751) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__11754 = arguments.length;
switch (G__11754) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__11757 = arguments.length;
switch (G__11757) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e11763){if((e11763 instanceof Object)){
var e = e11763;
return console.log("didnt support attachEvent",el,e);
} else {
throw e11763;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__11776 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__11777 = null;
var count__11778 = (0);
var i__11779 = (0);
while(true){
if((i__11779 < count__11778)){
var el = chunk__11777.cljs$core$IIndexed$_nth$arity$2(null,i__11779);
var handler_12595__$1 = ((function (seq__11776,chunk__11777,count__11778,i__11779,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11776,chunk__11777,count__11778,i__11779,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12595__$1);


var G__12600 = seq__11776;
var G__12601 = chunk__11777;
var G__12602 = count__11778;
var G__12603 = (i__11779 + (1));
seq__11776 = G__12600;
chunk__11777 = G__12601;
count__11778 = G__12602;
i__11779 = G__12603;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11776);
if(temp__5804__auto__){
var seq__11776__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11776__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11776__$1);
var G__12604 = cljs.core.chunk_rest(seq__11776__$1);
var G__12605 = c__5525__auto__;
var G__12606 = cljs.core.count(c__5525__auto__);
var G__12607 = (0);
seq__11776 = G__12604;
chunk__11777 = G__12605;
count__11778 = G__12606;
i__11779 = G__12607;
continue;
} else {
var el = cljs.core.first(seq__11776__$1);
var handler_12608__$1 = ((function (seq__11776,chunk__11777,count__11778,i__11779,el,seq__11776__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11776,chunk__11777,count__11778,i__11779,el,seq__11776__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12608__$1);


var G__12609 = cljs.core.next(seq__11776__$1);
var G__12610 = null;
var G__12611 = (0);
var G__12612 = (0);
seq__11776 = G__12609;
chunk__11777 = G__12610;
count__11778 = G__12611;
i__11779 = G__12612;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__11786 = arguments.length;
switch (G__11786) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__11793 = cljs.core.seq(events);
var chunk__11794 = null;
var count__11795 = (0);
var i__11796 = (0);
while(true){
if((i__11796 < count__11795)){
var vec__11813 = chunk__11794.cljs$core$IIndexed$_nth$arity$2(null,i__11796);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11813,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11813,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12619 = seq__11793;
var G__12620 = chunk__11794;
var G__12621 = count__11795;
var G__12622 = (i__11796 + (1));
seq__11793 = G__12619;
chunk__11794 = G__12620;
count__11795 = G__12621;
i__11796 = G__12622;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11793);
if(temp__5804__auto__){
var seq__11793__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11793__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11793__$1);
var G__12623 = cljs.core.chunk_rest(seq__11793__$1);
var G__12624 = c__5525__auto__;
var G__12625 = cljs.core.count(c__5525__auto__);
var G__12626 = (0);
seq__11793 = G__12623;
chunk__11794 = G__12624;
count__11795 = G__12625;
i__11796 = G__12626;
continue;
} else {
var vec__11829 = cljs.core.first(seq__11793__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11829,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11829,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12627 = cljs.core.next(seq__11793__$1);
var G__12628 = null;
var G__12629 = (0);
var G__12630 = (0);
seq__11793 = G__12627;
chunk__11794 = G__12628;
count__11795 = G__12629;
i__11796 = G__12630;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__11836 = cljs.core.seq(styles);
var chunk__11837 = null;
var count__11838 = (0);
var i__11839 = (0);
while(true){
if((i__11839 < count__11838)){
var vec__11847 = chunk__11837.cljs$core$IIndexed$_nth$arity$2(null,i__11839);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11847,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11847,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12631 = seq__11836;
var G__12632 = chunk__11837;
var G__12633 = count__11838;
var G__12634 = (i__11839 + (1));
seq__11836 = G__12631;
chunk__11837 = G__12632;
count__11838 = G__12633;
i__11839 = G__12634;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11836);
if(temp__5804__auto__){
var seq__11836__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11836__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11836__$1);
var G__12635 = cljs.core.chunk_rest(seq__11836__$1);
var G__12636 = c__5525__auto__;
var G__12637 = cljs.core.count(c__5525__auto__);
var G__12638 = (0);
seq__11836 = G__12635;
chunk__11837 = G__12636;
count__11838 = G__12637;
i__11839 = G__12638;
continue;
} else {
var vec__11852 = cljs.core.first(seq__11836__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11852,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11852,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12639 = cljs.core.next(seq__11836__$1);
var G__12640 = null;
var G__12641 = (0);
var G__12642 = (0);
seq__11836 = G__12639;
chunk__11837 = G__12640;
count__11838 = G__12641;
i__11839 = G__12642;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__11857_12643 = key;
var G__11857_12644__$1 = (((G__11857_12643 instanceof cljs.core.Keyword))?G__11857_12643.fqn:null);
switch (G__11857_12644__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_12646 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_12646,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_12646,"aria-");
}
})())){
el.setAttribute(ks_12646,value);
} else {
(el[ks_12646] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__11870){
var map__11871 = p__11870;
var map__11871__$1 = cljs.core.__destructure_map(map__11871);
var props = map__11871__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11871__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__11872 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11872,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11872,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11872,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__11875 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__11875,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__11875;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__11877 = arguments.length;
switch (G__11877) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__11878){
var vec__11879 = p__11878;
var seq__11880 = cljs.core.seq(vec__11879);
var first__11881 = cljs.core.first(seq__11880);
var seq__11880__$1 = cljs.core.next(seq__11880);
var nn = first__11881;
var first__11881__$1 = cljs.core.first(seq__11880__$1);
var seq__11880__$2 = cljs.core.next(seq__11880__$1);
var np = first__11881__$1;
var nc = seq__11880__$2;
var node = vec__11879;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11882 = nn;
var G__11883 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11882,G__11883) : create_fn.call(null,G__11882,G__11883));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11884 = nn;
var G__11885 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11884,G__11885) : create_fn.call(null,G__11884,G__11885));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__11887 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11887,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11887,(1),null);
var seq__11890_12648 = cljs.core.seq(node_children);
var chunk__11891_12649 = null;
var count__11892_12650 = (0);
var i__11893_12651 = (0);
while(true){
if((i__11893_12651 < count__11892_12650)){
var child_struct_12652 = chunk__11891_12649.cljs$core$IIndexed$_nth$arity$2(null,i__11893_12651);
var children_12653 = shadow.dom.dom_node(child_struct_12652);
if(cljs.core.seq_QMARK_(children_12653)){
var seq__11935_12712 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12653));
var chunk__11937_12713 = null;
var count__11938_12714 = (0);
var i__11939_12715 = (0);
while(true){
if((i__11939_12715 < count__11938_12714)){
var child_12716 = chunk__11937_12713.cljs$core$IIndexed$_nth$arity$2(null,i__11939_12715);
if(cljs.core.truth_(child_12716)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12716);


var G__12717 = seq__11935_12712;
var G__12718 = chunk__11937_12713;
var G__12719 = count__11938_12714;
var G__12720 = (i__11939_12715 + (1));
seq__11935_12712 = G__12717;
chunk__11937_12713 = G__12718;
count__11938_12714 = G__12719;
i__11939_12715 = G__12720;
continue;
} else {
var G__12721 = seq__11935_12712;
var G__12722 = chunk__11937_12713;
var G__12723 = count__11938_12714;
var G__12724 = (i__11939_12715 + (1));
seq__11935_12712 = G__12721;
chunk__11937_12713 = G__12722;
count__11938_12714 = G__12723;
i__11939_12715 = G__12724;
continue;
}
} else {
var temp__5804__auto___12725 = cljs.core.seq(seq__11935_12712);
if(temp__5804__auto___12725){
var seq__11935_12726__$1 = temp__5804__auto___12725;
if(cljs.core.chunked_seq_QMARK_(seq__11935_12726__$1)){
var c__5525__auto___12727 = cljs.core.chunk_first(seq__11935_12726__$1);
var G__12728 = cljs.core.chunk_rest(seq__11935_12726__$1);
var G__12729 = c__5525__auto___12727;
var G__12730 = cljs.core.count(c__5525__auto___12727);
var G__12731 = (0);
seq__11935_12712 = G__12728;
chunk__11937_12713 = G__12729;
count__11938_12714 = G__12730;
i__11939_12715 = G__12731;
continue;
} else {
var child_12732 = cljs.core.first(seq__11935_12726__$1);
if(cljs.core.truth_(child_12732)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12732);


var G__12733 = cljs.core.next(seq__11935_12726__$1);
var G__12734 = null;
var G__12735 = (0);
var G__12736 = (0);
seq__11935_12712 = G__12733;
chunk__11937_12713 = G__12734;
count__11938_12714 = G__12735;
i__11939_12715 = G__12736;
continue;
} else {
var G__12737 = cljs.core.next(seq__11935_12726__$1);
var G__12738 = null;
var G__12739 = (0);
var G__12740 = (0);
seq__11935_12712 = G__12737;
chunk__11937_12713 = G__12738;
count__11938_12714 = G__12739;
i__11939_12715 = G__12740;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12653);
}


var G__12741 = seq__11890_12648;
var G__12742 = chunk__11891_12649;
var G__12743 = count__11892_12650;
var G__12744 = (i__11893_12651 + (1));
seq__11890_12648 = G__12741;
chunk__11891_12649 = G__12742;
count__11892_12650 = G__12743;
i__11893_12651 = G__12744;
continue;
} else {
var temp__5804__auto___12745 = cljs.core.seq(seq__11890_12648);
if(temp__5804__auto___12745){
var seq__11890_12746__$1 = temp__5804__auto___12745;
if(cljs.core.chunked_seq_QMARK_(seq__11890_12746__$1)){
var c__5525__auto___12747 = cljs.core.chunk_first(seq__11890_12746__$1);
var G__12748 = cljs.core.chunk_rest(seq__11890_12746__$1);
var G__12749 = c__5525__auto___12747;
var G__12750 = cljs.core.count(c__5525__auto___12747);
var G__12751 = (0);
seq__11890_12648 = G__12748;
chunk__11891_12649 = G__12749;
count__11892_12650 = G__12750;
i__11893_12651 = G__12751;
continue;
} else {
var child_struct_12752 = cljs.core.first(seq__11890_12746__$1);
var children_12753 = shadow.dom.dom_node(child_struct_12752);
if(cljs.core.seq_QMARK_(children_12753)){
var seq__11943_12754 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12753));
var chunk__11945_12755 = null;
var count__11946_12756 = (0);
var i__11947_12757 = (0);
while(true){
if((i__11947_12757 < count__11946_12756)){
var child_12758 = chunk__11945_12755.cljs$core$IIndexed$_nth$arity$2(null,i__11947_12757);
if(cljs.core.truth_(child_12758)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12758);


var G__12759 = seq__11943_12754;
var G__12760 = chunk__11945_12755;
var G__12761 = count__11946_12756;
var G__12762 = (i__11947_12757 + (1));
seq__11943_12754 = G__12759;
chunk__11945_12755 = G__12760;
count__11946_12756 = G__12761;
i__11947_12757 = G__12762;
continue;
} else {
var G__12763 = seq__11943_12754;
var G__12764 = chunk__11945_12755;
var G__12765 = count__11946_12756;
var G__12766 = (i__11947_12757 + (1));
seq__11943_12754 = G__12763;
chunk__11945_12755 = G__12764;
count__11946_12756 = G__12765;
i__11947_12757 = G__12766;
continue;
}
} else {
var temp__5804__auto___12767__$1 = cljs.core.seq(seq__11943_12754);
if(temp__5804__auto___12767__$1){
var seq__11943_12768__$1 = temp__5804__auto___12767__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11943_12768__$1)){
var c__5525__auto___12769 = cljs.core.chunk_first(seq__11943_12768__$1);
var G__12770 = cljs.core.chunk_rest(seq__11943_12768__$1);
var G__12771 = c__5525__auto___12769;
var G__12772 = cljs.core.count(c__5525__auto___12769);
var G__12773 = (0);
seq__11943_12754 = G__12770;
chunk__11945_12755 = G__12771;
count__11946_12756 = G__12772;
i__11947_12757 = G__12773;
continue;
} else {
var child_12774 = cljs.core.first(seq__11943_12768__$1);
if(cljs.core.truth_(child_12774)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12774);


var G__12775 = cljs.core.next(seq__11943_12768__$1);
var G__12776 = null;
var G__12777 = (0);
var G__12778 = (0);
seq__11943_12754 = G__12775;
chunk__11945_12755 = G__12776;
count__11946_12756 = G__12777;
i__11947_12757 = G__12778;
continue;
} else {
var G__12779 = cljs.core.next(seq__11943_12768__$1);
var G__12780 = null;
var G__12781 = (0);
var G__12782 = (0);
seq__11943_12754 = G__12779;
chunk__11945_12755 = G__12780;
count__11946_12756 = G__12781;
i__11947_12757 = G__12782;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12753);
}


var G__12783 = cljs.core.next(seq__11890_12746__$1);
var G__12784 = null;
var G__12785 = (0);
var G__12786 = (0);
seq__11890_12648 = G__12783;
chunk__11891_12649 = G__12784;
count__11892_12650 = G__12785;
i__11893_12651 = G__12786;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__11963 = cljs.core.seq(node);
var chunk__11964 = null;
var count__11965 = (0);
var i__11966 = (0);
while(true){
if((i__11966 < count__11965)){
var n = chunk__11964.cljs$core$IIndexed$_nth$arity$2(null,i__11966);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12787 = seq__11963;
var G__12788 = chunk__11964;
var G__12789 = count__11965;
var G__12790 = (i__11966 + (1));
seq__11963 = G__12787;
chunk__11964 = G__12788;
count__11965 = G__12789;
i__11966 = G__12790;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11963);
if(temp__5804__auto__){
var seq__11963__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11963__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11963__$1);
var G__12791 = cljs.core.chunk_rest(seq__11963__$1);
var G__12792 = c__5525__auto__;
var G__12793 = cljs.core.count(c__5525__auto__);
var G__12794 = (0);
seq__11963 = G__12791;
chunk__11964 = G__12792;
count__11965 = G__12793;
i__11966 = G__12794;
continue;
} else {
var n = cljs.core.first(seq__11963__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12795 = cljs.core.next(seq__11963__$1);
var G__12796 = null;
var G__12797 = (0);
var G__12798 = (0);
seq__11963 = G__12795;
chunk__11964 = G__12796;
count__11965 = G__12797;
i__11966 = G__12798;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__11982 = arguments.length;
switch (G__11982) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__11994 = arguments.length;
switch (G__11994) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__12000 = arguments.length;
switch (G__12000) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12802 = arguments.length;
var i__5727__auto___12803 = (0);
while(true){
if((i__5727__auto___12803 < len__5726__auto___12802)){
args__5732__auto__.push((arguments[i__5727__auto___12803]));

var G__12804 = (i__5727__auto___12803 + (1));
i__5727__auto___12803 = G__12804;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__12009_12805 = cljs.core.seq(nodes);
var chunk__12010_12806 = null;
var count__12011_12807 = (0);
var i__12012_12808 = (0);
while(true){
if((i__12012_12808 < count__12011_12807)){
var node_12809 = chunk__12010_12806.cljs$core$IIndexed$_nth$arity$2(null,i__12012_12808);
fragment.appendChild(shadow.dom._to_dom(node_12809));


var G__12810 = seq__12009_12805;
var G__12811 = chunk__12010_12806;
var G__12812 = count__12011_12807;
var G__12813 = (i__12012_12808 + (1));
seq__12009_12805 = G__12810;
chunk__12010_12806 = G__12811;
count__12011_12807 = G__12812;
i__12012_12808 = G__12813;
continue;
} else {
var temp__5804__auto___12814 = cljs.core.seq(seq__12009_12805);
if(temp__5804__auto___12814){
var seq__12009_12815__$1 = temp__5804__auto___12814;
if(cljs.core.chunked_seq_QMARK_(seq__12009_12815__$1)){
var c__5525__auto___12816 = cljs.core.chunk_first(seq__12009_12815__$1);
var G__12817 = cljs.core.chunk_rest(seq__12009_12815__$1);
var G__12818 = c__5525__auto___12816;
var G__12819 = cljs.core.count(c__5525__auto___12816);
var G__12820 = (0);
seq__12009_12805 = G__12817;
chunk__12010_12806 = G__12818;
count__12011_12807 = G__12819;
i__12012_12808 = G__12820;
continue;
} else {
var node_12821 = cljs.core.first(seq__12009_12815__$1);
fragment.appendChild(shadow.dom._to_dom(node_12821));


var G__12822 = cljs.core.next(seq__12009_12815__$1);
var G__12823 = null;
var G__12824 = (0);
var G__12825 = (0);
seq__12009_12805 = G__12822;
chunk__12010_12806 = G__12823;
count__12011_12807 = G__12824;
i__12012_12808 = G__12825;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12008){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12008));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12017_12826 = cljs.core.seq(scripts);
var chunk__12018_12827 = null;
var count__12019_12828 = (0);
var i__12020_12829 = (0);
while(true){
if((i__12020_12829 < count__12019_12828)){
var vec__12027_12830 = chunk__12018_12827.cljs$core$IIndexed$_nth$arity$2(null,i__12020_12829);
var script_tag_12831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12027_12830,(0),null);
var script_body_12832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12027_12830,(1),null);
eval(script_body_12832);


var G__12833 = seq__12017_12826;
var G__12834 = chunk__12018_12827;
var G__12835 = count__12019_12828;
var G__12836 = (i__12020_12829 + (1));
seq__12017_12826 = G__12833;
chunk__12018_12827 = G__12834;
count__12019_12828 = G__12835;
i__12020_12829 = G__12836;
continue;
} else {
var temp__5804__auto___12837 = cljs.core.seq(seq__12017_12826);
if(temp__5804__auto___12837){
var seq__12017_12838__$1 = temp__5804__auto___12837;
if(cljs.core.chunked_seq_QMARK_(seq__12017_12838__$1)){
var c__5525__auto___12839 = cljs.core.chunk_first(seq__12017_12838__$1);
var G__12840 = cljs.core.chunk_rest(seq__12017_12838__$1);
var G__12841 = c__5525__auto___12839;
var G__12842 = cljs.core.count(c__5525__auto___12839);
var G__12843 = (0);
seq__12017_12826 = G__12840;
chunk__12018_12827 = G__12841;
count__12019_12828 = G__12842;
i__12020_12829 = G__12843;
continue;
} else {
var vec__12030_12844 = cljs.core.first(seq__12017_12838__$1);
var script_tag_12845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12030_12844,(0),null);
var script_body_12846 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12030_12844,(1),null);
eval(script_body_12846);


var G__12847 = cljs.core.next(seq__12017_12838__$1);
var G__12848 = null;
var G__12849 = (0);
var G__12850 = (0);
seq__12017_12826 = G__12847;
chunk__12018_12827 = G__12848;
count__12019_12828 = G__12849;
i__12020_12829 = G__12850;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12033){
var vec__12034 = p__12033;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12034,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12034,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__12042 = arguments.length;
switch (G__12042) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__12054 = cljs.core.seq(style_keys);
var chunk__12055 = null;
var count__12056 = (0);
var i__12057 = (0);
while(true){
if((i__12057 < count__12056)){
var it = chunk__12055.cljs$core$IIndexed$_nth$arity$2(null,i__12057);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12852 = seq__12054;
var G__12853 = chunk__12055;
var G__12854 = count__12056;
var G__12855 = (i__12057 + (1));
seq__12054 = G__12852;
chunk__12055 = G__12853;
count__12056 = G__12854;
i__12057 = G__12855;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12054);
if(temp__5804__auto__){
var seq__12054__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12054__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12054__$1);
var G__12856 = cljs.core.chunk_rest(seq__12054__$1);
var G__12857 = c__5525__auto__;
var G__12858 = cljs.core.count(c__5525__auto__);
var G__12859 = (0);
seq__12054 = G__12856;
chunk__12055 = G__12857;
count__12056 = G__12858;
i__12057 = G__12859;
continue;
} else {
var it = cljs.core.first(seq__12054__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12860 = cljs.core.next(seq__12054__$1);
var G__12861 = null;
var G__12862 = (0);
var G__12863 = (0);
seq__12054 = G__12860;
chunk__12055 = G__12861;
count__12056 = G__12862;
i__12057 = G__12863;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12065,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12106 = k12065;
var G__12106__$1 = (((G__12106 instanceof cljs.core.Keyword))?G__12106.fqn:null);
switch (G__12106__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12065,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12118){
var vec__12119 = p__12118;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12119,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12119,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12064){
var self__ = this;
var G__12064__$1 = this;
return (new cljs.core.RecordIter((0),G__12064__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12066,other12067){
var self__ = this;
var this12066__$1 = this;
return (((!((other12067 == null)))) && ((((this12066__$1.constructor === other12067.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12066__$1.x,other12067.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12066__$1.y,other12067.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12066__$1.__extmap,other12067.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12065){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12133 = k12065;
var G__12133__$1 = (((G__12133 instanceof cljs.core.Keyword))?G__12133.fqn:null);
switch (G__12133__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12065);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12064){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12146 = cljs.core.keyword_identical_QMARK_;
var expr__12147 = k__5309__auto__;
if(cljs.core.truth_((pred__12146.cljs$core$IFn$_invoke$arity$2 ? pred__12146.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12147) : pred__12146.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__12147)))){
return (new shadow.dom.Coordinate(G__12064,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12146.cljs$core$IFn$_invoke$arity$2 ? pred__12146.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12147) : pred__12146.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__12147)))){
return (new shadow.dom.Coordinate(self__.x,G__12064,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12064),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12064){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12064,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12088){
var extmap__5342__auto__ = (function (){var G__12154 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12088,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12088)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12154);
} else {
return G__12154;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12088),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12088),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12162,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12177 = k12162;
var G__12177__$1 = (((G__12177 instanceof cljs.core.Keyword))?G__12177.fqn:null);
switch (G__12177__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12162,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12182){
var vec__12183 = p__12182;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12183,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12183,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12161){
var self__ = this;
var G__12161__$1 = this;
return (new cljs.core.RecordIter((0),G__12161__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12164,other12165){
var self__ = this;
var this12164__$1 = this;
return (((!((other12165 == null)))) && ((((this12164__$1.constructor === other12165.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12164__$1.w,other12165.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12164__$1.h,other12165.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12164__$1.__extmap,other12165.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12162){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12192 = k12162;
var G__12192__$1 = (((G__12192 instanceof cljs.core.Keyword))?G__12192.fqn:null);
switch (G__12192__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12162);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12161){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12194 = cljs.core.keyword_identical_QMARK_;
var expr__12195 = k__5309__auto__;
if(cljs.core.truth_((pred__12194.cljs$core$IFn$_invoke$arity$2 ? pred__12194.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12195) : pred__12194.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__12195)))){
return (new shadow.dom.Size(G__12161,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12194.cljs$core$IFn$_invoke$arity$2 ? pred__12194.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12195) : pred__12194.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__12195)))){
return (new shadow.dom.Size(self__.w,G__12161,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12161),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12161){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12161,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12169){
var extmap__5342__auto__ = (function (){var G__12212 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12169,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12169)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12212);
} else {
return G__12212;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12169),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12169),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__12885 = (i + (1));
var G__12886 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__12885;
ret = G__12886;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12255){
var vec__12256 = p__12255;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12256,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12256,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12261 = arguments.length;
switch (G__12261) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__12890 = ps;
var G__12891 = (i + (1));
el__$1 = G__12890;
i = G__12891;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__12326 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12326,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12326,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12326,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12333_12909 = cljs.core.seq(props);
var chunk__12334_12910 = null;
var count__12335_12911 = (0);
var i__12336_12912 = (0);
while(true){
if((i__12336_12912 < count__12335_12911)){
var vec__12356_12913 = chunk__12334_12910.cljs$core$IIndexed$_nth$arity$2(null,i__12336_12912);
var k_12914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12356_12913,(0),null);
var v_12915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12356_12913,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_12914);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12914),v_12915);


var G__12923 = seq__12333_12909;
var G__12924 = chunk__12334_12910;
var G__12925 = count__12335_12911;
var G__12926 = (i__12336_12912 + (1));
seq__12333_12909 = G__12923;
chunk__12334_12910 = G__12924;
count__12335_12911 = G__12925;
i__12336_12912 = G__12926;
continue;
} else {
var temp__5804__auto___12927 = cljs.core.seq(seq__12333_12909);
if(temp__5804__auto___12927){
var seq__12333_12928__$1 = temp__5804__auto___12927;
if(cljs.core.chunked_seq_QMARK_(seq__12333_12928__$1)){
var c__5525__auto___12929 = cljs.core.chunk_first(seq__12333_12928__$1);
var G__12930 = cljs.core.chunk_rest(seq__12333_12928__$1);
var G__12931 = c__5525__auto___12929;
var G__12932 = cljs.core.count(c__5525__auto___12929);
var G__12933 = (0);
seq__12333_12909 = G__12930;
chunk__12334_12910 = G__12931;
count__12335_12911 = G__12932;
i__12336_12912 = G__12933;
continue;
} else {
var vec__12370_12934 = cljs.core.first(seq__12333_12928__$1);
var k_12935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12370_12934,(0),null);
var v_12936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12370_12934,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_12935);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12935),v_12936);


var G__12937 = cljs.core.next(seq__12333_12928__$1);
var G__12938 = null;
var G__12939 = (0);
var G__12940 = (0);
seq__12333_12909 = G__12937;
chunk__12334_12910 = G__12938;
count__12335_12911 = G__12939;
i__12336_12912 = G__12940;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__12384 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12384,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12384,(1),null);
var seq__12389_12943 = cljs.core.seq(node_children);
var chunk__12391_12944 = null;
var count__12392_12945 = (0);
var i__12393_12946 = (0);
while(true){
if((i__12393_12946 < count__12392_12945)){
var child_struct_12947 = chunk__12391_12944.cljs$core$IIndexed$_nth$arity$2(null,i__12393_12946);
if((!((child_struct_12947 == null)))){
if(typeof child_struct_12947 === 'string'){
var text_12948 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_12948),child_struct_12947].join(''));
} else {
var children_12949 = shadow.dom.svg_node(child_struct_12947);
if(cljs.core.seq_QMARK_(children_12949)){
var seq__12427_12950 = cljs.core.seq(children_12949);
var chunk__12429_12951 = null;
var count__12430_12952 = (0);
var i__12431_12953 = (0);
while(true){
if((i__12431_12953 < count__12430_12952)){
var child_12955 = chunk__12429_12951.cljs$core$IIndexed$_nth$arity$2(null,i__12431_12953);
if(cljs.core.truth_(child_12955)){
node.appendChild(child_12955);


var G__12956 = seq__12427_12950;
var G__12957 = chunk__12429_12951;
var G__12958 = count__12430_12952;
var G__12959 = (i__12431_12953 + (1));
seq__12427_12950 = G__12956;
chunk__12429_12951 = G__12957;
count__12430_12952 = G__12958;
i__12431_12953 = G__12959;
continue;
} else {
var G__12961 = seq__12427_12950;
var G__12962 = chunk__12429_12951;
var G__12963 = count__12430_12952;
var G__12964 = (i__12431_12953 + (1));
seq__12427_12950 = G__12961;
chunk__12429_12951 = G__12962;
count__12430_12952 = G__12963;
i__12431_12953 = G__12964;
continue;
}
} else {
var temp__5804__auto___12965 = cljs.core.seq(seq__12427_12950);
if(temp__5804__auto___12965){
var seq__12427_12967__$1 = temp__5804__auto___12965;
if(cljs.core.chunked_seq_QMARK_(seq__12427_12967__$1)){
var c__5525__auto___12968 = cljs.core.chunk_first(seq__12427_12967__$1);
var G__12969 = cljs.core.chunk_rest(seq__12427_12967__$1);
var G__12970 = c__5525__auto___12968;
var G__12971 = cljs.core.count(c__5525__auto___12968);
var G__12972 = (0);
seq__12427_12950 = G__12969;
chunk__12429_12951 = G__12970;
count__12430_12952 = G__12971;
i__12431_12953 = G__12972;
continue;
} else {
var child_12974 = cljs.core.first(seq__12427_12967__$1);
if(cljs.core.truth_(child_12974)){
node.appendChild(child_12974);


var G__12975 = cljs.core.next(seq__12427_12967__$1);
var G__12976 = null;
var G__12977 = (0);
var G__12978 = (0);
seq__12427_12950 = G__12975;
chunk__12429_12951 = G__12976;
count__12430_12952 = G__12977;
i__12431_12953 = G__12978;
continue;
} else {
var G__12980 = cljs.core.next(seq__12427_12967__$1);
var G__12981 = null;
var G__12982 = (0);
var G__12983 = (0);
seq__12427_12950 = G__12980;
chunk__12429_12951 = G__12981;
count__12430_12952 = G__12982;
i__12431_12953 = G__12983;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_12949);
}
}


var G__12985 = seq__12389_12943;
var G__12986 = chunk__12391_12944;
var G__12987 = count__12392_12945;
var G__12988 = (i__12393_12946 + (1));
seq__12389_12943 = G__12985;
chunk__12391_12944 = G__12986;
count__12392_12945 = G__12987;
i__12393_12946 = G__12988;
continue;
} else {
var G__12990 = seq__12389_12943;
var G__12991 = chunk__12391_12944;
var G__12992 = count__12392_12945;
var G__12993 = (i__12393_12946 + (1));
seq__12389_12943 = G__12990;
chunk__12391_12944 = G__12991;
count__12392_12945 = G__12992;
i__12393_12946 = G__12993;
continue;
}
} else {
var temp__5804__auto___12994 = cljs.core.seq(seq__12389_12943);
if(temp__5804__auto___12994){
var seq__12389_12996__$1 = temp__5804__auto___12994;
if(cljs.core.chunked_seq_QMARK_(seq__12389_12996__$1)){
var c__5525__auto___12997 = cljs.core.chunk_first(seq__12389_12996__$1);
var G__12998 = cljs.core.chunk_rest(seq__12389_12996__$1);
var G__12999 = c__5525__auto___12997;
var G__13000 = cljs.core.count(c__5525__auto___12997);
var G__13001 = (0);
seq__12389_12943 = G__12998;
chunk__12391_12944 = G__12999;
count__12392_12945 = G__13000;
i__12393_12946 = G__13001;
continue;
} else {
var child_struct_13002 = cljs.core.first(seq__12389_12996__$1);
if((!((child_struct_13002 == null)))){
if(typeof child_struct_13002 === 'string'){
var text_13003 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13003),child_struct_13002].join(''));
} else {
var children_13004 = shadow.dom.svg_node(child_struct_13002);
if(cljs.core.seq_QMARK_(children_13004)){
var seq__12445_13005 = cljs.core.seq(children_13004);
var chunk__12447_13006 = null;
var count__12448_13007 = (0);
var i__12449_13008 = (0);
while(true){
if((i__12449_13008 < count__12448_13007)){
var child_13009 = chunk__12447_13006.cljs$core$IIndexed$_nth$arity$2(null,i__12449_13008);
if(cljs.core.truth_(child_13009)){
node.appendChild(child_13009);


var G__13010 = seq__12445_13005;
var G__13011 = chunk__12447_13006;
var G__13012 = count__12448_13007;
var G__13013 = (i__12449_13008 + (1));
seq__12445_13005 = G__13010;
chunk__12447_13006 = G__13011;
count__12448_13007 = G__13012;
i__12449_13008 = G__13013;
continue;
} else {
var G__13015 = seq__12445_13005;
var G__13016 = chunk__12447_13006;
var G__13017 = count__12448_13007;
var G__13018 = (i__12449_13008 + (1));
seq__12445_13005 = G__13015;
chunk__12447_13006 = G__13016;
count__12448_13007 = G__13017;
i__12449_13008 = G__13018;
continue;
}
} else {
var temp__5804__auto___13019__$1 = cljs.core.seq(seq__12445_13005);
if(temp__5804__auto___13019__$1){
var seq__12445_13020__$1 = temp__5804__auto___13019__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12445_13020__$1)){
var c__5525__auto___13021 = cljs.core.chunk_first(seq__12445_13020__$1);
var G__13025 = cljs.core.chunk_rest(seq__12445_13020__$1);
var G__13026 = c__5525__auto___13021;
var G__13028 = cljs.core.count(c__5525__auto___13021);
var G__13029 = (0);
seq__12445_13005 = G__13025;
chunk__12447_13006 = G__13026;
count__12448_13007 = G__13028;
i__12449_13008 = G__13029;
continue;
} else {
var child_13030 = cljs.core.first(seq__12445_13020__$1);
if(cljs.core.truth_(child_13030)){
node.appendChild(child_13030);


var G__13031 = cljs.core.next(seq__12445_13020__$1);
var G__13032 = null;
var G__13033 = (0);
var G__13034 = (0);
seq__12445_13005 = G__13031;
chunk__12447_13006 = G__13032;
count__12448_13007 = G__13033;
i__12449_13008 = G__13034;
continue;
} else {
var G__13035 = cljs.core.next(seq__12445_13020__$1);
var G__13036 = null;
var G__13037 = (0);
var G__13038 = (0);
seq__12445_13005 = G__13035;
chunk__12447_13006 = G__13036;
count__12448_13007 = G__13037;
i__12449_13008 = G__13038;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13004);
}
}


var G__13044 = cljs.core.next(seq__12389_12996__$1);
var G__13045 = null;
var G__13046 = (0);
var G__13047 = (0);
seq__12389_12943 = G__13044;
chunk__12391_12944 = G__13045;
count__12392_12945 = G__13046;
i__12393_12946 = G__13047;
continue;
} else {
var G__13048 = cljs.core.next(seq__12389_12996__$1);
var G__13049 = null;
var G__13050 = (0);
var G__13051 = (0);
seq__12389_12943 = G__13048;
chunk__12391_12944 = G__13049;
count__12392_12945 = G__13050;
i__12393_12946 = G__13051;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___13056 = arguments.length;
var i__5727__auto___13057 = (0);
while(true){
if((i__5727__auto___13057 < len__5726__auto___13056)){
args__5732__auto__.push((arguments[i__5727__auto___13057]));

var G__13059 = (i__5727__auto___13057 + (1));
i__5727__auto___13057 = G__13059;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12472){
var G__12473 = cljs.core.first(seq12472);
var seq12472__$1 = cljs.core.next(seq12472);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12473,seq12472__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
