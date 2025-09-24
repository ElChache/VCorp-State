goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12619 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_12619(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12624 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_12624(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11751 = coll;
var G__11752 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11751,G__11752) : shadow.dom.lazy_native_coll_seq.call(null,G__11751,G__11752));
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
var G__11778 = arguments.length;
switch (G__11778) {
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
var G__11786 = arguments.length;
switch (G__11786) {
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
var G__11793 = arguments.length;
switch (G__11793) {
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
var G__11797 = arguments.length;
switch (G__11797) {
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
var G__11800 = arguments.length;
switch (G__11800) {
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
var G__11803 = arguments.length;
switch (G__11803) {
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
}catch (e11805){if((e11805 instanceof Object)){
var e = e11805;
return console.log("didnt support attachEvent",el,e);
} else {
throw e11805;

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
var seq__11812 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__11813 = null;
var count__11814 = (0);
var i__11815 = (0);
while(true){
if((i__11815 < count__11814)){
var el = chunk__11813.cljs$core$IIndexed$_nth$arity$2(null,i__11815);
var handler_12686__$1 = ((function (seq__11812,chunk__11813,count__11814,i__11815,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11812,chunk__11813,count__11814,i__11815,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12686__$1);


var G__12687 = seq__11812;
var G__12688 = chunk__11813;
var G__12689 = count__11814;
var G__12690 = (i__11815 + (1));
seq__11812 = G__12687;
chunk__11813 = G__12688;
count__11814 = G__12689;
i__11815 = G__12690;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11812);
if(temp__5804__auto__){
var seq__11812__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11812__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11812__$1);
var G__12693 = cljs.core.chunk_rest(seq__11812__$1);
var G__12694 = c__5525__auto__;
var G__12695 = cljs.core.count(c__5525__auto__);
var G__12696 = (0);
seq__11812 = G__12693;
chunk__11813 = G__12694;
count__11814 = G__12695;
i__11815 = G__12696;
continue;
} else {
var el = cljs.core.first(seq__11812__$1);
var handler_12697__$1 = ((function (seq__11812,chunk__11813,count__11814,i__11815,el,seq__11812__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11812,chunk__11813,count__11814,i__11815,el,seq__11812__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12697__$1);


var G__12698 = cljs.core.next(seq__11812__$1);
var G__12699 = null;
var G__12700 = (0);
var G__12701 = (0);
seq__11812 = G__12698;
chunk__11813 = G__12699;
count__11814 = G__12700;
i__11815 = G__12701;
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
var G__11855 = arguments.length;
switch (G__11855) {
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
var seq__11856 = cljs.core.seq(events);
var chunk__11857 = null;
var count__11858 = (0);
var i__11859 = (0);
while(true){
if((i__11859 < count__11858)){
var vec__11866 = chunk__11857.cljs$core$IIndexed$_nth$arity$2(null,i__11859);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11866,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11866,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12705 = seq__11856;
var G__12706 = chunk__11857;
var G__12707 = count__11858;
var G__12708 = (i__11859 + (1));
seq__11856 = G__12705;
chunk__11857 = G__12706;
count__11858 = G__12707;
i__11859 = G__12708;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11856);
if(temp__5804__auto__){
var seq__11856__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11856__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11856__$1);
var G__12710 = cljs.core.chunk_rest(seq__11856__$1);
var G__12711 = c__5525__auto__;
var G__12712 = cljs.core.count(c__5525__auto__);
var G__12713 = (0);
seq__11856 = G__12710;
chunk__11857 = G__12711;
count__11858 = G__12712;
i__11859 = G__12713;
continue;
} else {
var vec__11869 = cljs.core.first(seq__11856__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11869,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11869,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12714 = cljs.core.next(seq__11856__$1);
var G__12715 = null;
var G__12716 = (0);
var G__12717 = (0);
seq__11856 = G__12714;
chunk__11857 = G__12715;
count__11858 = G__12716;
i__11859 = G__12717;
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
var seq__11872 = cljs.core.seq(styles);
var chunk__11873 = null;
var count__11874 = (0);
var i__11875 = (0);
while(true){
if((i__11875 < count__11874)){
var vec__11882 = chunk__11873.cljs$core$IIndexed$_nth$arity$2(null,i__11875);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11882,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11882,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12719 = seq__11872;
var G__12720 = chunk__11873;
var G__12721 = count__11874;
var G__12722 = (i__11875 + (1));
seq__11872 = G__12719;
chunk__11873 = G__12720;
count__11874 = G__12721;
i__11875 = G__12722;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11872);
if(temp__5804__auto__){
var seq__11872__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11872__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11872__$1);
var G__12723 = cljs.core.chunk_rest(seq__11872__$1);
var G__12724 = c__5525__auto__;
var G__12725 = cljs.core.count(c__5525__auto__);
var G__12726 = (0);
seq__11872 = G__12723;
chunk__11873 = G__12724;
count__11874 = G__12725;
i__11875 = G__12726;
continue;
} else {
var vec__11891 = cljs.core.first(seq__11872__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11891,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11891,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12727 = cljs.core.next(seq__11872__$1);
var G__12728 = null;
var G__12729 = (0);
var G__12730 = (0);
seq__11872 = G__12727;
chunk__11873 = G__12728;
count__11874 = G__12729;
i__11875 = G__12730;
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
var G__11894_12731 = key;
var G__11894_12732__$1 = (((G__11894_12731 instanceof cljs.core.Keyword))?G__11894_12731.fqn:null);
switch (G__11894_12732__$1) {
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
var ks_12736 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_12736,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_12736,"aria-");
}
})())){
el.setAttribute(ks_12736,value);
} else {
(el[ks_12736] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__11932){
var map__11933 = p__11932;
var map__11933__$1 = cljs.core.__destructure_map(map__11933);
var props = map__11933__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11933__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__11934 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11934,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11934,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11934,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__11937 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__11937,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__11937;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__11939 = arguments.length;
switch (G__11939) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__11944){
var vec__11945 = p__11944;
var seq__11946 = cljs.core.seq(vec__11945);
var first__11947 = cljs.core.first(seq__11946);
var seq__11946__$1 = cljs.core.next(seq__11946);
var nn = first__11947;
var first__11947__$1 = cljs.core.first(seq__11946__$1);
var seq__11946__$2 = cljs.core.next(seq__11946__$1);
var np = first__11947__$1;
var nc = seq__11946__$2;
var node = vec__11945;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11948 = nn;
var G__11949 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11948,G__11949) : create_fn.call(null,G__11948,G__11949));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11950 = nn;
var G__11951 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11950,G__11951) : create_fn.call(null,G__11950,G__11951));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__11952 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11952,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11952,(1),null);
var seq__11955_12744 = cljs.core.seq(node_children);
var chunk__11956_12745 = null;
var count__11957_12746 = (0);
var i__11958_12747 = (0);
while(true){
if((i__11958_12747 < count__11957_12746)){
var child_struct_12748 = chunk__11956_12745.cljs$core$IIndexed$_nth$arity$2(null,i__11958_12747);
var children_12749 = shadow.dom.dom_node(child_struct_12748);
if(cljs.core.seq_QMARK_(children_12749)){
var seq__11976_12750 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12749));
var chunk__11978_12751 = null;
var count__11979_12752 = (0);
var i__11980_12753 = (0);
while(true){
if((i__11980_12753 < count__11979_12752)){
var child_12754 = chunk__11978_12751.cljs$core$IIndexed$_nth$arity$2(null,i__11980_12753);
if(cljs.core.truth_(child_12754)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12754);


var G__12755 = seq__11976_12750;
var G__12756 = chunk__11978_12751;
var G__12757 = count__11979_12752;
var G__12758 = (i__11980_12753 + (1));
seq__11976_12750 = G__12755;
chunk__11978_12751 = G__12756;
count__11979_12752 = G__12757;
i__11980_12753 = G__12758;
continue;
} else {
var G__12759 = seq__11976_12750;
var G__12760 = chunk__11978_12751;
var G__12761 = count__11979_12752;
var G__12762 = (i__11980_12753 + (1));
seq__11976_12750 = G__12759;
chunk__11978_12751 = G__12760;
count__11979_12752 = G__12761;
i__11980_12753 = G__12762;
continue;
}
} else {
var temp__5804__auto___12765 = cljs.core.seq(seq__11976_12750);
if(temp__5804__auto___12765){
var seq__11976_12768__$1 = temp__5804__auto___12765;
if(cljs.core.chunked_seq_QMARK_(seq__11976_12768__$1)){
var c__5525__auto___12769 = cljs.core.chunk_first(seq__11976_12768__$1);
var G__12770 = cljs.core.chunk_rest(seq__11976_12768__$1);
var G__12771 = c__5525__auto___12769;
var G__12772 = cljs.core.count(c__5525__auto___12769);
var G__12773 = (0);
seq__11976_12750 = G__12770;
chunk__11978_12751 = G__12771;
count__11979_12752 = G__12772;
i__11980_12753 = G__12773;
continue;
} else {
var child_12774 = cljs.core.first(seq__11976_12768__$1);
if(cljs.core.truth_(child_12774)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12774);


var G__12775 = cljs.core.next(seq__11976_12768__$1);
var G__12776 = null;
var G__12777 = (0);
var G__12778 = (0);
seq__11976_12750 = G__12775;
chunk__11978_12751 = G__12776;
count__11979_12752 = G__12777;
i__11980_12753 = G__12778;
continue;
} else {
var G__12781 = cljs.core.next(seq__11976_12768__$1);
var G__12782 = null;
var G__12783 = (0);
var G__12784 = (0);
seq__11976_12750 = G__12781;
chunk__11978_12751 = G__12782;
count__11979_12752 = G__12783;
i__11980_12753 = G__12784;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12749);
}


var G__12786 = seq__11955_12744;
var G__12787 = chunk__11956_12745;
var G__12788 = count__11957_12746;
var G__12789 = (i__11958_12747 + (1));
seq__11955_12744 = G__12786;
chunk__11956_12745 = G__12787;
count__11957_12746 = G__12788;
i__11958_12747 = G__12789;
continue;
} else {
var temp__5804__auto___12790 = cljs.core.seq(seq__11955_12744);
if(temp__5804__auto___12790){
var seq__11955_12791__$1 = temp__5804__auto___12790;
if(cljs.core.chunked_seq_QMARK_(seq__11955_12791__$1)){
var c__5525__auto___12792 = cljs.core.chunk_first(seq__11955_12791__$1);
var G__12793 = cljs.core.chunk_rest(seq__11955_12791__$1);
var G__12794 = c__5525__auto___12792;
var G__12795 = cljs.core.count(c__5525__auto___12792);
var G__12796 = (0);
seq__11955_12744 = G__12793;
chunk__11956_12745 = G__12794;
count__11957_12746 = G__12795;
i__11958_12747 = G__12796;
continue;
} else {
var child_struct_12797 = cljs.core.first(seq__11955_12791__$1);
var children_12798 = shadow.dom.dom_node(child_struct_12797);
if(cljs.core.seq_QMARK_(children_12798)){
var seq__11987_12799 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12798));
var chunk__11989_12800 = null;
var count__11990_12801 = (0);
var i__11991_12802 = (0);
while(true){
if((i__11991_12802 < count__11990_12801)){
var child_12803 = chunk__11989_12800.cljs$core$IIndexed$_nth$arity$2(null,i__11991_12802);
if(cljs.core.truth_(child_12803)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12803);


var G__12804 = seq__11987_12799;
var G__12805 = chunk__11989_12800;
var G__12806 = count__11990_12801;
var G__12807 = (i__11991_12802 + (1));
seq__11987_12799 = G__12804;
chunk__11989_12800 = G__12805;
count__11990_12801 = G__12806;
i__11991_12802 = G__12807;
continue;
} else {
var G__12808 = seq__11987_12799;
var G__12809 = chunk__11989_12800;
var G__12810 = count__11990_12801;
var G__12811 = (i__11991_12802 + (1));
seq__11987_12799 = G__12808;
chunk__11989_12800 = G__12809;
count__11990_12801 = G__12810;
i__11991_12802 = G__12811;
continue;
}
} else {
var temp__5804__auto___12812__$1 = cljs.core.seq(seq__11987_12799);
if(temp__5804__auto___12812__$1){
var seq__11987_12813__$1 = temp__5804__auto___12812__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11987_12813__$1)){
var c__5525__auto___12814 = cljs.core.chunk_first(seq__11987_12813__$1);
var G__12815 = cljs.core.chunk_rest(seq__11987_12813__$1);
var G__12816 = c__5525__auto___12814;
var G__12817 = cljs.core.count(c__5525__auto___12814);
var G__12818 = (0);
seq__11987_12799 = G__12815;
chunk__11989_12800 = G__12816;
count__11990_12801 = G__12817;
i__11991_12802 = G__12818;
continue;
} else {
var child_12819 = cljs.core.first(seq__11987_12813__$1);
if(cljs.core.truth_(child_12819)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12819);


var G__12820 = cljs.core.next(seq__11987_12813__$1);
var G__12821 = null;
var G__12822 = (0);
var G__12823 = (0);
seq__11987_12799 = G__12820;
chunk__11989_12800 = G__12821;
count__11990_12801 = G__12822;
i__11991_12802 = G__12823;
continue;
} else {
var G__12824 = cljs.core.next(seq__11987_12813__$1);
var G__12825 = null;
var G__12826 = (0);
var G__12827 = (0);
seq__11987_12799 = G__12824;
chunk__11989_12800 = G__12825;
count__11990_12801 = G__12826;
i__11991_12802 = G__12827;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12798);
}


var G__12828 = cljs.core.next(seq__11955_12791__$1);
var G__12829 = null;
var G__12830 = (0);
var G__12831 = (0);
seq__11955_12744 = G__12828;
chunk__11956_12745 = G__12829;
count__11957_12746 = G__12830;
i__11958_12747 = G__12831;
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
var seq__12003 = cljs.core.seq(node);
var chunk__12004 = null;
var count__12005 = (0);
var i__12006 = (0);
while(true){
if((i__12006 < count__12005)){
var n = chunk__12004.cljs$core$IIndexed$_nth$arity$2(null,i__12006);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12833 = seq__12003;
var G__12834 = chunk__12004;
var G__12835 = count__12005;
var G__12836 = (i__12006 + (1));
seq__12003 = G__12833;
chunk__12004 = G__12834;
count__12005 = G__12835;
i__12006 = G__12836;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12003);
if(temp__5804__auto__){
var seq__12003__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12003__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12003__$1);
var G__12837 = cljs.core.chunk_rest(seq__12003__$1);
var G__12838 = c__5525__auto__;
var G__12839 = cljs.core.count(c__5525__auto__);
var G__12840 = (0);
seq__12003 = G__12837;
chunk__12004 = G__12838;
count__12005 = G__12839;
i__12006 = G__12840;
continue;
} else {
var n = cljs.core.first(seq__12003__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12842 = cljs.core.next(seq__12003__$1);
var G__12843 = null;
var G__12844 = (0);
var G__12845 = (0);
seq__12003 = G__12842;
chunk__12004 = G__12843;
count__12005 = G__12844;
i__12006 = G__12845;
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
var G__12048 = arguments.length;
switch (G__12048) {
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
var G__12067 = arguments.length;
switch (G__12067) {
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
var G__12100 = arguments.length;
switch (G__12100) {
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
var len__5726__auto___12854 = arguments.length;
var i__5727__auto___12855 = (0);
while(true){
if((i__5727__auto___12855 < len__5726__auto___12854)){
args__5732__auto__.push((arguments[i__5727__auto___12855]));

var G__12856 = (i__5727__auto___12855 + (1));
i__5727__auto___12855 = G__12856;
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
var seq__12109_12857 = cljs.core.seq(nodes);
var chunk__12110_12858 = null;
var count__12111_12859 = (0);
var i__12112_12860 = (0);
while(true){
if((i__12112_12860 < count__12111_12859)){
var node_12861 = chunk__12110_12858.cljs$core$IIndexed$_nth$arity$2(null,i__12112_12860);
fragment.appendChild(shadow.dom._to_dom(node_12861));


var G__12862 = seq__12109_12857;
var G__12863 = chunk__12110_12858;
var G__12864 = count__12111_12859;
var G__12865 = (i__12112_12860 + (1));
seq__12109_12857 = G__12862;
chunk__12110_12858 = G__12863;
count__12111_12859 = G__12864;
i__12112_12860 = G__12865;
continue;
} else {
var temp__5804__auto___12867 = cljs.core.seq(seq__12109_12857);
if(temp__5804__auto___12867){
var seq__12109_12868__$1 = temp__5804__auto___12867;
if(cljs.core.chunked_seq_QMARK_(seq__12109_12868__$1)){
var c__5525__auto___12869 = cljs.core.chunk_first(seq__12109_12868__$1);
var G__12870 = cljs.core.chunk_rest(seq__12109_12868__$1);
var G__12871 = c__5525__auto___12869;
var G__12872 = cljs.core.count(c__5525__auto___12869);
var G__12873 = (0);
seq__12109_12857 = G__12870;
chunk__12110_12858 = G__12871;
count__12111_12859 = G__12872;
i__12112_12860 = G__12873;
continue;
} else {
var node_12874 = cljs.core.first(seq__12109_12868__$1);
fragment.appendChild(shadow.dom._to_dom(node_12874));


var G__12875 = cljs.core.next(seq__12109_12868__$1);
var G__12876 = null;
var G__12877 = (0);
var G__12878 = (0);
seq__12109_12857 = G__12875;
chunk__12110_12858 = G__12876;
count__12111_12859 = G__12877;
i__12112_12860 = G__12878;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12108){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12108));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12115_12880 = cljs.core.seq(scripts);
var chunk__12116_12881 = null;
var count__12117_12882 = (0);
var i__12118_12883 = (0);
while(true){
if((i__12118_12883 < count__12117_12882)){
var vec__12126_12884 = chunk__12116_12881.cljs$core$IIndexed$_nth$arity$2(null,i__12118_12883);
var script_tag_12885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12126_12884,(0),null);
var script_body_12886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12126_12884,(1),null);
eval(script_body_12886);


var G__12887 = seq__12115_12880;
var G__12888 = chunk__12116_12881;
var G__12889 = count__12117_12882;
var G__12890 = (i__12118_12883 + (1));
seq__12115_12880 = G__12887;
chunk__12116_12881 = G__12888;
count__12117_12882 = G__12889;
i__12118_12883 = G__12890;
continue;
} else {
var temp__5804__auto___12891 = cljs.core.seq(seq__12115_12880);
if(temp__5804__auto___12891){
var seq__12115_12892__$1 = temp__5804__auto___12891;
if(cljs.core.chunked_seq_QMARK_(seq__12115_12892__$1)){
var c__5525__auto___12894 = cljs.core.chunk_first(seq__12115_12892__$1);
var G__12895 = cljs.core.chunk_rest(seq__12115_12892__$1);
var G__12896 = c__5525__auto___12894;
var G__12897 = cljs.core.count(c__5525__auto___12894);
var G__12898 = (0);
seq__12115_12880 = G__12895;
chunk__12116_12881 = G__12896;
count__12117_12882 = G__12897;
i__12118_12883 = G__12898;
continue;
} else {
var vec__12130_12899 = cljs.core.first(seq__12115_12892__$1);
var script_tag_12900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12130_12899,(0),null);
var script_body_12901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12130_12899,(1),null);
eval(script_body_12901);


var G__12902 = cljs.core.next(seq__12115_12892__$1);
var G__12903 = null;
var G__12904 = (0);
var G__12905 = (0);
seq__12115_12880 = G__12902;
chunk__12116_12881 = G__12903;
count__12117_12882 = G__12904;
i__12118_12883 = G__12905;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12133){
var vec__12134 = p__12133;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12134,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12134,(1),null);
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
var G__12141 = arguments.length;
switch (G__12141) {
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
var seq__12196 = cljs.core.seq(style_keys);
var chunk__12197 = null;
var count__12198 = (0);
var i__12199 = (0);
while(true){
if((i__12199 < count__12198)){
var it = chunk__12197.cljs$core$IIndexed$_nth$arity$2(null,i__12199);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12909 = seq__12196;
var G__12910 = chunk__12197;
var G__12911 = count__12198;
var G__12912 = (i__12199 + (1));
seq__12196 = G__12909;
chunk__12197 = G__12910;
count__12198 = G__12911;
i__12199 = G__12912;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12196);
if(temp__5804__auto__){
var seq__12196__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12196__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12196__$1);
var G__12913 = cljs.core.chunk_rest(seq__12196__$1);
var G__12914 = c__5525__auto__;
var G__12915 = cljs.core.count(c__5525__auto__);
var G__12916 = (0);
seq__12196 = G__12913;
chunk__12197 = G__12914;
count__12198 = G__12915;
i__12199 = G__12916;
continue;
} else {
var it = cljs.core.first(seq__12196__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12917 = cljs.core.next(seq__12196__$1);
var G__12918 = null;
var G__12919 = (0);
var G__12920 = (0);
seq__12196 = G__12917;
chunk__12197 = G__12918;
count__12198 = G__12919;
i__12199 = G__12920;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12215,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12232 = k12215;
var G__12232__$1 = (((G__12232 instanceof cljs.core.Keyword))?G__12232.fqn:null);
switch (G__12232__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12215,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12234){
var vec__12236 = p__12234;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12236,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12236,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12214){
var self__ = this;
var G__12214__$1 = this;
return (new cljs.core.RecordIter((0),G__12214__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12217,other12218){
var self__ = this;
var this12217__$1 = this;
return (((!((other12218 == null)))) && ((((this12217__$1.constructor === other12218.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12217__$1.x,other12218.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12217__$1.y,other12218.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12217__$1.__extmap,other12218.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12215){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12264 = k12215;
var G__12264__$1 = (((G__12264 instanceof cljs.core.Keyword))?G__12264.fqn:null);
switch (G__12264__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12215);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12214){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12265 = cljs.core.keyword_identical_QMARK_;
var expr__12266 = k__5309__auto__;
if(cljs.core.truth_((pred__12265.cljs$core$IFn$_invoke$arity$2 ? pred__12265.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12266) : pred__12265.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__12266)))){
return (new shadow.dom.Coordinate(G__12214,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12265.cljs$core$IFn$_invoke$arity$2 ? pred__12265.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12266) : pred__12265.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__12266)))){
return (new shadow.dom.Coordinate(self__.x,G__12214,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12214),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12214){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12214,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12225){
var extmap__5342__auto__ = (function (){var G__12269 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12225,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12225)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12269);
} else {
return G__12269;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12225),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12225),null,cljs.core.not_empty(extmap__5342__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12339,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12353 = k12339;
var G__12353__$1 = (((G__12353 instanceof cljs.core.Keyword))?G__12353.fqn:null);
switch (G__12353__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12339,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12384){
var vec__12385 = p__12384;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12385,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12385,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12338){
var self__ = this;
var G__12338__$1 = this;
return (new cljs.core.RecordIter((0),G__12338__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12340,other12341){
var self__ = this;
var this12340__$1 = this;
return (((!((other12341 == null)))) && ((((this12340__$1.constructor === other12341.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12340__$1.w,other12341.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12340__$1.h,other12341.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12340__$1.__extmap,other12341.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12339){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12404 = k12339;
var G__12404__$1 = (((G__12404 instanceof cljs.core.Keyword))?G__12404.fqn:null);
switch (G__12404__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12339);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12338){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12407 = cljs.core.keyword_identical_QMARK_;
var expr__12408 = k__5309__auto__;
if(cljs.core.truth_((pred__12407.cljs$core$IFn$_invoke$arity$2 ? pred__12407.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12408) : pred__12407.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__12408)))){
return (new shadow.dom.Size(G__12338,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12407.cljs$core$IFn$_invoke$arity$2 ? pred__12407.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12408) : pred__12407.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__12408)))){
return (new shadow.dom.Size(self__.w,G__12338,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12338),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12338){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12338,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12346){
var extmap__5342__auto__ = (function (){var G__12423 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12346,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12346)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12423);
} else {
return G__12423;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12346),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12346),null,cljs.core.not_empty(extmap__5342__auto__),null));
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
var G__12943 = (i + (1));
var G__12944 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__12943;
ret = G__12944;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12496){
var vec__12497 = p__12496;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12497,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12497,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12509 = arguments.length;
switch (G__12509) {
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
var G__12956 = ps;
var G__12957 = (i + (1));
el__$1 = G__12956;
i = G__12957;
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
var vec__12518 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12518,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12518,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12518,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12521_12964 = cljs.core.seq(props);
var chunk__12522_12965 = null;
var count__12523_12966 = (0);
var i__12524_12967 = (0);
while(true){
if((i__12524_12967 < count__12523_12966)){
var vec__12531_12973 = chunk__12522_12965.cljs$core$IIndexed$_nth$arity$2(null,i__12524_12967);
var k_12974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12531_12973,(0),null);
var v_12975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12531_12973,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_12974);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12974),v_12975);


var G__12978 = seq__12521_12964;
var G__12979 = chunk__12522_12965;
var G__12980 = count__12523_12966;
var G__12981 = (i__12524_12967 + (1));
seq__12521_12964 = G__12978;
chunk__12522_12965 = G__12979;
count__12523_12966 = G__12980;
i__12524_12967 = G__12981;
continue;
} else {
var temp__5804__auto___12982 = cljs.core.seq(seq__12521_12964);
if(temp__5804__auto___12982){
var seq__12521_12983__$1 = temp__5804__auto___12982;
if(cljs.core.chunked_seq_QMARK_(seq__12521_12983__$1)){
var c__5525__auto___12984 = cljs.core.chunk_first(seq__12521_12983__$1);
var G__12985 = cljs.core.chunk_rest(seq__12521_12983__$1);
var G__12986 = c__5525__auto___12984;
var G__12987 = cljs.core.count(c__5525__auto___12984);
var G__12988 = (0);
seq__12521_12964 = G__12985;
chunk__12522_12965 = G__12986;
count__12523_12966 = G__12987;
i__12524_12967 = G__12988;
continue;
} else {
var vec__12534_12989 = cljs.core.first(seq__12521_12983__$1);
var k_12990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12534_12989,(0),null);
var v_12991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12534_12989,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_12990);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12990),v_12991);


var G__12995 = cljs.core.next(seq__12521_12983__$1);
var G__12996 = null;
var G__12997 = (0);
var G__12998 = (0);
seq__12521_12964 = G__12995;
chunk__12522_12965 = G__12996;
count__12523_12966 = G__12997;
i__12524_12967 = G__12998;
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
var vec__12538 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12538,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12538,(1),null);
var seq__12541_12999 = cljs.core.seq(node_children);
var chunk__12543_13000 = null;
var count__12544_13001 = (0);
var i__12545_13002 = (0);
while(true){
if((i__12545_13002 < count__12544_13001)){
var child_struct_13006 = chunk__12543_13000.cljs$core$IIndexed$_nth$arity$2(null,i__12545_13002);
if((!((child_struct_13006 == null)))){
if(typeof child_struct_13006 === 'string'){
var text_13008 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13008),child_struct_13006].join(''));
} else {
var children_13009 = shadow.dom.svg_node(child_struct_13006);
if(cljs.core.seq_QMARK_(children_13009)){
var seq__12575_13014 = cljs.core.seq(children_13009);
var chunk__12577_13015 = null;
var count__12578_13016 = (0);
var i__12579_13017 = (0);
while(true){
if((i__12579_13017 < count__12578_13016)){
var child_13019 = chunk__12577_13015.cljs$core$IIndexed$_nth$arity$2(null,i__12579_13017);
if(cljs.core.truth_(child_13019)){
node.appendChild(child_13019);


var G__13023 = seq__12575_13014;
var G__13024 = chunk__12577_13015;
var G__13025 = count__12578_13016;
var G__13026 = (i__12579_13017 + (1));
seq__12575_13014 = G__13023;
chunk__12577_13015 = G__13024;
count__12578_13016 = G__13025;
i__12579_13017 = G__13026;
continue;
} else {
var G__13027 = seq__12575_13014;
var G__13028 = chunk__12577_13015;
var G__13029 = count__12578_13016;
var G__13030 = (i__12579_13017 + (1));
seq__12575_13014 = G__13027;
chunk__12577_13015 = G__13028;
count__12578_13016 = G__13029;
i__12579_13017 = G__13030;
continue;
}
} else {
var temp__5804__auto___13034 = cljs.core.seq(seq__12575_13014);
if(temp__5804__auto___13034){
var seq__12575_13035__$1 = temp__5804__auto___13034;
if(cljs.core.chunked_seq_QMARK_(seq__12575_13035__$1)){
var c__5525__auto___13036 = cljs.core.chunk_first(seq__12575_13035__$1);
var G__13037 = cljs.core.chunk_rest(seq__12575_13035__$1);
var G__13038 = c__5525__auto___13036;
var G__13039 = cljs.core.count(c__5525__auto___13036);
var G__13040 = (0);
seq__12575_13014 = G__13037;
chunk__12577_13015 = G__13038;
count__12578_13016 = G__13039;
i__12579_13017 = G__13040;
continue;
} else {
var child_13041 = cljs.core.first(seq__12575_13035__$1);
if(cljs.core.truth_(child_13041)){
node.appendChild(child_13041);


var G__13043 = cljs.core.next(seq__12575_13035__$1);
var G__13044 = null;
var G__13045 = (0);
var G__13046 = (0);
seq__12575_13014 = G__13043;
chunk__12577_13015 = G__13044;
count__12578_13016 = G__13045;
i__12579_13017 = G__13046;
continue;
} else {
var G__13047 = cljs.core.next(seq__12575_13035__$1);
var G__13048 = null;
var G__13049 = (0);
var G__13050 = (0);
seq__12575_13014 = G__13047;
chunk__12577_13015 = G__13048;
count__12578_13016 = G__13049;
i__12579_13017 = G__13050;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13009);
}
}


var G__13051 = seq__12541_12999;
var G__13052 = chunk__12543_13000;
var G__13053 = count__12544_13001;
var G__13054 = (i__12545_13002 + (1));
seq__12541_12999 = G__13051;
chunk__12543_13000 = G__13052;
count__12544_13001 = G__13053;
i__12545_13002 = G__13054;
continue;
} else {
var G__13055 = seq__12541_12999;
var G__13056 = chunk__12543_13000;
var G__13057 = count__12544_13001;
var G__13058 = (i__12545_13002 + (1));
seq__12541_12999 = G__13055;
chunk__12543_13000 = G__13056;
count__12544_13001 = G__13057;
i__12545_13002 = G__13058;
continue;
}
} else {
var temp__5804__auto___13059 = cljs.core.seq(seq__12541_12999);
if(temp__5804__auto___13059){
var seq__12541_13060__$1 = temp__5804__auto___13059;
if(cljs.core.chunked_seq_QMARK_(seq__12541_13060__$1)){
var c__5525__auto___13061 = cljs.core.chunk_first(seq__12541_13060__$1);
var G__13062 = cljs.core.chunk_rest(seq__12541_13060__$1);
var G__13063 = c__5525__auto___13061;
var G__13064 = cljs.core.count(c__5525__auto___13061);
var G__13065 = (0);
seq__12541_12999 = G__13062;
chunk__12543_13000 = G__13063;
count__12544_13001 = G__13064;
i__12545_13002 = G__13065;
continue;
} else {
var child_struct_13066 = cljs.core.first(seq__12541_13060__$1);
if((!((child_struct_13066 == null)))){
if(typeof child_struct_13066 === 'string'){
var text_13067 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13067),child_struct_13066].join(''));
} else {
var children_13068 = shadow.dom.svg_node(child_struct_13066);
if(cljs.core.seq_QMARK_(children_13068)){
var seq__12585_13069 = cljs.core.seq(children_13068);
var chunk__12587_13070 = null;
var count__12588_13071 = (0);
var i__12589_13072 = (0);
while(true){
if((i__12589_13072 < count__12588_13071)){
var child_13073 = chunk__12587_13070.cljs$core$IIndexed$_nth$arity$2(null,i__12589_13072);
if(cljs.core.truth_(child_13073)){
node.appendChild(child_13073);


var G__13074 = seq__12585_13069;
var G__13075 = chunk__12587_13070;
var G__13076 = count__12588_13071;
var G__13077 = (i__12589_13072 + (1));
seq__12585_13069 = G__13074;
chunk__12587_13070 = G__13075;
count__12588_13071 = G__13076;
i__12589_13072 = G__13077;
continue;
} else {
var G__13078 = seq__12585_13069;
var G__13079 = chunk__12587_13070;
var G__13080 = count__12588_13071;
var G__13081 = (i__12589_13072 + (1));
seq__12585_13069 = G__13078;
chunk__12587_13070 = G__13079;
count__12588_13071 = G__13080;
i__12589_13072 = G__13081;
continue;
}
} else {
var temp__5804__auto___13082__$1 = cljs.core.seq(seq__12585_13069);
if(temp__5804__auto___13082__$1){
var seq__12585_13083__$1 = temp__5804__auto___13082__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12585_13083__$1)){
var c__5525__auto___13084 = cljs.core.chunk_first(seq__12585_13083__$1);
var G__13085 = cljs.core.chunk_rest(seq__12585_13083__$1);
var G__13086 = c__5525__auto___13084;
var G__13087 = cljs.core.count(c__5525__auto___13084);
var G__13088 = (0);
seq__12585_13069 = G__13085;
chunk__12587_13070 = G__13086;
count__12588_13071 = G__13087;
i__12589_13072 = G__13088;
continue;
} else {
var child_13089 = cljs.core.first(seq__12585_13083__$1);
if(cljs.core.truth_(child_13089)){
node.appendChild(child_13089);


var G__13090 = cljs.core.next(seq__12585_13083__$1);
var G__13091 = null;
var G__13092 = (0);
var G__13093 = (0);
seq__12585_13069 = G__13090;
chunk__12587_13070 = G__13091;
count__12588_13071 = G__13092;
i__12589_13072 = G__13093;
continue;
} else {
var G__13094 = cljs.core.next(seq__12585_13083__$1);
var G__13095 = null;
var G__13096 = (0);
var G__13097 = (0);
seq__12585_13069 = G__13094;
chunk__12587_13070 = G__13095;
count__12588_13071 = G__13096;
i__12589_13072 = G__13097;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13068);
}
}


var G__13098 = cljs.core.next(seq__12541_13060__$1);
var G__13099 = null;
var G__13100 = (0);
var G__13101 = (0);
seq__12541_12999 = G__13098;
chunk__12543_13000 = G__13099;
count__12544_13001 = G__13100;
i__12545_13002 = G__13101;
continue;
} else {
var G__13102 = cljs.core.next(seq__12541_13060__$1);
var G__13103 = null;
var G__13104 = (0);
var G__13105 = (0);
seq__12541_12999 = G__13102;
chunk__12543_13000 = G__13103;
count__12544_13001 = G__13104;
i__12545_13002 = G__13105;
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
var len__5726__auto___13106 = arguments.length;
var i__5727__auto___13107 = (0);
while(true){
if((i__5727__auto___13107 < len__5726__auto___13106)){
args__5732__auto__.push((arguments[i__5727__auto___13107]));

var G__13108 = (i__5727__auto___13107 + (1));
i__5727__auto___13107 = G__13108;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12613){
var G__12614 = cljs.core.first(seq12613);
var seq12613__$1 = cljs.core.next(seq12613);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12614,seq12613__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
