import{R as J,T as K,U,S as A,i as D,s as B,l as f,g as d,K as b,d as u,V as X,v as Y,W as Z,e as v,t as M,c as k,a as w,h as P,X as h,J as S,j as z,Y as G,Z as T,_ as H,q as N,o as V,N as E,$ as Q,a0 as x,w as q,x as ee,y as te,a1 as ne,B as le,b as O}from"./vendor-93d9c1c6.js";import{l as L}from"./store-bebe7b2e.js";import{_ as R}from"./preload-helper-e4860ae8.js";const p={en:"English",ru:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439"},m=Object.keys(p);let g={};async function me(s){for(const e of m){const l=await s(`/locales/${e}.flt`);l.ok&&(g[e]=new J(await l.text()))}}function*ge(s){s=Array.isArray(s)?s:[s];const e=K(s,m,{defaultLocale:m[0]});for(const l of e)if(g[l]){const n=new U(l);n.addResource(g[l]),yield n}}function j(s,e,l){const n=s.slice();return n[7]=e[l][0],n[8]=e[l][1],n}function oe(s){let e,l,n,a=Object.entries(s[1]),o=[];for(let t=0;t<a.length;t+=1)o[t]=C(j(s,a,t));return{c(){e=v("wired-combo");for(let t=0;t<o.length;t+=1)o[t].c();this.h()},l(t){e=k(t,"WIRED-COMBO",{selected:!0,class:!0});var c=w(e);for(let r=0;r<o.length;r+=1)o[r].l(c);c.forEach(u),this.h()},h(){h(e,"selected",s[0]),h(e,"class","svelte-pd57bw")},m(t,c){d(t,e,c);for(let r=0;r<o.length;r+=1)o[r].m(e,null);l||(n=G(e,"selected",s[2]),l=!0)},p(t,c){if(c&2){a=Object.entries(t[1]);let r;for(r=0;r<a.length;r+=1){const i=j(t,a,r);o[r]?o[r].p(i,c):(o[r]=C(i),o[r].c(),o[r].m(e,null))}for(;r<o.length;r+=1)o[r].d(1);o.length=a.length}c&3&&h(e,"selected",t[0])},d(t){t&&u(e),T(o,t),l=!1,n()}}}function C(s){let e,l=s[8]+"",n,a;return{c(){e=v("wired-item"),n=M(l),this.h()},l(o){e=k(o,"WIRED-ITEM",{value:!0,class:!0});var t=w(e);n=P(t,l),t.forEach(u),this.h()},h(){h(e,"value",a=s[7]),h(e,"class","svelte-pd57bw")},m(o,t){d(o,e,t),S(e,n)},p(o,t){t&2&&l!==(l=o[8]+"")&&z(n,l),t&2&&a!==(a=o[7])&&h(e,"value",a)},d(o){o&&u(e)}}}function ae(s){let e;function l(o,t){return oe}let a=l()(s);return{c(){a.c(),e=f()},l(o){a.l(o),e=f()},m(o,t){a.m(o,t),d(o,e,t)},p(o,[t]){a.p(o,t)},i:b,o:b,d(o){a.d(o),o&&u(e)}}}function se(s,e,l){let{value:n}=e,{options:a}=e;const o=X();function t(r){o("change",{value:r.target.value.value})}Y(async()=>{(await R(()=>import("./wired-combo-f6a7bd4f.js"),["chunks/wired-combo-f6a7bd4f.js","chunks/wired-base-02cb0b5c.js","chunks/wired-card-8905fc29.js","chunks/wired-item-6a5aa092.js"])).WiredCombo,(await R(()=>import("./wired-item-6a5aa092.js"),["chunks/wired-item-6a5aa092.js","chunks/wired-base-02cb0b5c.js"])).WiredItem});function c(){n=Z(this),l(0,n),l(1,a)}return s.$$set=r=>{"value"in r&&l(0,n=r.value),"options"in r&&l(1,a=r.options)},[n,a,t,c]}class re extends A{constructor(e){super();D(this,e,se,ae,B,{value:0,options:1})}}const ce=()=>{const s=H("__svelte__");return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:s.navigating.subscribe}},session:s.session,updated:s.updated}},ie={subscribe(s){return ce().page.subscribe(s)}};function I(s,e,l){const n=s.slice();return n[8]=e[l][0],n[9]=e[l][1],n}function ue(s){let e,l,n;function a(t){s[4](t)}let o={options:p};return s[0]!==void 0&&(o.value=s[0]),e=new re({props:o}),Q.push(()=>x(e,"value",a)),e.$on("change",s[2]),{c(){q(e.$$.fragment)},l(t){ee(e.$$.fragment,t)},m(t,c){te(e,t,c),n=!0},p(t,c){const r={};!l&&c&1&&(l=!0,r.value=t[0],ne(()=>l=!1)),e.$set(r)},i(t){n||(N(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){le(e,t)}}}function _e(s){let e,l=Object.entries(p),n=[];for(let a=0;a<l.length;a+=1)n[a]=$(I(s,l,a));return{c(){for(let a=0;a<n.length;a+=1)n[a].c();e=f()},l(a){for(let o=0;o<n.length;o+=1)n[o].l(a);e=f()},m(a,o){for(let t=0;t<n.length;t+=1)n[t].m(a,o);d(a,e,o)},p(a,o){if(o&9){l=Object.entries(p);let t;for(t=0;t<l.length;t+=1){const c=I(a,l,t);n[t]?n[t].p(c,o):(n[t]=$(c),n[t].c(),n[t].m(e.parentNode,e))}for(;t<n.length;t+=1)n[t].d(1);n.length=l.length}},i:b,o:b,d(a){T(n,a),a&&u(e)}}}function W(s){let e,l=s[9]+"",n,a;return{c(){e=v("a"),n=M(l),this.h()},l(o){e=k(o,"A",{rel:!0,href:!0});var t=w(e);n=P(t,l),t.forEach(u),this.h()},h(){O(e,"rel","external"),O(e,"href",a=s[3](s[8]))},m(o,t){d(o,e,t),S(e,n)},p:b,d(o){o&&u(e)}}}function $(s){let e,l=s[8]!==s[0]&&W(s);return{c(){l&&l.c(),e=f()},l(n){l&&l.l(n),e=f()},m(n,a){l&&l.m(n,a),d(n,e,a)},p(n,a){n[8]!==n[0]?l?l.p(n,a):(l=W(n),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},d(n){l&&l.d(n),n&&u(e)}}}function fe(s){let e,l,n,a;const o=[_e,ue],t=[];function c(r,i){return r[1]?0:1}return e=c(s),l=t[e]=o[e](s),{c(){l.c(),n=f()},l(r){l.l(r),n=f()},m(r,i){t[e].m(r,i),d(r,n,i),a=!0},p(r,[i]){l.p(r,i)},i(r){a||(N(l),a=!0)},o(r){V(l),a=!1},d(r){t[e].d(r),r&&u(n)}}}function de(s,e,l){let n,a;E(s,L,_=>l(0,n=_)),E(s,ie,_=>l(5,a=_));const{url:o,params:t}=a,c=Object.keys(t).length<2;function r(_){const y=_.detail.value;n!=y&&(document.location.href=i(y))}function i(_){return`${o.pathname.replace(`/${n}`,`/${_}`)}`}function F(_){n=_,L.set(n)}return[n,c,r,i,F]}class ve extends A{constructor(e){super();D(this,e,de,fe,B,{})}}export{ve as L,ge as g,me as p};
