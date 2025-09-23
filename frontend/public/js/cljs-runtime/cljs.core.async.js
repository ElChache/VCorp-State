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
cljs.core.async.t_cljs$core$async14842 = (function (f,blockable,meta14843){
this.f = f;
this.blockable = blockable;
this.meta14843 = meta14843;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14844,meta14843__$1){
var self__ = this;
var _14844__$1 = this;
return (new cljs.core.async.t_cljs$core$async14842(self__.f,self__.blockable,meta14843__$1));
}));

(cljs.core.async.t_cljs$core$async14842.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14844){
var self__ = this;
var _14844__$1 = this;
return self__.meta14843;
}));

(cljs.core.async.t_cljs$core$async14842.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14842.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14842.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14842.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14842.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14843","meta14843",288463463,null)], null);
}));

(cljs.core.async.t_cljs$core$async14842.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14842.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14842");

(cljs.core.async.t_cljs$core$async14842.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14842");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14842.
 */
cljs.core.async.__GT_t_cljs$core$async14842 = (function cljs$core$async$__GT_t_cljs$core$async14842(f,blockable,meta14843){
return (new cljs.core.async.t_cljs$core$async14842(f,blockable,meta14843));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14841 = arguments.length;
switch (G__14841) {
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
return (new cljs.core.async.t_cljs$core$async14842(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__14862 = arguments.length;
switch (G__14862) {
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
var G__14868 = arguments.length;
switch (G__14868) {
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
var G__14874 = arguments.length;
switch (G__14874) {
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
var val_18293 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18293) : fn1.call(null,val_18293));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18293) : fn1.call(null,val_18293));
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
var G__14882 = arguments.length;
switch (G__14882) {
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
var n__5593__auto___18304 = n;
var x_18305 = (0);
while(true){
if((x_18305 < n__5593__auto___18304)){
(a[x_18305] = x_18305);

var G__18316 = (x_18305 + (1));
x_18305 = G__18316;
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
cljs.core.async.t_cljs$core$async14889 = (function (flag,meta14890){
this.flag = flag;
this.meta14890 = meta14890;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14891,meta14890__$1){
var self__ = this;
var _14891__$1 = this;
return (new cljs.core.async.t_cljs$core$async14889(self__.flag,meta14890__$1));
}));

(cljs.core.async.t_cljs$core$async14889.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14891){
var self__ = this;
var _14891__$1 = this;
return self__.meta14890;
}));

(cljs.core.async.t_cljs$core$async14889.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14889.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14889.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14889.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14889.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14890","meta14890",986802552,null)], null);
}));

(cljs.core.async.t_cljs$core$async14889.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14889.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14889");

(cljs.core.async.t_cljs$core$async14889.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14889");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14889.
 */
cljs.core.async.__GT_t_cljs$core$async14889 = (function cljs$core$async$__GT_t_cljs$core$async14889(flag,meta14890){
return (new cljs.core.async.t_cljs$core$async14889(flag,meta14890));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14889(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14904 = (function (flag,cb,meta14905){
this.flag = flag;
this.cb = cb;
this.meta14905 = meta14905;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14906,meta14905__$1){
var self__ = this;
var _14906__$1 = this;
return (new cljs.core.async.t_cljs$core$async14904(self__.flag,self__.cb,meta14905__$1));
}));

(cljs.core.async.t_cljs$core$async14904.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14906){
var self__ = this;
var _14906__$1 = this;
return self__.meta14905;
}));

(cljs.core.async.t_cljs$core$async14904.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14904.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14904.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14904.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14904.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14905","meta14905",-492985057,null)], null);
}));

(cljs.core.async.t_cljs$core$async14904.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14904.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14904");

(cljs.core.async.t_cljs$core$async14904.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14904");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14904.
 */
cljs.core.async.__GT_t_cljs$core$async14904 = (function cljs$core$async$__GT_t_cljs$core$async14904(flag,cb,meta14905){
return (new cljs.core.async.t_cljs$core$async14904(flag,cb,meta14905));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14904(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__14917_SHARP_){
var G__14933 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14917_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14933) : fret.call(null,G__14933));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14919_SHARP_){
var G__14937 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14919_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14937) : fret.call(null,G__14937));
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
var G__18344 = (i + (1));
i = G__18344;
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
var len__5726__auto___18361 = arguments.length;
var i__5727__auto___18362 = (0);
while(true){
if((i__5727__auto___18362 < len__5726__auto___18361)){
args__5732__auto__.push((arguments[i__5727__auto___18362]));

var G__18363 = (i__5727__auto___18362 + (1));
i__5727__auto___18362 = G__18363;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14961){
var map__14962 = p__14961;
var map__14962__$1 = cljs.core.__destructure_map(map__14962);
var opts = map__14962__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14949){
var G__14950 = cljs.core.first(seq14949);
var seq14949__$1 = cljs.core.next(seq14949);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14950,seq14949__$1);
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
var G__14965 = arguments.length;
switch (G__14965) {
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
var c__14733__auto___18373 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14734__auto__ = (function (){var switch__14384__auto__ = (function (state_15168){
var state_val_15170 = (state_15168[(1)]);
if((state_val_15170 === (7))){
var inst_15157 = (state_15168[(2)]);
var state_15168__$1 = state_15168;
var statearr_15181_18374 = state_15168__$1;
(statearr_15181_18374[(2)] = inst_15157);

(statearr_15181_18374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15170 === (1))){
var state_15168__$1 = state_15168;
var statearr_15183_18375 = state_15168__$1;
(statearr_15183_18375[(2)] = null);

(statearr_15183_18375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15170 === (4))){
var inst_15128 = (state_15168[(7)]);
var inst_15128__$1 = (state_15168[(2)]);
var inst_15133 = (inst_15128__$1 == null);
var state_15168__$1 = (function (){var statearr_15243 = state_15168;
(statearr_15243[(7)] = inst_15128__$1);

return statearr_15243;
})();
if(cljs.core.truth_(inst_15133)){
var statearr_15246_18384 = state_15168__$1;
(statearr_15246_18384[(1)] = (5));

} else {
var statearr_15247_18385 = state_15168__$1;
(statearr_15247_18385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15170 === (13))){
var state_15168__$1 = state_15168;
var statearr_15257_18387 = state_15168__$1;
(statearr_15257_18387[(2)] = null);

(statearr_15257_18387[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15170 === (6))){
var inst_15128 = (state_15168[(7)]);
var state_15168__$1 = state_15168;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15168__$1,(11),to,inst_15128);
} else {
if((state_val_15170 === (3))){
var inst_15159 = (state_15168[(2)]);
var state_15168__$1 = state_15168;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15168__$1,inst_15159);
} else {
if((state_val_15170 === (12))){
var state_15168__$1 = state_15168;
var statearr_15258_18388 = state_15168__$1;
(statearr_15258_18388[(2)] = null);

(statearr_15258_18388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15170 === (2))){
var state_15168__$1 = state_15168;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15168__$1,(4),from);
} else {
if((state_val_15170 === (11))){
var inst_15144 = (state_15168[(2)]);
var state_15168__$1 = state_15168;
if(cljs.core.truth_(inst_15144)){
var statearr_15262_18389 = state_15168__$1;
(statearr_15262_18389[(1)] = (12));

} else {
var statearr_15263_18390 = state_15168__$1;
(statearr_15263_18390[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15170 === (9))){
var state_15168__$1 = state_15168;
var statearr_15264_18391 = state_15168__$1;
(statearr_15264_18391[(2)] = null);

(statearr_15264_18391[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15170 === (5))){
var state_15168__$1 = state_15168;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15265_18392 = state_15168__$1;
(statearr_15265_18392[(1)] = (8));

} else {
var statearr_15266_18393 = state_15168__$1;
(statearr_15266_18393[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15170 === (14))){
var inst_15155 = (state_15168[(2)]);
var state_15168__$1 = state_15168;
var statearr_15267_18394 = state_15168__$1;
(statearr_15267_18394[(2)] = inst_15155);

(statearr_15267_18394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15170 === (10))){
var inst_15141 = (state_15168[(2)]);
var state_15168__$1 = state_15168;
var statearr_15270_18395 = state_15168__$1;
(statearr_15270_18395[(2)] = inst_15141);

(statearr_15270_18395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15170 === (8))){
var inst_15136 = cljs.core.async.close_BANG_(to);
var state_15168__$1 = state_15168;
var statearr_15271_18396 = state_15168__$1;
(statearr_15271_18396[(2)] = inst_15136);

(statearr_15271_18396[(1)] = (10));


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
var cljs$core$async$state_machine__14385__auto__ = null;
var cljs$core$async$state_machine__14385__auto____0 = (function (){
var statearr_15280 = [null,null,null,null,null,null,null,null];
(statearr_15280[(0)] = cljs$core$async$state_machine__14385__auto__);

(statearr_15280[(1)] = (1));

return statearr_15280;
});
var cljs$core$async$state_machine__14385__auto____1 = (function (state_15168){
while(true){
var ret_value__14386__auto__ = (function (){try{while(true){
var result__14387__auto__ = switch__14384__auto__(state_15168);
if(cljs.core.keyword_identical_QMARK_(result__14387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14387__auto__;
}
break;
}
}catch (e15285){var ex__14388__auto__ = e15285;
var statearr_15286_18397 = state_15168;
(statearr_15286_18397[(2)] = ex__14388__auto__);


if(cljs.core.seq((state_15168[(4)]))){
var statearr_15292_18398 = state_15168;
(statearr_15292_18398[(1)] = cljs.core.first((state_15168[(4)])));

} else {
throw ex__14388__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18399 = state_15168;
state_15168 = G__18399;
continue;
} else {
return ret_value__14386__auto__;
}
break;
}
});
cljs$core$async$state_machine__14385__auto__ = function(state_15168){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14385__auto____1.call(this,state_15168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14385__auto____0;
cljs$core$async$state_machine__14385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14385__auto____1;
return cljs$core$async$state_machine__14385__auto__;
})()
})();
var state__14735__auto__ = (function (){var statearr_15298 = f__14734__auto__();
(statearr_15298[(6)] = c__14733__auto___18373);

return statearr_15298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14735__auto__);
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
var process__$1 = (function (p__15335){
var vec__15339 = p__15335;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15339,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15339,(1),null);
var job = vec__15339;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14733__auto___18401 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14734__auto__ = (function (){var switch__14384__auto__ = (function (state_15347){
var state_val_15348 = (state_15347[(1)]);
if((state_val_15348 === (1))){
var state_15347__$1 = state_15347;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15347__$1,(2),res,v);
} else {
if((state_val_15348 === (2))){
var inst_15344 = (state_15347[(2)]);
var inst_15345 = cljs.core.async.close_BANG_(res);
var state_15347__$1 = (function (){var statearr_15357 = state_15347;
(statearr_15357[(7)] = inst_15344);

return statearr_15357;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15347__$1,inst_15345);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14385__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14385__auto____0 = (function (){
var statearr_15366 = [null,null,null,null,null,null,null,null];
(statearr_15366[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14385__auto__);

(statearr_15366[(1)] = (1));

return statearr_15366;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14385__auto____1 = (function (state_15347){
while(true){
var ret_value__14386__auto__ = (function (){try{while(true){
var result__14387__auto__ = switch__14384__auto__(state_15347);
if(cljs.core.keyword_identical_QMARK_(result__14387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14387__auto__;
}
break;
}
}catch (e15368){var ex__14388__auto__ = e15368;
var statearr_15369_18403 = state_15347;
(statearr_15369_18403[(2)] = ex__14388__auto__);


if(cljs.core.seq((state_15347[(4)]))){
var statearr_15370_18405 = state_15347;
(statearr_15370_18405[(1)] = cljs.core.first((state_15347[(4)])));

} else {
throw ex__14388__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18406 = state_15347;
state_15347 = G__18406;
continue;
} else {
return ret_value__14386__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14385__auto__ = function(state_15347){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14385__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14385__auto____1.call(this,state_15347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14385__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14385__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14385__auto__;
})()
})();
var state__14735__auto__ = (function (){var statearr_15407 = f__14734__auto__();
(statearr_15407[(6)] = c__14733__auto___18401);

return statearr_15407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14735__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15413){
var vec__15414 = p__15413;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15414,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15414,(1),null);
var job = vec__15414;
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
var n__5593__auto___18411 = n;
var __18412 = (0);
while(true){
if((__18412 < n__5593__auto___18411)){
var G__15424_18413 = type;
var G__15424_18414__$1 = (((G__15424_18413 instanceof cljs.core.Keyword))?G__15424_18413.fqn:null);
switch (G__15424_18414__$1) {
case "compute":
var c__14733__auto___18419 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18412,c__14733__auto___18419,G__15424_18413,G__15424_18414__$1,n__5593__auto___18411,jobs,results,process__$1,async){
return (function (){
var f__14734__auto__ = (function (){var switch__14384__auto__ = ((function (__18412,c__14733__auto___18419,G__15424_18413,G__15424_18414__$1,n__5593__auto___18411,jobs,results,process__$1,async){
return (function (state_15441){
var state_val_15442 = (state_15441[(1)]);
if((state_val_15442 === (1))){
var state_15441__$1 = state_15441;
var statearr_15443_18420 = state_15441__$1;
(statearr_15443_18420[(2)] = null);

(statearr_15443_18420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15442 === (2))){
var state_15441__$1 = state_15441;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15441__$1,(4),jobs);
} else {
if((state_val_15442 === (3))){
var inst_15439 = (state_15441[(2)]);
var state_15441__$1 = state_15441;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15441__$1,inst_15439);
} else {
if((state_val_15442 === (4))){
var inst_15431 = (state_15441[(2)]);
var inst_15432 = process__$1(inst_15431);
var state_15441__$1 = state_15441;
if(cljs.core.truth_(inst_15432)){
var statearr_15447_18421 = state_15441__$1;
(statearr_15447_18421[(1)] = (5));

} else {
var statearr_15448_18422 = state_15441__$1;
(statearr_15448_18422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15442 === (5))){
var state_15441__$1 = state_15441;
var statearr_15449_18423 = state_15441__$1;
(statearr_15449_18423[(2)] = null);

(statearr_15449_18423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15442 === (6))){
var state_15441__$1 = state_15441;
var statearr_15450_18424 = state_15441__$1;
(statearr_15450_18424[(2)] = null);

(statearr_15450_18424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15442 === (7))){
var inst_15437 = (state_15441[(2)]);
var state_15441__$1 = state_15441;
var statearr_15451_18425 = state_15441__$1;
(statearr_15451_18425[(2)] = inst_15437);

(statearr_15451_18425[(1)] = (3));


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
});})(__18412,c__14733__auto___18419,G__15424_18413,G__15424_18414__$1,n__5593__auto___18411,jobs,results,process__$1,async))
;
return ((function (__18412,switch__14384__auto__,c__14733__auto___18419,G__15424_18413,G__15424_18414__$1,n__5593__auto___18411,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14385__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14385__auto____0 = (function (){
var statearr_15453 = [null,null,null,null,null,null,null];
(statearr_15453[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14385__auto__);

(statearr_15453[(1)] = (1));

return statearr_15453;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14385__auto____1 = (function (state_15441){
while(true){
var ret_value__14386__auto__ = (function (){try{while(true){
var result__14387__auto__ = switch__14384__auto__(state_15441);
if(cljs.core.keyword_identical_QMARK_(result__14387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14387__auto__;
}
break;
}
}catch (e15455){var ex__14388__auto__ = e15455;
var statearr_15456_18426 = state_15441;
(statearr_15456_18426[(2)] = ex__14388__auto__);


if(cljs.core.seq((state_15441[(4)]))){
var statearr_15460_18427 = state_15441;
(statearr_15460_18427[(1)] = cljs.core.first((state_15441[(4)])));

} else {
throw ex__14388__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18429 = state_15441;
state_15441 = G__18429;
continue;
} else {
return ret_value__14386__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14385__auto__ = function(state_15441){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14385__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14385__auto____1.call(this,state_15441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14385__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14385__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14385__auto__;
})()
;})(__18412,switch__14384__auto__,c__14733__auto___18419,G__15424_18413,G__15424_18414__$1,n__5593__auto___18411,jobs,results,process__$1,async))
})();
var state__14735__auto__ = (function (){var statearr_15467 = f__14734__auto__();
(statearr_15467[(6)] = c__14733__auto___18419);

return statearr_15467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14735__auto__);
});})(__18412,c__14733__auto___18419,G__15424_18413,G__15424_18414__$1,n__5593__auto___18411,jobs,results,process__$1,async))
);


break;
case "async":
var c__14733__auto___18430 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18412,c__14733__auto___18430,G__15424_18413,G__15424_18414__$1,n__5593__auto___18411,jobs,results,process__$1,async){
return (function (){
var f__14734__auto__ = (function (){var switch__14384__auto__ = ((function (__18412,c__14733__auto___18430,G__15424_18413,G__15424_18414__$1,n__5593__auto___18411,jobs,results,process__$1,async){
return (function (state_15493){
var state_val_15494 = (state_15493[(1)]);
if((state_val_15494 === (1))){
var state_15493__$1 = state_15493;
var statearr_15497_18431 = state_15493__$1;
(statearr_15497_18431[(2)] = null);

(statearr_15497_18431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15494 === (2))){
var state_15493__$1 = state_15493;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15493__$1,(4),jobs);
} else {
if((state_val_15494 === (3))){
var inst_15491 = (state_15493[(2)]);
var state_15493__$1 = state_15493;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15493__$1,inst_15491);
} else {
if((state_val_15494 === (4))){
var inst_15481 = (state_15493[(2)]);
var inst_15484 = async(inst_15481);
var state_15493__$1 = state_15493;
if(cljs.core.truth_(inst_15484)){
var statearr_15498_18432 = state_15493__$1;
(statearr_15498_18432[(1)] = (5));

} else {
var statearr_15499_18433 = state_15493__$1;
(statearr_15499_18433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15494 === (5))){
var state_15493__$1 = state_15493;
var statearr_15501_18435 = state_15493__$1;
(statearr_15501_18435[(2)] = null);

(statearr_15501_18435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15494 === (6))){
var state_15493__$1 = state_15493;
var statearr_15504_18437 = state_15493__$1;
(statearr_15504_18437[(2)] = null);

(statearr_15504_18437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15494 === (7))){
var inst_15489 = (state_15493[(2)]);
var state_15493__$1 = state_15493;
var statearr_15507_18438 = state_15493__$1;
(statearr_15507_18438[(2)] = inst_15489);

(statearr_15507_18438[(1)] = (3));


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
});})(__18412,c__14733__auto___18430,G__15424_18413,G__15424_18414__$1,n__5593__auto___18411,jobs,results,process__$1,async))
;
return ((function (__18412,switch__14384__auto__,c__14733__auto___18430,G__15424_18413,G__15424_18414__$1,n__5593__auto___18411,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14385__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14385__auto____0 = (function (){
var statearr_15511 = [null,null,null,null,null,null,null];
(statearr_15511[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14385__auto__);

(statearr_15511[(1)] = (1));

return statearr_15511;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14385__auto____1 = (function (state_15493){
while(true){
var ret_value__14386__auto__ = (function (){try{while(true){
var result__14387__auto__ = switch__14384__auto__(state_15493);
if(cljs.core.keyword_identical_QMARK_(result__14387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14387__auto__;
}
break;
}
}catch (e15516){var ex__14388__auto__ = e15516;
var statearr_15517_18440 = state_15493;
(statearr_15517_18440[(2)] = ex__14388__auto__);


if(cljs.core.seq((state_15493[(4)]))){
var statearr_15524_18442 = state_15493;
(statearr_15524_18442[(1)] = cljs.core.first((state_15493[(4)])));

} else {
throw ex__14388__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18443 = state_15493;
state_15493 = G__18443;
continue;
} else {
return ret_value__14386__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14385__auto__ = function(state_15493){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14385__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14385__auto____1.call(this,state_15493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14385__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14385__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14385__auto__;
})()
;})(__18412,switch__14384__auto__,c__14733__auto___18430,G__15424_18413,G__15424_18414__$1,n__5593__auto___18411,jobs,results,process__$1,async))
})();
var state__14735__auto__ = (function (){var statearr_15534 = f__14734__auto__();
(statearr_15534[(6)] = c__14733__auto___18430);

return statearr_15534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14735__auto__);
});})(__18412,c__14733__auto___18430,G__15424_18413,G__15424_18414__$1,n__5593__auto___18411,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15424_18414__$1)].join('')));

}

var G__18445 = (__18412 + (1));
__18412 = G__18445;
continue;
} else {
}
break;
}

var c__14733__auto___18446 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14734__auto__ = (function (){var switch__14384__auto__ = (function (state_15606){
var state_val_15607 = (state_15606[(1)]);
if((state_val_15607 === (7))){
var inst_15602 = (state_15606[(2)]);
var state_15606__$1 = state_15606;
var statearr_15609_18447 = state_15606__$1;
(statearr_15609_18447[(2)] = inst_15602);

(statearr_15609_18447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (1))){
var state_15606__$1 = state_15606;
var statearr_15610_18448 = state_15606__$1;
(statearr_15610_18448[(2)] = null);

(statearr_15610_18448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (4))){
var inst_15542 = (state_15606[(7)]);
var inst_15542__$1 = (state_15606[(2)]);
var inst_15543 = (inst_15542__$1 == null);
var state_15606__$1 = (function (){var statearr_15614 = state_15606;
(statearr_15614[(7)] = inst_15542__$1);

return statearr_15614;
})();
if(cljs.core.truth_(inst_15543)){
var statearr_15615_18453 = state_15606__$1;
(statearr_15615_18453[(1)] = (5));

} else {
var statearr_15616_18454 = state_15606__$1;
(statearr_15616_18454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (6))){
var inst_15542 = (state_15606[(7)]);
var inst_15592 = (state_15606[(8)]);
var inst_15592__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15593 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15594 = [inst_15542,inst_15592__$1];
var inst_15595 = (new cljs.core.PersistentVector(null,2,(5),inst_15593,inst_15594,null));
var state_15606__$1 = (function (){var statearr_15617 = state_15606;
(statearr_15617[(8)] = inst_15592__$1);

return statearr_15617;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15606__$1,(8),jobs,inst_15595);
} else {
if((state_val_15607 === (3))){
var inst_15604 = (state_15606[(2)]);
var state_15606__$1 = state_15606;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15606__$1,inst_15604);
} else {
if((state_val_15607 === (2))){
var state_15606__$1 = state_15606;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15606__$1,(4),from);
} else {
if((state_val_15607 === (9))){
var inst_15599 = (state_15606[(2)]);
var state_15606__$1 = (function (){var statearr_15623 = state_15606;
(statearr_15623[(9)] = inst_15599);

return statearr_15623;
})();
var statearr_15625_18458 = state_15606__$1;
(statearr_15625_18458[(2)] = null);

(statearr_15625_18458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (5))){
var inst_15590 = cljs.core.async.close_BANG_(jobs);
var state_15606__$1 = state_15606;
var statearr_15626_18459 = state_15606__$1;
(statearr_15626_18459[(2)] = inst_15590);

(statearr_15626_18459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (8))){
var inst_15592 = (state_15606[(8)]);
var inst_15597 = (state_15606[(2)]);
var state_15606__$1 = (function (){var statearr_15633 = state_15606;
(statearr_15633[(10)] = inst_15597);

return statearr_15633;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15606__$1,(9),results,inst_15592);
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
var cljs$core$async$pipeline_STAR__$_state_machine__14385__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14385__auto____0 = (function (){
var statearr_15638 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15638[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14385__auto__);

(statearr_15638[(1)] = (1));

return statearr_15638;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14385__auto____1 = (function (state_15606){
while(true){
var ret_value__14386__auto__ = (function (){try{while(true){
var result__14387__auto__ = switch__14384__auto__(state_15606);
if(cljs.core.keyword_identical_QMARK_(result__14387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14387__auto__;
}
break;
}
}catch (e15641){var ex__14388__auto__ = e15641;
var statearr_15645_18460 = state_15606;
(statearr_15645_18460[(2)] = ex__14388__auto__);


if(cljs.core.seq((state_15606[(4)]))){
var statearr_15646_18464 = state_15606;
(statearr_15646_18464[(1)] = cljs.core.first((state_15606[(4)])));

} else {
throw ex__14388__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18465 = state_15606;
state_15606 = G__18465;
continue;
} else {
return ret_value__14386__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14385__auto__ = function(state_15606){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14385__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14385__auto____1.call(this,state_15606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14385__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14385__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14385__auto__;
})()
})();
var state__14735__auto__ = (function (){var statearr_15695 = f__14734__auto__();
(statearr_15695[(6)] = c__14733__auto___18446);

return statearr_15695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14735__auto__);
}));


var c__14733__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14734__auto__ = (function (){var switch__14384__auto__ = (function (state_15739){
var state_val_15740 = (state_15739[(1)]);
if((state_val_15740 === (7))){
var inst_15735 = (state_15739[(2)]);
var state_15739__$1 = state_15739;
var statearr_15742_18466 = state_15739__$1;
(statearr_15742_18466[(2)] = inst_15735);

(statearr_15742_18466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (20))){
var state_15739__$1 = state_15739;
var statearr_15743_18468 = state_15739__$1;
(statearr_15743_18468[(2)] = null);

(statearr_15743_18468[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (1))){
var state_15739__$1 = state_15739;
var statearr_15746_18471 = state_15739__$1;
(statearr_15746_18471[(2)] = null);

(statearr_15746_18471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (4))){
var inst_15698 = (state_15739[(7)]);
var inst_15698__$1 = (state_15739[(2)]);
var inst_15699 = (inst_15698__$1 == null);
var state_15739__$1 = (function (){var statearr_15747 = state_15739;
(statearr_15747[(7)] = inst_15698__$1);

return statearr_15747;
})();
if(cljs.core.truth_(inst_15699)){
var statearr_15748_18472 = state_15739__$1;
(statearr_15748_18472[(1)] = (5));

} else {
var statearr_15749_18473 = state_15739__$1;
(statearr_15749_18473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (15))){
var inst_15712 = (state_15739[(8)]);
var state_15739__$1 = state_15739;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15739__$1,(18),to,inst_15712);
} else {
if((state_val_15740 === (21))){
var inst_15729 = (state_15739[(2)]);
var state_15739__$1 = state_15739;
var statearr_15750_18474 = state_15739__$1;
(statearr_15750_18474[(2)] = inst_15729);

(statearr_15750_18474[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (13))){
var inst_15731 = (state_15739[(2)]);
var state_15739__$1 = (function (){var statearr_15752 = state_15739;
(statearr_15752[(9)] = inst_15731);

return statearr_15752;
})();
var statearr_15753_18475 = state_15739__$1;
(statearr_15753_18475[(2)] = null);

(statearr_15753_18475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (6))){
var inst_15698 = (state_15739[(7)]);
var state_15739__$1 = state_15739;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15739__$1,(11),inst_15698);
} else {
if((state_val_15740 === (17))){
var inst_15724 = (state_15739[(2)]);
var state_15739__$1 = state_15739;
if(cljs.core.truth_(inst_15724)){
var statearr_15754_18476 = state_15739__$1;
(statearr_15754_18476[(1)] = (19));

} else {
var statearr_15755_18477 = state_15739__$1;
(statearr_15755_18477[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (3))){
var inst_15737 = (state_15739[(2)]);
var state_15739__$1 = state_15739;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15739__$1,inst_15737);
} else {
if((state_val_15740 === (12))){
var inst_15709 = (state_15739[(10)]);
var state_15739__$1 = state_15739;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15739__$1,(14),inst_15709);
} else {
if((state_val_15740 === (2))){
var state_15739__$1 = state_15739;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15739__$1,(4),results);
} else {
if((state_val_15740 === (19))){
var state_15739__$1 = state_15739;
var statearr_15756_18482 = state_15739__$1;
(statearr_15756_18482[(2)] = null);

(statearr_15756_18482[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (11))){
var inst_15709 = (state_15739[(2)]);
var state_15739__$1 = (function (){var statearr_15757 = state_15739;
(statearr_15757[(10)] = inst_15709);

return statearr_15757;
})();
var statearr_15758_18483 = state_15739__$1;
(statearr_15758_18483[(2)] = null);

(statearr_15758_18483[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (9))){
var state_15739__$1 = state_15739;
var statearr_15759_18484 = state_15739__$1;
(statearr_15759_18484[(2)] = null);

(statearr_15759_18484[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (5))){
var state_15739__$1 = state_15739;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15760_18485 = state_15739__$1;
(statearr_15760_18485[(1)] = (8));

} else {
var statearr_15761_18486 = state_15739__$1;
(statearr_15761_18486[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (14))){
var inst_15715 = (state_15739[(11)]);
var inst_15712 = (state_15739[(8)]);
var inst_15712__$1 = (state_15739[(2)]);
var inst_15714 = (inst_15712__$1 == null);
var inst_15715__$1 = cljs.core.not(inst_15714);
var state_15739__$1 = (function (){var statearr_15762 = state_15739;
(statearr_15762[(11)] = inst_15715__$1);

(statearr_15762[(8)] = inst_15712__$1);

return statearr_15762;
})();
if(inst_15715__$1){
var statearr_15763_18487 = state_15739__$1;
(statearr_15763_18487[(1)] = (15));

} else {
var statearr_15764_18488 = state_15739__$1;
(statearr_15764_18488[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (16))){
var inst_15715 = (state_15739[(11)]);
var state_15739__$1 = state_15739;
var statearr_15765_18489 = state_15739__$1;
(statearr_15765_18489[(2)] = inst_15715);

(statearr_15765_18489[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (10))){
var inst_15706 = (state_15739[(2)]);
var state_15739__$1 = state_15739;
var statearr_15766_18490 = state_15739__$1;
(statearr_15766_18490[(2)] = inst_15706);

(statearr_15766_18490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (18))){
var inst_15721 = (state_15739[(2)]);
var state_15739__$1 = state_15739;
var statearr_15768_18491 = state_15739__$1;
(statearr_15768_18491[(2)] = inst_15721);

(statearr_15768_18491[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15740 === (8))){
var inst_15703 = cljs.core.async.close_BANG_(to);
var state_15739__$1 = state_15739;
var statearr_15769_18492 = state_15739__$1;
(statearr_15769_18492[(2)] = inst_15703);

(statearr_15769_18492[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__14385__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14385__auto____0 = (function (){
var statearr_15770 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15770[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14385__auto__);

(statearr_15770[(1)] = (1));

return statearr_15770;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14385__auto____1 = (function (state_15739){
while(true){
var ret_value__14386__auto__ = (function (){try{while(true){
var result__14387__auto__ = switch__14384__auto__(state_15739);
if(cljs.core.keyword_identical_QMARK_(result__14387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14387__auto__;
}
break;
}
}catch (e15771){var ex__14388__auto__ = e15771;
var statearr_15772_18493 = state_15739;
(statearr_15772_18493[(2)] = ex__14388__auto__);


if(cljs.core.seq((state_15739[(4)]))){
var statearr_15773_18494 = state_15739;
(statearr_15773_18494[(1)] = cljs.core.first((state_15739[(4)])));

} else {
throw ex__14388__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18495 = state_15739;
state_15739 = G__18495;
continue;
} else {
return ret_value__14386__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14385__auto__ = function(state_15739){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14385__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14385__auto____1.call(this,state_15739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14385__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14385__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14385__auto__;
})()
})();
var state__14735__auto__ = (function (){var statearr_15774 = f__14734__auto__();
(statearr_15774[(6)] = c__14733__auto__);

return statearr_15774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14735__auto__);
}));

return c__14733__auto__;
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
var G__15776 = arguments.length;
switch (G__15776) {
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
var G__15779 = arguments.length;
switch (G__15779) {
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
var G__15792 = arguments.length;
switch (G__15792) {
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
var c__14733__auto___18503 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14734__auto__ = (function (){var switch__14384__auto__ = (function (state_15822){
var state_val_15823 = (state_15822[(1)]);
if((state_val_15823 === (7))){
var inst_15818 = (state_15822[(2)]);
var state_15822__$1 = state_15822;
var statearr_15824_18504 = state_15822__$1;
(statearr_15824_18504[(2)] = inst_15818);

(statearr_15824_18504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (1))){
var state_15822__$1 = state_15822;
var statearr_15825_18505 = state_15822__$1;
(statearr_15825_18505[(2)] = null);

(statearr_15825_18505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (4))){
var inst_15798 = (state_15822[(7)]);
var inst_15798__$1 = (state_15822[(2)]);
var inst_15799 = (inst_15798__$1 == null);
var state_15822__$1 = (function (){var statearr_15826 = state_15822;
(statearr_15826[(7)] = inst_15798__$1);

return statearr_15826;
})();
if(cljs.core.truth_(inst_15799)){
var statearr_15827_18506 = state_15822__$1;
(statearr_15827_18506[(1)] = (5));

} else {
var statearr_15829_18507 = state_15822__$1;
(statearr_15829_18507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (13))){
var state_15822__$1 = state_15822;
var statearr_15831_18508 = state_15822__$1;
(statearr_15831_18508[(2)] = null);

(statearr_15831_18508[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (6))){
var inst_15798 = (state_15822[(7)]);
var inst_15805 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15798) : p.call(null,inst_15798));
var state_15822__$1 = state_15822;
if(cljs.core.truth_(inst_15805)){
var statearr_15832_18509 = state_15822__$1;
(statearr_15832_18509[(1)] = (9));

} else {
var statearr_15833_18510 = state_15822__$1;
(statearr_15833_18510[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (3))){
var inst_15820 = (state_15822[(2)]);
var state_15822__$1 = state_15822;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15822__$1,inst_15820);
} else {
if((state_val_15823 === (12))){
var state_15822__$1 = state_15822;
var statearr_15836_18514 = state_15822__$1;
(statearr_15836_18514[(2)] = null);

(statearr_15836_18514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (2))){
var state_15822__$1 = state_15822;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15822__$1,(4),ch);
} else {
if((state_val_15823 === (11))){
var inst_15798 = (state_15822[(7)]);
var inst_15809 = (state_15822[(2)]);
var state_15822__$1 = state_15822;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15822__$1,(8),inst_15809,inst_15798);
} else {
if((state_val_15823 === (9))){
var state_15822__$1 = state_15822;
var statearr_15842_18515 = state_15822__$1;
(statearr_15842_18515[(2)] = tc);

(statearr_15842_18515[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (5))){
var inst_15801 = cljs.core.async.close_BANG_(tc);
var inst_15802 = cljs.core.async.close_BANG_(fc);
var state_15822__$1 = (function (){var statearr_15845 = state_15822;
(statearr_15845[(8)] = inst_15801);

return statearr_15845;
})();
var statearr_15846_18516 = state_15822__$1;
(statearr_15846_18516[(2)] = inst_15802);

(statearr_15846_18516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (14))){
var inst_15816 = (state_15822[(2)]);
var state_15822__$1 = state_15822;
var statearr_15847_18523 = state_15822__$1;
(statearr_15847_18523[(2)] = inst_15816);

(statearr_15847_18523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (10))){
var state_15822__$1 = state_15822;
var statearr_15848_18524 = state_15822__$1;
(statearr_15848_18524[(2)] = fc);

(statearr_15848_18524[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15823 === (8))){
var inst_15811 = (state_15822[(2)]);
var state_15822__$1 = state_15822;
if(cljs.core.truth_(inst_15811)){
var statearr_15849_18525 = state_15822__$1;
(statearr_15849_18525[(1)] = (12));

} else {
var statearr_15850_18526 = state_15822__$1;
(statearr_15850_18526[(1)] = (13));

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
var cljs$core$async$state_machine__14385__auto__ = null;
var cljs$core$async$state_machine__14385__auto____0 = (function (){
var statearr_15852 = [null,null,null,null,null,null,null,null,null];
(statearr_15852[(0)] = cljs$core$async$state_machine__14385__auto__);

(statearr_15852[(1)] = (1));

return statearr_15852;
});
var cljs$core$async$state_machine__14385__auto____1 = (function (state_15822){
while(true){
var ret_value__14386__auto__ = (function (){try{while(true){
var result__14387__auto__ = switch__14384__auto__(state_15822);
if(cljs.core.keyword_identical_QMARK_(result__14387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14387__auto__;
}
break;
}
}catch (e15853){var ex__14388__auto__ = e15853;
var statearr_15854_18533 = state_15822;
(statearr_15854_18533[(2)] = ex__14388__auto__);


if(cljs.core.seq((state_15822[(4)]))){
var statearr_15855_18534 = state_15822;
(statearr_15855_18534[(1)] = cljs.core.first((state_15822[(4)])));

} else {
throw ex__14388__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18535 = state_15822;
state_15822 = G__18535;
continue;
} else {
return ret_value__14386__auto__;
}
break;
}
});
cljs$core$async$state_machine__14385__auto__ = function(state_15822){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14385__auto____1.call(this,state_15822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14385__auto____0;
cljs$core$async$state_machine__14385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14385__auto____1;
return cljs$core$async$state_machine__14385__auto__;
})()
})();
var state__14735__auto__ = (function (){var statearr_15860 = f__14734__auto__();
(statearr_15860[(6)] = c__14733__auto___18503);

return statearr_15860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14735__auto__);
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
var c__14733__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14734__auto__ = (function (){var switch__14384__auto__ = (function (state_15882){
var state_val_15883 = (state_15882[(1)]);
if((state_val_15883 === (7))){
var inst_15878 = (state_15882[(2)]);
var state_15882__$1 = state_15882;
var statearr_15885_18536 = state_15882__$1;
(statearr_15885_18536[(2)] = inst_15878);

(statearr_15885_18536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (1))){
var inst_15861 = init;
var inst_15862 = inst_15861;
var state_15882__$1 = (function (){var statearr_15886 = state_15882;
(statearr_15886[(7)] = inst_15862);

return statearr_15886;
})();
var statearr_15887_18537 = state_15882__$1;
(statearr_15887_18537[(2)] = null);

(statearr_15887_18537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (4))){
var inst_15865 = (state_15882[(8)]);
var inst_15865__$1 = (state_15882[(2)]);
var inst_15866 = (inst_15865__$1 == null);
var state_15882__$1 = (function (){var statearr_15888 = state_15882;
(statearr_15888[(8)] = inst_15865__$1);

return statearr_15888;
})();
if(cljs.core.truth_(inst_15866)){
var statearr_15889_18541 = state_15882__$1;
(statearr_15889_18541[(1)] = (5));

} else {
var statearr_15890_18542 = state_15882__$1;
(statearr_15890_18542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (6))){
var inst_15862 = (state_15882[(7)]);
var inst_15869 = (state_15882[(9)]);
var inst_15865 = (state_15882[(8)]);
var inst_15869__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15862,inst_15865) : f.call(null,inst_15862,inst_15865));
var inst_15870 = cljs.core.reduced_QMARK_(inst_15869__$1);
var state_15882__$1 = (function (){var statearr_15891 = state_15882;
(statearr_15891[(9)] = inst_15869__$1);

return statearr_15891;
})();
if(inst_15870){
var statearr_15892_18548 = state_15882__$1;
(statearr_15892_18548[(1)] = (8));

} else {
var statearr_15893_18549 = state_15882__$1;
(statearr_15893_18549[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (3))){
var inst_15880 = (state_15882[(2)]);
var state_15882__$1 = state_15882;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15882__$1,inst_15880);
} else {
if((state_val_15883 === (2))){
var state_15882__$1 = state_15882;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15882__$1,(4),ch);
} else {
if((state_val_15883 === (9))){
var inst_15869 = (state_15882[(9)]);
var inst_15862 = inst_15869;
var state_15882__$1 = (function (){var statearr_15894 = state_15882;
(statearr_15894[(7)] = inst_15862);

return statearr_15894;
})();
var statearr_15895_18558 = state_15882__$1;
(statearr_15895_18558[(2)] = null);

(statearr_15895_18558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (5))){
var inst_15862 = (state_15882[(7)]);
var state_15882__$1 = state_15882;
var statearr_15897_18559 = state_15882__$1;
(statearr_15897_18559[(2)] = inst_15862);

(statearr_15897_18559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (10))){
var inst_15876 = (state_15882[(2)]);
var state_15882__$1 = state_15882;
var statearr_15898_18560 = state_15882__$1;
(statearr_15898_18560[(2)] = inst_15876);

(statearr_15898_18560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15883 === (8))){
var inst_15869 = (state_15882[(9)]);
var inst_15872 = cljs.core.deref(inst_15869);
var state_15882__$1 = state_15882;
var statearr_15899_18562 = state_15882__$1;
(statearr_15899_18562[(2)] = inst_15872);

(statearr_15899_18562[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__14385__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14385__auto____0 = (function (){
var statearr_15900 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15900[(0)] = cljs$core$async$reduce_$_state_machine__14385__auto__);

(statearr_15900[(1)] = (1));

return statearr_15900;
});
var cljs$core$async$reduce_$_state_machine__14385__auto____1 = (function (state_15882){
while(true){
var ret_value__14386__auto__ = (function (){try{while(true){
var result__14387__auto__ = switch__14384__auto__(state_15882);
if(cljs.core.keyword_identical_QMARK_(result__14387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14387__auto__;
}
break;
}
}catch (e15901){var ex__14388__auto__ = e15901;
var statearr_15902_18575 = state_15882;
(statearr_15902_18575[(2)] = ex__14388__auto__);


if(cljs.core.seq((state_15882[(4)]))){
var statearr_15903_18576 = state_15882;
(statearr_15903_18576[(1)] = cljs.core.first((state_15882[(4)])));

} else {
throw ex__14388__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18577 = state_15882;
state_15882 = G__18577;
continue;
} else {
return ret_value__14386__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14385__auto__ = function(state_15882){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14385__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14385__auto____1.call(this,state_15882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14385__auto____0;
cljs$core$async$reduce_$_state_machine__14385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14385__auto____1;
return cljs$core$async$reduce_$_state_machine__14385__auto__;
})()
})();
var state__14735__auto__ = (function (){var statearr_15905 = f__14734__auto__();
(statearr_15905[(6)] = c__14733__auto__);

return statearr_15905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14735__auto__);
}));

return c__14733__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14733__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14734__auto__ = (function (){var switch__14384__auto__ = (function (state_15912){
var state_val_15913 = (state_15912[(1)]);
if((state_val_15913 === (1))){
var inst_15907 = cljs.core.async.reduce(f__$1,init,ch);
var state_15912__$1 = state_15912;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15912__$1,(2),inst_15907);
} else {
if((state_val_15913 === (2))){
var inst_15909 = (state_15912[(2)]);
var inst_15910 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15909) : f__$1.call(null,inst_15909));
var state_15912__$1 = state_15912;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15912__$1,inst_15910);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14385__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14385__auto____0 = (function (){
var statearr_15918 = [null,null,null,null,null,null,null];
(statearr_15918[(0)] = cljs$core$async$transduce_$_state_machine__14385__auto__);

(statearr_15918[(1)] = (1));

return statearr_15918;
});
var cljs$core$async$transduce_$_state_machine__14385__auto____1 = (function (state_15912){
while(true){
var ret_value__14386__auto__ = (function (){try{while(true){
var result__14387__auto__ = switch__14384__auto__(state_15912);
if(cljs.core.keyword_identical_QMARK_(result__14387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14387__auto__;
}
break;
}
}catch (e15924){var ex__14388__auto__ = e15924;
var statearr_15925_18578 = state_15912;
(statearr_15925_18578[(2)] = ex__14388__auto__);


if(cljs.core.seq((state_15912[(4)]))){
var statearr_15933_18579 = state_15912;
(statearr_15933_18579[(1)] = cljs.core.first((state_15912[(4)])));

} else {
throw ex__14388__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18580 = state_15912;
state_15912 = G__18580;
continue;
} else {
return ret_value__14386__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14385__auto__ = function(state_15912){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14385__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14385__auto____1.call(this,state_15912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14385__auto____0;
cljs$core$async$transduce_$_state_machine__14385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14385__auto____1;
return cljs$core$async$transduce_$_state_machine__14385__auto__;
})()
})();
var state__14735__auto__ = (function (){var statearr_15934 = f__14734__auto__();
(statearr_15934[(6)] = c__14733__auto__);

return statearr_15934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14735__auto__);
}));

return c__14733__auto__;
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
var G__15938 = arguments.length;
switch (G__15938) {
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
var c__14733__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14734__auto__ = (function (){var switch__14384__auto__ = (function (state_15964){
var state_val_15965 = (state_15964[(1)]);
if((state_val_15965 === (7))){
var inst_15946 = (state_15964[(2)]);
var state_15964__$1 = state_15964;
var statearr_15967_18585 = state_15964__$1;
(statearr_15967_18585[(2)] = inst_15946);

(statearr_15967_18585[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15965 === (1))){
var inst_15940 = cljs.core.seq(coll);
var inst_15941 = inst_15940;
var state_15964__$1 = (function (){var statearr_15968 = state_15964;
(statearr_15968[(7)] = inst_15941);

return statearr_15968;
})();
var statearr_15969_18586 = state_15964__$1;
(statearr_15969_18586[(2)] = null);

(statearr_15969_18586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15965 === (4))){
var inst_15941 = (state_15964[(7)]);
var inst_15944 = cljs.core.first(inst_15941);
var state_15964__$1 = state_15964;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15964__$1,(7),ch,inst_15944);
} else {
if((state_val_15965 === (13))){
var inst_15958 = (state_15964[(2)]);
var state_15964__$1 = state_15964;
var statearr_15973_18587 = state_15964__$1;
(statearr_15973_18587[(2)] = inst_15958);

(statearr_15973_18587[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15965 === (6))){
var inst_15949 = (state_15964[(2)]);
var state_15964__$1 = state_15964;
if(cljs.core.truth_(inst_15949)){
var statearr_15974_18588 = state_15964__$1;
(statearr_15974_18588[(1)] = (8));

} else {
var statearr_15975_18589 = state_15964__$1;
(statearr_15975_18589[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15965 === (3))){
var inst_15962 = (state_15964[(2)]);
var state_15964__$1 = state_15964;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15964__$1,inst_15962);
} else {
if((state_val_15965 === (12))){
var state_15964__$1 = state_15964;
var statearr_15977_18590 = state_15964__$1;
(statearr_15977_18590[(2)] = null);

(statearr_15977_18590[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15965 === (2))){
var inst_15941 = (state_15964[(7)]);
var state_15964__$1 = state_15964;
if(cljs.core.truth_(inst_15941)){
var statearr_15984_18591 = state_15964__$1;
(statearr_15984_18591[(1)] = (4));

} else {
var statearr_15987_18592 = state_15964__$1;
(statearr_15987_18592[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15965 === (11))){
var inst_15955 = cljs.core.async.close_BANG_(ch);
var state_15964__$1 = state_15964;
var statearr_15988_18593 = state_15964__$1;
(statearr_15988_18593[(2)] = inst_15955);

(statearr_15988_18593[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15965 === (9))){
var state_15964__$1 = state_15964;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15989_18594 = state_15964__$1;
(statearr_15989_18594[(1)] = (11));

} else {
var statearr_15990_18595 = state_15964__$1;
(statearr_15990_18595[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15965 === (5))){
var inst_15941 = (state_15964[(7)]);
var state_15964__$1 = state_15964;
var statearr_15991_18596 = state_15964__$1;
(statearr_15991_18596[(2)] = inst_15941);

(statearr_15991_18596[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15965 === (10))){
var inst_15960 = (state_15964[(2)]);
var state_15964__$1 = state_15964;
var statearr_15994_18597 = state_15964__$1;
(statearr_15994_18597[(2)] = inst_15960);

(statearr_15994_18597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15965 === (8))){
var inst_15941 = (state_15964[(7)]);
var inst_15951 = cljs.core.next(inst_15941);
var inst_15941__$1 = inst_15951;
var state_15964__$1 = (function (){var statearr_15999 = state_15964;
(statearr_15999[(7)] = inst_15941__$1);

return statearr_15999;
})();
var statearr_16001_18598 = state_15964__$1;
(statearr_16001_18598[(2)] = null);

(statearr_16001_18598[(1)] = (2));


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
var cljs$core$async$state_machine__14385__auto__ = null;
var cljs$core$async$state_machine__14385__auto____0 = (function (){
var statearr_16004 = [null,null,null,null,null,null,null,null];
(statearr_16004[(0)] = cljs$core$async$state_machine__14385__auto__);

(statearr_16004[(1)] = (1));

return statearr_16004;
});
var cljs$core$async$state_machine__14385__auto____1 = (function (state_15964){
while(true){
var ret_value__14386__auto__ = (function (){try{while(true){
var result__14387__auto__ = switch__14384__auto__(state_15964);
if(cljs.core.keyword_identical_QMARK_(result__14387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14387__auto__;
}
break;
}
}catch (e16005){var ex__14388__auto__ = e16005;
var statearr_16006_18599 = state_15964;
(statearr_16006_18599[(2)] = ex__14388__auto__);


if(cljs.core.seq((state_15964[(4)]))){
var statearr_16008_18600 = state_15964;
(statearr_16008_18600[(1)] = cljs.core.first((state_15964[(4)])));

} else {
throw ex__14388__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18606 = state_15964;
state_15964 = G__18606;
continue;
} else {
return ret_value__14386__auto__;
}
break;
}
});
cljs$core$async$state_machine__14385__auto__ = function(state_15964){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14385__auto____1.call(this,state_15964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14385__auto____0;
cljs$core$async$state_machine__14385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14385__auto____1;
return cljs$core$async$state_machine__14385__auto__;
})()
})();
var state__14735__auto__ = (function (){var statearr_16013 = f__14734__auto__();
(statearr_16013[(6)] = c__14733__auto__);

return statearr_16013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14735__auto__);
}));

return c__14733__auto__;
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
var G__16024 = arguments.length;
switch (G__16024) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_18613 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_18613(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18614 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_18614(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18615 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_18615(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18620 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_18620(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16045 = (function (ch,cs,meta16046){
this.ch = ch;
this.cs = cs;
this.meta16046 = meta16046;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16047,meta16046__$1){
var self__ = this;
var _16047__$1 = this;
return (new cljs.core.async.t_cljs$core$async16045(self__.ch,self__.cs,meta16046__$1));
}));

(cljs.core.async.t_cljs$core$async16045.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16047){
var self__ = this;
var _16047__$1 = this;
return self__.meta16046;
}));

(cljs.core.async.t_cljs$core$async16045.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16045.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16045.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16045.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async16045.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async16045.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async16045.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16046","meta16046",-1986919916,null)], null);
}));

(cljs.core.async.t_cljs$core$async16045.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16045.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16045");

(cljs.core.async.t_cljs$core$async16045.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16045");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16045.
 */
cljs.core.async.__GT_t_cljs$core$async16045 = (function cljs$core$async$__GT_t_cljs$core$async16045(ch,cs,meta16046){
return (new cljs.core.async.t_cljs$core$async16045(ch,cs,meta16046));
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
var m = (new cljs.core.async.t_cljs$core$async16045(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14733__auto___18627 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14734__auto__ = (function (){var switch__14384__auto__ = (function (state_16246){
var state_val_16247 = (state_16246[(1)]);
if((state_val_16247 === (7))){
var inst_16240 = (state_16246[(2)]);
var state_16246__$1 = state_16246;
var statearr_16252_18628 = state_16246__$1;
(statearr_16252_18628[(2)] = inst_16240);

(statearr_16252_18628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16247 === (20))){
var inst_16128 = (state_16246[(7)]);
var inst_16148 = cljs.core.first(inst_16128);
var inst_16153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16148,(0),null);
var inst_16154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16148,(1),null);
var state_16246__$1 = (function (){var statearr_16254 = state_16246;
(statearr_16254[(8)] = inst_16153);

return statearr_16254;
})();
if(cljs.core.truth_(inst_16154)){
var statearr_16255_18632 = state_16246__$1;
(statearr_16255_18632[(1)] = (22));

} else {
var statearr_16256_18633 = state_16246__$1;
(statearr_16256_18633[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16247 === (27))){
var inst_16183 = (state_16246[(9)]);
var inst_16191 = (state_16246[(10)]);
var inst_16090 = (state_16246[(11)]);
var inst_16185 = (state_16246[(12)]);
var inst_16191__$1 = cljs.core._nth(inst_16183,inst_16185);
var inst_16192 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16191__$1,inst_16090,done);
var state_16246__$1 = (function (){var statearr_16260 = state_16246;
(statearr_16260[(10)] = inst_16191__$1);

return statearr_16260;
})();
if(cljs.core.truth_(inst_16192)){
var statearr_16262_18634 = state_16246__$1;
(statearr_16262_18634[(1)] = (30));

} else {
var statearr_16263_18635 = state_16246__$1;
(statearr_16263_18635[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16247 === (1))){
var state_16246__$1 = state_16246;
var statearr_16266_18636 = state_16246__$1;
(statearr_16266_18636[(2)] = null);

(statearr_16266_18636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16247 === (24))){
var inst_16128 = (state_16246[(7)]);
var inst_16159 = (state_16246[(2)]);
var inst_16160 = cljs.core.next(inst_16128);
var inst_16100 = inst_16160;
var inst_16101 = null;
var inst_16102 = (0);
var inst_16103 = (0);
var state_16246__$1 = (function (){var statearr_16268 = state_16246;
(statearr_16268[(13)] = inst_16103);

(statearr_16268[(14)] = inst_16102);

(statearr_16268[(15)] = inst_16101);

(statearr_16268[(16)] = inst_16159);

(statearr_16268[(17)] = inst_16100);

return statearr_16268;
})();
var statearr_16269_18641 = state_16246__$1;
(statearr_16269_18641[(2)] = null);

(statearr_16269_18641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16247 === (39))){
var state_16246__$1 = state_16246;
var statearr_16285_18642 = state_16246__$1;
(statearr_16285_18642[(2)] = null);

(statearr_16285_18642[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16247 === (4))){
var inst_16090 = (state_16246[(11)]);
var inst_16090__$1 = (state_16246[(2)]);
var inst_16092 = (inst_16090__$1 == null);
var state_16246__$1 = (function (){var statearr_16286 = state_16246;
(statearr_16286[(11)] = inst_16090__$1);

return statearr_16286;
})();
if(cljs.core.truth_(inst_16092)){
var statearr_16290_18643 = state_16246__$1;
(statearr_16290_18643[(1)] = (5));

} else {
var statearr_16291_18644 = state_16246__$1;
(statearr_16291_18644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16247 === (15))){
var inst_16103 = (state_16246[(13)]);
var inst_16102 = (state_16246[(14)]);
var inst_16101 = (state_16246[(15)]);
var inst_16100 = (state_16246[(17)]);
var inst_16123 = (state_16246[(2)]);
var inst_16124 = (inst_16103 + (1));
var tmp16272 = inst_16102;
var tmp16273 = inst_16101;
var tmp16274 = inst_16100;
var inst_16100__$1 = tmp16274;
var inst_16101__$1 = tmp16273;
var inst_16102__$1 = tmp16272;
var inst_16103__$1 = inst_16124;
var state_16246__$1 = (function (){var statearr_16296 = state_16246;
(statearr_16296[(18)] = inst_16123);

(statearr_16296[(13)] = inst_16103__$1);

(statearr_16296[(14)] = inst_16102__$1);

(statearr_16296[(15)] = inst_16101__$1);

(statearr_16296[(17)] = inst_16100__$1);

return statearr_16296;
})();
var statearr_16297_18645 = state_16246__$1;
(statearr_16297_18645[(2)] = null);

(statearr_16297_18645[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16247 === (21))){
var inst_16163 = (state_16246[(2)]);
var state_16246__$1 = state_16246;
var statearr_16301_18646 = state_16246__$1;
(statearr_16301_18646[(2)] = inst_16163);

(statearr_16301_18646[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16247 === (31))){
var inst_16191 = (state_16246[(10)]);
var inst_16195 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16191);
var state_16246__$1 = state_16246;
var statearr_16304_18647 = state_16246__$1;
(statearr_16304_18647[(2)] = inst_16195);

(statearr_16304_18647[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16247 === (32))){
var inst_16182 = (state_16246[(19)]);
var inst_16183 = (state_16246[(9)]);
var inst_16184 = (state_16246[(20)]);
var inst_16185 = (state_16246[(12)]);
var inst_16198 = (state_16246[(2)]);
var inst_16199 = (inst_16185 + (1));
var tmp16298 = inst_16182;
var tmp16299 = inst_16183;
var tmp16300 = inst_16184;
var inst_16182__$1 = tmp16298;
var inst_16183__$1 = tmp16299;
var inst_16184__$1 = tmp16300;
var inst_16185__$1 = inst_16199;
var state_16246__$1 = (function (){var statearr_16308 = state_16246;
(statearr_16308[(19)] = inst_16182__$1);

(statearr_16308[(9)] = inst_16183__$1);

(statearr_16308[(21)] = inst_16198);

(statearr_16308[(20)] = inst_16184__$1);

(statearr_16308[(12)] = inst_16185__$1);

return statearr_16308;
})();
var statearr_16310_18651 = state_16246__$1;
(statearr_16310_18651[(2)] = null);

(statearr_16310_18651[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16247 === (40))){
var inst_16211 = (state_16246[(22)]);
var inst_16217 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16211);
var state_16246__$1 = state_16246;
var statearr_16311_18652 = state_16246__$1;
(statearr_16311_18652[(2)] = inst_16217);

(statearr_16311_18652[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16247 === (33))){
var inst_16202 = (state_16246[(23)]);
var inst_16204 = cljs.core.chunked_seq_QMARK_(inst_16202);
var state_16246__$1 = state_16246;
if(inst_16204){
var statearr_16312_18660 = state_16246__$1;
(statearr_16312_18660[(1)] = (36));

} else {
var statearr_16315_18661 = state_16246__$1;
(statearr_16315_18661[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16247 === (13))){
var inst_16117 = (state_16246[(24)]);
var inst_16120 = cljs.core.async.close_BANG_(inst_16117);
var state_16246__$1 = state_16246;
var statearr_16318_18666 = state_16246__$1;
(statearr_16318_18666[(2)] = inst_16120);

(statearr_16318_18666[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16247 === (22))){
var inst_16153 = (state_16246[(8)]);
var inst_16156 = cljs.core.async.close_BANG_(inst_16153);
var state_16246__$1 = state_16246;
var statearr_16320_18667 = state_16246__$1;
(statearr_16320_18667[(2)] = inst_16156);

(statearr_16320_18667[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16247 === (36))){
var inst_16202 = (state_16246[(23)]);
var inst_16206 = cljs.core.chunk_first(inst_16202);
var inst_16207 = cljs.core.chunk_rest(inst_16202);
var inst_16208 = cljs.core.count(inst_16206);
var inst_16182 = inst_16207;
var inst_16183 = inst_16206;
var inst_16184 = inst_16208;
var inst_16185 = (0);
var state_16246__$1 = (function (){var statearr_16322 = state_16246;
(statearr_16322[(19)] = inst_16182);

(statearr_16322[(9)] = inst_16183);

(statearr_16322[(20)] = inst_16184);

(statearr_16322[(12)] = inst_16185);

return statearr_16322;
})();
var statearr_16324_18671 = state_16246__$1;
(statearr_16324_18671[(2)] = null);

(statearr_16324_18671[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16247 === (41))){
var inst_16202 = (state_16246[(23)]);
var inst_16219 = (state_16246[(2)]);
var inst_16220 = cljs.core.next(inst_16202);
var inst_16182 = inst_16220;
var inst_16183 = null;
var inst_16184 = (0);
var inst_16185 = (0);
var state_16246__$1 = (function (){var statearr_16326 = state_16246;
(statearr_16326[(25)] = inst_16219);

(statearr_16326[(19)] = inst_16182);

(statearr_16326[(9)] = inst_16183);

(statearr_16326[(20)] = inst_16184);

(statearr_16326[(12)] = inst_16185);

return statearr_16326;
})();
var statearr_16327_18672 = state_16246__$1;
(statearr_16327_18672[(2)] = null);

(statearr_16327_18672[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16247 === (43))){
var state_16246__$1 = state_16246;
var statearr_16328_18673 = state_16246__$1;
(statearr_16328_18673[(2)] = null);

(statearr_16328_18673[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16247 === (29))){
var inst_16228 = (state_16246[(2)]);
var state_16246__$1 = state_16246;
var statearr_16329_18674 = state_16246__$1;
(statearr_16329_18674[(2)] = inst_16228);

(statearr_16329_18674[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16247 === (44))){
var inst_16237 = (state_16246[(2)]);
var state_16246__$1 = (function (){var statearr_16331 = state_16246;
(statearr_16331[(26)] = inst_16237);

return statearr_16331;
})();
var statearr_16335_18675 = state_16246__$1;
(statearr_16335_18675[(2)] = null);

(statearr_16335_18675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16247 === (6))){
var inst_16174 = (state_16246[(27)]);
var inst_16173 = cljs.core.deref(cs);
var inst_16174__$1 = cljs.core.keys(inst_16173);
var inst_16175 = cljs.core.count(inst_16174__$1);
var inst_16176 = cljs.core.reset_BANG_(dctr,inst_16175);
var inst_16181 = cljs.core.seq(inst_16174__$1);
var inst_16182 = inst_16181;
var inst_16183 = null;
var inst_16184 = (0);
var inst_16185 = (0);
var state_16246__$1 = (function (){var statearr_16336 = state_16246;
(statearr_16336[(28)] = inst_16176);

(statearr_16336[(19)] = inst_16182);

(statearr_16336[(9)] = inst_16183);

(statearr_16336[(20)] = inst_16184);

(statearr_16336[(27)] = inst_16174__$1);

(statearr_16336[(12)] = inst_16185);

return statearr_16336;
})();
var statearr_16338_18676 = state_16246__$1;
(statearr_16338_18676[(2)] = null);

(statearr_16338_18676[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16247 === (28))){
var inst_16182 = (state_16246[(19)]);
var inst_16202 = (state_16246[(23)]);
var inst_16202__$1 = cljs.core.seq(inst_16182);
var state_16246__$1 = (function (){var statearr_16339 = state_16246;
(statearr_16339[(23)] = inst_16202__$1);

return statearr_16339;
})();
if(inst_16202__$1){
var statearr_16341_18677 = state_16246__$1;
(statearr_16341_18677[(1)] = (33));

} else {
var statearr_16342_18678 = state_16246__$1;
(statearr_16342_18678[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16247 === (25))){
var inst_16184 = (state_16246[(20)]);
var inst_16185 = (state_16246[(12)]);
var inst_16188 = (inst_16185 < inst_16184);
var inst_16189 = inst_16188;
var state_16246__$1 = state_16246;
if(cljs.core.truth_(inst_16189)){
var statearr_16343_18679 = state_16246__$1;
(statearr_16343_18679[(1)] = (27));

} else {
var statearr_16344_18680 = state_16246__$1;
(statearr_16344_18680[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16247 === (34))){
var state_16246__$1 = state_16246;
var statearr_16345_18681 = state_16246__$1;
(statearr_16345_18681[(2)] = null);

(statearr_16345_18681[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16247 === (17))){
var state_16246__$1 = state_16246;
var statearr_16346_18682 = state_16246__$1;
(statearr_16346_18682[(2)] = null);

(statearr_16346_18682[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16247 === (3))){
var inst_16242 = (state_16246[(2)]);
var state_16246__$1 = state_16246;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16246__$1,inst_16242);
} else {
if((state_val_16247 === (12))){
var inst_16169 = (state_16246[(2)]);
var state_16246__$1 = state_16246;
var statearr_16348_18683 = state_16246__$1;
(statearr_16348_18683[(2)] = inst_16169);

(statearr_16348_18683[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16247 === (2))){
var state_16246__$1 = state_16246;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16246__$1,(4),ch);
} else {
if((state_val_16247 === (23))){
var state_16246__$1 = state_16246;
var statearr_16349_18684 = state_16246__$1;
(statearr_16349_18684[(2)] = null);

(statearr_16349_18684[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16247 === (35))){
var inst_16226 = (state_16246[(2)]);
var state_16246__$1 = state_16246;
var statearr_16351_18685 = state_16246__$1;
(statearr_16351_18685[(2)] = inst_16226);

(statearr_16351_18685[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16247 === (19))){
var inst_16128 = (state_16246[(7)]);
var inst_16132 = cljs.core.chunk_first(inst_16128);
var inst_16133 = cljs.core.chunk_rest(inst_16128);
var inst_16134 = cljs.core.count(inst_16132);
var inst_16100 = inst_16133;
var inst_16101 = inst_16132;
var inst_16102 = inst_16134;
var inst_16103 = (0);
var state_16246__$1 = (function (){var statearr_16353 = state_16246;
(statearr_16353[(13)] = inst_16103);

(statearr_16353[(14)] = inst_16102);

(statearr_16353[(15)] = inst_16101);

(statearr_16353[(17)] = inst_16100);

return statearr_16353;
})();
var statearr_16354_18687 = state_16246__$1;
(statearr_16354_18687[(2)] = null);

(statearr_16354_18687[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16247 === (11))){
var inst_16128 = (state_16246[(7)]);
var inst_16100 = (state_16246[(17)]);
var inst_16128__$1 = cljs.core.seq(inst_16100);
var state_16246__$1 = (function (){var statearr_16355 = state_16246;
(statearr_16355[(7)] = inst_16128__$1);

return statearr_16355;
})();
if(inst_16128__$1){
var statearr_16356_18691 = state_16246__$1;
(statearr_16356_18691[(1)] = (16));

} else {
var statearr_16357_18693 = state_16246__$1;
(statearr_16357_18693[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16247 === (9))){
var inst_16171 = (state_16246[(2)]);
var state_16246__$1 = state_16246;
var statearr_16358_18695 = state_16246__$1;
(statearr_16358_18695[(2)] = inst_16171);

(statearr_16358_18695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16247 === (5))){
var inst_16098 = cljs.core.deref(cs);
var inst_16099 = cljs.core.seq(inst_16098);
var inst_16100 = inst_16099;
var inst_16101 = null;
var inst_16102 = (0);
var inst_16103 = (0);
var state_16246__$1 = (function (){var statearr_16361 = state_16246;
(statearr_16361[(13)] = inst_16103);

(statearr_16361[(14)] = inst_16102);

(statearr_16361[(15)] = inst_16101);

(statearr_16361[(17)] = inst_16100);

return statearr_16361;
})();
var statearr_16365_18696 = state_16246__$1;
(statearr_16365_18696[(2)] = null);

(statearr_16365_18696[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16247 === (14))){
var state_16246__$1 = state_16246;
var statearr_16366_18700 = state_16246__$1;
(statearr_16366_18700[(2)] = null);

(statearr_16366_18700[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16247 === (45))){
var inst_16234 = (state_16246[(2)]);
var state_16246__$1 = state_16246;
var statearr_16367_18701 = state_16246__$1;
(statearr_16367_18701[(2)] = inst_16234);

(statearr_16367_18701[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16247 === (26))){
var inst_16174 = (state_16246[(27)]);
var inst_16230 = (state_16246[(2)]);
var inst_16231 = cljs.core.seq(inst_16174);
var state_16246__$1 = (function (){var statearr_16369 = state_16246;
(statearr_16369[(29)] = inst_16230);

return statearr_16369;
})();
if(inst_16231){
var statearr_16370_18705 = state_16246__$1;
(statearr_16370_18705[(1)] = (42));

} else {
var statearr_16371_18706 = state_16246__$1;
(statearr_16371_18706[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16247 === (16))){
var inst_16128 = (state_16246[(7)]);
var inst_16130 = cljs.core.chunked_seq_QMARK_(inst_16128);
var state_16246__$1 = state_16246;
if(inst_16130){
var statearr_16372_18707 = state_16246__$1;
(statearr_16372_18707[(1)] = (19));

} else {
var statearr_16373_18708 = state_16246__$1;
(statearr_16373_18708[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16247 === (38))){
var inst_16223 = (state_16246[(2)]);
var state_16246__$1 = state_16246;
var statearr_16374_18709 = state_16246__$1;
(statearr_16374_18709[(2)] = inst_16223);

(statearr_16374_18709[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16247 === (30))){
var state_16246__$1 = state_16246;
var statearr_16376_18710 = state_16246__$1;
(statearr_16376_18710[(2)] = null);

(statearr_16376_18710[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16247 === (10))){
var inst_16103 = (state_16246[(13)]);
var inst_16101 = (state_16246[(15)]);
var inst_16116 = cljs.core._nth(inst_16101,inst_16103);
var inst_16117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16116,(0),null);
var inst_16118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16116,(1),null);
var state_16246__$1 = (function (){var statearr_16377 = state_16246;
(statearr_16377[(24)] = inst_16117);

return statearr_16377;
})();
if(cljs.core.truth_(inst_16118)){
var statearr_16378_18711 = state_16246__$1;
(statearr_16378_18711[(1)] = (13));

} else {
var statearr_16379_18712 = state_16246__$1;
(statearr_16379_18712[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16247 === (18))){
var inst_16167 = (state_16246[(2)]);
var state_16246__$1 = state_16246;
var statearr_16381_18713 = state_16246__$1;
(statearr_16381_18713[(2)] = inst_16167);

(statearr_16381_18713[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16247 === (42))){
var state_16246__$1 = state_16246;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16246__$1,(45),dchan);
} else {
if((state_val_16247 === (37))){
var inst_16211 = (state_16246[(22)]);
var inst_16090 = (state_16246[(11)]);
var inst_16202 = (state_16246[(23)]);
var inst_16211__$1 = cljs.core.first(inst_16202);
var inst_16212 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16211__$1,inst_16090,done);
var state_16246__$1 = (function (){var statearr_16385 = state_16246;
(statearr_16385[(22)] = inst_16211__$1);

return statearr_16385;
})();
if(cljs.core.truth_(inst_16212)){
var statearr_16391_18714 = state_16246__$1;
(statearr_16391_18714[(1)] = (39));

} else {
var statearr_16392_18715 = state_16246__$1;
(statearr_16392_18715[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16247 === (8))){
var inst_16103 = (state_16246[(13)]);
var inst_16102 = (state_16246[(14)]);
var inst_16107 = (inst_16103 < inst_16102);
var inst_16108 = inst_16107;
var state_16246__$1 = state_16246;
if(cljs.core.truth_(inst_16108)){
var statearr_16394_18716 = state_16246__$1;
(statearr_16394_18716[(1)] = (10));

} else {
var statearr_16395_18717 = state_16246__$1;
(statearr_16395_18717[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__14385__auto__ = null;
var cljs$core$async$mult_$_state_machine__14385__auto____0 = (function (){
var statearr_16398 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16398[(0)] = cljs$core$async$mult_$_state_machine__14385__auto__);

(statearr_16398[(1)] = (1));

return statearr_16398;
});
var cljs$core$async$mult_$_state_machine__14385__auto____1 = (function (state_16246){
while(true){
var ret_value__14386__auto__ = (function (){try{while(true){
var result__14387__auto__ = switch__14384__auto__(state_16246);
if(cljs.core.keyword_identical_QMARK_(result__14387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14387__auto__;
}
break;
}
}catch (e16399){var ex__14388__auto__ = e16399;
var statearr_16400_18721 = state_16246;
(statearr_16400_18721[(2)] = ex__14388__auto__);


if(cljs.core.seq((state_16246[(4)]))){
var statearr_16402_18722 = state_16246;
(statearr_16402_18722[(1)] = cljs.core.first((state_16246[(4)])));

} else {
throw ex__14388__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18723 = state_16246;
state_16246 = G__18723;
continue;
} else {
return ret_value__14386__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14385__auto__ = function(state_16246){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14385__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14385__auto____1.call(this,state_16246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14385__auto____0;
cljs$core$async$mult_$_state_machine__14385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14385__auto____1;
return cljs$core$async$mult_$_state_machine__14385__auto__;
})()
})();
var state__14735__auto__ = (function (){var statearr_16403 = f__14734__auto__();
(statearr_16403[(6)] = c__14733__auto___18627);

return statearr_16403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14735__auto__);
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
var G__16410 = arguments.length;
switch (G__16410) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_18728 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_18728(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18729 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_18729(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18730 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18730(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18731 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_18731(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18732 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18732(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18733 = arguments.length;
var i__5727__auto___18734 = (0);
while(true){
if((i__5727__auto___18734 < len__5726__auto___18733)){
args__5732__auto__.push((arguments[i__5727__auto___18734]));

var G__18735 = (i__5727__auto___18734 + (1));
i__5727__auto___18734 = G__18735;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16443){
var map__16444 = p__16443;
var map__16444__$1 = cljs.core.__destructure_map(map__16444);
var opts = map__16444__$1;
var statearr_16451_18738 = state;
(statearr_16451_18738[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16461_18739 = state;
(statearr_16461_18739[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16466_18742 = state;
(statearr_16466_18742[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16434){
var G__16435 = cljs.core.first(seq16434);
var seq16434__$1 = cljs.core.next(seq16434);
var G__16436 = cljs.core.first(seq16434__$1);
var seq16434__$2 = cljs.core.next(seq16434__$1);
var G__16437 = cljs.core.first(seq16434__$2);
var seq16434__$3 = cljs.core.next(seq16434__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16435,G__16436,G__16437,seq16434__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16540 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16541){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16541 = meta16541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16542,meta16541__$1){
var self__ = this;
var _16542__$1 = this;
return (new cljs.core.async.t_cljs$core$async16540(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16541__$1));
}));

(cljs.core.async.t_cljs$core$async16540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16542){
var self__ = this;
var _16542__$1 = this;
return self__.meta16541;
}));

(cljs.core.async.t_cljs$core$async16540.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16540.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16540.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16540.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16540.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16540.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16540.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16540.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16540.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16541","meta16541",-1806785122,null)], null);
}));

(cljs.core.async.t_cljs$core$async16540.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16540.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16540");

(cljs.core.async.t_cljs$core$async16540.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16540");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16540.
 */
cljs.core.async.__GT_t_cljs$core$async16540 = (function cljs$core$async$__GT_t_cljs$core$async16540(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16541){
return (new cljs.core.async.t_cljs$core$async16540(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16541));
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
var m = (new cljs.core.async.t_cljs$core$async16540(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14733__auto___18744 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14734__auto__ = (function (){var switch__14384__auto__ = (function (state_16772){
var state_val_16773 = (state_16772[(1)]);
if((state_val_16773 === (7))){
var inst_16725 = (state_16772[(2)]);
var state_16772__$1 = state_16772;
if(cljs.core.truth_(inst_16725)){
var statearr_16781_18749 = state_16772__$1;
(statearr_16781_18749[(1)] = (8));

} else {
var statearr_16782_18750 = state_16772__$1;
(statearr_16782_18750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (20))){
var inst_16715 = (state_16772[(7)]);
var state_16772__$1 = state_16772;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16772__$1,(23),out,inst_16715);
} else {
if((state_val_16773 === (1))){
var inst_16695 = calc_state();
var inst_16697 = cljs.core.__destructure_map(inst_16695);
var inst_16699 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16697,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16700 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16697,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16701 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16697,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16702 = inst_16695;
var state_16772__$1 = (function (){var statearr_16787 = state_16772;
(statearr_16787[(8)] = inst_16701);

(statearr_16787[(9)] = inst_16700);

(statearr_16787[(10)] = inst_16699);

(statearr_16787[(11)] = inst_16702);

return statearr_16787;
})();
var statearr_16789_18757 = state_16772__$1;
(statearr_16789_18757[(2)] = null);

(statearr_16789_18757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (24))){
var inst_16705 = (state_16772[(12)]);
var inst_16702 = inst_16705;
var state_16772__$1 = (function (){var statearr_16793 = state_16772;
(statearr_16793[(11)] = inst_16702);

return statearr_16793;
})();
var statearr_16794_18759 = state_16772__$1;
(statearr_16794_18759[(2)] = null);

(statearr_16794_18759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (4))){
var inst_16715 = (state_16772[(7)]);
var inst_16720 = (state_16772[(13)]);
var inst_16714 = (state_16772[(2)]);
var inst_16715__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16714,(0),null);
var inst_16716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16714,(1),null);
var inst_16720__$1 = (inst_16715__$1 == null);
var state_16772__$1 = (function (){var statearr_16798 = state_16772;
(statearr_16798[(14)] = inst_16716);

(statearr_16798[(7)] = inst_16715__$1);

(statearr_16798[(13)] = inst_16720__$1);

return statearr_16798;
})();
if(cljs.core.truth_(inst_16720__$1)){
var statearr_16800_18760 = state_16772__$1;
(statearr_16800_18760[(1)] = (5));

} else {
var statearr_16801_18761 = state_16772__$1;
(statearr_16801_18761[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (15))){
var inst_16741 = (state_16772[(15)]);
var inst_16707 = (state_16772[(16)]);
var inst_16741__$1 = cljs.core.empty_QMARK_(inst_16707);
var state_16772__$1 = (function (){var statearr_16803 = state_16772;
(statearr_16803[(15)] = inst_16741__$1);

return statearr_16803;
})();
if(inst_16741__$1){
var statearr_16806_18766 = state_16772__$1;
(statearr_16806_18766[(1)] = (17));

} else {
var statearr_16808_18773 = state_16772__$1;
(statearr_16808_18773[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (21))){
var inst_16705 = (state_16772[(12)]);
var inst_16702 = inst_16705;
var state_16772__$1 = (function (){var statearr_16809 = state_16772;
(statearr_16809[(11)] = inst_16702);

return statearr_16809;
})();
var statearr_16811_18774 = state_16772__$1;
(statearr_16811_18774[(2)] = null);

(statearr_16811_18774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (13))){
var inst_16733 = (state_16772[(2)]);
var inst_16735 = calc_state();
var inst_16702 = inst_16735;
var state_16772__$1 = (function (){var statearr_16814 = state_16772;
(statearr_16814[(17)] = inst_16733);

(statearr_16814[(11)] = inst_16702);

return statearr_16814;
})();
var statearr_16816_18775 = state_16772__$1;
(statearr_16816_18775[(2)] = null);

(statearr_16816_18775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (22))){
var inst_16765 = (state_16772[(2)]);
var state_16772__$1 = state_16772;
var statearr_16817_18776 = state_16772__$1;
(statearr_16817_18776[(2)] = inst_16765);

(statearr_16817_18776[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (6))){
var inst_16716 = (state_16772[(14)]);
var inst_16723 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16716,change);
var state_16772__$1 = state_16772;
var statearr_16820_18777 = state_16772__$1;
(statearr_16820_18777[(2)] = inst_16723);

(statearr_16820_18777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (25))){
var state_16772__$1 = state_16772;
var statearr_16823_18779 = state_16772__$1;
(statearr_16823_18779[(2)] = null);

(statearr_16823_18779[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (17))){
var inst_16716 = (state_16772[(14)]);
var inst_16708 = (state_16772[(18)]);
var inst_16745 = (inst_16708.cljs$core$IFn$_invoke$arity$1 ? inst_16708.cljs$core$IFn$_invoke$arity$1(inst_16716) : inst_16708.call(null,inst_16716));
var inst_16746 = cljs.core.not(inst_16745);
var state_16772__$1 = state_16772;
var statearr_16825_18780 = state_16772__$1;
(statearr_16825_18780[(2)] = inst_16746);

(statearr_16825_18780[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (3))){
var inst_16769 = (state_16772[(2)]);
var state_16772__$1 = state_16772;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16772__$1,inst_16769);
} else {
if((state_val_16773 === (12))){
var state_16772__$1 = state_16772;
var statearr_16829_18781 = state_16772__$1;
(statearr_16829_18781[(2)] = null);

(statearr_16829_18781[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (2))){
var inst_16705 = (state_16772[(12)]);
var inst_16702 = (state_16772[(11)]);
var inst_16705__$1 = cljs.core.__destructure_map(inst_16702);
var inst_16707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16705__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16705__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16709 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16705__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16772__$1 = (function (){var statearr_16831 = state_16772;
(statearr_16831[(12)] = inst_16705__$1);

(statearr_16831[(16)] = inst_16707);

(statearr_16831[(18)] = inst_16708);

return statearr_16831;
})();
return cljs.core.async.ioc_alts_BANG_(state_16772__$1,(4),inst_16709);
} else {
if((state_val_16773 === (23))){
var inst_16755 = (state_16772[(2)]);
var state_16772__$1 = state_16772;
if(cljs.core.truth_(inst_16755)){
var statearr_16840_18782 = state_16772__$1;
(statearr_16840_18782[(1)] = (24));

} else {
var statearr_16843_18783 = state_16772__$1;
(statearr_16843_18783[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (19))){
var inst_16749 = (state_16772[(2)]);
var state_16772__$1 = state_16772;
var statearr_16846_18784 = state_16772__$1;
(statearr_16846_18784[(2)] = inst_16749);

(statearr_16846_18784[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (11))){
var inst_16716 = (state_16772[(14)]);
var inst_16730 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16716);
var state_16772__$1 = state_16772;
var statearr_16854_18785 = state_16772__$1;
(statearr_16854_18785[(2)] = inst_16730);

(statearr_16854_18785[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (9))){
var inst_16716 = (state_16772[(14)]);
var inst_16707 = (state_16772[(16)]);
var inst_16738 = (state_16772[(19)]);
var inst_16738__$1 = (inst_16707.cljs$core$IFn$_invoke$arity$1 ? inst_16707.cljs$core$IFn$_invoke$arity$1(inst_16716) : inst_16707.call(null,inst_16716));
var state_16772__$1 = (function (){var statearr_16858 = state_16772;
(statearr_16858[(19)] = inst_16738__$1);

return statearr_16858;
})();
if(cljs.core.truth_(inst_16738__$1)){
var statearr_16859_18786 = state_16772__$1;
(statearr_16859_18786[(1)] = (14));

} else {
var statearr_16860_18787 = state_16772__$1;
(statearr_16860_18787[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (5))){
var inst_16720 = (state_16772[(13)]);
var state_16772__$1 = state_16772;
var statearr_16861_18790 = state_16772__$1;
(statearr_16861_18790[(2)] = inst_16720);

(statearr_16861_18790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (14))){
var inst_16738 = (state_16772[(19)]);
var state_16772__$1 = state_16772;
var statearr_16863_18793 = state_16772__$1;
(statearr_16863_18793[(2)] = inst_16738);

(statearr_16863_18793[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (26))){
var inst_16761 = (state_16772[(2)]);
var state_16772__$1 = state_16772;
var statearr_16868_18794 = state_16772__$1;
(statearr_16868_18794[(2)] = inst_16761);

(statearr_16868_18794[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (16))){
var inst_16751 = (state_16772[(2)]);
var state_16772__$1 = state_16772;
if(cljs.core.truth_(inst_16751)){
var statearr_16870_18798 = state_16772__$1;
(statearr_16870_18798[(1)] = (20));

} else {
var statearr_16871_18799 = state_16772__$1;
(statearr_16871_18799[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (10))){
var inst_16767 = (state_16772[(2)]);
var state_16772__$1 = state_16772;
var statearr_16873_18802 = state_16772__$1;
(statearr_16873_18802[(2)] = inst_16767);

(statearr_16873_18802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (18))){
var inst_16741 = (state_16772[(15)]);
var state_16772__$1 = state_16772;
var statearr_16874_18804 = state_16772__$1;
(statearr_16874_18804[(2)] = inst_16741);

(statearr_16874_18804[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (8))){
var inst_16715 = (state_16772[(7)]);
var inst_16727 = (inst_16715 == null);
var state_16772__$1 = state_16772;
if(cljs.core.truth_(inst_16727)){
var statearr_16875_18808 = state_16772__$1;
(statearr_16875_18808[(1)] = (11));

} else {
var statearr_16876_18810 = state_16772__$1;
(statearr_16876_18810[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__14385__auto__ = null;
var cljs$core$async$mix_$_state_machine__14385__auto____0 = (function (){
var statearr_16878 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16878[(0)] = cljs$core$async$mix_$_state_machine__14385__auto__);

(statearr_16878[(1)] = (1));

return statearr_16878;
});
var cljs$core$async$mix_$_state_machine__14385__auto____1 = (function (state_16772){
while(true){
var ret_value__14386__auto__ = (function (){try{while(true){
var result__14387__auto__ = switch__14384__auto__(state_16772);
if(cljs.core.keyword_identical_QMARK_(result__14387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14387__auto__;
}
break;
}
}catch (e16880){var ex__14388__auto__ = e16880;
var statearr_16881_18820 = state_16772;
(statearr_16881_18820[(2)] = ex__14388__auto__);


if(cljs.core.seq((state_16772[(4)]))){
var statearr_16883_18821 = state_16772;
(statearr_16883_18821[(1)] = cljs.core.first((state_16772[(4)])));

} else {
throw ex__14388__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18825 = state_16772;
state_16772 = G__18825;
continue;
} else {
return ret_value__14386__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14385__auto__ = function(state_16772){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14385__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14385__auto____1.call(this,state_16772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14385__auto____0;
cljs$core$async$mix_$_state_machine__14385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14385__auto____1;
return cljs$core$async$mix_$_state_machine__14385__auto__;
})()
})();
var state__14735__auto__ = (function (){var statearr_16885 = f__14734__auto__();
(statearr_16885[(6)] = c__14733__auto___18744);

return statearr_16885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14735__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_18838 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_18838(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18839 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_18839(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18846 = (function() {
var G__18848 = null;
var G__18848__1 = (function (p){
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
var G__18848__2 = (function (p,v){
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
G__18848 = function(p,v){
switch(arguments.length){
case 1:
return G__18848__1.call(this,p);
case 2:
return G__18848__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18848.cljs$core$IFn$_invoke$arity$1 = G__18848__1;
G__18848.cljs$core$IFn$_invoke$arity$2 = G__18848__2;
return G__18848;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16908 = arguments.length;
switch (G__16908) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18846(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18846(p,v);
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
cljs.core.async.t_cljs$core$async16935 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16936){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16936 = meta16936;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16937,meta16936__$1){
var self__ = this;
var _16937__$1 = this;
return (new cljs.core.async.t_cljs$core$async16935(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16936__$1));
}));

(cljs.core.async.t_cljs$core$async16935.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16937){
var self__ = this;
var _16937__$1 = this;
return self__.meta16936;
}));

(cljs.core.async.t_cljs$core$async16935.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16935.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16935.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16935.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16935.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async16935.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16935.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16935.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16936","meta16936",2017817825,null)], null);
}));

(cljs.core.async.t_cljs$core$async16935.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16935.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16935");

(cljs.core.async.t_cljs$core$async16935.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16935");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16935.
 */
cljs.core.async.__GT_t_cljs$core$async16935 = (function cljs$core$async$__GT_t_cljs$core$async16935(ch,topic_fn,buf_fn,mults,ensure_mult,meta16936){
return (new cljs.core.async.t_cljs$core$async16935(ch,topic_fn,buf_fn,mults,ensure_mult,meta16936));
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
var G__16921 = arguments.length;
switch (G__16921) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16917_SHARP_){
if(cljs.core.truth_((p1__16917_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16917_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16917_SHARP_.call(null,topic)))){
return p1__16917_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16917_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16935(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14733__auto___18858 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14734__auto__ = (function (){var switch__14384__auto__ = (function (state_17084){
var state_val_17085 = (state_17084[(1)]);
if((state_val_17085 === (7))){
var inst_17068 = (state_17084[(2)]);
var state_17084__$1 = state_17084;
var statearr_17139_18859 = state_17084__$1;
(statearr_17139_18859[(2)] = inst_17068);

(statearr_17139_18859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17085 === (20))){
var state_17084__$1 = state_17084;
var statearr_17146_18860 = state_17084__$1;
(statearr_17146_18860[(2)] = null);

(statearr_17146_18860[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17085 === (1))){
var state_17084__$1 = state_17084;
var statearr_17150_18861 = state_17084__$1;
(statearr_17150_18861[(2)] = null);

(statearr_17150_18861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17085 === (24))){
var inst_17048 = (state_17084[(7)]);
var inst_17060 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17048);
var state_17084__$1 = state_17084;
var statearr_17156_18862 = state_17084__$1;
(statearr_17156_18862[(2)] = inst_17060);

(statearr_17156_18862[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17085 === (4))){
var inst_16964 = (state_17084[(8)]);
var inst_16964__$1 = (state_17084[(2)]);
var inst_16965 = (inst_16964__$1 == null);
var state_17084__$1 = (function (){var statearr_17165 = state_17084;
(statearr_17165[(8)] = inst_16964__$1);

return statearr_17165;
})();
if(cljs.core.truth_(inst_16965)){
var statearr_17167_18863 = state_17084__$1;
(statearr_17167_18863[(1)] = (5));

} else {
var statearr_17169_18864 = state_17084__$1;
(statearr_17169_18864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17085 === (15))){
var inst_17042 = (state_17084[(2)]);
var state_17084__$1 = state_17084;
var statearr_17171_18865 = state_17084__$1;
(statearr_17171_18865[(2)] = inst_17042);

(statearr_17171_18865[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17085 === (21))){
var inst_17065 = (state_17084[(2)]);
var state_17084__$1 = (function (){var statearr_17176 = state_17084;
(statearr_17176[(9)] = inst_17065);

return statearr_17176;
})();
var statearr_17177_18866 = state_17084__$1;
(statearr_17177_18866[(2)] = null);

(statearr_17177_18866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17085 === (13))){
var inst_16996 = (state_17084[(10)]);
var inst_17006 = cljs.core.chunked_seq_QMARK_(inst_16996);
var state_17084__$1 = state_17084;
if(inst_17006){
var statearr_17189_18867 = state_17084__$1;
(statearr_17189_18867[(1)] = (16));

} else {
var statearr_17190_18868 = state_17084__$1;
(statearr_17190_18868[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17085 === (22))){
var inst_17057 = (state_17084[(2)]);
var state_17084__$1 = state_17084;
if(cljs.core.truth_(inst_17057)){
var statearr_17193_18869 = state_17084__$1;
(statearr_17193_18869[(1)] = (23));

} else {
var statearr_17196_18870 = state_17084__$1;
(statearr_17196_18870[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17085 === (6))){
var inst_16964 = (state_17084[(8)]);
var inst_17052 = (state_17084[(11)]);
var inst_17048 = (state_17084[(7)]);
var inst_17048__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16964) : topic_fn.call(null,inst_16964));
var inst_17051 = cljs.core.deref(mults);
var inst_17052__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17051,inst_17048__$1);
var state_17084__$1 = (function (){var statearr_17202 = state_17084;
(statearr_17202[(11)] = inst_17052__$1);

(statearr_17202[(7)] = inst_17048__$1);

return statearr_17202;
})();
if(cljs.core.truth_(inst_17052__$1)){
var statearr_17204_18871 = state_17084__$1;
(statearr_17204_18871[(1)] = (19));

} else {
var statearr_17205_18872 = state_17084__$1;
(statearr_17205_18872[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17085 === (25))){
var inst_17062 = (state_17084[(2)]);
var state_17084__$1 = state_17084;
var statearr_17210_18873 = state_17084__$1;
(statearr_17210_18873[(2)] = inst_17062);

(statearr_17210_18873[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17085 === (17))){
var inst_16996 = (state_17084[(10)]);
var inst_17028 = cljs.core.first(inst_16996);
var inst_17033 = cljs.core.async.muxch_STAR_(inst_17028);
var inst_17034 = cljs.core.async.close_BANG_(inst_17033);
var inst_17036 = cljs.core.next(inst_16996);
var inst_16974 = inst_17036;
var inst_16975 = null;
var inst_16976 = (0);
var inst_16977 = (0);
var state_17084__$1 = (function (){var statearr_17216 = state_17084;
(statearr_17216[(12)] = inst_16976);

(statearr_17216[(13)] = inst_16977);

(statearr_17216[(14)] = inst_17034);

(statearr_17216[(15)] = inst_16974);

(statearr_17216[(16)] = inst_16975);

return statearr_17216;
})();
var statearr_17217_18874 = state_17084__$1;
(statearr_17217_18874[(2)] = null);

(statearr_17217_18874[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17085 === (3))){
var inst_17070 = (state_17084[(2)]);
var state_17084__$1 = state_17084;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17084__$1,inst_17070);
} else {
if((state_val_17085 === (12))){
var inst_17044 = (state_17084[(2)]);
var state_17084__$1 = state_17084;
var statearr_17219_18875 = state_17084__$1;
(statearr_17219_18875[(2)] = inst_17044);

(statearr_17219_18875[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17085 === (2))){
var state_17084__$1 = state_17084;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17084__$1,(4),ch);
} else {
if((state_val_17085 === (23))){
var state_17084__$1 = state_17084;
var statearr_17220_18876 = state_17084__$1;
(statearr_17220_18876[(2)] = null);

(statearr_17220_18876[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17085 === (19))){
var inst_16964 = (state_17084[(8)]);
var inst_17052 = (state_17084[(11)]);
var inst_17055 = cljs.core.async.muxch_STAR_(inst_17052);
var state_17084__$1 = state_17084;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17084__$1,(22),inst_17055,inst_16964);
} else {
if((state_val_17085 === (11))){
var inst_16996 = (state_17084[(10)]);
var inst_16974 = (state_17084[(15)]);
var inst_16996__$1 = cljs.core.seq(inst_16974);
var state_17084__$1 = (function (){var statearr_17221 = state_17084;
(statearr_17221[(10)] = inst_16996__$1);

return statearr_17221;
})();
if(inst_16996__$1){
var statearr_17222_18878 = state_17084__$1;
(statearr_17222_18878[(1)] = (13));

} else {
var statearr_17223_18879 = state_17084__$1;
(statearr_17223_18879[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17085 === (9))){
var inst_17046 = (state_17084[(2)]);
var state_17084__$1 = state_17084;
var statearr_17224_18881 = state_17084__$1;
(statearr_17224_18881[(2)] = inst_17046);

(statearr_17224_18881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17085 === (5))){
var inst_16971 = cljs.core.deref(mults);
var inst_16972 = cljs.core.vals(inst_16971);
var inst_16973 = cljs.core.seq(inst_16972);
var inst_16974 = inst_16973;
var inst_16975 = null;
var inst_16976 = (0);
var inst_16977 = (0);
var state_17084__$1 = (function (){var statearr_17225 = state_17084;
(statearr_17225[(12)] = inst_16976);

(statearr_17225[(13)] = inst_16977);

(statearr_17225[(15)] = inst_16974);

(statearr_17225[(16)] = inst_16975);

return statearr_17225;
})();
var statearr_17227_18882 = state_17084__$1;
(statearr_17227_18882[(2)] = null);

(statearr_17227_18882[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17085 === (14))){
var state_17084__$1 = state_17084;
var statearr_17231_18883 = state_17084__$1;
(statearr_17231_18883[(2)] = null);

(statearr_17231_18883[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17085 === (16))){
var inst_16996 = (state_17084[(10)]);
var inst_17020 = cljs.core.chunk_first(inst_16996);
var inst_17022 = cljs.core.chunk_rest(inst_16996);
var inst_17023 = cljs.core.count(inst_17020);
var inst_16974 = inst_17022;
var inst_16975 = inst_17020;
var inst_16976 = inst_17023;
var inst_16977 = (0);
var state_17084__$1 = (function (){var statearr_17233 = state_17084;
(statearr_17233[(12)] = inst_16976);

(statearr_17233[(13)] = inst_16977);

(statearr_17233[(15)] = inst_16974);

(statearr_17233[(16)] = inst_16975);

return statearr_17233;
})();
var statearr_17234_18885 = state_17084__$1;
(statearr_17234_18885[(2)] = null);

(statearr_17234_18885[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17085 === (10))){
var inst_16976 = (state_17084[(12)]);
var inst_16977 = (state_17084[(13)]);
var inst_16974 = (state_17084[(15)]);
var inst_16975 = (state_17084[(16)]);
var inst_16985 = cljs.core._nth(inst_16975,inst_16977);
var inst_16986 = cljs.core.async.muxch_STAR_(inst_16985);
var inst_16987 = cljs.core.async.close_BANG_(inst_16986);
var inst_16988 = (inst_16977 + (1));
var tmp17228 = inst_16976;
var tmp17229 = inst_16974;
var tmp17230 = inst_16975;
var inst_16974__$1 = tmp17229;
var inst_16975__$1 = tmp17230;
var inst_16976__$1 = tmp17228;
var inst_16977__$1 = inst_16988;
var state_17084__$1 = (function (){var statearr_17235 = state_17084;
(statearr_17235[(12)] = inst_16976__$1);

(statearr_17235[(13)] = inst_16977__$1);

(statearr_17235[(15)] = inst_16974__$1);

(statearr_17235[(16)] = inst_16975__$1);

(statearr_17235[(17)] = inst_16987);

return statearr_17235;
})();
var statearr_17236_18886 = state_17084__$1;
(statearr_17236_18886[(2)] = null);

(statearr_17236_18886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17085 === (18))){
var inst_17039 = (state_17084[(2)]);
var state_17084__$1 = state_17084;
var statearr_17237_18887 = state_17084__$1;
(statearr_17237_18887[(2)] = inst_17039);

(statearr_17237_18887[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17085 === (8))){
var inst_16976 = (state_17084[(12)]);
var inst_16977 = (state_17084[(13)]);
var inst_16979 = (inst_16977 < inst_16976);
var inst_16980 = inst_16979;
var state_17084__$1 = state_17084;
if(cljs.core.truth_(inst_16980)){
var statearr_17238_18888 = state_17084__$1;
(statearr_17238_18888[(1)] = (10));

} else {
var statearr_17239_18889 = state_17084__$1;
(statearr_17239_18889[(1)] = (11));

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
var cljs$core$async$state_machine__14385__auto__ = null;
var cljs$core$async$state_machine__14385__auto____0 = (function (){
var statearr_17240 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17240[(0)] = cljs$core$async$state_machine__14385__auto__);

(statearr_17240[(1)] = (1));

return statearr_17240;
});
var cljs$core$async$state_machine__14385__auto____1 = (function (state_17084){
while(true){
var ret_value__14386__auto__ = (function (){try{while(true){
var result__14387__auto__ = switch__14384__auto__(state_17084);
if(cljs.core.keyword_identical_QMARK_(result__14387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14387__auto__;
}
break;
}
}catch (e17241){var ex__14388__auto__ = e17241;
var statearr_17242_18890 = state_17084;
(statearr_17242_18890[(2)] = ex__14388__auto__);


if(cljs.core.seq((state_17084[(4)]))){
var statearr_17243_18891 = state_17084;
(statearr_17243_18891[(1)] = cljs.core.first((state_17084[(4)])));

} else {
throw ex__14388__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18892 = state_17084;
state_17084 = G__18892;
continue;
} else {
return ret_value__14386__auto__;
}
break;
}
});
cljs$core$async$state_machine__14385__auto__ = function(state_17084){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14385__auto____1.call(this,state_17084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14385__auto____0;
cljs$core$async$state_machine__14385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14385__auto____1;
return cljs$core$async$state_machine__14385__auto__;
})()
})();
var state__14735__auto__ = (function (){var statearr_17246 = f__14734__auto__();
(statearr_17246[(6)] = c__14733__auto___18858);

return statearr_17246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14735__auto__);
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
var G__17248 = arguments.length;
switch (G__17248) {
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
var G__17254 = arguments.length;
switch (G__17254) {
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
var G__17280 = arguments.length;
switch (G__17280) {
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
var c__14733__auto___18896 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14734__auto__ = (function (){var switch__14384__auto__ = (function (state_17368){
var state_val_17369 = (state_17368[(1)]);
if((state_val_17369 === (7))){
var state_17368__$1 = state_17368;
var statearr_17375_18898 = state_17368__$1;
(statearr_17375_18898[(2)] = null);

(statearr_17375_18898[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17369 === (1))){
var state_17368__$1 = state_17368;
var statearr_17382_18899 = state_17368__$1;
(statearr_17382_18899[(2)] = null);

(statearr_17382_18899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17369 === (4))){
var inst_17293 = (state_17368[(7)]);
var inst_17292 = (state_17368[(8)]);
var inst_17295 = (inst_17293 < inst_17292);
var state_17368__$1 = state_17368;
if(cljs.core.truth_(inst_17295)){
var statearr_17383_18900 = state_17368__$1;
(statearr_17383_18900[(1)] = (6));

} else {
var statearr_17385_18901 = state_17368__$1;
(statearr_17385_18901[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17369 === (15))){
var inst_17329 = (state_17368[(9)]);
var inst_17340 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17329);
var state_17368__$1 = state_17368;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17368__$1,(17),out,inst_17340);
} else {
if((state_val_17369 === (13))){
var inst_17329 = (state_17368[(9)]);
var inst_17329__$1 = (state_17368[(2)]);
var inst_17336 = cljs.core.some(cljs.core.nil_QMARK_,inst_17329__$1);
var state_17368__$1 = (function (){var statearr_17392 = state_17368;
(statearr_17392[(9)] = inst_17329__$1);

return statearr_17392;
})();
if(cljs.core.truth_(inst_17336)){
var statearr_17397_18902 = state_17368__$1;
(statearr_17397_18902[(1)] = (14));

} else {
var statearr_17398_18903 = state_17368__$1;
(statearr_17398_18903[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17369 === (6))){
var state_17368__$1 = state_17368;
var statearr_17400_18904 = state_17368__$1;
(statearr_17400_18904[(2)] = null);

(statearr_17400_18904[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17369 === (17))){
var inst_17342 = (state_17368[(2)]);
var state_17368__$1 = (function (){var statearr_17435 = state_17368;
(statearr_17435[(10)] = inst_17342);

return statearr_17435;
})();
var statearr_17436_18908 = state_17368__$1;
(statearr_17436_18908[(2)] = null);

(statearr_17436_18908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17369 === (3))){
var inst_17353 = (state_17368[(2)]);
var state_17368__$1 = state_17368;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17368__$1,inst_17353);
} else {
if((state_val_17369 === (12))){
var _ = (function (){var statearr_17444 = state_17368;
(statearr_17444[(4)] = cljs.core.rest((state_17368[(4)])));

return statearr_17444;
})();
var state_17368__$1 = state_17368;
var ex17412 = (state_17368__$1[(2)]);
var statearr_17446_18909 = state_17368__$1;
(statearr_17446_18909[(5)] = ex17412);


if((ex17412 instanceof Object)){
var statearr_17455_18910 = state_17368__$1;
(statearr_17455_18910[(1)] = (11));

(statearr_17455_18910[(5)] = null);

} else {
throw ex17412;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17369 === (2))){
var inst_17291 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17292 = cnt;
var inst_17293 = (0);
var state_17368__$1 = (function (){var statearr_17457 = state_17368;
(statearr_17457[(7)] = inst_17293);

(statearr_17457[(11)] = inst_17291);

(statearr_17457[(8)] = inst_17292);

return statearr_17457;
})();
var statearr_17458_18911 = state_17368__$1;
(statearr_17458_18911[(2)] = null);

(statearr_17458_18911[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17369 === (11))){
var inst_17300 = (state_17368[(2)]);
var inst_17301 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17368__$1 = (function (){var statearr_17459 = state_17368;
(statearr_17459[(12)] = inst_17300);

return statearr_17459;
})();
var statearr_17460_18912 = state_17368__$1;
(statearr_17460_18912[(2)] = inst_17301);

(statearr_17460_18912[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17369 === (9))){
var inst_17293 = (state_17368[(7)]);
var _ = (function (){var statearr_17465 = state_17368;
(statearr_17465[(4)] = cljs.core.cons((12),(state_17368[(4)])));

return statearr_17465;
})();
var inst_17307 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17293) : chs__$1.call(null,inst_17293));
var inst_17308 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17293) : done.call(null,inst_17293));
var inst_17309 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17307,inst_17308);
var ___$1 = (function (){var statearr_17466 = state_17368;
(statearr_17466[(4)] = cljs.core.rest((state_17368[(4)])));

return statearr_17466;
})();
var state_17368__$1 = state_17368;
var statearr_17467_18913 = state_17368__$1;
(statearr_17467_18913[(2)] = inst_17309);

(statearr_17467_18913[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17369 === (5))){
var inst_17319 = (state_17368[(2)]);
var state_17368__$1 = (function (){var statearr_17468 = state_17368;
(statearr_17468[(13)] = inst_17319);

return statearr_17468;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17368__$1,(13),dchan);
} else {
if((state_val_17369 === (14))){
var inst_17338 = cljs.core.async.close_BANG_(out);
var state_17368__$1 = state_17368;
var statearr_17478_18914 = state_17368__$1;
(statearr_17478_18914[(2)] = inst_17338);

(statearr_17478_18914[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17369 === (16))){
var inst_17345 = (state_17368[(2)]);
var state_17368__$1 = state_17368;
var statearr_17479_18915 = state_17368__$1;
(statearr_17479_18915[(2)] = inst_17345);

(statearr_17479_18915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17369 === (10))){
var inst_17293 = (state_17368[(7)]);
var inst_17312 = (state_17368[(2)]);
var inst_17313 = (inst_17293 + (1));
var inst_17293__$1 = inst_17313;
var state_17368__$1 = (function (){var statearr_17480 = state_17368;
(statearr_17480[(7)] = inst_17293__$1);

(statearr_17480[(14)] = inst_17312);

return statearr_17480;
})();
var statearr_17481_18916 = state_17368__$1;
(statearr_17481_18916[(2)] = null);

(statearr_17481_18916[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17369 === (8))){
var inst_17317 = (state_17368[(2)]);
var state_17368__$1 = state_17368;
var statearr_17483_18918 = state_17368__$1;
(statearr_17483_18918[(2)] = inst_17317);

(statearr_17483_18918[(1)] = (5));


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
var cljs$core$async$state_machine__14385__auto__ = null;
var cljs$core$async$state_machine__14385__auto____0 = (function (){
var statearr_17486 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17486[(0)] = cljs$core$async$state_machine__14385__auto__);

(statearr_17486[(1)] = (1));

return statearr_17486;
});
var cljs$core$async$state_machine__14385__auto____1 = (function (state_17368){
while(true){
var ret_value__14386__auto__ = (function (){try{while(true){
var result__14387__auto__ = switch__14384__auto__(state_17368);
if(cljs.core.keyword_identical_QMARK_(result__14387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14387__auto__;
}
break;
}
}catch (e17487){var ex__14388__auto__ = e17487;
var statearr_17488_18921 = state_17368;
(statearr_17488_18921[(2)] = ex__14388__auto__);


if(cljs.core.seq((state_17368[(4)]))){
var statearr_17489_18922 = state_17368;
(statearr_17489_18922[(1)] = cljs.core.first((state_17368[(4)])));

} else {
throw ex__14388__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18923 = state_17368;
state_17368 = G__18923;
continue;
} else {
return ret_value__14386__auto__;
}
break;
}
});
cljs$core$async$state_machine__14385__auto__ = function(state_17368){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14385__auto____1.call(this,state_17368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14385__auto____0;
cljs$core$async$state_machine__14385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14385__auto____1;
return cljs$core$async$state_machine__14385__auto__;
})()
})();
var state__14735__auto__ = (function (){var statearr_17494 = f__14734__auto__();
(statearr_17494[(6)] = c__14733__auto___18896);

return statearr_17494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14735__auto__);
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
var G__17497 = arguments.length;
switch (G__17497) {
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
var c__14733__auto___18927 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14734__auto__ = (function (){var switch__14384__auto__ = (function (state_17537){
var state_val_17538 = (state_17537[(1)]);
if((state_val_17538 === (7))){
var inst_17516 = (state_17537[(7)]);
var inst_17515 = (state_17537[(8)]);
var inst_17515__$1 = (state_17537[(2)]);
var inst_17516__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17515__$1,(0),null);
var inst_17517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17515__$1,(1),null);
var inst_17518 = (inst_17516__$1 == null);
var state_17537__$1 = (function (){var statearr_17545 = state_17537;
(statearr_17545[(7)] = inst_17516__$1);

(statearr_17545[(9)] = inst_17517);

(statearr_17545[(8)] = inst_17515__$1);

return statearr_17545;
})();
if(cljs.core.truth_(inst_17518)){
var statearr_17551_18930 = state_17537__$1;
(statearr_17551_18930[(1)] = (8));

} else {
var statearr_17552_18931 = state_17537__$1;
(statearr_17552_18931[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (1))){
var inst_17501 = cljs.core.vec(chs);
var inst_17502 = inst_17501;
var state_17537__$1 = (function (){var statearr_17553 = state_17537;
(statearr_17553[(10)] = inst_17502);

return statearr_17553;
})();
var statearr_17555_18936 = state_17537__$1;
(statearr_17555_18936[(2)] = null);

(statearr_17555_18936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (4))){
var inst_17502 = (state_17537[(10)]);
var state_17537__$1 = state_17537;
return cljs.core.async.ioc_alts_BANG_(state_17537__$1,(7),inst_17502);
} else {
if((state_val_17538 === (6))){
var inst_17533 = (state_17537[(2)]);
var state_17537__$1 = state_17537;
var statearr_17557_18937 = state_17537__$1;
(statearr_17557_18937[(2)] = inst_17533);

(statearr_17557_18937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (3))){
var inst_17535 = (state_17537[(2)]);
var state_17537__$1 = state_17537;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17537__$1,inst_17535);
} else {
if((state_val_17538 === (2))){
var inst_17502 = (state_17537[(10)]);
var inst_17505 = cljs.core.count(inst_17502);
var inst_17506 = (inst_17505 > (0));
var state_17537__$1 = state_17537;
if(cljs.core.truth_(inst_17506)){
var statearr_17562_18938 = state_17537__$1;
(statearr_17562_18938[(1)] = (4));

} else {
var statearr_17563_18939 = state_17537__$1;
(statearr_17563_18939[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (11))){
var inst_17502 = (state_17537[(10)]);
var inst_17526 = (state_17537[(2)]);
var tmp17561 = inst_17502;
var inst_17502__$1 = tmp17561;
var state_17537__$1 = (function (){var statearr_17567 = state_17537;
(statearr_17567[(10)] = inst_17502__$1);

(statearr_17567[(11)] = inst_17526);

return statearr_17567;
})();
var statearr_17568_18940 = state_17537__$1;
(statearr_17568_18940[(2)] = null);

(statearr_17568_18940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (9))){
var inst_17516 = (state_17537[(7)]);
var state_17537__$1 = state_17537;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17537__$1,(11),out,inst_17516);
} else {
if((state_val_17538 === (5))){
var inst_17531 = cljs.core.async.close_BANG_(out);
var state_17537__$1 = state_17537;
var statearr_17569_18941 = state_17537__$1;
(statearr_17569_18941[(2)] = inst_17531);

(statearr_17569_18941[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (10))){
var inst_17529 = (state_17537[(2)]);
var state_17537__$1 = state_17537;
var statearr_17570_18942 = state_17537__$1;
(statearr_17570_18942[(2)] = inst_17529);

(statearr_17570_18942[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17538 === (8))){
var inst_17516 = (state_17537[(7)]);
var inst_17517 = (state_17537[(9)]);
var inst_17515 = (state_17537[(8)]);
var inst_17502 = (state_17537[(10)]);
var inst_17521 = (function (){var cs = inst_17502;
var vec__17511 = inst_17515;
var v = inst_17516;
var c = inst_17517;
return (function (p1__17495_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17495_SHARP_);
});
})();
var inst_17522 = cljs.core.filterv(inst_17521,inst_17502);
var inst_17502__$1 = inst_17522;
var state_17537__$1 = (function (){var statearr_17571 = state_17537;
(statearr_17571[(10)] = inst_17502__$1);

return statearr_17571;
})();
var statearr_17572_18943 = state_17537__$1;
(statearr_17572_18943[(2)] = null);

(statearr_17572_18943[(1)] = (2));


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
var cljs$core$async$state_machine__14385__auto__ = null;
var cljs$core$async$state_machine__14385__auto____0 = (function (){
var statearr_17573 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17573[(0)] = cljs$core$async$state_machine__14385__auto__);

(statearr_17573[(1)] = (1));

return statearr_17573;
});
var cljs$core$async$state_machine__14385__auto____1 = (function (state_17537){
while(true){
var ret_value__14386__auto__ = (function (){try{while(true){
var result__14387__auto__ = switch__14384__auto__(state_17537);
if(cljs.core.keyword_identical_QMARK_(result__14387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14387__auto__;
}
break;
}
}catch (e17575){var ex__14388__auto__ = e17575;
var statearr_17576_18944 = state_17537;
(statearr_17576_18944[(2)] = ex__14388__auto__);


if(cljs.core.seq((state_17537[(4)]))){
var statearr_17577_18945 = state_17537;
(statearr_17577_18945[(1)] = cljs.core.first((state_17537[(4)])));

} else {
throw ex__14388__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18946 = state_17537;
state_17537 = G__18946;
continue;
} else {
return ret_value__14386__auto__;
}
break;
}
});
cljs$core$async$state_machine__14385__auto__ = function(state_17537){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14385__auto____1.call(this,state_17537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14385__auto____0;
cljs$core$async$state_machine__14385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14385__auto____1;
return cljs$core$async$state_machine__14385__auto__;
})()
})();
var state__14735__auto__ = (function (){var statearr_17581 = f__14734__auto__();
(statearr_17581[(6)] = c__14733__auto___18927);

return statearr_17581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14735__auto__);
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
var G__17587 = arguments.length;
switch (G__17587) {
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
var c__14733__auto___18948 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14734__auto__ = (function (){var switch__14384__auto__ = (function (state_17622){
var state_val_17623 = (state_17622[(1)]);
if((state_val_17623 === (7))){
var inst_17594 = (state_17622[(7)]);
var inst_17594__$1 = (state_17622[(2)]);
var inst_17595 = (inst_17594__$1 == null);
var inst_17596 = cljs.core.not(inst_17595);
var state_17622__$1 = (function (){var statearr_17655 = state_17622;
(statearr_17655[(7)] = inst_17594__$1);

return statearr_17655;
})();
if(inst_17596){
var statearr_17662_18949 = state_17622__$1;
(statearr_17662_18949[(1)] = (8));

} else {
var statearr_17663_18950 = state_17622__$1;
(statearr_17663_18950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17623 === (1))){
var inst_17589 = (0);
var state_17622__$1 = (function (){var statearr_17664 = state_17622;
(statearr_17664[(8)] = inst_17589);

return statearr_17664;
})();
var statearr_17665_18951 = state_17622__$1;
(statearr_17665_18951[(2)] = null);

(statearr_17665_18951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17623 === (4))){
var state_17622__$1 = state_17622;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17622__$1,(7),ch);
} else {
if((state_val_17623 === (6))){
var inst_17614 = (state_17622[(2)]);
var state_17622__$1 = state_17622;
var statearr_17675_18952 = state_17622__$1;
(statearr_17675_18952[(2)] = inst_17614);

(statearr_17675_18952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17623 === (3))){
var inst_17616 = (state_17622[(2)]);
var inst_17617 = cljs.core.async.close_BANG_(out);
var state_17622__$1 = (function (){var statearr_17678 = state_17622;
(statearr_17678[(9)] = inst_17616);

return statearr_17678;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17622__$1,inst_17617);
} else {
if((state_val_17623 === (2))){
var inst_17589 = (state_17622[(8)]);
var inst_17591 = (inst_17589 < n);
var state_17622__$1 = state_17622;
if(cljs.core.truth_(inst_17591)){
var statearr_17679_18954 = state_17622__$1;
(statearr_17679_18954[(1)] = (4));

} else {
var statearr_17680_18955 = state_17622__$1;
(statearr_17680_18955[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17623 === (11))){
var inst_17589 = (state_17622[(8)]);
var inst_17599 = (state_17622[(2)]);
var inst_17601 = (inst_17589 + (1));
var inst_17589__$1 = inst_17601;
var state_17622__$1 = (function (){var statearr_17683 = state_17622;
(statearr_17683[(8)] = inst_17589__$1);

(statearr_17683[(10)] = inst_17599);

return statearr_17683;
})();
var statearr_17684_18956 = state_17622__$1;
(statearr_17684_18956[(2)] = null);

(statearr_17684_18956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17623 === (9))){
var state_17622__$1 = state_17622;
var statearr_17689_18957 = state_17622__$1;
(statearr_17689_18957[(2)] = null);

(statearr_17689_18957[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17623 === (5))){
var state_17622__$1 = state_17622;
var statearr_17690_18958 = state_17622__$1;
(statearr_17690_18958[(2)] = null);

(statearr_17690_18958[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17623 === (10))){
var inst_17611 = (state_17622[(2)]);
var state_17622__$1 = state_17622;
var statearr_17691_18959 = state_17622__$1;
(statearr_17691_18959[(2)] = inst_17611);

(statearr_17691_18959[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17623 === (8))){
var inst_17594 = (state_17622[(7)]);
var state_17622__$1 = state_17622;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17622__$1,(11),out,inst_17594);
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
var cljs$core$async$state_machine__14385__auto__ = null;
var cljs$core$async$state_machine__14385__auto____0 = (function (){
var statearr_17696 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17696[(0)] = cljs$core$async$state_machine__14385__auto__);

(statearr_17696[(1)] = (1));

return statearr_17696;
});
var cljs$core$async$state_machine__14385__auto____1 = (function (state_17622){
while(true){
var ret_value__14386__auto__ = (function (){try{while(true){
var result__14387__auto__ = switch__14384__auto__(state_17622);
if(cljs.core.keyword_identical_QMARK_(result__14387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14387__auto__;
}
break;
}
}catch (e17697){var ex__14388__auto__ = e17697;
var statearr_17698_18960 = state_17622;
(statearr_17698_18960[(2)] = ex__14388__auto__);


if(cljs.core.seq((state_17622[(4)]))){
var statearr_17699_18961 = state_17622;
(statearr_17699_18961[(1)] = cljs.core.first((state_17622[(4)])));

} else {
throw ex__14388__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18962 = state_17622;
state_17622 = G__18962;
continue;
} else {
return ret_value__14386__auto__;
}
break;
}
});
cljs$core$async$state_machine__14385__auto__ = function(state_17622){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14385__auto____1.call(this,state_17622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14385__auto____0;
cljs$core$async$state_machine__14385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14385__auto____1;
return cljs$core$async$state_machine__14385__auto__;
})()
})();
var state__14735__auto__ = (function (){var statearr_17700 = f__14734__auto__();
(statearr_17700[(6)] = c__14733__auto___18948);

return statearr_17700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14735__auto__);
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
cljs.core.async.t_cljs$core$async17719 = (function (f,ch,meta17714,_,fn1,meta17720){
this.f = f;
this.ch = ch;
this.meta17714 = meta17714;
this._ = _;
this.fn1 = fn1;
this.meta17720 = meta17720;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17721,meta17720__$1){
var self__ = this;
var _17721__$1 = this;
return (new cljs.core.async.t_cljs$core$async17719(self__.f,self__.ch,self__.meta17714,self__._,self__.fn1,meta17720__$1));
}));

(cljs.core.async.t_cljs$core$async17719.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17721){
var self__ = this;
var _17721__$1 = this;
return self__.meta17720;
}));

(cljs.core.async.t_cljs$core$async17719.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17719.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17719.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17719.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17701_SHARP_){
var G__17722 = (((p1__17701_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17701_SHARP_) : self__.f.call(null,p1__17701_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17722) : f1.call(null,G__17722));
});
}));

(cljs.core.async.t_cljs$core$async17719.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17714","meta17714",-2052433587,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17713","cljs.core.async/t_cljs$core$async17713",435075392,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17720","meta17720",684508665,null)], null);
}));

(cljs.core.async.t_cljs$core$async17719.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17719.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17719");

(cljs.core.async.t_cljs$core$async17719.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17719");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17719.
 */
cljs.core.async.__GT_t_cljs$core$async17719 = (function cljs$core$async$__GT_t_cljs$core$async17719(f,ch,meta17714,_,fn1,meta17720){
return (new cljs.core.async.t_cljs$core$async17719(f,ch,meta17714,_,fn1,meta17720));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17713 = (function (f,ch,meta17714){
this.f = f;
this.ch = ch;
this.meta17714 = meta17714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17715,meta17714__$1){
var self__ = this;
var _17715__$1 = this;
return (new cljs.core.async.t_cljs$core$async17713(self__.f,self__.ch,meta17714__$1));
}));

(cljs.core.async.t_cljs$core$async17713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17715){
var self__ = this;
var _17715__$1 = this;
return self__.meta17714;
}));

(cljs.core.async.t_cljs$core$async17713.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17713.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17713.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17713.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17713.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async17719(self__.f,self__.ch,self__.meta17714,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17723 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17723) : self__.f.call(null,G__17723));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17713.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17713.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17713.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17714","meta17714",-2052433587,null)], null);
}));

(cljs.core.async.t_cljs$core$async17713.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17713.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17713");

(cljs.core.async.t_cljs$core$async17713.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17713");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17713.
 */
cljs.core.async.__GT_t_cljs$core$async17713 = (function cljs$core$async$__GT_t_cljs$core$async17713(f,ch,meta17714){
return (new cljs.core.async.t_cljs$core$async17713(f,ch,meta17714));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17713(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17725 = (function (f,ch,meta17726){
this.f = f;
this.ch = ch;
this.meta17726 = meta17726;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17727,meta17726__$1){
var self__ = this;
var _17727__$1 = this;
return (new cljs.core.async.t_cljs$core$async17725(self__.f,self__.ch,meta17726__$1));
}));

(cljs.core.async.t_cljs$core$async17725.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17727){
var self__ = this;
var _17727__$1 = this;
return self__.meta17726;
}));

(cljs.core.async.t_cljs$core$async17725.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17725.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17725.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17725.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17725.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17725.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17725.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17726","meta17726",-625867120,null)], null);
}));

(cljs.core.async.t_cljs$core$async17725.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17725.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17725");

(cljs.core.async.t_cljs$core$async17725.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17725");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17725.
 */
cljs.core.async.__GT_t_cljs$core$async17725 = (function cljs$core$async$__GT_t_cljs$core$async17725(f,ch,meta17726){
return (new cljs.core.async.t_cljs$core$async17725(f,ch,meta17726));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17725(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17733 = (function (p,ch,meta17734){
this.p = p;
this.ch = ch;
this.meta17734 = meta17734;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17735,meta17734__$1){
var self__ = this;
var _17735__$1 = this;
return (new cljs.core.async.t_cljs$core$async17733(self__.p,self__.ch,meta17734__$1));
}));

(cljs.core.async.t_cljs$core$async17733.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17735){
var self__ = this;
var _17735__$1 = this;
return self__.meta17734;
}));

(cljs.core.async.t_cljs$core$async17733.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17733.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17733.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17733.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17733.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17733.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17733.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17733.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17734","meta17734",-350392999,null)], null);
}));

(cljs.core.async.t_cljs$core$async17733.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17733.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17733");

(cljs.core.async.t_cljs$core$async17733.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17733");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17733.
 */
cljs.core.async.__GT_t_cljs$core$async17733 = (function cljs$core$async$__GT_t_cljs$core$async17733(p,ch,meta17734){
return (new cljs.core.async.t_cljs$core$async17733(p,ch,meta17734));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17733(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17742 = arguments.length;
switch (G__17742) {
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
var c__14733__auto___18972 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14734__auto__ = (function (){var switch__14384__auto__ = (function (state_17766){
var state_val_17767 = (state_17766[(1)]);
if((state_val_17767 === (7))){
var inst_17762 = (state_17766[(2)]);
var state_17766__$1 = state_17766;
var statearr_17768_18973 = state_17766__$1;
(statearr_17768_18973[(2)] = inst_17762);

(statearr_17768_18973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17767 === (1))){
var state_17766__$1 = state_17766;
var statearr_17769_18974 = state_17766__$1;
(statearr_17769_18974[(2)] = null);

(statearr_17769_18974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17767 === (4))){
var inst_17748 = (state_17766[(7)]);
var inst_17748__$1 = (state_17766[(2)]);
var inst_17749 = (inst_17748__$1 == null);
var state_17766__$1 = (function (){var statearr_17773 = state_17766;
(statearr_17773[(7)] = inst_17748__$1);

return statearr_17773;
})();
if(cljs.core.truth_(inst_17749)){
var statearr_17774_18975 = state_17766__$1;
(statearr_17774_18975[(1)] = (5));

} else {
var statearr_17775_18976 = state_17766__$1;
(statearr_17775_18976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17767 === (6))){
var inst_17748 = (state_17766[(7)]);
var inst_17753 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17748) : p.call(null,inst_17748));
var state_17766__$1 = state_17766;
if(cljs.core.truth_(inst_17753)){
var statearr_17776_18977 = state_17766__$1;
(statearr_17776_18977[(1)] = (8));

} else {
var statearr_17777_18978 = state_17766__$1;
(statearr_17777_18978[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17767 === (3))){
var inst_17764 = (state_17766[(2)]);
var state_17766__$1 = state_17766;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17766__$1,inst_17764);
} else {
if((state_val_17767 === (2))){
var state_17766__$1 = state_17766;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17766__$1,(4),ch);
} else {
if((state_val_17767 === (11))){
var inst_17756 = (state_17766[(2)]);
var state_17766__$1 = state_17766;
var statearr_17778_18979 = state_17766__$1;
(statearr_17778_18979[(2)] = inst_17756);

(statearr_17778_18979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17767 === (9))){
var state_17766__$1 = state_17766;
var statearr_17779_18980 = state_17766__$1;
(statearr_17779_18980[(2)] = null);

(statearr_17779_18980[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17767 === (5))){
var inst_17751 = cljs.core.async.close_BANG_(out);
var state_17766__$1 = state_17766;
var statearr_17780_18981 = state_17766__$1;
(statearr_17780_18981[(2)] = inst_17751);

(statearr_17780_18981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17767 === (10))){
var inst_17759 = (state_17766[(2)]);
var state_17766__$1 = (function (){var statearr_17784 = state_17766;
(statearr_17784[(8)] = inst_17759);

return statearr_17784;
})();
var statearr_17785_18984 = state_17766__$1;
(statearr_17785_18984[(2)] = null);

(statearr_17785_18984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17767 === (8))){
var inst_17748 = (state_17766[(7)]);
var state_17766__$1 = state_17766;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17766__$1,(11),out,inst_17748);
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
var cljs$core$async$state_machine__14385__auto__ = null;
var cljs$core$async$state_machine__14385__auto____0 = (function (){
var statearr_17789 = [null,null,null,null,null,null,null,null,null];
(statearr_17789[(0)] = cljs$core$async$state_machine__14385__auto__);

(statearr_17789[(1)] = (1));

return statearr_17789;
});
var cljs$core$async$state_machine__14385__auto____1 = (function (state_17766){
while(true){
var ret_value__14386__auto__ = (function (){try{while(true){
var result__14387__auto__ = switch__14384__auto__(state_17766);
if(cljs.core.keyword_identical_QMARK_(result__14387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14387__auto__;
}
break;
}
}catch (e17790){var ex__14388__auto__ = e17790;
var statearr_17791_18985 = state_17766;
(statearr_17791_18985[(2)] = ex__14388__auto__);


if(cljs.core.seq((state_17766[(4)]))){
var statearr_17792_18986 = state_17766;
(statearr_17792_18986[(1)] = cljs.core.first((state_17766[(4)])));

} else {
throw ex__14388__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18988 = state_17766;
state_17766 = G__18988;
continue;
} else {
return ret_value__14386__auto__;
}
break;
}
});
cljs$core$async$state_machine__14385__auto__ = function(state_17766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14385__auto____1.call(this,state_17766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14385__auto____0;
cljs$core$async$state_machine__14385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14385__auto____1;
return cljs$core$async$state_machine__14385__auto__;
})()
})();
var state__14735__auto__ = (function (){var statearr_17794 = f__14734__auto__();
(statearr_17794[(6)] = c__14733__auto___18972);

return statearr_17794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14735__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17799 = arguments.length;
switch (G__17799) {
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
var c__14733__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14734__auto__ = (function (){var switch__14384__auto__ = (function (state_17868){
var state_val_17869 = (state_17868[(1)]);
if((state_val_17869 === (7))){
var inst_17863 = (state_17868[(2)]);
var state_17868__$1 = state_17868;
var statearr_17873_18990 = state_17868__$1;
(statearr_17873_18990[(2)] = inst_17863);

(statearr_17873_18990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17869 === (20))){
var inst_17830 = (state_17868[(7)]);
var inst_17841 = (state_17868[(2)]);
var inst_17842 = cljs.core.next(inst_17830);
var inst_17816 = inst_17842;
var inst_17817 = null;
var inst_17818 = (0);
var inst_17819 = (0);
var state_17868__$1 = (function (){var statearr_17877 = state_17868;
(statearr_17877[(8)] = inst_17819);

(statearr_17877[(9)] = inst_17817);

(statearr_17877[(10)] = inst_17841);

(statearr_17877[(11)] = inst_17816);

(statearr_17877[(12)] = inst_17818);

return statearr_17877;
})();
var statearr_17878_18992 = state_17868__$1;
(statearr_17878_18992[(2)] = null);

(statearr_17878_18992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17869 === (1))){
var state_17868__$1 = state_17868;
var statearr_17879_18993 = state_17868__$1;
(statearr_17879_18993[(2)] = null);

(statearr_17879_18993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17869 === (4))){
var inst_17805 = (state_17868[(13)]);
var inst_17805__$1 = (state_17868[(2)]);
var inst_17806 = (inst_17805__$1 == null);
var state_17868__$1 = (function (){var statearr_17880 = state_17868;
(statearr_17880[(13)] = inst_17805__$1);

return statearr_17880;
})();
if(cljs.core.truth_(inst_17806)){
var statearr_17881_18995 = state_17868__$1;
(statearr_17881_18995[(1)] = (5));

} else {
var statearr_17882_18996 = state_17868__$1;
(statearr_17882_18996[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17869 === (15))){
var state_17868__$1 = state_17868;
var statearr_17886_18997 = state_17868__$1;
(statearr_17886_18997[(2)] = null);

(statearr_17886_18997[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17869 === (21))){
var state_17868__$1 = state_17868;
var statearr_17887_18998 = state_17868__$1;
(statearr_17887_18998[(2)] = null);

(statearr_17887_18998[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17869 === (13))){
var inst_17819 = (state_17868[(8)]);
var inst_17817 = (state_17868[(9)]);
var inst_17816 = (state_17868[(11)]);
var inst_17818 = (state_17868[(12)]);
var inst_17826 = (state_17868[(2)]);
var inst_17827 = (inst_17819 + (1));
var tmp17883 = inst_17817;
var tmp17884 = inst_17816;
var tmp17885 = inst_17818;
var inst_17816__$1 = tmp17884;
var inst_17817__$1 = tmp17883;
var inst_17818__$1 = tmp17885;
var inst_17819__$1 = inst_17827;
var state_17868__$1 = (function (){var statearr_17888 = state_17868;
(statearr_17888[(8)] = inst_17819__$1);

(statearr_17888[(14)] = inst_17826);

(statearr_17888[(9)] = inst_17817__$1);

(statearr_17888[(11)] = inst_17816__$1);

(statearr_17888[(12)] = inst_17818__$1);

return statearr_17888;
})();
var statearr_17892_18999 = state_17868__$1;
(statearr_17892_18999[(2)] = null);

(statearr_17892_18999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17869 === (22))){
var state_17868__$1 = state_17868;
var statearr_17893_19000 = state_17868__$1;
(statearr_17893_19000[(2)] = null);

(statearr_17893_19000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17869 === (6))){
var inst_17805 = (state_17868[(13)]);
var inst_17814 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17805) : f.call(null,inst_17805));
var inst_17815 = cljs.core.seq(inst_17814);
var inst_17816 = inst_17815;
var inst_17817 = null;
var inst_17818 = (0);
var inst_17819 = (0);
var state_17868__$1 = (function (){var statearr_17897 = state_17868;
(statearr_17897[(8)] = inst_17819);

(statearr_17897[(9)] = inst_17817);

(statearr_17897[(11)] = inst_17816);

(statearr_17897[(12)] = inst_17818);

return statearr_17897;
})();
var statearr_17898_19001 = state_17868__$1;
(statearr_17898_19001[(2)] = null);

(statearr_17898_19001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17869 === (17))){
var inst_17830 = (state_17868[(7)]);
var inst_17834 = cljs.core.chunk_first(inst_17830);
var inst_17835 = cljs.core.chunk_rest(inst_17830);
var inst_17836 = cljs.core.count(inst_17834);
var inst_17816 = inst_17835;
var inst_17817 = inst_17834;
var inst_17818 = inst_17836;
var inst_17819 = (0);
var state_17868__$1 = (function (){var statearr_17903 = state_17868;
(statearr_17903[(8)] = inst_17819);

(statearr_17903[(9)] = inst_17817);

(statearr_17903[(11)] = inst_17816);

(statearr_17903[(12)] = inst_17818);

return statearr_17903;
})();
var statearr_17907_19002 = state_17868__$1;
(statearr_17907_19002[(2)] = null);

(statearr_17907_19002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17869 === (3))){
var inst_17865 = (state_17868[(2)]);
var state_17868__$1 = state_17868;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17868__$1,inst_17865);
} else {
if((state_val_17869 === (12))){
var inst_17850 = (state_17868[(2)]);
var state_17868__$1 = state_17868;
var statearr_17908_19003 = state_17868__$1;
(statearr_17908_19003[(2)] = inst_17850);

(statearr_17908_19003[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17869 === (2))){
var state_17868__$1 = state_17868;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17868__$1,(4),in$);
} else {
if((state_val_17869 === (23))){
var inst_17861 = (state_17868[(2)]);
var state_17868__$1 = state_17868;
var statearr_17909_19004 = state_17868__$1;
(statearr_17909_19004[(2)] = inst_17861);

(statearr_17909_19004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17869 === (19))){
var inst_17845 = (state_17868[(2)]);
var state_17868__$1 = state_17868;
var statearr_17925_19005 = state_17868__$1;
(statearr_17925_19005[(2)] = inst_17845);

(statearr_17925_19005[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17869 === (11))){
var inst_17816 = (state_17868[(11)]);
var inst_17830 = (state_17868[(7)]);
var inst_17830__$1 = cljs.core.seq(inst_17816);
var state_17868__$1 = (function (){var statearr_17928 = state_17868;
(statearr_17928[(7)] = inst_17830__$1);

return statearr_17928;
})();
if(inst_17830__$1){
var statearr_17931_19010 = state_17868__$1;
(statearr_17931_19010[(1)] = (14));

} else {
var statearr_17932_19011 = state_17868__$1;
(statearr_17932_19011[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17869 === (9))){
var inst_17852 = (state_17868[(2)]);
var inst_17853 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17868__$1 = (function (){var statearr_17933 = state_17868;
(statearr_17933[(15)] = inst_17852);

return statearr_17933;
})();
if(cljs.core.truth_(inst_17853)){
var statearr_17934_19025 = state_17868__$1;
(statearr_17934_19025[(1)] = (21));

} else {
var statearr_17935_19026 = state_17868__$1;
(statearr_17935_19026[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17869 === (5))){
var inst_17808 = cljs.core.async.close_BANG_(out);
var state_17868__$1 = state_17868;
var statearr_17936_19027 = state_17868__$1;
(statearr_17936_19027[(2)] = inst_17808);

(statearr_17936_19027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17869 === (14))){
var inst_17830 = (state_17868[(7)]);
var inst_17832 = cljs.core.chunked_seq_QMARK_(inst_17830);
var state_17868__$1 = state_17868;
if(inst_17832){
var statearr_17937_19035 = state_17868__$1;
(statearr_17937_19035[(1)] = (17));

} else {
var statearr_17938_19036 = state_17868__$1;
(statearr_17938_19036[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17869 === (16))){
var inst_17848 = (state_17868[(2)]);
var state_17868__$1 = state_17868;
var statearr_17939_19037 = state_17868__$1;
(statearr_17939_19037[(2)] = inst_17848);

(statearr_17939_19037[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17869 === (10))){
var inst_17819 = (state_17868[(8)]);
var inst_17817 = (state_17868[(9)]);
var inst_17824 = cljs.core._nth(inst_17817,inst_17819);
var state_17868__$1 = state_17868;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17868__$1,(13),out,inst_17824);
} else {
if((state_val_17869 === (18))){
var inst_17830 = (state_17868[(7)]);
var inst_17839 = cljs.core.first(inst_17830);
var state_17868__$1 = state_17868;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17868__$1,(20),out,inst_17839);
} else {
if((state_val_17869 === (8))){
var inst_17819 = (state_17868[(8)]);
var inst_17818 = (state_17868[(12)]);
var inst_17821 = (inst_17819 < inst_17818);
var inst_17822 = inst_17821;
var state_17868__$1 = state_17868;
if(cljs.core.truth_(inst_17822)){
var statearr_17943_19039 = state_17868__$1;
(statearr_17943_19039[(1)] = (10));

} else {
var statearr_17944_19041 = state_17868__$1;
(statearr_17944_19041[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__14385__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14385__auto____0 = (function (){
var statearr_17945 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17945[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14385__auto__);

(statearr_17945[(1)] = (1));

return statearr_17945;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14385__auto____1 = (function (state_17868){
while(true){
var ret_value__14386__auto__ = (function (){try{while(true){
var result__14387__auto__ = switch__14384__auto__(state_17868);
if(cljs.core.keyword_identical_QMARK_(result__14387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14387__auto__;
}
break;
}
}catch (e17946){var ex__14388__auto__ = e17946;
var statearr_17947_19056 = state_17868;
(statearr_17947_19056[(2)] = ex__14388__auto__);


if(cljs.core.seq((state_17868[(4)]))){
var statearr_17948_19057 = state_17868;
(statearr_17948_19057[(1)] = cljs.core.first((state_17868[(4)])));

} else {
throw ex__14388__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19058 = state_17868;
state_17868 = G__19058;
continue;
} else {
return ret_value__14386__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14385__auto__ = function(state_17868){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14385__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14385__auto____1.call(this,state_17868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14385__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14385__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14385__auto__;
})()
})();
var state__14735__auto__ = (function (){var statearr_17949 = f__14734__auto__();
(statearr_17949[(6)] = c__14733__auto__);

return statearr_17949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14735__auto__);
}));

return c__14733__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17951 = arguments.length;
switch (G__17951) {
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
var G__17962 = arguments.length;
switch (G__17962) {
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
var G__17977 = arguments.length;
switch (G__17977) {
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
var c__14733__auto___19093 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14734__auto__ = (function (){var switch__14384__auto__ = (function (state_18006){
var state_val_18007 = (state_18006[(1)]);
if((state_val_18007 === (7))){
var inst_18001 = (state_18006[(2)]);
var state_18006__$1 = state_18006;
var statearr_18008_19094 = state_18006__$1;
(statearr_18008_19094[(2)] = inst_18001);

(statearr_18008_19094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18007 === (1))){
var inst_17983 = null;
var state_18006__$1 = (function (){var statearr_18009 = state_18006;
(statearr_18009[(7)] = inst_17983);

return statearr_18009;
})();
var statearr_18010_19102 = state_18006__$1;
(statearr_18010_19102[(2)] = null);

(statearr_18010_19102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18007 === (4))){
var inst_17986 = (state_18006[(8)]);
var inst_17986__$1 = (state_18006[(2)]);
var inst_17987 = (inst_17986__$1 == null);
var inst_17988 = cljs.core.not(inst_17987);
var state_18006__$1 = (function (){var statearr_18011 = state_18006;
(statearr_18011[(8)] = inst_17986__$1);

return statearr_18011;
})();
if(inst_17988){
var statearr_18012_19114 = state_18006__$1;
(statearr_18012_19114[(1)] = (5));

} else {
var statearr_18013_19115 = state_18006__$1;
(statearr_18013_19115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18007 === (6))){
var state_18006__$1 = state_18006;
var statearr_18014_19116 = state_18006__$1;
(statearr_18014_19116[(2)] = null);

(statearr_18014_19116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18007 === (3))){
var inst_18003 = (state_18006[(2)]);
var inst_18004 = cljs.core.async.close_BANG_(out);
var state_18006__$1 = (function (){var statearr_18015 = state_18006;
(statearr_18015[(9)] = inst_18003);

return statearr_18015;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18006__$1,inst_18004);
} else {
if((state_val_18007 === (2))){
var state_18006__$1 = state_18006;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18006__$1,(4),ch);
} else {
if((state_val_18007 === (11))){
var inst_17986 = (state_18006[(8)]);
var inst_17995 = (state_18006[(2)]);
var inst_17983 = inst_17986;
var state_18006__$1 = (function (){var statearr_18016 = state_18006;
(statearr_18016[(7)] = inst_17983);

(statearr_18016[(10)] = inst_17995);

return statearr_18016;
})();
var statearr_18017_19132 = state_18006__$1;
(statearr_18017_19132[(2)] = null);

(statearr_18017_19132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18007 === (9))){
var inst_17986 = (state_18006[(8)]);
var state_18006__$1 = state_18006;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18006__$1,(11),out,inst_17986);
} else {
if((state_val_18007 === (5))){
var inst_17986 = (state_18006[(8)]);
var inst_17983 = (state_18006[(7)]);
var inst_17990 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17986,inst_17983);
var state_18006__$1 = state_18006;
if(inst_17990){
var statearr_18019_19138 = state_18006__$1;
(statearr_18019_19138[(1)] = (8));

} else {
var statearr_18020_19139 = state_18006__$1;
(statearr_18020_19139[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18007 === (10))){
var inst_17998 = (state_18006[(2)]);
var state_18006__$1 = state_18006;
var statearr_18021_19140 = state_18006__$1;
(statearr_18021_19140[(2)] = inst_17998);

(statearr_18021_19140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18007 === (8))){
var inst_17983 = (state_18006[(7)]);
var tmp18018 = inst_17983;
var inst_17983__$1 = tmp18018;
var state_18006__$1 = (function (){var statearr_18022 = state_18006;
(statearr_18022[(7)] = inst_17983__$1);

return statearr_18022;
})();
var statearr_18024_19141 = state_18006__$1;
(statearr_18024_19141[(2)] = null);

(statearr_18024_19141[(1)] = (2));


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
var cljs$core$async$state_machine__14385__auto__ = null;
var cljs$core$async$state_machine__14385__auto____0 = (function (){
var statearr_18026 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18026[(0)] = cljs$core$async$state_machine__14385__auto__);

(statearr_18026[(1)] = (1));

return statearr_18026;
});
var cljs$core$async$state_machine__14385__auto____1 = (function (state_18006){
while(true){
var ret_value__14386__auto__ = (function (){try{while(true){
var result__14387__auto__ = switch__14384__auto__(state_18006);
if(cljs.core.keyword_identical_QMARK_(result__14387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14387__auto__;
}
break;
}
}catch (e18027){var ex__14388__auto__ = e18027;
var statearr_18029_19149 = state_18006;
(statearr_18029_19149[(2)] = ex__14388__auto__);


if(cljs.core.seq((state_18006[(4)]))){
var statearr_18030_19150 = state_18006;
(statearr_18030_19150[(1)] = cljs.core.first((state_18006[(4)])));

} else {
throw ex__14388__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19151 = state_18006;
state_18006 = G__19151;
continue;
} else {
return ret_value__14386__auto__;
}
break;
}
});
cljs$core$async$state_machine__14385__auto__ = function(state_18006){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14385__auto____1.call(this,state_18006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14385__auto____0;
cljs$core$async$state_machine__14385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14385__auto____1;
return cljs$core$async$state_machine__14385__auto__;
})()
})();
var state__14735__auto__ = (function (){var statearr_18031 = f__14734__auto__();
(statearr_18031[(6)] = c__14733__auto___19093);

return statearr_18031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14735__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18033 = arguments.length;
switch (G__18033) {
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
var c__14733__auto___19154 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14734__auto__ = (function (){var switch__14384__auto__ = (function (state_18084){
var state_val_18085 = (state_18084[(1)]);
if((state_val_18085 === (7))){
var inst_18080 = (state_18084[(2)]);
var state_18084__$1 = state_18084;
var statearr_18086_19155 = state_18084__$1;
(statearr_18086_19155[(2)] = inst_18080);

(statearr_18086_19155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18085 === (1))){
var inst_18043 = (new Array(n));
var inst_18044 = inst_18043;
var inst_18045 = (0);
var state_18084__$1 = (function (){var statearr_18087 = state_18084;
(statearr_18087[(7)] = inst_18045);

(statearr_18087[(8)] = inst_18044);

return statearr_18087;
})();
var statearr_18088_19156 = state_18084__$1;
(statearr_18088_19156[(2)] = null);

(statearr_18088_19156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18085 === (4))){
var inst_18048 = (state_18084[(9)]);
var inst_18048__$1 = (state_18084[(2)]);
var inst_18049 = (inst_18048__$1 == null);
var inst_18050 = cljs.core.not(inst_18049);
var state_18084__$1 = (function (){var statearr_18089 = state_18084;
(statearr_18089[(9)] = inst_18048__$1);

return statearr_18089;
})();
if(inst_18050){
var statearr_18090_19158 = state_18084__$1;
(statearr_18090_19158[(1)] = (5));

} else {
var statearr_18091_19159 = state_18084__$1;
(statearr_18091_19159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18085 === (15))){
var inst_18074 = (state_18084[(2)]);
var state_18084__$1 = state_18084;
var statearr_18092_19160 = state_18084__$1;
(statearr_18092_19160[(2)] = inst_18074);

(statearr_18092_19160[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18085 === (13))){
var state_18084__$1 = state_18084;
var statearr_18093_19161 = state_18084__$1;
(statearr_18093_19161[(2)] = null);

(statearr_18093_19161[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18085 === (6))){
var inst_18045 = (state_18084[(7)]);
var inst_18070 = (inst_18045 > (0));
var state_18084__$1 = state_18084;
if(cljs.core.truth_(inst_18070)){
var statearr_18094_19162 = state_18084__$1;
(statearr_18094_19162[(1)] = (12));

} else {
var statearr_18095_19164 = state_18084__$1;
(statearr_18095_19164[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18085 === (3))){
var inst_18082 = (state_18084[(2)]);
var state_18084__$1 = state_18084;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18084__$1,inst_18082);
} else {
if((state_val_18085 === (12))){
var inst_18044 = (state_18084[(8)]);
var inst_18072 = cljs.core.vec(inst_18044);
var state_18084__$1 = state_18084;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18084__$1,(15),out,inst_18072);
} else {
if((state_val_18085 === (2))){
var state_18084__$1 = state_18084;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18084__$1,(4),ch);
} else {
if((state_val_18085 === (11))){
var inst_18061 = (state_18084[(2)]);
var inst_18062 = (new Array(n));
var inst_18044 = inst_18062;
var inst_18045 = (0);
var state_18084__$1 = (function (){var statearr_18096 = state_18084;
(statearr_18096[(7)] = inst_18045);

(statearr_18096[(8)] = inst_18044);

(statearr_18096[(10)] = inst_18061);

return statearr_18096;
})();
var statearr_18097_19165 = state_18084__$1;
(statearr_18097_19165[(2)] = null);

(statearr_18097_19165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18085 === (9))){
var inst_18044 = (state_18084[(8)]);
var inst_18059 = cljs.core.vec(inst_18044);
var state_18084__$1 = state_18084;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18084__$1,(11),out,inst_18059);
} else {
if((state_val_18085 === (5))){
var inst_18054 = (state_18084[(11)]);
var inst_18045 = (state_18084[(7)]);
var inst_18044 = (state_18084[(8)]);
var inst_18048 = (state_18084[(9)]);
var inst_18052 = (inst_18044[inst_18045] = inst_18048);
var inst_18054__$1 = (inst_18045 + (1));
var inst_18055 = (inst_18054__$1 < n);
var state_18084__$1 = (function (){var statearr_18098 = state_18084;
(statearr_18098[(11)] = inst_18054__$1);

(statearr_18098[(12)] = inst_18052);

return statearr_18098;
})();
if(cljs.core.truth_(inst_18055)){
var statearr_18099_19166 = state_18084__$1;
(statearr_18099_19166[(1)] = (8));

} else {
var statearr_18100_19167 = state_18084__$1;
(statearr_18100_19167[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18085 === (14))){
var inst_18077 = (state_18084[(2)]);
var inst_18078 = cljs.core.async.close_BANG_(out);
var state_18084__$1 = (function (){var statearr_18102 = state_18084;
(statearr_18102[(13)] = inst_18077);

return statearr_18102;
})();
var statearr_18103_19168 = state_18084__$1;
(statearr_18103_19168[(2)] = inst_18078);

(statearr_18103_19168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18085 === (10))){
var inst_18065 = (state_18084[(2)]);
var state_18084__$1 = state_18084;
var statearr_18104_19169 = state_18084__$1;
(statearr_18104_19169[(2)] = inst_18065);

(statearr_18104_19169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18085 === (8))){
var inst_18054 = (state_18084[(11)]);
var inst_18044 = (state_18084[(8)]);
var tmp18101 = inst_18044;
var inst_18044__$1 = tmp18101;
var inst_18045 = inst_18054;
var state_18084__$1 = (function (){var statearr_18105 = state_18084;
(statearr_18105[(7)] = inst_18045);

(statearr_18105[(8)] = inst_18044__$1);

return statearr_18105;
})();
var statearr_18106_19170 = state_18084__$1;
(statearr_18106_19170[(2)] = null);

(statearr_18106_19170[(1)] = (2));


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
var cljs$core$async$state_machine__14385__auto__ = null;
var cljs$core$async$state_machine__14385__auto____0 = (function (){
var statearr_18107 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18107[(0)] = cljs$core$async$state_machine__14385__auto__);

(statearr_18107[(1)] = (1));

return statearr_18107;
});
var cljs$core$async$state_machine__14385__auto____1 = (function (state_18084){
while(true){
var ret_value__14386__auto__ = (function (){try{while(true){
var result__14387__auto__ = switch__14384__auto__(state_18084);
if(cljs.core.keyword_identical_QMARK_(result__14387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14387__auto__;
}
break;
}
}catch (e18108){var ex__14388__auto__ = e18108;
var statearr_18109_19172 = state_18084;
(statearr_18109_19172[(2)] = ex__14388__auto__);


if(cljs.core.seq((state_18084[(4)]))){
var statearr_18110_19173 = state_18084;
(statearr_18110_19173[(1)] = cljs.core.first((state_18084[(4)])));

} else {
throw ex__14388__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19174 = state_18084;
state_18084 = G__19174;
continue;
} else {
return ret_value__14386__auto__;
}
break;
}
});
cljs$core$async$state_machine__14385__auto__ = function(state_18084){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14385__auto____1.call(this,state_18084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14385__auto____0;
cljs$core$async$state_machine__14385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14385__auto____1;
return cljs$core$async$state_machine__14385__auto__;
})()
})();
var state__14735__auto__ = (function (){var statearr_18113 = f__14734__auto__();
(statearr_18113[(6)] = c__14733__auto___19154);

return statearr_18113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14735__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18116 = arguments.length;
switch (G__18116) {
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
var c__14733__auto___19177 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14734__auto__ = (function (){var switch__14384__auto__ = (function (state_18162){
var state_val_18163 = (state_18162[(1)]);
if((state_val_18163 === (7))){
var inst_18158 = (state_18162[(2)]);
var state_18162__$1 = state_18162;
var statearr_18164_19178 = state_18162__$1;
(statearr_18164_19178[(2)] = inst_18158);

(statearr_18164_19178[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18163 === (1))){
var inst_18118 = [];
var inst_18119 = inst_18118;
var inst_18120 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18162__$1 = (function (){var statearr_18165 = state_18162;
(statearr_18165[(7)] = inst_18119);

(statearr_18165[(8)] = inst_18120);

return statearr_18165;
})();
var statearr_18166_19179 = state_18162__$1;
(statearr_18166_19179[(2)] = null);

(statearr_18166_19179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18163 === (4))){
var inst_18123 = (state_18162[(9)]);
var inst_18123__$1 = (state_18162[(2)]);
var inst_18124 = (inst_18123__$1 == null);
var inst_18125 = cljs.core.not(inst_18124);
var state_18162__$1 = (function (){var statearr_18167 = state_18162;
(statearr_18167[(9)] = inst_18123__$1);

return statearr_18167;
})();
if(inst_18125){
var statearr_18169_19180 = state_18162__$1;
(statearr_18169_19180[(1)] = (5));

} else {
var statearr_18176_19181 = state_18162__$1;
(statearr_18176_19181[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18163 === (15))){
var inst_18119 = (state_18162[(7)]);
var inst_18150 = cljs.core.vec(inst_18119);
var state_18162__$1 = state_18162;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18162__$1,(18),out,inst_18150);
} else {
if((state_val_18163 === (13))){
var inst_18145 = (state_18162[(2)]);
var state_18162__$1 = state_18162;
var statearr_18177_19186 = state_18162__$1;
(statearr_18177_19186[(2)] = inst_18145);

(statearr_18177_19186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18163 === (6))){
var inst_18119 = (state_18162[(7)]);
var inst_18147 = inst_18119.length;
var inst_18148 = (inst_18147 > (0));
var state_18162__$1 = state_18162;
if(cljs.core.truth_(inst_18148)){
var statearr_18178_19191 = state_18162__$1;
(statearr_18178_19191[(1)] = (15));

} else {
var statearr_18192_19192 = state_18162__$1;
(statearr_18192_19192[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18163 === (17))){
var inst_18155 = (state_18162[(2)]);
var inst_18156 = cljs.core.async.close_BANG_(out);
var state_18162__$1 = (function (){var statearr_18193 = state_18162;
(statearr_18193[(10)] = inst_18155);

return statearr_18193;
})();
var statearr_18194_19193 = state_18162__$1;
(statearr_18194_19193[(2)] = inst_18156);

(statearr_18194_19193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18163 === (3))){
var inst_18160 = (state_18162[(2)]);
var state_18162__$1 = state_18162;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18162__$1,inst_18160);
} else {
if((state_val_18163 === (12))){
var inst_18119 = (state_18162[(7)]);
var inst_18138 = cljs.core.vec(inst_18119);
var state_18162__$1 = state_18162;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18162__$1,(14),out,inst_18138);
} else {
if((state_val_18163 === (2))){
var state_18162__$1 = state_18162;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18162__$1,(4),ch);
} else {
if((state_val_18163 === (11))){
var inst_18123 = (state_18162[(9)]);
var inst_18119 = (state_18162[(7)]);
var inst_18127 = (state_18162[(11)]);
var inst_18135 = inst_18119.push(inst_18123);
var tmp18195 = inst_18119;
var inst_18119__$1 = tmp18195;
var inst_18120 = inst_18127;
var state_18162__$1 = (function (){var statearr_18205 = state_18162;
(statearr_18205[(7)] = inst_18119__$1);

(statearr_18205[(8)] = inst_18120);

(statearr_18205[(12)] = inst_18135);

return statearr_18205;
})();
var statearr_18206_19198 = state_18162__$1;
(statearr_18206_19198[(2)] = null);

(statearr_18206_19198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18163 === (9))){
var inst_18120 = (state_18162[(8)]);
var inst_18131 = cljs.core.keyword_identical_QMARK_(inst_18120,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_18162__$1 = state_18162;
var statearr_18219_19199 = state_18162__$1;
(statearr_18219_19199[(2)] = inst_18131);

(statearr_18219_19199[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18163 === (5))){
var inst_18123 = (state_18162[(9)]);
var inst_18128 = (state_18162[(13)]);
var inst_18120 = (state_18162[(8)]);
var inst_18127 = (state_18162[(11)]);
var inst_18127__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18123) : f.call(null,inst_18123));
var inst_18128__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18127__$1,inst_18120);
var state_18162__$1 = (function (){var statearr_18222 = state_18162;
(statearr_18222[(13)] = inst_18128__$1);

(statearr_18222[(11)] = inst_18127__$1);

return statearr_18222;
})();
if(inst_18128__$1){
var statearr_18226_19200 = state_18162__$1;
(statearr_18226_19200[(1)] = (8));

} else {
var statearr_18229_19201 = state_18162__$1;
(statearr_18229_19201[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18163 === (14))){
var inst_18123 = (state_18162[(9)]);
var inst_18127 = (state_18162[(11)]);
var inst_18140 = (state_18162[(2)]);
var inst_18141 = [];
var inst_18142 = inst_18141.push(inst_18123);
var inst_18119 = inst_18141;
var inst_18120 = inst_18127;
var state_18162__$1 = (function (){var statearr_18230 = state_18162;
(statearr_18230[(14)] = inst_18142);

(statearr_18230[(7)] = inst_18119);

(statearr_18230[(8)] = inst_18120);

(statearr_18230[(15)] = inst_18140);

return statearr_18230;
})();
var statearr_18231_19203 = state_18162__$1;
(statearr_18231_19203[(2)] = null);

(statearr_18231_19203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18163 === (16))){
var state_18162__$1 = state_18162;
var statearr_18235_19204 = state_18162__$1;
(statearr_18235_19204[(2)] = null);

(statearr_18235_19204[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18163 === (10))){
var inst_18133 = (state_18162[(2)]);
var state_18162__$1 = state_18162;
if(cljs.core.truth_(inst_18133)){
var statearr_18240_19205 = state_18162__$1;
(statearr_18240_19205[(1)] = (11));

} else {
var statearr_18245_19206 = state_18162__$1;
(statearr_18245_19206[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18163 === (18))){
var inst_18152 = (state_18162[(2)]);
var state_18162__$1 = state_18162;
var statearr_18246_19207 = state_18162__$1;
(statearr_18246_19207[(2)] = inst_18152);

(statearr_18246_19207[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18163 === (8))){
var inst_18128 = (state_18162[(13)]);
var state_18162__$1 = state_18162;
var statearr_18253_19208 = state_18162__$1;
(statearr_18253_19208[(2)] = inst_18128);

(statearr_18253_19208[(1)] = (10));


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
var cljs$core$async$state_machine__14385__auto__ = null;
var cljs$core$async$state_machine__14385__auto____0 = (function (){
var statearr_18258 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18258[(0)] = cljs$core$async$state_machine__14385__auto__);

(statearr_18258[(1)] = (1));

return statearr_18258;
});
var cljs$core$async$state_machine__14385__auto____1 = (function (state_18162){
while(true){
var ret_value__14386__auto__ = (function (){try{while(true){
var result__14387__auto__ = switch__14384__auto__(state_18162);
if(cljs.core.keyword_identical_QMARK_(result__14387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14387__auto__;
}
break;
}
}catch (e18259){var ex__14388__auto__ = e18259;
var statearr_18260_19213 = state_18162;
(statearr_18260_19213[(2)] = ex__14388__auto__);


if(cljs.core.seq((state_18162[(4)]))){
var statearr_18261_19214 = state_18162;
(statearr_18261_19214[(1)] = cljs.core.first((state_18162[(4)])));

} else {
throw ex__14388__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19215 = state_18162;
state_18162 = G__19215;
continue;
} else {
return ret_value__14386__auto__;
}
break;
}
});
cljs$core$async$state_machine__14385__auto__ = function(state_18162){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14385__auto____1.call(this,state_18162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14385__auto____0;
cljs$core$async$state_machine__14385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14385__auto____1;
return cljs$core$async$state_machine__14385__auto__;
})()
})();
var state__14735__auto__ = (function (){var statearr_18262 = f__14734__auto__();
(statearr_18262[(6)] = c__14733__auto___19177);

return statearr_18262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14735__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
