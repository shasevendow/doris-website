"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[49063],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,y=p["".concat(i,".").concat(m)]||p[m]||g[m]||o;return n?a.createElement(y,s(s({ref:t},u),{},{components:n})):a.createElement(y,s({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},776021:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(58168),r=(n(296540),n(15680));const o={title:"AGG_STATE",language:"en"},s=void 0,l={unversionedId:"sql-manual/sql-reference/Data-Types/AGG_STATE",id:"version-2.0/sql-manual/sql-reference/Data-Types/AGG_STATE",title:"AGG_STATE",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Data-Types/AGG_STATE.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/AGG_STATE",permalink:"/docs/2.0/sql-manual/sql-reference/Data-Types/AGG_STATE",draft:!1,tags:[],version:"2.0",frontMatter:{title:"AGG_STATE",language:"en"},sidebar:"docs",previous:{title:"JSON",permalink:"/docs/2.0/sql-manual/sql-reference/Data-Types/JSON"},next:{title:"CREATE-CATALOG",permalink:"/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-CATALOG"}},i={},c=[{value:"AGG_STATE",id:"agg_state",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"agg_state"},"AGG_STATE"),(0,r.yg)("h3",{id:"description"},"description"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"  AGG_STATE cannot be used as a key column, and the signature of the aggregation function must be declared at the same time when creating the table.\n  User does not need to specify length and default value. The actual stored data size is related to the function implementation.\n")),(0,r.yg)("p",null,"  AGG_STATE can only be used with ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.0/sql-manual/sql-functions/combinators/state"},"state"),"\n/",(0,r.yg)("a",{parentName:"p",href:"/docs/2.0/sql-manual/sql-functions/combinators/merge"},"merge"),"/",(0,r.yg)("a",{parentName:"p",href:"/docs/2.0/sql-manual/sql-functions/combinators/union"},"union")," function combiner usage."),(0,r.yg)("p",null,"  It should be noted that the signature of the aggregation function is also part of the type, and agg_state with different signatures cannot be mixed. For example, if the signature of the table creation statement is ",(0,r.yg)("inlineCode",{parentName:"p"},"max_by(int,int)"),", then ",(0,r.yg)("inlineCode",{parentName:"p"},"max_by(bigint,int)")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"group_concat(varchar)")," cannot be inserted.\nThe nullable attribute here is also part of the signature. If you can confirm that you will not enter a null value, you can declare the parameter as not null, which can obtain a smaller storage size and reduce serialization/deserialization overhead."),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("p",null,"Create table example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'    create table a_table(\n        k1 int null,\n        k2 agg_state max_by(int not null,int),\n        k3 agg_state group_concat(string)\n    )\n    aggregate key (k1)\n    distributed BY hash(k1) buckets 3\n    properties("replication_num" = "1");\n')),(0,r.yg)("p",null,"Here k2 and k3 use max_by and group_concat as aggregation types respectively."),(0,r.yg)("p",null,"Insert data example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"    insert into a_table values(1,max_by_state(3,1),group_concat_state('a'));\n    insert into a_table values(1,max_by_state(2,2),group_concat_state('bb'));\n    insert into a_table values(2,max_by_state(1,3),group_concat_state('ccc'));\n")),(0,r.yg)("p",null,"For the agg_state column, the insert statement must use the ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.0/sql-manual/sql-functions/combinators/state"},"state")," function to generate the corresponding agg_state data, where the functions and input parameter types must completely correspond to agg_state."),(0,r.yg)("p",null,"Select data example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"    mysql [test]>select k1,max_by_merge(k2),group_concat_merge(k3) from a_table group by k1 order by k1;\n    +------+--------------------+--------------------------+\n    | k1   | max_by_merge(`k2`) | group_concat_merge(`k3`) |\n    +------+--------------------+--------------------------+\n    |    1 |                  2 | bb,a                     |\n    |    2 |                  1 | ccc                      |\n    +------+--------------------+--------------------------+\n")),(0,r.yg)("p",null,"If you need to get the actual result, you need to use the corresponding ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.0/sql-manual/sql-functions/combinators/merge"},"merge")," function."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"    mysql [test]>select max_by_merge(u2),group_concat_merge(u3) from (\n    select k1,max_by_union(k2) as u2,group_concat_union(k3) u3 from a_table group by k1 order by k1\n    ) t;\n    +--------------------+--------------------------+\n    | max_by_merge(`u2`) | group_concat_merge(`u3`) |\n    +--------------------+--------------------------+\n    |                  1 | ccc,bb,a                 |\n    +--------------------+--------------------------+\n")),(0,r.yg)("p",null,"If you want to aggregate only the agg_state without getting the actual result during the process, you can use the ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.0/sql-manual/sql-functions/combinators/union"},"union")," function."),(0,r.yg)("p",null,"For more examples, see ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/regression-test/suites/datatype_p0/agg_state"},"datatype_p0/agg_state")),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"AGG_STATE\n")))}g.isMDXComponent=!0}}]);