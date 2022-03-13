goog.provide('adopt_clojure.core');
if((typeof adopt_clojure !== 'undefined') && (typeof adopt_clojure.core !== 'undefined') && (typeof adopt_clojure.core.app_state !== 'undefined')){
} else {
adopt_clojure.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
adopt_clojure.core.hello_world = (function adopt_clojure$core$hello_world(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [adopt_clojure.templates.home.home_template,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [adopt_clojure.pages.index.index_page], null)], null);
});
adopt_clojure.core.start = (function adopt_clojure$core$start(){
var G__38798 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [adopt_clojure.core.hello_world], null);
var G__38799 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__38798,G__38799) : reagent.core.render_component.call(null,G__38798,G__38799));
});
adopt_clojure.core.init = (function adopt_clojure$core$init(){
return adopt_clojure.core.start();
});
goog.exportSymbol('adopt_clojure.core.init', adopt_clojure.core.init);
adopt_clojure.core.stop = (function adopt_clojure$core$stop(){
return console.log("stop");
});

//# sourceMappingURL=adopt_clojure.core.js.map
