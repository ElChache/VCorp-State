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
cljs.core.async.t_cljs$core$async12518 = (function (f,blockable,meta12519){
this.f = f;
this.blockable = blockable;
this.meta12519 = meta12519;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12520,meta12519__$1){
var self__ = this;
var _12520__$1 = this;
return (new cljs.core.async.t_cljs$core$async12518(self__.f,self__.blockable,meta12519__$1));
}));

(cljs.core.async.t_cljs$core$async12518.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12520){
var self__ = this;
var _12520__$1 = this;
return self__.meta12519;
}));

(cljs.core.async.t_cljs$core$async12518.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12518.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12518.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async12518.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async12518.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta12519","meta12519",-6231805,null)], null);
}));

(cljs.core.async.t_cljs$core$async12518.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12518.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12518");

(cljs.core.async.t_cljs$core$async12518.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async12518");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12518.
 */
cljs.core.async.__GT_t_cljs$core$async12518 = (function cljs$core$async$__GT_t_cljs$core$async12518(f,blockable,meta12519){
return (new cljs.core.async.t_cljs$core$async12518(f,blockable,meta12519));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__12517 = arguments.length;
switch (G__12517) {
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
return (new cljs.core.async.t_cljs$core$async12518(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12524 = arguments.length;
switch (G__12524) {
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
var G__12531 = arguments.length;
switch (G__12531) {
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
var G__12554 = arguments.length;
switch (G__12554) {
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
var val_14996 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14996) : fn1.call(null,val_14996));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14996) : fn1.call(null,val_14996));
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
var G__12556 = arguments.length;
switch (G__12556) {
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
var n__5593__auto___15009 = n;
var x_15010 = (0);
while(true){
if((x_15010 < n__5593__auto___15009)){
(a[x_15010] = x_15010);

var G__15011 = (x_15010 + (1));
x_15010 = G__15011;
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
cljs.core.async.t_cljs$core$async12579 = (function (flag,meta12580){
this.flag = flag;
this.meta12580 = meta12580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12581,meta12580__$1){
var self__ = this;
var _12581__$1 = this;
return (new cljs.core.async.t_cljs$core$async12579(self__.flag,meta12580__$1));
}));

(cljs.core.async.t_cljs$core$async12579.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12581){
var self__ = this;
var _12581__$1 = this;
return self__.meta12580;
}));

(cljs.core.async.t_cljs$core$async12579.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12579.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async12579.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12579.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async12579.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta12580","meta12580",-981786908,null)], null);
}));

(cljs.core.async.t_cljs$core$async12579.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12579.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12579");

(cljs.core.async.t_cljs$core$async12579.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async12579");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12579.
 */
cljs.core.async.__GT_t_cljs$core$async12579 = (function cljs$core$async$__GT_t_cljs$core$async12579(flag,meta12580){
return (new cljs.core.async.t_cljs$core$async12579(flag,meta12580));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async12579(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12583 = (function (flag,cb,meta12584){
this.flag = flag;
this.cb = cb;
this.meta12584 = meta12584;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12585,meta12584__$1){
var self__ = this;
var _12585__$1 = this;
return (new cljs.core.async.t_cljs$core$async12583(self__.flag,self__.cb,meta12584__$1));
}));

(cljs.core.async.t_cljs$core$async12583.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12585){
var self__ = this;
var _12585__$1 = this;
return self__.meta12584;
}));

(cljs.core.async.t_cljs$core$async12583.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12583.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async12583.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12583.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async12583.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta12584","meta12584",-2045174615,null)], null);
}));

(cljs.core.async.t_cljs$core$async12583.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12583.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12583");

(cljs.core.async.t_cljs$core$async12583.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async12583");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12583.
 */
cljs.core.async.__GT_t_cljs$core$async12583 = (function cljs$core$async$__GT_t_cljs$core$async12583(flag,cb,meta12584){
return (new cljs.core.async.t_cljs$core$async12583(flag,cb,meta12584));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async12583(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__12587_SHARP_){
var G__12589 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12587_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__12589) : fret.call(null,G__12589));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12588_SHARP_){
var G__12590 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12588_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__12590) : fret.call(null,G__12590));
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
var G__15016 = (i + (1));
i = G__15016;
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
var len__5726__auto___15017 = arguments.length;
var i__5727__auto___15018 = (0);
while(true){
if((i__5727__auto___15018 < len__5726__auto___15017)){
args__5732__auto__.push((arguments[i__5727__auto___15018]));

var G__15019 = (i__5727__auto___15018 + (1));
i__5727__auto___15018 = G__15019;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12593){
var map__12594 = p__12593;
var map__12594__$1 = cljs.core.__destructure_map(map__12594);
var opts = map__12594__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12591){
var G__12592 = cljs.core.first(seq12591);
var seq12591__$1 = cljs.core.next(seq12591);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12592,seq12591__$1);
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
var G__12596 = arguments.length;
switch (G__12596) {
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
var c__12437__auto___15022 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12438__auto__ = (function (){var switch__11983__auto__ = (function (state_12643){
var state_val_12644 = (state_12643[(1)]);
if((state_val_12644 === (7))){
var inst_12638 = (state_12643[(2)]);
var state_12643__$1 = state_12643;
var statearr_12655_15023 = state_12643__$1;
(statearr_12655_15023[(2)] = inst_12638);

(statearr_12655_15023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12644 === (1))){
var state_12643__$1 = state_12643;
var statearr_12657_15024 = state_12643__$1;
(statearr_12657_15024[(2)] = null);

(statearr_12657_15024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12644 === (4))){
var inst_12612 = (state_12643[(7)]);
var inst_12612__$1 = (state_12643[(2)]);
var inst_12617 = (inst_12612__$1 == null);
var state_12643__$1 = (function (){var statearr_12658 = state_12643;
(statearr_12658[(7)] = inst_12612__$1);

return statearr_12658;
})();
if(cljs.core.truth_(inst_12617)){
var statearr_12662_15028 = state_12643__$1;
(statearr_12662_15028[(1)] = (5));

} else {
var statearr_12663_15029 = state_12643__$1;
(statearr_12663_15029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12644 === (13))){
var state_12643__$1 = state_12643;
var statearr_12665_15030 = state_12643__$1;
(statearr_12665_15030[(2)] = null);

(statearr_12665_15030[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12644 === (6))){
var inst_12612 = (state_12643[(7)]);
var state_12643__$1 = state_12643;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12643__$1,(11),to,inst_12612);
} else {
if((state_val_12644 === (3))){
var inst_12640 = (state_12643[(2)]);
var state_12643__$1 = state_12643;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12643__$1,inst_12640);
} else {
if((state_val_12644 === (12))){
var state_12643__$1 = state_12643;
var statearr_12670_15031 = state_12643__$1;
(statearr_12670_15031[(2)] = null);

(statearr_12670_15031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12644 === (2))){
var state_12643__$1 = state_12643;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12643__$1,(4),from);
} else {
if((state_val_12644 === (11))){
var inst_12629 = (state_12643[(2)]);
var state_12643__$1 = state_12643;
if(cljs.core.truth_(inst_12629)){
var statearr_12675_15032 = state_12643__$1;
(statearr_12675_15032[(1)] = (12));

} else {
var statearr_12677_15033 = state_12643__$1;
(statearr_12677_15033[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12644 === (9))){
var state_12643__$1 = state_12643;
var statearr_12678_15034 = state_12643__$1;
(statearr_12678_15034[(2)] = null);

(statearr_12678_15034[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12644 === (5))){
var state_12643__$1 = state_12643;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12679_15035 = state_12643__$1;
(statearr_12679_15035[(1)] = (8));

} else {
var statearr_12680_15036 = state_12643__$1;
(statearr_12680_15036[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12644 === (14))){
var inst_12636 = (state_12643[(2)]);
var state_12643__$1 = state_12643;
var statearr_12682_15037 = state_12643__$1;
(statearr_12682_15037[(2)] = inst_12636);

(statearr_12682_15037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12644 === (10))){
var inst_12626 = (state_12643[(2)]);
var state_12643__$1 = state_12643;
var statearr_12685_15038 = state_12643__$1;
(statearr_12685_15038[(2)] = inst_12626);

(statearr_12685_15038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12644 === (8))){
var inst_12623 = cljs.core.async.close_BANG_(to);
var state_12643__$1 = state_12643;
var statearr_12688_15039 = state_12643__$1;
(statearr_12688_15039[(2)] = inst_12623);

(statearr_12688_15039[(1)] = (10));


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
var cljs$core$async$state_machine__11984__auto__ = null;
var cljs$core$async$state_machine__11984__auto____0 = (function (){
var statearr_12690 = [null,null,null,null,null,null,null,null];
(statearr_12690[(0)] = cljs$core$async$state_machine__11984__auto__);

(statearr_12690[(1)] = (1));

return statearr_12690;
});
var cljs$core$async$state_machine__11984__auto____1 = (function (state_12643){
while(true){
var ret_value__11985__auto__ = (function (){try{while(true){
var result__11986__auto__ = switch__11983__auto__(state_12643);
if(cljs.core.keyword_identical_QMARK_(result__11986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11986__auto__;
}
break;
}
}catch (e12695){var ex__11987__auto__ = e12695;
var statearr_12696_15040 = state_12643;
(statearr_12696_15040[(2)] = ex__11987__auto__);


if(cljs.core.seq((state_12643[(4)]))){
var statearr_12697_15041 = state_12643;
(statearr_12697_15041[(1)] = cljs.core.first((state_12643[(4)])));

} else {
throw ex__11987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15042 = state_12643;
state_12643 = G__15042;
continue;
} else {
return ret_value__11985__auto__;
}
break;
}
});
cljs$core$async$state_machine__11984__auto__ = function(state_12643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11984__auto____1.call(this,state_12643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11984__auto____0;
cljs$core$async$state_machine__11984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11984__auto____1;
return cljs$core$async$state_machine__11984__auto__;
})()
})();
var state__12439__auto__ = (function (){var statearr_12700 = f__12438__auto__();
(statearr_12700[(6)] = c__12437__auto___15022);

return statearr_12700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12439__auto__);
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
var process__$1 = (function (p__12726){
var vec__12727 = p__12726;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12727,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12727,(1),null);
var job = vec__12727;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__12437__auto___15043 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12438__auto__ = (function (){var switch__11983__auto__ = (function (state_12739){
var state_val_12740 = (state_12739[(1)]);
if((state_val_12740 === (1))){
var state_12739__$1 = state_12739;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12739__$1,(2),res,v);
} else {
if((state_val_12740 === (2))){
var inst_12734 = (state_12739[(2)]);
var inst_12737 = cljs.core.async.close_BANG_(res);
var state_12739__$1 = (function (){var statearr_12746 = state_12739;
(statearr_12746[(7)] = inst_12734);

return statearr_12746;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_12739__$1,inst_12737);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11984__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11984__auto____0 = (function (){
var statearr_12747 = [null,null,null,null,null,null,null,null];
(statearr_12747[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11984__auto__);

(statearr_12747[(1)] = (1));

return statearr_12747;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11984__auto____1 = (function (state_12739){
while(true){
var ret_value__11985__auto__ = (function (){try{while(true){
var result__11986__auto__ = switch__11983__auto__(state_12739);
if(cljs.core.keyword_identical_QMARK_(result__11986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11986__auto__;
}
break;
}
}catch (e12748){var ex__11987__auto__ = e12748;
var statearr_12749_15044 = state_12739;
(statearr_12749_15044[(2)] = ex__11987__auto__);


if(cljs.core.seq((state_12739[(4)]))){
var statearr_12750_15045 = state_12739;
(statearr_12750_15045[(1)] = cljs.core.first((state_12739[(4)])));

} else {
throw ex__11987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15046 = state_12739;
state_12739 = G__15046;
continue;
} else {
return ret_value__11985__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11984__auto__ = function(state_12739){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11984__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11984__auto____1.call(this,state_12739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11984__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11984__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11984__auto__;
})()
})();
var state__12439__auto__ = (function (){var statearr_12752 = f__12438__auto__();
(statearr_12752[(6)] = c__12437__auto___15043);

return statearr_12752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12439__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__12753){
var vec__12754 = p__12753;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12754,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12754,(1),null);
var job = vec__12754;
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
var n__5593__auto___15047 = n;
var __15048 = (0);
while(true){
if((__15048 < n__5593__auto___15047)){
var G__12757_15049 = type;
var G__12757_15050__$1 = (((G__12757_15049 instanceof cljs.core.Keyword))?G__12757_15049.fqn:null);
switch (G__12757_15050__$1) {
case "compute":
var c__12437__auto___15052 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15048,c__12437__auto___15052,G__12757_15049,G__12757_15050__$1,n__5593__auto___15047,jobs,results,process__$1,async){
return (function (){
var f__12438__auto__ = (function (){var switch__11983__auto__ = ((function (__15048,c__12437__auto___15052,G__12757_15049,G__12757_15050__$1,n__5593__auto___15047,jobs,results,process__$1,async){
return (function (state_12771){
var state_val_12772 = (state_12771[(1)]);
if((state_val_12772 === (1))){
var state_12771__$1 = state_12771;
var statearr_12779_15053 = state_12771__$1;
(statearr_12779_15053[(2)] = null);

(statearr_12779_15053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12772 === (2))){
var state_12771__$1 = state_12771;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12771__$1,(4),jobs);
} else {
if((state_val_12772 === (3))){
var inst_12769 = (state_12771[(2)]);
var state_12771__$1 = state_12771;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12771__$1,inst_12769);
} else {
if((state_val_12772 === (4))){
var inst_12761 = (state_12771[(2)]);
var inst_12762 = process__$1(inst_12761);
var state_12771__$1 = state_12771;
if(cljs.core.truth_(inst_12762)){
var statearr_12794_15056 = state_12771__$1;
(statearr_12794_15056[(1)] = (5));

} else {
var statearr_12795_15057 = state_12771__$1;
(statearr_12795_15057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12772 === (5))){
var state_12771__$1 = state_12771;
var statearr_12798_15058 = state_12771__$1;
(statearr_12798_15058[(2)] = null);

(statearr_12798_15058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12772 === (6))){
var state_12771__$1 = state_12771;
var statearr_12800_15059 = state_12771__$1;
(statearr_12800_15059[(2)] = null);

(statearr_12800_15059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12772 === (7))){
var inst_12767 = (state_12771[(2)]);
var state_12771__$1 = state_12771;
var statearr_12802_15060 = state_12771__$1;
(statearr_12802_15060[(2)] = inst_12767);

(statearr_12802_15060[(1)] = (3));


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
});})(__15048,c__12437__auto___15052,G__12757_15049,G__12757_15050__$1,n__5593__auto___15047,jobs,results,process__$1,async))
;
return ((function (__15048,switch__11983__auto__,c__12437__auto___15052,G__12757_15049,G__12757_15050__$1,n__5593__auto___15047,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11984__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11984__auto____0 = (function (){
var statearr_12803 = [null,null,null,null,null,null,null];
(statearr_12803[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11984__auto__);

(statearr_12803[(1)] = (1));

return statearr_12803;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11984__auto____1 = (function (state_12771){
while(true){
var ret_value__11985__auto__ = (function (){try{while(true){
var result__11986__auto__ = switch__11983__auto__(state_12771);
if(cljs.core.keyword_identical_QMARK_(result__11986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11986__auto__;
}
break;
}
}catch (e12804){var ex__11987__auto__ = e12804;
var statearr_12805_15083 = state_12771;
(statearr_12805_15083[(2)] = ex__11987__auto__);


if(cljs.core.seq((state_12771[(4)]))){
var statearr_12806_15084 = state_12771;
(statearr_12806_15084[(1)] = cljs.core.first((state_12771[(4)])));

} else {
throw ex__11987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15088 = state_12771;
state_12771 = G__15088;
continue;
} else {
return ret_value__11985__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11984__auto__ = function(state_12771){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11984__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11984__auto____1.call(this,state_12771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11984__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11984__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11984__auto__;
})()
;})(__15048,switch__11983__auto__,c__12437__auto___15052,G__12757_15049,G__12757_15050__$1,n__5593__auto___15047,jobs,results,process__$1,async))
})();
var state__12439__auto__ = (function (){var statearr_12807 = f__12438__auto__();
(statearr_12807[(6)] = c__12437__auto___15052);

return statearr_12807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12439__auto__);
});})(__15048,c__12437__auto___15052,G__12757_15049,G__12757_15050__$1,n__5593__auto___15047,jobs,results,process__$1,async))
);


break;
case "async":
var c__12437__auto___15089 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15048,c__12437__auto___15089,G__12757_15049,G__12757_15050__$1,n__5593__auto___15047,jobs,results,process__$1,async){
return (function (){
var f__12438__auto__ = (function (){var switch__11983__auto__ = ((function (__15048,c__12437__auto___15089,G__12757_15049,G__12757_15050__$1,n__5593__auto___15047,jobs,results,process__$1,async){
return (function (state_12820){
var state_val_12821 = (state_12820[(1)]);
if((state_val_12821 === (1))){
var state_12820__$1 = state_12820;
var statearr_12823_15090 = state_12820__$1;
(statearr_12823_15090[(2)] = null);

(statearr_12823_15090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12821 === (2))){
var state_12820__$1 = state_12820;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12820__$1,(4),jobs);
} else {
if((state_val_12821 === (3))){
var inst_12818 = (state_12820[(2)]);
var state_12820__$1 = state_12820;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12820__$1,inst_12818);
} else {
if((state_val_12821 === (4))){
var inst_12810 = (state_12820[(2)]);
var inst_12811 = async(inst_12810);
var state_12820__$1 = state_12820;
if(cljs.core.truth_(inst_12811)){
var statearr_12826_15094 = state_12820__$1;
(statearr_12826_15094[(1)] = (5));

} else {
var statearr_12827_15095 = state_12820__$1;
(statearr_12827_15095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12821 === (5))){
var state_12820__$1 = state_12820;
var statearr_12828_15096 = state_12820__$1;
(statearr_12828_15096[(2)] = null);

(statearr_12828_15096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12821 === (6))){
var state_12820__$1 = state_12820;
var statearr_12833_15097 = state_12820__$1;
(statearr_12833_15097[(2)] = null);

(statearr_12833_15097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12821 === (7))){
var inst_12816 = (state_12820[(2)]);
var state_12820__$1 = state_12820;
var statearr_12834_15098 = state_12820__$1;
(statearr_12834_15098[(2)] = inst_12816);

(statearr_12834_15098[(1)] = (3));


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
});})(__15048,c__12437__auto___15089,G__12757_15049,G__12757_15050__$1,n__5593__auto___15047,jobs,results,process__$1,async))
;
return ((function (__15048,switch__11983__auto__,c__12437__auto___15089,G__12757_15049,G__12757_15050__$1,n__5593__auto___15047,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11984__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11984__auto____0 = (function (){
var statearr_12838 = [null,null,null,null,null,null,null];
(statearr_12838[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11984__auto__);

(statearr_12838[(1)] = (1));

return statearr_12838;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11984__auto____1 = (function (state_12820){
while(true){
var ret_value__11985__auto__ = (function (){try{while(true){
var result__11986__auto__ = switch__11983__auto__(state_12820);
if(cljs.core.keyword_identical_QMARK_(result__11986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11986__auto__;
}
break;
}
}catch (e12839){var ex__11987__auto__ = e12839;
var statearr_12840_15111 = state_12820;
(statearr_12840_15111[(2)] = ex__11987__auto__);


if(cljs.core.seq((state_12820[(4)]))){
var statearr_12841_15113 = state_12820;
(statearr_12841_15113[(1)] = cljs.core.first((state_12820[(4)])));

} else {
throw ex__11987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15114 = state_12820;
state_12820 = G__15114;
continue;
} else {
return ret_value__11985__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11984__auto__ = function(state_12820){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11984__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11984__auto____1.call(this,state_12820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11984__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11984__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11984__auto__;
})()
;})(__15048,switch__11983__auto__,c__12437__auto___15089,G__12757_15049,G__12757_15050__$1,n__5593__auto___15047,jobs,results,process__$1,async))
})();
var state__12439__auto__ = (function (){var statearr_12846 = f__12438__auto__();
(statearr_12846[(6)] = c__12437__auto___15089);

return statearr_12846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12439__auto__);
});})(__15048,c__12437__auto___15089,G__12757_15049,G__12757_15050__$1,n__5593__auto___15047,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12757_15050__$1)].join('')));

}

var G__15115 = (__15048 + (1));
__15048 = G__15115;
continue;
} else {
}
break;
}

var c__12437__auto___15116 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12438__auto__ = (function (){var switch__11983__auto__ = (function (state_12878){
var state_val_12879 = (state_12878[(1)]);
if((state_val_12879 === (7))){
var inst_12874 = (state_12878[(2)]);
var state_12878__$1 = state_12878;
var statearr_12914_15117 = state_12878__$1;
(statearr_12914_15117[(2)] = inst_12874);

(statearr_12914_15117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12879 === (1))){
var state_12878__$1 = state_12878;
var statearr_12915_15118 = state_12878__$1;
(statearr_12915_15118[(2)] = null);

(statearr_12915_15118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12879 === (4))){
var inst_12852 = (state_12878[(7)]);
var inst_12852__$1 = (state_12878[(2)]);
var inst_12853 = (inst_12852__$1 == null);
var state_12878__$1 = (function (){var statearr_12916 = state_12878;
(statearr_12916[(7)] = inst_12852__$1);

return statearr_12916;
})();
if(cljs.core.truth_(inst_12853)){
var statearr_12917_15122 = state_12878__$1;
(statearr_12917_15122[(1)] = (5));

} else {
var statearr_12918_15123 = state_12878__$1;
(statearr_12918_15123[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12879 === (6))){
var inst_12857 = (state_12878[(8)]);
var inst_12852 = (state_12878[(7)]);
var inst_12857__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_12858 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12862 = [inst_12852,inst_12857__$1];
var inst_12863 = (new cljs.core.PersistentVector(null,2,(5),inst_12858,inst_12862,null));
var state_12878__$1 = (function (){var statearr_12920 = state_12878;
(statearr_12920[(8)] = inst_12857__$1);

return statearr_12920;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12878__$1,(8),jobs,inst_12863);
} else {
if((state_val_12879 === (3))){
var inst_12876 = (state_12878[(2)]);
var state_12878__$1 = state_12878;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12878__$1,inst_12876);
} else {
if((state_val_12879 === (2))){
var state_12878__$1 = state_12878;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12878__$1,(4),from);
} else {
if((state_val_12879 === (9))){
var inst_12868 = (state_12878[(2)]);
var state_12878__$1 = (function (){var statearr_12921 = state_12878;
(statearr_12921[(9)] = inst_12868);

return statearr_12921;
})();
var statearr_12922_15125 = state_12878__$1;
(statearr_12922_15125[(2)] = null);

(statearr_12922_15125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12879 === (5))){
var inst_12855 = cljs.core.async.close_BANG_(jobs);
var state_12878__$1 = state_12878;
var statearr_12923_15136 = state_12878__$1;
(statearr_12923_15136[(2)] = inst_12855);

(statearr_12923_15136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12879 === (8))){
var inst_12857 = (state_12878[(8)]);
var inst_12865 = (state_12878[(2)]);
var state_12878__$1 = (function (){var statearr_12924 = state_12878;
(statearr_12924[(10)] = inst_12865);

return statearr_12924;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12878__$1,(9),results,inst_12857);
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
var cljs$core$async$pipeline_STAR__$_state_machine__11984__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11984__auto____0 = (function (){
var statearr_12926 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12926[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11984__auto__);

(statearr_12926[(1)] = (1));

return statearr_12926;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11984__auto____1 = (function (state_12878){
while(true){
var ret_value__11985__auto__ = (function (){try{while(true){
var result__11986__auto__ = switch__11983__auto__(state_12878);
if(cljs.core.keyword_identical_QMARK_(result__11986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11986__auto__;
}
break;
}
}catch (e12927){var ex__11987__auto__ = e12927;
var statearr_12928_15151 = state_12878;
(statearr_12928_15151[(2)] = ex__11987__auto__);


if(cljs.core.seq((state_12878[(4)]))){
var statearr_12929_15159 = state_12878;
(statearr_12929_15159[(1)] = cljs.core.first((state_12878[(4)])));

} else {
throw ex__11987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15160 = state_12878;
state_12878 = G__15160;
continue;
} else {
return ret_value__11985__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11984__auto__ = function(state_12878){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11984__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11984__auto____1.call(this,state_12878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11984__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11984__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11984__auto__;
})()
})();
var state__12439__auto__ = (function (){var statearr_12930 = f__12438__auto__();
(statearr_12930[(6)] = c__12437__auto___15116);

return statearr_12930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12439__auto__);
}));


var c__12437__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12438__auto__ = (function (){var switch__11983__auto__ = (function (state_12973){
var state_val_12974 = (state_12973[(1)]);
if((state_val_12974 === (7))){
var inst_12969 = (state_12973[(2)]);
var state_12973__$1 = state_12973;
var statearr_12975_15164 = state_12973__$1;
(statearr_12975_15164[(2)] = inst_12969);

(statearr_12975_15164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12974 === (20))){
var state_12973__$1 = state_12973;
var statearr_12979_15170 = state_12973__$1;
(statearr_12979_15170[(2)] = null);

(statearr_12979_15170[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12974 === (1))){
var state_12973__$1 = state_12973;
var statearr_12980_15171 = state_12973__$1;
(statearr_12980_15171[(2)] = null);

(statearr_12980_15171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12974 === (4))){
var inst_12933 = (state_12973[(7)]);
var inst_12933__$1 = (state_12973[(2)]);
var inst_12934 = (inst_12933__$1 == null);
var state_12973__$1 = (function (){var statearr_12984 = state_12973;
(statearr_12984[(7)] = inst_12933__$1);

return statearr_12984;
})();
if(cljs.core.truth_(inst_12934)){
var statearr_12985_15182 = state_12973__$1;
(statearr_12985_15182[(1)] = (5));

} else {
var statearr_12986_15184 = state_12973__$1;
(statearr_12986_15184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12974 === (15))){
var inst_12950 = (state_12973[(8)]);
var state_12973__$1 = state_12973;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12973__$1,(18),to,inst_12950);
} else {
if((state_val_12974 === (21))){
var inst_12964 = (state_12973[(2)]);
var state_12973__$1 = state_12973;
var statearr_12987_15186 = state_12973__$1;
(statearr_12987_15186[(2)] = inst_12964);

(statearr_12987_15186[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12974 === (13))){
var inst_12966 = (state_12973[(2)]);
var state_12973__$1 = (function (){var statearr_12988 = state_12973;
(statearr_12988[(9)] = inst_12966);

return statearr_12988;
})();
var statearr_12989_15187 = state_12973__$1;
(statearr_12989_15187[(2)] = null);

(statearr_12989_15187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12974 === (6))){
var inst_12933 = (state_12973[(7)]);
var state_12973__$1 = state_12973;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12973__$1,(11),inst_12933);
} else {
if((state_val_12974 === (17))){
var inst_12959 = (state_12973[(2)]);
var state_12973__$1 = state_12973;
if(cljs.core.truth_(inst_12959)){
var statearr_12990_15207 = state_12973__$1;
(statearr_12990_15207[(1)] = (19));

} else {
var statearr_12991_15208 = state_12973__$1;
(statearr_12991_15208[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12974 === (3))){
var inst_12971 = (state_12973[(2)]);
var state_12973__$1 = state_12973;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12973__$1,inst_12971);
} else {
if((state_val_12974 === (12))){
var inst_12947 = (state_12973[(10)]);
var state_12973__$1 = state_12973;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12973__$1,(14),inst_12947);
} else {
if((state_val_12974 === (2))){
var state_12973__$1 = state_12973;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12973__$1,(4),results);
} else {
if((state_val_12974 === (19))){
var state_12973__$1 = state_12973;
var statearr_12992_15215 = state_12973__$1;
(statearr_12992_15215[(2)] = null);

(statearr_12992_15215[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12974 === (11))){
var inst_12947 = (state_12973[(2)]);
var state_12973__$1 = (function (){var statearr_12993 = state_12973;
(statearr_12993[(10)] = inst_12947);

return statearr_12993;
})();
var statearr_12994_15224 = state_12973__$1;
(statearr_12994_15224[(2)] = null);

(statearr_12994_15224[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12974 === (9))){
var state_12973__$1 = state_12973;
var statearr_12995_15229 = state_12973__$1;
(statearr_12995_15229[(2)] = null);

(statearr_12995_15229[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12974 === (5))){
var state_12973__$1 = state_12973;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12996_15230 = state_12973__$1;
(statearr_12996_15230[(1)] = (8));

} else {
var statearr_12997_15231 = state_12973__$1;
(statearr_12997_15231[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12974 === (14))){
var inst_12950 = (state_12973[(8)]);
var inst_12953 = (state_12973[(11)]);
var inst_12950__$1 = (state_12973[(2)]);
var inst_12952 = (inst_12950__$1 == null);
var inst_12953__$1 = cljs.core.not(inst_12952);
var state_12973__$1 = (function (){var statearr_12998 = state_12973;
(statearr_12998[(8)] = inst_12950__$1);

(statearr_12998[(11)] = inst_12953__$1);

return statearr_12998;
})();
if(inst_12953__$1){
var statearr_12999_15233 = state_12973__$1;
(statearr_12999_15233[(1)] = (15));

} else {
var statearr_13001_15234 = state_12973__$1;
(statearr_13001_15234[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12974 === (16))){
var inst_12953 = (state_12973[(11)]);
var state_12973__$1 = state_12973;
var statearr_13003_15235 = state_12973__$1;
(statearr_13003_15235[(2)] = inst_12953);

(statearr_13003_15235[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12974 === (10))){
var inst_12944 = (state_12973[(2)]);
var state_12973__$1 = state_12973;
var statearr_13004_15236 = state_12973__$1;
(statearr_13004_15236[(2)] = inst_12944);

(statearr_13004_15236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12974 === (18))){
var inst_12956 = (state_12973[(2)]);
var state_12973__$1 = state_12973;
var statearr_13005_15237 = state_12973__$1;
(statearr_13005_15237[(2)] = inst_12956);

(statearr_13005_15237[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12974 === (8))){
var inst_12941 = cljs.core.async.close_BANG_(to);
var state_12973__$1 = state_12973;
var statearr_13006_15238 = state_12973__$1;
(statearr_13006_15238[(2)] = inst_12941);

(statearr_13006_15238[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__11984__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11984__auto____0 = (function (){
var statearr_13008 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13008[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11984__auto__);

(statearr_13008[(1)] = (1));

return statearr_13008;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11984__auto____1 = (function (state_12973){
while(true){
var ret_value__11985__auto__ = (function (){try{while(true){
var result__11986__auto__ = switch__11983__auto__(state_12973);
if(cljs.core.keyword_identical_QMARK_(result__11986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11986__auto__;
}
break;
}
}catch (e13009){var ex__11987__auto__ = e13009;
var statearr_13010_15242 = state_12973;
(statearr_13010_15242[(2)] = ex__11987__auto__);


if(cljs.core.seq((state_12973[(4)]))){
var statearr_13011_15243 = state_12973;
(statearr_13011_15243[(1)] = cljs.core.first((state_12973[(4)])));

} else {
throw ex__11987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15244 = state_12973;
state_12973 = G__15244;
continue;
} else {
return ret_value__11985__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11984__auto__ = function(state_12973){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11984__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11984__auto____1.call(this,state_12973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11984__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11984__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11984__auto__;
})()
})();
var state__12439__auto__ = (function (){var statearr_13013 = f__12438__auto__();
(statearr_13013[(6)] = c__12437__auto__);

return statearr_13013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12439__auto__);
}));

return c__12437__auto__;
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
var G__13016 = arguments.length;
switch (G__13016) {
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
var G__13019 = arguments.length;
switch (G__13019) {
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
var G__13028 = arguments.length;
switch (G__13028) {
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
var c__12437__auto___15261 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12438__auto__ = (function (){var switch__11983__auto__ = (function (state_13058){
var state_val_13059 = (state_13058[(1)]);
if((state_val_13059 === (7))){
var inst_13054 = (state_13058[(2)]);
var state_13058__$1 = state_13058;
var statearr_13060_15267 = state_13058__$1;
(statearr_13060_15267[(2)] = inst_13054);

(statearr_13060_15267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13059 === (1))){
var state_13058__$1 = state_13058;
var statearr_13061_15268 = state_13058__$1;
(statearr_13061_15268[(2)] = null);

(statearr_13061_15268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13059 === (4))){
var inst_13032 = (state_13058[(7)]);
var inst_13032__$1 = (state_13058[(2)]);
var inst_13033 = (inst_13032__$1 == null);
var state_13058__$1 = (function (){var statearr_13063 = state_13058;
(statearr_13063[(7)] = inst_13032__$1);

return statearr_13063;
})();
if(cljs.core.truth_(inst_13033)){
var statearr_13064_15269 = state_13058__$1;
(statearr_13064_15269[(1)] = (5));

} else {
var statearr_13065_15270 = state_13058__$1;
(statearr_13065_15270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13059 === (13))){
var state_13058__$1 = state_13058;
var statearr_13066_15271 = state_13058__$1;
(statearr_13066_15271[(2)] = null);

(statearr_13066_15271[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13059 === (6))){
var inst_13032 = (state_13058[(7)]);
var inst_13038 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_13032) : p.call(null,inst_13032));
var state_13058__$1 = state_13058;
if(cljs.core.truth_(inst_13038)){
var statearr_13067_15278 = state_13058__$1;
(statearr_13067_15278[(1)] = (9));

} else {
var statearr_13068_15279 = state_13058__$1;
(statearr_13068_15279[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13059 === (3))){
var inst_13056 = (state_13058[(2)]);
var state_13058__$1 = state_13058;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13058__$1,inst_13056);
} else {
if((state_val_13059 === (12))){
var state_13058__$1 = state_13058;
var statearr_13073_15283 = state_13058__$1;
(statearr_13073_15283[(2)] = null);

(statearr_13073_15283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13059 === (2))){
var state_13058__$1 = state_13058;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13058__$1,(4),ch);
} else {
if((state_val_13059 === (11))){
var inst_13032 = (state_13058[(7)]);
var inst_13042 = (state_13058[(2)]);
var state_13058__$1 = state_13058;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13058__$1,(8),inst_13042,inst_13032);
} else {
if((state_val_13059 === (9))){
var state_13058__$1 = state_13058;
var statearr_13076_15284 = state_13058__$1;
(statearr_13076_15284[(2)] = tc);

(statearr_13076_15284[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13059 === (5))){
var inst_13035 = cljs.core.async.close_BANG_(tc);
var inst_13036 = cljs.core.async.close_BANG_(fc);
var state_13058__$1 = (function (){var statearr_13077 = state_13058;
(statearr_13077[(8)] = inst_13035);

return statearr_13077;
})();
var statearr_13078_15289 = state_13058__$1;
(statearr_13078_15289[(2)] = inst_13036);

(statearr_13078_15289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13059 === (14))){
var inst_13049 = (state_13058[(2)]);
var state_13058__$1 = state_13058;
var statearr_13079_15290 = state_13058__$1;
(statearr_13079_15290[(2)] = inst_13049);

(statearr_13079_15290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13059 === (10))){
var state_13058__$1 = state_13058;
var statearr_13080_15291 = state_13058__$1;
(statearr_13080_15291[(2)] = fc);

(statearr_13080_15291[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13059 === (8))){
var inst_13044 = (state_13058[(2)]);
var state_13058__$1 = state_13058;
if(cljs.core.truth_(inst_13044)){
var statearr_13082_15292 = state_13058__$1;
(statearr_13082_15292[(1)] = (12));

} else {
var statearr_13083_15293 = state_13058__$1;
(statearr_13083_15293[(1)] = (13));

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
var cljs$core$async$state_machine__11984__auto__ = null;
var cljs$core$async$state_machine__11984__auto____0 = (function (){
var statearr_13085 = [null,null,null,null,null,null,null,null,null];
(statearr_13085[(0)] = cljs$core$async$state_machine__11984__auto__);

(statearr_13085[(1)] = (1));

return statearr_13085;
});
var cljs$core$async$state_machine__11984__auto____1 = (function (state_13058){
while(true){
var ret_value__11985__auto__ = (function (){try{while(true){
var result__11986__auto__ = switch__11983__auto__(state_13058);
if(cljs.core.keyword_identical_QMARK_(result__11986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11986__auto__;
}
break;
}
}catch (e13090){var ex__11987__auto__ = e13090;
var statearr_13091_15298 = state_13058;
(statearr_13091_15298[(2)] = ex__11987__auto__);


if(cljs.core.seq((state_13058[(4)]))){
var statearr_13092_15299 = state_13058;
(statearr_13092_15299[(1)] = cljs.core.first((state_13058[(4)])));

} else {
throw ex__11987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15300 = state_13058;
state_13058 = G__15300;
continue;
} else {
return ret_value__11985__auto__;
}
break;
}
});
cljs$core$async$state_machine__11984__auto__ = function(state_13058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11984__auto____1.call(this,state_13058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11984__auto____0;
cljs$core$async$state_machine__11984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11984__auto____1;
return cljs$core$async$state_machine__11984__auto__;
})()
})();
var state__12439__auto__ = (function (){var statearr_13093 = f__12438__auto__();
(statearr_13093[(6)] = c__12437__auto___15261);

return statearr_13093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12439__auto__);
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
var c__12437__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12438__auto__ = (function (){var switch__11983__auto__ = (function (state_13119){
var state_val_13120 = (state_13119[(1)]);
if((state_val_13120 === (7))){
var inst_13115 = (state_13119[(2)]);
var state_13119__$1 = state_13119;
var statearr_13122_15301 = state_13119__$1;
(statearr_13122_15301[(2)] = inst_13115);

(statearr_13122_15301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13120 === (1))){
var inst_13098 = init;
var inst_13099 = inst_13098;
var state_13119__$1 = (function (){var statearr_13123 = state_13119;
(statearr_13123[(7)] = inst_13099);

return statearr_13123;
})();
var statearr_13124_15302 = state_13119__$1;
(statearr_13124_15302[(2)] = null);

(statearr_13124_15302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13120 === (4))){
var inst_13102 = (state_13119[(8)]);
var inst_13102__$1 = (state_13119[(2)]);
var inst_13103 = (inst_13102__$1 == null);
var state_13119__$1 = (function (){var statearr_13125 = state_13119;
(statearr_13125[(8)] = inst_13102__$1);

return statearr_13125;
})();
if(cljs.core.truth_(inst_13103)){
var statearr_13126_15309 = state_13119__$1;
(statearr_13126_15309[(1)] = (5));

} else {
var statearr_13127_15310 = state_13119__$1;
(statearr_13127_15310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13120 === (6))){
var inst_13106 = (state_13119[(9)]);
var inst_13099 = (state_13119[(7)]);
var inst_13102 = (state_13119[(8)]);
var inst_13106__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_13099,inst_13102) : f.call(null,inst_13099,inst_13102));
var inst_13107 = cljs.core.reduced_QMARK_(inst_13106__$1);
var state_13119__$1 = (function (){var statearr_13128 = state_13119;
(statearr_13128[(9)] = inst_13106__$1);

return statearr_13128;
})();
if(inst_13107){
var statearr_13129_15311 = state_13119__$1;
(statearr_13129_15311[(1)] = (8));

} else {
var statearr_13130_15315 = state_13119__$1;
(statearr_13130_15315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13120 === (3))){
var inst_13117 = (state_13119[(2)]);
var state_13119__$1 = state_13119;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13119__$1,inst_13117);
} else {
if((state_val_13120 === (2))){
var state_13119__$1 = state_13119;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13119__$1,(4),ch);
} else {
if((state_val_13120 === (9))){
var inst_13106 = (state_13119[(9)]);
var inst_13099 = inst_13106;
var state_13119__$1 = (function (){var statearr_13132 = state_13119;
(statearr_13132[(7)] = inst_13099);

return statearr_13132;
})();
var statearr_13133_15316 = state_13119__$1;
(statearr_13133_15316[(2)] = null);

(statearr_13133_15316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13120 === (5))){
var inst_13099 = (state_13119[(7)]);
var state_13119__$1 = state_13119;
var statearr_13134_15323 = state_13119__$1;
(statearr_13134_15323[(2)] = inst_13099);

(statearr_13134_15323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13120 === (10))){
var inst_13113 = (state_13119[(2)]);
var state_13119__$1 = state_13119;
var statearr_13135_15324 = state_13119__$1;
(statearr_13135_15324[(2)] = inst_13113);

(statearr_13135_15324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13120 === (8))){
var inst_13106 = (state_13119[(9)]);
var inst_13109 = cljs.core.deref(inst_13106);
var state_13119__$1 = state_13119;
var statearr_13136_15325 = state_13119__$1;
(statearr_13136_15325[(2)] = inst_13109);

(statearr_13136_15325[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__11984__auto__ = null;
var cljs$core$async$reduce_$_state_machine__11984__auto____0 = (function (){
var statearr_13137 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13137[(0)] = cljs$core$async$reduce_$_state_machine__11984__auto__);

(statearr_13137[(1)] = (1));

return statearr_13137;
});
var cljs$core$async$reduce_$_state_machine__11984__auto____1 = (function (state_13119){
while(true){
var ret_value__11985__auto__ = (function (){try{while(true){
var result__11986__auto__ = switch__11983__auto__(state_13119);
if(cljs.core.keyword_identical_QMARK_(result__11986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11986__auto__;
}
break;
}
}catch (e13138){var ex__11987__auto__ = e13138;
var statearr_13139_15326 = state_13119;
(statearr_13139_15326[(2)] = ex__11987__auto__);


if(cljs.core.seq((state_13119[(4)]))){
var statearr_13140_15327 = state_13119;
(statearr_13140_15327[(1)] = cljs.core.first((state_13119[(4)])));

} else {
throw ex__11987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15328 = state_13119;
state_13119 = G__15328;
continue;
} else {
return ret_value__11985__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__11984__auto__ = function(state_13119){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__11984__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__11984__auto____1.call(this,state_13119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__11984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__11984__auto____0;
cljs$core$async$reduce_$_state_machine__11984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__11984__auto____1;
return cljs$core$async$reduce_$_state_machine__11984__auto__;
})()
})();
var state__12439__auto__ = (function (){var statearr_13143 = f__12438__auto__();
(statearr_13143[(6)] = c__12437__auto__);

return statearr_13143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12439__auto__);
}));

return c__12437__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__12437__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12438__auto__ = (function (){var switch__11983__auto__ = (function (state_13152){
var state_val_13153 = (state_13152[(1)]);
if((state_val_13153 === (1))){
var inst_13147 = cljs.core.async.reduce(f__$1,init,ch);
var state_13152__$1 = state_13152;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13152__$1,(2),inst_13147);
} else {
if((state_val_13153 === (2))){
var inst_13149 = (state_13152[(2)]);
var inst_13150 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_13149) : f__$1.call(null,inst_13149));
var state_13152__$1 = state_13152;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13152__$1,inst_13150);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__11984__auto__ = null;
var cljs$core$async$transduce_$_state_machine__11984__auto____0 = (function (){
var statearr_13155 = [null,null,null,null,null,null,null];
(statearr_13155[(0)] = cljs$core$async$transduce_$_state_machine__11984__auto__);

(statearr_13155[(1)] = (1));

return statearr_13155;
});
var cljs$core$async$transduce_$_state_machine__11984__auto____1 = (function (state_13152){
while(true){
var ret_value__11985__auto__ = (function (){try{while(true){
var result__11986__auto__ = switch__11983__auto__(state_13152);
if(cljs.core.keyword_identical_QMARK_(result__11986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11986__auto__;
}
break;
}
}catch (e13156){var ex__11987__auto__ = e13156;
var statearr_13157_15340 = state_13152;
(statearr_13157_15340[(2)] = ex__11987__auto__);


if(cljs.core.seq((state_13152[(4)]))){
var statearr_13158_15341 = state_13152;
(statearr_13158_15341[(1)] = cljs.core.first((state_13152[(4)])));

} else {
throw ex__11987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15342 = state_13152;
state_13152 = G__15342;
continue;
} else {
return ret_value__11985__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__11984__auto__ = function(state_13152){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__11984__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__11984__auto____1.call(this,state_13152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__11984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__11984__auto____0;
cljs$core$async$transduce_$_state_machine__11984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__11984__auto____1;
return cljs$core$async$transduce_$_state_machine__11984__auto__;
})()
})();
var state__12439__auto__ = (function (){var statearr_13159 = f__12438__auto__();
(statearr_13159[(6)] = c__12437__auto__);

return statearr_13159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12439__auto__);
}));

return c__12437__auto__;
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
var G__13162 = arguments.length;
switch (G__13162) {
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
var c__12437__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12438__auto__ = (function (){var switch__11983__auto__ = (function (state_13189){
var state_val_13190 = (state_13189[(1)]);
if((state_val_13190 === (7))){
var inst_13169 = (state_13189[(2)]);
var state_13189__$1 = state_13189;
var statearr_13191_15344 = state_13189__$1;
(statearr_13191_15344[(2)] = inst_13169);

(statearr_13191_15344[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13190 === (1))){
var inst_13163 = cljs.core.seq(coll);
var inst_13164 = inst_13163;
var state_13189__$1 = (function (){var statearr_13192 = state_13189;
(statearr_13192[(7)] = inst_13164);

return statearr_13192;
})();
var statearr_13193_15348 = state_13189__$1;
(statearr_13193_15348[(2)] = null);

(statearr_13193_15348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13190 === (4))){
var inst_13164 = (state_13189[(7)]);
var inst_13167 = cljs.core.first(inst_13164);
var state_13189__$1 = state_13189;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13189__$1,(7),ch,inst_13167);
} else {
if((state_val_13190 === (13))){
var inst_13182 = (state_13189[(2)]);
var state_13189__$1 = state_13189;
var statearr_13194_15349 = state_13189__$1;
(statearr_13194_15349[(2)] = inst_13182);

(statearr_13194_15349[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13190 === (6))){
var inst_13172 = (state_13189[(2)]);
var state_13189__$1 = state_13189;
if(cljs.core.truth_(inst_13172)){
var statearr_13196_15350 = state_13189__$1;
(statearr_13196_15350[(1)] = (8));

} else {
var statearr_13197_15351 = state_13189__$1;
(statearr_13197_15351[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13190 === (3))){
var inst_13186 = (state_13189[(2)]);
var state_13189__$1 = state_13189;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13189__$1,inst_13186);
} else {
if((state_val_13190 === (12))){
var state_13189__$1 = state_13189;
var statearr_13199_15352 = state_13189__$1;
(statearr_13199_15352[(2)] = null);

(statearr_13199_15352[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13190 === (2))){
var inst_13164 = (state_13189[(7)]);
var state_13189__$1 = state_13189;
if(cljs.core.truth_(inst_13164)){
var statearr_13200_15353 = state_13189__$1;
(statearr_13200_15353[(1)] = (4));

} else {
var statearr_13206_15354 = state_13189__$1;
(statearr_13206_15354[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13190 === (11))){
var inst_13179 = cljs.core.async.close_BANG_(ch);
var state_13189__$1 = state_13189;
var statearr_13208_15358 = state_13189__$1;
(statearr_13208_15358[(2)] = inst_13179);

(statearr_13208_15358[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13190 === (9))){
var state_13189__$1 = state_13189;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13209_15359 = state_13189__$1;
(statearr_13209_15359[(1)] = (11));

} else {
var statearr_13210_15360 = state_13189__$1;
(statearr_13210_15360[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13190 === (5))){
var inst_13164 = (state_13189[(7)]);
var state_13189__$1 = state_13189;
var statearr_13211_15361 = state_13189__$1;
(statearr_13211_15361[(2)] = inst_13164);

(statearr_13211_15361[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13190 === (10))){
var inst_13184 = (state_13189[(2)]);
var state_13189__$1 = state_13189;
var statearr_13212_15367 = state_13189__$1;
(statearr_13212_15367[(2)] = inst_13184);

(statearr_13212_15367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13190 === (8))){
var inst_13164 = (state_13189[(7)]);
var inst_13175 = cljs.core.next(inst_13164);
var inst_13164__$1 = inst_13175;
var state_13189__$1 = (function (){var statearr_13214 = state_13189;
(statearr_13214[(7)] = inst_13164__$1);

return statearr_13214;
})();
var statearr_13216_15373 = state_13189__$1;
(statearr_13216_15373[(2)] = null);

(statearr_13216_15373[(1)] = (2));


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
var cljs$core$async$state_machine__11984__auto__ = null;
var cljs$core$async$state_machine__11984__auto____0 = (function (){
var statearr_13217 = [null,null,null,null,null,null,null,null];
(statearr_13217[(0)] = cljs$core$async$state_machine__11984__auto__);

(statearr_13217[(1)] = (1));

return statearr_13217;
});
var cljs$core$async$state_machine__11984__auto____1 = (function (state_13189){
while(true){
var ret_value__11985__auto__ = (function (){try{while(true){
var result__11986__auto__ = switch__11983__auto__(state_13189);
if(cljs.core.keyword_identical_QMARK_(result__11986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11986__auto__;
}
break;
}
}catch (e13222){var ex__11987__auto__ = e13222;
var statearr_13223_15374 = state_13189;
(statearr_13223_15374[(2)] = ex__11987__auto__);


if(cljs.core.seq((state_13189[(4)]))){
var statearr_13224_15375 = state_13189;
(statearr_13224_15375[(1)] = cljs.core.first((state_13189[(4)])));

} else {
throw ex__11987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15376 = state_13189;
state_13189 = G__15376;
continue;
} else {
return ret_value__11985__auto__;
}
break;
}
});
cljs$core$async$state_machine__11984__auto__ = function(state_13189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11984__auto____1.call(this,state_13189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11984__auto____0;
cljs$core$async$state_machine__11984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11984__auto____1;
return cljs$core$async$state_machine__11984__auto__;
})()
})();
var state__12439__auto__ = (function (){var statearr_13225 = f__12438__auto__();
(statearr_13225[(6)] = c__12437__auto__);

return statearr_13225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12439__auto__);
}));

return c__12437__auto__;
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
var G__13228 = arguments.length;
switch (G__13228) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_15379 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_15379(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_15381 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_15381(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_15389 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_15389(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_15392 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_15392(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13243 = (function (ch,cs,meta13244){
this.ch = ch;
this.cs = cs;
this.meta13244 = meta13244;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13245,meta13244__$1){
var self__ = this;
var _13245__$1 = this;
return (new cljs.core.async.t_cljs$core$async13243(self__.ch,self__.cs,meta13244__$1));
}));

(cljs.core.async.t_cljs$core$async13243.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13245){
var self__ = this;
var _13245__$1 = this;
return self__.meta13244;
}));

(cljs.core.async.t_cljs$core$async13243.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13243.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async13243.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13243.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async13243.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async13243.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async13243.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta13244","meta13244",1129005964,null)], null);
}));

(cljs.core.async.t_cljs$core$async13243.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13243.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13243");

(cljs.core.async.t_cljs$core$async13243.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async13243");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13243.
 */
cljs.core.async.__GT_t_cljs$core$async13243 = (function cljs$core$async$__GT_t_cljs$core$async13243(ch,cs,meta13244){
return (new cljs.core.async.t_cljs$core$async13243(ch,cs,meta13244));
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
var m = (new cljs.core.async.t_cljs$core$async13243(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__12437__auto___15397 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12438__auto__ = (function (){var switch__11983__auto__ = (function (state_13388){
var state_val_13389 = (state_13388[(1)]);
if((state_val_13389 === (7))){
var inst_13383 = (state_13388[(2)]);
var state_13388__$1 = state_13388;
var statearr_13390_15402 = state_13388__$1;
(statearr_13390_15402[(2)] = inst_13383);

(statearr_13390_15402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (20))){
var inst_13287 = (state_13388[(7)]);
var inst_13299 = cljs.core.first(inst_13287);
var inst_13300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13299,(0),null);
var inst_13301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13299,(1),null);
var state_13388__$1 = (function (){var statearr_13391 = state_13388;
(statearr_13391[(8)] = inst_13300);

return statearr_13391;
})();
if(cljs.core.truth_(inst_13301)){
var statearr_13392_15406 = state_13388__$1;
(statearr_13392_15406[(1)] = (22));

} else {
var statearr_13393_15407 = state_13388__$1;
(statearr_13393_15407[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (27))){
var inst_13256 = (state_13388[(9)]);
var inst_13337 = (state_13388[(10)]);
var inst_13332 = (state_13388[(11)]);
var inst_13330 = (state_13388[(12)]);
var inst_13337__$1 = cljs.core._nth(inst_13330,inst_13332);
var inst_13338 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_13337__$1,inst_13256,done);
var state_13388__$1 = (function (){var statearr_13395 = state_13388;
(statearr_13395[(10)] = inst_13337__$1);

return statearr_13395;
})();
if(cljs.core.truth_(inst_13338)){
var statearr_13396_15408 = state_13388__$1;
(statearr_13396_15408[(1)] = (30));

} else {
var statearr_13397_15409 = state_13388__$1;
(statearr_13397_15409[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (1))){
var state_13388__$1 = state_13388;
var statearr_13398_15414 = state_13388__$1;
(statearr_13398_15414[(2)] = null);

(statearr_13398_15414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (24))){
var inst_13287 = (state_13388[(7)]);
var inst_13306 = (state_13388[(2)]);
var inst_13307 = cljs.core.next(inst_13287);
var inst_13265 = inst_13307;
var inst_13266 = null;
var inst_13267 = (0);
var inst_13268 = (0);
var state_13388__$1 = (function (){var statearr_13399 = state_13388;
(statearr_13399[(13)] = inst_13267);

(statearr_13399[(14)] = inst_13265);

(statearr_13399[(15)] = inst_13266);

(statearr_13399[(16)] = inst_13306);

(statearr_13399[(17)] = inst_13268);

return statearr_13399;
})();
var statearr_13400_15421 = state_13388__$1;
(statearr_13400_15421[(2)] = null);

(statearr_13400_15421[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (39))){
var state_13388__$1 = state_13388;
var statearr_13404_15422 = state_13388__$1;
(statearr_13404_15422[(2)] = null);

(statearr_13404_15422[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (4))){
var inst_13256 = (state_13388[(9)]);
var inst_13256__$1 = (state_13388[(2)]);
var inst_13257 = (inst_13256__$1 == null);
var state_13388__$1 = (function (){var statearr_13406 = state_13388;
(statearr_13406[(9)] = inst_13256__$1);

return statearr_13406;
})();
if(cljs.core.truth_(inst_13257)){
var statearr_13407_15426 = state_13388__$1;
(statearr_13407_15426[(1)] = (5));

} else {
var statearr_13408_15427 = state_13388__$1;
(statearr_13408_15427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (15))){
var inst_13267 = (state_13388[(13)]);
var inst_13265 = (state_13388[(14)]);
var inst_13266 = (state_13388[(15)]);
var inst_13268 = (state_13388[(17)]);
var inst_13283 = (state_13388[(2)]);
var inst_13284 = (inst_13268 + (1));
var tmp13401 = inst_13267;
var tmp13402 = inst_13265;
var tmp13403 = inst_13266;
var inst_13265__$1 = tmp13402;
var inst_13266__$1 = tmp13403;
var inst_13267__$1 = tmp13401;
var inst_13268__$1 = inst_13284;
var state_13388__$1 = (function (){var statearr_13411 = state_13388;
(statearr_13411[(13)] = inst_13267__$1);

(statearr_13411[(14)] = inst_13265__$1);

(statearr_13411[(15)] = inst_13266__$1);

(statearr_13411[(18)] = inst_13283);

(statearr_13411[(17)] = inst_13268__$1);

return statearr_13411;
})();
var statearr_13412_15428 = state_13388__$1;
(statearr_13412_15428[(2)] = null);

(statearr_13412_15428[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (21))){
var inst_13310 = (state_13388[(2)]);
var state_13388__$1 = state_13388;
var statearr_13419_15429 = state_13388__$1;
(statearr_13419_15429[(2)] = inst_13310);

(statearr_13419_15429[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (31))){
var inst_13337 = (state_13388[(10)]);
var inst_13341 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_13337);
var state_13388__$1 = state_13388;
var statearr_13420_15430 = state_13388__$1;
(statearr_13420_15430[(2)] = inst_13341);

(statearr_13420_15430[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (32))){
var inst_13332 = (state_13388[(11)]);
var inst_13331 = (state_13388[(19)]);
var inst_13329 = (state_13388[(20)]);
var inst_13330 = (state_13388[(12)]);
var inst_13343 = (state_13388[(2)]);
var inst_13344 = (inst_13332 + (1));
var tmp13416 = inst_13331;
var tmp13417 = inst_13329;
var tmp13418 = inst_13330;
var inst_13329__$1 = tmp13417;
var inst_13330__$1 = tmp13418;
var inst_13331__$1 = tmp13416;
var inst_13332__$1 = inst_13344;
var state_13388__$1 = (function (){var statearr_13421 = state_13388;
(statearr_13421[(21)] = inst_13343);

(statearr_13421[(11)] = inst_13332__$1);

(statearr_13421[(19)] = inst_13331__$1);

(statearr_13421[(20)] = inst_13329__$1);

(statearr_13421[(12)] = inst_13330__$1);

return statearr_13421;
})();
var statearr_13423_15431 = state_13388__$1;
(statearr_13423_15431[(2)] = null);

(statearr_13423_15431[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (40))){
var inst_13356 = (state_13388[(22)]);
var inst_13360 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_13356);
var state_13388__$1 = state_13388;
var statearr_13424_15432 = state_13388__$1;
(statearr_13424_15432[(2)] = inst_13360);

(statearr_13424_15432[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (33))){
var inst_13347 = (state_13388[(23)]);
var inst_13349 = cljs.core.chunked_seq_QMARK_(inst_13347);
var state_13388__$1 = state_13388;
if(inst_13349){
var statearr_13425_15436 = state_13388__$1;
(statearr_13425_15436[(1)] = (36));

} else {
var statearr_13430_15437 = state_13388__$1;
(statearr_13430_15437[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (13))){
var inst_13277 = (state_13388[(24)]);
var inst_13280 = cljs.core.async.close_BANG_(inst_13277);
var state_13388__$1 = state_13388;
var statearr_13434_15438 = state_13388__$1;
(statearr_13434_15438[(2)] = inst_13280);

(statearr_13434_15438[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (22))){
var inst_13300 = (state_13388[(8)]);
var inst_13303 = cljs.core.async.close_BANG_(inst_13300);
var state_13388__$1 = state_13388;
var statearr_13435_15439 = state_13388__$1;
(statearr_13435_15439[(2)] = inst_13303);

(statearr_13435_15439[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (36))){
var inst_13347 = (state_13388[(23)]);
var inst_13351 = cljs.core.chunk_first(inst_13347);
var inst_13352 = cljs.core.chunk_rest(inst_13347);
var inst_13353 = cljs.core.count(inst_13351);
var inst_13329 = inst_13352;
var inst_13330 = inst_13351;
var inst_13331 = inst_13353;
var inst_13332 = (0);
var state_13388__$1 = (function (){var statearr_13436 = state_13388;
(statearr_13436[(11)] = inst_13332);

(statearr_13436[(19)] = inst_13331);

(statearr_13436[(20)] = inst_13329);

(statearr_13436[(12)] = inst_13330);

return statearr_13436;
})();
var statearr_13438_15443 = state_13388__$1;
(statearr_13438_15443[(2)] = null);

(statearr_13438_15443[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (41))){
var inst_13347 = (state_13388[(23)]);
var inst_13362 = (state_13388[(2)]);
var inst_13363 = cljs.core.next(inst_13347);
var inst_13329 = inst_13363;
var inst_13330 = null;
var inst_13331 = (0);
var inst_13332 = (0);
var state_13388__$1 = (function (){var statearr_13439 = state_13388;
(statearr_13439[(11)] = inst_13332);

(statearr_13439[(19)] = inst_13331);

(statearr_13439[(25)] = inst_13362);

(statearr_13439[(20)] = inst_13329);

(statearr_13439[(12)] = inst_13330);

return statearr_13439;
})();
var statearr_13441_15444 = state_13388__$1;
(statearr_13441_15444[(2)] = null);

(statearr_13441_15444[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (43))){
var state_13388__$1 = state_13388;
var statearr_13445_15445 = state_13388__$1;
(statearr_13445_15445[(2)] = null);

(statearr_13445_15445[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (29))){
var inst_13371 = (state_13388[(2)]);
var state_13388__$1 = state_13388;
var statearr_13446_15449 = state_13388__$1;
(statearr_13446_15449[(2)] = inst_13371);

(statearr_13446_15449[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (44))){
var inst_13380 = (state_13388[(2)]);
var state_13388__$1 = (function (){var statearr_13447 = state_13388;
(statearr_13447[(26)] = inst_13380);

return statearr_13447;
})();
var statearr_13448_15453 = state_13388__$1;
(statearr_13448_15453[(2)] = null);

(statearr_13448_15453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (6))){
var inst_13321 = (state_13388[(27)]);
var inst_13320 = cljs.core.deref(cs);
var inst_13321__$1 = cljs.core.keys(inst_13320);
var inst_13322 = cljs.core.count(inst_13321__$1);
var inst_13323 = cljs.core.reset_BANG_(dctr,inst_13322);
var inst_13328 = cljs.core.seq(inst_13321__$1);
var inst_13329 = inst_13328;
var inst_13330 = null;
var inst_13331 = (0);
var inst_13332 = (0);
var state_13388__$1 = (function (){var statearr_13449 = state_13388;
(statearr_13449[(11)] = inst_13332);

(statearr_13449[(19)] = inst_13331);

(statearr_13449[(27)] = inst_13321__$1);

(statearr_13449[(20)] = inst_13329);

(statearr_13449[(12)] = inst_13330);

(statearr_13449[(28)] = inst_13323);

return statearr_13449;
})();
var statearr_13450_15454 = state_13388__$1;
(statearr_13450_15454[(2)] = null);

(statearr_13450_15454[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (28))){
var inst_13329 = (state_13388[(20)]);
var inst_13347 = (state_13388[(23)]);
var inst_13347__$1 = cljs.core.seq(inst_13329);
var state_13388__$1 = (function (){var statearr_13451 = state_13388;
(statearr_13451[(23)] = inst_13347__$1);

return statearr_13451;
})();
if(inst_13347__$1){
var statearr_13452_15458 = state_13388__$1;
(statearr_13452_15458[(1)] = (33));

} else {
var statearr_13453_15459 = state_13388__$1;
(statearr_13453_15459[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (25))){
var inst_13332 = (state_13388[(11)]);
var inst_13331 = (state_13388[(19)]);
var inst_13334 = (inst_13332 < inst_13331);
var inst_13335 = inst_13334;
var state_13388__$1 = state_13388;
if(cljs.core.truth_(inst_13335)){
var statearr_13454_15460 = state_13388__$1;
(statearr_13454_15460[(1)] = (27));

} else {
var statearr_13456_15461 = state_13388__$1;
(statearr_13456_15461[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (34))){
var state_13388__$1 = state_13388;
var statearr_13457_15462 = state_13388__$1;
(statearr_13457_15462[(2)] = null);

(statearr_13457_15462[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (17))){
var state_13388__$1 = state_13388;
var statearr_13459_15463 = state_13388__$1;
(statearr_13459_15463[(2)] = null);

(statearr_13459_15463[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (3))){
var inst_13385 = (state_13388[(2)]);
var state_13388__$1 = state_13388;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13388__$1,inst_13385);
} else {
if((state_val_13389 === (12))){
var inst_13315 = (state_13388[(2)]);
var state_13388__$1 = state_13388;
var statearr_13460_15467 = state_13388__$1;
(statearr_13460_15467[(2)] = inst_13315);

(statearr_13460_15467[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (2))){
var state_13388__$1 = state_13388;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13388__$1,(4),ch);
} else {
if((state_val_13389 === (23))){
var state_13388__$1 = state_13388;
var statearr_13461_15468 = state_13388__$1;
(statearr_13461_15468[(2)] = null);

(statearr_13461_15468[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (35))){
var inst_13369 = (state_13388[(2)]);
var state_13388__$1 = state_13388;
var statearr_13462_15469 = state_13388__$1;
(statearr_13462_15469[(2)] = inst_13369);

(statearr_13462_15469[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (19))){
var inst_13287 = (state_13388[(7)]);
var inst_13291 = cljs.core.chunk_first(inst_13287);
var inst_13292 = cljs.core.chunk_rest(inst_13287);
var inst_13293 = cljs.core.count(inst_13291);
var inst_13265 = inst_13292;
var inst_13266 = inst_13291;
var inst_13267 = inst_13293;
var inst_13268 = (0);
var state_13388__$1 = (function (){var statearr_13463 = state_13388;
(statearr_13463[(13)] = inst_13267);

(statearr_13463[(14)] = inst_13265);

(statearr_13463[(15)] = inst_13266);

(statearr_13463[(17)] = inst_13268);

return statearr_13463;
})();
var statearr_13464_15470 = state_13388__$1;
(statearr_13464_15470[(2)] = null);

(statearr_13464_15470[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (11))){
var inst_13265 = (state_13388[(14)]);
var inst_13287 = (state_13388[(7)]);
var inst_13287__$1 = cljs.core.seq(inst_13265);
var state_13388__$1 = (function (){var statearr_13466 = state_13388;
(statearr_13466[(7)] = inst_13287__$1);

return statearr_13466;
})();
if(inst_13287__$1){
var statearr_13467_15471 = state_13388__$1;
(statearr_13467_15471[(1)] = (16));

} else {
var statearr_13471_15473 = state_13388__$1;
(statearr_13471_15473[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (9))){
var inst_13317 = (state_13388[(2)]);
var state_13388__$1 = state_13388;
var statearr_13472_15477 = state_13388__$1;
(statearr_13472_15477[(2)] = inst_13317);

(statearr_13472_15477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (5))){
var inst_13263 = cljs.core.deref(cs);
var inst_13264 = cljs.core.seq(inst_13263);
var inst_13265 = inst_13264;
var inst_13266 = null;
var inst_13267 = (0);
var inst_13268 = (0);
var state_13388__$1 = (function (){var statearr_13473 = state_13388;
(statearr_13473[(13)] = inst_13267);

(statearr_13473[(14)] = inst_13265);

(statearr_13473[(15)] = inst_13266);

(statearr_13473[(17)] = inst_13268);

return statearr_13473;
})();
var statearr_13474_15483 = state_13388__$1;
(statearr_13474_15483[(2)] = null);

(statearr_13474_15483[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (14))){
var state_13388__$1 = state_13388;
var statearr_13475_15484 = state_13388__$1;
(statearr_13475_15484[(2)] = null);

(statearr_13475_15484[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (45))){
var inst_13377 = (state_13388[(2)]);
var state_13388__$1 = state_13388;
var statearr_13476_15485 = state_13388__$1;
(statearr_13476_15485[(2)] = inst_13377);

(statearr_13476_15485[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (26))){
var inst_13321 = (state_13388[(27)]);
var inst_13373 = (state_13388[(2)]);
var inst_13374 = cljs.core.seq(inst_13321);
var state_13388__$1 = (function (){var statearr_13480 = state_13388;
(statearr_13480[(29)] = inst_13373);

return statearr_13480;
})();
if(inst_13374){
var statearr_13481_15486 = state_13388__$1;
(statearr_13481_15486[(1)] = (42));

} else {
var statearr_13482_15490 = state_13388__$1;
(statearr_13482_15490[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (16))){
var inst_13287 = (state_13388[(7)]);
var inst_13289 = cljs.core.chunked_seq_QMARK_(inst_13287);
var state_13388__$1 = state_13388;
if(inst_13289){
var statearr_13483_15492 = state_13388__$1;
(statearr_13483_15492[(1)] = (19));

} else {
var statearr_13484_15494 = state_13388__$1;
(statearr_13484_15494[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (38))){
var inst_13366 = (state_13388[(2)]);
var state_13388__$1 = state_13388;
var statearr_13487_15495 = state_13388__$1;
(statearr_13487_15495[(2)] = inst_13366);

(statearr_13487_15495[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (30))){
var state_13388__$1 = state_13388;
var statearr_13489_15496 = state_13388__$1;
(statearr_13489_15496[(2)] = null);

(statearr_13489_15496[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (10))){
var inst_13266 = (state_13388[(15)]);
var inst_13268 = (state_13388[(17)]);
var inst_13276 = cljs.core._nth(inst_13266,inst_13268);
var inst_13277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13276,(0),null);
var inst_13278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13276,(1),null);
var state_13388__$1 = (function (){var statearr_13493 = state_13388;
(statearr_13493[(24)] = inst_13277);

return statearr_13493;
})();
if(cljs.core.truth_(inst_13278)){
var statearr_13494_15497 = state_13388__$1;
(statearr_13494_15497[(1)] = (13));

} else {
var statearr_13495_15498 = state_13388__$1;
(statearr_13495_15498[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (18))){
var inst_13313 = (state_13388[(2)]);
var state_13388__$1 = state_13388;
var statearr_13497_15499 = state_13388__$1;
(statearr_13497_15499[(2)] = inst_13313);

(statearr_13497_15499[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (42))){
var state_13388__$1 = state_13388;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13388__$1,(45),dchan);
} else {
if((state_val_13389 === (37))){
var inst_13256 = (state_13388[(9)]);
var inst_13356 = (state_13388[(22)]);
var inst_13347 = (state_13388[(23)]);
var inst_13356__$1 = cljs.core.first(inst_13347);
var inst_13357 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_13356__$1,inst_13256,done);
var state_13388__$1 = (function (){var statearr_13498 = state_13388;
(statearr_13498[(22)] = inst_13356__$1);

return statearr_13498;
})();
if(cljs.core.truth_(inst_13357)){
var statearr_13500_15500 = state_13388__$1;
(statearr_13500_15500[(1)] = (39));

} else {
var statearr_13501_15502 = state_13388__$1;
(statearr_13501_15502[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13389 === (8))){
var inst_13267 = (state_13388[(13)]);
var inst_13268 = (state_13388[(17)]);
var inst_13270 = (inst_13268 < inst_13267);
var inst_13271 = inst_13270;
var state_13388__$1 = state_13388;
if(cljs.core.truth_(inst_13271)){
var statearr_13504_15516 = state_13388__$1;
(statearr_13504_15516[(1)] = (10));

} else {
var statearr_13506_15517 = state_13388__$1;
(statearr_13506_15517[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__11984__auto__ = null;
var cljs$core$async$mult_$_state_machine__11984__auto____0 = (function (){
var statearr_13514 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13514[(0)] = cljs$core$async$mult_$_state_machine__11984__auto__);

(statearr_13514[(1)] = (1));

return statearr_13514;
});
var cljs$core$async$mult_$_state_machine__11984__auto____1 = (function (state_13388){
while(true){
var ret_value__11985__auto__ = (function (){try{while(true){
var result__11986__auto__ = switch__11983__auto__(state_13388);
if(cljs.core.keyword_identical_QMARK_(result__11986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11986__auto__;
}
break;
}
}catch (e13516){var ex__11987__auto__ = e13516;
var statearr_13517_15519 = state_13388;
(statearr_13517_15519[(2)] = ex__11987__auto__);


if(cljs.core.seq((state_13388[(4)]))){
var statearr_13520_15520 = state_13388;
(statearr_13520_15520[(1)] = cljs.core.first((state_13388[(4)])));

} else {
throw ex__11987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15521 = state_13388;
state_13388 = G__15521;
continue;
} else {
return ret_value__11985__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__11984__auto__ = function(state_13388){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__11984__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__11984__auto____1.call(this,state_13388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__11984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__11984__auto____0;
cljs$core$async$mult_$_state_machine__11984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__11984__auto____1;
return cljs$core$async$mult_$_state_machine__11984__auto__;
})()
})();
var state__12439__auto__ = (function (){var statearr_13524 = f__12438__auto__();
(statearr_13524[(6)] = c__12437__auto___15397);

return statearr_13524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12439__auto__);
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
var G__13530 = arguments.length;
switch (G__13530) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_15526 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_15526(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_15528 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_15528(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_15529 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_15529(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_15533 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_15533(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_15534 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_15534(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15535 = arguments.length;
var i__5727__auto___15536 = (0);
while(true){
if((i__5727__auto___15536 < len__5726__auto___15535)){
args__5732__auto__.push((arguments[i__5727__auto___15536]));

var G__15537 = (i__5727__auto___15536 + (1));
i__5727__auto___15536 = G__15537;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__13630){
var map__13632 = p__13630;
var map__13632__$1 = cljs.core.__destructure_map(map__13632);
var opts = map__13632__$1;
var statearr_13635_15540 = state;
(statearr_13635_15540[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_13641_15541 = state;
(statearr_13641_15541[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_13642_15542 = state;
(statearr_13642_15542[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq13597){
var G__13598 = cljs.core.first(seq13597);
var seq13597__$1 = cljs.core.next(seq13597);
var G__13599 = cljs.core.first(seq13597__$1);
var seq13597__$2 = cljs.core.next(seq13597__$1);
var G__13600 = cljs.core.first(seq13597__$2);
var seq13597__$3 = cljs.core.next(seq13597__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13598,G__13599,G__13600,seq13597__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13657 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13658){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta13658 = meta13658;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13660,meta13658__$1){
var self__ = this;
var _13660__$1 = this;
return (new cljs.core.async.t_cljs$core$async13657(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13658__$1));
}));

(cljs.core.async.t_cljs$core$async13657.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13660){
var self__ = this;
var _13660__$1 = this;
return self__.meta13658;
}));

(cljs.core.async.t_cljs$core$async13657.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13657.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async13657.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13657.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13657.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13657.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13657.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13657.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async13657.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta13658","meta13658",-1151948600,null)], null);
}));

(cljs.core.async.t_cljs$core$async13657.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13657.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13657");

(cljs.core.async.t_cljs$core$async13657.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async13657");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13657.
 */
cljs.core.async.__GT_t_cljs$core$async13657 = (function cljs$core$async$__GT_t_cljs$core$async13657(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13658){
return (new cljs.core.async.t_cljs$core$async13657(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13658));
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
var m = (new cljs.core.async.t_cljs$core$async13657(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__12437__auto___15561 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12438__auto__ = (function (){var switch__11983__auto__ = (function (state_13779){
var state_val_13780 = (state_13779[(1)]);
if((state_val_13780 === (7))){
var inst_13735 = (state_13779[(2)]);
var state_13779__$1 = state_13779;
if(cljs.core.truth_(inst_13735)){
var statearr_13785_15566 = state_13779__$1;
(statearr_13785_15566[(1)] = (8));

} else {
var statearr_13786_15567 = state_13779__$1;
(statearr_13786_15567[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13780 === (20))){
var inst_13725 = (state_13779[(7)]);
var state_13779__$1 = state_13779;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13779__$1,(23),out,inst_13725);
} else {
if((state_val_13780 === (1))){
var inst_13707 = calc_state();
var inst_13708 = cljs.core.__destructure_map(inst_13707);
var inst_13709 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13708,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13708,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13711 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13708,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13712 = inst_13707;
var state_13779__$1 = (function (){var statearr_13791 = state_13779;
(statearr_13791[(8)] = inst_13709);

(statearr_13791[(9)] = inst_13711);

(statearr_13791[(10)] = inst_13710);

(statearr_13791[(11)] = inst_13712);

return statearr_13791;
})();
var statearr_13793_15575 = state_13779__$1;
(statearr_13793_15575[(2)] = null);

(statearr_13793_15575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13780 === (24))){
var inst_13716 = (state_13779[(12)]);
var inst_13712 = inst_13716;
var state_13779__$1 = (function (){var statearr_13797 = state_13779;
(statearr_13797[(11)] = inst_13712);

return statearr_13797;
})();
var statearr_13798_15576 = state_13779__$1;
(statearr_13798_15576[(2)] = null);

(statearr_13798_15576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13780 === (4))){
var inst_13729 = (state_13779[(13)]);
var inst_13725 = (state_13779[(7)]);
var inst_13724 = (state_13779[(2)]);
var inst_13725__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13724,(0),null);
var inst_13727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13724,(1),null);
var inst_13729__$1 = (inst_13725__$1 == null);
var state_13779__$1 = (function (){var statearr_13801 = state_13779;
(statearr_13801[(14)] = inst_13727);

(statearr_13801[(13)] = inst_13729__$1);

(statearr_13801[(7)] = inst_13725__$1);

return statearr_13801;
})();
if(cljs.core.truth_(inst_13729__$1)){
var statearr_13804_15577 = state_13779__$1;
(statearr_13804_15577[(1)] = (5));

} else {
var statearr_13808_15578 = state_13779__$1;
(statearr_13808_15578[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13780 === (15))){
var inst_13717 = (state_13779[(15)]);
var inst_13750 = (state_13779[(16)]);
var inst_13750__$1 = cljs.core.empty_QMARK_(inst_13717);
var state_13779__$1 = (function (){var statearr_13812 = state_13779;
(statearr_13812[(16)] = inst_13750__$1);

return statearr_13812;
})();
if(inst_13750__$1){
var statearr_13813_15582 = state_13779__$1;
(statearr_13813_15582[(1)] = (17));

} else {
var statearr_13814_15583 = state_13779__$1;
(statearr_13814_15583[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13780 === (21))){
var inst_13716 = (state_13779[(12)]);
var inst_13712 = inst_13716;
var state_13779__$1 = (function (){var statearr_13816 = state_13779;
(statearr_13816[(11)] = inst_13712);

return statearr_13816;
})();
var statearr_13817_15584 = state_13779__$1;
(statearr_13817_15584[(2)] = null);

(statearr_13817_15584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13780 === (13))){
var inst_13742 = (state_13779[(2)]);
var inst_13743 = calc_state();
var inst_13712 = inst_13743;
var state_13779__$1 = (function (){var statearr_13819 = state_13779;
(statearr_13819[(17)] = inst_13742);

(statearr_13819[(11)] = inst_13712);

return statearr_13819;
})();
var statearr_13820_15585 = state_13779__$1;
(statearr_13820_15585[(2)] = null);

(statearr_13820_15585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13780 === (22))){
var inst_13772 = (state_13779[(2)]);
var state_13779__$1 = state_13779;
var statearr_13825_15586 = state_13779__$1;
(statearr_13825_15586[(2)] = inst_13772);

(statearr_13825_15586[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13780 === (6))){
var inst_13727 = (state_13779[(14)]);
var inst_13733 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_13727,change);
var state_13779__$1 = state_13779;
var statearr_13826_15587 = state_13779__$1;
(statearr_13826_15587[(2)] = inst_13733);

(statearr_13826_15587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13780 === (25))){
var state_13779__$1 = state_13779;
var statearr_13827_15588 = state_13779__$1;
(statearr_13827_15588[(2)] = null);

(statearr_13827_15588[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13780 === (17))){
var inst_13718 = (state_13779[(18)]);
var inst_13727 = (state_13779[(14)]);
var inst_13752 = (inst_13718.cljs$core$IFn$_invoke$arity$1 ? inst_13718.cljs$core$IFn$_invoke$arity$1(inst_13727) : inst_13718.call(null,inst_13727));
var inst_13753 = cljs.core.not(inst_13752);
var state_13779__$1 = state_13779;
var statearr_13828_15591 = state_13779__$1;
(statearr_13828_15591[(2)] = inst_13753);

(statearr_13828_15591[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13780 === (3))){
var inst_13776 = (state_13779[(2)]);
var state_13779__$1 = state_13779;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13779__$1,inst_13776);
} else {
if((state_val_13780 === (12))){
var state_13779__$1 = state_13779;
var statearr_13829_15592 = state_13779__$1;
(statearr_13829_15592[(2)] = null);

(statearr_13829_15592[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13780 === (2))){
var inst_13716 = (state_13779[(12)]);
var inst_13712 = (state_13779[(11)]);
var inst_13716__$1 = cljs.core.__destructure_map(inst_13712);
var inst_13717 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13716__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13718 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13716__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13719 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_13716__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_13779__$1 = (function (){var statearr_13830 = state_13779;
(statearr_13830[(15)] = inst_13717);

(statearr_13830[(18)] = inst_13718);

(statearr_13830[(12)] = inst_13716__$1);

return statearr_13830;
})();
return cljs.core.async.ioc_alts_BANG_(state_13779__$1,(4),inst_13719);
} else {
if((state_val_13780 === (23))){
var inst_13761 = (state_13779[(2)]);
var state_13779__$1 = state_13779;
if(cljs.core.truth_(inst_13761)){
var statearr_13831_15597 = state_13779__$1;
(statearr_13831_15597[(1)] = (24));

} else {
var statearr_13832_15598 = state_13779__$1;
(statearr_13832_15598[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13780 === (19))){
var inst_13756 = (state_13779[(2)]);
var state_13779__$1 = state_13779;
var statearr_13835_15602 = state_13779__$1;
(statearr_13835_15602[(2)] = inst_13756);

(statearr_13835_15602[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13780 === (11))){
var inst_13727 = (state_13779[(14)]);
var inst_13739 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_13727);
var state_13779__$1 = state_13779;
var statearr_13836_15603 = state_13779__$1;
(statearr_13836_15603[(2)] = inst_13739);

(statearr_13836_15603[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13780 === (9))){
var inst_13717 = (state_13779[(15)]);
var inst_13746 = (state_13779[(19)]);
var inst_13727 = (state_13779[(14)]);
var inst_13746__$1 = (inst_13717.cljs$core$IFn$_invoke$arity$1 ? inst_13717.cljs$core$IFn$_invoke$arity$1(inst_13727) : inst_13717.call(null,inst_13727));
var state_13779__$1 = (function (){var statearr_13845 = state_13779;
(statearr_13845[(19)] = inst_13746__$1);

return statearr_13845;
})();
if(cljs.core.truth_(inst_13746__$1)){
var statearr_13847_15604 = state_13779__$1;
(statearr_13847_15604[(1)] = (14));

} else {
var statearr_13848_15605 = state_13779__$1;
(statearr_13848_15605[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13780 === (5))){
var inst_13729 = (state_13779[(13)]);
var state_13779__$1 = state_13779;
var statearr_13858_15609 = state_13779__$1;
(statearr_13858_15609[(2)] = inst_13729);

(statearr_13858_15609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13780 === (14))){
var inst_13746 = (state_13779[(19)]);
var state_13779__$1 = state_13779;
var statearr_13863_15610 = state_13779__$1;
(statearr_13863_15610[(2)] = inst_13746);

(statearr_13863_15610[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13780 === (26))){
var inst_13768 = (state_13779[(2)]);
var state_13779__$1 = state_13779;
var statearr_13868_15611 = state_13779__$1;
(statearr_13868_15611[(2)] = inst_13768);

(statearr_13868_15611[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13780 === (16))){
var inst_13758 = (state_13779[(2)]);
var state_13779__$1 = state_13779;
if(cljs.core.truth_(inst_13758)){
var statearr_13869_15612 = state_13779__$1;
(statearr_13869_15612[(1)] = (20));

} else {
var statearr_13874_15613 = state_13779__$1;
(statearr_13874_15613[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13780 === (10))){
var inst_13774 = (state_13779[(2)]);
var state_13779__$1 = state_13779;
var statearr_13876_15614 = state_13779__$1;
(statearr_13876_15614[(2)] = inst_13774);

(statearr_13876_15614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13780 === (18))){
var inst_13750 = (state_13779[(16)]);
var state_13779__$1 = state_13779;
var statearr_13877_15615 = state_13779__$1;
(statearr_13877_15615[(2)] = inst_13750);

(statearr_13877_15615[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13780 === (8))){
var inst_13725 = (state_13779[(7)]);
var inst_13737 = (inst_13725 == null);
var state_13779__$1 = state_13779;
if(cljs.core.truth_(inst_13737)){
var statearr_13878_15616 = state_13779__$1;
(statearr_13878_15616[(1)] = (11));

} else {
var statearr_13879_15617 = state_13779__$1;
(statearr_13879_15617[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__11984__auto__ = null;
var cljs$core$async$mix_$_state_machine__11984__auto____0 = (function (){
var statearr_13881 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13881[(0)] = cljs$core$async$mix_$_state_machine__11984__auto__);

(statearr_13881[(1)] = (1));

return statearr_13881;
});
var cljs$core$async$mix_$_state_machine__11984__auto____1 = (function (state_13779){
while(true){
var ret_value__11985__auto__ = (function (){try{while(true){
var result__11986__auto__ = switch__11983__auto__(state_13779);
if(cljs.core.keyword_identical_QMARK_(result__11986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11986__auto__;
}
break;
}
}catch (e13882){var ex__11987__auto__ = e13882;
var statearr_13883_15619 = state_13779;
(statearr_13883_15619[(2)] = ex__11987__auto__);


if(cljs.core.seq((state_13779[(4)]))){
var statearr_13884_15620 = state_13779;
(statearr_13884_15620[(1)] = cljs.core.first((state_13779[(4)])));

} else {
throw ex__11987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15621 = state_13779;
state_13779 = G__15621;
continue;
} else {
return ret_value__11985__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__11984__auto__ = function(state_13779){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__11984__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__11984__auto____1.call(this,state_13779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__11984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__11984__auto____0;
cljs$core$async$mix_$_state_machine__11984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__11984__auto____1;
return cljs$core$async$mix_$_state_machine__11984__auto__;
})()
})();
var state__12439__auto__ = (function (){var statearr_13892 = f__12438__auto__();
(statearr_13892[(6)] = c__12437__auto___15561);

return statearr_13892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12439__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_15622 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_15622(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_15627 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_15627(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_15631 = (function() {
var G__15632 = null;
var G__15632__1 = (function (p){
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
var G__15632__2 = (function (p,v){
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
G__15632 = function(p,v){
switch(arguments.length){
case 1:
return G__15632__1.call(this,p);
case 2:
return G__15632__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15632.cljs$core$IFn$_invoke$arity$1 = G__15632__1;
G__15632.cljs$core$IFn$_invoke$arity$2 = G__15632__2;
return G__15632;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__13910 = arguments.length;
switch (G__13910) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_15631(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_15631(p,v);
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
cljs.core.async.t_cljs$core$async13935 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta13936){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta13936 = meta13936;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13937,meta13936__$1){
var self__ = this;
var _13937__$1 = this;
return (new cljs.core.async.t_cljs$core$async13935(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta13936__$1));
}));

(cljs.core.async.t_cljs$core$async13935.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13937){
var self__ = this;
var _13937__$1 = this;
return self__.meta13936;
}));

(cljs.core.async.t_cljs$core$async13935.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13935.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async13935.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13935.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async13935.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async13935.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async13935.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async13935.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta13936","meta13936",1484193490,null)], null);
}));

(cljs.core.async.t_cljs$core$async13935.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13935.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13935");

(cljs.core.async.t_cljs$core$async13935.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async13935");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13935.
 */
cljs.core.async.__GT_t_cljs$core$async13935 = (function cljs$core$async$__GT_t_cljs$core$async13935(ch,topic_fn,buf_fn,mults,ensure_mult,meta13936){
return (new cljs.core.async.t_cljs$core$async13935(ch,topic_fn,buf_fn,mults,ensure_mult,meta13936));
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
var G__13933 = arguments.length;
switch (G__13933) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__13923_SHARP_){
if(cljs.core.truth_((p1__13923_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13923_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__13923_SHARP_.call(null,topic)))){
return p1__13923_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13923_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async13935(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__12437__auto___15639 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12438__auto__ = (function (){var switch__11983__auto__ = (function (state_14035){
var state_val_14040 = (state_14035[(1)]);
if((state_val_14040 === (7))){
var inst_14031 = (state_14035[(2)]);
var state_14035__$1 = state_14035;
var statearr_14041_15640 = state_14035__$1;
(statearr_14041_15640[(2)] = inst_14031);

(statearr_14041_15640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14040 === (20))){
var state_14035__$1 = state_14035;
var statearr_14042_15644 = state_14035__$1;
(statearr_14042_15644[(2)] = null);

(statearr_14042_15644[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14040 === (1))){
var state_14035__$1 = state_14035;
var statearr_14044_15645 = state_14035__$1;
(statearr_14044_15645[(2)] = null);

(statearr_14044_15645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14040 === (24))){
var inst_14014 = (state_14035[(7)]);
var inst_14023 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_14014);
var state_14035__$1 = state_14035;
var statearr_14045_15646 = state_14035__$1;
(statearr_14045_15646[(2)] = inst_14023);

(statearr_14045_15646[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14040 === (4))){
var inst_13966 = (state_14035[(8)]);
var inst_13966__$1 = (state_14035[(2)]);
var inst_13967 = (inst_13966__$1 == null);
var state_14035__$1 = (function (){var statearr_14046 = state_14035;
(statearr_14046[(8)] = inst_13966__$1);

return statearr_14046;
})();
if(cljs.core.truth_(inst_13967)){
var statearr_14047_15647 = state_14035__$1;
(statearr_14047_15647[(1)] = (5));

} else {
var statearr_14048_15648 = state_14035__$1;
(statearr_14048_15648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14040 === (15))){
var inst_14008 = (state_14035[(2)]);
var state_14035__$1 = state_14035;
var statearr_14049_15649 = state_14035__$1;
(statearr_14049_15649[(2)] = inst_14008);

(statearr_14049_15649[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14040 === (21))){
var inst_14028 = (state_14035[(2)]);
var state_14035__$1 = (function (){var statearr_14050 = state_14035;
(statearr_14050[(9)] = inst_14028);

return statearr_14050;
})();
var statearr_14051_15650 = state_14035__$1;
(statearr_14051_15650[(2)] = null);

(statearr_14051_15650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14040 === (13))){
var inst_13990 = (state_14035[(10)]);
var inst_13992 = cljs.core.chunked_seq_QMARK_(inst_13990);
var state_14035__$1 = state_14035;
if(inst_13992){
var statearr_14053_15651 = state_14035__$1;
(statearr_14053_15651[(1)] = (16));

} else {
var statearr_14054_15652 = state_14035__$1;
(statearr_14054_15652[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14040 === (22))){
var inst_14020 = (state_14035[(2)]);
var state_14035__$1 = state_14035;
if(cljs.core.truth_(inst_14020)){
var statearr_14056_15657 = state_14035__$1;
(statearr_14056_15657[(1)] = (23));

} else {
var statearr_14057_15658 = state_14035__$1;
(statearr_14057_15658[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14040 === (6))){
var inst_13966 = (state_14035[(8)]);
var inst_14014 = (state_14035[(7)]);
var inst_14016 = (state_14035[(11)]);
var inst_14014__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_13966) : topic_fn.call(null,inst_13966));
var inst_14015 = cljs.core.deref(mults);
var inst_14016__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14015,inst_14014__$1);
var state_14035__$1 = (function (){var statearr_14058 = state_14035;
(statearr_14058[(7)] = inst_14014__$1);

(statearr_14058[(11)] = inst_14016__$1);

return statearr_14058;
})();
if(cljs.core.truth_(inst_14016__$1)){
var statearr_14059_15660 = state_14035__$1;
(statearr_14059_15660[(1)] = (19));

} else {
var statearr_14060_15661 = state_14035__$1;
(statearr_14060_15661[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14040 === (25))){
var inst_14025 = (state_14035[(2)]);
var state_14035__$1 = state_14035;
var statearr_14061_15662 = state_14035__$1;
(statearr_14061_15662[(2)] = inst_14025);

(statearr_14061_15662[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14040 === (17))){
var inst_13990 = (state_14035[(10)]);
var inst_13999 = cljs.core.first(inst_13990);
var inst_14000 = cljs.core.async.muxch_STAR_(inst_13999);
var inst_14001 = cljs.core.async.close_BANG_(inst_14000);
var inst_14002 = cljs.core.next(inst_13990);
var inst_13976 = inst_14002;
var inst_13977 = null;
var inst_13978 = (0);
var inst_13979 = (0);
var state_14035__$1 = (function (){var statearr_14062 = state_14035;
(statearr_14062[(12)] = inst_13977);

(statearr_14062[(13)] = inst_13976);

(statearr_14062[(14)] = inst_14001);

(statearr_14062[(15)] = inst_13978);

(statearr_14062[(16)] = inst_13979);

return statearr_14062;
})();
var statearr_14063_15664 = state_14035__$1;
(statearr_14063_15664[(2)] = null);

(statearr_14063_15664[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14040 === (3))){
var inst_14033 = (state_14035[(2)]);
var state_14035__$1 = state_14035;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14035__$1,inst_14033);
} else {
if((state_val_14040 === (12))){
var inst_14010 = (state_14035[(2)]);
var state_14035__$1 = state_14035;
var statearr_14064_15665 = state_14035__$1;
(statearr_14064_15665[(2)] = inst_14010);

(statearr_14064_15665[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14040 === (2))){
var state_14035__$1 = state_14035;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14035__$1,(4),ch);
} else {
if((state_val_14040 === (23))){
var state_14035__$1 = state_14035;
var statearr_14069_15668 = state_14035__$1;
(statearr_14069_15668[(2)] = null);

(statearr_14069_15668[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14040 === (19))){
var inst_13966 = (state_14035[(8)]);
var inst_14016 = (state_14035[(11)]);
var inst_14018 = cljs.core.async.muxch_STAR_(inst_14016);
var state_14035__$1 = state_14035;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14035__$1,(22),inst_14018,inst_13966);
} else {
if((state_val_14040 === (11))){
var inst_13990 = (state_14035[(10)]);
var inst_13976 = (state_14035[(13)]);
var inst_13990__$1 = cljs.core.seq(inst_13976);
var state_14035__$1 = (function (){var statearr_14070 = state_14035;
(statearr_14070[(10)] = inst_13990__$1);

return statearr_14070;
})();
if(inst_13990__$1){
var statearr_14071_15669 = state_14035__$1;
(statearr_14071_15669[(1)] = (13));

} else {
var statearr_14072_15670 = state_14035__$1;
(statearr_14072_15670[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14040 === (9))){
var inst_14012 = (state_14035[(2)]);
var state_14035__$1 = state_14035;
var statearr_14073_15671 = state_14035__$1;
(statearr_14073_15671[(2)] = inst_14012);

(statearr_14073_15671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14040 === (5))){
var inst_13973 = cljs.core.deref(mults);
var inst_13974 = cljs.core.vals(inst_13973);
var inst_13975 = cljs.core.seq(inst_13974);
var inst_13976 = inst_13975;
var inst_13977 = null;
var inst_13978 = (0);
var inst_13979 = (0);
var state_14035__$1 = (function (){var statearr_14074 = state_14035;
(statearr_14074[(12)] = inst_13977);

(statearr_14074[(13)] = inst_13976);

(statearr_14074[(15)] = inst_13978);

(statearr_14074[(16)] = inst_13979);

return statearr_14074;
})();
var statearr_14075_15673 = state_14035__$1;
(statearr_14075_15673[(2)] = null);

(statearr_14075_15673[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14040 === (14))){
var state_14035__$1 = state_14035;
var statearr_14082_15674 = state_14035__$1;
(statearr_14082_15674[(2)] = null);

(statearr_14082_15674[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14040 === (16))){
var inst_13990 = (state_14035[(10)]);
var inst_13994 = cljs.core.chunk_first(inst_13990);
var inst_13995 = cljs.core.chunk_rest(inst_13990);
var inst_13996 = cljs.core.count(inst_13994);
var inst_13976 = inst_13995;
var inst_13977 = inst_13994;
var inst_13978 = inst_13996;
var inst_13979 = (0);
var state_14035__$1 = (function (){var statearr_14085 = state_14035;
(statearr_14085[(12)] = inst_13977);

(statearr_14085[(13)] = inst_13976);

(statearr_14085[(15)] = inst_13978);

(statearr_14085[(16)] = inst_13979);

return statearr_14085;
})();
var statearr_14086_15679 = state_14035__$1;
(statearr_14086_15679[(2)] = null);

(statearr_14086_15679[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14040 === (10))){
var inst_13977 = (state_14035[(12)]);
var inst_13976 = (state_14035[(13)]);
var inst_13978 = (state_14035[(15)]);
var inst_13979 = (state_14035[(16)]);
var inst_13984 = cljs.core._nth(inst_13977,inst_13979);
var inst_13985 = cljs.core.async.muxch_STAR_(inst_13984);
var inst_13986 = cljs.core.async.close_BANG_(inst_13985);
var inst_13987 = (inst_13979 + (1));
var tmp14079 = inst_13977;
var tmp14080 = inst_13976;
var tmp14081 = inst_13978;
var inst_13976__$1 = tmp14080;
var inst_13977__$1 = tmp14079;
var inst_13978__$1 = tmp14081;
var inst_13979__$1 = inst_13987;
var state_14035__$1 = (function (){var statearr_14090 = state_14035;
(statearr_14090[(17)] = inst_13986);

(statearr_14090[(12)] = inst_13977__$1);

(statearr_14090[(13)] = inst_13976__$1);

(statearr_14090[(15)] = inst_13978__$1);

(statearr_14090[(16)] = inst_13979__$1);

return statearr_14090;
})();
var statearr_14091_15680 = state_14035__$1;
(statearr_14091_15680[(2)] = null);

(statearr_14091_15680[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14040 === (18))){
var inst_14005 = (state_14035[(2)]);
var state_14035__$1 = state_14035;
var statearr_14092_15681 = state_14035__$1;
(statearr_14092_15681[(2)] = inst_14005);

(statearr_14092_15681[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14040 === (8))){
var inst_13978 = (state_14035[(15)]);
var inst_13979 = (state_14035[(16)]);
var inst_13981 = (inst_13979 < inst_13978);
var inst_13982 = inst_13981;
var state_14035__$1 = state_14035;
if(cljs.core.truth_(inst_13982)){
var statearr_14093_15685 = state_14035__$1;
(statearr_14093_15685[(1)] = (10));

} else {
var statearr_14094_15686 = state_14035__$1;
(statearr_14094_15686[(1)] = (11));

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
var cljs$core$async$state_machine__11984__auto__ = null;
var cljs$core$async$state_machine__11984__auto____0 = (function (){
var statearr_14097 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14097[(0)] = cljs$core$async$state_machine__11984__auto__);

(statearr_14097[(1)] = (1));

return statearr_14097;
});
var cljs$core$async$state_machine__11984__auto____1 = (function (state_14035){
while(true){
var ret_value__11985__auto__ = (function (){try{while(true){
var result__11986__auto__ = switch__11983__auto__(state_14035);
if(cljs.core.keyword_identical_QMARK_(result__11986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11986__auto__;
}
break;
}
}catch (e14098){var ex__11987__auto__ = e14098;
var statearr_14099_15687 = state_14035;
(statearr_14099_15687[(2)] = ex__11987__auto__);


if(cljs.core.seq((state_14035[(4)]))){
var statearr_14100_15688 = state_14035;
(statearr_14100_15688[(1)] = cljs.core.first((state_14035[(4)])));

} else {
throw ex__11987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15689 = state_14035;
state_14035 = G__15689;
continue;
} else {
return ret_value__11985__auto__;
}
break;
}
});
cljs$core$async$state_machine__11984__auto__ = function(state_14035){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11984__auto____1.call(this,state_14035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11984__auto____0;
cljs$core$async$state_machine__11984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11984__auto____1;
return cljs$core$async$state_machine__11984__auto__;
})()
})();
var state__12439__auto__ = (function (){var statearr_14101 = f__12438__auto__();
(statearr_14101[(6)] = c__12437__auto___15639);

return statearr_14101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12439__auto__);
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
var G__14103 = arguments.length;
switch (G__14103) {
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
var G__14106 = arguments.length;
switch (G__14106) {
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
var G__14109 = arguments.length;
switch (G__14109) {
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
var c__12437__auto___15697 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12438__auto__ = (function (){var switch__11983__auto__ = (function (state_14155){
var state_val_14156 = (state_14155[(1)]);
if((state_val_14156 === (7))){
var state_14155__$1 = state_14155;
var statearr_14157_15698 = state_14155__$1;
(statearr_14157_15698[(2)] = null);

(statearr_14157_15698[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14156 === (1))){
var state_14155__$1 = state_14155;
var statearr_14158_15700 = state_14155__$1;
(statearr_14158_15700[(2)] = null);

(statearr_14158_15700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14156 === (4))){
var inst_14112 = (state_14155[(7)]);
var inst_14113 = (state_14155[(8)]);
var inst_14115 = (inst_14113 < inst_14112);
var state_14155__$1 = state_14155;
if(cljs.core.truth_(inst_14115)){
var statearr_14159_15703 = state_14155__$1;
(statearr_14159_15703[(1)] = (6));

} else {
var statearr_14160_15704 = state_14155__$1;
(statearr_14160_15704[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14156 === (15))){
var inst_14141 = (state_14155[(9)]);
var inst_14146 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_14141);
var state_14155__$1 = state_14155;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14155__$1,(17),out,inst_14146);
} else {
if((state_val_14156 === (13))){
var inst_14141 = (state_14155[(9)]);
var inst_14141__$1 = (state_14155[(2)]);
var inst_14142 = cljs.core.some(cljs.core.nil_QMARK_,inst_14141__$1);
var state_14155__$1 = (function (){var statearr_14163 = state_14155;
(statearr_14163[(9)] = inst_14141__$1);

return statearr_14163;
})();
if(cljs.core.truth_(inst_14142)){
var statearr_14164_15709 = state_14155__$1;
(statearr_14164_15709[(1)] = (14));

} else {
var statearr_14165_15710 = state_14155__$1;
(statearr_14165_15710[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14156 === (6))){
var state_14155__$1 = state_14155;
var statearr_14167_15711 = state_14155__$1;
(statearr_14167_15711[(2)] = null);

(statearr_14167_15711[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14156 === (17))){
var inst_14148 = (state_14155[(2)]);
var state_14155__$1 = (function (){var statearr_14173 = state_14155;
(statearr_14173[(10)] = inst_14148);

return statearr_14173;
})();
var statearr_14175_15712 = state_14155__$1;
(statearr_14175_15712[(2)] = null);

(statearr_14175_15712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14156 === (3))){
var inst_14153 = (state_14155[(2)]);
var state_14155__$1 = state_14155;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14155__$1,inst_14153);
} else {
if((state_val_14156 === (12))){
var _ = (function (){var statearr_14177 = state_14155;
(statearr_14177[(4)] = cljs.core.rest((state_14155[(4)])));

return statearr_14177;
})();
var state_14155__$1 = state_14155;
var ex14172 = (state_14155__$1[(2)]);
var statearr_14178_15716 = state_14155__$1;
(statearr_14178_15716[(5)] = ex14172);


if((ex14172 instanceof Object)){
var statearr_14179_15717 = state_14155__$1;
(statearr_14179_15717[(1)] = (11));

(statearr_14179_15717[(5)] = null);

} else {
throw ex14172;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14156 === (2))){
var inst_14111 = cljs.core.reset_BANG_(dctr,cnt);
var inst_14112 = cnt;
var inst_14113 = (0);
var state_14155__$1 = (function (){var statearr_14181 = state_14155;
(statearr_14181[(7)] = inst_14112);

(statearr_14181[(8)] = inst_14113);

(statearr_14181[(11)] = inst_14111);

return statearr_14181;
})();
var statearr_14182_15718 = state_14155__$1;
(statearr_14182_15718[(2)] = null);

(statearr_14182_15718[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14156 === (11))){
var inst_14120 = (state_14155[(2)]);
var inst_14121 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_14155__$1 = (function (){var statearr_14184 = state_14155;
(statearr_14184[(12)] = inst_14120);

return statearr_14184;
})();
var statearr_14185_15719 = state_14155__$1;
(statearr_14185_15719[(2)] = inst_14121);

(statearr_14185_15719[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14156 === (9))){
var inst_14113 = (state_14155[(8)]);
var _ = (function (){var statearr_14188 = state_14155;
(statearr_14188[(4)] = cljs.core.cons((12),(state_14155[(4)])));

return statearr_14188;
})();
var inst_14127 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_14113) : chs__$1.call(null,inst_14113));
var inst_14128 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_14113) : done.call(null,inst_14113));
var inst_14129 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_14127,inst_14128);
var ___$1 = (function (){var statearr_14189 = state_14155;
(statearr_14189[(4)] = cljs.core.rest((state_14155[(4)])));

return statearr_14189;
})();
var state_14155__$1 = state_14155;
var statearr_14190_15724 = state_14155__$1;
(statearr_14190_15724[(2)] = inst_14129);

(statearr_14190_15724[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14156 === (5))){
var inst_14139 = (state_14155[(2)]);
var state_14155__$1 = (function (){var statearr_14191 = state_14155;
(statearr_14191[(13)] = inst_14139);

return statearr_14191;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14155__$1,(13),dchan);
} else {
if((state_val_14156 === (14))){
var inst_14144 = cljs.core.async.close_BANG_(out);
var state_14155__$1 = state_14155;
var statearr_14194_15725 = state_14155__$1;
(statearr_14194_15725[(2)] = inst_14144);

(statearr_14194_15725[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14156 === (16))){
var inst_14151 = (state_14155[(2)]);
var state_14155__$1 = state_14155;
var statearr_14198_15726 = state_14155__$1;
(statearr_14198_15726[(2)] = inst_14151);

(statearr_14198_15726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14156 === (10))){
var inst_14113 = (state_14155[(8)]);
var inst_14132 = (state_14155[(2)]);
var inst_14133 = (inst_14113 + (1));
var inst_14113__$1 = inst_14133;
var state_14155__$1 = (function (){var statearr_14223 = state_14155;
(statearr_14223[(8)] = inst_14113__$1);

(statearr_14223[(14)] = inst_14132);

return statearr_14223;
})();
var statearr_14224_15729 = state_14155__$1;
(statearr_14224_15729[(2)] = null);

(statearr_14224_15729[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14156 === (8))){
var inst_14137 = (state_14155[(2)]);
var state_14155__$1 = state_14155;
var statearr_14225_15731 = state_14155__$1;
(statearr_14225_15731[(2)] = inst_14137);

(statearr_14225_15731[(1)] = (5));


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
var cljs$core$async$state_machine__11984__auto__ = null;
var cljs$core$async$state_machine__11984__auto____0 = (function (){
var statearr_14233 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14233[(0)] = cljs$core$async$state_machine__11984__auto__);

(statearr_14233[(1)] = (1));

return statearr_14233;
});
var cljs$core$async$state_machine__11984__auto____1 = (function (state_14155){
while(true){
var ret_value__11985__auto__ = (function (){try{while(true){
var result__11986__auto__ = switch__11983__auto__(state_14155);
if(cljs.core.keyword_identical_QMARK_(result__11986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11986__auto__;
}
break;
}
}catch (e14240){var ex__11987__auto__ = e14240;
var statearr_14241_15732 = state_14155;
(statearr_14241_15732[(2)] = ex__11987__auto__);


if(cljs.core.seq((state_14155[(4)]))){
var statearr_14248_15733 = state_14155;
(statearr_14248_15733[(1)] = cljs.core.first((state_14155[(4)])));

} else {
throw ex__11987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15734 = state_14155;
state_14155 = G__15734;
continue;
} else {
return ret_value__11985__auto__;
}
break;
}
});
cljs$core$async$state_machine__11984__auto__ = function(state_14155){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11984__auto____1.call(this,state_14155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11984__auto____0;
cljs$core$async$state_machine__11984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11984__auto____1;
return cljs$core$async$state_machine__11984__auto__;
})()
})();
var state__12439__auto__ = (function (){var statearr_14249 = f__12438__auto__();
(statearr_14249[(6)] = c__12437__auto___15697);

return statearr_14249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12439__auto__);
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
var G__14256 = arguments.length;
switch (G__14256) {
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
var c__12437__auto___15758 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12438__auto__ = (function (){var switch__11983__auto__ = (function (state_14305){
var state_val_14306 = (state_14305[(1)]);
if((state_val_14306 === (7))){
var inst_14279 = (state_14305[(7)]);
var inst_14280 = (state_14305[(8)]);
var inst_14279__$1 = (state_14305[(2)]);
var inst_14280__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14279__$1,(0),null);
var inst_14281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14279__$1,(1),null);
var inst_14282 = (inst_14280__$1 == null);
var state_14305__$1 = (function (){var statearr_14311 = state_14305;
(statearr_14311[(7)] = inst_14279__$1);

(statearr_14311[(9)] = inst_14281);

(statearr_14311[(8)] = inst_14280__$1);

return statearr_14311;
})();
if(cljs.core.truth_(inst_14282)){
var statearr_14312_15778 = state_14305__$1;
(statearr_14312_15778[(1)] = (8));

} else {
var statearr_14313_15779 = state_14305__$1;
(statearr_14313_15779[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (1))){
var inst_14267 = cljs.core.vec(chs);
var inst_14269 = inst_14267;
var state_14305__$1 = (function (){var statearr_14315 = state_14305;
(statearr_14315[(10)] = inst_14269);

return statearr_14315;
})();
var statearr_14319_15780 = state_14305__$1;
(statearr_14319_15780[(2)] = null);

(statearr_14319_15780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (4))){
var inst_14269 = (state_14305[(10)]);
var state_14305__$1 = state_14305;
return cljs.core.async.ioc_alts_BANG_(state_14305__$1,(7),inst_14269);
} else {
if((state_val_14306 === (6))){
var inst_14299 = (state_14305[(2)]);
var state_14305__$1 = state_14305;
var statearr_14320_15781 = state_14305__$1;
(statearr_14320_15781[(2)] = inst_14299);

(statearr_14320_15781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (3))){
var inst_14301 = (state_14305[(2)]);
var state_14305__$1 = state_14305;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14305__$1,inst_14301);
} else {
if((state_val_14306 === (2))){
var inst_14269 = (state_14305[(10)]);
var inst_14271 = cljs.core.count(inst_14269);
var inst_14272 = (inst_14271 > (0));
var state_14305__$1 = state_14305;
if(cljs.core.truth_(inst_14272)){
var statearr_14322_15783 = state_14305__$1;
(statearr_14322_15783[(1)] = (4));

} else {
var statearr_14323_15786 = state_14305__$1;
(statearr_14323_15786[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (11))){
var inst_14269 = (state_14305[(10)]);
var inst_14292 = (state_14305[(2)]);
var tmp14321 = inst_14269;
var inst_14269__$1 = tmp14321;
var state_14305__$1 = (function (){var statearr_14324 = state_14305;
(statearr_14324[(11)] = inst_14292);

(statearr_14324[(10)] = inst_14269__$1);

return statearr_14324;
})();
var statearr_14325_15791 = state_14305__$1;
(statearr_14325_15791[(2)] = null);

(statearr_14325_15791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (9))){
var inst_14280 = (state_14305[(8)]);
var state_14305__$1 = state_14305;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14305__$1,(11),out,inst_14280);
} else {
if((state_val_14306 === (5))){
var inst_14297 = cljs.core.async.close_BANG_(out);
var state_14305__$1 = state_14305;
var statearr_14326_15795 = state_14305__$1;
(statearr_14326_15795[(2)] = inst_14297);

(statearr_14326_15795[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (10))){
var inst_14295 = (state_14305[(2)]);
var state_14305__$1 = state_14305;
var statearr_14327_15800 = state_14305__$1;
(statearr_14327_15800[(2)] = inst_14295);

(statearr_14327_15800[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (8))){
var inst_14279 = (state_14305[(7)]);
var inst_14281 = (state_14305[(9)]);
var inst_14269 = (state_14305[(10)]);
var inst_14280 = (state_14305[(8)]);
var inst_14287 = (function (){var cs = inst_14269;
var vec__14275 = inst_14279;
var v = inst_14280;
var c = inst_14281;
return (function (p1__14252_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__14252_SHARP_);
});
})();
var inst_14288 = cljs.core.filterv(inst_14287,inst_14269);
var inst_14269__$1 = inst_14288;
var state_14305__$1 = (function (){var statearr_14328 = state_14305;
(statearr_14328[(10)] = inst_14269__$1);

return statearr_14328;
})();
var statearr_14329_15804 = state_14305__$1;
(statearr_14329_15804[(2)] = null);

(statearr_14329_15804[(1)] = (2));


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
var cljs$core$async$state_machine__11984__auto__ = null;
var cljs$core$async$state_machine__11984__auto____0 = (function (){
var statearr_14331 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14331[(0)] = cljs$core$async$state_machine__11984__auto__);

(statearr_14331[(1)] = (1));

return statearr_14331;
});
var cljs$core$async$state_machine__11984__auto____1 = (function (state_14305){
while(true){
var ret_value__11985__auto__ = (function (){try{while(true){
var result__11986__auto__ = switch__11983__auto__(state_14305);
if(cljs.core.keyword_identical_QMARK_(result__11986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11986__auto__;
}
break;
}
}catch (e14335){var ex__11987__auto__ = e14335;
var statearr_14336_15808 = state_14305;
(statearr_14336_15808[(2)] = ex__11987__auto__);


if(cljs.core.seq((state_14305[(4)]))){
var statearr_14337_15809 = state_14305;
(statearr_14337_15809[(1)] = cljs.core.first((state_14305[(4)])));

} else {
throw ex__11987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15810 = state_14305;
state_14305 = G__15810;
continue;
} else {
return ret_value__11985__auto__;
}
break;
}
});
cljs$core$async$state_machine__11984__auto__ = function(state_14305){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11984__auto____1.call(this,state_14305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11984__auto____0;
cljs$core$async$state_machine__11984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11984__auto____1;
return cljs$core$async$state_machine__11984__auto__;
})()
})();
var state__12439__auto__ = (function (){var statearr_14338 = f__12438__auto__();
(statearr_14338[(6)] = c__12437__auto___15758);

return statearr_14338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12439__auto__);
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
var G__14340 = arguments.length;
switch (G__14340) {
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
var c__12437__auto___15815 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12438__auto__ = (function (){var switch__11983__auto__ = (function (state_14370){
var state_val_14371 = (state_14370[(1)]);
if((state_val_14371 === (7))){
var inst_14349 = (state_14370[(7)]);
var inst_14349__$1 = (state_14370[(2)]);
var inst_14350 = (inst_14349__$1 == null);
var inst_14351 = cljs.core.not(inst_14350);
var state_14370__$1 = (function (){var statearr_14373 = state_14370;
(statearr_14373[(7)] = inst_14349__$1);

return statearr_14373;
})();
if(inst_14351){
var statearr_14374_15819 = state_14370__$1;
(statearr_14374_15819[(1)] = (8));

} else {
var statearr_14375_15820 = state_14370__$1;
(statearr_14375_15820[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14371 === (1))){
var inst_14343 = (0);
var state_14370__$1 = (function (){var statearr_14376 = state_14370;
(statearr_14376[(8)] = inst_14343);

return statearr_14376;
})();
var statearr_14377_15821 = state_14370__$1;
(statearr_14377_15821[(2)] = null);

(statearr_14377_15821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14371 === (4))){
var state_14370__$1 = state_14370;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14370__$1,(7),ch);
} else {
if((state_val_14371 === (6))){
var inst_14362 = (state_14370[(2)]);
var state_14370__$1 = state_14370;
var statearr_14378_15822 = state_14370__$1;
(statearr_14378_15822[(2)] = inst_14362);

(statearr_14378_15822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14371 === (3))){
var inst_14364 = (state_14370[(2)]);
var inst_14365 = cljs.core.async.close_BANG_(out);
var state_14370__$1 = (function (){var statearr_14379 = state_14370;
(statearr_14379[(9)] = inst_14364);

return statearr_14379;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14370__$1,inst_14365);
} else {
if((state_val_14371 === (2))){
var inst_14343 = (state_14370[(8)]);
var inst_14345 = (inst_14343 < n);
var state_14370__$1 = state_14370;
if(cljs.core.truth_(inst_14345)){
var statearr_14380_15823 = state_14370__$1;
(statearr_14380_15823[(1)] = (4));

} else {
var statearr_14381_15825 = state_14370__$1;
(statearr_14381_15825[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14371 === (11))){
var inst_14343 = (state_14370[(8)]);
var inst_14354 = (state_14370[(2)]);
var inst_14355 = (inst_14343 + (1));
var inst_14343__$1 = inst_14355;
var state_14370__$1 = (function (){var statearr_14382 = state_14370;
(statearr_14382[(8)] = inst_14343__$1);

(statearr_14382[(10)] = inst_14354);

return statearr_14382;
})();
var statearr_14383_15826 = state_14370__$1;
(statearr_14383_15826[(2)] = null);

(statearr_14383_15826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14371 === (9))){
var state_14370__$1 = state_14370;
var statearr_14388_15828 = state_14370__$1;
(statearr_14388_15828[(2)] = null);

(statearr_14388_15828[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14371 === (5))){
var state_14370__$1 = state_14370;
var statearr_14389_15830 = state_14370__$1;
(statearr_14389_15830[(2)] = null);

(statearr_14389_15830[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14371 === (10))){
var inst_14359 = (state_14370[(2)]);
var state_14370__$1 = state_14370;
var statearr_14393_15831 = state_14370__$1;
(statearr_14393_15831[(2)] = inst_14359);

(statearr_14393_15831[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14371 === (8))){
var inst_14349 = (state_14370[(7)]);
var state_14370__$1 = state_14370;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14370__$1,(11),out,inst_14349);
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
var cljs$core$async$state_machine__11984__auto__ = null;
var cljs$core$async$state_machine__11984__auto____0 = (function (){
var statearr_14395 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14395[(0)] = cljs$core$async$state_machine__11984__auto__);

(statearr_14395[(1)] = (1));

return statearr_14395;
});
var cljs$core$async$state_machine__11984__auto____1 = (function (state_14370){
while(true){
var ret_value__11985__auto__ = (function (){try{while(true){
var result__11986__auto__ = switch__11983__auto__(state_14370);
if(cljs.core.keyword_identical_QMARK_(result__11986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11986__auto__;
}
break;
}
}catch (e14397){var ex__11987__auto__ = e14397;
var statearr_14398_15832 = state_14370;
(statearr_14398_15832[(2)] = ex__11987__auto__);


if(cljs.core.seq((state_14370[(4)]))){
var statearr_14400_15833 = state_14370;
(statearr_14400_15833[(1)] = cljs.core.first((state_14370[(4)])));

} else {
throw ex__11987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15835 = state_14370;
state_14370 = G__15835;
continue;
} else {
return ret_value__11985__auto__;
}
break;
}
});
cljs$core$async$state_machine__11984__auto__ = function(state_14370){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11984__auto____1.call(this,state_14370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11984__auto____0;
cljs$core$async$state_machine__11984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11984__auto____1;
return cljs$core$async$state_machine__11984__auto__;
})()
})();
var state__12439__auto__ = (function (){var statearr_14408 = f__12438__auto__();
(statearr_14408[(6)] = c__12437__auto___15815);

return statearr_14408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12439__auto__);
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
cljs.core.async.t_cljs$core$async14413 = (function (f,ch,meta14411,_,fn1,meta14414){
this.f = f;
this.ch = ch;
this.meta14411 = meta14411;
this._ = _;
this.fn1 = fn1;
this.meta14414 = meta14414;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14415,meta14414__$1){
var self__ = this;
var _14415__$1 = this;
return (new cljs.core.async.t_cljs$core$async14413(self__.f,self__.ch,self__.meta14411,self__._,self__.fn1,meta14414__$1));
}));

(cljs.core.async.t_cljs$core$async14413.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14415){
var self__ = this;
var _14415__$1 = this;
return self__.meta14414;
}));

(cljs.core.async.t_cljs$core$async14413.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14413.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async14413.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14413.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__14409_SHARP_){
var G__14417 = (((p1__14409_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__14409_SHARP_) : self__.f.call(null,p1__14409_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__14417) : f1.call(null,G__14417));
});
}));

(cljs.core.async.t_cljs$core$async14413.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14411","meta14411",-1345906566,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async14410","cljs.core.async/t_cljs$core$async14410",-2138071924,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta14414","meta14414",628498388,null)], null);
}));

(cljs.core.async.t_cljs$core$async14413.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14413.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14413");

(cljs.core.async.t_cljs$core$async14413.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14413");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14413.
 */
cljs.core.async.__GT_t_cljs$core$async14413 = (function cljs$core$async$__GT_t_cljs$core$async14413(f,ch,meta14411,_,fn1,meta14414){
return (new cljs.core.async.t_cljs$core$async14413(f,ch,meta14411,_,fn1,meta14414));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14410 = (function (f,ch,meta14411){
this.f = f;
this.ch = ch;
this.meta14411 = meta14411;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14412,meta14411__$1){
var self__ = this;
var _14412__$1 = this;
return (new cljs.core.async.t_cljs$core$async14410(self__.f,self__.ch,meta14411__$1));
}));

(cljs.core.async.t_cljs$core$async14410.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14412){
var self__ = this;
var _14412__$1 = this;
return self__.meta14411;
}));

(cljs.core.async.t_cljs$core$async14410.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14410.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14410.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14410.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14410.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async14413(self__.f,self__.ch,self__.meta14411,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__14424 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__14424) : self__.f.call(null,G__14424));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async14410.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14410.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async14410.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14411","meta14411",-1345906566,null)], null);
}));

(cljs.core.async.t_cljs$core$async14410.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14410.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14410");

(cljs.core.async.t_cljs$core$async14410.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14410");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14410.
 */
cljs.core.async.__GT_t_cljs$core$async14410 = (function cljs$core$async$__GT_t_cljs$core$async14410(f,ch,meta14411){
return (new cljs.core.async.t_cljs$core$async14410(f,ch,meta14411));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async14410(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14429 = (function (f,ch,meta14430){
this.f = f;
this.ch = ch;
this.meta14430 = meta14430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14431,meta14430__$1){
var self__ = this;
var _14431__$1 = this;
return (new cljs.core.async.t_cljs$core$async14429(self__.f,self__.ch,meta14430__$1));
}));

(cljs.core.async.t_cljs$core$async14429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14431){
var self__ = this;
var _14431__$1 = this;
return self__.meta14430;
}));

(cljs.core.async.t_cljs$core$async14429.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14429.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14429.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14429.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async14429.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14429.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async14429.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14430","meta14430",-334716151,null)], null);
}));

(cljs.core.async.t_cljs$core$async14429.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14429.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14429");

(cljs.core.async.t_cljs$core$async14429.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14429");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14429.
 */
cljs.core.async.__GT_t_cljs$core$async14429 = (function cljs$core$async$__GT_t_cljs$core$async14429(f,ch,meta14430){
return (new cljs.core.async.t_cljs$core$async14429(f,ch,meta14430));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async14429(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14437 = (function (p,ch,meta14438){
this.p = p;
this.ch = ch;
this.meta14438 = meta14438;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14439,meta14438__$1){
var self__ = this;
var _14439__$1 = this;
return (new cljs.core.async.t_cljs$core$async14437(self__.p,self__.ch,meta14438__$1));
}));

(cljs.core.async.t_cljs$core$async14437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14439){
var self__ = this;
var _14439__$1 = this;
return self__.meta14438;
}));

(cljs.core.async.t_cljs$core$async14437.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14437.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14437.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14437.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14437.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async14437.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14437.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async14437.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14438","meta14438",-1544687244,null)], null);
}));

(cljs.core.async.t_cljs$core$async14437.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14437.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14437");

(cljs.core.async.t_cljs$core$async14437.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14437");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14437.
 */
cljs.core.async.__GT_t_cljs$core$async14437 = (function cljs$core$async$__GT_t_cljs$core$async14437(p,ch,meta14438){
return (new cljs.core.async.t_cljs$core$async14437(p,ch,meta14438));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async14437(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__14453 = arguments.length;
switch (G__14453) {
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
var c__12437__auto___15847 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12438__auto__ = (function (){var switch__11983__auto__ = (function (state_14476){
var state_val_14477 = (state_14476[(1)]);
if((state_val_14477 === (7))){
var inst_14472 = (state_14476[(2)]);
var state_14476__$1 = state_14476;
var statearr_14478_15848 = state_14476__$1;
(statearr_14478_15848[(2)] = inst_14472);

(statearr_14478_15848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14477 === (1))){
var state_14476__$1 = state_14476;
var statearr_14483_15850 = state_14476__$1;
(statearr_14483_15850[(2)] = null);

(statearr_14483_15850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14477 === (4))){
var inst_14458 = (state_14476[(7)]);
var inst_14458__$1 = (state_14476[(2)]);
var inst_14459 = (inst_14458__$1 == null);
var state_14476__$1 = (function (){var statearr_14485 = state_14476;
(statearr_14485[(7)] = inst_14458__$1);

return statearr_14485;
})();
if(cljs.core.truth_(inst_14459)){
var statearr_14486_15853 = state_14476__$1;
(statearr_14486_15853[(1)] = (5));

} else {
var statearr_14487_15854 = state_14476__$1;
(statearr_14487_15854[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14477 === (6))){
var inst_14458 = (state_14476[(7)]);
var inst_14463 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14458) : p.call(null,inst_14458));
var state_14476__$1 = state_14476;
if(cljs.core.truth_(inst_14463)){
var statearr_14488_15855 = state_14476__$1;
(statearr_14488_15855[(1)] = (8));

} else {
var statearr_14489_15856 = state_14476__$1;
(statearr_14489_15856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14477 === (3))){
var inst_14474 = (state_14476[(2)]);
var state_14476__$1 = state_14476;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14476__$1,inst_14474);
} else {
if((state_val_14477 === (2))){
var state_14476__$1 = state_14476;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14476__$1,(4),ch);
} else {
if((state_val_14477 === (11))){
var inst_14466 = (state_14476[(2)]);
var state_14476__$1 = state_14476;
var statearr_14491_15857 = state_14476__$1;
(statearr_14491_15857[(2)] = inst_14466);

(statearr_14491_15857[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14477 === (9))){
var state_14476__$1 = state_14476;
var statearr_14493_15858 = state_14476__$1;
(statearr_14493_15858[(2)] = null);

(statearr_14493_15858[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14477 === (5))){
var inst_14461 = cljs.core.async.close_BANG_(out);
var state_14476__$1 = state_14476;
var statearr_14495_15863 = state_14476__$1;
(statearr_14495_15863[(2)] = inst_14461);

(statearr_14495_15863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14477 === (10))){
var inst_14469 = (state_14476[(2)]);
var state_14476__$1 = (function (){var statearr_14496 = state_14476;
(statearr_14496[(8)] = inst_14469);

return statearr_14496;
})();
var statearr_14497_15865 = state_14476__$1;
(statearr_14497_15865[(2)] = null);

(statearr_14497_15865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14477 === (8))){
var inst_14458 = (state_14476[(7)]);
var state_14476__$1 = state_14476;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14476__$1,(11),out,inst_14458);
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
var cljs$core$async$state_machine__11984__auto__ = null;
var cljs$core$async$state_machine__11984__auto____0 = (function (){
var statearr_14505 = [null,null,null,null,null,null,null,null,null];
(statearr_14505[(0)] = cljs$core$async$state_machine__11984__auto__);

(statearr_14505[(1)] = (1));

return statearr_14505;
});
var cljs$core$async$state_machine__11984__auto____1 = (function (state_14476){
while(true){
var ret_value__11985__auto__ = (function (){try{while(true){
var result__11986__auto__ = switch__11983__auto__(state_14476);
if(cljs.core.keyword_identical_QMARK_(result__11986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11986__auto__;
}
break;
}
}catch (e14506){var ex__11987__auto__ = e14506;
var statearr_14507_15868 = state_14476;
(statearr_14507_15868[(2)] = ex__11987__auto__);


if(cljs.core.seq((state_14476[(4)]))){
var statearr_14508_15872 = state_14476;
(statearr_14508_15872[(1)] = cljs.core.first((state_14476[(4)])));

} else {
throw ex__11987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15873 = state_14476;
state_14476 = G__15873;
continue;
} else {
return ret_value__11985__auto__;
}
break;
}
});
cljs$core$async$state_machine__11984__auto__ = function(state_14476){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11984__auto____1.call(this,state_14476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11984__auto____0;
cljs$core$async$state_machine__11984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11984__auto____1;
return cljs$core$async$state_machine__11984__auto__;
})()
})();
var state__12439__auto__ = (function (){var statearr_14509 = f__12438__auto__();
(statearr_14509[(6)] = c__12437__auto___15847);

return statearr_14509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12439__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__14511 = arguments.length;
switch (G__14511) {
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
var c__12437__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12438__auto__ = (function (){var switch__11983__auto__ = (function (state_14573){
var state_val_14574 = (state_14573[(1)]);
if((state_val_14574 === (7))){
var inst_14569 = (state_14573[(2)]);
var state_14573__$1 = state_14573;
var statearr_14575_15875 = state_14573__$1;
(statearr_14575_15875[(2)] = inst_14569);

(statearr_14575_15875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14574 === (20))){
var inst_14539 = (state_14573[(7)]);
var inst_14550 = (state_14573[(2)]);
var inst_14551 = cljs.core.next(inst_14539);
var inst_14525 = inst_14551;
var inst_14526 = null;
var inst_14527 = (0);
var inst_14528 = (0);
var state_14573__$1 = (function (){var statearr_14576 = state_14573;
(statearr_14576[(8)] = inst_14525);

(statearr_14576[(9)] = inst_14528);

(statearr_14576[(10)] = inst_14526);

(statearr_14576[(11)] = inst_14527);

(statearr_14576[(12)] = inst_14550);

return statearr_14576;
})();
var statearr_14577_15884 = state_14573__$1;
(statearr_14577_15884[(2)] = null);

(statearr_14577_15884[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14574 === (1))){
var state_14573__$1 = state_14573;
var statearr_14578_15885 = state_14573__$1;
(statearr_14578_15885[(2)] = null);

(statearr_14578_15885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14574 === (4))){
var inst_14514 = (state_14573[(13)]);
var inst_14514__$1 = (state_14573[(2)]);
var inst_14515 = (inst_14514__$1 == null);
var state_14573__$1 = (function (){var statearr_14579 = state_14573;
(statearr_14579[(13)] = inst_14514__$1);

return statearr_14579;
})();
if(cljs.core.truth_(inst_14515)){
var statearr_14580_15886 = state_14573__$1;
(statearr_14580_15886[(1)] = (5));

} else {
var statearr_14581_15887 = state_14573__$1;
(statearr_14581_15887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14574 === (15))){
var state_14573__$1 = state_14573;
var statearr_14585_15888 = state_14573__$1;
(statearr_14585_15888[(2)] = null);

(statearr_14585_15888[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14574 === (21))){
var state_14573__$1 = state_14573;
var statearr_14586_15893 = state_14573__$1;
(statearr_14586_15893[(2)] = null);

(statearr_14586_15893[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14574 === (13))){
var inst_14525 = (state_14573[(8)]);
var inst_14528 = (state_14573[(9)]);
var inst_14526 = (state_14573[(10)]);
var inst_14527 = (state_14573[(11)]);
var inst_14535 = (state_14573[(2)]);
var inst_14536 = (inst_14528 + (1));
var tmp14582 = inst_14525;
var tmp14583 = inst_14526;
var tmp14584 = inst_14527;
var inst_14525__$1 = tmp14582;
var inst_14526__$1 = tmp14583;
var inst_14527__$1 = tmp14584;
var inst_14528__$1 = inst_14536;
var state_14573__$1 = (function (){var statearr_14587 = state_14573;
(statearr_14587[(8)] = inst_14525__$1);

(statearr_14587[(9)] = inst_14528__$1);

(statearr_14587[(10)] = inst_14526__$1);

(statearr_14587[(14)] = inst_14535);

(statearr_14587[(11)] = inst_14527__$1);

return statearr_14587;
})();
var statearr_14588_15898 = state_14573__$1;
(statearr_14588_15898[(2)] = null);

(statearr_14588_15898[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14574 === (22))){
var state_14573__$1 = state_14573;
var statearr_14589_15899 = state_14573__$1;
(statearr_14589_15899[(2)] = null);

(statearr_14589_15899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14574 === (6))){
var inst_14514 = (state_14573[(13)]);
var inst_14523 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_14514) : f.call(null,inst_14514));
var inst_14524 = cljs.core.seq(inst_14523);
var inst_14525 = inst_14524;
var inst_14526 = null;
var inst_14527 = (0);
var inst_14528 = (0);
var state_14573__$1 = (function (){var statearr_14590 = state_14573;
(statearr_14590[(8)] = inst_14525);

(statearr_14590[(9)] = inst_14528);

(statearr_14590[(10)] = inst_14526);

(statearr_14590[(11)] = inst_14527);

return statearr_14590;
})();
var statearr_14591_15904 = state_14573__$1;
(statearr_14591_15904[(2)] = null);

(statearr_14591_15904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14574 === (17))){
var inst_14539 = (state_14573[(7)]);
var inst_14543 = cljs.core.chunk_first(inst_14539);
var inst_14544 = cljs.core.chunk_rest(inst_14539);
var inst_14545 = cljs.core.count(inst_14543);
var inst_14525 = inst_14544;
var inst_14526 = inst_14543;
var inst_14527 = inst_14545;
var inst_14528 = (0);
var state_14573__$1 = (function (){var statearr_14592 = state_14573;
(statearr_14592[(8)] = inst_14525);

(statearr_14592[(9)] = inst_14528);

(statearr_14592[(10)] = inst_14526);

(statearr_14592[(11)] = inst_14527);

return statearr_14592;
})();
var statearr_14593_15909 = state_14573__$1;
(statearr_14593_15909[(2)] = null);

(statearr_14593_15909[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14574 === (3))){
var inst_14571 = (state_14573[(2)]);
var state_14573__$1 = state_14573;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14573__$1,inst_14571);
} else {
if((state_val_14574 === (12))){
var inst_14559 = (state_14573[(2)]);
var state_14573__$1 = state_14573;
var statearr_14595_15914 = state_14573__$1;
(statearr_14595_15914[(2)] = inst_14559);

(statearr_14595_15914[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14574 === (2))){
var state_14573__$1 = state_14573;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14573__$1,(4),in$);
} else {
if((state_val_14574 === (23))){
var inst_14567 = (state_14573[(2)]);
var state_14573__$1 = state_14573;
var statearr_14599_15915 = state_14573__$1;
(statearr_14599_15915[(2)] = inst_14567);

(statearr_14599_15915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14574 === (19))){
var inst_14554 = (state_14573[(2)]);
var state_14573__$1 = state_14573;
var statearr_14600_15916 = state_14573__$1;
(statearr_14600_15916[(2)] = inst_14554);

(statearr_14600_15916[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14574 === (11))){
var inst_14525 = (state_14573[(8)]);
var inst_14539 = (state_14573[(7)]);
var inst_14539__$1 = cljs.core.seq(inst_14525);
var state_14573__$1 = (function (){var statearr_14601 = state_14573;
(statearr_14601[(7)] = inst_14539__$1);

return statearr_14601;
})();
if(inst_14539__$1){
var statearr_14602_15921 = state_14573__$1;
(statearr_14602_15921[(1)] = (14));

} else {
var statearr_14603_15922 = state_14573__$1;
(statearr_14603_15922[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14574 === (9))){
var inst_14561 = (state_14573[(2)]);
var inst_14562 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_14573__$1 = (function (){var statearr_14604 = state_14573;
(statearr_14604[(15)] = inst_14561);

return statearr_14604;
})();
if(cljs.core.truth_(inst_14562)){
var statearr_14605_15927 = state_14573__$1;
(statearr_14605_15927[(1)] = (21));

} else {
var statearr_14606_15928 = state_14573__$1;
(statearr_14606_15928[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14574 === (5))){
var inst_14517 = cljs.core.async.close_BANG_(out);
var state_14573__$1 = state_14573;
var statearr_14607_15935 = state_14573__$1;
(statearr_14607_15935[(2)] = inst_14517);

(statearr_14607_15935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14574 === (14))){
var inst_14539 = (state_14573[(7)]);
var inst_14541 = cljs.core.chunked_seq_QMARK_(inst_14539);
var state_14573__$1 = state_14573;
if(inst_14541){
var statearr_14609_15936 = state_14573__$1;
(statearr_14609_15936[(1)] = (17));

} else {
var statearr_14610_15937 = state_14573__$1;
(statearr_14610_15937[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14574 === (16))){
var inst_14557 = (state_14573[(2)]);
var state_14573__$1 = state_14573;
var statearr_14611_15938 = state_14573__$1;
(statearr_14611_15938[(2)] = inst_14557);

(statearr_14611_15938[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14574 === (10))){
var inst_14528 = (state_14573[(9)]);
var inst_14526 = (state_14573[(10)]);
var inst_14533 = cljs.core._nth(inst_14526,inst_14528);
var state_14573__$1 = state_14573;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14573__$1,(13),out,inst_14533);
} else {
if((state_val_14574 === (18))){
var inst_14539 = (state_14573[(7)]);
var inst_14548 = cljs.core.first(inst_14539);
var state_14573__$1 = state_14573;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14573__$1,(20),out,inst_14548);
} else {
if((state_val_14574 === (8))){
var inst_14528 = (state_14573[(9)]);
var inst_14527 = (state_14573[(11)]);
var inst_14530 = (inst_14528 < inst_14527);
var inst_14531 = inst_14530;
var state_14573__$1 = state_14573;
if(cljs.core.truth_(inst_14531)){
var statearr_14613_15939 = state_14573__$1;
(statearr_14613_15939[(1)] = (10));

} else {
var statearr_14614_15941 = state_14573__$1;
(statearr_14614_15941[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__11984__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__11984__auto____0 = (function (){
var statearr_14618 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14618[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__11984__auto__);

(statearr_14618[(1)] = (1));

return statearr_14618;
});
var cljs$core$async$mapcat_STAR__$_state_machine__11984__auto____1 = (function (state_14573){
while(true){
var ret_value__11985__auto__ = (function (){try{while(true){
var result__11986__auto__ = switch__11983__auto__(state_14573);
if(cljs.core.keyword_identical_QMARK_(result__11986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11986__auto__;
}
break;
}
}catch (e14619){var ex__11987__auto__ = e14619;
var statearr_14620_15944 = state_14573;
(statearr_14620_15944[(2)] = ex__11987__auto__);


if(cljs.core.seq((state_14573[(4)]))){
var statearr_14622_15945 = state_14573;
(statearr_14622_15945[(1)] = cljs.core.first((state_14573[(4)])));

} else {
throw ex__11987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15946 = state_14573;
state_14573 = G__15946;
continue;
} else {
return ret_value__11985__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__11984__auto__ = function(state_14573){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__11984__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__11984__auto____1.call(this,state_14573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__11984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__11984__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__11984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__11984__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__11984__auto__;
})()
})();
var state__12439__auto__ = (function (){var statearr_14632 = f__12438__auto__();
(statearr_14632[(6)] = c__12437__auto__);

return statearr_14632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12439__auto__);
}));

return c__12437__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__14634 = arguments.length;
switch (G__14634) {
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
var G__14643 = arguments.length;
switch (G__14643) {
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
var G__14648 = arguments.length;
switch (G__14648) {
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
var c__12437__auto___15986 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12438__auto__ = (function (){var switch__11983__auto__ = (function (state_14686){
var state_val_14687 = (state_14686[(1)]);
if((state_val_14687 === (7))){
var inst_14678 = (state_14686[(2)]);
var state_14686__$1 = state_14686;
var statearr_14695_15988 = state_14686__$1;
(statearr_14695_15988[(2)] = inst_14678);

(statearr_14695_15988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14687 === (1))){
var inst_14649 = null;
var state_14686__$1 = (function (){var statearr_14696 = state_14686;
(statearr_14696[(7)] = inst_14649);

return statearr_14696;
})();
var statearr_14697_15989 = state_14686__$1;
(statearr_14697_15989[(2)] = null);

(statearr_14697_15989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14687 === (4))){
var inst_14652 = (state_14686[(8)]);
var inst_14652__$1 = (state_14686[(2)]);
var inst_14653 = (inst_14652__$1 == null);
var inst_14654 = cljs.core.not(inst_14653);
var state_14686__$1 = (function (){var statearr_14699 = state_14686;
(statearr_14699[(8)] = inst_14652__$1);

return statearr_14699;
})();
if(inst_14654){
var statearr_14708_15990 = state_14686__$1;
(statearr_14708_15990[(1)] = (5));

} else {
var statearr_14709_15991 = state_14686__$1;
(statearr_14709_15991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14687 === (6))){
var state_14686__$1 = state_14686;
var statearr_14716_15996 = state_14686__$1;
(statearr_14716_15996[(2)] = null);

(statearr_14716_15996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14687 === (3))){
var inst_14683 = (state_14686[(2)]);
var inst_14684 = cljs.core.async.close_BANG_(out);
var state_14686__$1 = (function (){var statearr_14723 = state_14686;
(statearr_14723[(9)] = inst_14683);

return statearr_14723;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14686__$1,inst_14684);
} else {
if((state_val_14687 === (2))){
var state_14686__$1 = state_14686;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14686__$1,(4),ch);
} else {
if((state_val_14687 === (11))){
var inst_14652 = (state_14686[(8)]);
var inst_14669 = (state_14686[(2)]);
var inst_14649 = inst_14652;
var state_14686__$1 = (function (){var statearr_14724 = state_14686;
(statearr_14724[(10)] = inst_14669);

(statearr_14724[(7)] = inst_14649);

return statearr_14724;
})();
var statearr_14725_16010 = state_14686__$1;
(statearr_14725_16010[(2)] = null);

(statearr_14725_16010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14687 === (9))){
var inst_14652 = (state_14686[(8)]);
var state_14686__$1 = state_14686;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14686__$1,(11),out,inst_14652);
} else {
if((state_val_14687 === (5))){
var inst_14649 = (state_14686[(7)]);
var inst_14652 = (state_14686[(8)]);
var inst_14664 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14652,inst_14649);
var state_14686__$1 = state_14686;
if(inst_14664){
var statearr_14727_16011 = state_14686__$1;
(statearr_14727_16011[(1)] = (8));

} else {
var statearr_14730_16012 = state_14686__$1;
(statearr_14730_16012[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14687 === (10))){
var inst_14672 = (state_14686[(2)]);
var state_14686__$1 = state_14686;
var statearr_14731_16013 = state_14686__$1;
(statearr_14731_16013[(2)] = inst_14672);

(statearr_14731_16013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14687 === (8))){
var inst_14649 = (state_14686[(7)]);
var tmp14726 = inst_14649;
var inst_14649__$1 = tmp14726;
var state_14686__$1 = (function (){var statearr_14732 = state_14686;
(statearr_14732[(7)] = inst_14649__$1);

return statearr_14732;
})();
var statearr_14734_16014 = state_14686__$1;
(statearr_14734_16014[(2)] = null);

(statearr_14734_16014[(1)] = (2));


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
var cljs$core$async$state_machine__11984__auto__ = null;
var cljs$core$async$state_machine__11984__auto____0 = (function (){
var statearr_14736 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14736[(0)] = cljs$core$async$state_machine__11984__auto__);

(statearr_14736[(1)] = (1));

return statearr_14736;
});
var cljs$core$async$state_machine__11984__auto____1 = (function (state_14686){
while(true){
var ret_value__11985__auto__ = (function (){try{while(true){
var result__11986__auto__ = switch__11983__auto__(state_14686);
if(cljs.core.keyword_identical_QMARK_(result__11986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11986__auto__;
}
break;
}
}catch (e14737){var ex__11987__auto__ = e14737;
var statearr_14741_16016 = state_14686;
(statearr_14741_16016[(2)] = ex__11987__auto__);


if(cljs.core.seq((state_14686[(4)]))){
var statearr_14742_16018 = state_14686;
(statearr_14742_16018[(1)] = cljs.core.first((state_14686[(4)])));

} else {
throw ex__11987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16019 = state_14686;
state_14686 = G__16019;
continue;
} else {
return ret_value__11985__auto__;
}
break;
}
});
cljs$core$async$state_machine__11984__auto__ = function(state_14686){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11984__auto____1.call(this,state_14686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11984__auto____0;
cljs$core$async$state_machine__11984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11984__auto____1;
return cljs$core$async$state_machine__11984__auto__;
})()
})();
var state__12439__auto__ = (function (){var statearr_14743 = f__12438__auto__();
(statearr_14743[(6)] = c__12437__auto___15986);

return statearr_14743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12439__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__14748 = arguments.length;
switch (G__14748) {
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
var c__12437__auto___16024 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12438__auto__ = (function (){var switch__11983__auto__ = (function (state_14786){
var state_val_14787 = (state_14786[(1)]);
if((state_val_14787 === (7))){
var inst_14782 = (state_14786[(2)]);
var state_14786__$1 = state_14786;
var statearr_14788_16025 = state_14786__$1;
(statearr_14788_16025[(2)] = inst_14782);

(statearr_14788_16025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14787 === (1))){
var inst_14749 = (new Array(n));
var inst_14750 = inst_14749;
var inst_14751 = (0);
var state_14786__$1 = (function (){var statearr_14789 = state_14786;
(statearr_14789[(7)] = inst_14750);

(statearr_14789[(8)] = inst_14751);

return statearr_14789;
})();
var statearr_14790_16031 = state_14786__$1;
(statearr_14790_16031[(2)] = null);

(statearr_14790_16031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14787 === (4))){
var inst_14754 = (state_14786[(9)]);
var inst_14754__$1 = (state_14786[(2)]);
var inst_14755 = (inst_14754__$1 == null);
var inst_14756 = cljs.core.not(inst_14755);
var state_14786__$1 = (function (){var statearr_14791 = state_14786;
(statearr_14791[(9)] = inst_14754__$1);

return statearr_14791;
})();
if(inst_14756){
var statearr_14792_16039 = state_14786__$1;
(statearr_14792_16039[(1)] = (5));

} else {
var statearr_14793_16040 = state_14786__$1;
(statearr_14793_16040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14787 === (15))){
var inst_14776 = (state_14786[(2)]);
var state_14786__$1 = state_14786;
var statearr_14794_16045 = state_14786__$1;
(statearr_14794_16045[(2)] = inst_14776);

(statearr_14794_16045[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14787 === (13))){
var state_14786__$1 = state_14786;
var statearr_14795_16046 = state_14786__$1;
(statearr_14795_16046[(2)] = null);

(statearr_14795_16046[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14787 === (6))){
var inst_14751 = (state_14786[(8)]);
var inst_14772 = (inst_14751 > (0));
var state_14786__$1 = state_14786;
if(cljs.core.truth_(inst_14772)){
var statearr_14796_16047 = state_14786__$1;
(statearr_14796_16047[(1)] = (12));

} else {
var statearr_14797_16048 = state_14786__$1;
(statearr_14797_16048[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14787 === (3))){
var inst_14784 = (state_14786[(2)]);
var state_14786__$1 = state_14786;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14786__$1,inst_14784);
} else {
if((state_val_14787 === (12))){
var inst_14750 = (state_14786[(7)]);
var inst_14774 = cljs.core.vec(inst_14750);
var state_14786__$1 = state_14786;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14786__$1,(15),out,inst_14774);
} else {
if((state_val_14787 === (2))){
var state_14786__$1 = state_14786;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14786__$1,(4),ch);
} else {
if((state_val_14787 === (11))){
var inst_14766 = (state_14786[(2)]);
var inst_14767 = (new Array(n));
var inst_14750 = inst_14767;
var inst_14751 = (0);
var state_14786__$1 = (function (){var statearr_14798 = state_14786;
(statearr_14798[(7)] = inst_14750);

(statearr_14798[(8)] = inst_14751);

(statearr_14798[(10)] = inst_14766);

return statearr_14798;
})();
var statearr_14799_16063 = state_14786__$1;
(statearr_14799_16063[(2)] = null);

(statearr_14799_16063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14787 === (9))){
var inst_14750 = (state_14786[(7)]);
var inst_14764 = cljs.core.vec(inst_14750);
var state_14786__$1 = state_14786;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14786__$1,(11),out,inst_14764);
} else {
if((state_val_14787 === (5))){
var inst_14759 = (state_14786[(11)]);
var inst_14750 = (state_14786[(7)]);
var inst_14751 = (state_14786[(8)]);
var inst_14754 = (state_14786[(9)]);
var inst_14758 = (inst_14750[inst_14751] = inst_14754);
var inst_14759__$1 = (inst_14751 + (1));
var inst_14760 = (inst_14759__$1 < n);
var state_14786__$1 = (function (){var statearr_14800 = state_14786;
(statearr_14800[(11)] = inst_14759__$1);

(statearr_14800[(12)] = inst_14758);

return statearr_14800;
})();
if(cljs.core.truth_(inst_14760)){
var statearr_14801_16074 = state_14786__$1;
(statearr_14801_16074[(1)] = (8));

} else {
var statearr_14802_16080 = state_14786__$1;
(statearr_14802_16080[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14787 === (14))){
var inst_14779 = (state_14786[(2)]);
var inst_14780 = cljs.core.async.close_BANG_(out);
var state_14786__$1 = (function (){var statearr_14804 = state_14786;
(statearr_14804[(13)] = inst_14779);

return statearr_14804;
})();
var statearr_14805_16097 = state_14786__$1;
(statearr_14805_16097[(2)] = inst_14780);

(statearr_14805_16097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14787 === (10))){
var inst_14770 = (state_14786[(2)]);
var state_14786__$1 = state_14786;
var statearr_14806_16103 = state_14786__$1;
(statearr_14806_16103[(2)] = inst_14770);

(statearr_14806_16103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14787 === (8))){
var inst_14759 = (state_14786[(11)]);
var inst_14750 = (state_14786[(7)]);
var tmp14803 = inst_14750;
var inst_14750__$1 = tmp14803;
var inst_14751 = inst_14759;
var state_14786__$1 = (function (){var statearr_14807 = state_14786;
(statearr_14807[(7)] = inst_14750__$1);

(statearr_14807[(8)] = inst_14751);

return statearr_14807;
})();
var statearr_14810_16122 = state_14786__$1;
(statearr_14810_16122[(2)] = null);

(statearr_14810_16122[(1)] = (2));


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
var cljs$core$async$state_machine__11984__auto__ = null;
var cljs$core$async$state_machine__11984__auto____0 = (function (){
var statearr_14817 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14817[(0)] = cljs$core$async$state_machine__11984__auto__);

(statearr_14817[(1)] = (1));

return statearr_14817;
});
var cljs$core$async$state_machine__11984__auto____1 = (function (state_14786){
while(true){
var ret_value__11985__auto__ = (function (){try{while(true){
var result__11986__auto__ = switch__11983__auto__(state_14786);
if(cljs.core.keyword_identical_QMARK_(result__11986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11986__auto__;
}
break;
}
}catch (e14821){var ex__11987__auto__ = e14821;
var statearr_14822_16134 = state_14786;
(statearr_14822_16134[(2)] = ex__11987__auto__);


if(cljs.core.seq((state_14786[(4)]))){
var statearr_14823_16138 = state_14786;
(statearr_14823_16138[(1)] = cljs.core.first((state_14786[(4)])));

} else {
throw ex__11987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16139 = state_14786;
state_14786 = G__16139;
continue;
} else {
return ret_value__11985__auto__;
}
break;
}
});
cljs$core$async$state_machine__11984__auto__ = function(state_14786){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11984__auto____1.call(this,state_14786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11984__auto____0;
cljs$core$async$state_machine__11984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11984__auto____1;
return cljs$core$async$state_machine__11984__auto__;
})()
})();
var state__12439__auto__ = (function (){var statearr_14824 = f__12438__auto__();
(statearr_14824[(6)] = c__12437__auto___16024);

return statearr_14824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12439__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__14829 = arguments.length;
switch (G__14829) {
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
var c__12437__auto___16164 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12438__auto__ = (function (){var switch__11983__auto__ = (function (state_14874){
var state_val_14875 = (state_14874[(1)]);
if((state_val_14875 === (7))){
var inst_14870 = (state_14874[(2)]);
var state_14874__$1 = state_14874;
var statearr_14876_16173 = state_14874__$1;
(statearr_14876_16173[(2)] = inst_14870);

(statearr_14876_16173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (1))){
var inst_14830 = [];
var inst_14831 = inst_14830;
var inst_14832 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_14874__$1 = (function (){var statearr_14878 = state_14874;
(statearr_14878[(7)] = inst_14831);

(statearr_14878[(8)] = inst_14832);

return statearr_14878;
})();
var statearr_14879_16174 = state_14874__$1;
(statearr_14879_16174[(2)] = null);

(statearr_14879_16174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (4))){
var inst_14835 = (state_14874[(9)]);
var inst_14835__$1 = (state_14874[(2)]);
var inst_14836 = (inst_14835__$1 == null);
var inst_14837 = cljs.core.not(inst_14836);
var state_14874__$1 = (function (){var statearr_14880 = state_14874;
(statearr_14880[(9)] = inst_14835__$1);

return statearr_14880;
})();
if(inst_14837){
var statearr_14881_16179 = state_14874__$1;
(statearr_14881_16179[(1)] = (5));

} else {
var statearr_14882_16180 = state_14874__$1;
(statearr_14882_16180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (15))){
var inst_14831 = (state_14874[(7)]);
var inst_14862 = cljs.core.vec(inst_14831);
var state_14874__$1 = state_14874;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14874__$1,(18),out,inst_14862);
} else {
if((state_val_14875 === (13))){
var inst_14857 = (state_14874[(2)]);
var state_14874__$1 = state_14874;
var statearr_14883_16181 = state_14874__$1;
(statearr_14883_16181[(2)] = inst_14857);

(statearr_14883_16181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (6))){
var inst_14831 = (state_14874[(7)]);
var inst_14859 = inst_14831.length;
var inst_14860 = (inst_14859 > (0));
var state_14874__$1 = state_14874;
if(cljs.core.truth_(inst_14860)){
var statearr_14885_16182 = state_14874__$1;
(statearr_14885_16182[(1)] = (15));

} else {
var statearr_14889_16183 = state_14874__$1;
(statearr_14889_16183[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (17))){
var inst_14867 = (state_14874[(2)]);
var inst_14868 = cljs.core.async.close_BANG_(out);
var state_14874__$1 = (function (){var statearr_14891 = state_14874;
(statearr_14891[(10)] = inst_14867);

return statearr_14891;
})();
var statearr_14893_16189 = state_14874__$1;
(statearr_14893_16189[(2)] = inst_14868);

(statearr_14893_16189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (3))){
var inst_14872 = (state_14874[(2)]);
var state_14874__$1 = state_14874;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14874__$1,inst_14872);
} else {
if((state_val_14875 === (12))){
var inst_14831 = (state_14874[(7)]);
var inst_14850 = cljs.core.vec(inst_14831);
var state_14874__$1 = state_14874;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14874__$1,(14),out,inst_14850);
} else {
if((state_val_14875 === (2))){
var state_14874__$1 = state_14874;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14874__$1,(4),ch);
} else {
if((state_val_14875 === (11))){
var inst_14839 = (state_14874[(11)]);
var inst_14835 = (state_14874[(9)]);
var inst_14831 = (state_14874[(7)]);
var inst_14847 = inst_14831.push(inst_14835);
var tmp14894 = inst_14831;
var inst_14831__$1 = tmp14894;
var inst_14832 = inst_14839;
var state_14874__$1 = (function (){var statearr_14897 = state_14874;
(statearr_14897[(12)] = inst_14847);

(statearr_14897[(7)] = inst_14831__$1);

(statearr_14897[(8)] = inst_14832);

return statearr_14897;
})();
var statearr_14898_16214 = state_14874__$1;
(statearr_14898_16214[(2)] = null);

(statearr_14898_16214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (9))){
var inst_14832 = (state_14874[(8)]);
var inst_14843 = cljs.core.keyword_identical_QMARK_(inst_14832,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_14874__$1 = state_14874;
var statearr_14899_16219 = state_14874__$1;
(statearr_14899_16219[(2)] = inst_14843);

(statearr_14899_16219[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (5))){
var inst_14839 = (state_14874[(11)]);
var inst_14835 = (state_14874[(9)]);
var inst_14840 = (state_14874[(13)]);
var inst_14832 = (state_14874[(8)]);
var inst_14839__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_14835) : f.call(null,inst_14835));
var inst_14840__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14839__$1,inst_14832);
var state_14874__$1 = (function (){var statearr_14902 = state_14874;
(statearr_14902[(11)] = inst_14839__$1);

(statearr_14902[(13)] = inst_14840__$1);

return statearr_14902;
})();
if(inst_14840__$1){
var statearr_14903_16221 = state_14874__$1;
(statearr_14903_16221[(1)] = (8));

} else {
var statearr_14904_16223 = state_14874__$1;
(statearr_14904_16223[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (14))){
var inst_14839 = (state_14874[(11)]);
var inst_14835 = (state_14874[(9)]);
var inst_14852 = (state_14874[(2)]);
var inst_14853 = [];
var inst_14854 = inst_14853.push(inst_14835);
var inst_14831 = inst_14853;
var inst_14832 = inst_14839;
var state_14874__$1 = (function (){var statearr_14905 = state_14874;
(statearr_14905[(7)] = inst_14831);

(statearr_14905[(14)] = inst_14854);

(statearr_14905[(8)] = inst_14832);

(statearr_14905[(15)] = inst_14852);

return statearr_14905;
})();
var statearr_14906_16227 = state_14874__$1;
(statearr_14906_16227[(2)] = null);

(statearr_14906_16227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (16))){
var state_14874__$1 = state_14874;
var statearr_14910_16232 = state_14874__$1;
(statearr_14910_16232[(2)] = null);

(statearr_14910_16232[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (10))){
var inst_14845 = (state_14874[(2)]);
var state_14874__$1 = state_14874;
if(cljs.core.truth_(inst_14845)){
var statearr_14911_16233 = state_14874__$1;
(statearr_14911_16233[(1)] = (11));

} else {
var statearr_14912_16234 = state_14874__$1;
(statearr_14912_16234[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (18))){
var inst_14864 = (state_14874[(2)]);
var state_14874__$1 = state_14874;
var statearr_14916_16242 = state_14874__$1;
(statearr_14916_16242[(2)] = inst_14864);

(statearr_14916_16242[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14875 === (8))){
var inst_14840 = (state_14874[(13)]);
var state_14874__$1 = state_14874;
var statearr_14920_16253 = state_14874__$1;
(statearr_14920_16253[(2)] = inst_14840);

(statearr_14920_16253[(1)] = (10));


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
var cljs$core$async$state_machine__11984__auto__ = null;
var cljs$core$async$state_machine__11984__auto____0 = (function (){
var statearr_14947 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14947[(0)] = cljs$core$async$state_machine__11984__auto__);

(statearr_14947[(1)] = (1));

return statearr_14947;
});
var cljs$core$async$state_machine__11984__auto____1 = (function (state_14874){
while(true){
var ret_value__11985__auto__ = (function (){try{while(true){
var result__11986__auto__ = switch__11983__auto__(state_14874);
if(cljs.core.keyword_identical_QMARK_(result__11986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11986__auto__;
}
break;
}
}catch (e14958){var ex__11987__auto__ = e14958;
var statearr_14959_16265 = state_14874;
(statearr_14959_16265[(2)] = ex__11987__auto__);


if(cljs.core.seq((state_14874[(4)]))){
var statearr_14960_16272 = state_14874;
(statearr_14960_16272[(1)] = cljs.core.first((state_14874[(4)])));

} else {
throw ex__11987__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11985__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16273 = state_14874;
state_14874 = G__16273;
continue;
} else {
return ret_value__11985__auto__;
}
break;
}
});
cljs$core$async$state_machine__11984__auto__ = function(state_14874){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11984__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11984__auto____1.call(this,state_14874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11984__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11984__auto____0;
cljs$core$async$state_machine__11984__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11984__auto____1;
return cljs$core$async$state_machine__11984__auto__;
})()
})();
var state__12439__auto__ = (function (){var statearr_14961 = f__12438__auto__();
(statearr_14961[(6)] = c__12437__auto___16164);

return statearr_14961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12439__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
