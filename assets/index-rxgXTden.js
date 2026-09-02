const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AdminPage-C2v2XHCI.js","assets/react-vendor-D6aYhTOB.js","assets/firebase-vendor-CNo--3BI.js","assets/date-fns-vendor-CC18eP49.js"])))=>i.map(i=>d[i]);
import{r as b,a as ur,H as hr,R as mr,b as it,c as fr}from"./react-vendor-D6aYhTOB.js";import{b as st,a as ke,c as Ie,d as pr,f as gt,p as gr,i as xr,s as jt,e as br,g as xt,h as vr,j as wr,k as yr,l as mn,m as V,n as Q,o as Pt,q as _r,r as pe,t as qe,u as ee}from"./date-fns-vendor-CC18eP49.js";import{L as kr,g as fn,i as Ir,a as Er,_ as At,C as Ct,r as Rt,b as Sr,S as Ae,E as bt,c as K,d as L,e as Nr,f as pn,h as R,F as vt,j as Tr,q as Ce,k as gn,l as jr,m as Pr,n as Ar,o as Cr,p as Rr,s as Se,t as Ne,u as Mr,v as Or,w as Dr,x as lt,y as Te,z as xn,A as ce,B as Mt,D as dt,G as bn,H as vn}from"./firebase-vendor-CNo--3BI.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();var wn={exports:{}},Xe={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lr=b,Ur=Symbol.for("react.element"),Fr=Symbol.for("react.fragment"),Wr=Object.prototype.hasOwnProperty,zr=Lr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Hr={key:!0,ref:!0,__self:!0,__source:!0};function yn(n,e,t){var r,i={},a=null,o=null;t!==void 0&&(a=""+t),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Wr.call(e,r)&&!Hr.hasOwnProperty(r)&&(i[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Ur,type:n,key:a,ref:o,props:i,_owner:zr.current}}Xe.Fragment=Fr;Xe.jsx=yn;Xe.jsxs=yn;wn.exports=Xe;var s=wn.exports,ut={},Ot=ur;ut.createRoot=Ot.createRoot,ut.hydrateRoot=Ot.hydrateRoot;const Br="modulepreload",Vr=function(n){return"/egmondapp/"+n},Dt={},Kr=function(e,t,r){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(t.map(l=>{if(l=Vr(l),l in Dt)return;Dt[l]=!0;const d=l.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const h=document.createElement("link");if(h.rel=d?"stylesheet":Br,d||(h.as="script"),h.crossOrigin="",h.href=l,c&&h.setAttribute("nonce",c),document.head.appendChild(h),d)return new Promise((w,v)=>{h.addEventListener("load",w),h.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${l}`)))})}))}function a(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return i.then(o=>{for(const c of o||[])c.status==="rejected"&&a(c.reason);return e().catch(a)})};function _n({className:n="w-4 h-4"}){return s.jsx("svg",{className:`${n} shrink-0`,fill:"none",stroke:"currentColor",strokeWidth:"1.8",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.25 11.25l.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"})})}const at=[{src:"./images/hero.jpg",alt:"Blick auf den Strand von Egmond aan Zee",position:"center 75%"},{src:"./images/exterior-1.jpg",alt:"Balkon mit Meerblick",position:"center 50%"},{src:"./images/exterior-8.jpg",alt:"Umgebung Egmond aan Zee",position:"center 50%"},{src:"./images/interior-3.jpg",alt:"Schlafzimmer",position:"center 75%"}];function qr({onInfoClick:n}){const[e,t]=b.useState(0);return b.useEffect(()=>{const r=setInterval(()=>{t(i=>(i+1)%at.length)},5e3);return()=>clearInterval(r)},[]),s.jsxs("header",{className:"relative w-full h-[42vh] min-h-[220px] overflow-hidden",children:[at.map((r,i)=>s.jsx("img",{src:r.src,alt:r.alt,loading:i===0?"eager":"lazy",className:"absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",style:{objectPosition:r.position,opacity:i===e?1:0}},r.src)),s.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-anthracite/75 via-anthracite/20 to-transparent"}),s.jsxs("div",{className:"absolute inset-x-0 bottom-0 z-10 px-6 pb-8 md:px-12",children:[s.jsx("h1",{className:"font-serif text-3xl md:text-5xl text-white drop-shadow-lg",children:"Egmond aan Zee"}),s.jsx("p",{className:"text-white/75 text-sm md:text-base mt-2 drop-shadow",children:"Ferienwohnung direkt am Meer"})]}),s.jsxs("div",{className:"absolute bottom-4 right-6 z-10 flex flex-col items-end gap-2",children:[n&&s.jsxs("button",{onClick:n,"aria-label":"Informationen & Anreise",className:"w-full flex items-center justify-center gap-1.5 px-2.5 py-1 rounded-full bg-black/25 hover:bg-black/40 backdrop-blur-sm text-white/90 text-xs transition-colors",children:[s.jsx(_n,{className:"w-3.5 h-3.5"}),"Info"]}),s.jsx("div",{className:"flex gap-0.5",children:at.map((r,i)=>s.jsx("button",{onClick:()=>t(i),"aria-label":`Bild ${i+1}`,className:"p-1.5 flex items-center justify-center",children:s.jsx("span",{className:`block h-2 rounded-full transition-all duration-300 ${i===e?"w-5 bg-white":"w-2 bg-white/40 hover:bg-white/70"}`})},i))})]})]})}const Lt={lessThanXSeconds:{standalone:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"1 Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"1 Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"eine halbe Minute",withPreposition:"einer halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"1 Minute",other:"{{count}} Minuten"},withPreposition:{one:"1 Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"1 Stunde",other:"{{count}} Stunden"},withPreposition:{one:"1 Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"1 Tag",other:"{{count}} Tage"},withPreposition:{one:"1 Tag",other:"{{count}} Tagen"}},aboutXWeeks:{standalone:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"},withPreposition:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"}},xWeeks:{standalone:{one:"1 Woche",other:"{{count}} Wochen"},withPreposition:{one:"1 Woche",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"etwa 1 Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa 1 Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"1 Monat",other:"{{count}} Monate"},withPreposition:{one:"1 Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"1 Jahr",other:"{{count}} Jahre"},withPreposition:{one:"1 Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast 1 Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast 1 Jahr",other:"fast {{count}} Jahren"}}},$r=(n,e,t)=>{let r;const i=t!=null&&t.addSuffix?Lt[n].withPreposition:Lt[n].standalone;return typeof i=="string"?r=i:e===1?r=i.one:r=i.other.replace("{{count}}",String(e)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+r:"vor "+r:r},Gr={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},Jr={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Yr={full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Zr={date:st({formats:Gr,defaultWidth:"full"}),time:st({formats:Jr,defaultWidth:"full"}),dateTime:st({formats:Yr,defaultWidth:"full"})},Xr={lastWeek:"'letzten' eeee 'um' p",yesterday:"'gestern um' p",today:"'heute um' p",tomorrow:"'morgen um' p",nextWeek:"eeee 'um' p",other:"P"},Qr=(n,e,t,r)=>Xr[n],ei={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},ti={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},ht={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},ni={narrow:ht.narrow,abbreviated:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:ht.wide},ri={narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},ii={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},si={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},ai=n=>Number(n)+".",oi={ordinalNumber:ai,era:ke({values:ei,defaultWidth:"wide"}),quarter:ke({values:ti,defaultWidth:"wide",argumentCallback:n=>n-1}),month:ke({values:ht,formattingValues:ni,defaultWidth:"wide"}),day:ke({values:ri,defaultWidth:"wide"}),dayPeriod:ke({values:ii,defaultWidth:"wide",formattingValues:si,defaultFormattingWidth:"wide"})},ci=/^(\d+)(\.)?/i,li=/\d+/i,di={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},ui={any:[/^v/i,/^n/i]},hi={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},mi={any:[/1/i,/2/i,/3/i,/4/i]},fi={narrow:/^[jfmasond]/i,abbreviated:/^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,wide:/^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},pi={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^j[aä]/i,/^f/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},gi={narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},xi={any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},bi={narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},vi={any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},wi={ordinalNumber:pr({matchPattern:ci,parsePattern:li,valueCallback:n=>parseInt(n)}),era:Ie({matchPatterns:di,defaultMatchWidth:"wide",parsePatterns:ui,defaultParseWidth:"any"}),quarter:Ie({matchPatterns:hi,defaultMatchWidth:"wide",parsePatterns:mi,defaultParseWidth:"any",valueCallback:n=>n+1}),month:Ie({matchPatterns:fi,defaultMatchWidth:"wide",parsePatterns:pi,defaultParseWidth:"any"}),day:Ie({matchPatterns:gi,defaultMatchWidth:"wide",parsePatterns:xi,defaultParseWidth:"any"}),dayPeriod:Ie({matchPatterns:bi,defaultMatchWidth:"wide",parsePatterns:vi,defaultParseWidth:"any"})},kn={code:"de",formatDistance:$r,formatLong:Zr,formatRelative:Qr,localize:oi,match:wi,options:{weekStartsOn:1,firstWeekContainsDate:4}},In="dd.MM.yyyy";function se(n){return gr(n,In,new Date)}function Ut(n){return gt(n,In)}function oe(n){return gt(n,"d. MMMM yyyy",{locale:kn})}function co(n){return gt(n,"d. MMM",{locale:kn})}function En(n,e,t){const r=typeof e=="string"?se(e):e,i=typeof t=="string"?se(t):t;return br(n,{start:r,end:i})}function Ft(n){return xr(jt(n),jt(new Date))}const yi=["Mo","Di","Mi","Do","Fr","Sa","So"],_i=["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],Wt="https://3k-digital.github.io/egmondapp/",ki=()=>s.jsx("svg",{className:"w-3.5 h-3.5 shrink-0",fill:"none",stroke:"currentColor",strokeWidth:"1.8",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25"})}),Ii=()=>s.jsx("svg",{className:"w-3.5 h-3.5 shrink-0",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12.75l6 6 9-13.5"})});function Sn(){const[n,e]=b.useState(!1);async function t(){if(navigator.share)try{await navigator.share({title:"Ferienwohnung Egmond aan Zee",text:"Ferienwohnung direkt am Meer — Egmond aan Zee, Niederlande",url:Wt})}catch{}else try{await navigator.clipboard.writeText(Wt),e(!0),setTimeout(()=>e(!1),2e3)}catch{}}return s.jsxs("button",{onClick:t,className:`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full border transition-colors
        ${n?"border-gold/40 bg-offwhite text-gold":"border-border bg-offwhite hover:bg-warm hover:border-anthracite/20 text-anthracite/60 hover:text-anthracite"}`,"aria-label":"Seite teilen",children:[n?s.jsx(Ii,{}):s.jsx(ki,{}),n?"Link kopiert!":"Teilen"]})}const zt=()=>s.jsx("svg",{className:"w-4 h-4 shrink-0",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"})}),Ht=()=>{const n=[[0,0,2,0,0,1,1,0,0,0],[0,1,1,1,0,0,0,2,0,0],[0,0,0,1,1,0,0,0,0,2],[0,0,2,0,1,1,1,0,0,0]],e={0:"#DED6CA",1:"#A70605",2:"#C4A94D"},t={0:.25,1:.55,2:.6};return s.jsx("svg",{width:"36",height:"30",viewBox:"0 0 36 30",fill:"none",children:n.map((r,i)=>{const o=i%2*19,c=Math.floor(i/2)*15;return s.jsxs("g",{children:[s.jsx("rect",{x:o,y:c,width:"17",height:"2.5",rx:"0.5",fill:"#131313",opacity:"0.12"}),r.map((l,d)=>s.jsx("rect",{x:o+d%5*3.4,y:c+4+Math.floor(d/5)*4,width:"2.5",height:"2.5",rx:"0.4",fill:e[l],opacity:t[l]},d))]},i)})})};function Ei({arrival:n,departure:e,onOpenDatePicker:t,onOpenCalendar:r}){const i=n&&e?xt(e,n):null,a=n&&e;return s.jsxs("section",{className:"px-6 pt-8 pb-3 md:px-12 lg:px-20 max-w-7xl mx-auto",children:[s.jsxs("div",{className:"flex items-center justify-between mb-3",children:[s.jsx("h2",{className:"font-serif text-xl text-anthracite/70",children:"Verfügbarkeit prüfen"}),s.jsx(Sn,{})]}),s.jsx("div",{className:"bg-offwhite border border-border rounded-xl overflow-hidden shadow-sm",children:s.jsxs("div",{className:"flex flex-col sm:flex-row",children:[s.jsxs("button",{onClick:t,className:"flex-1 px-5 py-3.5 text-left hover:bg-warm transition-colors flex items-center gap-3",children:[s.jsx("span",{className:n?"text-primary":"text-primary/40",children:s.jsx(zt,{})}),s.jsxs("div",{children:[s.jsx("div",{className:"text-[11px] text-anthracite/45 mb-0.5 uppercase tracking-wide",children:"Anreise"}),s.jsx("div",{className:`text-sm font-medium ${n?"text-anthracite":"text-primary/50 italic"}`,children:n?oe(n):"Datum wählen"})]})]}),s.jsx("div",{className:"hidden sm:block w-px bg-border my-3"}),s.jsx("div",{className:"sm:hidden h-px bg-border mx-5"}),s.jsxs("button",{onClick:t,className:"flex-1 px-5 py-3.5 text-left hover:bg-warm transition-colors flex items-center gap-3",children:[s.jsx("span",{className:e?"text-primary":"text-primary/40",children:s.jsx(zt,{})}),s.jsxs("div",{children:[s.jsx("div",{className:"text-[11px] text-anthracite/45 mb-0.5 uppercase tracking-wide",children:"Abreise"}),s.jsx("div",{className:`text-sm font-medium ${e?"text-anthracite":"text-primary/50 italic"}`,children:e?oe(e):"Datum wählen"})]})]}),a&&s.jsx("div",{className:"p-3 sm:pl-0 sm:pr-3 sm:py-3 flex items-center",children:s.jsxs("button",{onClick:t,className:"w-full sm:w-auto px-4 py-2 text-sm text-anthracite/60 hover:text-anthracite border border-border bg-offwhite hover:bg-warm rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5",children:[s.jsx("span",{className:"text-anthracite/40",children:"🌙"}),s.jsx("span",{className:"font-medium text-anthracite",children:i}),s.jsx("span",{children:"Nächte"})]})}),s.jsx("div",{className:"hidden sm:block w-px bg-border my-3"}),s.jsxs("button",{onClick:r,className:"hidden sm:flex flex-col items-center justify-center gap-1.5 px-5 py-3 hover:bg-warm transition-colors group",children:[s.jsx("span",{className:"opacity-60 group-hover:opacity-90 transition-opacity",children:s.jsx(Ht,{})}),s.jsx("span",{className:"text-[11px] text-anthracite/45 group-hover:text-anthracite/70 transition-colors whitespace-nowrap",children:"Jahresübersicht"})]}),s.jsx("div",{className:"sm:hidden h-px bg-border mx-5"}),s.jsxs("button",{onClick:r,className:"sm:hidden flex items-center gap-3 px-5 py-3 hover:bg-warm transition-colors group","aria-label":"Jahresübersicht öffnen",children:[s.jsx("span",{className:"opacity-60 group-hover:opacity-90 transition-opacity",children:s.jsx(Ht,{})}),s.jsx("span",{className:"text-sm text-anthracite/50 group-hover:text-anthracite/75 transition-colors",children:"Jahresübersicht"})]})]})})]})}const Si={2025:[{date:"01.01.2025",name:"Neujahr"},{date:"18.04.2025",name:"Karfreitag"},{date:"21.04.2025",name:"Ostermontag"},{date:"01.05.2025",name:"Tag der Arbeit"},{date:"29.05.2025",name:"Christi Himmelfahrt"},{date:"09.06.2025",name:"Pfingstmontag"},{date:"19.06.2025",name:"Fronleichnam"},{date:"03.10.2025",name:"Tag der Deutschen Einheit"},{date:"01.11.2025",name:"Allerheiligen"},{date:"25.12.2025",name:"1. Weihnachtsfeiertag"},{date:"26.12.2025",name:"2. Weihnachtsfeiertag"}],2026:[{date:"01.01.2026",name:"Neujahr"},{date:"03.04.2026",name:"Karfreitag"},{date:"06.04.2026",name:"Ostermontag"},{date:"01.05.2026",name:"Tag der Arbeit"},{date:"14.05.2026",name:"Christi Himmelfahrt"},{date:"25.05.2026",name:"Pfingstmontag"},{date:"04.06.2026",name:"Fronleichnam"},{date:"03.10.2026",name:"Tag der Deutschen Einheit"},{date:"01.11.2026",name:"Allerheiligen"},{date:"25.12.2026",name:"1. Weihnachtsfeiertag"},{date:"26.12.2026",name:"2. Weihnachtsfeiertag"}],2027:[{date:"01.01.2027",name:"Neujahr"},{date:"26.03.2027",name:"Karfreitag"},{date:"29.03.2027",name:"Ostermontag"},{date:"01.05.2027",name:"Tag der Arbeit"},{date:"06.05.2027",name:"Christi Himmelfahrt"},{date:"17.05.2027",name:"Pfingstmontag"},{date:"27.05.2027",name:"Fronleichnam"},{date:"03.10.2027",name:"Tag der Deutschen Einheit"},{date:"01.11.2027",name:"Allerheiligen"},{date:"25.12.2027",name:"1. Weihnachtsfeiertag"},{date:"26.12.2027",name:"2. Weihnachtsfeiertag"}],2028:[{date:"01.01.2028",name:"Neujahr"},{date:"14.04.2028",name:"Karfreitag"},{date:"17.04.2028",name:"Ostermontag"},{date:"01.05.2028",name:"Tag der Arbeit"},{date:"25.05.2028",name:"Christi Himmelfahrt"},{date:"05.06.2028",name:"Pfingstmontag"},{date:"15.06.2028",name:"Fronleichnam"},{date:"03.10.2028",name:"Tag der Deutschen Einheit"},{date:"01.11.2028",name:"Allerheiligen"},{date:"25.12.2028",name:"1. Weihnachtsfeiertag"},{date:"26.12.2028",name:"2. Weihnachtsfeiertag"}]},Ni={2025:[{start:"23.12.2024",end:"06.01.2025",name:"Weihnachtsferien"},{start:"14.04.2025",end:"26.04.2025",name:"Osterferien"},{start:"10.06.2025",end:"10.06.2025",name:"Pfingstferien"},{start:"14.07.2025",end:"26.08.2025",name:"Sommerferien"},{start:"13.10.2025",end:"25.10.2025",name:"Herbstferien"},{start:"22.12.2025",end:"06.01.2026",name:"Weihnachtsferien"}],2026:[{start:"22.12.2025",end:"06.01.2026",name:"Weihnachtsferien"},{start:"30.03.2026",end:"11.04.2026",name:"Osterferien"},{start:"26.05.2026",end:"26.05.2026",name:"Pfingstferien"},{start:"20.07.2026",end:"01.09.2026",name:"Sommerferien"},{start:"17.10.2026",end:"31.10.2026",name:"Herbstferien"},{start:"23.12.2026",end:"06.01.2027",name:"Weihnachtsferien"}],2027:[{start:"01.01.2027",end:"06.01.2027",name:"Weihnachtsferien"},{start:"22.03.2027",end:"03.04.2027",name:"Osterferien"},{start:"18.05.2027",end:"18.05.2027",name:"Pfingstferien"},{start:"19.07.2027",end:"31.08.2027",name:"Sommerferien"},{start:"23.10.2027",end:"06.11.2027",name:"Herbstferien"},{start:"24.12.2027",end:"08.01.2028",name:"Weihnachtsferien"}],2028:[{start:"10.04.2028",end:"22.04.2028",name:"Osterferien"},{start:"06.06.2028",end:"06.06.2028",name:"Pfingstferien"},{start:"10.07.2028",end:"22.08.2028",name:"Sommerferien"},{start:"23.10.2028",end:"04.11.2028",name:"Herbstferien"},{start:"21.12.2028",end:"05.01.2029",name:"Weihnachtsferien"}]},Ti={2025:[{date:"02.05.2025",name:"Brückentag (Tag der Arbeit)"},{date:"30.05.2025",name:"Brückentag (Christi Himmelfahrt)"},{date:"20.06.2025",name:"Brückentag (Fronleichnam)"}],2026:[{date:"02.01.2026",name:"Brückentag (Neujahr)"},{date:"15.05.2026",name:"Brückentag (Christi Himmelfahrt)"},{date:"05.06.2026",name:"Brückentag (Fronleichnam)"}],2027:[{date:"07.05.2027",name:"Brückentag (Christi Himmelfahrt)"},{date:"28.05.2027",name:"Brückentag (Fronleichnam)"}],2028:[{date:"26.05.2028",name:"Brückentag (Christi Himmelfahrt)"},{date:"16.06.2028",name:"Brückentag (Fronleichnam)"}]};function ji(n,e){const t=vr(new Date(n,e)),r=wr(new Date(n,e)),i=yr({start:t,end:r}),a=[];let o=new Array(7).fill(null);for(const c of i){const l=(mn(c)+6)%7;o[l]=c,l===6&&(a.push(o),o=new Array(7).fill(null))}return o.some(c=>c!==null)&&a.push(o),a}function Bt(n){const e=V(n),t=Si[e]||[];for(const a of t)if(Q(n,se(a.date)))return{isSpecial:!0,name:a.name};const r=Ti[e]||[];for(const a of r)if(Q(n,se(a.date)))return{isSpecial:!0,name:a.name};const i=Ni[e]||[];for(const a of i)if(En(n,a.start,a.end))return{isSpecial:!0,name:a.name};return{isSpecial:!1,name:null}}function ze(n,e){for(const t of e)if(En(n,t.startDate,t.endDate))return t;return null}function Nn(n,e){return ze(n,e)!==null}function Pi(n,e,t){for(let i=new Date(n.getTime()+864e5);i<e;i=new Date(i.getTime()+864e5))if(Nn(i,t))return!0;return!1}function Tn(n,e,t,r){return!n||n&&e?{newArrival:t,newDeparture:null,conflict:!1}:t>n?Pi(n,t,r)?{newArrival:t,newDeparture:null,conflict:!0}:{newArrival:n,newDeparture:t,conflict:!1}:{newArrival:t,newDeparture:null,conflict:!1}}function le({year:n,month:e,occupancy:t=[],selectedRange:r={start:null,end:null},onDayClick:i,onOccupiedClick:a,compact:o=!1,showGuestName:c=!1,occupiedLabel:l=null,showHeading:d=!0}){const f=ji(n,e);function h(m){const g=t.some(N=>Q(m,se(N.startDate))),p=t.some(N=>Q(m,se(N.endDate))),S=Nn(m,t),I=ze(m,t);return{occupied:S,entry:I,isArrival:g&&!p,isDeparture:p&&!g,isSplit:g&&p}}function w(m){const g=mn(m);return g===0||g===6}function v(m){if(!m)return"";const g=["cal-day"],p=Ft(m),S=_r(m),I=Bt(m),{start:N,end:P}=r,{occupied:T,isArrival:M,isDeparture:A,isSplit:U}=h(m),De=N&&Q(m,N),rt=P&&Q(m,P),B=N&&P&&m>N&&m<P,he=De||rt||B;return p&&g.push("cal-day--past"),S&&g.push("cal-day--today"),w(m)&&!T&&!he&&g.push("cal-day--weekend"),De?A||U?g.push("cal-day--departure-occ-arrival-user"):g.push(I.isSpecial?"cal-day--arrival-special":"cal-day--arrival"):rt?M||U?g.push("cal-day--arrival-occ-departure-user"):g.push(I.isSpecial?"cal-day--departure-special":"cal-day--departure"):B?g.push("cal-day--selected"):T?U?g.push(I.isSpecial?"cal-day--occ-split-special":"cal-day--occ-split"):M?g.push(I.isSpecial?"cal-day--occ-arrival-special":"cal-day--occ-arrival"):A?g.push(I.isSpecial?"cal-day--occ-departure-special":"cal-day--occ-departure"):g.push("cal-day--occupied"):p||g.push("cal-day--free"),I.isSpecial&&!he&&!T&&g.push("cal-day--special"),I.isSpecial&&!he&&g.push("cal-day--special-indicator"),!p&&T?(M||A||U)&&i?g.push("cursor-pointer hover:opacity-80"):a?g.push("cursor-pointer hover:opacity-70"):g.push("cal-day--disabled"):!p&&!T&&i?g.push("cursor-pointer hover:bg-blue/10"):p&&g.push("cal-day--disabled"),g.join(" ")}function _(m){if(!m)return"";const g=Bt(m);return g.isSpecial?g.name:""}function k(m){if(!m||Ft(m))return;const{occupied:g,isArrival:p,isDeparture:S,isSplit:I}=h(m);g?(p||S||I)&&i?i(m):a&&a(m):i&&i(m)}function y(){if(!c&&!l)return new Set;const m=new Set;return f.forEach(g=>{let p=null,S=null,I=null;function N(){var P,T,M;if(p!==null&&S!==null){const A=Math.floor((p+S)/2);m.add(`${(P=g[A])==null?void 0:P.getFullYear()}-${(T=g[A])==null?void 0:T.getMonth()}-${(M=g[A])==null?void 0:M.getDate()}`)}p=null,S=null,I=null}g.forEach((P,T)=>{if(!P){N();return}const{occupied:M,isArrival:A,isDeparture:U,isSplit:De}=h(P);if(M&&!A&&!U&&!De){const B=ze(P,t),he=(B==null?void 0:B.id)??(B==null?void 0:B.note)??"occ";I===he?S=T:(N(),p=T,S=T,I=he)}else N()}),N()}),m}function u(m){var S,I,N,P,T;const{isSplit:g}=h(m);if(g){const M=(I=(S=t.find(U=>Q(m,se(U.endDate))))==null?void 0:S.note)==null?void 0:I.split(" ")[0],A=(P=(N=t.find(U=>Q(m,se(U.startDate))))==null?void 0:N.note)==null?void 0:P.split(" ")[0];return M&&A?`${M}/${A}`:M||A||null}const p=ze(m,t);return((T=p==null?void 0:p.note)==null?void 0:T.split(" ")[0])??null}const E=y(),j=o?"text-xs":"text-sm",H=o?"text-sm":"text-base";return s.jsxs("div",{children:[d&&s.jsxs("h3",{className:`font-serif ${H} mb-2 text-anthracite`,children:[_i[e]," ",n]}),s.jsx("div",{className:"grid grid-cols-7 gap-px mb-1",children:yi.map(m=>s.jsx("div",{className:`text-center ${o?"text-[10px]":"text-xs"} text-anthracite/40 font-medium`,children:m},m))}),s.jsx("div",{className:"grid grid-cols-7 gap-x-0 gap-y-px",children:f.flat().map((m,g)=>{const p=m?`${m.getFullYear()}-${m.getMonth()}-${m.getDate()}`:null,I=p&&E.has(p)?l??u(m):null;return s.jsx("div",{className:m?v(m):"cal-day",title:m?_(m):"",onClick:()=>k(m),children:m?I?s.jsxs("div",{className:"flex flex-col items-center leading-tight",children:[s.jsx("span",{className:j,children:Pt(m)}),s.jsx("span",{className:"text-[7px] leading-none opacity-80 truncate max-w-full px-0.5",children:I})]}):s.jsx("span",{className:j,children:Pt(m)}):null},p??`e${g}`)})})]})}function jn({showSelection:n=!0,className:e=""}){return s.jsxs("div",{className:`flex flex-wrap gap-x-4 gap-y-1 text-xs text-anthracite/50 ${e}`,children:[s.jsxs("span",{className:"flex items-center gap-1.5",children:[s.jsx("span",{className:"w-3 h-3 rounded-sm bg-primary/15 border border-primary/20"}),"Belegt"]}),n&&s.jsxs("span",{className:"flex items-center gap-1.5",children:[s.jsx("span",{className:"w-3 h-3 rounded-sm bg-blue/15 border border-blue/20"}),"Auswahl"]}),s.jsxs("span",{className:"flex items-center gap-1.5",children:[s.jsx("span",{className:"w-3 h-3 rounded-sm bg-gold/25",style:{borderBottom:"2px solid rgba(196,169,77,0.7)"}}),"Ferien | Feier- und Brückentage (NRW)"]})]})}function Ai({occupancy:n,isOpen:e,onClose:t,onSelect:r}){const i=new Date().getFullYear(),[a,o]=b.useState(i),[c,l]=b.useState(null),[d,f]=b.useState(null),[h,w]=b.useState(null),[v,_]=b.useState(!1),k=Array.from({length:12},(p,S)=>S);b.useEffect(()=>{if(!e)return;document.body.style.overflow="hidden";function p(S){S.key==="Escape"&&y()}return window.addEventListener("keydown",p),()=>{document.body.style.overflow="",window.removeEventListener("keydown",p)}},[e]);function y(){t(),l(null),f(null),w(null)}const u=b.useCallback(p=>{const{newArrival:S,newDeparture:I,conflict:N}=Tn(d,h,p,n);f(S),w(I),_(N)},[d,h,n]);function E(){var p;d&&h&&(r({arrival:d,departure:h}),t(),l(null),f(null),w(null),(p=document.getElementById("anfrage"))==null||p.scrollIntoView({behavior:"smooth"}))}function j(){f(null),w(null)}const H=b.useMemo(()=>({start:d,end:h}),[d,h]),m=d||h,g=c?pe(c,1):null;return s.jsx(s.Fragment,{children:e&&s.jsx("div",{className:"fixed inset-0 z-50 bg-anthracite/60 flex items-center justify-center p-4 animate-fade-in",onClick:y,children:s.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[92vh] flex flex-col animate-modal-in",role:"dialog","aria-label":"Jahresübersicht",onClick:p=>p.stopPropagation(),children:[s.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-border shrink-0",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[c!==null&&s.jsx("button",{onClick:()=>l(null),className:"text-sm text-anthracite/60 hover:text-anthracite transition-colors",children:"← Übersicht"}),c===null&&s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("button",{onClick:()=>o(p=>p-1),disabled:a<=i,className:"px-2 py-1 text-sm border border-border rounded hover:bg-offwhite disabled:opacity-30 transition-colors","aria-label":"Vorjahr",children:"←"}),s.jsx("span",{className:"font-serif text-xl text-anthracite w-16 text-center",children:a}),s.jsx("button",{onClick:()=>o(p=>p+1),className:"px-2 py-1 text-sm border border-border rounded hover:bg-offwhite transition-colors","aria-label":"Nächstes Jahr",children:"→"})]})]}),s.jsx("button",{onClick:y,className:"text-anthracite/40 hover:text-anthracite text-2xl leading-none w-8 h-8 flex items-center justify-center","aria-label":"Schließen",children:"×"})]}),m&&s.jsxs("div",{className:"flex items-center gap-6 px-6 py-2.5 text-sm bg-warm/60 border-b border-border shrink-0",children:[s.jsxs("div",{children:[s.jsx("span",{className:"text-anthracite/50",children:"Anreise: "}),s.jsx("span",{className:"font-medium text-anthracite",children:d?oe(d):"–"})]}),s.jsxs("div",{children:[s.jsx("span",{className:"text-anthracite/50",children:"Abreise: "}),s.jsx("span",{className:"font-medium text-anthracite",children:h?oe(h):"–"})]})]}),s.jsxs("div",{className:"overflow-auto p-6 flex-1",children:[s.jsx(jn,{className:"mb-4"}),c===null?s.jsxs(s.Fragment,{children:[s.jsx("p",{className:"text-xs text-anthracite/40 mb-4",children:"Monat antippen zum Vergrößern — Zeitraum direkt im Kalender wählen"}),s.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2",children:k.map(p=>s.jsx("button",{onClick:()=>l(new Date(a,p,1)),className:"bg-offwhite rounded-lg p-4 text-left hover:bg-warm hover:border-anthracite/20 border border-border transition-colors",children:s.jsx(le,{year:a,month:p,occupancy:n,selectedRange:H,compact:!0})},p))})]}):s.jsxs("div",{children:[s.jsxs("div",{className:"md:hidden",children:[s.jsxs("div",{className:"flex items-center justify-between mb-3",children:[s.jsx("button",{onClick:()=>l(p=>qe(p)),className:"p-2.5 rounded hover:bg-offwhite transition-colors text-anthracite/60 hover:text-anthracite text-xl leading-none","aria-label":"Vorheriger Monat",children:"‹"}),s.jsx("span",{className:"text-xs text-anthracite/50 font-medium",children:c.toLocaleDateString("de-DE",{month:"long",year:"numeric"})}),s.jsx("button",{onClick:()=>l(p=>pe(p,1)),className:"p-2.5 rounded hover:bg-offwhite transition-colors text-anthracite/60 hover:text-anthracite text-xl leading-none","aria-label":"Nächster Monat",children:"›"})]}),s.jsx(le,{year:V(c),month:ee(c),occupancy:n,selectedRange:H,onDayClick:u,showHeading:!1})]}),s.jsxs("div",{className:"hidden md:block relative",children:[s.jsx("button",{onClick:()=>l(p=>qe(p)),className:"absolute left-0 top-0 p-1 rounded hover:bg-offwhite transition-colors text-anthracite/50 hover:text-anthracite text-xl leading-none","aria-label":"Vorheriger Monat",children:"‹"}),s.jsx("button",{onClick:()=>l(p=>pe(p,1)),className:"absolute right-0 top-0 p-1 rounded hover:bg-offwhite transition-colors text-anthracite/50 hover:text-anthracite text-xl leading-none","aria-label":"Nächster Monat",children:"›"}),s.jsxs("div",{className:"grid grid-cols-2 gap-8 px-8",children:[s.jsx(le,{year:V(c),month:ee(c),occupancy:n,selectedRange:H,onDayClick:u}),s.jsx(le,{year:V(g),month:ee(g),occupancy:n,selectedRange:H,onDayClick:u})]})]})]})]}),s.jsxs("div",{className:"flex items-center justify-between px-6 py-3 border-t border-border shrink-0",children:[m?s.jsx("button",{onClick:j,className:"px-3 py-1 text-xs font-medium rounded-full border border-border bg-offwhite hover:bg-warm hover:border-anthracite/20 text-anthracite/60 hover:text-anthracite transition-colors",children:"Zurücksetzen"}):s.jsx("span",{className:`text-xs ${v?"text-primary font-medium":"text-anthracite/40"}`,children:v?"Zeitraum enthält belegte Tage — neuen Anreisetag wählen":c!==null?d?"Abreisetag wählen":"Anreisetag wählen":"Monat antippen und Zeitraum wählen"}),s.jsx("button",{onClick:E,disabled:!d||!h,className:"px-6 py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed",children:"Zeitraum übernehmen"})]})]})})})}function Ci({isOpen:n,onClose:e}){if(b.useEffect(()=>{if(!n)return;document.body.style.overflow="hidden";function r(i){i.key==="Escape"&&e()}return window.addEventListener("keydown",r),()=>{document.body.style.overflow="",window.removeEventListener("keydown",r)}},[n,e]),!n)return null;const t=window.location.href.split("#")[0];return s.jsx("div",{className:"fixed inset-0 z-50 bg-anthracite/60 flex items-center justify-center p-4 animate-fade-in",onClick:e,children:s.jsxs("div",{className:"bg-warm rounded-2xl shadow-2xl w-full max-w-2xl max-h-[92vh] flex flex-col animate-modal-in",role:"dialog","aria-label":"Informationen",onClick:r=>r.stopPropagation(),children:[s.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-border shrink-0",children:[s.jsx("span",{className:"font-serif text-lg text-anthracite",children:"Zu Wohnung und Anreise"}),s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx("a",{href:`${t}#/info`,target:"_blank",rel:"noopener noreferrer",className:"px-3 py-1 text-xs font-medium rounded-full border border-border bg-offwhite hover:bg-warm hover:border-anthracite/20 text-anthracite/60 hover:text-anthracite transition-colors",children:"Drucken / Vollansicht ↗"}),s.jsx("button",{onClick:e,className:"text-anthracite/40 hover:text-anthracite text-2xl leading-none w-8 h-8 flex items-center justify-center","aria-label":"Schließen",children:"×"})]})]}),s.jsxs("div",{className:"overflow-auto px-6 py-5 space-y-4 flex-1",children:[s.jsxs(Ee,{icon:"📍",title:"Adresse",action:s.jsx(Sn,{}),children:[s.jsx("p",{className:"font-medium",children:"Kennedyboulevard 604"}),s.jsx("p",{children:"1931 XM Egmond aan Zee"}),s.jsx("a",{href:"https://maps.google.com/?q=Kennedyboulevard+604,+1931+XM+Egmond+aan+Zee",target:"_blank",rel:"noopener noreferrer",className:"inline-block mt-2 text-sm text-primary hover:underline",children:"🗺️ In Google Maps öffnen"})]}),s.jsxs(Ee,{icon:"🚗",title:"Anreise & Eingang",children:[s.jsx(Z,{icon:"🅿️",label:"Parken",children:"Am Südende des Innenhofs. Vorletzte Garage rechts – Nummer 21."}),s.jsx(Z,{icon:"🚪",label:"Eingang",children:'Eingangstür links nahe der Garage. Dann 2. Etage links – Türschild „Kimmeskamp".'})]}),s.jsxs(Ee,{icon:"🏠",title:"Zur Wohnung",children:[s.jsx(Z,{icon:"🔄",label:"Check-in / Check-out",children:"Wechsel ab 12 Uhr (oder nach Absprache). Abreise bis 12 Uhr, Anreise ab 12 Uhr."}),s.jsx(Z,{icon:"🧺",label:"Bettzeug",children:"Bettzeug und Handtücher nicht vergessen."}),s.jsx(Z,{icon:"🛋️",label:"Betten",children:"Ausziehbetten unter der Sitzlandschaft. Decken & Kissen in den Bettkästen im Schlafzimmer."}),s.jsx(Z,{icon:"☀️",label:"Markise",children:"Elektrisch – Stecker an der Balkontür anschalten. Fernbedienung im Regal ganz links. Bei Windgefahr unbedingt einfahren!"}),s.jsx(Z,{icon:"🗑️",label:"Müll",children:"Abfallpass im Flurregal. 30L-Sack ca. 0,55 € · 60L-Sack ca. 1,10 €. Papier, Glas, PMD kostenfrei. Die Kosten werden nicht weiterberechnet – wir freuen uns trotzdem, wenn ihr sparsam damit umgeht."}),s.jsx(Z,{icon:"🧹",label:"Endreinigung",children:"Gereinigt übergeben oder ca. 70 € über die Hausmeister buchen (Stand 2025)."})]}),s.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[s.jsx(Ee,{icon:"✅",title:"Bei Ankunft",children:s.jsx(Vt,{items:[{icon:"🔌",text:"Kühlschränke einstecken"},{icon:"🔥",text:"Gas aufdrehen – rechts neben dem Herd"},{icon:"🌡️",text:"Heizung auf Temperatur"},{icon:"💧",text:"Wasserhahn Spülmaschine aufdrehen"}]})}),s.jsx(Ee,{icon:"🚪",title:"Bei Abfahrt",children:s.jsx(Vt,{items:[{icon:"🔌",text:"Kühlschränke ausstecken & öffnen"},{icon:"💧",text:"Wasserhahn Spülmaschine zudrehen"},{icon:"❄️",text:"Heizung auf Schneeflocke"},{icon:"🔥",text:"Gas ausschalten"},{icon:"🚪",text:"Zwischentür zuziehen"},{icon:"🚿",text:"Bad & WC offen lassen"}]})})]})]})]})})}function Ee({icon:n,title:e,children:t,action:r}){return s.jsxs("div",{className:"bg-offwhite border border-border rounded-xl p-4",children:[s.jsxs("h3",{className:"font-serif text-base text-anthracite mb-2 flex items-center gap-2",children:[s.jsx("span",{children:n}),s.jsx("span",{className:"flex-1",children:e}),r]}),s.jsx("div",{className:"space-y-2 text-sm text-anthracite/80 leading-relaxed",children:t})]})}function Z({icon:n,label:e,children:t}){return s.jsxs("div",{className:"flex gap-2",children:[s.jsx("span",{className:"shrink-0 mt-0.5",children:n}),s.jsxs("div",{children:[s.jsxs("span",{className:"font-medium text-anthracite",children:[e,": "]}),t]})]})}function Vt({items:n}){return s.jsx("ul",{className:"space-y-1.5",children:n.map(e=>s.jsxs("li",{className:"flex items-start gap-2",children:[s.jsx("span",{className:"shrink-0",children:e.icon}),s.jsx("span",{children:e.text})]},e.text))})}const C=[{src:"./images/innen-5.jpg",alt:"Essplatz mit offener Schiebetür zur Terrasse"},{src:"./images/innen-2.jpg",alt:"Wohnbereich mit Tresen und Essplatz"},{src:"./images/innen-1.jpg",alt:"Küche mit Tresen"},{src:"./images/innen-4.jpg",alt:"Essbereich mit Sitzlandschaft und Spielesammlung"},{src:"./images/innen-3.jpg",alt:"Essplatz am Panoramafenster"},{src:"./images/innen-8.jpg",alt:"Schlafzimmer mit zwei Einzelbetten und Tür zum Balkon"},{src:"./images/innen-9.jpg",alt:"Schlafzimmer mit Einbauschrank, Blick zur Tür"},{src:"./images/innen-10.jpg",alt:"Badezimmer mit Eckdusche"},{src:"./images/innen-12.jpg",alt:"Badezimmer mit Waschbecken und Spiegel"},{src:"./images/innen-11.jpg",alt:"Separates WC"},{src:"./images/innen-13.jpg",alt:"Eingangsflur mit Wendeltreppe"},{src:"./images/innen-14.jpg",alt:"Flur mit Zimmertüren"},{src:"./images/innen-7.jpg",alt:"Balkon nach Westen mit Blick aufs Meer"},{src:"./images/innen-6.jpg",alt:"Balkon nach Süden mit Blick in die Dünen"},{src:"./images/interior-5.jpg",alt:"Kerzenleuchter am Fenster bei Sonnenuntergang"},{src:"./images/exterior-1.jpg",alt:"Blick aus dem Wohnzimmerfenster zum Strand"},{src:"./images/interior-1.jpg",alt:"Das Haus von der Dünenseite"},{src:"./images/exterior-3.jpg",alt:"Sonnenuntergang über dem Meer"},{src:"./images/exterior-2.jpg",alt:"Strandaufgang in der Dämmerung"},{src:"./images/exterior-8.jpg",alt:"Strandkörbe am Abend"},{src:"./images/exterior-4.jpg",alt:"Dünen im Abendlicht"},{src:"./images/exterior-5.jpg",alt:"Dünenlandschaft"},{src:"./images/interior-2.jpg",alt:"Dünen bei aufziehendem Gewitter"},{src:"./images/interior-4.jpg",alt:"Dünensee"},{src:"./images/exterior-7.jpg",alt:"Milchstraße über den Dünen"},{src:"./images/exterior-6.jpg",alt:"Egmond aan Zee bei Nacht"},{src:"./images/interior-3.jpg",alt:"Strandaufgang bei Sonnenuntergang"}];function Ri(){const[n,e]=b.useState(null),t=b.useRef(null);b.useEffect(()=>{if(n===null)return;document.body.style.overflow="hidden";function a(o){o.key==="Escape"&&e(null),o.key==="ArrowRight"&&e(c=>(c+1)%C.length),o.key==="ArrowLeft"&&e(c=>(c-1+C.length)%C.length)}return window.addEventListener("keydown",a),()=>{document.body.style.overflow="",window.removeEventListener("keydown",a)}},[n]);function r(a){t.current=a.touches[0].clientX}function i(a){if(t.current===null||n===null)return;const o=t.current-a.changedTouches[0].clientX;Math.abs(o)<40||(o>0?e(c=>(c+1)%C.length):e(c=>(c-1+C.length)%C.length),t.current=null)}return s.jsxs("section",{id:"galerie",className:"px-6 pt-2 pb-4 md:px-12 lg:px-20 max-w-7xl mx-auto",children:[s.jsx(Mi,{images:C,onOpen:e}),n!==null&&s.jsxs("div",{className:"lightbox-overlay animate-fade-in",role:"dialog","aria-label":"Galerie",onClick:()=>e(null),onTouchStart:r,onTouchEnd:i,children:[s.jsx("button",{onClick:()=>e(null),className:"absolute top-5 right-5 text-white/80 hover:text-white text-3xl z-10 w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors","aria-label":"Schließen",children:"×"}),s.jsx("button",{onClick:a=>{a.stopPropagation(),e(o=>(o-1+C.length)%C.length)},className:"absolute left-2 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-4xl z-10 w-12 h-16 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors","aria-label":"Vorheriges Bild",children:"‹"}),s.jsx("img",{src:C[n].src,alt:C[n].alt,className:"max-h-[85vh] max-w-[90vw] object-contain rounded shadow-2xl animate-fade-in",onClick:a=>a.stopPropagation()},n),s.jsx("button",{onClick:a=>{a.stopPropagation(),e(o=>(o+1)%C.length)},className:"absolute right-2 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-4xl z-10 w-12 h-16 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors","aria-label":"Nächstes Bild",children:"›"}),s.jsxs("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm",children:[n+1," / ",C.length]})]})]})}function Mi({images:n,onOpen:e}){const[t,...r]=n,i=r.slice(0,4);return s.jsxs("div",{className:"flex flex-col gap-1.5",children:[s.jsx("div",{className:"flex items-center justify-between px-0.5",children:s.jsx("span",{className:"text-xs font-medium text-anthracite/70 uppercase tracking-widest",children:"Galerie"})}),s.jsxs("button",{onClick:()=>e(0),className:"group relative rounded-xl overflow-hidden bg-offwhite border border-border hover:border-anthracite/20 transition-colors shadow-sm active:scale-[0.99]","aria-label":`Galerie öffnen — ${n.length} Fotos`,children:[s.jsxs("div",{className:"grid grid-cols-[2fr_1fr_1fr] grid-rows-2 gap-0.5 h-56 sm:h-72 lg:h-80",children:[s.jsx("div",{className:"row-span-2 overflow-hidden bg-stone/20",children:s.jsx("img",{src:t.src,alt:t.alt,className:"w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]",loading:"lazy"})}),i.map(a=>s.jsx("div",{className:"overflow-hidden bg-stone/20",children:s.jsx("img",{src:a.src,alt:a.alt,className:"w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]",loading:"lazy"})},a.src))]}),s.jsx("div",{className:"absolute inset-0 bg-anthracite/0 group-hover:bg-anthracite/30 transition-colors"}),s.jsxs("div",{className:"absolute bottom-2.5 right-2.5 bg-white/90 text-anthracite text-xs font-medium px-2.5 py-1 rounded-full shadow-sm pointer-events-none",children:["Alle ",n.length," Fotos"]})]})]})}function Oi({isOpen:n,onClose:e,occupancy:t,initialDate:r,onSelect:i}){const[a,o]=b.useState(()=>{const u=r||new Date;return new Date(V(u),ee(u),1)}),[c,l]=b.useState(null),[d,f]=b.useState(null);b.useEffect(()=>{if(n){const u=r||new Date;return o(new Date(V(u),ee(u),1)),l(null),f(null),document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}}},[n,r]),b.useEffect(()=>{if(!n)return;function u(E){E.key==="Escape"&&e()}return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[n,e]);const h=b.useMemo(()=>({start:c,end:d}),[c,d]),w=b.useCallback(u=>{const{newArrival:E,newDeparture:j}=Tn(c,d,u,t);l(E),f(j)},[c,d,t]);if(!n)return null;const v=pe(a,1),_=c&&d?xt(d,c):null;function k(){var u;c&&d&&(i({arrival:c,departure:d}),e(),(u=document.getElementById("anfrage"))==null||u.scrollIntoView({behavior:"smooth"}))}function y(){l(null),f(null)}return s.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-anthracite/60 px-4 animate-fade-in",onClick:e,children:s.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col animate-modal-in",role:"dialog","aria-label":"Reisezeitraum wählen",onClick:u=>u.stopPropagation(),children:[s.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-border shrink-0",children:[s.jsxs("div",{children:[c||d?s.jsxs("div",{className:"flex items-center gap-2.5 text-sm",children:[s.jsx("span",{className:`font-medium ${c?"text-anthracite":"text-anthracite/35"}`,children:c?oe(c):"Anreise"}),s.jsx("span",{className:"text-anthracite/25",children:"→"}),s.jsx("span",{className:`font-medium ${d?"text-anthracite":"text-anthracite/35"}`,children:d?oe(d):"Abreise"}),_&&s.jsxs("span",{className:"ml-1 px-2 py-0.5 text-[11px] bg-offwhite border border-border rounded-full text-anthracite/50",children:[_," Nächte"]})]}):s.jsx("span",{className:"font-serif text-lg text-anthracite",children:"Reisezeitraum wählen"}),s.jsx("p",{className:"text-xs text-anthracite/35 mt-0.5",children:c?d?"Zeitraum bestätigen":"Abreisetag wählen":"Anreisetag wählen"})]}),s.jsx("button",{onClick:e,className:"text-anthracite/40 hover:text-anthracite text-2xl leading-none w-8 h-8 flex items-center justify-center","aria-label":"Schließen",children:"×"})]}),s.jsx(jn,{showSelection:!0,className:"px-6 py-2 border-b border-border bg-warm/30 shrink-0"}),s.jsxs("div",{className:"px-6 py-4 overflow-auto flex-1",children:[s.jsxs("div",{className:"md:hidden",children:[s.jsxs("div",{className:"flex items-center justify-between mb-3",children:[s.jsx("button",{onClick:()=>o(u=>qe(u)),className:"p-2.5 rounded hover:bg-offwhite transition-colors text-anthracite/60 hover:text-anthracite text-xl leading-none","aria-label":"Vorheriger Monat",children:"‹"}),s.jsx("span",{className:"text-xs text-anthracite/50 font-medium",children:a.toLocaleDateString("de-DE",{month:"long",year:"numeric"})}),s.jsx("button",{onClick:()=>o(u=>pe(u,1)),className:"p-2.5 rounded hover:bg-offwhite transition-colors text-anthracite/60 hover:text-anthracite text-xl leading-none","aria-label":"Nächster Monat",children:"›"})]}),s.jsx(le,{year:V(a),month:ee(a),occupancy:t,selectedRange:h,onDayClick:w,showHeading:!1})]}),s.jsxs("div",{className:"hidden md:block relative",children:[s.jsx("button",{onClick:()=>o(u=>qe(u)),className:"absolute left-0 top-0 p-2 rounded hover:bg-offwhite transition-colors text-anthracite/50 hover:text-anthracite text-xl leading-none","aria-label":"Vorheriger Monat",children:"‹"}),s.jsx("button",{onClick:()=>o(u=>pe(u,1)),className:"absolute right-0 top-0 p-2 rounded hover:bg-offwhite transition-colors text-anthracite/50 hover:text-anthracite text-xl leading-none","aria-label":"Nächster Monat",children:"›"}),s.jsxs("div",{className:"grid grid-cols-2 gap-8 px-7",children:[s.jsx(le,{year:V(a),month:ee(a),occupancy:t,selectedRange:h,onDayClick:w}),s.jsx(le,{year:V(v),month:ee(v),occupancy:t,selectedRange:h,onDayClick:w})]})]})]}),s.jsxs("div",{className:"flex items-center justify-between px-6 pb-4 pt-3 border-t border-border shrink-0",children:[c||d?s.jsx("button",{onClick:y,className:"px-3 py-1 text-xs font-medium rounded-full border border-border bg-offwhite hover:bg-warm hover:border-anthracite/20 text-anthracite/60 hover:text-anthracite transition-colors",children:"Zurücksetzen"}):s.jsx("span",{}),s.jsx("button",{onClick:k,disabled:!c||!d,className:"px-6 py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed",children:"Zeitraum übernehmen"})]})]})})}function Di({arrival:n,departure:e,onOpenDatePicker:t,onSubmit:r}){const i=n&&e?xt(e,n):null,[a,o]=b.useState({name:"",email:"",phone:"",guests:2,message:""}),[c,l]=b.useState(!1),[d,f]=b.useState(!1),[h,w]=b.useState(null);function v(u,E){o(j=>({...j,[u]:E}))}const _=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;async function k(u){if(u.preventDefault(),!n||!e){w("Bitte wählen Sie zuerst einen Reisezeitraum.");return}if(a.name.trim().length<2){w("Bitte geben Sie Ihren vollständigen Namen ein.");return}if(!_.test(a.email.trim())){w("Bitte geben Sie eine gültige E-Mail-Adresse ein.");return}l(!0),w(null);try{await r({...a,arrival:Ut(n),departure:Ut(e)}),f(!0),o({name:"",email:"",phone:"",guests:2,message:""})}catch{w("Fehler beim Senden. Bitte versuchen Sie es erneut.")}finally{l(!1)}}const y="w-full px-4 py-2.5 bg-white border border-border rounded text-sm text-anthracite placeholder:text-anthracite/40 focus:outline-none focus:border-anthracite/40 focus:ring-2 focus:ring-anthracite/10 transition-colors";return s.jsx("section",{id:"anfrage",className:"px-6 pt-5 pb-8 md:px-12 lg:px-20 max-w-7xl mx-auto",children:s.jsx("div",{className:"bg-white rounded-xl border border-border p-6 md:p-8",children:d?s.jsxs("div",{className:"bg-offwhite border border-gold/40 rounded-lg p-8 text-center",children:[s.jsx("p",{className:"text-anthracite font-medium text-lg",children:"Danke für die Anfrage — wir melden uns persönlich."}),s.jsx("p",{className:"text-anthracite/50 text-sm mt-2",children:"Sie erhalten in Kürze eine Antwort per E-Mail."}),s.jsx("button",{type:"button",onClick:()=>f(!1),className:"mt-5 px-5 py-2 text-sm font-medium rounded-lg border border-gold/40 text-anthracite/70 hover:bg-warm transition-colors",children:"Neue Anfrage stellen"})]}):s.jsxs(s.Fragment,{children:[s.jsx("h2",{className:"font-serif text-base text-anthracite/50 mb-4",children:"Anfrageformular"}),s.jsxs("div",{className:"flex items-center gap-4 mb-6 pb-5 border-b border-border text-sm flex-wrap",children:[s.jsxs("div",{className:"whitespace-nowrap",children:[s.jsx("span",{className:"text-anthracite/40",children:"Anreise: "}),s.jsx("span",{className:`font-medium ${n?"text-anthracite":"text-anthracite/40"}`,children:n?oe(n):"–"})]}),s.jsx("span",{className:"text-anthracite/20",children:"·"}),s.jsxs("div",{className:"whitespace-nowrap",children:[s.jsx("span",{className:"text-anthracite/40",children:"Abreise: "}),s.jsx("span",{className:`font-medium ${e?"text-anthracite":"text-anthracite/40"}`,children:e?oe(e):"–"})]}),i&&s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"text-anthracite/20",children:"·"}),s.jsxs("span",{className:"whitespace-nowrap text-anthracite/60 flex items-center gap-1",children:[s.jsx("span",{children:"🌙"}),s.jsxs("span",{className:"font-medium text-anthracite",children:[i," Nächte"]})]})]}),s.jsx("button",{type:"button",onClick:t,className:"ml-auto px-3 py-1 text-xs font-medium rounded-full border border-border bg-offwhite hover:bg-warm hover:border-anthracite/20 text-anthracite/60 hover:text-anthracite transition-colors",children:n?"Ändern":"Zeitraum wählen"})]}),s.jsxs("form",{onSubmit:k,className:"space-y-4",children:[s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[s.jsxs("div",{children:[s.jsx("label",{htmlFor:"inq-name",className:"block text-xs text-anthracite/50 mb-1.5",children:"Name *"}),s.jsx("input",{id:"inq-name",name:"name",type:"text",value:a.name,onChange:u=>v("name",u.target.value),className:y,placeholder:"Max Mustermann",required:!0,autoComplete:"name"})]}),s.jsxs("div",{children:[s.jsx("label",{htmlFor:"inq-email",className:"block text-xs text-anthracite/50 mb-1.5",children:"E-Mail *"}),s.jsx("input",{id:"inq-email",name:"email",type:"email",value:a.email,onChange:u=>v("email",u.target.value),className:y,placeholder:"max@beispiel.de",required:!0,autoComplete:"email"})]})]}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[s.jsxs("div",{children:[s.jsx("label",{htmlFor:"inq-phone",className:"block text-xs text-anthracite/50 mb-1.5",children:"Telefon (optional)"}),s.jsx("input",{id:"inq-phone",name:"phone",type:"tel",value:a.phone,onChange:u=>v("phone",u.target.value),className:y,placeholder:"0170 1234567",autoComplete:"tel"})]}),s.jsxs("div",{children:[s.jsx("label",{htmlFor:"inq-guests",className:"block text-xs text-anthracite/50 mb-1.5",children:"Personen"}),s.jsx("select",{id:"inq-guests",name:"guests",value:a.guests,onChange:u=>v("guests",Number(u.target.value)),className:y,children:[1,2,3,4].map(u=>s.jsxs("option",{value:u,children:[u," ",u===1?"Person":"Personen"]},u))})]})]}),s.jsxs("div",{children:[s.jsxs("div",{className:"flex justify-between mb-1.5",children:[s.jsx("label",{htmlFor:"inq-message",className:"text-xs text-anthracite/50",children:"Nachricht (optional)"}),s.jsxs("span",{className:`text-xs ${a.message.length>1800?"text-primary":"text-anthracite/30"}`,children:[a.message.length,"/2000"]})]}),s.jsx("textarea",{id:"inq-message",name:"message",value:a.message,onChange:u=>v("message",u.target.value.slice(0,2e3)),className:`${y} h-28 resize-none`,placeholder:"Haben Sie besondere Wünsche oder Fragen?"})]}),h&&s.jsx("p",{className:"text-primary text-sm border border-primary/20 bg-primary/5 rounded px-3 py-2",children:h}),s.jsx("button",{type:"submit",disabled:c,className:"w-full md:w-auto px-8 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors disabled:opacity-40",children:c?"Wird gesendet…":"Anfrage senden"})]})]})})})}function Li(){const n=new Date().getFullYear();return s.jsx("footer",{className:"border-t border-border bg-offwhite mt-4",children:s.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-5 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-anthracite/50",children:[s.jsx("span",{className:"font-serif text-anthracite/70",children:"Egmond aan Zee"}),s.jsx("a",{href:"mailto:kilian.kimmeskamp@outlook.com",className:"hover:text-anthracite transition-colors","aria-label":"E-Mail Kontakt",children:"Kontakt"}),s.jsxs("span",{children:["© ",n]}),s.jsx("a",{href:"#/admin",className:"text-anthracite/20 hover:text-anthracite/50 transition-colors text-xs",children:"Admin"})]})})}function wt(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Pn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ui=Pn,An=new bt("auth","Firebase",Pn());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e=new kr("@firebase/auth");function Fi(n,...e){$e.logLevel<=pn.WARN&&$e.warn(`Auth (${Ae}): ${n}`,...e)}function He(n,...e){$e.logLevel<=pn.ERROR&&$e.error(`Auth (${Ae}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(n,...e){throw yt(n,...e)}function W(n,...e){return yt(n,...e)}function Cn(n,e,t){const r=Object.assign(Object.assign({},Ui()),{[e]:t});return new bt("auth","Firebase",r).create(e,{appName:n.name})}function ae(n){return Cn(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yt(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return An.create(n,...e)}function x(n,e,...t){if(!n)throw yt(e,...t)}function q(n){const e="INTERNAL ASSERTION FAILED: "+n;throw He(e),new Error(e)}function J(n,e){n||q(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Wi(){return Kt()==="http:"||Kt()==="https:"}function Kt(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Wi()||Sr()||"connection"in navigator)?navigator.onLine:!0}function Hi(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t){this.shortDelay=e,this.longDelay=t,J(t>e,"Short delay should be less than long delay!"),this.isMobile=Ir()||Er()}get(){return zi()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(n,e){J(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;q("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;q("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;q("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi=new Re(3e4,6e4);function ue(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Y(n,e,t,r,i={}){return Mn(n,i,async()=>{let a={},o={};r&&(e==="GET"?o=r:a={body:JSON.stringify(r)});const c=Ce(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:l},a);return Mr()||(d.referrerPolicy="no-referrer"),Rn.fetch()(On(n,n.config.apiHost,t,c),d)})}async function Mn(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Bi),e);try{const i=new qi(n),a=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await a.json();if("needConfirmation"in o)throw Le(n,"account-exists-with-different-credential",o);if(a.ok&&!("errorMessage"in o))return o;{const c=a.ok?o.errorMessage:o.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Le(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Le(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Le(n,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Cn(n,f,d);D(n,f)}}catch(i){if(i instanceof vt)throw i;D(n,"network-request-failed",{message:String(i)})}}async function Qe(n,e,t,r,i={}){const a=await Y(n,e,t,r,i);return"mfaPendingCredential"in a&&D(n,"multi-factor-auth-required",{_serverResponse:a}),a}function On(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?_t(n.config,i):`${n.config.apiScheme}://${i}`}function Ki(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class qi{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(W(this.auth,"network-request-failed")),Vi.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Le(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=W(n,e,r);return i.customData._tokenResponse=t,i}function qt(n){return n!==void 0&&n.enterprise!==void 0}class $i{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Ki(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Gi(n,e){return Y(n,"GET","/v2/recaptchaConfig",ue(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ji(n,e){return Y(n,"POST","/v1/accounts:delete",e)}async function Dn(n,e){return Y(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Yi(n,e=!1){const t=L(n),r=await t.getIdToken(e),i=kt(r);x(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,o=a==null?void 0:a.sign_in_provider;return{claims:i,token:r,authTime:je(ot(i.auth_time)),issuedAtTime:je(ot(i.iat)),expirationTime:je(ot(i.exp)),signInProvider:o||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function ot(n){return Number(n)*1e3}function kt(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return He("JWT malformed, contained fewer than 3 sections"),null;try{const i=Tr(t);return i?JSON.parse(i):(He("Failed to decode base64 JWT payload"),null)}catch(i){return He("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function $t(n){const e=kt(n);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ve(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof vt&&Zi(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Zi({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=je(this.lastLoginAt),this.creationTime=je(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ge(n){var e;const t=n.auth,r=await n.getIdToken(),i=await ve(n,Dn(t,{idToken:r}));x(i==null?void 0:i.users.length,t,"internal-error");const a=i.users[0];n._notifyReloadListener(a);const o=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?Ln(a.providerUserInfo):[],c=es(n.providerData,o),l=n.isAnonymous,d=!(n.email&&a.passwordHash)&&!(c!=null&&c.length),f=l?d:!1,h={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new ft(a.createdAt,a.lastLoginAt),isAnonymous:f};Object.assign(n,h)}async function Qi(n){const e=L(n);await Ge(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function es(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ln(n){return n.map(e=>{var{providerId:t}=e,r=wt(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ts(n,e){const t=await Mn(n,{},async()=>{const r=Ce({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:a}=n.config,o=On(n,i,"/v1/token",`key=${a}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Rn.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ns(n,e){return Y(n,"POST","/v2/accounts:revokeToken",ue(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$t(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){x(e.length!==0,"internal-error");const t=$t(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(x(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:a}=await ts(e,t);this.updateTokensAndExpiration(r,i,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:a}=t,o=new ge;return r&&(x(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(x(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),a&&(x(typeof a=="number","internal-error",{appName:e}),o.expirationTime=a),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ge,this.toJSON())}_performRefresh(){return q("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(n,e){x(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ${constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,a=wt(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Xi(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new ft(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await ve(this,this.stsTokenManager.getToken(this.auth,e));return x(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Yi(this,e)}reload(){return Qi(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new $(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ge(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(K(this.auth.app))return Promise.reject(ae(this.auth));const e=await this.getIdToken();return await ve(this,Ji(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,a,o,c,l,d,f;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,w=(i=t.email)!==null&&i!==void 0?i:void 0,v=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,_=(o=t.photoURL)!==null&&o!==void 0?o:void 0,k=(c=t.tenantId)!==null&&c!==void 0?c:void 0,y=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,u=(d=t.createdAt)!==null&&d!==void 0?d:void 0,E=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:j,emailVerified:H,isAnonymous:m,providerData:g,stsTokenManager:p}=t;x(j&&p,e,"internal-error");const S=ge.fromJSON(this.name,p);x(typeof j=="string",e,"internal-error"),X(h,e.name),X(w,e.name),x(typeof H=="boolean",e,"internal-error"),x(typeof m=="boolean",e,"internal-error"),X(v,e.name),X(_,e.name),X(k,e.name),X(y,e.name),X(u,e.name),X(E,e.name);const I=new $({uid:j,auth:e,email:w,emailVerified:H,displayName:h,isAnonymous:m,photoURL:_,phoneNumber:v,tenantId:k,stsTokenManager:S,createdAt:u,lastLoginAt:E});return g&&Array.isArray(g)&&(I.providerData=g.map(N=>Object.assign({},N))),y&&(I._redirectEventId=y),I}static async _fromIdTokenResponse(e,t,r=!1){const i=new ge;i.updateFromServerResponse(t);const a=new $({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ge(a),a}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];x(i.localId!==void 0,"internal-error");const a=i.providerUserInfo!==void 0?Ln(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(a!=null&&a.length),c=new ge;c.updateFromIdToken(r);const l=new $({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ft(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(a!=null&&a.length)};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt=new Map;function G(n){J(n instanceof Function,"Expected a class definition");let e=Gt.get(n);return e?(J(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Gt.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Un.type="NONE";const Jt=Un;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(n,e,t){return`firebase:${n}:${e}:${t}`}class xe{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:a}=this.auth;this.fullUserKey=Be(this.userKey,i.apiKey,a),this.fullPersistenceKey=Be("persistence",i.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?$._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new xe(G(Jt),e,r);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let a=i[0]||G(Jt);const o=Be(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const f=await d._get(o);if(f){const h=$._fromJSON(e,f);d!==a&&(c=h),a=d;break}}catch{}const l=i.filter(d=>d._shouldAllowMigration);return!a._shouldAllowMigration||!l.length?new xe(a,e,r):(a=l[0],c&&await a._set(o,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==a)try{await d._remove(o)}catch{}})),new xe(a,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hn(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fn(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vn(e))return"Blackberry";if(Kn(e))return"Webos";if(Wn(e))return"Safari";if((e.includes("chrome/")||zn(e))&&!e.includes("edge/"))return"Chrome";if(Bn(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Fn(n=R()){return/firefox\//i.test(n)}function Wn(n=R()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zn(n=R()){return/crios\//i.test(n)}function Hn(n=R()){return/iemobile/i.test(n)}function Bn(n=R()){return/android/i.test(n)}function Vn(n=R()){return/blackberry/i.test(n)}function Kn(n=R()){return/webos/i.test(n)}function It(n=R()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function rs(n=R()){var e;return It(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function is(){return Cr()&&document.documentMode===10}function qn(n=R()){return It(n)||Bn(n)||Kn(n)||Vn(n)||/windows phone/i.test(n)||Hn(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(n,e=[]){let t;switch(n){case"Browser":t=Yt(R());break;case"Worker":t=`${Yt(R())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ae}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((o,c)=>{try{const l=e(a);o(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function as(n,e={}){return Y(n,"GET","/v2/passwordPolicy",ue(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=6;class cs{constructor(e){var t,r,i,a;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:os,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,a,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsUppercaseLetter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zt(this),this.idTokenSubscription=new Zt(this),this.beforeStateQueue=new ss(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=An,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=G(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await xe.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Dn(this,{idToken:e}),r=await $._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(K(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(i=l.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ge(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Hi()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(K(this.app))return Promise.reject(ae(this));const t=e?L(e):null;return t&&x(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return K(this.app)?Promise.reject(ae(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return K(this.app)?Promise.reject(ae(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(G(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await as(this),t=new cs(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new bt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await ns(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&G(e)||this._popupRedirectResolver;x(t,this,"argument-error"),this.redirectPersistenceManager=await xe.create(this,[G(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(c,this,"internal-error"),c.then(()=>{o||a(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$n(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Fi(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ye(n){return L(n)}class Zt{constructor(e){this.auth=e,this.observer=null,this.addObserver=Nr(t=>this.observer=t)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let et={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ds(n){et=n}function Gn(n){return et.loadJS(n)}function us(){return et.recaptchaEnterpriseScript}function hs(){return et.gapiScript}function ms(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const fs="recaptcha-enterprise",ps="NO_RECAPTCHA";class gs{constructor(e){this.type=fs,this.auth=ye(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(o,c)=>{Gi(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new $i(l);return a.tenantId==null?a._agentRecaptchaConfig=d:a._tenantRecaptchaConfigs[a.tenantId]=d,o(d.siteKey)}}).catch(l=>{c(l)})})}function i(a,o,c){const l=window.grecaptcha;qt(l)?l.enterprise.ready(()=>{l.enterprise.execute(a,{action:e}).then(d=>{o(d)}).catch(()=>{o(ps)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((a,o)=>{r(this.auth).then(c=>{if(!t&&qt(window.grecaptcha))i(c,a,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=us();l.length!==0&&(l+=c),Gn(l).then(()=>{i(c,a,o)}).catch(d=>{o(d)})}}).catch(c=>{o(c)})})}}async function Xt(n,e,t,r=!1){const i=new gs(n);let a;try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:a}):Object.assign(o,{captchaResponse:a}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Qt(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Xt(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Xt(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(n,e){const t=gn(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),a=t.getOptions();if(Ar(a,e??{}))return i;D(i,"already-initialized")}return t.initialize({options:e})}function bs(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(G);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function vs(n,e,t){const r=ye(n);x(r._canInitEmulator,r,"emulator-config-failed"),x(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,a=Jn(e),{host:o,port:c}=ws(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${a}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})}),ys()}function Jn(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function ws(n){const e=Jn(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const a=i[1];return{host:a,port:en(r.substr(a.length+1))}}else{const[a,o]=r.split(":");return{host:a,port:en(o)}}}function en(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ys(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return q("not implemented")}_getIdTokenResponse(e){return q("not implemented")}_linkToIdToken(e,t){return q("not implemented")}_getReauthenticationResolver(e){return q("not implemented")}}async function _s(n,e){return Y(n,"POST","/v1/accounts:update",e)}async function ks(n,e){return Y(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Is(n,e){return Qe(n,"POST","/v1/accounts:signInWithPassword",ue(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Es(n,e){return Qe(n,"POST","/v1/accounts:signInWithEmailLink",ue(n,e))}async function Ss(n,e){return Qe(n,"POST","/v1/accounts:signInWithEmailLink",ue(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe extends Et{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Pe(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Pe(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qt(e,t,"signInWithPassword",Is);case"emailLink":return Es(e,{email:this._email,oobCode:this._password});default:D(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qt(e,r,"signUpPassword",ks);case"emailLink":return Ss(e,{idToken:t,email:this._email,oobCode:this._password});default:D(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function be(n,e){return Qe(n,"POST","/v1/accounts:signInWithIdp",ue(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns="http://localhost";class de extends Et{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new de(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):D("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,a=wt(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new de(r,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return be(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,be(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,be(e,t)}buildRequest(){const e={requestUri:Ns,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ce(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function js(n){const e=Se(Ne(n)).link,t=e?Se(Ne(e)).deep_link_id:null,r=Se(Ne(n)).deep_link_id;return(r?Se(Ne(r)).link:null)||r||t||e||n}class St{constructor(e){var t,r,i,a,o,c;const l=Se(Ne(e)),d=(t=l.apiKey)!==null&&t!==void 0?t:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,h=Ts((i=l.mode)!==null&&i!==void 0?i:null);x(d&&f&&h,"argument-error"),this.apiKey=d,this.operation=h,this.code=f,this.continueUrl=(a=l.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=js(e);try{return new St(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(){this.providerId=_e.PROVIDER_ID}static credential(e,t){return Pe._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=St.parseLink(t);return x(r,"argument-error"),Pe._fromEmailAndCode(e,r.code,r.tenantId)}}_e.PROVIDER_ID="password";_e.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_e.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me extends Yn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te extends Me{constructor(){super("facebook.com")}static credential(e){return de._fromParams({providerId:te.PROVIDER_ID,signInMethod:te.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return te.credentialFromTaggedObject(e)}static credentialFromError(e){return te.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return te.credential(e.oauthAccessToken)}catch{return null}}}te.FACEBOOK_SIGN_IN_METHOD="facebook.com";te.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne extends Me{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return de._fromParams({providerId:ne.PROVIDER_ID,signInMethod:ne.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ne.credentialFromTaggedObject(e)}static credentialFromError(e){return ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ne.credential(t,r)}catch{return null}}}ne.GOOGLE_SIGN_IN_METHOD="google.com";ne.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re extends Me{constructor(){super("github.com")}static credential(e){return de._fromParams({providerId:re.PROVIDER_ID,signInMethod:re.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return re.credentialFromTaggedObject(e)}static credentialFromError(e){return re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return re.credential(e.oauthAccessToken)}catch{return null}}}re.GITHUB_SIGN_IN_METHOD="github.com";re.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie extends Me{constructor(){super("twitter.com")}static credential(e,t){return de._fromParams({providerId:ie.PROVIDER_ID,signInMethod:ie.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ie.credentialFromTaggedObject(e)}static credentialFromError(e){return ie.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ie.credential(t,r)}catch{return null}}}ie.TWITTER_SIGN_IN_METHOD="twitter.com";ie.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const a=await $._fromIdTokenResponse(e,r,i),o=tn(r);return new we({user:a,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=tn(r);return new we({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function tn(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je extends vt{constructor(e,t,r,i){var a;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Je.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Je(e,t,r,i)}}function Zn(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Je._fromErrorAndOperation(n,a,e,r):a})}async function Ps(n,e,t=!1){const r=await ve(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return we._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xn(n,e,t=!1){const{auth:r}=n;if(K(r.app))return Promise.reject(ae(r));const i="reauthenticate";try{const a=await ve(n,Zn(r,i,e,n),t);x(a.idToken,r,"internal-error");const o=kt(a.idToken);x(o,r,"internal-error");const{sub:c}=o;return x(n.uid===c,r,"user-mismatch"),we._forOperation(n,i,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&D(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qn(n,e,t=!1){if(K(n.app))return Promise.reject(ae(n));const r="signIn",i=await Zn(n,r,e),a=await we._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(a.user),a}async function As(n,e){return Qn(ye(n),e)}async function lo(n,e){return Xn(L(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cs(n){const e=ye(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function uo(n,e,t){return K(n.app)?Promise.reject(ae(n)):As(L(n),_e.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Cs(n),r})}function ho(n,e){return Rs(L(n),null,e)}async function Rs(n,e,t){const{auth:r}=n,a={idToken:await n.getIdToken(),returnSecureToken:!0};t&&(a.password=t);const o=await ve(n,_s(r,a));await n._updateTokensIfNecessary(o,!0)}function Ms(n,e,t,r){return L(n).onIdTokenChanged(e,t,r)}function Os(n,e,t){return L(n).beforeAuthStateChanged(e,t)}function mo(n,e,t,r){return L(n).onAuthStateChanged(e,t,r)}function fo(n){return L(n).signOut()}const Ye="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ye,"1"),this.storage.removeItem(Ye),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=1e3,Ls=10;class tr extends er{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qn(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},a=this.storage.getItem(r);is()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ls):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Ds)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}tr.type="LOCAL";const Us=tr;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends er{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}nr.type="SESSION";const rr=nr;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new tt(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:a}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(o).map(async d=>d(t.origin,a)),l=await Fs(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}tt.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,o;return new Promise((c,l)=>{const d=Nt("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const w=h;if(w.data.eventId===d)switch(w.data.status){case"ack":clearTimeout(f),a=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),c(w.data.response);break;default:clearTimeout(f),clearTimeout(a),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(){return window}function zs(n){z().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(){return typeof z().WorkerGlobalScope<"u"&&typeof z().importScripts=="function"}async function Hs(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Bs(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Vs(){return ir()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr="firebaseLocalStorageDb",Ks=1,Ze="firebaseLocalStorage",ar="fbase_key";class Oe{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function nt(n,e){return n.transaction([Ze],e?"readwrite":"readonly").objectStore(Ze)}function qs(){const n=indexedDB.deleteDatabase(sr);return new Oe(n).toPromise()}function pt(){const n=indexedDB.open(sr,Ks);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ze,{keyPath:ar})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ze)?e(r):(r.close(),await qs(),e(await pt()))})})}async function nn(n,e,t){const r=nt(n,!0).put({[ar]:e,value:t});return new Oe(r).toPromise()}async function $s(n,e){const t=nt(n,!1).get(e),r=await new Oe(t).toPromise();return r===void 0?null:r.value}function rn(n,e){const t=nt(n,!0).delete(e);return new Oe(t).toPromise()}const Gs=800,Js=3;class or{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pt(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Js)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ir()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tt._getInstance(Vs()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Hs(),!this.activeServiceWorker)return;this.sender=new Ws(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Bs()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pt();return await nn(e,Ye,"1"),await rn(e,Ye),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>nn(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>$s(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>rn(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const a=nt(i,!1).getAll();return new Oe(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:a}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Gs)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}or.type="LOCAL";const Ys=or;new Re(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(n,e){return e?G(e):(x(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends Et{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return be(e,this._buildIdpRequest())}_linkToIdToken(e,t){return be(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return be(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Xs(n){return Qn(n.auth,new Tt(n),n.bypassAuthState)}function Qs(n){const{auth:e,user:t}=n;return x(t,e,"internal-error"),Xn(t,new Tt(n),n.bypassAuthState)}async function ea(n){const{auth:e,user:t}=n;return x(t,e,"internal-error"),Ps(t,new Tt(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,t,r,i,a=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:a,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xs;case"linkViaPopup":case"linkViaRedirect":return ea;case"reauthViaPopup":case"reauthViaRedirect":return Qs;default:D(this.auth,"internal-error")}}resolve(e){J(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){J(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=new Re(2e3,1e4);class fe extends cr{constructor(e,t,r,i,a){super(e,t,i,a),this.provider=r,this.authWindow=null,this.pollId=null,fe.currentPopupAction&&fe.currentPopupAction.cancel(),fe.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){J(this.filter.length===1,"Popup operations only handle one event");const e=Nt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(W(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(W(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fe.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(W(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ta.get())};e()}}fe.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na="pendingRedirect",Ve=new Map;class ra extends cr{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ve.get(this.auth._key());if(!e){try{const r=await ia(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ve.set(this.auth._key(),e)}return this.bypassAuthState||Ve.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ia(n,e){const t=oa(e),r=aa(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function sa(n,e){Ve.set(n._key(),e)}function aa(n){return G(n._redirectPersistence)}function oa(n){return Be(na,n.config.apiKey,n.name)}async function ca(n,e,t=!1){if(K(n.app))return Promise.reject(ae(n));const r=ye(n),i=Zs(r,e),o=await new ra(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la=10*60*1e3;class da{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ua(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!lr(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(W(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=la&&this.cachedEventUids.clear(),this.cachedEventUids.has(sn(e))}saveEventToCache(e){this.cachedEventUids.add(sn(e)),this.lastProcessedEventTime=Date.now()}}function sn(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function lr({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ua(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lr(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ha(n,e={}){return Y(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fa=/^https?/;async function pa(n){if(n.config.emulator)return;const{authorizedDomains:e}=await ha(n);for(const t of e)try{if(ga(t))return}catch{}D(n,"unauthorized-domain")}function ga(n){const e=mt(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!fa.test(t))return!1;if(ma.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa=new Re(3e4,6e4);function an(){const n=z().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function ba(n){return new Promise((e,t)=>{var r,i,a;function o(){an(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{an(),t(W(n,"network-request-failed"))},timeout:xa.get()})}if(!((i=(r=z().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((a=z().gapi)===null||a===void 0)&&a.load)o();else{const c=ms("iframefcb");return z()[c]=()=>{gapi.load?o():t(W(n,"network-request-failed"))},Gn(`${hs()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Ke=null,e})}let Ke=null;function va(n){return Ke=Ke||ba(n),Ke}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa=new Re(5e3,15e3),ya="__/auth/iframe",_a="emulator/auth/iframe",ka={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ia=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ea(n){const e=n.config;x(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?_t(e,_a):`https://${n.config.authDomain}/${ya}`,r={apiKey:e.apiKey,appName:n.name,v:Ae},i=Ia.get(n.config.apiHost);i&&(r.eid=i);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${Ce(r).slice(1)}`}async function Sa(n){const e=await va(n),t=z().gapi;return x(t,n,"internal-error"),e.open({where:document.body,url:Ea(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ka,dontclear:!0},r=>new Promise(async(i,a)=>{await r.restyle({setHideOnLeave:!1});const o=W(n,"network-request-failed"),c=z().setTimeout(()=>{a(o)},wa.get());function l(){z().clearTimeout(c),i(r)}r.ping(l).then(l,()=>{a(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ta=500,ja=600,Pa="_blank",Aa="http://localhost";class on{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ca(n,e,t,r=Ta,i=ja){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Na),{width:r.toString(),height:i.toString(),top:a,left:o}),d=R().toLowerCase();t&&(c=zn(d)?Pa:t),Fn(d)&&(e=e||Aa,l.scrollbars="yes");const f=Object.entries(l).reduce((w,[v,_])=>`${w}${v}=${_},`,"");if(rs(d)&&c!=="_self")return Ra(e||"",c),new on(null);const h=window.open(e||"",c,f);x(h,n,"popup-blocked");try{h.focus()}catch{}return new on(h)}function Ra(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma="__/auth/handler",Oa="emulator/auth/handler",Da=encodeURIComponent("fac");async function cn(n,e,t,r,i,a){x(n.config.authDomain,n,"auth-domain-config-required"),x(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Ae,eventId:i};if(e instanceof Yn){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Rr(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,h]of Object.entries({}))o[f]=h}if(e instanceof Me){const f=e.getScopes().filter(h=>h!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await n._getAppCheckToken(),d=l?`#${Da}=${encodeURIComponent(l)}`:"";return`${La(n)}?${Ce(c).slice(1)}${d}`}function La({config:n}){return n.emulator?_t(n,Oa):`https://${n.authDomain}/${Ma}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct="webStorageSupport";class Ua{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rr,this._completeRedirectFn=ca,this._overrideRedirectResult=sa}async _openPopup(e,t,r,i){var a;J((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const o=await cn(e,t,r,mt(),i);return Ca(e,o,Nt())}async _openRedirect(e,t,r,i){await this._originValidation(e);const a=await cn(e,t,r,mt(),i);return zs(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:a}=this.eventManagers[t];return i?Promise.resolve(i):(J(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Sa(e),r=new da(e);return t.register("authEvent",i=>(x(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ct,{type:ct},i=>{var a;const o=(a=i==null?void 0:i[0])===null||a===void 0?void 0:a[ct];o!==void 0&&t(!!o),D(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=pa(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return qn()||Wn()||It()}}const Fa=Ua;var ln="@firebase/auth",dn="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ha(n){At(new Ct("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;x(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$n(n)},d=new ls(r,i,a,l);return bs(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),At(new Ct("auth-internal",e=>{const t=ye(e.getProvider("auth").getImmediate());return(r=>new Wa(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rt(ln,dn,za(n)),Rt(ln,dn,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba=5*60,Va=fn("authIdTokenMaxAge")||Ba;let un=null;const Ka=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Va)return;const i=t==null?void 0:t.token;un!==i&&(un=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function qa(n=Pr()){const e=gn(n,"auth");if(e.isInitialized())return e.getImmediate();const t=xs(n,{popupRedirectResolver:Fa,persistence:[Ys,Us,rr]}),r=fn("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const o=Ka(a.toString());Os(t,o,()=>o(t.currentUser)),Ms(t,c=>o(c))}}const i=jr("auth");return i&&vs(t,`http://${i}`),t}function $a(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}ds({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const a=W("internal-error");a.customData=i,t(a)},r.type="text/javascript",r.charset="UTF-8",$a().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ha("Browser");const Ga={apiKey:"AIzaSyCVuLt773djuu5QVt4epbzUFN57Bo8M9Fg",authDomain:"egmondbelegung.firebaseapp.com",projectId:"egmondbelegung",storageBucket:"egmondbelegung.firebasestorage.app",messagingSenderId:"874294620175",appId:"1:874294620175:web:443b7d6d6db0313eed337a"},dr=Or(Ga),O=Dr(dr),po=qa(dr),Ue="occupancy",Fe="bookingDetails",Ja=["note","email","phone","message"];function Ya(n,e){const[t,r,i]=n.startDate.split(".").map(Number),[a,o,c]=e.startDate.split(".").map(Number);return new Date(i,r-1,t)-new Date(c,o-1,a)}function Za(n=!1){const[e,t]=b.useState([]),[r,i]=b.useState(null),[a,o]=b.useState(!0),[c,l]=b.useState(null);b.useEffect(()=>lt(Te(O,Ue),_=>{const k=_.docs.map(y=>({id:y.id,...y.data()}));k.sort(Ya),t(k),o(!1),l(null)},_=>{console.error("useOccupancy:",_.message),o(!1),l("Belegungsdaten konnten nicht geladen werden.")}),[]),b.useEffect(()=>n?lt(Te(O,Fe),_=>{const k={};_.docs.forEach(y=>{k[y.id]=y.data()}),i(k)},_=>{console.error("useOccupancy details:",_.message),i({})}):void 0,[n]);const d=b.useMemo(()=>r?e.map(v=>r[v.id]?{...v,...r[v.id]}:v):e,[e,r]);async function f(v,_,k="",y="",u="",E=""){const j=await bn(Te(O,Ue),{startDate:v,endDate:_,createdAt:vn()});(k||y||u||E)&&await Mt(ce(O,Fe,j.id),{note:k,email:y,phone:u,message:E})}async function h(v){await dt(ce(O,Ue,v)),await dt(ce(O,Fe,v))}async function w(v,_){const k={},y={};for(const[u,E]of Object.entries(_))(Ja.includes(u)?y:k)[u]=E;Object.keys(k).length&&await xn(ce(O,Ue,v),k),Object.keys(y).length&&await Mt(ce(O,Fe,v),y,{merge:!0})}return{occupancy:d,loading:a,error:c,addOccupancy:f,removeOccupancy:h,updateOccupancyEntry:w}}const We="inquiries";function Xa(n=!1){const[e,t]=b.useState([]),[r,i]=b.useState(n),[a,o]=b.useState(null);b.useEffect(()=>n?lt(Te(O,We),h=>{const w=h.docs.map(v=>({id:v.id,...v.data()}));w.sort((v,_)=>{var u,E;const k=((u=v.createdAt)==null?void 0:u.seconds)||0;return(((E=_.createdAt)==null?void 0:E.seconds)||0)-k}),t(w),i(!1),o(null)},h=>{console.error("useInquiries:",h.message),i(!1),o("Anfragen konnten nicht geladen werden.")}):void 0,[n]);async function c(f){await bn(Te(O,We),{...f,status:"neu",createdAt:vn()})}async function l(f,h){await xn(ce(O,We,f),{status:h})}async function d(f){await dt(ce(O,We,f))}return{inquiries:e,loading:r,error:a,addInquiry:c,updateInquiryStatus:l,deleteInquiry:d}}function Qa(){const{occupancy:n,error:e}=Za(),{addInquiry:t}=Xa(),[r,i]=b.useState(!1),[a,o]=b.useState(!1),[c,l]=b.useState(!1),[d,f]=b.useState(null),[h,w]=b.useState(null),[v,_]=b.useState(null);function k(){f(h||new Date),i(!0)}function y({arrival:u,departure:E}){w(u),_(E)}return s.jsxs("div",{className:"min-h-screen bg-warm",children:[s.jsx(qr,{onInfoClick:()=>l(!0)}),e&&s.jsx("div",{className:"px-6 py-2 bg-primary/10 border-b border-primary/20 text-center text-sm text-primary",children:"Belegungsdaten konnten nicht geladen werden. Bitte Seite neu laden."}),s.jsx(Ei,{arrival:h,departure:v,onOpenDatePicker:k,onOpenCalendar:()=>o(!0)}),s.jsx(Ai,{occupancy:n,isOpen:a,onClose:()=>o(!1),onSelect:y}),s.jsxs("section",{className:"px-6 pt-4 pb-3 md:px-12 lg:px-20 max-w-7xl mx-auto border-t border-border mt-1",children:[s.jsx("div",{className:"flex flex-wrap gap-2 mb-3",children:[{icon:"🛏️",label:"4 Betten"},{icon:"🚪",label:"1 Schlafzimmer"},{icon:"☀️",label:"Südbalkon · Dünenblick"},{icon:"🌊",label:"Westbalkon · Meerblick"}].map(({icon:u,label:E})=>s.jsxs("span",{className:"flex items-center gap-1.5 px-2.5 py-1 bg-offwhite border border-border rounded-full text-xs text-anthracite/60 whitespace-nowrap",children:[s.jsx("span",{children:u}),E]},E))}),s.jsx("p",{className:"text-anthracite/70 text-sm md:text-base leading-relaxed max-w-3xl",children:"Zwei Balkone, zwei Aussichten: nach Süden der unverbaute Blick in die Dünen, nach Westen das offene Meer. Die Wohnung in der zweiten Etage bietet Platz für bis zu vier Personen — mit einem eigenen Schlafzimmer und zwei komfortablen Ausziehbetten im Wohnzimmer."})]}),s.jsx(Ri,{}),s.jsx("div",{className:"px-6 pt-2 pb-2 md:px-12 lg:px-20 max-w-7xl mx-auto",children:s.jsxs("button",{onClick:()=>l(!0),className:"group w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl border border-gold/30 bg-offwhite hover:border-gold/50 hover:shadow-sm transition-all text-anthracite/50 hover:text-anthracite/70 text-sm font-medium",children:[s.jsx(_n,{className:"w-5 h-5 text-gold group-hover:scale-110 transition-transform"}),"Informationen zur Wohnung und Anreise"]})}),s.jsx(Di,{arrival:h,departure:v,onOpenDatePicker:k,onSubmit:t}),s.jsx(Li,{}),s.jsx(Ci,{isOpen:c,onClose:()=>l(!1)}),s.jsx(Oi,{isOpen:r,onClose:()=>i(!1),occupancy:n,initialDate:d,onSelect:y})]})}function eo(){return s.jsxs("div",{className:"min-h-screen bg-warm print:bg-white",children:[s.jsx("div",{className:"bg-anthracite text-white px-6 py-5 no-print",children:s.jsxs("div",{className:"max-w-2xl mx-auto flex items-center justify-between",children:[s.jsx("span",{className:"font-serif text-lg",children:"Egmond aan Zee — Informationen"}),s.jsxs("div",{className:"flex gap-4 text-sm text-white/60",children:[s.jsx("button",{onClick:()=>window.print(),className:"hover:text-white transition-colors",children:"Drucken"}),s.jsx("a",{href:"#/",className:"hover:text-white transition-colors",children:"← Zur Startseite"})]})]})}),s.jsxs("div",{className:"max-w-2xl mx-auto px-6 py-10 space-y-6 print:py-4 print:space-y-4",children:[s.jsxs("div",{className:"print:mb-6",children:[s.jsx("h1",{className:"font-serif text-3xl text-anthracite",children:"Zu Wohnung und Anreise"}),s.jsx("p",{className:"text-anthracite/60 mt-2 text-sm leading-relaxed",children:"Alle Infos für Euren Aufenthalt auf einen Blick."})]}),s.jsxs(me,{icon:"🏡",title:"Die Wohnung",children:[s.jsxs("p",{children:["Die Ferienwohnung liegt in der ",s.jsx("strong",{children:"2. Etage"})," des Hauses am Kennedyboulevard und bietet Platz für bis zu ",s.jsx("strong",{children:"4 Personen"}),"."]}),s.jsxs(F,{icon:"🛏️",label:"Schlafzimmer",children:["1 Schlafzimmer mit 2 Einzelbetten. Im großen Wohnzimmer befinden sich zwei weitere ",s.jsx("strong",{children:"Ausziehbetten"})," unter der Sitzlandschaft — Decken & Kissen in den Bettkästen."]}),s.jsxs(F,{icon:"☀️",label:"Balkon",children:["Der ",s.jsx("strong",{children:"Südbalkon"})," bietet einen unverbauten Blick in die Dünen. Nach Westen geht der Blick direkt aufs Meer. Die elektrische Markise lässt sich mit der Fernbedienung (Regal links) ausfahren — Stecker an der Balkontür anschalten."]}),s.jsx(F,{icon:"📐",label:"Lage",children:'2. Etage, Eingang links nahe der Garage — Türschild „Kimmeskamp".'})]}),s.jsxs(me,{icon:"📍",title:"Adresse",children:[s.jsx("p",{className:"font-medium",children:"Kennedyboulevard 604"}),s.jsx("p",{children:"1931 XM Egmond aan Zee"}),s.jsx("a",{href:"https://maps.google.com/?q=Kennedyboulevard+604,+1931+XM+Egmond+aan+Zee",target:"_blank",rel:"noopener noreferrer",className:"inline-block mt-2 text-sm text-primary hover:underline no-print",children:"🗺️ In Google Maps öffnen"}),s.jsx("p",{className:"print-only hidden text-xs mt-1 text-anthracite/60",children:"maps.google.com → Kennedyboulevard 604, Egmond aan Zee"})]}),s.jsxs(me,{icon:"🚗",title:"Anreise & Eingang",children:[s.jsx(F,{icon:"🅿️",label:"Parken",children:"Am Südende des Innenhofs. Vorletzte Garage rechts – Nummer 21."}),s.jsx(F,{icon:"🚪",label:"Eingang",children:'Eingangstür links nahe der Garage. Dann 2. Etage links – Türschild „Kimmeskamp".'})]}),s.jsxs(me,{icon:"🏠",title:"Zur Wohnung",children:[s.jsx(F,{icon:"🔄",label:"Check-in / Check-out",children:"Wechsel ab 12 Uhr (oder nach Absprache). Abreise bis 12 Uhr, Anreise ab 12 Uhr – so ist ein Mieterwechsel am selben Tag möglich."}),s.jsx(F,{icon:"🧺",label:"Bettzeug",children:"Bettzeug und Handtücher nicht vergessen."}),s.jsx(F,{icon:"☀️",label:"Markise",children:"Elektrisch – Stecker an der Balkontür anschalten. Fernbedienung im Regal der Sitzlandschaft ganz links. Bei Windgefahr unbedingt einfahren!"}),s.jsx(F,{icon:"🗑️",label:"Müll",children:"Für den Restmüll den Abfallpass im Flurregal nutzen. Die Gebühren übernehmen wir – achtet bitte dennoch auf die Kosten pro Einwurf: 30L-Sack ca. 0,55 € · 60L-Sack ca. 1,10 €. Papier, Glas und Plastik (PMD) an den Sammelstellen kostenfrei."}),s.jsx(F,{icon:"🧹",label:"Endreinigung",children:"Bitte die Wohnung gereinigt übergeben – so wie Ihr sie gerne vorfinden würdet. Eine Endreinigung kann für ca. 70 € (Stand 2025) über die Hausmeister dazu gebucht werden."})]}),s.jsx(me,{icon:"✅",title:"Bei Ankunft",children:s.jsx(hn,{items:[{icon:"🔌",text:"Kühlschränke einstecken"},{icon:"🔥",text:"Gas aufdrehen – rechts neben dem Herd"},{icon:"🌡️",text:"Heizung auf Temperatur"},{icon:"💧",text:"Wasserhahn für Spülmaschine aufdrehen – hinter dem Kühlschrank"}]})}),s.jsx(me,{icon:"🚪",title:"Bei Abfahrt",children:s.jsx(hn,{items:[{icon:"🔌",text:"Kühlschränke ausstecken & öffnen"},{icon:"💧",text:"Wasserhahn für Spülmaschine zudrehen"},{icon:"❄️",text:"Heizung auf Schneeflocke"},{icon:"🔥",text:"Gas ausschalten"},{icon:"🚪",text:"Zwischentür zuziehen"},{icon:"🚿",text:"Bad & WC offen lassen"}]})}),s.jsx("p",{className:"text-center text-xs text-anthracite/40 pt-4 no-print",children:"Fragen? Einfach melden — wir helfen gerne."})]})]})}function me({icon:n,title:e,children:t}){return s.jsxs("div",{className:"bg-offwhite border border-border rounded-xl p-5 print:border-anthracite/20 print:rounded-none print:border print:p-3",children:[s.jsxs("h2",{className:"font-serif text-lg text-anthracite mb-3 flex items-center gap-2",children:[s.jsx("span",{children:n})," ",e]}),s.jsx("div",{className:"space-y-3 text-sm text-anthracite/80 leading-relaxed",children:t})]})}function F({icon:n,label:e,children:t}){return s.jsxs("div",{className:"flex gap-3",children:[s.jsx("span",{className:"text-base shrink-0 mt-0.5",children:n}),s.jsxs("div",{children:[s.jsxs("span",{className:"font-medium text-anthracite",children:[e,": "]}),t]})]})}function hn({items:n}){return s.jsx("ul",{className:"space-y-2",children:n.map((e,t)=>s.jsxs("li",{className:"flex items-start gap-3",children:[s.jsx("span",{className:"text-base shrink-0",children:e.icon}),s.jsx("span",{children:e.text})]},t))})}class to extends b.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,t){console.error("ErrorBoundary caught:",e,t.componentStack)}render(){return this.state.hasError?s.jsx("div",{className:"min-h-screen bg-warm flex items-center justify-center p-6",children:s.jsxs("div",{className:"bg-white rounded-xl border border-border p-8 max-w-md text-center",children:[s.jsx("p",{className:"font-serif text-lg text-anthracite mb-2",children:"Etwas ist schiefgelaufen"}),s.jsx("p",{className:"text-sm text-anthracite/60 mb-5",children:"Bitte laden Sie die Seite neu."}),s.jsx("button",{onClick:()=>window.location.reload(),className:"px-6 py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-lg transition-colors",children:"Seite neu laden"})]})}):this.props.children}}const no=b.lazy(()=>Kr(()=>import("./AdminPage-C2v2XHCI.js"),__vite__mapDeps([0,1,2,3])));function ro(){return s.jsx(to,{children:s.jsx(hr,{children:s.jsxs(mr,{children:[s.jsx(it,{path:"/",element:s.jsx(Qa,{})}),s.jsx(it,{path:"/info",element:s.jsx(eo,{})}),s.jsx(it,{path:"/admin/*",element:s.jsx(b.Suspense,{fallback:s.jsx("div",{className:"min-h-screen bg-warm flex items-center justify-center text-anthracite/50 text-sm",children:"Laden..."}),children:s.jsx(no,{})})})]})})})}ut.createRoot(document.getElementById("root")).render(s.jsx(fr.StrictMode,{children:s.jsx(ro,{})}));export{jn as C,_e as E,le as M,po as a,fo as b,co as c,Ut as d,_i as e,oe as f,ze as g,Tn as h,Bt as i,s as j,Za as k,Xa as l,mo as o,se as p,lo as r,uo as s,ho as u};
