(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d355bc2"],{"00b4":function(t,e,r){"use strict";r("ac1f");var n=r("23e7"),a=r("da84"),o=r("c65b"),i=r("e330"),c=r("1626"),l=r("861d"),u=function(){var t=!1,e=/[ac]/;return e.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&t}(),s=a.Error,d=i(/./.test);n({target:"RegExp",proto:!0,forced:!u},{test:function(t){var e=this.exec;if(!c(e))return d(this,t);var r=o(e,this,t);if(null!==r&&!l(r))throw new s("RegExp exec method returned something other than an Object or null");return!!r}})},"057f":function(t,e,r){var n=r("c6b6"),a=r("fc6a"),o=r("241c").f,i=r("4dae"),c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],l=function(t){try{return o(t)}catch(e){return i(c)}};t.exports.f=function(t){return c&&"Window"==n(t)?l(t):o(a(t))}},"073a":function(t,e,r){},"0b42":function(t,e,r){var n=r("da84"),a=r("e8b5"),o=r("68ee"),i=r("861d"),c=r("b622"),l=c("species"),u=n.Array;t.exports=function(t){var e;return a(t)&&(e=t.constructor,o(e)&&(e===u||a(e.prototype))?e=void 0:i(e)&&(e=e[l],null===e&&(e=void 0))),void 0===e?u:e}},"107c":function(t,e,r){var n=r("d039"),a=r("da84"),o=a.RegExp;t.exports=n((function(){var t=o("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},1148:function(t,e,r){"use strict";var n=r("da84"),a=r("5926"),o=r("577e"),i=r("1d80"),c=n.RangeError;t.exports=function(t){var e=o(i(this)),r="",n=a(t);if(n<0||n==1/0)throw c("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(e+=e))1&n&&(r+=e);return r}},"159b":function(t,e,r){var n=r("da84"),a=r("fdbc"),o=r("785a"),i=r("17c2"),c=r("9112"),l=function(t){if(t&&t.forEach!==i)try{c(t,"forEach",i)}catch(e){t.forEach=i}};for(var u in a)a[u]&&l(n[u]&&n[u].prototype);l(o)},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,a=r("a640"),o=a("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,r){var n=r("d039"),a=r("b622"),o=r("2d00"),i=a("species");t.exports=function(t){return o>=51||!n((function(){var e=[],r=e.constructor={};return r[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"408a":function(t,e,r){var n=r("e330");t.exports=n(1..valueOf)},"428f":function(t,e,r){var n=r("da84");t.exports=n},"4dae":function(t,e,r){var n=r("da84"),a=r("23cb"),o=r("07fa"),i=r("8418"),c=n.Array,l=Math.max;t.exports=function(t,e,r){for(var n=o(t),u=a(e,n),s=a(void 0===r?n:r,n),d=c(l(s-u,0)),f=0;u<s;u++,f++)i(d,f,t[u]);return d.length=f,d}},"4df4":function(t,e,r){"use strict";var n=r("da84"),a=r("0366"),o=r("c65b"),i=r("7b0b"),c=r("9bdd"),l=r("e95a"),u=r("68ee"),s=r("07fa"),d=r("8418"),f=r("9a1f"),b=r("35a1"),p=n.Array;t.exports=function(t){var e=i(t),r=u(this),n=arguments.length,v=n>1?arguments[1]:void 0,x=void 0!==v;x&&(v=a(v,n>2?arguments[2]:void 0));var h,y,m,g,O,j,w=b(e),S=0;if(!w||this==p&&l(w))for(h=s(e),y=r?new this(h):p(h);h>S;S++)j=x?v(e[S],S):e[S],d(y,S,j);else for(g=f(e,w),O=g.next,y=r?new this:[];!(m=o(O,g)).done;S++)j=x?c(g,v,[m.value,S],!0):m.value,d(y,S,j);return y.length=S,y}},"65f0":function(t,e,r){var n=r("0b42");t.exports=function(t,e){return new(n(t))(0===e?0:e)}},"746f":function(t,e,r){var n=r("428f"),a=r("1a2d"),o=r("e538"),i=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});a(e,t)||i(e,t,{value:o.f(t)})}},"7fde":function(t,e,r){"use strict";r("073a")},8418:function(t,e,r){"use strict";var n=r("a04b"),a=r("9bf2"),o=r("5c6c");t.exports=function(t,e,r){var i=n(e);i in t?a.f(t,i,o(0,r)):t[i]=r}},9263:function(t,e,r){"use strict";var n=r("c65b"),a=r("e330"),o=r("577e"),i=r("ad6d"),c=r("9f7f"),l=r("5692"),u=r("7c73"),s=r("69f3").get,d=r("fce3"),f=r("107c"),b=l("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,v=p,x=a("".charAt),h=a("".indexOf),y=a("".replace),m=a("".slice),g=function(){var t=/a/,e=/b*/g;return n(p,t,"a"),n(p,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),O=c.BROKEN_CARET,j=void 0!==/()??/.exec("")[1],w=g||j||O||d||f;w&&(v=function(t){var e,r,a,c,l,d,f,w=this,S=s(w),k=o(t),A=S.raw;if(A)return A.lastIndex=w.lastIndex,e=n(v,A,k),w.lastIndex=A.lastIndex,e;var R=S.groups,E=O&&w.sticky,I=n(i,w),_=w.source,D=0,P=k;if(E&&(I=y(I,"y",""),-1===h(I,"g")&&(I+="g"),P=m(k,w.lastIndex),w.lastIndex>0&&(!w.multiline||w.multiline&&"\n"!==x(k,w.lastIndex-1))&&(_="(?: "+_+")",P=" "+P,D++),r=new RegExp("^(?:"+_+")",I)),j&&(r=new RegExp("^"+_+"$(?!\\s)",I)),g&&(a=w.lastIndex),c=n(p,E?r:w,P),E?c?(c.input=m(c.input,D),c[0]=m(c[0],D),c.index=w.lastIndex,w.lastIndex+=c[0].length):w.lastIndex=0:g&&c&&(w.lastIndex=w.global?c.index+c[0].length:a),j&&c&&c.length>1&&n(b,c[0],r,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(c[l]=void 0)})),c&&R)for(c.groups=d=u(null),l=0;l<R.length;l++)f=R[l],d[f[0]]=c[f[1]];return c}),t.exports=v},"99af":function(t,e,r){"use strict";var n=r("23e7"),a=r("da84"),o=r("d039"),i=r("e8b5"),c=r("861d"),l=r("7b0b"),u=r("07fa"),s=r("8418"),d=r("65f0"),f=r("1dde"),b=r("b622"),p=r("2d00"),v=b("isConcatSpreadable"),x=9007199254740991,h="Maximum allowed index exceeded",y=a.TypeError,m=p>=51||!o((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),g=f("concat"),O=function(t){if(!c(t))return!1;var e=t[v];return void 0!==e?!!e:i(t)},j=!m||!g;n({target:"Array",proto:!0,forced:j},{concat:function(t){var e,r,n,a,o,i=l(this),c=d(i,0),f=0;for(e=-1,n=arguments.length;e<n;e++)if(o=-1===e?i:arguments[e],O(o)){if(a=u(o),f+a>x)throw y(h);for(r=0;r<a;r++,f++)r in o&&s(c,f,o[r])}else{if(f>=x)throw y(h);s(c,f++,o)}return c.length=f,c}})},"9bdd":function(t,e,r){var n=r("825a"),a=r("2a62");t.exports=function(t,e,r,o){try{return o?e(n(r)[0],r[1]):e(r)}catch(i){a(t,"throw",i)}}},"9f7f":function(t,e,r){var n=r("d039"),a=r("da84"),o=a.RegExp,i=n((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),c=i||n((function(){return!o("a","y").sticky})),l=i||n((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));t.exports={BROKEN_CARET:l,MISSED_STICKY:c,UNSUPPORTED_Y:i}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),a=r("da84"),o=r("d066"),i=r("2ba4"),c=r("c65b"),l=r("e330"),u=r("c430"),s=r("83ab"),d=r("4930"),f=r("d039"),b=r("1a2d"),p=r("e8b5"),v=r("1626"),x=r("861d"),h=r("3a9b"),y=r("d9b5"),m=r("825a"),g=r("7b0b"),O=r("fc6a"),j=r("a04b"),w=r("577e"),S=r("5c6c"),k=r("7c73"),A=r("df75"),R=r("241c"),E=r("057f"),I=r("7418"),_=r("06cf"),D=r("9bf2"),P=r("d1e7"),G=r("f36a"),T=r("6eeb"),U=r("5692"),V=r("f772"),N=r("d012"),C=r("90e3"),F=r("b622"),B=r("e538"),M=r("746f"),q=r("d44e"),J=r("69f3"),Y=r("b727").forEach,X=V("hidden"),$="Symbol",L="prototype",z=F("toPrimitive"),K=J.set,W=J.getterFor($),H=Object[L],Q=a.Symbol,Z=Q&&Q[L],tt=a.TypeError,et=a.QObject,rt=o("JSON","stringify"),nt=_.f,at=D.f,ot=E.f,it=P.f,ct=l([].push),lt=U("symbols"),ut=U("op-symbols"),st=U("string-to-symbol-registry"),dt=U("symbol-to-string-registry"),ft=U("wks"),bt=!et||!et[L]||!et[L].findChild,pt=s&&f((function(){return 7!=k(at({},"a",{get:function(){return at(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=nt(H,e);n&&delete H[e],at(t,e,r),n&&t!==H&&at(H,e,n)}:at,vt=function(t,e){var r=lt[t]=k(Z);return K(r,{type:$,tag:t,description:e}),s||(r.description=e),r},xt=function(t,e,r){t===H&&xt(ut,e,r),m(t);var n=j(e);return m(r),b(lt,n)?(r.enumerable?(b(t,X)&&t[X][n]&&(t[X][n]=!1),r=k(r,{enumerable:S(0,!1)})):(b(t,X)||at(t,X,S(1,{})),t[X][n]=!0),pt(t,n,r)):at(t,n,r)},ht=function(t,e){m(t);var r=O(e),n=A(r).concat(jt(r));return Y(n,(function(e){s&&!c(mt,r,e)||xt(t,e,r[e])})),t},yt=function(t,e){return void 0===e?k(t):ht(k(t),e)},mt=function(t){var e=j(t),r=c(it,this,e);return!(this===H&&b(lt,e)&&!b(ut,e))&&(!(r||!b(this,e)||!b(lt,e)||b(this,X)&&this[X][e])||r)},gt=function(t,e){var r=O(t),n=j(e);if(r!==H||!b(lt,n)||b(ut,n)){var a=nt(r,n);return!a||!b(lt,n)||b(r,X)&&r[X][n]||(a.enumerable=!0),a}},Ot=function(t){var e=ot(O(t)),r=[];return Y(e,(function(t){b(lt,t)||b(N,t)||ct(r,t)})),r},jt=function(t){var e=t===H,r=ot(e?ut:O(t)),n=[];return Y(r,(function(t){!b(lt,t)||e&&!b(H,t)||ct(n,lt[t])})),n};if(d||(Q=function(){if(h(Z,this))throw tt("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?w(arguments[0]):void 0,e=C(t),r=function(t){this===H&&c(r,ut,t),b(this,X)&&b(this[X],e)&&(this[X][e]=!1),pt(this,e,S(1,t))};return s&&bt&&pt(H,e,{configurable:!0,set:r}),vt(e,t)},Z=Q[L],T(Z,"toString",(function(){return W(this).tag})),T(Q,"withoutSetter",(function(t){return vt(C(t),t)})),P.f=mt,D.f=xt,_.f=gt,R.f=E.f=Ot,I.f=jt,B.f=function(t){return vt(F(t),t)},s&&(at(Z,"description",{configurable:!0,get:function(){return W(this).description}}),u||T(H,"propertyIsEnumerable",mt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!d,sham:!d},{Symbol:Q}),Y(A(ft),(function(t){M(t)})),n({target:$,stat:!0,forced:!d},{for:function(t){var e=w(t);if(b(st,e))return st[e];var r=Q(e);return st[e]=r,dt[r]=e,r},keyFor:function(t){if(!y(t))throw tt(t+" is not a symbol");if(b(dt,t))return dt[t]},useSetter:function(){bt=!0},useSimple:function(){bt=!1}}),n({target:"Object",stat:!0,forced:!d,sham:!s},{create:yt,defineProperty:xt,defineProperties:ht,getOwnPropertyDescriptor:gt}),n({target:"Object",stat:!0,forced:!d},{getOwnPropertyNames:Ot,getOwnPropertySymbols:jt}),n({target:"Object",stat:!0,forced:f((function(){I.f(1)}))},{getOwnPropertySymbols:function(t){return I.f(g(t))}}),rt){var wt=!d||f((function(){var t=Q();return"[null]"!=rt([t])||"{}"!=rt({a:t})||"{}"!=rt(Object(t))}));n({target:"JSON",stat:!0,forced:wt},{stringify:function(t,e,r){var n=G(arguments),a=e;if((x(e)||void 0!==t)&&!y(t))return p(e)||(e=function(t,e){if(v(a)&&(e=c(a,this,t,e)),!y(e))return e}),n[1]=e,i(rt,null,n)}})}if(!Z[z]){var St=Z.valueOf;T(Z,z,(function(t){return c(St,this)}))}q(Q,$),N[X]=!0},a630:function(t,e,r){var n=r("23e7"),a=r("4df4"),o=r("1c7e"),i=!o((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:i},{from:a})},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},ac1f:function(t,e,r){"use strict";var n=r("23e7"),a=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b0c0:function(t,e,r){var n=r("83ab"),a=r("5e77").EXISTS,o=r("e330"),i=r("9bf2").f,c=Function.prototype,l=o(c.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,s=o(u.exec),d="name";n&&!a&&i(c,d,{configurable:!0,get:function(){try{return s(u,l(this))[1]}catch(t){return""}}})},b680:function(t,e,r){"use strict";var n=r("23e7"),a=r("da84"),o=r("e330"),i=r("5926"),c=r("408a"),l=r("1148"),u=r("d039"),s=a.RangeError,d=a.String,f=Math.floor,b=o(l),p=o("".slice),v=o(1..toFixed),x=function(t,e,r){return 0===e?r:e%2===1?x(t,e-1,r*t):x(t*t,e/2,r)},h=function(t){var e=0,r=t;while(r>=4096)e+=12,r/=4096;while(r>=2)e+=1,r/=2;return e},y=function(t,e,r){var n=-1,a=r;while(++n<6)a+=e*t[n],t[n]=a%1e7,a=f(a/1e7)},m=function(t,e){var r=6,n=0;while(--r>=0)n+=t[r],t[r]=f(n/e),n=n%e*1e7},g=function(t){var e=6,r="";while(--e>=0)if(""!==r||0===e||0!==t[e]){var n=d(t[e]);r=""===r?n:r+b("0",7-n.length)+n}return r},O=u((function(){return"0.000"!==v(8e-5,3)||"1"!==v(.9,0)||"1.25"!==v(1.255,2)||"1000000000000000128"!==v(0xde0b6b3a7640080,0)}))||!u((function(){v({})}));n({target:"Number",proto:!0,forced:O},{toFixed:function(t){var e,r,n,a,o=c(this),l=i(t),u=[0,0,0,0,0,0],f="",v="0";if(l<0||l>20)throw s("Incorrect fraction digits");if(o!=o)return"NaN";if(o<=-1e21||o>=1e21)return d(o);if(o<0&&(f="-",o=-o),o>1e-21)if(e=h(o*x(2,69,1))-69,r=e<0?o*x(2,-e,1):o/x(2,e,1),r*=4503599627370496,e=52-e,e>0){y(u,0,r),n=l;while(n>=7)y(u,1e7,0),n-=7;y(u,x(10,n,1),0),n=e-1;while(n>=23)m(u,1<<23),n-=23;m(u,1<<n),y(u,1,1),m(u,2),v=g(u)}else y(u,0,r),y(u,1<<-e,0),v=g(u)+b("0",l);return l>0?(a=v.length,v=f+(a<=l?"0."+b("0",l-a)+v:p(v,0,a-l)+"."+p(v,a-l))):v=f+v,v}})},b727:function(t,e,r){var n=r("0366"),a=r("e330"),o=r("44ad"),i=r("7b0b"),c=r("07fa"),l=r("65f0"),u=a([].push),s=function(t){var e=1==t,r=2==t,a=3==t,s=4==t,d=6==t,f=7==t,b=5==t||d;return function(p,v,x,h){for(var y,m,g=i(p),O=o(g),j=n(v,x),w=c(O),S=0,k=h||l,A=e?k(p,w):r||f?k(p,0):void 0;w>S;S++)if((b||S in O)&&(y=O[S],m=j(y,S,g),t))if(e)A[S]=m;else if(m)switch(t){case 3:return!0;case 5:return y;case 6:return S;case 2:u(A,y)}else switch(t){case 4:return!1;case 7:u(A,y)}return d?-1:a||s?s:A}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterReject:s(7)}},cd56:function(t,e,r){"use strict";r.r(e);r("b680");var n=r("7a23"),a=function(t){return Object(n["v"])("data-v-17913848"),t=t(),Object(n["t"])(),t},o={id:"home"},i={class:"left"},c={class:"image-container"},l=a((function(){return Object(n["e"])("h2",null,"Graph ",-1)})),u=Object(n["f"])('<defs data-v-17913848><marker id="arrow-head" orient="auto" markerWidth="2" markerHeight="4" refX="0.1" refY="2" data-v-17913848><path d="M0,0 V4 L2,2 Z" fill="black" data-v-17913848></path></marker></defs><polygon class="triangle" points="0 0, 0 40, -20 0" fill="rgb(0, 160, 223)" data-v-17913848></polygon><rect class="rectangle" x="0" y="0" width="20" height="40" fill="rgb(0, 160, 223)" data-v-17913848></rect><path class="circle" fill="rgb(0, 160, 223)" d="M 0 0 h 20 C 20 0 20 -20 0 -20" data-v-17913848></path><path d="M -95 0, h 190" stroke="black" stroke-width="1" marker-end="url(#arrow-head)" data-v-17913848></path><path d="M 0 95, v -190" stroke="black" stroke-width="1" marker-end="url(#arrow-head)" data-v-17913848></path><text x="92" y="-3" class="graph__inscription" data-v-17913848>x</text><text x="3" y="-92" class="graph__inscription" data-v-17913848>y</text><text x="12" y="-3" class="graph__inscription" data-v-17913848>R/2</text><text x="-31" y="-3" class="graph__inscription" data-v-17913848>-R/2</text><text x="3" y="23" class="graph__inscription" data-v-17913848>-R/2</text><text x="3" y="-17" class="graph__inscription" data-v-17913848>R/2</text><text x="37" y="-3" class="graph__inscription" data-v-17913848>R</text><text x="-47" y="-3" class="graph__inscription" data-v-17913848>-R</text><text x="3" y="43" class="graph__inscription" data-v-17913848>-R</text><text x="3" y="-37" class="graph__inscription" data-v-17913848>R</text><circle cx="0" cy="0" r="1.5" fill="black" data-v-17913848></circle><circle cx="0" cy="20" r="1.5" fill="black" data-v-17913848></circle><circle cx="0" cy="-20" r="1.5" fill="black" data-v-17913848></circle><circle cx="20" cy="0" r="1.5" fill="black" data-v-17913848></circle><circle cx="-20" cy="0" r="1.5" fill="black" data-v-17913848></circle><circle cx="40" cy="0" r="1.5" fill="black" data-v-17913848></circle><circle cx="-40" cy="0" r="1.5" fill="black" data-v-17913848></circle><circle cx="0" cy="40" r="1.5" fill="black" data-v-17913848></circle><circle cx="0" cy="-40" r="1.5" fill="black" data-v-17913848></circle>',25),s=[u],d={class:"right"},f=a((function(){return Object(n["e"])("h2",{style:{"text-align":"center"}},"Input Data From here: ",-1)})),b={class:"X-input"},p=a((function(){return Object(n["e"])("label",{class:"lable_xyr"},"X: ",-1)})),v=a((function(){return Object(n["e"])("label",{class:"xbox-label",for:"x-radio1"},"-4",-1)})),x=a((function(){return Object(n["e"])("label",{class:"xbox-label",for:"x-radio2"},"-3",-1)})),h=a((function(){return Object(n["e"])("label",{class:"xbox-label",for:"x-radio3"},"-2",-1)})),y=a((function(){return Object(n["e"])("label",{class:"xbox-label",for:"x-radio4"},"-1",-1)})),m=a((function(){return Object(n["e"])("label",{class:"xbox-label",for:"x-radio5"},"0",-1)})),g=a((function(){return Object(n["e"])("label",{class:"xbox-label",for:"x-radio6"},"1",-1)})),O=a((function(){return Object(n["e"])("label",{class:"xbox-label",for:"x-radio7"},"2",-1)})),j=a((function(){return Object(n["e"])("label",{class:"xbox-label",for:"x-radio8"},"3",-1)})),w=a((function(){return Object(n["e"])("label",{class:"xbox-label",for:"x-radio9"},"4",-1)})),S=a((function(){return Object(n["e"])("br",null,null,-1)})),k={class:"Y-Input"},A=a((function(){return Object(n["e"])("label",{class:"lable_xyr label_y"},"Y: ",-1)})),R=a((function(){return Object(n["e"])("br",null,null,-1)})),E={class:"R-input"},I=a((function(){return Object(n["e"])("label",{class:"lable_xyr"},"R: ",-1)})),_=a((function(){return Object(n["e"])("label",{class:"xbox-label",for:"r-radio1"},"-4",-1)})),D=a((function(){return Object(n["e"])("label",{class:"xbox-label",for:"r-radio2"},"-3",-1)})),P=a((function(){return Object(n["e"])("label",{class:"xbox-label",for:"r-radio3"},"-2",-1)})),G=a((function(){return Object(n["e"])("label",{class:"xbox-label",for:"r-radio4"},"-1",-1)})),T=a((function(){return Object(n["e"])("label",{class:"xbox-label",for:"r-radio5"},"0",-1)})),U=a((function(){return Object(n["e"])("label",{class:"xbox-label",for:"r-radio6"},"1",-1)})),V=a((function(){return Object(n["e"])("label",{class:"xbox-label",for:"r-radio7"},"2",-1)})),N=a((function(){return Object(n["e"])("label",{class:"xbox-label",for:"r-radio8"},"3",-1)})),C=a((function(){return Object(n["e"])("label",{class:"xbox-label",for:"r-radio9"},"4",-1)})),F={class:"buttons"},B={id:"maintable"},M={class:"table"},q={style:{width:"100%"}},J=a((function(){return Object(n["e"])("br",null,null,-1)})),Y=a((function(){return Object(n["e"])("div",{class:"plate-top"},[Object(n["e"])("h2",{class:"plate-top-title"}," Table ")],-1)})),X={class:"scroll-container"},$={id:"result-table"},L=a((function(){return Object(n["e"])("tr",{class:"table-header"},[Object(n["e"])("th",{class:"coords-col"}," X "),Object(n["e"])("th",{class:"coords-col"},"Y"),Object(n["e"])("th",{class:"coords-col"},"R"),Object(n["e"])("th",{class:"hitres-col"}," Hit result"),Object(n["e"])("th",{class:"time-col"}," Excution time")],-1)})),z={class:"coords-col"},K={class:"coords-col"},W={class:"coords-col"},H={class:"hitres-col"},Q={class:"time-col"};function Z(t,e,r,a,u,Z){return Object(n["s"])(),Object(n["d"])(n["a"],null,[Object(n["e"])("div",o,[Object(n["e"])("div",i,[Object(n["e"])("div",c,[l,(Object(n["s"])(),Object(n["d"])("svg",{class:"graph",viewBox:"-100 -100 200 200",xmlns:"http://www.w3.org/2000/svg",onClick:e[0]||(e[0]=function(){return Z.sendPointFromSvg&&Z.sendPointFromSvg.apply(Z,arguments)})},s))])]),Object(n["e"])("div",d,[f,Object(n["e"])("div",b,[p,Object(n["G"])(Object(n["e"])("input",{class:"x-radio",id:"x-radio1",type:"radio",name:"xval",value:"-4","onUpdate:modelValue":e[1]||(e[1]=function(t){return u.x=t})},null,512),[[n["D"],u.x]]),v,Object(n["G"])(Object(n["e"])("input",{class:"x-radio",id:"x-radio2",type:"radio",name:"xval",value:"-3","onUpdate:modelValue":e[2]||(e[2]=function(t){return u.x=t})},null,512),[[n["D"],u.x]]),x,Object(n["G"])(Object(n["e"])("input",{class:"x-radio",id:"x-radio3",type:"radio",name:"xval",value:"-2","onUpdate:modelValue":e[3]||(e[3]=function(t){return u.x=t})},null,512),[[n["D"],u.x]]),h,Object(n["G"])(Object(n["e"])("input",{class:"x-radio",id:"x-radio4",type:"radio",name:"xval",value:"-1","onUpdate:modelValue":e[4]||(e[4]=function(t){return u.x=t})},null,512),[[n["D"],u.x]]),y,Object(n["G"])(Object(n["e"])("input",{class:"x-radio",id:"x-radio5",type:"radio",name:"xval",value:"0","onUpdate:modelValue":e[5]||(e[5]=function(t){return u.x=t})},null,512),[[n["D"],u.x]]),m,Object(n["G"])(Object(n["e"])("input",{class:"x-radio",id:"x-radio6",type:"radio",name:"xval",value:"1","onUpdate:modelValue":e[6]||(e[6]=function(t){return u.x=t})},null,512),[[n["D"],u.x]]),g,Object(n["G"])(Object(n["e"])("input",{class:"x-radio",id:"x-radio7",type:"radio",name:"xval",value:"2","onUpdate:modelValue":e[7]||(e[7]=function(t){return u.x=t})},null,512),[[n["D"],u.x]]),O,Object(n["G"])(Object(n["e"])("input",{class:"x-radio",id:"x-radio8",type:"radio",name:"xval",value:"3","onUpdate:modelValue":e[8]||(e[8]=function(t){return u.x=t})},null,512),[[n["D"],u.x]]),j,Object(n["G"])(Object(n["e"])("input",{class:"x-radio",id:"x-radio9",type:"radio",name:"xval",value:"4","onUpdate:modelValue":e[9]||(e[9]=function(t){return u.x=t})},null,512),[[n["D"],u.x]]),w]),S,Object(n["e"])("div",k,[A,Object(n["G"])(Object(n["e"])("input",{id:"y-textinput",type:"text",name:"yval",maxlength:"9",autocomplete:"off",placeholder:"Number from -3 to 3","onUpdate:modelValue":e[10]||(e[10]=function(t){return u.y=t})},null,512),[[n["E"],u.y]])]),R,Object(n["e"])("div",E,[I,Object(n["G"])(Object(n["e"])("input",{class:"x-radio",id:"r-radio1",type:"radio",name:"rval",value:"-4","onUpdate:modelValue":e[11]||(e[11]=function(t){return u.r=t})},null,512),[[n["D"],u.r]]),_,Object(n["G"])(Object(n["e"])("input",{class:"x-radio",id:"r-radio2",type:"radio",name:"rval",value:"-3","onUpdate:modelValue":e[12]||(e[12]=function(t){return u.r=t})},null,512),[[n["D"],u.r]]),D,Object(n["G"])(Object(n["e"])("input",{class:"x-radio",id:"r-radio3",type:"radio",name:"rval",value:"-2","onUpdate:modelValue":e[13]||(e[13]=function(t){return u.r=t})},null,512),[[n["D"],u.r]]),P,Object(n["G"])(Object(n["e"])("input",{class:"x-radio",id:"r-radio4",type:"radio",name:"rval",value:"-1","onUpdate:modelValue":e[14]||(e[14]=function(t){return u.r=t})},null,512),[[n["D"],u.r]]),G,Object(n["G"])(Object(n["e"])("input",{class:"x-radio",id:"r-radio5",type:"radio",name:"rval",value:"0","onUpdate:modelValue":e[15]||(e[15]=function(t){return u.r=t})},null,512),[[n["D"],u.r]]),T,Object(n["G"])(Object(n["e"])("input",{class:"x-radio",id:"r-radio6",type:"radio",name:"rval",value:"1","onUpdate:modelValue":e[16]||(e[16]=function(t){return u.r=t})},null,512),[[n["D"],u.r]]),U,Object(n["G"])(Object(n["e"])("input",{class:"x-radio",id:"r-radio7",type:"radio",name:"rval",value:"2","onUpdate:modelValue":e[17]||(e[17]=function(t){return u.r=t})},null,512),[[n["D"],u.r]]),V,Object(n["G"])(Object(n["e"])("input",{class:"x-radio",id:"r-radio8",type:"radio",name:"rval",value:"3","onUpdate:modelValue":e[18]||(e[18]=function(t){return u.r=t})},null,512),[[n["D"],u.r]]),N,Object(n["G"])(Object(n["e"])("input",{class:"x-radio",id:"r-radio9",type:"radio",name:"rval",value:"4","onUpdate:modelValue":e[19]||(e[19]=function(t){return u.r=t})},null,512),[[n["D"],u.r]]),C,Object(n["e"])("div",F,[Object(n["e"])("button",{class:"button-submit",type:"submit",name:"Submit",onClick:e[20]||(e[20]=function(){return Z.submitForm&&Z.submitForm.apply(Z,arguments)})},"Submit"),Object(n["e"])("button",{class:"button-reset",type:"reset",name:"Reset",onClick:e[21]||(e[21]=function(){return Z.resetPoints&&Z.resetPoints.apply(Z,arguments)})},"Reset"),Object(n["e"])("button",{class:"button-logout",name:"logout",onClick:e[22]||(e[22]=function(){return Z.logout&&Z.logout.apply(Z,arguments)})},"Logout")])])])]),Object(n["e"])("div",B,[Object(n["e"])("div",M,[Object(n["e"])("table",q,[J,Y,Object(n["e"])("div",X,[Object(n["e"])("table",$,[L,(Object(n["s"])(!0),Object(n["d"])(n["a"],null,Object(n["y"])(u.points,(function(t){return Object(n["s"])(),Object(n["d"])("tr",{key:t},[Object(n["e"])("td",z,Object(n["B"])(t.x.toFixed(3)),1),Object(n["e"])("td",K,Object(n["B"])(t.y.toFixed(3)),1),Object(n["e"])("td",W,Object(n["B"])(t.r),1),Object(n["e"])("td",H,Object(n["B"])(t.hitResult),1),Object(n["e"])("td",Q,Object(n["B"])(t.time),1)])})),128))])])])])])],64)}r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("fb6a"),r("b0c0"),r("a630"),r("ac1f"),r("00b4");function tt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function et(t,e){if(t){if("string"===typeof t)return tt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?tt(t,e):void 0}}function rt(t,e){var r="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=et(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){c=!0,o=t},f:function(){try{i||null==r["return"]||r["return"]()}finally{if(c)throw o}}}}r("99af"),r("159b");var nt={name:"Main",data:function(){return{x:"-4",y:"-3",r:"-4",points:new Array}},watch:{y:function(t){var e=document.querySelector(".button-submit"),r=document.querySelector(".label_y");!isNaN(parseFloat(t))&&isFinite(t)&&t<=3&&t>=-3?(e.disabled=!1,e.style.border="2px solid #c5e29a",r.style.backgroundColor="#060e1b"):(e.disabled=!0,e.style.border="2px solid #B00020",r.style.backgroundColor="#B00020")},r:function(t){var e=document.querySelector(".rectangle");document.querySelector(".triangle").setAttribute("points","0 0, 0 ".concat(40*t,", ").concat(-20*t," 0")),document.querySelector(".circle").setAttribute("d","M 0 0 h ".concat(20*t," C ").concat(20*t," 0 ").concat(20*t," ").concat(-20*t," 0 ").concat(-20*t)),e.setAttribute("y",0*t),e.setAttribute("width",20*t),e.setAttribute("height",40*t)}},methods:{submitForm:function(t){var e=this;t.preventDefault();var r=JSON.parse(localStorage.getItem("userDetails"));r?this.axios.post("https://web4-back.herokuapp.com/api/points/check",{x:this.x,y:this.y,r:this.r},{headers:{Authorization:"Bearer "+r.accessToken}}).then((function(){e.getPoints()})).catch((function(t){401!=t.response.status&&403!=t.response.status||e.invalidateTokenAndGoToAuthPage()})):this.invalidateTokenAndGoToAuthPage()},resetPoints:function(t){var e=this;t.preventDefault();var r=JSON.parse(localStorage.getItem("userDetails"));this.axios.delete("https://web4-back.herokuapp.com/api/points/clear",{headers:{Authorization:"Bearer "+r.accessToken}}).then((function(){e.getPoints(),e.drawPoints()})).catch((function(t){401!=t.response.status&&403!=t.response.status||e.invalidateTokenAndGoToAuthPage()}))},getPoints:function(){var t=this,e=JSON.parse(localStorage.getItem("userDetails"));this.axios.get("https://web4-back.herokuapp.com/api/points/get",{headers:{Authorization:"Bearer "+e.accessToken}}).then((function(e){console.log(e.data),t.points=[];var r,n=rt(e.data);try{for(n.s();!(r=n.n()).done;){var a=r.value;t.points.push({x:a.coordinateX,y:a.coordinateY,r:a.radius,hitResult:a.hit,time:a.time})}}catch(o){n.e(o)}finally{n.f()}t.drawPoints()})).catch((function(e){alert(e.message),401!=e.response.status&&403!=e.response.status||t.invalidateTokenAndGoToAuthPage()}))},getPointsListFromResponse:function(t){var e=new Array;if(void 0!==t._embedded){var r,n=rt(t._embedded.pointList);try{for(n.s();!(r=n.n()).done;){var a=r.value;e.push(function(t){var e=t.x,r=t.y,n=t.r,a=t.hitResult,o=t.time;return{x:e,y:r,r:n,hitResult:a,time:o}}(a))}}catch(o){n.e(o)}finally{n.f()}}return e},invalidateTokenAndGoToAuthPage:function(){localStorage.removeItem("userDetails"),this.$router.push({name:"auth"})},drawPoints:function(){var t=document.querySelector(".graph");if(document.querySelectorAll(".circle--point").forEach((function(t){return t.remove()})),this.points){var e,r=rt(this.points);try{for(r.s();!(e=r.n()).done;){var n=e.value,a=document.createElementNS("http://www.w3.org/2000/svg","circle");a.classList.add("circle--point"),a.setAttribute("cx",40*n.x),a.setAttribute("cy",40*-n.y),a.setAttribute("r",1),a.setAttribute("fill",n.hitResult?"green":"red"),t.appendChild(a)}}catch(o){r.e(o)}finally{r.f()}}},sendPointFromSvg:function(t){var e=this;t.preventDefault();var r=document.querySelector(".graph"),n=r.createSVGPoint();n.x=t.clientX,n.y=t.clientY;var a=n.matrixTransform(r.getScreenCTM().inverse()),o=a.x/40,i=-a.y/40;this.axios.post("https://web4-back.herokuapp.com/api/points/check",{x:o,y:i,r:this.r},{headers:{Authorization:"Bearer "+JSON.parse(localStorage.getItem("userDetails")).accessToken}}).then((function(){e.getPoints()})).catch((function(t){401==t.response.status&&e.invalidateTokenAndGoToAuthPage()}))},logout:function(t){t.preventDefault(),localStorage.removeItem("userDetails"),this.$router.push({name:"auth"})}}},at=(r("7fde"),r("6b0d")),ot=r.n(at);const it=ot()(nt,[["render",Z],["__scopeId","data-v-17913848"]]);e["default"]=it},d28b:function(t,e,r){var n=r("746f");n("iterator")},e01a:function(t,e,r){"use strict";var n=r("23e7"),a=r("83ab"),o=r("da84"),i=r("e330"),c=r("1a2d"),l=r("1626"),u=r("3a9b"),s=r("577e"),d=r("9bf2").f,f=r("e893"),b=o.Symbol,p=b&&b.prototype;if(a&&l(b)&&(!("description"in p)||void 0!==b().description)){var v={},x=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:s(arguments[0]),e=u(p,this)?new b(t):void 0===t?b():b(t);return""===t&&(v[e]=!0),e};f(x,b),x.prototype=p,p.constructor=x;var h="Symbol(test)"==String(b("test")),y=i(p.toString),m=i(p.valueOf),g=/^Symbol\((.*)\)[^)]+$/,O=i("".replace),j=i("".slice);d(p,"description",{configurable:!0,get:function(){var t=m(this),e=y(t);if(c(v,t))return"";var r=h?j(e,7,-1):O(e,g,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:x})}},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},fb6a:function(t,e,r){"use strict";var n=r("23e7"),a=r("da84"),o=r("e8b5"),i=r("68ee"),c=r("861d"),l=r("23cb"),u=r("07fa"),s=r("fc6a"),d=r("8418"),f=r("b622"),b=r("1dde"),p=r("f36a"),v=b("slice"),x=f("species"),h=a.Array,y=Math.max;n({target:"Array",proto:!0,forced:!v},{slice:function(t,e){var r,n,a,f=s(this),b=u(f),v=l(t,b),m=l(void 0===e?b:e,b);if(o(f)&&(r=f.constructor,i(r)&&(r===h||o(r.prototype))?r=void 0:c(r)&&(r=r[x],null===r&&(r=void 0)),r===h||void 0===r))return p(f,v,m);for(n=new(void 0===r?h:r)(y(m-v,0)),a=0;v<m;v++,a++)v in f&&d(n,a,f[v]);return n.length=a,n}})},fce3:function(t,e,r){var n=r("d039"),a=r("da84"),o=a.RegExp;t.exports=n((function(){var t=o(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))}}]);
//# sourceMappingURL=chunk-6d355bc2.63bb8809.js.map