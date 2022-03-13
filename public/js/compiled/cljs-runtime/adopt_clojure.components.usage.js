goog.provide('adopt_clojure.components.usage');
adopt_clojure.components.usage.usage = (function adopt_clojure$components$usage$usage(var_args){
var args__4870__auto__ = [];
var len__4864__auto___38089 = arguments.length;
var i__4865__auto___38090 = (0);
while(true){
if((i__4865__auto___38090 < len__4864__auto___38089)){
args__4870__auto__.push((arguments[i__4865__auto___38090]));

var G__38091 = (i__4865__auto___38090 + (1));
i__4865__auto___38090 = G__38091;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return adopt_clojure.components.usage.usage.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(adopt_clojure.components.usage.usage.cljs$core$IFn$_invoke$arity$variadic = (function (p__38081){
var map__38082 = p__38081;
var map__38082__$1 = cljs.core.__destructure_map(map__38082);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38082__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38082__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38082__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38082__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var pkgs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38082__$1,new cljs.core.Keyword(null,"pkgs","pkgs",-1650275716));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),["4px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)].join('')], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Symbol(null,"heading","heading",328359654,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(30),new cljs.core.Keyword(null,"src","src",-1651076051),icon], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),name], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),desc], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Symbol(null,"packages","packages",-1104694657,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Using..."], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,p__38084){
var vec__38085 = p__38084;
var name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38085,(0),null);
var link = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38085,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"thin solid black",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px 5px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"3px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),link], null),name__$1], null)], null);
}),pkgs)], null)], null);
}));

(adopt_clojure.components.usage.usage.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(adopt_clojure.components.usage.usage.cljs$lang$applyTo = (function (seq38077){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38077));
}));


//# sourceMappingURL=adopt_clojure.components.usage.js.map
