"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[42143],{15680:(e,n,r)=>{r.d(n,{xA:()=>d,yg:()=>m});var t=r(296540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),u=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},d=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(r),f=o,m=c["".concat(l,".").concat(f)]||c[f]||p[f]||i;return r?t.createElement(m,a(a({ref:n},d),{},{components:r})):t.createElement(m,a({ref:n},d))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},198331:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var t=r(58168),o=(r(296540),r(15680));const i={title:"Be Version Info",language:"en"},a=void 0,s={unversionedId:"admin-manual/be/version-info",id:"version-2.1/admin-manual/be/version-info",title:"Be Version Info",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/admin-manual/be/version-info.md",sourceDirName:"admin-manual/be",slug:"/admin-manual/be/version-info",permalink:"/docs/admin-manual/be/version-info",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Be Version Info",language:"en"},sidebar:"docs",previous:{title:"Pad Rowset",permalink:"/docs/admin-manual/be/pad-rowset"},next:{title:"Check Alive",permalink:"/docs/admin-manual/be/health"}},l={},u=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],d={toc:u},c="wrapper";function p(e){let{components:n,...r}=e;return(0,o.yg)(c,(0,t.A)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"be-version-info"},"Be Version Info"),(0,o.yg)("h2",{id:"request"},"Request"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"GET /api/be_version_info")),(0,o.yg)("h2",{id:"description"},"Description"),(0,o.yg)("p",null,"Provide BE version info"),(0,o.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,o.yg)("p",null,"None"),(0,o.yg)("h2",{id:"request-body"},"Request body"),(0,o.yg)("p",null,"None"),(0,o.yg)("h2",{id:"response"},"Response"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'```\n{\n    "msg":"success",\n    "code":0,\n    "data":{\n        "beVersionInfo":{\n            "dorisBuildVersionPrefix":"doris",\n            "dorisBuildVersionMajor":0,\n            "dorisBuildVersionMinor":0,\n            "dorisBuildVersionPatch":0,\n            "dorisBuildVersionRcVersion":"trunk",\n            "dorisBuildVersion":"doris-0.0.0-trunk",\n            "dorisBuildHash":"git://4b7b503d1cb3/data/doris/doris/be/../@a04f9814fe5a09c0d9e9399fe71cc4d765f8bff1",\n            "dorisBuildShortHash":"a04f981",\n            "dorisBuildTime":"Fri, 09 Sep 2022 07:57:02 UTC",\n            "dorisBuildInfo":"root@4b7b503d1cb3"\n        }\n    },\n    "count":0\n}\n```\n')),(0,o.yg)("h2",{id:"examples"},"Examples"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"```\ncurl http://127.0.0.1:8040/api/be_version_info\n\n```\n")))}p.isMDXComponent=!0}}]);