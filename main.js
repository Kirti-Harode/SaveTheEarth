!function(){var t={9662:function(t,n,e){var r=e(7854),o=e(614),i=e(6330),a=r.TypeError;t.exports=function(t){if(o(t))return t;throw a(i(t)+" is not a function")}},1223:function(t,n,e){var r=e(5112),o=e(30),i=e(3070),a=r("unscopables"),c=Array.prototype;null==c[a]&&i.f(c,a,{configurable:!0,value:o(null)}),t.exports=function(t){c[a][t]=!0}},9670:function(t,n,e){var r=e(7854),o=e(111),i=r.String,a=r.TypeError;t.exports=function(t){if(o(t))return t;throw a(i(t)+" is not an object")}},1285:function(t,n,e){"use strict";var r=e(7908),o=e(1400),i=e(6244);t.exports=function(t){for(var n=r(this),e=i(n),a=arguments.length,c=o(a>1?arguments[1]:void 0,e),u=a>2?arguments[2]:void 0,s=void 0===u?e:o(u,e);s>c;)n[c++]=t;return n}},1318:function(t,n,e){var r=e(5656),o=e(1400),i=e(6244),a=function(t){return function(n,e,a){var c,u=r(n),s=i(u),f=o(a,s);if(t&&e!=e){for(;s>f;)if((c=u[f++])!=c)return!0}else for(;s>f;f++)if((t||f in u)&&u[f]===e)return t||f||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},1194:function(t,n,e){var r=e(7293),o=e(5112),i=e(7392),a=o("species");t.exports=function(t){return i>=51||!r((function(){var n=[];return(n.constructor={})[a]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},7475:function(t,n,e){var r=e(7854),o=e(3157),i=e(4411),a=e(111),c=e(5112)("species"),u=r.Array;t.exports=function(t){var n;return o(t)&&(n=t.constructor,(i(n)&&(n===u||o(n.prototype))||a(n)&&null===(n=n[c]))&&(n=void 0)),void 0===n?u:n}},5417:function(t,n,e){var r=e(7475);t.exports=function(t,n){return new(r(t))(0===n?0:n)}},4326:function(t,n,e){var r=e(1702),o=r({}.toString),i=r("".slice);t.exports=function(t){return i(o(t),8,-1)}},648:function(t,n,e){var r=e(7854),o=e(1694),i=e(614),a=e(4326),c=e(5112)("toStringTag"),u=r.Object,s="Arguments"==a(function(){return arguments}());t.exports=o?a:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=u(t),c))?e:s?a(n):"Object"==(r=a(n))&&i(n.callee)?"Arguments":r}},9920:function(t,n,e){var r=e(2597),o=e(3887),i=e(1236),a=e(3070);t.exports=function(t,n,e){for(var c=o(n),u=a.f,s=i.f,f=0;f<c.length;f++){var p=c[f];r(t,p)||e&&r(e,p)||u(t,p,s(n,p))}}},8880:function(t,n,e){var r=e(9781),o=e(3070),i=e(9114);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},9114:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},6135:function(t,n,e){"use strict";var r=e(4948),o=e(3070),i=e(9114);t.exports=function(t,n,e){var a=r(n);a in t?o.f(t,a,i(0,e)):t[a]=e}},9781:function(t,n,e){var r=e(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,n,e){var r=e(7854),o=e(111),i=r.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},8113:function(t,n,e){var r=e(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,n,e){var r,o,i=e(7854),a=e(8113),c=i.process,u=i.Deno,s=c&&c.versions||u&&u.version,f=s&&s.v8;f&&(o=(r=f.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(o=+r[1]),t.exports=o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,n,e){var r=e(7854),o=e(1236).f,i=e(8880),a=e(1320),c=e(3505),u=e(9920),s=e(4705);t.exports=function(t,n){var e,f,p,l,d,A=t.target,h=t.global,g=t.stat;if(e=h?r:g?r[A]||c(A,{}):(r[A]||{}).prototype)for(f in n){if(l=n[f],p=t.noTargetGet?(d=o(e,f))&&d.value:e[f],!s(h?f:A+(g?".":"#")+f,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;u(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),a(e,f,l,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},6916:function(t){var n=Function.prototype.call;t.exports=n.bind?n.bind(n):function(){return n.apply(n,arguments)}},6530:function(t,n,e){var r=e(9781),o=e(2597),i=Function.prototype,a=r&&Object.getOwnPropertyDescriptor,c=o(i,"name"),u=c&&"something"===function(){}.name,s=c&&(!r||r&&a(i,"name").configurable);t.exports={EXISTS:c,PROPER:u,CONFIGURABLE:s}},1702:function(t){var n=Function.prototype,e=n.bind,r=n.call,o=e&&e.bind(r,r);t.exports=e?function(t){return t&&o(t)}:function(t){return t&&function(){return r.apply(t,arguments)}}},5005:function(t,n,e){var r=e(7854),o=e(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t]):r[t]&&r[t][n]}},8173:function(t,n,e){var r=e(9662);t.exports=function(t,n){var e=t[n];return null==e?void 0:r(e)}},7854:function(t,n,e){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},2597:function(t,n,e){var r=e(1702),o=e(7908),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,n){return i(o(t),n)}},3501:function(t){t.exports={}},490:function(t,n,e){var r=e(5005);t.exports=r("document","documentElement")},4664:function(t,n,e){var r=e(9781),o=e(7293),i=e(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,n,e){var r=e(7854),o=e(1702),i=e(7293),a=e(4326),c=r.Object,u=o("".split);t.exports=i((function(){return!c("z").propertyIsEnumerable(0)}))?function(t){return"String"==a(t)?u(t,""):c(t)}:c},2788:function(t,n,e){var r=e(1702),o=e(614),i=e(5465),a=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return a(t)}),t.exports=i.inspectSource},9909:function(t,n,e){var r,o,i,a=e(8536),c=e(7854),u=e(1702),s=e(111),f=e(8880),p=e(2597),l=e(5465),d=e(6200),A=e(3501),h="Object already initialized",g=c.TypeError,v=c.WeakMap;if(a||l.state){var y=l.state||(l.state=new v),m=u(y.get),b=u(y.has),x=u(y.set);r=function(t,n){if(b(y,t))throw new g(h);return n.facade=t,x(y,t,n),n},o=function(t){return m(y,t)||{}},i=function(t){return b(y,t)}}else{var C=d("state");A[C]=!0,r=function(t,n){if(p(t,C))throw new g(h);return n.facade=t,f(t,C,n),n},o=function(t){return p(t,C)?t[C]:{}},i=function(t){return p(t,C)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!s(n)||(e=o(n)).type!==t)throw g("Incompatible receiver, "+t+" required");return e}}}},3157:function(t,n,e){var r=e(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},614:function(t){t.exports=function(t){return"function"==typeof t}},4411:function(t,n,e){var r=e(1702),o=e(7293),i=e(614),a=e(648),c=e(5005),u=e(2788),s=function(){},f=[],p=c("Reflect","construct"),l=/^\s*(?:class|function)\b/,d=r(l.exec),A=!l.exec(s),h=function(t){if(!i(t))return!1;try{return p(s,f,t),!0}catch(t){return!1}},g=function(t){if(!i(t))return!1;switch(a(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return A||!!d(l,u(t))}catch(t){return!0}};g.sham=!0,t.exports=!p||o((function(){var t;return h(h.call)||!h(Object)||!h((function(){t=!0}))||t}))?g:h},4705:function(t,n,e){var r=e(7293),o=e(614),i=/#|\.prototype\./,a=function(t,n){var e=u[c(t)];return e==f||e!=s&&(o(n)?r(n):!!n)},c=a.normalize=function(t){return String(t).replace(i,".").toLowerCase()},u=a.data={},s=a.NATIVE="N",f=a.POLYFILL="P";t.exports=a},111:function(t,n,e){var r=e(614);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,n,e){var r=e(7854),o=e(5005),i=e(614),a=e(7976),c=e(3307),u=r.Object;t.exports=c?function(t){return"symbol"==typeof t}:function(t){var n=o("Symbol");return i(n)&&a(n.prototype,u(t))}},6244:function(t,n,e){var r=e(7466);t.exports=function(t){return r(t.length)}},133:function(t,n,e){var r=e(7392),o=e(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(t,n,e){var r=e(7854),o=e(614),i=e(2788),a=r.WeakMap;t.exports=o(a)&&/native code/.test(i(a))},30:function(t,n,e){var r,o=e(9670),i=e(6048),a=e(748),c=e(3501),u=e(490),s=e(317),f=e(6200)("IE_PROTO"),p=function(){},l=function(t){return"<script>"+t+"<\/script>"},d=function(t){t.write(l("")),t.close();var n=t.parentWindow.Object;return t=null,n},A=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}var t,n;A="undefined"!=typeof document?document.domain&&r?d(r):((n=s("iframe")).style.display="none",u.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(l("document.F=Object")),t.close(),t.F):d(r);for(var e=a.length;e--;)delete A.prototype[a[e]];return A()};c[f]=!0,t.exports=Object.create||function(t,n){var e;return null!==t?(p.prototype=o(t),e=new p,p.prototype=null,e[f]=t):e=A(),void 0===n?e:i.f(e,n)}},6048:function(t,n,e){var r=e(9781),o=e(3353),i=e(3070),a=e(9670),c=e(5656),u=e(1956);n.f=r&&!o?Object.defineProperties:function(t,n){a(t);for(var e,r=c(n),o=u(n),s=o.length,f=0;s>f;)i.f(t,e=o[f++],r[e]);return t}},3070:function(t,n,e){var r=e(7854),o=e(9781),i=e(4664),a=e(3353),c=e(9670),u=e(4948),s=r.TypeError,f=Object.defineProperty,p=Object.getOwnPropertyDescriptor;n.f=o?a?function(t,n,e){if(c(t),n=u(n),c(e),"function"==typeof t&&"prototype"===n&&"value"in e&&"writable"in e&&!e.writable){var r=p(t,n);r&&r.writable&&(t[n]=e.value,e={configurable:"configurable"in e?e.configurable:r.configurable,enumerable:"enumerable"in e?e.enumerable:r.enumerable,writable:!1})}return f(t,n,e)}:f:function(t,n,e){if(c(t),n=u(n),c(e),i)try{return f(t,n,e)}catch(t){}if("get"in e||"set"in e)throw s("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},1236:function(t,n,e){var r=e(9781),o=e(6916),i=e(5296),a=e(9114),c=e(5656),u=e(4948),s=e(2597),f=e(4664),p=Object.getOwnPropertyDescriptor;n.f=r?p:function(t,n){if(t=c(t),n=u(n),f)try{return p(t,n)}catch(t){}if(s(t,n))return a(!o(i.f,t,n),t[n])}},8006:function(t,n,e){var r=e(6324),o=e(748).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:function(t,n){n.f=Object.getOwnPropertySymbols},7976:function(t,n,e){var r=e(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,n,e){var r=e(1702),o=e(2597),i=e(5656),a=e(1318).indexOf,c=e(3501),u=r([].push);t.exports=function(t,n){var e,r=i(t),s=0,f=[];for(e in r)!o(c,e)&&o(r,e)&&u(f,e);for(;n.length>s;)o(r,e=n[s++])&&(~a(f,e)||u(f,e));return f}},1956:function(t,n,e){var r=e(6324),o=e(748);t.exports=Object.keys||function(t){return r(t,o)}},5296:function(t,n){"use strict";var e={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!e.call({1:2},1);n.f=o?function(t){var n=r(this,t);return!!n&&n.enumerable}:e},288:function(t,n,e){"use strict";var r=e(1694),o=e(648);t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},2140:function(t,n,e){var r=e(7854),o=e(6916),i=e(614),a=e(111),c=r.TypeError;t.exports=function(t,n){var e,r;if("string"===n&&i(e=t.toString)&&!a(r=o(e,t)))return r;if(i(e=t.valueOf)&&!a(r=o(e,t)))return r;if("string"!==n&&i(e=t.toString)&&!a(r=o(e,t)))return r;throw c("Can't convert object to primitive value")}},3887:function(t,n,e){var r=e(5005),o=e(1702),i=e(8006),a=e(5181),c=e(9670),u=o([].concat);t.exports=r("Reflect","ownKeys")||function(t){var n=i.f(c(t)),e=a.f;return e?u(n,e(t)):n}},1320:function(t,n,e){var r=e(7854),o=e(614),i=e(2597),a=e(8880),c=e(3505),u=e(2788),s=e(9909),f=e(6530).CONFIGURABLE,p=s.get,l=s.enforce,d=String(String).split("String");(t.exports=function(t,n,e,u){var s,p=!!u&&!!u.unsafe,A=!!u&&!!u.enumerable,h=!!u&&!!u.noTargetGet,g=u&&void 0!==u.name?u.name:n;o(e)&&("Symbol("===String(g).slice(0,7)&&(g="["+String(g).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(e,"name")||f&&e.name!==g)&&a(e,"name",g),(s=l(e)).source||(s.source=d.join("string"==typeof g?g:""))),t!==r?(p?!h&&t[n]&&(A=!0):delete t[n],A?t[n]=e:a(t,n,e)):A?t[n]=e:c(n,e)})(Function.prototype,"toString",(function(){return o(this)&&p(this).source||u(this)}))},4488:function(t,n,e){var r=e(7854).TypeError;t.exports=function(t){if(null==t)throw r("Can't call method on "+t);return t}},3505:function(t,n,e){var r=e(7854),o=Object.defineProperty;t.exports=function(t,n){try{o(r,t,{value:n,configurable:!0,writable:!0})}catch(e){r[t]=n}return n}},6200:function(t,n,e){var r=e(2309),o=e(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,n,e){var r=e(7854),o=e(3505),i="__core-js_shared__",a=r[i]||o(i,{});t.exports=a},2309:function(t,n,e){var r=e(1913),o=e(5465);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.20.2",mode:r?"pure":"global",copyright:"© 2022 Denis Pushkarev (zloirock.ru)"})},1400:function(t,n,e){var r=e(9303),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},5656:function(t,n,e){var r=e(8361),o=e(4488);t.exports=function(t){return r(o(t))}},9303:function(t){var n=Math.ceil,e=Math.floor;t.exports=function(t){var r=+t;return r!=r||0===r?0:(r>0?e:n)(r)}},7466:function(t,n,e){var r=e(9303),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:function(t,n,e){var r=e(7854),o=e(4488),i=r.Object;t.exports=function(t){return i(o(t))}},7593:function(t,n,e){var r=e(7854),o=e(6916),i=e(111),a=e(2190),c=e(8173),u=e(2140),s=e(5112),f=r.TypeError,p=s("toPrimitive");t.exports=function(t,n){if(!i(t)||a(t))return t;var e,r=c(t,p);if(r){if(void 0===n&&(n="default"),e=o(r,t,n),!i(e)||a(e))return e;throw f("Can't convert object to primitive value")}return void 0===n&&(n="number"),u(t,n)}},4948:function(t,n,e){var r=e(7593),o=e(2190);t.exports=function(t){var n=r(t,"string");return o(n)?n:n+""}},1694:function(t,n,e){var r={};r[e(5112)("toStringTag")]="z",t.exports="[object z]"===String(r)},6330:function(t,n,e){var r=e(7854).String;t.exports=function(t){try{return r(t)}catch(t){return"Object"}}},9711:function(t,n,e){var r=e(1702),o=0,i=Math.random(),a=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+a(++o+i,36)}},3307:function(t,n,e){var r=e(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,n,e){var r=e(9781),o=e(7293);t.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(t,n,e){var r=e(7854),o=e(2309),i=e(2597),a=e(9711),c=e(133),u=e(3307),s=o("wks"),f=r.Symbol,p=f&&f.for,l=u?f:f&&f.withoutSetter||a;t.exports=function(t){if(!i(s,t)||!c&&"string"!=typeof s[t]){var n="Symbol."+t;c&&i(f,t)?s[t]=f[t]:s[t]=u&&p?p(n):l(n)}return s[t]}},2222:function(t,n,e){"use strict";var r=e(2109),o=e(7854),i=e(7293),a=e(3157),c=e(111),u=e(7908),s=e(6244),f=e(6135),p=e(5417),l=e(1194),d=e(5112),A=e(7392),h=d("isConcatSpreadable"),g=9007199254740991,v="Maximum allowed index exceeded",y=o.TypeError,m=A>=51||!i((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),b=l("concat"),x=function(t){if(!c(t))return!1;var n=t[h];return void 0!==n?!!n:a(t)};r({target:"Array",proto:!0,forced:!m||!b},{concat:function(t){var n,e,r,o,i,a=u(this),c=p(a,0),l=0;for(n=-1,r=arguments.length;n<r;n++)if(x(i=-1===n?a:arguments[n])){if(l+(o=s(i))>g)throw y(v);for(e=0;e<o;e++,l++)e in i&&f(c,l,i[e])}else{if(l>=g)throw y(v);f(c,l++,i)}return c.length=l,c}})},3290:function(t,n,e){var r=e(2109),o=e(1285),i=e(1223);r({target:"Array",proto:!0},{fill:o}),i("fill")},561:function(t,n,e){"use strict";var r=e(2109),o=e(7854),i=e(1400),a=e(9303),c=e(6244),u=e(7908),s=e(5417),f=e(6135),p=e(1194)("splice"),l=o.TypeError,d=Math.max,A=Math.min,h=9007199254740991,g="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!p},{splice:function(t,n){var e,r,o,p,v,y,m=u(this),b=c(m),x=i(t,b),C=arguments.length;if(0===C?e=r=0:1===C?(e=0,r=b-x):(e=C-2,r=A(d(a(n),0),b-x)),b+e-r>h)throw l(g);for(o=s(m,r),p=0;p<r;p++)(v=x+p)in m&&f(o,p,m[v]);if(o.length=r,e<r){for(p=x;p<b-r;p++)y=p+e,(v=p+r)in m?m[y]=m[v]:delete m[y];for(p=b;p>b-r+e;p--)delete m[p-1]}else if(e>r)for(p=b-r;p>x;p--)y=p+e-1,(v=p+r-1)in m?m[y]=m[v]:delete m[y];for(p=0;p<e;p++)m[p+x]=arguments[p+2];return m.length=b-r+e,o}})},5438:function(t,n,e){var r=e(2109),o=Math.hypot,i=Math.abs,a=Math.sqrt;r({target:"Math",stat:!0,forced:!!o&&o(1/0,NaN)!==1/0},{hypot:function(t,n){for(var e,r,o=0,c=0,u=arguments.length,s=0;c<u;)s<(e=i(arguments[c++]))?(o=o*(r=s/e)*r+1,s=e):o+=e>0?(r=e/s)*r:e;return s===1/0?1/0:s*a(o)}})},1539:function(t,n,e){var r=e(1694),o=e(1320),i=e(288);r||o(Object.prototype,"toString",i,{unsafe:!0})},4800:function(t,n,e){"use strict";var r=e(7537),o=e.n(r),i=e(3645),a=e.n(i)()(o());a.push([t.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),n.Z=a},2926:function(t,n,e){"use strict";var r=e(7537),o=e.n(r),i=e(3645),a=e.n(i),c=e(1667),u=e.n(c),s=new URL(e(6428),e.b),f=a()(o()),p=u()(s);f.push([t.id,".game{background-image:url("+p+")}*{margin:0;padding:0;box-sizing:border-box}body{width:100vw;height:100vh;display:flex;justify-content:center;align-items:center}#mycanvas{display:block;margin-right:auto;margin-left:auto}.game{position:relative}#gameName{position:absolute;left:30%;padding-top:15px;font-weight:bold;font-size:30px;font-family:fantasy,papyrus;font-style:italic;user-select:none;color:#1b6bc7}#timer{position:absolute;padding-left:10px;padding-top:5px;user-select:none;color:#a67be6;font-size:30px;font-family:fantasy,papyrus}#links{position:absolute;user-select:none;padding-left:840px;padding-top:30px;margin-bottom:5px}#links div{padding-top:15px}#level{position:absolute;padding-left:10px;padding-top:50px;user-select:none;color:#ab81e9;font-size:30px;font-family:fantasy,papyrus}#instruction{position:absolute;padding-left:120px;padding-top:100px;user-select:none;color:#ebd246;font-family:fantasy,papyrus;font-size:20px}#start{display:relative;position:absolute;top:350px;left:200px;color:#1a3b03;font-family:fantasy,papyrus;padding-top:20px;padding-left:50px}#startgame{padding-left:50px}#startButton{padding-left:10px;width:300px;height:40px;border-radius:15px;background-color:#661eda;font-size:24px}#welcome{padding-bottom:50px;color:#ebd246;font-size:20px}#startButton:hover{background-color:#7c42e9}#stop{display:none;position:absolute;top:350px;left:100px;width:700px;height:260px;background-color:#bb8ee6;border-radius:20px;font-family:fantasy,papyrus}#restartButton{width:310px;height:40px;border-radius:15px;background-color:#661eda;font-size:24px}#colision{color:#13180e;font-size:20px}#restartButton:hover{background-color:#7c42e9}#slogon p{padding-top:18px}#image{display:flex}#buttonId{padding-top:10px}#animationImg{display:none}","",{version:3,sources:["webpack://./src/main.css"],names:[],mappings:"AAAA,MACI,wDAAA,CAEJ,EACI,QAAA,CACA,SAAA,CACA,qBAAA,CAGJ,KACI,WAAA,CACA,YAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CAGJ,UACI,aAAA,CACA,iBAAA,CACA,gBAAA,CAGJ,MACI,iBAAA,CAGJ,UACI,iBAAA,CACA,QAAA,CACA,gBAAA,CACA,gBAAA,CACA,cAAA,CACA,2BAAA,CAEA,iBAAA,CACA,gBAAA,CACA,aAAA,CAGJ,OACI,iBAAA,CACA,iBAAA,CACA,eAAA,CACA,gBAAA,CACA,aAAA,CACA,cAAA,CACA,2BAAA,CAGJ,OACI,iBAAA,CACA,gBAAA,CACA,kBAAA,CACA,gBAAA,CACA,iBAAA,CAIJ,WACI,gBAAA,CAIJ,OACI,iBAAA,CACA,iBAAA,CACA,gBAAA,CACA,gBAAA,CACA,aAAA,CACA,cAAA,CACA,2BAAA,CAGJ,aACI,iBAAA,CACA,kBAAA,CACA,iBAAA,CACA,gBAAA,CAEA,aAAA,CACA,2BAAA,CACA,cAAA,CAGJ,OACI,gBAAA,CACA,iBAAA,CACA,SAAA,CACA,UAAA,CACA,aAAA,CACA,2BAAA,CACA,gBAAA,CACA,iBAAA,CAMH,WACG,iBAAA,CAEJ,aACI,iBAAA,CACA,WAAA,CACA,WAAA,CACA,kBAAA,CACA,wBAAA,CACA,cAAA,CAGJ,SACI,mBAAA,CACA,aAAA,CACA,cAAA,CAGJ,mBACI,wBAAA,CAGJ,MACI,YAAA,CACA,iBAAA,CACA,SAAA,CACA,UAAA,CACA,WAAA,CACA,YAAA,CACA,wBAAA,CACA,kBAAA,CACA,2BAAA,CAMJ,eAGI,WAAA,CACA,WAAA,CACA,kBAAA,CACA,wBAAA,CACA,cAAA,CAEJ,UAII,aAAA,CACA,cAAA,CAGJ,qBACI,wBAAA,CAGJ,UACI,gBAAA,CAIJ,OACI,YAAA,CAIJ,UACI,gBAAA,CAIJ,cACI,YAAA",sourcesContent:[".game{\n    background-image: url('/images/milkyway.jpeg'); \n}\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#mycanvas{\n    display: block;\n    margin-right: auto;\n    margin-left: auto;\n}\n\n.game {\n    position: relative;\n}\n\n#gameName{\n    position: absolute;              \n    left: 30%;                     \n    padding-top: 15px;\n    font-weight: bold;\n    font-size: 30px;\n    font-family: fantasy, papyrus;\n    /* font-family: cursive, Brush Script MT; */\n    font-style: italic;\n    user-select: none;\n    color:rgb(27, 107, 199);\n}\n\n#timer{\n    position: absolute;\n    padding-left: 10px;\n    padding-top: 5px;\n    user-select: none;\n    color:rgb(166, 123, 230);\n    font-size: 30px;\n    font-family: fantasy, papyrus;\n}\n\n#links{\n    position: absolute;\n    user-select: none;\n    padding-left: 840px;\n    padding-top: 30px;\n    margin-bottom: 5px;\n\n}\n\n#links div{\n    padding-top: 15px;\n}\n\n\n#level{\n    position: absolute;\n    padding-left: 10px;\n    padding-top: 50px;\n    user-select: none;\n    color:rgb(171, 129, 233);\n    font-size: 30px;\n    font-family: fantasy, papyrus;\n}\n\n#instruction{\n    position: absolute;\n    padding-left: 120px;\n    padding-top: 100px;\n    user-select: none;\n    /* color:rgb(165, 94, 206); */\n    color: rgb(235, 210, 70);\n    font-family: fantasy, papyrus;\n    font-size: 20px;\n}\n\n#start{\n    display: relative;\n    position: absolute;\n    top: 350px;\n    left: 200px;\n    color:rgb(26, 59, 3);\n    font-family: fantasy, papyrus;\n    padding-top: 20px;\n    padding-left: 50px;\n    /* width: 500px; */\n    /* height: 300px; */\n    /* background-color: rgb(113, 65, 175); */\n    /* border-radius: 15px; */\n    \n}#startgame{\n    padding-left: 50px;\n}\n#startButton{\n    padding-left: 10px;\n    width: 300px;\n    height: 40px;\n    border-radius: 15px;\n    background-color: rgb(102, 30, 218);\n    font-size: 24px;\n}\n\n#welcome{\n    padding-bottom: 50px;\n    color: rgb(235, 210, 70);\n    font-size: 20px;\n}\n\n#startButton:hover{\n    background-color: rgb(124, 66, 233);\n}\n\n#stop{\n    display: none;\n    position: absolute;\n    top: 350px;\n    left: 100px;\n    width: 700px;\n    height: 260px;\n    background-color: rgb(187, 142, 230);\n    border-radius: 20px;\n    font-family: fantasy, papyrus;\n}\n\n/* #stop div{\n    justify-content: center;\n} */\n#restartButton{\n    /* margin-top: 10px; */\n    /* padding-left: 10px; */\n    width: 310px;\n    height: 40px;\n    border-radius: 15px;\n    background-color: rgb(102, 30, 218);\n    font-size: 24px;\n}\n#colision{\n    /* padding-top: 20px; */\n    /* padding-bottom: 2px; */\n    /* padding-left: 20px; */\n    color: rgb(19, 24, 14);\n    font-size: 20px;\n}\n\n#restartButton:hover{\n    background-color: rgb(124, 66, 233);\n}\n\n#slogon p{\n    padding-top: 18px;\n    \n}\n\n#image{\n    display: flex;\n    /* position: absolute; */\n    \n}\n#buttonId {\n    padding-top: 10px;\n    /* padding-left: 0px; */\n}\n\n#animationImg{\n    display: none;\n}"],sourceRoot:""}]),n.Z=f},3645:function(t){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(a[u]=!0)}for(var s=0;s<t.length;s++){var f=[].concat(t[s]);r&&a[f[0]]||(void 0!==i&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=i),e&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=e):f[2]=e),o&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=o):f[4]="".concat(o)),n.push(f))}},n}},1667:function(t){"use strict";t.exports=function(t,n){return n||(n={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),n.hash&&(t+=n.hash),/["'() \t\n]|(%20)/.test(t)||n.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},7537:function(t){"use strict";t.exports=function(t){var n=t[1],e=t[3];if(!e)return n;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */"),a=e.sources.map((function(t){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(t," */")}));return[n].concat(a).concat([i]).join("\n")}return[n].join("\n")}},3379:function(t){"use strict";var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var i={},a=[],c=0;c<t.length;c++){var u=t[c],s=r.base?u[0]+r.base:u[0],f=i[s]||0,p="".concat(s," ").concat(f);i[s]=f+1;var l=e(p),d={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==l)n[l].references++,n[l].updater(d);else{var A=o(d,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:A,references:1})}a.push(p)}return a}function o(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=e(i[a]);n[c].references--}for(var u=r(t,o),s=0;s<i.length;s++){var f=e(i[s]);0===n[f].references&&(n[f].updater(),n.splice(f,1))}i=u}}},569:function(t){"use strict";var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},9216:function(t){"use strict";t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},3565:function(t,n,e){"use strict";t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},7795:function(t){"use strict";t.exports=function(t){var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},4589:function(t){"use strict";t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}},6428:function(t,n,e){"use strict";t.exports=e.p+"e0347436877300b91270.jpeg"}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return t[r](i,i.exports,e),i.exports}e.m=t,e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},function(){var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var r=n.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t}(),e.b=document.baseURI||self.location.href,function(){"use strict";e(1539),e(561),e(5438),e(2222);var t=e(3379),n=e.n(t),r=e(7795),o=e.n(r),i=e(569),a=e.n(i),c=e(3565),u=e.n(c),s=e(9216),f=e.n(s),p=e(4589),l=e.n(p),d=e(2926),A={};function h(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}A.styleTagTransform=l(),A.setAttributes=u(),A.insert=a().bind(null,"head"),A.domAPI=o(),A.insertStyleElement=f(),n()(d.Z,A),d.Z&&d.Z.locals&&d.Z.locals;var g=document.getElementById("mycanvas").getContext("2d"),v=function(){function t(n,e,r,o,i,a){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=n,this.y=e,this.radius=r,this.image=o,this.vel=i,this.orbitRadius=a,this.startX=n,this.startY=e,this.radian=0}var n,e;return n=t,(e=[{key:"draw",value:function(){g.drawImage(this.image,this.x,this.y),g.shadowBlur=0}},{key:"update",value:function(){this.draw(),this.vel>0&&(this.radian+=this.vel,this.x=this.startX+Math.cos(this.radian)*this.orbitRadius,this.y=this.startY+Math.sin(this.radian)*this.orbitRadius)}}])&&h(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),t}();function y(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}e(3290);var m=document.getElementById("mycanvas"),b=m.getContext("2d"),x=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=Math.random()*m.width,this.y=Math.random()*m.height,this.radius=1*Math.random()}var n,e;return n=t,(e=[{key:"draw",value:function(){b.beginPath(),b.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),b.fillStyle="white",b.fill()}}])&&y(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),t}();function C(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var w=document.getElementById("mycanvas"),I=w.getContext("2d"),B=function(){function t(n,e,r,o){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=n,this.y=e,this.radius=r,this.color=o,this.dx=1*Math.random()+1,this.dy=1*Math.random()+1}var n,e;return n=t,(e=[{key:"draw",value:function(){I.beginPath(),I.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),I.fillStyle=this.color,I.fill()}},{key:"move",value:function(){this.draw(),this.x+=this.dx,this.y+=this.dy,(this.x+this.radius>w.width||this.x-this.radius<0)&&(this.dx=-this.dx),(this.y+this.radius>w.width||this.y-this.radius<0)&&(this.dy=-this.dy)}}])&&C(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),t}();function E(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var O=document.getElementById("mycanvas").getContext("2d"),j=function(){function t(n,e,r){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=n,this.y=e,this.image=r}var n,e;return n=t,(e=[{key:"draw",value:function(){O.drawImage(this.image,this.x,this.y),O.shadowBlur=0}}])&&E(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),t}();function S(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var M=document.getElementById("mycanvas").getContext("2d"),k=function(){function t(n,e,r,o,i){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=n,this.y=e,this.radius=r,this.color=o,this.vel=i}var n,e;return n=t,(e=[{key:"draw",value:function(){M.beginPath(),M.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),M.fillStyle=this.color,M.fill()}},{key:"update",value:function(){this.draw(),this.x+=this.vel.x,this.y+=this.vel.y}}])&&S(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),t}();function P(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var T=document.getElementById("mycanvas").getContext("2d"),z=function(){function t(n,e,r,o,i){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=n,this.y=e,this.radius=r,this.color=o,this.vel=i,this.alpha=1}var n,e;return n=t,(e=[{key:"draw",value:function(){T.save(),T.globalAlpha=this.alpha,T.beginPath(),T.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),T.fillStyle=this.color,T.fill(),T.restore()}},{key:"update",value:function(){this.draw(),this.x+=this.vel.x,this.y+=this.vel.y,this.alpha-=.01}}])&&P(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),t}();window.addEventListener("DOMContentLoaded",(function(t){var n=document.getElementById("mycanvas"),e=n.getContext("2d");console.log("everything is fine, you can do this");var r=!1,o=document.getElementById("startButton"),i=document.getElementById("timeId"),a=document.getElementById("start"),c=document.getElementById("stop"),u=document.getElementById("restartButton"),s=document.getElementById("explosion"),f=new Image;f.src=s.src;var p=document.getElementById("sunId"),l=new Image;l.src=p.src;var d=document.getElementById("mercuryId"),A=new Image;A.src=d.src;var h=document.getElementById("venusId"),g=new Image;g.src=h.src;var y=document.getElementById("earthId"),m=new Image;m.src=y.src;var b=document.getElementById("marsId"),C=new Image;C.src=b.src;var w=document.getElementById("jupiterId"),I=new Image;I.src=w.src;for(var E=new v(n.width/2-l.width/2,n.height/2-l.height/2,50,l,0,0),O=new v(n.width/2-A.width/2,n.height/2-A.height/2,5,A,.025,120),S=new v(n.width/2-g.width/2,n.height/2-g.height/2,15,g,.01,180),M=new v(n.width/2-m.width/2,n.height/2-m.height/2,20,m,.004,230),P=new v(n.width/2-C.width/2,n.height/2-C.height/2,20,C,.003,310),T=new v(n.width/2-I.width/2,n.height/2-I.height/2,30,I,.0015,450),J=[],R=0;R<500;R++)J.push(new x);for(var G=[],F=0;F<5;F++){var L=Math.floor(15*Math.random())+10,U=Math.random()*(n.width-2*L)+L,N=Math.random()*(n.height-2*L)+L;G.push(new B(U,N,L,"grey"))}var W=document.getElementById("gunId"),_=new Image;_.src=W.src;var Y=new j(450,860,_),Z=[];addEventListener("click",(function(t){var n=Math.atan2(t.clientY-860,t.clientX-470),e={x:20*Math.cos(n),y:20*Math.sin(n)},r=new k(470,860,5,"white",e);Z.push(r)}));var D,q,X=[];function $(){D=requestAnimationFrame($),e.clearRect(0,0,n.width,n.height),e.fillStyle="rgba(0, 0, 0)",e.fillRect(0,0,n.width,n.height),E.draw(),J.forEach((function(t){t.draw()})),O.update(),S.update(),M.update(),P.update(),T.update(),Y.draw(),X.forEach((function(t,n){t.alpha<=0?X.splice(n,1):t.update()})),Z.forEach((function(t,e){t.update(),(t.x+t.radius<0||t.x-t.radius>n.width||t.y+t.radius<0||t.y-t.radius>n.height)&&Z.splice(e,1)})),G.forEach((function(t,n){if(t.move(),Math.hypot(M.x+m.width/2-t.x,M.y+m.height/2-t.y)-t.radius-m.width/2<-9.9){var o=new Event("colision");window.dispatchEvent(o),r=!0,e.drawImage(f,M.x,M.y)}Z.forEach((function(e,r){if(Math.hypot(e.x-t.x,e.y-t.y)-t.radius-e.radius<1){t.color="orange";for(var o=0;o<2*t.radius;o++){var i={x:(Math.random()-.5)*(8*Math.random()),y:(Math.random()-.5)*(8*Math.random())};X.push(new z(e.x,e.y,2*Math.random(),"orange",i))}t.radius-8>8?(t.radius-=8,Z.splice(r,1)):(G.splice(n,1),Z.splice(r,1))}}))})),r&&(c.style.display="absolute")}o.addEventListener("click",(function(t){$(),a.style.display="none";var n=60;q=setInterval((function(){var t=Math.floor(n/60),e=n%60;e=e<10?"0"+e:e,i.innerHTML="".concat(t,":").concat(e),n>0&&n--}),1e3)})),u.addEventListener("click",(function(t){$()})),window.addEventListener("colision",(function(t){c.style.display="flex",cancelAnimationFrame(D),clearInterval(q)}))}))}(),function(){"use strict";var t=e(3379),n=e.n(t),r=e(7795),o=e.n(r),i=e(569),a=e.n(i),c=e(3565),u=e.n(c),s=e(9216),f=e.n(s),p=e(4589),l=e.n(p),d=e(4800),A={};A.styleTagTransform=l(),A.setAttributes=u(),A.insert=a().bind(null,"head"),A.domAPI=o(),A.insertStyleElement=f(),n()(d.Z,A),d.Z&&d.Z.locals&&d.Z.locals}()}();
//# sourceMappingURL=main.js.map