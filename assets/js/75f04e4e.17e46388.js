"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[18221],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,y=m["".concat(o,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(y,i(i({ref:t},p),{},{components:n})):a.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},200786:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(58168),r=(n(296540),n(15680));const l={title:"KILL",language:"en"},i=void 0,s={unversionedId:"sql-manual/sql-statements/Database-Administration-Statements/KILL",id:"sql-manual/sql-statements/Database-Administration-Statements/KILL",title:"KILL",description:"\x3c!--",source:"@site/docs/sql-manual/sql-statements/Database-Administration-Statements/KILL.md",sourceDirName:"sql-manual/sql-statements/Database-Administration-Statements",slug:"/sql-manual/sql-statements/Database-Administration-Statements/KILL",permalink:"/docs/dev/sql-manual/sql-statements/Database-Administration-Statements/KILL",draft:!1,tags:[],version:"current",frontMatter:{title:"KILL",language:"en"},sidebar:"docs",previous:{title:"RECOVER",permalink:"/docs/dev/sql-manual/sql-statements/Database-Administration-Statements/RECOVER"},next:{title:"ADMIN-REBALANCE-DISK",permalink:"/docs/dev/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-REBALANCE-DISK"}},o={},c=[{value:"KILL",id:"kill",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"kill"},"KILL"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"KILL"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"Each Doris connection runs in a separate thread. You can kill a thread with the KILL processlist_id statement."),(0,r.yg)("p",null,"The thread process list identifier can be queried from the Id column output by SHOW PROCESSLIST or SELECT CONNECTION_ID() to query the current connection id."),(0,r.yg)("p",null,"grammar:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"KILL [CONNECTION] processlist_id\n")),(0,r.yg)("p",null,"In addition, you can also use processlist_id or query_id terminates the executing query command"),(0,r.yg)("p",null,"grammar:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"KILL QUERY processlist_id | query_id\n")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"View the connection id of the current connection.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select connection_id();\n+-----------------+\n| connection_id() |\n+-----------------+\n| 48              |\n+-----------------+\n1 row in set (0.00 sec)\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"View the connection ids of all connections.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> SHOW PROCESSLIST;\n+------------------+------+------+--------------------+---------------------+----------+---------+---------+------+-------+-----------------------------------+---------------------------------------------------------------------------------------+\n| CurrentConnected | Id   | User | Host               | LoginTime           | Catalog  | Db      | Command | Time | State | QueryId                           | Info                                                                                  |\n+------------------+------+------+--------------------+---------------------+----------+---------+---------+------+-------+-----------------------------------+---------------------------------------------------------------------------------------+\n| Yes              |   48 | root | 10.16.xx.xx:44834   | 2023-12-29 16:49:47 | internal | test | Query   |    0 | OK    | e6e4ce9567b04859-8eeab8d6b5513e38 | SHOW PROCESSLIST                                                                      |\n|                  |   50 | root | 192.168.xx.xx:52837 | 2023-12-29 16:51:34 | internal |      | Sleep   | 1837 | EOF   | deaf13c52b3b4a3b-b25e8254b50ff8cb | SELECT @@session.transaction_isolation                                                |\n|                  |   51 | root | 192.168.xx.xx:52843 | 2023-12-29 16:51:35 | internal |      | Sleep   |  907 | EOF   | 437f219addc0404f-9befe7f6acf9a700 | /* ApplicationName=DBeaver Ultimate 23.1.3 - Metadata */ SHOW STATUS                  |\n|                  |   55 | root | 192.168.xx.xx:55533 | 2023-12-29 17:09:32 | internal | test | Sleep   |  271 | EOF   | f02603dc163a4da3-beebbb5d1ced760c | /* ApplicationName=DBeaver Ultimate 23.1.3 - SQLEditor <Console> */ SELECT DATABASE() |\n|                  |   47 | root | 10.16.xx.xx:35678   | 2023-12-29 16:21:56 | internal | test | Sleep   | 3528 | EOF   | f4944c543dc34a99-b0d0f3986c8f1c98 | select * from test                                                                    |\n+------------------+------+------+--------------------+---------------------+----------+---------+---------+------+-------+-----------------------------------+---------------------------------------------------------------------------------------+\n5 rows in set (0.00 sec)\n")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Terminate the running query. The running query will appear canceled.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> kill query 55;\nQuery OK, 0 rows affected (0.01 sec)\n")),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"KILL\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);