"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[31406],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,d=p["".concat(s,".").concat(m)]||p[m]||g[m]||a;return t?r.createElement(d,l(l({ref:n},u),{},{components:t})):r.createElement(d,l({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},133179:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(58168),o=(t(296540),t(15680));const a={title:"GROUP_CONCAT",language:"en"},l=void 0,i={unversionedId:"sql-manual/sql-functions/aggregate-functions/group-concat",id:"sql-manual/sql-functions/aggregate-functions/group-concat",title:"GROUP_CONCAT",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/aggregate-functions/group-concat.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/group-concat",permalink:"/docs/dev/sql-manual/sql-functions/aggregate-functions/group-concat",draft:!1,tags:[],version:"current",frontMatter:{title:"GROUP_CONCAT",language:"en"},sidebar:"docs",previous:{title:"GROUP_BIT_XOR",permalink:"/docs/dev/sql-manual/sql-functions/aggregate-functions/group-bit-xor"},next:{title:"BITMAP_UNION",permalink:"/docs/dev/sql-manual/sql-functions/aggregate-functions/bitmap-union"}},s={},c=[{value:"GROUP_CONCAT",id:"group_concat",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function g(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"group_concat"},"GROUP_CONCAT"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"VARCHAR GROUP_CONCAT([DISTINCT] VARCHAR str[, VARCHAR sep] [ORDER BY { col_name | expr} [ASC | DESC]])")),(0,o.yg)("p",null,"This function is an aggregation function similar to sum (), and group_concat links multiple rows of results in the result set to a string. The second parameter, sep, is a connection symbol between strings, which can be omitted. This function usually needs to be used with group by statements."),(0,o.yg)("p",null,"Support Order By for sorting multi-row results, sorting and aggregation columns can be different."),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},(0,o.yg)("inlineCode",{parentName:"p"},"group_concat")," don't support using ",(0,o.yg)("inlineCode",{parentName:"p"},"distinct")," with ",(0,o.yg)("inlineCode",{parentName:"p"},"order by")," together.")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select value from test;\n+-------+\n| value |\n+-------+\n| a     |\n| b     |\n| c     |\n| c     |\n+-------+\n\nmysql> select GROUP_CONCAT(value) from test;\n+-----------------------+\n| GROUP_CONCAT(`value`) |\n+-----------------------+\n| a, b, c, c              |\n+-----------------------+\n\nmysql> select GROUP_CONCAT(value, \" \") from test;\n+----------------------------+\n| GROUP_CONCAT(`value`, ' ') |\n+----------------------------+\n| a b c c                     |\n+----------------------------+\n\nmysql> select GROUP_CONCAT(DISTINCT value) from test;\n+-----------------------+\n| GROUP_CONCAT(`value`) |\n+-----------------------+\n| a, b, c               |\n+-----------------------+\n\nmysql> select GROUP_CONCAT(value, NULL) from test;\n+----------------------------+\n| GROUP_CONCAT(`value`, NULL)|\n+----------------------------+\n| NULL                       |\n+----------------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("p",null,"GROUP_CONCAT,GROUP,CONCAT"))}g.isMDXComponent=!0}}]);