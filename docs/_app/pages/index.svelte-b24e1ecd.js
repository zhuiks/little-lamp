import{S as H,i as J,s as K,L as O,w as u,x as g,y as d,q as _,o as h,B as w,M as T,N as I,e as y,k as b,c as L,a as M,m as z,d as E,O as j,b as A,g as Q,J as o,K as U}from"../chunks/vendor-c7eddb47.js";import{l as G,c as C,p as V,P as W}from"../chunks/plan-select-5130ad93.js";import{s as X}from"../chunks/get-data-55be34fa.js";import{p as Y,g as F,L as Z}from"../chunks/app-de1548ae.js";import"../chunks/preload-helper-898be1f9.js";function ee(i){let e,n,t,l,r,m,k,v,$,x,P,c,B,p,D,f,q;return m=new I({props:{id:"title"}}),$=new I({props:{id:"intro"}}),c=new I({props:{id:"about"}}),p=new W({}),f=new Z({}),{c(){e=y("main"),n=y("img"),l=b(),r=y("h1"),u(m.$$.fragment),k=b(),v=y("p"),u($.$$.fragment),x=b(),P=y("p"),u(c.$$.fragment),B=b(),u(p.$$.fragment),D=b(),u(f.$$.fragment),this.h()},l(a){e=L(a,"MAIN",{});var s=M(e);n=L(s,"IMG",{src:!0,alt:!0}),l=z(s),r=L(s,"H1",{});var N=M(r);g(m.$$.fragment,N),N.forEach(E),k=z(s),v=L(s,"P",{});var R=M(v);g($.$$.fragment,R),R.forEach(E),x=z(s),P=L(s,"P",{});var S=M(P);g(c.$$.fragment,S),S.forEach(E),B=z(s),g(p.$$.fragment,s),D=z(s),g(f.$$.fragment,s),s.forEach(E),this.h()},h(){j(n.src,t="assets/lampochka.png")||A(n,"src",t),A(n,"alt","Little Lamp")},m(a,s){Q(a,e,s),o(e,n),o(e,l),o(e,r),d(m,r,null),o(e,k),o(e,v),d($,v,null),o(e,x),o(e,P),d(c,P,null),o(e,B),d(p,e,null),o(e,D),d(f,e,null),q=!0},p:U,i(a){q||(_(m.$$.fragment,a),_($.$$.fragment,a),_(c.$$.fragment,a),_(p.$$.fragment,a),_(f.$$.fragment,a),q=!0)},o(a){h(m.$$.fragment,a),h($.$$.fragment,a),h(c.$$.fragment,a),h(p.$$.fragment,a),h(f.$$.fragment,a),q=!1},d(a){a&&E(e),w(m),w($),w(c),w(p),w(f)}}}function te(i){let e,n;return e=new O({props:{bundles:F(i[0]),$$slots:{default:[ee]},$$scope:{ctx:i}}}),{c(){u(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,l){d(e,t,l),n=!0},p(t,[l]){const r={};l&1&&(r.bundles=F(t[0])),l&2&&(r.$$scope={dirty:l,ctx:t}),e.$set(r)},i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){w(e,t)}}}async function ie({url:i,params:e,fetch:n}){const t=i.searchParams.get("lang")||"en";G.set(t),await Y(n),C.set(null);const l=e.type;C.set(l);const r=await X(n,t);return r.ready?(delete r.ready,V.set(r),{}):{status:r.status,error:r.error}}function ae(i,e,n){let t;return T(i,G,l=>n(0,t=l)),[t]}class me extends H{constructor(e){super();J(this,e,ae,te,K,{})}}export{me as default,ie as load};
