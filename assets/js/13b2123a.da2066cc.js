"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[568],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>k});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),c=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},s=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=c(r),u=a,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return r?n.createElement(k,l(l({ref:e},s),{},{components:r})):n.createElement(k,l({ref:e},s))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},26:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:4,title:"\ud83d\udc26 Flutter Version",description:"How to manage your Shorebird Flutter version"},l="Flutter Version Management",o={unversionedId:"flutter-version",id:"flutter-version",title:"\ud83d\udc26 Flutter Version",description:"How to manage your Shorebird Flutter version",source:"@site/docs/flutter-version.md",sourceDirName:".",slug:"/flutter-version",permalink:"/flutter-version",draft:!1,editUrl:"https://github.com/shorebirdtech/docs/tree/main/docs/flutter-version.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\ud83d\udc26 Flutter Version",description:"How to manage your Shorebird Flutter version"},sidebar:"tutorialSidebar",previous:{title:"\u2728 Codemagic",permalink:"/ci/codemagic"},next:{title:"\ud83d\udc65 Teams",permalink:"/teams"}},p={},c=[{value:"List Flutter Versions",id:"list-flutter-versions",level:2},{value:"Switch Flutter Versions",id:"switch-flutter-versions",level:2},{value:"Support Matrix",id:"support-matrix",level:2}],s={toc:c},d="wrapper";function m(t){let{components:e,...r}=t;return(0,a.kt)(d,(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"flutter-version-management"},"Flutter Version Management"),(0,a.kt)("p",null,"When Shorebird CLI is installed, it pulls down the latest stable version of Shorebird's Flutter.\nIn this section, we'll take a look at how to list and change the Flutter version used by Shorebird CLI."),(0,a.kt)("h2",{id:"list-flutter-versions"},"List Flutter Versions"),(0,a.kt)("p",null,"To list all supported Flutter versions, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"shorebird flutter versions list")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ shorebird flutter versions list\n\ud83d\udce6 Flutter Versions\n  3.13.5\n  3.13.4\n  3.13.3\n  3.13.2\n  3.13.1\n  3.13.0\n  3.10.7\n\u2713 3.10.6\n  3.10.5\n  3.10.4\n  3.10.3\n  3.10.2\n  3.10.1\n  3.10.0\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The current Flutter version used by your Shorebird CLI installation will be marked with a ",(0,a.kt)("inlineCode",{parentName:"p"},"\u2713"),".")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Another way to see the current Flutter version is by running ",(0,a.kt)("inlineCode",{parentName:"p"},"shorebird --version"),".")),(0,a.kt)("h2",{id:"switch-flutter-versions"},"Switch Flutter Versions"),(0,a.kt)("p",null,"To switch to a different Flutter version, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"shorebird flutter versions use <version>")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ shorebird flutter versions use 3.10.3\n\u2713 Fetching Flutter versions (21ms)\n\u2713 Installing Flutter 3.10.3 (11ms)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ shorebird flutter versions list\n\ud83d\udce6 Flutter Versions\n  3.13.5\n  3.13.4\n  3.13.3\n  3.13.2\n  3.13.1\n  3.13.0\n  3.10.7\n  3.10.6\n  3.10.5\n  3.10.4\n\u2713 3.10.3\n  3.10.2\n  3.10.1\n  3.10.0\n")),(0,a.kt)("p",null,"This will install and cache the corresponding revision of Flutter on your machine and switch to using that version as the default for all subsequent ",(0,a.kt)("inlineCode",{parentName:"p"},"shorebird")," commands."),(0,a.kt)("h2",{id:"support-matrix"},"Support Matrix"),(0,a.kt)("p",null,"At this time, not all functionality is supported for each Flutter version. Refer to the following table for the status of each feature across Flutter versions:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:"center"},"3.10.0"),(0,a.kt)("th",{parentName:"tr",align:"center"},"3.10.1"),(0,a.kt)("th",{parentName:"tr",align:"center"},"3.10.2"),(0,a.kt)("th",{parentName:"tr",align:"center"},"3.10.3"),(0,a.kt)("th",{parentName:"tr",align:"center"},"3.10.4"),(0,a.kt)("th",{parentName:"tr",align:"center"},"3.10.5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"3.10.6"),(0,a.kt)("th",{parentName:"tr",align:"center"},"3.10.7"),(0,a.kt)("th",{parentName:"tr",align:"center"},"3.13.0"),(0,a.kt)("th",{parentName:"tr",align:"center"},"3.13.1"),(0,a.kt)("th",{parentName:"tr",align:"center"},"3.13.2"),(0,a.kt)("th",{parentName:"tr",align:"center"},"3.13.3"),(0,a.kt)("th",{parentName:"tr",align:"center"},"3.13.4"),(0,a.kt)("th",{parentName:"tr",align:"center"},"3.13.5"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Android"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"iOS"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2717"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2717"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2717"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2717"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2717"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2717"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"package:shorebird_code_push"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2717"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2717"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2717"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2717"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2717"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2717"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Flavors"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Add to App"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2713")))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"We are working bringing all functionality to all currently supported Flutter versions. If there are older versions of Flutter which you need Shorebird to support, please ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/shorebirdtech/shorebird/issues/new/choose"},"let us know"),".")))}m.isMDXComponent=!0}}]);