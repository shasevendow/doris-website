"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[23311],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>m});var n=t(296540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),p=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(u.Provider,{value:r},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(t),d=a,m=s["".concat(u,".").concat(d)]||s[d]||y[d]||o;return t?n.createElement(m,i(i({ref:r},c),{},{components:t})):n.createElement(m,i({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},458367:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=t(58168),a=(t(296540),t(15680));const o={title:"Query Profile Action",language:"zh-CN"},i=void 0,l={unversionedId:"admin-manual/fe/query-profile-action-controller",id:"version-2.1/admin-manual/fe/query-profile-action-controller",title:"Query Profile Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/fe/query-profile-action-controller.md",sourceDirName:"admin-manual/fe",slug:"/admin-manual/fe/query-profile-action-controller",permalink:"/zh-CN/docs/admin-manual/fe/query-profile-action-controller",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Query Profile Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Logout Action",permalink:"/zh-CN/docs/admin-manual/fe/logout-action"},next:{title:"Session Action",permalink:"/zh-CN/docs/admin-manual/fe/session-action"}},u={},p=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2}],c={toc:p},s="wrapper";function y(e){let{components:r,...t}=e;return(0,a.yg)(s,(0,n.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"request"},"Request"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"GET /rest/v1/query_profile/<query_id>\n")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Query Profile Action \u7528\u4e8e\u83b7\u53d6 Query \u7684 profile"),(0,a.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"<query_id>")),(0,a.yg)("p",{parentName:"li"},"  \u53ef\u9009\u53c2\u6570\u3002\u5f53\u4e0d\u6307\u5b9a\u65f6\uff0c\u8fd4\u56de\u6700\u65b0\u7684 query \u5217\u8868\u3002\u5f53\u6307\u5b9a\u65f6\uff0c\u8fd4\u56de\u6307\u5b9a query \u7684 profile\u3002"))),(0,a.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h2",{id:"request-body"},"Request body"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h2",{id:"response"},"Response"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Not specify ",(0,a.yg)("inlineCode",{parentName:"p"},"<query_id>")),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'GET /rest/v1/query_profile/\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "href_column": ["Query ID"],\n        "column_names": ["Query ID", "User", "Default Db", "Sql Statement", "Query Type", "Start Time", "End Time", "Total", "Query State"],\n        "rows": [{\n            "User": "root",\n            "__hrefPath": ["/query_profile/d73a8a0b004f4b2f-b4829306441913da"],\n            "Query Type": "Query",\n            "Total": "5ms",\n            "Default Db": "default_cluster:db1",\n            "Sql Statement": "select * from tbl1",\n            "Query ID": "d73a8a0b004f4b2f-b4829306441913da",\n            "Start Time": "2020-09-03 10:07:54",\n            "Query State": "EOF",\n            "End Time": "2020-09-03 10:07:54"\n        }, {\n            "User": "root",\n            "__hrefPath": ["/query_profile/fd706dd066824c21-9d1a63af9f5cb50c"],\n            "Query Type": "Query",\n            "Total": "6ms",\n            "Default Db": "default_cluster:db1",\n            "Sql Statement": "select * from tbl1",\n            "Query ID": "fd706dd066824c21-9d1a63af9f5cb50c",\n            "Start Time": "2020-09-03 10:07:54",\n            "Query State": "EOF",\n            "End Time": "2020-09-03 10:07:54"\n        }]\n    },\n    "count": 3\n}\n')),(0,a.yg)("p",{parentName:"li"},"  The returned result is the same as ",(0,a.yg)("inlineCode",{parentName:"p"},"System Action"),", which is a table description.\n")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Specify ",(0,a.yg)("inlineCode",{parentName:"p"},"<query_id>")),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},'GET /rest/v1/query_profile/<query_id>\n\n{\n    "msg": "success",\n    "code": 0,\n    "data": "Query:</br>&nbsp;&nbsp;&nbsp;&nbsp;Summary:</br>...",\n    "count": 0\n}\n')),(0,a.yg)("p",{parentName:"li"},"  ",(0,a.yg)("inlineCode",{parentName:"p"},"data")," is the text content of the profile."))))}y.isMDXComponent=!0}}]);