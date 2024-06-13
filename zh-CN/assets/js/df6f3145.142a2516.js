"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[62268],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,y=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},909909:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const o={title:"Bootstrap Action",language:"zh-CN"},i=void 0,l={unversionedId:"admin-manual/fe/bootstrap-action",id:"admin-manual/fe/bootstrap-action",title:"Bootstrap Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/fe/bootstrap-action.md",sourceDirName:"admin-manual/fe",slug:"/admin-manual/fe/bootstrap-action",permalink:"/zh-CN/docs/dev/admin-manual/fe/bootstrap-action",draft:!1,tags:[],version:"current",frontMatter:{title:"Bootstrap Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Backends Action",permalink:"/zh-CN/docs/dev/admin-manual/fe/backends-action"},next:{title:"Cancel Load Action",permalink:"/zh-CN/docs/dev/admin-manual/fe/cancel-load-action"}},p={},c=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],u={toc:c},m="wrapper";function s(e){let{components:n,...t}=e;return(0,a.yg)(m,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"request"},"Request"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"GET /api/bootstrap")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"\u7528\u4e8e\u5224\u65ad FE \u662f\u5426\u542f\u52a8\u5b8c\u6210\u3002\u5f53\u4e0d\u63d0\u4f9b\u4efb\u4f55\u53c2\u6570\u65f6\uff0c\u4ec5\u8fd4\u56de\u662f\u5426\u542f\u52a8\u6210\u529f\u3002\u5982\u679c\u63d0\u4f9b\u4e86 ",(0,a.yg)("inlineCode",{parentName:"p"},"token")," \u548c ",(0,a.yg)("inlineCode",{parentName:"p"},"cluster_id"),"\uff0c\u5219\u8fd4\u56de\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,a.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"cluster_id")),(0,a.yg)("p",{parentName:"li"},"  \u96c6\u7fa4 id\u3002\u53ef\u4ee5\u5728 ",(0,a.yg)("inlineCode",{parentName:"p"},"doris-meta/image/VERSION")," \u6587\u4ef6\u4e2d\u67e5\u770b\u3002\n")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"token")),(0,a.yg)("p",{parentName:"li"},"  \u96c6\u7fa4 token\u3002\u53ef\u4ee5\u5728 ",(0,a.yg)("inlineCode",{parentName:"p"},"doris-meta/image/VERSION")," \u6587\u4ef6\u4e2d\u67e5\u770b\u3002"))),(0,a.yg)("h2",{id:"request-body"},"Request body"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h2",{id:"response"},"Response"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u4e0d\u63d0\u4f9b\u53c2\u6570"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'{\n    "msg": "OK",\n    "code": 0,\n    "data": null,\n    "count": 0\n}\n')),(0,a.yg)("p",{parentName:"li"},"  code \u4e3a 0 \u8868\u793a FE \u8282\u70b9\u542f\u52a8\u6210\u529f\u3002\u975e 0 \u7684\u9519\u8bef\u7801\u8868\u793a\u5176\u4ed6\u9519\u8bef\u3002\n")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u63d0\u4f9b ",(0,a.yg)("inlineCode",{parentName:"p"},"token")," \u548c ",(0,a.yg)("inlineCode",{parentName:"p"},"cluster_id")),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'{\n    "msg": "OK",\n    "code": 0,\n    "data": {\n        "queryPort": 9030,\n        "rpcPort": 9020,\n        "arrowFlightSqlPort": 9040,\n        "maxReplayedJournal": 17287\n    },\n    "count": 0\n}\n')),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"queryPort")," \u662f FE \u8282\u70b9\u7684 MySQL \u534f\u8bae\u7aef\u53e3\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"rpcPort")," \u662f FE \u8282\u70b9\u7684 thrift RPC \u7aef\u53e3\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"maxReplayedJournal")," \u8868\u793a FE \u8282\u70b9\u5f53\u524d\u56de\u653e\u7684\u6700\u5927\u5143\u6570\u636e\u65e5\u5fd7 id\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"arrowFlightSqlPort")," \u662f FE \u8282\u70b9\u7684 Arrow Flight SQL \u534f\u8bae\u7aef\u53e3\u3002")))),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u4e0d\u63d0\u4f9b\u53c2\u6570"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'GET /api/bootstrap\n\nResponse:\n{\n    "msg": "OK",\n    "code": 0,\n    "data": null,\n    "count": 0\n}\n'))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u63d0\u4f9b ",(0,a.yg)("inlineCode",{parentName:"p"},"token")," \u548c ",(0,a.yg)("inlineCode",{parentName:"p"},"cluster_id")),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'GET /api/bootstrap?cluster_id=935437471&token=ad87f6dd-c93f-4880-bcdb-8ca8c9ab3031\n\nResponse:\n{\n    "msg": "OK",\n    "code": 0,\n    "data": {\n        "queryPort": 9030,\n        "rpcPort": 9020,\n        "arrowFlightSqlPort": 9040,\n        "maxReplayedJournal": 17287\n    },\n    "count": 0\n}\n')))))}s.isMDXComponent=!0}}]);