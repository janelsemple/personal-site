"use strict";(self.webpackChunkJanel_Semple_Personal_Site=self.webpackChunkJanel_Semple_Personal_Site||[]).push([[883],{3286:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7294),a=n(1883),l=n(7160);var c=e=>{const{0:t,1:n}=(0,r.useState)(!1);return(0,r.useEffect)((()=>{n(window.innerWidth<=1025);const t=()=>{if(e.current){let t=e.current.scrollTop;const r=window.innerWidth<=1025&&t>0;n(r)}},r=()=>{var t;const r=window.innerWidth<=1025&&(null===(t=e.current)||void 0===t?void 0:t.scrollTop)>0;n(r)},a=e.current;return a&&a.addEventListener("scroll",t),window.addEventListener("resize",r),()=>{a&&a.removeEventListener("scroll",t),window.removeEventListener("resize",r)}}),[e]),t};var o=e=>{let{scrollContainerRef:t}=e;const n=c(t);return r.createElement(r.Fragment,null,r.createElement("header",{className:"header-module--header--a840d "+(n?"header-module--header-visible--adf61":"")},r.createElement("div",{className:"header-module--inner--e6eff"},r.createElement("div",null,"JS"),r.createElement("div",null,r.createElement(l.Z,null)))))},i=n(2151);var s=e=>{var t;let{children:n}=e;const l=(0,a.useStaticQuery)("3649515864"),c=(0,r.useRef)(null);return r.createElement(i.I,null,r.createElement("div",{ref:c,className:"mainDiv"},r.createElement(o,{siteTitle:(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",scrollContainerRef:c}),r.createElement("div",{className:"innerDiv"},r.createElement("main",null,n))))}},7160:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a=n(2151),l="navigation-module--navLink--84960",c="navigation-module--navLinkActive--3bd8d";var o=(e,t)=>{const{0:n,1:a}=(0,r.useState)("");return(0,r.useEffect)((()=>{const n=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&a(e.target.id)}))}),t);return e.forEach((e=>{const t=document.getElementById(e);t&&n.observe(t)})),()=>n.disconnect()}),[e,t]),n};var i=()=>{const{about:e,experience:t,projects:n,scrollToRef:i}=(0,r.useContext)(a.$),s=o(["about","experience","projects"],{threshold:.3});return r.createElement("div",{className:"navigation-module--navBar--abbbc"},r.createElement("span",{className:"about"===s?c:l,onClick:()=>i(e)},"About"),"·",r.createElement("span",{className:"experience"===s?c:l,onClick:()=>i(t)},"Experience"),"·",r.createElement("span",{className:"projects"===s?c:l,onClick:()=>i(n)},"Projects"))}},3785:function(e,t,n){var r=n(7294),a=n(1883);t.Z=function(e){var t,n;let{description:l,title:c,children:o}=e;const{site:i}=(0,a.useStaticQuery)("63159454"),s=l||i.siteMetadata.description,u=null===(t=i.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(r.Fragment,null,r.createElement("title",null,u?c+" | "+u:c),r.createElement("meta",{name:"description",content:s}),r.createElement("meta",{property:"og:title",content:c}),r.createElement("meta",{property:"og:description",content:s}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:creator",content:(null===(n=i.siteMetadata)||void 0===n?void 0:n.author)||""}),r.createElement("meta",{name:"twitter:title",content:c}),r.createElement("meta",{name:"twitter:description",content:s}),o)}},2151:function(e,t,n){n.d(t,{$:function(){return a},I:function(){return l}});var r=n(7294);const a=(0,r.createContext)(void 0),l=e=>{let{children:t}=e;const n=(0,r.useRef)(null),l=(0,r.useRef)(null),c=(0,r.useRef)(null),{0:o,1:i}=(0,r.useState)("");return r.createElement(a.Provider,{value:{about:n,experience:l,projects:c,scrollToRef:e=>{e.current.scrollIntoView({behavior:"smooth"})},currentView:o}},t)}},429:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c}});var r=n(7294),a=n(3286),l=n(3785);const c=()=>r.createElement(l.Z,{title:"404: Not Found"});t.default=()=>r.createElement(a.Z,null,r.createElement("h1",null,"404: Not Found"),r.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}}]);
//# sourceMappingURL=component---src-pages-404-js-1948953af37451897409.js.map