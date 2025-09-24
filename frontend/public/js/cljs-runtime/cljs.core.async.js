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
cljs.core.async.t_cljs$core$async15097 = (function (f,blockable,meta15098){
this.f = f;
this.blockable = blockable;
this.meta15098 = meta15098;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15099,meta15098__$1){
var self__ = this;
var _15099__$1 = this;
return (new cljs.core.async.t_cljs$core$async15097(self__.f,self__.blockable,meta15098__$1));
}));

(cljs.core.async.t_cljs$core$async15097.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15099){
var self__ = this;
var _15099__$1 = this;
return self__.meta15098;
}));

(cljs.core.async.t_cljs$core$async15097.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15097.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15097.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async15097.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async15097.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15098","meta15098",316362211,null)], null);
}));

(cljs.core.async.t_cljs$core$async15097.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15097.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15097");

(cljs.core.async.t_cljs$core$async15097.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15097");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15097.
 */
cljs.core.async.__GT_t_cljs$core$async15097 = (function cljs$core$async$__GT_t_cljs$core$async15097(f,blockable,meta15098){
return (new cljs.core.async.t_cljs$core$async15097(f,blockable,meta15098));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15087 = arguments.length;
switch (G__15087) {
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
return (new cljs.core.async.t_cljs$core$async15097(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__15157 = arguments.length;
switch (G__15157) {
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
var G__15163 = arguments.length;
switch (G__15163) {
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
var G__15169 = arguments.length;
switch (G__15169) {
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
var val_18103 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18103) : fn1.call(null,val_18103));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18103) : fn1.call(null,val_18103));
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
var G__15196 = arguments.length;
switch (G__15196) {
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
var n__5593__auto___18107 = n;
var x_18108 = (0);
while(true){
if((x_18108 < n__5593__auto___18107)){
(a[x_18108] = x_18108);

var G__18109 = (x_18108 + (1));
x_18108 = G__18109;
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
cljs.core.async.t_cljs$core$async15202 = (function (flag,meta15203){
this.flag = flag;
this.meta15203 = meta15203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15204,meta15203__$1){
var self__ = this;
var _15204__$1 = this;
return (new cljs.core.async.t_cljs$core$async15202(self__.flag,meta15203__$1));
}));

(cljs.core.async.t_cljs$core$async15202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15204){
var self__ = this;
var _15204__$1 = this;
return self__.meta15203;
}));

(cljs.core.async.t_cljs$core$async15202.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15202.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15202.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15202.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15202.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15203","meta15203",552191098,null)], null);
}));

(cljs.core.async.t_cljs$core$async15202.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15202.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15202");

(cljs.core.async.t_cljs$core$async15202.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15202");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15202.
 */
cljs.core.async.__GT_t_cljs$core$async15202 = (function cljs$core$async$__GT_t_cljs$core$async15202(flag,meta15203){
return (new cljs.core.async.t_cljs$core$async15202(flag,meta15203));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async15202(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15209 = (function (flag,cb,meta15210){
this.flag = flag;
this.cb = cb;
this.meta15210 = meta15210;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15211,meta15210__$1){
var self__ = this;
var _15211__$1 = this;
return (new cljs.core.async.t_cljs$core$async15209(self__.flag,self__.cb,meta15210__$1));
}));

(cljs.core.async.t_cljs$core$async15209.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15211){
var self__ = this;
var _15211__$1 = this;
return self__.meta15210;
}));

(cljs.core.async.t_cljs$core$async15209.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15209.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15209.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15209.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15209.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15210","meta15210",-1653686901,null)], null);
}));

(cljs.core.async.t_cljs$core$async15209.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15209.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15209");

(cljs.core.async.t_cljs$core$async15209.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15209");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15209.
 */
cljs.core.async.__GT_t_cljs$core$async15209 = (function cljs$core$async$__GT_t_cljs$core$async15209(flag,cb,meta15210){
return (new cljs.core.async.t_cljs$core$async15209(flag,cb,meta15210));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async15209(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__15214_SHARP_){
var G__15221 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15214_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15221) : fret.call(null,G__15221));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15215_SHARP_){
var G__15223 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15215_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15223) : fret.call(null,G__15223));
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
var G__18122 = (i + (1));
i = G__18122;
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
var len__5726__auto___18124 = arguments.length;
var i__5727__auto___18125 = (0);
while(true){
if((i__5727__auto___18125 < len__5726__auto___18124)){
args__5732__auto__.push((arguments[i__5727__auto___18125]));

var G__18126 = (i__5727__auto___18125 + (1));
i__5727__auto___18125 = G__18126;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15227){
var map__15228 = p__15227;
var map__15228__$1 = cljs.core.__destructure_map(map__15228);
var opts = map__15228__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15225){
var G__15226 = cljs.core.first(seq15225);
var seq15225__$1 = cljs.core.next(seq15225);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15226,seq15225__$1);
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
var G__15230 = arguments.length;
switch (G__15230) {
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
var c__14884__auto___18128 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14885__auto__ = (function (){var switch__14715__auto__ = (function (state_15272){
var state_val_15273 = (state_15272[(1)]);
if((state_val_15273 === (7))){
var inst_15268 = (state_15272[(2)]);
var state_15272__$1 = state_15272;
var statearr_15287_18129 = state_15272__$1;
(statearr_15287_18129[(2)] = inst_15268);

(statearr_15287_18129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15273 === (1))){
var state_15272__$1 = state_15272;
var statearr_15288_18130 = state_15272__$1;
(statearr_15288_18130[(2)] = null);

(statearr_15288_18130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15273 === (4))){
var inst_15246 = (state_15272[(7)]);
var inst_15246__$1 = (state_15272[(2)]);
var inst_15252 = (inst_15246__$1 == null);
var state_15272__$1 = (function (){var statearr_15289 = state_15272;
(statearr_15289[(7)] = inst_15246__$1);

return statearr_15289;
})();
if(cljs.core.truth_(inst_15252)){
var statearr_15290_18131 = state_15272__$1;
(statearr_15290_18131[(1)] = (5));

} else {
var statearr_15291_18132 = state_15272__$1;
(statearr_15291_18132[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15273 === (13))){
var state_15272__$1 = state_15272;
var statearr_15292_18133 = state_15272__$1;
(statearr_15292_18133[(2)] = null);

(statearr_15292_18133[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15273 === (6))){
var inst_15246 = (state_15272[(7)]);
var state_15272__$1 = state_15272;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15272__$1,(11),to,inst_15246);
} else {
if((state_val_15273 === (3))){
var inst_15270 = (state_15272[(2)]);
var state_15272__$1 = state_15272;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15272__$1,inst_15270);
} else {
if((state_val_15273 === (12))){
var state_15272__$1 = state_15272;
var statearr_15293_18134 = state_15272__$1;
(statearr_15293_18134[(2)] = null);

(statearr_15293_18134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15273 === (2))){
var state_15272__$1 = state_15272;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15272__$1,(4),from);
} else {
if((state_val_15273 === (11))){
var inst_15261 = (state_15272[(2)]);
var state_15272__$1 = state_15272;
if(cljs.core.truth_(inst_15261)){
var statearr_15294_18135 = state_15272__$1;
(statearr_15294_18135[(1)] = (12));

} else {
var statearr_15295_18136 = state_15272__$1;
(statearr_15295_18136[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15273 === (9))){
var state_15272__$1 = state_15272;
var statearr_15296_18137 = state_15272__$1;
(statearr_15296_18137[(2)] = null);

(statearr_15296_18137[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15273 === (5))){
var state_15272__$1 = state_15272;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15297_18138 = state_15272__$1;
(statearr_15297_18138[(1)] = (8));

} else {
var statearr_15298_18139 = state_15272__$1;
(statearr_15298_18139[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15273 === (14))){
var inst_15266 = (state_15272[(2)]);
var state_15272__$1 = state_15272;
var statearr_15299_18140 = state_15272__$1;
(statearr_15299_18140[(2)] = inst_15266);

(statearr_15299_18140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15273 === (10))){
var inst_15258 = (state_15272[(2)]);
var state_15272__$1 = state_15272;
var statearr_15301_18141 = state_15272__$1;
(statearr_15301_18141[(2)] = inst_15258);

(statearr_15301_18141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15273 === (8))){
var inst_15255 = cljs.core.async.close_BANG_(to);
var state_15272__$1 = state_15272;
var statearr_15302_18142 = state_15272__$1;
(statearr_15302_18142[(2)] = inst_15255);

(statearr_15302_18142[(1)] = (10));


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
var cljs$core$async$state_machine__14716__auto__ = null;
var cljs$core$async$state_machine__14716__auto____0 = (function (){
var statearr_15303 = [null,null,null,null,null,null,null,null];
(statearr_15303[(0)] = cljs$core$async$state_machine__14716__auto__);

(statearr_15303[(1)] = (1));

return statearr_15303;
});
var cljs$core$async$state_machine__14716__auto____1 = (function (state_15272){
while(true){
var ret_value__14717__auto__ = (function (){try{while(true){
var result__14718__auto__ = switch__14715__auto__(state_15272);
if(cljs.core.keyword_identical_QMARK_(result__14718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14718__auto__;
}
break;
}
}catch (e15304){var ex__14719__auto__ = e15304;
var statearr_15305_18143 = state_15272;
(statearr_15305_18143[(2)] = ex__14719__auto__);


if(cljs.core.seq((state_15272[(4)]))){
var statearr_15306_18144 = state_15272;
(statearr_15306_18144[(1)] = cljs.core.first((state_15272[(4)])));

} else {
throw ex__14719__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18145 = state_15272;
state_15272 = G__18145;
continue;
} else {
return ret_value__14717__auto__;
}
break;
}
});
cljs$core$async$state_machine__14716__auto__ = function(state_15272){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14716__auto____1.call(this,state_15272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14716__auto____0;
cljs$core$async$state_machine__14716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14716__auto____1;
return cljs$core$async$state_machine__14716__auto__;
})()
})();
var state__14886__auto__ = (function (){var statearr_15307 = f__14885__auto__();
(statearr_15307[(6)] = c__14884__auto___18128);

return statearr_15307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14886__auto__);
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
var process__$1 = (function (p__15315){
var vec__15316 = p__15315;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15316,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15316,(1),null);
var job = vec__15316;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14884__auto___18147 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14885__auto__ = (function (){var switch__14715__auto__ = (function (state_15323){
var state_val_15324 = (state_15323[(1)]);
if((state_val_15324 === (1))){
var state_15323__$1 = state_15323;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15323__$1,(2),res,v);
} else {
if((state_val_15324 === (2))){
var inst_15320 = (state_15323[(2)]);
var inst_15321 = cljs.core.async.close_BANG_(res);
var state_15323__$1 = (function (){var statearr_15325 = state_15323;
(statearr_15325[(7)] = inst_15320);

return statearr_15325;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15323__$1,inst_15321);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14716__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14716__auto____0 = (function (){
var statearr_15326 = [null,null,null,null,null,null,null,null];
(statearr_15326[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14716__auto__);

(statearr_15326[(1)] = (1));

return statearr_15326;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14716__auto____1 = (function (state_15323){
while(true){
var ret_value__14717__auto__ = (function (){try{while(true){
var result__14718__auto__ = switch__14715__auto__(state_15323);
if(cljs.core.keyword_identical_QMARK_(result__14718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14718__auto__;
}
break;
}
}catch (e15327){var ex__14719__auto__ = e15327;
var statearr_15328_18150 = state_15323;
(statearr_15328_18150[(2)] = ex__14719__auto__);


if(cljs.core.seq((state_15323[(4)]))){
var statearr_15329_18151 = state_15323;
(statearr_15329_18151[(1)] = cljs.core.first((state_15323[(4)])));

} else {
throw ex__14719__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18152 = state_15323;
state_15323 = G__18152;
continue;
} else {
return ret_value__14717__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14716__auto__ = function(state_15323){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14716__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14716__auto____1.call(this,state_15323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14716__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14716__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14716__auto__;
})()
})();
var state__14886__auto__ = (function (){var statearr_15330 = f__14885__auto__();
(statearr_15330[(6)] = c__14884__auto___18147);

return statearr_15330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14886__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15331){
var vec__15332 = p__15331;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15332,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15332,(1),null);
var job = vec__15332;
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
var n__5593__auto___18153 = n;
var __18154 = (0);
while(true){
if((__18154 < n__5593__auto___18153)){
var G__15337_18155 = type;
var G__15337_18156__$1 = (((G__15337_18155 instanceof cljs.core.Keyword))?G__15337_18155.fqn:null);
switch (G__15337_18156__$1) {
case "compute":
var c__14884__auto___18158 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18154,c__14884__auto___18158,G__15337_18155,G__15337_18156__$1,n__5593__auto___18153,jobs,results,process__$1,async){
return (function (){
var f__14885__auto__ = (function (){var switch__14715__auto__ = ((function (__18154,c__14884__auto___18158,G__15337_18155,G__15337_18156__$1,n__5593__auto___18153,jobs,results,process__$1,async){
return (function (state_15350){
var state_val_15351 = (state_15350[(1)]);
if((state_val_15351 === (1))){
var state_15350__$1 = state_15350;
var statearr_15354_18160 = state_15350__$1;
(statearr_15354_18160[(2)] = null);

(statearr_15354_18160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15351 === (2))){
var state_15350__$1 = state_15350;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15350__$1,(4),jobs);
} else {
if((state_val_15351 === (3))){
var inst_15348 = (state_15350[(2)]);
var state_15350__$1 = state_15350;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15350__$1,inst_15348);
} else {
if((state_val_15351 === (4))){
var inst_15340 = (state_15350[(2)]);
var inst_15341 = process__$1(inst_15340);
var state_15350__$1 = state_15350;
if(cljs.core.truth_(inst_15341)){
var statearr_15357_18161 = state_15350__$1;
(statearr_15357_18161[(1)] = (5));

} else {
var statearr_15358_18162 = state_15350__$1;
(statearr_15358_18162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15351 === (5))){
var state_15350__$1 = state_15350;
var statearr_15359_18163 = state_15350__$1;
(statearr_15359_18163[(2)] = null);

(statearr_15359_18163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15351 === (6))){
var state_15350__$1 = state_15350;
var statearr_15360_18164 = state_15350__$1;
(statearr_15360_18164[(2)] = null);

(statearr_15360_18164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15351 === (7))){
var inst_15346 = (state_15350[(2)]);
var state_15350__$1 = state_15350;
var statearr_15361_18165 = state_15350__$1;
(statearr_15361_18165[(2)] = inst_15346);

(statearr_15361_18165[(1)] = (3));


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
});})(__18154,c__14884__auto___18158,G__15337_18155,G__15337_18156__$1,n__5593__auto___18153,jobs,results,process__$1,async))
;
return ((function (__18154,switch__14715__auto__,c__14884__auto___18158,G__15337_18155,G__15337_18156__$1,n__5593__auto___18153,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14716__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14716__auto____0 = (function (){
var statearr_15364 = [null,null,null,null,null,null,null];
(statearr_15364[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14716__auto__);

(statearr_15364[(1)] = (1));

return statearr_15364;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14716__auto____1 = (function (state_15350){
while(true){
var ret_value__14717__auto__ = (function (){try{while(true){
var result__14718__auto__ = switch__14715__auto__(state_15350);
if(cljs.core.keyword_identical_QMARK_(result__14718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14718__auto__;
}
break;
}
}catch (e15365){var ex__14719__auto__ = e15365;
var statearr_15366_18166 = state_15350;
(statearr_15366_18166[(2)] = ex__14719__auto__);


if(cljs.core.seq((state_15350[(4)]))){
var statearr_15368_18167 = state_15350;
(statearr_15368_18167[(1)] = cljs.core.first((state_15350[(4)])));

} else {
throw ex__14719__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18168 = state_15350;
state_15350 = G__18168;
continue;
} else {
return ret_value__14717__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14716__auto__ = function(state_15350){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14716__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14716__auto____1.call(this,state_15350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14716__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14716__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14716__auto__;
})()
;})(__18154,switch__14715__auto__,c__14884__auto___18158,G__15337_18155,G__15337_18156__$1,n__5593__auto___18153,jobs,results,process__$1,async))
})();
var state__14886__auto__ = (function (){var statearr_15373 = f__14885__auto__();
(statearr_15373[(6)] = c__14884__auto___18158);

return statearr_15373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14886__auto__);
});})(__18154,c__14884__auto___18158,G__15337_18155,G__15337_18156__$1,n__5593__auto___18153,jobs,results,process__$1,async))
);


break;
case "async":
var c__14884__auto___18169 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18154,c__14884__auto___18169,G__15337_18155,G__15337_18156__$1,n__5593__auto___18153,jobs,results,process__$1,async){
return (function (){
var f__14885__auto__ = (function (){var switch__14715__auto__ = ((function (__18154,c__14884__auto___18169,G__15337_18155,G__15337_18156__$1,n__5593__auto___18153,jobs,results,process__$1,async){
return (function (state_15386){
var state_val_15387 = (state_15386[(1)]);
if((state_val_15387 === (1))){
var state_15386__$1 = state_15386;
var statearr_15388_18170 = state_15386__$1;
(statearr_15388_18170[(2)] = null);

(statearr_15388_18170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (2))){
var state_15386__$1 = state_15386;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15386__$1,(4),jobs);
} else {
if((state_val_15387 === (3))){
var inst_15384 = (state_15386[(2)]);
var state_15386__$1 = state_15386;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15386__$1,inst_15384);
} else {
if((state_val_15387 === (4))){
var inst_15376 = (state_15386[(2)]);
var inst_15377 = async(inst_15376);
var state_15386__$1 = state_15386;
if(cljs.core.truth_(inst_15377)){
var statearr_15391_18171 = state_15386__$1;
(statearr_15391_18171[(1)] = (5));

} else {
var statearr_15392_18173 = state_15386__$1;
(statearr_15392_18173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (5))){
var state_15386__$1 = state_15386;
var statearr_15393_18174 = state_15386__$1;
(statearr_15393_18174[(2)] = null);

(statearr_15393_18174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (6))){
var state_15386__$1 = state_15386;
var statearr_15394_18176 = state_15386__$1;
(statearr_15394_18176[(2)] = null);

(statearr_15394_18176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15387 === (7))){
var inst_15382 = (state_15386[(2)]);
var state_15386__$1 = state_15386;
var statearr_15395_18177 = state_15386__$1;
(statearr_15395_18177[(2)] = inst_15382);

(statearr_15395_18177[(1)] = (3));


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
});})(__18154,c__14884__auto___18169,G__15337_18155,G__15337_18156__$1,n__5593__auto___18153,jobs,results,process__$1,async))
;
return ((function (__18154,switch__14715__auto__,c__14884__auto___18169,G__15337_18155,G__15337_18156__$1,n__5593__auto___18153,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14716__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14716__auto____0 = (function (){
var statearr_15396 = [null,null,null,null,null,null,null];
(statearr_15396[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14716__auto__);

(statearr_15396[(1)] = (1));

return statearr_15396;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14716__auto____1 = (function (state_15386){
while(true){
var ret_value__14717__auto__ = (function (){try{while(true){
var result__14718__auto__ = switch__14715__auto__(state_15386);
if(cljs.core.keyword_identical_QMARK_(result__14718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14718__auto__;
}
break;
}
}catch (e15397){var ex__14719__auto__ = e15397;
var statearr_15398_18178 = state_15386;
(statearr_15398_18178[(2)] = ex__14719__auto__);


if(cljs.core.seq((state_15386[(4)]))){
var statearr_15399_18179 = state_15386;
(statearr_15399_18179[(1)] = cljs.core.first((state_15386[(4)])));

} else {
throw ex__14719__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18180 = state_15386;
state_15386 = G__18180;
continue;
} else {
return ret_value__14717__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14716__auto__ = function(state_15386){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14716__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14716__auto____1.call(this,state_15386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14716__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14716__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14716__auto__;
})()
;})(__18154,switch__14715__auto__,c__14884__auto___18169,G__15337_18155,G__15337_18156__$1,n__5593__auto___18153,jobs,results,process__$1,async))
})();
var state__14886__auto__ = (function (){var statearr_15400 = f__14885__auto__();
(statearr_15400[(6)] = c__14884__auto___18169);

return statearr_15400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14886__auto__);
});})(__18154,c__14884__auto___18169,G__15337_18155,G__15337_18156__$1,n__5593__auto___18153,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15337_18156__$1)].join('')));

}

var G__18181 = (__18154 + (1));
__18154 = G__18181;
continue;
} else {
}
break;
}

var c__14884__auto___18182 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14885__auto__ = (function (){var switch__14715__auto__ = (function (state_15436){
var state_val_15437 = (state_15436[(1)]);
if((state_val_15437 === (7))){
var inst_15430 = (state_15436[(2)]);
var state_15436__$1 = state_15436;
var statearr_15442_18183 = state_15436__$1;
(statearr_15442_18183[(2)] = inst_15430);

(statearr_15442_18183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (1))){
var state_15436__$1 = state_15436;
var statearr_15444_18184 = state_15436__$1;
(statearr_15444_18184[(2)] = null);

(statearr_15444_18184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (4))){
var inst_15415 = (state_15436[(7)]);
var inst_15415__$1 = (state_15436[(2)]);
var inst_15416 = (inst_15415__$1 == null);
var state_15436__$1 = (function (){var statearr_15445 = state_15436;
(statearr_15445[(7)] = inst_15415__$1);

return statearr_15445;
})();
if(cljs.core.truth_(inst_15416)){
var statearr_15446_18195 = state_15436__$1;
(statearr_15446_18195[(1)] = (5));

} else {
var statearr_15447_18196 = state_15436__$1;
(statearr_15447_18196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (6))){
var inst_15415 = (state_15436[(7)]);
var inst_15420 = (state_15436[(8)]);
var inst_15420__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15421 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15422 = [inst_15415,inst_15420__$1];
var inst_15423 = (new cljs.core.PersistentVector(null,2,(5),inst_15421,inst_15422,null));
var state_15436__$1 = (function (){var statearr_15448 = state_15436;
(statearr_15448[(8)] = inst_15420__$1);

return statearr_15448;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15436__$1,(8),jobs,inst_15423);
} else {
if((state_val_15437 === (3))){
var inst_15433 = (state_15436[(2)]);
var state_15436__$1 = state_15436;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15436__$1,inst_15433);
} else {
if((state_val_15437 === (2))){
var state_15436__$1 = state_15436;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15436__$1,(4),from);
} else {
if((state_val_15437 === (9))){
var inst_15427 = (state_15436[(2)]);
var state_15436__$1 = (function (){var statearr_15452 = state_15436;
(statearr_15452[(9)] = inst_15427);

return statearr_15452;
})();
var statearr_15453_18203 = state_15436__$1;
(statearr_15453_18203[(2)] = null);

(statearr_15453_18203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (5))){
var inst_15418 = cljs.core.async.close_BANG_(jobs);
var state_15436__$1 = state_15436;
var statearr_15454_18204 = state_15436__$1;
(statearr_15454_18204[(2)] = inst_15418);

(statearr_15454_18204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15437 === (8))){
var inst_15420 = (state_15436[(8)]);
var inst_15425 = (state_15436[(2)]);
var state_15436__$1 = (function (){var statearr_15455 = state_15436;
(statearr_15455[(10)] = inst_15425);

return statearr_15455;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15436__$1,(9),results,inst_15420);
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
var cljs$core$async$pipeline_STAR__$_state_machine__14716__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14716__auto____0 = (function (){
var statearr_15463 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15463[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14716__auto__);

(statearr_15463[(1)] = (1));

return statearr_15463;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14716__auto____1 = (function (state_15436){
while(true){
var ret_value__14717__auto__ = (function (){try{while(true){
var result__14718__auto__ = switch__14715__auto__(state_15436);
if(cljs.core.keyword_identical_QMARK_(result__14718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14718__auto__;
}
break;
}
}catch (e15466){var ex__14719__auto__ = e15466;
var statearr_15467_18206 = state_15436;
(statearr_15467_18206[(2)] = ex__14719__auto__);


if(cljs.core.seq((state_15436[(4)]))){
var statearr_15468_18207 = state_15436;
(statearr_15468_18207[(1)] = cljs.core.first((state_15436[(4)])));

} else {
throw ex__14719__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18209 = state_15436;
state_15436 = G__18209;
continue;
} else {
return ret_value__14717__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14716__auto__ = function(state_15436){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14716__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14716__auto____1.call(this,state_15436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14716__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14716__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14716__auto__;
})()
})();
var state__14886__auto__ = (function (){var statearr_15469 = f__14885__auto__();
(statearr_15469[(6)] = c__14884__auto___18182);

return statearr_15469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14886__auto__);
}));


var c__14884__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14885__auto__ = (function (){var switch__14715__auto__ = (function (state_15515){
var state_val_15516 = (state_15515[(1)]);
if((state_val_15516 === (7))){
var inst_15511 = (state_15515[(2)]);
var state_15515__$1 = state_15515;
var statearr_15520_18215 = state_15515__$1;
(statearr_15520_18215[(2)] = inst_15511);

(statearr_15520_18215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15516 === (20))){
var state_15515__$1 = state_15515;
var statearr_15522_18216 = state_15515__$1;
(statearr_15522_18216[(2)] = null);

(statearr_15522_18216[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15516 === (1))){
var state_15515__$1 = state_15515;
var statearr_15524_18237 = state_15515__$1;
(statearr_15524_18237[(2)] = null);

(statearr_15524_18237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15516 === (4))){
var inst_15475 = (state_15515[(7)]);
var inst_15475__$1 = (state_15515[(2)]);
var inst_15476 = (inst_15475__$1 == null);
var state_15515__$1 = (function (){var statearr_15528 = state_15515;
(statearr_15528[(7)] = inst_15475__$1);

return statearr_15528;
})();
if(cljs.core.truth_(inst_15476)){
var statearr_15531_18242 = state_15515__$1;
(statearr_15531_18242[(1)] = (5));

} else {
var statearr_15532_18243 = state_15515__$1;
(statearr_15532_18243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15516 === (15))){
var inst_15490 = (state_15515[(8)]);
var state_15515__$1 = state_15515;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15515__$1,(18),to,inst_15490);
} else {
if((state_val_15516 === (21))){
var inst_15506 = (state_15515[(2)]);
var state_15515__$1 = state_15515;
var statearr_15537_18253 = state_15515__$1;
(statearr_15537_18253[(2)] = inst_15506);

(statearr_15537_18253[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15516 === (13))){
var inst_15508 = (state_15515[(2)]);
var state_15515__$1 = (function (){var statearr_15541 = state_15515;
(statearr_15541[(9)] = inst_15508);

return statearr_15541;
})();
var statearr_15542_18258 = state_15515__$1;
(statearr_15542_18258[(2)] = null);

(statearr_15542_18258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15516 === (6))){
var inst_15475 = (state_15515[(7)]);
var state_15515__$1 = state_15515;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15515__$1,(11),inst_15475);
} else {
if((state_val_15516 === (17))){
var inst_15501 = (state_15515[(2)]);
var state_15515__$1 = state_15515;
if(cljs.core.truth_(inst_15501)){
var statearr_15544_18269 = state_15515__$1;
(statearr_15544_18269[(1)] = (19));

} else {
var statearr_15546_18270 = state_15515__$1;
(statearr_15546_18270[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15516 === (3))){
var inst_15513 = (state_15515[(2)]);
var state_15515__$1 = state_15515;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15515__$1,inst_15513);
} else {
if((state_val_15516 === (12))){
var inst_15487 = (state_15515[(10)]);
var state_15515__$1 = state_15515;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15515__$1,(14),inst_15487);
} else {
if((state_val_15516 === (2))){
var state_15515__$1 = state_15515;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15515__$1,(4),results);
} else {
if((state_val_15516 === (19))){
var state_15515__$1 = state_15515;
var statearr_15550_18278 = state_15515__$1;
(statearr_15550_18278[(2)] = null);

(statearr_15550_18278[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15516 === (11))){
var inst_15487 = (state_15515[(2)]);
var state_15515__$1 = (function (){var statearr_15553 = state_15515;
(statearr_15553[(10)] = inst_15487);

return statearr_15553;
})();
var statearr_15554_18279 = state_15515__$1;
(statearr_15554_18279[(2)] = null);

(statearr_15554_18279[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15516 === (9))){
var state_15515__$1 = state_15515;
var statearr_15555_18280 = state_15515__$1;
(statearr_15555_18280[(2)] = null);

(statearr_15555_18280[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15516 === (5))){
var state_15515__$1 = state_15515;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15556_18281 = state_15515__$1;
(statearr_15556_18281[(1)] = (8));

} else {
var statearr_15557_18282 = state_15515__$1;
(statearr_15557_18282[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15516 === (14))){
var inst_15494 = (state_15515[(11)]);
var inst_15490 = (state_15515[(8)]);
var inst_15490__$1 = (state_15515[(2)]);
var inst_15493 = (inst_15490__$1 == null);
var inst_15494__$1 = cljs.core.not(inst_15493);
var state_15515__$1 = (function (){var statearr_15558 = state_15515;
(statearr_15558[(11)] = inst_15494__$1);

(statearr_15558[(8)] = inst_15490__$1);

return statearr_15558;
})();
if(inst_15494__$1){
var statearr_15559_18284 = state_15515__$1;
(statearr_15559_18284[(1)] = (15));

} else {
var statearr_15560_18286 = state_15515__$1;
(statearr_15560_18286[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15516 === (16))){
var inst_15494 = (state_15515[(11)]);
var state_15515__$1 = state_15515;
var statearr_15562_18287 = state_15515__$1;
(statearr_15562_18287[(2)] = inst_15494);

(statearr_15562_18287[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15516 === (10))){
var inst_15482 = (state_15515[(2)]);
var state_15515__$1 = state_15515;
var statearr_15563_18293 = state_15515__$1;
(statearr_15563_18293[(2)] = inst_15482);

(statearr_15563_18293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15516 === (18))){
var inst_15498 = (state_15515[(2)]);
var state_15515__$1 = state_15515;
var statearr_15564_18294 = state_15515__$1;
(statearr_15564_18294[(2)] = inst_15498);

(statearr_15564_18294[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15516 === (8))){
var inst_15479 = cljs.core.async.close_BANG_(to);
var state_15515__$1 = state_15515;
var statearr_15565_18297 = state_15515__$1;
(statearr_15565_18297[(2)] = inst_15479);

(statearr_15565_18297[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__14716__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14716__auto____0 = (function (){
var statearr_15568 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15568[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14716__auto__);

(statearr_15568[(1)] = (1));

return statearr_15568;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14716__auto____1 = (function (state_15515){
while(true){
var ret_value__14717__auto__ = (function (){try{while(true){
var result__14718__auto__ = switch__14715__auto__(state_15515);
if(cljs.core.keyword_identical_QMARK_(result__14718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14718__auto__;
}
break;
}
}catch (e15569){var ex__14719__auto__ = e15569;
var statearr_15570_18329 = state_15515;
(statearr_15570_18329[(2)] = ex__14719__auto__);


if(cljs.core.seq((state_15515[(4)]))){
var statearr_15571_18331 = state_15515;
(statearr_15571_18331[(1)] = cljs.core.first((state_15515[(4)])));

} else {
throw ex__14719__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18332 = state_15515;
state_15515 = G__18332;
continue;
} else {
return ret_value__14717__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14716__auto__ = function(state_15515){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14716__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14716__auto____1.call(this,state_15515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14716__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14716__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14716__auto__;
})()
})();
var state__14886__auto__ = (function (){var statearr_15572 = f__14885__auto__();
(statearr_15572[(6)] = c__14884__auto__);

return statearr_15572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14886__auto__);
}));

return c__14884__auto__;
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
var G__15576 = arguments.length;
switch (G__15576) {
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
var G__15599 = arguments.length;
switch (G__15599) {
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
var G__15602 = arguments.length;
switch (G__15602) {
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
var c__14884__auto___18336 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14885__auto__ = (function (){var switch__14715__auto__ = (function (state_15630){
var state_val_15631 = (state_15630[(1)]);
if((state_val_15631 === (7))){
var inst_15626 = (state_15630[(2)]);
var state_15630__$1 = state_15630;
var statearr_15635_18337 = state_15630__$1;
(statearr_15635_18337[(2)] = inst_15626);

(statearr_15635_18337[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15631 === (1))){
var state_15630__$1 = state_15630;
var statearr_15636_18338 = state_15630__$1;
(statearr_15636_18338[(2)] = null);

(statearr_15636_18338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15631 === (4))){
var inst_15607 = (state_15630[(7)]);
var inst_15607__$1 = (state_15630[(2)]);
var inst_15608 = (inst_15607__$1 == null);
var state_15630__$1 = (function (){var statearr_15645 = state_15630;
(statearr_15645[(7)] = inst_15607__$1);

return statearr_15645;
})();
if(cljs.core.truth_(inst_15608)){
var statearr_15650_18341 = state_15630__$1;
(statearr_15650_18341[(1)] = (5));

} else {
var statearr_15651_18342 = state_15630__$1;
(statearr_15651_18342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15631 === (13))){
var state_15630__$1 = state_15630;
var statearr_15660_18345 = state_15630__$1;
(statearr_15660_18345[(2)] = null);

(statearr_15660_18345[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15631 === (6))){
var inst_15607 = (state_15630[(7)]);
var inst_15613 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15607) : p.call(null,inst_15607));
var state_15630__$1 = state_15630;
if(cljs.core.truth_(inst_15613)){
var statearr_15661_18346 = state_15630__$1;
(statearr_15661_18346[(1)] = (9));

} else {
var statearr_15662_18347 = state_15630__$1;
(statearr_15662_18347[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15631 === (3))){
var inst_15628 = (state_15630[(2)]);
var state_15630__$1 = state_15630;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15630__$1,inst_15628);
} else {
if((state_val_15631 === (12))){
var state_15630__$1 = state_15630;
var statearr_15663_18348 = state_15630__$1;
(statearr_15663_18348[(2)] = null);

(statearr_15663_18348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15631 === (2))){
var state_15630__$1 = state_15630;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15630__$1,(4),ch);
} else {
if((state_val_15631 === (11))){
var inst_15607 = (state_15630[(7)]);
var inst_15617 = (state_15630[(2)]);
var state_15630__$1 = state_15630;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15630__$1,(8),inst_15617,inst_15607);
} else {
if((state_val_15631 === (9))){
var state_15630__$1 = state_15630;
var statearr_15664_18377 = state_15630__$1;
(statearr_15664_18377[(2)] = tc);

(statearr_15664_18377[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15631 === (5))){
var inst_15610 = cljs.core.async.close_BANG_(tc);
var inst_15611 = cljs.core.async.close_BANG_(fc);
var state_15630__$1 = (function (){var statearr_15665 = state_15630;
(statearr_15665[(8)] = inst_15610);

return statearr_15665;
})();
var statearr_15666_18379 = state_15630__$1;
(statearr_15666_18379[(2)] = inst_15611);

(statearr_15666_18379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15631 === (14))){
var inst_15624 = (state_15630[(2)]);
var state_15630__$1 = state_15630;
var statearr_15667_18402 = state_15630__$1;
(statearr_15667_18402[(2)] = inst_15624);

(statearr_15667_18402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15631 === (10))){
var state_15630__$1 = state_15630;
var statearr_15668_18403 = state_15630__$1;
(statearr_15668_18403[(2)] = fc);

(statearr_15668_18403[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15631 === (8))){
var inst_15619 = (state_15630[(2)]);
var state_15630__$1 = state_15630;
if(cljs.core.truth_(inst_15619)){
var statearr_15669_18409 = state_15630__$1;
(statearr_15669_18409[(1)] = (12));

} else {
var statearr_15670_18410 = state_15630__$1;
(statearr_15670_18410[(1)] = (13));

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
var cljs$core$async$state_machine__14716__auto__ = null;
var cljs$core$async$state_machine__14716__auto____0 = (function (){
var statearr_15672 = [null,null,null,null,null,null,null,null,null];
(statearr_15672[(0)] = cljs$core$async$state_machine__14716__auto__);

(statearr_15672[(1)] = (1));

return statearr_15672;
});
var cljs$core$async$state_machine__14716__auto____1 = (function (state_15630){
while(true){
var ret_value__14717__auto__ = (function (){try{while(true){
var result__14718__auto__ = switch__14715__auto__(state_15630);
if(cljs.core.keyword_identical_QMARK_(result__14718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14718__auto__;
}
break;
}
}catch (e15674){var ex__14719__auto__ = e15674;
var statearr_15675_18411 = state_15630;
(statearr_15675_18411[(2)] = ex__14719__auto__);


if(cljs.core.seq((state_15630[(4)]))){
var statearr_15676_18412 = state_15630;
(statearr_15676_18412[(1)] = cljs.core.first((state_15630[(4)])));

} else {
throw ex__14719__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18413 = state_15630;
state_15630 = G__18413;
continue;
} else {
return ret_value__14717__auto__;
}
break;
}
});
cljs$core$async$state_machine__14716__auto__ = function(state_15630){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14716__auto____1.call(this,state_15630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14716__auto____0;
cljs$core$async$state_machine__14716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14716__auto____1;
return cljs$core$async$state_machine__14716__auto__;
})()
})();
var state__14886__auto__ = (function (){var statearr_15677 = f__14885__auto__();
(statearr_15677[(6)] = c__14884__auto___18336);

return statearr_15677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14886__auto__);
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
var c__14884__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14885__auto__ = (function (){var switch__14715__auto__ = (function (state_15729){
var state_val_15730 = (state_15729[(1)]);
if((state_val_15730 === (7))){
var inst_15721 = (state_15729[(2)]);
var state_15729__$1 = state_15729;
var statearr_15735_18414 = state_15729__$1;
(statearr_15735_18414[(2)] = inst_15721);

(statearr_15735_18414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15730 === (1))){
var inst_15700 = init;
var inst_15701 = inst_15700;
var state_15729__$1 = (function (){var statearr_15736 = state_15729;
(statearr_15736[(7)] = inst_15701);

return statearr_15736;
})();
var statearr_15737_18415 = state_15729__$1;
(statearr_15737_18415[(2)] = null);

(statearr_15737_18415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15730 === (4))){
var inst_15704 = (state_15729[(8)]);
var inst_15704__$1 = (state_15729[(2)]);
var inst_15705 = (inst_15704__$1 == null);
var state_15729__$1 = (function (){var statearr_15739 = state_15729;
(statearr_15739[(8)] = inst_15704__$1);

return statearr_15739;
})();
if(cljs.core.truth_(inst_15705)){
var statearr_15740_18419 = state_15729__$1;
(statearr_15740_18419[(1)] = (5));

} else {
var statearr_15741_18420 = state_15729__$1;
(statearr_15741_18420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15730 === (6))){
var inst_15701 = (state_15729[(7)]);
var inst_15708 = (state_15729[(9)]);
var inst_15704 = (state_15729[(8)]);
var inst_15708__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15701,inst_15704) : f.call(null,inst_15701,inst_15704));
var inst_15709 = cljs.core.reduced_QMARK_(inst_15708__$1);
var state_15729__$1 = (function (){var statearr_15743 = state_15729;
(statearr_15743[(9)] = inst_15708__$1);

return statearr_15743;
})();
if(inst_15709){
var statearr_15744_18421 = state_15729__$1;
(statearr_15744_18421[(1)] = (8));

} else {
var statearr_15745_18422 = state_15729__$1;
(statearr_15745_18422[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15730 === (3))){
var inst_15723 = (state_15729[(2)]);
var state_15729__$1 = state_15729;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15729__$1,inst_15723);
} else {
if((state_val_15730 === (2))){
var state_15729__$1 = state_15729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15729__$1,(4),ch);
} else {
if((state_val_15730 === (9))){
var inst_15708 = (state_15729[(9)]);
var inst_15701 = inst_15708;
var state_15729__$1 = (function (){var statearr_15746 = state_15729;
(statearr_15746[(7)] = inst_15701);

return statearr_15746;
})();
var statearr_15747_18423 = state_15729__$1;
(statearr_15747_18423[(2)] = null);

(statearr_15747_18423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15730 === (5))){
var inst_15701 = (state_15729[(7)]);
var state_15729__$1 = state_15729;
var statearr_15750_18428 = state_15729__$1;
(statearr_15750_18428[(2)] = inst_15701);

(statearr_15750_18428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15730 === (10))){
var inst_15719 = (state_15729[(2)]);
var state_15729__$1 = state_15729;
var statearr_15753_18429 = state_15729__$1;
(statearr_15753_18429[(2)] = inst_15719);

(statearr_15753_18429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15730 === (8))){
var inst_15708 = (state_15729[(9)]);
var inst_15715 = cljs.core.deref(inst_15708);
var state_15729__$1 = state_15729;
var statearr_15756_18430 = state_15729__$1;
(statearr_15756_18430[(2)] = inst_15715);

(statearr_15756_18430[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__14716__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14716__auto____0 = (function (){
var statearr_15761 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15761[(0)] = cljs$core$async$reduce_$_state_machine__14716__auto__);

(statearr_15761[(1)] = (1));

return statearr_15761;
});
var cljs$core$async$reduce_$_state_machine__14716__auto____1 = (function (state_15729){
while(true){
var ret_value__14717__auto__ = (function (){try{while(true){
var result__14718__auto__ = switch__14715__auto__(state_15729);
if(cljs.core.keyword_identical_QMARK_(result__14718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14718__auto__;
}
break;
}
}catch (e15762){var ex__14719__auto__ = e15762;
var statearr_15763_18431 = state_15729;
(statearr_15763_18431[(2)] = ex__14719__auto__);


if(cljs.core.seq((state_15729[(4)]))){
var statearr_15764_18432 = state_15729;
(statearr_15764_18432[(1)] = cljs.core.first((state_15729[(4)])));

} else {
throw ex__14719__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18433 = state_15729;
state_15729 = G__18433;
continue;
} else {
return ret_value__14717__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14716__auto__ = function(state_15729){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14716__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14716__auto____1.call(this,state_15729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14716__auto____0;
cljs$core$async$reduce_$_state_machine__14716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14716__auto____1;
return cljs$core$async$reduce_$_state_machine__14716__auto__;
})()
})();
var state__14886__auto__ = (function (){var statearr_15765 = f__14885__auto__();
(statearr_15765[(6)] = c__14884__auto__);

return statearr_15765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14886__auto__);
}));

return c__14884__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14884__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14885__auto__ = (function (){var switch__14715__auto__ = (function (state_15776){
var state_val_15777 = (state_15776[(1)]);
if((state_val_15777 === (1))){
var inst_15771 = cljs.core.async.reduce(f__$1,init,ch);
var state_15776__$1 = state_15776;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15776__$1,(2),inst_15771);
} else {
if((state_val_15777 === (2))){
var inst_15773 = (state_15776[(2)]);
var inst_15774 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15773) : f__$1.call(null,inst_15773));
var state_15776__$1 = state_15776;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15776__$1,inst_15774);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14716__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14716__auto____0 = (function (){
var statearr_15782 = [null,null,null,null,null,null,null];
(statearr_15782[(0)] = cljs$core$async$transduce_$_state_machine__14716__auto__);

(statearr_15782[(1)] = (1));

return statearr_15782;
});
var cljs$core$async$transduce_$_state_machine__14716__auto____1 = (function (state_15776){
while(true){
var ret_value__14717__auto__ = (function (){try{while(true){
var result__14718__auto__ = switch__14715__auto__(state_15776);
if(cljs.core.keyword_identical_QMARK_(result__14718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14718__auto__;
}
break;
}
}catch (e15783){var ex__14719__auto__ = e15783;
var statearr_15784_18452 = state_15776;
(statearr_15784_18452[(2)] = ex__14719__auto__);


if(cljs.core.seq((state_15776[(4)]))){
var statearr_15785_18453 = state_15776;
(statearr_15785_18453[(1)] = cljs.core.first((state_15776[(4)])));

} else {
throw ex__14719__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18454 = state_15776;
state_15776 = G__18454;
continue;
} else {
return ret_value__14717__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14716__auto__ = function(state_15776){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14716__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14716__auto____1.call(this,state_15776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14716__auto____0;
cljs$core$async$transduce_$_state_machine__14716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14716__auto____1;
return cljs$core$async$transduce_$_state_machine__14716__auto__;
})()
})();
var state__14886__auto__ = (function (){var statearr_15786 = f__14885__auto__();
(statearr_15786[(6)] = c__14884__auto__);

return statearr_15786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14886__auto__);
}));

return c__14884__auto__;
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
var G__15796 = arguments.length;
switch (G__15796) {
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
var c__14884__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14885__auto__ = (function (){var switch__14715__auto__ = (function (state_15822){
var state_val_15824 = (state_15822[(1)]);
if((state_val_15824 === (7))){
var inst_15804 = (state_15822[(2)]);
var state_15822__$1 = state_15822;
var statearr_15827_18456 = state_15822__$1;
(statearr_15827_18456[(2)] = inst_15804);

(statearr_15827_18456[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (1))){
var inst_15797 = cljs.core.seq(coll);
var inst_15798 = inst_15797;
var state_15822__$1 = (function (){var statearr_15828 = state_15822;
(statearr_15828[(7)] = inst_15798);

return statearr_15828;
})();
var statearr_15831_18462 = state_15822__$1;
(statearr_15831_18462[(2)] = null);

(statearr_15831_18462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (4))){
var inst_15798 = (state_15822[(7)]);
var inst_15802 = cljs.core.first(inst_15798);
var state_15822__$1 = state_15822;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15822__$1,(7),ch,inst_15802);
} else {
if((state_val_15824 === (13))){
var inst_15816 = (state_15822[(2)]);
var state_15822__$1 = state_15822;
var statearr_15832_18468 = state_15822__$1;
(statearr_15832_18468[(2)] = inst_15816);

(statearr_15832_18468[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (6))){
var inst_15807 = (state_15822[(2)]);
var state_15822__$1 = state_15822;
if(cljs.core.truth_(inst_15807)){
var statearr_15836_18469 = state_15822__$1;
(statearr_15836_18469[(1)] = (8));

} else {
var statearr_15837_18470 = state_15822__$1;
(statearr_15837_18470[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (3))){
var inst_15820 = (state_15822[(2)]);
var state_15822__$1 = state_15822;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15822__$1,inst_15820);
} else {
if((state_val_15824 === (12))){
var state_15822__$1 = state_15822;
var statearr_15840_18471 = state_15822__$1;
(statearr_15840_18471[(2)] = null);

(statearr_15840_18471[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (2))){
var inst_15798 = (state_15822[(7)]);
var state_15822__$1 = state_15822;
if(cljs.core.truth_(inst_15798)){
var statearr_15844_18472 = state_15822__$1;
(statearr_15844_18472[(1)] = (4));

} else {
var statearr_15846_18474 = state_15822__$1;
(statearr_15846_18474[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (11))){
var inst_15813 = cljs.core.async.close_BANG_(ch);
var state_15822__$1 = state_15822;
var statearr_15847_18475 = state_15822__$1;
(statearr_15847_18475[(2)] = inst_15813);

(statearr_15847_18475[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (9))){
var state_15822__$1 = state_15822;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15850_18476 = state_15822__$1;
(statearr_15850_18476[(1)] = (11));

} else {
var statearr_15852_18477 = state_15822__$1;
(statearr_15852_18477[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (5))){
var inst_15798 = (state_15822[(7)]);
var state_15822__$1 = state_15822;
var statearr_15853_18478 = state_15822__$1;
(statearr_15853_18478[(2)] = inst_15798);

(statearr_15853_18478[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (10))){
var inst_15818 = (state_15822[(2)]);
var state_15822__$1 = state_15822;
var statearr_15856_18479 = state_15822__$1;
(statearr_15856_18479[(2)] = inst_15818);

(statearr_15856_18479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (8))){
var inst_15798 = (state_15822[(7)]);
var inst_15809 = cljs.core.next(inst_15798);
var inst_15798__$1 = inst_15809;
var state_15822__$1 = (function (){var statearr_15858 = state_15822;
(statearr_15858[(7)] = inst_15798__$1);

return statearr_15858;
})();
var statearr_15859_18481 = state_15822__$1;
(statearr_15859_18481[(2)] = null);

(statearr_15859_18481[(1)] = (2));


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
var cljs$core$async$state_machine__14716__auto__ = null;
var cljs$core$async$state_machine__14716__auto____0 = (function (){
var statearr_15861 = [null,null,null,null,null,null,null,null];
(statearr_15861[(0)] = cljs$core$async$state_machine__14716__auto__);

(statearr_15861[(1)] = (1));

return statearr_15861;
});
var cljs$core$async$state_machine__14716__auto____1 = (function (state_15822){
while(true){
var ret_value__14717__auto__ = (function (){try{while(true){
var result__14718__auto__ = switch__14715__auto__(state_15822);
if(cljs.core.keyword_identical_QMARK_(result__14718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14718__auto__;
}
break;
}
}catch (e15862){var ex__14719__auto__ = e15862;
var statearr_15863_18483 = state_15822;
(statearr_15863_18483[(2)] = ex__14719__auto__);


if(cljs.core.seq((state_15822[(4)]))){
var statearr_15864_18484 = state_15822;
(statearr_15864_18484[(1)] = cljs.core.first((state_15822[(4)])));

} else {
throw ex__14719__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18485 = state_15822;
state_15822 = G__18485;
continue;
} else {
return ret_value__14717__auto__;
}
break;
}
});
cljs$core$async$state_machine__14716__auto__ = function(state_15822){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14716__auto____1.call(this,state_15822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14716__auto____0;
cljs$core$async$state_machine__14716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14716__auto____1;
return cljs$core$async$state_machine__14716__auto__;
})()
})();
var state__14886__auto__ = (function (){var statearr_15867 = f__14885__auto__();
(statearr_15867[(6)] = c__14884__auto__);

return statearr_15867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14886__auto__);
}));

return c__14884__auto__;
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
var G__15870 = arguments.length;
switch (G__15870) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_18487 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_18487(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18488 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_18488(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18492 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_18492(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18493 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_18493(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15906 = (function (ch,cs,meta15907){
this.ch = ch;
this.cs = cs;
this.meta15907 = meta15907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15908,meta15907__$1){
var self__ = this;
var _15908__$1 = this;
return (new cljs.core.async.t_cljs$core$async15906(self__.ch,self__.cs,meta15907__$1));
}));

(cljs.core.async.t_cljs$core$async15906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15908){
var self__ = this;
var _15908__$1 = this;
return self__.meta15907;
}));

(cljs.core.async.t_cljs$core$async15906.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15906.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15906.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15906.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15906.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15906.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15906.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15907","meta15907",-209303361,null)], null);
}));

(cljs.core.async.t_cljs$core$async15906.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15906.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15906");

(cljs.core.async.t_cljs$core$async15906.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15906");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15906.
 */
cljs.core.async.__GT_t_cljs$core$async15906 = (function cljs$core$async$__GT_t_cljs$core$async15906(ch,cs,meta15907){
return (new cljs.core.async.t_cljs$core$async15906(ch,cs,meta15907));
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
var m = (new cljs.core.async.t_cljs$core$async15906(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14884__auto___18495 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14885__auto__ = (function (){var switch__14715__auto__ = (function (state_16084){
var state_val_16085 = (state_16084[(1)]);
if((state_val_16085 === (7))){
var inst_16079 = (state_16084[(2)]);
var state_16084__$1 = state_16084;
var statearr_16091_18496 = state_16084__$1;
(statearr_16091_18496[(2)] = inst_16079);

(statearr_16091_18496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (20))){
var inst_15955 = (state_16084[(7)]);
var inst_15968 = cljs.core.first(inst_15955);
var inst_15969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15968,(0),null);
var inst_15970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15968,(1),null);
var state_16084__$1 = (function (){var statearr_16094 = state_16084;
(statearr_16094[(8)] = inst_15969);

return statearr_16094;
})();
if(cljs.core.truth_(inst_15970)){
var statearr_16095_18497 = state_16084__$1;
(statearr_16095_18497[(1)] = (22));

} else {
var statearr_16096_18498 = state_16084__$1;
(statearr_16096_18498[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (27))){
var inst_15918 = (state_16084[(9)]);
var inst_15999 = (state_16084[(10)]);
var inst_16001 = (state_16084[(11)]);
var inst_16008 = (state_16084[(12)]);
var inst_16008__$1 = cljs.core._nth(inst_15999,inst_16001);
var inst_16010 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16008__$1,inst_15918,done);
var state_16084__$1 = (function (){var statearr_16102 = state_16084;
(statearr_16102[(12)] = inst_16008__$1);

return statearr_16102;
})();
if(cljs.core.truth_(inst_16010)){
var statearr_16104_18503 = state_16084__$1;
(statearr_16104_18503[(1)] = (30));

} else {
var statearr_16105_18504 = state_16084__$1;
(statearr_16105_18504[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (1))){
var state_16084__$1 = state_16084;
var statearr_16106_18511 = state_16084__$1;
(statearr_16106_18511[(2)] = null);

(statearr_16106_18511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (24))){
var inst_15955 = (state_16084[(7)]);
var inst_15975 = (state_16084[(2)]);
var inst_15976 = cljs.core.next(inst_15955);
var inst_15927 = inst_15976;
var inst_15928 = null;
var inst_15929 = (0);
var inst_15930 = (0);
var state_16084__$1 = (function (){var statearr_16107 = state_16084;
(statearr_16107[(13)] = inst_15929);

(statearr_16107[(14)] = inst_15928);

(statearr_16107[(15)] = inst_15930);

(statearr_16107[(16)] = inst_15927);

(statearr_16107[(17)] = inst_15975);

return statearr_16107;
})();
var statearr_16108_18512 = state_16084__$1;
(statearr_16108_18512[(2)] = null);

(statearr_16108_18512[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (39))){
var state_16084__$1 = state_16084;
var statearr_16120_18513 = state_16084__$1;
(statearr_16120_18513[(2)] = null);

(statearr_16120_18513[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (4))){
var inst_15918 = (state_16084[(9)]);
var inst_15918__$1 = (state_16084[(2)]);
var inst_15919 = (inst_15918__$1 == null);
var state_16084__$1 = (function (){var statearr_16123 = state_16084;
(statearr_16123[(9)] = inst_15918__$1);

return statearr_16123;
})();
if(cljs.core.truth_(inst_15919)){
var statearr_16125_18514 = state_16084__$1;
(statearr_16125_18514[(1)] = (5));

} else {
var statearr_16126_18515 = state_16084__$1;
(statearr_16126_18515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (15))){
var inst_15929 = (state_16084[(13)]);
var inst_15928 = (state_16084[(14)]);
var inst_15930 = (state_16084[(15)]);
var inst_15927 = (state_16084[(16)]);
var inst_15951 = (state_16084[(2)]);
var inst_15952 = (inst_15930 + (1));
var tmp16112 = inst_15929;
var tmp16113 = inst_15928;
var tmp16114 = inst_15927;
var inst_15927__$1 = tmp16114;
var inst_15928__$1 = tmp16113;
var inst_15929__$1 = tmp16112;
var inst_15930__$1 = inst_15952;
var state_16084__$1 = (function (){var statearr_16131 = state_16084;
(statearr_16131[(13)] = inst_15929__$1);

(statearr_16131[(14)] = inst_15928__$1);

(statearr_16131[(15)] = inst_15930__$1);

(statearr_16131[(16)] = inst_15927__$1);

(statearr_16131[(18)] = inst_15951);

return statearr_16131;
})();
var statearr_16133_18517 = state_16084__$1;
(statearr_16133_18517[(2)] = null);

(statearr_16133_18517[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (21))){
var inst_15979 = (state_16084[(2)]);
var state_16084__$1 = state_16084;
var statearr_16146_18518 = state_16084__$1;
(statearr_16146_18518[(2)] = inst_15979);

(statearr_16146_18518[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (31))){
var inst_16008 = (state_16084[(12)]);
var inst_16014 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16008);
var state_16084__$1 = state_16084;
var statearr_16168_18520 = state_16084__$1;
(statearr_16168_18520[(2)] = inst_16014);

(statearr_16168_18520[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (32))){
var inst_15999 = (state_16084[(10)]);
var inst_16001 = (state_16084[(11)]);
var inst_16000 = (state_16084[(19)]);
var inst_15998 = (state_16084[(20)]);
var inst_16016 = (state_16084[(2)]);
var inst_16019 = (inst_16001 + (1));
var tmp16136 = inst_15999;
var tmp16137 = inst_16000;
var tmp16138 = inst_15998;
var inst_15998__$1 = tmp16138;
var inst_15999__$1 = tmp16136;
var inst_16000__$1 = tmp16137;
var inst_16001__$1 = inst_16019;
var state_16084__$1 = (function (){var statearr_16173 = state_16084;
(statearr_16173[(10)] = inst_15999__$1);

(statearr_16173[(21)] = inst_16016);

(statearr_16173[(11)] = inst_16001__$1);

(statearr_16173[(19)] = inst_16000__$1);

(statearr_16173[(20)] = inst_15998__$1);

return statearr_16173;
})();
var statearr_16174_18521 = state_16084__$1;
(statearr_16174_18521[(2)] = null);

(statearr_16174_18521[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (40))){
var inst_16044 = (state_16084[(22)]);
var inst_16048 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16044);
var state_16084__$1 = state_16084;
var statearr_16175_18523 = state_16084__$1;
(statearr_16175_18523[(2)] = inst_16048);

(statearr_16175_18523[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (33))){
var inst_16033 = (state_16084[(23)]);
var inst_16035 = cljs.core.chunked_seq_QMARK_(inst_16033);
var state_16084__$1 = state_16084;
if(inst_16035){
var statearr_16177_18524 = state_16084__$1;
(statearr_16177_18524[(1)] = (36));

} else {
var statearr_16178_18525 = state_16084__$1;
(statearr_16178_18525[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (13))){
var inst_15943 = (state_16084[(24)]);
var inst_15948 = cljs.core.async.close_BANG_(inst_15943);
var state_16084__$1 = state_16084;
var statearr_16182_18526 = state_16084__$1;
(statearr_16182_18526[(2)] = inst_15948);

(statearr_16182_18526[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (22))){
var inst_15969 = (state_16084[(8)]);
var inst_15972 = cljs.core.async.close_BANG_(inst_15969);
var state_16084__$1 = state_16084;
var statearr_16184_18527 = state_16084__$1;
(statearr_16184_18527[(2)] = inst_15972);

(statearr_16184_18527[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (36))){
var inst_16033 = (state_16084[(23)]);
var inst_16038 = cljs.core.chunk_first(inst_16033);
var inst_16039 = cljs.core.chunk_rest(inst_16033);
var inst_16041 = cljs.core.count(inst_16038);
var inst_15998 = inst_16039;
var inst_15999 = inst_16038;
var inst_16000 = inst_16041;
var inst_16001 = (0);
var state_16084__$1 = (function (){var statearr_16200 = state_16084;
(statearr_16200[(10)] = inst_15999);

(statearr_16200[(11)] = inst_16001);

(statearr_16200[(19)] = inst_16000);

(statearr_16200[(20)] = inst_15998);

return statearr_16200;
})();
var statearr_16209_18532 = state_16084__$1;
(statearr_16209_18532[(2)] = null);

(statearr_16209_18532[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (41))){
var inst_16033 = (state_16084[(23)]);
var inst_16051 = (state_16084[(2)]);
var inst_16053 = cljs.core.next(inst_16033);
var inst_15998 = inst_16053;
var inst_15999 = null;
var inst_16000 = (0);
var inst_16001 = (0);
var state_16084__$1 = (function (){var statearr_16224 = state_16084;
(statearr_16224[(10)] = inst_15999);

(statearr_16224[(11)] = inst_16001);

(statearr_16224[(19)] = inst_16000);

(statearr_16224[(25)] = inst_16051);

(statearr_16224[(20)] = inst_15998);

return statearr_16224;
})();
var statearr_16232_18533 = state_16084__$1;
(statearr_16232_18533[(2)] = null);

(statearr_16232_18533[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (43))){
var state_16084__$1 = state_16084;
var statearr_16242_18534 = state_16084__$1;
(statearr_16242_18534[(2)] = null);

(statearr_16242_18534[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (29))){
var inst_16061 = (state_16084[(2)]);
var state_16084__$1 = state_16084;
var statearr_16247_18535 = state_16084__$1;
(statearr_16247_18535[(2)] = inst_16061);

(statearr_16247_18535[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (44))){
var inst_16076 = (state_16084[(2)]);
var state_16084__$1 = (function (){var statearr_16267 = state_16084;
(statearr_16267[(26)] = inst_16076);

return statearr_16267;
})();
var statearr_16275_18536 = state_16084__$1;
(statearr_16275_18536[(2)] = null);

(statearr_16275_18536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (6))){
var inst_15989 = (state_16084[(27)]);
var inst_15988 = cljs.core.deref(cs);
var inst_15989__$1 = cljs.core.keys(inst_15988);
var inst_15991 = cljs.core.count(inst_15989__$1);
var inst_15992 = cljs.core.reset_BANG_(dctr,inst_15991);
var inst_15997 = cljs.core.seq(inst_15989__$1);
var inst_15998 = inst_15997;
var inst_15999 = null;
var inst_16000 = (0);
var inst_16001 = (0);
var state_16084__$1 = (function (){var statearr_16305 = state_16084;
(statearr_16305[(27)] = inst_15989__$1);

(statearr_16305[(10)] = inst_15999);

(statearr_16305[(11)] = inst_16001);

(statearr_16305[(28)] = inst_15992);

(statearr_16305[(19)] = inst_16000);

(statearr_16305[(20)] = inst_15998);

return statearr_16305;
})();
var statearr_16331_18537 = state_16084__$1;
(statearr_16331_18537[(2)] = null);

(statearr_16331_18537[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (28))){
var inst_16033 = (state_16084[(23)]);
var inst_15998 = (state_16084[(20)]);
var inst_16033__$1 = cljs.core.seq(inst_15998);
var state_16084__$1 = (function (){var statearr_16345 = state_16084;
(statearr_16345[(23)] = inst_16033__$1);

return statearr_16345;
})();
if(inst_16033__$1){
var statearr_16348_18538 = state_16084__$1;
(statearr_16348_18538[(1)] = (33));

} else {
var statearr_16350_18539 = state_16084__$1;
(statearr_16350_18539[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (25))){
var inst_16001 = (state_16084[(11)]);
var inst_16000 = (state_16084[(19)]);
var inst_16004 = (inst_16001 < inst_16000);
var inst_16005 = inst_16004;
var state_16084__$1 = state_16084;
if(cljs.core.truth_(inst_16005)){
var statearr_16352_18540 = state_16084__$1;
(statearr_16352_18540[(1)] = (27));

} else {
var statearr_16353_18541 = state_16084__$1;
(statearr_16353_18541[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (34))){
var state_16084__$1 = state_16084;
var statearr_16358_18542 = state_16084__$1;
(statearr_16358_18542[(2)] = null);

(statearr_16358_18542[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (17))){
var state_16084__$1 = state_16084;
var statearr_16360_18543 = state_16084__$1;
(statearr_16360_18543[(2)] = null);

(statearr_16360_18543[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (3))){
var inst_16081 = (state_16084[(2)]);
var state_16084__$1 = state_16084;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16084__$1,inst_16081);
} else {
if((state_val_16085 === (12))){
var inst_15984 = (state_16084[(2)]);
var state_16084__$1 = state_16084;
var statearr_16362_18544 = state_16084__$1;
(statearr_16362_18544[(2)] = inst_15984);

(statearr_16362_18544[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (2))){
var state_16084__$1 = state_16084;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16084__$1,(4),ch);
} else {
if((state_val_16085 === (23))){
var state_16084__$1 = state_16084;
var statearr_16363_18546 = state_16084__$1;
(statearr_16363_18546[(2)] = null);

(statearr_16363_18546[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (35))){
var inst_16059 = (state_16084[(2)]);
var state_16084__$1 = state_16084;
var statearr_16365_18547 = state_16084__$1;
(statearr_16365_18547[(2)] = inst_16059);

(statearr_16365_18547[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (19))){
var inst_15955 = (state_16084[(7)]);
var inst_15960 = cljs.core.chunk_first(inst_15955);
var inst_15961 = cljs.core.chunk_rest(inst_15955);
var inst_15962 = cljs.core.count(inst_15960);
var inst_15927 = inst_15961;
var inst_15928 = inst_15960;
var inst_15929 = inst_15962;
var inst_15930 = (0);
var state_16084__$1 = (function (){var statearr_16366 = state_16084;
(statearr_16366[(13)] = inst_15929);

(statearr_16366[(14)] = inst_15928);

(statearr_16366[(15)] = inst_15930);

(statearr_16366[(16)] = inst_15927);

return statearr_16366;
})();
var statearr_16367_18549 = state_16084__$1;
(statearr_16367_18549[(2)] = null);

(statearr_16367_18549[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (11))){
var inst_15955 = (state_16084[(7)]);
var inst_15927 = (state_16084[(16)]);
var inst_15955__$1 = cljs.core.seq(inst_15927);
var state_16084__$1 = (function (){var statearr_16368 = state_16084;
(statearr_16368[(7)] = inst_15955__$1);

return statearr_16368;
})();
if(inst_15955__$1){
var statearr_16369_18550 = state_16084__$1;
(statearr_16369_18550[(1)] = (16));

} else {
var statearr_16370_18554 = state_16084__$1;
(statearr_16370_18554[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (9))){
var inst_15986 = (state_16084[(2)]);
var state_16084__$1 = state_16084;
var statearr_16373_18555 = state_16084__$1;
(statearr_16373_18555[(2)] = inst_15986);

(statearr_16373_18555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (5))){
var inst_15925 = cljs.core.deref(cs);
var inst_15926 = cljs.core.seq(inst_15925);
var inst_15927 = inst_15926;
var inst_15928 = null;
var inst_15929 = (0);
var inst_15930 = (0);
var state_16084__$1 = (function (){var statearr_16375 = state_16084;
(statearr_16375[(13)] = inst_15929);

(statearr_16375[(14)] = inst_15928);

(statearr_16375[(15)] = inst_15930);

(statearr_16375[(16)] = inst_15927);

return statearr_16375;
})();
var statearr_16376_18556 = state_16084__$1;
(statearr_16376_18556[(2)] = null);

(statearr_16376_18556[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (14))){
var state_16084__$1 = state_16084;
var statearr_16378_18557 = state_16084__$1;
(statearr_16378_18557[(2)] = null);

(statearr_16378_18557[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (45))){
var inst_16071 = (state_16084[(2)]);
var state_16084__$1 = state_16084;
var statearr_16379_18559 = state_16084__$1;
(statearr_16379_18559[(2)] = inst_16071);

(statearr_16379_18559[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (26))){
var inst_15989 = (state_16084[(27)]);
var inst_16063 = (state_16084[(2)]);
var inst_16066 = cljs.core.seq(inst_15989);
var state_16084__$1 = (function (){var statearr_16380 = state_16084;
(statearr_16380[(29)] = inst_16063);

return statearr_16380;
})();
if(inst_16066){
var statearr_16381_18561 = state_16084__$1;
(statearr_16381_18561[(1)] = (42));

} else {
var statearr_16382_18562 = state_16084__$1;
(statearr_16382_18562[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (16))){
var inst_15955 = (state_16084[(7)]);
var inst_15958 = cljs.core.chunked_seq_QMARK_(inst_15955);
var state_16084__$1 = state_16084;
if(inst_15958){
var statearr_16385_18563 = state_16084__$1;
(statearr_16385_18563[(1)] = (19));

} else {
var statearr_16386_18564 = state_16084__$1;
(statearr_16386_18564[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (38))){
var inst_16056 = (state_16084[(2)]);
var state_16084__$1 = state_16084;
var statearr_16388_18565 = state_16084__$1;
(statearr_16388_18565[(2)] = inst_16056);

(statearr_16388_18565[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (30))){
var state_16084__$1 = state_16084;
var statearr_16390_18566 = state_16084__$1;
(statearr_16390_18566[(2)] = null);

(statearr_16390_18566[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (10))){
var inst_15928 = (state_16084[(14)]);
var inst_15930 = (state_16084[(15)]);
var inst_15939 = cljs.core._nth(inst_15928,inst_15930);
var inst_15943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15939,(0),null);
var inst_15944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15939,(1),null);
var state_16084__$1 = (function (){var statearr_16391 = state_16084;
(statearr_16391[(24)] = inst_15943);

return statearr_16391;
})();
if(cljs.core.truth_(inst_15944)){
var statearr_16392_18569 = state_16084__$1;
(statearr_16392_18569[(1)] = (13));

} else {
var statearr_16393_18570 = state_16084__$1;
(statearr_16393_18570[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (18))){
var inst_15982 = (state_16084[(2)]);
var state_16084__$1 = state_16084;
var statearr_16397_18573 = state_16084__$1;
(statearr_16397_18573[(2)] = inst_15982);

(statearr_16397_18573[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (42))){
var state_16084__$1 = state_16084;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16084__$1,(45),dchan);
} else {
if((state_val_16085 === (37))){
var inst_15918 = (state_16084[(9)]);
var inst_16033 = (state_16084[(23)]);
var inst_16044 = (state_16084[(22)]);
var inst_16044__$1 = cljs.core.first(inst_16033);
var inst_16045 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16044__$1,inst_15918,done);
var state_16084__$1 = (function (){var statearr_16401 = state_16084;
(statearr_16401[(22)] = inst_16044__$1);

return statearr_16401;
})();
if(cljs.core.truth_(inst_16045)){
var statearr_16402_18575 = state_16084__$1;
(statearr_16402_18575[(1)] = (39));

} else {
var statearr_16404_18576 = state_16084__$1;
(statearr_16404_18576[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16085 === (8))){
var inst_15929 = (state_16084[(13)]);
var inst_15930 = (state_16084[(15)]);
var inst_15932 = (inst_15930 < inst_15929);
var inst_15933 = inst_15932;
var state_16084__$1 = state_16084;
if(cljs.core.truth_(inst_15933)){
var statearr_16405_18577 = state_16084__$1;
(statearr_16405_18577[(1)] = (10));

} else {
var statearr_16406_18578 = state_16084__$1;
(statearr_16406_18578[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__14716__auto__ = null;
var cljs$core$async$mult_$_state_machine__14716__auto____0 = (function (){
var statearr_16407 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16407[(0)] = cljs$core$async$mult_$_state_machine__14716__auto__);

(statearr_16407[(1)] = (1));

return statearr_16407;
});
var cljs$core$async$mult_$_state_machine__14716__auto____1 = (function (state_16084){
while(true){
var ret_value__14717__auto__ = (function (){try{while(true){
var result__14718__auto__ = switch__14715__auto__(state_16084);
if(cljs.core.keyword_identical_QMARK_(result__14718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14718__auto__;
}
break;
}
}catch (e16408){var ex__14719__auto__ = e16408;
var statearr_16409_18579 = state_16084;
(statearr_16409_18579[(2)] = ex__14719__auto__);


if(cljs.core.seq((state_16084[(4)]))){
var statearr_16410_18580 = state_16084;
(statearr_16410_18580[(1)] = cljs.core.first((state_16084[(4)])));

} else {
throw ex__14719__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18581 = state_16084;
state_16084 = G__18581;
continue;
} else {
return ret_value__14717__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14716__auto__ = function(state_16084){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14716__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14716__auto____1.call(this,state_16084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14716__auto____0;
cljs$core$async$mult_$_state_machine__14716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14716__auto____1;
return cljs$core$async$mult_$_state_machine__14716__auto__;
})()
})();
var state__14886__auto__ = (function (){var statearr_16415 = f__14885__auto__();
(statearr_16415[(6)] = c__14884__auto___18495);

return statearr_16415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14886__auto__);
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
var G__16419 = arguments.length;
switch (G__16419) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_18586 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_18586(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18590 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_18590(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18591 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18591(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18598 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_18598(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18603 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18603(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18613 = arguments.length;
var i__5727__auto___18617 = (0);
while(true){
if((i__5727__auto___18617 < len__5726__auto___18613)){
args__5732__auto__.push((arguments[i__5727__auto___18617]));

var G__18621 = (i__5727__auto___18617 + (1));
i__5727__auto___18617 = G__18621;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16444){
var map__16445 = p__16444;
var map__16445__$1 = cljs.core.__destructure_map(map__16445);
var opts = map__16445__$1;
var statearr_16447_18625 = state;
(statearr_16447_18625[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16453_18626 = state;
(statearr_16453_18626[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16454_18627 = state;
(statearr_16454_18627[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16440){
var G__16441 = cljs.core.first(seq16440);
var seq16440__$1 = cljs.core.next(seq16440);
var G__16442 = cljs.core.first(seq16440__$1);
var seq16440__$2 = cljs.core.next(seq16440__$1);
var G__16443 = cljs.core.first(seq16440__$2);
var seq16440__$3 = cljs.core.next(seq16440__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16441,G__16442,G__16443,seq16440__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16463 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16464){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16464 = meta16464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16465,meta16464__$1){
var self__ = this;
var _16465__$1 = this;
return (new cljs.core.async.t_cljs$core$async16463(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16464__$1));
}));

(cljs.core.async.t_cljs$core$async16463.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16465){
var self__ = this;
var _16465__$1 = this;
return self__.meta16464;
}));

(cljs.core.async.t_cljs$core$async16463.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16463.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16463.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16463.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16463.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16463.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16463.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16463.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16463.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16464","meta16464",1696319556,null)], null);
}));

(cljs.core.async.t_cljs$core$async16463.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16463.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16463");

(cljs.core.async.t_cljs$core$async16463.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16463");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16463.
 */
cljs.core.async.__GT_t_cljs$core$async16463 = (function cljs$core$async$__GT_t_cljs$core$async16463(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16464){
return (new cljs.core.async.t_cljs$core$async16463(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16464));
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
var m = (new cljs.core.async.t_cljs$core$async16463(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14884__auto___18655 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14885__auto__ = (function (){var switch__14715__auto__ = (function (state_16590){
var state_val_16591 = (state_16590[(1)]);
if((state_val_16591 === (7))){
var inst_16545 = (state_16590[(2)]);
var state_16590__$1 = state_16590;
if(cljs.core.truth_(inst_16545)){
var statearr_16594_18657 = state_16590__$1;
(statearr_16594_18657[(1)] = (8));

} else {
var statearr_16595_18658 = state_16590__$1;
(statearr_16595_18658[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (20))){
var inst_16537 = (state_16590[(7)]);
var state_16590__$1 = state_16590;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16590__$1,(23),out,inst_16537);
} else {
if((state_val_16591 === (1))){
var inst_16519 = calc_state();
var inst_16520 = cljs.core.__destructure_map(inst_16519);
var inst_16521 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16520,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16522 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16520,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16523 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16520,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16524 = inst_16519;
var state_16590__$1 = (function (){var statearr_16597 = state_16590;
(statearr_16597[(8)] = inst_16524);

(statearr_16597[(9)] = inst_16521);

(statearr_16597[(10)] = inst_16523);

(statearr_16597[(11)] = inst_16522);

return statearr_16597;
})();
var statearr_16599_18659 = state_16590__$1;
(statearr_16599_18659[(2)] = null);

(statearr_16599_18659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (24))){
var inst_16527 = (state_16590[(12)]);
var inst_16524 = inst_16527;
var state_16590__$1 = (function (){var statearr_16602 = state_16590;
(statearr_16602[(8)] = inst_16524);

return statearr_16602;
})();
var statearr_16605_18660 = state_16590__$1;
(statearr_16605_18660[(2)] = null);

(statearr_16605_18660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (4))){
var inst_16539 = (state_16590[(13)]);
var inst_16537 = (state_16590[(7)]);
var inst_16536 = (state_16590[(2)]);
var inst_16537__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16536,(0),null);
var inst_16538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16536,(1),null);
var inst_16539__$1 = (inst_16537__$1 == null);
var state_16590__$1 = (function (){var statearr_16609 = state_16590;
(statearr_16609[(14)] = inst_16538);

(statearr_16609[(13)] = inst_16539__$1);

(statearr_16609[(7)] = inst_16537__$1);

return statearr_16609;
})();
if(cljs.core.truth_(inst_16539__$1)){
var statearr_16610_18661 = state_16590__$1;
(statearr_16610_18661[(1)] = (5));

} else {
var statearr_16611_18662 = state_16590__$1;
(statearr_16611_18662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (15))){
var inst_16560 = (state_16590[(15)]);
var inst_16528 = (state_16590[(16)]);
var inst_16560__$1 = cljs.core.empty_QMARK_(inst_16528);
var state_16590__$1 = (function (){var statearr_16619 = state_16590;
(statearr_16619[(15)] = inst_16560__$1);

return statearr_16619;
})();
if(inst_16560__$1){
var statearr_16624_18663 = state_16590__$1;
(statearr_16624_18663[(1)] = (17));

} else {
var statearr_16626_18664 = state_16590__$1;
(statearr_16626_18664[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (21))){
var inst_16527 = (state_16590[(12)]);
var inst_16524 = inst_16527;
var state_16590__$1 = (function (){var statearr_16637 = state_16590;
(statearr_16637[(8)] = inst_16524);

return statearr_16637;
})();
var statearr_16638_18665 = state_16590__$1;
(statearr_16638_18665[(2)] = null);

(statearr_16638_18665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (13))){
var inst_16552 = (state_16590[(2)]);
var inst_16553 = calc_state();
var inst_16524 = inst_16553;
var state_16590__$1 = (function (){var statearr_16639 = state_16590;
(statearr_16639[(17)] = inst_16552);

(statearr_16639[(8)] = inst_16524);

return statearr_16639;
})();
var statearr_16640_18666 = state_16590__$1;
(statearr_16640_18666[(2)] = null);

(statearr_16640_18666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (22))){
var inst_16580 = (state_16590[(2)]);
var state_16590__$1 = state_16590;
var statearr_16641_18667 = state_16590__$1;
(statearr_16641_18667[(2)] = inst_16580);

(statearr_16641_18667[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (6))){
var inst_16538 = (state_16590[(14)]);
var inst_16543 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16538,change);
var state_16590__$1 = state_16590;
var statearr_16647_18668 = state_16590__$1;
(statearr_16647_18668[(2)] = inst_16543);

(statearr_16647_18668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (25))){
var state_16590__$1 = state_16590;
var statearr_16648_18673 = state_16590__$1;
(statearr_16648_18673[(2)] = null);

(statearr_16648_18673[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (17))){
var inst_16529 = (state_16590[(18)]);
var inst_16538 = (state_16590[(14)]);
var inst_16562 = (inst_16529.cljs$core$IFn$_invoke$arity$1 ? inst_16529.cljs$core$IFn$_invoke$arity$1(inst_16538) : inst_16529.call(null,inst_16538));
var inst_16563 = cljs.core.not(inst_16562);
var state_16590__$1 = state_16590;
var statearr_16653_18677 = state_16590__$1;
(statearr_16653_18677[(2)] = inst_16563);

(statearr_16653_18677[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (3))){
var inst_16584 = (state_16590[(2)]);
var state_16590__$1 = state_16590;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16590__$1,inst_16584);
} else {
if((state_val_16591 === (12))){
var state_16590__$1 = state_16590;
var statearr_16655_18678 = state_16590__$1;
(statearr_16655_18678[(2)] = null);

(statearr_16655_18678[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (2))){
var inst_16527 = (state_16590[(12)]);
var inst_16524 = (state_16590[(8)]);
var inst_16527__$1 = cljs.core.__destructure_map(inst_16524);
var inst_16528 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16527__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16529 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16527__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16530 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16527__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16590__$1 = (function (){var statearr_16656 = state_16590;
(statearr_16656[(18)] = inst_16529);

(statearr_16656[(16)] = inst_16528);

(statearr_16656[(12)] = inst_16527__$1);

return statearr_16656;
})();
return cljs.core.async.ioc_alts_BANG_(state_16590__$1,(4),inst_16530);
} else {
if((state_val_16591 === (23))){
var inst_16571 = (state_16590[(2)]);
var state_16590__$1 = state_16590;
if(cljs.core.truth_(inst_16571)){
var statearr_16658_18679 = state_16590__$1;
(statearr_16658_18679[(1)] = (24));

} else {
var statearr_16659_18680 = state_16590__$1;
(statearr_16659_18680[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (19))){
var inst_16566 = (state_16590[(2)]);
var state_16590__$1 = state_16590;
var statearr_16660_18681 = state_16590__$1;
(statearr_16660_18681[(2)] = inst_16566);

(statearr_16660_18681[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (11))){
var inst_16538 = (state_16590[(14)]);
var inst_16549 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16538);
var state_16590__$1 = state_16590;
var statearr_16661_18682 = state_16590__$1;
(statearr_16661_18682[(2)] = inst_16549);

(statearr_16661_18682[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (9))){
var inst_16528 = (state_16590[(16)]);
var inst_16538 = (state_16590[(14)]);
var inst_16556 = (state_16590[(19)]);
var inst_16556__$1 = (inst_16528.cljs$core$IFn$_invoke$arity$1 ? inst_16528.cljs$core$IFn$_invoke$arity$1(inst_16538) : inst_16528.call(null,inst_16538));
var state_16590__$1 = (function (){var statearr_16662 = state_16590;
(statearr_16662[(19)] = inst_16556__$1);

return statearr_16662;
})();
if(cljs.core.truth_(inst_16556__$1)){
var statearr_16663_18683 = state_16590__$1;
(statearr_16663_18683[(1)] = (14));

} else {
var statearr_16664_18684 = state_16590__$1;
(statearr_16664_18684[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (5))){
var inst_16539 = (state_16590[(13)]);
var state_16590__$1 = state_16590;
var statearr_16666_18685 = state_16590__$1;
(statearr_16666_18685[(2)] = inst_16539);

(statearr_16666_18685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (14))){
var inst_16556 = (state_16590[(19)]);
var state_16590__$1 = state_16590;
var statearr_16671_18686 = state_16590__$1;
(statearr_16671_18686[(2)] = inst_16556);

(statearr_16671_18686[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (26))){
var inst_16576 = (state_16590[(2)]);
var state_16590__$1 = state_16590;
var statearr_16673_18687 = state_16590__$1;
(statearr_16673_18687[(2)] = inst_16576);

(statearr_16673_18687[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (16))){
var inst_16568 = (state_16590[(2)]);
var state_16590__$1 = state_16590;
if(cljs.core.truth_(inst_16568)){
var statearr_16676_18689 = state_16590__$1;
(statearr_16676_18689[(1)] = (20));

} else {
var statearr_16681_18690 = state_16590__$1;
(statearr_16681_18690[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (10))){
var inst_16582 = (state_16590[(2)]);
var state_16590__$1 = state_16590;
var statearr_16683_18691 = state_16590__$1;
(statearr_16683_18691[(2)] = inst_16582);

(statearr_16683_18691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (18))){
var inst_16560 = (state_16590[(15)]);
var state_16590__$1 = state_16590;
var statearr_16691_18692 = state_16590__$1;
(statearr_16691_18692[(2)] = inst_16560);

(statearr_16691_18692[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16591 === (8))){
var inst_16537 = (state_16590[(7)]);
var inst_16547 = (inst_16537 == null);
var state_16590__$1 = state_16590;
if(cljs.core.truth_(inst_16547)){
var statearr_16696_18693 = state_16590__$1;
(statearr_16696_18693[(1)] = (11));

} else {
var statearr_16697_18697 = state_16590__$1;
(statearr_16697_18697[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__14716__auto__ = null;
var cljs$core$async$mix_$_state_machine__14716__auto____0 = (function (){
var statearr_16709 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16709[(0)] = cljs$core$async$mix_$_state_machine__14716__auto__);

(statearr_16709[(1)] = (1));

return statearr_16709;
});
var cljs$core$async$mix_$_state_machine__14716__auto____1 = (function (state_16590){
while(true){
var ret_value__14717__auto__ = (function (){try{while(true){
var result__14718__auto__ = switch__14715__auto__(state_16590);
if(cljs.core.keyword_identical_QMARK_(result__14718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14718__auto__;
}
break;
}
}catch (e16710){var ex__14719__auto__ = e16710;
var statearr_16711_18699 = state_16590;
(statearr_16711_18699[(2)] = ex__14719__auto__);


if(cljs.core.seq((state_16590[(4)]))){
var statearr_16712_18700 = state_16590;
(statearr_16712_18700[(1)] = cljs.core.first((state_16590[(4)])));

} else {
throw ex__14719__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18702 = state_16590;
state_16590 = G__18702;
continue;
} else {
return ret_value__14717__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14716__auto__ = function(state_16590){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14716__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14716__auto____1.call(this,state_16590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14716__auto____0;
cljs$core$async$mix_$_state_machine__14716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14716__auto____1;
return cljs$core$async$mix_$_state_machine__14716__auto__;
})()
})();
var state__14886__auto__ = (function (){var statearr_16715 = f__14885__auto__();
(statearr_16715[(6)] = c__14884__auto___18655);

return statearr_16715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14886__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_18703 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_18703(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18704 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_18704(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18709 = (function() {
var G__18710 = null;
var G__18710__1 = (function (p){
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
var G__18710__2 = (function (p,v){
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
G__18710 = function(p,v){
switch(arguments.length){
case 1:
return G__18710__1.call(this,p);
case 2:
return G__18710__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18710.cljs$core$IFn$_invoke$arity$1 = G__18710__1;
G__18710.cljs$core$IFn$_invoke$arity$2 = G__18710__2;
return G__18710;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16740 = arguments.length;
switch (G__16740) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18709(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18709(p,v);
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
cljs.core.async.t_cljs$core$async16773 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16774){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16774 = meta16774;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16775,meta16774__$1){
var self__ = this;
var _16775__$1 = this;
return (new cljs.core.async.t_cljs$core$async16773(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16774__$1));
}));

(cljs.core.async.t_cljs$core$async16773.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16775){
var self__ = this;
var _16775__$1 = this;
return self__.meta16774;
}));

(cljs.core.async.t_cljs$core$async16773.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16773.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16773.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16773.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16773.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async16773.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16773.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16773.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16774","meta16774",-212039802,null)], null);
}));

(cljs.core.async.t_cljs$core$async16773.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16773.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16773");

(cljs.core.async.t_cljs$core$async16773.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16773");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16773.
 */
cljs.core.async.__GT_t_cljs$core$async16773 = (function cljs$core$async$__GT_t_cljs$core$async16773(ch,topic_fn,buf_fn,mults,ensure_mult,meta16774){
return (new cljs.core.async.t_cljs$core$async16773(ch,topic_fn,buf_fn,mults,ensure_mult,meta16774));
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
var G__16764 = arguments.length;
switch (G__16764) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16756_SHARP_){
if(cljs.core.truth_((p1__16756_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16756_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16756_SHARP_.call(null,topic)))){
return p1__16756_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16756_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16773(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14884__auto___18731 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14885__auto__ = (function (){var switch__14715__auto__ = (function (state_16871){
var state_val_16873 = (state_16871[(1)]);
if((state_val_16873 === (7))){
var inst_16859 = (state_16871[(2)]);
var state_16871__$1 = state_16871;
var statearr_16894_18732 = state_16871__$1;
(statearr_16894_18732[(2)] = inst_16859);

(statearr_16894_18732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16873 === (20))){
var state_16871__$1 = state_16871;
var statearr_16897_18736 = state_16871__$1;
(statearr_16897_18736[(2)] = null);

(statearr_16897_18736[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16873 === (1))){
var state_16871__$1 = state_16871;
var statearr_16902_18737 = state_16871__$1;
(statearr_16902_18737[(2)] = null);

(statearr_16902_18737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16873 === (24))){
var inst_16842 = (state_16871[(7)]);
var inst_16851 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16842);
var state_16871__$1 = state_16871;
var statearr_16903_18738 = state_16871__$1;
(statearr_16903_18738[(2)] = inst_16851);

(statearr_16903_18738[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16873 === (4))){
var inst_16786 = (state_16871[(8)]);
var inst_16786__$1 = (state_16871[(2)]);
var inst_16788 = (inst_16786__$1 == null);
var state_16871__$1 = (function (){var statearr_16904 = state_16871;
(statearr_16904[(8)] = inst_16786__$1);

return statearr_16904;
})();
if(cljs.core.truth_(inst_16788)){
var statearr_16905_18739 = state_16871__$1;
(statearr_16905_18739[(1)] = (5));

} else {
var statearr_16907_18740 = state_16871__$1;
(statearr_16907_18740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16873 === (15))){
var inst_16836 = (state_16871[(2)]);
var state_16871__$1 = state_16871;
var statearr_16908_18745 = state_16871__$1;
(statearr_16908_18745[(2)] = inst_16836);

(statearr_16908_18745[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16873 === (21))){
var inst_16856 = (state_16871[(2)]);
var state_16871__$1 = (function (){var statearr_16909 = state_16871;
(statearr_16909[(9)] = inst_16856);

return statearr_16909;
})();
var statearr_16910_18746 = state_16871__$1;
(statearr_16910_18746[(2)] = null);

(statearr_16910_18746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16873 === (13))){
var inst_16817 = (state_16871[(10)]);
var inst_16819 = cljs.core.chunked_seq_QMARK_(inst_16817);
var state_16871__$1 = state_16871;
if(inst_16819){
var statearr_16913_18747 = state_16871__$1;
(statearr_16913_18747[(1)] = (16));

} else {
var statearr_16914_18749 = state_16871__$1;
(statearr_16914_18749[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16873 === (22))){
var inst_16848 = (state_16871[(2)]);
var state_16871__$1 = state_16871;
if(cljs.core.truth_(inst_16848)){
var statearr_16916_18750 = state_16871__$1;
(statearr_16916_18750[(1)] = (23));

} else {
var statearr_16917_18751 = state_16871__$1;
(statearr_16917_18751[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16873 === (6))){
var inst_16842 = (state_16871[(7)]);
var inst_16844 = (state_16871[(11)]);
var inst_16786 = (state_16871[(8)]);
var inst_16842__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16786) : topic_fn.call(null,inst_16786));
var inst_16843 = cljs.core.deref(mults);
var inst_16844__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16843,inst_16842__$1);
var state_16871__$1 = (function (){var statearr_16923 = state_16871;
(statearr_16923[(7)] = inst_16842__$1);

(statearr_16923[(11)] = inst_16844__$1);

return statearr_16923;
})();
if(cljs.core.truth_(inst_16844__$1)){
var statearr_16926_18752 = state_16871__$1;
(statearr_16926_18752[(1)] = (19));

} else {
var statearr_16927_18753 = state_16871__$1;
(statearr_16927_18753[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16873 === (25))){
var inst_16853 = (state_16871[(2)]);
var state_16871__$1 = state_16871;
var statearr_16929_18754 = state_16871__$1;
(statearr_16929_18754[(2)] = inst_16853);

(statearr_16929_18754[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16873 === (17))){
var inst_16817 = (state_16871[(10)]);
var inst_16827 = cljs.core.first(inst_16817);
var inst_16828 = cljs.core.async.muxch_STAR_(inst_16827);
var inst_16829 = cljs.core.async.close_BANG_(inst_16828);
var inst_16830 = cljs.core.next(inst_16817);
var inst_16799 = inst_16830;
var inst_16800 = null;
var inst_16801 = (0);
var inst_16802 = (0);
var state_16871__$1 = (function (){var statearr_16931 = state_16871;
(statearr_16931[(12)] = inst_16829);

(statearr_16931[(13)] = inst_16799);

(statearr_16931[(14)] = inst_16802);

(statearr_16931[(15)] = inst_16800);

(statearr_16931[(16)] = inst_16801);

return statearr_16931;
})();
var statearr_16935_18761 = state_16871__$1;
(statearr_16935_18761[(2)] = null);

(statearr_16935_18761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16873 === (3))){
var inst_16861 = (state_16871[(2)]);
var state_16871__$1 = state_16871;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16871__$1,inst_16861);
} else {
if((state_val_16873 === (12))){
var inst_16838 = (state_16871[(2)]);
var state_16871__$1 = state_16871;
var statearr_16939_18769 = state_16871__$1;
(statearr_16939_18769[(2)] = inst_16838);

(statearr_16939_18769[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16873 === (2))){
var state_16871__$1 = state_16871;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16871__$1,(4),ch);
} else {
if((state_val_16873 === (23))){
var state_16871__$1 = state_16871;
var statearr_16943_18791 = state_16871__$1;
(statearr_16943_18791[(2)] = null);

(statearr_16943_18791[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16873 === (19))){
var inst_16844 = (state_16871[(11)]);
var inst_16786 = (state_16871[(8)]);
var inst_16846 = cljs.core.async.muxch_STAR_(inst_16844);
var state_16871__$1 = state_16871;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16871__$1,(22),inst_16846,inst_16786);
} else {
if((state_val_16873 === (11))){
var inst_16799 = (state_16871[(13)]);
var inst_16817 = (state_16871[(10)]);
var inst_16817__$1 = cljs.core.seq(inst_16799);
var state_16871__$1 = (function (){var statearr_16945 = state_16871;
(statearr_16945[(10)] = inst_16817__$1);

return statearr_16945;
})();
if(inst_16817__$1){
var statearr_16948_18805 = state_16871__$1;
(statearr_16948_18805[(1)] = (13));

} else {
var statearr_16950_18818 = state_16871__$1;
(statearr_16950_18818[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16873 === (9))){
var inst_16840 = (state_16871[(2)]);
var state_16871__$1 = state_16871;
var statearr_16951_18819 = state_16871__$1;
(statearr_16951_18819[(2)] = inst_16840);

(statearr_16951_18819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16873 === (5))){
var inst_16796 = cljs.core.deref(mults);
var inst_16797 = cljs.core.vals(inst_16796);
var inst_16798 = cljs.core.seq(inst_16797);
var inst_16799 = inst_16798;
var inst_16800 = null;
var inst_16801 = (0);
var inst_16802 = (0);
var state_16871__$1 = (function (){var statearr_16954 = state_16871;
(statearr_16954[(13)] = inst_16799);

(statearr_16954[(14)] = inst_16802);

(statearr_16954[(15)] = inst_16800);

(statearr_16954[(16)] = inst_16801);

return statearr_16954;
})();
var statearr_16955_18820 = state_16871__$1;
(statearr_16955_18820[(2)] = null);

(statearr_16955_18820[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16873 === (14))){
var state_16871__$1 = state_16871;
var statearr_16963_18821 = state_16871__$1;
(statearr_16963_18821[(2)] = null);

(statearr_16963_18821[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16873 === (16))){
var inst_16817 = (state_16871[(10)]);
var inst_16821 = cljs.core.chunk_first(inst_16817);
var inst_16823 = cljs.core.chunk_rest(inst_16817);
var inst_16824 = cljs.core.count(inst_16821);
var inst_16799 = inst_16823;
var inst_16800 = inst_16821;
var inst_16801 = inst_16824;
var inst_16802 = (0);
var state_16871__$1 = (function (){var statearr_16965 = state_16871;
(statearr_16965[(13)] = inst_16799);

(statearr_16965[(14)] = inst_16802);

(statearr_16965[(15)] = inst_16800);

(statearr_16965[(16)] = inst_16801);

return statearr_16965;
})();
var statearr_16968_18822 = state_16871__$1;
(statearr_16968_18822[(2)] = null);

(statearr_16968_18822[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16873 === (10))){
var inst_16799 = (state_16871[(13)]);
var inst_16802 = (state_16871[(14)]);
var inst_16800 = (state_16871[(15)]);
var inst_16801 = (state_16871[(16)]);
var inst_16811 = cljs.core._nth(inst_16800,inst_16802);
var inst_16812 = cljs.core.async.muxch_STAR_(inst_16811);
var inst_16813 = cljs.core.async.close_BANG_(inst_16812);
var inst_16814 = (inst_16802 + (1));
var tmp16958 = inst_16799;
var tmp16959 = inst_16800;
var tmp16960 = inst_16801;
var inst_16799__$1 = tmp16958;
var inst_16800__$1 = tmp16959;
var inst_16801__$1 = tmp16960;
var inst_16802__$1 = inst_16814;
var state_16871__$1 = (function (){var statearr_16971 = state_16871;
(statearr_16971[(13)] = inst_16799__$1);

(statearr_16971[(14)] = inst_16802__$1);

(statearr_16971[(15)] = inst_16800__$1);

(statearr_16971[(16)] = inst_16801__$1);

(statearr_16971[(17)] = inst_16813);

return statearr_16971;
})();
var statearr_16975_18823 = state_16871__$1;
(statearr_16975_18823[(2)] = null);

(statearr_16975_18823[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16873 === (18))){
var inst_16833 = (state_16871[(2)]);
var state_16871__$1 = state_16871;
var statearr_16976_18824 = state_16871__$1;
(statearr_16976_18824[(2)] = inst_16833);

(statearr_16976_18824[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16873 === (8))){
var inst_16802 = (state_16871[(14)]);
var inst_16801 = (state_16871[(16)]);
var inst_16805 = (inst_16802 < inst_16801);
var inst_16806 = inst_16805;
var state_16871__$1 = state_16871;
if(cljs.core.truth_(inst_16806)){
var statearr_16978_18825 = state_16871__$1;
(statearr_16978_18825[(1)] = (10));

} else {
var statearr_16979_18826 = state_16871__$1;
(statearr_16979_18826[(1)] = (11));

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
var cljs$core$async$state_machine__14716__auto__ = null;
var cljs$core$async$state_machine__14716__auto____0 = (function (){
var statearr_16984 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16984[(0)] = cljs$core$async$state_machine__14716__auto__);

(statearr_16984[(1)] = (1));

return statearr_16984;
});
var cljs$core$async$state_machine__14716__auto____1 = (function (state_16871){
while(true){
var ret_value__14717__auto__ = (function (){try{while(true){
var result__14718__auto__ = switch__14715__auto__(state_16871);
if(cljs.core.keyword_identical_QMARK_(result__14718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14718__auto__;
}
break;
}
}catch (e16986){var ex__14719__auto__ = e16986;
var statearr_16988_18827 = state_16871;
(statearr_16988_18827[(2)] = ex__14719__auto__);


if(cljs.core.seq((state_16871[(4)]))){
var statearr_16991_18828 = state_16871;
(statearr_16991_18828[(1)] = cljs.core.first((state_16871[(4)])));

} else {
throw ex__14719__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18829 = state_16871;
state_16871 = G__18829;
continue;
} else {
return ret_value__14717__auto__;
}
break;
}
});
cljs$core$async$state_machine__14716__auto__ = function(state_16871){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14716__auto____1.call(this,state_16871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14716__auto____0;
cljs$core$async$state_machine__14716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14716__auto____1;
return cljs$core$async$state_machine__14716__auto__;
})()
})();
var state__14886__auto__ = (function (){var statearr_16994 = f__14885__auto__();
(statearr_16994[(6)] = c__14884__auto___18731);

return statearr_16994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14886__auto__);
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
var G__17000 = arguments.length;
switch (G__17000) {
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
var G__17007 = arguments.length;
switch (G__17007) {
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
var G__17014 = arguments.length;
switch (G__17014) {
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
var c__14884__auto___18837 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14885__auto__ = (function (){var switch__14715__auto__ = (function (state_17086){
var state_val_17087 = (state_17086[(1)]);
if((state_val_17087 === (7))){
var state_17086__$1 = state_17086;
var statearr_17093_18838 = state_17086__$1;
(statearr_17093_18838[(2)] = null);

(statearr_17093_18838[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (1))){
var state_17086__$1 = state_17086;
var statearr_17094_18839 = state_17086__$1;
(statearr_17094_18839[(2)] = null);

(statearr_17094_18839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (4))){
var inst_17023 = (state_17086[(7)]);
var inst_17024 = (state_17086[(8)]);
var inst_17026 = (inst_17024 < inst_17023);
var state_17086__$1 = state_17086;
if(cljs.core.truth_(inst_17026)){
var statearr_17095_18841 = state_17086__$1;
(statearr_17095_18841[(1)] = (6));

} else {
var statearr_17096_18842 = state_17086__$1;
(statearr_17096_18842[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (15))){
var inst_17067 = (state_17086[(9)]);
var inst_17073 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17067);
var state_17086__$1 = state_17086;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17086__$1,(17),out,inst_17073);
} else {
if((state_val_17087 === (13))){
var inst_17067 = (state_17086[(9)]);
var inst_17067__$1 = (state_17086[(2)]);
var inst_17069 = cljs.core.some(cljs.core.nil_QMARK_,inst_17067__$1);
var state_17086__$1 = (function (){var statearr_17097 = state_17086;
(statearr_17097[(9)] = inst_17067__$1);

return statearr_17097;
})();
if(cljs.core.truth_(inst_17069)){
var statearr_17098_18859 = state_17086__$1;
(statearr_17098_18859[(1)] = (14));

} else {
var statearr_17099_18860 = state_17086__$1;
(statearr_17099_18860[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (6))){
var state_17086__$1 = state_17086;
var statearr_17100_18861 = state_17086__$1;
(statearr_17100_18861[(2)] = null);

(statearr_17100_18861[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (17))){
var inst_17075 = (state_17086[(2)]);
var state_17086__$1 = (function (){var statearr_17122 = state_17086;
(statearr_17122[(10)] = inst_17075);

return statearr_17122;
})();
var statearr_17124_18862 = state_17086__$1;
(statearr_17124_18862[(2)] = null);

(statearr_17124_18862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (3))){
var inst_17081 = (state_17086[(2)]);
var state_17086__$1 = state_17086;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17086__$1,inst_17081);
} else {
if((state_val_17087 === (12))){
var _ = (function (){var statearr_17139 = state_17086;
(statearr_17139[(4)] = cljs.core.rest((state_17086[(4)])));

return statearr_17139;
})();
var state_17086__$1 = state_17086;
var ex17117 = (state_17086__$1[(2)]);
var statearr_17147_18863 = state_17086__$1;
(statearr_17147_18863[(5)] = ex17117);


if((ex17117 instanceof Object)){
var statearr_17150_18864 = state_17086__$1;
(statearr_17150_18864[(1)] = (11));

(statearr_17150_18864[(5)] = null);

} else {
throw ex17117;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (2))){
var inst_17022 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17023 = cnt;
var inst_17024 = (0);
var state_17086__$1 = (function (){var statearr_17158 = state_17086;
(statearr_17158[(11)] = inst_17022);

(statearr_17158[(7)] = inst_17023);

(statearr_17158[(8)] = inst_17024);

return statearr_17158;
})();
var statearr_17159_18865 = state_17086__$1;
(statearr_17159_18865[(2)] = null);

(statearr_17159_18865[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (11))){
var inst_17032 = (state_17086[(2)]);
var inst_17035 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17086__$1 = (function (){var statearr_17163 = state_17086;
(statearr_17163[(12)] = inst_17032);

return statearr_17163;
})();
var statearr_17164_18867 = state_17086__$1;
(statearr_17164_18867[(2)] = inst_17035);

(statearr_17164_18867[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (9))){
var inst_17024 = (state_17086[(8)]);
var _ = (function (){var statearr_17165 = state_17086;
(statearr_17165[(4)] = cljs.core.cons((12),(state_17086[(4)])));

return statearr_17165;
})();
var inst_17043 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17024) : chs__$1.call(null,inst_17024));
var inst_17044 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17024) : done.call(null,inst_17024));
var inst_17045 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17043,inst_17044);
var ___$1 = (function (){var statearr_17166 = state_17086;
(statearr_17166[(4)] = cljs.core.rest((state_17086[(4)])));

return statearr_17166;
})();
var state_17086__$1 = state_17086;
var statearr_17167_18877 = state_17086__$1;
(statearr_17167_18877[(2)] = inst_17045);

(statearr_17167_18877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (5))){
var inst_17055 = (state_17086[(2)]);
var state_17086__$1 = (function (){var statearr_17168 = state_17086;
(statearr_17168[(13)] = inst_17055);

return statearr_17168;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17086__$1,(13),dchan);
} else {
if((state_val_17087 === (14))){
var inst_17071 = cljs.core.async.close_BANG_(out);
var state_17086__$1 = state_17086;
var statearr_17169_18880 = state_17086__$1;
(statearr_17169_18880[(2)] = inst_17071);

(statearr_17169_18880[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (16))){
var inst_17078 = (state_17086[(2)]);
var state_17086__$1 = state_17086;
var statearr_17170_18881 = state_17086__$1;
(statearr_17170_18881[(2)] = inst_17078);

(statearr_17170_18881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (10))){
var inst_17024 = (state_17086[(8)]);
var inst_17048 = (state_17086[(2)]);
var inst_17049 = (inst_17024 + (1));
var inst_17024__$1 = inst_17049;
var state_17086__$1 = (function (){var statearr_17171 = state_17086;
(statearr_17171[(8)] = inst_17024__$1);

(statearr_17171[(14)] = inst_17048);

return statearr_17171;
})();
var statearr_17172_18882 = state_17086__$1;
(statearr_17172_18882[(2)] = null);

(statearr_17172_18882[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17087 === (8))){
var inst_17053 = (state_17086[(2)]);
var state_17086__$1 = state_17086;
var statearr_17177_18883 = state_17086__$1;
(statearr_17177_18883[(2)] = inst_17053);

(statearr_17177_18883[(1)] = (5));


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
var cljs$core$async$state_machine__14716__auto__ = null;
var cljs$core$async$state_machine__14716__auto____0 = (function (){
var statearr_17178 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17178[(0)] = cljs$core$async$state_machine__14716__auto__);

(statearr_17178[(1)] = (1));

return statearr_17178;
});
var cljs$core$async$state_machine__14716__auto____1 = (function (state_17086){
while(true){
var ret_value__14717__auto__ = (function (){try{while(true){
var result__14718__auto__ = switch__14715__auto__(state_17086);
if(cljs.core.keyword_identical_QMARK_(result__14718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14718__auto__;
}
break;
}
}catch (e17182){var ex__14719__auto__ = e17182;
var statearr_17183_18885 = state_17086;
(statearr_17183_18885[(2)] = ex__14719__auto__);


if(cljs.core.seq((state_17086[(4)]))){
var statearr_17184_18886 = state_17086;
(statearr_17184_18886[(1)] = cljs.core.first((state_17086[(4)])));

} else {
throw ex__14719__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18887 = state_17086;
state_17086 = G__18887;
continue;
} else {
return ret_value__14717__auto__;
}
break;
}
});
cljs$core$async$state_machine__14716__auto__ = function(state_17086){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14716__auto____1.call(this,state_17086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14716__auto____0;
cljs$core$async$state_machine__14716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14716__auto____1;
return cljs$core$async$state_machine__14716__auto__;
})()
})();
var state__14886__auto__ = (function (){var statearr_17190 = f__14885__auto__();
(statearr_17190[(6)] = c__14884__auto___18837);

return statearr_17190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14886__auto__);
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
var G__17193 = arguments.length;
switch (G__17193) {
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
var c__14884__auto___18891 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14885__auto__ = (function (){var switch__14715__auto__ = (function (state_17236){
var state_val_17237 = (state_17236[(1)]);
if((state_val_17237 === (7))){
var inst_17211 = (state_17236[(7)]);
var inst_17212 = (state_17236[(8)]);
var inst_17211__$1 = (state_17236[(2)]);
var inst_17212__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17211__$1,(0),null);
var inst_17214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17211__$1,(1),null);
var inst_17215 = (inst_17212__$1 == null);
var state_17236__$1 = (function (){var statearr_17300 = state_17236;
(statearr_17300[(9)] = inst_17214);

(statearr_17300[(7)] = inst_17211__$1);

(statearr_17300[(8)] = inst_17212__$1);

return statearr_17300;
})();
if(cljs.core.truth_(inst_17215)){
var statearr_17305_18897 = state_17236__$1;
(statearr_17305_18897[(1)] = (8));

} else {
var statearr_17323_18898 = state_17236__$1;
(statearr_17323_18898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17237 === (1))){
var inst_17198 = cljs.core.vec(chs);
var inst_17199 = inst_17198;
var state_17236__$1 = (function (){var statearr_17324 = state_17236;
(statearr_17324[(10)] = inst_17199);

return statearr_17324;
})();
var statearr_17325_18899 = state_17236__$1;
(statearr_17325_18899[(2)] = null);

(statearr_17325_18899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17237 === (4))){
var inst_17199 = (state_17236[(10)]);
var state_17236__$1 = state_17236;
return cljs.core.async.ioc_alts_BANG_(state_17236__$1,(7),inst_17199);
} else {
if((state_val_17237 === (6))){
var inst_17229 = (state_17236[(2)]);
var state_17236__$1 = state_17236;
var statearr_17329_18900 = state_17236__$1;
(statearr_17329_18900[(2)] = inst_17229);

(statearr_17329_18900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17237 === (3))){
var inst_17231 = (state_17236[(2)]);
var state_17236__$1 = state_17236;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17236__$1,inst_17231);
} else {
if((state_val_17237 === (2))){
var inst_17199 = (state_17236[(10)]);
var inst_17201 = cljs.core.count(inst_17199);
var inst_17202 = (inst_17201 > (0));
var state_17236__$1 = state_17236;
if(cljs.core.truth_(inst_17202)){
var statearr_17332_18901 = state_17236__$1;
(statearr_17332_18901[(1)] = (4));

} else {
var statearr_17333_18902 = state_17236__$1;
(statearr_17333_18902[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17237 === (11))){
var inst_17199 = (state_17236[(10)]);
var inst_17222 = (state_17236[(2)]);
var tmp17330 = inst_17199;
var inst_17199__$1 = tmp17330;
var state_17236__$1 = (function (){var statearr_17337 = state_17236;
(statearr_17337[(11)] = inst_17222);

(statearr_17337[(10)] = inst_17199__$1);

return statearr_17337;
})();
var statearr_17338_18906 = state_17236__$1;
(statearr_17338_18906[(2)] = null);

(statearr_17338_18906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17237 === (9))){
var inst_17212 = (state_17236[(8)]);
var state_17236__$1 = state_17236;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17236__$1,(11),out,inst_17212);
} else {
if((state_val_17237 === (5))){
var inst_17227 = cljs.core.async.close_BANG_(out);
var state_17236__$1 = state_17236;
var statearr_17347_18907 = state_17236__$1;
(statearr_17347_18907[(2)] = inst_17227);

(statearr_17347_18907[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17237 === (10))){
var inst_17225 = (state_17236[(2)]);
var state_17236__$1 = state_17236;
var statearr_17348_18908 = state_17236__$1;
(statearr_17348_18908[(2)] = inst_17225);

(statearr_17348_18908[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17237 === (8))){
var inst_17214 = (state_17236[(9)]);
var inst_17199 = (state_17236[(10)]);
var inst_17211 = (state_17236[(7)]);
var inst_17212 = (state_17236[(8)]);
var inst_17217 = (function (){var cs = inst_17199;
var vec__17207 = inst_17211;
var v = inst_17212;
var c = inst_17214;
return (function (p1__17191_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17191_SHARP_);
});
})();
var inst_17218 = cljs.core.filterv(inst_17217,inst_17199);
var inst_17199__$1 = inst_17218;
var state_17236__$1 = (function (){var statearr_17349 = state_17236;
(statearr_17349[(10)] = inst_17199__$1);

return statearr_17349;
})();
var statearr_17350_18917 = state_17236__$1;
(statearr_17350_18917[(2)] = null);

(statearr_17350_18917[(1)] = (2));


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
var cljs$core$async$state_machine__14716__auto__ = null;
var cljs$core$async$state_machine__14716__auto____0 = (function (){
var statearr_17352 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17352[(0)] = cljs$core$async$state_machine__14716__auto__);

(statearr_17352[(1)] = (1));

return statearr_17352;
});
var cljs$core$async$state_machine__14716__auto____1 = (function (state_17236){
while(true){
var ret_value__14717__auto__ = (function (){try{while(true){
var result__14718__auto__ = switch__14715__auto__(state_17236);
if(cljs.core.keyword_identical_QMARK_(result__14718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14718__auto__;
}
break;
}
}catch (e17354){var ex__14719__auto__ = e17354;
var statearr_17355_18931 = state_17236;
(statearr_17355_18931[(2)] = ex__14719__auto__);


if(cljs.core.seq((state_17236[(4)]))){
var statearr_17356_18932 = state_17236;
(statearr_17356_18932[(1)] = cljs.core.first((state_17236[(4)])));

} else {
throw ex__14719__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18939 = state_17236;
state_17236 = G__18939;
continue;
} else {
return ret_value__14717__auto__;
}
break;
}
});
cljs$core$async$state_machine__14716__auto__ = function(state_17236){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14716__auto____1.call(this,state_17236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14716__auto____0;
cljs$core$async$state_machine__14716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14716__auto____1;
return cljs$core$async$state_machine__14716__auto__;
})()
})();
var state__14886__auto__ = (function (){var statearr_17357 = f__14885__auto__();
(statearr_17357[(6)] = c__14884__auto___18891);

return statearr_17357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14886__auto__);
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
var G__17362 = arguments.length;
switch (G__17362) {
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
var c__14884__auto___18962 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14885__auto__ = (function (){var switch__14715__auto__ = (function (state_17394){
var state_val_17395 = (state_17394[(1)]);
if((state_val_17395 === (7))){
var inst_17374 = (state_17394[(7)]);
var inst_17374__$1 = (state_17394[(2)]);
var inst_17377 = (inst_17374__$1 == null);
var inst_17378 = cljs.core.not(inst_17377);
var state_17394__$1 = (function (){var statearr_17401 = state_17394;
(statearr_17401[(7)] = inst_17374__$1);

return statearr_17401;
})();
if(inst_17378){
var statearr_17406_18964 = state_17394__$1;
(statearr_17406_18964[(1)] = (8));

} else {
var statearr_17407_18965 = state_17394__$1;
(statearr_17407_18965[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17395 === (1))){
var inst_17369 = (0);
var state_17394__$1 = (function (){var statearr_17413 = state_17394;
(statearr_17413[(8)] = inst_17369);

return statearr_17413;
})();
var statearr_17414_18966 = state_17394__$1;
(statearr_17414_18966[(2)] = null);

(statearr_17414_18966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17395 === (4))){
var state_17394__$1 = state_17394;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17394__$1,(7),ch);
} else {
if((state_val_17395 === (6))){
var inst_17389 = (state_17394[(2)]);
var state_17394__$1 = state_17394;
var statearr_17415_18970 = state_17394__$1;
(statearr_17415_18970[(2)] = inst_17389);

(statearr_17415_18970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17395 === (3))){
var inst_17391 = (state_17394[(2)]);
var inst_17392 = cljs.core.async.close_BANG_(out);
var state_17394__$1 = (function (){var statearr_17416 = state_17394;
(statearr_17416[(9)] = inst_17391);

return statearr_17416;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17394__$1,inst_17392);
} else {
if((state_val_17395 === (2))){
var inst_17369 = (state_17394[(8)]);
var inst_17371 = (inst_17369 < n);
var state_17394__$1 = state_17394;
if(cljs.core.truth_(inst_17371)){
var statearr_17417_18972 = state_17394__$1;
(statearr_17417_18972[(1)] = (4));

} else {
var statearr_17418_18973 = state_17394__$1;
(statearr_17418_18973[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17395 === (11))){
var inst_17369 = (state_17394[(8)]);
var inst_17381 = (state_17394[(2)]);
var inst_17382 = (inst_17369 + (1));
var inst_17369__$1 = inst_17382;
var state_17394__$1 = (function (){var statearr_17423 = state_17394;
(statearr_17423[(8)] = inst_17369__$1);

(statearr_17423[(10)] = inst_17381);

return statearr_17423;
})();
var statearr_17424_18975 = state_17394__$1;
(statearr_17424_18975[(2)] = null);

(statearr_17424_18975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17395 === (9))){
var state_17394__$1 = state_17394;
var statearr_17425_18978 = state_17394__$1;
(statearr_17425_18978[(2)] = null);

(statearr_17425_18978[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17395 === (5))){
var state_17394__$1 = state_17394;
var statearr_17426_18979 = state_17394__$1;
(statearr_17426_18979[(2)] = null);

(statearr_17426_18979[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17395 === (10))){
var inst_17386 = (state_17394[(2)]);
var state_17394__$1 = state_17394;
var statearr_17427_18980 = state_17394__$1;
(statearr_17427_18980[(2)] = inst_17386);

(statearr_17427_18980[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17395 === (8))){
var inst_17374 = (state_17394[(7)]);
var state_17394__$1 = state_17394;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17394__$1,(11),out,inst_17374);
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
var cljs$core$async$state_machine__14716__auto__ = null;
var cljs$core$async$state_machine__14716__auto____0 = (function (){
var statearr_17428 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17428[(0)] = cljs$core$async$state_machine__14716__auto__);

(statearr_17428[(1)] = (1));

return statearr_17428;
});
var cljs$core$async$state_machine__14716__auto____1 = (function (state_17394){
while(true){
var ret_value__14717__auto__ = (function (){try{while(true){
var result__14718__auto__ = switch__14715__auto__(state_17394);
if(cljs.core.keyword_identical_QMARK_(result__14718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14718__auto__;
}
break;
}
}catch (e17434){var ex__14719__auto__ = e17434;
var statearr_17435_18988 = state_17394;
(statearr_17435_18988[(2)] = ex__14719__auto__);


if(cljs.core.seq((state_17394[(4)]))){
var statearr_17436_18989 = state_17394;
(statearr_17436_18989[(1)] = cljs.core.first((state_17394[(4)])));

} else {
throw ex__14719__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18991 = state_17394;
state_17394 = G__18991;
continue;
} else {
return ret_value__14717__auto__;
}
break;
}
});
cljs$core$async$state_machine__14716__auto__ = function(state_17394){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14716__auto____1.call(this,state_17394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14716__auto____0;
cljs$core$async$state_machine__14716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14716__auto____1;
return cljs$core$async$state_machine__14716__auto__;
})()
})();
var state__14886__auto__ = (function (){var statearr_17437 = f__14885__auto__();
(statearr_17437[(6)] = c__14884__auto___18962);

return statearr_17437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14886__auto__);
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
cljs.core.async.t_cljs$core$async17466 = (function (f,ch,meta17441,_,fn1,meta17467){
this.f = f;
this.ch = ch;
this.meta17441 = meta17441;
this._ = _;
this.fn1 = fn1;
this.meta17467 = meta17467;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17468,meta17467__$1){
var self__ = this;
var _17468__$1 = this;
return (new cljs.core.async.t_cljs$core$async17466(self__.f,self__.ch,self__.meta17441,self__._,self__.fn1,meta17467__$1));
}));

(cljs.core.async.t_cljs$core$async17466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17468){
var self__ = this;
var _17468__$1 = this;
return self__.meta17467;
}));

(cljs.core.async.t_cljs$core$async17466.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17466.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17466.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17466.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17438_SHARP_){
var G__17491 = (((p1__17438_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17438_SHARP_) : self__.f.call(null,p1__17438_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17491) : f1.call(null,G__17491));
});
}));

(cljs.core.async.t_cljs$core$async17466.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17441","meta17441",319828858,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17440","cljs.core.async/t_cljs$core$async17440",-1354349909,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17467","meta17467",-1558825998,null)], null);
}));

(cljs.core.async.t_cljs$core$async17466.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17466.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17466");

(cljs.core.async.t_cljs$core$async17466.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17466");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17466.
 */
cljs.core.async.__GT_t_cljs$core$async17466 = (function cljs$core$async$__GT_t_cljs$core$async17466(f,ch,meta17441,_,fn1,meta17467){
return (new cljs.core.async.t_cljs$core$async17466(f,ch,meta17441,_,fn1,meta17467));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17440 = (function (f,ch,meta17441){
this.f = f;
this.ch = ch;
this.meta17441 = meta17441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17442,meta17441__$1){
var self__ = this;
var _17442__$1 = this;
return (new cljs.core.async.t_cljs$core$async17440(self__.f,self__.ch,meta17441__$1));
}));

(cljs.core.async.t_cljs$core$async17440.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17442){
var self__ = this;
var _17442__$1 = this;
return self__.meta17441;
}));

(cljs.core.async.t_cljs$core$async17440.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17440.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17440.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17440.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17440.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async17466(self__.f,self__.ch,self__.meta17441,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17503 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17503) : self__.f.call(null,G__17503));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17440.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17440.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17440.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17441","meta17441",319828858,null)], null);
}));

(cljs.core.async.t_cljs$core$async17440.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17440.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17440");

(cljs.core.async.t_cljs$core$async17440.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17440");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17440.
 */
cljs.core.async.__GT_t_cljs$core$async17440 = (function cljs$core$async$__GT_t_cljs$core$async17440(f,ch,meta17441){
return (new cljs.core.async.t_cljs$core$async17440(f,ch,meta17441));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17440(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17511 = (function (f,ch,meta17512){
this.f = f;
this.ch = ch;
this.meta17512 = meta17512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17513,meta17512__$1){
var self__ = this;
var _17513__$1 = this;
return (new cljs.core.async.t_cljs$core$async17511(self__.f,self__.ch,meta17512__$1));
}));

(cljs.core.async.t_cljs$core$async17511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17513){
var self__ = this;
var _17513__$1 = this;
return self__.meta17512;
}));

(cljs.core.async.t_cljs$core$async17511.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17511.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17511.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17511.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17511.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17511.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17511.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17512","meta17512",740120607,null)], null);
}));

(cljs.core.async.t_cljs$core$async17511.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17511.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17511");

(cljs.core.async.t_cljs$core$async17511.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17511");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17511.
 */
cljs.core.async.__GT_t_cljs$core$async17511 = (function cljs$core$async$__GT_t_cljs$core$async17511(f,ch,meta17512){
return (new cljs.core.async.t_cljs$core$async17511(f,ch,meta17512));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17511(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17521 = (function (p,ch,meta17522){
this.p = p;
this.ch = ch;
this.meta17522 = meta17522;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17523,meta17522__$1){
var self__ = this;
var _17523__$1 = this;
return (new cljs.core.async.t_cljs$core$async17521(self__.p,self__.ch,meta17522__$1));
}));

(cljs.core.async.t_cljs$core$async17521.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17523){
var self__ = this;
var _17523__$1 = this;
return self__.meta17522;
}));

(cljs.core.async.t_cljs$core$async17521.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17521.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17521.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17521.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17521.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17521.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17521.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17521.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17522","meta17522",1196282139,null)], null);
}));

(cljs.core.async.t_cljs$core$async17521.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17521.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17521");

(cljs.core.async.t_cljs$core$async17521.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17521");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17521.
 */
cljs.core.async.__GT_t_cljs$core$async17521 = (function cljs$core$async$__GT_t_cljs$core$async17521(p,ch,meta17522){
return (new cljs.core.async.t_cljs$core$async17521(p,ch,meta17522));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17521(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17534 = arguments.length;
switch (G__17534) {
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
var c__14884__auto___19009 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14885__auto__ = (function (){var switch__14715__auto__ = (function (state_17557){
var state_val_17558 = (state_17557[(1)]);
if((state_val_17558 === (7))){
var inst_17552 = (state_17557[(2)]);
var state_17557__$1 = state_17557;
var statearr_17559_19011 = state_17557__$1;
(statearr_17559_19011[(2)] = inst_17552);

(statearr_17559_19011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17558 === (1))){
var state_17557__$1 = state_17557;
var statearr_17560_19013 = state_17557__$1;
(statearr_17560_19013[(2)] = null);

(statearr_17560_19013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17558 === (4))){
var inst_17538 = (state_17557[(7)]);
var inst_17538__$1 = (state_17557[(2)]);
var inst_17539 = (inst_17538__$1 == null);
var state_17557__$1 = (function (){var statearr_17561 = state_17557;
(statearr_17561[(7)] = inst_17538__$1);

return statearr_17561;
})();
if(cljs.core.truth_(inst_17539)){
var statearr_17562_19014 = state_17557__$1;
(statearr_17562_19014[(1)] = (5));

} else {
var statearr_17563_19015 = state_17557__$1;
(statearr_17563_19015[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17558 === (6))){
var inst_17538 = (state_17557[(7)]);
var inst_17543 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17538) : p.call(null,inst_17538));
var state_17557__$1 = state_17557;
if(cljs.core.truth_(inst_17543)){
var statearr_17564_19016 = state_17557__$1;
(statearr_17564_19016[(1)] = (8));

} else {
var statearr_17565_19017 = state_17557__$1;
(statearr_17565_19017[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17558 === (3))){
var inst_17554 = (state_17557[(2)]);
var state_17557__$1 = state_17557;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17557__$1,inst_17554);
} else {
if((state_val_17558 === (2))){
var state_17557__$1 = state_17557;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17557__$1,(4),ch);
} else {
if((state_val_17558 === (11))){
var inst_17546 = (state_17557[(2)]);
var state_17557__$1 = state_17557;
var statearr_17566_19018 = state_17557__$1;
(statearr_17566_19018[(2)] = inst_17546);

(statearr_17566_19018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17558 === (9))){
var state_17557__$1 = state_17557;
var statearr_17567_19023 = state_17557__$1;
(statearr_17567_19023[(2)] = null);

(statearr_17567_19023[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17558 === (5))){
var inst_17541 = cljs.core.async.close_BANG_(out);
var state_17557__$1 = state_17557;
var statearr_17568_19024 = state_17557__$1;
(statearr_17568_19024[(2)] = inst_17541);

(statearr_17568_19024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17558 === (10))){
var inst_17549 = (state_17557[(2)]);
var state_17557__$1 = (function (){var statearr_17569 = state_17557;
(statearr_17569[(8)] = inst_17549);

return statearr_17569;
})();
var statearr_17570_19029 = state_17557__$1;
(statearr_17570_19029[(2)] = null);

(statearr_17570_19029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17558 === (8))){
var inst_17538 = (state_17557[(7)]);
var state_17557__$1 = state_17557;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17557__$1,(11),out,inst_17538);
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
var cljs$core$async$state_machine__14716__auto__ = null;
var cljs$core$async$state_machine__14716__auto____0 = (function (){
var statearr_17571 = [null,null,null,null,null,null,null,null,null];
(statearr_17571[(0)] = cljs$core$async$state_machine__14716__auto__);

(statearr_17571[(1)] = (1));

return statearr_17571;
});
var cljs$core$async$state_machine__14716__auto____1 = (function (state_17557){
while(true){
var ret_value__14717__auto__ = (function (){try{while(true){
var result__14718__auto__ = switch__14715__auto__(state_17557);
if(cljs.core.keyword_identical_QMARK_(result__14718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14718__auto__;
}
break;
}
}catch (e17572){var ex__14719__auto__ = e17572;
var statearr_17574_19044 = state_17557;
(statearr_17574_19044[(2)] = ex__14719__auto__);


if(cljs.core.seq((state_17557[(4)]))){
var statearr_17576_19045 = state_17557;
(statearr_17576_19045[(1)] = cljs.core.first((state_17557[(4)])));

} else {
throw ex__14719__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19046 = state_17557;
state_17557 = G__19046;
continue;
} else {
return ret_value__14717__auto__;
}
break;
}
});
cljs$core$async$state_machine__14716__auto__ = function(state_17557){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14716__auto____1.call(this,state_17557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14716__auto____0;
cljs$core$async$state_machine__14716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14716__auto____1;
return cljs$core$async$state_machine__14716__auto__;
})()
})();
var state__14886__auto__ = (function (){var statearr_17583 = f__14885__auto__();
(statearr_17583[(6)] = c__14884__auto___19009);

return statearr_17583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14886__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17588 = arguments.length;
switch (G__17588) {
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
var c__14884__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14885__auto__ = (function (){var switch__14715__auto__ = (function (state_17666){
var state_val_17667 = (state_17666[(1)]);
if((state_val_17667 === (7))){
var inst_17659 = (state_17666[(2)]);
var state_17666__$1 = state_17666;
var statearr_17669_19056 = state_17666__$1;
(statearr_17669_19056[(2)] = inst_17659);

(statearr_17669_19056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (20))){
var inst_17629 = (state_17666[(7)]);
var inst_17640 = (state_17666[(2)]);
var inst_17641 = cljs.core.next(inst_17629);
var inst_17615 = inst_17641;
var inst_17616 = null;
var inst_17617 = (0);
var inst_17618 = (0);
var state_17666__$1 = (function (){var statearr_17670 = state_17666;
(statearr_17670[(8)] = inst_17640);

(statearr_17670[(9)] = inst_17616);

(statearr_17670[(10)] = inst_17618);

(statearr_17670[(11)] = inst_17617);

(statearr_17670[(12)] = inst_17615);

return statearr_17670;
})();
var statearr_17671_19063 = state_17666__$1;
(statearr_17671_19063[(2)] = null);

(statearr_17671_19063[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (1))){
var state_17666__$1 = state_17666;
var statearr_17672_19064 = state_17666__$1;
(statearr_17672_19064[(2)] = null);

(statearr_17672_19064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (4))){
var inst_17604 = (state_17666[(13)]);
var inst_17604__$1 = (state_17666[(2)]);
var inst_17605 = (inst_17604__$1 == null);
var state_17666__$1 = (function (){var statearr_17673 = state_17666;
(statearr_17673[(13)] = inst_17604__$1);

return statearr_17673;
})();
if(cljs.core.truth_(inst_17605)){
var statearr_17674_19068 = state_17666__$1;
(statearr_17674_19068[(1)] = (5));

} else {
var statearr_17675_19069 = state_17666__$1;
(statearr_17675_19069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (15))){
var state_17666__$1 = state_17666;
var statearr_17679_19080 = state_17666__$1;
(statearr_17679_19080[(2)] = null);

(statearr_17679_19080[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (21))){
var state_17666__$1 = state_17666;
var statearr_17680_19091 = state_17666__$1;
(statearr_17680_19091[(2)] = null);

(statearr_17680_19091[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (13))){
var inst_17616 = (state_17666[(9)]);
var inst_17618 = (state_17666[(10)]);
var inst_17617 = (state_17666[(11)]);
var inst_17615 = (state_17666[(12)]);
var inst_17625 = (state_17666[(2)]);
var inst_17626 = (inst_17618 + (1));
var tmp17676 = inst_17616;
var tmp17677 = inst_17617;
var tmp17678 = inst_17615;
var inst_17615__$1 = tmp17678;
var inst_17616__$1 = tmp17676;
var inst_17617__$1 = tmp17677;
var inst_17618__$1 = inst_17626;
var state_17666__$1 = (function (){var statearr_17681 = state_17666;
(statearr_17681[(9)] = inst_17616__$1);

(statearr_17681[(10)] = inst_17618__$1);

(statearr_17681[(11)] = inst_17617__$1);

(statearr_17681[(12)] = inst_17615__$1);

(statearr_17681[(14)] = inst_17625);

return statearr_17681;
})();
var statearr_17682_19128 = state_17666__$1;
(statearr_17682_19128[(2)] = null);

(statearr_17682_19128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (22))){
var state_17666__$1 = state_17666;
var statearr_17683_19129 = state_17666__$1;
(statearr_17683_19129[(2)] = null);

(statearr_17683_19129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (6))){
var inst_17604 = (state_17666[(13)]);
var inst_17613 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17604) : f.call(null,inst_17604));
var inst_17614 = cljs.core.seq(inst_17613);
var inst_17615 = inst_17614;
var inst_17616 = null;
var inst_17617 = (0);
var inst_17618 = (0);
var state_17666__$1 = (function (){var statearr_17684 = state_17666;
(statearr_17684[(9)] = inst_17616);

(statearr_17684[(10)] = inst_17618);

(statearr_17684[(11)] = inst_17617);

(statearr_17684[(12)] = inst_17615);

return statearr_17684;
})();
var statearr_17686_19131 = state_17666__$1;
(statearr_17686_19131[(2)] = null);

(statearr_17686_19131[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (17))){
var inst_17629 = (state_17666[(7)]);
var inst_17633 = cljs.core.chunk_first(inst_17629);
var inst_17634 = cljs.core.chunk_rest(inst_17629);
var inst_17635 = cljs.core.count(inst_17633);
var inst_17615 = inst_17634;
var inst_17616 = inst_17633;
var inst_17617 = inst_17635;
var inst_17618 = (0);
var state_17666__$1 = (function (){var statearr_17687 = state_17666;
(statearr_17687[(9)] = inst_17616);

(statearr_17687[(10)] = inst_17618);

(statearr_17687[(11)] = inst_17617);

(statearr_17687[(12)] = inst_17615);

return statearr_17687;
})();
var statearr_17688_19137 = state_17666__$1;
(statearr_17688_19137[(2)] = null);

(statearr_17688_19137[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (3))){
var inst_17661 = (state_17666[(2)]);
var state_17666__$1 = state_17666;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17666__$1,inst_17661);
} else {
if((state_val_17667 === (12))){
var inst_17649 = (state_17666[(2)]);
var state_17666__$1 = state_17666;
var statearr_17689_19142 = state_17666__$1;
(statearr_17689_19142[(2)] = inst_17649);

(statearr_17689_19142[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (2))){
var state_17666__$1 = state_17666;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17666__$1,(4),in$);
} else {
if((state_val_17667 === (23))){
var inst_17657 = (state_17666[(2)]);
var state_17666__$1 = state_17666;
var statearr_17690_19149 = state_17666__$1;
(statearr_17690_19149[(2)] = inst_17657);

(statearr_17690_19149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (19))){
var inst_17644 = (state_17666[(2)]);
var state_17666__$1 = state_17666;
var statearr_17691_19153 = state_17666__$1;
(statearr_17691_19153[(2)] = inst_17644);

(statearr_17691_19153[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (11))){
var inst_17629 = (state_17666[(7)]);
var inst_17615 = (state_17666[(12)]);
var inst_17629__$1 = cljs.core.seq(inst_17615);
var state_17666__$1 = (function (){var statearr_17692 = state_17666;
(statearr_17692[(7)] = inst_17629__$1);

return statearr_17692;
})();
if(inst_17629__$1){
var statearr_17693_19162 = state_17666__$1;
(statearr_17693_19162[(1)] = (14));

} else {
var statearr_17694_19164 = state_17666__$1;
(statearr_17694_19164[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (9))){
var inst_17651 = (state_17666[(2)]);
var inst_17652 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17666__$1 = (function (){var statearr_17695 = state_17666;
(statearr_17695[(15)] = inst_17651);

return statearr_17695;
})();
if(cljs.core.truth_(inst_17652)){
var statearr_17696_19173 = state_17666__$1;
(statearr_17696_19173[(1)] = (21));

} else {
var statearr_17697_19175 = state_17666__$1;
(statearr_17697_19175[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (5))){
var inst_17607 = cljs.core.async.close_BANG_(out);
var state_17666__$1 = state_17666;
var statearr_17700_19176 = state_17666__$1;
(statearr_17700_19176[(2)] = inst_17607);

(statearr_17700_19176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (14))){
var inst_17629 = (state_17666[(7)]);
var inst_17631 = cljs.core.chunked_seq_QMARK_(inst_17629);
var state_17666__$1 = state_17666;
if(inst_17631){
var statearr_17725_19181 = state_17666__$1;
(statearr_17725_19181[(1)] = (17));

} else {
var statearr_17726_19182 = state_17666__$1;
(statearr_17726_19182[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (16))){
var inst_17647 = (state_17666[(2)]);
var state_17666__$1 = state_17666;
var statearr_17727_19183 = state_17666__$1;
(statearr_17727_19183[(2)] = inst_17647);

(statearr_17727_19183[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17667 === (10))){
var inst_17616 = (state_17666[(9)]);
var inst_17618 = (state_17666[(10)]);
var inst_17623 = cljs.core._nth(inst_17616,inst_17618);
var state_17666__$1 = state_17666;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17666__$1,(13),out,inst_17623);
} else {
if((state_val_17667 === (18))){
var inst_17629 = (state_17666[(7)]);
var inst_17638 = cljs.core.first(inst_17629);
var state_17666__$1 = state_17666;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17666__$1,(20),out,inst_17638);
} else {
if((state_val_17667 === (8))){
var inst_17618 = (state_17666[(10)]);
var inst_17617 = (state_17666[(11)]);
var inst_17620 = (inst_17618 < inst_17617);
var inst_17621 = inst_17620;
var state_17666__$1 = state_17666;
if(cljs.core.truth_(inst_17621)){
var statearr_17738_19185 = state_17666__$1;
(statearr_17738_19185[(1)] = (10));

} else {
var statearr_17741_19186 = state_17666__$1;
(statearr_17741_19186[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__14716__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14716__auto____0 = (function (){
var statearr_17750 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17750[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14716__auto__);

(statearr_17750[(1)] = (1));

return statearr_17750;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14716__auto____1 = (function (state_17666){
while(true){
var ret_value__14717__auto__ = (function (){try{while(true){
var result__14718__auto__ = switch__14715__auto__(state_17666);
if(cljs.core.keyword_identical_QMARK_(result__14718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14718__auto__;
}
break;
}
}catch (e17751){var ex__14719__auto__ = e17751;
var statearr_17752_19197 = state_17666;
(statearr_17752_19197[(2)] = ex__14719__auto__);


if(cljs.core.seq((state_17666[(4)]))){
var statearr_17753_19199 = state_17666;
(statearr_17753_19199[(1)] = cljs.core.first((state_17666[(4)])));

} else {
throw ex__14719__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19206 = state_17666;
state_17666 = G__19206;
continue;
} else {
return ret_value__14717__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14716__auto__ = function(state_17666){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14716__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14716__auto____1.call(this,state_17666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14716__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14716__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14716__auto__;
})()
})();
var state__14886__auto__ = (function (){var statearr_17754 = f__14885__auto__();
(statearr_17754[(6)] = c__14884__auto__);

return statearr_17754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14886__auto__);
}));

return c__14884__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17756 = arguments.length;
switch (G__17756) {
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
var G__17758 = arguments.length;
switch (G__17758) {
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
var G__17768 = arguments.length;
switch (G__17768) {
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
var c__14884__auto___19393 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14885__auto__ = (function (){var switch__14715__auto__ = (function (state_17804){
var state_val_17805 = (state_17804[(1)]);
if((state_val_17805 === (7))){
var inst_17799 = (state_17804[(2)]);
var state_17804__$1 = state_17804;
var statearr_17828_19498 = state_17804__$1;
(statearr_17828_19498[(2)] = inst_17799);

(statearr_17828_19498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17805 === (1))){
var inst_17781 = null;
var state_17804__$1 = (function (){var statearr_17830 = state_17804;
(statearr_17830[(7)] = inst_17781);

return statearr_17830;
})();
var statearr_17831_19525 = state_17804__$1;
(statearr_17831_19525[(2)] = null);

(statearr_17831_19525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17805 === (4))){
var inst_17784 = (state_17804[(8)]);
var inst_17784__$1 = (state_17804[(2)]);
var inst_17785 = (inst_17784__$1 == null);
var inst_17786 = cljs.core.not(inst_17785);
var state_17804__$1 = (function (){var statearr_17832 = state_17804;
(statearr_17832[(8)] = inst_17784__$1);

return statearr_17832;
})();
if(inst_17786){
var statearr_17833_19526 = state_17804__$1;
(statearr_17833_19526[(1)] = (5));

} else {
var statearr_17834_19527 = state_17804__$1;
(statearr_17834_19527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17805 === (6))){
var state_17804__$1 = state_17804;
var statearr_17838_19540 = state_17804__$1;
(statearr_17838_19540[(2)] = null);

(statearr_17838_19540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17805 === (3))){
var inst_17801 = (state_17804[(2)]);
var inst_17802 = cljs.core.async.close_BANG_(out);
var state_17804__$1 = (function (){var statearr_17839 = state_17804;
(statearr_17839[(9)] = inst_17801);

return statearr_17839;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17804__$1,inst_17802);
} else {
if((state_val_17805 === (2))){
var state_17804__$1 = state_17804;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17804__$1,(4),ch);
} else {
if((state_val_17805 === (11))){
var inst_17784 = (state_17804[(8)]);
var inst_17793 = (state_17804[(2)]);
var inst_17781 = inst_17784;
var state_17804__$1 = (function (){var statearr_17843 = state_17804;
(statearr_17843[(7)] = inst_17781);

(statearr_17843[(10)] = inst_17793);

return statearr_17843;
})();
var statearr_17844_19541 = state_17804__$1;
(statearr_17844_19541[(2)] = null);

(statearr_17844_19541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17805 === (9))){
var inst_17784 = (state_17804[(8)]);
var state_17804__$1 = state_17804;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17804__$1,(11),out,inst_17784);
} else {
if((state_val_17805 === (5))){
var inst_17781 = (state_17804[(7)]);
var inst_17784 = (state_17804[(8)]);
var inst_17788 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17784,inst_17781);
var state_17804__$1 = state_17804;
if(inst_17788){
var statearr_17846_19542 = state_17804__$1;
(statearr_17846_19542[(1)] = (8));

} else {
var statearr_17847_19543 = state_17804__$1;
(statearr_17847_19543[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17805 === (10))){
var inst_17796 = (state_17804[(2)]);
var state_17804__$1 = state_17804;
var statearr_17848_19544 = state_17804__$1;
(statearr_17848_19544[(2)] = inst_17796);

(statearr_17848_19544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17805 === (8))){
var inst_17781 = (state_17804[(7)]);
var tmp17845 = inst_17781;
var inst_17781__$1 = tmp17845;
var state_17804__$1 = (function (){var statearr_17849 = state_17804;
(statearr_17849[(7)] = inst_17781__$1);

return statearr_17849;
})();
var statearr_17850_19545 = state_17804__$1;
(statearr_17850_19545[(2)] = null);

(statearr_17850_19545[(1)] = (2));


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
var cljs$core$async$state_machine__14716__auto__ = null;
var cljs$core$async$state_machine__14716__auto____0 = (function (){
var statearr_17851 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17851[(0)] = cljs$core$async$state_machine__14716__auto__);

(statearr_17851[(1)] = (1));

return statearr_17851;
});
var cljs$core$async$state_machine__14716__auto____1 = (function (state_17804){
while(true){
var ret_value__14717__auto__ = (function (){try{while(true){
var result__14718__auto__ = switch__14715__auto__(state_17804);
if(cljs.core.keyword_identical_QMARK_(result__14718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14718__auto__;
}
break;
}
}catch (e17852){var ex__14719__auto__ = e17852;
var statearr_17853_19546 = state_17804;
(statearr_17853_19546[(2)] = ex__14719__auto__);


if(cljs.core.seq((state_17804[(4)]))){
var statearr_17854_19547 = state_17804;
(statearr_17854_19547[(1)] = cljs.core.first((state_17804[(4)])));

} else {
throw ex__14719__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19548 = state_17804;
state_17804 = G__19548;
continue;
} else {
return ret_value__14717__auto__;
}
break;
}
});
cljs$core$async$state_machine__14716__auto__ = function(state_17804){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14716__auto____1.call(this,state_17804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14716__auto____0;
cljs$core$async$state_machine__14716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14716__auto____1;
return cljs$core$async$state_machine__14716__auto__;
})()
})();
var state__14886__auto__ = (function (){var statearr_17859 = f__14885__auto__();
(statearr_17859[(6)] = c__14884__auto___19393);

return statearr_17859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14886__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17862 = arguments.length;
switch (G__17862) {
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
var c__14884__auto___19555 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14885__auto__ = (function (){var switch__14715__auto__ = (function (state_17905){
var state_val_17906 = (state_17905[(1)]);
if((state_val_17906 === (7))){
var inst_17901 = (state_17905[(2)]);
var state_17905__$1 = state_17905;
var statearr_17907_19556 = state_17905__$1;
(statearr_17907_19556[(2)] = inst_17901);

(statearr_17907_19556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17906 === (1))){
var inst_17864 = (new Array(n));
var inst_17865 = inst_17864;
var inst_17866 = (0);
var state_17905__$1 = (function (){var statearr_17908 = state_17905;
(statearr_17908[(7)] = inst_17865);

(statearr_17908[(8)] = inst_17866);

return statearr_17908;
})();
var statearr_17909_19557 = state_17905__$1;
(statearr_17909_19557[(2)] = null);

(statearr_17909_19557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17906 === (4))){
var inst_17869 = (state_17905[(9)]);
var inst_17869__$1 = (state_17905[(2)]);
var inst_17871 = (inst_17869__$1 == null);
var inst_17872 = cljs.core.not(inst_17871);
var state_17905__$1 = (function (){var statearr_17910 = state_17905;
(statearr_17910[(9)] = inst_17869__$1);

return statearr_17910;
})();
if(inst_17872){
var statearr_17911_19560 = state_17905__$1;
(statearr_17911_19560[(1)] = (5));

} else {
var statearr_17912_19561 = state_17905__$1;
(statearr_17912_19561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17906 === (15))){
var inst_17895 = (state_17905[(2)]);
var state_17905__$1 = state_17905;
var statearr_17913_19564 = state_17905__$1;
(statearr_17913_19564[(2)] = inst_17895);

(statearr_17913_19564[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17906 === (13))){
var state_17905__$1 = state_17905;
var statearr_17914_19565 = state_17905__$1;
(statearr_17914_19565[(2)] = null);

(statearr_17914_19565[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17906 === (6))){
var inst_17866 = (state_17905[(8)]);
var inst_17891 = (inst_17866 > (0));
var state_17905__$1 = state_17905;
if(cljs.core.truth_(inst_17891)){
var statearr_17915_19566 = state_17905__$1;
(statearr_17915_19566[(1)] = (12));

} else {
var statearr_17916_19567 = state_17905__$1;
(statearr_17916_19567[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17906 === (3))){
var inst_17903 = (state_17905[(2)]);
var state_17905__$1 = state_17905;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17905__$1,inst_17903);
} else {
if((state_val_17906 === (12))){
var inst_17865 = (state_17905[(7)]);
var inst_17893 = cljs.core.vec(inst_17865);
var state_17905__$1 = state_17905;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17905__$1,(15),out,inst_17893);
} else {
if((state_val_17906 === (2))){
var state_17905__$1 = state_17905;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17905__$1,(4),ch);
} else {
if((state_val_17906 === (11))){
var inst_17885 = (state_17905[(2)]);
var inst_17886 = (new Array(n));
var inst_17865 = inst_17886;
var inst_17866 = (0);
var state_17905__$1 = (function (){var statearr_17925 = state_17905;
(statearr_17925[(7)] = inst_17865);

(statearr_17925[(8)] = inst_17866);

(statearr_17925[(10)] = inst_17885);

return statearr_17925;
})();
var statearr_17929_19569 = state_17905__$1;
(statearr_17929_19569[(2)] = null);

(statearr_17929_19569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17906 === (9))){
var inst_17865 = (state_17905[(7)]);
var inst_17883 = cljs.core.vec(inst_17865);
var state_17905__$1 = state_17905;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17905__$1,(11),out,inst_17883);
} else {
if((state_val_17906 === (5))){
var inst_17869 = (state_17905[(9)]);
var inst_17865 = (state_17905[(7)]);
var inst_17866 = (state_17905[(8)]);
var inst_17878 = (state_17905[(11)]);
var inst_17877 = (inst_17865[inst_17866] = inst_17869);
var inst_17878__$1 = (inst_17866 + (1));
var inst_17879 = (inst_17878__$1 < n);
var state_17905__$1 = (function (){var statearr_17931 = state_17905;
(statearr_17931[(12)] = inst_17877);

(statearr_17931[(11)] = inst_17878__$1);

return statearr_17931;
})();
if(cljs.core.truth_(inst_17879)){
var statearr_17935_19571 = state_17905__$1;
(statearr_17935_19571[(1)] = (8));

} else {
var statearr_17936_19573 = state_17905__$1;
(statearr_17936_19573[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17906 === (14))){
var inst_17898 = (state_17905[(2)]);
var inst_17899 = cljs.core.async.close_BANG_(out);
var state_17905__$1 = (function (){var statearr_17938 = state_17905;
(statearr_17938[(13)] = inst_17898);

return statearr_17938;
})();
var statearr_17939_19574 = state_17905__$1;
(statearr_17939_19574[(2)] = inst_17899);

(statearr_17939_19574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17906 === (10))){
var inst_17889 = (state_17905[(2)]);
var state_17905__$1 = state_17905;
var statearr_17940_19575 = state_17905__$1;
(statearr_17940_19575[(2)] = inst_17889);

(statearr_17940_19575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17906 === (8))){
var inst_17865 = (state_17905[(7)]);
var inst_17878 = (state_17905[(11)]);
var tmp17937 = inst_17865;
var inst_17865__$1 = tmp17937;
var inst_17866 = inst_17878;
var state_17905__$1 = (function (){var statearr_17941 = state_17905;
(statearr_17941[(7)] = inst_17865__$1);

(statearr_17941[(8)] = inst_17866);

return statearr_17941;
})();
var statearr_17942_19577 = state_17905__$1;
(statearr_17942_19577[(2)] = null);

(statearr_17942_19577[(1)] = (2));


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
var cljs$core$async$state_machine__14716__auto__ = null;
var cljs$core$async$state_machine__14716__auto____0 = (function (){
var statearr_17944 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17944[(0)] = cljs$core$async$state_machine__14716__auto__);

(statearr_17944[(1)] = (1));

return statearr_17944;
});
var cljs$core$async$state_machine__14716__auto____1 = (function (state_17905){
while(true){
var ret_value__14717__auto__ = (function (){try{while(true){
var result__14718__auto__ = switch__14715__auto__(state_17905);
if(cljs.core.keyword_identical_QMARK_(result__14718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14718__auto__;
}
break;
}
}catch (e17945){var ex__14719__auto__ = e17945;
var statearr_17946_19581 = state_17905;
(statearr_17946_19581[(2)] = ex__14719__auto__);


if(cljs.core.seq((state_17905[(4)]))){
var statearr_17947_19582 = state_17905;
(statearr_17947_19582[(1)] = cljs.core.first((state_17905[(4)])));

} else {
throw ex__14719__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19583 = state_17905;
state_17905 = G__19583;
continue;
} else {
return ret_value__14717__auto__;
}
break;
}
});
cljs$core$async$state_machine__14716__auto__ = function(state_17905){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14716__auto____1.call(this,state_17905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14716__auto____0;
cljs$core$async$state_machine__14716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14716__auto____1;
return cljs$core$async$state_machine__14716__auto__;
})()
})();
var state__14886__auto__ = (function (){var statearr_17950 = f__14885__auto__();
(statearr_17950[(6)] = c__14884__auto___19555);

return statearr_17950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14886__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17959 = arguments.length;
switch (G__17959) {
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
var c__14884__auto___19585 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14885__auto__ = (function (){var switch__14715__auto__ = (function (state_18010){
var state_val_18011 = (state_18010[(1)]);
if((state_val_18011 === (7))){
var inst_18006 = (state_18010[(2)]);
var state_18010__$1 = state_18010;
var statearr_18012_19586 = state_18010__$1;
(statearr_18012_19586[(2)] = inst_18006);

(statearr_18012_19586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (1))){
var inst_17964 = [];
var inst_17965 = inst_17964;
var inst_17966 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18010__$1 = (function (){var statearr_18015 = state_18010;
(statearr_18015[(7)] = inst_17966);

(statearr_18015[(8)] = inst_17965);

return statearr_18015;
})();
var statearr_18016_19587 = state_18010__$1;
(statearr_18016_19587[(2)] = null);

(statearr_18016_19587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (4))){
var inst_17969 = (state_18010[(9)]);
var inst_17969__$1 = (state_18010[(2)]);
var inst_17970 = (inst_17969__$1 == null);
var inst_17971 = cljs.core.not(inst_17970);
var state_18010__$1 = (function (){var statearr_18020 = state_18010;
(statearr_18020[(9)] = inst_17969__$1);

return statearr_18020;
})();
if(inst_17971){
var statearr_18021_19588 = state_18010__$1;
(statearr_18021_19588[(1)] = (5));

} else {
var statearr_18022_19589 = state_18010__$1;
(statearr_18022_19589[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (15))){
var inst_17965 = (state_18010[(8)]);
var inst_17998 = cljs.core.vec(inst_17965);
var state_18010__$1 = state_18010;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18010__$1,(18),out,inst_17998);
} else {
if((state_val_18011 === (13))){
var inst_17993 = (state_18010[(2)]);
var state_18010__$1 = state_18010;
var statearr_18024_19590 = state_18010__$1;
(statearr_18024_19590[(2)] = inst_17993);

(statearr_18024_19590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (6))){
var inst_17965 = (state_18010[(8)]);
var inst_17995 = inst_17965.length;
var inst_17996 = (inst_17995 > (0));
var state_18010__$1 = state_18010;
if(cljs.core.truth_(inst_17996)){
var statearr_18025_19591 = state_18010__$1;
(statearr_18025_19591[(1)] = (15));

} else {
var statearr_18026_19592 = state_18010__$1;
(statearr_18026_19592[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (17))){
var inst_18003 = (state_18010[(2)]);
var inst_18004 = cljs.core.async.close_BANG_(out);
var state_18010__$1 = (function (){var statearr_18027 = state_18010;
(statearr_18027[(10)] = inst_18003);

return statearr_18027;
})();
var statearr_18028_19594 = state_18010__$1;
(statearr_18028_19594[(2)] = inst_18004);

(statearr_18028_19594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (3))){
var inst_18008 = (state_18010[(2)]);
var state_18010__$1 = state_18010;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18010__$1,inst_18008);
} else {
if((state_val_18011 === (12))){
var inst_17965 = (state_18010[(8)]);
var inst_17984 = cljs.core.vec(inst_17965);
var state_18010__$1 = state_18010;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18010__$1,(14),out,inst_17984);
} else {
if((state_val_18011 === (2))){
var state_18010__$1 = state_18010;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18010__$1,(4),ch);
} else {
if((state_val_18011 === (11))){
var inst_17969 = (state_18010[(9)]);
var inst_17973 = (state_18010[(11)]);
var inst_17965 = (state_18010[(8)]);
var inst_17981 = inst_17965.push(inst_17969);
var tmp18029 = inst_17965;
var inst_17965__$1 = tmp18029;
var inst_17966 = inst_17973;
var state_18010__$1 = (function (){var statearr_18030 = state_18010;
(statearr_18030[(7)] = inst_17966);

(statearr_18030[(12)] = inst_17981);

(statearr_18030[(8)] = inst_17965__$1);

return statearr_18030;
})();
var statearr_18031_19597 = state_18010__$1;
(statearr_18031_19597[(2)] = null);

(statearr_18031_19597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (9))){
var inst_17966 = (state_18010[(7)]);
var inst_17977 = cljs.core.keyword_identical_QMARK_(inst_17966,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_18010__$1 = state_18010;
var statearr_18033_19600 = state_18010__$1;
(statearr_18033_19600[(2)] = inst_17977);

(statearr_18033_19600[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (5))){
var inst_17974 = (state_18010[(13)]);
var inst_17966 = (state_18010[(7)]);
var inst_17969 = (state_18010[(9)]);
var inst_17973 = (state_18010[(11)]);
var inst_17973__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17969) : f.call(null,inst_17969));
var inst_17974__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17973__$1,inst_17966);
var state_18010__$1 = (function (){var statearr_18034 = state_18010;
(statearr_18034[(13)] = inst_17974__$1);

(statearr_18034[(11)] = inst_17973__$1);

return statearr_18034;
})();
if(inst_17974__$1){
var statearr_18035_19602 = state_18010__$1;
(statearr_18035_19602[(1)] = (8));

} else {
var statearr_18036_19604 = state_18010__$1;
(statearr_18036_19604[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (14))){
var inst_17969 = (state_18010[(9)]);
var inst_17973 = (state_18010[(11)]);
var inst_17986 = (state_18010[(2)]);
var inst_17989 = [];
var inst_17990 = inst_17989.push(inst_17969);
var inst_17965 = inst_17989;
var inst_17966 = inst_17973;
var state_18010__$1 = (function (){var statearr_18041 = state_18010;
(statearr_18041[(7)] = inst_17966);

(statearr_18041[(14)] = inst_17986);

(statearr_18041[(15)] = inst_17990);

(statearr_18041[(8)] = inst_17965);

return statearr_18041;
})();
var statearr_18042_19608 = state_18010__$1;
(statearr_18042_19608[(2)] = null);

(statearr_18042_19608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (16))){
var state_18010__$1 = state_18010;
var statearr_18043_19609 = state_18010__$1;
(statearr_18043_19609[(2)] = null);

(statearr_18043_19609[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (10))){
var inst_17979 = (state_18010[(2)]);
var state_18010__$1 = state_18010;
if(cljs.core.truth_(inst_17979)){
var statearr_18044_19610 = state_18010__$1;
(statearr_18044_19610[(1)] = (11));

} else {
var statearr_18045_19611 = state_18010__$1;
(statearr_18045_19611[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (18))){
var inst_18000 = (state_18010[(2)]);
var state_18010__$1 = state_18010;
var statearr_18046_19612 = state_18010__$1;
(statearr_18046_19612[(2)] = inst_18000);

(statearr_18046_19612[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (8))){
var inst_17974 = (state_18010[(13)]);
var state_18010__$1 = state_18010;
var statearr_18047_19613 = state_18010__$1;
(statearr_18047_19613[(2)] = inst_17974);

(statearr_18047_19613[(1)] = (10));


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
var cljs$core$async$state_machine__14716__auto__ = null;
var cljs$core$async$state_machine__14716__auto____0 = (function (){
var statearr_18048 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18048[(0)] = cljs$core$async$state_machine__14716__auto__);

(statearr_18048[(1)] = (1));

return statearr_18048;
});
var cljs$core$async$state_machine__14716__auto____1 = (function (state_18010){
while(true){
var ret_value__14717__auto__ = (function (){try{while(true){
var result__14718__auto__ = switch__14715__auto__(state_18010);
if(cljs.core.keyword_identical_QMARK_(result__14718__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14718__auto__;
}
break;
}
}catch (e18049){var ex__14719__auto__ = e18049;
var statearr_18050_19614 = state_18010;
(statearr_18050_19614[(2)] = ex__14719__auto__);


if(cljs.core.seq((state_18010[(4)]))){
var statearr_18051_19615 = state_18010;
(statearr_18051_19615[(1)] = cljs.core.first((state_18010[(4)])));

} else {
throw ex__14719__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19616 = state_18010;
state_18010 = G__19616;
continue;
} else {
return ret_value__14717__auto__;
}
break;
}
});
cljs$core$async$state_machine__14716__auto__ = function(state_18010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14716__auto____1.call(this,state_18010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14716__auto____0;
cljs$core$async$state_machine__14716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14716__auto____1;
return cljs$core$async$state_machine__14716__auto__;
})()
})();
var state__14886__auto__ = (function (){var statearr_18052 = f__14885__auto__();
(statearr_18052[(6)] = c__14884__auto___19585);

return statearr_18052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14886__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
