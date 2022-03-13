goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__33108,res){
var map__33110 = p__33108;
var map__33110__$1 = cljs.core.__destructure_map(map__33110);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33110__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33110__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__33111 = res;
var G__33111__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33111,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__33111);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33111__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__33111__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__33128 = arguments.length;
switch (G__33128) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__33131,msg,handlers,timeout_after_ms){
var map__33133 = p__33131;
var map__33133__$1 = cljs.core.__destructure_map(map__33133);
var runtime = map__33133__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33133__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___33440 = arguments.length;
var i__4865__auto___33441 = (0);
while(true){
if((i__4865__auto___33441 < len__4864__auto___33440)){
args__4870__auto__.push((arguments[i__4865__auto___33441]));

var G__33442 = (i__4865__auto___33441 + (1));
i__4865__auto___33441 = G__33442;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__33167,ev,args){
var map__33168 = p__33167;
var map__33168__$1 = cljs.core.__destructure_map(map__33168);
var runtime = map__33168__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33168__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__33171 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33174 = null;
var count__33175 = (0);
var i__33176 = (0);
while(true){
if((i__33176 < count__33175)){
var ext = chunk__33174.cljs$core$IIndexed$_nth$arity$2(null,i__33176);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33445 = seq__33171;
var G__33446 = chunk__33174;
var G__33447 = count__33175;
var G__33448 = (i__33176 + (1));
seq__33171 = G__33445;
chunk__33174 = G__33446;
count__33175 = G__33447;
i__33176 = G__33448;
continue;
} else {
var G__33449 = seq__33171;
var G__33450 = chunk__33174;
var G__33451 = count__33175;
var G__33452 = (i__33176 + (1));
seq__33171 = G__33449;
chunk__33174 = G__33450;
count__33175 = G__33451;
i__33176 = G__33452;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33171);
if(temp__5753__auto__){
var seq__33171__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33171__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33171__$1);
var G__33453 = cljs.core.chunk_rest(seq__33171__$1);
var G__33454 = c__4679__auto__;
var G__33455 = cljs.core.count(c__4679__auto__);
var G__33456 = (0);
seq__33171 = G__33453;
chunk__33174 = G__33454;
count__33175 = G__33455;
i__33176 = G__33456;
continue;
} else {
var ext = cljs.core.first(seq__33171__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33457 = cljs.core.next(seq__33171__$1);
var G__33458 = null;
var G__33459 = (0);
var G__33460 = (0);
seq__33171 = G__33457;
chunk__33174 = G__33458;
count__33175 = G__33459;
i__33176 = G__33460;
continue;
} else {
var G__33461 = cljs.core.next(seq__33171__$1);
var G__33462 = null;
var G__33463 = (0);
var G__33464 = (0);
seq__33171 = G__33461;
chunk__33174 = G__33462;
count__33175 = G__33463;
i__33176 = G__33464;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq33160){
var G__33161 = cljs.core.first(seq33160);
var seq33160__$1 = cljs.core.next(seq33160);
var G__33162 = cljs.core.first(seq33160__$1);
var seq33160__$2 = cljs.core.next(seq33160__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33161,G__33162,seq33160__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__33248,p__33249){
var map__33250 = p__33248;
var map__33250__$1 = cljs.core.__destructure_map(map__33250);
var runtime = map__33250__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33250__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33251 = p__33249;
var map__33251__$1 = cljs.core.__destructure_map(map__33251);
var msg = map__33251__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33251__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__33252 = cljs.core.deref(state_ref);
var map__33252__$1 = cljs.core.__destructure_map(map__33252);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33252__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33252__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__33297){
var map__33300 = p__33297;
var map__33300__$1 = cljs.core.__destructure_map(map__33300);
var runtime = map__33300__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33300__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__33302,msg){
var map__33303 = p__33302;
var map__33303__$1 = cljs.core.__destructure_map(map__33303);
var runtime = map__33303__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33303__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__33319,key,p__33320){
var map__33322 = p__33319;
var map__33322__$1 = cljs.core.__destructure_map(map__33322);
var state = map__33322__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33322__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__33323 = p__33320;
var map__33323__$1 = cljs.core.__destructure_map(map__33323);
var spec = map__33323__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33323__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__33335,key,spec){
var map__33336 = p__33335;
var map__33336__$1 = cljs.core.__destructure_map(map__33336);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33336__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__33338_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__33338_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__33339_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__33339_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__33340_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__33340_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__33341_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__33341_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__33343_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__33343_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__33387,key){
var map__33388 = p__33387;
var map__33388__$1 = cljs.core.__destructure_map(map__33388);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33388__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__33394,msg){
var map__33396 = p__33394;
var map__33396__$1 = cljs.core.__destructure_map(map__33396);
var runtime = map__33396__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33396__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__33402,p__33403){
var map__33404 = p__33402;
var map__33404__$1 = cljs.core.__destructure_map(map__33404);
var runtime = map__33404__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33404__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33406 = p__33403;
var map__33406__$1 = cljs.core.__destructure_map(map__33406);
var msg = map__33406__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33406__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33406__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__33413 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33415 = null;
var count__33416 = (0);
var i__33417 = (0);
while(true){
if((i__33417 < count__33416)){
var map__33426 = chunk__33415.cljs$core$IIndexed$_nth$arity$2(null,i__33417);
var map__33426__$1 = cljs.core.__destructure_map(map__33426);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33426__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33472 = seq__33413;
var G__33473 = chunk__33415;
var G__33474 = count__33416;
var G__33475 = (i__33417 + (1));
seq__33413 = G__33472;
chunk__33415 = G__33473;
count__33416 = G__33474;
i__33417 = G__33475;
continue;
} else {
var G__33476 = seq__33413;
var G__33478 = chunk__33415;
var G__33479 = count__33416;
var G__33480 = (i__33417 + (1));
seq__33413 = G__33476;
chunk__33415 = G__33478;
count__33416 = G__33479;
i__33417 = G__33480;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33413);
if(temp__5753__auto__){
var seq__33413__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33413__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33413__$1);
var G__33489 = cljs.core.chunk_rest(seq__33413__$1);
var G__33490 = c__4679__auto__;
var G__33491 = cljs.core.count(c__4679__auto__);
var G__33492 = (0);
seq__33413 = G__33489;
chunk__33415 = G__33490;
count__33416 = G__33491;
i__33417 = G__33492;
continue;
} else {
var map__33429 = cljs.core.first(seq__33413__$1);
var map__33429__$1 = cljs.core.__destructure_map(map__33429);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33429__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33510 = cljs.core.next(seq__33413__$1);
var G__33511 = null;
var G__33512 = (0);
var G__33513 = (0);
seq__33413 = G__33510;
chunk__33415 = G__33511;
count__33416 = G__33512;
i__33417 = G__33513;
continue;
} else {
var G__33515 = cljs.core.next(seq__33413__$1);
var G__33516 = null;
var G__33517 = (0);
var G__33518 = (0);
seq__33413 = G__33515;
chunk__33415 = G__33516;
count__33416 = G__33517;
i__33417 = G__33518;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
