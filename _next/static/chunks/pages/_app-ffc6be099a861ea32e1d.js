_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{0:function(r,e,t){t("74v/"),r.exports=t("nOHt")},"74v/":function(r,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t("cha2")}])},DzJC:function(r,e,t){var n=t("sEfC"),i=t("GoyQ");r.exports=function(r,e,t){var a=!0,o=!0;if("function"!=typeof r)throw new TypeError("Expected a function");return i(t)&&(a="leading"in t?!!t.leading:a,o="trailing"in t?!!t.trailing:o),n(r,e,{leading:a,maxWait:e,trailing:o})}},QIyF:function(r,e,t){var n=t("Kz5y");r.exports=function(){return n.Date.now()}},TO8r:function(r,e){var t=/\s/;r.exports=function(r){for(var e=r.length;e--&&t.test(r.charAt(e)););return e}},cha2:function(r,e,t){"use strict";t.r(e);var n=t("rePB"),i=t("/MKj"),a=t("q1tI"),o=t("ANjH"),u=t("i7Pf"),c=t("8OQS"),s=t.n(c),f=t("lSCD"),l=t.n(f),d=t("9FfX"),v=t("0Bgb"),y=t.n(v);var p=function(r){var e=function(r){return function(e,t){return void 0!==r.getIn(e,t)}},t=r.deepEqual,n=r.empty,i=r.getIn,a=r.deleteIn,o=r.setIn;return function(u){void 0===u&&(u=e);return function e(c,s){if("]"===s[s.length-1]){var f=y()(s);return f.pop(),i(c,f.join("."))?o(c,s):c}var l=c;u(r)(c,s)&&(l=a(c,s));var d=s.lastIndexOf(".");if(d>0){var v=s.substring(0,d);if("]"!==v[v.length-1]){var p=i(l,v);if(t(p,n))return e(l,v)}}return l}}},m=t("YcQH"),g=function(r){var e=r.getIn;return function(r,t){var n=null;/^values/.test(t)&&(n=t.replace("values","initial"));var i=!n||void 0===e(r,n);return void 0!==e(r,t)&&i}};var b,h=function(r){var e,t=r.deepEqual,n=r.empty,i=r.forEach,a=r.getIn,o=r.setIn,u=r.deleteIn,c=r.fromJS,f=r.keys,v=r.size,y=r.some,b=r.splice,h=p(r)(g),E=p(m.a)(g),O=function(r,e,t,n,i,u,c){var s=a(r,e+"."+t);return s||c?o(r,e+"."+t,b(s,n,i,u)):r},j=function(r,e,t,n,i,u,c){var s=a(r,e),f=m.a.getIn(s,t);return f||c?o(r,e,m.a.setIn(s,t,m.a.splice(f,n,i,u))):r},w=["values","fields","submitErrors","asyncErrors"],P=function(r,e,t,i,a){var o=r,u=null!=a?n:void 0;return o=O(o,"values",e,t,i,a,!0),o=O(o,"fields",e,t,i,u),o=j(o,"syncErrors",e,t,i,void 0),o=j(o,"syncWarnings",e,t,i,void 0),o=O(o,"submitErrors",e,t,i,void 0),o=O(o,"asyncErrors",e,t,i,void 0)},S=((e={})[d.a]=function(r,e){var t=e.meta,n=t.field,i=t.index,a=e.payload;return P(r,n,i,0,a)},e[d.b]=function(r,e){var t=e.meta,n=t.field,i=t.from,u=t.to,c=a(r,"values."+n),s=c?v(c):0,f=r;return s&&w.forEach((function(r){var e=r+"."+n;if(a(f,e)){var t=a(f,e+"["+i+"]");f=o(f,e,b(a(f,e),i,1)),f=o(f,e,b(a(f,e),u,0,t))}})),f},e[d.c]=function(r,e){var t=e.meta.field,n=a(r,"values."+t),i=n?v(n):0;return i?P(r,t,i-1,1):r},e[d.d]=function(r,e){var t=e.meta.field,n=e.payload,i=a(r,"values."+t),o=i?v(i):0;return P(r,t,o,0,n)},e[d.e]=function(r,e){var t=e.meta,n=t.field,i=t.index;return P(r,n,i,1)},e[d.f]=function(r,e){var t=e.meta.field,n=a(r,"values."+t),i=n?v(n):0;return i?P(r,t,0,i):r},e[d.g]=function(r,e){var t=e.meta.field;return P(r,t,0,1)},e[d.h]=function(r,e){var t=e.meta,n=t.field,i=t.index,a=t.removeNum,o=e.payload;return P(r,n,i,a,o)},e[d.i]=function(r,e){var t=e.meta,n=t.field,i=t.indexA,u=t.indexB,c=r;return w.forEach((function(r){var e=a(c,r+"."+n+"["+i+"]"),t=a(c,r+"."+n+"["+u+"]");void 0===e&&void 0===t||(c=o(c,r+"."+n+"["+i+"]",t),c=o(c,r+"."+n+"["+u+"]",e))})),c},e[d.j]=function(r,e){var t=e.meta.field,n=e.payload;return P(r,t,0,0,n)},e[d.k]=function(r,e){var t=e.meta.field,n=e.payload,i=r;return i=h(i,"asyncErrors."+t),i=h(i,"submitErrors."+t),i=o(i,"fields."+t+".autofilled",!0),i=o(i,"values."+t,n)},e[d.l]=function(r,e){var t=e.meta,n=t.field,i=t.touch,c=e.payload,s=r;return void 0===a(s,"initial."+n)&&""===c?s=h(s,"values."+n):void 0!==c&&(s=o(s,"values."+n,c)),n===a(s,"active")&&(s=u(s,"active")),s=u(s,"fields."+n+".active"),i&&(s=o(s,"fields."+n+".touched",!0),s=o(s,"anyTouched",!0)),s},e[d.m]=function(r,e){var t=e.meta,n=t.field,i=t.touch,u=t.persistentSubmitErrors,c=e.payload,s=r;if(void 0===a(s,"initial."+n)&&""===c||void 0===c)s=h(s,"values."+n);else if(l()(c)){var f=a(r,"values."+n);s=o(s,"values."+n,c(f,r.values))}else s=o(s,"values."+n,c);return s=h(s,"asyncErrors."+n),u||(s=h(s,"submitErrors."+n)),s=h(s,"fields."+n+".autofilled"),i&&(s=o(s,"fields."+n+".touched",!0),s=o(s,"anyTouched",!0)),s},e[d.p]=function(r){return u(r,"triggerSubmit")},e[d.q]=function(r){var e=r;return e=h(e,"submitErrors"),e=u(e,"error")},e[d.n]=function(r,e){var t=e.meta.field;return u(r,"asyncErrors."+t)},e[d.o]=function(r,e){var t=e.meta,n=t.keepTouched,i=t.persistentSubmitErrors,c=t.fields,s=r;c.forEach((function(e){s=h(s,"asyncErrors."+e),i||(s=h(s,"submitErrors."+e)),s=h(s,"fields."+e+".autofilled"),n||(s=u(s,"fields."+e+".touched"));var t=a(r,"initial."+e);s=t?o(s,"values."+e,t):h(s,"values."+e)}));var l=y(f(a(s,"registeredFields")),(function(r){return a(s,"fields."+r+".touched")}));return s=l?o(s,"anyTouched",!0):u(s,"anyTouched")},e[d.s]=function(r,e){var t=e.meta.field,n=r,i=a(r,"active");return n=u(n,"fields."+i+".active"),n=o(n,"fields."+t+".visited",!0),n=o(n,"fields."+t+".active",!0),n=o(n,"active",t)},e[d.t]=function(r,e){var u=e.payload,s=e.meta,l=s.keepDirty,d=s.keepSubmitSucceeded,v=s.updateUnregisteredFields,y=s.keepValues,p=c(u),m=n,g=a(r,"warning");g&&(m=o(m,"warning",g));var b=a(r,"syncWarnings");b&&(m=o(m,"syncWarnings",b));var h=a(r,"error");h&&(m=o(m,"error",h));var E=a(r,"syncErrors");E&&(m=o(m,"syncErrors",E));var O=a(r,"registeredFields");O&&(m=o(m,"registeredFields",O));var j=a(r,"values"),w=a(r,"initial"),P=p,S=j;if(l&&O){if(!t(P,w)){var x=function(r){var e=a(w,r),n=a(j,r);if(t(n,e)){var i=a(P,r);a(S,r)!==i&&(S=o(S,r,i))}};v||i(f(O),(function(r){return x(r)})),i(f(P),(function(r){if("undefined"===typeof a(w,r)){var e=a(P,r);S=o(S,r,e)}v&&x(r)}))}}else S=P;return y&&(i(f(j),(function(r){var e=a(j,r);S=o(S,r,e)})),i(f(w),(function(r){var e=a(w,r);P=o(P,r,e)}))),d&&a(r,"submitSucceeded")&&(m=o(m,"submitSucceeded",!0)),m=o(m,"values",S),m=o(m,"initial",P)},e[d.u]=function(r,e){var t=e.payload,n=t.name,i=t.type,u="registeredFields['"+n+"']",s=a(r,u);if(s){var f=a(s,"count")+1;s=o(s,"count",f)}else s=c({name:n,type:i,count:1});return o(r,u,s)},e[d.v]=function(r){var e=n,t=a(r,"registeredFields");t&&(e=o(e,"registeredFields",t));var i=a(r,"initial");return i&&(e=o(e,"values",i),e=o(e,"initial",i)),e},e[d.w]=function(r,e){var t=e.meta.sections,n=r;t.forEach((function(e){n=h(n,"asyncErrors."+e),n=h(n,"submitErrors."+e),n=h(n,"fields."+e);var t=a(r,"initial."+e);n=t?o(n,"values."+e,t):h(n,"values."+e)}));var i=y(f(a(n,"registeredFields")),(function(r){return a(n,"fields."+r+".touched")}));return n=i?o(n,"anyTouched",!0):u(n,"anyTouched")},e[d.D]=function(r){return o(r,"triggerSubmit",!0)},e[d.z]=function(r,e){var t=e.meta.field;return o(r,"asyncValidating",t||!0)},e[d.A]=function(r){return o(r,"submitting",!0)},e[d.B]=function(r,e){var t=e.payload,n=r;if(n=u(n,"asyncValidating"),t&&Object.keys(t).length){var i=t._error,a=s()(t,["_error"]);i&&(n=o(n,"error",i)),Object.keys(a).length&&(n=o(n,"asyncErrors",c(a)))}else n=u(n,"error"),n=u(n,"asyncErrors");return n},e[d.C]=function(r,e){var t=e.payload,n=r;if(n=u(n,"submitting"),n=u(n,"submitFailed"),n=u(n,"submitSucceeded"),t&&Object.keys(t).length){var i=t._error,a=s()(t,["_error"]);n=i?o(n,"error",i):u(n,"error"),n=Object.keys(a).length?o(n,"submitErrors",c(a)):u(n,"submitErrors"),n=o(n,"submitFailed",!0)}else n=u(n,"error"),n=u(n,"submitErrors");return n},e[d.x]=function(r,e){var t=e.meta.fields,n=r;return n=o(n,"submitFailed",!0),n=u(n,"submitSucceeded"),n=u(n,"submitting"),t.forEach((function(r){return n=o(n,"fields."+r+".touched",!0)})),t.length&&(n=o(n,"anyTouched",!0)),n},e[d.y]=function(r){var e=r;return e=u(e,"submitFailed"),e=o(e,"submitSucceeded",!0)},e[d.E]=function(r,e){var t=e.meta.fields,n=r;return t.forEach((function(r){return n=o(n,"fields."+r+".touched",!0)})),n=o(n,"anyTouched",!0)},e[d.F]=function(r,e){var i=e.payload,c=i.name,s=i.destroyOnUnmount,f=r,l="registeredFields['"+c+"']",d=a(f,l);if(!d)return f;var v=a(d,"count")-1;if(v<=0&&s){f=u(f,l),t(a(f,"registeredFields"),n)&&(f=u(f,"registeredFields"));var y=a(f,"syncErrors");y&&(y=E(y,c),f=m.a.deepEqual(y,m.a.empty)?u(f,"syncErrors"):o(f,"syncErrors",y));var p=a(f,"syncWarnings");p&&(p=E(p,c),f=m.a.deepEqual(p,m.a.empty)?u(f,"syncWarnings"):o(f,"syncWarnings",p)),f=h(f,"submitErrors."+c),f=h(f,"asyncErrors."+c)}else d=o(d,"count",v),f=o(f,l,d);return f},e[d.G]=function(r,e){var t=e.meta.fields,n=r;t.forEach((function(r){return n=u(n,"fields."+r+".touched")}));var i=y(f(a(n,"registeredFields")),(function(r){return a(n,"fields."+r+".touched")}));return n=i?o(n,"anyTouched",!0):u(n,"anyTouched")},e[d.H]=function(r,e){var t=e.payload,n=t.syncErrors,i=t.error,a=r;return i?(a=o(a,"error",i),a=o(a,"syncError",!0)):(a=u(a,"error"),a=u(a,"syncError")),a=Object.keys(n).length?o(a,"syncErrors",n):u(a,"syncErrors")},e[d.I]=function(r,e){var t=e.payload,n=t.syncWarnings,i=t.warning,a=r;return a=i?o(a,"warning",i):u(a,"warning"),a=Object.keys(n).length?o(a,"syncWarnings",n):u(a,"syncWarnings")},e);return function r(e){return e.plugin=function(e,t){var i=this;return void 0===t&&(t={}),r((function(r,u){void 0===r&&(r=n),void 0===u&&(u={type:"NONE"});var c=function(t,n){var i=a(t,n),c=e[n](i,u,a(r,n));return c!==i?o(t,n,c):t},s=i(r,u),f=u&&u.meta&&u.meta.form;return f&&!t.receiveAllFormActions?e[f]?c(s,f):s:Object.keys(e).reduce(c,s)}))},e}(function(r){return function(e,t){void 0===e&&(e=n),void 0===t&&(t={type:"NONE"});var i=t&&t.meta&&t.meta.form;if(!i||!function(r){return r&&r.type&&r.type.length>d.J.length&&r.type.substring(0,d.J.length)===d.J}(t))return e;if(t.type===d.r&&t.meta&&t.meta.form)return t.meta.form.reduce((function(r,e){return h(r,e)}),e);var u=a(e,i),c=r(u,t);return c===u?e:o(e,i,c)}}((function(r,e){void 0===r&&(r=n);var t=S[e.type];return t?t(r,e):r})))}(m.a),E=t("DzJC"),O=t.n(E),j=t("dPIe"),w=t("epMO"),P=Object(u.d)({name:"page",initialState:"about",reducers:{}}).reducer,S=t("IWlL"),x=t("RjJP"),T=t("aYBT"),F=t("B2Ag"),I=t("CR84"),k=t("iLr8"),N=t("pE8P");function _(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function D(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?_(Object(t),!0).forEach((function(e){Object(n.a)(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}var W=Object(o.c)({auth:j.b,user:w.a,calendar:x.b,calendarId:T.a,event:I.b,averageLifeYears:F.a,years:k.b,yearsConfig:N.a,page:P,mainPage:S.a,form:h}),C=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(u.a)({reducer:W,preloadedState:r,devTools:!0})},J=function(r){var e=Object(a.useMemo)((function(){return function(r){var e,t=null!==(e=b)&&void 0!==e?e:C(r);return r&&b&&(t=C(D(D({},b.getState()),r)),b=void 0),b||(b=t),t}(r=D(D({},r),function(){try{var r=localStorage.getItem("state");if(null!==r)return JSON.parse(r)}catch(e){console.error(e)}return{}}()))}),[r]);return Object(a.useEffect)((function(){e.subscribe(O()((function(){var r=e.getState();!function(r){try{var e=JSON.stringify(r);localStorage.setItem("state",e)}catch(t){console.error(t)}}({mainPage:r.mainPage,yearsConfig:r.yearsConfig})}),1e3))}),[e]),e},Q=(t("xMo/"),t("zPlV"),t("nKUr"));function B(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function z(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?B(Object(t),!0).forEach((function(e){Object(n.a)(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):B(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}e.default=function(r){var e=r.Component,t=r.pageProps,n=J(t.initialState);return Object(Q.jsx)(i.a,{store:n,children:Object(Q.jsx)(e,z({},t))})}},jXQH:function(r,e,t){var n=t("TO8r"),i=/^\s+/;r.exports=function(r){return r?r.slice(0,n(r)+1).replace(i,""):r}},sEfC:function(r,e,t){var n=t("GoyQ"),i=t("QIyF"),a=t("tLB3"),o=Math.max,u=Math.min;r.exports=function(r,e,t){var c,s,f,l,d,v,y=0,p=!1,m=!1,g=!0;if("function"!=typeof r)throw new TypeError("Expected a function");function b(e){var t=c,n=s;return c=s=void 0,y=e,l=r.apply(n,t)}function h(r){return y=r,d=setTimeout(O,e),p?b(r):l}function E(r){var t=r-v;return void 0===v||t>=e||t<0||m&&r-y>=f}function O(){var r=i();if(E(r))return j(r);d=setTimeout(O,function(r){var t=e-(r-v);return m?u(t,f-(r-y)):t}(r))}function j(r){return d=void 0,g&&c?b(r):(c=s=void 0,l)}function w(){var r=i(),t=E(r);if(c=arguments,s=this,v=r,t){if(void 0===d)return h(v);if(m)return clearTimeout(d),d=setTimeout(O,e),b(v)}return void 0===d&&(d=setTimeout(O,e)),l}return e=a(e)||0,n(t)&&(p=!!t.leading,f=(m="maxWait"in t)?o(a(t.maxWait)||0,e):f,g="trailing"in t?!!t.trailing:g),w.cancel=function(){void 0!==d&&clearTimeout(d),y=0,c=v=s=d=void 0},w.flush=function(){return void 0===d?l:j(i())},w}},tLB3:function(r,e,t){var n=t("jXQH"),i=t("GoyQ"),a=t("/9aa"),o=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt;r.exports=function(r){if("number"==typeof r)return r;if(a(r))return NaN;if(i(r)){var e="function"==typeof r.valueOf?r.valueOf():r;r=i(e)?e+"":e}if("string"!=typeof r)return 0===r?r:+r;r=n(r);var t=u.test(r);return t||c.test(r)?s(r.slice(2),t?2:8):o.test(r)?NaN:+r}},"xMo/":function(r,e,t){},zPlV:function(r,e,t){}},[[0,1,2,3,5,10,0,4,7,8]]]);