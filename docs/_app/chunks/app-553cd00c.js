import{R as D,T as j,U as A,S as E,i as L,s as R,l as b,g as m,K as h,d as _,V as B,v as S,W as T,e as C,t as M,c as O,a as I,h as P,X as i,J as V,j as x,Y as F,Z as J,_ as K,$ as N,a0 as U,w as X,x as Y,y as Z,a1 as z,q as G,o as H,B as Q,N as g}from"./vendor-93d9c1c6.js";import{l as v}from"./store-bebe7b2e.js";import{_ as w}from"./preload-helper-e4860ae8.js";const W={en:"English",ru:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439"},d=Object.keys(W);let f={};async function ue(n){for(const e of d){const s=await n(`/locales/${e}.flt`);s.ok&&(f[e]=new D(await s.text()))}}function*_e(n){n=Array.isArray(n)?n:[n];const e=j(n,d,{defaultLocale:d[0]});for(const s of e)if(f[s]){const l=new A(s);l.addResource(f[s]),yield l}}function y(n,e,s){const l=n.slice();return l[7]=e[s][0],l[8]=e[s][1],l}function q(n){let e,s,l,c=Object.entries(n[1]),a=[];for(let t=0;t<c.length;t+=1)a[t]=k(y(n,c,t));return{c(){e=C("wired-combo");for(let t=0;t<a.length;t+=1)a[t].c();this.h()},l(t){e=O(t,"WIRED-COMBO",{selected:!0,class:!0});var r=I(e);for(let o=0;o<a.length;o+=1)a[o].l(r);r.forEach(_),this.h()},h(){i(e,"selected",n[0]),i(e,"class","svelte-pd57bw")},m(t,r){m(t,e,r);for(let o=0;o<a.length;o+=1)a[o].m(e,null);s||(l=F(e,"selected",n[2]),s=!0)},p(t,r){if(r&2){c=Object.entries(t[1]);let o;for(o=0;o<c.length;o+=1){const u=y(t,c,o);a[o]?a[o].p(u,r):(a[o]=k(u),a[o].c(),a[o].m(e,null))}for(;o<a.length;o+=1)a[o].d(1);a.length=c.length}r&3&&i(e,"selected",t[0])},d(t){t&&_(e),J(a,t),s=!1,l()}}}function k(n){let e,s=n[8]+"",l,c;return{c(){e=C("wired-item"),l=M(s),this.h()},l(a){e=O(a,"WIRED-ITEM",{value:!0,class:!0});var t=I(e);l=P(t,s),t.forEach(_),this.h()},h(){i(e,"value",c=n[7]),i(e,"class","svelte-pd57bw")},m(a,t){m(a,e,t),V(e,l)},p(a,t){t&2&&s!==(s=a[8]+"")&&x(l,s),t&2&&c!==(c=a[7])&&i(e,"value",c)},d(a){a&&_(e)}}}function ee(n){let e;function s(a,t){return q}let c=s()(n);return{c(){c.c(),e=b()},l(a){c.l(a),e=b()},m(a,t){c.m(a,t),m(a,e,t)},p(a,[t]){c.p(a,t)},i:h,o:h,d(a){c.d(a),a&&_(e)}}}function te(n,e,s){let{value:l}=e,{options:c}=e;const a=B();function t(o){a("change",{value:o.target.value.value})}S(async()=>{(await w(()=>import("./wired-combo-f6a7bd4f.js"),["chunks/wired-combo-f6a7bd4f.js","chunks/wired-base-02cb0b5c.js","chunks/wired-card-8905fc29.js","chunks/wired-item-6a5aa092.js"])).WiredCombo,(await w(()=>import("./wired-item-6a5aa092.js"),["chunks/wired-item-6a5aa092.js","chunks/wired-base-02cb0b5c.js"])).WiredItem});function r(){l=T(this),s(0,l),s(1,c)}return n.$$set=o=>{"value"in o&&s(0,l=o.value),"options"in o&&s(1,c=o.options)},[l,c,t,r]}class ae extends E{constructor(e){super();L(this,e,te,ee,R,{value:0,options:1})}}const ne=()=>{const n=K("__svelte__");return{page:{subscribe:n.page.subscribe},navigating:{subscribe:n.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:n.navigating.subscribe}},session:n.session,updated:n.updated}},se={subscribe(n){return ne().page.subscribe(n)}};function oe(n){let e,s,l;function c(t){n[2](t)}let a={options:W};return n[0]!==void 0&&(a.value=n[0]),e=new ae({props:a}),N.push(()=>U(e,"value",c)),e.$on("change",n[1]),{c(){X(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,r){Z(e,t,r),l=!0},p(t,[r]){const o={};!s&&r&1&&(s=!0,o.value=t[0],z(()=>s=!1)),e.$set(o)},i(t){l||(G(e.$$.fragment,t),l=!0)},o(t){H(e.$$.fragment,t),l=!1},d(t){Q(e,t)}}}function le(n,e,s){let l,c;g(n,se,r=>s(3,l=r)),g(n,v,r=>s(0,c=r));function a(r){const{url:o,params:{lang:u}}=l,p=r.detail.value;if(u!=p){const $=`//${o.host}${o.pathname.replace(`/${u}`,`/${p}`)}`;document.location.href=$}}function t(r){c=r,v.set(c)}return[c,a,t]}class de extends E{constructor(e){super();L(this,e,le,oe,R,{})}}export{de as L,_e as g,ue as p};
