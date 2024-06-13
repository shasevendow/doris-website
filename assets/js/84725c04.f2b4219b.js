"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[86368],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var a=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),f=r,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||o;return t?a.createElement(m,l(l({ref:n},p),{},{components:t})):a.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=f;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},352204:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(58168),r=(t(296540),t(15680));const o={title:"CATALOGS",language:"en"},l=void 0,s={unversionedId:"sql-manual/sql-functions/table-functions/catalogs",id:"version-2.0/sql-manual/sql-functions/table-functions/catalogs",title:"CATALOGS",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/table-functions/catalogs.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/catalogs",permalink:"/docs/2.0/sql-manual/sql-functions/table-functions/catalogs",draft:!1,tags:[],version:"2.0",frontMatter:{title:"CATALOGS",language:"en"},sidebar:"docs",previous:{title:"WORKLOAD_GROUPS",permalink:"/docs/2.0/sql-manual/sql-functions/table-functions/workload-group"},next:{title:"frontends_disks",permalink:"/docs/2.0/sql-manual/sql-functions/table-functions/frontends_disks"}},i={},c=[{value:"<code>catalogs</code>",id:"catalogs",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"catalogs"},(0,r.yg)("inlineCode",{parentName:"h2"},"catalogs")),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"catalogs"),(0,r.yg)("h3",{id:"description"},"description"),(0,r.yg)("p",null,"The table function generates a temporary table of catalogs to view the information of the catalogs created in the current Doris."),(0,r.yg)("p",null,"This function is used in the from clause."),(0,r.yg)("h4",{id:"syntax"},"syntax"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"catalogs()")),(0,r.yg)("p",null,"Catalogs () table structure:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> desc function catalogs();\n+-------------+--------+------+-------+---------+-------+\n| Field       | Type   | Null | Key   | Default | Extra |\n+-------------+--------+------+-------+---------+-------+\n| CatalogId   | BIGINT | No   | false | NULL    | NONE  |\n| CatalogName | TEXT   | No   | false | NULL    | NONE  |\n| CatalogType | TEXT   | No   | false | NULL    | NONE  |\n| Property    | TEXT   | No   | false | NULL    | NONE  |\n| Value       | TEXT   | No   | false | NULL    | NONE  |\n+-------------+--------+------+-------+---------+-------+\n5 rows in set (0.04 sec)\n")),(0,r.yg)("p",null,"The information presented by ",(0,r.yg)("inlineCode",{parentName:"p"},"catalogs()")," tvf is the result of synthesizing ",(0,r.yg)("inlineCode",{parentName:"p"},"show catalogs")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"show catalog xxx")," statements."),(0,r.yg)("p",null,"The table generated by tvf can be used for filtering, join and other operations."),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> select * from catalogs();\n+-----------+-------------+-------------+--------------------------------------------+---------------------------------------------------------------------------+\n| CatalogId | CatalogName | CatalogType | Property                                   | Value                                                                     |\n+-----------+-------------+-------------+--------------------------------------------+---------------------------------------------------------------------------+\n|     16725 | hive        | hms         | dfs.client.failover.proxy.provider.HANN    | org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider |\n|     16725 | hive        | hms         | dfs.ha.namenodes.HANN                      | nn1,nn2                                                                   |\n|     16725 | hive        | hms         | create_time                                | 2023-07-13 16:24:38.968                                                   |\n|     16725 | hive        | hms         | ipc.client.fallback-to-simple-auth-allowed | true                                                                      |\n|     16725 | hive        | hms         | dfs.namenode.rpc-address.HANN.nn1          | nn1_host:rpc_port                                                         |\n|     16725 | hive        | hms         | hive.metastore.uris                        | thrift://127.0.0.1:7004                                                   |\n|     16725 | hive        | hms         | dfs.namenode.rpc-address.HANN.nn2          | nn2_host:rpc_port                                                         |\n|     16725 | hive        | hms         | type                                       | hms                                                                       |\n|     16725 | hive        | hms         | dfs.nameservices                           | HANN                                                                      |\n|         0 | internal    | internal    | NULL                                       | NULL                                                                      |\n|     16726 | es          | es          | create_time                                | 2023-07-13 16:24:44.922                                                   |\n|     16726 | es          | es          | type                                       | es                                                                        |\n|     16726 | es          | es          | hosts                                      | http://127.0.0.1:9200                                                     |\n+-----------+-------------+-------------+--------------------------------------------+---------------------------------------------------------------------------+\n13 rows in set (0.01 sec)\n")),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"catalogs\n")))}d.isMDXComponent=!0}}]);