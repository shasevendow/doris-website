"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[95095],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>y});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,y=d["".concat(o,".").concat(u)]||d[u]||m[u]||l;return a?n.createElement(y,i(i({ref:t},c),{},{components:a})):n.createElement(y,i({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},323953:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(58168),r=(a(296540),a(15680));const l={title:"ADMIN-SET-REPLICA-STATUS",language:"en"},i=void 0,s={unversionedId:"sql-manual/sql-statements/Database-Administration-Statements/ADMIN-SET-REPLICA-STATUS",id:"version-2.1/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-SET-REPLICA-STATUS",title:"ADMIN-SET-REPLICA-STATUS",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-SET-REPLICA-STATUS.md",sourceDirName:"sql-manual/sql-statements/Database-Administration-Statements",slug:"/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-SET-REPLICA-STATUS",permalink:"/docs/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-SET-REPLICA-STATUS",draft:!1,tags:[],version:"2.1",frontMatter:{title:"ADMIN-SET-REPLICA-STATUS",language:"en"},sidebar:"docs",previous:{title:"UNINSTALL-PLUGIN",permalink:"/docs/sql-manual/sql-statements/Database-Administration-Statements/UNINSTALL-PLUGIN"},next:{title:"ADMIN-SET-REPLICA-VERSION",permalink:"/docs/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-SET-REPLICA-VERSION"}},o={},p=[{value:"ADMIN-SET-REPLICA-STATUS",id:"admin-set-replica-status",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"admin-set-replica-status"},"ADMIN-SET-REPLICA-STATUS"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"ADMIN SET REPLICA STATUS"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This statement is used to set the state of the specified replica."),(0,r.yg)("p",null,"This command is currently only used to manually set the status of certain replicas to BAD, DROP or OK, allowing the system to automatically repair these replicas"),(0,r.yg)("p",null,"grammar:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ADMIN SET REPLICA STATUS\n        PROPERTIES ("key" = "value", ...);\n')),(0,r.yg)("p",null," The following properties are currently supported:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},'"tablet_id": Required. Specify a Tablet Id.'),(0,r.yg)("li",{parentName:"ol"},'"backend_id": Required. Specify Backend Id.'),(0,r.yg)("li",{parentName:"ol"},'"status": Required. Specifies the state. Currently only "bad", "drop" or "ok" are supported')),(0,r.yg)("p",null,"If the specified replica does not exist, or the status is already bad, it will be ignored."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Note:"),(0,r.yg)("p",{parentName:"blockquote"},"A replica set to Bad, it will not be able to read or write. In addition, sometimes the setting may not working, when be report tablet ok, fe will auto change its status to ok. This operation may delete the replica immediately, so please operate with caution."),(0,r.yg)("p",{parentName:"blockquote"},"A replica set to Drop, it can still be read and written. A healthy replica will be added to other machines first, and then this replica will be deleted. Compared with setting Bad, setting Drop is safer.")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Set the replica status of tablet 10003 on BE 10001 to bad."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ADMIN SET REPLICA STATUS PROPERTIES("tablet_id" = "10003", "backend_id" = "10001", "status" = "bad");\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Set the replica status of tablet 10003 on BE 10001 to drop."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ADMIN SET REPLICA STATUS PROPERTIES("tablet_id" = "10003", "backend_id" = "10001", "status" = "drop");\n')))),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Set the replica status of tablet 10003 on BE 10001 to ok."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ADMIN SET REPLICA STATUS PROPERTIES("tablet_id" = "10003", "backend_id" = "10001", "status" = "ok");\n')))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"ADMIN, SET, REPLICA, STATUS\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);