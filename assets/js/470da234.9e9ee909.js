"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[71844],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,y=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(y,l(l({ref:t},p),{},{components:n})):a.createElement(y,l({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},461905:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(58168),r=(n(296540),n(15680));const i={title:"Manually Trigger Compaction",language:"en"},l=void 0,o={unversionedId:"admin-manual/be/compaction-run",id:"version-2.1/admin-manual/be/compaction-run",title:"Manually Trigger Compaction",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/admin-manual/be/compaction-run.md",sourceDirName:"admin-manual/be",slug:"/admin-manual/be/compaction-run",permalink:"/docs/admin-manual/be/compaction-run",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Manually Trigger Compaction",language:"en"},sidebar:"docs",previous:{title:"View Compaction Status",permalink:"/docs/admin-manual/be/compaction-status"},next:{title:"View Meta",permalink:"/docs/admin-manual/be/meta"}},s={},u=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Trigger Compaction",id:"trigger-compaction",level:3},{value:"Show Status",id:"show-status",level:3},{value:"Examples",id:"examples",level:3}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"manually-trigger-compaction"},"Manually Trigger Compaction"),(0,r.yg)("h2",{id:"request"},"Request"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"POST /api/compaction/run?tablet_id={int}&compact_type={enum}"),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"POST /api/compaction/run?table_id={int}&compact_type=full")," Note that table_id=xxx will take effect only when compact_type=full is specified.\n",(0,r.yg)("inlineCode",{parentName:"p"},"GET /api/compaction/run_status?tablet_id={int}")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Used to manually trigger the comparison and show status."),(0,r.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"tablet_id")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"ID of the tablet"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"table_id")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"ID of table. Note that table_id=xxx will take effect only when compact_type=full is specified, and only one tablet_id and table_id can be specified, and cannot be specified at the same time. After specifying table_id, full_compaction will be automatically executed for all tablets under this table."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"compact_type")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"The value is ",(0,r.yg)("inlineCode",{parentName:"li"},"base")," or ",(0,r.yg)("inlineCode",{parentName:"li"},"cumulative")," or ",(0,r.yg)("inlineCode",{parentName:"li"},"full"),". For usage scenarios of full_compaction, please refer to ",(0,r.yg)("a",{parentName:"li",href:"../../data-admin/data-recovery.md"},"Data Recovery"),".")))),(0,r.yg)("h2",{id:"request-body"},"Request body"),(0,r.yg)("p",null,"None"),(0,r.yg)("h2",{id:"response"},"Response"),(0,r.yg)("h3",{id:"trigger-compaction"},"Trigger Compaction"),(0,r.yg)("p",null,"If the tablet does not exist, an error in JSON format is returned:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "status": "Fail",\n    "msg": "Tablet not found"\n}\n')),(0,r.yg)("p",null,"If the tablet exists and the tablet is not running, JSON format is returned:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "status": "Fail",\n    "msg": "fail to execute compaction, error = -2000"\n}\n')),(0,r.yg)("p",null,"If the tablet exists and the tablet is running, JSON format is returned:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "status": "Success",\n    "msg": "compaction task is successfully triggered."\n}\n')),(0,r.yg)("p",null,"Explanation of results:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"status: Trigger task status, when it is successfully triggered, it is Success; when for some reason (for example, the appropriate version is not obtained), it returns Fail."),(0,r.yg)("li",{parentName:"ul"},"msg: Give specific success or failure information.")),(0,r.yg)("h3",{id:"show-status"},"Show Status"),(0,r.yg)("p",null,"If the tablet does not exist, an error in JSON format is returned:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "status": "Fail",\n    "msg": "Tablet not found"\n}\n')),(0,r.yg)("p",null,"If the tablet exists and the tablet is not running, JSON format is returned:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "status" : "Success",\n    "run_status" : false,\n    "msg" : "this tablet_id is not running",\n    "tablet_id" : 11308,\n    "schema_hash" : 700967178,\n    "compact_type" : ""\n}\n')),(0,r.yg)("p",null,"If the tablet exists and the tablet is running, JSON format is returned:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "status" : "Success",\n    "run_status" : true,\n    "msg" : "this tablet_id is running",\n    "tablet_id" : 11308,\n    "schema_hash" : 700967178,\n    "compact_type" : "cumulative"\n}\n')),(0,r.yg)("p",null,"Explanation of results:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"run_status: Get the current manual compaction task execution status.")),(0,r.yg)("h3",{id:"examples"},"Examples"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'curl -X POST "http://127.0.0.1:8040/api/compaction/run?tablet_id=10015&compact_type=cumulative"\n')))}m.isMDXComponent=!0}}]);