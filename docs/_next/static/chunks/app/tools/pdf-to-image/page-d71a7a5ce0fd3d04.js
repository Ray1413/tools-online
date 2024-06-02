(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[540],{8077:function(e,t,l){Promise.resolve().then(l.bind(l,5230))},5230:function(e,t,l){"use strict";l.d(t,{default:function(){return k}});var r=l(7437),n=l(2265),a=l(1877);let s=e=>{let t=!1;try{if((null==e?void 0:e.length)>0){let l=e[0];"pdf"==l.name.split(".").pop().toLowerCase()&&"application/pdf"==l.type&&(t=!0)}return t}catch(e){}};var i=function(e){let{handleFileListChange:t}=e,l=(0,n.useRef)(null),a=(0,n.useRef)(null),i=(0,n.useRef)(null);return t||(t=function(){}),(0,n.useEffect)(()=>{let e=l.current;e.onchange=l=>{0!=e.files.length&&(s(e.files)?t(e.files):(e.value="",alert("Only support pdf file.")))}},[]),(0,n.useEffect)(()=>{let e=a.current,r=i.current,n=()=>{e.classList.add("border-primary","bg-primary","bg-opacity-30"),Array.from(e.children).forEach(e=>r.appendChild(e))},c=()=>{e.classList.remove("border-primary","bg-primary","bg-opacity-30"),Array.from(r.children).forEach(t=>e.appendChild(t))};return e.ondragenter=e=>{e.preventDefault(),n()},e.ondragleave=e=>{e.preventDefault(),c()},e.ondragover=e=>{e.preventDefault()},e.ondrop=e=>{var r;e.preventDefault(),console.log("handleDrop",e),c(),s(null==e?void 0:null===(r=e.dataTransfer)||void 0===r?void 0:r.files)?(l.current.files=e.dataTransfer.files,t(l.current.files)):(l.current.value="",alert("Only support pdf file."))},()=>{}},[]),(0,r.jsxs)("div",{className:"relative w-full h-60",children:[(0,r.jsx)("div",{ref:a,className:"absolute w-full h-full border-4 border-dashed border-base-200",children:(0,r.jsxs)("div",{className:"flex flex-col w-full h-full p-6 gap-4 justify-center items-center ",children:[(0,r.jsx)("span",{className:"text-lg",children:"Drag and drop a PDF file here"}),(0,r.jsx)("div",{className:"divider text-lg",children:"OR"}),(0,r.jsx)("input",{ref:l,type:"file",className:"file-input file-input-bordered w-full max-w-xs",accept:"application/pdf"})]})}),(0,r.jsx)("div",{ref:i,className:"w-full h-full"})]})},c=l(3110),o=function(e){let{page:t,pageIndexInGroup:l}=e,a=(0,n.useRef)(null),s=(0,n.useRef)(null),i=(0,n.useRef)(!1),[o,d]=(0,n.useState)(!1),u=t.getViewport({scale:1});return u.height<=500||u.width<=500?u=t.getViewport({scale:2}):(u.height<=1e3||u.width<=1e3)&&(u=t.getViewport({scale:1.5})),(0,n.useEffect)(()=>{let e=!0,l=null;return a.current&&(l=new IntersectionObserver((0,c.Ds)((l,r)=>{l.forEach(l=>{if(l.isIntersecting&&e&&s.current&&!i.current){e=!1;let l={canvasContext:s.current.getContext("2d"),viewport:u};t.render(l).promise.then(()=>{d(!0),i.current=!0,t.cleanup()})}})},200),{rootMargin:"500px 0px"})).observe(a.current),()=>{l.disconnect(),d(!1),i.current=!1,t.cleanup()}},[t]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{ref:a,className:"w-full indicator bg-base-200 shadow-xl",style:{aspectRatio:u.width/u.height},children:[(0,r.jsx)("div",{className:"indicator-item indicator-top indicator-start badge badge-xs badge-neutral",children:t.pageNumber}),(0,r.jsx)("canvas",{ref:s,height:null==u?void 0:u.height,width:null==u?void 0:u.width,className:"w-full",style:{display:o?"":"none"}})]})})};let d=e=>{let t="grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4";switch(e){case 1:t="grid-cols-1";break;case 2:t="grid-cols-2";break;case 3:t="grid-cols-3";break;case 4:t="grid-cols-4"}return" ".concat(t," gap-4 md:gap-6 xl:gap-8 p-4 md:p-6 xl:p-8")};var u=function(e){let{column:t,pages:l,groupIndex:a,groupSize:s}=e,i=(0,n.useRef)(null),[u,p]=(0,n.useState)(!0),[f,h]=(0,n.useState)(""),x=(0,n.useRef)(null),g={rootMargin:"500px 0px"};return(0,n.useEffect)(()=>(x.current!=t&&(x.current=t,p(!0)),()=>{}),[t]),(0,n.useEffect)(()=>{let e=null,t=(0,c.Ds)(()=>{e!=window.innerWidth&&(e=window.innerWidth,p(!0))},200);return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]),(0,n.useEffect)(()=>{h(i.current.offsetHeight+"px");let e=null;return i.current&&(e=new IntersectionObserver((0,c.Ds)((e,t)=>{e.forEach(e=>{e.isIntersecting?p(!0):p(!1)})},200),g)).observe(i.current),()=>{e&&e.disconnect()}},[l,a,s,u]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{ref:i,className:"grid"+d(t),style:{minHeight:u?"":f},children:u?l.map((e,t)=>(0,r.jsx)(o,{page:e,pageIndexInGroup:t},t)):null})})},p=function(e){let{content:t}=e,l=(0,n.useRef)(null),[a,s]=(0,n.useState)(null);return(0,n.useEffect)(()=>{let e=l.current;if(e){let t=parseFloat(getComputedStyle(e).lineHeight);isNaN(t)||s(t)}return()=>{}},[]),(0,r.jsxs)("div",{ref:l,style:{position:"relative",display:a?"block":"none",overflow:"hidden",height:a?"".concat(a,"px"):null},children:[(0,r.jsx)("div",{style:{maxHeight:a?"".concat(2*a,"px"):null},children:t}),(0,r.jsx)("div",{title:t,className:"bg-base-100",style:{position:"relative",top:a?"".concat(-2*a,"px"):null,height:a?"".concat(a,"px"):null,overflow:"hidden"},children:(0,r.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, minmax(0, 1fr))"},children:[(0,r.jsx)("span",{style:{display:"inline-block",wordBreak:"break-all",textAlign:"justify"},children:t}),(0,r.jsx)("span",{dir:"rtl",style:{display:"inline-block",overflow:"hidden",textOverflow:"ellipsis"},children:(0,r.jsx)("bdi",{dir:"ltr",style:{whiteSpace:"nowrap"},children:t})})]})})]})},f=function(e){let{pdfFile:t,pdf:l}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"text-lg grid grid-cols-[100px_1fr] gap-1",children:[(0,r.jsx)("div",{children:"File name:"}),(0,r.jsx)("div",{children:(0,r.jsx)(p,{content:null==t?void 0:t.name})}),(0,r.jsx)("div",{children:"File size:"}),(0,r.jsx)("div",{children:(0,c.sS)(null==t?void 0:t.size)}),(0,r.jsx)("div",{children:"Pages:"}),(0,r.jsx)("div",{children:null==l?void 0:l.numPages})]})})},h=l(2655),x=l(793);let g=[{col:1,content:(0,r.jsx)(h.oE3,{className:"w-5 h-5"})},{col:2,content:(0,r.jsx)(x.SSF,{className:"w-5 h-5"})},{col:3,content:(0,r.jsx)(x.FTQ,{className:"w-6 h-6"})},{col:4,content:(0,r.jsx)(x.t_k,{className:"w-6 h-6"})},{col:0,content:(0,r.jsx)("span",{className:"text-lg",children:"Auto"})}];var m=function(e){let{column:t,setColumn:l}=e;return(0,r.jsx)("div",{className:"flex justify-center pt-4",children:(0,r.jsx)("div",{role:"tablist",className:"tabs tabs-boxed",children:g.map(e=>{let{col:n,content:a}=e;return(0,r.jsx)("a",{role:"tab",className:"tab hover:bg-primary hover:bg-opacity-30".concat(n==t?" tab-active":""),onClick:()=>l(n),children:a},n)})})})},v=l(3051),j=l(3781),b=l(9315),w=l.n(b),y=function(e){let{pdfFile:t,pdf:l}=e,[a,s]=(0,n.useState)(0),[i,o]=(0,n.useState)(""),d=(0,n.useRef)(null),[u,p]=(0,n.useState)(!0),[f,h]=(0,n.useState)(!1),[x,g]=(0,n.useState)(null),m=(0,n.useRef)(!1),[b,y]=(0,n.useState)(!1);if((null==d.current||0==a)&&l){let e=(null==l?void 0:l.numPages)||0;d.current=Array(e).fill().map((e,t)=>t+1)}let N=e=>{let t=!0,r=[];try{if(e){let n=(e=e.trim()).split(","),a=null==l?void 0:l.numPages;for(let e=0;e<n.length;e++){let s=n[e].trim();if((0,c.GN)(s)){let e=parseInt(s);if(e>0&&(!l||e<=a))r.push(e);else{t=!1;break}}else{let e=s.split("-");if(2!=e.length){t=!1;break}if(e=e.map(e=>e.trim()).filter(e=>(0,c.GN)(e)&&e>0&&(!l||e<=a)).map(e=>parseInt(e)),2==e.length&&e[0]<e[1])for(let t=e[0];t<=e[1];t++)r.push(t);else{t=!1;break}}}r=r.filter((e,t,l)=>l.indexOf(e)==t).sort((e,t)=>e-t)}}catch(e){console.error(e)}return[t&&r.length>0,r]},k=e=>{let t=e.target.value;if(s(t),l){let e=l.numPages;switch(d.current=[],parseInt(t)){case 0:d.current=Array(e).fill().map((e,t)=>t+1);break;case 1:let[r,n]=N(i);p(r),r&&(d.current=n)}}},S=e=>{o(e);let[t,l]=N(e);p(t),t?d.current=l:d.current=[]},C=async(e,t)=>{if(e&&t){let l=await e.getPage(t),r=l.getViewport({scale:1});r.height<=500||r.width<=500?r=l.getViewport({scale:2}):(r.height<=1e3||r.width<=1e3)&&(r=l.getViewport({scale:1.5}));let n=document.createElement("canvas"),a=n.getContext("2d");n.height=r.height,n.width=r.width;let s={canvasContext:a,viewport:r};return await l.render(s).promise,await (0,c.xe)(n,"image/jpeg",.6)}},R=async()=>{var e,r;let n=t.name.replace(/.pdf$/i,""),a=new(w()),s=a.folder(n);h(!0),y(!1),m.current=!1;let i=null==d?void 0:null===(e=d.current)||void 0===e?void 0:e.length;for(let e=0;e<(null==d?void 0:null===(r=d.current)||void 0===r?void 0:r.length)&&!m.current;e++){g("Processing: ".concat(e+1," / ").concat(i));let t=d.current[e],r=await C(l,t);s.file("".concat(t,".jpeg"),r),r.size}if(!m.current){g("Compressing...");let e=await a.generateAsync({type:"blob"});(0,c.Gj)(e,"".concat(n,".zip"))}h(!1),g(null)};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"",children:(0,r.jsx)("div",{className:"inline-block",children:(0,r.jsxs)("label",{className:"label cursor-pointer justify-start gap-2",children:[(0,r.jsx)("input",{type:"radio",name:"downloadType",className:"radio checked:bg-primary",value:0,checked:0==a,onChange:k}),(0,r.jsx)("span",{className:"label-text text-base",children:"Download all pages"})]})})}),(0,r.jsx)("div",{className:"",children:(0,r.jsx)("div",{className:"inline-block",children:(0,r.jsxs)("label",{className:"label cursor-pointer justify-start gap-2 flex-wrap",children:[(0,r.jsx)("input",{type:"radio",name:"downloadType",className:"radio checked:bg-primary",value:1,checked:1==a,onChange:k}),(0,r.jsx)("span",{className:"label-text text-base",children:"Download certain pages"}),(0,r.jsx)("input",{type:"text",className:"input input-bordered ".concat(u?"":"input-error"," max-w-xs grow"),placeholder:'e.g. "1, 2, 5-10"',value:i,onChange:e=>S(e.target.value),disabled:1!=a})]})})})]}),(0,r.jsxs)("div",{className:"flex gap-3",children:[(0,r.jsx)("div",{className:"".concat(f?"cursor-not-allowed":null),children:(0,r.jsxs)("button",{className:"btn btn-primary text-base-200 ".concat(f?"opacity-50 pointer-events-none":null),onClick:R,children:[(0,r.jsx)(v.Q45,{className:"w-6 h-6"}),"Download"]})}),(0,r.jsx)("div",{className:"".concat(f?null:"hidden"," ").concat(b?"cursor-not-allowed":null),children:(0,r.jsxs)("button",{className:"btn btn-error text-base-200 ".concat(b?"opacity-50 pointer-events-none":null),onClick:()=>{y(!0),m.current=!0,g("Canceling")},children:[(0,r.jsx)(j.fZX,{className:"w-5 h-5"}),"Cancel"]})})]}),f?(0,r.jsx)("div",{className:"animate-pulse",children:x}):null]})})},N=function(e){let{pdfFile:t,pdfData:l,pdfURL:a,pageGroupSize:s=120}=e,[i,c]=(0,n.useState)(null),[o,d]=(0,n.useState)([]),[p,h]=(0,n.useState)(3),x=(0,n.useRef)(!0),g=Math.ceil(o.length/s);return(0,n.useEffect)(()=>{let e=null;return(async()=>{let t=null;if(l?t=pdfjsLib.getDocument({data:l}):a&&(t=pdfjsLib.getDocument(a)),t)try{if(x.current=!1,e=await t.promise,c(e),(null==e?void 0:e.numPages)>0){let t=Array(e.numPages).fill(0).map((t,l)=>e.getPage(l+1)),l=await Promise.all(t);d(l)}}catch(e){console.error(e)}})(),()=>{e&&(e.destroy(),c(null),console.log("Destroy pdf"))}},[l,a]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"max-w-3xl mx-auto mt-6 min-h-60",children:(0,r.jsxs)("div",{className:"p-6 min-h-60 border-2 border-base-200 ".concat(i||!x.current?"flex":"hidden"," flex-col justify-between"),children:[(0,r.jsx)(f,{pdfFile:t,pdf:i}),(0,r.jsx)("div",{className:"divider"}),(0,r.jsx)(y,{pdfFile:t,pdf:i})]})}),(0,r.jsx)("div",{className:"mt-6 -mx-6 -mb-16",style:{backgroundImage:"repeating-linear-gradient(45deg,var(--fallback-b1,oklch(var(--b1))),var(--fallback-b1,oklch(var(--b1))) 13px,var(--fallback-pc,oklch(var(--pc))) 13px,var(--fallback-pc,oklch(var(--pc))) 14px)",backgroundSize:"40px 40px"},children:o.length<=0?null:(0,r.jsxs)("div",{children:[(0,r.jsx)(m,{column:p,setColumn:h}),Array(g).fill().map((e,t)=>(0,r.jsx)(u,{column:p,pages:o.slice(t*s,t*s+s),groupIndex:t,groupSize:s},t))]})})]})},k=function(){let e=(0,n.useRef)(null),t=(0,n.useRef)(!0),[l,s]=(0,n.useState)(null),[c,o]=(0,n.useState)(null),[d,u]=(0,n.useState)(null),p=()=>{if(!(e.current&&e.current.length>0)){alert("Please choose a PDF file.");return}if(!0==t.current){t.current=!1;let l=new FileReader;l.onload=t=>{let l=t.target.result;s(e.current[0]),o(l)},l.readAsArrayBuffer(e.current[0])}};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.default,{src:"/js/pdf.min.mjs",type:"module",onLoad:()=>pdfjsLib.GlobalWorkerOptions.workerSrc="/js/pdf.worker.min.mjs"}),(0,r.jsxs)("div",{className:"mx-auto px-6",children:[(0,r.jsx)("div",{className:"max-w-3xl mx-auto",children:(0,r.jsx)(i,{handleFileListChange:l=>{e.current=l,t.current=!0,p()}})}),(0,r.jsx)("div",{children:(0,r.jsx)(N,{pdfFile:l,pdfData:c,pdfURL:d})})]})]})}},3110:function(e,t,l){"use strict";l.d(t,{Ds:function(){return n},GN:function(){return s},Gj:function(){return c},sS:function(){return a},xe:function(){return i}});var r=void 0;let n=function(e){let t,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200;return function(){for(var n=arguments.length,a=Array(n),s=0;s<n;s++)a[s]=arguments[s];clearTimeout(t),t=setTimeout(()=>{e.apply(r,a)},l)}},a=e=>{if(isNaN(e))return"";{let t=["iB","KiB","MiB","GiB","TiB"],l=0;for(;l<t.length-1&&e>=1024;)l++,e/=1024;return"".concat(e.toFixed(2)," ").concat(t[l])}},s=e=>{var t;return!isNaN(e)&&(0|(t=parseFloat(e)))===t},i=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"image/jpeg",l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5;return new Promise((r,n)=>{try{e.toBlob(e=>{e?r(e):n("Cannot convert image")},t,l)}catch(e){n(e)}})},c=(e,t)=>{if(e&&t){let l=document.createElement("a"),r=window.URL.createObjectURL(e);l.href=r,l.download=t,l.click(),window.URL.revokeObjectURL(r)}}}},function(e){e.O(0,[779,27,950,522,131,971,23,744],function(){return e(e.s=8077)}),_N_E=e.O()}]);