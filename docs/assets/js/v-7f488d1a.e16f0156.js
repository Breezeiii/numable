/*! For license information please see v-7f488d1a.e16f0156.js.LICENSE.txt */
"use strict";(self.webpackChunknumable=self.webpackChunknumable||[]).push([[413],{5590:e=>{function r(e,r,t){if(t||2===arguments.length)for(var n,o=0,l=r.length;o<l;o++)!n&&o in r||(n||(n=Array.prototype.slice.call(r,0,o)),n[o]=r[o]);return e.concat(n||Array.prototype.slice.call(r))}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n="object"==typeof t&&t&&t.Object===Object&&t,o="object"==typeof self&&self&&self.Object===Object&&self,l=(n||o||Function("return this")()).Symbol,a=Object.prototype,u=a.hasOwnProperty,i=a.toString,c=l?l.toStringTag:void 0,f=Object.prototype.toString,s=l?l.toStringTag:void 0,m=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":s&&s in Object(e)?function(e){var r=u.call(e,c),t=e[c];try{e[c]=void 0;var n=!0}catch(e){}var o=i.call(e);return n&&(r?e[c]=t:delete e[c]),o}(e):function(e){return f.call(e)}(e)},p=function(e){return null!=e&&"object"==typeof e},d={},h={},v={currentLocal:"zh-CN",zeroFormat:null,nullFormat:null,defaultFormat:"#,###"},g={currentLocal:v.currentLocal,zeroFormat:v.zeroFormat,nullFormat:v.nullFormat,defaultFormat:v.defaultFormat},b=Math.ceil,y=Math.max,w=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},_=/^(?:0|[1-9]\d*)$/,U=function(e,r,t){if(!w(t))return!1;var n=typeof r;return!!("number"==n?function(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}(e.length)&&!function(e){if(!w(e))return!1;var r=m(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r}(e)}(t)&&function(e,r){var t=typeof e;return!!(r=null==r?9007199254740991:r)&&("number"==t||"symbol"!=t&&_.test(e))&&e>-1&&e%1==0&&e<r}(r,t.length):"string"==n&&r in t)&&function(e,r){return e===r||e!=e&&r!=r}(t[r],e)},x=/\s/,j=/^\s+/,F=function(e){return"symbol"==typeof e||p(e)&&"[object Symbol]"==m(e)},k=/^[-+]0x[0-9a-f]+$/i,S=/^0b[01]+$/i,z=/^0o[0-7]+$/i,O=parseInt,D=function(e){return e?1/0===(e=function(e){if("number"==typeof e)return e;if(F(e))return NaN;if(w(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=w(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=function(e){return e?e.slice(0,function(e){for(var r=e.length;r--&&x.test(e.charAt(r)););return r}(e)+1).replace(j,""):e}(e);var t=S.test(e);return t||z.test(e)?O(e.slice(2),t?2:8):k.test(e)?NaN:+e}(e))||-1/0===e?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0},A=function(e,r){return e>r},V=function(e){return e},C=["0","#"];function T(e,r,t){var n=function(e){return e&&e.length?function(e,r,t){for(var n=-1,o=e.length;++n<o;){var l=e[n],a=r(l);if(null!=a&&(void 0===u?a==a&&!F(a):t(a,u)))var u=a,i=l}return i}(e,V,A):void 0}([e.length,r.length]),o=e.split(""),l=r.split(""),a=!0,u="";return function(e,r,t){return t&&"number"!=typeof t&&U(e,r,t)&&(r=t=void 0),e=D(e),void 0===r?(r=e,e=0):r=D(r),function(e,r,t,n){for(var o=-1,l=y(b((r-e)/(t||1)),0),a=Array(l);l--;)a[++o]=e,e+=t;return a}(e,r,t=void 0===t?e<r?1:-1:D(t))}(n).forEach((function(e){var r=l[l.length-n+e],i=o[o.length-n+e];0==t?a?(r&&i&&("0"!=r||"0"==i)||r&&"0"!=r&&!i||i&&"0"==i&&!r)&&(u+=r||"0",a=!1):u+=r||"0":i&&("0"==i||"#"==i&&r)&&(u+=r||"0")})),u}function L(e,t){void 0===t&&(t="");var n=h[g.currentLocal],o=r(r([],C,!0),[",","."],!1).join(""),l=new RegExp("[".concat(o,"]{1,}"),"gi"),a=t.match(l);if(function(e){return null===e}(a))throw new TypeError("format 存在非法字符");var u=a[0],i=function(e,r){var t=r.split("."),n=e.split("."),o=t[0],l=t[1],a=n[0],u=n[1],i=-1==o.indexOf(",")?-1:o.length-o.indexOf(","),c=T(o.replace(",",""),a,0),f=T(l?l.split("").reverse().join(""):"",u?u.split("").reverse().join(""):"",1);c=c.split("").reverse().join("");var s=new RegExp("[0-9]{"+(i-1)+","+(i-1)+"}","gi"),m=i>-1?c.match(s):void 0;if(m&&m.length>0){var p=c.replace(m.join(""),"");c=m.join(",")+(""==p?"":",")+p}return(""==(c=c.split("").reverse().join(""))?"0":c)+(""!=f?"."+f.split("").reverse().join(""):"")}(String(e),u);return t.replace(u,i).replace(",",n.delimiter).replace(".",n.decimal)}var N=function(e,r){this._input=e,this._value=r};function B(e){var r;return r=e instanceof B?e.value():0===e||void 0===e?0:null===e||function(e){return function(e){return"number"==typeof e||p(e)&&"[object Number]"==m(e)}(e)&&e!=+e}(e)?null:Number(e)||null,new N(e,r)}B.version="1.0.4",B.options=g,B.formats=d,B.locals=h,B.local=function(e){return e&&(g.currentLocal=e.toLowerCase()),g.currentLocal},B.localData=function(e){if(!e)return h[g.currentLocale];if(e=e.toLowerCase(),!h[e])throw new Error("Unknown locale : "+e);return h[e]},B.reset=function(){Object.keys(v).forEach((function(e){g[e]=v[e]}))},B.defaultOptions=function(e){return Object.assign(g,e),g},B.register=function(e,r,t){if(this[e+"s"][r])throw new TypeError(r+" "+e+" already registered.");return this[e+"s"][r]=t,t},B._={numberToFormat:L},B.fn=N.prototype={clone:function(){return B(this)},format:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var o,l,a,u=this._value,i=e||g.defaultFormat;if(0===u&&null!==g.zeroFormat)l=g.zeroFormat;else if(null===u&&null!==g.nullFormat)l=g.nullFormat;else{for(o in d)if(i.match(d[o].regexps.format)){a=d[o].format;break}l=(a=a||L).apply(void 0,r([u,i],t,!1))}return l},value:function(){return this._value},input:function(){return this._input},set:function(e){return this._value=Number(e),this}},function(e){e.register("local",v.currentLocal,{decimal:".",delimiter:","}),e.register("format","percent",{regexps:{format:/(%)/},format:function(r,t){return void 0===t&&(t=""),e._.numberToFormat(100*r,t)}}),e.register("format","time",{regexps:{format:/([hms]{1,}:*)/},format:function(e,r){void 0===r&&(r="");var t=Math.floor(e/60/60),n=Math.floor((e-60*t*60)/60),o=Math.round(e-60*t*60-60*n),l=String(t<10?"0"+t:t),a=String(n<10?"0"+n:n),u=String(o<10?"0"+o:o);return r.replace(/h+/,l).replace(/m+/i,a).replace(/s+/i,u)}})}(B),e.exports=B},4501:(e,r,t)=>{t.r(r),t.d(r,{default:()=>Y});var n=t(5314),o=t(5535),l=t(375),a=t(4751),u=t(5590),i=t.n(u);const c=e=>((0,n.dD)("data-v-1ed70cdf"),e=e(),(0,n.Cn)(),e),f=c((()=>(0,n._)("h2",{id:"基本",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#基本","aria-hidden":"true"},"#"),(0,n.Uk)(" 基本")],-1))),s={class:"example-format"},m=(0,n.Uk)("format: "),p=["onUpdate:modelValue"],d={class:"example-console"},h=c((()=>(0,n._)("h2",{id:"填充-000000",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#填充-000000","aria-hidden":"true"},"#"),(0,n.Uk)(" 填充 000000")],-1))),v={class:"example-format"},g=(0,n.Uk)("format: "),b=["onUpdate:modelValue"],y={class:"example-console"},w=c((()=>(0,n._)("h2",{id:"货币",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#货币","aria-hidden":"true"},"#"),(0,n.Uk)(" 货币")],-1))),_={class:"example-format"},U=(0,n.Uk)("format: "),x=["onUpdate:modelValue"],j={class:"example-console"},F=c((()=>(0,n._)("h2",{id:"百分比",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#百分比","aria-hidden":"true"},"#"),(0,n.Uk)(" 百分比")],-1))),k={class:"example-format"},S=(0,n.Uk)("format: "),z=["onUpdate:modelValue"],O={class:"example-console"},D=c((()=>(0,n._)("h2",{id:"填充任意字符",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#填充任意字符","aria-hidden":"true"},"#"),(0,n.Uk)(" 填充任意字符")],-1))),A={class:"example-format"},V=(0,n.Uk)("format: "),C=["onUpdate:modelValue"],T={class:"example-console"},L=c((()=>(0,n._)("h2",{id:"时分秒",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#时分秒","aria-hidden":"true"},"#"),(0,n.Uk)(" 时分秒")],-1))),N={class:"example-format"},B=(0,n.Uk)("format: "),E=["onUpdate:modelValue"],H={class:"example-console"},K=(0,n.aZ)({setup(e){const r=123456789.123,t=.123,u=(0,o.qj)({Base:[{number:r,format:"#,###"}],FillZero:[{number:r,format:"000000000#,####.00000000"}],Currency:[{number:r,format:"￥#,###"},{number:r,format:"#,###$"}],Percentage:[{number:t,format:"#%"},{number:t,format:"#.##%"},{number:t,format:"#.00%"}],FillAnyCharacter:[{number:r,format:"AAA-#,###-BBB"},{number:t,format:"AAA-#.0%-BBB"}],Time:[{number:123,format:"hh:mm:ss"},{number:123,format:"mm:ss"}]}),{Base:c,FillZero:K,Currency:Y,Percentage:M,FillAnyCharacter:P,Time:Z}=(0,o.BK)(u),$=(0,o.Fl)((()=>Q(c))),R=(0,o.Fl)((()=>Q(K))),I=(0,o.Fl)((()=>Q(Y))),q=(0,o.Fl)((()=>Q(M))),G=(0,o.Fl)((()=>Q(P))),J=(0,o.Fl)((()=>Q(Z)));function Q(e){return e.value.map((e=>i()(e.number).format(e.format)))}return(e,r)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[f,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,o.SU)(c),((e,r)=>((0,n.wg)(),(0,n.iD)("div",{class:"example-group",key:r},[(0,n._)("p",s,[m,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":r=>e.format=r},null,8,p),[[l.nr,e.format]])]),(0,n._)("p",d,"console: "+(0,a.zw)(e.number)+" => "+(0,a.zw)((0,o.SU)($)[r]),1)])))),128)),h,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,o.SU)(K),((e,r)=>((0,n.wg)(),(0,n.iD)("div",{class:"example-group",key:r},[(0,n._)("p",v,[g,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":r=>e.format=r},null,8,b),[[l.nr,e.format]])]),(0,n._)("p",y,"console: "+(0,a.zw)(e.number)+" => "+(0,a.zw)((0,o.SU)(R)[r]),1)])))),128)),w,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,o.SU)(Y),((e,r)=>((0,n.wg)(),(0,n.iD)("div",{class:"example-group",key:r},[(0,n._)("p",_,[U,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":r=>e.format=r},null,8,x),[[l.nr,e.format]])]),(0,n._)("p",j,"console: "+(0,a.zw)(e.number)+" => "+(0,a.zw)((0,o.SU)(I)[r]),1)])))),128)),F,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,o.SU)(M),((e,r)=>((0,n.wg)(),(0,n.iD)("div",{class:"example-group",key:r},[(0,n._)("p",k,[S,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":r=>e.format=r},null,8,z),[[l.nr,e.format]])]),(0,n._)("p",O,"console: "+(0,a.zw)(e.number)+" => "+(0,a.zw)((0,o.SU)(q)[r]),1)])))),128)),D,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,o.SU)(P),((e,r)=>((0,n.wg)(),(0,n.iD)("div",{class:"example-group",key:r},[(0,n._)("p",A,[V,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":r=>e.format=r},null,8,C),[[l.nr,e.format]])]),(0,n._)("p",T,"console: "+(0,a.zw)(e.number)+" => "+(0,a.zw)((0,o.SU)(G)[r]),1)])))),128)),L,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,o.SU)(Z),((e,r)=>((0,n.wg)(),(0,n.iD)("div",{class:"example-group",key:r},[(0,n._)("p",N,[B,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":r=>e.format=r},null,8,E),[[l.nr,e.format]])]),(0,n._)("p",H,"console: "+(0,a.zw)(e.number)+" => "+(0,a.zw)((0,o.SU)(J)[r]),1)])))),128))],64))}}),Y=(0,t(2637).Z)(K,[["__scopeId","data-v-1ed70cdf"]])},2637:(e,r)=>{r.Z=(e,r)=>{const t=e.__vccOpts||e;for(const[e,n]of r)t[e]=n;return t}},9246:(e,r,t)=>{t.r(r),t.d(r,{data:()=>n});const n={key:"v-7f488d1a",path:"/zh/format.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"基本",slug:"基本",children:[]},{level:2,title:"填充 000000",slug:"填充-000000",children:[]},{level:2,title:"货币",slug:"货币",children:[]},{level:2,title:"百分比",slug:"百分比",children:[]},{level:2,title:"填充任意字符",slug:"填充任意字符",children:[]},{level:2,title:"时分秒",slug:"时分秒",children:[]}],git:{updatedTime:null,contributors:[]},filePathRelative:"zh/format.md"}}}]);