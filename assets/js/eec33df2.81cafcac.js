"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[74766],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),d=o,y=c["".concat(s,".").concat(d)]||c[d]||g[d]||a;return t?r.createElement(y,l(l({ref:n},u),{},{components:t})):r.createElement(y,l({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},338906:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=t(58168),o=(t(296540),t(15680));const a={title:"Log Action",language:"en"},l=void 0,i={unversionedId:"admin-manual/fe/log-action",id:"version-2.0/admin-manual/fe/log-action",title:"Log Action",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/admin-manual/fe/log-action.md",sourceDirName:"admin-manual/fe",slug:"/admin-manual/fe/log-action",permalink:"/docs/2.0/admin-manual/fe/log-action",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Log Action",language:"en"},sidebar:"docs",previous:{title:"Help Action",permalink:"/docs/2.0/admin-manual/fe/help-action"},next:{title:"Login Action",permalink:"/docs/2.0/admin-manual/fe/login-action"}},s={},p=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2}],u={toc:p},c="wrapper";function g(e){let{components:n,...t}=e;return(0,o.yg)(c,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"log-action"},"Log Action"),(0,o.yg)("h2",{id:"request"},"Request"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"GET /rest/v1/log\n")),(0,o.yg)("h2",{id:"description"},"Description"),(0,o.yg)("p",null,"GET is used to obtain the latest part of Doris's WARNING log, and the POST method is used to dynamically set the log level of FE."),(0,o.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,o.yg)("p",null,"None"),(0,o.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"add_verbose")),(0,o.yg)("p",{parentName:"li"},"  Optional parameters for the POST method. Enable the DEBUG level log of the specified package.\n")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"del_verbose")),(0,o.yg)("p",{parentName:"li"},"  Optional parameters for the POST method. Turn off the DEBUG level log of the specified package.\n"))),(0,o.yg)("h2",{id:"request-body"},"Request body"),(0,o.yg)("p",null,"None"),(0,o.yg)("h2",{id:"response"},"Response"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'GET /rest/v1/log\n\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "LogContents": {\n            "logPath": "/home/disk1/cmy/git/doris/core-for-ui/output/fe/log/fe.warn.log",\n            "log": "<pre>2020-08-26 15:54:30,081 WARN (UNKNOWN 10.81.85.89_9213_1597652404352(-1)|1) [Catalog.notifyNewFETypeTransfer():2356] notify new FE type transfer: UNKNOWN</br>2020-08-26 15:54:32,089 WARN (RepNode 10.81.85.89_9213_1597652404352(-1)|61) [Catalog.notifyNewFETypeTransfer():2356] notify new FE type transfer: MASTER</br>2020-08-26 15:54:35,121 WARN (stateListener|73) [Catalog.replayJournal():2510] replay journal cost too much time: 2975 replayedJournalId: 232383</br>2020-08-26 15:54:48,117 WARN (leaderCheckpointer|75) [Catalog.replayJournal():2510] replay journal cost too much time: 2812 replayedJournalId: 232383</br></pre>",\n            "showingLast": "603 bytes of log"\n        },\n        "LogConfiguration": {\n            "VerboseNames": "org",\n            "AuditNames": "slow_query,query",\n            "Level": "INFO"\n        }\n    },\n    "count": 0\n}  \n')),(0,o.yg)("p",null,"Among them, ",(0,o.yg)("inlineCode",{parentName:"p"},"data.LogContents.log")," means the log content in the latest part of ",(0,o.yg)("inlineCode",{parentName:"p"},"fe.warn.log"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'POST /rest/v1/log?add_verbose=org\n\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "LogConfiguration": {\n            "VerboseNames": "org",\n            "AuditNames": "slow_query,query",\n            "Level": "INFO"\n        }\n    },\n    "count": 0\n}\n')))}g.isMDXComponent=!0}}]);