"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[20356],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>f});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(f,s(s({ref:n},u),{},{components:t})):r.createElement(f,s({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},969663:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const o={title:"json_extract",language:"en"},s=void 0,i={unversionedId:"sql-manual/sql-functions/json-functions/json_extract",id:"version-1.2/sql-manual/sql-functions/json-functions/json_extract",title:"json_extract",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/json-functions/json_extract.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/json_extract",permalink:"/docs/1.2/sql-manual/sql-functions/json-functions/json_extract",draft:!1,tags:[],version:"1.2",frontMatter:{title:"json_extract",language:"en"},sidebar:"docs",previous:{title:"json_valid",permalink:"/docs/1.2/sql-manual/sql-functions/json-functions/json_valid"},next:{title:"murmur_hash3_32",permalink:"/docs/1.2/sql-manual/sql-functions/hash-functions/murmur_hash3_32"}},l={},c=[{value:"json_extract",id:"json_extract",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"json_extract"},"json_extract"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"VARCHAR json_extract(VARCHAR json_str, VARCHAR path[, VARCHAR path] ...))")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"json_extract")," function returns data from a JSON document, selected from the parts of the document matched by the ",(0,a.yg)("inlineCode",{parentName:"p"},"path")," arguments. Returns NULL if any argument is NULL or if the ",(0,a.yg)("inlineCode",{parentName:"p"},"json_str")," argument is not a valid JSON document. If the ",(0,a.yg)("inlineCode",{parentName:"p"},"path")," parameter is not a valid path (that is, the path does not appear in the JSON document), the corresponding item in the returned array is NULL (see example below)"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> SELECT json_extract('{\"id\": 123, \"name\": \"doris\"}', '$.id');\n+------------------------------------------------------+\n| json_extract('{\"id\": 123, \"name\": \"doris\"}', '$.id') |\n+------------------------------------------------------+\n| 123                                                  |\n+------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> SELECT json_extract('[1, 2, 3]', '$.[1]');\n+------------------------------------+\n| json_extract('[1, 2, 3]', '$.[1]') |\n+------------------------------------+\n| 2                                  |\n+------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> SELECT json_extract('{\"k1\": \"v1\", \"k2\": { \"k21\": 6.6, \"k22\": [1, 2] } }', '$.k1', '$.k2.k21', '$.k2.k22', '$.k2.k22[1]');\n+-------------------------------------------------------------------------------------------------------------------+\n| json_extract('{\"k1\": \"v1\", \"k2\": { \"k21\": 6.6, \"k22\": [1, 2] } }', '$.k1', '$.k2.k21', '$.k2.k22', '$.k2.k22[1]') |\n+-------------------------------------------------------------------------------------------------------------------+\n| [\"v1\",6.6,[1,2],2]                                                                                                |\n+-------------------------------------------------------------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> SELECT json_extract('{\"id\": 123, \"name\": \"doris\"}', '$.aaa', '$.name');\n+-----------------------------------------------------------------+\n| json_extract('{\"id\": 123, \"name\": \"doris\"}', '$.aaa', '$.name') |\n+-----------------------------------------------------------------+\n| [null,\"doris\"]                                                  |\n+-----------------------------------------------------------------+\n1 row in set (0.01 sec)\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"JSON, EXTRACT, JSON_EXTRACT"))}d.isMDXComponent=!0}}]);