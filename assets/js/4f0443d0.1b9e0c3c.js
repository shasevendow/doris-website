"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[90474],{15680:(e,a,t)=>{t.d(a,{xA:()=>s,yg:()=>c});var l=t(296540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,l,r=function(e,a){if(null==e)return{};var t,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var n=l.createContext({}),u=function(e){var a=l.useContext(n),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},s=function(e){var a=u(e.components);return l.createElement(n.Provider,{value:a},e.children)},h="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},m=l.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,n=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),h=u(t),m=r,c=h["".concat(n,".").concat(m)]||h[m]||g[m]||o;return t?l.createElement(c,i(i({ref:a},s),{},{components:t})):l.createElement(c,i({ref:a},s))}));function c(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var p={};for(var n in a)hasOwnProperty.call(a,n)&&(p[n]=a[n]);p.originalType=e,p[h]="string"==typeof e?e:r,i[1]=p;for(var u=2;u<o;u++)i[u]=t[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},188280:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>n,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var l=t(58168),r=(t(296540),t(15680));const o={title:"Apache Doris 2.1.1 just released",description:"Dear community, Apache Doris 2.1.1 is now available, with several enhancements and bug fixes based on 2.1.0, enabling smoother user experience.",date:"2024-04-03",author:"Apache Doris",tags:["Release Notes"],image:"/images/2.1.1.png"},i=void 0,p={permalink:"/blog/release-note-2.1.1",source:"@site/blog/release-note-2.1.1.md",title:"Apache Doris 2.1.1 just released",description:"Dear community, Apache Doris 2.1.1 is now available, with several enhancements and bug fixes based on 2.1.0, enabling smoother user experience.",date:"2024-04-03T00:00:00.000Z",formattedDate:"April 3, 2024",tags:[{label:"Release Notes",permalink:"/blog/tags/release-notes"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Apache Doris 2.1.1 just released",description:"Dear community, Apache Doris 2.1.1 is now available, with several enhancements and bug fixes based on 2.1.0, enabling smoother user experience.",date:"2024-04-03",author:"Apache Doris",tags:["Release Notes"],image:"/images/2.1.1.png"},prevItem:{title:"Auto-increment columns in databases: a simple magic that makes a big difference",permalink:"/blog/auto-increment-columns-in-databases"},nextItem:{title:"Apache Doris 2.0.7 just released",permalink:"/blog/release-note-2.0.7"}},n={authorsImageUrls:[void 0]},u=[{value:"Behavior Changed",id:"behavior-changed",level:2},{value:"Upgrade Problem",id:"upgrade-problem",level:2},{value:"New Feature",id:"new-feature",level:2},{value:"Optimization",id:"optimization",level:2},{value:"Bugfix",id:"bugfix",level:2}],s={toc:u},h="wrapper";function g(e){let{components:a,...t}=e;return(0,r.yg)(h,(0,l.A)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Dear community members, Apache Doris 2.1.1 has been officially released on April 3, 2024, with several enhancements and bug fixes based on 2.1.0, enabling smoother user experience."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Quick Download:")," ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/download/"},"https://doris.apache.org/download/"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"GitHub\uff1a")," ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/releases"},"https://github.com/apache/doris/releases")))),(0,r.yg)("h2",{id:"behavior-changed"},"Behavior Changed"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Change float type output format to improve float type serialization performance.")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32049"},"https://github.com/apache/doris/pull/32049"))),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Change system table value functions active_queries(), workload_groups() to system tables. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32314"},"https://github.com/apache/doris/pull/32314"))),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Disable show query/load profile stmt because there are not so many developers use it and the pipeline and pipelinex engine not support it. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32467"},"https://github.com/apache/doris/pull/32467"))),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"Upgrade arrow flight version to 15.0.2 to fix some bugs, so that please use ADBC 15.0.2 version to access Doris. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32827"},"https://github.com/apache/doris/pull/32827"),".")),(0,r.yg)("h2",{id:"upgrade-problem"},"Upgrade Problem"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"BE will core when rolling pgrade problem from 2.0.x to 2.1.x.")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/32672"},"https://github.com/apache/doris/pull/32672"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/32444"},"https://github.com/apache/doris/pull/32444"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/32162"},"https://github.com/apache/doris/pull/32162")))),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"JDBC Catalog will have query errors when rolling grade rom 2.0.x to 2.1.x. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32618"},"https://github.com/apache/doris/pull/32618"))),(0,r.yg)("h2",{id:"new-feature"},"New Feature"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Enable column auth by default.")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32659"},"https://github.com/apache/doris/pull/32659"))),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Get correct cores for pipeline and pipelinex engine when running within docker or k8s. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32370"},"https://github.com/apache/doris/pull/32370"))),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Support read parquet int96 type. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32394"},"https://github.com/apache/doris/pull/32394"))),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"Enable proxy protocol to support IP transparency. Using this protocol, IP transparency for load balancing can be achieved, so that after load balancing, Doris can still obtain the client's real IP and implement permission control such as whitelisting. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32338/files"},"https://github.com/apache/doris/pull/32338/files"))),(0,r.yg)("ol",{start:5},(0,r.yg)("li",{parentName:"ol"},"Add workload group queue related columns for active_queries system table. Uses could use this system to monitor the workload queue usage. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32259"},"https://github.com/apache/doris/pull/32259"))),(0,r.yg)("ol",{start:6},(0,r.yg)("li",{parentName:"ol"},"Add new system table backend_active_tasks to monitor the realtime query statics on every BE. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31945"},"https://github.com/apache/doris/pull/31945"))),(0,r.yg)("ol",{start:7},(0,r.yg)("li",{parentName:"ol"},"Add ipv4 and ipv6 support for spark-doris connector. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32240"},"https://github.com/apache/doris/pull/32240"))),(0,r.yg)("ol",{start:8},(0,r.yg)("li",{parentName:"ol"},"Add inverted index support for CCR. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32101"},"https://github.com/apache/doris/pull/32101"))),(0,r.yg)("ol",{start:9},(0,r.yg)("li",{parentName:"ol"},"Support select experimental session variable. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31837"},"https://github.com/apache/doris/pull/31837"))),(0,r.yg)("ol",{start:10},(0,r.yg)("li",{parentName:"ol"},"Support materialized view with bitmap_union(bitmap_from_array()) case. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31962"},"https://github.com/apache/doris/pull/31962"))),(0,r.yg)("ol",{start:11},(0,r.yg)("li",{parentName:"ol"},"Support partition prune for ",(0,r.yg)("inlineCode",{parentName:"li"},"HIVE_DEFAULT_PARTITION"),". ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31736"},"https://github.com/apache/doris/pull/31736"))),(0,r.yg)("ol",{start:12},(0,r.yg)("li",{parentName:"ol"},"Support function in set variable statement. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32492"},"https://github.com/apache/doris/pull/32492"))),(0,r.yg)("ol",{start:13},(0,r.yg)("li",{parentName:"ol"},"Support arrow serialization for varint type. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32809"},"https://github.com/apache/doris/pull/32809"))),(0,r.yg)("h2",{id:"optimization"},"Optimization"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Auto resume routine load when be restart or during upgrade. And keep the routine load stable. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32239"},"https://github.com/apache/doris/pull/32239"))),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Routine Load: optimize allocate task to be algorithm for load balance. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32021"},"https://github.com/apache/doris/pull/32021"))),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Spark Load: update spark version for spark load to resolve cve problem. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/30368"},"https://github.com/apache/doris/pull/30368"))),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"Skip cooldown if the tablet is dropped. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32079"},"https://github.com/apache/doris/pull/32079"))),(0,r.yg)("ol",{start:5},(0,r.yg)("li",{parentName:"ol"},"Support using workload group to manage routine load. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31671"},"https://github.com/apache/doris/pull/31671"))),(0,r.yg)("ol",{start:6},(0,r.yg)("li",{parentName:"ol"},"[MTMV ]","Improve the performance for query rewritting by materialized view. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31886"},"https://github.com/apache/doris/pull/31886"))),(0,r.yg)("ol",{start:7},(0,r.yg)("li",{parentName:"ol"},"Reduce jvm heap memory consumed by profiles of BrokerLoadJob. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31985"},"https://github.com/apache/doris/pull/31985"))),(0,r.yg)("ol",{start:8},(0,r.yg)("li",{parentName:"ol"},"Imporve the high QPS query by speed up PartitionPrunner. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31970"},"https://github.com/apache/doris/pull/31970"))),(0,r.yg)("ol",{start:9},(0,r.yg)("li",{parentName:"ol"},"Reduce duplicated memory consumption for column name and column path for schema cache. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31141"},"https://github.com/apache/doris/pull/31141"))),(0,r.yg)("ol",{start:10},(0,r.yg)("li",{parentName:"ol"},"Support more join types for query rewriting by materialized view such as INNER JOIN, LEFT OUTER JOIN, RIGHT OUTER JOIN, FULL OUTER JOIN, LEFT SEMI JOIN, RIGHT SEMI JOIN, LEFT ANTI JOIN, RIGHT ANTI JOIN.")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32909"},"https://github.com/apache/doris/pull/32909"))),(0,r.yg)("h2",{id:"bugfix"},"Bugfix"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Do not push down topn-filter through right/full outer join if the first orderkey is nulls first. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32633"},"https://github.com/apache/doris/pull/32633"))),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Fix memory leak in Java UDF.")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32630"},"https://github.com/apache/doris/pull/32630"))),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"If some odbc tables use the same resource, and restore not all odbc tables, it will not retain the resource.\nand check some conf for backup/restore ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31989"},"https://github.com/apache/doris/pull/31989"))),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"Fold constant will core for variant type. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32265"},"https://github.com/apache/doris/pull/32265"))),(0,r.yg)("ol",{start:5},(0,r.yg)("li",{parentName:"ol"},"Routine load will pause when transaction fail in some cases. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32638"},"https://github.com/apache/doris/pull/32638"))),(0,r.yg)("ol",{start:6},(0,r.yg)("li",{parentName:"ol"},"the result of left semi join with empty right side should be false instead of null. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32477"},"https://github.com/apache/doris/pull/32477"))),(0,r.yg)("ol",{start:7},(0,r.yg)("li",{parentName:"ol"},"Fix core when build inverted index for a new column with no data. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32669"},"https://github.com/apache/doris/pull/32669"))),(0,r.yg)("ol",{start:8},(0,r.yg)("li",{parentName:"ol"},"Fix be core caused by null-safe-equal join. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32623"},"https://github.com/apache/doris/pull/32623"))),(0,r.yg)("ol",{start:9},(0,r.yg)("li",{parentName:"ol"},"Partial update: fix data correctness risk when load delete sign data into a table with sequence col. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32574"},"https://github.com/apache/doris/pull/32574"))),(0,r.yg)("ol",{start:10},(0,r.yg)("li",{parentName:"ol"},"Select outfile: Fix the column type mapping in the orc/parquet file format. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32281"},"https://github.com/apache/doris/pull/32281"))),(0,r.yg)("ol",{start:11},(0,r.yg)("li",{parentName:"ol"},"Fix BE core during restore stage. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32489"},"https://github.com/apache/doris/pull/32489"))),(0,r.yg)("ol",{start:12},(0,r.yg)("li",{parentName:"ol"},"Use array_agg func after other agg func like count, sum, may make be core. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32387"},"https://github.com/apache/doris/pull/32387"))),(0,r.yg)("ol",{start:13},(0,r.yg)("li",{parentName:"ol"},"Variant type should always nullable or there will some bugs. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32248"},"https://github.com/apache/doris/pull/32248"))),(0,r.yg)("ol",{start:14},(0,r.yg)("li",{parentName:"ol"},"Fix the bug of handling empty blocks in schema change. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32396"},"https://github.com/apache/doris/pull/32396"))),(0,r.yg)("ol",{start:15},(0,r.yg)("li",{parentName:"ol"},"Fix BE will core when use json_length() in some cases. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32145"},"https://github.com/apache/doris/pull/32145"))),(0,r.yg)("ol",{start:16},(0,r.yg)("li",{parentName:"ol"},"Fix error when query iceberg table using date cast predicate ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32194"},"https://github.com/apache/doris/pull/32194"))),(0,r.yg)("ol",{start:17},(0,r.yg)("li",{parentName:"ol"},"Fix some bugs when build inverted index for variant type. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31992"},"https://github.com/apache/doris/pull/31992"))),(0,r.yg)("ol",{start:18},(0,r.yg)("li",{parentName:"ol"},"Wrong result of two or more map_agg functions in query. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31928"},"https://github.com/apache/doris/pull/31928"))),(0,r.yg)("ol",{start:19},(0,r.yg)("li",{parentName:"ol"},"Fix wrong result of money_format function. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31883"},"https://github.com/apache/doris/pull/31883"))),(0,r.yg)("ol",{start:20},(0,r.yg)("li",{parentName:"ol"},"Fix connection hang after too many connections. ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31594"},"https://github.com/apache/doris/pull/31594"))))}g.isMDXComponent=!0}}]);