"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[66096],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>y});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,y=c["".concat(s,".").concat(d)]||c[d]||u[d]||l;return n?a.createElement(y,i(i({ref:t},m),{},{components:n})):a.createElement(y,i({ref:t},m))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},135743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(58168),r=(n(296540),n(15680));const l={title:"SHOW-PARTITIONS",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-PARTITIONS",id:"version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-PARTITIONS",title:"SHOW-PARTITIONS",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-PARTITIONS.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-PARTITIONS",permalink:"/docs/sql-manual/sql-statements/Show-Statements/SHOW-PARTITIONS",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SHOW-PARTITIONS",language:"en"},sidebar:"docs",previous:{title:"SHOW-workload-GROUPS",permalink:"/docs/sql-manual/sql-statements/Show-Statements/SHOW-WORKLOAD-GROUPS"},next:{title:"SHOW-FRONTENDS",permalink:"/docs/sql-manual/sql-statements/Show-Statements/SHOW-FRONTENDS"}},s={},p=[{value:"SHOW-PARTITIONS",id:"show-partitions",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"show-partitions"},"SHOW-PARTITIONS"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"SHOW PARTITIONS"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"  This statement is used to display partition information for tables in Internal catalog or Hive Catalog"),(0,r.yg)("p",null,"grammar:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"  SHOW [TEMPORARY] PARTITIONS FROM [db_name.]table_name [WHERE] [ORDER BY] [LIMIT];\n")),(0,r.yg)("p",null,"illustrate:"),(0,r.yg)("p",null,"When used in Internal catalog:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Support the filtering of PartitionId, PartitionName, State, Buckets, ReplicationNum, LastConsistencyCheckTime and other columns"),(0,r.yg)("li",{parentName:"ol"},"TEMPORARY specifies to list temporary partitions")),(0,r.yg)("version",{since:"dev"},(0,r.yg)("p",null,"when used in Hive Catalog:\nWill return all partitions' name. Support multilevel partition table")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Display all non-temporary partition information of the specified table under the specified db")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"  SHOW PARTITIONS FROM example_db.table_name;\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Display all temporary partition information of the specified table under the specified db"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"SHOW TEMPORARY PARTITIONS FROM example_db.table_name;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Display the information of the specified non-temporary partition of the specified table under the specified db"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},' SHOW PARTITIONS FROM example_db.table_name WHERE PartitionName = "p1";\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Display the latest non-temporary partition information of the specified table under the specified db"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"SHOW PARTITIONS FROM example_db.table_name ORDER BY PartitionId DESC LIMIT 1;\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SHOW, PARTITIONS\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);