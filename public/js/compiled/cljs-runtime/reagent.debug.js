goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__37397__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__37397 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37398__i = 0, G__37398__a = new Array(arguments.length -  0);
while (G__37398__i < G__37398__a.length) {G__37398__a[G__37398__i] = arguments[G__37398__i + 0]; ++G__37398__i;}
  args = new cljs.core.IndexedSeq(G__37398__a,0,null);
} 
return G__37397__delegate.call(this,args);};
G__37397.cljs$lang$maxFixedArity = 0;
G__37397.cljs$lang$applyTo = (function (arglist__37399){
var args = cljs.core.seq(arglist__37399);
return G__37397__delegate(args);
});
G__37397.cljs$core$IFn$_invoke$arity$variadic = G__37397__delegate;
return G__37397;
})()
);

(o.error = (function() { 
var G__37400__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__37400 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37402__i = 0, G__37402__a = new Array(arguments.length -  0);
while (G__37402__i < G__37402__a.length) {G__37402__a[G__37402__i] = arguments[G__37402__i + 0]; ++G__37402__i;}
  args = new cljs.core.IndexedSeq(G__37402__a,0,null);
} 
return G__37400__delegate.call(this,args);};
G__37400.cljs$lang$maxFixedArity = 0;
G__37400.cljs$lang$applyTo = (function (arglist__37403){
var args = cljs.core.seq(arglist__37403);
return G__37400__delegate(args);
});
G__37400.cljs$core$IFn$_invoke$arity$variadic = G__37400__delegate;
return G__37400;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
