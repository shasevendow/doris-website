"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[10708],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>y});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(a),m=r,y=p["".concat(d,".").concat(m)]||p[m]||c[m]||o;return a?n.createElement(y,i(i({ref:t},u),{},{components:a})):n.createElement(y,i({ref:t},u))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},687678:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(58168),r=(a(296540),a(15680));const o={title:"Updating Data with UPDATE Command",language:"en"},i=void 0,l={unversionedId:"data-operate/update/unique-update",id:"version-2.1/data-operate/update/unique-update",title:"Updating Data with UPDATE Command",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/data-operate/update/unique-update.md",sourceDirName:"data-operate/update",slug:"/data-operate/update/unique-update",permalink:"/docs/data-operate/update/unique-update",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Updating Data with UPDATE Command",language:"en"},sidebar:"docs",previous:{title:"Updating Overview",permalink:"/docs/data-operate/update/update-overview"},next:{title:"Updaing Data on Unique Key Model",permalink:"/docs/data-operate/update/update-of-unique-model"}},d={},s=[{value:"Use Cases",id:"use-cases",level:2},{value:"Basic Principles",id:"basic-principles",level:2},{value:"Synchronization",id:"synchronization",level:3},{value:"Performance",id:"performance",level:3},{value:"Example",id:"example",level:2},{value:"More Details",id:"more-details",level:2}],u={toc:s},p="wrapper";function c(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"The main topic is how to use the UPDATE command to update data in Doris. The UPDATE command can only be executed on tables in the Unique data model."),(0,r.yg)("h2",{id:"use-cases"},"Use Cases"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Modify the values of rows that meet certain conditions.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Suitable for updating a small amount of data that is not frequently updated."))),(0,r.yg)("h2",{id:"basic-principles"},"Basic Principles"),(0,r.yg)("p",null,"By utilizing the filtering logic of the query engine's WHERE clause, the UPDATE command selects the rows that need to be updated from the target table. Then, using the built-in logic of the Value column in the Unique model, the old data is replaced with the new data, and the updated rows are reinserted into the table, thus achieving row-level updates."),(0,r.yg)("h3",{id:"synchronization"},"Synchronization"),(0,r.yg)("p",null,"The UPDATE syntax in Doris is synchronous, meaning that when an UPDATE statement is executed successfully, the update operation is completed, and the data is immediately visible."),(0,r.yg)("h3",{id:"performance"},"Performance"),(0,r.yg)("p",null,"The performance of the UPDATE statement depends on the number of rows to be updated and the efficiency of the condition retrieval."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Number of rows to be updated: The more rows that need to be updated, the slower the UPDATE statement will be. The UPDATE command is suitable for scenarios where occasional updates are required, such as modifying values for individual rows. It is not suitable for bulk data modifications.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Efficiency of condition retrieval: The UPDATE operation reads the rows that satisfy the condition first. Therefore, if the condition retrieval is efficient, the UPDATE operation will be faster. It is recommended to have the condition column indexed or utilize partitioning and bucketing pruning to quickly locate the rows to be updated, thus improving the update efficiency. It is strongly advised not to include the value column in the condition column."))),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"Suppose there is an order table in Doris, where the order_id is the key column, and the order status and order amount are the Value columns. The data looks as follows:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"order_id"),(0,r.yg)("th",{parentName:"tr",align:null},"order_amount"),(0,r.yg)("th",{parentName:"tr",align:null},"order_status"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"100"),(0,r.yg)("td",{parentName:"tr",align:null},"Pending")))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"+----------+--------------+--------------+\n| order_id | order_amount | order_status |\n+----------+--------------+--------------+\n| 1        | 100          | Pending      |\n+----------+--------------+--------------+\n1 row in set (0.01 sec)\n")),(0,r.yg)("p",null,"Now, when a user clicks on the payment, the Doris system needs to update the order status of the order with ID '1' to 'To be shipped'. This requires using the UPDATE functionality."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> UPDATE test_order SET order_status = 'To be shipped' WHERE order_id = 1;\nQuery OK, 1 row affected (0.11 sec)\n{'label':'update_20ae22daf0354fe0-b5aceeaaddc666c5', 'status':'VISIBLE', 'txnId':'33', 'queryId':'20ae22daf0354fe0-b5aceeaaddc666c5'}\n")),(0,r.yg)("p",null,"The updated result is as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"+----------+--------------+--------------+\n| order_id | order_amount | order_status |\n+----------+--------------+--------------+\n| 1        | 100          | To be shipped|\n+----------+--------------+--------------+\n1 row in set (0.01 sec)\n")),(0,r.yg)("h2",{id:"more-details"},"More Details"),(0,r.yg)("p",null,"For more detailed syntax on data updates, please refer to the ",(0,r.yg)("a",{parentName:"p",href:"../../sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/UPDATE"},"UPDATE")," command manual. You can also enter ",(0,r.yg)("inlineCode",{parentName:"p"},"HELP UPDATE")," in the MySQL client command line for more information and assistance."))}c.isMDXComponent=!0}}]);