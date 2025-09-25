goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_11513 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_11513(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_11543 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_11543(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__10114 = coll;
var G__10115 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__10114,G__10115) : shadow.dom.lazy_native_coll_seq.call(null,G__10114,G__10115));
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
var G__10119 = arguments.length;
switch (G__10119) {
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
var G__10122 = arguments.length;
switch (G__10122) {
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
var G__10124 = arguments.length;
switch (G__10124) {
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
var G__10126 = arguments.length;
switch (G__10126) {
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
var G__10131 = arguments.length;
switch (G__10131) {
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
var G__10136 = arguments.length;
switch (G__10136) {
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
}catch (e10146){if((e10146 instanceof Object)){
var e = e10146;
return console.log("didnt support attachEvent",el,e);
} else {
throw e10146;

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
var seq__10150 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__10151 = null;
var count__10152 = (0);
var i__10153 = (0);
while(true){
if((i__10153 < count__10152)){
var el = chunk__10151.cljs$core$IIndexed$_nth$arity$2(null,i__10153);
var handler_11701__$1 = ((function (seq__10150,chunk__10151,count__10152,i__10153,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__10150,chunk__10151,count__10152,i__10153,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_11701__$1);


var G__11702 = seq__10150;
var G__11703 = chunk__10151;
var G__11704 = count__10152;
var G__11705 = (i__10153 + (1));
seq__10150 = G__11702;
chunk__10151 = G__11703;
count__10152 = G__11704;
i__10153 = G__11705;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__10150);
if(temp__5804__auto__){
var seq__10150__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10150__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__10150__$1);
var G__11708 = cljs.core.chunk_rest(seq__10150__$1);
var G__11709 = c__5525__auto__;
var G__11710 = cljs.core.count(c__5525__auto__);
var G__11711 = (0);
seq__10150 = G__11708;
chunk__10151 = G__11709;
count__10152 = G__11710;
i__10153 = G__11711;
continue;
} else {
var el = cljs.core.first(seq__10150__$1);
var handler_11727__$1 = ((function (seq__10150,chunk__10151,count__10152,i__10153,el,seq__10150__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__10150,chunk__10151,count__10152,i__10153,el,seq__10150__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_11727__$1);


var G__11729 = cljs.core.next(seq__10150__$1);
var G__11730 = null;
var G__11731 = (0);
var G__11732 = (0);
seq__10150 = G__11729;
chunk__10151 = G__11730;
count__10152 = G__11731;
i__10153 = G__11732;
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
var G__10180 = arguments.length;
switch (G__10180) {
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
var seq__10184 = cljs.core.seq(events);
var chunk__10185 = null;
var count__10186 = (0);
var i__10187 = (0);
while(true){
if((i__10187 < count__10186)){
var vec__10200 = chunk__10185.cljs$core$IIndexed$_nth$arity$2(null,i__10187);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10200,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10200,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__11741 = seq__10184;
var G__11742 = chunk__10185;
var G__11743 = count__10186;
var G__11744 = (i__10187 + (1));
seq__10184 = G__11741;
chunk__10185 = G__11742;
count__10186 = G__11743;
i__10187 = G__11744;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__10184);
if(temp__5804__auto__){
var seq__10184__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10184__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__10184__$1);
var G__11752 = cljs.core.chunk_rest(seq__10184__$1);
var G__11753 = c__5525__auto__;
var G__11754 = cljs.core.count(c__5525__auto__);
var G__11755 = (0);
seq__10184 = G__11752;
chunk__10185 = G__11753;
count__10186 = G__11754;
i__10187 = G__11755;
continue;
} else {
var vec__10210 = cljs.core.first(seq__10184__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10210,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10210,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__11762 = cljs.core.next(seq__10184__$1);
var G__11763 = null;
var G__11764 = (0);
var G__11765 = (0);
seq__10184 = G__11762;
chunk__10185 = G__11763;
count__10186 = G__11764;
i__10187 = G__11765;
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
var seq__10226 = cljs.core.seq(styles);
var chunk__10227 = null;
var count__10228 = (0);
var i__10229 = (0);
while(true){
if((i__10229 < count__10228)){
var vec__10264 = chunk__10227.cljs$core$IIndexed$_nth$arity$2(null,i__10229);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10264,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10264,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__11769 = seq__10226;
var G__11770 = chunk__10227;
var G__11771 = count__10228;
var G__11772 = (i__10229 + (1));
seq__10226 = G__11769;
chunk__10227 = G__11770;
count__10228 = G__11771;
i__10229 = G__11772;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__10226);
if(temp__5804__auto__){
var seq__10226__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10226__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__10226__$1);
var G__11775 = cljs.core.chunk_rest(seq__10226__$1);
var G__11776 = c__5525__auto__;
var G__11777 = cljs.core.count(c__5525__auto__);
var G__11778 = (0);
seq__10226 = G__11775;
chunk__10227 = G__11776;
count__10228 = G__11777;
i__10229 = G__11778;
continue;
} else {
var vec__10273 = cljs.core.first(seq__10226__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10273,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10273,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__11784 = cljs.core.next(seq__10226__$1);
var G__11785 = null;
var G__11786 = (0);
var G__11787 = (0);
seq__10226 = G__11784;
chunk__10227 = G__11785;
count__10228 = G__11786;
i__10229 = G__11787;
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
var G__10287_11790 = key;
var G__10287_11791__$1 = (((G__10287_11790 instanceof cljs.core.Keyword))?G__10287_11790.fqn:null);
switch (G__10287_11791__$1) {
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
var ks_11811 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_11811,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_11811,"aria-");
}
})())){
el.setAttribute(ks_11811,value);
} else {
(el[ks_11811] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__10365){
var map__10375 = p__10365;
var map__10375__$1 = cljs.core.__destructure_map(map__10375);
var props = map__10375__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10375__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__10384 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10384,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10384,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10384,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__10402 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__10402,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__10402;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__10414 = arguments.length;
switch (G__10414) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__10425){
var vec__10426 = p__10425;
var seq__10427 = cljs.core.seq(vec__10426);
var first__10428 = cljs.core.first(seq__10427);
var seq__10427__$1 = cljs.core.next(seq__10427);
var nn = first__10428;
var first__10428__$1 = cljs.core.first(seq__10427__$1);
var seq__10427__$2 = cljs.core.next(seq__10427__$1);
var np = first__10428__$1;
var nc = seq__10427__$2;
var node = vec__10426;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__10430 = nn;
var G__10431 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__10430,G__10431) : create_fn.call(null,G__10430,G__10431));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__10432 = nn;
var G__10433 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__10432,G__10433) : create_fn.call(null,G__10432,G__10433));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__10434 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10434,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10434,(1),null);
var seq__10437_11875 = cljs.core.seq(node_children);
var chunk__10438_11876 = null;
var count__10439_11877 = (0);
var i__10440_11878 = (0);
while(true){
if((i__10440_11878 < count__10439_11877)){
var child_struct_11879 = chunk__10438_11876.cljs$core$IIndexed$_nth$arity$2(null,i__10440_11878);
var children_11880 = shadow.dom.dom_node(child_struct_11879);
if(cljs.core.seq_QMARK_(children_11880)){
var seq__10492_11882 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_11880));
var chunk__10494_11883 = null;
var count__10495_11884 = (0);
var i__10496_11885 = (0);
while(true){
if((i__10496_11885 < count__10495_11884)){
var child_11886 = chunk__10494_11883.cljs$core$IIndexed$_nth$arity$2(null,i__10496_11885);
if(cljs.core.truth_(child_11886)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_11886);


var G__11887 = seq__10492_11882;
var G__11888 = chunk__10494_11883;
var G__11889 = count__10495_11884;
var G__11890 = (i__10496_11885 + (1));
seq__10492_11882 = G__11887;
chunk__10494_11883 = G__11888;
count__10495_11884 = G__11889;
i__10496_11885 = G__11890;
continue;
} else {
var G__11891 = seq__10492_11882;
var G__11892 = chunk__10494_11883;
var G__11893 = count__10495_11884;
var G__11894 = (i__10496_11885 + (1));
seq__10492_11882 = G__11891;
chunk__10494_11883 = G__11892;
count__10495_11884 = G__11893;
i__10496_11885 = G__11894;
continue;
}
} else {
var temp__5804__auto___11895 = cljs.core.seq(seq__10492_11882);
if(temp__5804__auto___11895){
var seq__10492_11896__$1 = temp__5804__auto___11895;
if(cljs.core.chunked_seq_QMARK_(seq__10492_11896__$1)){
var c__5525__auto___11899 = cljs.core.chunk_first(seq__10492_11896__$1);
var G__11900 = cljs.core.chunk_rest(seq__10492_11896__$1);
var G__11901 = c__5525__auto___11899;
var G__11902 = cljs.core.count(c__5525__auto___11899);
var G__11903 = (0);
seq__10492_11882 = G__11900;
chunk__10494_11883 = G__11901;
count__10495_11884 = G__11902;
i__10496_11885 = G__11903;
continue;
} else {
var child_11904 = cljs.core.first(seq__10492_11896__$1);
if(cljs.core.truth_(child_11904)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_11904);


var G__11905 = cljs.core.next(seq__10492_11896__$1);
var G__11906 = null;
var G__11907 = (0);
var G__11908 = (0);
seq__10492_11882 = G__11905;
chunk__10494_11883 = G__11906;
count__10495_11884 = G__11907;
i__10496_11885 = G__11908;
continue;
} else {
var G__11909 = cljs.core.next(seq__10492_11896__$1);
var G__11910 = null;
var G__11911 = (0);
var G__11912 = (0);
seq__10492_11882 = G__11909;
chunk__10494_11883 = G__11910;
count__10495_11884 = G__11911;
i__10496_11885 = G__11912;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_11880);
}


var G__11913 = seq__10437_11875;
var G__11914 = chunk__10438_11876;
var G__11915 = count__10439_11877;
var G__11916 = (i__10440_11878 + (1));
seq__10437_11875 = G__11913;
chunk__10438_11876 = G__11914;
count__10439_11877 = G__11915;
i__10440_11878 = G__11916;
continue;
} else {
var temp__5804__auto___11919 = cljs.core.seq(seq__10437_11875);
if(temp__5804__auto___11919){
var seq__10437_11920__$1 = temp__5804__auto___11919;
if(cljs.core.chunked_seq_QMARK_(seq__10437_11920__$1)){
var c__5525__auto___11921 = cljs.core.chunk_first(seq__10437_11920__$1);
var G__11922 = cljs.core.chunk_rest(seq__10437_11920__$1);
var G__11923 = c__5525__auto___11921;
var G__11924 = cljs.core.count(c__5525__auto___11921);
var G__11925 = (0);
seq__10437_11875 = G__11922;
chunk__10438_11876 = G__11923;
count__10439_11877 = G__11924;
i__10440_11878 = G__11925;
continue;
} else {
var child_struct_11926 = cljs.core.first(seq__10437_11920__$1);
var children_11927 = shadow.dom.dom_node(child_struct_11926);
if(cljs.core.seq_QMARK_(children_11927)){
var seq__10520_11928 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_11927));
var chunk__10522_11929 = null;
var count__10523_11930 = (0);
var i__10524_11931 = (0);
while(true){
if((i__10524_11931 < count__10523_11930)){
var child_11933 = chunk__10522_11929.cljs$core$IIndexed$_nth$arity$2(null,i__10524_11931);
if(cljs.core.truth_(child_11933)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_11933);


var G__11934 = seq__10520_11928;
var G__11935 = chunk__10522_11929;
var G__11936 = count__10523_11930;
var G__11937 = (i__10524_11931 + (1));
seq__10520_11928 = G__11934;
chunk__10522_11929 = G__11935;
count__10523_11930 = G__11936;
i__10524_11931 = G__11937;
continue;
} else {
var G__11938 = seq__10520_11928;
var G__11939 = chunk__10522_11929;
var G__11940 = count__10523_11930;
var G__11941 = (i__10524_11931 + (1));
seq__10520_11928 = G__11938;
chunk__10522_11929 = G__11939;
count__10523_11930 = G__11940;
i__10524_11931 = G__11941;
continue;
}
} else {
var temp__5804__auto___11942__$1 = cljs.core.seq(seq__10520_11928);
if(temp__5804__auto___11942__$1){
var seq__10520_11943__$1 = temp__5804__auto___11942__$1;
if(cljs.core.chunked_seq_QMARK_(seq__10520_11943__$1)){
var c__5525__auto___11944 = cljs.core.chunk_first(seq__10520_11943__$1);
var G__11946 = cljs.core.chunk_rest(seq__10520_11943__$1);
var G__11947 = c__5525__auto___11944;
var G__11948 = cljs.core.count(c__5525__auto___11944);
var G__11949 = (0);
seq__10520_11928 = G__11946;
chunk__10522_11929 = G__11947;
count__10523_11930 = G__11948;
i__10524_11931 = G__11949;
continue;
} else {
var child_11951 = cljs.core.first(seq__10520_11943__$1);
if(cljs.core.truth_(child_11951)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_11951);


var G__11952 = cljs.core.next(seq__10520_11943__$1);
var G__11953 = null;
var G__11954 = (0);
var G__11955 = (0);
seq__10520_11928 = G__11952;
chunk__10522_11929 = G__11953;
count__10523_11930 = G__11954;
i__10524_11931 = G__11955;
continue;
} else {
var G__11957 = cljs.core.next(seq__10520_11943__$1);
var G__11958 = null;
var G__11959 = (0);
var G__11960 = (0);
seq__10520_11928 = G__11957;
chunk__10522_11929 = G__11958;
count__10523_11930 = G__11959;
i__10524_11931 = G__11960;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_11927);
}


var G__11961 = cljs.core.next(seq__10437_11920__$1);
var G__11962 = null;
var G__11963 = (0);
var G__11964 = (0);
seq__10437_11875 = G__11961;
chunk__10438_11876 = G__11962;
count__10439_11877 = G__11963;
i__10440_11878 = G__11964;
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
var seq__10566 = cljs.core.seq(node);
var chunk__10567 = null;
var count__10568 = (0);
var i__10569 = (0);
while(true){
if((i__10569 < count__10568)){
var n = chunk__10567.cljs$core$IIndexed$_nth$arity$2(null,i__10569);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__11970 = seq__10566;
var G__11971 = chunk__10567;
var G__11972 = count__10568;
var G__11973 = (i__10569 + (1));
seq__10566 = G__11970;
chunk__10567 = G__11971;
count__10568 = G__11972;
i__10569 = G__11973;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__10566);
if(temp__5804__auto__){
var seq__10566__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10566__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__10566__$1);
var G__11974 = cljs.core.chunk_rest(seq__10566__$1);
var G__11975 = c__5525__auto__;
var G__11976 = cljs.core.count(c__5525__auto__);
var G__11977 = (0);
seq__10566 = G__11974;
chunk__10567 = G__11975;
count__10568 = G__11976;
i__10569 = G__11977;
continue;
} else {
var n = cljs.core.first(seq__10566__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__11978 = cljs.core.next(seq__10566__$1);
var G__11979 = null;
var G__11980 = (0);
var G__11981 = (0);
seq__10566 = G__11978;
chunk__10567 = G__11979;
count__10568 = G__11980;
i__10569 = G__11981;
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
var G__10587 = arguments.length;
switch (G__10587) {
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
var G__10593 = arguments.length;
switch (G__10593) {
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
var G__10612 = arguments.length;
switch (G__10612) {
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
var len__5726__auto___11997 = arguments.length;
var i__5727__auto___11998 = (0);
while(true){
if((i__5727__auto___11998 < len__5726__auto___11997)){
args__5732__auto__.push((arguments[i__5727__auto___11998]));

var G__11999 = (i__5727__auto___11998 + (1));
i__5727__auto___11998 = G__11999;
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
var seq__10636_12000 = cljs.core.seq(nodes);
var chunk__10637_12001 = null;
var count__10638_12002 = (0);
var i__10639_12003 = (0);
while(true){
if((i__10639_12003 < count__10638_12002)){
var node_12004 = chunk__10637_12001.cljs$core$IIndexed$_nth$arity$2(null,i__10639_12003);
fragment.appendChild(shadow.dom._to_dom(node_12004));


var G__12006 = seq__10636_12000;
var G__12007 = chunk__10637_12001;
var G__12008 = count__10638_12002;
var G__12009 = (i__10639_12003 + (1));
seq__10636_12000 = G__12006;
chunk__10637_12001 = G__12007;
count__10638_12002 = G__12008;
i__10639_12003 = G__12009;
continue;
} else {
var temp__5804__auto___12010 = cljs.core.seq(seq__10636_12000);
if(temp__5804__auto___12010){
var seq__10636_12011__$1 = temp__5804__auto___12010;
if(cljs.core.chunked_seq_QMARK_(seq__10636_12011__$1)){
var c__5525__auto___12012 = cljs.core.chunk_first(seq__10636_12011__$1);
var G__12013 = cljs.core.chunk_rest(seq__10636_12011__$1);
var G__12014 = c__5525__auto___12012;
var G__12015 = cljs.core.count(c__5525__auto___12012);
var G__12016 = (0);
seq__10636_12000 = G__12013;
chunk__10637_12001 = G__12014;
count__10638_12002 = G__12015;
i__10639_12003 = G__12016;
continue;
} else {
var node_12017 = cljs.core.first(seq__10636_12011__$1);
fragment.appendChild(shadow.dom._to_dom(node_12017));


var G__12018 = cljs.core.next(seq__10636_12011__$1);
var G__12019 = null;
var G__12020 = (0);
var G__12021 = (0);
seq__10636_12000 = G__12018;
chunk__10637_12001 = G__12019;
count__10638_12002 = G__12020;
i__10639_12003 = G__12021;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq10625){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10625));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__10656_12022 = cljs.core.seq(scripts);
var chunk__10657_12023 = null;
var count__10658_12024 = (0);
var i__10659_12025 = (0);
while(true){
if((i__10659_12025 < count__10658_12024)){
var vec__10669_12026 = chunk__10657_12023.cljs$core$IIndexed$_nth$arity$2(null,i__10659_12025);
var script_tag_12027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10669_12026,(0),null);
var script_body_12028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10669_12026,(1),null);
eval(script_body_12028);


var G__12031 = seq__10656_12022;
var G__12032 = chunk__10657_12023;
var G__12033 = count__10658_12024;
var G__12034 = (i__10659_12025 + (1));
seq__10656_12022 = G__12031;
chunk__10657_12023 = G__12032;
count__10658_12024 = G__12033;
i__10659_12025 = G__12034;
continue;
} else {
var temp__5804__auto___12035 = cljs.core.seq(seq__10656_12022);
if(temp__5804__auto___12035){
var seq__10656_12036__$1 = temp__5804__auto___12035;
if(cljs.core.chunked_seq_QMARK_(seq__10656_12036__$1)){
var c__5525__auto___12038 = cljs.core.chunk_first(seq__10656_12036__$1);
var G__12040 = cljs.core.chunk_rest(seq__10656_12036__$1);
var G__12041 = c__5525__auto___12038;
var G__12042 = cljs.core.count(c__5525__auto___12038);
var G__12043 = (0);
seq__10656_12022 = G__12040;
chunk__10657_12023 = G__12041;
count__10658_12024 = G__12042;
i__10659_12025 = G__12043;
continue;
} else {
var vec__10674_12045 = cljs.core.first(seq__10656_12036__$1);
var script_tag_12046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10674_12045,(0),null);
var script_body_12047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10674_12045,(1),null);
eval(script_body_12047);


var G__12049 = cljs.core.next(seq__10656_12036__$1);
var G__12050 = null;
var G__12051 = (0);
var G__12052 = (0);
seq__10656_12022 = G__12049;
chunk__10657_12023 = G__12050;
count__10658_12024 = G__12051;
i__10659_12025 = G__12052;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__10677){
var vec__10679 = p__10677;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10679,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10679,(1),null);
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
var G__10699 = arguments.length;
switch (G__10699) {
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
var seq__10728 = cljs.core.seq(style_keys);
var chunk__10729 = null;
var count__10730 = (0);
var i__10731 = (0);
while(true){
if((i__10731 < count__10730)){
var it = chunk__10729.cljs$core$IIndexed$_nth$arity$2(null,i__10731);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12079 = seq__10728;
var G__12080 = chunk__10729;
var G__12081 = count__10730;
var G__12082 = (i__10731 + (1));
seq__10728 = G__12079;
chunk__10729 = G__12080;
count__10730 = G__12081;
i__10731 = G__12082;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__10728);
if(temp__5804__auto__){
var seq__10728__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10728__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__10728__$1);
var G__12087 = cljs.core.chunk_rest(seq__10728__$1);
var G__12088 = c__5525__auto__;
var G__12089 = cljs.core.count(c__5525__auto__);
var G__12090 = (0);
seq__10728 = G__12087;
chunk__10729 = G__12088;
count__10730 = G__12089;
i__10731 = G__12090;
continue;
} else {
var it = cljs.core.first(seq__10728__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12091 = cljs.core.next(seq__10728__$1);
var G__12092 = null;
var G__12093 = (0);
var G__12094 = (0);
seq__10728 = G__12091;
chunk__10729 = G__12092;
count__10730 = G__12093;
i__10731 = G__12094;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k10741,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__10770 = k10741;
var G__10770__$1 = (((G__10770 instanceof cljs.core.Keyword))?G__10770.fqn:null);
switch (G__10770__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k10741,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__10771){
var vec__10772 = p__10771;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10772,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10772,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10740){
var self__ = this;
var G__10740__$1 = this;
return (new cljs.core.RecordIter((0),G__10740__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this10742,other10743){
var self__ = this;
var this10742__$1 = this;
return (((!((other10743 == null)))) && ((((this10742__$1.constructor === other10743.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this10742__$1.x,other10743.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this10742__$1.y,other10743.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this10742__$1.__extmap,other10743.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k10741){
var self__ = this;
var this__5307__auto____$1 = this;
var G__10802 = k10741;
var G__10802__$1 = (((G__10802 instanceof cljs.core.Keyword))?G__10802.fqn:null);
switch (G__10802__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k10741);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__10740){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__10805 = cljs.core.keyword_identical_QMARK_;
var expr__10806 = k__5309__auto__;
if(cljs.core.truth_((pred__10805.cljs$core$IFn$_invoke$arity$2 ? pred__10805.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__10806) : pred__10805.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__10806)))){
return (new shadow.dom.Coordinate(G__10740,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10805.cljs$core$IFn$_invoke$arity$2 ? pred__10805.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__10806) : pred__10805.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__10806)))){
return (new shadow.dom.Coordinate(self__.x,G__10740,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__10740),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__10740){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__10740,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__10763){
var extmap__5342__auto__ = (function (){var G__10826 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__10763,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__10763)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__10826);
} else {
return G__10826;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__10763),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__10763),null,cljs.core.not_empty(extmap__5342__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k10837,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__10851 = k10837;
var G__10851__$1 = (((G__10851 instanceof cljs.core.Keyword))?G__10851.fqn:null);
switch (G__10851__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k10837,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__10856){
var vec__10858 = p__10856;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10858,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10858,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10836){
var self__ = this;
var G__10836__$1 = this;
return (new cljs.core.RecordIter((0),G__10836__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this10838,other10839){
var self__ = this;
var this10838__$1 = this;
return (((!((other10839 == null)))) && ((((this10838__$1.constructor === other10839.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this10838__$1.w,other10839.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this10838__$1.h,other10839.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this10838__$1.__extmap,other10839.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k10837){
var self__ = this;
var this__5307__auto____$1 = this;
var G__10888 = k10837;
var G__10888__$1 = (((G__10888 instanceof cljs.core.Keyword))?G__10888.fqn:null);
switch (G__10888__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k10837);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__10836){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__10891 = cljs.core.keyword_identical_QMARK_;
var expr__10892 = k__5309__auto__;
if(cljs.core.truth_((pred__10891.cljs$core$IFn$_invoke$arity$2 ? pred__10891.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__10892) : pred__10891.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__10892)))){
return (new shadow.dom.Size(G__10836,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10891.cljs$core$IFn$_invoke$arity$2 ? pred__10891.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__10892) : pred__10891.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__10892)))){
return (new shadow.dom.Size(self__.w,G__10836,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__10836),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__10836){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__10836,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__10841){
var extmap__5342__auto__ = (function (){var G__10904 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__10841,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__10841)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__10904);
} else {
return G__10904;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__10841),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__10841),null,cljs.core.not_empty(extmap__5342__auto__),null));
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
var G__12150 = (i + (1));
var G__12151 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__12150;
ret = G__12151;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__10946){
var vec__10948 = p__10946;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10948,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10948,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__10954 = arguments.length;
switch (G__10954) {
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
var G__12154 = ps;
var G__12155 = (i + (1));
el__$1 = G__12154;
i = G__12155;
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
var vec__11014 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11014,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11014,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11014,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__11020_12160 = cljs.core.seq(props);
var chunk__11021_12161 = null;
var count__11022_12162 = (0);
var i__11023_12163 = (0);
while(true){
if((i__11023_12163 < count__11022_12162)){
var vec__11042_12164 = chunk__11021_12161.cljs$core$IIndexed$_nth$arity$2(null,i__11023_12163);
var k_12165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11042_12164,(0),null);
var v_12166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11042_12164,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_12165);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12165),v_12166);


var G__12167 = seq__11020_12160;
var G__12168 = chunk__11021_12161;
var G__12169 = count__11022_12162;
var G__12170 = (i__11023_12163 + (1));
seq__11020_12160 = G__12167;
chunk__11021_12161 = G__12168;
count__11022_12162 = G__12169;
i__11023_12163 = G__12170;
continue;
} else {
var temp__5804__auto___12171 = cljs.core.seq(seq__11020_12160);
if(temp__5804__auto___12171){
var seq__11020_12172__$1 = temp__5804__auto___12171;
if(cljs.core.chunked_seq_QMARK_(seq__11020_12172__$1)){
var c__5525__auto___12173 = cljs.core.chunk_first(seq__11020_12172__$1);
var G__12174 = cljs.core.chunk_rest(seq__11020_12172__$1);
var G__12175 = c__5525__auto___12173;
var G__12176 = cljs.core.count(c__5525__auto___12173);
var G__12177 = (0);
seq__11020_12160 = G__12174;
chunk__11021_12161 = G__12175;
count__11022_12162 = G__12176;
i__11023_12163 = G__12177;
continue;
} else {
var vec__11050_12178 = cljs.core.first(seq__11020_12172__$1);
var k_12179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11050_12178,(0),null);
var v_12180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11050_12178,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_12179);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12179),v_12180);


var G__12181 = cljs.core.next(seq__11020_12172__$1);
var G__12182 = null;
var G__12183 = (0);
var G__12184 = (0);
seq__11020_12160 = G__12181;
chunk__11021_12161 = G__12182;
count__11022_12162 = G__12183;
i__11023_12163 = G__12184;
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
var vec__11073 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11073,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11073,(1),null);
var seq__11077_12185 = cljs.core.seq(node_children);
var chunk__11079_12186 = null;
var count__11080_12187 = (0);
var i__11081_12188 = (0);
while(true){
if((i__11081_12188 < count__11080_12187)){
var child_struct_12189 = chunk__11079_12186.cljs$core$IIndexed$_nth$arity$2(null,i__11081_12188);
if((!((child_struct_12189 == null)))){
if(typeof child_struct_12189 === 'string'){
var text_12190 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_12190),child_struct_12189].join(''));
} else {
var children_12191 = shadow.dom.svg_node(child_struct_12189);
if(cljs.core.seq_QMARK_(children_12191)){
var seq__11239_12192 = cljs.core.seq(children_12191);
var chunk__11241_12193 = null;
var count__11242_12194 = (0);
var i__11243_12195 = (0);
while(true){
if((i__11243_12195 < count__11242_12194)){
var child_12196 = chunk__11241_12193.cljs$core$IIndexed$_nth$arity$2(null,i__11243_12195);
if(cljs.core.truth_(child_12196)){
node.appendChild(child_12196);


var G__12197 = seq__11239_12192;
var G__12198 = chunk__11241_12193;
var G__12199 = count__11242_12194;
var G__12200 = (i__11243_12195 + (1));
seq__11239_12192 = G__12197;
chunk__11241_12193 = G__12198;
count__11242_12194 = G__12199;
i__11243_12195 = G__12200;
continue;
} else {
var G__12201 = seq__11239_12192;
var G__12202 = chunk__11241_12193;
var G__12203 = count__11242_12194;
var G__12204 = (i__11243_12195 + (1));
seq__11239_12192 = G__12201;
chunk__11241_12193 = G__12202;
count__11242_12194 = G__12203;
i__11243_12195 = G__12204;
continue;
}
} else {
var temp__5804__auto___12205 = cljs.core.seq(seq__11239_12192);
if(temp__5804__auto___12205){
var seq__11239_12206__$1 = temp__5804__auto___12205;
if(cljs.core.chunked_seq_QMARK_(seq__11239_12206__$1)){
var c__5525__auto___12207 = cljs.core.chunk_first(seq__11239_12206__$1);
var G__12208 = cljs.core.chunk_rest(seq__11239_12206__$1);
var G__12209 = c__5525__auto___12207;
var G__12210 = cljs.core.count(c__5525__auto___12207);
var G__12211 = (0);
seq__11239_12192 = G__12208;
chunk__11241_12193 = G__12209;
count__11242_12194 = G__12210;
i__11243_12195 = G__12211;
continue;
} else {
var child_12212 = cljs.core.first(seq__11239_12206__$1);
if(cljs.core.truth_(child_12212)){
node.appendChild(child_12212);


var G__12213 = cljs.core.next(seq__11239_12206__$1);
var G__12214 = null;
var G__12215 = (0);
var G__12216 = (0);
seq__11239_12192 = G__12213;
chunk__11241_12193 = G__12214;
count__11242_12194 = G__12215;
i__11243_12195 = G__12216;
continue;
} else {
var G__12217 = cljs.core.next(seq__11239_12206__$1);
var G__12218 = null;
var G__12219 = (0);
var G__12220 = (0);
seq__11239_12192 = G__12217;
chunk__11241_12193 = G__12218;
count__11242_12194 = G__12219;
i__11243_12195 = G__12220;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_12191);
}
}


var G__12221 = seq__11077_12185;
var G__12222 = chunk__11079_12186;
var G__12223 = count__11080_12187;
var G__12224 = (i__11081_12188 + (1));
seq__11077_12185 = G__12221;
chunk__11079_12186 = G__12222;
count__11080_12187 = G__12223;
i__11081_12188 = G__12224;
continue;
} else {
var G__12225 = seq__11077_12185;
var G__12226 = chunk__11079_12186;
var G__12227 = count__11080_12187;
var G__12228 = (i__11081_12188 + (1));
seq__11077_12185 = G__12225;
chunk__11079_12186 = G__12226;
count__11080_12187 = G__12227;
i__11081_12188 = G__12228;
continue;
}
} else {
var temp__5804__auto___12229 = cljs.core.seq(seq__11077_12185);
if(temp__5804__auto___12229){
var seq__11077_12230__$1 = temp__5804__auto___12229;
if(cljs.core.chunked_seq_QMARK_(seq__11077_12230__$1)){
var c__5525__auto___12231 = cljs.core.chunk_first(seq__11077_12230__$1);
var G__12235 = cljs.core.chunk_rest(seq__11077_12230__$1);
var G__12236 = c__5525__auto___12231;
var G__12237 = cljs.core.count(c__5525__auto___12231);
var G__12238 = (0);
seq__11077_12185 = G__12235;
chunk__11079_12186 = G__12236;
count__11080_12187 = G__12237;
i__11081_12188 = G__12238;
continue;
} else {
var child_struct_12239 = cljs.core.first(seq__11077_12230__$1);
if((!((child_struct_12239 == null)))){
if(typeof child_struct_12239 === 'string'){
var text_12240 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_12240),child_struct_12239].join(''));
} else {
var children_12241 = shadow.dom.svg_node(child_struct_12239);
if(cljs.core.seq_QMARK_(children_12241)){
var seq__11284_12242 = cljs.core.seq(children_12241);
var chunk__11287_12243 = null;
var count__11288_12244 = (0);
var i__11289_12245 = (0);
while(true){
if((i__11289_12245 < count__11288_12244)){
var child_12246 = chunk__11287_12243.cljs$core$IIndexed$_nth$arity$2(null,i__11289_12245);
if(cljs.core.truth_(child_12246)){
node.appendChild(child_12246);


var G__12247 = seq__11284_12242;
var G__12248 = chunk__11287_12243;
var G__12249 = count__11288_12244;
var G__12250 = (i__11289_12245 + (1));
seq__11284_12242 = G__12247;
chunk__11287_12243 = G__12248;
count__11288_12244 = G__12249;
i__11289_12245 = G__12250;
continue;
} else {
var G__12251 = seq__11284_12242;
var G__12252 = chunk__11287_12243;
var G__12253 = count__11288_12244;
var G__12254 = (i__11289_12245 + (1));
seq__11284_12242 = G__12251;
chunk__11287_12243 = G__12252;
count__11288_12244 = G__12253;
i__11289_12245 = G__12254;
continue;
}
} else {
var temp__5804__auto___12255__$1 = cljs.core.seq(seq__11284_12242);
if(temp__5804__auto___12255__$1){
var seq__11284_12256__$1 = temp__5804__auto___12255__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11284_12256__$1)){
var c__5525__auto___12257 = cljs.core.chunk_first(seq__11284_12256__$1);
var G__12258 = cljs.core.chunk_rest(seq__11284_12256__$1);
var G__12259 = c__5525__auto___12257;
var G__12260 = cljs.core.count(c__5525__auto___12257);
var G__12261 = (0);
seq__11284_12242 = G__12258;
chunk__11287_12243 = G__12259;
count__11288_12244 = G__12260;
i__11289_12245 = G__12261;
continue;
} else {
var child_12262 = cljs.core.first(seq__11284_12256__$1);
if(cljs.core.truth_(child_12262)){
node.appendChild(child_12262);


var G__12263 = cljs.core.next(seq__11284_12256__$1);
var G__12264 = null;
var G__12265 = (0);
var G__12266 = (0);
seq__11284_12242 = G__12263;
chunk__11287_12243 = G__12264;
count__11288_12244 = G__12265;
i__11289_12245 = G__12266;
continue;
} else {
var G__12267 = cljs.core.next(seq__11284_12256__$1);
var G__12268 = null;
var G__12269 = (0);
var G__12270 = (0);
seq__11284_12242 = G__12267;
chunk__11287_12243 = G__12268;
count__11288_12244 = G__12269;
i__11289_12245 = G__12270;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_12241);
}
}


var G__12271 = cljs.core.next(seq__11077_12230__$1);
var G__12272 = null;
var G__12273 = (0);
var G__12274 = (0);
seq__11077_12185 = G__12271;
chunk__11079_12186 = G__12272;
count__11080_12187 = G__12273;
i__11081_12188 = G__12274;
continue;
} else {
var G__12275 = cljs.core.next(seq__11077_12230__$1);
var G__12276 = null;
var G__12277 = (0);
var G__12278 = (0);
seq__11077_12185 = G__12275;
chunk__11079_12186 = G__12276;
count__11080_12187 = G__12277;
i__11081_12188 = G__12278;
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
var len__5726__auto___12279 = arguments.length;
var i__5727__auto___12280 = (0);
while(true){
if((i__5727__auto___12280 < len__5726__auto___12279)){
args__5732__auto__.push((arguments[i__5727__auto___12280]));

var G__12285 = (i__5727__auto___12280 + (1));
i__5727__auto___12280 = G__12285;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq11392){
var G__11393 = cljs.core.first(seq11392);
var seq11392__$1 = cljs.core.next(seq11392);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11393,seq11392__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
