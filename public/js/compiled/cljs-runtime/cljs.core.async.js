goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32962 = arguments.length;
switch (G__32962) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32963 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32963 = (function (f,blockable,meta32964){
this.f = f;
this.blockable = blockable;
this.meta32964 = meta32964;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32965,meta32964__$1){
var self__ = this;
var _32965__$1 = this;
return (new cljs.core.async.t_cljs$core$async32963(self__.f,self__.blockable,meta32964__$1));
}));

(cljs.core.async.t_cljs$core$async32963.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32965){
var self__ = this;
var _32965__$1 = this;
return self__.meta32964;
}));

(cljs.core.async.t_cljs$core$async32963.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32963.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32963.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32963.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32963.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32964","meta32964",749024933,null)], null);
}));

(cljs.core.async.t_cljs$core$async32963.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32963.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32963");

(cljs.core.async.t_cljs$core$async32963.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32963");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32963.
 */
cljs.core.async.__GT_t_cljs$core$async32963 = (function cljs$core$async$__GT_t_cljs$core$async32963(f__$1,blockable__$1,meta32964){
return (new cljs.core.async.t_cljs$core$async32963(f__$1,blockable__$1,meta32964));
});

}

return (new cljs.core.async.t_cljs$core$async32963(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32970 = arguments.length;
switch (G__32970) {
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
var G__32972 = arguments.length;
switch (G__32972) {
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
var G__32974 = arguments.length;
switch (G__32974) {
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
var val_35217 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35217) : fn1.call(null,val_35217));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35217) : fn1.call(null,val_35217));
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
var G__32980 = arguments.length;
switch (G__32980) {
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
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
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
var n__4741__auto___35223 = n;
var x_35224 = (0);
while(true){
if((x_35224 < n__4741__auto___35223)){
(a[x_35224] = x_35224);

var G__35225 = (x_35224 + (1));
x_35224 = G__35225;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32985 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32985 = (function (flag,meta32986){
this.flag = flag;
this.meta32986 = meta32986;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32987,meta32986__$1){
var self__ = this;
var _32987__$1 = this;
return (new cljs.core.async.t_cljs$core$async32985(self__.flag,meta32986__$1));
}));

(cljs.core.async.t_cljs$core$async32985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32987){
var self__ = this;
var _32987__$1 = this;
return self__.meta32986;
}));

(cljs.core.async.t_cljs$core$async32985.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32985.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32985.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32985.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32985.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32986","meta32986",-1665448714,null)], null);
}));

(cljs.core.async.t_cljs$core$async32985.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32985.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32985");

(cljs.core.async.t_cljs$core$async32985.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32985");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32985.
 */
cljs.core.async.__GT_t_cljs$core$async32985 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32985(flag__$1,meta32986){
return (new cljs.core.async.t_cljs$core$async32985(flag__$1,meta32986));
});

}

return (new cljs.core.async.t_cljs$core$async32985(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32991 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32991 = (function (flag,cb,meta32992){
this.flag = flag;
this.cb = cb;
this.meta32992 = meta32992;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32993,meta32992__$1){
var self__ = this;
var _32993__$1 = this;
return (new cljs.core.async.t_cljs$core$async32991(self__.flag,self__.cb,meta32992__$1));
}));

(cljs.core.async.t_cljs$core$async32991.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32993){
var self__ = this;
var _32993__$1 = this;
return self__.meta32992;
}));

(cljs.core.async.t_cljs$core$async32991.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32991.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32991.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32991.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32991.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32992","meta32992",913660009,null)], null);
}));

(cljs.core.async.t_cljs$core$async32991.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32991.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32991");

(cljs.core.async.t_cljs$core$async32991.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32991");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32991.
 */
cljs.core.async.__GT_t_cljs$core$async32991 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32991(flag__$1,cb__$1,meta32992){
return (new cljs.core.async.t_cljs$core$async32991(flag__$1,cb__$1,meta32992));
});

}

