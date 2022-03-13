goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_36412 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_36412(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_36413 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_36413(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__35221 = coll;
var G__35222 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__35221,G__35222) : shadow.dom.lazy_native_coll_seq.call(null,G__35221,G__35222));
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
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
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

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
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
var G__35236 = arguments.length;
switch (G__35236) {
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
var G__35245 = arguments.length;
switch (G__35245) {
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
var G__35257 = arguments.length;
switch (G__35257) {
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
var G__35269 = arguments.length;
switch (G__35269) {
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
var G__35298 = arguments.length;
switch (G__35298) {
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
var G__35313 = arguments.length;
switch (G__35313) {
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

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e35325){if((e35325 instanceof Object)){
var e = e35325;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35325;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__35333 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35334 = null;
var count__35335 = (0);
var i__35336 = (0);
while(true){
if((i__35336 < count__35335)){
var el = chunk__35334.cljs$core$IIndexed$_nth$arity$2(null,i__35336);
var handler_36438__$1 = ((function (seq__35333,chunk__35334,count__35335,i__35336,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35333,chunk__35334,count__35335,i__35336,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36438__$1);


var G__36440 = seq__35333;
var G__36441 = chunk__35334;
var G__36442 = count__35335;
var G__36443 = (i__35336 + (1));
seq__35333 = G__36440;
chunk__35334 = G__36441;
count__35335 = G__36442;
i__35336 = G__36443;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35333);
if(temp__5753__auto__){
var seq__35333__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35333__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35333__$1);
var G__36444 = cljs.core.chunk_rest(seq__35333__$1);
var G__36445 = c__4679__auto__;
var G__36446 = cljs.core.count(c__4679__auto__);
var G__36447 = (0);
seq__35333 = G__36444;
chunk__35334 = G__36445;
count__35335 = G__36446;
i__35336 = G__36447;
continue;
} else {
var el = cljs.core.first(seq__35333__$1);
var handler_36448__$1 = ((function (seq__35333,chunk__35334,count__35335,i__35336,el,seq__35333__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35333,chunk__35334,count__35335,i__35336,el,seq__35333__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36448__$1);


var G__36450 = cljs.core.next(seq__35333__$1);
var G__36451 = null;
var G__36452 = (0);
var G__36453 = (0);
seq__35333 = G__36450;
chunk__35334 = G__36451;
count__35335 = G__36452;
i__35336 = G__36453;
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
var G__35361 = arguments.length;
switch (G__35361) {
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
var seq__35373 = cljs.core.seq(events);
var chunk__35374 = null;
var count__35375 = (0);
var i__35376 = (0);
while(true){
if((i__35376 < count__35375)){
var vec__35396 = chunk__35374.cljs$core$IIndexed$_nth$arity$2(null,i__35376);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35396,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35396,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36456 = seq__35373;
var G__36457 = chunk__35374;
var G__36458 = count__35375;
var G__36459 = (i__35376 + (1));
seq__35373 = G__36456;
chunk__35374 = G__36457;
count__35375 = G__36458;
i__35376 = G__36459;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35373);
if(temp__5753__auto__){
var seq__35373__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35373__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35373__$1);
var G__36460 = cljs.core.chunk_rest(seq__35373__$1);
var G__36461 = c__4679__auto__;
var G__36462 = cljs.core.count(c__4679__auto__);
var G__36463 = (0);
seq__35373 = G__36460;
chunk__35374 = G__36461;
count__35375 = G__36462;
i__35376 = G__36463;
continue;
} else {
var vec__35403 = cljs.core.first(seq__35373__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35403,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35403,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36464 = cljs.core.next(seq__35373__$1);
var G__36465 = null;
var G__36466 = (0);
var G__36467 = (0);
seq__35373 = G__36464;
chunk__35374 = G__36465;
count__35375 = G__36466;
i__35376 = G__36467;
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
var seq__35419 = cljs.core.seq(styles);
var chunk__35420 = null;
var count__35421 = (0);
var i__35422 = (0);
while(true){
if((i__35422 < count__35421)){
var vec__35457 = chunk__35420.cljs$core$IIndexed$_nth$arity$2(null,i__35422);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35457,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35457,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36468 = seq__35419;
var G__36469 = chunk__35420;
var G__36470 = count__35421;
var G__36471 = (i__35422 + (1));
seq__35419 = G__36468;
chunk__35420 = G__36469;
count__35421 = G__36470;
i__35422 = G__36471;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35419);
if(temp__5753__auto__){
var seq__35419__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35419__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35419__$1);
var G__36472 = cljs.core.chunk_rest(seq__35419__$1);
var G__36473 = c__4679__auto__;
var G__36474 = cljs.core.count(c__4679__auto__);
var G__36475 = (0);
seq__35419 = G__36472;
chunk__35420 = G__36473;
count__35421 = G__36474;
i__35422 = G__36475;
continue;
} else {
var vec__35463 = cljs.core.first(seq__35419__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35463,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35463,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36476 = cljs.core.next(seq__35419__$1);
var G__36477 = null;
var G__36478 = (0);
var G__36479 = (0);
seq__35419 = G__36476;
chunk__35420 = G__36477;
count__35421 = G__36478;
i__35422 = G__36479;
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
var G__35482_36480 = key;
var G__35482_36481__$1 = (((G__35482_36480 instanceof cljs.core.Keyword))?G__35482_36480.fqn:null);
switch (G__35482_36481__$1) {
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
var ks_36483 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_36483,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_36483,"aria-");
}
})())){
el.setAttribute(ks_36483,value);
} else {
(el[ks_36483] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35508){
var map__35509 = p__35508;
var map__35509__$1 = cljs.core.__destructure_map(map__35509);
var props = map__35509__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35509__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35513 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35513,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35513,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35513,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35519 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35519,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35519;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35527 = arguments.length;
switch (G__35527) {
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
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
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
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35544){
var vec__35546 = p__35544;
var seq__35547 = cljs.core.seq(vec__35546);
var first__35548 = cljs.core.first(seq__35547);
var seq__35547__$1 = cljs.core.next(seq__35547);
var nn = first__35548;
var first__35548__$1 = cljs.core.first(seq__35547__$1);
var seq__35547__$2 = cljs.core.next(seq__35547__$1);
var np = first__35548__$1;
var nc = seq__35547__$2;
var node = vec__35546;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35553 = nn;
var G__35554 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35553,G__35554) : create_fn.call(null,G__35553,G__35554));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35559 = nn;
var G__35560 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35559,G__35560) : create_fn.call(null,G__35559,G__35560));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35565 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35565,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35565,(1),null);
var seq__35570_36497 = cljs.core.seq(node_children);
var chunk__35571_36498 = null;
var count__35572_36499 = (0);
var i__35573_36500 = (0);
while(true){
if((i__35573_36500 < count__35572_36499)){
var child_struct_36502 = chunk__35571_36498.cljs$core$IIndexed$_nth$arity$2(null,i__35573_36500);
var children_36503 = shadow.dom.dom_node(child_struct_36502);
if(cljs.core.seq_QMARK_(children_36503)){
var seq__35648_36505 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36503));
var chunk__35650_36506 = null;
var count__35651_36507 = (0);
var i__35652_36508 = (0);
while(true){
if((i__35652_36508 < count__35651_36507)){
var child_36509 = chunk__35650_36506.cljs$core$IIndexed$_nth$arity$2(null,i__35652_36508);
if(cljs.core.truth_(child_36509)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36509);


var G__36510 = seq__35648_36505;
var G__36511 = chunk__35650_36506;
var G__36512 = count__35651_36507;
var G__36513 = (i__35652_36508 + (1));
seq__35648_36505 = G__36510;
chunk__35650_36506 = G__36511;
count__35651_36507 = G__36512;
i__35652_36508 = G__36513;
continue;
} else {
var G__36514 = seq__35648_36505;
var G__36515 = chunk__35650_36506;
var G__36516 = count__35651_36507;
var G__36517 = (i__35652_36508 + (1));
seq__35648_36505 = G__36514;
chunk__35650_36506 = G__36515;
count__35651_36507 = G__36516;
i__35652_36508 = G__36517;
continue;
}
} else {
var temp__5753__auto___36518 = cljs.core.seq(seq__35648_36505);
if(temp__5753__auto___36518){
var seq__35648_36519__$1 = temp__5753__auto___36518;
if(cljs.core.chunked_seq_QMARK_(seq__35648_36519__$1)){
var c__4679__auto___36520 = cljs.core.chunk_first(seq__35648_36519__$1);
var G__36521 = cljs.core.chunk_rest(seq__35648_36519__$1);
var G__36522 = c__4679__auto___36520;
var G__36523 = cljs.core.count(c__4679__auto___36520);
var G__36524 = (0);
seq__35648_36505 = G__36521;
chunk__35650_36506 = G__36522;
count__35651_36507 = G__36523;
i__35652_36508 = G__36524;
continue;
} else {
var child_36525 = cljs.core.first(seq__35648_36519__$1);
if(cljs.core.truth_(child_36525)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36525);


var G__36526 = cljs.core.next(seq__35648_36519__$1);
var G__36527 = null;
var G__36528 = (0);
var G__36529 = (0);
seq__35648_36505 = G__36526;
chunk__35650_36506 = G__36527;
count__35651_36507 = G__36528;
i__35652_36508 = G__36529;
continue;
} else {
var G__36530 = cljs.core.next(seq__35648_36519__$1);
var G__36531 = null;
var G__36532 = (0);
var G__36533 = (0);
seq__35648_36505 = G__36530;
chunk__35650_36506 = G__36531;
count__35651_36507 = G__36532;
i__35652_36508 = G__36533;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36503);
}


var G__36534 = seq__35570_36497;
var G__36535 = chunk__35571_36498;
var G__36536 = count__35572_36499;
var G__36537 = (i__35573_36500 + (1));
seq__35570_36497 = G__36534;
chunk__35571_36498 = G__36535;
count__35572_36499 = G__36536;
i__35573_36500 = G__36537;
continue;
} else {
var temp__5753__auto___36538 = cljs.core.seq(seq__35570_36497);
if(temp__5753__auto___36538){
var seq__35570_36539__$1 = temp__5753__auto___36538;
if(cljs.core.chunked_seq_QMARK_(seq__35570_36539__$1)){
var c__4679__auto___36541 = cljs.core.chunk_first(seq__35570_36539__$1);
var G__36542 = cljs.core.chunk_rest(seq__35570_36539__$1);
var G__36543 = c__4679__auto___36541;
var G__36544 = cljs.core.count(c__4679__auto___36541);
var G__36545 = (0);
seq__35570_36497 = G__36542;
chunk__35571_36498 = G__36543;
count__35572_36499 = G__36544;
i__35573_36500 = G__36545;
continue;
} else {
var child_struct_36547 = cljs.core.first(seq__35570_36539__$1);
var children_36548 = shadow.dom.dom_node(child_struct_36547);
if(cljs.core.seq_QMARK_(children_36548)){
var seq__35656_36549 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36548));
var chunk__35658_36550 = null;
var count__35659_36551 = (0);
var i__35660_36553 = (0);
while(true){
if((i__35660_36553 < count__35659_36551)){
var child_36555 = chunk__35658_36550.cljs$core$IIndexed$_nth$arity$2(null,i__35660_36553);
if(cljs.core.truth_(child_36555)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36555);


var G__36556 = seq__35656_36549;
var G__36557 = chunk__35658_36550;
var G__36558 = count__35659_36551;
var G__36559 = (i__35660_36553 + (1));
seq__35656_36549 = G__36556;
chunk__35658_36550 = G__36557;
count__35659_36551 = G__36558;
i__35660_36553 = G__36559;
continue;
} else {
var G__36560 = seq__35656_36549;
var G__36561 = chunk__35658_36550;
var G__36562 = count__35659_36551;
var G__36563 = (i__35660_36553 + (1));
seq__35656_36549 = G__36560;
chunk__35658_36550 = G__36561;
count__35659_36551 = G__36562;
i__35660_36553 = G__36563;
continue;
}
} else {
var temp__5753__auto___36564__$1 = cljs.core.seq(seq__35656_36549);
if(temp__5753__auto___36564__$1){
var seq__35656_36565__$1 = temp__5753__auto___36564__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35656_36565__$1)){
var c__4679__auto___36566 = cljs.core.chunk_first(seq__35656_36565__$1);
var G__36567 = cljs.core.chunk_rest(seq__35656_36565__$1);
var G__36568 = c__4679__auto___36566;
var G__36569 = cljs.core.count(c__4679__auto___36566);
var G__36570 = (0);
seq__35656_36549 = G__36567;
chunk__35658_36550 = G__36568;
count__35659_36551 = G__36569;
i__35660_36553 = G__36570;
continue;
} else {
var child_36571 = cljs.core.first(seq__35656_36565__$1);
if(cljs.core.truth_(child_36571)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36571);


var G__36572 = cljs.core.next(seq__35656_36565__$1);
var G__36573 = null;
var G__36574 = (0);
var G__36575 = (0);
seq__35656_36549 = G__36572;
chunk__35658_36550 = G__36573;
count__35659_36551 = G__36574;
i__35660_36553 = G__36575;
continue;
} else {
var G__36576 = cljs.core.next(seq__35656_36565__$1);
var G__36577 = null;
var G__36578 = (0);
var G__36579 = (0);
seq__35656_36549 = G__36576;
chunk__35658_36550 = G__36577;
count__35659_36551 = G__36578;
i__35660_36553 = G__36579;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36548);
}


var G__36580 = cljs.core.next(seq__35570_36539__$1);
var G__36581 = null;
var G__36582 = (0);
var G__36583 = (0);
seq__35570_36497 = G__36580;
chunk__35571_36498 = G__36581;
count__35572_36499 = G__36582;
i__35573_36500 = G__36583;
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
var seq__35714 = cljs.core.seq(node);
var chunk__35715 = null;
var count__35716 = (0);
var i__35717 = (0);
while(true){
if((i__35717 < count__35716)){
var n = chunk__35715.cljs$core$IIndexed$_nth$arity$2(null,i__35717);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36586 = seq__35714;
var G__36587 = chunk__35715;
var G__36588 = count__35716;
var G__36589 = (i__35717 + (1));
seq__35714 = G__36586;
chunk__35715 = G__36587;
count__35716 = G__36588;
i__35717 = G__36589;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35714);
if(temp__5753__auto__){
var seq__35714__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35714__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35714__$1);
var G__36590 = cljs.core.chunk_rest(seq__35714__$1);
var G__36591 = c__4679__auto__;
var G__36592 = cljs.core.count(c__4679__auto__);
var G__36593 = (0);
seq__35714 = G__36590;
chunk__35715 = G__36591;
count__35716 = G__36592;
i__35717 = G__36593;
continue;
} else {
var n = cljs.core.first(seq__35714__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36594 = cljs.core.next(seq__35714__$1);
var G__36595 = null;
var G__36596 = (0);
var G__36597 = (0);
seq__35714 = G__36594;
chunk__35715 = G__36595;
count__35716 = G__36596;
i__35717 = G__36597;
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
var G__35739 = arguments.length;
switch (G__35739) {
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
var G__35741 = arguments.length;
switch (G__35741) {
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
var G__35770 = arguments.length;
switch (G__35770) {
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
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
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
var args__4870__auto__ = [];
var len__4864__auto___36603 = arguments.length;
var i__4865__auto___36604 = (0);
while(true){
if((i__4865__auto___36604 < len__4864__auto___36603)){
args__4870__auto__.push((arguments[i__4865__auto___36604]));

var G__36605 = (i__4865__auto___36604 + (1));
i__4865__auto___36604 = G__36605;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35783_36606 = cljs.core.seq(nodes);
var chunk__35784_36607 = null;
var count__35785_36608 = (0);
var i__35786_36609 = (0);
while(true){
if((i__35786_36609 < count__35785_36608)){
var node_36610 = chunk__35784_36607.cljs$core$IIndexed$_nth$arity$2(null,i__35786_36609);
fragment.appendChild(shadow.dom._to_dom(node_36610));


var G__36611 = seq__35783_36606;
var G__36612 = chunk__35784_36607;
var G__36613 = count__35785_36608;
var G__36614 = (i__35786_36609 + (1));
seq__35783_36606 = G__36611;
chunk__35784_36607 = G__36612;
count__35785_36608 = G__36613;
i__35786_36609 = G__36614;
continue;
} else {
var temp__5753__auto___36615 = cljs.core.seq(seq__35783_36606);
if(temp__5753__auto___36615){
var seq__35783_36616__$1 = temp__5753__auto___36615;
if(cljs.core.chunked_seq_QMARK_(seq__35783_36616__$1)){
var c__4679__auto___36617 = cljs.core.chunk_first(seq__35783_36616__$1);
var G__36618 = cljs.core.chunk_rest(seq__35783_36616__$1);
var G__36619 = c__4679__auto___36617;
var G__36620 = cljs.core.count(c__4679__auto___36617);
var G__36621 = (0);
seq__35783_36606 = G__36618;
chunk__35784_36607 = G__36619;
count__35785_36608 = G__36620;
i__35786_36609 = G__36621;
continue;
} else {
var node_36623 = cljs.core.first(seq__35783_36616__$1);
fragment.appendChild(shadow.dom._to_dom(node_36623));


var G__36625 = cljs.core.next(seq__35783_36616__$1);
var G__36626 = null;
var G__36627 = (0);
var G__36628 = (0);
seq__35783_36606 = G__36625;
chunk__35784_36607 = G__36626;
count__35785_36608 = G__36627;
i__35786_36609 = G__36628;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35781){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35781));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35799_36629 = cljs.core.seq(scripts);
var chunk__35800_36630 = null;
var count__35801_36631 = (0);
var i__35802_36632 = (0);
while(true){
if((i__35802_36632 < count__35801_36631)){
var vec__35817_36633 = chunk__35800_36630.cljs$core$IIndexed$_nth$arity$2(null,i__35802_36632);
var script_tag_36634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35817_36633,(0),null);
var script_body_36635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35817_36633,(1),null);
eval(script_body_36635);


var G__36637 = seq__35799_36629;
var G__36638 = chunk__35800_36630;
var G__36639 = count__35801_36631;
var G__36640 = (i__35802_36632 + (1));
seq__35799_36629 = G__36637;
chunk__35800_36630 = G__36638;
count__35801_36631 = G__36639;
i__35802_36632 = G__36640;
continue;
} else {
var temp__5753__auto___36641 = cljs.core.seq(seq__35799_36629);
if(temp__5753__auto___36641){
var seq__35799_36642__$1 = temp__5753__auto___36641;
if(cljs.core.chunked_seq_QMARK_(seq__35799_36642__$1)){
var c__4679__auto___36643 = cljs.core.chunk_first(seq__35799_36642__$1);
var G__36644 = cljs.core.chunk_rest(seq__35799_36642__$1);
var G__36645 = c__4679__auto___36643;
var G__36646 = cljs.core.count(c__4679__auto___36643);
var G__36647 = (0);
seq__35799_36629 = G__36644;
chunk__35800_36630 = G__36645;
count__35801_36631 = G__36646;
i__35802_36632 = G__36647;
continue;
} else {
var vec__35827_36648 = cljs.core.first(seq__35799_36642__$1);
var script_tag_36649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35827_36648,(0),null);
var script_body_36650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35827_36648,(1),null);
eval(script_body_36650);


var G__36652 = cljs.core.next(seq__35799_36642__$1);
var G__36653 = null;
var G__36654 = (0);
var G__36655 = (0);
seq__35799_36629 = G__36652;
chunk__35800_36630 = G__36653;
count__35801_36631 = G__36654;
i__35802_36632 = G__36655;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35832){
var vec__35833 = p__35832;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35833,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35833,(1),null);
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
var G__35852 = arguments.length;
switch (G__35852) {
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
var seq__35876 = cljs.core.seq(style_keys);
var chunk__35877 = null;
var count__35878 = (0);
var i__35879 = (0);
while(true){
if((i__35879 < count__35878)){
var it = chunk__35877.cljs$core$IIndexed$_nth$arity$2(null,i__35879);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36661 = seq__35876;
var G__36662 = chunk__35877;
var G__36663 = count__35878;
var G__36664 = (i__35879 + (1));
seq__35876 = G__36661;
chunk__35877 = G__36662;
count__35878 = G__36663;
i__35879 = G__36664;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35876);
if(temp__5753__auto__){
var seq__35876__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35876__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35876__$1);
var G__36666 = cljs.core.chunk_rest(seq__35876__$1);
var G__36667 = c__4679__auto__;
var G__36668 = cljs.core.count(c__4679__auto__);
var G__36669 = (0);
seq__35876 = G__36666;
chunk__35877 = G__36667;
count__35878 = G__36668;
i__35879 = G__36669;
continue;
} else {
var it = cljs.core.first(seq__35876__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36670 = cljs.core.next(seq__35876__$1);
var G__36671 = null;
var G__36672 = (0);
var G__36673 = (0);
seq__35876 = G__36670;
chunk__35877 = G__36671;
count__35878 = G__36672;
i__35879 = G__36673;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k35883,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__35888 = k35883;
var G__35888__$1 = (((G__35888 instanceof cljs.core.Keyword))?G__35888.fqn:null);
switch (G__35888__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35883,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__35892){
var vec__35893 = p__35892;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35893,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35893,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35882){
var self__ = this;
var G__35882__$1 = this;
return (new cljs.core.RecordIter((0),G__35882__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35884,other35885){
var self__ = this;
var this35884__$1 = this;
return (((!((other35885 == null)))) && ((((this35884__$1.constructor === other35885.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35884__$1.x,other35885.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35884__$1.y,other35885.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35884__$1.__extmap,other35885.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k35883){
var self__ = this;
var this__4509__auto____$1 = this;
var G__35922 = k35883;
var G__35922__$1 = (((G__35922 instanceof cljs.core.Keyword))?G__35922.fqn:null);
switch (G__35922__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35883);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__35882){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__35925 = cljs.core.keyword_identical_QMARK_;
var expr__35926 = k__4511__auto__;
if(cljs.core.truth_((pred__35925.cljs$core$IFn$_invoke$arity$2 ? pred__35925.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__35926) : pred__35925.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__35926)))){
return (new shadow.dom.Coordinate(G__35882,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35925.cljs$core$IFn$_invoke$arity$2 ? pred__35925.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35926) : pred__35925.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__35926)))){
return (new shadow.dom.Coordinate(self__.x,G__35882,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__35882),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__35882){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35882,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35886){
var extmap__4542__auto__ = (function (){var G__35940 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35886,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35886)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35940);
} else {
return G__35940;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35886),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35886),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k35950,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__35966 = k35950;
var G__35966__$1 = (((G__35966 instanceof cljs.core.Keyword))?G__35966.fqn:null);
switch (G__35966__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35950,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__35971){
var vec__35972 = p__35971;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35972,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35972,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35949){
var self__ = this;
var G__35949__$1 = this;
return (new cljs.core.RecordIter((0),G__35949__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35951,other35952){
var self__ = this;
var this35951__$1 = this;
return (((!((other35952 == null)))) && ((((this35951__$1.constructor === other35952.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35951__$1.w,other35952.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35951__$1.h,other35952.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35951__$1.__extmap,other35952.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k35950){
var self__ = this;
var this__4509__auto____$1 = this;
var G__36001 = k35950;
var G__36001__$1 = (((G__36001 instanceof cljs.core.Keyword))?G__36001.fqn:null);
switch (G__36001__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35950);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__35949){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__36009 = cljs.core.keyword_identical_QMARK_;
var expr__36010 = k__4511__auto__;
if(cljs.core.truth_((pred__36009.cljs$core$IFn$_invoke$arity$2 ? pred__36009.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__36010) : pred__36009.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__36010)))){
return (new shadow.dom.Size(G__35949,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36009.cljs$core$IFn$_invoke$arity$2 ? pred__36009.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__36010) : pred__36009.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__36010)))){
return (new shadow.dom.Size(self__.w,G__35949,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__35949),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__35949){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35949,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35954){
var extmap__4542__auto__ = (function (){var G__36027 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35954,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35954)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36027);
} else {
return G__36027;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35954),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35954),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__36716 = (i + (1));
var G__36717 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36716;
ret = G__36717;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36032){
var vec__36033 = p__36032;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36033,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36033,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__36045 = arguments.length;
switch (G__36045) {
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
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
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
var G__36724 = ps;
var G__36725 = (i + (1));
el__$1 = G__36724;
i = G__36725;
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
var vec__36058 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36058,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36058,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36058,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__36066_36728 = cljs.core.seq(props);
var chunk__36067_36729 = null;
var count__36068_36730 = (0);
var i__36069_36731 = (0);
while(true){
if((i__36069_36731 < count__36068_36730)){
var vec__36089_36732 = chunk__36067_36729.cljs$core$IIndexed$_nth$arity$2(null,i__36069_36731);
var k_36733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36089_36732,(0),null);
var v_36734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36089_36732,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_36733);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36733),v_36734);


var G__36737 = seq__36066_36728;
var G__36738 = chunk__36067_36729;
var G__36739 = count__36068_36730;
var G__36740 = (i__36069_36731 + (1));
seq__36066_36728 = G__36737;
chunk__36067_36729 = G__36738;
count__36068_36730 = G__36739;
i__36069_36731 = G__36740;
continue;
} else {
var temp__5753__auto___36741 = cljs.core.seq(seq__36066_36728);
if(temp__5753__auto___36741){
var seq__36066_36742__$1 = temp__5753__auto___36741;
if(cljs.core.chunked_seq_QMARK_(seq__36066_36742__$1)){
var c__4679__auto___36743 = cljs.core.chunk_first(seq__36066_36742__$1);
var G__36744 = cljs.core.chunk_rest(seq__36066_36742__$1);
var G__36745 = c__4679__auto___36743;
var G__36746 = cljs.core.count(c__4679__auto___36743);
var G__36747 = (0);
seq__36066_36728 = G__36744;
chunk__36067_36729 = G__36745;
count__36068_36730 = G__36746;
i__36069_36731 = G__36747;
continue;
} else {
var vec__36098_36750 = cljs.core.first(seq__36066_36742__$1);
var k_36751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36098_36750,(0),null);
var v_36752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36098_36750,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_36751);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36751),v_36752);


var G__36754 = cljs.core.next(seq__36066_36742__$1);
var G__36755 = null;
var G__36756 = (0);
var G__36757 = (0);
seq__36066_36728 = G__36754;
chunk__36067_36729 = G__36755;
count__36068_36730 = G__36756;
i__36069_36731 = G__36757;
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
var vec__36108 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36108,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36108,(1),null);
var seq__36111_36764 = cljs.core.seq(node_children);
var chunk__36113_36765 = null;
var count__36114_36766 = (0);
var i__36115_36767 = (0);
while(true){
if((i__36115_36767 < count__36114_36766)){
var child_struct_36768 = chunk__36113_36765.cljs$core$IIndexed$_nth$arity$2(null,i__36115_36767);
if((!((child_struct_36768 == null)))){
if(typeof child_struct_36768 === 'string'){
var text_36773 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36773),child_struct_36768].join(''));
} else {
var children_36774 = shadow.dom.svg_node(child_struct_36768);
if(cljs.core.seq_QMARK_(children_36774)){
var seq__36230_36775 = cljs.core.seq(children_36774);
var chunk__36232_36776 = null;
var count__36233_36777 = (0);
var i__36234_36778 = (0);
while(true){
if((i__36234_36778 < count__36233_36777)){
var child_36779 = chunk__36232_36776.cljs$core$IIndexed$_nth$arity$2(null,i__36234_36778);
if(cljs.core.truth_(child_36779)){
node.appendChild(child_36779);


var G__36780 = seq__36230_36775;
var G__36781 = chunk__36232_36776;
var G__36782 = count__36233_36777;
var G__36783 = (i__36234_36778 + (1));
seq__36230_36775 = G__36780;
chunk__36232_36776 = G__36781;
count__36233_36777 = G__36782;
i__36234_36778 = G__36783;
continue;
} else {
var G__36784 = seq__36230_36775;
var G__36785 = chunk__36232_36776;
var G__36786 = count__36233_36777;
var G__36787 = (i__36234_36778 + (1));
seq__36230_36775 = G__36784;
chunk__36232_36776 = G__36785;
count__36233_36777 = G__36786;
i__36234_36778 = G__36787;
continue;
}
} else {
var temp__5753__auto___36788 = cljs.core.seq(seq__36230_36775);
if(temp__5753__auto___36788){
var seq__36230_36789__$1 = temp__5753__auto___36788;
if(cljs.core.chunked_seq_QMARK_(seq__36230_36789__$1)){
var c__4679__auto___36790 = cljs.core.chunk_first(seq__36230_36789__$1);
var G__36791 = cljs.core.chunk_rest(seq__36230_36789__$1);
var G__36792 = c__4679__auto___36790;
var G__36793 = cljs.core.count(c__4679__auto___36790);
var G__36794 = (0);
seq__36230_36775 = G__36791;
chunk__36232_36776 = G__36792;
count__36233_36777 = G__36793;
i__36234_36778 = G__36794;
continue;
} else {
var child_36795 = cljs.core.first(seq__36230_36789__$1);
if(cljs.core.truth_(child_36795)){
node.appendChild(child_36795);


var G__36796 = cljs.core.next(seq__36230_36789__$1);
var G__36797 = null;
var G__36798 = (0);
var G__36799 = (0);
seq__36230_36775 = G__36796;
chunk__36232_36776 = G__36797;
count__36233_36777 = G__36798;
i__36234_36778 = G__36799;
continue;
} else {
var G__36800 = cljs.core.next(seq__36230_36789__$1);
var G__36801 = null;
var G__36802 = (0);
var G__36803 = (0);
seq__36230_36775 = G__36800;
chunk__36232_36776 = G__36801;
count__36233_36777 = G__36802;
i__36234_36778 = G__36803;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36774);
}
}


var G__36804 = seq__36111_36764;
var G__36805 = chunk__36113_36765;
var G__36806 = count__36114_36766;
var G__36807 = (i__36115_36767 + (1));
seq__36111_36764 = G__36804;
chunk__36113_36765 = G__36805;
count__36114_36766 = G__36806;
i__36115_36767 = G__36807;
continue;
} else {
var G__36808 = seq__36111_36764;
var G__36809 = chunk__36113_36765;
var G__36810 = count__36114_36766;
var G__36811 = (i__36115_36767 + (1));
seq__36111_36764 = G__36808;
chunk__36113_36765 = G__36809;
count__36114_36766 = G__36810;
i__36115_36767 = G__36811;
continue;
}
} else {
var temp__5753__auto___36812 = cljs.core.seq(seq__36111_36764);
if(temp__5753__auto___36812){
var seq__36111_36813__$1 = temp__5753__auto___36812;
if(cljs.core.chunked_seq_QMARK_(seq__36111_36813__$1)){
var c__4679__auto___36814 = cljs.core.chunk_first(seq__36111_36813__$1);
var G__36815 = cljs.core.chunk_rest(seq__36111_36813__$1);
var G__36816 = c__4679__auto___36814;
var G__36817 = cljs.core.count(c__4679__auto___36814);
var G__36818 = (0);
seq__36111_36764 = G__36815;
chunk__36113_36765 = G__36816;
count__36114_36766 = G__36817;
i__36115_36767 = G__36818;
continue;
} else {
var child_struct_36819 = cljs.core.first(seq__36111_36813__$1);
if((!((child_struct_36819 == null)))){
if(typeof child_struct_36819 === 'string'){
var text_36820 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36820),child_struct_36819].join(''));
} else {
var children_36821 = shadow.dom.svg_node(child_struct_36819);
if(cljs.core.seq_QMARK_(children_36821)){
var seq__36255_36822 = cljs.core.seq(children_36821);
var chunk__36257_36823 = null;
var count__36258_36824 = (0);
var i__36259_36825 = (0);
while(true){
if((i__36259_36825 < count__36258_36824)){
var child_36826 = chunk__36257_36823.cljs$core$IIndexed$_nth$arity$2(null,i__36259_36825);
if(cljs.core.truth_(child_36826)){
node.appendChild(child_36826);


var G__36827 = seq__36255_36822;
var G__36828 = chunk__36257_36823;
var G__36829 = count__36258_36824;
var G__36830 = (i__36259_36825 + (1));
seq__36255_36822 = G__36827;
chunk__36257_36823 = G__36828;
count__36258_36824 = G__36829;
i__36259_36825 = G__36830;
continue;
} else {
var G__36831 = seq__36255_36822;
var G__36832 = chunk__36257_36823;
var G__36833 = count__36258_36824;
var G__36834 = (i__36259_36825 + (1));
seq__36255_36822 = G__36831;
chunk__36257_36823 = G__36832;
count__36258_36824 = G__36833;
i__36259_36825 = G__36834;
continue;
}
} else {
var temp__5753__auto___36835__$1 = cljs.core.seq(seq__36255_36822);
if(temp__5753__auto___36835__$1){
var seq__36255_36836__$1 = temp__5753__auto___36835__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36255_36836__$1)){
var c__4679__auto___36837 = cljs.core.chunk_first(seq__36255_36836__$1);
var G__36838 = cljs.core.chunk_rest(seq__36255_36836__$1);
var G__36839 = c__4679__auto___36837;
var G__36840 = cljs.core.count(c__4679__auto___36837);
var G__36841 = (0);
seq__36255_36822 = G__36838;
chunk__36257_36823 = G__36839;
count__36258_36824 = G__36840;
i__36259_36825 = G__36841;
continue;
} else {
var child_36842 = cljs.core.first(seq__36255_36836__$1);
if(cljs.core.truth_(child_36842)){
node.appendChild(child_36842);


var G__36843 = cljs.core.next(seq__36255_36836__$1);
var G__36844 = null;
var G__36845 = (0);
var G__36846 = (0);
seq__36255_36822 = G__36843;
chunk__36257_36823 = G__36844;
count__36258_36824 = G__36845;
i__36259_36825 = G__36846;
continue;
} else {
var G__36847 = cljs.core.next(seq__36255_36836__$1);
var G__36848 = null;
var G__36849 = (0);
var G__36850 = (0);
seq__36255_36822 = G__36847;
chunk__36257_36823 = G__36848;
count__36258_36824 = G__36849;
i__36259_36825 = G__36850;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36821);
}
}


var G__36854 = cljs.core.next(seq__36111_36813__$1);
var G__36855 = null;
var G__36856 = (0);
var G__36857 = (0);
seq__36111_36764 = G__36854;
chunk__36113_36765 = G__36855;
count__36114_36766 = G__36856;
i__36115_36767 = G__36857;
continue;
} else {
var G__36858 = cljs.core.next(seq__36111_36813__$1);
var G__36859 = null;
var G__36860 = (0);
var G__36861 = (0);
seq__36111_36764 = G__36858;
chunk__36113_36765 = G__36859;
count__36114_36766 = G__36860;
i__36115_36767 = G__36861;
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
var args__4870__auto__ = [];
var len__4864__auto___36862 = arguments.length;
var i__4865__auto___36863 = (0);
while(true){
if((i__4865__auto___36863 < len__4864__auto___36862)){
args__4870__auto__.push((arguments[i__4865__auto___36863]));

var G__36864 = (i__4865__auto___36863 + (1));
i__4865__auto___36863 = G__36864;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq36284){
var G__36285 = cljs.core.first(seq36284);
var seq36284__$1 = cljs.core.next(seq36284);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36285,seq36284__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__36315 = arguments.length;
switch (G__36315) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__32878__auto___36869 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32879__auto__ = (function (){var switch__32679__auto__ = (function (state_36343){
var state_val_36344 = (state_36343[(1)]);
if((state_val_36344 === (1))){
var state_36343__$1 = state_36343;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36343__$1,(2),once_or_cleanup);
} else {
if((state_val_36344 === (2))){
var inst_36339 = (state_36343[(2)]);
var inst_36341 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_36343__$1 = (function (){var statearr_36376 = state_36343;
(statearr_36376[(7)] = inst_36339);

return statearr_36376;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36343__$1,inst_36341);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32680__auto__ = null;
var shadow$dom$state_machine__32680__auto____0 = (function (){
var statearr_36382 = [null,null,null,null,null,null,null,null];
(statearr_36382[(0)] = shadow$dom$state_machine__32680__auto__);

(statearr_36382[(1)] = (1));

return statearr_36382;
});
var shadow$dom$state_machine__32680__auto____1 = (function (state_36343){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_36343);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e36385){var ex__32683__auto__ = e36385;
var statearr_36390_36873 = state_36343;
(statearr_36390_36873[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_36343[(4)]))){
var statearr_36395_36874 = state_36343;
(statearr_36395_36874[(1)] = cljs.core.first((state_36343[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36875 = state_36343;
state_36343 = G__36875;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
shadow$dom$state_machine__32680__auto__ = function(state_36343){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32680__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32680__auto____1.call(this,state_36343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32680__auto____0;
shadow$dom$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32680__auto____1;
return shadow$dom$state_machine__32680__auto__;
})()
})();
var state__32880__auto__ = (function (){var statearr_36402 = f__32879__auto__();
(statearr_36402[(6)] = c__32878__auto___36869);

return statearr_36402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32880__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
