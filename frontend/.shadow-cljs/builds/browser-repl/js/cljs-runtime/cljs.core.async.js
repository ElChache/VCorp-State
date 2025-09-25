goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14468 = (function (f,blockable,meta14469){
this.f = f;
this.blockable = blockable;
this.meta14469 = meta14469;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14470,meta14469__$1){
var self__ = this;
var _14470__$1 = this;
return (new cljs.core.async.t_cljs$core$async14468(self__.f,self__.blockable,meta14469__$1));
}));

(cljs.core.async.t_cljs$core$async14468.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14470){
var self__ = this;
var _14470__$1 = this;
return self__.meta14469;
}));

(cljs.core.async.t_cljs$core$async14468.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14468.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14468.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14468.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14468.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14469","meta14469",-1812282693,null)], null);
}));

(cljs.core.async.t_cljs$core$async14468.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14468.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14468");

(cljs.core.async.t_cljs$core$async14468.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14468");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14468.
 */
cljs.core.async.__GT_t_cljs$core$async14468 = (function cljs$core$async$__GT_t_cljs$core$async14468(f,blockable,meta14469){
return (new cljs.core.async.t_cljs$core$async14468(f,blockable,meta14469));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14464 = arguments.length;
switch (G__14464) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14468(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14481 = arguments.length;
switch (G__14481) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14483 = arguments.length;
switch (G__14483) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14488 = arguments.length;
switch (G__14488) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17674 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17674) : fn1.call(null,val_17674));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17674) : fn1.call(null,val_17674));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14494 = arguments.length;
switch (G__14494) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___17690 = n;
var x_17691 = (0);
while(true){
if((x_17691 < n__5593__auto___17690)){
(a[x_17691] = x_17691);

var G__17692 = (x_17691 + (1));
x_17691 = G__17692;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14513 = (function (flag,meta14514){
this.flag = flag;
this.meta14514 = meta14514;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14515,meta14514__$1){
var self__ = this;
var _14515__$1 = this;
return (new cljs.core.async.t_cljs$core$async14513(self__.flag,meta14514__$1));
}));

(cljs.core.async.t_cljs$core$async14513.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14515){
var self__ = this;
var _14515__$1 = this;
return self__.meta14514;
}));

(cljs.core.async.t_cljs$core$async14513.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14513.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14513.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14513.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14513.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14514","meta14514",-521660204,null)], null);
}));

(cljs.core.async.t_cljs$core$async14513.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14513.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14513");

(cljs.core.async.t_cljs$core$async14513.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14513");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14513.
 */
cljs.core.async.__GT_t_cljs$core$async14513 = (function cljs$core$async$__GT_t_cljs$core$async14513(flag,meta14514){
return (new cljs.core.async.t_cljs$core$async14513(flag,meta14514));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14513(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14517 = (function (flag,cb,meta14518){
this.flag = flag;
this.cb = cb;
this.meta14518 = meta14518;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14519,meta14518__$1){
var self__ = this;
var _14519__$1 = this;
return (new cljs.core.async.t_cljs$core$async14517(self__.flag,self__.cb,meta14518__$1));
}));

(cljs.core.async.t_cljs$core$async14517.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14519){
var self__ = this;
var _14519__$1 = this;
return self__.meta14518;
}));

(cljs.core.async.t_cljs$core$async14517.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14517.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14517.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14517.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14517.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14518","meta14518",-443354657,null)], null);
}));

