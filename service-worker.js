if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const l=e=>n(e,o),d={module:{uri:o},exports:t,require:l};i[o]=Promise.all(r.map((e=>d[e]||l(e)))).then((e=>(s(...e),t)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"3bd670047a114ff80c28.png",revision:null},{url:"6072c7a9ae933c00fb0f.jpg",revision:null},{url:"d2e9284f758d2aa4ee4e.png",revision:null},{url:"index.html",revision:"9ab5065655244eb52d39a11e21f008f6"},{url:"main.css",revision:"a1d6992326a0ace156915ae1db892d95"},{url:"main.js",revision:"2be0ed24abde78b65b9b119985e93465"},{url:"main.js.LICENSE.txt",revision:"ed03f153e90ce523a07a36f3d0bbfb38"}],{})}));