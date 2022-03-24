var w=Object.defineProperty,z=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var f=(e,r,i)=>r in e?w(e,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[r]=i,y=(e,r)=>{for(var i in r||(r={}))x.call(r,i)&&f(e,i,r[i]);if(m)for(var i of m(r))B.call(r,i)&&f(e,i,r[i]);return e},g=(e,r)=>z(e,b(r));import{j as q,a as S,w as A,S as E,l as d,y as v}from"./vendor.be40a1e6.js";const j=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}};j();const o=q,l=S,$=new Worker("/shaker-phobia/assets/worker.c51cf05d.js",{type:"module"}),M=A($);function O(e){var a,h;const[r,i]=d(null),[s,t]=d(null);if(v(()=>{(async()=>{const u=e.query.imports?e.query.imports.split(","):void 0;try{const p=await M.compile(`https://cdn.skypack.dev/${e.query.pkg}`,u);t(p)}catch{i({reason:"compile error"})}})()},[e.query]),r)return l("div",{children:["CompileError: ",r.reason]});if(!s)return o("div",{children:"compiling..."});if(s.error)return l("div",{children:["CompileError: ",s.reason]});const n=(h=(a=e.query.pkg)==null?void 0:a.match(/^(@?[^@]+)(@\w*)?/))==null?void 0:h[1],c=e.query.imports?"{ "+e.query.imports.split(",").join(", ")+" }":"* as x";return l("div",{children:[o("pre",{children:l("code",{style:{fontSize:"1rem",fontFamily:"menlo"},children:["import ",c,' from "',n,'";',`
`]})}),o("p",{style:{paddingTop:"2rem",paddingBottom:"4rem"},children:l("strong",{style:{fontSize:"3rem"},children:[k(s.size),"\xA0 | gzip: ",k(s.gzipSize)]})}),l("details",{children:[o("summary",{children:"Output"}),o("pre",{style:{width:"100%",fontFamily:"monaco",whiteSpace:"pre-wrap",wordBreak:"break-all"},children:o("code",{children:s.code})})]})]})}function T(){const[e,r]=d(null),[i,s]=d(!1),[t,n]=d(null);return v(()=>{if(!location.search){s(!0);return}const c=location.search.slice(1).split("&").reduce((a,h)=>{const[u,p]=h.split("=");return g(y({},a),{[u]:p})},{});c.pkg?c.pkg&&/[a-zA-Z@][a-zA-Z-_\d\/\@]+/.test(c.pkg)?n(c):r({reason:"Invalid pkgName"}):s(!0)},[]),l("div",{children:[l("header",{children:[o("h1",{children:o("a",{href:"/",style:{},children:"ShakerPhobia"})}),l("p",{children:["bundle size after treeshake \xA0|\xA0",o("a",{href:"https://github.com/mizchi/shaker-phobia",children:"GitHub"}),"\xA0|\xA0 author: ",o("a",{href:"https://twitter.com/mizchi",children:"@mizchi"})]}),t&&o(O,{query:t})]}),e&&o("div",{children:e.reason}),i&&l("div",{children:[o("h2",{children:"What's this"}),l("p",{children:["This is a tool to check bundle size with treeshake. It downloads sources from ",o("a",{href:"https://cdn.skypack.dev",children:"cdn.skpack.dev"})," and build with rollup and terser ",o("strong",{children:"in your browser"}),"."]}),l("p",{children:["Open to bundle: ",o("code",{style:{fontSize:"1rem"},children:"https://shakerphobia.netlify.com/?pkg=<name(@version)>&imports=<a,b,c>"}),"."]}),o("h2",{children:"Examples"}),o("p",{children:o("ul",{children:[{pkg:"preact",imports:["render","h"]},{pkg:"react@16.0.0",imports:void 0},{pkg:"@mizchi/mints",imports:["transformSync"]},{pkg:"lodash",imports:["isEqual","get","flatten"]},{pkg:"lodash-es",imports:["chain"]}].map(c=>{const a=`${location.protocol}//${location.host}/?pkg=${c.pkg}${c.imports?`&imports=${c.imports.join(",")}`:""}`;return o("li",{children:o("a",{href:a,children:a})})})})})]})]})}E(o(T,{}),document.getElementById("app"));function k(e,r=2){if(e===0)return"0 Bytes";const i=1024,s=r<0?0:r,t=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],n=Math.floor(Math.log(e)/Math.log(i));return parseFloat((e/Math.pow(i,n)).toFixed(s))+" "+t[n]}
