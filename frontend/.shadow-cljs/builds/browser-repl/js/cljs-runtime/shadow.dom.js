goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_14905 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_14905(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_14910 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_14910(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__14022 = coll;
var G__14023 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__14022,G__14023) : shadow.dom.lazy_native_coll_seq.call(null,G__14022,G__14023));
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
var G__14036 = arguments.length;
switch (G__14036) {
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
var G__14038 = arguments.length;
switch (G__14038) {
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
var G__14040 = arguments.length;
switch (G__14040) {
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
var G__14042 = arguments.length;
switch (G__14042) {
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
var G__14081 = arguments.length;
switch (G__14081) {
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
var G__14085 = arguments.length;
switch (G__14085) {
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
}catch (e14089){if((e14089 instanceof Object)){
var e = e14089;
return console.log("didnt support attachEvent",el,e);
} else {
throw e14089;

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
var seq__14090 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__14091 = null;
var count__14092 = (0);
var i__14093 = (0);
while(true){
if((i__14093 < count__14092)){
var el = chunk__14091.cljs$core$IIndexed$_nth$arity$2(null,i__14093);
var handler_15098__$1 = ((function (seq__14090,chunk__14091,count__14092,i__14093,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__14090,chunk__14091,count__14092,i__14093,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15098__$1);


var G__15105 = seq__14090;
var G__15106 = chunk__14091;
var G__15107 = count__14092;
var G__15108 = (i__14093 + (1));
seq__14090 = G__15105;
chunk__14091 = G__15106;
count__14092 = G__15107;
i__14093 = G__15108;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14090);
if(temp__5804__auto__){
var seq__14090__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14090__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14090__$1);
var G__15113 = cljs.core.chunk_rest(seq__14090__$1);
var G__15114 = c__5525__auto__;
var G__15115 = cljs.core.count(c__5525__auto__);
var G__15116 = (0);
seq__14090 = G__15113;
chunk__14091 = G__15114;
count__14092 = G__15115;
i__14093 = G__15116;
continue;
} else {
var el = cljs.core.first(seq__14090__$1);
var handler_15120__$1 = ((function (seq__14090,chunk__14091,count__14092,i__14093,el,seq__14090__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__14090,chunk__14091,count__14092,i__14093,el,seq__14090__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15120__$1);


var G__15126 = cljs.core.next(seq__14090__$1);
var G__15128 = null;
var G__15129 = (0);
var G__15130 = (0);
seq__14090 = G__15126;
chunk__14091 = G__15128;
count__14092 = G__15129;
i__14093 = G__15130;
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
var G__14099 = arguments.length;
switch (G__14099) {
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
var seq__14103 = cljs.core.seq(events);
var chunk__14104 = null;
var count__14105 = (0);
var i__14106 = (0);
while(true){
if((i__14106 < count__14105)){
var vec__14128 = chunk__14104.cljs$core$IIndexed$_nth$arity$2(null,i__14106);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14128,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14128,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15146 = seq__14103;
var G__15147 = chunk__14104;
var G__15148 = count__14105;
var G__15149 = (i__14106 + (1));
seq__14103 = G__15146;
chunk__14104 = G__15147;
count__14105 = G__15148;
i__14106 = G__15149;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14103);
if(temp__5804__auto__){
var seq__14103__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14103__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14103__$1);
var G__15150 = cljs.core.chunk_rest(seq__14103__$1);
var G__15151 = c__5525__auto__;
var G__15152 = cljs.core.count(c__5525__auto__);
var G__15153 = (0);
seq__14103 = G__15150;
chunk__14104 = G__15151;
count__14105 = G__15152;
i__14106 = G__15153;
continue;
} else {
var vec__14144 = cljs.core.first(seq__14103__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14144,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14144,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15157 = cljs.core.next(seq__14103__$1);
var G__15158 = null;
var G__15159 = (0);
var G__15160 = (0);
seq__14103 = G__15157;
chunk__14104 = G__15158;
count__14105 = G__15159;
i__14106 = G__15160;
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
var seq__14153 = cljs.core.seq(styles);
var chunk__14154 = null;
var count__14155 = (0);
var i__14156 = (0);
while(true){
if((i__14156 < count__14155)){
var vec__14176 = chunk__14154.cljs$core$IIndexed$_nth$arity$2(null,i__14156);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14176,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14176,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15166 = seq__14153;
var G__15167 = chunk__14154;
var G__15168 = count__14155;
var G__15169 = (i__14156 + (1));
seq__14153 = G__15166;
chunk__14154 = G__15167;
count__14155 = G__15168;
i__14156 = G__15169;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14153);
if(temp__5804__auto__){
var seq__14153__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14153__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14153__$1);
var G__15176 = cljs.core.chunk_rest(seq__14153__$1);
var G__15177 = c__5525__auto__;
var G__15178 = cljs.core.count(c__5525__auto__);
var G__15179 = (0);
seq__14153 = G__15176;
chunk__14154 = G__15177;
count__14155 = G__15178;
i__14156 = G__15179;
continue;
} else {
var vec__14190 = cljs.core.first(seq__14153__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14190,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14190,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15202 = cljs.core.next(seq__14153__$1);
var G__15203 = null;
var G__15204 = (0);
var G__15205 = (0);
seq__14153 = G__15202;
chunk__14154 = G__15203;
count__14155 = G__15204;
i__14156 = G__15205;
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
var G__14214_15238 = key;
var G__14214_15239__$1 = (((G__14214_15238 instanceof cljs.core.Keyword))?G__14214_15238.fqn:null);
switch (G__14214_15239__$1) {
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
var ks_15261 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_15261,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_15261,"aria-");
}
})())){
el.setAttribute(ks_15261,value);
} else {
(el[ks_15261] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__14232){
var map__14233 = p__14232;
var map__14233__$1 = cljs.core.__destructure_map(map__14233);
var props = map__14233__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14233__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__14234 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14234,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14234,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14234,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__14237 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__14237,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__14237;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__14239 = arguments.length;
switch (G__14239) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__14251){
var vec__14252 = p__14251;
var seq__14253 = cljs.core.seq(vec__14252);
var first__14254 = cljs.core.first(seq__14253);
var seq__14253__$1 = cljs.core.next(seq__14253);
var nn = first__14254;
var first__14254__$1 = cljs.core.first(seq__14253__$1);
var seq__14253__$2 = cljs.core.next(seq__14253__$1);
var np = first__14254__$1;
var nc = seq__14253__$2;
var node = vec__14252;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14255 = nn;
var G__14256 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__14255,G__14256) : create_fn.call(null,G__14255,G__14256));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14257 = nn;
var G__14258 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__14257,G__14258) : create_fn.call(null,G__14257,G__14258));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__14263 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14263,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14263,(1),null);
var seq__14266_15293 = cljs.core.seq(node_children);
var chunk__14267_15294 = null;
var count__14268_15295 = (0);
var i__14269_15296 = (0);
while(true){
if((i__14269_15296 < count__14268_15295)){
var child_struct_15297 = chunk__14267_15294.cljs$core$IIndexed$_nth$arity$2(null,i__14269_15296);
var children_15298 = shadow.dom.dom_node(child_struct_15297);
if(cljs.core.seq_QMARK_(children_15298)){
var seq__14289_15299 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15298));
var chunk__14291_15300 = null;
var count__14292_15301 = (0);
var i__14293_15302 = (0);
while(true){
if((i__14293_15302 < count__14292_15301)){
var child_15303 = chunk__14291_15300.cljs$core$IIndexed$_nth$arity$2(null,i__14293_15302);
if(cljs.core.truth_(child_15303)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15303);


var G__15304 = seq__14289_15299;
var G__15305 = chunk__14291_15300;
var G__15306 = count__14292_15301;
var G__15307 = (i__14293_15302 + (1));
seq__14289_15299 = G__15304;
chunk__14291_15300 = G__15305;
count__14292_15301 = G__15306;
i__14293_15302 = G__15307;
continue;
} else {
var G__15308 = seq__14289_15299;
var G__15309 = chunk__14291_15300;
var G__15310 = count__14292_15301;
var G__15311 = (i__14293_15302 + (1));
seq__14289_15299 = G__15308;
chunk__14291_15300 = G__15309;
count__14292_15301 = G__15310;
i__14293_15302 = G__15311;
continue;
}
} else {
var temp__5804__auto___15312 = cljs.core.seq(seq__14289_15299);
if(temp__5804__auto___15312){
var seq__14289_15313__$1 = temp__5804__auto___15312;
if(cljs.core.chunked_seq_QMARK_(seq__14289_15313__$1)){
var c__5525__auto___15314 = cljs.core.chunk_first(seq__14289_15313__$1);
var G__15315 = cljs.core.chunk_rest(seq__14289_15313__$1);
var G__15316 = c__5525__auto___15314;
var G__15317 = cljs.core.count(c__5525__auto___15314);
var G__15318 = (0);
seq__14289_15299 = G__15315;
chunk__14291_15300 = G__15316;
count__14292_15301 = G__15317;
i__14293_15302 = G__15318;
continue;
} else {
var child_15319 = cljs.core.first(seq__14289_15313__$1);
if(cljs.core.truth_(child_15319)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15319);


var G__15324 = cljs.core.next(seq__14289_15313__$1);
var G__15325 = null;
var G__15326 = (0);
var G__15327 = (0);
seq__14289_15299 = G__15324;
chunk__14291_15300 = G__15325;
count__14292_15301 = G__15326;
i__14293_15302 = G__15327;
continue;
} else {
var G__15328 = cljs.core.next(seq__14289_15313__$1);
var G__15329 = null;
var G__15330 = (0);
var G__15331 = (0);
seq__14289_15299 = G__15328;
chunk__14291_15300 = G__15329;
count__14292_15301 = G__15330;
i__14293_15302 = G__15331;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15298);
}


var G__15333 = seq__14266_15293;
var G__15334 = chunk__14267_15294;
var G__15335 = count__14268_15295;
var G__15336 = (i__14269_15296 + (1));
seq__14266_15293 = G__15333;
chunk__14267_15294 = G__15334;
count__14268_15295 = G__15335;
i__14269_15296 = G__15336;
continue;
} else {
var temp__5804__auto___15341 = cljs.core.seq(seq__14266_15293);
if(temp__5804__auto___15341){
var seq__14266_15343__$1 = temp__5804__auto___15341;
if(cljs.core.chunked_seq_QMARK_(seq__14266_15343__$1)){
var c__5525__auto___15344 = cljs.core.chunk_first(seq__14266_15343__$1);
var G__15345 = cljs.core.chunk_rest(seq__14266_15343__$1);
var G__15346 = c__5525__auto___15344;
var G__15347 = cljs.core.count(c__5525__auto___15344);
var G__15348 = (0);
seq__14266_15293 = G__15345;
chunk__14267_15294 = G__15346;
count__14268_15295 = G__15347;
i__14269_15296 = G__15348;
continue;
} else {
var child_struct_15350 = cljs.core.first(seq__14266_15343__$1);
var children_15351 = shadow.dom.dom_node(child_struct_15350);
if(cljs.core.seq_QMARK_(children_15351)){
var seq__14295_15352 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15351));
var chunk__14297_15353 = null;
var count__14298_15354 = (0);
var i__14299_15355 = (0);
while(true){
if((i__14299_15355 < count__14298_15354)){
var child_15358 = chunk__14297_15353.cljs$core$IIndexed$_nth$arity$2(null,i__14299_15355);
if(cljs.core.truth_(child_15358)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15358);


var G__15363 = seq__14295_15352;
var G__15364 = chunk__14297_15353;
var G__15365 = count__14298_15354;
var G__15366 = (i__14299_15355 + (1));
seq__14295_15352 = G__15363;
chunk__14297_15353 = G__15364;
count__14298_15354 = G__15365;
i__14299_15355 = G__15366;
continue;
} else {
var G__15367 = seq__14295_15352;
var G__15368 = chunk__14297_15353;
var G__15369 = count__14298_15354;
var G__15370 = (i__14299_15355 + (1));
seq__14295_15352 = G__15367;
chunk__14297_15353 = G__15368;
count__14298_15354 = G__15369;
i__14299_15355 = G__15370;
continue;
}
} else {
var temp__5804__auto___15371__$1 = cljs.core.seq(seq__14295_15352);
if(temp__5804__auto___15371__$1){
var seq__14295_15372__$1 = temp__5804__auto___15371__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14295_15372__$1)){
var c__5525__auto___15374 = cljs.core.chunk_first(seq__14295_15372__$1);
var G__15375 = cljs.core.chunk_rest(seq__14295_15372__$1);
var G__15376 = c__5525__auto___15374;
var G__15377 = cljs.core.count(c__5525__auto___15374);
var G__15378 = (0);
seq__14295_15352 = G__15375;
chunk__14297_15353 = G__15376;
count__14298_15354 = G__15377;
i__14299_15355 = G__15378;
continue;
} else {
var child_15380 = cljs.core.first(seq__14295_15372__$1);
if(cljs.core.truth_(child_15380)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15380);


var G__15381 = cljs.core.next(seq__14295_15372__$1);
var G__15382 = null;
var G__15383 = (0);
var G__15384 = (0);
seq__14295_15352 = G__15381;
chunk__14297_15353 = G__15382;
count__14298_15354 = G__15383;
i__14299_15355 = G__15384;
continue;
} else {
var G__15390 = cljs.core.next(seq__14295_15372__$1);
var G__15391 = null;
var G__15392 = (0);
var G__15393 = (0);
seq__14295_15352 = G__15390;
chunk__14297_15353 = G__15391;
count__14298_15354 = G__15392;
i__14299_15355 = G__15393;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15351);
}


var G__15394 = cljs.core.next(seq__14266_15343__$1);
var G__15395 = null;
var G__15397 = (0);
var G__15398 = (0);
seq__14266_15293 = G__15394;
chunk__14267_15294 = G__15395;
count__14268_15295 = G__15397;
i__14269_15296 = G__15398;
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
var seq__14307 = cljs.core.seq(node);
var chunk__14308 = null;
var count__14309 = (0);
var i__14310 = (0);
while(true){
if((i__14310 < count__14309)){
var n = chunk__14308.cljs$core$IIndexed$_nth$arity$2(null,i__14310);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__15508 = seq__14307;
var G__15511 = chunk__14308;
var G__15512 = count__14309;
var G__15513 = (i__14310 + (1));
seq__14307 = G__15508;
chunk__14308 = G__15511;
count__14309 = G__15512;
i__14310 = G__15513;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14307);
if(temp__5804__auto__){
var seq__14307__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14307__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14307__$1);
var G__15557 = cljs.core.chunk_rest(seq__14307__$1);
var G__15558 = c__5525__auto__;
var G__15559 = cljs.core.count(c__5525__auto__);
var G__15560 = (0);
seq__14307 = G__15557;
chunk__14308 = G__15558;
count__14309 = G__15559;
i__14310 = G__15560;
continue;
} else {
var n = cljs.core.first(seq__14307__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__15610 = cljs.core.next(seq__14307__$1);
var G__15611 = null;
var G__15612 = (0);
var G__15613 = (0);
seq__14307 = G__15610;
chunk__14308 = G__15611;
count__14309 = G__15612;
i__14310 = G__15613;
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
var G__14312 = arguments.length;
switch (G__14312) {
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
var G__14315 = arguments.length;
switch (G__14315) {
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
var G__14317 = arguments.length;
switch (G__14317) {
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
var len__5726__auto___15644 = arguments.length;
var i__5727__auto___15645 = (0);
while(true){
if((i__5727__auto___15645 < len__5726__auto___15644)){
args__5732__auto__.push((arguments[i__5727__auto___15645]));

var G__15647 = (i__5727__auto___15645 + (1));
i__5727__auto___15645 = G__15647;
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
var seq__14321_15650 = cljs.core.seq(nodes);
var chunk__14322_15651 = null;
var count__14323_15652 = (0);
var i__14324_15653 = (0);
while(true){
if((i__14324_15653 < count__14323_15652)){
var node_15655 = chunk__14322_15651.cljs$core$IIndexed$_nth$arity$2(null,i__14324_15653);
fragment.appendChild(shadow.dom._to_dom(node_15655));


var G__15659 = seq__14321_15650;
var G__15660 = chunk__14322_15651;
var G__15661 = count__14323_15652;
var G__15662 = (i__14324_15653 + (1));
seq__14321_15650 = G__15659;
chunk__14322_15651 = G__15660;
count__14323_15652 = G__15661;
i__14324_15653 = G__15662;
continue;
} else {
var temp__5804__auto___15664 = cljs.core.seq(seq__14321_15650);
if(temp__5804__auto___15664){
var seq__14321_15666__$1 = temp__5804__auto___15664;
if(cljs.core.chunked_seq_QMARK_(seq__14321_15666__$1)){
var c__5525__auto___15668 = cljs.core.chunk_first(seq__14321_15666__$1);
var G__15670 = cljs.core.chunk_rest(seq__14321_15666__$1);
var G__15671 = c__5525__auto___15668;
var G__15672 = cljs.core.count(c__5525__auto___15668);
var G__15673 = (0);
seq__14321_15650 = G__15670;
chunk__14322_15651 = G__15671;
count__14323_15652 = G__15672;
i__14324_15653 = G__15673;
continue;
} else {
var node_15675 = cljs.core.first(seq__14321_15666__$1);
fragment.appendChild(shadow.dom._to_dom(node_15675));


var G__15678 = cljs.core.next(seq__14321_15666__$1);
var G__15679 = null;
var G__15680 = (0);
var G__15681 = (0);
seq__14321_15650 = G__15678;
chunk__14322_15651 = G__15679;
count__14323_15652 = G__15680;
i__14324_15653 = G__15681;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq14320){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14320));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__14329_15688 = cljs.core.seq(scripts);
var chunk__14330_15689 = null;
var count__14331_15690 = (0);
var i__14332_15691 = (0);
while(true){
if((i__14332_15691 < count__14331_15690)){
var vec__14339_15694 = chunk__14330_15689.cljs$core$IIndexed$_nth$arity$2(null,i__14332_15691);
var script_tag_15695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14339_15694,(0),null);
var script_body_15696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14339_15694,(1),null);
eval(script_body_15696);


var G__15701 = seq__14329_15688;
var G__15702 = chunk__14330_15689;
var G__15703 = count__14331_15690;
var G__15704 = (i__14332_15691 + (1));
seq__14329_15688 = G__15701;
chunk__14330_15689 = G__15702;
count__14331_15690 = G__15703;
i__14332_15691 = G__15704;
continue;
} else {
var temp__5804__auto___15707 = cljs.core.seq(seq__14329_15688);
if(temp__5804__auto___15707){
var seq__14329_15708__$1 = temp__5804__auto___15707;
if(cljs.core.chunked_seq_QMARK_(seq__14329_15708__$1)){
var c__5525__auto___15709 = cljs.core.chunk_first(seq__14329_15708__$1);
var G__15711 = cljs.core.chunk_rest(seq__14329_15708__$1);
var G__15712 = c__5525__auto___15709;
var G__15713 = cljs.core.count(c__5525__auto___15709);
var G__15714 = (0);
seq__14329_15688 = G__15711;
chunk__14330_15689 = G__15712;
count__14331_15690 = G__15713;
i__14332_15691 = G__15714;
continue;
} else {
var vec__14342_15715 = cljs.core.first(seq__14329_15708__$1);
var script_tag_15716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14342_15715,(0),null);
var script_body_15717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14342_15715,(1),null);
eval(script_body_15717);


var G__15719 = cljs.core.next(seq__14329_15708__$1);
var G__15720 = null;
var G__15721 = (0);
var G__15722 = (0);
seq__14329_15688 = G__15719;
chunk__14330_15689 = G__15720;
count__14331_15690 = G__15721;
i__14332_15691 = G__15722;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__14345){
var vec__14346 = p__14345;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14346,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14346,(1),null);
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
var G__14350 = arguments.length;
switch (G__14350) {
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
var seq__14351 = cljs.core.seq(style_keys);
var chunk__14352 = null;
var count__14353 = (0);
var i__14354 = (0);
while(true){
if((i__14354 < count__14353)){
var it = chunk__14352.cljs$core$IIndexed$_nth$arity$2(null,i__14354);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__15753 = seq__14351;
var G__15754 = chunk__14352;
var G__15755 = count__14353;
var G__15756 = (i__14354 + (1));
seq__14351 = G__15753;
chunk__14352 = G__15754;
count__14353 = G__15755;
i__14354 = G__15756;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14351);
if(temp__5804__auto__){
var seq__14351__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14351__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14351__$1);
var G__15757 = cljs.core.chunk_rest(seq__14351__$1);
var G__15758 = c__5525__auto__;
var G__15759 = cljs.core.count(c__5525__auto__);
var G__15760 = (0);
seq__14351 = G__15757;
chunk__14352 = G__15758;
count__14353 = G__15759;
i__14354 = G__15760;
continue;
} else {
var it = cljs.core.first(seq__14351__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__15762 = cljs.core.next(seq__14351__$1);
var G__15763 = null;
var G__15764 = (0);
var G__15765 = (0);
seq__14351 = G__15762;
chunk__14352 = G__15763;
count__14353 = G__15764;
i__14354 = G__15765;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k14361,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__14537 = k14361;
var G__14537__$1 = (((G__14537 instanceof cljs.core.Keyword))?G__14537.fqn:null);
switch (G__14537__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14361,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__14540){
var vec__14541 = p__14540;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14541,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14541,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14360){
var self__ = this;
var G__14360__$1 = this;
return (new cljs.core.RecordIter((0),G__14360__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14362,other14363){
var self__ = this;
var this14362__$1 = this;
return (((!((other14363 == null)))) && ((((this14362__$1.constructor === other14363.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14362__$1.x,other14363.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14362__$1.y,other14363.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14362__$1.__extmap,other14363.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k14361){
var self__ = this;
var this__5307__auto____$1 = this;
var G__14548 = k14361;
var G__14548__$1 = (((G__14548 instanceof cljs.core.Keyword))?G__14548.fqn:null);
switch (G__14548__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k14361);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__14360){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__14552 = cljs.core.keyword_identical_QMARK_;
var expr__14553 = k__5309__auto__;
if(cljs.core.truth_((pred__14552.cljs$core$IFn$_invoke$arity$2 ? pred__14552.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__14553) : pred__14552.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__14553)))){
return (new shadow.dom.Coordinate(G__14360,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14552.cljs$core$IFn$_invoke$arity$2 ? pred__14552.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__14553) : pred__14552.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__14553)))){
return (new shadow.dom.Coordinate(self__.x,G__14360,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__14360),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__14360){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__14360,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__14536){
var extmap__5342__auto__ = (function (){var G__14589 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14536,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__14536)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14589);
} else {
return G__14589;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__14536),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__14536),null,cljs.core.not_empty(extmap__5342__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k14591,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__14597 = k14591;
var G__14597__$1 = (((G__14597 instanceof cljs.core.Keyword))?G__14597.fqn:null);
switch (G__14597__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14591,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__14598){
var vec__14599 = p__14598;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14599,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14599,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14590){
var self__ = this;
var G__14590__$1 = this;
return (new cljs.core.RecordIter((0),G__14590__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14592,other14593){
var self__ = this;
var this14592__$1 = this;
return (((!((other14593 == null)))) && ((((this14592__$1.constructor === other14593.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14592__$1.w,other14593.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14592__$1.h,other14593.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14592__$1.__extmap,other14593.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k14591){
var self__ = this;
var this__5307__auto____$1 = this;
var G__14606 = k14591;
var G__14606__$1 = (((G__14606 instanceof cljs.core.Keyword))?G__14606.fqn:null);
switch (G__14606__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k14591);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__14590){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__14614 = cljs.core.keyword_identical_QMARK_;
var expr__14615 = k__5309__auto__;
if(cljs.core.truth_((pred__14614.cljs$core$IFn$_invoke$arity$2 ? pred__14614.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__14615) : pred__14614.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__14615)))){
return (new shadow.dom.Size(G__14590,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14614.cljs$core$IFn$_invoke$arity$2 ? pred__14614.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__14615) : pred__14614.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__14615)))){
return (new shadow.dom.Size(self__.w,G__14590,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__14590),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__14590){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__14590,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__14595){
var extmap__5342__auto__ = (function (){var G__14628 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14595,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__14595)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14628);
} else {
return G__14628;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__14595),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__14595),null,cljs.core.not_empty(extmap__5342__auto__),null));
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
var G__15961 = (i + (1));
var G__15962 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__15961;
ret = G__15962;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14651){
var vec__14652 = p__14651;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14652,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14652,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__14656 = arguments.length;
switch (G__14656) {
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
var G__15992 = ps;
var G__15993 = (i + (1));
el__$1 = G__15992;
i = G__15993;
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
var vec__14682 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14682,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14682,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14682,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__14686_16006 = cljs.core.seq(props);
var chunk__14687_16007 = null;
var count__14688_16008 = (0);
var i__14689_16009 = (0);
while(true){
if((i__14689_16009 < count__14688_16008)){
var vec__14718_16012 = chunk__14687_16007.cljs$core$IIndexed$_nth$arity$2(null,i__14689_16009);
var k_16013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14718_16012,(0),null);
var v_16014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14718_16012,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_16013);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16013),v_16014);


var G__16015 = seq__14686_16006;
var G__16016 = chunk__14687_16007;
var G__16017 = count__14688_16008;
var G__16018 = (i__14689_16009 + (1));
seq__14686_16006 = G__16015;
chunk__14687_16007 = G__16016;
count__14688_16008 = G__16017;
i__14689_16009 = G__16018;
continue;
} else {
var temp__5804__auto___16019 = cljs.core.seq(seq__14686_16006);
if(temp__5804__auto___16019){
var seq__14686_16020__$1 = temp__5804__auto___16019;
if(cljs.core.chunked_seq_QMARK_(seq__14686_16020__$1)){
var c__5525__auto___16021 = cljs.core.chunk_first(seq__14686_16020__$1);
var G__16022 = cljs.core.chunk_rest(seq__14686_16020__$1);
var G__16023 = c__5525__auto___16021;
var G__16024 = cljs.core.count(c__5525__auto___16021);
var G__16025 = (0);
seq__14686_16006 = G__16022;
chunk__14687_16007 = G__16023;
count__14688_16008 = G__16024;
i__14689_16009 = G__16025;
continue;
} else {
var vec__14729_16026 = cljs.core.first(seq__14686_16020__$1);
var k_16027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14729_16026,(0),null);
var v_16028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14729_16026,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_16027);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16027),v_16028);


var G__16029 = cljs.core.next(seq__14686_16020__$1);
var G__16030 = null;
var G__16031 = (0);
var G__16032 = (0);
seq__14686_16006 = G__16029;
chunk__14687_16007 = G__16030;
count__14688_16008 = G__16031;
i__14689_16009 = G__16032;
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
var vec__14772 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14772,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14772,(1),null);
var seq__14775_16034 = cljs.core.seq(node_children);
var chunk__14777_16035 = null;
var count__14778_16036 = (0);
var i__14779_16037 = (0);
while(true){
if((i__14779_16037 < count__14778_16036)){
var child_struct_16038 = chunk__14777_16035.cljs$core$IIndexed$_nth$arity$2(null,i__14779_16037);
if((!((child_struct_16038 == null)))){
if(typeof child_struct_16038 === 'string'){
var text_16040 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16040),child_struct_16038].join(''));
} else {
var children_16041 = shadow.dom.svg_node(child_struct_16038);
if(cljs.core.seq_QMARK_(children_16041)){
var seq__14813_16042 = cljs.core.seq(children_16041);
var chunk__14815_16043 = null;
var count__14816_16044 = (0);
var i__14817_16045 = (0);
while(true){
if((i__14817_16045 < count__14816_16044)){
var child_16047 = chunk__14815_16043.cljs$core$IIndexed$_nth$arity$2(null,i__14817_16045);
if(cljs.core.truth_(child_16047)){
node.appendChild(child_16047);


var G__16050 = seq__14813_16042;
var G__16051 = chunk__14815_16043;
var G__16052 = count__14816_16044;
var G__16053 = (i__14817_16045 + (1));
seq__14813_16042 = G__16050;
chunk__14815_16043 = G__16051;
count__14816_16044 = G__16052;
i__14817_16045 = G__16053;
continue;
} else {
var G__16055 = seq__14813_16042;
var G__16056 = chunk__14815_16043;
var G__16057 = count__14816_16044;
var G__16058 = (i__14817_16045 + (1));
seq__14813_16042 = G__16055;
chunk__14815_16043 = G__16056;
count__14816_16044 = G__16057;
i__14817_16045 = G__16058;
continue;
}
} else {
var temp__5804__auto___16066 = cljs.core.seq(seq__14813_16042);
if(temp__5804__auto___16066){
var seq__14813_16068__$1 = temp__5804__auto___16066;
if(cljs.core.chunked_seq_QMARK_(seq__14813_16068__$1)){
var c__5525__auto___16070 = cljs.core.chunk_first(seq__14813_16068__$1);
var G__16071 = cljs.core.chunk_rest(seq__14813_16068__$1);
var G__16072 = c__5525__auto___16070;
var G__16073 = cljs.core.count(c__5525__auto___16070);
var G__16074 = (0);
seq__14813_16042 = G__16071;
chunk__14815_16043 = G__16072;
count__14816_16044 = G__16073;
i__14817_16045 = G__16074;
continue;
} else {
var child_16075 = cljs.core.first(seq__14813_16068__$1);
if(cljs.core.truth_(child_16075)){
node.appendChild(child_16075);


var G__16077 = cljs.core.next(seq__14813_16068__$1);
var G__16078 = null;
var G__16079 = (0);
var G__16080 = (0);
seq__14813_16042 = G__16077;
chunk__14815_16043 = G__16078;
count__14816_16044 = G__16079;
i__14817_16045 = G__16080;
continue;
} else {
var G__16083 = cljs.core.next(seq__14813_16068__$1);
var G__16084 = null;
var G__16085 = (0);
var G__16086 = (0);
seq__14813_16042 = G__16083;
chunk__14815_16043 = G__16084;
count__14816_16044 = G__16085;
i__14817_16045 = G__16086;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16041);
}
}


var G__16088 = seq__14775_16034;
var G__16089 = chunk__14777_16035;
var G__16090 = count__14778_16036;
var G__16091 = (i__14779_16037 + (1));
seq__14775_16034 = G__16088;
chunk__14777_16035 = G__16089;
count__14778_16036 = G__16090;
i__14779_16037 = G__16091;
continue;
} else {
var G__16092 = seq__14775_16034;
var G__16094 = chunk__14777_16035;
var G__16095 = count__14778_16036;
var G__16096 = (i__14779_16037 + (1));
seq__14775_16034 = G__16092;
chunk__14777_16035 = G__16094;
count__14778_16036 = G__16095;
i__14779_16037 = G__16096;
continue;
}
} else {
var temp__5804__auto___16097 = cljs.core.seq(seq__14775_16034);
if(temp__5804__auto___16097){
var seq__14775_16098__$1 = temp__5804__auto___16097;
if(cljs.core.chunked_seq_QMARK_(seq__14775_16098__$1)){
var c__5525__auto___16099 = cljs.core.chunk_first(seq__14775_16098__$1);
var G__16100 = cljs.core.chunk_rest(seq__14775_16098__$1);
var G__16101 = c__5525__auto___16099;
var G__16102 = cljs.core.count(c__5525__auto___16099);
var G__16103 = (0);
seq__14775_16034 = G__16100;
chunk__14777_16035 = G__16101;
count__14778_16036 = G__16102;
i__14779_16037 = G__16103;
continue;
} else {
var child_struct_16104 = cljs.core.first(seq__14775_16098__$1);
if((!((child_struct_16104 == null)))){
if(typeof child_struct_16104 === 'string'){
var text_16106 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16106),child_struct_16104].join(''));
} else {
var children_16107 = shadow.dom.svg_node(child_struct_16104);
if(cljs.core.seq_QMARK_(children_16107)){
var seq__14843_16108 = cljs.core.seq(children_16107);
var chunk__14845_16109 = null;
var count__14846_16110 = (0);
var i__14847_16111 = (0);
while(true){
if((i__14847_16111 < count__14846_16110)){
var child_16114 = chunk__14845_16109.cljs$core$IIndexed$_nth$arity$2(null,i__14847_16111);
if(cljs.core.truth_(child_16114)){
node.appendChild(child_16114);


var G__16115 = seq__14843_16108;
var G__16116 = chunk__14845_16109;
var G__16117 = count__14846_16110;
var G__16118 = (i__14847_16111 + (1));
seq__14843_16108 = G__16115;
chunk__14845_16109 = G__16116;
count__14846_16110 = G__16117;
i__14847_16111 = G__16118;
continue;
} else {
var G__16119 = seq__14843_16108;
var G__16120 = chunk__14845_16109;
var G__16121 = count__14846_16110;
var G__16122 = (i__14847_16111 + (1));
seq__14843_16108 = G__16119;
chunk__14845_16109 = G__16120;
count__14846_16110 = G__16121;
i__14847_16111 = G__16122;
continue;
}
} else {
var temp__5804__auto___16125__$1 = cljs.core.seq(seq__14843_16108);
if(temp__5804__auto___16125__$1){
var seq__14843_16126__$1 = temp__5804__auto___16125__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14843_16126__$1)){
var c__5525__auto___16127 = cljs.core.chunk_first(seq__14843_16126__$1);
var G__16129 = cljs.core.chunk_rest(seq__14843_16126__$1);
var G__16130 = c__5525__auto___16127;
var G__16131 = cljs.core.count(c__5525__auto___16127);
var G__16132 = (0);
seq__14843_16108 = G__16129;
chunk__14845_16109 = G__16130;
count__14846_16110 = G__16131;
i__14847_16111 = G__16132;
continue;
} else {
var child_16134 = cljs.core.first(seq__14843_16126__$1);
if(cljs.core.truth_(child_16134)){
node.appendChild(child_16134);


var G__16225 = cljs.core.next(seq__14843_16126__$1);
var G__16226 = null;
var G__16227 = (0);
var G__16228 = (0);
seq__14843_16108 = G__16225;
chunk__14845_16109 = G__16226;
count__14846_16110 = G__16227;
i__14847_16111 = G__16228;
continue;
} else {
var G__16229 = cljs.core.next(seq__14843_16126__$1);
var G__16230 = null;
var G__16231 = (0);
var G__16232 = (0);
seq__14843_16108 = G__16229;
chunk__14845_16109 = G__16230;
count__14846_16110 = G__16231;
i__14847_16111 = G__16232;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16107);
}
}


var G__16233 = cljs.core.next(seq__14775_16098__$1);
var G__16234 = null;
var G__16235 = (0);
var G__16236 = (0);
seq__14775_16034 = G__16233;
chunk__14777_16035 = G__16234;
count__14778_16036 = G__16235;
i__14779_16037 = G__16236;
continue;
} else {
var G__16237 = cljs.core.next(seq__14775_16098__$1);
var G__16238 = null;
var G__16239 = (0);
var G__16240 = (0);
seq__14775_16034 = G__16237;
chunk__14777_16035 = G__16238;
count__14778_16036 = G__16239;
i__14779_16037 = G__16240;
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
var len__5726__auto___16272 = arguments.length;
var i__5727__auto___16273 = (0);
while(true){
if((i__5727__auto___16273 < len__5726__auto___16272)){
args__5732__auto__.push((arguments[i__5727__auto___16273]));

var G__16277 = (i__5727__auto___16273 + (1));
i__5727__auto___16273 = G__16277;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq14887){
var G__14888 = cljs.core.first(seq14887);
var seq14887__$1 = cljs.core.next(seq14887);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14888,seq14887__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
