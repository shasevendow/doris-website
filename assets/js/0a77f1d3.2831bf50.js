"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[64084],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var a=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,y=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return t?a.createElement(y,o(o({ref:n},u),{},{components:t})):a.createElement(y,o({ref:n},u))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},707358:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=t(58168),r=(t(296540),t(15680));const i={title:"SHOW-FUNCTIONS",language:"en"},o=void 0,l={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-FUNCTIONS",id:"sql-manual/sql-statements/Show-Statements/SHOW-FUNCTIONS",title:"SHOW-FUNCTIONS",description:"\x3c!--",source:"@site/docs/sql-manual/sql-statements/Show-Statements/SHOW-FUNCTIONS.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-FUNCTIONS",permalink:"/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-FUNCTIONS",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-FUNCTIONS",language:"en"},sidebar:"docs",previous:{title:"SHOW-ENCRYPT-KEY",permalink:"/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-ENCRYPT-KEY"},next:{title:"SHOW-TYPECAST",permalink:"/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-TYPECAST"}},s={},c=[{value:"SHOW-FUNCTIONS",id:"show-functions",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"show-functions"},"SHOW-FUNCTIONS"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"SHOW FUNCTIONS"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"View all custom (system-provided) functions under the database. If the user specifies a database, then view the corresponding database, otherwise directly query the database where the current session is located"),(0,r.yg)("p",null,"Requires ",(0,r.yg)("inlineCode",{parentName:"p"},"SHOW")," permission on this database"),(0,r.yg)("p",null,"grammar"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW [FULL] [BUILTIN] FUNCTIONS [IN|FROM db] [LIKE 'function_pattern']\n")),(0,r.yg)("p",null,"Parameters"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("inlineCode",{parentName:"p"},"full"),": Indicates the detailed information of the display function\n",(0,r.yg)("inlineCode",{parentName:"p"},"builtin"),": Indicates the functions provided by the display system\n",(0,r.yg)("inlineCode",{parentName:"p"},"db"),": database name to query\n",(0,r.yg)("inlineCode",{parentName:"p"},"function_pattern"),": parameter used to filter function names")),(0,r.yg)("p",null,"grammar"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW GLOBAL [FULL] FUNCTIONS [LIKE 'function_pattern']\n")),(0,r.yg)("p",null,"Parameters"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("inlineCode",{parentName:"p"},"global"),": Indicates it means that the show function is a global function\n",(0,r.yg)("inlineCode",{parentName:"p"},"full"),": Indicates the detailed information of the display function\n",(0,r.yg)("inlineCode",{parentName:"p"},"function_pattern"),": parameter used to filter function names")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},'Note: the "global" keyword is only available after v2.0')),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> show full functions in testDb\\G\n**************************** 1. row ******************** ******\n        Signature: my_add(INT,INT)\n      Return Type: INT\n    Function Type: Scalar\nIntermediate Type: NULL\n       Properties: {"symbol":"_ZN9doris_udf6AddUdfEPNS_15FunctionContextERKNS_6IntValES4_","object_file":"http://host:port/libudfsample.so","md5":"cfe7a362d10f3aaf6c49974ee0f1f878"}\n**************************** 2. row ******************** ******\n        Signature: my_count(BIGINT)\n      Return Type: BIGINT\n    Function Type: Aggregate\nIntermediate Type: NULL\n       Properties: { "object_file": "http: // host: port / libudasample.so", "finalize_fn": "_ZN9doris_udf13CountFinalizeEPNS_15FunctionContextERKNS_9BigIntValE", "init_fn": "_ZN9doris_udf9CountInitEPNS_15FunctionContextEPNS_9BigIntValE", "merge_fn": "_ZN9doris_udf10CountMergeEPNS_15FunctionContextERKNS_9BigIntValEPS2_", "md5": " 37d185f80f95569e2676da3d5b5b9d2f","update_fn":"_ZN9doris_udf11CountUpdateEPNS_15FunctionContextERKNS_6IntValEPNS_9BigIntValE"}\n**************************** 3. row ******************** ******\n        Signature: id_masking(BIGINT)\n      Return Type: VARCHAR\n    Function Type: Alias\nIntermediate Type: NULL\n       Properties: {"parameter":"id","origin_function":"concat(left(`id`, 3), `****`, right(`id`, 4))"}\n\n3 rows in set (0.00 sec)\nmysql> show builtin functions in testDb like \'year%\';\n+---------------+\n| Function Name |\n+---------------+\n| year          |\n| years_add     |\n| years_diff    |\n| years_sub     |\n+---------------+\n2 rows in set (0.00 sec)\n\nmysql> show global full functions\\G;\n*************************** 1. row ***************************\n        Signature: decimal(ALL, INT, INT)\n      Return Type: VARCHAR\n    Function Type: Alias\nIntermediate Type: NULL\n       Properties: {"parameter":"col, precision, scale","origin_function":"CAST(`col` AS decimal(`precision`, `scale`))"}\n*************************** 2. row ***************************\n        Signature: id_masking(BIGINT)\n      Return Type: VARCHAR\n    Function Type: Alias\nIntermediate Type: NULL\n       Properties: {"parameter":"id","origin_function":"concat(left(`id`, 3), `****`, right(`id`, 4))"}\n2 rows in set (0.00 sec)\n    \nmysql> show global functions ;\n+---------------+\n| Function Name |\n+---------------+\n| decimal       |\n| id_masking    |\n+---------------+\n2 rows in set (0.00 sec)    \n    \n')),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SHOW, FUNCTIONS\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}d.isMDXComponent=!0}}]);