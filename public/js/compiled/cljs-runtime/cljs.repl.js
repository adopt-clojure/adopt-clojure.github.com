goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36046){
var map__36047 = p__36046;
var map__36047__$1 = cljs.core.__destructure_map(map__36047);
var m = map__36047__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36047__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36047__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36048_36316 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36049_36317 = null;
var count__36050_36318 = (0);
var i__36051_36319 = (0);
while(true){
if((i__36051_36319 < count__36050_36318)){
var f_36320 = chunk__36049_36317.cljs$core$IIndexed$_nth$arity$2(null,i__36051_36319);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36320], 0));


var G__36321 = seq__36048_36316;
var G__36322 = chunk__36049_36317;
var G__36323 = count__36050_36318;
var G__36324 = (i__36051_36319 + (1));
seq__36048_36316 = G__36321;
chunk__36049_36317 = G__36322;
count__36050_36318 = G__36323;
i__36051_36319 = G__36324;
continue;
} else {
var temp__5753__auto___36325 = cljs.core.seq(seq__36048_36316);
if(temp__5753__auto___36325){
var seq__36048_36326__$1 = temp__5753__auto___36325;
if(cljs.core.chunked_seq_QMARK_(seq__36048_36326__$1)){
var c__4679__auto___36327 = cljs.core.chunk_first(seq__36048_36326__$1);
var G__36328 = cljs.core.chunk_rest(seq__36048_36326__$1);
var G__36329 = c__4679__auto___36327;
var G__36330 = cljs.core.count(c__4679__auto___36327);
var G__36331 = (0);
seq__36048_36316 = G__36328;
chunk__36049_36317 = G__36329;
count__36050_36318 = G__36330;
i__36051_36319 = G__36331;
continue;
} else {
var f_36332 = cljs.core.first(seq__36048_36326__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36332], 0));


var G__36333 = cljs.core.next(seq__36048_36326__$1);
var G__36334 = null;
var G__36335 = (0);
var G__36336 = (0);
seq__36048_36316 = G__36333;
chunk__36049_36317 = G__36334;
count__36050_36318 = G__36335;
i__36051_36319 = G__36336;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36337 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36337], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36337)))?cljs.core.second(arglists_36337):arglists_36337)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36061_36345 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36062_36346 = null;
var count__36063_36347 = (0);
var i__36064_36348 = (0);
while(true){
if((i__36064_36348 < count__36063_36347)){
var vec__36084_36349 = chunk__36062_36346.cljs$core$IIndexed$_nth$arity$2(null,i__36064_36348);
var name_36350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36084_36349,(0),null);
var map__36087_36351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36084_36349,(1),null);
var map__36087_36352__$1 = cljs.core.__destructure_map(map__36087_36351);
var doc_36353 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36087_36352__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36087_36352__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36350], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36354], 0));

if(cljs.core.truth_(doc_36353)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36353], 0));
} else {
}


var G__36355 = seq__36061_36345;
var G__36356 = chunk__36062_36346;
var G__36357 = count__36063_36347;
var G__36358 = (i__36064_36348 + (1));
seq__36061_36345 = G__36355;
chunk__36062_36346 = G__36356;
count__36063_36347 = G__36357;
i__36064_36348 = G__36358;
continue;
} else {
var temp__5753__auto___36363 = cljs.core.seq(seq__36061_36345);
if(temp__5753__auto___36363){
var seq__36061_36364__$1 = temp__5753__auto___36363;
if(cljs.core.chunked_seq_QMARK_(seq__36061_36364__$1)){
var c__4679__auto___36365 = cljs.core.chunk_first(seq__36061_36364__$1);
var G__36366 = cljs.core.chunk_rest(seq__36061_36364__$1);
var G__36367 = c__4679__auto___36365;
var G__36368 = cljs.core.count(c__4679__auto___36365);
var G__36369 = (0);
seq__36061_36345 = G__36366;
chunk__36062_36346 = G__36367;
count__36063_36347 = G__36368;
i__36064_36348 = G__36369;
continue;
} else {
var vec__36093_36370 = cljs.core.first(seq__36061_36364__$1);
var name_36371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36093_36370,(0),null);
var map__36096_36372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36093_36370,(1),null);
var map__36096_36373__$1 = cljs.core.__destructure_map(map__36096_36372);
var doc_36374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36096_36373__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36096_36373__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36371], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36375], 0));

if(cljs.core.truth_(doc_36374)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36374], 0));
} else {
}


var G__36378 = cljs.core.next(seq__36061_36364__$1);
var G__36379 = null;
var G__36380 = (0);
var G__36381 = (0);
seq__36061_36345 = G__36378;
chunk__36062_36346 = G__36379;
count__36063_36347 = G__36380;
i__36064_36348 = G__36381;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__36101 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36102 = null;
var count__36103 = (0);
var i__36104 = (0);
while(true){
if((i__36104 < count__36103)){
var role = chunk__36102.cljs$core$IIndexed$_nth$arity$2(null,i__36104);
var temp__5753__auto___36383__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___36383__$1)){
var spec_36384 = temp__5753__auto___36383__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36384)], 0));
} else {
}


