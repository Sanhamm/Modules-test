(()=>{"use strict";var e={902:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),r=n.n(o),i=n(645),a=n.n(i)()(r());a.push([e.id,"#amiibos {\n    display: grid;\n    grid-template-columns: auto auto auto auto;\n    margin-top: 20px;\n    background-color: aqua;\n}",""]);const c=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);o&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],l=o.base?s[0]+o.base:s[0],u=i[l]||0,d="".concat(l," ").concat(u);i[l]=u+1;var m=n(d),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var f=r(p,o);o.byIndex=c,t.splice(c,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var s=o(e,r),l=0;l<i.length;l++){var u=n(i[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),i=n(569),a=n.n(i),c=n(565),s=n.n(c),l=n(216),u=n.n(l),d=n(589),m=n.n(d),p=n(902),f={};function v(e,t=2){const n=Math.pow(10,t);return Math.round(e*n)/n}f.styleTagTransform=m(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=u(),t()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;let y=[];function h(e,t){let n="";for(let t of e)n+=`\n        <details>\n            <summary>${t.name}</summary>\n            <img src="${t.image}" height="100" alt="${t.name}"\n            <ul>\n                <li>Name: ${t.name}</li>\n                <li>Character: ${t.character}</li>\n                <li>AmiiboSeries: ${t.amiiboSeries}</li>\n                <li>GameSeries: ${t.gameSeries}</li>\n                <li>Type: ${t.type}</li>\n                <li>ID: ${t.head}${t.tail}</li>\n            </ul>\n        </details>\n        `;t.innerHTML=n}document.getElementById("submit-fib").addEventListener("click",(()=>{let e=document.getElementById("fib").value,t=function(e){let t=[0,1];if(e<2)return t[e];for(let n=2;n<=e;n++)t[n]=t[n-1]+t[n-2];return t[e]}(e);document.getElementById("fib-result").innerHTML=`F<sub>${e}</sub> = ${t}`})),document.getElementById("submit-temp").addEventListener("click",(()=>{const e=document.getElementById("temp-result"),t=document.getElementById("temp").value,n=document.querySelectorAll('input[name="temp-type"]');let o;for(let e of n)if(e.checked){o=e.id;break}var r,i;"celcius"==o?e.innerHTML=`${t}°C = ${i=t,i<-273.15&&console.error(`${i}°C is to cold`),v(1.8*i+32)}°F`:"farenheit"===o?e.innerHTML=`${t}°F = ${r=t,r<-459.67&&console.error(`${r}°F is to cold`),v((r-32)/1.8)}°C`:e.innerText="feil"})),document.getElementById("submit-currency").addEventListener("click",(()=>{const e=document.getElementById("currency-result");let t=document.getElementById("amount").value;""===t&&(t=100),async function(e,t,n,o){fetch(`https://api.exchangerate.host/convert?from=${t}&to=${n}`).then((e=>e.json())).then((r=>{let i=v(e*r.result);o.innerText=`${t} ${e} = ${n} ${i}`}))}(t,document.getElementById("convertFrom").value,document.getElementById("convertTo").value,e)})),async function(e,t){fetch("https://api.exchangerate.host/symbols").then((e=>e.json())).then((n=>{let o="";for(let e in n.symbols){let t=n.symbols[e].code;o+=`<option value="${t}">${n.symbols[e].description} (${t})</option>\n `}o&&(e.innerHTML=o,t.innerHTML=o)}))}(document.getElementById("convertFromSymbols"),document.getElementById("convertToSymbols"));const g=document.getElementById("amiibos");!async function(e){e.innerHTML="Loading...",fetch("https://www.amiiboapi.com/api/amiibo").then((e=>e.json())).then((t=>{y=t.amiibo,h(y,e)}))}(g);let b=document.getElementById("search-amiibos");b.addEventListener("input",$);let E=document.getElementById("amiibo-name");E.addEventListener("input",$);let L=document.getElementById("amiibo-game");L.addEventListener("input",$);let I=document.getElementById("amiibo-series");function $(){let e=b.value,t=E.checked,n=L.checked,o=I.checked;!function(e,t,n){h(y.filter((t=>!!(t.character.toLowerCase().includes(e.toLowerCase())||n.nameOpt&&t.name.toLowerCase().includes(e.toLowerCase())||n.gameSeriesOpt&&t.gameSeries.toLowerCase().includes(e.toLowerCase())||n.amiiboSeriesOpt&&t.amiiboSeries.toLowerCase().includes(e.toLowerCase())))),t)}(e,g,{nameOpt:t,GameSeriesOpt:n,amiiboSeriesOpt:o})}function S(e){let t=document.querySelectorAll("details");for(let n of t)"open"===e&&n.setAttribute("open",!0),"close"===e&&n.removeAttribute("open")}I.addEventListener("input",$),document.getElementById("openAll").addEventListener("click",(()=>{S("open")})),document.getElementById("closeAll").addEventListener("click",(()=>{S("close")}))})()})();