import{k as A,c as z,l as I,d as T}from"./QIcon.95a8d628.js";import{c as o,h as P,g as D,R as K,U as B,V as M,P as N,Y as V}from"./index.9c757a27.js";const Q={size:{type:[Number,String],default:"1em"},color:String};function U(e){return{cSize:o(()=>e.size in A?`${A[e.size]}px`:e.size),classes:o(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var Z=z({name:"QSpinner",props:{...Q,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:a}=U(e);return()=>P("svg",{class:a.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[P("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function ee(e){if(Object(e.$parent)===e.$parent)return e.$parent;let{parent:t}=e.$;for(;Object(t)===t;){if(Object(t.proxy)===t.proxy)return t.proxy;t=t.parent}}function H(e){return e.appContext.config.globalProperties.$router!==void 0}function te(e){return e.isUnmounted===!0||e.isDeactivated===!0}function O(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function L(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Y(e,t){for(const a in t){const r=t[a],n=e[a];if(typeof r=="string"){if(r!==n)return!1}else if(Array.isArray(n)===!1||n.length!==r.length||r.some((c,u)=>c!==n[u]))return!1}return!0}function w(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((a,r)=>a===t[r]):e.length===1&&e[0]===t}function X(e,t){return Array.isArray(e)===!0?w(e,t):Array.isArray(t)===!0?w(t,e):e===t}function F(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const a in e)if(X(e[a],t[a])===!1)return!1;return!0}const re={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function ae({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const a=D(),{props:r,proxy:n,emit:c}=a,u=H(a),i=o(()=>r.disable!==!0&&r.href!==void 0),q=t===!0?o(()=>u===!0&&r.disable!==!0&&i.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==""):o(()=>u===!0&&i.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==""),f=o(()=>q.value===!0?S(r.to):null),p=o(()=>f.value!==null),h=o(()=>i.value===!0||p.value===!0),k=o(()=>r.type==="a"||h.value===!0?"a":r.tag||e||"div"),d=o(()=>i.value===!0?{href:r.href,target:r.target}:p.value===!0?{href:f.value.href,target:r.target}:{}),$=o(()=>{if(p.value===!1)return-1;const{matched:s}=f.value,{length:l}=s,v=s[l-1];if(v===void 0)return-1;const m=n.$route.matched;if(m.length===0)return-1;const g=m.findIndex(L.bind(null,v));if(g>-1)return g;const _=O(s[l-2]);return l>1&&O(v)===_&&m[m.length-1].path!==_?m.findIndex(L.bind(null,s[l-2])):g}),y=o(()=>p.value===!0&&$.value!==-1&&Y(n.$route.params,f.value.params)),C=o(()=>y.value===!0&&$.value===n.$route.matched.length-1&&F(n.$route.params,f.value.params)),R=o(()=>p.value===!0?C.value===!0?` ${r.exactActiveClass} ${r.activeClass}`:r.exact===!0?"":y.value===!0?` ${r.activeClass}`:"":"");function S(s){try{return n.$router.resolve(s)}catch{}return null}function x(s,{returnRouterError:l,to:v=r.to,replace:m=r.replace}={}){if(r.disable===!0)return s.preventDefault(),Promise.resolve(!1);if(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey||s.button!==void 0&&s.button!==0||r.target==="_blank")return Promise.resolve(!1);s.preventDefault();const g=n.$router[m===!0?"replace":"push"](v);return l===!0?g:g.then(()=>{}).catch(()=>{})}function b(s){if(p.value===!0){const l=v=>x(s,v);c("click",s,l),s.defaultPrevented!==!0&&l()}else c("click",s)}return{hasRouterLink:p,hasHrefLink:i,hasLink:h,linkTag:k,resolvedLink:f,linkIsActive:y,linkIsExactActive:C,linkClass:R,linkAttrs:d,getLink:S,navigateToRouterLink:x,navigateOnClick:b}}function G(e,t=250){let a=!1,r;return function(){return a===!1&&(a=!0,setTimeout(()=>{a=!1},t),r=e.apply(this,arguments)),r}}function j(e,t,a,r){a.modifiers.stop===!0&&N(e);const n=a.modifiers.color;let c=a.modifiers.center;c=c===!0||r===!0;const u=document.createElement("span"),i=document.createElement("span"),q=V(e),{left:f,top:p,width:h,height:k}=t.getBoundingClientRect(),d=Math.sqrt(h*h+k*k),$=d/2,y=`${(h-d)/2}px`,C=c?y:`${q.left-f-$}px`,R=`${(k-d)/2}px`,S=c?R:`${q.top-p-$}px`;i.className="q-ripple__inner",T(i,{height:`${d}px`,width:`${d}px`,transform:`translate3d(${C},${S},0) scale3d(.2,.2,1)`,opacity:0}),u.className=`q-ripple${n?" text-"+n:""}`,u.setAttribute("dir","ltr"),u.appendChild(i),t.appendChild(u);const x=()=>{u.remove(),clearTimeout(b)};a.abort.push(x);let b=setTimeout(()=>{i.classList.add("q-ripple__inner--enter"),i.style.transform=`translate3d(${y},${R},0) scale3d(1,1,1)`,i.style.opacity=.2,b=setTimeout(()=>{i.classList.remove("q-ripple__inner--enter"),i.classList.add("q-ripple__inner--leave"),i.style.opacity=0,b=setTimeout(()=>{u.remove(),a.abort.splice(a.abort.indexOf(x),1)},275)},250)},50)}function E(e,{modifiers:t,value:a,arg:r}){const n=Object.assign({},e.cfg.ripple,t,a);e.modifiers={early:n.early===!0,stop:n.stop===!0,center:n.center===!0,color:n.color||r,keyCodes:[].concat(n.keyCodes||13)}}var ne=I({name:"ripple",beforeMount(e,t){const a=t.instance.$.appContext.config.globalProperties.$q.config||{};if(a.ripple===!1)return;const r={cfg:a,enabled:t.value!==!1,modifiers:{},abort:[],start(n){r.enabled===!0&&n.qSkipRipple!==!0&&n.type===(r.modifiers.early===!0?"pointerdown":"click")&&j(n,e,r,n.qKeyEvent===!0)},keystart:G(n=>{r.enabled===!0&&n.qSkipRipple!==!0&&K(n,r.modifiers.keyCodes)===!0&&n.type===`key${r.modifiers.early===!0?"down":"up"}`&&j(n,e,r,!0)},300)};E(r,t),e.__qripple=r,B(r,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const a=e.__qripple;a!==void 0&&(a.enabled=t.value!==!1,a.enabled===!0&&Object(t.value)===t.value&&E(a,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(a=>{a()}),M(t,"main"),delete e._qripple)}});export{Z as Q,ne as R,ae as a,te as b,Q as c,U as d,ee as g,re as u,H as v};