var G__36386 = seq__36101;
var G__36387 = chunk__36102;
var G__36388 = count__36103;
var G__36389 = (i__36104 + (1));
seq__36101 = G__36386;
chunk__36102 = G__36387;
count__36103 = G__36388;
i__36104 = G__36389;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__36101);
if(temp__5753__auto____$1){
var seq__36101__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36101__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__36101__$1);
var G__36391 = cljs.core.chunk_rest(seq__36101__$1);
var G__36392 = c__4679__auto__;
var G__36393 = cljs.core.count(c__4679__auto__);
var G__36394 = (0);
seq__36101 = G__36391;
chunk__36102 = G__36392;
count__36103 = G__36393;
i__36104 = G__36394;
continue;
} else {
var role = cljs.core.first(seq__36101__$1);
var temp__5753__auto___36396__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___36396__$2)){
var spec_36397 = temp__5753__auto___36396__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36397)], 0));
} else {
}


var G__36398 = cljs.core.next(seq__36101__$1);
var G__36399 = null;
var G__36400 = (0);
var G__36401 = (0);
seq__36101 = G__36398;
chunk__36102 = G__36399;
count__36103 = G__36400;
i__36104 = G__36401;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36404 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36405 = cljs.core.ex_cause(t);
via = G__36404;
t = G__36405;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__36222 = datafied_throwable;
var map__36222__$1 = cljs.core.__destructure_map(map__36222);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36222__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36222__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36222__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36223 = cljs.core.last(via);
var map__36223__$1 = cljs.core.__destructure_map(map__36223);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36223__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36223__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36223__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36224 = data;
var map__36224__$1 = cljs.core.__destructure_map(map__36224);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36224__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36224__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36224__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36225 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36225__$1 = cljs.core.__destructure_map(map__36225);
var top_data = map__36225__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36225__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36236 = phase;
var G__36236__$1 = (((G__36236 instanceof cljs.core.Keyword))?G__36236.fqn:null);
switch (G__36236__$1) {
case "read-source":
var map__36238 = data;
var map__36238__$1 = cljs.core.__destructure_map(map__36238);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36238__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36238__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36239 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36239__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36239,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36239);
var G__36239__$2 = (cljs.core.truth_((function (){var fexpr__36240 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36240.cljs$core$IFn$_invoke$arity$1 ? fexpr__36240.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36240.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36239__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36239__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36239__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36239__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36241 = top_data;
var G__36241__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36241,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36241);
var G__36241__$2 = (cljs.core.truth_((function (){var fexpr__36243 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36243.cljs$core$IFn$_invoke$arity$1 ? fexpr__36243.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36243.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36241__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36241__$1);
var G__36241__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36241__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36241__$2);
var G__36241__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36241__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36241__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36241__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36241__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36244 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36244,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36244,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36244,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36244,(3),null);
var G__36247 = top_data;
var G__36247__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36247,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36247);
var G__36247__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36247__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36247__$1);
var G__36247__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36247__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36247__$2);
var G__36247__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36247__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36247__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36247__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36247__$4;
}

break;
case "execution":
var vec__36250 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36250,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36250,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36250,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36250,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36206_SHARP_){
var or__4253__auto__ = (p1__36206_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__36254 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36254.cljs$core$IFn$_invoke$arity$1 ? fexpr__36254.cljs$core$IFn$_invoke$arity$1(p1__36206_SHARP_) : fexpr__36254.call(null,p1__36206_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__36261 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36261__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36261,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36261);
var G__36261__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36261__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36261__$1);
var G__36261__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36261__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36261__$2);
var G__36261__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36261__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36261__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36261__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36261__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36236__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36265){
var map__36266 = p__36265;
var map__36266__$1 = cljs.core.__destructure_map(map__36266);
var triage_data = map__36266__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36266__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36266__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36266__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36266__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36266__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36266__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36266__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36266__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36271 = phase;
var G__36271__$1 = (((G__36271 instanceof cljs.core.Keyword))?G__36271.fqn:null);
switch (G__36271__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36272 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36273 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36274 = loc;
var G__36275 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36280_36417 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36281_36418 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36282_36419 = true;
var _STAR_print_fn_STAR__temp_val__36283_36420 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36282_36419);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36283_36420);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36263_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36263_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36281_36418);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36280_36417);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36272,G__36273,G__36274,G__36275) : format.call(null,G__36272,G__36273,G__36274,G__36275));

break;
case "macroexpansion":
var G__36286 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36287 = cause_type;
var G__36288 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36289 = loc;
var G__36290 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36286,G__36287,G__36288,G__36289,G__36290) : format.call(null,G__36286,G__36287,G__36288,G__36289,G__36290));

break;
case "compile-syntax-check":
var G__36291 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36292 = cause_type;
var G__36293 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36294 = loc;
var G__36295 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36291,G__36292,G__36293,G__36294,G__36295) : format.call(null,G__36291,G__36292,G__36293,G__36294,G__36295));

break;
case "compilation":
var G__36296 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36297 = cause_type;
var G__36298 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36299 = loc;
var G__36300 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36296,G__36297,G__36298,G__36299,G__36300) : format.call(null,G__36296,G__36297,G__36298,G__36299,G__36300));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36301 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36302 = symbol;
var G__36303 = loc;
var G__36304 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36305_36426 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36306_36427 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36307_36428 = true;
var _STAR_print_fn_STAR__temp_val__36308_36429 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36307_36428);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36308_36429);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36264_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36264_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36306_36427);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36305_36426);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36301,G__36302,G__36303,G__36304) : format.call(null,G__36301,G__36302,G__36303,G__36304));
} else {
var G__36309 = "Execution error%s at %s(%s).\n%s\n";
var G__36310 = cause_type;
var G__36311 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36312 = loc;
var G__36313 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36309,G__36310,G__36311,G__36312,G__36313) : format.call(null,G__36309,G__36310,G__36311,G__36312,G__36313));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36271__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