(cljs.core.async.t_cljs$core$async14517.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14517.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14517");

(cljs.core.async.t_cljs$core$async14517.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14517");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14517.
 */
cljs.core.async.__GT_t_cljs$core$async14517 = (function cljs$core$async$__GT_t_cljs$core$async14517(flag,cb,meta14518){
return (new cljs.core.async.t_cljs$core$async14517(flag,cb,meta14518));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14517(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14522_SHARP_){
var G__14524 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14522_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14524) : fret.call(null,G__14524));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14523_SHARP_){
var G__14525 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14523_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14525) : fret.call(null,G__14525));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17699 = (i + (1));
i = G__17699;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17703 = arguments.length;
var i__5727__auto___17704 = (0);
while(true){
if((i__5727__auto___17704 < len__5726__auto___17703)){
args__5732__auto__.push((arguments[i__5727__auto___17704]));

var G__17705 = (i__5727__auto___17704 + (1));
i__5727__auto___17704 = G__17705;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14544){
var map__14545 = p__14544;
var map__14545__$1 = cljs.core.__destructure_map(map__14545);
var opts = map__14545__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14538){
var G__14539 = cljs.core.first(seq14538);
var seq14538__$1 = cljs.core.next(seq14538);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14539,seq14538__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14560 = arguments.length;
switch (G__14560) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__11659__auto___17719 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11660__auto__ = (function (){var switch__11495__auto__ = (function (state_14587){
var state_val_14588 = (state_14587[(1)]);
if((state_val_14588 === (7))){
var inst_14583 = (state_14587[(2)]);
var state_14587__$1 = state_14587;
var statearr_14594_17720 = state_14587__$1;
(statearr_14594_17720[(2)] = inst_14583);

(statearr_14594_17720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14588 === (1))){
var state_14587__$1 = state_14587;
var statearr_14596_17722 = state_14587__$1;
(statearr_14596_17722[(2)] = null);

(statearr_14596_17722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14588 === (4))){
var inst_14566 = (state_14587[(7)]);
var inst_14566__$1 = (state_14587[(2)]);
var inst_14567 = (inst_14566__$1 == null);
var state_14587__$1 = (function (){var statearr_14602 = state_14587;
(statearr_14602[(7)] = inst_14566__$1);

return statearr_14602;
})();
if(cljs.core.truth_(inst_14567)){
var statearr_14603_17733 = state_14587__$1;
(statearr_14603_17733[(1)] = (5));

} else {
var statearr_14604_17735 = state_14587__$1;
(statearr_14604_17735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14588 === (13))){
var state_14587__$1 = state_14587;
var statearr_14605_17738 = state_14587__$1;
(statearr_14605_17738[(2)] = null);

(statearr_14605_17738[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14588 === (6))){
var inst_14566 = (state_14587[(7)]);
var state_14587__$1 = state_14587;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14587__$1,(11),to,inst_14566);
} else {
if((state_val_14588 === (3))){
var inst_14585 = (state_14587[(2)]);
var state_14587__$1 = state_14587;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14587__$1,inst_14585);
} else {
if((state_val_14588 === (12))){
var state_14587__$1 = state_14587;
var statearr_14607_17749 = state_14587__$1;
(statearr_14607_17749[(2)] = null);

(statearr_14607_17749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14588 === (2))){
var state_14587__$1 = state_14587;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14587__$1,(4),from);
} else {
if((state_val_14588 === (11))){
var inst_14576 = (state_14587[(2)]);
var state_14587__$1 = state_14587;
if(cljs.core.truth_(inst_14576)){
var statearr_14608_17752 = state_14587__$1;
(statearr_14608_17752[(1)] = (12));

} else {
var statearr_14609_17753 = state_14587__$1;
(statearr_14609_17753[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14588 === (9))){
var state_14587__$1 = state_14587;
var statearr_14610_17769 = state_14587__$1;
(statearr_14610_17769[(2)] = null);

(statearr_14610_17769[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14588 === (5))){
var state_14587__$1 = state_14587;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14611_17778 = state_14587__$1;
(statearr_14611_17778[(1)] = (8));

} else {
var statearr_14612_17782 = state_14587__$1;
(statearr_14612_17782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14588 === (14))){
var inst_14581 = (state_14587[(2)]);
var state_14587__$1 = state_14587;
var statearr_14613_17783 = state_14587__$1;
(statearr_14613_17783[(2)] = inst_14581);

(statearr_14613_17783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14588 === (10))){
var inst_14573 = (state_14587[(2)]);
var state_14587__$1 = state_14587;
var statearr_14617_17794 = state_14587__$1;
(statearr_14617_17794[(2)] = inst_14573);

(statearr_14617_17794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14588 === (8))){
var inst_14570 = cljs.core.async.close_BANG_(to);
var state_14587__$1 = state_14587;
var statearr_14618_17799 = state_14587__$1;
(statearr_14618_17799[(2)] = inst_14570);

(statearr_14618_17799[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11496__auto__ = null;
var cljs$core$async$state_machine__11496__auto____0 = (function (){
var statearr_14619 = [null,null,null,null,null,null,null,null];
(statearr_14619[(0)] = cljs$core$async$state_machine__11496__auto__);

(statearr_14619[(1)] = (1));

return statearr_14619;
});
var cljs$core$async$state_machine__11496__auto____1 = (function (state_14587){
while(true){
var ret_value__11497__auto__ = (function (){try{while(true){
var result__11498__auto__ = switch__11495__auto__(state_14587);
if(cljs.core.keyword_identical_QMARK_(result__11498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11498__auto__;
}
break;
}
}catch (e14620){var ex__11499__auto__ = e14620;
var statearr_14621_17807 = state_14587;
(statearr_14621_17807[(2)] = ex__11499__auto__);


if(cljs.core.seq((state_14587[(4)]))){
var statearr_14622_17808 = state_14587;
(statearr_14622_17808[(1)] = cljs.core.first((state_14587[(4)])));

} else {
throw ex__11499__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17812 = state_14587;
state_14587 = G__17812;
continue;
} else {
return ret_value__11497__auto__;
}
break;
}
});
cljs$core$async$state_machine__11496__auto__ = function(state_14587){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11496__auto____1.call(this,state_14587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11496__auto____0;
cljs$core$async$state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11496__auto____1;
return cljs$core$async$state_machine__11496__auto__;
})()
})();
var state__11661__auto__ = (function (){var statearr_14623 = f__11660__auto__();
(statearr_14623[(6)] = c__11659__auto___17719);

return statearr_14623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11661__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14624){
var vec__14625 = p__14624;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14625,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14625,(1),null);
var job = vec__14625;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__11659__auto___17835 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11660__auto__ = (function (){var switch__11495__auto__ = (function (state_14633){
var state_val_14634 = (state_14633[(1)]);
if((state_val_14634 === (1))){
var state_14633__$1 = state_14633;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14633__$1,(2),res,v);
} else {
if((state_val_14634 === (2))){
var inst_14630 = (state_14633[(2)]);
var inst_14631 = cljs.core.async.close_BANG_(res);
var state_14633__$1 = (function (){var statearr_14635 = state_14633;
(statearr_14635[(7)] = inst_14630);

return statearr_14635;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14633__$1,inst_14631);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11496__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11496__auto____0 = (function (){
var statearr_14636 = [null,null,null,null,null,null,null,null];
(statearr_14636[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11496__auto__);

(statearr_14636[(1)] = (1));

return statearr_14636;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11496__auto____1 = (function (state_14633){
while(true){
var ret_value__11497__auto__ = (function (){try{while(true){
var result__11498__auto__ = switch__11495__auto__(state_14633);
if(cljs.core.keyword_identical_QMARK_(result__11498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11498__auto__;
}
break;
}
}catch (e14637){var ex__11499__auto__ = e14637;
var statearr_14638_17840 = state_14633;
(statearr_14638_17840[(2)] = ex__11499__auto__);


if(cljs.core.seq((state_14633[(4)]))){
var statearr_14639_17841 = state_14633;
(statearr_14639_17841[(1)] = cljs.core.first((state_14633[(4)])));

} else {
throw ex__11499__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17842 = state_14633;
state_14633 = G__17842;
continue;
} else {
return ret_value__11497__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11496__auto__ = function(state_14633){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11496__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11496__auto____1.call(this,state_14633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11496__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11496__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11496__auto__;
})()
})();
var state__11661__auto__ = (function (){var statearr_14640 = f__11660__auto__();
(statearr_14640[(6)] = c__11659__auto___17835);

return statearr_14640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11661__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14642){
var vec__14643 = p__14642;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14643,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14643,(1),null);
var job = vec__14643;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___17844 = n;
var __17845 = (0);
while(true){
if((__17845 < n__5593__auto___17844)){
var G__14650_17846 = type;
var G__14650_17847__$1 = (((G__14650_17846 instanceof cljs.core.Keyword))?G__14650_17846.fqn:null);
switch (G__14650_17847__$1) {
case "compute":
var c__11659__auto___17849 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17845,c__11659__auto___17849,G__14650_17846,G__14650_17847__$1,n__5593__auto___17844,jobs,results,process__$1,async){
return (function (){
var f__11660__auto__ = (function (){var switch__11495__auto__ = ((function (__17845,c__11659__auto___17849,G__14650_17846,G__14650_17847__$1,n__5593__auto___17844,jobs,results,process__$1,async){
return (function (state_14672){
var state_val_14673 = (state_14672[(1)]);
if((state_val_14673 === (1))){
var state_14672__$1 = state_14672;
var statearr_14676_17852 = state_14672__$1;
(statearr_14676_17852[(2)] = null);

(statearr_14676_17852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14673 === (2))){
var state_14672__$1 = state_14672;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14672__$1,(4),jobs);
} else {
if((state_val_14673 === (3))){
var inst_14670 = (state_14672[(2)]);
var state_14672__$1 = state_14672;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14672__$1,inst_14670);
} else {
if((state_val_14673 === (4))){
var inst_14662 = (state_14672[(2)]);
var inst_14663 = process__$1(inst_14662);
var state_14672__$1 = state_14672;
if(cljs.core.truth_(inst_14663)){
var statearr_14677_17854 = state_14672__$1;
(statearr_14677_17854[(1)] = (5));

} else {
var statearr_14678_17856 = state_14672__$1;
(statearr_14678_17856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14673 === (5))){
var state_14672__$1 = state_14672;
var statearr_14679_17858 = state_14672__$1;
(statearr_14679_17858[(2)] = null);

(statearr_14679_17858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14673 === (6))){
var state_14672__$1 = state_14672;
var statearr_14680_17863 = state_14672__$1;
(statearr_14680_17863[(2)] = null);

(statearr_14680_17863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14673 === (7))){
var inst_14668 = (state_14672[(2)]);
var state_14672__$1 = state_14672;
var statearr_14681_17865 = state_14672__$1;
(statearr_14681_17865[(2)] = inst_14668);

(statearr_14681_17865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17845,c__11659__auto___17849,G__14650_17846,G__14650_17847__$1,n__5593__auto___17844,jobs,results,process__$1,async))
;
return ((function (__17845,switch__11495__auto__,c__11659__auto___17849,G__14650_17846,G__14650_17847__$1,n__5593__auto___17844,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11496__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11496__auto____0 = (function (){
var statearr_14685 = [null,null,null,null,null,null,null];
(statearr_14685[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11496__auto__);

(statearr_14685[(1)] = (1));

return statearr_14685;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11496__auto____1 = (function (state_14672){
while(true){
var ret_value__11497__auto__ = (function (){try{while(true){
var result__11498__auto__ = switch__11495__auto__(state_14672);
if(cljs.core.keyword_identical_QMARK_(result__11498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11498__auto__;
}
break;
}
}catch (e14690){var ex__11499__auto__ = e14690;
var statearr_14691_17875 = state_14672;
(statearr_14691_17875[(2)] = ex__11499__auto__);


if(cljs.core.seq((state_14672[(4)]))){
var statearr_14695_17876 = state_14672;
(statearr_14695_17876[(1)] = cljs.core.first((state_14672[(4)])));

} else {
throw ex__11499__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17877 = state_14672;
state_14672 = G__17877;
continue;
} else {
return ret_value__11497__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11496__auto__ = function(state_14672){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11496__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11496__auto____1.call(this,state_14672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11496__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11496__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11496__auto__;
})()
;})(__17845,switch__11495__auto__,c__11659__auto___17849,G__14650_17846,G__14650_17847__$1,n__5593__auto___17844,jobs,results,process__$1,async))
})();
var state__11661__auto__ = (function (){var statearr_14696 = f__11660__auto__();
(statearr_14696[(6)] = c__11659__auto___17849);

return statearr_14696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11661__auto__);
});})(__17845,c__11659__auto___17849,G__14650_17846,G__14650_17847__$1,n__5593__auto___17844,jobs,results,process__$1,async))
);


break;
case "async":
var c__11659__auto___17878 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17845,c__11659__auto___17878,G__14650_17846,G__14650_17847__$1,n__5593__auto___17844,jobs,results,process__$1,async){
return (function (){
var f__11660__auto__ = (function (){var switch__11495__auto__ = ((function (__17845,c__11659__auto___17878,G__14650_17846,G__14650_17847__$1,n__5593__auto___17844,jobs,results,process__$1,async){
return (function (state_14710){
var state_val_14714 = (state_14710[(1)]);
if((state_val_14714 === (1))){
var state_14710__$1 = state_14710;
var statearr_14717_17885 = state_14710__$1;
(statearr_14717_17885[(2)] = null);

(statearr_14717_17885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14714 === (2))){
var state_14710__$1 = state_14710;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14710__$1,(4),jobs);
} else {
if((state_val_14714 === (3))){
var inst_14708 = (state_14710[(2)]);
var state_14710__$1 = state_14710;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14710__$1,inst_14708);
} else {
if((state_val_14714 === (4))){
var inst_14700 = (state_14710[(2)]);
var inst_14701 = async(inst_14700);
var state_14710__$1 = state_14710;
if(cljs.core.truth_(inst_14701)){
var statearr_14722_17886 = state_14710__$1;
(statearr_14722_17886[(1)] = (5));

} else {
var statearr_14723_17887 = state_14710__$1;
(statearr_14723_17887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14714 === (5))){
var state_14710__$1 = state_14710;
var statearr_14726_17888 = state_14710__$1;
(statearr_14726_17888[(2)] = null);

(statearr_14726_17888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14714 === (6))){
var state_14710__$1 = state_14710;
var statearr_14728_17889 = state_14710__$1;
(statearr_14728_17889[(2)] = null);

(statearr_14728_17889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14714 === (7))){
var inst_14706 = (state_14710[(2)]);
var state_14710__$1 = state_14710;
var statearr_14732_17890 = state_14710__$1;
(statearr_14732_17890[(2)] = inst_14706);

(statearr_14732_17890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17845,c__11659__auto___17878,G__14650_17846,G__14650_17847__$1,n__5593__auto___17844,jobs,results,process__$1,async))
;
return ((function (__17845,switch__11495__auto__,c__11659__auto___17878,G__14650_17846,G__14650_17847__$1,n__5593__auto___17844,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11496__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11496__auto____0 = (function (){
var statearr_14734 = [null,null,null,null,null,null,null];
(statearr_14734[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11496__auto__);

(statearr_14734[(1)] = (1));

return statearr_14734;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11496__auto____1 = (function (state_14710){
while(true){
var ret_value__11497__auto__ = (function (){try{while(true){
var result__11498__auto__ = switch__11495__auto__(state_14710);
if(cljs.core.keyword_identical_QMARK_(result__11498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11498__auto__;
}
break;
}
}catch (e14735){var ex__11499__auto__ = e14735;
var statearr_14736_17897 = state_14710;
(statearr_14736_17897[(2)] = ex__11499__auto__);


if(cljs.core.seq((state_14710[(4)]))){
var statearr_14738_17898 = state_14710;
(statearr_14738_17898[(1)] = cljs.core.first((state_14710[(4)])));

} else {
throw ex__11499__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17899 = state_14710;
state_14710 = G__17899;
continue;
} else {
return ret_value__11497__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11496__auto__ = function(state_14710){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11496__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11496__auto____1.call(this,state_14710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11496__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11496__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11496__auto__;
})()
;})(__17845,switch__11495__auto__,c__11659__auto___17878,G__14650_17846,G__14650_17847__$1,n__5593__auto___17844,jobs,results,process__$1,async))
})();
var state__11661__auto__ = (function (){var statearr_14739 = f__11660__auto__();
(statearr_14739[(6)] = c__11659__auto___17878);

return statearr_14739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11661__auto__);
});})(__17845,c__11659__auto___17878,G__14650_17846,G__14650_17847__$1,n__5593__auto___17844,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14650_17847__$1)].join('')));

}

var G__17900 = (__17845 + (1));
__17845 = G__17900;
continue;
} else {
}
break;
}

var c__11659__auto___17901 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11660__auto__ = (function (){var switch__11495__auto__ = (function (state_14767){
var state_val_14768 = (state_14767[(1)]);
if((state_val_14768 === (7))){
var inst_14763 = (state_14767[(2)]);
var state_14767__$1 = state_14767;
var statearr_14789_17902 = state_14767__$1;
(statearr_14789_17902[(2)] = inst_14763);

(statearr_14789_17902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14768 === (1))){
var state_14767__$1 = state_14767;
var statearr_14794_17904 = state_14767__$1;
(statearr_14794_17904[(2)] = null);

(statearr_14794_17904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14768 === (4))){
var inst_14747 = (state_14767[(7)]);
var inst_14747__$1 = (state_14767[(2)]);
var inst_14748 = (inst_14747__$1 == null);
var state_14767__$1 = (function (){var statearr_14805 = state_14767;
(statearr_14805[(7)] = inst_14747__$1);

return statearr_14805;
})();
if(cljs.core.truth_(inst_14748)){
var statearr_14806_17908 = state_14767__$1;
(statearr_14806_17908[(1)] = (5));

} else {
var statearr_14808_17909 = state_14767__$1;
(statearr_14808_17909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14768 === (6))){
var inst_14747 = (state_14767[(7)]);
var inst_14752 = (state_14767[(8)]);
var inst_14752__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14753 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14755 = [inst_14747,inst_14752__$1];
var inst_14756 = (new cljs.core.PersistentVector(null,2,(5),inst_14753,inst_14755,null));
var state_14767__$1 = (function (){var statearr_14812 = state_14767;
(statearr_14812[(8)] = inst_14752__$1);

return statearr_14812;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14767__$1,(8),jobs,inst_14756);
} else {
if((state_val_14768 === (3))){
var inst_14765 = (state_14767[(2)]);
var state_14767__$1 = state_14767;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14767__$1,inst_14765);
} else {
if((state_val_14768 === (2))){
var state_14767__$1 = state_14767;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14767__$1,(4),from);
} else {
if((state_val_14768 === (9))){
var inst_14760 = (state_14767[(2)]);
var state_14767__$1 = (function (){var statearr_14819 = state_14767;
(statearr_14819[(9)] = inst_14760);

return statearr_14819;
})();
var statearr_14820_17915 = state_14767__$1;
(statearr_14820_17915[(2)] = null);

(statearr_14820_17915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14768 === (5))){
var inst_14750 = cljs.core.async.close_BANG_(jobs);
var state_14767__$1 = state_14767;
var statearr_14821_17916 = state_14767__$1;
(statearr_14821_17916[(2)] = inst_14750);

(statearr_14821_17916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14768 === (8))){
var inst_14752 = (state_14767[(8)]);
var inst_14758 = (state_14767[(2)]);
var state_14767__$1 = (function (){var statearr_14823 = state_14767;
(statearr_14823[(10)] = inst_14758);

return statearr_14823;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14767__$1,(9),results,inst_14752);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11496__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11496__auto____0 = (function (){
var statearr_14824 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14824[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11496__auto__);

(statearr_14824[(1)] = (1));

return statearr_14824;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11496__auto____1 = (function (state_14767){
while(true){
var ret_value__11497__auto__ = (function (){try{while(true){
var result__11498__auto__ = switch__11495__auto__(state_14767);
if(cljs.core.keyword_identical_QMARK_(result__11498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11498__auto__;
}
break;
}
}catch (e14827){var ex__11499__auto__ = e14827;
var statearr_14828_17918 = state_14767;
(statearr_14828_17918[(2)] = ex__11499__auto__);


if(cljs.core.seq((state_14767[(4)]))){
var statearr_14829_17919 = state_14767;
(statearr_14829_17919[(1)] = cljs.core.first((state_14767[(4)])));

} else {
throw ex__11499__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17920 = state_14767;
state_14767 = G__17920;
continue;
} else {
return ret_value__11497__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11496__auto__ = function(state_14767){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11496__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11496__auto____1.call(this,state_14767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11496__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11496__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11496__auto__;
})()
})();
var state__11661__auto__ = (function (){var statearr_14830 = f__11660__auto__();
(statearr_14830[(6)] = c__11659__auto___17901);

return statearr_14830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11661__auto__);
}));


var c__11659__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11660__auto__ = (function (){var switch__11495__auto__ = (function (state_14876){
var state_val_14877 = (state_14876[(1)]);
if((state_val_14877 === (7))){
var inst_14872 = (state_14876[(2)]);
var state_14876__$1 = state_14876;
var statearr_14881_17922 = state_14876__$1;
(statearr_14881_17922[(2)] = inst_14872);

(statearr_14881_17922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14877 === (20))){
var state_14876__$1 = state_14876;
var statearr_14882_17923 = state_14876__$1;
(statearr_14882_17923[(2)] = null);

(statearr_14882_17923[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14877 === (1))){
var state_14876__$1 = state_14876;
var statearr_14885_17924 = state_14876__$1;
(statearr_14885_17924[(2)] = null);

(statearr_14885_17924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14877 === (4))){
var inst_14833 = (state_14876[(7)]);
var inst_14833__$1 = (state_14876[(2)]);
var inst_14835 = (inst_14833__$1 == null);
var state_14876__$1 = (function (){var statearr_14886 = state_14876;
(statearr_14886[(7)] = inst_14833__$1);

return statearr_14886;
})();
if(cljs.core.truth_(inst_14835)){
var statearr_14889_17925 = state_14876__$1;
(statearr_14889_17925[(1)] = (5));

} else {
var statearr_14890_17926 = state_14876__$1;
(statearr_14890_17926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14877 === (15))){
var inst_14853 = (state_14876[(8)]);
var state_14876__$1 = state_14876;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14876__$1,(18),to,inst_14853);
} else {
if((state_val_14877 === (21))){
var inst_14867 = (state_14876[(2)]);
var state_14876__$1 = state_14876;
var statearr_14893_17930 = state_14876__$1;
(statearr_14893_17930[(2)] = inst_14867);

(statearr_14893_17930[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14877 === (13))){
var inst_14869 = (state_14876[(2)]);
var state_14876__$1 = (function (){var statearr_14896 = state_14876;
(statearr_14896[(9)] = inst_14869);

return statearr_14896;
})();
var statearr_14897_17939 = state_14876__$1;
(statearr_14897_17939[(2)] = null);

(statearr_14897_17939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14877 === (6))){
var inst_14833 = (state_14876[(7)]);
var state_14876__$1 = state_14876;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14876__$1,(11),inst_14833);
} else {
if((state_val_14877 === (17))){
var inst_14862 = (state_14876[(2)]);
var state_14876__$1 = state_14876;
if(cljs.core.truth_(inst_14862)){
var statearr_14898_17942 = state_14876__$1;
(statearr_14898_17942[(1)] = (19));

} else {
var statearr_14899_17943 = state_14876__$1;
(statearr_14899_17943[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14877 === (3))){
var inst_14874 = (state_14876[(2)]);
var state_14876__$1 = state_14876;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14876__$1,inst_14874);
} else {
if((state_val_14877 === (12))){
var inst_14850 = (state_14876[(10)]);
var state_14876__$1 = state_14876;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14876__$1,(14),inst_14850);
} else {
if((state_val_14877 === (2))){
var state_14876__$1 = state_14876;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14876__$1,(4),results);
} else {
if((state_val_14877 === (19))){
var state_14876__$1 = state_14876;
var statearr_14901_17949 = state_14876__$1;
(statearr_14901_17949[(2)] = null);

(statearr_14901_17949[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14877 === (11))){
var inst_14850 = (state_14876[(2)]);
var state_14876__$1 = (function (){var statearr_14903 = state_14876;
(statearr_14903[(10)] = inst_14850);

return statearr_14903;
})();
var statearr_14904_17956 = state_14876__$1;
(statearr_14904_17956[(2)] = null);

(statearr_14904_17956[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14877 === (9))){
var state_14876__$1 = state_14876;
var statearr_14906_17957 = state_14876__$1;
(statearr_14906_17957[(2)] = null);

(statearr_14906_17957[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14877 === (5))){
var state_14876__$1 = state_14876;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14908_17958 = state_14876__$1;
(statearr_14908_17958[(1)] = (8));

} else {
var statearr_14909_17959 = state_14876__$1;
(statearr_14909_17959[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14877 === (14))){
var inst_14855 = (state_14876[(11)]);
var inst_14853 = (state_14876[(8)]);
var inst_14853__$1 = (state_14876[(2)]);
var inst_14854 = (inst_14853__$1 == null);
var inst_14855__$1 = cljs.core.not(inst_14854);
var state_14876__$1 = (function (){var statearr_14914 = state_14876;
(statearr_14914[(11)] = inst_14855__$1);

(statearr_14914[(8)] = inst_14853__$1);

return statearr_14914;
})();
if(inst_14855__$1){
var statearr_14915_17961 = state_14876__$1;
(statearr_14915_17961[(1)] = (15));

} else {
var statearr_14917_17962 = state_14876__$1;
(statearr_14917_17962[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14877 === (16))){
var inst_14855 = (state_14876[(11)]);
var state_14876__$1 = state_14876;
var statearr_14919_17963 = state_14876__$1;
(statearr_14919_17963[(2)] = inst_14855);

(statearr_14919_17963[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14877 === (10))){
var inst_14841 = (state_14876[(2)]);
var state_14876__$1 = state_14876;
var statearr_14921_17964 = state_14876__$1;
(statearr_14921_17964[(2)] = inst_14841);

(statearr_14921_17964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14877 === (18))){
var inst_14859 = (state_14876[(2)]);
var state_14876__$1 = state_14876;
var statearr_14925_17965 = state_14876__$1;
(statearr_14925_17965[(2)] = inst_14859);

(statearr_14925_17965[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14877 === (8))){
var inst_14838 = cljs.core.async.close_BANG_(to);
var state_14876__$1 = state_14876;
var statearr_14926_17969 = state_14876__$1;
(statearr_14926_17969[(2)] = inst_14838);

(statearr_14926_17969[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11496__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11496__auto____0 = (function (){
var statearr_14945 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14945[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11496__auto__);

(statearr_14945[(1)] = (1));

return statearr_14945;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11496__auto____1 = (function (state_14876){
while(true){
var ret_value__11497__auto__ = (function (){try{while(true){
var result__11498__auto__ = switch__11495__auto__(state_14876);
if(cljs.core.keyword_identical_QMARK_(result__11498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11498__auto__;
}
break;
}
}catch (e14946){var ex__11499__auto__ = e14946;
var statearr_14947_17970 = state_14876;
(statearr_14947_17970[(2)] = ex__11499__auto__);


if(cljs.core.seq((state_14876[(4)]))){
var statearr_14948_17971 = state_14876;
(statearr_14948_17971[(1)] = cljs.core.first((state_14876[(4)])));

} else {
throw ex__11499__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17972 = state_14876;
state_14876 = G__17972;
continue;
} else {
return ret_value__11497__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11496__auto__ = function(state_14876){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11496__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11496__auto____1.call(this,state_14876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11496__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11496__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11496__auto__;
})()
})();
var state__11661__auto__ = (function (){var statearr_14965 = f__11660__auto__();
(statearr_14965[(6)] = c__11659__auto__);

return statearr_14965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11661__auto__);
}));

return c__11659__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__14967 = arguments.length;
switch (G__14967) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__14974 = arguments.length;
switch (G__14974) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__14977 = arguments.length;
switch (G__14977) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__11659__auto___17987 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11660__auto__ = (function (){var switch__11495__auto__ = (function (state_15005){
var state_val_15007 = (state_15005[(1)]);
if((state_val_15007 === (7))){
var inst_15000 = (state_15005[(2)]);
var state_15005__$1 = state_15005;
var statearr_15016_17990 = state_15005__$1;
(statearr_15016_17990[(2)] = inst_15000);

(statearr_15016_17990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15007 === (1))){
var state_15005__$1 = state_15005;
var statearr_15019_17997 = state_15005__$1;
(statearr_15019_17997[(2)] = null);

(statearr_15019_17997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15007 === (4))){
var inst_14980 = (state_15005[(7)]);
var inst_14980__$1 = (state_15005[(2)]);
var inst_14981 = (inst_14980__$1 == null);
var state_15005__$1 = (function (){var statearr_15023 = state_15005;
(statearr_15023[(7)] = inst_14980__$1);

return statearr_15023;
})();
if(cljs.core.truth_(inst_14981)){
var statearr_15024_18004 = state_15005__$1;
(statearr_15024_18004[(1)] = (5));

} else {
var statearr_15025_18005 = state_15005__$1;
(statearr_15025_18005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15007 === (13))){
var state_15005__$1 = state_15005;
var statearr_15026_18009 = state_15005__$1;
(statearr_15026_18009[(2)] = null);

(statearr_15026_18009[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15007 === (6))){
var inst_14980 = (state_15005[(7)]);
var inst_14987 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14980) : p.call(null,inst_14980));
var state_15005__$1 = state_15005;
if(cljs.core.truth_(inst_14987)){
var statearr_15031_18020 = state_15005__$1;
(statearr_15031_18020[(1)] = (9));

} else {
var statearr_15032_18021 = state_15005__$1;
(statearr_15032_18021[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15007 === (3))){
var inst_15002 = (state_15005[(2)]);
var state_15005__$1 = state_15005;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15005__$1,inst_15002);
} else {
if((state_val_15007 === (12))){
var state_15005__$1 = state_15005;
var statearr_15034_18025 = state_15005__$1;
(statearr_15034_18025[(2)] = null);

(statearr_15034_18025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15007 === (2))){
var state_15005__$1 = state_15005;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15005__$1,(4),ch);
} else {
if((state_val_15007 === (11))){
var inst_14980 = (state_15005[(7)]);
var inst_14991 = (state_15005[(2)]);
var state_15005__$1 = state_15005;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15005__$1,(8),inst_14991,inst_14980);
} else {
if((state_val_15007 === (9))){
var state_15005__$1 = state_15005;
var statearr_15043_18034 = state_15005__$1;
(statearr_15043_18034[(2)] = tc);

(statearr_15043_18034[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15007 === (5))){
var inst_14983 = cljs.core.async.close_BANG_(tc);
var inst_14984 = cljs.core.async.close_BANG_(fc);
var state_15005__$1 = (function (){var statearr_15044 = state_15005;
(statearr_15044[(8)] = inst_14983);

return statearr_15044;
})();
var statearr_15045_18035 = state_15005__$1;
(statearr_15045_18035[(2)] = inst_14984);

(statearr_15045_18035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15007 === (14))){
var inst_14998 = (state_15005[(2)]);
var state_15005__$1 = state_15005;
var statearr_15046_18037 = state_15005__$1;
(statearr_15046_18037[(2)] = inst_14998);

(statearr_15046_18037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15007 === (10))){
var state_15005__$1 = state_15005;
var statearr_15050_18040 = state_15005__$1;
(statearr_15050_18040[(2)] = fc);

(statearr_15050_18040[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15007 === (8))){
var inst_14993 = (state_15005[(2)]);
var state_15005__$1 = state_15005;
if(cljs.core.truth_(inst_14993)){
var statearr_15051_18042 = state_15005__$1;
(statearr_15051_18042[(1)] = (12));

} else {
var statearr_15052_18044 = state_15005__$1;
(statearr_15052_18044[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11496__auto__ = null;
var cljs$core$async$state_machine__11496__auto____0 = (function (){
var statearr_15062 = [null,null,null,null,null,null,null,null,null];
(statearr_15062[(0)] = cljs$core$async$state_machine__11496__auto__);

(statearr_15062[(1)] = (1));

return statearr_15062;
});
var cljs$core$async$state_machine__11496__auto____1 = (function (state_15005){
while(true){
var ret_value__11497__auto__ = (function (){try{while(true){
var result__11498__auto__ = switch__11495__auto__(state_15005);
if(cljs.core.keyword_identical_QMARK_(result__11498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11498__auto__;
}
break;
}
}catch (e15063){var ex__11499__auto__ = e15063;
var statearr_15064_18048 = state_15005;
(statearr_15064_18048[(2)] = ex__11499__auto__);


if(cljs.core.seq((state_15005[(4)]))){
var statearr_15068_18051 = state_15005;
(statearr_15068_18051[(1)] = cljs.core.first((state_15005[(4)])));

} else {
throw ex__11499__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18053 = state_15005;
state_15005 = G__18053;
continue;
} else {
return ret_value__11497__auto__;
}
break;
}
});
cljs$core$async$state_machine__11496__auto__ = function(state_15005){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11496__auto____1.call(this,state_15005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11496__auto____0;
cljs$core$async$state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11496__auto____1;
return cljs$core$async$state_machine__11496__auto__;
})()
})();
var state__11661__auto__ = (function (){var statearr_15070 = f__11660__auto__();
(statearr_15070[(6)] = c__11659__auto___17987);

return statearr_15070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11661__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__11659__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11660__auto__ = (function (){var switch__11495__auto__ = (function (state_15093){
var state_val_15094 = (state_15093[(1)]);
if((state_val_15094 === (7))){
var inst_15089 = (state_15093[(2)]);
var state_15093__$1 = state_15093;
var statearr_15099_18058 = state_15093__$1;
(statearr_15099_18058[(2)] = inst_15089);

(statearr_15099_18058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15094 === (1))){
var inst_15071 = init;
var inst_15072 = inst_15071;
var state_15093__$1 = (function (){var statearr_15100 = state_15093;
(statearr_15100[(7)] = inst_15072);

return statearr_15100;
})();
var statearr_15101_18063 = state_15093__$1;
(statearr_15101_18063[(2)] = null);

(statearr_15101_18063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15094 === (4))){
var inst_15076 = (state_15093[(8)]);
var inst_15076__$1 = (state_15093[(2)]);
var inst_15077 = (inst_15076__$1 == null);
var state_15093__$1 = (function (){var statearr_15102 = state_15093;
(statearr_15102[(8)] = inst_15076__$1);

return statearr_15102;
})();
if(cljs.core.truth_(inst_15077)){
var statearr_15103_18066 = state_15093__$1;
(statearr_15103_18066[(1)] = (5));

} else {
var statearr_15104_18067 = state_15093__$1;
(statearr_15104_18067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15094 === (6))){
var inst_15072 = (state_15093[(7)]);
var inst_15076 = (state_15093[(8)]);
var inst_15080 = (state_15093[(9)]);
var inst_15080__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15072,inst_15076) : f.call(null,inst_15072,inst_15076));
var inst_15081 = cljs.core.reduced_QMARK_(inst_15080__$1);
var state_15093__$1 = (function (){var statearr_15109 = state_15093;
(statearr_15109[(9)] = inst_15080__$1);

return statearr_15109;
})();
if(inst_15081){
var statearr_15110_18072 = state_15093__$1;
(statearr_15110_18072[(1)] = (8));

} else {
var statearr_15111_18073 = state_15093__$1;
(statearr_15111_18073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15094 === (3))){
var inst_15091 = (state_15093[(2)]);
var state_15093__$1 = state_15093;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15093__$1,inst_15091);
} else {
if((state_val_15094 === (2))){
var state_15093__$1 = state_15093;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15093__$1,(4),ch);
} else {
if((state_val_15094 === (9))){
var inst_15080 = (state_15093[(9)]);
var inst_15072 = inst_15080;
var state_15093__$1 = (function (){var statearr_15117 = state_15093;
(statearr_15117[(7)] = inst_15072);

return statearr_15117;
})();
var statearr_15118_18080 = state_15093__$1;
(statearr_15118_18080[(2)] = null);

(statearr_15118_18080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15094 === (5))){
var inst_15072 = (state_15093[(7)]);
var state_15093__$1 = state_15093;
var statearr_15119_18082 = state_15093__$1;
(statearr_15119_18082[(2)] = inst_15072);

(statearr_15119_18082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15094 === (10))){
var inst_15087 = (state_15093[(2)]);
var state_15093__$1 = state_15093;
var statearr_15121_18083 = state_15093__$1;
(statearr_15121_18083[(2)] = inst_15087);

(statearr_15121_18083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15094 === (8))){
var inst_15080 = (state_15093[(9)]);
var inst_15083 = cljs.core.deref(inst_15080);
var state_15093__$1 = state_15093;
var statearr_15122_18084 = state_15093__$1;
(statearr_15122_18084[(2)] = inst_15083);

(statearr_15122_18084[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__11496__auto__ = null;
var cljs$core$async$reduce_$_state_machine__11496__auto____0 = (function (){
var statearr_15123 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15123[(0)] = cljs$core$async$reduce_$_state_machine__11496__auto__);

(statearr_15123[(1)] = (1));

return statearr_15123;
});
var cljs$core$async$reduce_$_state_machine__11496__auto____1 = (function (state_15093){
while(true){
var ret_value__11497__auto__ = (function (){try{while(true){
var result__11498__auto__ = switch__11495__auto__(state_15093);
if(cljs.core.keyword_identical_QMARK_(result__11498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11498__auto__;
}
break;
}
}catch (e15124){var ex__11499__auto__ = e15124;
var statearr_15125_18091 = state_15093;
(statearr_15125_18091[(2)] = ex__11499__auto__);


if(cljs.core.seq((state_15093[(4)]))){
var statearr_15127_18095 = state_15093;
(statearr_15127_18095[(1)] = cljs.core.first((state_15093[(4)])));

} else {
throw ex__11499__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18101 = state_15093;
state_15093 = G__18101;
continue;
} else {
return ret_value__11497__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__11496__auto__ = function(state_15093){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__11496__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__11496__auto____1.call(this,state_15093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__11496__auto____0;
cljs$core$async$reduce_$_state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__11496__auto____1;
return cljs$core$async$reduce_$_state_machine__11496__auto__;
})()
})();
var state__11661__auto__ = (function (){var statearr_15131 = f__11660__auto__();
(statearr_15131[(6)] = c__11659__auto__);

return statearr_15131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11661__auto__);
}));

return c__11659__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__11659__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11660__auto__ = (function (){var switch__11495__auto__ = (function (state_15139){
var state_val_15140 = (state_15139[(1)]);
if((state_val_15140 === (1))){
var inst_15134 = cljs.core.async.reduce(f__$1,init,ch);
var state_15139__$1 = state_15139;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15139__$1,(2),inst_15134);
} else {
if((state_val_15140 === (2))){
var inst_15136 = (state_15139[(2)]);
var inst_15137 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15136) : f__$1.call(null,inst_15136));
var state_15139__$1 = state_15139;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15139__$1,inst_15137);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__11496__auto__ = null;
var cljs$core$async$transduce_$_state_machine__11496__auto____0 = (function (){
var statearr_15154 = [null,null,null,null,null,null,null];
(statearr_15154[(0)] = cljs$core$async$transduce_$_state_machine__11496__auto__);

(statearr_15154[(1)] = (1));

return statearr_15154;
});
var cljs$core$async$transduce_$_state_machine__11496__auto____1 = (function (state_15139){
while(true){
var ret_value__11497__auto__ = (function (){try{while(true){
var result__11498__auto__ = switch__11495__auto__(state_15139);
if(cljs.core.keyword_identical_QMARK_(result__11498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11498__auto__;
}
break;
}
}catch (e15156){var ex__11499__auto__ = e15156;
var statearr_15161_18150 = state_15139;
(statearr_15161_18150[(2)] = ex__11499__auto__);


if(cljs.core.seq((state_15139[(4)]))){
var statearr_15162_18152 = state_15139;
(statearr_15162_18152[(1)] = cljs.core.first((state_15139[(4)])));

} else {
throw ex__11499__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18154 = state_15139;
state_15139 = G__18154;
continue;
} else {
return ret_value__11497__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__11496__auto__ = function(state_15139){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__11496__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__11496__auto____1.call(this,state_15139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__11496__auto____0;
cljs$core$async$transduce_$_state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__11496__auto____1;
return cljs$core$async$transduce_$_state_machine__11496__auto__;
})()
})();
var state__11661__auto__ = (function (){var statearr_15164 = f__11660__auto__();
(statearr_15164[(6)] = c__11659__auto__);

return statearr_15164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11661__auto__);
}));

return c__11659__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15175 = arguments.length;
switch (G__15175) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__11659__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11660__auto__ = (function (){var switch__11495__auto__ = (function (state_15232){
var state_val_15233 = (state_15232[(1)]);
if((state_val_15233 === (7))){
var inst_15214 = (state_15232[(2)]);
var state_15232__$1 = state_15232;
var statearr_15234_18174 = state_15232__$1;
(statearr_15234_18174[(2)] = inst_15214);

(statearr_15234_18174[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15233 === (1))){
var inst_15207 = cljs.core.seq(coll);
var inst_15208 = inst_15207;
var state_15232__$1 = (function (){var statearr_15235 = state_15232;
(statearr_15235[(7)] = inst_15208);

return statearr_15235;
})();
var statearr_15236_18175 = state_15232__$1;
(statearr_15236_18175[(2)] = null);

(statearr_15236_18175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15233 === (4))){
var inst_15208 = (state_15232[(7)]);
var inst_15212 = cljs.core.first(inst_15208);
var state_15232__$1 = state_15232;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15232__$1,(7),ch,inst_15212);
} else {
if((state_val_15233 === (13))){
var inst_15226 = (state_15232[(2)]);
var state_15232__$1 = state_15232;
var statearr_15237_18183 = state_15232__$1;
(statearr_15237_18183[(2)] = inst_15226);

(statearr_15237_18183[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15233 === (6))){
var inst_15217 = (state_15232[(2)]);
var state_15232__$1 = state_15232;
if(cljs.core.truth_(inst_15217)){
var statearr_15240_18185 = state_15232__$1;
(statearr_15240_18185[(1)] = (8));

} else {
var statearr_15241_18186 = state_15232__$1;
(statearr_15241_18186[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15233 === (3))){
var inst_15230 = (state_15232[(2)]);
var state_15232__$1 = state_15232;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15232__$1,inst_15230);
} else {
if((state_val_15233 === (12))){
var state_15232__$1 = state_15232;
var statearr_15243_18188 = state_15232__$1;
(statearr_15243_18188[(2)] = null);

(statearr_15243_18188[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15233 === (2))){
var inst_15208 = (state_15232[(7)]);
var state_15232__$1 = state_15232;
if(cljs.core.truth_(inst_15208)){
var statearr_15244_18189 = state_15232__$1;
(statearr_15244_18189[(1)] = (4));

} else {
var statearr_15245_18190 = state_15232__$1;
(statearr_15245_18190[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15233 === (11))){
var inst_15223 = cljs.core.async.close_BANG_(ch);
var state_15232__$1 = state_15232;
var statearr_15246_18191 = state_15232__$1;
(statearr_15246_18191[(2)] = inst_15223);

(statearr_15246_18191[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15233 === (9))){
var state_15232__$1 = state_15232;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15247_18193 = state_15232__$1;
(statearr_15247_18193[(1)] = (11));

} else {
var statearr_15248_18194 = state_15232__$1;
(statearr_15248_18194[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15233 === (5))){
var inst_15208 = (state_15232[(7)]);
var state_15232__$1 = state_15232;
var statearr_15249_18195 = state_15232__$1;
(statearr_15249_18195[(2)] = inst_15208);

(statearr_15249_18195[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15233 === (10))){
var inst_15228 = (state_15232[(2)]);
var state_15232__$1 = state_15232;
var statearr_15250_18196 = state_15232__$1;
(statearr_15250_18196[(2)] = inst_15228);

(statearr_15250_18196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15233 === (8))){
var inst_15208 = (state_15232[(7)]);
var inst_15219 = cljs.core.next(inst_15208);
var inst_15208__$1 = inst_15219;
var state_15232__$1 = (function (){var statearr_15251 = state_15232;
(statearr_15251[(7)] = inst_15208__$1);

return statearr_15251;
})();
var statearr_15252_18197 = state_15232__$1;
(statearr_15252_18197[(2)] = null);

(statearr_15252_18197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11496__auto__ = null;
var cljs$core$async$state_machine__11496__auto____0 = (function (){
var statearr_15253 = [null,null,null,null,null,null,null,null];
(statearr_15253[(0)] = cljs$core$async$state_machine__11496__auto__);

(statearr_15253[(1)] = (1));

return statearr_15253;
});
var cljs$core$async$state_machine__11496__auto____1 = (function (state_15232){
while(true){
var ret_value__11497__auto__ = (function (){try{while(true){
var result__11498__auto__ = switch__11495__auto__(state_15232);
if(cljs.core.keyword_identical_QMARK_(result__11498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11498__auto__;
}
break;
}
}catch (e15254){var ex__11499__auto__ = e15254;
var statearr_15255_18202 = state_15232;
(statearr_15255_18202[(2)] = ex__11499__auto__);


if(cljs.core.seq((state_15232[(4)]))){
var statearr_15256_18203 = state_15232;
(statearr_15256_18203[(1)] = cljs.core.first((state_15232[(4)])));

} else {
throw ex__11499__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18204 = state_15232;
state_15232 = G__18204;
continue;
} else {
return ret_value__11497__auto__;
}
break;
}
});
cljs$core$async$state_machine__11496__auto__ = function(state_15232){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11496__auto____1.call(this,state_15232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11496__auto____0;
cljs$core$async$state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11496__auto____1;
return cljs$core$async$state_machine__11496__auto__;
})()
})();
var state__11661__auto__ = (function (){var statearr_15258 = f__11660__auto__();
(statearr_15258[(6)] = c__11659__auto__);

return statearr_15258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11661__auto__);
}));

return c__11659__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15260 = arguments.length;
switch (G__15260) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18209 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null,_));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18209(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18215 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18215(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18219 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18219(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18220 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18220(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15420 = (function (ch,cs,meta15421){
this.ch = ch;
this.cs = cs;
this.meta15421 = meta15421;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15422,meta15421__$1){
var self__ = this;
var _15422__$1 = this;
return (new cljs.core.async.t_cljs$core$async15420(self__.ch,self__.cs,meta15421__$1));
}));

(cljs.core.async.t_cljs$core$async15420.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15422){
var self__ = this;
var _15422__$1 = this;
return self__.meta15421;
}));

(cljs.core.async.t_cljs$core$async15420.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15420.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15420.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15420.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15420.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15420.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15420.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15421","meta15421",130200123,null)], null);
}));

(cljs.core.async.t_cljs$core$async15420.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15420.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15420");

(cljs.core.async.t_cljs$core$async15420.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15420");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15420.
 */
cljs.core.async.__GT_t_cljs$core$async15420 = (function cljs$core$async$__GT_t_cljs$core$async15420(ch,cs,meta15421){
return (new cljs.core.async.t_cljs$core$async15420(ch,cs,meta15421));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15420(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__11659__auto___18272 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11660__auto__ = (function (){var switch__11495__auto__ = (function (state_15603){
var state_val_15604 = (state_15603[(1)]);
if((state_val_15604 === (7))){
var inst_15593 = (state_15603[(2)]);
var state_15603__$1 = state_15603;
var statearr_15609_18273 = state_15603__$1;
(statearr_15609_18273[(2)] = inst_15593);

(statearr_15609_18273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15604 === (20))){
var inst_15457 = (state_15603[(7)]);
var inst_15485 = cljs.core.first(inst_15457);
var inst_15486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15485,(0),null);
var inst_15488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15485,(1),null);
var state_15603__$1 = (function (){var statearr_15614 = state_15603;
(statearr_15614[(8)] = inst_15486);

return statearr_15614;
})();
if(cljs.core.truth_(inst_15488)){
var statearr_15615_18274 = state_15603__$1;
(statearr_15615_18274[(1)] = (22));

} else {
var statearr_15616_18275 = state_15603__$1;
(statearr_15616_18275[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15604 === (27))){
var inst_15532 = (state_15603[(9)]);
var inst_15527 = (state_15603[(10)]);
var inst_15525 = (state_15603[(11)]);
var inst_15426 = (state_15603[(12)]);
var inst_15532__$1 = cljs.core._nth(inst_15525,inst_15527);
var inst_15533 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15532__$1,inst_15426,done);
var state_15603__$1 = (function (){var statearr_15618 = state_15603;
(statearr_15618[(9)] = inst_15532__$1);

return statearr_15618;
})();
if(cljs.core.truth_(inst_15533)){
var statearr_15619_18277 = state_15603__$1;
(statearr_15619_18277[(1)] = (30));

} else {
var statearr_15620_18278 = state_15603__$1;
(statearr_15620_18278[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15604 === (1))){
var state_15603__$1 = state_15603;
var statearr_15621_18280 = state_15603__$1;
(statearr_15621_18280[(2)] = null);

(statearr_15621_18280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15604 === (24))){
var inst_15457 = (state_15603[(7)]);
var inst_15497 = (state_15603[(2)]);
var inst_15498 = cljs.core.next(inst_15457);
var inst_15435 = inst_15498;
var inst_15436 = null;
var inst_15437 = (0);
var inst_15438 = (0);
var state_15603__$1 = (function (){var statearr_15624 = state_15603;
(statearr_15624[(13)] = inst_15497);

(statearr_15624[(14)] = inst_15438);

(statearr_15624[(15)] = inst_15436);

(statearr_15624[(16)] = inst_15437);

(statearr_15624[(17)] = inst_15435);

return statearr_15624;
})();
var statearr_15625_18281 = state_15603__$1;
(statearr_15625_18281[(2)] = null);

(statearr_15625_18281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15604 === (39))){
var state_15603__$1 = state_15603;
var statearr_15629_18282 = state_15603__$1;
(statearr_15629_18282[(2)] = null);

(statearr_15629_18282[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15604 === (4))){
var inst_15426 = (state_15603[(12)]);
var inst_15426__$1 = (state_15603[(2)]);
var inst_15427 = (inst_15426__$1 == null);
var state_15603__$1 = (function (){var statearr_15630 = state_15603;
(statearr_15630[(12)] = inst_15426__$1);

return statearr_15630;
})();
if(cljs.core.truth_(inst_15427)){
var statearr_15631_18285 = state_15603__$1;
(statearr_15631_18285[(1)] = (5));

} else {
var statearr_15632_18286 = state_15603__$1;
(statearr_15632_18286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15604 === (15))){
var inst_15438 = (state_15603[(14)]);
var inst_15436 = (state_15603[(15)]);
var inst_15437 = (state_15603[(16)]);
var inst_15435 = (state_15603[(17)]);
var inst_15453 = (state_15603[(2)]);
var inst_15454 = (inst_15438 + (1));
var tmp15626 = inst_15436;
var tmp15627 = inst_15437;
var tmp15628 = inst_15435;
var inst_15435__$1 = tmp15628;
var inst_15436__$1 = tmp15626;
var inst_15437__$1 = tmp15627;
var inst_15438__$1 = inst_15454;
var state_15603__$1 = (function (){var statearr_15634 = state_15603;
(statearr_15634[(18)] = inst_15453);

(statearr_15634[(14)] = inst_15438__$1);

(statearr_15634[(15)] = inst_15436__$1);

(statearr_15634[(16)] = inst_15437__$1);

(statearr_15634[(17)] = inst_15435__$1);

return statearr_15634;
})();
var statearr_15635_18288 = state_15603__$1;
(statearr_15635_18288[(2)] = null);

(statearr_15635_18288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15604 === (21))){
var inst_15501 = (state_15603[(2)]);
var state_15603__$1 = state_15603;
var statearr_15639_18289 = state_15603__$1;
(statearr_15639_18289[(2)] = inst_15501);

(statearr_15639_18289[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15604 === (31))){
var inst_15532 = (state_15603[(9)]);
var inst_15536 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15532);
var state_15603__$1 = state_15603;
var statearr_15640_18294 = state_15603__$1;
(statearr_15640_18294[(2)] = inst_15536);

(statearr_15640_18294[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15604 === (32))){
var inst_15527 = (state_15603[(10)]);
var inst_15524 = (state_15603[(19)]);
var inst_15525 = (state_15603[(11)]);
var inst_15526 = (state_15603[(20)]);
var inst_15538 = (state_15603[(2)]);
var inst_15539 = (inst_15527 + (1));
var tmp15636 = inst_15524;
var tmp15637 = inst_15525;
var tmp15638 = inst_15526;
var inst_15524__$1 = tmp15636;
var inst_15525__$1 = tmp15637;
var inst_15526__$1 = tmp15638;
var inst_15527__$1 = inst_15539;
var state_15603__$1 = (function (){var statearr_15642 = state_15603;
(statearr_15642[(10)] = inst_15527__$1);

(statearr_15642[(19)] = inst_15524__$1);

(statearr_15642[(21)] = inst_15538);

(statearr_15642[(11)] = inst_15525__$1);

(statearr_15642[(20)] = inst_15526__$1);

return statearr_15642;
})();
var statearr_15643_18300 = state_15603__$1;
(statearr_15643_18300[(2)] = null);

(statearr_15643_18300[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15604 === (40))){
var inst_15556 = (state_15603[(22)]);
var inst_15564 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15556);
var state_15603__$1 = state_15603;
var statearr_15646_18308 = state_15603__$1;
(statearr_15646_18308[(2)] = inst_15564);

(statearr_15646_18308[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15604 === (33))){
var inst_15542 = (state_15603[(23)]);
var inst_15545 = cljs.core.chunked_seq_QMARK_(inst_15542);
var state_15603__$1 = state_15603;
if(inst_15545){
var statearr_15648_18309 = state_15603__$1;
(statearr_15648_18309[(1)] = (36));

} else {
var statearr_15649_18310 = state_15603__$1;
(statearr_15649_18310[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15604 === (13))){
var inst_15447 = (state_15603[(24)]);
var inst_15450 = cljs.core.async.close_BANG_(inst_15447);
var state_15603__$1 = state_15603;
var statearr_15654_18312 = state_15603__$1;
(statearr_15654_18312[(2)] = inst_15450);

(statearr_15654_18312[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15604 === (22))){
var inst_15486 = (state_15603[(8)]);
var inst_15494 = cljs.core.async.close_BANG_(inst_15486);
var state_15603__$1 = state_15603;
var statearr_15656_18313 = state_15603__$1;
(statearr_15656_18313[(2)] = inst_15494);

(statearr_15656_18313[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15604 === (36))){
var inst_15542 = (state_15603[(23)]);
var inst_15550 = cljs.core.chunk_first(inst_15542);
var inst_15551 = cljs.core.chunk_rest(inst_15542);
var inst_15552 = cljs.core.count(inst_15550);
var inst_15524 = inst_15551;
var inst_15525 = inst_15550;
var inst_15526 = inst_15552;
var inst_15527 = (0);
var state_15603__$1 = (function (){var statearr_15658 = state_15603;
(statearr_15658[(10)] = inst_15527);

(statearr_15658[(19)] = inst_15524);

(statearr_15658[(11)] = inst_15525);

(statearr_15658[(20)] = inst_15526);

return statearr_15658;
})();
var statearr_15663_18317 = state_15603__$1;
(statearr_15663_18317[(2)] = null);

(statearr_15663_18317[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15604 === (41))){
var inst_15542 = (state_15603[(23)]);
var inst_15570 = (state_15603[(2)]);
var inst_15571 = cljs.core.next(inst_15542);
var inst_15524 = inst_15571;
var inst_15525 = null;
var inst_15526 = (0);
var inst_15527 = (0);
var state_15603__$1 = (function (){var statearr_15665 = state_15603;
(statearr_15665[(10)] = inst_15527);

(statearr_15665[(19)] = inst_15524);

(statearr_15665[(11)] = inst_15525);

(statearr_15665[(20)] = inst_15526);

(statearr_15665[(25)] = inst_15570);

return statearr_15665;
})();
var statearr_15667_18323 = state_15603__$1;
(statearr_15667_18323[(2)] = null);

(statearr_15667_18323[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15604 === (43))){
var state_15603__$1 = state_15603;
var statearr_15669_18324 = state_15603__$1;
(statearr_15669_18324[(2)] = null);

(statearr_15669_18324[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15604 === (29))){
var inst_15579 = (state_15603[(2)]);
var state_15603__$1 = state_15603;
var statearr_15674_18325 = state_15603__$1;
(statearr_15674_18325[(2)] = inst_15579);

(statearr_15674_18325[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15604 === (44))){
var inst_15589 = (state_15603[(2)]);
var state_15603__$1 = (function (){var statearr_15677 = state_15603;
(statearr_15677[(26)] = inst_15589);

return statearr_15677;
})();
var statearr_15682_18329 = state_15603__$1;
(statearr_15682_18329[(2)] = null);

(statearr_15682_18329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15604 === (6))){
var inst_15516 = (state_15603[(27)]);
var inst_15515 = cljs.core.deref(cs);
var inst_15516__$1 = cljs.core.keys(inst_15515);
var inst_15517 = cljs.core.count(inst_15516__$1);
var inst_15518 = cljs.core.reset_BANG_(dctr,inst_15517);
var inst_15523 = cljs.core.seq(inst_15516__$1);
var inst_15524 = inst_15523;
var inst_15525 = null;
var inst_15526 = (0);
var inst_15527 = (0);
var state_15603__$1 = (function (){var statearr_15683 = state_15603;
(statearr_15683[(10)] = inst_15527);

(statearr_15683[(19)] = inst_15524);

(statearr_15683[(27)] = inst_15516__$1);

(statearr_15683[(11)] = inst_15525);

(statearr_15683[(20)] = inst_15526);

(statearr_15683[(28)] = inst_15518);

return statearr_15683;
})();
var statearr_15684_18331 = state_15603__$1;
(statearr_15684_18331[(2)] = null);

(statearr_15684_18331[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15604 === (28))){
var inst_15524 = (state_15603[(19)]);
var inst_15542 = (state_15603[(23)]);
var inst_15542__$1 = cljs.core.seq(inst_15524);
var state_15603__$1 = (function (){var statearr_15685 = state_15603;
(statearr_15685[(23)] = inst_15542__$1);

return statearr_15685;
})();
if(inst_15542__$1){
var statearr_15686_18334 = state_15603__$1;
(statearr_15686_18334[(1)] = (33));

} else {
var statearr_15687_18335 = state_15603__$1;
(statearr_15687_18335[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15604 === (25))){
var inst_15527 = (state_15603[(10)]);
var inst_15526 = (state_15603[(20)]);
var inst_15529 = (inst_15527 < inst_15526);
var inst_15530 = inst_15529;
var state_15603__$1 = state_15603;
if(cljs.core.truth_(inst_15530)){
var statearr_15692_18338 = state_15603__$1;
(statearr_15692_18338[(1)] = (27));

} else {
var statearr_15693_18339 = state_15603__$1;
(statearr_15693_18339[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15604 === (34))){
var state_15603__$1 = state_15603;
var statearr_15698_18340 = state_15603__$1;
(statearr_15698_18340[(2)] = null);

(statearr_15698_18340[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15604 === (17))){
var state_15603__$1 = state_15603;
var statearr_15700_18341 = state_15603__$1;
(statearr_15700_18341[(2)] = null);

(statearr_15700_18341[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15604 === (3))){
var inst_15595 = (state_15603[(2)]);
var state_15603__$1 = state_15603;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15603__$1,inst_15595);
} else {
if((state_val_15604 === (12))){
var inst_15506 = (state_15603[(2)]);
var state_15603__$1 = state_15603;
var statearr_15705_18342 = state_15603__$1;
(statearr_15705_18342[(2)] = inst_15506);

(statearr_15705_18342[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15604 === (2))){
var state_15603__$1 = state_15603;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15603__$1,(4),ch);
} else {
if((state_val_15604 === (23))){
var state_15603__$1 = state_15603;
var statearr_15710_18344 = state_15603__$1;
(statearr_15710_18344[(2)] = null);

(statearr_15710_18344[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15604 === (35))){
var inst_15577 = (state_15603[(2)]);
var state_15603__$1 = state_15603;
var statearr_15718_18345 = state_15603__$1;
(statearr_15718_18345[(2)] = inst_15577);

(statearr_15718_18345[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15604 === (19))){
var inst_15457 = (state_15603[(7)]);
var inst_15466 = cljs.core.chunk_first(inst_15457);
var inst_15467 = cljs.core.chunk_rest(inst_15457);
var inst_15472 = cljs.core.count(inst_15466);
var inst_15435 = inst_15467;
var inst_15436 = inst_15466;
var inst_15437 = inst_15472;
var inst_15438 = (0);
var state_15603__$1 = (function (){var statearr_15723 = state_15603;
(statearr_15723[(14)] = inst_15438);

(statearr_15723[(15)] = inst_15436);

(statearr_15723[(16)] = inst_15437);

(statearr_15723[(17)] = inst_15435);

return statearr_15723;
})();
var statearr_15724_18347 = state_15603__$1;
(statearr_15724_18347[(2)] = null);

(statearr_15724_18347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15604 === (11))){
var inst_15457 = (state_15603[(7)]);
var inst_15435 = (state_15603[(17)]);
var inst_15457__$1 = cljs.core.seq(inst_15435);
var state_15603__$1 = (function (){var statearr_15725 = state_15603;
(statearr_15725[(7)] = inst_15457__$1);

return statearr_15725;
})();
if(inst_15457__$1){
var statearr_15726_18349 = state_15603__$1;
(statearr_15726_18349[(1)] = (16));

} else {
var statearr_15728_18350 = state_15603__$1;
(statearr_15728_18350[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15604 === (9))){
var inst_15509 = (state_15603[(2)]);
var state_15603__$1 = state_15603;
var statearr_15730_18351 = state_15603__$1;
(statearr_15730_18351[(2)] = inst_15509);

(statearr_15730_18351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15604 === (5))){
var inst_15433 = cljs.core.deref(cs);
var inst_15434 = cljs.core.seq(inst_15433);
var inst_15435 = inst_15434;
var inst_15436 = null;
var inst_15437 = (0);
var inst_15438 = (0);
var state_15603__$1 = (function (){var statearr_15731 = state_15603;
(statearr_15731[(14)] = inst_15438);

(statearr_15731[(15)] = inst_15436);

(statearr_15731[(16)] = inst_15437);

(statearr_15731[(17)] = inst_15435);

return statearr_15731;
})();
var statearr_15732_18356 = state_15603__$1;
(statearr_15732_18356[(2)] = null);

(statearr_15732_18356[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15604 === (14))){
var state_15603__$1 = state_15603;
var statearr_15733_18357 = state_15603__$1;
(statearr_15733_18357[(2)] = null);

(statearr_15733_18357[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15604 === (45))){
var inst_15586 = (state_15603[(2)]);
var state_15603__$1 = state_15603;
var statearr_15734_18358 = state_15603__$1;
(statearr_15734_18358[(2)] = inst_15586);

(statearr_15734_18358[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15604 === (26))){
var inst_15516 = (state_15603[(27)]);
var inst_15581 = (state_15603[(2)]);
var inst_15583 = cljs.core.seq(inst_15516);
var state_15603__$1 = (function (){var statearr_15735 = state_15603;
(statearr_15735[(29)] = inst_15581);

return statearr_15735;
})();
if(inst_15583){
var statearr_15736_18359 = state_15603__$1;
(statearr_15736_18359[(1)] = (42));

} else {
var statearr_15737_18360 = state_15603__$1;
(statearr_15737_18360[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15604 === (16))){
var inst_15457 = (state_15603[(7)]);
var inst_15459 = cljs.core.chunked_seq_QMARK_(inst_15457);
var state_15603__$1 = state_15603;
if(inst_15459){
var statearr_15739_18363 = state_15603__$1;
(statearr_15739_18363[(1)] = (19));

} else {
var statearr_15740_18364 = state_15603__$1;
(statearr_15740_18364[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15604 === (38))){
var inst_15574 = (state_15603[(2)]);
var state_15603__$1 = state_15603;
var statearr_15742_18366 = state_15603__$1;
(statearr_15742_18366[(2)] = inst_15574);

(statearr_15742_18366[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15604 === (30))){
var state_15603__$1 = state_15603;
var statearr_15743_18368 = state_15603__$1;
(statearr_15743_18368[(2)] = null);

(statearr_15743_18368[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15604 === (10))){
var inst_15438 = (state_15603[(14)]);
var inst_15436 = (state_15603[(15)]);
var inst_15446 = cljs.core._nth(inst_15436,inst_15438);
var inst_15447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15446,(0),null);
var inst_15448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15446,(1),null);
var state_15603__$1 = (function (){var statearr_15744 = state_15603;
(statearr_15744[(24)] = inst_15447);

return statearr_15744;
})();
if(cljs.core.truth_(inst_15448)){
var statearr_15745_18372 = state_15603__$1;
(statearr_15745_18372[(1)] = (13));

} else {
var statearr_15746_18373 = state_15603__$1;
(statearr_15746_18373[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15604 === (18))){
var inst_15504 = (state_15603[(2)]);
var state_15603__$1 = state_15603;
var statearr_15747_18376 = state_15603__$1;
(statearr_15747_18376[(2)] = inst_15504);

(statearr_15747_18376[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15604 === (42))){
var state_15603__$1 = state_15603;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15603__$1,(45),dchan);
} else {
if((state_val_15604 === (37))){
var inst_15556 = (state_15603[(22)]);
var inst_15542 = (state_15603[(23)]);
var inst_15426 = (state_15603[(12)]);
var inst_15556__$1 = cljs.core.first(inst_15542);
var inst_15561 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15556__$1,inst_15426,done);
var state_15603__$1 = (function (){var statearr_15748 = state_15603;
(statearr_15748[(22)] = inst_15556__$1);

return statearr_15748;
})();
if(cljs.core.truth_(inst_15561)){
var statearr_15749_18379 = state_15603__$1;
(statearr_15749_18379[(1)] = (39));

} else {
var statearr_15752_18383 = state_15603__$1;
(statearr_15752_18383[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15604 === (8))){
var inst_15438 = (state_15603[(14)]);
var inst_15437 = (state_15603[(16)]);
var inst_15440 = (inst_15438 < inst_15437);
var inst_15441 = inst_15440;
var state_15603__$1 = state_15603;
if(cljs.core.truth_(inst_15441)){
var statearr_15761_18384 = state_15603__$1;
(statearr_15761_18384[(1)] = (10));

} else {
var statearr_15766_18386 = state_15603__$1;
(statearr_15766_18386[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__11496__auto__ = null;
var cljs$core$async$mult_$_state_machine__11496__auto____0 = (function (){
var statearr_15779 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15779[(0)] = cljs$core$async$mult_$_state_machine__11496__auto__);

(statearr_15779[(1)] = (1));

return statearr_15779;
});
var cljs$core$async$mult_$_state_machine__11496__auto____1 = (function (state_15603){
while(true){
var ret_value__11497__auto__ = (function (){try{while(true){
var result__11498__auto__ = switch__11495__auto__(state_15603);
if(cljs.core.keyword_identical_QMARK_(result__11498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11498__auto__;
}
break;
}
}catch (e15780){var ex__11499__auto__ = e15780;
var statearr_15783_18393 = state_15603;
(statearr_15783_18393[(2)] = ex__11499__auto__);


if(cljs.core.seq((state_15603[(4)]))){
var statearr_15784_18395 = state_15603;
(statearr_15784_18395[(1)] = cljs.core.first((state_15603[(4)])));

} else {
throw ex__11499__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18396 = state_15603;
state_15603 = G__18396;
continue;
} else {
return ret_value__11497__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__11496__auto__ = function(state_15603){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__11496__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__11496__auto____1.call(this,state_15603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__11496__auto____0;
cljs$core$async$mult_$_state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__11496__auto____1;
return cljs$core$async$mult_$_state_machine__11496__auto__;
})()
})();
var state__11661__auto__ = (function (){var statearr_15787 = f__11660__auto__();
(statearr_15787[(6)] = c__11659__auto___18272);

return statearr_15787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11661__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15790 = arguments.length;
switch (G__15790) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18404 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18404(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18417 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18417(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18423 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18423(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18427 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null,m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18427(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18431 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null,m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18431(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18440 = arguments.length;
var i__5727__auto___18441 = (0);
while(true){
if((i__5727__auto___18441 < len__5726__auto___18440)){
args__5732__auto__.push((arguments[i__5727__auto___18441]));

var G__18444 = (i__5727__auto___18441 + (1));
i__5727__auto___18441 = G__18444;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15801){
var map__15802 = p__15801;
var map__15802__$1 = cljs.core.__destructure_map(map__15802);
var opts = map__15802__$1;
var statearr_15803_18445 = state;
(statearr_15803_18445[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15805_18446 = state;
(statearr_15805_18446[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_15808_18447 = state;
(statearr_15808_18447[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15792){
var G__15793 = cljs.core.first(seq15792);
var seq15792__$1 = cljs.core.next(seq15792);
var G__15794 = cljs.core.first(seq15792__$1);
var seq15792__$2 = cljs.core.next(seq15792__$1);
var G__15795 = cljs.core.first(seq15792__$2);
var seq15792__$3 = cljs.core.next(seq15792__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15793,G__15794,G__15795,seq15792__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15835 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15836){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15836 = meta15836;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15837,meta15836__$1){
var self__ = this;
var _15837__$1 = this;
return (new cljs.core.async.t_cljs$core$async15835(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15836__$1));
}));

(cljs.core.async.t_cljs$core$async15835.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15837){
var self__ = this;
var _15837__$1 = this;
return self__.meta15836;
}));

(cljs.core.async.t_cljs$core$async15835.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15835.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15835.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15835.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15835.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15835.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15835.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15835.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15835.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15836","meta15836",31465859,null)], null);
}));

(cljs.core.async.t_cljs$core$async15835.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15835.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15835");

(cljs.core.async.t_cljs$core$async15835.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15835");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15835.
 */
cljs.core.async.__GT_t_cljs$core$async15835 = (function cljs$core$async$__GT_t_cljs$core$async15835(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15836){
return (new cljs.core.async.t_cljs$core$async15835(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15836));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async15835(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__11659__auto___18608 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11660__auto__ = (function (){var switch__11495__auto__ = (function (state_15926){
var state_val_15927 = (state_15926[(1)]);
if((state_val_15927 === (7))){
var inst_15879 = (state_15926[(2)]);
var state_15926__$1 = state_15926;
if(cljs.core.truth_(inst_15879)){
var statearr_15936_18609 = state_15926__$1;
(statearr_15936_18609[(1)] = (8));

} else {
var statearr_15937_18613 = state_15926__$1;
(statearr_15937_18613[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15927 === (20))){
var inst_15872 = (state_15926[(7)]);
var state_15926__$1 = state_15926;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15926__$1,(23),out,inst_15872);
} else {
if((state_val_15927 === (1))){
var inst_15852 = calc_state();
var inst_15853 = cljs.core.__destructure_map(inst_15852);
var inst_15854 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15853,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15855 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15853,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15856 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15853,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15860 = inst_15852;
var state_15926__$1 = (function (){var statearr_15942 = state_15926;
(statearr_15942[(8)] = inst_15855);

(statearr_15942[(9)] = inst_15860);

(statearr_15942[(10)] = inst_15854);

(statearr_15942[(11)] = inst_15856);

return statearr_15942;
})();
var statearr_15943_18618 = state_15926__$1;
(statearr_15943_18618[(2)] = null);

(statearr_15943_18618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15927 === (24))){
var inst_15863 = (state_15926[(12)]);
var inst_15860 = inst_15863;
var state_15926__$1 = (function (){var statearr_15944 = state_15926;
(statearr_15944[(9)] = inst_15860);

return statearr_15944;
})();
var statearr_15945_18619 = state_15926__$1;
(statearr_15945_18619[(2)] = null);

(statearr_15945_18619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15927 === (4))){
var inst_15872 = (state_15926[(7)]);
var inst_15874 = (state_15926[(13)]);
var inst_15871 = (state_15926[(2)]);
var inst_15872__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15871,(0),null);
var inst_15873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15871,(1),null);
var inst_15874__$1 = (inst_15872__$1 == null);
var state_15926__$1 = (function (){var statearr_15952 = state_15926;
(statearr_15952[(7)] = inst_15872__$1);

(statearr_15952[(14)] = inst_15873);

(statearr_15952[(13)] = inst_15874__$1);

return statearr_15952;
})();
if(cljs.core.truth_(inst_15874__$1)){
var statearr_15953_18620 = state_15926__$1;
(statearr_15953_18620[(1)] = (5));

} else {
var statearr_15960_18621 = state_15926__$1;
(statearr_15960_18621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15927 === (15))){
var inst_15864 = (state_15926[(15)]);
var inst_15900 = (state_15926[(16)]);
var inst_15900__$1 = cljs.core.empty_QMARK_(inst_15864);
var state_15926__$1 = (function (){var statearr_15963 = state_15926;
(statearr_15963[(16)] = inst_15900__$1);

return statearr_15963;
})();
if(inst_15900__$1){
var statearr_15964_18626 = state_15926__$1;
(statearr_15964_18626[(1)] = (17));

} else {
var statearr_15965_18627 = state_15926__$1;
(statearr_15965_18627[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15927 === (21))){
var inst_15863 = (state_15926[(12)]);
var inst_15860 = inst_15863;
var state_15926__$1 = (function (){var statearr_15970 = state_15926;
(statearr_15970[(9)] = inst_15860);

return statearr_15970;
})();
var statearr_15971_18628 = state_15926__$1;
(statearr_15971_18628[(2)] = null);

(statearr_15971_18628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15927 === (13))){
var inst_15890 = (state_15926[(2)]);
var inst_15891 = calc_state();
var inst_15860 = inst_15891;
var state_15926__$1 = (function (){var statearr_15973 = state_15926;
(statearr_15973[(9)] = inst_15860);

(statearr_15973[(17)] = inst_15890);

return statearr_15973;
})();
var statearr_15974_18634 = state_15926__$1;
(statearr_15974_18634[(2)] = null);

(statearr_15974_18634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15927 === (22))){
var inst_15920 = (state_15926[(2)]);
var state_15926__$1 = state_15926;
var statearr_15981_18635 = state_15926__$1;
(statearr_15981_18635[(2)] = inst_15920);

(statearr_15981_18635[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15927 === (6))){
var inst_15873 = (state_15926[(14)]);
var inst_15877 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15873,change);
var state_15926__$1 = state_15926;
var statearr_15982_18636 = state_15926__$1;
(statearr_15982_18636[(2)] = inst_15877);

(statearr_15982_18636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15927 === (25))){
var state_15926__$1 = state_15926;
var statearr_15989_18638 = state_15926__$1;
(statearr_15989_18638[(2)] = null);

(statearr_15989_18638[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15927 === (17))){
var inst_15873 = (state_15926[(14)]);
var inst_15865 = (state_15926[(18)]);
var inst_15902 = (inst_15865.cljs$core$IFn$_invoke$arity$1 ? inst_15865.cljs$core$IFn$_invoke$arity$1(inst_15873) : inst_15865.call(null,inst_15873));
var inst_15903 = cljs.core.not(inst_15902);
var state_15926__$1 = state_15926;
var statearr_15990_18639 = state_15926__$1;
(statearr_15990_18639[(2)] = inst_15903);

(statearr_15990_18639[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15927 === (3))){
var inst_15924 = (state_15926[(2)]);
var state_15926__$1 = state_15926;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15926__$1,inst_15924);
} else {
if((state_val_15927 === (12))){
var state_15926__$1 = state_15926;
var statearr_15994_18640 = state_15926__$1;
(statearr_15994_18640[(2)] = null);

(statearr_15994_18640[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15927 === (2))){
var inst_15863 = (state_15926[(12)]);
var inst_15860 = (state_15926[(9)]);
var inst_15863__$1 = cljs.core.__destructure_map(inst_15860);
var inst_15864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15863__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15865 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15863__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15866 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15863__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15926__$1 = (function (){var statearr_16002 = state_15926;
(statearr_16002[(12)] = inst_15863__$1);

(statearr_16002[(15)] = inst_15864);

(statearr_16002[(18)] = inst_15865);

return statearr_16002;
})();
return cljs.core.async.ioc_alts_BANG_(state_15926__$1,(4),inst_15866);
} else {
if((state_val_15927 === (23))){
var inst_15911 = (state_15926[(2)]);
var state_15926__$1 = state_15926;
if(cljs.core.truth_(inst_15911)){
var statearr_16010_18649 = state_15926__$1;
(statearr_16010_18649[(1)] = (24));

} else {
var statearr_16011_18650 = state_15926__$1;
(statearr_16011_18650[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15927 === (19))){
var inst_15906 = (state_15926[(2)]);
var state_15926__$1 = state_15926;
var statearr_16033_18651 = state_15926__$1;
(statearr_16033_18651[(2)] = inst_15906);

(statearr_16033_18651[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15927 === (11))){
var inst_15873 = (state_15926[(14)]);
var inst_15887 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15873);
var state_15926__$1 = state_15926;
var statearr_16039_18655 = state_15926__$1;
(statearr_16039_18655[(2)] = inst_15887);

(statearr_16039_18655[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15927 === (9))){
var inst_15873 = (state_15926[(14)]);
var inst_15864 = (state_15926[(15)]);
var inst_15894 = (state_15926[(19)]);
var inst_15894__$1 = (inst_15864.cljs$core$IFn$_invoke$arity$1 ? inst_15864.cljs$core$IFn$_invoke$arity$1(inst_15873) : inst_15864.call(null,inst_15873));
var state_15926__$1 = (function (){var statearr_16046 = state_15926;
(statearr_16046[(19)] = inst_15894__$1);

return statearr_16046;
})();
if(cljs.core.truth_(inst_15894__$1)){
var statearr_16048_18659 = state_15926__$1;
(statearr_16048_18659[(1)] = (14));

} else {
var statearr_16049_18660 = state_15926__$1;
(statearr_16049_18660[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15927 === (5))){
var inst_15874 = (state_15926[(13)]);
var state_15926__$1 = state_15926;
var statearr_16054_18661 = state_15926__$1;
(statearr_16054_18661[(2)] = inst_15874);

(statearr_16054_18661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15927 === (14))){
var inst_15894 = (state_15926[(19)]);
var state_15926__$1 = state_15926;
var statearr_16059_18665 = state_15926__$1;
(statearr_16059_18665[(2)] = inst_15894);

(statearr_16059_18665[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15927 === (26))){
var inst_15916 = (state_15926[(2)]);
var state_15926__$1 = state_15926;
var statearr_16060_18666 = state_15926__$1;
(statearr_16060_18666[(2)] = inst_15916);

(statearr_16060_18666[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15927 === (16))){
var inst_15908 = (state_15926[(2)]);
var state_15926__$1 = state_15926;
if(cljs.core.truth_(inst_15908)){
var statearr_16061_18671 = state_15926__$1;
(statearr_16061_18671[(1)] = (20));

} else {
var statearr_16062_18672 = state_15926__$1;
(statearr_16062_18672[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15927 === (10))){
var inst_15922 = (state_15926[(2)]);
var state_15926__$1 = state_15926;
var statearr_16064_18673 = state_15926__$1;
(statearr_16064_18673[(2)] = inst_15922);

(statearr_16064_18673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15927 === (18))){
var inst_15900 = (state_15926[(16)]);
var state_15926__$1 = state_15926;
var statearr_16065_18674 = state_15926__$1;
(statearr_16065_18674[(2)] = inst_15900);

(statearr_16065_18674[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15927 === (8))){
var inst_15872 = (state_15926[(7)]);
var inst_15885 = (inst_15872 == null);
var state_15926__$1 = state_15926;
if(cljs.core.truth_(inst_15885)){
var statearr_16067_18675 = state_15926__$1;
(statearr_16067_18675[(1)] = (11));

} else {
var statearr_16069_18676 = state_15926__$1;
(statearr_16069_18676[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__11496__auto__ = null;
var cljs$core$async$mix_$_state_machine__11496__auto____0 = (function (){
var statearr_16076 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16076[(0)] = cljs$core$async$mix_$_state_machine__11496__auto__);

(statearr_16076[(1)] = (1));

return statearr_16076;
});
var cljs$core$async$mix_$_state_machine__11496__auto____1 = (function (state_15926){
while(true){
var ret_value__11497__auto__ = (function (){try{while(true){
var result__11498__auto__ = switch__11495__auto__(state_15926);
if(cljs.core.keyword_identical_QMARK_(result__11498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11498__auto__;
}
break;
}
}catch (e16081){var ex__11499__auto__ = e16081;
var statearr_16082_18678 = state_15926;
(statearr_16082_18678[(2)] = ex__11499__auto__);


if(cljs.core.seq((state_15926[(4)]))){
var statearr_16087_18682 = state_15926;
(statearr_16087_18682[(1)] = cljs.core.first((state_15926[(4)])));

} else {
throw ex__11499__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18685 = state_15926;
state_15926 = G__18685;
continue;
} else {
return ret_value__11497__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__11496__auto__ = function(state_15926){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__11496__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__11496__auto____1.call(this,state_15926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__11496__auto____0;
cljs$core$async$mix_$_state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__11496__auto____1;
return cljs$core$async$mix_$_state_machine__11496__auto__;
})()
})();
var state__11661__auto__ = (function (){var statearr_16093 = f__11660__auto__();
(statearr_16093[(6)] = c__11659__auto___18608);

return statearr_16093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11661__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18690 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18690(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18697 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null,p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18697(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18704 = (function() {
var G__18705 = null;
var G__18705__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null,p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18705__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null,p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18705 = function(p,v){
switch(arguments.length){
case 1:
return G__18705__1.call(this,p);
case 2:
return G__18705__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18705.cljs$core$IFn$_invoke$arity$1 = G__18705__1;
G__18705.cljs$core$IFn$_invoke$arity$2 = G__18705__2;
return G__18705;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16124 = arguments.length;
switch (G__16124) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18704(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18704(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16138 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16139){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16139 = meta16139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16140,meta16139__$1){
var self__ = this;
var _16140__$1 = this;
return (new cljs.core.async.t_cljs$core$async16138(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16139__$1));
}));

(cljs.core.async.t_cljs$core$async16138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16140){
var self__ = this;
var _16140__$1 = this;
return self__.meta16139;
}));

(cljs.core.async.t_cljs$core$async16138.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16138.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16138.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16138.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16138.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16138.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16138.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16138.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16139","meta16139",1357782485,null)], null);
}));

(cljs.core.async.t_cljs$core$async16138.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16138.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16138");

(cljs.core.async.t_cljs$core$async16138.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16138");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16138.
 */
cljs.core.async.__GT_t_cljs$core$async16138 = (function cljs$core$async$__GT_t_cljs$core$async16138(ch,topic_fn,buf_fn,mults,ensure_mult,meta16139){
return (new cljs.core.async.t_cljs$core$async16138(ch,topic_fn,buf_fn,mults,ensure_mult,meta16139));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16137 = arguments.length;
switch (G__16137) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16135_SHARP_){
if(cljs.core.truth_((p1__16135_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16135_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16135_SHARP_.call(null,topic)))){
return p1__16135_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16135_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16138(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__11659__auto___18779 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11660__auto__ = (function (){var switch__11495__auto__ = (function (state_16218){
var state_val_16220 = (state_16218[(1)]);
if((state_val_16220 === (7))){
var inst_16214 = (state_16218[(2)]);
var state_16218__$1 = state_16218;
var statearr_16245_18782 = state_16218__$1;
(statearr_16245_18782[(2)] = inst_16214);

(statearr_16245_18782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16220 === (20))){
var state_16218__$1 = state_16218;
var statearr_16246_18803 = state_16218__$1;
(statearr_16246_18803[(2)] = null);

(statearr_16246_18803[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16220 === (1))){
var state_16218__$1 = state_16218;
var statearr_16248_18815 = state_16218__$1;
(statearr_16248_18815[(2)] = null);

(statearr_16248_18815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16220 === (24))){
var inst_16197 = (state_16218[(7)]);
var inst_16206 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16197);
var state_16218__$1 = state_16218;
var statearr_16249_18824 = state_16218__$1;
(statearr_16249_18824[(2)] = inst_16206);

(statearr_16249_18824[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16220 === (4))){
var inst_16146 = (state_16218[(8)]);
var inst_16146__$1 = (state_16218[(2)]);
var inst_16147 = (inst_16146__$1 == null);
var state_16218__$1 = (function (){var statearr_16250 = state_16218;
(statearr_16250[(8)] = inst_16146__$1);

return statearr_16250;
})();
if(cljs.core.truth_(inst_16147)){
var statearr_16251_18825 = state_16218__$1;
(statearr_16251_18825[(1)] = (5));

} else {
var statearr_16252_18826 = state_16218__$1;
(statearr_16252_18826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16220 === (15))){
var inst_16191 = (state_16218[(2)]);
var state_16218__$1 = state_16218;
var statearr_16254_18827 = state_16218__$1;
(statearr_16254_18827[(2)] = inst_16191);

(statearr_16254_18827[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16220 === (21))){
var inst_16211 = (state_16218[(2)]);
var state_16218__$1 = (function (){var statearr_16255 = state_16218;
(statearr_16255[(9)] = inst_16211);

return statearr_16255;
})();
var statearr_16256_18828 = state_16218__$1;
(statearr_16256_18828[(2)] = null);

(statearr_16256_18828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16220 === (13))){
var inst_16170 = (state_16218[(10)]);
var inst_16172 = cljs.core.chunked_seq_QMARK_(inst_16170);
var state_16218__$1 = state_16218;
if(inst_16172){
var statearr_16258_18829 = state_16218__$1;
(statearr_16258_18829[(1)] = (16));

} else {
var statearr_16262_18830 = state_16218__$1;
(statearr_16262_18830[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16220 === (22))){
var inst_16203 = (state_16218[(2)]);
var state_16218__$1 = state_16218;
if(cljs.core.truth_(inst_16203)){
var statearr_16263_18833 = state_16218__$1;
(statearr_16263_18833[(1)] = (23));

} else {
var statearr_16264_18834 = state_16218__$1;
(statearr_16264_18834[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16220 === (6))){
var inst_16199 = (state_16218[(11)]);
var inst_16197 = (state_16218[(7)]);
var inst_16146 = (state_16218[(8)]);
var inst_16197__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16146) : topic_fn.call(null,inst_16146));
var inst_16198 = cljs.core.deref(mults);
var inst_16199__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16198,inst_16197__$1);
var state_16218__$1 = (function (){var statearr_16265 = state_16218;
(statearr_16265[(11)] = inst_16199__$1);

(statearr_16265[(7)] = inst_16197__$1);

return statearr_16265;
})();
if(cljs.core.truth_(inst_16199__$1)){
var statearr_16266_18835 = state_16218__$1;
(statearr_16266_18835[(1)] = (19));

} else {
var statearr_16267_18836 = state_16218__$1;
(statearr_16267_18836[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16220 === (25))){
var inst_16208 = (state_16218[(2)]);
var state_16218__$1 = state_16218;
var statearr_16268_18837 = state_16218__$1;
(statearr_16268_18837[(2)] = inst_16208);

(statearr_16268_18837[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16220 === (17))){
var inst_16170 = (state_16218[(10)]);
var inst_16182 = cljs.core.first(inst_16170);
var inst_16183 = cljs.core.async.muxch_STAR_(inst_16182);
var inst_16184 = cljs.core.async.close_BANG_(inst_16183);
var inst_16185 = cljs.core.next(inst_16170);
var inst_16156 = inst_16185;
var inst_16157 = null;
var inst_16158 = (0);
var inst_16159 = (0);
var state_16218__$1 = (function (){var statearr_16269 = state_16218;
(statearr_16269[(12)] = inst_16156);

(statearr_16269[(13)] = inst_16158);

(statearr_16269[(14)] = inst_16157);

(statearr_16269[(15)] = inst_16159);

(statearr_16269[(16)] = inst_16184);

return statearr_16269;
})();
var statearr_16271_18838 = state_16218__$1;
(statearr_16271_18838[(2)] = null);

(statearr_16271_18838[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16220 === (3))){
var inst_16216 = (state_16218[(2)]);
var state_16218__$1 = state_16218;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16218__$1,inst_16216);
} else {
if((state_val_16220 === (12))){
var inst_16193 = (state_16218[(2)]);
var state_16218__$1 = state_16218;
var statearr_16275_18839 = state_16218__$1;
(statearr_16275_18839[(2)] = inst_16193);

(statearr_16275_18839[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16220 === (2))){
var state_16218__$1 = state_16218;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16218__$1,(4),ch);
} else {
if((state_val_16220 === (23))){
var state_16218__$1 = state_16218;
var statearr_16278_18840 = state_16218__$1;
(statearr_16278_18840[(2)] = null);

(statearr_16278_18840[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16220 === (19))){
var inst_16199 = (state_16218[(11)]);
var inst_16146 = (state_16218[(8)]);
var inst_16201 = cljs.core.async.muxch_STAR_(inst_16199);
var state_16218__$1 = state_16218;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16218__$1,(22),inst_16201,inst_16146);
} else {
if((state_val_16220 === (11))){
var inst_16156 = (state_16218[(12)]);
var inst_16170 = (state_16218[(10)]);
var inst_16170__$1 = cljs.core.seq(inst_16156);
var state_16218__$1 = (function (){var statearr_16280 = state_16218;
(statearr_16280[(10)] = inst_16170__$1);

return statearr_16280;
})();
if(inst_16170__$1){
var statearr_16281_18848 = state_16218__$1;
(statearr_16281_18848[(1)] = (13));

} else {
var statearr_16282_18849 = state_16218__$1;
(statearr_16282_18849[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16220 === (9))){
var inst_16195 = (state_16218[(2)]);
var state_16218__$1 = state_16218;
var statearr_16283_18856 = state_16218__$1;
(statearr_16283_18856[(2)] = inst_16195);

(statearr_16283_18856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16220 === (5))){
var inst_16153 = cljs.core.deref(mults);
var inst_16154 = cljs.core.vals(inst_16153);
var inst_16155 = cljs.core.seq(inst_16154);
var inst_16156 = inst_16155;
var inst_16157 = null;
var inst_16158 = (0);
var inst_16159 = (0);
var state_16218__$1 = (function (){var statearr_16284 = state_16218;
(statearr_16284[(12)] = inst_16156);

(statearr_16284[(13)] = inst_16158);

(statearr_16284[(14)] = inst_16157);

(statearr_16284[(15)] = inst_16159);

return statearr_16284;
})();
var statearr_16285_18882 = state_16218__$1;
(statearr_16285_18882[(2)] = null);

(statearr_16285_18882[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16220 === (14))){
var state_16218__$1 = state_16218;
var statearr_16289_18896 = state_16218__$1;
(statearr_16289_18896[(2)] = null);

(statearr_16289_18896[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16220 === (16))){
var inst_16170 = (state_16218[(10)]);
var inst_16174 = cljs.core.chunk_first(inst_16170);
var inst_16175 = cljs.core.chunk_rest(inst_16170);
var inst_16176 = cljs.core.count(inst_16174);
var inst_16156 = inst_16175;
var inst_16157 = inst_16174;
var inst_16158 = inst_16176;
var inst_16159 = (0);
var state_16218__$1 = (function (){var statearr_16295 = state_16218;
(statearr_16295[(12)] = inst_16156);

(statearr_16295[(13)] = inst_16158);

(statearr_16295[(14)] = inst_16157);

(statearr_16295[(15)] = inst_16159);

return statearr_16295;
})();
var statearr_16296_18904 = state_16218__$1;
(statearr_16296_18904[(2)] = null);

(statearr_16296_18904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16220 === (10))){
var inst_16156 = (state_16218[(12)]);
var inst_16158 = (state_16218[(13)]);
var inst_16157 = (state_16218[(14)]);
var inst_16159 = (state_16218[(15)]);
var inst_16164 = cljs.core._nth(inst_16157,inst_16159);
var inst_16165 = cljs.core.async.muxch_STAR_(inst_16164);
var inst_16166 = cljs.core.async.close_BANG_(inst_16165);
var inst_16167 = (inst_16159 + (1));
var tmp16286 = inst_16156;
var tmp16287 = inst_16158;
var tmp16288 = inst_16157;
var inst_16156__$1 = tmp16286;
var inst_16157__$1 = tmp16288;
var inst_16158__$1 = tmp16287;
var inst_16159__$1 = inst_16167;
var state_16218__$1 = (function (){var statearr_16301 = state_16218;
(statearr_16301[(17)] = inst_16166);

(statearr_16301[(12)] = inst_16156__$1);

(statearr_16301[(13)] = inst_16158__$1);

(statearr_16301[(14)] = inst_16157__$1);

(statearr_16301[(15)] = inst_16159__$1);

return statearr_16301;
})();
var statearr_16307_18914 = state_16218__$1;
(statearr_16307_18914[(2)] = null);

(statearr_16307_18914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16220 === (18))){
var inst_16188 = (state_16218[(2)]);
var state_16218__$1 = state_16218;
var statearr_16308_18915 = state_16218__$1;
(statearr_16308_18915[(2)] = inst_16188);

(statearr_16308_18915[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16220 === (8))){
var inst_16158 = (state_16218[(13)]);
var inst_16159 = (state_16218[(15)]);
var inst_16161 = (inst_16159 < inst_16158);
var inst_16162 = inst_16161;
var state_16218__$1 = state_16218;
if(cljs.core.truth_(inst_16162)){
var statearr_16315_18916 = state_16218__$1;
(statearr_16315_18916[(1)] = (10));

} else {
var statearr_16316_18917 = state_16218__$1;
(statearr_16316_18917[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11496__auto__ = null;
var cljs$core$async$state_machine__11496__auto____0 = (function (){
var statearr_16365 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16365[(0)] = cljs$core$async$state_machine__11496__auto__);

(statearr_16365[(1)] = (1));

return statearr_16365;
});
var cljs$core$async$state_machine__11496__auto____1 = (function (state_16218){
while(true){
var ret_value__11497__auto__ = (function (){try{while(true){
var result__11498__auto__ = switch__11495__auto__(state_16218);
if(cljs.core.keyword_identical_QMARK_(result__11498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11498__auto__;
}
break;
}
}catch (e16366){var ex__11499__auto__ = e16366;
var statearr_16368_18918 = state_16218;
(statearr_16368_18918[(2)] = ex__11499__auto__);


if(cljs.core.seq((state_16218[(4)]))){
var statearr_16369_18919 = state_16218;
(statearr_16369_18919[(1)] = cljs.core.first((state_16218[(4)])));

} else {
throw ex__11499__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18920 = state_16218;
state_16218 = G__18920;
continue;
} else {
return ret_value__11497__auto__;
}
break;
}
});
cljs$core$async$state_machine__11496__auto__ = function(state_16218){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11496__auto____1.call(this,state_16218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11496__auto____0;
cljs$core$async$state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11496__auto____1;
return cljs$core$async$state_machine__11496__auto__;
})()
})();
var state__11661__auto__ = (function (){var statearr_16370 = f__11660__auto__();
(statearr_16370[(6)] = c__11659__auto___18779);

return statearr_16370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11661__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16373 = arguments.length;
switch (G__16373) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16387 = arguments.length;
switch (G__16387) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16423 = arguments.length;
switch (G__16423) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__11659__auto___18933 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11660__auto__ = (function (){var switch__11495__auto__ = (function (state_16476){
var state_val_16477 = (state_16476[(1)]);
if((state_val_16477 === (7))){
var state_16476__$1 = state_16476;
var statearr_16482_18934 = state_16476__$1;
(statearr_16482_18934[(2)] = null);

(statearr_16482_18934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (1))){
var state_16476__$1 = state_16476;
var statearr_16483_18936 = state_16476__$1;
(statearr_16483_18936[(2)] = null);

(statearr_16483_18936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (4))){
var inst_16435 = (state_16476[(7)]);
var inst_16434 = (state_16476[(8)]);
var inst_16438 = (inst_16435 < inst_16434);
var state_16476__$1 = state_16476;
if(cljs.core.truth_(inst_16438)){
var statearr_16485_18938 = state_16476__$1;
(statearr_16485_18938[(1)] = (6));

} else {
var statearr_16486_18939 = state_16476__$1;
(statearr_16486_18939[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (15))){
var inst_16462 = (state_16476[(9)]);
var inst_16467 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16462);
var state_16476__$1 = state_16476;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16476__$1,(17),out,inst_16467);
} else {
if((state_val_16477 === (13))){
var inst_16462 = (state_16476[(9)]);
var inst_16462__$1 = (state_16476[(2)]);
var inst_16463 = cljs.core.some(cljs.core.nil_QMARK_,inst_16462__$1);
var state_16476__$1 = (function (){var statearr_16487 = state_16476;
(statearr_16487[(9)] = inst_16462__$1);

return statearr_16487;
})();
if(cljs.core.truth_(inst_16463)){
var statearr_16488_18940 = state_16476__$1;
(statearr_16488_18940[(1)] = (14));

} else {
var statearr_16490_18941 = state_16476__$1;
(statearr_16490_18941[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (6))){
var state_16476__$1 = state_16476;
var statearr_16491_18942 = state_16476__$1;
(statearr_16491_18942[(2)] = null);

(statearr_16491_18942[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (17))){
var inst_16469 = (state_16476[(2)]);
var state_16476__$1 = (function (){var statearr_16497 = state_16476;
(statearr_16497[(10)] = inst_16469);

return statearr_16497;
})();
var statearr_16498_18947 = state_16476__$1;
(statearr_16498_18947[(2)] = null);

(statearr_16498_18947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (3))){
var inst_16474 = (state_16476[(2)]);
var state_16476__$1 = state_16476;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16476__$1,inst_16474);
} else {
if((state_val_16477 === (12))){
var _ = (function (){var statearr_16500 = state_16476;
(statearr_16500[(4)] = cljs.core.rest((state_16476[(4)])));

return statearr_16500;
})();
var state_16476__$1 = state_16476;
var ex16496 = (state_16476__$1[(2)]);
var statearr_16501_18949 = state_16476__$1;
(statearr_16501_18949[(5)] = ex16496);


if((ex16496 instanceof Object)){
var statearr_16502_18950 = state_16476__$1;
(statearr_16502_18950[(1)] = (11));

(statearr_16502_18950[(5)] = null);

} else {
throw ex16496;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (2))){
var inst_16432 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16434 = cnt;
var inst_16435 = (0);
var state_16476__$1 = (function (){var statearr_16503 = state_16476;
(statearr_16503[(7)] = inst_16435);

(statearr_16503[(11)] = inst_16432);

(statearr_16503[(8)] = inst_16434);

return statearr_16503;
})();
var statearr_16504_18953 = state_16476__$1;
(statearr_16504_18953[(2)] = null);

(statearr_16504_18953[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (11))){
var inst_16440 = (state_16476[(2)]);
var inst_16441 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16476__$1 = (function (){var statearr_16505 = state_16476;
(statearr_16505[(12)] = inst_16440);

return statearr_16505;
})();
var statearr_16506_18958 = state_16476__$1;
(statearr_16506_18958[(2)] = inst_16441);

(statearr_16506_18958[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (9))){
var inst_16435 = (state_16476[(7)]);
var _ = (function (){var statearr_16508 = state_16476;
(statearr_16508[(4)] = cljs.core.cons((12),(state_16476[(4)])));

return statearr_16508;
})();
var inst_16448 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16435) : chs__$1.call(null,inst_16435));
var inst_16449 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16435) : done.call(null,inst_16435));
var inst_16450 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16448,inst_16449);
var ___$1 = (function (){var statearr_16512 = state_16476;
(statearr_16512[(4)] = cljs.core.rest((state_16476[(4)])));

return statearr_16512;
})();
var state_16476__$1 = state_16476;
var statearr_16513_18965 = state_16476__$1;
(statearr_16513_18965[(2)] = inst_16450);

(statearr_16513_18965[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (5))){
var inst_16460 = (state_16476[(2)]);
var state_16476__$1 = (function (){var statearr_16514 = state_16476;
(statearr_16514[(13)] = inst_16460);

return statearr_16514;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16476__$1,(13),dchan);
} else {
if((state_val_16477 === (14))){
var inst_16465 = cljs.core.async.close_BANG_(out);
var state_16476__$1 = state_16476;
var statearr_16515_18973 = state_16476__$1;
(statearr_16515_18973[(2)] = inst_16465);

(statearr_16515_18973[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (16))){
var inst_16472 = (state_16476[(2)]);
var state_16476__$1 = state_16476;
var statearr_16521_18974 = state_16476__$1;
(statearr_16521_18974[(2)] = inst_16472);

(statearr_16521_18974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (10))){
var inst_16435 = (state_16476[(7)]);
var inst_16453 = (state_16476[(2)]);
var inst_16454 = (inst_16435 + (1));
var inst_16435__$1 = inst_16454;
var state_16476__$1 = (function (){var statearr_16526 = state_16476;
(statearr_16526[(14)] = inst_16453);

(statearr_16526[(7)] = inst_16435__$1);

return statearr_16526;
})();
var statearr_16527_18982 = state_16476__$1;
(statearr_16527_18982[(2)] = null);

(statearr_16527_18982[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (8))){
var inst_16458 = (state_16476[(2)]);
var state_16476__$1 = state_16476;
var statearr_16532_18992 = state_16476__$1;
(statearr_16532_18992[(2)] = inst_16458);

(statearr_16532_18992[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11496__auto__ = null;
var cljs$core$async$state_machine__11496__auto____0 = (function (){
var statearr_16534 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16534[(0)] = cljs$core$async$state_machine__11496__auto__);

(statearr_16534[(1)] = (1));

return statearr_16534;
});
var cljs$core$async$state_machine__11496__auto____1 = (function (state_16476){
while(true){
var ret_value__11497__auto__ = (function (){try{while(true){
var result__11498__auto__ = switch__11495__auto__(state_16476);
if(cljs.core.keyword_identical_QMARK_(result__11498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11498__auto__;
}
break;
}
}catch (e16535){var ex__11499__auto__ = e16535;
var statearr_16536_19003 = state_16476;
(statearr_16536_19003[(2)] = ex__11499__auto__);


if(cljs.core.seq((state_16476[(4)]))){
var statearr_16538_19004 = state_16476;
(statearr_16538_19004[(1)] = cljs.core.first((state_16476[(4)])));

} else {
throw ex__11499__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19005 = state_16476;
state_16476 = G__19005;
continue;
} else {
return ret_value__11497__auto__;
}
break;
}
});
cljs$core$async$state_machine__11496__auto__ = function(state_16476){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11496__auto____1.call(this,state_16476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11496__auto____0;
cljs$core$async$state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11496__auto____1;
return cljs$core$async$state_machine__11496__auto__;
})()
})();
var state__11661__auto__ = (function (){var statearr_16539 = f__11660__auto__();
(statearr_16539[(6)] = c__11659__auto___18933);

return statearr_16539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11661__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16547 = arguments.length;
switch (G__16547) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11659__auto___19009 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11660__auto__ = (function (){var switch__11495__auto__ = (function (state_16585){
var state_val_16586 = (state_16585[(1)]);
if((state_val_16586 === (7))){
var inst_16564 = (state_16585[(7)]);
var inst_16563 = (state_16585[(8)]);
var inst_16563__$1 = (state_16585[(2)]);
var inst_16564__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16563__$1,(0),null);
var inst_16565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16563__$1,(1),null);
var inst_16566 = (inst_16564__$1 == null);
var state_16585__$1 = (function (){var statearr_16595 = state_16585;
(statearr_16595[(7)] = inst_16564__$1);

(statearr_16595[(9)] = inst_16565);

(statearr_16595[(8)] = inst_16563__$1);

return statearr_16595;
})();
if(cljs.core.truth_(inst_16566)){
var statearr_16596_19010 = state_16585__$1;
(statearr_16596_19010[(1)] = (8));

} else {
var statearr_16598_19011 = state_16585__$1;
(statearr_16598_19011[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16586 === (1))){
var inst_16549 = cljs.core.vec(chs);
var inst_16550 = inst_16549;
var state_16585__$1 = (function (){var statearr_16603 = state_16585;
(statearr_16603[(10)] = inst_16550);

return statearr_16603;
})();
var statearr_16606_19015 = state_16585__$1;
(statearr_16606_19015[(2)] = null);

(statearr_16606_19015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16586 === (4))){
var inst_16550 = (state_16585[(10)]);
var state_16585__$1 = state_16585;
return cljs.core.async.ioc_alts_BANG_(state_16585__$1,(7),inst_16550);
} else {
if((state_val_16586 === (6))){
var inst_16581 = (state_16585[(2)]);
var state_16585__$1 = state_16585;
var statearr_16610_19016 = state_16585__$1;
(statearr_16610_19016[(2)] = inst_16581);

(statearr_16610_19016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16586 === (3))){
var inst_16583 = (state_16585[(2)]);
var state_16585__$1 = state_16585;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16585__$1,inst_16583);
} else {
if((state_val_16586 === (2))){
var inst_16550 = (state_16585[(10)]);
var inst_16554 = cljs.core.count(inst_16550);
var inst_16556 = (inst_16554 > (0));
var state_16585__$1 = state_16585;
if(cljs.core.truth_(inst_16556)){
var statearr_16621_19017 = state_16585__$1;
(statearr_16621_19017[(1)] = (4));

} else {
var statearr_16623_19018 = state_16585__$1;
(statearr_16623_19018[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16586 === (11))){
var inst_16550 = (state_16585[(10)]);
var inst_16574 = (state_16585[(2)]);
var tmp16618 = inst_16550;
var inst_16550__$1 = tmp16618;
var state_16585__$1 = (function (){var statearr_16627 = state_16585;
(statearr_16627[(10)] = inst_16550__$1);

(statearr_16627[(11)] = inst_16574);

return statearr_16627;
})();
var statearr_16628_19020 = state_16585__$1;
(statearr_16628_19020[(2)] = null);

(statearr_16628_19020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16586 === (9))){
var inst_16564 = (state_16585[(7)]);
var state_16585__$1 = state_16585;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16585__$1,(11),out,inst_16564);
} else {
if((state_val_16586 === (5))){
var inst_16579 = cljs.core.async.close_BANG_(out);
var state_16585__$1 = state_16585;
var statearr_16647_19022 = state_16585__$1;
(statearr_16647_19022[(2)] = inst_16579);

(statearr_16647_19022[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16586 === (10))){
var inst_16577 = (state_16585[(2)]);
var state_16585__$1 = state_16585;
var statearr_16648_19023 = state_16585__$1;
(statearr_16648_19023[(2)] = inst_16577);

(statearr_16648_19023[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16586 === (8))){
var inst_16550 = (state_16585[(10)]);
var inst_16564 = (state_16585[(7)]);
var inst_16565 = (state_16585[(9)]);
var inst_16563 = (state_16585[(8)]);
var inst_16568 = (function (){var cs = inst_16550;
var vec__16559 = inst_16563;
var v = inst_16564;
var c = inst_16565;
return (function (p1__16541_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16541_SHARP_);
});
})();
var inst_16570 = cljs.core.filterv(inst_16568,inst_16550);
var inst_16550__$1 = inst_16570;
var state_16585__$1 = (function (){var statearr_16653 = state_16585;
(statearr_16653[(10)] = inst_16550__$1);

return statearr_16653;
})();
var statearr_16657_19024 = state_16585__$1;
(statearr_16657_19024[(2)] = null);

(statearr_16657_19024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11496__auto__ = null;
var cljs$core$async$state_machine__11496__auto____0 = (function (){
var statearr_16661 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16661[(0)] = cljs$core$async$state_machine__11496__auto__);

(statearr_16661[(1)] = (1));

return statearr_16661;
});
var cljs$core$async$state_machine__11496__auto____1 = (function (state_16585){
while(true){
var ret_value__11497__auto__ = (function (){try{while(true){
var result__11498__auto__ = switch__11495__auto__(state_16585);
if(cljs.core.keyword_identical_QMARK_(result__11498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11498__auto__;
}
break;
}
}catch (e16665){var ex__11499__auto__ = e16665;
var statearr_16667_19025 = state_16585;
(statearr_16667_19025[(2)] = ex__11499__auto__);


if(cljs.core.seq((state_16585[(4)]))){
var statearr_16668_19026 = state_16585;
(statearr_16668_19026[(1)] = cljs.core.first((state_16585[(4)])));

} else {
throw ex__11499__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19027 = state_16585;
state_16585 = G__19027;
continue;
} else {
return ret_value__11497__auto__;
}
break;
}
});
cljs$core$async$state_machine__11496__auto__ = function(state_16585){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11496__auto____1.call(this,state_16585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11496__auto____0;
cljs$core$async$state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11496__auto____1;
return cljs$core$async$state_machine__11496__auto__;
})()
})();
var state__11661__auto__ = (function (){var statearr_16669 = f__11660__auto__();
(statearr_16669[(6)] = c__11659__auto___19009);

return statearr_16669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11661__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16673 = arguments.length;
switch (G__16673) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11659__auto___19030 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11660__auto__ = (function (){var switch__11495__auto__ = (function (state_16717){
var state_val_16718 = (state_16717[(1)]);
if((state_val_16718 === (7))){
var inst_16680 = (state_16717[(7)]);
var inst_16680__$1 = (state_16717[(2)]);
var inst_16688 = (inst_16680__$1 == null);
var inst_16689 = cljs.core.not(inst_16688);
var state_16717__$1 = (function (){var statearr_16733 = state_16717;
(statearr_16733[(7)] = inst_16680__$1);

return statearr_16733;
})();
if(inst_16689){
var statearr_16734_19031 = state_16717__$1;
(statearr_16734_19031[(1)] = (8));

} else {
var statearr_16736_19032 = state_16717__$1;
(statearr_16736_19032[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16718 === (1))){
var inst_16674 = (0);
var state_16717__$1 = (function (){var statearr_16740 = state_16717;
(statearr_16740[(8)] = inst_16674);

return statearr_16740;
})();
var statearr_16741_19033 = state_16717__$1;
(statearr_16741_19033[(2)] = null);

(statearr_16741_19033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16718 === (4))){
var state_16717__$1 = state_16717;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16717__$1,(7),ch);
} else {
if((state_val_16718 === (6))){
var inst_16704 = (state_16717[(2)]);
var state_16717__$1 = state_16717;
var statearr_16745_19034 = state_16717__$1;
(statearr_16745_19034[(2)] = inst_16704);

(statearr_16745_19034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16718 === (3))){
var inst_16708 = (state_16717[(2)]);
var inst_16712 = cljs.core.async.close_BANG_(out);
var state_16717__$1 = (function (){var statearr_16747 = state_16717;
(statearr_16747[(9)] = inst_16708);

return statearr_16747;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16717__$1,inst_16712);
} else {
if((state_val_16718 === (2))){
var inst_16674 = (state_16717[(8)]);
var inst_16676 = (inst_16674 < n);
var state_16717__$1 = state_16717;
if(cljs.core.truth_(inst_16676)){
var statearr_16751_19035 = state_16717__$1;
(statearr_16751_19035[(1)] = (4));

} else {
var statearr_16752_19036 = state_16717__$1;
(statearr_16752_19036[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16718 === (11))){
var inst_16674 = (state_16717[(8)]);
var inst_16696 = (state_16717[(2)]);
var inst_16697 = (inst_16674 + (1));
var inst_16674__$1 = inst_16697;
var state_16717__$1 = (function (){var statearr_16756 = state_16717;
(statearr_16756[(10)] = inst_16696);

(statearr_16756[(8)] = inst_16674__$1);

return statearr_16756;
})();
var statearr_16757_19037 = state_16717__$1;
(statearr_16757_19037[(2)] = null);

(statearr_16757_19037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16718 === (9))){
var state_16717__$1 = state_16717;
var statearr_16758_19038 = state_16717__$1;
(statearr_16758_19038[(2)] = null);

(statearr_16758_19038[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16718 === (5))){
var state_16717__$1 = state_16717;
var statearr_16759_19039 = state_16717__$1;
(statearr_16759_19039[(2)] = null);

(statearr_16759_19039[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16718 === (10))){
var inst_16701 = (state_16717[(2)]);
var state_16717__$1 = state_16717;
var statearr_16763_19040 = state_16717__$1;
(statearr_16763_19040[(2)] = inst_16701);

(statearr_16763_19040[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16718 === (8))){
var inst_16680 = (state_16717[(7)]);
var state_16717__$1 = state_16717;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16717__$1,(11),out,inst_16680);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11496__auto__ = null;
var cljs$core$async$state_machine__11496__auto____0 = (function (){
var statearr_16767 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16767[(0)] = cljs$core$async$state_machine__11496__auto__);

(statearr_16767[(1)] = (1));

return statearr_16767;
});
var cljs$core$async$state_machine__11496__auto____1 = (function (state_16717){
while(true){
var ret_value__11497__auto__ = (function (){try{while(true){
var result__11498__auto__ = switch__11495__auto__(state_16717);
if(cljs.core.keyword_identical_QMARK_(result__11498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11498__auto__;
}
break;
}
}catch (e16768){var ex__11499__auto__ = e16768;
var statearr_16769_19043 = state_16717;
(statearr_16769_19043[(2)] = ex__11499__auto__);


if(cljs.core.seq((state_16717[(4)]))){
var statearr_16771_19044 = state_16717;
(statearr_16771_19044[(1)] = cljs.core.first((state_16717[(4)])));

} else {
throw ex__11499__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19048 = state_16717;
state_16717 = G__19048;
continue;
} else {
return ret_value__11497__auto__;
}
break;
}
});
cljs$core$async$state_machine__11496__auto__ = function(state_16717){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11496__auto____1.call(this,state_16717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11496__auto____0;
cljs$core$async$state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11496__auto____1;
return cljs$core$async$state_machine__11496__auto__;
})()
})();
var state__11661__auto__ = (function (){var statearr_16775 = f__11660__auto__();
(statearr_16775[(6)] = c__11659__auto___19030);

return statearr_16775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11661__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16788 = (function (f,ch,meta16778,_,fn1,meta16789){
this.f = f;
this.ch = ch;
this.meta16778 = meta16778;
this._ = _;
this.fn1 = fn1;
this.meta16789 = meta16789;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16790,meta16789__$1){
var self__ = this;
var _16790__$1 = this;
return (new cljs.core.async.t_cljs$core$async16788(self__.f,self__.ch,self__.meta16778,self__._,self__.fn1,meta16789__$1));
}));

(cljs.core.async.t_cljs$core$async16788.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16790){
var self__ = this;
var _16790__$1 = this;
return self__.meta16789;
}));

(cljs.core.async.t_cljs$core$async16788.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16788.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16788.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16788.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16776_SHARP_){
var G__16798 = (((p1__16776_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16776_SHARP_) : self__.f.call(null,p1__16776_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16798) : f1.call(null,G__16798));
});
}));

(cljs.core.async.t_cljs$core$async16788.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16778","meta16778",-614263805,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16777","cljs.core.async/t_cljs$core$async16777",-972361988,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16789","meta16789",791146087,null)], null);
}));

(cljs.core.async.t_cljs$core$async16788.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16788.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16788");

(cljs.core.async.t_cljs$core$async16788.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16788");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16788.
 */
cljs.core.async.__GT_t_cljs$core$async16788 = (function cljs$core$async$__GT_t_cljs$core$async16788(f,ch,meta16778,_,fn1,meta16789){
return (new cljs.core.async.t_cljs$core$async16788(f,ch,meta16778,_,fn1,meta16789));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16777 = (function (f,ch,meta16778){
this.f = f;
this.ch = ch;
this.meta16778 = meta16778;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16779,meta16778__$1){
var self__ = this;
var _16779__$1 = this;
return (new cljs.core.async.t_cljs$core$async16777(self__.f,self__.ch,meta16778__$1));
}));

(cljs.core.async.t_cljs$core$async16777.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16779){
var self__ = this;
var _16779__$1 = this;
return self__.meta16778;
}));

(cljs.core.async.t_cljs$core$async16777.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16777.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16777.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16777.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16777.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async16788(self__.f,self__.ch,self__.meta16778,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16805 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16805) : self__.f.call(null,G__16805));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16777.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16777.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16777.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16778","meta16778",-614263805,null)], null);
}));

(cljs.core.async.t_cljs$core$async16777.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16777.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16777");

(cljs.core.async.t_cljs$core$async16777.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16777");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16777.
 */
cljs.core.async.__GT_t_cljs$core$async16777 = (function cljs$core$async$__GT_t_cljs$core$async16777(f,ch,meta16778){
return (new cljs.core.async.t_cljs$core$async16777(f,ch,meta16778));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16777(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16813 = (function (f,ch,meta16814){
this.f = f;
this.ch = ch;
this.meta16814 = meta16814;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16815,meta16814__$1){
var self__ = this;
var _16815__$1 = this;
return (new cljs.core.async.t_cljs$core$async16813(self__.f,self__.ch,meta16814__$1));
}));

(cljs.core.async.t_cljs$core$async16813.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16815){
var self__ = this;
var _16815__$1 = this;
return self__.meta16814;
}));

(cljs.core.async.t_cljs$core$async16813.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16813.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16813.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16813.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16813.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16813.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16813.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16814","meta16814",1225510402,null)], null);
}));

(cljs.core.async.t_cljs$core$async16813.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16813.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16813");

(cljs.core.async.t_cljs$core$async16813.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16813");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16813.
 */
cljs.core.async.__GT_t_cljs$core$async16813 = (function cljs$core$async$__GT_t_cljs$core$async16813(f,ch,meta16814){
return (new cljs.core.async.t_cljs$core$async16813(f,ch,meta16814));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16813(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16821 = (function (p,ch,meta16822){
this.p = p;
this.ch = ch;
this.meta16822 = meta16822;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16823,meta16822__$1){
var self__ = this;
var _16823__$1 = this;
return (new cljs.core.async.t_cljs$core$async16821(self__.p,self__.ch,meta16822__$1));
}));

(cljs.core.async.t_cljs$core$async16821.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16823){
var self__ = this;
var _16823__$1 = this;
return self__.meta16822;
}));

(cljs.core.async.t_cljs$core$async16821.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16821.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16821.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16821.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16821.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16821.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16821.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16821.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16822","meta16822",166971423,null)], null);
}));

(cljs.core.async.t_cljs$core$async16821.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16821.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16821");

(cljs.core.async.t_cljs$core$async16821.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16821");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16821.
 */
cljs.core.async.__GT_t_cljs$core$async16821 = (function cljs$core$async$__GT_t_cljs$core$async16821(p,ch,meta16822){
return (new cljs.core.async.t_cljs$core$async16821(p,ch,meta16822));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async16821(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16841 = arguments.length;
switch (G__16841) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11659__auto___19237 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11660__auto__ = (function (){var switch__11495__auto__ = (function (state_16873){
var state_val_16874 = (state_16873[(1)]);
if((state_val_16874 === (7))){
var inst_16866 = (state_16873[(2)]);
var state_16873__$1 = state_16873;
var statearr_16878_19241 = state_16873__$1;
(statearr_16878_19241[(2)] = inst_16866);

(statearr_16878_19241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16874 === (1))){
var state_16873__$1 = state_16873;
var statearr_16881_19243 = state_16873__$1;
(statearr_16881_19243[(2)] = null);

(statearr_16881_19243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16874 === (4))){
var inst_16848 = (state_16873[(7)]);
var inst_16848__$1 = (state_16873[(2)]);
var inst_16849 = (inst_16848__$1 == null);
var state_16873__$1 = (function (){var statearr_16885 = state_16873;
(statearr_16885[(7)] = inst_16848__$1);

return statearr_16885;
})();
if(cljs.core.truth_(inst_16849)){
var statearr_16886_19244 = state_16873__$1;
(statearr_16886_19244[(1)] = (5));

} else {
var statearr_16887_19245 = state_16873__$1;
(statearr_16887_19245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16874 === (6))){
var inst_16848 = (state_16873[(7)]);
var inst_16857 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16848) : p.call(null,inst_16848));
var state_16873__$1 = state_16873;
if(cljs.core.truth_(inst_16857)){
var statearr_16922_19247 = state_16873__$1;
(statearr_16922_19247[(1)] = (8));

} else {
var statearr_16924_19248 = state_16873__$1;
(statearr_16924_19248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16874 === (3))){
var inst_16868 = (state_16873[(2)]);
var state_16873__$1 = state_16873;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16873__$1,inst_16868);
} else {
if((state_val_16874 === (2))){
var state_16873__$1 = state_16873;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16873__$1,(4),ch);
} else {
if((state_val_16874 === (11))){
var inst_16860 = (state_16873[(2)]);
var state_16873__$1 = state_16873;
var statearr_16932_19251 = state_16873__$1;
(statearr_16932_19251[(2)] = inst_16860);

(statearr_16932_19251[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16874 === (9))){
var state_16873__$1 = state_16873;
var statearr_16934_19252 = state_16873__$1;
(statearr_16934_19252[(2)] = null);

(statearr_16934_19252[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16874 === (5))){
var inst_16855 = cljs.core.async.close_BANG_(out);
var state_16873__$1 = state_16873;
var statearr_16935_19253 = state_16873__$1;
(statearr_16935_19253[(2)] = inst_16855);

(statearr_16935_19253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16874 === (10))){
var inst_16863 = (state_16873[(2)]);
var state_16873__$1 = (function (){var statearr_16936 = state_16873;
(statearr_16936[(8)] = inst_16863);

return statearr_16936;
})();
var statearr_16937_19261 = state_16873__$1;
(statearr_16937_19261[(2)] = null);

(statearr_16937_19261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16874 === (8))){
var inst_16848 = (state_16873[(7)]);
var state_16873__$1 = state_16873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16873__$1,(11),out,inst_16848);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11496__auto__ = null;
var cljs$core$async$state_machine__11496__auto____0 = (function (){
var statearr_16940 = [null,null,null,null,null,null,null,null,null];
(statearr_16940[(0)] = cljs$core$async$state_machine__11496__auto__);

(statearr_16940[(1)] = (1));

return statearr_16940;
});
var cljs$core$async$state_machine__11496__auto____1 = (function (state_16873){
while(true){
var ret_value__11497__auto__ = (function (){try{while(true){
var result__11498__auto__ = switch__11495__auto__(state_16873);
if(cljs.core.keyword_identical_QMARK_(result__11498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11498__auto__;
}
break;
}
}catch (e16941){var ex__11499__auto__ = e16941;
var statearr_16942_19262 = state_16873;
(statearr_16942_19262[(2)] = ex__11499__auto__);


if(cljs.core.seq((state_16873[(4)]))){
var statearr_16949_19263 = state_16873;
(statearr_16949_19263[(1)] = cljs.core.first((state_16873[(4)])));

} else {
throw ex__11499__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19265 = state_16873;
state_16873 = G__19265;
continue;
} else {
return ret_value__11497__auto__;
}
break;
}
});
cljs$core$async$state_machine__11496__auto__ = function(state_16873){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11496__auto____1.call(this,state_16873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11496__auto____0;
cljs$core$async$state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11496__auto____1;
return cljs$core$async$state_machine__11496__auto__;
})()
})();
var state__11661__auto__ = (function (){var statearr_16961 = f__11660__auto__();
(statearr_16961[(6)] = c__11659__auto___19237);

return statearr_16961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11661__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16963 = arguments.length;
switch (G__16963) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__11659__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11660__auto__ = (function (){var switch__11495__auto__ = (function (state_17036){
var state_val_17037 = (state_17036[(1)]);
if((state_val_17037 === (7))){
var inst_17028 = (state_17036[(2)]);
var state_17036__$1 = state_17036;
var statearr_17039_19271 = state_17036__$1;
(statearr_17039_19271[(2)] = inst_17028);

(statearr_17039_19271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17037 === (20))){
var inst_16994 = (state_17036[(7)]);
var inst_17005 = (state_17036[(2)]);
var inst_17009 = cljs.core.next(inst_16994);
var inst_16979 = inst_17009;
var inst_16980 = null;
var inst_16981 = (0);
var inst_16982 = (0);
var state_17036__$1 = (function (){var statearr_17040 = state_17036;
(statearr_17040[(8)] = inst_16982);

(statearr_17040[(9)] = inst_16980);

(statearr_17040[(10)] = inst_17005);

(statearr_17040[(11)] = inst_16981);

(statearr_17040[(12)] = inst_16979);

return statearr_17040;
})();
var statearr_17041_19276 = state_17036__$1;
(statearr_17041_19276[(2)] = null);

(statearr_17041_19276[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17037 === (1))){
var state_17036__$1 = state_17036;
var statearr_17042_19277 = state_17036__$1;
(statearr_17042_19277[(2)] = null);

(statearr_17042_19277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17037 === (4))){
var inst_16968 = (state_17036[(13)]);
var inst_16968__$1 = (state_17036[(2)]);
var inst_16969 = (inst_16968__$1 == null);
var state_17036__$1 = (function (){var statearr_17043 = state_17036;
(statearr_17043[(13)] = inst_16968__$1);

return statearr_17043;
})();
if(cljs.core.truth_(inst_16969)){
var statearr_17044_19278 = state_17036__$1;
(statearr_17044_19278[(1)] = (5));

} else {
var statearr_17045_19280 = state_17036__$1;
(statearr_17045_19280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17037 === (15))){
var state_17036__$1 = state_17036;
var statearr_17050_19282 = state_17036__$1;
(statearr_17050_19282[(2)] = null);

(statearr_17050_19282[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17037 === (21))){
var state_17036__$1 = state_17036;
var statearr_17053_19283 = state_17036__$1;
(statearr_17053_19283[(2)] = null);

(statearr_17053_19283[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17037 === (13))){
var inst_16982 = (state_17036[(8)]);
var inst_16980 = (state_17036[(9)]);
var inst_16981 = (state_17036[(11)]);
var inst_16979 = (state_17036[(12)]);
var inst_16990 = (state_17036[(2)]);
var inst_16991 = (inst_16982 + (1));
var tmp17046 = inst_16980;
var tmp17047 = inst_16981;
var tmp17048 = inst_16979;
var inst_16979__$1 = tmp17048;
var inst_16980__$1 = tmp17046;
var inst_16981__$1 = tmp17047;
var inst_16982__$1 = inst_16991;
var state_17036__$1 = (function (){var statearr_17057 = state_17036;
(statearr_17057[(8)] = inst_16982__$1);

(statearr_17057[(9)] = inst_16980__$1);

(statearr_17057[(11)] = inst_16981__$1);

(statearr_17057[(12)] = inst_16979__$1);

(statearr_17057[(14)] = inst_16990);

return statearr_17057;
})();
var statearr_17058_19296 = state_17036__$1;
(statearr_17058_19296[(2)] = null);

(statearr_17058_19296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17037 === (22))){
var state_17036__$1 = state_17036;
var statearr_17059_19301 = state_17036__$1;
(statearr_17059_19301[(2)] = null);

(statearr_17059_19301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17037 === (6))){
var inst_16968 = (state_17036[(13)]);
var inst_16977 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16968) : f.call(null,inst_16968));
var inst_16978 = cljs.core.seq(inst_16977);
var inst_16979 = inst_16978;
var inst_16980 = null;
var inst_16981 = (0);
var inst_16982 = (0);
var state_17036__$1 = (function (){var statearr_17060 = state_17036;
(statearr_17060[(8)] = inst_16982);

(statearr_17060[(9)] = inst_16980);

(statearr_17060[(11)] = inst_16981);

(statearr_17060[(12)] = inst_16979);

return statearr_17060;
})();
var statearr_17061_19308 = state_17036__$1;
(statearr_17061_19308[(2)] = null);

(statearr_17061_19308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17037 === (17))){
var inst_16994 = (state_17036[(7)]);
var inst_16998 = cljs.core.chunk_first(inst_16994);
var inst_16999 = cljs.core.chunk_rest(inst_16994);
var inst_17000 = cljs.core.count(inst_16998);
var inst_16979 = inst_16999;
var inst_16980 = inst_16998;
var inst_16981 = inst_17000;
var inst_16982 = (0);
var state_17036__$1 = (function (){var statearr_17062 = state_17036;
(statearr_17062[(8)] = inst_16982);

(statearr_17062[(9)] = inst_16980);

(statearr_17062[(11)] = inst_16981);

(statearr_17062[(12)] = inst_16979);

return statearr_17062;
})();
var statearr_17063_19312 = state_17036__$1;
(statearr_17063_19312[(2)] = null);

(statearr_17063_19312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17037 === (3))){
var inst_17030 = (state_17036[(2)]);
var state_17036__$1 = state_17036;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17036__$1,inst_17030);
} else {
if((state_val_17037 === (12))){
var inst_17017 = (state_17036[(2)]);
var state_17036__$1 = state_17036;
var statearr_17064_19319 = state_17036__$1;
(statearr_17064_19319[(2)] = inst_17017);

(statearr_17064_19319[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17037 === (2))){
var state_17036__$1 = state_17036;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17036__$1,(4),in$);
} else {
if((state_val_17037 === (23))){
var inst_17025 = (state_17036[(2)]);
var state_17036__$1 = state_17036;
var statearr_17065_19320 = state_17036__$1;
(statearr_17065_19320[(2)] = inst_17025);

(statearr_17065_19320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17037 === (19))){
var inst_17012 = (state_17036[(2)]);
var state_17036__$1 = state_17036;
var statearr_17067_19323 = state_17036__$1;
(statearr_17067_19323[(2)] = inst_17012);

(statearr_17067_19323[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17037 === (11))){
var inst_16994 = (state_17036[(7)]);
var inst_16979 = (state_17036[(12)]);
var inst_16994__$1 = cljs.core.seq(inst_16979);
var state_17036__$1 = (function (){var statearr_17068 = state_17036;
(statearr_17068[(7)] = inst_16994__$1);

return statearr_17068;
})();
if(inst_16994__$1){
var statearr_17070_19324 = state_17036__$1;
(statearr_17070_19324[(1)] = (14));

} else {
var statearr_17071_19325 = state_17036__$1;
(statearr_17071_19325[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17037 === (9))){
var inst_17019 = (state_17036[(2)]);
var inst_17020 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17036__$1 = (function (){var statearr_17073 = state_17036;
(statearr_17073[(15)] = inst_17019);

return statearr_17073;
})();
if(cljs.core.truth_(inst_17020)){
var statearr_17077_19326 = state_17036__$1;
(statearr_17077_19326[(1)] = (21));

} else {
var statearr_17078_19327 = state_17036__$1;
(statearr_17078_19327[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17037 === (5))){
var inst_16971 = cljs.core.async.close_BANG_(out);
var state_17036__$1 = state_17036;
var statearr_17084_19329 = state_17036__$1;
(statearr_17084_19329[(2)] = inst_16971);

(statearr_17084_19329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17037 === (14))){
var inst_16994 = (state_17036[(7)]);
var inst_16996 = cljs.core.chunked_seq_QMARK_(inst_16994);
var state_17036__$1 = state_17036;
if(inst_16996){
var statearr_17087_19330 = state_17036__$1;
(statearr_17087_19330[(1)] = (17));

} else {
var statearr_17089_19331 = state_17036__$1;
(statearr_17089_19331[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17037 === (16))){
var inst_17015 = (state_17036[(2)]);
var state_17036__$1 = state_17036;
var statearr_17091_19332 = state_17036__$1;
(statearr_17091_19332[(2)] = inst_17015);

(statearr_17091_19332[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17037 === (10))){
var inst_16982 = (state_17036[(8)]);
var inst_16980 = (state_17036[(9)]);
var inst_16988 = cljs.core._nth(inst_16980,inst_16982);
var state_17036__$1 = state_17036;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17036__$1,(13),out,inst_16988);
} else {
if((state_val_17037 === (18))){
var inst_16994 = (state_17036[(7)]);
var inst_17003 = cljs.core.first(inst_16994);
var state_17036__$1 = state_17036;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17036__$1,(20),out,inst_17003);
} else {
if((state_val_17037 === (8))){
var inst_16982 = (state_17036[(8)]);
var inst_16981 = (state_17036[(11)]);
var inst_16985 = (inst_16982 < inst_16981);
var inst_16986 = inst_16985;
var state_17036__$1 = state_17036;
if(cljs.core.truth_(inst_16986)){
var statearr_17095_19338 = state_17036__$1;
(statearr_17095_19338[(1)] = (10));

} else {
var statearr_17098_19346 = state_17036__$1;
(statearr_17098_19346[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__11496__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__11496__auto____0 = (function (){
var statearr_17108 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17108[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__11496__auto__);

(statearr_17108[(1)] = (1));

return statearr_17108;
});
var cljs$core$async$mapcat_STAR__$_state_machine__11496__auto____1 = (function (state_17036){
while(true){
var ret_value__11497__auto__ = (function (){try{while(true){
var result__11498__auto__ = switch__11495__auto__(state_17036);
if(cljs.core.keyword_identical_QMARK_(result__11498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11498__auto__;
}
break;
}
}catch (e17111){var ex__11499__auto__ = e17111;
var statearr_17113_19347 = state_17036;
(statearr_17113_19347[(2)] = ex__11499__auto__);


if(cljs.core.seq((state_17036[(4)]))){
var statearr_17115_19348 = state_17036;
(statearr_17115_19348[(1)] = cljs.core.first((state_17036[(4)])));

} else {
throw ex__11499__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19349 = state_17036;
state_17036 = G__19349;
continue;
} else {
return ret_value__11497__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__11496__auto__ = function(state_17036){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__11496__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__11496__auto____1.call(this,state_17036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__11496__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__11496__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__11496__auto__;
})()
})();
var state__11661__auto__ = (function (){var statearr_17119 = f__11660__auto__();
(statearr_17119[(6)] = c__11659__auto__);

return statearr_17119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11661__auto__);
}));

return c__11659__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17124 = arguments.length;
switch (G__17124) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17131 = arguments.length;
switch (G__17131) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17141 = arguments.length;
switch (G__17141) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11659__auto___19404 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11660__auto__ = (function (){var switch__11495__auto__ = (function (state_17177){
var state_val_17178 = (state_17177[(1)]);
if((state_val_17178 === (7))){
var inst_17172 = (state_17177[(2)]);
var state_17177__$1 = state_17177;
var statearr_17180_19429 = state_17177__$1;
(statearr_17180_19429[(2)] = inst_17172);

(statearr_17180_19429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17178 === (1))){
var inst_17148 = null;
var state_17177__$1 = (function (){var statearr_17183 = state_17177;
(statearr_17183[(7)] = inst_17148);

return statearr_17183;
})();
var statearr_17185_19439 = state_17177__$1;
(statearr_17185_19439[(2)] = null);

(statearr_17185_19439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17178 === (4))){
var inst_17154 = (state_17177[(8)]);
var inst_17154__$1 = (state_17177[(2)]);
var inst_17156 = (inst_17154__$1 == null);
var inst_17157 = cljs.core.not(inst_17156);
var state_17177__$1 = (function (){var statearr_17186 = state_17177;
(statearr_17186[(8)] = inst_17154__$1);

return statearr_17186;
})();
if(inst_17157){
var statearr_17187_19456 = state_17177__$1;
(statearr_17187_19456[(1)] = (5));

} else {
var statearr_17189_19457 = state_17177__$1;
(statearr_17189_19457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17178 === (6))){
var state_17177__$1 = state_17177;
var statearr_17190_19462 = state_17177__$1;
(statearr_17190_19462[(2)] = null);

(statearr_17190_19462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17178 === (3))){
var inst_17174 = (state_17177[(2)]);
var inst_17175 = cljs.core.async.close_BANG_(out);
var state_17177__$1 = (function (){var statearr_17193 = state_17177;
(statearr_17193[(9)] = inst_17174);

return statearr_17193;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17177__$1,inst_17175);
} else {
if((state_val_17178 === (2))){
var state_17177__$1 = state_17177;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17177__$1,(4),ch);
} else {
if((state_val_17178 === (11))){
var inst_17154 = (state_17177[(8)]);
var inst_17166 = (state_17177[(2)]);
var inst_17148 = inst_17154;
var state_17177__$1 = (function (){var statearr_17195 = state_17177;
(statearr_17195[(7)] = inst_17148);

(statearr_17195[(10)] = inst_17166);

return statearr_17195;
})();
var statearr_17198_19477 = state_17177__$1;
(statearr_17198_19477[(2)] = null);

(statearr_17198_19477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17178 === (9))){
var inst_17154 = (state_17177[(8)]);
var state_17177__$1 = state_17177;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17177__$1,(11),out,inst_17154);
} else {
if((state_val_17178 === (5))){
var inst_17148 = (state_17177[(7)]);
var inst_17154 = (state_17177[(8)]);
var inst_17160 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17154,inst_17148);
var state_17177__$1 = state_17177;
if(inst_17160){
var statearr_17203_19488 = state_17177__$1;
(statearr_17203_19488[(1)] = (8));

} else {
var statearr_17204_19489 = state_17177__$1;
(statearr_17204_19489[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17178 === (10))){
var inst_17169 = (state_17177[(2)]);
var state_17177__$1 = state_17177;
var statearr_17205_19490 = state_17177__$1;
(statearr_17205_19490[(2)] = inst_17169);

(statearr_17205_19490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17178 === (8))){
var inst_17148 = (state_17177[(7)]);
var tmp17199 = inst_17148;
var inst_17148__$1 = tmp17199;
var state_17177__$1 = (function (){var statearr_17207 = state_17177;
(statearr_17207[(7)] = inst_17148__$1);

return statearr_17207;
})();
var statearr_17208_19492 = state_17177__$1;
(statearr_17208_19492[(2)] = null);

(statearr_17208_19492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11496__auto__ = null;
var cljs$core$async$state_machine__11496__auto____0 = (function (){
var statearr_17209 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17209[(0)] = cljs$core$async$state_machine__11496__auto__);

(statearr_17209[(1)] = (1));

return statearr_17209;
});
var cljs$core$async$state_machine__11496__auto____1 = (function (state_17177){
while(true){
var ret_value__11497__auto__ = (function (){try{while(true){
var result__11498__auto__ = switch__11495__auto__(state_17177);
if(cljs.core.keyword_identical_QMARK_(result__11498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11498__auto__;
}
break;
}
}catch (e17210){var ex__11499__auto__ = e17210;
var statearr_17211_19496 = state_17177;
(statearr_17211_19496[(2)] = ex__11499__auto__);


if(cljs.core.seq((state_17177[(4)]))){
var statearr_17212_19497 = state_17177;
(statearr_17212_19497[(1)] = cljs.core.first((state_17177[(4)])));

} else {
throw ex__11499__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19498 = state_17177;
state_17177 = G__19498;
continue;
} else {
return ret_value__11497__auto__;
}
break;
}
});
cljs$core$async$state_machine__11496__auto__ = function(state_17177){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11496__auto____1.call(this,state_17177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11496__auto____0;
cljs$core$async$state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11496__auto____1;
return cljs$core$async$state_machine__11496__auto__;
})()
})();
var state__11661__auto__ = (function (){var statearr_17217 = f__11660__auto__();
(statearr_17217[(6)] = c__11659__auto___19404);

return statearr_17217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11661__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17222 = arguments.length;
switch (G__17222) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11659__auto___19501 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11660__auto__ = (function (){var switch__11495__auto__ = (function (state_17269){
var state_val_17270 = (state_17269[(1)]);
if((state_val_17270 === (7))){
var inst_17265 = (state_17269[(2)]);
var state_17269__$1 = state_17269;
var statearr_17283_19502 = state_17269__$1;
(statearr_17283_19502[(2)] = inst_17265);

(statearr_17283_19502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17270 === (1))){
var inst_17232 = (new Array(n));
var inst_17233 = inst_17232;
var inst_17234 = (0);
var state_17269__$1 = (function (){var statearr_17284 = state_17269;
(statearr_17284[(7)] = inst_17233);

(statearr_17284[(8)] = inst_17234);

return statearr_17284;
})();
var statearr_17285_19503 = state_17269__$1;
(statearr_17285_19503[(2)] = null);

(statearr_17285_19503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17270 === (4))){
var inst_17237 = (state_17269[(9)]);
var inst_17237__$1 = (state_17269[(2)]);
var inst_17238 = (inst_17237__$1 == null);
var inst_17239 = cljs.core.not(inst_17238);
var state_17269__$1 = (function (){var statearr_17289 = state_17269;
(statearr_17289[(9)] = inst_17237__$1);

return statearr_17289;
})();
if(inst_17239){
var statearr_17292_19504 = state_17269__$1;
(statearr_17292_19504[(1)] = (5));

} else {
var statearr_17293_19505 = state_17269__$1;
(statearr_17293_19505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17270 === (15))){
var inst_17259 = (state_17269[(2)]);
var state_17269__$1 = state_17269;
var statearr_17296_19506 = state_17269__$1;
(statearr_17296_19506[(2)] = inst_17259);

(statearr_17296_19506[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17270 === (13))){
var state_17269__$1 = state_17269;
var statearr_17303_19507 = state_17269__$1;
(statearr_17303_19507[(2)] = null);

(statearr_17303_19507[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17270 === (6))){
var inst_17234 = (state_17269[(8)]);
var inst_17255 = (inst_17234 > (0));
var state_17269__$1 = state_17269;
if(cljs.core.truth_(inst_17255)){
var statearr_17307_19508 = state_17269__$1;
(statearr_17307_19508[(1)] = (12));

} else {
var statearr_17308_19509 = state_17269__$1;
(statearr_17308_19509[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17270 === (3))){
var inst_17267 = (state_17269[(2)]);
var state_17269__$1 = state_17269;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17269__$1,inst_17267);
} else {
if((state_val_17270 === (12))){
var inst_17233 = (state_17269[(7)]);
var inst_17257 = cljs.core.vec(inst_17233);
var state_17269__$1 = state_17269;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17269__$1,(15),out,inst_17257);
} else {
if((state_val_17270 === (2))){
var state_17269__$1 = state_17269;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17269__$1,(4),ch);
} else {
if((state_val_17270 === (11))){
var inst_17249 = (state_17269[(2)]);
var inst_17250 = (new Array(n));
var inst_17233 = inst_17250;
var inst_17234 = (0);
var state_17269__$1 = (function (){var statearr_17320 = state_17269;
(statearr_17320[(7)] = inst_17233);

(statearr_17320[(8)] = inst_17234);

(statearr_17320[(10)] = inst_17249);

return statearr_17320;
})();
var statearr_17322_19514 = state_17269__$1;
(statearr_17322_19514[(2)] = null);

(statearr_17322_19514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17270 === (9))){
var inst_17233 = (state_17269[(7)]);
var inst_17247 = cljs.core.vec(inst_17233);
var state_17269__$1 = state_17269;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17269__$1,(11),out,inst_17247);
} else {
if((state_val_17270 === (5))){
var inst_17233 = (state_17269[(7)]);
var inst_17242 = (state_17269[(11)]);
var inst_17237 = (state_17269[(9)]);
var inst_17234 = (state_17269[(8)]);
var inst_17241 = (inst_17233[inst_17234] = inst_17237);
var inst_17242__$1 = (inst_17234 + (1));
var inst_17243 = (inst_17242__$1 < n);
var state_17269__$1 = (function (){var statearr_17324 = state_17269;
(statearr_17324[(11)] = inst_17242__$1);

(statearr_17324[(12)] = inst_17241);

return statearr_17324;
})();
if(cljs.core.truth_(inst_17243)){
var statearr_17331_19518 = state_17269__$1;
(statearr_17331_19518[(1)] = (8));

} else {
var statearr_17334_19519 = state_17269__$1;
(statearr_17334_19519[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17270 === (14))){
var inst_17262 = (state_17269[(2)]);
var inst_17263 = cljs.core.async.close_BANG_(out);
var state_17269__$1 = (function (){var statearr_17373 = state_17269;
(statearr_17373[(13)] = inst_17262);

return statearr_17373;
})();
var statearr_17379_19520 = state_17269__$1;
(statearr_17379_19520[(2)] = inst_17263);

(statearr_17379_19520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17270 === (10))){
var inst_17253 = (state_17269[(2)]);
var state_17269__$1 = state_17269;
var statearr_17382_19521 = state_17269__$1;
(statearr_17382_19521[(2)] = inst_17253);

(statearr_17382_19521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17270 === (8))){
var inst_17233 = (state_17269[(7)]);
var inst_17242 = (state_17269[(11)]);
var tmp17353 = inst_17233;
var inst_17233__$1 = tmp17353;
var inst_17234 = inst_17242;
var state_17269__$1 = (function (){var statearr_17388 = state_17269;
(statearr_17388[(7)] = inst_17233__$1);

(statearr_17388[(8)] = inst_17234);

return statearr_17388;
})();
var statearr_17393_19522 = state_17269__$1;
(statearr_17393_19522[(2)] = null);

(statearr_17393_19522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11496__auto__ = null;
var cljs$core$async$state_machine__11496__auto____0 = (function (){
var statearr_17395 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17395[(0)] = cljs$core$async$state_machine__11496__auto__);

(statearr_17395[(1)] = (1));

return statearr_17395;
});
var cljs$core$async$state_machine__11496__auto____1 = (function (state_17269){
while(true){
var ret_value__11497__auto__ = (function (){try{while(true){
var result__11498__auto__ = switch__11495__auto__(state_17269);
if(cljs.core.keyword_identical_QMARK_(result__11498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11498__auto__;
}
break;
}
}catch (e17398){var ex__11499__auto__ = e17398;
var statearr_17399_19523 = state_17269;
(statearr_17399_19523[(2)] = ex__11499__auto__);


if(cljs.core.seq((state_17269[(4)]))){
var statearr_17400_19524 = state_17269;
(statearr_17400_19524[(1)] = cljs.core.first((state_17269[(4)])));

} else {
throw ex__11499__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19525 = state_17269;
state_17269 = G__19525;
continue;
} else {
return ret_value__11497__auto__;
}
break;
}
});
cljs$core$async$state_machine__11496__auto__ = function(state_17269){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11496__auto____1.call(this,state_17269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11496__auto____0;
cljs$core$async$state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11496__auto____1;
return cljs$core$async$state_machine__11496__auto__;
})()
})();
var state__11661__auto__ = (function (){var statearr_17428 = f__11660__auto__();
(statearr_17428[(6)] = c__11659__auto___19501);

return statearr_17428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11661__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17434 = arguments.length;
switch (G__17434) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__11659__auto___19539 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__11660__auto__ = (function (){var switch__11495__auto__ = (function (state_17500){
var state_val_17501 = (state_17500[(1)]);
if((state_val_17501 === (7))){
var inst_17492 = (state_17500[(2)]);
var state_17500__$1 = state_17500;
var statearr_17507_19548 = state_17500__$1;
(statearr_17507_19548[(2)] = inst_17492);

(statearr_17507_19548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17501 === (1))){
var inst_17449 = [];
var inst_17450 = inst_17449;
var inst_17451 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17500__$1 = (function (){var statearr_17510 = state_17500;
(statearr_17510[(7)] = inst_17450);

(statearr_17510[(8)] = inst_17451);

return statearr_17510;
})();
var statearr_17511_19552 = state_17500__$1;
(statearr_17511_19552[(2)] = null);

(statearr_17511_19552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17501 === (4))){
var inst_17454 = (state_17500[(9)]);
var inst_17454__$1 = (state_17500[(2)]);
var inst_17458 = (inst_17454__$1 == null);
var inst_17459 = cljs.core.not(inst_17458);
var state_17500__$1 = (function (){var statearr_17513 = state_17500;
(statearr_17513[(9)] = inst_17454__$1);

return statearr_17513;
})();
if(inst_17459){
var statearr_17521_19559 = state_17500__$1;
(statearr_17521_19559[(1)] = (5));

} else {
var statearr_17522_19561 = state_17500__$1;
(statearr_17522_19561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17501 === (15))){
var inst_17450 = (state_17500[(7)]);
var inst_17484 = cljs.core.vec(inst_17450);
var state_17500__$1 = state_17500;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17500__$1,(18),out,inst_17484);
} else {
if((state_val_17501 === (13))){
var inst_17479 = (state_17500[(2)]);
var state_17500__$1 = state_17500;
var statearr_17527_19562 = state_17500__$1;
(statearr_17527_19562[(2)] = inst_17479);

(statearr_17527_19562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17501 === (6))){
var inst_17450 = (state_17500[(7)]);
var inst_17481 = inst_17450.length;
var inst_17482 = (inst_17481 > (0));
var state_17500__$1 = state_17500;
if(cljs.core.truth_(inst_17482)){
var statearr_17533_19563 = state_17500__$1;
(statearr_17533_19563[(1)] = (15));

} else {
var statearr_17534_19564 = state_17500__$1;
(statearr_17534_19564[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17501 === (17))){
var inst_17489 = (state_17500[(2)]);
var inst_17490 = cljs.core.async.close_BANG_(out);
var state_17500__$1 = (function (){var statearr_17543 = state_17500;
(statearr_17543[(10)] = inst_17489);

return statearr_17543;
})();
var statearr_17550_19565 = state_17500__$1;
(statearr_17550_19565[(2)] = inst_17490);

(statearr_17550_19565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17501 === (3))){
var inst_17494 = (state_17500[(2)]);
var state_17500__$1 = state_17500;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17500__$1,inst_17494);
} else {
if((state_val_17501 === (12))){
var inst_17450 = (state_17500[(7)]);
var inst_17472 = cljs.core.vec(inst_17450);
var state_17500__$1 = state_17500;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17500__$1,(14),out,inst_17472);
} else {
if((state_val_17501 === (2))){
var state_17500__$1 = state_17500;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17500__$1,(4),ch);
} else {
if((state_val_17501 === (11))){
var inst_17450 = (state_17500[(7)]);
var inst_17461 = (state_17500[(11)]);
var inst_17454 = (state_17500[(9)]);
var inst_17469 = inst_17450.push(inst_17454);
var tmp17561 = inst_17450;
var inst_17450__$1 = tmp17561;
var inst_17451 = inst_17461;
var state_17500__$1 = (function (){var statearr_17571 = state_17500;
(statearr_17571[(7)] = inst_17450__$1);

(statearr_17571[(12)] = inst_17469);

(statearr_17571[(8)] = inst_17451);

return statearr_17571;
})();
var statearr_17575_19567 = state_17500__$1;
(statearr_17575_19567[(2)] = null);

(statearr_17575_19567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17501 === (9))){
var inst_17451 = (state_17500[(8)]);
var inst_17465 = cljs.core.keyword_identical_QMARK_(inst_17451,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17500__$1 = state_17500;
var statearr_17583_19568 = state_17500__$1;
(statearr_17583_19568[(2)] = inst_17465);

(statearr_17583_19568[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17501 === (5))){
var inst_17461 = (state_17500[(11)]);
var inst_17451 = (state_17500[(8)]);
var inst_17462 = (state_17500[(13)]);
var inst_17454 = (state_17500[(9)]);
var inst_17461__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17454) : f.call(null,inst_17454));
var inst_17462__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17461__$1,inst_17451);
var state_17500__$1 = (function (){var statearr_17588 = state_17500;
(statearr_17588[(11)] = inst_17461__$1);

(statearr_17588[(13)] = inst_17462__$1);

return statearr_17588;
})();
if(inst_17462__$1){
var statearr_17589_19569 = state_17500__$1;
(statearr_17589_19569[(1)] = (8));

} else {
var statearr_17590_19570 = state_17500__$1;
(statearr_17590_19570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17501 === (14))){
var inst_17461 = (state_17500[(11)]);
var inst_17454 = (state_17500[(9)]);
var inst_17474 = (state_17500[(2)]);
var inst_17475 = [];
var inst_17476 = inst_17475.push(inst_17454);
var inst_17450 = inst_17475;
var inst_17451 = inst_17461;
var state_17500__$1 = (function (){var statearr_17601 = state_17500;
(statearr_17601[(7)] = inst_17450);

(statearr_17601[(8)] = inst_17451);

(statearr_17601[(14)] = inst_17474);

(statearr_17601[(15)] = inst_17476);

return statearr_17601;
})();
var statearr_17602_19571 = state_17500__$1;
(statearr_17602_19571[(2)] = null);

(statearr_17602_19571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17501 === (16))){
var state_17500__$1 = state_17500;
var statearr_17607_19572 = state_17500__$1;
(statearr_17607_19572[(2)] = null);

(statearr_17607_19572[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17501 === (10))){
var inst_17467 = (state_17500[(2)]);
var state_17500__$1 = state_17500;
if(cljs.core.truth_(inst_17467)){
var statearr_17609_19573 = state_17500__$1;
(statearr_17609_19573[(1)] = (11));

} else {
var statearr_17610_19574 = state_17500__$1;
(statearr_17610_19574[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17501 === (18))){
var inst_17486 = (state_17500[(2)]);
var state_17500__$1 = state_17500;
var statearr_17611_19588 = state_17500__$1;
(statearr_17611_19588[(2)] = inst_17486);

(statearr_17611_19588[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17501 === (8))){
var inst_17462 = (state_17500[(13)]);
var state_17500__$1 = state_17500;
var statearr_17616_19589 = state_17500__$1;
(statearr_17616_19589[(2)] = inst_17462);

(statearr_17616_19589[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11496__auto__ = null;
var cljs$core$async$state_machine__11496__auto____0 = (function (){
var statearr_17617 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17617[(0)] = cljs$core$async$state_machine__11496__auto__);

(statearr_17617[(1)] = (1));

return statearr_17617;
});
var cljs$core$async$state_machine__11496__auto____1 = (function (state_17500){
while(true){
var ret_value__11497__auto__ = (function (){try{while(true){
var result__11498__auto__ = switch__11495__auto__(state_17500);
if(cljs.core.keyword_identical_QMARK_(result__11498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11498__auto__;
}
break;
}
}catch (e17621){var ex__11499__auto__ = e17621;
var statearr_17622_19598 = state_17500;
(statearr_17622_19598[(2)] = ex__11499__auto__);


if(cljs.core.seq((state_17500[(4)]))){
var statearr_17623_19599 = state_17500;
(statearr_17623_19599[(1)] = cljs.core.first((state_17500[(4)])));

} else {
throw ex__11499__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19600 = state_17500;
state_17500 = G__19600;
continue;
} else {
return ret_value__11497__auto__;
}
break;
}
});
cljs$core$async$state_machine__11496__auto__ = function(state_17500){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11496__auto____1.call(this,state_17500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11496__auto____0;
cljs$core$async$state_machine__11496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11496__auto____1;
return cljs$core$async$state_machine__11496__auto__;
})()
})();
var state__11661__auto__ = (function (){var statearr_17624 = f__11660__auto__();
(statearr_17624[(6)] = c__11659__auto___19539);

return statearr_17624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11661__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
