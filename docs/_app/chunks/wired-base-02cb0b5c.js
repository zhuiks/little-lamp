var Ut=Object.defineProperty,_t=Object.defineProperties;var Nt=Object.getOwnPropertyDescriptors;var it=Object.getOwnPropertySymbols;var Lt=Object.prototype.hasOwnProperty,It=Object.prototype.propertyIsEnumerable;var st=(n,t,e)=>t in n?Ut(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,W=(n,t)=>{for(var e in t||(t={}))Lt.call(t,e)&&st(n,e,t[e]);if(it)for(var e of it(t))It.call(t,e)&&st(n,e,t[e]);return n},V=(n,t)=>_t(n,Nt(t));/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Mt=Symbol();class Pt{constructor(t,e){if(e!==Mt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return nt&&this.t===void 0&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const rt=new Map,xt=n=>{let t=rt.get(n);return t===void 0&&rt.set(n,t=new Pt(n,Mt)),t},zt=n=>xt(typeof n=="string"?n:n+""),Bt=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((i,s,r)=>i+(o=>{if(o instanceof Pt)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return xt(e)},jt=(n,t)=>{nt?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style");i.textContent=e.cssText,n.appendChild(i)})},ot=nt?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return zt(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var lt,D,F,ht;const q={toAttribute(n,t){switch(t){case Boolean:n=n?"":null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},Ct=(n,t)=>t!==n&&(t==t||n==n),G={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:Ct};class M extends HTMLElement{constructor(){super(),this.\u03A0i=new Map,this.\u03A0o=void 0,this.\u03A0l=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.\u03A0h=null,this.u()}static addInitializer(t){var e;(e=this.v)!==null&&e!==void 0||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this.\u03A0p(i,e);s!==void 0&&(this.\u03A0m.set(s,i),t.push(s))}),t}static createProperty(t,e=G){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||G}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.\u03A0m=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(ot(s))}else t!==void 0&&e.push(ot(t));return e}static \u03A0p(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this.\u03A0g=new Promise(e=>this.enableUpdating=e),this.L=new Map,this.\u03A0_(),this.requestUpdate(),(t=this.constructor.v)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this.\u03A0U)!==null&&e!==void 0?e:this.\u03A0U=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this.\u03A0U)===null||e===void 0||e.splice(this.\u03A0U.indexOf(t)>>>0,1)}\u03A0_(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this.\u03A0i.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return jt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this.\u03A0U)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)}),this.\u03A0l&&(this.\u03A0l(),this.\u03A0o=this.\u03A0l=void 0)}enableUpdating(t){}disconnectedCallback(){var t;(t=this.\u03A0U)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)}),this.\u03A0o=new Promise(e=>this.\u03A0l=e)}attributeChangedCallback(t,e,i){this.K(t,i)}\u03A0j(t,e,i=G){var s,r;const o=this.constructor.\u03A0p(t,i);if(o!==void 0&&i.reflect===!0){const h=((r=(s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==null&&r!==void 0?r:q.toAttribute)(e,i.type);this.\u03A0h=t,h==null?this.removeAttribute(o):this.setAttribute(o,h),this.\u03A0h=null}}K(t,e){var i,s,r;const o=this.constructor,h=o.\u03A0m.get(t);if(h!==void 0&&this.\u03A0h!==h){const l=o.getPropertyOptions(h),a=l.converter,c=(r=(s=(i=a)===null||i===void 0?void 0:i.fromAttribute)!==null&&s!==void 0?s:typeof a=="function"?a:null)!==null&&r!==void 0?r:q.fromAttribute;this.\u03A0h=h,this[h]=c(e,l.type),this.\u03A0h=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Ct)(this[t],e)?(this.L.has(t)||this.L.set(t,e),i.reflect===!0&&this.\u03A0h!==t&&(this.\u03A0k===void 0&&(this.\u03A0k=new Map),this.\u03A0k.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this.\u03A0g=this.\u03A0q())}async \u03A0q(){this.isUpdatePending=!0;try{for(await this.\u03A0g;this.\u03A0o;)await this.\u03A0o}catch(e){Promise.reject(e)}const t=this.performUpdate();return t!=null&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.\u03A0i&&(this.\u03A0i.forEach((s,r)=>this[r]=s),this.\u03A0i=void 0);let e=!1;const i=this.L;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this.\u03A0U)===null||t===void 0||t.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this.\u03A0$()}catch(s){throw e=!1,this.\u03A0$(),s}e&&this.E(i)}willUpdate(t){}E(t){var e;(e=this.\u03A0U)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}\u03A0$(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.\u03A0g}shouldUpdate(t){return!0}update(t){this.\u03A0k!==void 0&&(this.\u03A0k.forEach((e,i)=>this.\u03A0j(i,this[i],e)),this.\u03A0k=void 0),this.\u03A0$()}updated(t){}firstUpdated(t){}}M.finalized=!0,M.elementProperties=new Map,M.elementStyles=[],M.shadowRootOptions={mode:"open"},(D=(lt=globalThis).reactiveElementPlatformSupport)===null||D===void 0||D.call(lt,{ReactiveElement:M}),((F=(ht=globalThis).reactiveElementVersions)!==null&&F!==void 0?F:ht.reactiveElementVersions=[]).push("1.0.0-rc.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var at,K,Z,ct;const L=globalThis.trustedTypes,ut=L?L.createPolicy("lit-html",{createHTML:n=>n}):void 0,S=`lit$${(Math.random()+"").slice(9)}$`,Et="?"+S,Wt=`<${Et}>`,x=document,H=(n="")=>x.createComment(n),I=n=>n===null||typeof n!="object"&&typeof n!="function",kt=Array.isArray,Vt=n=>{var t;return kt(n)||typeof((t=n)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,dt=/-->/g,ft=/>/g,w=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,pt=/'/g,vt=/"/g,Ot=/^(?:script|style|textarea)$/i,Dt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),$e=Dt(1),C=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),gt=new WeakMap,Ft=(n,t,e)=>{var i,s;const r=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let o=r._$litPart$;if(o===void 0){const h=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new N(t.insertBefore(H(),h),h,void 0,e)}return o.I(n),o},P=x.createTreeWalker(x,129,null,!1),Gt=(n,t)=>{const e=n.length-1,i=[];let s,r=t===2?"<svg>":"",o=k;for(let l=0;l<e;l++){const a=n[l];let c,u,d=-1,p=0;for(;p<a.length&&(o.lastIndex=p,u=o.exec(a),u!==null);)p=o.lastIndex,o===k?u[1]==="!--"?o=dt:u[1]!==void 0?o=ft:u[2]!==void 0?(Ot.test(u[2])&&(s=RegExp("</"+u[2],"g")),o=w):u[3]!==void 0&&(o=w):o===w?u[0]===">"?(o=s!=null?s:k,d=-1):u[1]===void 0?d=-2:(d=o.lastIndex-u[2].length,c=u[1],o=u[3]===void 0?w:u[3]==='"'?vt:pt):o===vt||o===pt?o=w:o===dt||o===ft?o=k:(o=w,s=void 0);const g=o===w&&n[l+1].startsWith("/>")?" ":"";r+=o===k?a+Wt:d>=0?(i.push(c),a.slice(0,d)+"$lit$"+a.slice(d)+S+g):a+S+(d===-2?(i.push(void 0),l):g)}const h=r+(n[e]||"<?>")+(t===2?"</svg>":"");return[ut!==void 0?ut.createHTML(h):h,i]};class U{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const h=t.length-1,l=this.parts,[a,c]=Gt(t,e);if(this.el=U.createElement(a,i),P.currentNode=this.el.content,e===2){const u=this.el.content,d=u.firstChild;d.remove(),u.append(...d.childNodes)}for(;(s=P.nextNode())!==null&&l.length<h;){if(s.nodeType===1){if(s.hasAttributes()){const u=[];for(const d of s.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(S)){const p=c[o++];if(u.push(d),p!==void 0){const g=s.getAttribute(p.toLowerCase()+"$lit$").split(S),m=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:m[2],strings:g,ctor:m[1]==="."?Zt:m[1]==="?"?Jt:m[1]==="@"?Xt:z})}else l.push({type:6,index:r})}for(const d of u)s.removeAttribute(d)}if(Ot.test(s.tagName)){const u=s.textContent.split(S),d=u.length-1;if(d>0){s.textContent=L?L.emptyScript:"";for(let p=0;p<d;p++)s.append(u[p],H()),P.nextNode(),l.push({type:2,index:++r});s.append(u[d],H())}}}else if(s.nodeType===8)if(s.data===Et)l.push({type:2,index:r});else{let u=-1;for(;(u=s.data.indexOf(S,u+1))!==-1;)l.push({type:7,index:r}),u+=S.length-1}r++}}static createElement(t,e){const i=x.createElement("template");return i.innerHTML=t,i}}function E(n,t,e=n,i){var s,r,o,h;if(t===C)return t;let l=i!==void 0?(s=e.\u03A3i)===null||s===void 0?void 0:s[i]:e.\u03A3o;const a=I(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((r=l==null?void 0:l.O)===null||r===void 0||r.call(l,!1),a===void 0?l=void 0:(l=new a(n),l.T(n,e,i)),i!==void 0?((o=(h=e).\u03A3i)!==null&&o!==void 0?o:h.\u03A3i=[])[i]=l:e.\u03A3o=l),l!==void 0&&(t=E(n,l.S(n,t.values),l,i)),t}class Kt{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:i},parts:s}=this.D,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:x).importNode(i,!0);P.currentNode=r;let o=P.nextNode(),h=0,l=0,a=s[0];for(;a!==void 0;){if(h===a.index){let c;a.type===2?c=new N(o,o.nextSibling,this,t):a.type===1?c=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(c=new Yt(o,this,t)),this.l.push(c),a=s[++l]}h!==(a==null?void 0:a.index)&&(o=P.nextNode(),h++)}return r}v(t){let e=0;for(const i of this.l)i!==void 0&&(i.strings!==void 0?(i.I(t,i,e),e+=i.strings.length-2):i.I(t[e])),e++}}class N{constructor(t,e,i,s){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=i,this.options=s}setConnected(t){var e;(e=this.P)===null||e===void 0||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=E(this,t,e),I(t)?t===v||t==null||t===""?(this.H!==v&&this.R(),this.H=v):t!==this.H&&t!==C&&this.m(t):t._$litType$!==void 0?this._(t):t.nodeType!==void 0?this.$(t):Vt(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;e!==null&&e.nodeType===3&&(this.B===null?e.nextSibling===null:e===this.B.previousSibling)?e.data=t:this.$(x.createTextNode(t)),this.H=t}_(t){var e;const{values:i,_$litType$:s}=t,r=typeof s=="number"?this.C(t):(s.el===void 0&&(s.el=U.createElement(s.h,this.options)),s);if(((e=this.H)===null||e===void 0?void 0:e.D)===r)this.H.v(i);else{const o=new Kt(r,this),h=o.u(this.options);o.v(i),this.$(h),this.H=o}}C(t){let e=gt.get(t.strings);return e===void 0&&gt.set(t.strings,e=new U(t)),e}g(t){kt(this.H)||(this.H=[],this.R());const e=this.H;let i,s=0;for(const r of t)s===e.length?e.push(i=new N(this.k(H()),this.k(H()),this,this.options)):i=e[s],i.I(r),s++;s<e.length&&(this.R(i&&i.B.nextSibling,s),e.length=s)}R(t=this.A.nextSibling,e){var i;for((i=this.P)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this.B;){const s=t.nextSibling;t.remove(),t=s}}}class z{constructor(t,e,i,s,r){this.type=1,this.H=v,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this.H=Array(i.length-1).fill(v),this.strings=i):this.H=v}get tagName(){return this.element.tagName}I(t,e=this,i,s){const r=this.strings;let o=!1;if(r===void 0)t=E(this,t,e,0),o=!I(t)||t!==this.H&&t!==C,o&&(this.H=t);else{const h=t;let l,a;for(t=r[0],l=0;l<r.length-1;l++)a=E(this,h[i+l],e,l),a===C&&(a=this.H[l]),o||(o=!I(a)||a!==this.H[l]),a===v?t=v:t!==v&&(t+=(a!=null?a:"")+r[l+1]),this.H[l]=a}o&&!s&&this.W(t)}W(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class Zt extends z{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===v?void 0:t}}class Jt extends z{constructor(){super(...arguments),this.type=4}W(t){t&&t!==v?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class Xt extends z{constructor(){super(...arguments),this.type=5}I(t,e=this){var i;if((t=(i=E(this,t,e,0))!==null&&i!==void 0?i:v)===C)return;const s=this.H,r=t===v&&s!==v||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==v&&(s===v||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,i;typeof this.H=="function"?this.H.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this.H.handleEvent(t)}}class Yt{constructor(t,e,i){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=i}I(t){E(this,t)}}(K=(at=globalThis).litHtmlPlatformSupport)===null||K===void 0||K.call(at,U,N),((Z=(ct=globalThis).litHtmlVersions)!==null&&Z!==void 0?Z:ct.litHtmlVersions=[]).push("2.0.0-rc.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var J,mt,X,yt,Y,bt;((J=(bt=globalThis).litElementVersions)!==null&&J!==void 0?J:bt.litElementVersions=[]).push("3.0.0-rc.2");class T extends M{constructor(){super(...arguments),this.renderOptions={host:this},this.\u03A6t=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();super.update(t),this.\u03A6t=Ft(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this.\u03A6t)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.\u03A6t)===null||t===void 0||t.setConnected(!1)}render(){return C}}T.finalized=!0,T._$litElement$=!0,(X=(mt=globalThis).litElementHydrateSupport)===null||X===void 0||X.call(mt,{LitElement:T}),(Y=(yt=globalThis).litElementPlatformSupport)===null||Y===void 0||Y.call(yt,{LitElement:T});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Me=n=>t=>typeof t=="function"?((e,i)=>(window.customElements.define(e,i),i))(n,t):((e,i)=>{const{kind:s,elements:r}=i;return{kind:s,elements:r,finisher(o){window.customElements.define(e,o)}}})(n,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qt=(n,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?V(W({},t),{finisher(e){e.createProperty(t.key,n)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,n)}};function Pe(n){return(t,e)=>e!==void 0?((i,s,r)=>{s.constructor.createProperty(r,i)})(n,t,e):Qt(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qt=({finisher:n,descriptor:t})=>(e,i)=>{var s;if(i===void 0){const r=(s=e.originalKey)!==null&&s!==void 0?s:e.key,o=t!=null?{kind:"method",placement:"prototype",key:r,descriptor:t(e.key)}:V(W({},e),{key:r});return n!=null&&(o.finisher=function(h){n(h,r)}),o}{const r=e.constructor;t!==void 0&&Object.defineProperty(e,i,t(i)),n==null||n(r,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function te(n,t){return qt({descriptor:e=>{const i={get(){var s;return(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(n)},enumerable:!0,configurable:!0};if(t){const s=typeof e=="symbol"?Symbol():"__"+e;i.get=function(){var r;return this[s]===void 0&&(this[s]=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(n)),this[s]}}return i}})}function tt(n,t,e){if(n&&n.length){const[i,s]=t,r=Math.PI/180*e,o=Math.cos(r),h=Math.sin(r);n.forEach(l=>{const[a,c]=l;l[0]=(a-i)*o-(c-s)*h+i,l[1]=(a-i)*h+(c-s)*o+s})}}function ee(n,t,e){const i=[];n.forEach(s=>i.push(...s)),tt(i,t,e)}function O(n){const t=n[0],e=n[1];return Math.sqrt(Math.pow(t[0]-e[0],2)+Math.pow(t[1]-e[1],2))}function ne(n,t,e,i){const s=t[1]-n[1],r=n[0]-t[0],o=s*n[0]+r*n[1],h=i[1]-e[1],l=e[0]-i[0],a=h*e[0]+l*e[1],c=s*l-h*r;return c?[(l*o-r*a)/c,(s*a-h*o)/c]:null}function Q(n,t,e){const i=n.length;if(i<3)return!1;const s=[Number.MAX_SAFE_INTEGER,e],r=[t,e];let o=0;for(let h=0;h<i;h++){const l=n[h],a=n[(h+1)%i];if(Tt(l,a,r,s)){if(A(l,r,a)===0)return R(l,r,a);o++}}return o%2===1}function R(n,t,e){return t[0]<=Math.max(n[0],e[0])&&t[0]>=Math.min(n[0],e[0])&&t[1]<=Math.max(n[1],e[1])&&t[1]>=Math.min(n[1],e[1])}function A(n,t,e){const i=(t[1]-n[1])*(e[0]-t[0])-(t[0]-n[0])*(e[1]-t[1]);return i===0?0:i>0?1:2}function Tt(n,t,e,i){const s=A(n,t,e),r=A(n,t,i),o=A(e,i,n),h=A(e,i,t);return!!(s!==r&&o!==h||s===0&&R(n,e,t)||r===0&&R(n,i,t)||o===0&&R(e,n,i)||h===0&&R(e,t,i))}function ie(n,t){const e=[0,0],i=Math.round(t.hachureAngle+90);i&&tt(n,e,i);const s=se(n,t);return i&&(tt(n,e,-i),ee(s,e,-i)),s}function se(n,t){const e=[...n];e[0].join(",")!==e[e.length-1].join(",")&&e.push([e[0][0],e[0][1]]);const i=[];if(e&&e.length>2){let s=t.hachureGap;s<0&&(s=t.strokeWidth*4),s=Math.max(s,.1);const r=[];for(let l=0;l<e.length-1;l++){const a=e[l],c=e[l+1];if(a[1]!==c[1]){const u=Math.min(a[1],c[1]);r.push({ymin:u,ymax:Math.max(a[1],c[1]),x:u===a[1]?a[0]:c[0],islope:(c[0]-a[0])/(c[1]-a[1])})}}if(r.sort((l,a)=>l.ymin<a.ymin?-1:l.ymin>a.ymin?1:l.x<a.x?-1:l.x>a.x?1:l.ymax===a.ymax?0:(l.ymax-a.ymax)/Math.abs(l.ymax-a.ymax)),!r.length)return i;let o=[],h=r[0].ymin;for(;o.length||r.length;){if(r.length){let l=-1;for(let c=0;c<r.length&&!(r[c].ymin>h);c++)l=c;r.splice(0,l+1).forEach(c=>{o.push({s:h,edge:c})})}if(o=o.filter(l=>!(l.edge.ymax<=h)),o.sort((l,a)=>l.edge.x===a.edge.x?0:(l.edge.x-a.edge.x)/Math.abs(l.edge.x-a.edge.x)),o.length>1)for(let l=0;l<o.length;l=l+2){const a=l+1;if(a>=o.length)break;const c=o[l].edge,u=o[a].edge;i.push([[Math.round(c.x),h],[Math.round(u.x),h]])}h+=s,o.forEach(l=>{l.edge.x=l.edge.x+s*l.edge.islope})}}return i}class re{constructor(t){this.helper=t}fillPolygon(t,e){return this._fillPolygon(t,e)}_fillPolygon(t,e,i=!1){let s=ie(t,e);if(i){const o=this.connectingLines(t,s);s=s.concat(o)}const r=this.renderLines(s,e);return{type:"fillSketch",ops:r}}renderLines(t,e){const i=[];for(const s of t)i.push(...this.helper.doubleLineOps(s[0][0],s[0][1],s[1][0],s[1][1],e));return i}connectingLines(t,e){const i=[];if(e.length>1)for(let s=1;s<e.length;s++){const r=e[s-1];if(O(r)<3)continue;const h=[e[s][0],r[1]];if(O(h)>3){const l=this.splitOnIntersections(t,h);i.push(...l)}}return i}midPointInPolygon(t,e){return Q(t,(e[0][0]+e[1][0])/2,(e[0][1]+e[1][1])/2)}splitOnIntersections(t,e){const i=Math.max(5,O(e)*.1),s=[];for(let r=0;r<t.length;r++){const o=t[r],h=t[(r+1)%t.length];if(Tt(o,h,...e)){const l=ne(o,h,e[0],e[1]);if(l){const a=O([l,e[0]]),c=O([l,e[1]]);a>i&&c>i&&s.push({point:l,distance:a})}}}if(s.length>1){const r=s.sort((l,a)=>l.distance-a.distance).map(l=>l.point);if(Q(t,...e[0])||r.shift(),Q(t,...e[1])||r.pop(),r.length<=1)return this.midPointInPolygon(t,e)?[e]:[];const o=[e[0],...r,e[1]],h=[];for(let l=0;l<o.length-1;l+=2){const a=[o[l],o[l+1]];this.midPointInPolygon(t,a)&&h.push(a)}return h}else return this.midPointInPolygon(t,e)?[e]:[]}}class oe extends re{fillPolygon(t,e){return this._fillPolygon(t,e,!0)}}class le{constructor(t){this.seed=t}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}function Rt(n,t,e,i,s){return{type:"path",ops:_(n,t,e,i,s)}}function he(n,t,e){const i=(n||[]).length;if(i>2){const s=[];for(let r=0;r<i-1;r++)s.push(..._(n[r][0],n[r][1],n[r+1][0],n[r+1][1],e));return t&&s.push(..._(n[i-1][0],n[i-1][1],n[0][0],n[0][1],e)),{type:"path",ops:s}}else if(i===2)return Rt(n[0][0],n[0][1],n[1][0],n[1][1],e);return{type:"path",ops:[]}}function At(n,t){return he(n,!0,t)}function ae(n,t,e,i,s){const r=[[n,t],[n+e,t],[n+e,t+i],[n,t+i]];return At(r,s)}function ce(n,t,e,i,s){const r=ue(e,i,s);return de(n,t,s,r).opset}function ue(n,t,e){const i=Math.sqrt(Math.PI*2*Math.sqrt((Math.pow(n/2,2)+Math.pow(t/2,2))/2)),s=Math.max(e.curveStepCount,e.curveStepCount/Math.sqrt(200)*i),r=Math.PI*2/s;let o=Math.abs(n/2),h=Math.abs(t/2);const l=1-e.curveFitting;return o+=f(o*l,e),h+=f(h*l,e),{increment:r,rx:o,ry:h}}function de(n,t,e,i){const[s,r]=$t(i.increment,n,t,i.rx,i.ry,1,i.increment*et(.1,et(.4,1,e),e),e);let o=wt(s,null,e);if(!e.disableMultiStroke){const[h]=$t(i.increment,n,t,i.rx,i.ry,1.5,0,e),l=wt(h,null,e);o=o.concat(l)}return{estimatedPoints:r,opset:{type:"path",ops:o}}}function fe(n,t,e,i,s){return _(n,t,e,i,s,!0)}function Ht(n){return n.randomizer||(n.randomizer=new le(n.seed||0)),n.randomizer.next()}function et(n,t,e,i=1){return e.roughness*i*(Ht(e)*(t-n)+n)}function f(n,t,e=1){return et(-n,n,t,e)}function _(n,t,e,i,s,r=!1){const o=r?s.disableMultiStrokeFill:s.disableMultiStroke,h=St(n,t,e,i,s,!0,!1);if(o)return h;const l=St(n,t,e,i,s,!0,!0);return h.concat(l)}function St(n,t,e,i,s,r,o){const h=Math.pow(n-e,2)+Math.pow(t-i,2),l=Math.sqrt(h);let a=1;l<200?a=1:l>500?a=.4:a=-.0016668*l+1.233334;let c=s.maxRandomnessOffset||0;c*c*100>h&&(c=l/10);const u=c/2,d=.2+Ht(s)*.2;let p=s.bowing*s.maxRandomnessOffset*(i-t)/200,g=s.bowing*s.maxRandomnessOffset*(n-e)/200;p=f(p,s,a),g=f(g,s,a);const m=[],y=()=>f(u,s,a),$=()=>f(c,s,a),b=s.preserveVertices;return r&&(o?m.push({op:"move",data:[n+(b?0:y()),t+(b?0:y())]}):m.push({op:"move",data:[n+(b?0:f(c,s,a)),t+(b?0:f(c,s,a))]})),o?m.push({op:"bcurveTo",data:[p+n+(e-n)*d+y(),g+t+(i-t)*d+y(),p+n+2*(e-n)*d+y(),g+t+2*(i-t)*d+y(),e+(b?0:y()),i+(b?0:y())]}):m.push({op:"bcurveTo",data:[p+n+(e-n)*d+$(),g+t+(i-t)*d+$(),p+n+2*(e-n)*d+$(),g+t+2*(i-t)*d+$(),e+(b?0:$()),i+(b?0:$())]}),m}function wt(n,t,e){const i=n.length,s=[];if(i>3){const r=[],o=1-e.curveTightness;s.push({op:"move",data:[n[1][0],n[1][1]]});for(let h=1;h+2<i;h++){const l=n[h];r[0]=[l[0],l[1]],r[1]=[l[0]+(o*n[h+1][0]-o*n[h-1][0])/6,l[1]+(o*n[h+1][1]-o*n[h-1][1])/6],r[2]=[n[h+1][0]+(o*n[h][0]-o*n[h+2][0])/6,n[h+1][1]+(o*n[h][1]-o*n[h+2][1])/6],r[3]=[n[h+1][0],n[h+1][1]],s.push({op:"bcurveTo",data:[r[1][0],r[1][1],r[2][0],r[2][1],r[3][0],r[3][1]]})}if(t&&t.length===2){const h=e.maxRandomnessOffset;s.push({op:"lineTo",data:[t[0]+f(h,e),t[1]+f(h,e)]})}}else i===3?(s.push({op:"move",data:[n[1][0],n[1][1]]}),s.push({op:"bcurveTo",data:[n[1][0],n[1][1],n[2][0],n[2][1],n[2][0],n[2][1]]})):i===2&&s.push(..._(n[0][0],n[0][1],n[1][0],n[1][1],e));return s}function $t(n,t,e,i,s,r,o,h){const l=[],a=[],c=f(.5,h)-Math.PI/2;a.push([f(r,h)+t+.9*i*Math.cos(c-n),f(r,h)+e+.9*s*Math.sin(c-n)]);for(let u=c;u<Math.PI*2+c-.01;u=u+n){const d=[f(r,h)+t+i*Math.cos(u),f(r,h)+e+s*Math.sin(u)];l.push(d),a.push(d)}return a.push([f(r,h)+t+i*Math.cos(c+Math.PI*2+o*.5),f(r,h)+e+s*Math.sin(c+Math.PI*2+o*.5)]),a.push([f(r,h)+t+.98*i*Math.cos(c+o),f(r,h)+e+.98*s*Math.sin(c+o)]),a.push([f(r,h)+t+.9*i*Math.cos(c+o*.5),f(r,h)+e+.9*s*Math.sin(c+o*.5)]),[a,l]}const pe={randOffset(n,t){return n},randOffsetWithRange(n,t,e){return(n+t)/2},ellipse(n,t,e,i,s){return ce(n,t,e,i,s)},doubleLineOps(n,t,e,i,s){return fe(n,t,e,i,s)}};function B(n){return{maxRandomnessOffset:2,roughness:1,bowing:.85,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:3.5,hachureAngle:-41,hachureGap:5,dashOffset:-1,dashGap:-1,zigzagOffset:0,combineNestedSvgPaths:!1,disableMultiStroke:!1,disableMultiStrokeFill:!1,seed:n}}function ve(n,t){let e="";for(const i of n.ops){const s=i.data;switch(i.op){case"move":if(t&&e)break;e+=`M${s[0]} ${s[1]} `;break;case"bcurveTo":e+=`C${s[0]} ${s[1]}, ${s[2]} ${s[3]}, ${s[4]} ${s[5]} `;break;case"lineTo":e+=`L${s[0]} ${s[1]} `;break}}return e.trim()}function ge(n,t){const e=document.createElementNS("http://www.w3.org/2000/svg",n);if(t)for(const i in t)e.setAttributeNS(null,i,t[i]);return e}function j(n,t,e=!1){const i=ge("path",{d:ve(n,e)});return t&&t.appendChild(i),i}function xe(n,t,e,i,s,r){return j(ae(t+2,e+2,i-4,s-4,B(r)),n)}function Ce(n,t,e,i,s,r){return j(Rt(t,e,i,s,B(r)),n)}function Ee(n,t,e){return j(At(t,B(e)),n,!0)}function ke(n,t){const i=new oe(pe).fillPolygon(n,B(t));return j(i,null)}var me=globalThis&&globalThis.__decorate||function(n,t,e,i){var s=arguments.length,r=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,t,e,i);else for(var h=n.length-1;h>=0;h--)(o=n[h])&&(r=(s<3?o(r):s>3?o(t,e,r):o(t,e))||r);return s>3&&r&&Object.defineProperty(t,e,r),r},ye=globalThis&&globalThis.__metadata||function(n,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,t)};const Oe=Bt`
:host {
  opacity: 0;
}
:host(.wired-rendered) {
  opacity: 1;
}
#overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}
svg {
  display: block;
}
path {
  stroke: currentColor;
  stroke-width: 0.7;
  fill: transparent;
}
.hidden {
  display: none !important;
}
`;class be extends T{constructor(){super(...arguments);this.lastSize=[0,0],this.seed=Math.floor(Math.random()*2**31)}updated(t){this.wiredRender()}wiredRender(t=!1){if(this.svg){const e=this.canvasSize();if(!t&&e[0]===this.lastSize[0]&&e[1]===this.lastSize[1])return;for(;this.svg.hasChildNodes();)this.svg.removeChild(this.svg.lastChild);this.svg.setAttribute("width",`${e[0]}`),this.svg.setAttribute("height",`${e[1]}`),this.draw(this.svg,e),this.lastSize=e,this.classList.add("wired-rendered")}}fire(t,e){Se(this,t,e)}}me([te("svg"),ye("design:type",SVGSVGElement)],be.prototype,"svg",void 0);function Te(){return Math.floor(Math.random()*2**31)}function Se(n,t,e){n.dispatchEvent(new CustomEvent(t,{composed:!0,bubbles:!0,detail:e}))}export{Oe as B,$e as T,be as W,xe as a,ke as b,Pe as e,Se as f,T as h,Bt as i,Ce as l,Me as n,te as o,Ee as p,Te as r};
