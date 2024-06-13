"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[34977],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,y=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(y,s(s({ref:n},p),{},{components:t})):r.createElement(y,s({ref:n},p))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},659717:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const o={title:"System Action",language:"zh-CN"},s=void 0,i={unversionedId:"admin-manual/fe/system-action",id:"version-2.1/admin-manual/fe/system-action",title:"System Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/fe/system-action.md",sourceDirName:"admin-manual/fe",slug:"/admin-manual/fe/system-action",permalink:"/zh-CN/docs/admin-manual/fe/system-action",draft:!1,tags:[],version:"2.1",frontMatter:{title:"System Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Session Action",permalink:"/zh-CN/docs/admin-manual/fe/session-action"},next:{title:"Colocate Meta Action",permalink:"/zh-CN/docs/admin-manual/fe/colocate-meta-action"}},l={},c=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2}],p={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"request"},"Request"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"GET /rest/v1/system\n")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"System Action \u7528\u4e8e Doris \u5185\u7f6e\u7684 Proc \u7cfb\u7edf\u7684\u76f8\u5173\u4fe1\u606f\u3002"),(0,a.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"path")),(0,a.yg)("p",{parentName:"li"},"  \u53ef\u9009\u53c2\u6570\uff0c\u6307\u5b9a proc \u7684 path"))),(0,a.yg)("h2",{id:"request-body"},"Request body"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h2",{id:"response"},"Response"),(0,a.yg)("p",null,"\u4ee5 ",(0,a.yg)("inlineCode",{parentName:"p"},"/dbs/10003/10054/partitions/10053/10055")," \u4e3a\u4f8b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "href_columns": ["TabletId", "MetaUrl", "CompactionStatus"],\n        "column_names": ["TabletId", "ReplicaId", "BackendId", "SchemaHash", "Version", "VersionHash", "LstSuccessVersion", "LstSuccessVersionHash", "LstFailedVersion", "LstFailedVersionHash", "LstFailedTime", "DataSize", "RowCount", "State", "LstConsistencyCheckTime", "CheckVersion", "CheckVersionHash", "VersionCount", "PathHash", "MetaUrl", "CompactionStatus"],\n        "rows": [{\n            "SchemaHash": "1294206575",\n            "LstFailedTime": "\\\\N",\n            "LstFailedVersion": "-1",\n            "MetaUrl": "URL",\n            "__hrefPaths": ["http://192.168.100.100:8030/rest/v1/system?path=/dbs/10003/10054/partitions/10053/10055/10056", "http://192.168.100.100:8043/api/meta/header/10056", "http://192.168.100.100:8043/api/compaction/show?tablet_id=10056"],\n            "CheckVersionHash": "-1",\n            "ReplicaId": "10057",\n            "VersionHash": "4611804212003004639",\n            "LstConsistencyCheckTime": "\\\\N",\n            "LstSuccessVersionHash": "4611804212003004639",\n            "CheckVersion": "-1",\n            "Version": "6",\n            "VersionCount": "2",\n            "State": "NORMAL",\n            "BackendId": "10032",\n            "DataSize": "776",\n            "LstFailedVersionHash": "0",\n            "LstSuccessVersion": "6",\n            "CompactionStatus": "URL",\n            "TabletId": "10056",\n            "PathHash": "-3259732870068082628",\n            "RowCount": "21"\n        }]\n    },\n    "count": 1\n}\n')),(0,a.yg)("p",null,"\u5176\u4e2d data \u90e8\u5206\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"column_names")," \u662f\u8868\u5934\u4fe1\u606f\uff0c",(0,a.yg)("inlineCode",{parentName:"p"},"href_columns")," \u8868\u793a\u8868\u4e2d\u7684\u54ea\u4e9b\u5217\u662f\u8d85\u94fe\u63a5\u5217\u3002",(0,a.yg)("inlineCode",{parentName:"p"},"rows")," \u6570\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u8868\u793a\u4e00\u884c\u3002\u5176\u4e2d ",(0,a.yg)("inlineCode",{parentName:"p"},"__hrefPaths ")," \u4e0d\u662f\u8868\u6570\u636e\uff0c\u800c\u662f\u8d85\u94fe\u63a5\u5217\u7684\u94fe\u63a5 URL\uff0c\u548c ",(0,a.yg)("inlineCode",{parentName:"p"},"href_columns")," \u4e2d\u7684\u5217\u4e00\u4e00\u5bf9\u5e94\u3002"))}m.isMDXComponent=!0}}]);