return (new cljs.core.async.t_cljs$core$async32991(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__33003_SHARP_){
var G__33005 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33003_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33005) : fret.call(null,G__33005));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33004_SHARP_){
var G__33006 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33004_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33006) : fret.call(null,G__33006));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35226 = (i + (1));
i = G__35226;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
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
var args__4870__auto__ = [];
var len__4864__auto___35227 = arguments.length;
var i__4865__auto___35228 = (0);
while(true){
if((i__4865__auto___35228 < len__4864__auto___35227)){
args__4870__auto__.push((arguments[i__4865__auto___35228]));

var G__35229 = (i__4865__auto___35228 + (1));
i__4865__auto___35228 = G__35229;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33010){
var map__33011 = p__33010;
var map__33011__$1 = cljs.core.__destructure_map(map__33011);
var opts = map__33011__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33007){
var G__33008 = cljs.core.first(seq33007);
var seq33007__$1 = cljs.core.next(seq33007);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33008,seq33007__$1);
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
var G__33016 = arguments.length;
switch (G__33016) {
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
var c__32878__auto___35232 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32879__auto__ = (function (){var switch__32679__auto__ = (function (state_33058){
var state_val_33059 = (state_33058[(1)]);
if((state_val_33059 === (7))){
var inst_33054 = (state_33058[(2)]);
var state_33058__$1 = state_33058;
var statearr_33062_35233 = state_33058__$1;
(statearr_33062_35233[(2)] = inst_33054);

(statearr_33062_35233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33059 === (1))){
var state_33058__$1 = state_33058;
var statearr_33064_35234 = state_33058__$1;
(statearr_33064_35234[(2)] = null);

(statearr_33064_35234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33059 === (4))){
var inst_33031 = (state_33058[(7)]);
var inst_33031__$1 = (state_33058[(2)]);
var inst_33035 = (inst_33031__$1 == null);
var state_33058__$1 = (function (){var statearr_33068 = state_33058;
(statearr_33068[(7)] = inst_33031__$1);

return statearr_33068;
})();
if(cljs.core.truth_(inst_33035)){
var statearr_33069_35237 = state_33058__$1;
(statearr_33069_35237[(1)] = (5));

} else {
var statearr_33070_35238 = state_33058__$1;
(statearr_33070_35238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33059 === (13))){
var state_33058__$1 = state_33058;
var statearr_33071_35239 = state_33058__$1;
(statearr_33071_35239[(2)] = null);

(statearr_33071_35239[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33059 === (6))){
var inst_33031 = (state_33058[(7)]);
var state_33058__$1 = state_33058;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33058__$1,(11),to,inst_33031);
} else {
if((state_val_33059 === (3))){
var inst_33056 = (state_33058[(2)]);
var state_33058__$1 = state_33058;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33058__$1,inst_33056);
} else {
if((state_val_33059 === (12))){
var state_33058__$1 = state_33058;
var statearr_33072_35240 = state_33058__$1;
(statearr_33072_35240[(2)] = null);

(statearr_33072_35240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33059 === (2))){
var state_33058__$1 = state_33058;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33058__$1,(4),from);
} else {
if((state_val_33059 === (11))){
var inst_33047 = (state_33058[(2)]);
var state_33058__$1 = state_33058;
if(cljs.core.truth_(inst_33047)){
var statearr_33073_35241 = state_33058__$1;
(statearr_33073_35241[(1)] = (12));

} else {
var statearr_33074_35242 = state_33058__$1;
(statearr_33074_35242[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33059 === (9))){
var state_33058__$1 = state_33058;
var statearr_33075_35244 = state_33058__$1;
(statearr_33075_35244[(2)] = null);

(statearr_33075_35244[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33059 === (5))){
var state_33058__$1 = state_33058;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33076_35246 = state_33058__$1;
(statearr_33076_35246[(1)] = (8));

} else {
var statearr_33077_35247 = state_33058__$1;
(statearr_33077_35247[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33059 === (14))){
var inst_33052 = (state_33058[(2)]);
var state_33058__$1 = state_33058;
var statearr_33078_35248 = state_33058__$1;
(statearr_33078_35248[(2)] = inst_33052);

(statearr_33078_35248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33059 === (10))){
var inst_33044 = (state_33058[(2)]);
var state_33058__$1 = state_33058;
var statearr_33080_35249 = state_33058__$1;
(statearr_33080_35249[(2)] = inst_33044);

(statearr_33080_35249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33059 === (8))){
var inst_33038 = cljs.core.async.close_BANG_(to);
var state_33058__$1 = state_33058;
var statearr_33081_35250 = state_33058__$1;
(statearr_33081_35250[(2)] = inst_33038);

(statearr_33081_35250[(1)] = (10));


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
var cljs$core$async$state_machine__32680__auto__ = null;
var cljs$core$async$state_machine__32680__auto____0 = (function (){
var statearr_33082 = [null,null,null,null,null,null,null,null];
(statearr_33082[(0)] = cljs$core$async$state_machine__32680__auto__);

(statearr_33082[(1)] = (1));

return statearr_33082;
});
var cljs$core$async$state_machine__32680__auto____1 = (function (state_33058){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_33058);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e33083){var ex__32683__auto__ = e33083;
var statearr_33084_35252 = state_33058;
(statearr_33084_35252[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_33058[(4)]))){
var statearr_33085_35254 = state_33058;
(statearr_33085_35254[(1)] = cljs.core.first((state_33058[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35256 = state_33058;
state_33058 = G__35256;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
cljs$core$async$state_machine__32680__auto__ = function(state_33058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32680__auto____1.call(this,state_33058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32680__auto____0;
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32680__auto____1;
return cljs$core$async$state_machine__32680__auto__;
})()
})();
var state__32880__auto__ = (function (){var statearr_33086 = f__32879__auto__();
(statearr_33086[(6)] = c__32878__auto___35232);

return statearr_33086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32880__auto__);
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
var process = (function (p__33087){
var vec__33088 = p__33087;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33088,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33088,(1),null);
var job = vec__33088;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32878__auto___35258 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32879__auto__ = (function (){var switch__32679__auto__ = (function (state_33095){
var state_val_33096 = (state_33095[(1)]);
if((state_val_33096 === (1))){
var state_33095__$1 = state_33095;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33095__$1,(2),res,v);
} else {
if((state_val_33096 === (2))){
var inst_33092 = (state_33095[(2)]);
var inst_33093 = cljs.core.async.close_BANG_(res);
var state_33095__$1 = (function (){var statearr_33097 = state_33095;
(statearr_33097[(7)] = inst_33092);

return statearr_33097;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33095__$1,inst_33093);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____0 = (function (){
var statearr_33098 = [null,null,null,null,null,null,null,null];
(statearr_33098[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__);

(statearr_33098[(1)] = (1));

return statearr_33098;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____1 = (function (state_33095){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_33095);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e33099){var ex__32683__auto__ = e33099;
var statearr_33100_35259 = state_33095;
(statearr_33100_35259[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_33095[(4)]))){
var statearr_33101_35260 = state_33095;
(statearr_33101_35260[(1)] = cljs.core.first((state_33095[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35261 = state_33095;
state_33095 = G__35261;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__ = function(state_33095){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____1.call(this,state_33095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__;
})()
})();
var state__32880__auto__ = (function (){var statearr_33102 = f__32879__auto__();
(statearr_33102[(6)] = c__32878__auto___35258);

return statearr_33102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32880__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__33104){
var vec__33105 = p__33104;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33105,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33105,(1),null);
var job = vec__33105;
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
var n__4741__auto___35264 = n;
var __35265 = (0);
while(true){
if((__35265 < n__4741__auto___35264)){
var G__33109_35266 = type;
var G__33109_35267__$1 = (((G__33109_35266 instanceof cljs.core.Keyword))?G__33109_35266.fqn:null);
switch (G__33109_35267__$1) {
case "compute":
var c__32878__auto___35270 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35265,c__32878__auto___35270,G__33109_35266,G__33109_35267__$1,n__4741__auto___35264,jobs,results,process,async){
return (function (){
var f__32879__auto__ = (function (){var switch__32679__auto__ = ((function (__35265,c__32878__auto___35270,G__33109_35266,G__33109_35267__$1,n__4741__auto___35264,jobs,results,process,async){
return (function (state_33124){
var state_val_33125 = (state_33124[(1)]);
if((state_val_33125 === (1))){
var state_33124__$1 = state_33124;
var statearr_33127_35281 = state_33124__$1;
(statearr_33127_35281[(2)] = null);

(statearr_33127_35281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33125 === (2))){
var state_33124__$1 = state_33124;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33124__$1,(4),jobs);
} else {
if((state_val_33125 === (3))){
var inst_33122 = (state_33124[(2)]);
var state_33124__$1 = state_33124;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33124__$1,inst_33122);
} else {
if((state_val_33125 === (4))){
var inst_33114 = (state_33124[(2)]);
var inst_33115 = process(inst_33114);
var state_33124__$1 = state_33124;
if(cljs.core.truth_(inst_33115)){
var statearr_33130_35282 = state_33124__$1;
(statearr_33130_35282[(1)] = (5));

} else {
var statearr_33132_35283 = state_33124__$1;
(statearr_33132_35283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33125 === (5))){
var state_33124__$1 = state_33124;
var statearr_33138_35284 = state_33124__$1;
(statearr_33138_35284[(2)] = null);

(statearr_33138_35284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33125 === (6))){
var state_33124__$1 = state_33124;
var statearr_33145_35285 = state_33124__$1;
(statearr_33145_35285[(2)] = null);

(statearr_33145_35285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33125 === (7))){
var inst_33120 = (state_33124[(2)]);
var state_33124__$1 = state_33124;
var statearr_33155_35286 = state_33124__$1;
(statearr_33155_35286[(2)] = inst_33120);

(statearr_33155_35286[(1)] = (3));


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
});})(__35265,c__32878__auto___35270,G__33109_35266,G__33109_35267__$1,n__4741__auto___35264,jobs,results,process,async))
;
return ((function (__35265,switch__32679__auto__,c__32878__auto___35270,G__33109_35266,G__33109_35267__$1,n__4741__auto___35264,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____0 = (function (){
var statearr_33163 = [null,null,null,null,null,null,null];
(statearr_33163[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__);

(statearr_33163[(1)] = (1));

return statearr_33163;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____1 = (function (state_33124){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_33124);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e33164){var ex__32683__auto__ = e33164;
var statearr_33165_35288 = state_33124;
(statearr_33165_35288[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_33124[(4)]))){
var statearr_33166_35289 = state_33124;
(statearr_33166_35289[(1)] = cljs.core.first((state_33124[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35290 = state_33124;
state_33124 = G__35290;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__ = function(state_33124){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____1.call(this,state_33124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__;
})()
;})(__35265,switch__32679__auto__,c__32878__auto___35270,G__33109_35266,G__33109_35267__$1,n__4741__auto___35264,jobs,results,process,async))
})();
var state__32880__auto__ = (function (){var statearr_33170 = f__32879__auto__();
(statearr_33170[(6)] = c__32878__auto___35270);

return statearr_33170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32880__auto__);
});})(__35265,c__32878__auto___35270,G__33109_35266,G__33109_35267__$1,n__4741__auto___35264,jobs,results,process,async))
);


break;
case "async":
var c__32878__auto___35292 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35265,c__32878__auto___35292,G__33109_35266,G__33109_35267__$1,n__4741__auto___35264,jobs,results,process,async){
return (function (){
var f__32879__auto__ = (function (){var switch__32679__auto__ = ((function (__35265,c__32878__auto___35292,G__33109_35266,G__33109_35267__$1,n__4741__auto___35264,jobs,results,process,async){
return (function (state_33193){
var state_val_33194 = (state_33193[(1)]);
if((state_val_33194 === (1))){
var state_33193__$1 = state_33193;
var statearr_33195_35293 = state_33193__$1;
(statearr_33195_35293[(2)] = null);

(statearr_33195_35293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33194 === (2))){
var state_33193__$1 = state_33193;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33193__$1,(4),jobs);
} else {
if((state_val_33194 === (3))){
var inst_33191 = (state_33193[(2)]);
var state_33193__$1 = state_33193;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33193__$1,inst_33191);
} else {
if((state_val_33194 === (4))){
var inst_33181 = (state_33193[(2)]);
var inst_33182 = async(inst_33181);
var state_33193__$1 = state_33193;
if(cljs.core.truth_(inst_33182)){
var statearr_33205_35295 = state_33193__$1;
(statearr_33205_35295[(1)] = (5));

} else {
var statearr_33208_35296 = state_33193__$1;
(statearr_33208_35296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33194 === (5))){
var state_33193__$1 = state_33193;
var statearr_33219_35297 = state_33193__$1;
(statearr_33219_35297[(2)] = null);

(statearr_33219_35297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33194 === (6))){
var state_33193__$1 = state_33193;
var statearr_33220_35299 = state_33193__$1;
(statearr_33220_35299[(2)] = null);

(statearr_33220_35299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33194 === (7))){
var inst_33187 = (state_33193[(2)]);
var state_33193__$1 = state_33193;
var statearr_33221_35300 = state_33193__$1;
(statearr_33221_35300[(2)] = inst_33187);

(statearr_33221_35300[(1)] = (3));


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
});})(__35265,c__32878__auto___35292,G__33109_35266,G__33109_35267__$1,n__4741__auto___35264,jobs,results,process,async))
;
return ((function (__35265,switch__32679__auto__,c__32878__auto___35292,G__33109_35266,G__33109_35267__$1,n__4741__auto___35264,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____0 = (function (){
var statearr_33223 = [null,null,null,null,null,null,null];
(statearr_33223[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__);

(statearr_33223[(1)] = (1));

return statearr_33223;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____1 = (function (state_33193){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_33193);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e33233){var ex__32683__auto__ = e33233;
var statearr_33236_35301 = state_33193;
(statearr_33236_35301[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_33193[(4)]))){
var statearr_33243_35302 = state_33193;
(statearr_33243_35302[(1)] = cljs.core.first((state_33193[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35303 = state_33193;
state_33193 = G__35303;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__ = function(state_33193){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____1.call(this,state_33193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__;
})()
;})(__35265,switch__32679__auto__,c__32878__auto___35292,G__33109_35266,G__33109_35267__$1,n__4741__auto___35264,jobs,results,process,async))
})();
var state__32880__auto__ = (function (){var statearr_33253 = f__32879__auto__();
(statearr_33253[(6)] = c__32878__auto___35292);

return statearr_33253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32880__auto__);
});})(__35265,c__32878__auto___35292,G__33109_35266,G__33109_35267__$1,n__4741__auto___35264,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33109_35267__$1)].join('')));

}

var G__35304 = (__35265 + (1));
__35265 = G__35304;
continue;
} else {
}
break;
}

var c__32878__auto___35305 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32879__auto__ = (function (){var switch__32679__auto__ = (function (state_33298){
var state_val_33299 = (state_33298[(1)]);
if((state_val_33299 === (7))){
var inst_33293 = (state_33298[(2)]);
var state_33298__$1 = state_33298;
var statearr_33304_35306 = state_33298__$1;
(statearr_33304_35306[(2)] = inst_33293);

(statearr_33304_35306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (1))){
var state_33298__$1 = state_33298;
var statearr_33305_35307 = state_33298__$1;
(statearr_33305_35307[(2)] = null);

(statearr_33305_35307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (4))){
var inst_33277 = (state_33298[(7)]);
var inst_33277__$1 = (state_33298[(2)]);
var inst_33278 = (inst_33277__$1 == null);
var state_33298__$1 = (function (){var statearr_33306 = state_33298;
(statearr_33306[(7)] = inst_33277__$1);

return statearr_33306;
})();
if(cljs.core.truth_(inst_33278)){
var statearr_33307_35308 = state_33298__$1;
(statearr_33307_35308[(1)] = (5));

} else {
var statearr_33308_35309 = state_33298__$1;
(statearr_33308_35309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (6))){
var inst_33277 = (state_33298[(7)]);
var inst_33283 = (state_33298[(8)]);
var inst_33283__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33284 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33285 = [inst_33277,inst_33283__$1];
var inst_33286 = (new cljs.core.PersistentVector(null,2,(5),inst_33284,inst_33285,null));
var state_33298__$1 = (function (){var statearr_33310 = state_33298;
(statearr_33310[(8)] = inst_33283__$1);

return statearr_33310;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33298__$1,(8),jobs,inst_33286);
} else {
if((state_val_33299 === (3))){
var inst_33295 = (state_33298[(2)]);
var state_33298__$1 = state_33298;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33298__$1,inst_33295);
} else {
if((state_val_33299 === (2))){
var state_33298__$1 = state_33298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33298__$1,(4),from);
} else {
if((state_val_33299 === (9))){
var inst_33290 = (state_33298[(2)]);
var state_33298__$1 = (function (){var statearr_33328 = state_33298;
(statearr_33328[(9)] = inst_33290);

return statearr_33328;
})();
var statearr_33330_35310 = state_33298__$1;
(statearr_33330_35310[(2)] = null);

(statearr_33330_35310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (5))){
var inst_33280 = cljs.core.async.close_BANG_(jobs);
var state_33298__$1 = state_33298;
var statearr_33332_35311 = state_33298__$1;
(statearr_33332_35311[(2)] = inst_33280);

(statearr_33332_35311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33299 === (8))){
var inst_33283 = (state_33298[(8)]);
var inst_33288 = (state_33298[(2)]);
var state_33298__$1 = (function (){var statearr_33333 = state_33298;
(statearr_33333[(10)] = inst_33288);

return statearr_33333;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33298__$1,(9),results,inst_33283);
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
var cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____0 = (function (){
var statearr_33337 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33337[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__);

(statearr_33337[(1)] = (1));

return statearr_33337;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____1 = (function (state_33298){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_33298);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e33342){var ex__32683__auto__ = e33342;
var statearr_33344_35314 = state_33298;
(statearr_33344_35314[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_33298[(4)]))){
var statearr_33345_35315 = state_33298;
(statearr_33345_35315[(1)] = cljs.core.first((state_33298[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35316 = state_33298;
state_33298 = G__35316;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__ = function(state_33298){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____1.call(this,state_33298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__;
})()
})();
var state__32880__auto__ = (function (){var statearr_33347 = f__32879__auto__();
(statearr_33347[(6)] = c__32878__auto___35305);

return statearr_33347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32880__auto__);
}));


var c__32878__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32879__auto__ = (function (){var switch__32679__auto__ = (function (state_33385){
var state_val_33386 = (state_33385[(1)]);
if((state_val_33386 === (7))){
var inst_33381 = (state_33385[(2)]);
var state_33385__$1 = state_33385;
var statearr_33390_35319 = state_33385__$1;
(statearr_33390_35319[(2)] = inst_33381);

(statearr_33390_35319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (20))){
var state_33385__$1 = state_33385;
var statearr_33391_35320 = state_33385__$1;
(statearr_33391_35320[(2)] = null);

(statearr_33391_35320[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (1))){
var state_33385__$1 = state_33385;
var statearr_33392_35321 = state_33385__$1;
(statearr_33392_35321[(2)] = null);

(statearr_33392_35321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (4))){
var inst_33350 = (state_33385[(7)]);
var inst_33350__$1 = (state_33385[(2)]);
var inst_33351 = (inst_33350__$1 == null);
var state_33385__$1 = (function (){var statearr_33393 = state_33385;
(statearr_33393[(7)] = inst_33350__$1);

return statearr_33393;
})();
if(cljs.core.truth_(inst_33351)){
var statearr_33395_35322 = state_33385__$1;
(statearr_33395_35322[(1)] = (5));

} else {
var statearr_33397_35323 = state_33385__$1;
(statearr_33397_35323[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (15))){
var inst_33363 = (state_33385[(8)]);
var state_33385__$1 = state_33385;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33385__$1,(18),to,inst_33363);
} else {
if((state_val_33386 === (21))){
var inst_33376 = (state_33385[(2)]);
var state_33385__$1 = state_33385;
var statearr_33398_35326 = state_33385__$1;
(statearr_33398_35326[(2)] = inst_33376);

(statearr_33398_35326[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (13))){
var inst_33378 = (state_33385[(2)]);
var state_33385__$1 = (function (){var statearr_33399 = state_33385;
(statearr_33399[(9)] = inst_33378);

return statearr_33399;
})();
var statearr_33400_35327 = state_33385__$1;
(statearr_33400_35327[(2)] = null);

(statearr_33400_35327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (6))){
var inst_33350 = (state_33385[(7)]);
var state_33385__$1 = state_33385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33385__$1,(11),inst_33350);
} else {
if((state_val_33386 === (17))){
var inst_33371 = (state_33385[(2)]);
var state_33385__$1 = state_33385;
if(cljs.core.truth_(inst_33371)){
var statearr_33405_35328 = state_33385__$1;
(statearr_33405_35328[(1)] = (19));

} else {
var statearr_33407_35329 = state_33385__$1;
(statearr_33407_35329[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (3))){
var inst_33383 = (state_33385[(2)]);
var state_33385__$1 = state_33385;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33385__$1,inst_33383);
} else {
if((state_val_33386 === (12))){
var inst_33360 = (state_33385[(10)]);
var state_33385__$1 = state_33385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33385__$1,(14),inst_33360);
} else {
if((state_val_33386 === (2))){
var state_33385__$1 = state_33385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33385__$1,(4),results);
} else {
if((state_val_33386 === (19))){
var state_33385__$1 = state_33385;
var statearr_33408_35330 = state_33385__$1;
(statearr_33408_35330[(2)] = null);

(statearr_33408_35330[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (11))){
var inst_33360 = (state_33385[(2)]);
var state_33385__$1 = (function (){var statearr_33409 = state_33385;
(statearr_33409[(10)] = inst_33360);

return statearr_33409;
})();
var statearr_33410_35331 = state_33385__$1;
(statearr_33410_35331[(2)] = null);

(statearr_33410_35331[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (9))){
var state_33385__$1 = state_33385;
var statearr_33412_35332 = state_33385__$1;
(statearr_33412_35332[(2)] = null);

(statearr_33412_35332[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (5))){
var state_33385__$1 = state_33385;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33420_35337 = state_33385__$1;
(statearr_33420_35337[(1)] = (8));

} else {
var statearr_33421_35338 = state_33385__$1;
(statearr_33421_35338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (14))){
var inst_33365 = (state_33385[(11)]);
var inst_33363 = (state_33385[(8)]);
var inst_33363__$1 = (state_33385[(2)]);
var inst_33364 = (inst_33363__$1 == null);
var inst_33365__$1 = cljs.core.not(inst_33364);
var state_33385__$1 = (function (){var statearr_33422 = state_33385;
(statearr_33422[(11)] = inst_33365__$1);

(statearr_33422[(8)] = inst_33363__$1);

return statearr_33422;
})();
if(inst_33365__$1){
var statearr_33424_35348 = state_33385__$1;
(statearr_33424_35348[(1)] = (15));

} else {
var statearr_33425_35349 = state_33385__$1;
(statearr_33425_35349[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (16))){
var inst_33365 = (state_33385[(11)]);
var state_33385__$1 = state_33385;
var statearr_33427_35350 = state_33385__$1;
(statearr_33427_35350[(2)] = inst_33365);

(statearr_33427_35350[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (10))){
var inst_33357 = (state_33385[(2)]);
var state_33385__$1 = state_33385;
var statearr_33428_35351 = state_33385__$1;
(statearr_33428_35351[(2)] = inst_33357);

(statearr_33428_35351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (18))){
var inst_33368 = (state_33385[(2)]);
var state_33385__$1 = state_33385;
var statearr_33431_35352 = state_33385__$1;
(statearr_33431_35352[(2)] = inst_33368);

(statearr_33431_35352[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33386 === (8))){
var inst_33354 = cljs.core.async.close_BANG_(to);
var state_33385__$1 = state_33385;
var statearr_33432_35353 = state_33385__$1;
(statearr_33432_35353[(2)] = inst_33354);

(statearr_33432_35353[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____0 = (function (){
var statearr_33433 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33433[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__);

(statearr_33433[(1)] = (1));

return statearr_33433;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____1 = (function (state_33385){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_33385);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e33434){var ex__32683__auto__ = e33434;
var statearr_33435_35355 = state_33385;
(statearr_33435_35355[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_33385[(4)]))){
var statearr_33436_35356 = state_33385;
(statearr_33436_35356[(1)] = cljs.core.first((state_33385[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35357 = state_33385;
state_33385 = G__35357;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__ = function(state_33385){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____1.call(this,state_33385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__;
})()
})();
var state__32880__auto__ = (function (){var statearr_33438 = f__32879__auto__();
(statearr_33438[(6)] = c__32878__auto__);

return statearr_33438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32880__auto__);
}));

return c__32878__auto__;
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
var G__33444 = arguments.length;
switch (G__33444) {
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
var G__33467 = arguments.length;
switch (G__33467) {
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
var G__33470 = arguments.length;
switch (G__33470) {
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
var c__32878__auto___35363 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32879__auto__ = (function (){var switch__32679__auto__ = (function (state_33509){
var state_val_33514 = (state_33509[(1)]);
if((state_val_33514 === (7))){
var inst_33505 = (state_33509[(2)]);
var state_33509__$1 = state_33509;
var statearr_33519_35364 = state_33509__$1;
(statearr_33519_35364[(2)] = inst_33505);

(statearr_33519_35364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (1))){
var state_33509__$1 = state_33509;
var statearr_33520_35365 = state_33509__$1;
(statearr_33520_35365[(2)] = null);

(statearr_33520_35365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (4))){
var inst_33481 = (state_33509[(7)]);
var inst_33481__$1 = (state_33509[(2)]);
var inst_33483 = (inst_33481__$1 == null);
var state_33509__$1 = (function (){var statearr_33521 = state_33509;
(statearr_33521[(7)] = inst_33481__$1);

return statearr_33521;
})();
if(cljs.core.truth_(inst_33483)){
var statearr_33522_35366 = state_33509__$1;
(statearr_33522_35366[(1)] = (5));

} else {
var statearr_33523_35367 = state_33509__$1;
(statearr_33523_35367[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (13))){
var state_33509__$1 = state_33509;
var statearr_33525_35370 = state_33509__$1;
(statearr_33525_35370[(2)] = null);

(statearr_33525_35370[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (6))){
var inst_33481 = (state_33509[(7)]);
var inst_33488 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33481) : p.call(null,inst_33481));
var state_33509__$1 = state_33509;
if(cljs.core.truth_(inst_33488)){
var statearr_33526_35371 = state_33509__$1;
(statearr_33526_35371[(1)] = (9));

} else {
var statearr_33527_35372 = state_33509__$1;
(statearr_33527_35372[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (3))){
var inst_33507 = (state_33509[(2)]);
var state_33509__$1 = state_33509;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33509__$1,inst_33507);
} else {
if((state_val_33514 === (12))){
var state_33509__$1 = state_33509;
var statearr_33528_35377 = state_33509__$1;
(statearr_33528_35377[(2)] = null);

(statearr_33528_35377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (2))){
var state_33509__$1 = state_33509;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33509__$1,(4),ch);
} else {
if((state_val_33514 === (11))){
var inst_33481 = (state_33509[(7)]);
var inst_33496 = (state_33509[(2)]);
var state_33509__$1 = state_33509;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33509__$1,(8),inst_33496,inst_33481);
} else {
if((state_val_33514 === (9))){
var state_33509__$1 = state_33509;
var statearr_33529_35378 = state_33509__$1;
(statearr_33529_35378[(2)] = tc);

(statearr_33529_35378[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (5))){
var inst_33485 = cljs.core.async.close_BANG_(tc);
var inst_33486 = cljs.core.async.close_BANG_(fc);
var state_33509__$1 = (function (){var statearr_33530 = state_33509;
(statearr_33530[(8)] = inst_33485);

return statearr_33530;
})();
var statearr_33532_35382 = state_33509__$1;
(statearr_33532_35382[(2)] = inst_33486);

(statearr_33532_35382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (14))){
var inst_33503 = (state_33509[(2)]);
var state_33509__$1 = state_33509;
var statearr_33533_35383 = state_33509__$1;
(statearr_33533_35383[(2)] = inst_33503);

(statearr_33533_35383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (10))){
var state_33509__$1 = state_33509;
var statearr_33534_35385 = state_33509__$1;
(statearr_33534_35385[(2)] = fc);

(statearr_33534_35385[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33514 === (8))){
var inst_33498 = (state_33509[(2)]);
var state_33509__$1 = state_33509;
if(cljs.core.truth_(inst_33498)){
var statearr_33535_35386 = state_33509__$1;
(statearr_33535_35386[(1)] = (12));

} else {
var statearr_33536_35387 = state_33509__$1;
(statearr_33536_35387[(1)] = (13));

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
var cljs$core$async$state_machine__32680__auto__ = null;
var cljs$core$async$state_machine__32680__auto____0 = (function (){
var statearr_33537 = [null,null,null,null,null,null,null,null,null];
(statearr_33537[(0)] = cljs$core$async$state_machine__32680__auto__);

(statearr_33537[(1)] = (1));

return statearr_33537;
});
var cljs$core$async$state_machine__32680__auto____1 = (function (state_33509){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_33509);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e33539){var ex__32683__auto__ = e33539;
var statearr_33540_35389 = state_33509;
(statearr_33540_35389[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_33509[(4)]))){
var statearr_33541_35390 = state_33509;
(statearr_33541_35390[(1)] = cljs.core.first((state_33509[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35394 = state_33509;
state_33509 = G__35394;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
cljs$core$async$state_machine__32680__auto__ = function(state_33509){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32680__auto____1.call(this,state_33509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32680__auto____0;
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32680__auto____1;
return cljs$core$async$state_machine__32680__auto__;
})()
})();
var state__32880__auto__ = (function (){var statearr_33542 = f__32879__auto__();
(statearr_33542[(6)] = c__32878__auto___35363);

return statearr_33542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32880__auto__);
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
var c__32878__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32879__auto__ = (function (){var switch__32679__auto__ = (function (state_33565){
var state_val_33566 = (state_33565[(1)]);
if((state_val_33566 === (7))){
var inst_33561 = (state_33565[(2)]);
var state_33565__$1 = state_33565;
var statearr_33567_35395 = state_33565__$1;
(statearr_33567_35395[(2)] = inst_33561);

(statearr_33567_35395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33566 === (1))){
var inst_33544 = init;
var inst_33545 = inst_33544;
var state_33565__$1 = (function (){var statearr_33568 = state_33565;
(statearr_33568[(7)] = inst_33545);

return statearr_33568;
})();
var statearr_33569_35399 = state_33565__$1;
(statearr_33569_35399[(2)] = null);

(statearr_33569_35399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33566 === (4))){
var inst_33548 = (state_33565[(8)]);
var inst_33548__$1 = (state_33565[(2)]);
var inst_33549 = (inst_33548__$1 == null);
var state_33565__$1 = (function (){var statearr_33571 = state_33565;
(statearr_33571[(8)] = inst_33548__$1);

return statearr_33571;
})();
if(cljs.core.truth_(inst_33549)){
var statearr_33572_35400 = state_33565__$1;
(statearr_33572_35400[(1)] = (5));

} else {
var statearr_33573_35401 = state_33565__$1;
(statearr_33573_35401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33566 === (6))){
var inst_33552 = (state_33565[(9)]);
var inst_33545 = (state_33565[(7)]);
var inst_33548 = (state_33565[(8)]);
var inst_33552__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33545,inst_33548) : f.call(null,inst_33545,inst_33548));
var inst_33553 = cljs.core.reduced_QMARK_(inst_33552__$1);
var state_33565__$1 = (function (){var statearr_33574 = state_33565;
(statearr_33574[(9)] = inst_33552__$1);

return statearr_33574;
})();
if(inst_33553){
var statearr_33575_35402 = state_33565__$1;
(statearr_33575_35402[(1)] = (8));

} else {
var statearr_33576_35406 = state_33565__$1;
(statearr_33576_35406[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33566 === (3))){
var inst_33563 = (state_33565[(2)]);
var state_33565__$1 = state_33565;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33565__$1,inst_33563);
} else {
if((state_val_33566 === (2))){
var state_33565__$1 = state_33565;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33565__$1,(4),ch);
} else {
if((state_val_33566 === (9))){
var inst_33552 = (state_33565[(9)]);
var inst_33545 = inst_33552;
var state_33565__$1 = (function (){var statearr_33577 = state_33565;
(statearr_33577[(7)] = inst_33545);

return statearr_33577;
})();
var statearr_33578_35414 = state_33565__$1;
(statearr_33578_35414[(2)] = null);

(statearr_33578_35414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33566 === (5))){
var inst_33545 = (state_33565[(7)]);
var state_33565__$1 = state_33565;
var statearr_33579_35416 = state_33565__$1;
(statearr_33579_35416[(2)] = inst_33545);

(statearr_33579_35416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33566 === (10))){
var inst_33559 = (state_33565[(2)]);
var state_33565__$1 = state_33565;
var statearr_33581_35417 = state_33565__$1;
(statearr_33581_35417[(2)] = inst_33559);

(statearr_33581_35417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33566 === (8))){
var inst_33552 = (state_33565[(9)]);
var inst_33555 = cljs.core.deref(inst_33552);
var state_33565__$1 = state_33565;
var statearr_33582_35418 = state_33565__$1;
(statearr_33582_35418[(2)] = inst_33555);

(statearr_33582_35418[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__32680__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32680__auto____0 = (function (){
var statearr_33583 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33583[(0)] = cljs$core$async$reduce_$_state_machine__32680__auto__);

(statearr_33583[(1)] = (1));

return statearr_33583;
});
var cljs$core$async$reduce_$_state_machine__32680__auto____1 = (function (state_33565){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_33565);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e33584){var ex__32683__auto__ = e33584;
var statearr_33585_35435 = state_33565;
(statearr_33585_35435[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_33565[(4)]))){
var statearr_33586_35436 = state_33565;
(statearr_33586_35436[(1)] = cljs.core.first((state_33565[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35437 = state_33565;
state_33565 = G__35437;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32680__auto__ = function(state_33565){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32680__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32680__auto____1.call(this,state_33565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32680__auto____0;
cljs$core$async$reduce_$_state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32680__auto____1;
return cljs$core$async$reduce_$_state_machine__32680__auto__;
})()
})();
var state__32880__auto__ = (function (){var statearr_33587 = f__32879__auto__();
(statearr_33587[(6)] = c__32878__auto__);

return statearr_33587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32880__auto__);
}));

return c__32878__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32878__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32879__auto__ = (function (){var switch__32679__auto__ = (function (state_33594){
var state_val_33595 = (state_33594[(1)]);
if((state_val_33595 === (1))){
var inst_33589 = cljs.core.async.reduce(f__$1,init,ch);
var state_33594__$1 = state_33594;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33594__$1,(2),inst_33589);
} else {
if((state_val_33595 === (2))){
var inst_33591 = (state_33594[(2)]);
var inst_33592 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33591) : f__$1.call(null,inst_33591));
var state_33594__$1 = state_33594;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33594__$1,inst_33592);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32680__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32680__auto____0 = (function (){
var statearr_33596 = [null,null,null,null,null,null,null];
(statearr_33596[(0)] = cljs$core$async$transduce_$_state_machine__32680__auto__);

(statearr_33596[(1)] = (1));

return statearr_33596;
});
var cljs$core$async$transduce_$_state_machine__32680__auto____1 = (function (state_33594){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_33594);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e33597){var ex__32683__auto__ = e33597;
var statearr_33598_35442 = state_33594;
(statearr_33598_35442[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_33594[(4)]))){
var statearr_33599_35446 = state_33594;
(statearr_33599_35446[(1)] = cljs.core.first((state_33594[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35447 = state_33594;
state_33594 = G__35447;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32680__auto__ = function(state_33594){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32680__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32680__auto____1.call(this,state_33594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32680__auto____0;
cljs$core$async$transduce_$_state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32680__auto____1;
return cljs$core$async$transduce_$_state_machine__32680__auto__;
})()
})();
var state__32880__auto__ = (function (){var statearr_33601 = f__32879__auto__();
(statearr_33601[(6)] = c__32878__auto__);

return statearr_33601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32880__auto__);
}));

return c__32878__auto__;
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
var G__33603 = arguments.length;
switch (G__33603) {
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
var c__32878__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32879__auto__ = (function (){var switch__32679__auto__ = (function (state_33629){
var state_val_33630 = (state_33629[(1)]);
if((state_val_33630 === (7))){
var inst_33610 = (state_33629[(2)]);
var state_33629__$1 = state_33629;
var statearr_33631_35456 = state_33629__$1;
(statearr_33631_35456[(2)] = inst_33610);

(statearr_33631_35456[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33630 === (1))){
var inst_33604 = cljs.core.seq(coll);
var inst_33605 = inst_33604;
var state_33629__$1 = (function (){var statearr_33632 = state_33629;
(statearr_33632[(7)] = inst_33605);

return statearr_33632;
})();
var statearr_33633_35461 = state_33629__$1;
(statearr_33633_35461[(2)] = null);

(statearr_33633_35461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33630 === (4))){
var inst_33605 = (state_33629[(7)]);
var inst_33608 = cljs.core.first(inst_33605);
var state_33629__$1 = state_33629;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33629__$1,(7),ch,inst_33608);
} else {
if((state_val_33630 === (13))){
var inst_33623 = (state_33629[(2)]);
var state_33629__$1 = state_33629;
var statearr_33634_35462 = state_33629__$1;
(statearr_33634_35462[(2)] = inst_33623);

(statearr_33634_35462[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33630 === (6))){
var inst_33614 = (state_33629[(2)]);
var state_33629__$1 = state_33629;
if(cljs.core.truth_(inst_33614)){
var statearr_33636_35466 = state_33629__$1;
(statearr_33636_35466[(1)] = (8));

} else {
var statearr_33637_35467 = state_33629__$1;
(statearr_33637_35467[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33630 === (3))){
var inst_33627 = (state_33629[(2)]);
var state_33629__$1 = state_33629;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33629__$1,inst_33627);
} else {
if((state_val_33630 === (12))){
var state_33629__$1 = state_33629;
var statearr_33638_35468 = state_33629__$1;
(statearr_33638_35468[(2)] = null);

(statearr_33638_35468[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33630 === (2))){
var inst_33605 = (state_33629[(7)]);
var state_33629__$1 = state_33629;
if(cljs.core.truth_(inst_33605)){
var statearr_33639_35471 = state_33629__$1;
(statearr_33639_35471[(1)] = (4));

} else {
var statearr_33640_35472 = state_33629__$1;
(statearr_33640_35472[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33630 === (11))){
var inst_33620 = cljs.core.async.close_BANG_(ch);
var state_33629__$1 = state_33629;
var statearr_33641_35476 = state_33629__$1;
(statearr_33641_35476[(2)] = inst_33620);

(statearr_33641_35476[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33630 === (9))){
var state_33629__$1 = state_33629;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33642_35477 = state_33629__$1;
(statearr_33642_35477[(1)] = (11));

} else {
var statearr_33643_35478 = state_33629__$1;
(statearr_33643_35478[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33630 === (5))){
var inst_33605 = (state_33629[(7)]);
var state_33629__$1 = state_33629;
var statearr_33644_35481 = state_33629__$1;
(statearr_33644_35481[(2)] = inst_33605);

(statearr_33644_35481[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33630 === (10))){
var inst_33625 = (state_33629[(2)]);
var state_33629__$1 = state_33629;
var statearr_33646_35483 = state_33629__$1;
(statearr_33646_35483[(2)] = inst_33625);

(statearr_33646_35483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33630 === (8))){
var inst_33605 = (state_33629[(7)]);
var inst_33616 = cljs.core.next(inst_33605);
var inst_33605__$1 = inst_33616;
var state_33629__$1 = (function (){var statearr_33647 = state_33629;
(statearr_33647[(7)] = inst_33605__$1);

return statearr_33647;
})();
var statearr_33648_35484 = state_33629__$1;
(statearr_33648_35484[(2)] = null);

(statearr_33648_35484[(1)] = (2));


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
var cljs$core$async$state_machine__32680__auto__ = null;
var cljs$core$async$state_machine__32680__auto____0 = (function (){
var statearr_33649 = [null,null,null,null,null,null,null,null];
(statearr_33649[(0)] = cljs$core$async$state_machine__32680__auto__);

(statearr_33649[(1)] = (1));

return statearr_33649;
});
var cljs$core$async$state_machine__32680__auto____1 = (function (state_33629){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_33629);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e33650){var ex__32683__auto__ = e33650;
var statearr_33651_35485 = state_33629;
(statearr_33651_35485[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_33629[(4)]))){
var statearr_33652_35486 = state_33629;
(statearr_33652_35486[(1)] = cljs.core.first((state_33629[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35487 = state_33629;
state_33629 = G__35487;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
cljs$core$async$state_machine__32680__auto__ = function(state_33629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32680__auto____1.call(this,state_33629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32680__auto____0;
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32680__auto____1;
return cljs$core$async$state_machine__32680__auto__;
})()
})();
var state__32880__auto__ = (function (){var statearr_33653 = f__32879__auto__();
(statearr_33653[(6)] = c__32878__auto__);

return statearr_33653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32880__auto__);
}));

return c__32878__auto__;
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
var G__33656 = arguments.length;
switch (G__33656) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_35490 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_35490(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35495 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_35495(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35496 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_35496(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35497 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_35497(m);
}
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
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33661 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33661 = (function (ch,cs,meta33662){
this.ch = ch;
this.cs = cs;
this.meta33662 = meta33662;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33663,meta33662__$1){
var self__ = this;
var _33663__$1 = this;
return (new cljs.core.async.t_cljs$core$async33661(self__.ch,self__.cs,meta33662__$1));
}));

(cljs.core.async.t_cljs$core$async33661.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33663){
var self__ = this;
var _33663__$1 = this;
return self__.meta33662;
}));

(cljs.core.async.t_cljs$core$async33661.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33661.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33661.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33661.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33661.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33661.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33661.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33662","meta33662",1621438617,null)], null);
}));

(cljs.core.async.t_cljs$core$async33661.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33661.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33661");

(cljs.core.async.t_cljs$core$async33661.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33661");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33661.
 */
cljs.core.async.__GT_t_cljs$core$async33661 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33661(ch__$1,cs__$1,meta33662){
return (new cljs.core.async.t_cljs$core$async33661(ch__$1,cs__$1,meta33662));
});

}

return (new cljs.core.async.t_cljs$core$async33661(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32878__auto___35506 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32879__auto__ = (function (){var switch__32679__auto__ = (function (state_33800){
var state_val_33801 = (state_33800[(1)]);
if((state_val_33801 === (7))){
var inst_33795 = (state_33800[(2)]);
var state_33800__$1 = state_33800;
var statearr_33802_35507 = state_33800__$1;
(statearr_33802_35507[(2)] = inst_33795);

(statearr_33802_35507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33801 === (20))){
var inst_33699 = (state_33800[(7)]);
var inst_33712 = cljs.core.first(inst_33699);
var inst_33713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33712,(0),null);
var inst_33714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33712,(1),null);
var state_33800__$1 = (function (){var statearr_33803 = state_33800;
(statearr_33803[(8)] = inst_33713);

return statearr_33803;
})();
if(cljs.core.truth_(inst_33714)){
var statearr_33804_35510 = state_33800__$1;
(statearr_33804_35510[(1)] = (22));

} else {
var statearr_33805_35511 = state_33800__$1;
(statearr_33805_35511[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33801 === (27))){
var inst_33749 = (state_33800[(9)]);
var inst_33742 = (state_33800[(10)]);
var inst_33668 = (state_33800[(11)]);
var inst_33744 = (state_33800[(12)]);
var inst_33749__$1 = cljs.core._nth(inst_33742,inst_33744);
var inst_33750 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33749__$1,inst_33668,done);
var state_33800__$1 = (function (){var statearr_33807 = state_33800;
(statearr_33807[(9)] = inst_33749__$1);

return statearr_33807;
})();
if(cljs.core.truth_(inst_33750)){
var statearr_33808_35516 = state_33800__$1;
(statearr_33808_35516[(1)] = (30));

} else {
var statearr_33809_35517 = state_33800__$1;
(statearr_33809_35517[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33801 === (1))){
var state_33800__$1 = state_33800;
var statearr_33810_35518 = state_33800__$1;
(statearr_33810_35518[(2)] = null);

(statearr_33810_35518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33801 === (24))){
var inst_33699 = (state_33800[(7)]);
var inst_33719 = (state_33800[(2)]);
var inst_33720 = cljs.core.next(inst_33699);
var inst_33677 = inst_33720;
var inst_33678 = null;
var inst_33679 = (0);
var inst_33680 = (0);
var state_33800__$1 = (function (){var statearr_33811 = state_33800;
(statearr_33811[(13)] = inst_33679);

(statearr_33811[(14)] = inst_33719);

(statearr_33811[(15)] = inst_33677);

(statearr_33811[(16)] = inst_33678);

(statearr_33811[(17)] = inst_33680);

return statearr_33811;
})();
var statearr_33812_35520 = state_33800__$1;
(statearr_33812_35520[(2)] = null);

(statearr_33812_35520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33801 === (39))){
var state_33800__$1 = state_33800;
var statearr_33816_35521 = state_33800__$1;
(statearr_33816_35521[(2)] = null);

(statearr_33816_35521[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33801 === (4))){
var inst_33668 = (state_33800[(11)]);
var inst_33668__$1 = (state_33800[(2)]);
var inst_33669 = (inst_33668__$1 == null);
var state_33800__$1 = (function (){var statearr_33817 = state_33800;
(statearr_33817[(11)] = inst_33668__$1);

return statearr_33817;
})();
if(cljs.core.truth_(inst_33669)){
var statearr_33819_35522 = state_33800__$1;
(statearr_33819_35522[(1)] = (5));

} else {
var statearr_33820_35523 = state_33800__$1;
(statearr_33820_35523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33801 === (15))){
var inst_33679 = (state_33800[(13)]);
var inst_33677 = (state_33800[(15)]);
var inst_33678 = (state_33800[(16)]);
var inst_33680 = (state_33800[(17)]);
var inst_33695 = (state_33800[(2)]);
var inst_33696 = (inst_33680 + (1));
var tmp33813 = inst_33679;
var tmp33814 = inst_33677;
var tmp33815 = inst_33678;
var inst_33677__$1 = tmp33814;
var inst_33678__$1 = tmp33815;
var inst_33679__$1 = tmp33813;
var inst_33680__$1 = inst_33696;
var state_33800__$1 = (function (){var statearr_33821 = state_33800;
(statearr_33821[(13)] = inst_33679__$1);

(statearr_33821[(15)] = inst_33677__$1);

(statearr_33821[(18)] = inst_33695);

(statearr_33821[(16)] = inst_33678__$1);

(statearr_33821[(17)] = inst_33680__$1);

return statearr_33821;
})();
var statearr_33822_35525 = state_33800__$1;
(statearr_33822_35525[(2)] = null);

(statearr_33822_35525[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33801 === (21))){
var inst_33723 = (state_33800[(2)]);
var state_33800__$1 = state_33800;
var statearr_33826_35529 = state_33800__$1;
(statearr_33826_35529[(2)] = inst_33723);

(statearr_33826_35529[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33801 === (31))){
var inst_33749 = (state_33800[(9)]);
var inst_33753 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33749);
var state_33800__$1 = state_33800;
var statearr_33827_35530 = state_33800__$1;
(statearr_33827_35530[(2)] = inst_33753);

(statearr_33827_35530[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33801 === (32))){
var inst_33743 = (state_33800[(19)]);
var inst_33742 = (state_33800[(10)]);
var inst_33741 = (state_33800[(20)]);
var inst_33744 = (state_33800[(12)]);
var inst_33755 = (state_33800[(2)]);
var inst_33756 = (inst_33744 + (1));
var tmp33823 = inst_33743;
var tmp33824 = inst_33742;
var tmp33825 = inst_33741;
var inst_33741__$1 = tmp33825;
var inst_33742__$1 = tmp33824;
var inst_33743__$1 = tmp33823;
var inst_33744__$1 = inst_33756;
var state_33800__$1 = (function (){var statearr_33828 = state_33800;
(statearr_33828[(19)] = inst_33743__$1);

(statearr_33828[(10)] = inst_33742__$1);

(statearr_33828[(20)] = inst_33741__$1);

(statearr_33828[(12)] = inst_33744__$1);

(statearr_33828[(21)] = inst_33755);

return statearr_33828;
})();
var statearr_33830_35531 = state_33800__$1;
(statearr_33830_35531[(2)] = null);

(statearr_33830_35531[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33801 === (40))){
var inst_33768 = (state_33800[(22)]);
var inst_33772 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33768);
var state_33800__$1 = state_33800;
var statearr_33831_35534 = state_33800__$1;
(statearr_33831_35534[(2)] = inst_33772);

(statearr_33831_35534[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33801 === (33))){
var inst_33759 = (state_33800[(23)]);
var inst_33761 = cljs.core.chunked_seq_QMARK_(inst_33759);
var state_33800__$1 = state_33800;
if(inst_33761){
var statearr_33832_35535 = state_33800__$1;
(statearr_33832_35535[(1)] = (36));

} else {
var statearr_33833_35536 = state_33800__$1;
(statearr_33833_35536[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33801 === (13))){
var inst_33689 = (state_33800[(24)]);
var inst_33692 = cljs.core.async.close_BANG_(inst_33689);
var state_33800__$1 = state_33800;
var statearr_33834_35537 = state_33800__$1;
(statearr_33834_35537[(2)] = inst_33692);

(statearr_33834_35537[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33801 === (22))){
var inst_33713 = (state_33800[(8)]);
var inst_33716 = cljs.core.async.close_BANG_(inst_33713);
var state_33800__$1 = state_33800;
var statearr_33835_35538 = state_33800__$1;
(statearr_33835_35538[(2)] = inst_33716);

(statearr_33835_35538[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33801 === (36))){
var inst_33759 = (state_33800[(23)]);
var inst_33763 = cljs.core.chunk_first(inst_33759);
var inst_33764 = cljs.core.chunk_rest(inst_33759);
var inst_33765 = cljs.core.count(inst_33763);
var inst_33741 = inst_33764;
var inst_33742 = inst_33763;
var inst_33743 = inst_33765;
var inst_33744 = (0);
var state_33800__$1 = (function (){var statearr_33837 = state_33800;
(statearr_33837[(19)] = inst_33743);

(statearr_33837[(10)] = inst_33742);

(statearr_33837[(20)] = inst_33741);

(statearr_33837[(12)] = inst_33744);

return statearr_33837;
})();
var statearr_33838_35539 = state_33800__$1;
(statearr_33838_35539[(2)] = null);

(statearr_33838_35539[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33801 === (41))){
var inst_33759 = (state_33800[(23)]);
var inst_33774 = (state_33800[(2)]);
var inst_33775 = cljs.core.next(inst_33759);
var inst_33741 = inst_33775;
var inst_33742 = null;
var inst_33743 = (0);
var inst_33744 = (0);
var state_33800__$1 = (function (){var statearr_33839 = state_33800;
(statearr_33839[(19)] = inst_33743);

(statearr_33839[(10)] = inst_33742);

(statearr_33839[(20)] = inst_33741);

(statearr_33839[(25)] = inst_33774);

(statearr_33839[(12)] = inst_33744);

return statearr_33839;
})();
var statearr_33840_35541 = state_33800__$1;
(statearr_33840_35541[(2)] = null);

(statearr_33840_35541[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33801 === (43))){
var state_33800__$1 = state_33800;
var statearr_33841_35542 = state_33800__$1;
(statearr_33841_35542[(2)] = null);

(statearr_33841_35542[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33801 === (29))){
var inst_33783 = (state_33800[(2)]);
var state_33800__$1 = state_33800;
var statearr_33842_35543 = state_33800__$1;
(statearr_33842_35543[(2)] = inst_33783);

(statearr_33842_35543[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33801 === (44))){
var inst_33792 = (state_33800[(2)]);
var state_33800__$1 = (function (){var statearr_33843 = state_33800;
(statearr_33843[(26)] = inst_33792);

return statearr_33843;
})();
var statearr_33844_35545 = state_33800__$1;
(statearr_33844_35545[(2)] = null);

(statearr_33844_35545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33801 === (6))){
var inst_33733 = (state_33800[(27)]);
var inst_33732 = cljs.core.deref(cs);
var inst_33733__$1 = cljs.core.keys(inst_33732);
var inst_33734 = cljs.core.count(inst_33733__$1);
var inst_33735 = cljs.core.reset_BANG_(dctr,inst_33734);
var inst_33740 = cljs.core.seq(inst_33733__$1);
var inst_33741 = inst_33740;
var inst_33742 = null;
var inst_33743 = (0);
var inst_33744 = (0);
var state_33800__$1 = (function (){var statearr_33846 = state_33800;
(statearr_33846[(27)] = inst_33733__$1);

(statearr_33846[(19)] = inst_33743);

(statearr_33846[(10)] = inst_33742);

(statearr_33846[(20)] = inst_33741);

(statearr_33846[(12)] = inst_33744);

(statearr_33846[(28)] = inst_33735);

return statearr_33846;
})();
var statearr_33847_35550 = state_33800__$1;
(statearr_33847_35550[(2)] = null);

(statearr_33847_35550[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33801 === (28))){
var inst_33741 = (state_33800[(20)]);
var inst_33759 = (state_33800[(23)]);
var inst_33759__$1 = cljs.core.seq(inst_33741);
var state_33800__$1 = (function (){var statearr_33848 = state_33800;
(statearr_33848[(23)] = inst_33759__$1);

return statearr_33848;
})();
if(inst_33759__$1){
var statearr_33849_35551 = state_33800__$1;
(statearr_33849_35551[(1)] = (33));

} else {
var statearr_33850_35552 = state_33800__$1;
(statearr_33850_35552[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33801 === (25))){
var inst_33743 = (state_33800[(19)]);
var inst_33744 = (state_33800[(12)]);
var inst_33746 = (inst_33744 < inst_33743);
var inst_33747 = inst_33746;
var state_33800__$1 = state_33800;
if(cljs.core.truth_(inst_33747)){
var statearr_33851_35555 = state_33800__$1;
(statearr_33851_35555[(1)] = (27));

} else {
var statearr_33852_35556 = state_33800__$1;
(statearr_33852_35556[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33801 === (34))){
var state_33800__$1 = state_33800;
var statearr_33853_35557 = state_33800__$1;
(statearr_33853_35557[(2)] = null);

(statearr_33853_35557[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33801 === (17))){
var state_33800__$1 = state_33800;
var statearr_33854_35558 = state_33800__$1;
(statearr_33854_35558[(2)] = null);

(statearr_33854_35558[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33801 === (3))){
var inst_33797 = (state_33800[(2)]);
var state_33800__$1 = state_33800;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33800__$1,inst_33797);
} else {
if((state_val_33801 === (12))){
var inst_33728 = (state_33800[(2)]);
var state_33800__$1 = state_33800;
var statearr_33856_35561 = state_33800__$1;
(statearr_33856_35561[(2)] = inst_33728);

(statearr_33856_35561[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33801 === (2))){
var state_33800__$1 = state_33800;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33800__$1,(4),ch);
} else {
if((state_val_33801 === (23))){
var state_33800__$1 = state_33800;
var statearr_33857_35562 = state_33800__$1;
(statearr_33857_35562[(2)] = null);

(statearr_33857_35562[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33801 === (35))){
var inst_33781 = (state_33800[(2)]);
var state_33800__$1 = state_33800;
var statearr_33858_35563 = state_33800__$1;
(statearr_33858_35563[(2)] = inst_33781);

(statearr_33858_35563[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33801 === (19))){
var inst_33699 = (state_33800[(7)]);
var inst_33703 = cljs.core.chunk_first(inst_33699);
var inst_33704 = cljs.core.chunk_rest(inst_33699);
var inst_33706 = cljs.core.count(inst_33703);
var inst_33677 = inst_33704;
var inst_33678 = inst_33703;
var inst_33679 = inst_33706;
var inst_33680 = (0);
var state_33800__$1 = (function (){var statearr_33859 = state_33800;
(statearr_33859[(13)] = inst_33679);

(statearr_33859[(15)] = inst_33677);

(statearr_33859[(16)] = inst_33678);

(statearr_33859[(17)] = inst_33680);

return statearr_33859;
})();
var statearr_33860_35564 = state_33800__$1;
(statearr_33860_35564[(2)] = null);

(statearr_33860_35564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33801 === (11))){
var inst_33699 = (state_33800[(7)]);
var inst_33677 = (state_33800[(15)]);
var inst_33699__$1 = cljs.core.seq(inst_33677);
var state_33800__$1 = (function (){var statearr_33862 = state_33800;
(statearr_33862[(7)] = inst_33699__$1);

return statearr_33862;
})();
if(inst_33699__$1){
var statearr_33863_35568 = state_33800__$1;
(statearr_33863_35568[(1)] = (16));

} else {
var statearr_33864_35569 = state_33800__$1;
(statearr_33864_35569[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33801 === (9))){
var inst_33730 = (state_33800[(2)]);
var state_33800__$1 = state_33800;
var statearr_33865_35574 = state_33800__$1;
(statearr_33865_35574[(2)] = inst_33730);

(statearr_33865_35574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33801 === (5))){
var inst_33675 = cljs.core.deref(cs);
var inst_33676 = cljs.core.seq(inst_33675);
var inst_33677 = inst_33676;
var inst_33678 = null;
var inst_33679 = (0);
var inst_33680 = (0);
var state_33800__$1 = (function (){var statearr_33866 = state_33800;
(statearr_33866[(13)] = inst_33679);

(statearr_33866[(15)] = inst_33677);

(statearr_33866[(16)] = inst_33678);

(statearr_33866[(17)] = inst_33680);

return statearr_33866;
})();
var statearr_33867_35575 = state_33800__$1;
(statearr_33867_35575[(2)] = null);

(statearr_33867_35575[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33801 === (14))){
var state_33800__$1 = state_33800;
var statearr_33868_35582 = state_33800__$1;
(statearr_33868_35582[(2)] = null);

(statearr_33868_35582[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33801 === (45))){
var inst_33789 = (state_33800[(2)]);
var state_33800__$1 = state_33800;
var statearr_33869_35583 = state_33800__$1;
(statearr_33869_35583[(2)] = inst_33789);

(statearr_33869_35583[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33801 === (26))){
var inst_33733 = (state_33800[(27)]);
var inst_33785 = (state_33800[(2)]);
var inst_33786 = cljs.core.seq(inst_33733);
var state_33800__$1 = (function (){var statearr_33871 = state_33800;
(statearr_33871[(29)] = inst_33785);

return statearr_33871;
})();
if(inst_33786){
var statearr_33872_35588 = state_33800__$1;
(statearr_33872_35588[(1)] = (42));

} else {
var statearr_33873_35589 = state_33800__$1;
(statearr_33873_35589[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33801 === (16))){
var inst_33699 = (state_33800[(7)]);
var inst_33701 = cljs.core.chunked_seq_QMARK_(inst_33699);
var state_33800__$1 = state_33800;
if(inst_33701){
var statearr_33874_35590 = state_33800__$1;
(statearr_33874_35590[(1)] = (19));

} else {
var statearr_33875_35591 = state_33800__$1;
(statearr_33875_35591[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33801 === (38))){
var inst_33778 = (state_33800[(2)]);
var state_33800__$1 = state_33800;
var statearr_33876_35592 = state_33800__$1;
(statearr_33876_35592[(2)] = inst_33778);

(statearr_33876_35592[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33801 === (30))){
var state_33800__$1 = state_33800;
var statearr_33877_35593 = state_33800__$1;
(statearr_33877_35593[(2)] = null);

(statearr_33877_35593[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33801 === (10))){
var inst_33678 = (state_33800[(16)]);
var inst_33680 = (state_33800[(17)]);
var inst_33688 = cljs.core._nth(inst_33678,inst_33680);
var inst_33689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33688,(0),null);
var inst_33690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33688,(1),null);
var state_33800__$1 = (function (){var statearr_33878 = state_33800;
(statearr_33878[(24)] = inst_33689);

return statearr_33878;
})();
if(cljs.core.truth_(inst_33690)){
var statearr_33880_35594 = state_33800__$1;
(statearr_33880_35594[(1)] = (13));

} else {
var statearr_33881_35595 = state_33800__$1;
(statearr_33881_35595[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33801 === (18))){
var inst_33726 = (state_33800[(2)]);
var state_33800__$1 = state_33800;
var statearr_33882_35596 = state_33800__$1;
(statearr_33882_35596[(2)] = inst_33726);

(statearr_33882_35596[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33801 === (42))){
var state_33800__$1 = state_33800;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33800__$1,(45),dchan);
} else {
if((state_val_33801 === (37))){
var inst_33668 = (state_33800[(11)]);
var inst_33759 = (state_33800[(23)]);
var inst_33768 = (state_33800[(22)]);
var inst_33768__$1 = cljs.core.first(inst_33759);
var inst_33769 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33768__$1,inst_33668,done);
var state_33800__$1 = (function (){var statearr_33883 = state_33800;
(statearr_33883[(22)] = inst_33768__$1);

return statearr_33883;
})();
if(cljs.core.truth_(inst_33769)){
var statearr_33884_35598 = state_33800__$1;
(statearr_33884_35598[(1)] = (39));

} else {
var statearr_33885_35599 = state_33800__$1;
(statearr_33885_35599[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33801 === (8))){
var inst_33679 = (state_33800[(13)]);
var inst_33680 = (state_33800[(17)]);
var inst_33682 = (inst_33680 < inst_33679);
var inst_33683 = inst_33682;
var state_33800__$1 = state_33800;
if(cljs.core.truth_(inst_33683)){
var statearr_33886_35600 = state_33800__$1;
(statearr_33886_35600[(1)] = (10));

} else {
var statearr_33887_35601 = state_33800__$1;
(statearr_33887_35601[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__32680__auto__ = null;
var cljs$core$async$mult_$_state_machine__32680__auto____0 = (function (){
var statearr_33889 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33889[(0)] = cljs$core$async$mult_$_state_machine__32680__auto__);

(statearr_33889[(1)] = (1));

return statearr_33889;
});
var cljs$core$async$mult_$_state_machine__32680__auto____1 = (function (state_33800){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_33800);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e33890){var ex__32683__auto__ = e33890;
var statearr_33891_35602 = state_33800;
(statearr_33891_35602[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_33800[(4)]))){
var statearr_33892_35609 = state_33800;
(statearr_33892_35609[(1)] = cljs.core.first((state_33800[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35610 = state_33800;
state_33800 = G__35610;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32680__auto__ = function(state_33800){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32680__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32680__auto____1.call(this,state_33800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32680__auto____0;
cljs$core$async$mult_$_state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32680__auto____1;
return cljs$core$async$mult_$_state_machine__32680__auto__;
})()
})();
var state__32880__auto__ = (function (){var statearr_33893 = f__32879__auto__();
(statearr_33893[(6)] = c__32878__auto___35506);

return statearr_33893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32880__auto__);
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
var G__33895 = arguments.length;
switch (G__33895) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_35621 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_35621(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35626 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_35626(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35627 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35627(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35628 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_35628(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35635 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35635(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___35636 = arguments.length;
var i__4865__auto___35637 = (0);
while(true){
if((i__4865__auto___35637 < len__4864__auto___35636)){
args__4870__auto__.push((arguments[i__4865__auto___35637]));

var G__35638 = (i__4865__auto___35637 + (1));
i__4865__auto___35637 = G__35638;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33908){
var map__33909 = p__33908;
var map__33909__$1 = cljs.core.__destructure_map(map__33909);
var opts = map__33909__$1;
var statearr_33910_35639 = state;
(statearr_33910_35639[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33911_35646 = state;
(statearr_33911_35646[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_33912_35647 = state;
(statearr_33912_35647[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33902){
var G__33903 = cljs.core.first(seq33902);
var seq33902__$1 = cljs.core.next(seq33902);
var G__33904 = cljs.core.first(seq33902__$1);
var seq33902__$2 = cljs.core.next(seq33902__$1);
var G__33905 = cljs.core.first(seq33902__$2);
var seq33902__$3 = cljs.core.next(seq33902__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33903,G__33904,G__33905,seq33902__$3);
}));

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
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33926 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33926 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33927){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33927 = meta33927;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33928,meta33927__$1){
var self__ = this;
var _33928__$1 = this;
return (new cljs.core.async.t_cljs$core$async33926(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33927__$1));
}));

(cljs.core.async.t_cljs$core$async33926.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33928){
var self__ = this;
var _33928__$1 = this;
return self__.meta33927;
}));

(cljs.core.async.t_cljs$core$async33926.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33926.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33926.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33926.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33926.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33926.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33926.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33926.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33926.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33927","meta33927",-354453741,null)], null);
}));

(cljs.core.async.t_cljs$core$async33926.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33926.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33926");

(cljs.core.async.t_cljs$core$async33926.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33926");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33926.
 */
cljs.core.async.__GT_t_cljs$core$async33926 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33926(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33927){
return (new cljs.core.async.t_cljs$core$async33926(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33927));
});

}

return (new cljs.core.async.t_cljs$core$async33926(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32878__auto___35662 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32879__auto__ = (function (){var switch__32679__auto__ = (function (state_34049){
var state_val_34050 = (state_34049[(1)]);
if((state_val_34050 === (7))){
var inst_34003 = (state_34049[(2)]);
var state_34049__$1 = state_34049;
if(cljs.core.truth_(inst_34003)){
var statearr_34055_35663 = state_34049__$1;
(statearr_34055_35663[(1)] = (8));

} else {
var statearr_34058_35664 = state_34049__$1;
(statearr_34058_35664[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (20))){
var inst_33994 = (state_34049[(7)]);
var state_34049__$1 = state_34049;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34049__$1,(23),out,inst_33994);
} else {
if((state_val_34050 === (1))){
var inst_33973 = calc_state();
var inst_33974 = cljs.core.__destructure_map(inst_33973);
var inst_33975 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33974,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33976 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33974,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33974,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33980 = inst_33973;
var state_34049__$1 = (function (){var statearr_34061 = state_34049;
(statearr_34061[(8)] = inst_33975);

(statearr_34061[(9)] = inst_33980);

(statearr_34061[(10)] = inst_33976);

(statearr_34061[(11)] = inst_33977);

return statearr_34061;
})();
var statearr_34065_35670 = state_34049__$1;
(statearr_34065_35670[(2)] = null);

(statearr_34065_35670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (24))){
var inst_33984 = (state_34049[(12)]);
var inst_33980 = inst_33984;
var state_34049__$1 = (function (){var statearr_34067 = state_34049;
(statearr_34067[(9)] = inst_33980);

return statearr_34067;
})();
var statearr_34068_35671 = state_34049__$1;
(statearr_34068_35671[(2)] = null);

(statearr_34068_35671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (4))){
var inst_33996 = (state_34049[(13)]);
var inst_33994 = (state_34049[(7)]);
var inst_33993 = (state_34049[(2)]);
var inst_33994__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33993,(0),null);
var inst_33995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33993,(1),null);
var inst_33996__$1 = (inst_33994__$1 == null);
var state_34049__$1 = (function (){var statearr_34073 = state_34049;
(statearr_34073[(13)] = inst_33996__$1);

(statearr_34073[(14)] = inst_33995);

(statearr_34073[(7)] = inst_33994__$1);

return statearr_34073;
})();
if(cljs.core.truth_(inst_33996__$1)){
var statearr_34074_35677 = state_34049__$1;
(statearr_34074_35677[(1)] = (5));

} else {
var statearr_34077_35678 = state_34049__$1;
(statearr_34077_35678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (15))){
var inst_33985 = (state_34049[(15)]);
var inst_34019 = (state_34049[(16)]);
var inst_34019__$1 = cljs.core.empty_QMARK_(inst_33985);
var state_34049__$1 = (function (){var statearr_34080 = state_34049;
(statearr_34080[(16)] = inst_34019__$1);

return statearr_34080;
})();
if(inst_34019__$1){
var statearr_34082_35679 = state_34049__$1;
(statearr_34082_35679[(1)] = (17));

} else {
var statearr_34085_35680 = state_34049__$1;
(statearr_34085_35680[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (21))){
var inst_33984 = (state_34049[(12)]);
var inst_33980 = inst_33984;
var state_34049__$1 = (function (){var statearr_34087 = state_34049;
(statearr_34087[(9)] = inst_33980);

return statearr_34087;
})();
var statearr_34089_35681 = state_34049__$1;
(statearr_34089_35681[(2)] = null);

(statearr_34089_35681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (13))){
var inst_34011 = (state_34049[(2)]);
var inst_34012 = calc_state();
var inst_33980 = inst_34012;
var state_34049__$1 = (function (){var statearr_34093 = state_34049;
(statearr_34093[(9)] = inst_33980);

(statearr_34093[(17)] = inst_34011);

return statearr_34093;
})();
var statearr_34094_35682 = state_34049__$1;
(statearr_34094_35682[(2)] = null);

(statearr_34094_35682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (22))){
var inst_34042 = (state_34049[(2)]);
var state_34049__$1 = state_34049;
var statearr_34097_35683 = state_34049__$1;
(statearr_34097_35683[(2)] = inst_34042);

(statearr_34097_35683[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (6))){
var inst_33995 = (state_34049[(14)]);
var inst_34001 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33995,change);
var state_34049__$1 = state_34049;
var statearr_34101_35684 = state_34049__$1;
(statearr_34101_35684[(2)] = inst_34001);

(statearr_34101_35684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (25))){
var state_34049__$1 = state_34049;
var statearr_34104_35685 = state_34049__$1;
(statearr_34104_35685[(2)] = null);

(statearr_34104_35685[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (17))){
var inst_33986 = (state_34049[(18)]);
var inst_33995 = (state_34049[(14)]);
var inst_34021 = (inst_33986.cljs$core$IFn$_invoke$arity$1 ? inst_33986.cljs$core$IFn$_invoke$arity$1(inst_33995) : inst_33986.call(null,inst_33995));
var inst_34022 = cljs.core.not(inst_34021);
var state_34049__$1 = state_34049;
var statearr_34108_35686 = state_34049__$1;
(statearr_34108_35686[(2)] = inst_34022);

(statearr_34108_35686[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (3))){
var inst_34046 = (state_34049[(2)]);
var state_34049__$1 = state_34049;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34049__$1,inst_34046);
} else {
if((state_val_34050 === (12))){
var state_34049__$1 = state_34049;
var statearr_34113_35687 = state_34049__$1;
(statearr_34113_35687[(2)] = null);

(statearr_34113_35687[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (2))){
var inst_33984 = (state_34049[(12)]);
var inst_33980 = (state_34049[(9)]);
var inst_33984__$1 = cljs.core.__destructure_map(inst_33980);
var inst_33985 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33984__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33986 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33984__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33987 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33984__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34049__$1 = (function (){var statearr_34115 = state_34049;
(statearr_34115[(15)] = inst_33985);

(statearr_34115[(12)] = inst_33984__$1);

(statearr_34115[(18)] = inst_33986);

return statearr_34115;
})();
return cljs.core.async.ioc_alts_BANG_(state_34049__$1,(4),inst_33987);
} else {
if((state_val_34050 === (23))){
var inst_34032 = (state_34049[(2)]);
var state_34049__$1 = state_34049;
if(cljs.core.truth_(inst_34032)){
var statearr_34120_35689 = state_34049__$1;
(statearr_34120_35689[(1)] = (24));

} else {
var statearr_34121_35690 = state_34049__$1;
(statearr_34121_35690[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (19))){
var inst_34025 = (state_34049[(2)]);
var state_34049__$1 = state_34049;
var statearr_34125_35691 = state_34049__$1;
(statearr_34125_35691[(2)] = inst_34025);

(statearr_34125_35691[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (11))){
var inst_33995 = (state_34049[(14)]);
var inst_34008 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33995);
var state_34049__$1 = state_34049;
var statearr_34130_35692 = state_34049__$1;
(statearr_34130_35692[(2)] = inst_34008);

(statearr_34130_35692[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (9))){
var inst_33985 = (state_34049[(15)]);
var inst_34016 = (state_34049[(19)]);
var inst_33995 = (state_34049[(14)]);
var inst_34016__$1 = (inst_33985.cljs$core$IFn$_invoke$arity$1 ? inst_33985.cljs$core$IFn$_invoke$arity$1(inst_33995) : inst_33985.call(null,inst_33995));
var state_34049__$1 = (function (){var statearr_34135 = state_34049;
(statearr_34135[(19)] = inst_34016__$1);

return statearr_34135;
})();
if(cljs.core.truth_(inst_34016__$1)){
var statearr_34136_35694 = state_34049__$1;
(statearr_34136_35694[(1)] = (14));

} else {
var statearr_34138_35695 = state_34049__$1;
(statearr_34138_35695[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (5))){
var inst_33996 = (state_34049[(13)]);
var state_34049__$1 = state_34049;
var statearr_34140_35696 = state_34049__$1;
(statearr_34140_35696[(2)] = inst_33996);

(statearr_34140_35696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (14))){
var inst_34016 = (state_34049[(19)]);
var state_34049__$1 = state_34049;
var statearr_34144_35697 = state_34049__$1;
(statearr_34144_35697[(2)] = inst_34016);

(statearr_34144_35697[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (26))){
var inst_34038 = (state_34049[(2)]);
var state_34049__$1 = state_34049;
var statearr_34149_35698 = state_34049__$1;
(statearr_34149_35698[(2)] = inst_34038);

(statearr_34149_35698[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (16))){
var inst_34027 = (state_34049[(2)]);
var state_34049__$1 = state_34049;
if(cljs.core.truth_(inst_34027)){
var statearr_34153_35699 = state_34049__$1;
(statearr_34153_35699[(1)] = (20));

} else {
var statearr_34154_35700 = state_34049__$1;
(statearr_34154_35700[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (10))){
var inst_34044 = (state_34049[(2)]);
var state_34049__$1 = state_34049;
var statearr_34156_35706 = state_34049__$1;
(statearr_34156_35706[(2)] = inst_34044);

(statearr_34156_35706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (18))){
var inst_34019 = (state_34049[(16)]);
var state_34049__$1 = state_34049;
var statearr_34160_35707 = state_34049__$1;
(statearr_34160_35707[(2)] = inst_34019);

(statearr_34160_35707[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34050 === (8))){
var inst_33994 = (state_34049[(7)]);
var inst_34006 = (inst_33994 == null);
var state_34049__$1 = state_34049;
if(cljs.core.truth_(inst_34006)){
var statearr_34162_35708 = state_34049__$1;
(statearr_34162_35708[(1)] = (11));

} else {
var statearr_34163_35709 = state_34049__$1;
(statearr_34163_35709[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__32680__auto__ = null;
var cljs$core$async$mix_$_state_machine__32680__auto____0 = (function (){
var statearr_34170 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34170[(0)] = cljs$core$async$mix_$_state_machine__32680__auto__);

(statearr_34170[(1)] = (1));

return statearr_34170;
});
var cljs$core$async$mix_$_state_machine__32680__auto____1 = (function (state_34049){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_34049);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e34174){var ex__32683__auto__ = e34174;
var statearr_34175_35710 = state_34049;
(statearr_34175_35710[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_34049[(4)]))){
var statearr_34177_35711 = state_34049;
(statearr_34177_35711[(1)] = cljs.core.first((state_34049[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35712 = state_34049;
state_34049 = G__35712;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32680__auto__ = function(state_34049){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32680__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32680__auto____1.call(this,state_34049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32680__auto____0;
cljs$core$async$mix_$_state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32680__auto____1;
return cljs$core$async$mix_$_state_machine__32680__auto__;
})()
})();
var state__32880__auto__ = (function (){var statearr_34185 = f__32879__auto__();
(statearr_34185[(6)] = c__32878__auto___35662);

return statearr_34185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32880__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_35718 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35718(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35719 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35719(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35724 = (function() {
var G__35725 = null;
var G__35725__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35725__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35725 = function(p,v){
switch(arguments.length){
case 1:
return G__35725__1.call(this,p);
case 2:
return G__35725__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35725.cljs$core$IFn$_invoke$arity$1 = G__35725__1;
G__35725.cljs$core$IFn$_invoke$arity$2 = G__35725__2;
return G__35725;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34216 = arguments.length;
switch (G__34216) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35724(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35724(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__34219 = arguments.length;
switch (G__34219) {
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
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__34217_SHARP_){
if(cljs.core.truth_((p1__34217_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34217_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34217_SHARP_.call(null,topic)))){
return p1__34217_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34217_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34222 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34222 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34223){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34223 = meta34223;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34224,meta34223__$1){
var self__ = this;
var _34224__$1 = this;
return (new cljs.core.async.t_cljs$core$async34222(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34223__$1));
}));

(cljs.core.async.t_cljs$core$async34222.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34224){
var self__ = this;
var _34224__$1 = this;
return self__.meta34223;
}));

(cljs.core.async.t_cljs$core$async34222.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34222.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34222.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34222.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async34222.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async34222.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async34222.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async34222.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34223","meta34223",1091900119,null)], null);
}));

(cljs.core.async.t_cljs$core$async34222.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34222.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34222");

(cljs.core.async.t_cljs$core$async34222.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34222");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34222.
 */
cljs.core.async.__GT_t_cljs$core$async34222 = (function cljs$core$async$__GT_t_cljs$core$async34222(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34223){
return (new cljs.core.async.t_cljs$core$async34222(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34223));
});

}

return (new cljs.core.async.t_cljs$core$async34222(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32878__auto___35742 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32879__auto__ = (function (){var switch__32679__auto__ = (function (state_34320){
var state_val_34322 = (state_34320[(1)]);
if((state_val_34322 === (7))){
var inst_34313 = (state_34320[(2)]);
var state_34320__$1 = state_34320;
var statearr_34323_35743 = state_34320__$1;
(statearr_34323_35743[(2)] = inst_34313);

(statearr_34323_35743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (20))){
var state_34320__$1 = state_34320;
var statearr_34327_35747 = state_34320__$1;
(statearr_34327_35747[(2)] = null);

(statearr_34327_35747[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (1))){
var state_34320__$1 = state_34320;
var statearr_34329_35748 = state_34320__$1;
(statearr_34329_35748[(2)] = null);

(statearr_34329_35748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (24))){
var inst_34296 = (state_34320[(7)]);
var inst_34305 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34296);
var state_34320__$1 = state_34320;
var statearr_34330_35749 = state_34320__$1;
(statearr_34330_35749[(2)] = inst_34305);

(statearr_34330_35749[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (4))){
var inst_34240 = (state_34320[(8)]);
var inst_34240__$1 = (state_34320[(2)]);
var inst_34244 = (inst_34240__$1 == null);
var state_34320__$1 = (function (){var statearr_34332 = state_34320;
(statearr_34332[(8)] = inst_34240__$1);

return statearr_34332;
})();
if(cljs.core.truth_(inst_34244)){
var statearr_34333_35750 = state_34320__$1;
(statearr_34333_35750[(1)] = (5));

} else {
var statearr_34334_35751 = state_34320__$1;
(statearr_34334_35751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (15))){
var inst_34290 = (state_34320[(2)]);
var state_34320__$1 = state_34320;
var statearr_34335_35752 = state_34320__$1;
(statearr_34335_35752[(2)] = inst_34290);

(statearr_34335_35752[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (21))){
var inst_34310 = (state_34320[(2)]);
var state_34320__$1 = (function (){var statearr_34336 = state_34320;
(statearr_34336[(9)] = inst_34310);

return statearr_34336;
})();
var statearr_34337_35753 = state_34320__$1;
(statearr_34337_35753[(2)] = null);

(statearr_34337_35753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (13))){
var inst_34268 = (state_34320[(10)]);
var inst_34270 = cljs.core.chunked_seq_QMARK_(inst_34268);
var state_34320__$1 = state_34320;
if(inst_34270){
var statearr_34338_35754 = state_34320__$1;
(statearr_34338_35754[(1)] = (16));

} else {
var statearr_34339_35755 = state_34320__$1;
(statearr_34339_35755[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (22))){
var inst_34302 = (state_34320[(2)]);
var state_34320__$1 = state_34320;
if(cljs.core.truth_(inst_34302)){
var statearr_34344_35756 = state_34320__$1;
(statearr_34344_35756[(1)] = (23));

} else {
var statearr_34345_35757 = state_34320__$1;
(statearr_34345_35757[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (6))){
var inst_34240 = (state_34320[(8)]);
var inst_34298 = (state_34320[(11)]);
var inst_34296 = (state_34320[(7)]);
var inst_34296__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34240) : topic_fn.call(null,inst_34240));
var inst_34297 = cljs.core.deref(mults);
var inst_34298__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34297,inst_34296__$1);
var state_34320__$1 = (function (){var statearr_34350 = state_34320;
(statearr_34350[(11)] = inst_34298__$1);

(statearr_34350[(7)] = inst_34296__$1);

return statearr_34350;
})();
if(cljs.core.truth_(inst_34298__$1)){
var statearr_34351_35758 = state_34320__$1;
(statearr_34351_35758[(1)] = (19));

} else {
var statearr_34352_35759 = state_34320__$1;
(statearr_34352_35759[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (25))){
var inst_34307 = (state_34320[(2)]);
var state_34320__$1 = state_34320;
var statearr_34353_35760 = state_34320__$1;
(statearr_34353_35760[(2)] = inst_34307);

(statearr_34353_35760[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (17))){
var inst_34268 = (state_34320[(10)]);
var inst_34281 = cljs.core.first(inst_34268);
var inst_34282 = cljs.core.async.muxch_STAR_(inst_34281);
var inst_34283 = cljs.core.async.close_BANG_(inst_34282);
var inst_34284 = cljs.core.next(inst_34268);
var inst_34254 = inst_34284;
var inst_34255 = null;
var inst_34256 = (0);
var inst_34257 = (0);
var state_34320__$1 = (function (){var statearr_34357 = state_34320;
(statearr_34357[(12)] = inst_34254);

(statearr_34357[(13)] = inst_34257);

(statearr_34357[(14)] = inst_34283);

(statearr_34357[(15)] = inst_34256);

(statearr_34357[(16)] = inst_34255);

return statearr_34357;
})();
var statearr_34359_35761 = state_34320__$1;
(statearr_34359_35761[(2)] = null);

(statearr_34359_35761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (3))){
var inst_34315 = (state_34320[(2)]);
var state_34320__$1 = state_34320;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34320__$1,inst_34315);
} else {
if((state_val_34322 === (12))){
var inst_34292 = (state_34320[(2)]);
var state_34320__$1 = state_34320;
var statearr_34363_35762 = state_34320__$1;
(statearr_34363_35762[(2)] = inst_34292);

(statearr_34363_35762[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (2))){
var state_34320__$1 = state_34320;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34320__$1,(4),ch);
} else {
if((state_val_34322 === (23))){
var state_34320__$1 = state_34320;
var statearr_34365_35763 = state_34320__$1;
(statearr_34365_35763[(2)] = null);

(statearr_34365_35763[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (19))){
var inst_34240 = (state_34320[(8)]);
var inst_34298 = (state_34320[(11)]);
var inst_34300 = cljs.core.async.muxch_STAR_(inst_34298);
var state_34320__$1 = state_34320;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34320__$1,(22),inst_34300,inst_34240);
} else {
if((state_val_34322 === (11))){
var inst_34254 = (state_34320[(12)]);
var inst_34268 = (state_34320[(10)]);
var inst_34268__$1 = cljs.core.seq(inst_34254);
var state_34320__$1 = (function (){var statearr_34370 = state_34320;
(statearr_34370[(10)] = inst_34268__$1);

return statearr_34370;
})();
if(inst_34268__$1){
var statearr_34371_35764 = state_34320__$1;
(statearr_34371_35764[(1)] = (13));

} else {
var statearr_34372_35765 = state_34320__$1;
(statearr_34372_35765[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (9))){
var inst_34294 = (state_34320[(2)]);
var state_34320__$1 = state_34320;
var statearr_34373_35766 = state_34320__$1;
(statearr_34373_35766[(2)] = inst_34294);

(statearr_34373_35766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (5))){
var inst_34250 = cljs.core.deref(mults);
var inst_34251 = cljs.core.vals(inst_34250);
var inst_34252 = cljs.core.seq(inst_34251);
var inst_34254 = inst_34252;
var inst_34255 = null;
var inst_34256 = (0);
var inst_34257 = (0);
var state_34320__$1 = (function (){var statearr_34375 = state_34320;
(statearr_34375[(12)] = inst_34254);

(statearr_34375[(13)] = inst_34257);

(statearr_34375[(15)] = inst_34256);

(statearr_34375[(16)] = inst_34255);

return statearr_34375;
})();
var statearr_34376_35768 = state_34320__$1;
(statearr_34376_35768[(2)] = null);

(statearr_34376_35768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (14))){
var state_34320__$1 = state_34320;
var statearr_34380_35769 = state_34320__$1;
(statearr_34380_35769[(2)] = null);

(statearr_34380_35769[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (16))){
var inst_34268 = (state_34320[(10)]);
var inst_34275 = cljs.core.chunk_first(inst_34268);
var inst_34276 = cljs.core.chunk_rest(inst_34268);
var inst_34277 = cljs.core.count(inst_34275);
var inst_34254 = inst_34276;
var inst_34255 = inst_34275;
var inst_34256 = inst_34277;
var inst_34257 = (0);
var state_34320__$1 = (function (){var statearr_34388 = state_34320;
(statearr_34388[(12)] = inst_34254);

(statearr_34388[(13)] = inst_34257);

(statearr_34388[(15)] = inst_34256);

(statearr_34388[(16)] = inst_34255);

return statearr_34388;
})();
var statearr_34389_35771 = state_34320__$1;
(statearr_34389_35771[(2)] = null);

(statearr_34389_35771[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (10))){
var inst_34254 = (state_34320[(12)]);
var inst_34257 = (state_34320[(13)]);
var inst_34256 = (state_34320[(15)]);
var inst_34255 = (state_34320[(16)]);
var inst_34262 = cljs.core._nth(inst_34255,inst_34257);
var inst_34263 = cljs.core.async.muxch_STAR_(inst_34262);
var inst_34264 = cljs.core.async.close_BANG_(inst_34263);
var inst_34265 = (inst_34257 + (1));
var tmp34377 = inst_34254;
var tmp34378 = inst_34256;
var tmp34379 = inst_34255;
var inst_34254__$1 = tmp34377;
var inst_34255__$1 = tmp34379;
var inst_34256__$1 = tmp34378;
var inst_34257__$1 = inst_34265;
var state_34320__$1 = (function (){var statearr_34391 = state_34320;
(statearr_34391[(12)] = inst_34254__$1);

(statearr_34391[(13)] = inst_34257__$1);

(statearr_34391[(17)] = inst_34264);

(statearr_34391[(15)] = inst_34256__$1);

(statearr_34391[(16)] = inst_34255__$1);

return statearr_34391;
})();
var statearr_34395_35772 = state_34320__$1;
(statearr_34395_35772[(2)] = null);

(statearr_34395_35772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (18))){
var inst_34287 = (state_34320[(2)]);
var state_34320__$1 = state_34320;
var statearr_34397_35773 = state_34320__$1;
(statearr_34397_35773[(2)] = inst_34287);

(statearr_34397_35773[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (8))){
var inst_34257 = (state_34320[(13)]);
var inst_34256 = (state_34320[(15)]);
var inst_34259 = (inst_34257 < inst_34256);
var inst_34260 = inst_34259;
var state_34320__$1 = state_34320;
if(cljs.core.truth_(inst_34260)){
var statearr_34398_35774 = state_34320__$1;
(statearr_34398_35774[(1)] = (10));

} else {
var statearr_34399_35775 = state_34320__$1;
(statearr_34399_35775[(1)] = (11));

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
var cljs$core$async$state_machine__32680__auto__ = null;
var cljs$core$async$state_machine__32680__auto____0 = (function (){
var statearr_34404 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34404[(0)] = cljs$core$async$state_machine__32680__auto__);

(statearr_34404[(1)] = (1));

return statearr_34404;
});
var cljs$core$async$state_machine__32680__auto____1 = (function (state_34320){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_34320);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e34405){var ex__32683__auto__ = e34405;
var statearr_34406_35776 = state_34320;
(statearr_34406_35776[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_34320[(4)]))){
var statearr_34410_35777 = state_34320;
(statearr_34410_35777[(1)] = cljs.core.first((state_34320[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35778 = state_34320;
state_34320 = G__35778;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
cljs$core$async$state_machine__32680__auto__ = function(state_34320){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32680__auto____1.call(this,state_34320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32680__auto____0;
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32680__auto____1;
return cljs$core$async$state_machine__32680__auto__;
})()
})();
var state__32880__auto__ = (function (){var statearr_34412 = f__32879__auto__();
(statearr_34412[(6)] = c__32878__auto___35742);

return statearr_34412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32880__auto__);
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
var G__34415 = arguments.length;
switch (G__34415) {
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
var G__34429 = arguments.length;
switch (G__34429) {
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
var G__34439 = arguments.length;
switch (G__34439) {
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
var c__32878__auto___35787 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32879__auto__ = (function (){var switch__32679__auto__ = (function (state_34487){
var state_val_34488 = (state_34487[(1)]);
if((state_val_34488 === (7))){
var state_34487__$1 = state_34487;
var statearr_34491_35788 = state_34487__$1;
(statearr_34491_35788[(2)] = null);

(statearr_34491_35788[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (1))){
var state_34487__$1 = state_34487;
var statearr_34492_35789 = state_34487__$1;
(statearr_34492_35789[(2)] = null);

(statearr_34492_35789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (4))){
var inst_34447 = (state_34487[(7)]);
var inst_34448 = (state_34487[(8)]);
var inst_34450 = (inst_34448 < inst_34447);
var state_34487__$1 = state_34487;
if(cljs.core.truth_(inst_34450)){
var statearr_34493_35790 = state_34487__$1;
(statearr_34493_35790[(1)] = (6));

} else {
var statearr_34494_35791 = state_34487__$1;
(statearr_34494_35791[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (15))){
var inst_34473 = (state_34487[(9)]);
var inst_34478 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34473);
var state_34487__$1 = state_34487;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34487__$1,(17),out,inst_34478);
} else {
if((state_val_34488 === (13))){
var inst_34473 = (state_34487[(9)]);
var inst_34473__$1 = (state_34487[(2)]);
var inst_34474 = cljs.core.some(cljs.core.nil_QMARK_,inst_34473__$1);
var state_34487__$1 = (function (){var statearr_34495 = state_34487;
(statearr_34495[(9)] = inst_34473__$1);

return statearr_34495;
})();
if(cljs.core.truth_(inst_34474)){
var statearr_34496_35792 = state_34487__$1;
(statearr_34496_35792[(1)] = (14));

} else {
var statearr_34497_35793 = state_34487__$1;
(statearr_34497_35793[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (6))){
var state_34487__$1 = state_34487;
var statearr_34498_35794 = state_34487__$1;
(statearr_34498_35794[(2)] = null);

(statearr_34498_35794[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (17))){
var inst_34480 = (state_34487[(2)]);
var state_34487__$1 = (function (){var statearr_34500 = state_34487;
(statearr_34500[(10)] = inst_34480);

return statearr_34500;
})();
var statearr_34501_35795 = state_34487__$1;
(statearr_34501_35795[(2)] = null);

(statearr_34501_35795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (3))){
var inst_34485 = (state_34487[(2)]);
var state_34487__$1 = state_34487;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34487__$1,inst_34485);
} else {
if((state_val_34488 === (12))){
var _ = (function (){var statearr_34502 = state_34487;
(statearr_34502[(4)] = cljs.core.rest((state_34487[(4)])));

return statearr_34502;
})();
var state_34487__$1 = state_34487;
var ex34499 = (state_34487__$1[(2)]);
var statearr_34503_35797 = state_34487__$1;
(statearr_34503_35797[(5)] = ex34499);


if((ex34499 instanceof Object)){
var statearr_34504_35798 = state_34487__$1;
(statearr_34504_35798[(1)] = (11));

(statearr_34504_35798[(5)] = null);

} else {
throw ex34499;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (2))){
var inst_34446 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34447 = cnt;
var inst_34448 = (0);
var state_34487__$1 = (function (){var statearr_34505 = state_34487;
(statearr_34505[(7)] = inst_34447);

(statearr_34505[(8)] = inst_34448);

(statearr_34505[(11)] = inst_34446);

return statearr_34505;
})();
var statearr_34506_35803 = state_34487__$1;
(statearr_34506_35803[(2)] = null);

(statearr_34506_35803[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (11))){
var inst_34452 = (state_34487[(2)]);
var inst_34453 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34487__$1 = (function (){var statearr_34507 = state_34487;
(statearr_34507[(12)] = inst_34452);

return statearr_34507;
})();
var statearr_34508_35807 = state_34487__$1;
(statearr_34508_35807[(2)] = inst_34453);

(statearr_34508_35807[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (9))){
var inst_34448 = (state_34487[(8)]);
var _ = (function (){var statearr_34509 = state_34487;
(statearr_34509[(4)] = cljs.core.cons((12),(state_34487[(4)])));

return statearr_34509;
})();
var inst_34459 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34448) : chs__$1.call(null,inst_34448));
var inst_34460 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34448) : done.call(null,inst_34448));
var inst_34461 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34459,inst_34460);
var ___$1 = (function (){var statearr_34510 = state_34487;
(statearr_34510[(4)] = cljs.core.rest((state_34487[(4)])));

return statearr_34510;
})();
var state_34487__$1 = state_34487;
var statearr_34512_35808 = state_34487__$1;
(statearr_34512_35808[(2)] = inst_34461);

(statearr_34512_35808[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (5))){
var inst_34471 = (state_34487[(2)]);
var state_34487__$1 = (function (){var statearr_34514 = state_34487;
(statearr_34514[(13)] = inst_34471);

return statearr_34514;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34487__$1,(13),dchan);
} else {
if((state_val_34488 === (14))){
var inst_34476 = cljs.core.async.close_BANG_(out);
var state_34487__$1 = state_34487;
var statearr_34515_35815 = state_34487__$1;
(statearr_34515_35815[(2)] = inst_34476);

(statearr_34515_35815[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (16))){
var inst_34483 = (state_34487[(2)]);
var state_34487__$1 = state_34487;
var statearr_34516_35816 = state_34487__$1;
(statearr_34516_35816[(2)] = inst_34483);

(statearr_34516_35816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (10))){
var inst_34448 = (state_34487[(8)]);
var inst_34464 = (state_34487[(2)]);
var inst_34465 = (inst_34448 + (1));
var inst_34448__$1 = inst_34465;
var state_34487__$1 = (function (){var statearr_34517 = state_34487;
(statearr_34517[(14)] = inst_34464);

(statearr_34517[(8)] = inst_34448__$1);

return statearr_34517;
})();
var statearr_34518_35820 = state_34487__$1;
(statearr_34518_35820[(2)] = null);

(statearr_34518_35820[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34488 === (8))){
var inst_34469 = (state_34487[(2)]);
var state_34487__$1 = state_34487;
var statearr_34519_35821 = state_34487__$1;
(statearr_34519_35821[(2)] = inst_34469);

(statearr_34519_35821[(1)] = (5));


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
var cljs$core$async$state_machine__32680__auto__ = null;
var cljs$core$async$state_machine__32680__auto____0 = (function (){
var statearr_34521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34521[(0)] = cljs$core$async$state_machine__32680__auto__);

(statearr_34521[(1)] = (1));

return statearr_34521;
});
var cljs$core$async$state_machine__32680__auto____1 = (function (state_34487){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_34487);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e34523){var ex__32683__auto__ = e34523;
var statearr_34524_35825 = state_34487;
(statearr_34524_35825[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_34487[(4)]))){
var statearr_34525_35826 = state_34487;
(statearr_34525_35826[(1)] = cljs.core.first((state_34487[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35830 = state_34487;
state_34487 = G__35830;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
cljs$core$async$state_machine__32680__auto__ = function(state_34487){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32680__auto____1.call(this,state_34487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32680__auto____0;
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32680__auto____1;
return cljs$core$async$state_machine__32680__auto__;
})()
})();
var state__32880__auto__ = (function (){var statearr_34526 = f__32879__auto__();
(statearr_34526[(6)] = c__32878__auto___35787);

return statearr_34526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32880__auto__);
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
var G__34531 = arguments.length;
switch (G__34531) {
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
var c__32878__auto___35836 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32879__auto__ = (function (){var switch__32679__auto__ = (function (state_34563){
var state_val_34564 = (state_34563[(1)]);
if((state_val_34564 === (7))){
var inst_34542 = (state_34563[(7)]);
var inst_34543 = (state_34563[(8)]);
var inst_34542__$1 = (state_34563[(2)]);
var inst_34543__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34542__$1,(0),null);
var inst_34544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34542__$1,(1),null);
var inst_34545 = (inst_34543__$1 == null);
var state_34563__$1 = (function (){var statearr_34565 = state_34563;
(statearr_34565[(7)] = inst_34542__$1);

(statearr_34565[(8)] = inst_34543__$1);

(statearr_34565[(9)] = inst_34544);

return statearr_34565;
})();
if(cljs.core.truth_(inst_34545)){
var statearr_34566_35837 = state_34563__$1;
(statearr_34566_35837[(1)] = (8));

} else {
var statearr_34568_35838 = state_34563__$1;
(statearr_34568_35838[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (1))){
var inst_34532 = cljs.core.vec(chs);
var inst_34533 = inst_34532;
var state_34563__$1 = (function (){var statearr_34570 = state_34563;
(statearr_34570[(10)] = inst_34533);

return statearr_34570;
})();
var statearr_34571_35839 = state_34563__$1;
(statearr_34571_35839[(2)] = null);

(statearr_34571_35839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (4))){
var inst_34533 = (state_34563[(10)]);
var state_34563__$1 = state_34563;
return cljs.core.async.ioc_alts_BANG_(state_34563__$1,(7),inst_34533);
} else {
if((state_val_34564 === (6))){
var inst_34559 = (state_34563[(2)]);
var state_34563__$1 = state_34563;
var statearr_34572_35840 = state_34563__$1;
(statearr_34572_35840[(2)] = inst_34559);

(statearr_34572_35840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (3))){
var inst_34561 = (state_34563[(2)]);
var state_34563__$1 = state_34563;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34563__$1,inst_34561);
} else {
if((state_val_34564 === (2))){
var inst_34533 = (state_34563[(10)]);
var inst_34535 = cljs.core.count(inst_34533);
var inst_34536 = (inst_34535 > (0));
var state_34563__$1 = state_34563;
if(cljs.core.truth_(inst_34536)){
var statearr_34574_35841 = state_34563__$1;
(statearr_34574_35841[(1)] = (4));

} else {
var statearr_34576_35842 = state_34563__$1;
(statearr_34576_35842[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (11))){
var inst_34533 = (state_34563[(10)]);
var inst_34552 = (state_34563[(2)]);
var tmp34573 = inst_34533;
var inst_34533__$1 = tmp34573;
var state_34563__$1 = (function (){var statearr_34580 = state_34563;
(statearr_34580[(11)] = inst_34552);

(statearr_34580[(10)] = inst_34533__$1);

return statearr_34580;
})();
var statearr_34581_35843 = state_34563__$1;
(statearr_34581_35843[(2)] = null);

(statearr_34581_35843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (9))){
var inst_34543 = (state_34563[(8)]);
var state_34563__$1 = state_34563;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34563__$1,(11),out,inst_34543);
} else {
if((state_val_34564 === (5))){
var inst_34557 = cljs.core.async.close_BANG_(out);
var state_34563__$1 = state_34563;
var statearr_34584_35845 = state_34563__$1;
(statearr_34584_35845[(2)] = inst_34557);

(statearr_34584_35845[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (10))){
var inst_34555 = (state_34563[(2)]);
var state_34563__$1 = state_34563;
var statearr_34586_35846 = state_34563__$1;
(statearr_34586_35846[(2)] = inst_34555);

(statearr_34586_35846[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (8))){
var inst_34542 = (state_34563[(7)]);
var inst_34543 = (state_34563[(8)]);
var inst_34544 = (state_34563[(9)]);
var inst_34533 = (state_34563[(10)]);
var inst_34547 = (function (){var cs = inst_34533;
var vec__34538 = inst_34542;
var v = inst_34543;
var c = inst_34544;
return (function (p1__34527_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34527_SHARP_);
});
})();
var inst_34548 = cljs.core.filterv(inst_34547,inst_34533);
var inst_34533__$1 = inst_34548;
var state_34563__$1 = (function (){var statearr_34589 = state_34563;
(statearr_34589[(10)] = inst_34533__$1);

return statearr_34589;
})();
var statearr_34590_35847 = state_34563__$1;
(statearr_34590_35847[(2)] = null);

(statearr_34590_35847[(1)] = (2));


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
var cljs$core$async$state_machine__32680__auto__ = null;
var cljs$core$async$state_machine__32680__auto____0 = (function (){
var statearr_34591 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34591[(0)] = cljs$core$async$state_machine__32680__auto__);

(statearr_34591[(1)] = (1));

return statearr_34591;
});
var cljs$core$async$state_machine__32680__auto____1 = (function (state_34563){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_34563);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e34592){var ex__32683__auto__ = e34592;
var statearr_34593_35848 = state_34563;
(statearr_34593_35848[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_34563[(4)]))){
var statearr_34597_35849 = state_34563;
(statearr_34597_35849[(1)] = cljs.core.first((state_34563[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35850 = state_34563;
state_34563 = G__35850;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
cljs$core$async$state_machine__32680__auto__ = function(state_34563){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32680__auto____1.call(this,state_34563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32680__auto____0;
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32680__auto____1;
return cljs$core$async$state_machine__32680__auto__;
})()
})();
var state__32880__auto__ = (function (){var statearr_34598 = f__32879__auto__();
(statearr_34598[(6)] = c__32878__auto___35836);

return statearr_34598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32880__auto__);
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
var G__34600 = arguments.length;
switch (G__34600) {
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
var c__32878__auto___35854 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32879__auto__ = (function (){var switch__32679__auto__ = (function (state_34643){
var state_val_34644 = (state_34643[(1)]);
if((state_val_34644 === (7))){
var inst_34625 = (state_34643[(7)]);
var inst_34625__$1 = (state_34643[(2)]);
var inst_34626 = (inst_34625__$1 == null);
var inst_34627 = cljs.core.not(inst_34626);
var state_34643__$1 = (function (){var statearr_34655 = state_34643;
(statearr_34655[(7)] = inst_34625__$1);

return statearr_34655;
})();
if(inst_34627){
var statearr_34656_35859 = state_34643__$1;
(statearr_34656_35859[(1)] = (8));

} else {
var statearr_34657_35860 = state_34643__$1;
(statearr_34657_35860[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34644 === (1))){
var inst_34620 = (0);
var state_34643__$1 = (function (){var statearr_34658 = state_34643;
(statearr_34658[(8)] = inst_34620);

return statearr_34658;
})();
var statearr_34659_35861 = state_34643__$1;
(statearr_34659_35861[(2)] = null);

(statearr_34659_35861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34644 === (4))){
var state_34643__$1 = state_34643;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34643__$1,(7),ch);
} else {
if((state_val_34644 === (6))){
var inst_34638 = (state_34643[(2)]);
var state_34643__$1 = state_34643;
var statearr_34663_35862 = state_34643__$1;
(statearr_34663_35862[(2)] = inst_34638);

(statearr_34663_35862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34644 === (3))){
var inst_34640 = (state_34643[(2)]);
var inst_34641 = cljs.core.async.close_BANG_(out);
var state_34643__$1 = (function (){var statearr_34664 = state_34643;
(statearr_34664[(9)] = inst_34640);

return statearr_34664;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34643__$1,inst_34641);
} else {
if((state_val_34644 === (2))){
var inst_34620 = (state_34643[(8)]);
var inst_34622 = (inst_34620 < n);
var state_34643__$1 = state_34643;
if(cljs.core.truth_(inst_34622)){
var statearr_34665_35867 = state_34643__$1;
(statearr_34665_35867[(1)] = (4));

} else {
var statearr_34666_35868 = state_34643__$1;
(statearr_34666_35868[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34644 === (11))){
var inst_34620 = (state_34643[(8)]);
var inst_34630 = (state_34643[(2)]);
var inst_34631 = (inst_34620 + (1));
var inst_34620__$1 = inst_34631;
var state_34643__$1 = (function (){var statearr_34667 = state_34643;
(statearr_34667[(8)] = inst_34620__$1);

(statearr_34667[(10)] = inst_34630);

return statearr_34667;
})();
var statearr_34668_35869 = state_34643__$1;
(statearr_34668_35869[(2)] = null);

(statearr_34668_35869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34644 === (9))){
var state_34643__$1 = state_34643;
var statearr_34669_35870 = state_34643__$1;
(statearr_34669_35870[(2)] = null);

(statearr_34669_35870[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34644 === (5))){
var state_34643__$1 = state_34643;
var statearr_34670_35871 = state_34643__$1;
(statearr_34670_35871[(2)] = null);

(statearr_34670_35871[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34644 === (10))){
var inst_34635 = (state_34643[(2)]);
var state_34643__$1 = state_34643;
var statearr_34672_35872 = state_34643__$1;
(statearr_34672_35872[(2)] = inst_34635);

(statearr_34672_35872[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34644 === (8))){
var inst_34625 = (state_34643[(7)]);
var state_34643__$1 = state_34643;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34643__$1,(11),out,inst_34625);
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
var cljs$core$async$state_machine__32680__auto__ = null;
var cljs$core$async$state_machine__32680__auto____0 = (function (){
var statearr_34676 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34676[(0)] = cljs$core$async$state_machine__32680__auto__);

(statearr_34676[(1)] = (1));

return statearr_34676;
});
var cljs$core$async$state_machine__32680__auto____1 = (function (state_34643){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_34643);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e34677){var ex__32683__auto__ = e34677;
var statearr_34678_35873 = state_34643;
(statearr_34678_35873[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_34643[(4)]))){
var statearr_34679_35874 = state_34643;
(statearr_34679_35874[(1)] = cljs.core.first((state_34643[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35875 = state_34643;
state_34643 = G__35875;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
cljs$core$async$state_machine__32680__auto__ = function(state_34643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32680__auto____1.call(this,state_34643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32680__auto____0;
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32680__auto____1;
return cljs$core$async$state_machine__32680__auto__;
})()
})();
var state__32880__auto__ = (function (){var statearr_34680 = f__32879__auto__();
(statearr_34680[(6)] = c__32878__auto___35854);

return statearr_34680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32880__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34682 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34682 = (function (f,ch,meta34683){
this.f = f;
this.ch = ch;
this.meta34683 = meta34683;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34684,meta34683__$1){
var self__ = this;
var _34684__$1 = this;
return (new cljs.core.async.t_cljs$core$async34682(self__.f,self__.ch,meta34683__$1));
}));

(cljs.core.async.t_cljs$core$async34682.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34684){
var self__ = this;
var _34684__$1 = this;
return self__.meta34683;
}));

(cljs.core.async.t_cljs$core$async34682.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34682.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34682.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34682.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34682.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34692 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34692 = (function (f,ch,meta34683,_,fn1,meta34693){
this.f = f;
this.ch = ch;
this.meta34683 = meta34683;
this._ = _;
this.fn1 = fn1;
this.meta34693 = meta34693;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34694,meta34693__$1){
var self__ = this;
var _34694__$1 = this;
return (new cljs.core.async.t_cljs$core$async34692(self__.f,self__.ch,self__.meta34683,self__._,self__.fn1,meta34693__$1));
}));

(cljs.core.async.t_cljs$core$async34692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34694){
var self__ = this;
var _34694__$1 = this;
return self__.meta34693;
}));

(cljs.core.async.t_cljs$core$async34692.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34692.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34692.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34692.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34681_SHARP_){
var G__34696 = (((p1__34681_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34681_SHARP_) : self__.f.call(null,p1__34681_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34696) : f1.call(null,G__34696));
});
}));

(cljs.core.async.t_cljs$core$async34692.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34683","meta34683",-1224194409,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34682","cljs.core.async/t_cljs$core$async34682",1200363684,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34693","meta34693",840117525,null)], null);
}));

(cljs.core.async.t_cljs$core$async34692.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34692.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34692");

(cljs.core.async.t_cljs$core$async34692.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34692");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34692.
 */
cljs.core.async.__GT_t_cljs$core$async34692 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34692(f__$1,ch__$1,meta34683__$1,___$2,fn1__$1,meta34693){
return (new cljs.core.async.t_cljs$core$async34692(f__$1,ch__$1,meta34683__$1,___$2,fn1__$1,meta34693));
});

}

return (new cljs.core.async.t_cljs$core$async34692(self__.f,self__.ch,self__.meta34683,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34699 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34699) : self__.f.call(null,G__34699));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34682.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34682.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34682.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34683","meta34683",-1224194409,null)], null);
}));

(cljs.core.async.t_cljs$core$async34682.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34682.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34682");

(cljs.core.async.t_cljs$core$async34682.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34682");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34682.
 */
cljs.core.async.__GT_t_cljs$core$async34682 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34682(f__$1,ch__$1,meta34683){
return (new cljs.core.async.t_cljs$core$async34682(f__$1,ch__$1,meta34683));
});

}

return (new cljs.core.async.t_cljs$core$async34682(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34705 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34705 = (function (f,ch,meta34706){
this.f = f;
this.ch = ch;
this.meta34706 = meta34706;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34707,meta34706__$1){
var self__ = this;
var _34707__$1 = this;
return (new cljs.core.async.t_cljs$core$async34705(self__.f,self__.ch,meta34706__$1));
}));

(cljs.core.async.t_cljs$core$async34705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34707){
var self__ = this;
var _34707__$1 = this;
return self__.meta34706;
}));

(cljs.core.async.t_cljs$core$async34705.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34705.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34705.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34705.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34705.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34705.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34705.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34706","meta34706",-1996947276,null)], null);
}));

(cljs.core.async.t_cljs$core$async34705.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34705.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34705");

(cljs.core.async.t_cljs$core$async34705.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34705");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34705.
 */
cljs.core.async.__GT_t_cljs$core$async34705 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34705(f__$1,ch__$1,meta34706){
return (new cljs.core.async.t_cljs$core$async34705(f__$1,ch__$1,meta34706));
});

}

return (new cljs.core.async.t_cljs$core$async34705(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34708 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34708 = (function (p,ch,meta34709){
this.p = p;
this.ch = ch;
this.meta34709 = meta34709;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34710,meta34709__$1){
var self__ = this;
var _34710__$1 = this;
return (new cljs.core.async.t_cljs$core$async34708(self__.p,self__.ch,meta34709__$1));
}));

(cljs.core.async.t_cljs$core$async34708.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34710){
var self__ = this;
var _34710__$1 = this;
return self__.meta34709;
}));

(cljs.core.async.t_cljs$core$async34708.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34708.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34708.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34708.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34708.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34708.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34708.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34708.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34709","meta34709",496048637,null)], null);
}));

(cljs.core.async.t_cljs$core$async34708.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34708.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34708");

(cljs.core.async.t_cljs$core$async34708.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34708");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34708.
 */
cljs.core.async.__GT_t_cljs$core$async34708 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34708(p__$1,ch__$1,meta34709){
return (new cljs.core.async.t_cljs$core$async34708(p__$1,ch__$1,meta34709));
});

}

return (new cljs.core.async.t_cljs$core$async34708(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34724 = arguments.length;
switch (G__34724) {
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
var c__32878__auto___35889 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32879__auto__ = (function (){var switch__32679__auto__ = (function (state_34745){
var state_val_34746 = (state_34745[(1)]);
if((state_val_34746 === (7))){
var inst_34741 = (state_34745[(2)]);
var state_34745__$1 = state_34745;
var statearr_34747_35890 = state_34745__$1;
(statearr_34747_35890[(2)] = inst_34741);

(statearr_34747_35890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (1))){
var state_34745__$1 = state_34745;
var statearr_34748_35891 = state_34745__$1;
(statearr_34748_35891[(2)] = null);

(statearr_34748_35891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (4))){
var inst_34727 = (state_34745[(7)]);
var inst_34727__$1 = (state_34745[(2)]);
var inst_34728 = (inst_34727__$1 == null);
var state_34745__$1 = (function (){var statearr_34750 = state_34745;
(statearr_34750[(7)] = inst_34727__$1);

return statearr_34750;
})();
if(cljs.core.truth_(inst_34728)){
var statearr_34754_35896 = state_34745__$1;
(statearr_34754_35896[(1)] = (5));

} else {
var statearr_34755_35897 = state_34745__$1;
(statearr_34755_35897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (6))){
var inst_34727 = (state_34745[(7)]);
var inst_34732 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34727) : p.call(null,inst_34727));
var state_34745__$1 = state_34745;
if(cljs.core.truth_(inst_34732)){
var statearr_34756_35898 = state_34745__$1;
(statearr_34756_35898[(1)] = (8));

} else {
var statearr_34757_35899 = state_34745__$1;
(statearr_34757_35899[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (3))){
var inst_34743 = (state_34745[(2)]);
var state_34745__$1 = state_34745;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34745__$1,inst_34743);
} else {
if((state_val_34746 === (2))){
var state_34745__$1 = state_34745;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34745__$1,(4),ch);
} else {
if((state_val_34746 === (11))){
var inst_34735 = (state_34745[(2)]);
var state_34745__$1 = state_34745;
var statearr_34758_35900 = state_34745__$1;
(statearr_34758_35900[(2)] = inst_34735);

(statearr_34758_35900[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (9))){
var state_34745__$1 = state_34745;
var statearr_34760_35901 = state_34745__$1;
(statearr_34760_35901[(2)] = null);

(statearr_34760_35901[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (5))){
var inst_34730 = cljs.core.async.close_BANG_(out);
var state_34745__$1 = state_34745;
var statearr_34764_35902 = state_34745__$1;
(statearr_34764_35902[(2)] = inst_34730);

(statearr_34764_35902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (10))){
var inst_34738 = (state_34745[(2)]);
var state_34745__$1 = (function (){var statearr_34765 = state_34745;
(statearr_34765[(8)] = inst_34738);

return statearr_34765;
})();
var statearr_34766_35903 = state_34745__$1;
(statearr_34766_35903[(2)] = null);

(statearr_34766_35903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (8))){
var inst_34727 = (state_34745[(7)]);
var state_34745__$1 = state_34745;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34745__$1,(11),out,inst_34727);
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
var cljs$core$async$state_machine__32680__auto__ = null;
var cljs$core$async$state_machine__32680__auto____0 = (function (){
var statearr_34767 = [null,null,null,null,null,null,null,null,null];
(statearr_34767[(0)] = cljs$core$async$state_machine__32680__auto__);

(statearr_34767[(1)] = (1));

return statearr_34767;
});
var cljs$core$async$state_machine__32680__auto____1 = (function (state_34745){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_34745);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e34768){var ex__32683__auto__ = e34768;
var statearr_34769_35904 = state_34745;
(statearr_34769_35904[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_34745[(4)]))){
var statearr_34770_35905 = state_34745;
(statearr_34770_35905[(1)] = cljs.core.first((state_34745[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35906 = state_34745;
state_34745 = G__35906;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
cljs$core$async$state_machine__32680__auto__ = function(state_34745){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32680__auto____1.call(this,state_34745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32680__auto____0;
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32680__auto____1;
return cljs$core$async$state_machine__32680__auto__;
})()
})();
var state__32880__auto__ = (function (){var statearr_34771 = f__32879__auto__();
(statearr_34771[(6)] = c__32878__auto___35889);

return statearr_34771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32880__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34773 = arguments.length;
switch (G__34773) {
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
var c__32878__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32879__auto__ = (function (){var switch__32679__auto__ = (function (state_34840){
var state_val_34841 = (state_34840[(1)]);
if((state_val_34841 === (7))){
var inst_34836 = (state_34840[(2)]);
var state_34840__$1 = state_34840;
var statearr_34842_35912 = state_34840__$1;
(statearr_34842_35912[(2)] = inst_34836);

(statearr_34842_35912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34841 === (20))){
var inst_34806 = (state_34840[(7)]);
var inst_34817 = (state_34840[(2)]);
var inst_34818 = cljs.core.next(inst_34806);
var inst_34792 = inst_34818;
var inst_34793 = null;
var inst_34794 = (0);
var inst_34795 = (0);
var state_34840__$1 = (function (){var statearr_34843 = state_34840;
(statearr_34843[(8)] = inst_34793);

(statearr_34843[(9)] = inst_34795);

(statearr_34843[(10)] = inst_34792);

(statearr_34843[(11)] = inst_34794);

(statearr_34843[(12)] = inst_34817);

return statearr_34843;
})();
var statearr_34844_35913 = state_34840__$1;
(statearr_34844_35913[(2)] = null);

(statearr_34844_35913[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34841 === (1))){
var state_34840__$1 = state_34840;
var statearr_34845_35914 = state_34840__$1;
(statearr_34845_35914[(2)] = null);

(statearr_34845_35914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34841 === (4))){
var inst_34778 = (state_34840[(13)]);
var inst_34778__$1 = (state_34840[(2)]);
var inst_34779 = (inst_34778__$1 == null);
var state_34840__$1 = (function (){var statearr_34846 = state_34840;
(statearr_34846[(13)] = inst_34778__$1);

return statearr_34846;
})();
if(cljs.core.truth_(inst_34779)){
var statearr_34847_35918 = state_34840__$1;
(statearr_34847_35918[(1)] = (5));

} else {
var statearr_34848_35919 = state_34840__$1;
(statearr_34848_35919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34841 === (15))){
var state_34840__$1 = state_34840;
var statearr_34852_35920 = state_34840__$1;
(statearr_34852_35920[(2)] = null);

(statearr_34852_35920[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34841 === (21))){
var state_34840__$1 = state_34840;
var statearr_34853_35921 = state_34840__$1;
(statearr_34853_35921[(2)] = null);

(statearr_34853_35921[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34841 === (13))){
var inst_34793 = (state_34840[(8)]);
var inst_34795 = (state_34840[(9)]);
var inst_34792 = (state_34840[(10)]);
var inst_34794 = (state_34840[(11)]);
var inst_34802 = (state_34840[(2)]);
var inst_34803 = (inst_34795 + (1));
var tmp34849 = inst_34793;
var tmp34850 = inst_34792;
var tmp34851 = inst_34794;
var inst_34792__$1 = tmp34850;
var inst_34793__$1 = tmp34849;
var inst_34794__$1 = tmp34851;
var inst_34795__$1 = inst_34803;
var state_34840__$1 = (function (){var statearr_34854 = state_34840;
(statearr_34854[(8)] = inst_34793__$1);

(statearr_34854[(14)] = inst_34802);

(statearr_34854[(9)] = inst_34795__$1);

(statearr_34854[(10)] = inst_34792__$1);

(statearr_34854[(11)] = inst_34794__$1);

return statearr_34854;
})();
var statearr_34855_35923 = state_34840__$1;
(statearr_34855_35923[(2)] = null);

(statearr_34855_35923[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34841 === (22))){
var state_34840__$1 = state_34840;
var statearr_34856_35924 = state_34840__$1;
(statearr_34856_35924[(2)] = null);

(statearr_34856_35924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34841 === (6))){
var inst_34778 = (state_34840[(13)]);
var inst_34787 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34778) : f.call(null,inst_34778));
var inst_34788 = cljs.core.seq(inst_34787);
var inst_34792 = inst_34788;
var inst_34793 = null;
var inst_34794 = (0);
var inst_34795 = (0);
var state_34840__$1 = (function (){var statearr_34857 = state_34840;
(statearr_34857[(8)] = inst_34793);

(statearr_34857[(9)] = inst_34795);

(statearr_34857[(10)] = inst_34792);

(statearr_34857[(11)] = inst_34794);

return statearr_34857;
})();
var statearr_34858_35928 = state_34840__$1;
(statearr_34858_35928[(2)] = null);

(statearr_34858_35928[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34841 === (17))){
var inst_34806 = (state_34840[(7)]);
var inst_34810 = cljs.core.chunk_first(inst_34806);
var inst_34811 = cljs.core.chunk_rest(inst_34806);
var inst_34812 = cljs.core.count(inst_34810);
var inst_34792 = inst_34811;
var inst_34793 = inst_34810;
var inst_34794 = inst_34812;
var inst_34795 = (0);
var state_34840__$1 = (function (){var statearr_34859 = state_34840;
(statearr_34859[(8)] = inst_34793);

(statearr_34859[(9)] = inst_34795);

(statearr_34859[(10)] = inst_34792);

(statearr_34859[(11)] = inst_34794);

return statearr_34859;
})();
var statearr_34860_35929 = state_34840__$1;
(statearr_34860_35929[(2)] = null);

(statearr_34860_35929[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34841 === (3))){
var inst_34838 = (state_34840[(2)]);
var state_34840__$1 = state_34840;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34840__$1,inst_34838);
} else {
if((state_val_34841 === (12))){
var inst_34826 = (state_34840[(2)]);
var state_34840__$1 = state_34840;
var statearr_34861_35930 = state_34840__$1;
(statearr_34861_35930[(2)] = inst_34826);

(statearr_34861_35930[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34841 === (2))){
var state_34840__$1 = state_34840;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34840__$1,(4),in$);
} else {
if((state_val_34841 === (23))){
var inst_34834 = (state_34840[(2)]);
var state_34840__$1 = state_34840;
var statearr_34862_35931 = state_34840__$1;
(statearr_34862_35931[(2)] = inst_34834);

(statearr_34862_35931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34841 === (19))){
var inst_34821 = (state_34840[(2)]);
var state_34840__$1 = state_34840;
var statearr_34863_35932 = state_34840__$1;
(statearr_34863_35932[(2)] = inst_34821);

(statearr_34863_35932[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34841 === (11))){
var inst_34792 = (state_34840[(10)]);
var inst_34806 = (state_34840[(7)]);
var inst_34806__$1 = cljs.core.seq(inst_34792);
var state_34840__$1 = (function (){var statearr_34864 = state_34840;
(statearr_34864[(7)] = inst_34806__$1);

return statearr_34864;
})();
if(inst_34806__$1){
var statearr_34865_35933 = state_34840__$1;
(statearr_34865_35933[(1)] = (14));

} else {
var statearr_34866_35934 = state_34840__$1;
(statearr_34866_35934[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34841 === (9))){
var inst_34828 = (state_34840[(2)]);
var inst_34829 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34840__$1 = (function (){var statearr_34867 = state_34840;
(statearr_34867[(15)] = inst_34828);

return statearr_34867;
})();
if(cljs.core.truth_(inst_34829)){
var statearr_34868_35935 = state_34840__$1;
(statearr_34868_35935[(1)] = (21));

} else {
var statearr_34869_35936 = state_34840__$1;
(statearr_34869_35936[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34841 === (5))){
var inst_34781 = cljs.core.async.close_BANG_(out);
var state_34840__$1 = state_34840;
var statearr_34870_35937 = state_34840__$1;
(statearr_34870_35937[(2)] = inst_34781);

(statearr_34870_35937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34841 === (14))){
var inst_34806 = (state_34840[(7)]);
var inst_34808 = cljs.core.chunked_seq_QMARK_(inst_34806);
var state_34840__$1 = state_34840;
if(inst_34808){
var statearr_34871_35938 = state_34840__$1;
(statearr_34871_35938[(1)] = (17));

} else {
var statearr_34872_35939 = state_34840__$1;
(statearr_34872_35939[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34841 === (16))){
var inst_34824 = (state_34840[(2)]);
var state_34840__$1 = state_34840;
var statearr_34873_35941 = state_34840__$1;
(statearr_34873_35941[(2)] = inst_34824);

(statearr_34873_35941[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34841 === (10))){
var inst_34793 = (state_34840[(8)]);
var inst_34795 = (state_34840[(9)]);
var inst_34800 = cljs.core._nth(inst_34793,inst_34795);
var state_34840__$1 = state_34840;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34840__$1,(13),out,inst_34800);
} else {
if((state_val_34841 === (18))){
var inst_34806 = (state_34840[(7)]);
var inst_34815 = cljs.core.first(inst_34806);
var state_34840__$1 = state_34840;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34840__$1,(20),out,inst_34815);
} else {
if((state_val_34841 === (8))){
var inst_34795 = (state_34840[(9)]);
var inst_34794 = (state_34840[(11)]);
var inst_34797 = (inst_34795 < inst_34794);
var inst_34798 = inst_34797;
var state_34840__$1 = state_34840;
if(cljs.core.truth_(inst_34798)){
var statearr_34874_35943 = state_34840__$1;
(statearr_34874_35943[(1)] = (10));

} else {
var statearr_34875_35944 = state_34840__$1;
(statearr_34875_35944[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__32680__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32680__auto____0 = (function (){
var statearr_34877 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34877[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32680__auto__);

(statearr_34877[(1)] = (1));

return statearr_34877;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32680__auto____1 = (function (state_34840){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_34840);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e34878){var ex__32683__auto__ = e34878;
var statearr_34879_35945 = state_34840;
(statearr_34879_35945[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_34840[(4)]))){
var statearr_34880_35946 = state_34840;
(statearr_34880_35946[(1)] = cljs.core.first((state_34840[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35947 = state_34840;
state_34840 = G__35947;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32680__auto__ = function(state_34840){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32680__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32680__auto____1.call(this,state_34840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32680__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32680__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32680__auto__;
})()
})();
var state__32880__auto__ = (function (){var statearr_34881 = f__32879__auto__();
(statearr_34881[(6)] = c__32878__auto__);

return statearr_34881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32880__auto__);
}));

return c__32878__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34883 = arguments.length;
switch (G__34883) {
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
var G__34888 = arguments.length;
switch (G__34888) {
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
var G__34894 = arguments.length;
switch (G__34894) {
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
var c__32878__auto___35956 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32879__auto__ = (function (){var switch__32679__auto__ = (function (state_34918){
var state_val_34919 = (state_34918[(1)]);
if((state_val_34919 === (7))){
var inst_34913 = (state_34918[(2)]);
var state_34918__$1 = state_34918;
var statearr_34920_35960 = state_34918__$1;
(statearr_34920_35960[(2)] = inst_34913);

(statearr_34920_35960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34919 === (1))){
var inst_34895 = null;
var state_34918__$1 = (function (){var statearr_34921 = state_34918;
(statearr_34921[(7)] = inst_34895);

return statearr_34921;
})();
var statearr_34922_35961 = state_34918__$1;
(statearr_34922_35961[(2)] = null);

(statearr_34922_35961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34919 === (4))){
var inst_34898 = (state_34918[(8)]);
var inst_34898__$1 = (state_34918[(2)]);
var inst_34899 = (inst_34898__$1 == null);
var inst_34900 = cljs.core.not(inst_34899);
var state_34918__$1 = (function (){var statearr_34923 = state_34918;
(statearr_34923[(8)] = inst_34898__$1);

return statearr_34923;
})();
if(inst_34900){
var statearr_34924_35962 = state_34918__$1;
(statearr_34924_35962[(1)] = (5));

} else {
var statearr_34933_35963 = state_34918__$1;
(statearr_34933_35963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34919 === (6))){
var state_34918__$1 = state_34918;
var statearr_34940_35964 = state_34918__$1;
(statearr_34940_35964[(2)] = null);

(statearr_34940_35964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34919 === (3))){
var inst_34915 = (state_34918[(2)]);
var inst_34916 = cljs.core.async.close_BANG_(out);
var state_34918__$1 = (function (){var statearr_34941 = state_34918;
(statearr_34941[(9)] = inst_34915);

return statearr_34941;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34918__$1,inst_34916);
} else {
if((state_val_34919 === (2))){
var state_34918__$1 = state_34918;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34918__$1,(4),ch);
} else {
if((state_val_34919 === (11))){
var inst_34898 = (state_34918[(8)]);
var inst_34907 = (state_34918[(2)]);
var inst_34895 = inst_34898;
var state_34918__$1 = (function (){var statearr_34948 = state_34918;
(statearr_34948[(7)] = inst_34895);

(statearr_34948[(10)] = inst_34907);

return statearr_34948;
})();
var statearr_34949_35965 = state_34918__$1;
(statearr_34949_35965[(2)] = null);

(statearr_34949_35965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34919 === (9))){
var inst_34898 = (state_34918[(8)]);
var state_34918__$1 = state_34918;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34918__$1,(11),out,inst_34898);
} else {
if((state_val_34919 === (5))){
var inst_34895 = (state_34918[(7)]);
var inst_34898 = (state_34918[(8)]);
var inst_34902 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34898,inst_34895);
var state_34918__$1 = state_34918;
if(inst_34902){
var statearr_34962_35967 = state_34918__$1;
(statearr_34962_35967[(1)] = (8));

} else {
var statearr_34966_35968 = state_34918__$1;
(statearr_34966_35968[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34919 === (10))){
var inst_34910 = (state_34918[(2)]);
var state_34918__$1 = state_34918;
var statearr_34967_35969 = state_34918__$1;
(statearr_34967_35969[(2)] = inst_34910);

(statearr_34967_35969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34919 === (8))){
var inst_34895 = (state_34918[(7)]);
var tmp34950 = inst_34895;
var inst_34895__$1 = tmp34950;
var state_34918__$1 = (function (){var statearr_34974 = state_34918;
(statearr_34974[(7)] = inst_34895__$1);

return statearr_34974;
})();
var statearr_34975_35970 = state_34918__$1;
(statearr_34975_35970[(2)] = null);

(statearr_34975_35970[(1)] = (2));


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
var cljs$core$async$state_machine__32680__auto__ = null;
var cljs$core$async$state_machine__32680__auto____0 = (function (){
var statearr_34976 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34976[(0)] = cljs$core$async$state_machine__32680__auto__);

(statearr_34976[(1)] = (1));

return statearr_34976;
});
var cljs$core$async$state_machine__32680__auto____1 = (function (state_34918){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_34918);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e34977){var ex__32683__auto__ = e34977;
var statearr_34978_35975 = state_34918;
(statearr_34978_35975[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_34918[(4)]))){
var statearr_34981_35976 = state_34918;
(statearr_34981_35976[(1)] = cljs.core.first((state_34918[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35977 = state_34918;
state_34918 = G__35977;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
cljs$core$async$state_machine__32680__auto__ = function(state_34918){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32680__auto____1.call(this,state_34918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32680__auto____0;
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32680__auto____1;
return cljs$core$async$state_machine__32680__auto__;
})()
})();
var state__32880__auto__ = (function (){var statearr_34982 = f__32879__auto__();
(statearr_34982[(6)] = c__32878__auto___35956);

return statearr_34982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32880__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34985 = arguments.length;
switch (G__34985) {
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
var c__32878__auto___35979 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32879__auto__ = (function (){var switch__32679__auto__ = (function (state_35026){
var state_val_35027 = (state_35026[(1)]);
if((state_val_35027 === (7))){
var inst_35022 = (state_35026[(2)]);
var state_35026__$1 = state_35026;
var statearr_35028_35980 = state_35026__$1;
(statearr_35028_35980[(2)] = inst_35022);

(statearr_35028_35980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (1))){
var inst_34989 = (new Array(n));
var inst_34990 = inst_34989;
var inst_34991 = (0);
var state_35026__$1 = (function (){var statearr_35029 = state_35026;
(statearr_35029[(7)] = inst_34990);

(statearr_35029[(8)] = inst_34991);

return statearr_35029;
})();
var statearr_35030_35981 = state_35026__$1;
(statearr_35030_35981[(2)] = null);

(statearr_35030_35981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (4))){
var inst_34994 = (state_35026[(9)]);
var inst_34994__$1 = (state_35026[(2)]);
var inst_34995 = (inst_34994__$1 == null);
var inst_34996 = cljs.core.not(inst_34995);
var state_35026__$1 = (function (){var statearr_35031 = state_35026;
(statearr_35031[(9)] = inst_34994__$1);

return statearr_35031;
})();
if(inst_34996){
var statearr_35032_35982 = state_35026__$1;
(statearr_35032_35982[(1)] = (5));

} else {
var statearr_35033_35983 = state_35026__$1;
(statearr_35033_35983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (15))){
var inst_35016 = (state_35026[(2)]);
var state_35026__$1 = state_35026;
var statearr_35034_35984 = state_35026__$1;
(statearr_35034_35984[(2)] = inst_35016);

(statearr_35034_35984[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (13))){
var state_35026__$1 = state_35026;
var statearr_35035_35985 = state_35026__$1;
(statearr_35035_35985[(2)] = null);

(statearr_35035_35985[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (6))){
var inst_34991 = (state_35026[(8)]);
var inst_35012 = (inst_34991 > (0));
var state_35026__$1 = state_35026;
if(cljs.core.truth_(inst_35012)){
var statearr_35036_35986 = state_35026__$1;
(statearr_35036_35986[(1)] = (12));

} else {
var statearr_35037_35987 = state_35026__$1;
(statearr_35037_35987[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (3))){
var inst_35024 = (state_35026[(2)]);
var state_35026__$1 = state_35026;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35026__$1,inst_35024);
} else {
if((state_val_35027 === (12))){
var inst_34990 = (state_35026[(7)]);
var inst_35014 = cljs.core.vec(inst_34990);
var state_35026__$1 = state_35026;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35026__$1,(15),out,inst_35014);
} else {
if((state_val_35027 === (2))){
var state_35026__$1 = state_35026;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35026__$1,(4),ch);
} else {
if((state_val_35027 === (11))){
var inst_35006 = (state_35026[(2)]);
var inst_35007 = (new Array(n));
var inst_34990 = inst_35007;
var inst_34991 = (0);
var state_35026__$1 = (function (){var statearr_35038 = state_35026;
(statearr_35038[(7)] = inst_34990);

(statearr_35038[(8)] = inst_34991);

(statearr_35038[(10)] = inst_35006);

return statearr_35038;
})();
var statearr_35039_35988 = state_35026__$1;
(statearr_35039_35988[(2)] = null);

(statearr_35039_35988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (9))){
var inst_34990 = (state_35026[(7)]);
var inst_35004 = cljs.core.vec(inst_34990);
var state_35026__$1 = state_35026;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35026__$1,(11),out,inst_35004);
} else {
if((state_val_35027 === (5))){
var inst_34999 = (state_35026[(11)]);
var inst_34990 = (state_35026[(7)]);
var inst_34991 = (state_35026[(8)]);
var inst_34994 = (state_35026[(9)]);
var inst_34998 = (inst_34990[inst_34991] = inst_34994);
var inst_34999__$1 = (inst_34991 + (1));
var inst_35000 = (inst_34999__$1 < n);
var state_35026__$1 = (function (){var statearr_35040 = state_35026;
(statearr_35040[(11)] = inst_34999__$1);

(statearr_35040[(12)] = inst_34998);

return statearr_35040;
})();
if(cljs.core.truth_(inst_35000)){
var statearr_35041_35989 = state_35026__$1;
(statearr_35041_35989[(1)] = (8));

} else {
var statearr_35042_35990 = state_35026__$1;
(statearr_35042_35990[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (14))){
var inst_35019 = (state_35026[(2)]);
var inst_35020 = cljs.core.async.close_BANG_(out);
var state_35026__$1 = (function (){var statearr_35044 = state_35026;
(statearr_35044[(13)] = inst_35019);

return statearr_35044;
})();
var statearr_35045_35991 = state_35026__$1;
(statearr_35045_35991[(2)] = inst_35020);

(statearr_35045_35991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (10))){
var inst_35010 = (state_35026[(2)]);
var state_35026__$1 = state_35026;
var statearr_35046_35992 = state_35026__$1;
(statearr_35046_35992[(2)] = inst_35010);

(statearr_35046_35992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35027 === (8))){
var inst_34999 = (state_35026[(11)]);
var inst_34990 = (state_35026[(7)]);
var tmp35043 = inst_34990;
var inst_34990__$1 = tmp35043;
var inst_34991 = inst_34999;
var state_35026__$1 = (function (){var statearr_35047 = state_35026;
(statearr_35047[(7)] = inst_34990__$1);

(statearr_35047[(8)] = inst_34991);

return statearr_35047;
})();
var statearr_35048_35993 = state_35026__$1;
(statearr_35048_35993[(2)] = null);

(statearr_35048_35993[(1)] = (2));


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
var cljs$core$async$state_machine__32680__auto__ = null;
var cljs$core$async$state_machine__32680__auto____0 = (function (){
var statearr_35049 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35049[(0)] = cljs$core$async$state_machine__32680__auto__);

(statearr_35049[(1)] = (1));

return statearr_35049;
});
var cljs$core$async$state_machine__32680__auto____1 = (function (state_35026){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_35026);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e35050){var ex__32683__auto__ = e35050;
var statearr_35051_35994 = state_35026;
(statearr_35051_35994[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_35026[(4)]))){
var statearr_35052_35995 = state_35026;
(statearr_35052_35995[(1)] = cljs.core.first((state_35026[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35996 = state_35026;
state_35026 = G__35996;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
cljs$core$async$state_machine__32680__auto__ = function(state_35026){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32680__auto____1.call(this,state_35026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32680__auto____0;
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32680__auto____1;
return cljs$core$async$state_machine__32680__auto__;
})()
})();
var state__32880__auto__ = (function (){var statearr_35053 = f__32879__auto__();
(statearr_35053[(6)] = c__32878__auto___35979);

return statearr_35053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32880__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35055 = arguments.length;
switch (G__35055) {
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
var c__32878__auto___35998 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32879__auto__ = (function (){var switch__32679__auto__ = (function (state_35111){
var state_val_35112 = (state_35111[(1)]);
if((state_val_35112 === (7))){
var inst_35107 = (state_35111[(2)]);
var state_35111__$1 = state_35111;
var statearr_35113_35999 = state_35111__$1;
(statearr_35113_35999[(2)] = inst_35107);

(statearr_35113_35999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35112 === (1))){
var inst_35067 = [];
var inst_35068 = inst_35067;
var inst_35069 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35111__$1 = (function (){var statearr_35114 = state_35111;
(statearr_35114[(7)] = inst_35068);

(statearr_35114[(8)] = inst_35069);

return statearr_35114;
})();
var statearr_35115_36000 = state_35111__$1;
(statearr_35115_36000[(2)] = null);

(statearr_35115_36000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35112 === (4))){
var inst_35072 = (state_35111[(9)]);
var inst_35072__$1 = (state_35111[(2)]);
var inst_35073 = (inst_35072__$1 == null);
var inst_35074 = cljs.core.not(inst_35073);
var state_35111__$1 = (function (){var statearr_35116 = state_35111;
(statearr_35116[(9)] = inst_35072__$1);

return statearr_35116;
})();
if(inst_35074){
var statearr_35117_36003 = state_35111__$1;
(statearr_35117_36003[(1)] = (5));

} else {
var statearr_35118_36004 = state_35111__$1;
(statearr_35118_36004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35112 === (15))){
var inst_35068 = (state_35111[(7)]);
var inst_35099 = cljs.core.vec(inst_35068);
var state_35111__$1 = state_35111;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35111__$1,(18),out,inst_35099);
} else {
if((state_val_35112 === (13))){
var inst_35094 = (state_35111[(2)]);
var state_35111__$1 = state_35111;
var statearr_35119_36005 = state_35111__$1;
(statearr_35119_36005[(2)] = inst_35094);

(statearr_35119_36005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35112 === (6))){
var inst_35068 = (state_35111[(7)]);
var inst_35096 = inst_35068.length;
var inst_35097 = (inst_35096 > (0));
var state_35111__$1 = state_35111;
if(cljs.core.truth_(inst_35097)){
var statearr_35120_36007 = state_35111__$1;
(statearr_35120_36007[(1)] = (15));

} else {
var statearr_35121_36008 = state_35111__$1;
(statearr_35121_36008[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35112 === (17))){
var inst_35104 = (state_35111[(2)]);
var inst_35105 = cljs.core.async.close_BANG_(out);
var state_35111__$1 = (function (){var statearr_35122 = state_35111;
(statearr_35122[(10)] = inst_35104);

return statearr_35122;
})();
var statearr_35123_36012 = state_35111__$1;
(statearr_35123_36012[(2)] = inst_35105);

(statearr_35123_36012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35112 === (3))){
var inst_35109 = (state_35111[(2)]);
var state_35111__$1 = state_35111;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35111__$1,inst_35109);
} else {
if((state_val_35112 === (12))){
var inst_35068 = (state_35111[(7)]);
var inst_35087 = cljs.core.vec(inst_35068);
var state_35111__$1 = state_35111;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35111__$1,(14),out,inst_35087);
} else {
if((state_val_35112 === (2))){
var state_35111__$1 = state_35111;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35111__$1,(4),ch);
} else {
if((state_val_35112 === (11))){
var inst_35076 = (state_35111[(11)]);
var inst_35072 = (state_35111[(9)]);
var inst_35068 = (state_35111[(7)]);
var inst_35084 = inst_35068.push(inst_35072);
var tmp35124 = inst_35068;
var inst_35068__$1 = tmp35124;
var inst_35069 = inst_35076;
var state_35111__$1 = (function (){var statearr_35125 = state_35111;
(statearr_35125[(12)] = inst_35084);

(statearr_35125[(7)] = inst_35068__$1);

(statearr_35125[(8)] = inst_35069);

return statearr_35125;
})();
var statearr_35126_36014 = state_35111__$1;
(statearr_35126_36014[(2)] = null);

(statearr_35126_36014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35112 === (9))){
var inst_35069 = (state_35111[(8)]);
var inst_35080 = cljs.core.keyword_identical_QMARK_(inst_35069,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_35111__$1 = state_35111;
var statearr_35129_36015 = state_35111__$1;
(statearr_35129_36015[(2)] = inst_35080);

(statearr_35129_36015[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35112 === (5))){
var inst_35076 = (state_35111[(11)]);
var inst_35077 = (state_35111[(13)]);
var inst_35072 = (state_35111[(9)]);
var inst_35069 = (state_35111[(8)]);
var inst_35076__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35072) : f.call(null,inst_35072));
var inst_35077__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35076__$1,inst_35069);
var state_35111__$1 = (function (){var statearr_35131 = state_35111;
(statearr_35131[(11)] = inst_35076__$1);

(statearr_35131[(13)] = inst_35077__$1);

return statearr_35131;
})();
if(inst_35077__$1){
var statearr_35133_36016 = state_35111__$1;
(statearr_35133_36016[(1)] = (8));

} else {
var statearr_35134_36017 = state_35111__$1;
(statearr_35134_36017[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35112 === (14))){
var inst_35076 = (state_35111[(11)]);
var inst_35072 = (state_35111[(9)]);
var inst_35089 = (state_35111[(2)]);
var inst_35090 = [];
var inst_35091 = inst_35090.push(inst_35072);
var inst_35068 = inst_35090;
var inst_35069 = inst_35076;
var state_35111__$1 = (function (){var statearr_35136 = state_35111;
(statearr_35136[(7)] = inst_35068);

(statearr_35136[(14)] = inst_35089);

(statearr_35136[(8)] = inst_35069);

(statearr_35136[(15)] = inst_35091);

return statearr_35136;
})();
var statearr_35137_36018 = state_35111__$1;
(statearr_35137_36018[(2)] = null);

(statearr_35137_36018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35112 === (16))){
var state_35111__$1 = state_35111;
var statearr_35139_36019 = state_35111__$1;
(statearr_35139_36019[(2)] = null);

(statearr_35139_36019[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35112 === (10))){
var inst_35082 = (state_35111[(2)]);
var state_35111__$1 = state_35111;
if(cljs.core.truth_(inst_35082)){
var statearr_35140_36020 = state_35111__$1;
(statearr_35140_36020[(1)] = (11));

} else {
var statearr_35141_36021 = state_35111__$1;
(statearr_35141_36021[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35112 === (18))){
var inst_35101 = (state_35111[(2)]);
var state_35111__$1 = state_35111;
var statearr_35142_36022 = state_35111__$1;
(statearr_35142_36022[(2)] = inst_35101);

(statearr_35142_36022[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35112 === (8))){
var inst_35077 = (state_35111[(13)]);
var state_35111__$1 = state_35111;
var statearr_35145_36023 = state_35111__$1;
(statearr_35145_36023[(2)] = inst_35077);

(statearr_35145_36023[(1)] = (10));


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
var cljs$core$async$state_machine__32680__auto__ = null;
var cljs$core$async$state_machine__32680__auto____0 = (function (){
var statearr_35146 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35146[(0)] = cljs$core$async$state_machine__32680__auto__);

(statearr_35146[(1)] = (1));

return statearr_35146;
});
var cljs$core$async$state_machine__32680__auto____1 = (function (state_35111){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_35111);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e35147){var ex__32683__auto__ = e35147;
var statearr_35148_36024 = state_35111;
(statearr_35148_36024[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_35111[(4)]))){
var statearr_35149_36025 = state_35111;
(statearr_35149_36025[(1)] = cljs.core.first((state_35111[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36026 = state_35111;
state_35111 = G__36026;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
cljs$core$async$state_machine__32680__auto__ = function(state_35111){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32680__auto____1.call(this,state_35111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32680__auto____0;
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32680__auto____1;
return cljs$core$async$state_machine__32680__auto__;
})()
})();
var state__32880__auto__ = (function (){var statearr_35150 = f__32879__auto__();
(statearr_35150[(6)] = c__32878__auto___35998);

return statearr_35150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32880__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
