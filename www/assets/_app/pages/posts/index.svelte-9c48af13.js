import{S as t,i as s,s as a,e as o,t as r,k as e,c as n,a as c,g as l,d as i,n as f,f as h,F as p,h as u,l as d,H as g,L as N}from"../../chunks/vendor-9ec011bc.js";function E(t,s,a){const o=t.slice();return o[1]=s[a],o}function m(t){let s,a,d,g,N,E,m,O,I,v,A,C=t[1].Name+"",D=t[1].url+"",R=JSON.stringify(t[1].details)+"";return{c(){s=o("ion-card"),a=o("ion-card-header"),d=o("ion-card-title"),g=r(C),N=e(),E=o("ion-card-subtitle"),m=r(D),O=e(),I=o("ion-card-content"),v=r(R),A=e()},l(t){s=n(t,"ION-CARD",{});var o=c(s);a=n(o,"ION-CARD-HEADER",{});var r=c(a);d=n(r,"ION-CARD-TITLE",{});var e=c(d);g=l(e,C),e.forEach(i),N=f(r),E=n(r,"ION-CARD-SUBTITLE",{});var h=c(E);m=l(h,D),h.forEach(i),r.forEach(i),O=f(o),I=n(o,"ION-CARD-CONTENT",{});var p=c(I);v=l(p,R),p.forEach(i),A=f(o),o.forEach(i)},m(t,o){h(t,s,o),p(s,a),p(a,d),p(d,g),p(a,N),p(a,E),p(E,m),p(s,O),p(s,I),p(I,v),p(s,A)},p(t,s){1&s&&C!==(C=t[1].Name+"")&&u(g,C),1&s&&D!==(D=t[1].url+"")&&u(m,D),1&s&&R!==(R=JSON.stringify(t[1].details)+"")&&u(v,R)},d(t){t&&i(s)}}}function O(t){let s,a=t[0],o=[];for(let r=0;r<a.length;r+=1)o[r]=m(E(t,a,r));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();s=d()},l(t){for(let s=0;s<o.length;s+=1)o[s].l(t);s=d()},m(t,a){for(let s=0;s<o.length;s+=1)o[s].m(t,a);h(t,s,a)},p(t,[r]){if(1&r){let e;for(a=t[0],e=0;e<a.length;e+=1){const n=E(t,a,e);o[e]?o[e].p(n,r):(o[e]=m(n),o[e].c(),o[e].m(s.parentNode,s))}for(;e<o.length;e+=1)o[e].d(1);o.length=a.length}},i:g,o:g,d(t){N(o,t),t&&i(s)}}}async function I({fetch:t}){const s=await t("/posts/");return{props:{posts:(await s.json()).posts}}}function v(t,s,a){let{posts:o}=s;return console.log(o),t.$$set=t=>{"posts"in t&&a(0,o=t.posts)},[o]}export default class extends t{constructor(t){super(),s(this,t,v,O,a,{posts:0})}}export{I as load};
