import{j as e}from"./index-C_SWdmGa.js";import{G as t}from"./icons-B7WE3pec.js";const n=({title:t="React.js"})=>e.jsx("header",{className:"app-header",children:e.jsx("h1",{children:t})});function r(e,t){return function(){return e.apply(t,arguments)}}const{toString:o}=Object.prototype,{getPrototypeOf:s}=Object,i=(e=>t=>{const n=o.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),a=e=>(e=e.toLowerCase(),t=>i(t)===e),c=e=>t=>typeof t===e,{isArray:l}=Array,u=c("undefined");const f=a("ArrayBuffer");const d=c("string"),h=c("function"),p=c("number"),m=e=>null!==e&&"object"==typeof e,g=e=>{if("object"!==i(e))return!1;const t=s(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},y=a("Date"),b=a("File"),w=a("Blob"),E=a("FileList"),R=a("URLSearchParams"),[O,S,T,v]=["ReadableStream","Request","Response","Headers"].map(a);function A(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),l(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(r=0;r<s;r++)i=o[r],t.call(null,e[i],i,e)}}function x(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const j="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,C=e=>!u(e)&&e!==j;const N=(e=>t=>e&&t instanceof e)("undefined"!=typeof Uint8Array&&s(Uint8Array)),P=a("HTMLFormElement"),L=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),_=a("RegExp"),B=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};A(n,((n,o)=>{let s;!1!==(s=t(n,o,e))&&(r[o]=s||n)})),Object.defineProperties(e,r)},U="abcdefghijklmnopqrstuvwxyz",F="0123456789",D={DIGIT:F,ALPHA:U,ALPHA_DIGIT:U+U.toUpperCase()+F};const k=a("AsyncFunction"),q=(M="function"==typeof setImmediate,z=h(j.postMessage),M?setImmediate:z?(H=`axios@${Math.random()}`,I=[],j.addEventListener("message",(({source:e,data:t})=>{e===j&&t===H&&I.length&&I.shift()()}),!1),e=>{I.push(e),j.postMessage(H,"*")}):e=>setTimeout(e));var M,z,H,I;const V="undefined"!=typeof queueMicrotask?queueMicrotask.bind(j):"undefined"!=typeof process&&process.nextTick||q,J={isArray:l,isArrayBuffer:f,isBuffer:function(e){return null!==e&&!u(e)&&null!==e.constructor&&!u(e.constructor)&&h(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||h(e.append)&&("formdata"===(t=i(e))||"object"===t&&h(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&f(e.buffer),t},isString:d,isNumber:p,isBoolean:e=>!0===e||!1===e,isObject:m,isPlainObject:g,isReadableStream:O,isRequest:S,isResponse:T,isHeaders:v,isUndefined:u,isDate:y,isFile:b,isBlob:w,isRegExp:_,isFunction:h,isStream:e=>m(e)&&h(e.pipe),isURLSearchParams:R,isTypedArray:N,isFileList:E,forEach:A,merge:function e(){const{caseless:t}=C(this)&&this||{},n={},r=(r,o)=>{const s=t&&x(n,o)||o;g(n[s])&&g(r)?n[s]=e(n[s],r):g(r)?n[s]=e({},r):l(r)?n[s]=r.slice():n[s]=r};for(let o=0,s=arguments.length;o<s;o++)arguments[o]&&A(arguments[o],r);return n},extend:(e,t,n,{allOwnKeys:o}={})=>(A(t,((t,o)=>{n&&h(t)?e[o]=r(t,n):e[o]=t}),{allOwnKeys:o}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,i,a;const c={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],r&&!r(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==n&&s(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:i,kindOfTest:a,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(l(e))return e;let t=e.length;if(!p(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:P,hasOwnProperty:L,hasOwnProp:L,reduceDescriptors:B,freezeMethods:e=>{B(e,((t,n)=>{if(h(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];h(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return l(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:x,global:j,isContextDefined:C,ALPHABET:D,generateString:(e=16,t=D.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&h(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(m(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=l(e)?[]:{};return A(e,((e,t)=>{const s=n(e,r+1);!u(s)&&(o[t]=s)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:k,isThenable:e=>e&&(m(e)||h(e))&&h(e.then)&&h(e.catch),setImmediate:q,asap:V};function W(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}J.inherits(W,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:J.toJSONObject(this.config),code:this.code,status:this.status}}});const K=W.prototype,$={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{$[e]={value:e}})),Object.defineProperties(W,$),Object.defineProperty(K,"isAxiosError",{value:!0}),W.from=(e,t,n,r,o,s)=>{const i=Object.create(K);return J.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),W.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};function G(e){return J.isPlainObject(e)||J.isArray(e)}function X(e){return J.endsWith(e,"[]")?e.slice(0,-2):e}function Q(e,t,n){return e?e.concat(t).map((function(e,t){return e=X(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const Z=J.toFlatObject(J,{},null,(function(e){return/^is[A-Z]/.test(e)}));function Y(e,t,n){if(!J.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=J.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!J.isUndefined(t[e])}))).metaTokens,o=n.visitor||l,s=n.dots,i=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&J.isSpecCompliantForm(t);if(!J.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(J.isDate(e))return e.toISOString();if(!a&&J.isBlob(e))throw new W("Blob is not supported. Use a Buffer instead.");return J.isArrayBuffer(e)||J.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(J.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(J.isArray(e)&&function(e){return J.isArray(e)&&!e.some(G)}(e)||(J.isFileList(e)||J.endsWith(n,"[]"))&&(a=J.toArray(e)))return n=X(n),a.forEach((function(e,r){!J.isUndefined(e)&&null!==e&&t.append(!0===i?Q([n],r,s):null===i?n:n+"[]",c(e))})),!1;return!!G(e)||(t.append(Q(o,n,s),c(e)),!1)}const u=[],f=Object.assign(Z,{defaultVisitor:l,convertValue:c,isVisitable:G});if(!J.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!J.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+r.join("."));u.push(n),J.forEach(n,(function(n,s){!0===(!(J.isUndefined(n)||null===n)&&o.call(t,n,J.isString(s)?s.trim():s,r,f))&&e(n,r?r.concat(s):[s])})),u.pop()}}(e),t}function ee(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function te(e,t){this._pairs=[],e&&Y(e,this,t)}const ne=te.prototype;function re(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function oe(e,t,n){if(!t)return e;const r=n&&n.encode||re;J.isFunction(n)&&(n={serialize:n});const o=n&&n.serialize;let s;if(s=o?o(t,n):J.isURLSearchParams(t)?t.toString():new te(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}ne.append=function(e,t){this._pairs.push([e,t])},ne.toString=function(e){const t=e?function(t){return e.call(this,t,ee)}:ee;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};class se{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){J.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}const ie={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ae={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:te,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},ce="undefined"!=typeof window&&"undefined"!=typeof document,le="object"==typeof navigator&&navigator||void 0,ue=ce&&(!le||["ReactNative","NativeScript","NS"].indexOf(le.product)<0),fe="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,de=ce&&window.location.href||"http://localhost",he={...Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ce,hasStandardBrowserEnv:ue,hasStandardBrowserWebWorkerEnv:fe,navigator:le,origin:de},Symbol.toStringTag,{value:"Module"})),...ae};function pe(e){function t(e,n,r,o){let s=e[o++];if("__proto__"===s)return!0;const i=Number.isFinite(+s),a=o>=e.length;if(s=!s&&J.isArray(r)?r.length:s,a)return J.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!i;r[s]&&J.isObject(r[s])||(r[s]=[]);return t(e,n,r[s],o)&&J.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}(r[s])),!i}if(J.isFormData(e)&&J.isFunction(e.entries)){const n={};return J.forEachEntry(e,((e,r)=>{t(function(e){return J.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null}const me={transitional:ie,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=J.isObject(e);o&&J.isHTMLForm(e)&&(e=new FormData(e));if(J.isFormData(e))return r?JSON.stringify(pe(e)):e;if(J.isArrayBuffer(e)||J.isBuffer(e)||J.isStream(e)||J.isFile(e)||J.isBlob(e)||J.isReadableStream(e))return e;if(J.isArrayBufferView(e))return e.buffer;if(J.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return Y(e,new he.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return he.isNode&&J.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((s=J.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return Y(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t){if(J.isString(e))try{return(t||JSON.parse)(e),J.trim(e)}catch(n){if("SyntaxError"!==n.name)throw n}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||me.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(J.isResponse(e)||J.isReadableStream(e))return e;if(e&&J.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(o){if(n){if("SyntaxError"===o.name)throw W.from(o,W.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:he.classes.FormData,Blob:he.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};J.forEach(["delete","get","head","post","put","patch"],(e=>{me.headers[e]={}}));const ge=J.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ye=Symbol("internals");function be(e){return e&&String(e).trim().toLowerCase()}function we(e){return!1===e||null==e?e:J.isArray(e)?e.map(we):String(e)}function Ee(e,t,n,r,o){return J.isFunction(r)?r.call(this,t,n):(o&&(t=n),J.isString(t)?J.isString(r)?-1!==t.indexOf(r):J.isRegExp(r)?r.test(t):void 0:void 0)}class Re{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=be(t);if(!o)throw new Error("header name must be a non-empty string");const s=J.findKey(r,o);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=we(e))}const s=(e,t)=>J.forEach(e,((e,n)=>o(e,n,t)));if(J.isPlainObject(e)||e instanceof this.constructor)s(e,t);else if(J.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))s((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&ge[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t);else if(J.isHeaders(e))for(const[i,a]of e.entries())o(a,i,n);else null!=e&&o(t,e,n);return this}get(e,t){if(e=be(e)){const n=J.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(J.isFunction(t))return t.call(this,e,n);if(J.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=be(e)){const n=J.findKey(this,e);return!(!n||void 0===this[n]||t&&!Ee(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=be(e)){const o=J.findKey(n,e);!o||t&&!Ee(0,n[o],o,t)||(delete n[o],r=!0)}}return J.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!Ee(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return J.forEach(this,((r,o)=>{const s=J.findKey(n,o);if(s)return t[s]=we(r),void delete t[o];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();i!==o&&delete t[o],t[i]=we(r),n[i]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return J.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&J.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[ye]=this[ye]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=be(e);t[r]||(!function(e,t){const n=J.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return J.isArray(e)?e.forEach(r):r(e),this}}function Oe(e,t){const n=this||me,r=t||n,o=Re.from(r.headers);let s=r.data;return J.forEach(e,(function(e){s=e.call(n,s,o.normalize(),t?t.status:void 0)})),o.normalize(),s}function Se(e){return!(!e||!e.__CANCEL__)}function Te(e,t,n){W.call(this,null==e?"canceled":e,W.ERR_CANCELED,t,n),this.name="CanceledError"}function ve(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new W("Request failed with status code "+n.status,[W.ERR_BAD_REQUEST,W.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}Re.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),J.reduceDescriptors(Re.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),J.freezeMethods(Re),J.inherits(Te,W,{__CANCEL__:!0});const Ae=(e,t,n=3)=>{let r=0;const o=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),l=r[i];o||(o=c),n[s]=a,r[s]=c;let u=i,f=0;for(;u!==s;)f+=n[u++],u%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const d=l&&c-l;return d?Math.round(1e3*f/d):void 0}}(50,250);return function(e,t){let n,r,o=0,s=1e3/t;const i=(t,s=Date.now())=>{o=s,n=null,r&&(clearTimeout(r),r=null),e.apply(null,t)};return[(...e)=>{const t=Date.now(),a=t-o;a>=s?i(e,t):(n=e,r||(r=setTimeout((()=>{r=null,i(n)}),s-a)))},()=>n&&i(n)]}((n=>{const s=n.loaded,i=n.lengthComputable?n.total:void 0,a=s-r,c=o(a);r=s;e({loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&s<=i?(i-s)/c:void 0,event:n,lengthComputable:null!=i,[t?"download":"upload"]:!0})}),n)},xe=(e,t)=>{const n=null!=e;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},je=e=>(...t)=>J.asap((()=>e(...t))),Ce=he.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,he.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(he.origin),he.navigator&&/(msie|trident)/i.test(he.navigator.userAgent)):()=>!0,Ne=he.hasStandardBrowserEnv?{write(e,t,n,r,o,s){const i=[e+"="+encodeURIComponent(t)];J.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),J.isString(r)&&i.push("path="+r),J.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function Pe(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const Le=e=>e instanceof Re?{...e}:e;function _e(e,t){t=t||{};const n={};function r(e,t,n,r){return J.isPlainObject(e)&&J.isPlainObject(t)?J.merge.call({caseless:r},e,t):J.isPlainObject(t)?J.merge({},t):J.isArray(t)?t.slice():t}function o(e,t,n,o){return J.isUndefined(t)?J.isUndefined(e)?void 0:r(void 0,e,0,o):r(e,t,0,o)}function s(e,t){if(!J.isUndefined(t))return r(void 0,t)}function i(e,t){return J.isUndefined(t)?J.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,s){return s in t?r(n,o):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(e,t,n)=>o(Le(e),Le(t),0,!0)};return J.forEach(Object.keys(Object.assign({},e,t)),(function(r){const s=c[r]||o,i=s(e[r],t[r],r);J.isUndefined(i)&&s!==a||(n[r]=i)})),n}const Be=e=>{const t=_e({},e);let n,{data:r,withXSRFToken:o,xsrfHeaderName:s,xsrfCookieName:i,headers:a,auth:c}=t;if(t.headers=a=Re.from(a),t.url=oe(Pe(t.baseURL,t.url),e.params,e.paramsSerializer),c&&a.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):""))),J.isFormData(r))if(he.hasStandardBrowserEnv||he.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(!1!==(n=a.getContentType())){const[e,...t]=n?n.split(";").map((e=>e.trim())).filter(Boolean):[];a.setContentType([e||"multipart/form-data",...t].join("; "))}if(he.hasStandardBrowserEnv&&(o&&J.isFunction(o)&&(o=o(t)),o||!1!==o&&Ce(t.url))){const e=s&&i&&Ne.read(i);e&&a.set(s,e)}return t},Ue="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){const r=Be(e);let o=r.data;const s=Re.from(r.headers).normalize();let i,a,c,l,u,{responseType:f,onUploadProgress:d,onDownloadProgress:h}=r;function p(){l&&l(),u&&u(),r.cancelToken&&r.cancelToken.unsubscribe(i),r.signal&&r.signal.removeEventListener("abort",i)}let m=new XMLHttpRequest;function g(){if(!m)return;const r=Re.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders());ve((function(e){t(e),p()}),(function(e){n(e),p()}),{data:f&&"text"!==f&&"json"!==f?m.response:m.responseText,status:m.status,statusText:m.statusText,headers:r,config:e,request:m}),m=null}m.open(r.method.toUpperCase(),r.url,!0),m.timeout=r.timeout,"onloadend"in m?m.onloadend=g:m.onreadystatechange=function(){m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))&&setTimeout(g)},m.onabort=function(){m&&(n(new W("Request aborted",W.ECONNABORTED,e,m)),m=null)},m.onerror=function(){n(new W("Network Error",W.ERR_NETWORK,e,m)),m=null},m.ontimeout=function(){let t=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const o=r.transitional||ie;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new W(t,o.clarifyTimeoutError?W.ETIMEDOUT:W.ECONNABORTED,e,m)),m=null},void 0===o&&s.setContentType(null),"setRequestHeader"in m&&J.forEach(s.toJSON(),(function(e,t){m.setRequestHeader(t,e)})),J.isUndefined(r.withCredentials)||(m.withCredentials=!!r.withCredentials),f&&"json"!==f&&(m.responseType=r.responseType),h&&([c,u]=Ae(h,!0),m.addEventListener("progress",c)),d&&m.upload&&([a,l]=Ae(d),m.upload.addEventListener("progress",a),m.upload.addEventListener("loadend",l)),(r.cancelToken||r.signal)&&(i=t=>{m&&(n(!t||t.type?new Te(null,e,m):t),m.abort(),m=null)},r.cancelToken&&r.cancelToken.subscribe(i),r.signal&&(r.signal.aborted?i():r.signal.addEventListener("abort",i)));const y=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(r.url);y&&-1===he.protocols.indexOf(y)?n(new W("Unsupported protocol "+y+":",W.ERR_BAD_REQUEST,e)):m.send(o||null)}))},Fe=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let n,r=new AbortController;const o=function(e){if(!n){n=!0,i();const t=e instanceof Error?e:this.reason;r.abort(t instanceof W?t:new Te(t instanceof Error?t.message:t))}};let s=t&&setTimeout((()=>{s=null,o(new W(`timeout ${t} of ms exceeded`,W.ETIMEDOUT))}),t);const i=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach((e=>{e.unsubscribe?e.unsubscribe(o):e.removeEventListener("abort",o)})),e=null)};e.forEach((e=>e.addEventListener("abort",o)));const{signal:a}=r;return a.unsubscribe=()=>J.asap(i),a}},De=function*(e,t){let n=e.byteLength;if(n<t)return void(yield e);let r,o=0;for(;o<n;)r=o+t,yield e.slice(o,r),o=r},ke=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},qe=(e,t,n,r)=>{const o=async function*(e,t){for await(const n of ke(e))yield*De(n,t)}(e,t);let s,i=0,a=e=>{s||(s=!0,r&&r(e))};return new ReadableStream({async pull(e){try{const{done:t,value:r}=await o.next();if(t)return a(),void e.close();let s=r.byteLength;if(n){let e=i+=s;n(e)}e.enqueue(new Uint8Array(r))}catch(t){throw a(t),t}},cancel:e=>(a(e),o.return())},{highWaterMark:2})},Me="function"==typeof fetch&&"function"==typeof Request&&"function"==typeof Response,ze=Me&&"function"==typeof ReadableStream,He=Me&&("function"==typeof TextEncoder?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Ie=(e,...t)=>{try{return!!e(...t)}catch(n){return!1}},Ve=ze&&Ie((()=>{let e=!1;const t=new Request(he.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})),Je=ze&&Ie((()=>J.isReadableStream(new Response("").body))),We={stream:Je&&(e=>e.body)};var Ke;Me&&(Ke=new Response,["text","arrayBuffer","blob","formData","stream"].forEach((e=>{!We[e]&&(We[e]=J.isFunction(Ke[e])?t=>t[e]():(t,n)=>{throw new W(`Response type '${e}' is not supported`,W.ERR_NOT_SUPPORT,n)})})));const $e=async(e,t)=>{const n=J.toFiniteNumber(e.getContentLength());return null==n?(async e=>{if(null==e)return 0;if(J.isBlob(e))return e.size;if(J.isSpecCompliantForm(e)){const t=new Request(he.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return J.isArrayBufferView(e)||J.isArrayBuffer(e)?e.byteLength:(J.isURLSearchParams(e)&&(e+=""),J.isString(e)?(await He(e)).byteLength:void 0)})(t):n},Ge={http:null,xhr:Ue,fetch:Me&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:s,timeout:i,onDownloadProgress:a,onUploadProgress:c,responseType:l,headers:u,withCredentials:f="same-origin",fetchOptions:d}=Be(e);l=l?(l+"").toLowerCase():"text";let h,p=Fe([o,s&&s.toAbortSignal()],i);const m=p&&p.unsubscribe&&(()=>{p.unsubscribe()});let g;try{if(c&&Ve&&"get"!==n&&"head"!==n&&0!==(g=await $e(u,r))){let e,n=new Request(t,{method:"POST",body:r,duplex:"half"});if(J.isFormData(r)&&(e=n.headers.get("content-type"))&&u.setContentType(e),n.body){const[e,t]=xe(g,Ae(je(c)));r=qe(n.body,65536,e,t)}}J.isString(f)||(f=f?"include":"omit");const o="credentials"in Request.prototype;h=new Request(t,{...d,signal:p,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:o?f:void 0});let s=await fetch(h);const i=Je&&("stream"===l||"response"===l);if(Je&&(a||i&&m)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=s[t]}));const t=J.toFiniteNumber(s.headers.get("content-length")),[n,r]=a&&xe(t,Ae(je(a),!0))||[];s=new Response(qe(s.body,65536,n,(()=>{r&&r(),m&&m()})),e)}l=l||"text";let y=await We[J.findKey(We,l)||"text"](s,e);return!i&&m&&m(),await new Promise(((t,n)=>{ve(t,n,{data:y,headers:Re.from(s.headers),status:s.status,statusText:s.statusText,config:e,request:h})}))}catch(y){if(m&&m(),y&&"TypeError"===y.name&&/fetch/i.test(y.message))throw Object.assign(new W("Network Error",W.ERR_NETWORK,e,h),{cause:y.cause||y});throw W.from(y,y&&y.code,e,h)}})};J.forEach(Ge,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}}));const Xe=e=>`- ${e}`,Qe=e=>J.isFunction(e)||null===e||!1===e,Ze=e=>{e=J.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let s=0;s<t;s++){let t;if(n=e[s],r=n,!Qe(n)&&(r=Ge[(t=String(n)).toLowerCase()],void 0===r))throw new W(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+s]=r}if(!r){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));throw new W("There is no suitable adapter to dispatch the request "+(t?e.length>1?"since :\n"+e.map(Xe).join("\n"):" "+Xe(e[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return r};function Ye(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Te(null,e)}function et(e){Ye(e),e.headers=Re.from(e.headers),e.data=Oe.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return Ze(e.adapter||me.adapter)(e).then((function(t){return Ye(e),t.data=Oe.call(e,e.transformResponse,t),t.headers=Re.from(t.headers),t}),(function(t){return Se(t)||(Ye(e),t&&t.response&&(t.response.data=Oe.call(e,e.transformResponse,t.response),t.response.headers=Re.from(t.response.headers))),Promise.reject(t)}))}const tt="1.7.9",nt={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{nt[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const rt={};nt.transitional=function(e,t,n){return(r,o,s)=>{if(!1===e)throw new W(function(e,t){return"[Axios v1.7.9] Transitional option '"+e+"'"+t+(n?". "+n:"")}(o," has been removed"+(t?" in "+t:"")),W.ERR_DEPRECATED);return t&&!rt[o]&&(rt[o]=!0),!e||e(r,o,s)}},nt.spelling=function(e){return(e,t)=>!0};const ot={assertOptions:function(e,t,n){if("object"!=typeof e)throw new W("options must be an object",W.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const t=e[s],n=void 0===t||i(t,s,e);if(!0!==n)throw new W("option "+s+" must be "+n,W.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new W("Unknown option "+s,W.ERR_BAD_OPTION)}},validators:nt},st=ot.validators;class it{constructor(e){this.defaults=e,this.interceptors={request:new se,response:new se}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let e={};Error.captureStackTrace?Error.captureStackTrace(e):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{n.stack?t&&!String(n.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+t):n.stack=t}catch(r){}}throw n}}_request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=_e(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&ot.assertOptions(n,{silentJSONParsing:st.transitional(st.boolean),forcedJSONParsing:st.transitional(st.boolean),clarifyTimeoutError:st.transitional(st.boolean)},!1),null!=r&&(J.isFunction(r)?t.paramsSerializer={serialize:r}:ot.assertOptions(r,{encode:st.function,serialize:st.function},!0)),ot.assertOptions(t,{baseUrl:st.spelling("baseURL"),withXsrfToken:st.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=o&&J.merge(o.common,o[t.method]);o&&J.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=Re.concat(s,o);const i=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const c=[];let l;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let u,f=0;if(!a){const e=[et.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,c),u=e.length,l=Promise.resolve(t);f<u;)l=l.then(e[f++],e[f++]);return l}u=i.length;let d=t;for(f=0;f<u;){const e=i[f++],t=i[f++];try{d=e(d)}catch(h){t.call(this,h);break}}try{l=et.call(this,d)}catch(h){return Promise.reject(h)}for(f=0,u=c.length;f<u;)l=l.then(c[f++],c[f++]);return l}getUri(e){return oe(Pe((e=_e(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}J.forEach(["delete","get","head","options"],(function(e){it.prototype[e]=function(t,n){return this.request(_e(n||{},{method:e,url:t,data:(n||{}).data}))}})),J.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(_e(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}it.prototype[e]=t(),it.prototype[e+"Form"]=t(!0)}));class at{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new Te(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new at((function(t){e=t})),cancel:e}}}const ct={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ct).forEach((([e,t])=>{ct[t]=e}));const lt=function e(t){const n=new it(t),o=r(it.prototype.request,n);return J.extend(o,it.prototype,n,{allOwnKeys:!0}),J.extend(o,n,null,{allOwnKeys:!0}),o.create=function(n){return e(_e(t,n))},o}(me);function ut(e){return t({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"},child:[]}]})(e)}function ft(e){return t({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"},child:[]}]})(e)}function dt(e){return t({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"},child:[]}]})(e)}function ht(e){return t({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(e)}function pt(e){return t({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(e)}function mt(e){return t({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"},child:[]}]})(e)}function gt(e){return t({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"},child:[]}]})(e)}lt.Axios=it,lt.CanceledError=Te,lt.CancelToken=at,lt.isCancel=Se,lt.VERSION=tt,lt.toFormData=Y,lt.AxiosError=W,lt.Cancel=lt.CanceledError,lt.all=function(e){return Promise.all(e)},lt.spread=function(e){return function(t){return e.apply(null,t)}},lt.isAxiosError=function(e){return J.isObject(e)&&!0===e.isAxiosError},lt.mergeConfig=_e,lt.AxiosHeaders=Re,lt.formToJSON=e=>pe(J.isHTMLForm(e)?new FormData(e):e),lt.getAdapter=Ze,lt.HttpStatusCode=ct,lt.default=lt;export{ft as F,n as H,lt as a,ut as b,dt as c,mt as d,pt as e,ht as f,gt as g};
