parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"nJ2k":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.planets=exports.starships=exports.characters=exports.movies=void 0;var s="https://swapi.dev/api/films/";exports.movies=s;var e="https://swapi.dev/api/people/";exports.characters=e;var p="https://swapi.dev/api/starships/";exports.starships=p;var t="https://swapi.dev/api/planets/";exports.planets=t;
},{}],"KA2S":[function(require,module,exports) {
var define;
var t,r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(P){u=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new G(n||[]);return i._invoke=function(t,r,e){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return F()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=f(t,r,e);if("normal"===u.type){if(n=e.done?y:s,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=y,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(P){return{type:"throw",arg:P}}}t.wrap=h;var l="suspendedStart",s="suspendedYield",p="executing",y="completed",v={};function d(){}function g(){}function m(){}var w={};w[i]=function(){return this};var L=Object.getPrototypeOf,x=L&&L(L(N([])));x&&x!==e&&n.call(x,i)&&(w=x);var b=m.prototype=d.prototype=Object.create(w);function E(t){["next","throw","return"].forEach(function(r){u(t,r,function(t){return this._invoke(r,t)})})}function _(t,r){var e;this._invoke=function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(l).then(function(t){h.value=t,a(h)},function(t){return e("throw",t,a,c)})}c(u.arg)}(o,i,e,a)})}return e=e?e.then(a,a):a()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:r,done:!0}}return g.prototype=b.constructor=m,m.constructor=g,g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new _(h(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(b),u(b,c,"Generator"),b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=N,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}
},{}],"spyz":[function(require,module,exports) {
"use strict";function e(e,r,t,n,o,u,c){try{var a=e[u](c),i=a.value}catch(s){return void t(s)}a.done?r(i):Promise.resolve(i).then(n,o)}function r(r){return function(){var t=this,n=arguments;return new Promise(function(o,u){var c=r.apply(t,n);function a(r){e(c,o,u,a,i,"next",r)}function i(r){e(c,o,u,a,i,"throw",r)}a(void 0)})}}function t(e){return n.apply(this,arguments)}function n(){return(n=r(regeneratorRuntime.mark(function e(r){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(r);case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.error("Wrong API call: ".concat(e.t0));case 12:case"end":return e.stop()}},e,null,[[0,9]])}))).apply(this,arguments)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.fetchData=t,require("regenerator-runtime/runtime");
},{"regenerator-runtime/runtime":"KA2S"}],"sqEa":[function(require,module,exports) {
"use strict";function t(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=e(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var a=0,o=function(){};return{s:o,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){l=!0,c=t},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw c}}}}function e(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var c=function(){function e(){r(this,e)}return o(e,null,[{key:"clearPrevious",value:function(){document.querySelector(".contentWrapper").innerHTML=""}},{key:"movies",value:function(e){var n=document.querySelector(".contentWrapper");this.clearPrevious();var r,a=t(e.results);try{for(a.s();!(r=a.n()).done;){var o=r.value,c=o.title,i=o.producer,l=o.director,s=o.url,u="<div class='itemWrapper'>\n        <p class='item'>".concat(c,"</p>\n        <p class='item'>Producers: ").concat(i,"</p>\n        <p class='item'>Director: ").concat(l,"</p>\n\n        <button data-url=").concat(s,"  data-type='films' class=\"btnPopup\">More</button>\n    </div>");n.innerHTML+=u}}catch(p){a.e(p)}finally{a.f()}}},{key:"characters",value:function(e){var n=document.querySelector(".contentWrapper");this.clearPrevious();var r,a=t(e.results);try{for(a.s();!(r=a.n()).done;){var o=r.value,c=o.name,i=o.birth_year,l=o.height,s=o.url,u="<div class='itemWrapper'>\n        <p class='item'>".concat(c,"</p>\n        <p class='item'>Birth:").concat(i,"</p>\n        <p class='item'>Height:").concat(l,"</p>\n         <button data-url=").concat(s," data-type='characters' class=\"btnPopup\">More info</button>\n        </div>");n.innerHTML+=u}}catch(p){a.e(p)}finally{a.f()}}},{key:"planets",value:function(e){var n=document.querySelector(".contentWrapper");this.clearPrevious();var r,a=t(e.results);try{for(a.s();!(r=a.n()).done;){var o=r.value,c=o.name,i=o.rotation_period,l=(o.diameter,o.climate),s=o.url,u="<div class='itemWrapper'>\n        <p class='item'>".concat(c,"</p>\n        <p class='item'>Rotation:").concat(i,"</p>\n        <p class='item'>Climate:").concat(l,"</p>\n         <button data-url=").concat(s," data-type='planets' class=\"btnPopup\">More info</button>\n        </div>");n.innerHTML+=u}}catch(p){a.e(p)}finally{a.f()}}},{key:"ships",value:function(e){var n=document.querySelector(".contentWrapper");this.clearPrevious();var r,a=t(e.results);try{for(a.s();!(r=a.n()).done;){var o=r.value,c=o.name,i=o.length,l=o.starship_class,s=o.url,u="<div class='itemWrapper'>\n        <p class='item'>".concat(c,"</p>\n        <p class='item'>Length:").concat(i,"</p>\n        <p class='item'>Class:").concat(l,"</p>\n         <button data-url=").concat(s," data-type='starships' class=\"btnPopup\">More info</button>\n        </div>");n.innerHTML+=u}}catch(p){a.e(p)}finally{a.f()}}}]),e}(),i=c;exports.default=i;
},{}],"kkbC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.drawTile=void 0;var e=require("./consts/urls"),t=require("./fetch"),r=a(require("./create"));function a(e){return e&&e.__esModule?e:{default:e}}var n=function(a){switch(a){case"movies":return(0,t.fetchData)(e.movies).then(function(e){return r.default.movies(e)});case"characters":return(0,t.fetchData)(e.characters).then(function(e){return r.default.characters(e)});case"planets":return(0,t.fetchData)(e.planets).then(function(e){return r.default.planets(e)});case"ships":return(0,t.fetchData)(e.starships).then(function(e){return r.default.ships(e)});default:return"default"}};exports.drawTile=n;
},{"./consts/urls":"nJ2k","./fetch":"spyz","./create":"sqEa"}],"FGe7":[function(require,module,exports) {
"use strict";var r=require("../tile");(0,r.drawTile)("characters");
},{"../tile":"kkbC"}]},{},["FGe7"], null)
//# sourceMappingURL=characters.b95e5ef5.js.map