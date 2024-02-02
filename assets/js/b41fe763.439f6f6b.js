"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[396],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,b=p["".concat(l,".").concat(d)]||p[d]||h[d]||i;return r?n.createElement(b,a(a({ref:t},c),{},{components:r})):n.createElement(b,a({ref:t},c))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3505:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:8,title:"\ud83d\udc77 Status",description:"Status of the Shorebird project."},a=void 0,s={unversionedId:"status",id:"status",title:"\ud83d\udc77 Status",description:"Status of the Shorebird project.",source:"@site/docs/status.md",sourceDirName:".",slug:"/status",permalink:"/status",draft:!1,editUrl:"https://github.com/shorebirdtech/docs/tree/main/docs/status.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"\ud83d\udc77 Status",description:"Status of the Shorebird project."},sidebar:"tutorialSidebar",previous:{title:"\u2753 FAQ",permalink:"/faq"},next:{title:"\ud83c\udfdb\ufe0f Architecture",permalink:"/architecture"}},l={},u=[{value:"Stable",id:"stable",level:2},{value:"iOS Beta",id:"ios-beta",level:2},{value:"Common Feature Requests",id:"common-feature-requests",level:2}],c={toc:u},p="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"stable"},"Stable"),(0,o.kt)("p",null,"Shorebird is available on Android and iOS (alpha), with many apps shipping\nto the Play Store and App Store."),(0,o.kt)("p",null,'Our guiding principle has been "first, do no harm". It should be\nthe case that using Shorebird is never worse than not using Shorebird.'),(0,o.kt)("p",null,"We're working closely with our early customers and we would love to hear from\nyou. Shorebird operates publicly on ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/shorebird"},"Discord"),"\nevery day and we welcome your feedback. Filing\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/shorebirdtech/shorebird/issues"},"issues")," works well too."),(0,o.kt)("h2",{id:"ios-beta"},"iOS Beta"),(0,o.kt)("p",null,"Shorebird is currently Beta on iOS. Instructions for using Shorebird on\niOS are available in the ",(0,o.kt)("a",{parentName:"p",href:"/"},"Getting Started")," guide."),(0,o.kt)("p",null,"iOS is currently marked beta because some applications experiance a noticable\nslowdown after patching. We expect to have a solution to this problem in the next few months."),(0,o.kt)("h2",{id:"common-feature-requests"},"Common Feature Requests"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Patch signing (hashes are checked for download integrity) ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/shorebirdtech/shorebird/issues/112"},"issue")),(0,o.kt)("li",{parentName:"ul"},"Asset changes (images, icons, etc.) ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/shorebirdtech/shorebird/issues/318"},"issue"),(0,o.kt)("a",{parentName:"li",href:"https://github.com/shorebirdtech/shorebird/issues/1100"},"issue")),(0,o.kt)("li",{parentName:"ul"},"Manual rollbacks (automatic single-device rollbacks on errors already work) (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/shorebirdtech/shorebird/issues/126"},"issue"),")"),(0,o.kt)("li",{parentName:"ul"},"Staged rollout of patches (channels or percentage based) ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/shorebirdtech/shorebird/issues/110"},"issue")),(0,o.kt)("li",{parentName:"ul"},"Self-hosting or on-premises deployments ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/shorebirdtech/shorebird/issues/485"},"issue")),(0,o.kt)("li",{parentName:"ul"},'"Native code" changes (java, kotlin, etc.) -- not planned.')),(0,o.kt)("p",null,"If these, or anything else is blocking your use of Shorebird, please let us know!\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/shorebirdtech/shorebird/issues"},"https://github.com/shorebirdtech/shorebird/issues")))}h.isMDXComponent=!0}}]);