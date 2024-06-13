"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[82290],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=c(t),m=a,y=h["".concat(i,".").concat(m)]||h[m]||p[m]||l;return t?r.createElement(y,s(s({ref:n},u),{},{components:t})):r.createElement(y,s({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,s=new Array(l);s[0]=m;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[h]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<l;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},179641:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const l={title:"XXHASH_64",language:"zh-CN"},s=void 0,o={unversionedId:"sql-manual/sql-functions/hash-functions/xxhash-64",id:"version-2.1/sql-manual/sql-functions/hash-functions/xxhash-64",title:"XXHASH_64",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/hash-functions/xxhash-64.md",sourceDirName:"sql-manual/sql-functions/hash-functions",slug:"/sql-manual/sql-functions/hash-functions/xxhash-64",permalink:"/zh-CN/docs/sql-manual/sql-functions/hash-functions/xxhash-64",draft:!1,tags:[],version:"2.1",frontMatter:{title:"XXHASH_64",language:"zh-CN"},sidebar:"docs",previous:{title:"XXHASH_32",permalink:"/zh-CN/docs/sql-manual/sql-functions/hash-functions/xxhash-32"},next:{title:"HLL_CARDINALITY",permalink:"/zh-CN/docs/sql-manual/sql-functions/hll-functions/hll-cardinality"}},i={},c=[{value:"xxhash_64",id:"xxhash_64",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"benchmark",id:"benchmark",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},h="wrapper";function p(e){let{components:n,...t}=e;return(0,a.yg)(h,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"xxhash_64"},"xxhash_64"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"BIGINT XXHASH_64(VARCHAR input, ...)")),(0,a.yg)("p",null,"\u8fd4\u56de\u8f93\u5165\u5b57\u7b26\u4e32\u768464\u4f4dxxhash\u503c\u3002"),(0,a.yg)("p",null,"\u6ce8\uff1a\u5728\u8ba1\u7b97hash\u503c\u65f6\uff0c\u66f4\u63a8\u8350\u4f7f\u7528",(0,a.yg)("inlineCode",{parentName:"p"},"xxhash_64"),"\uff0c\u800c\u4e0d\u662f",(0,a.yg)("inlineCode",{parentName:"p"},"murmur_hash3_64"),"\u3002"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select xxhash_64(NULL);\n+-----------------+\n| xxhash_64(NULL) |\n+-----------------+\n|            NULL |\n+-----------------+\n\nmysql> select xxhash_64(\"hello\");\n+----------------------+\n| xxhash_64('hello')   |\n+----------------------+\n| -7685981735718036227 |\n+----------------------+\n\nmysql> select xxhash_64(\"hello\", \"world\");\n+-----------------------------+\n| xxhash_64('hello', 'world') |\n+-----------------------------+\n|         7001965798170371843 |\n+-----------------------------+\n")),(0,a.yg)("h3",{id:"benchmark"},"benchmark"),(0,a.yg)("p",null,"\u901a\u8fc7TPCH Benchmark\u6d4b\u8bd5\u53d1\u73b0\uff0c",(0,a.yg)("inlineCode",{parentName:"p"},"xxhash_64"),"\u76f8\u6bd4",(0,a.yg)("inlineCode",{parentName:"p"},"murmur_hash3_64"),"\u6765\u8bf4\u6027\u80fd\u5927\u5e45\u63d0\u5347\uff0c\u56e0\u6b64\u5728\u9700\u8981\u8ba1\u7b97hash\u503c\u7684\u573a\u666f\u4e0b\uff0c\u66f4\u63a8\u8350\u4f7f\u7528",(0,a.yg)("inlineCode",{parentName:"p"},"xxhash_64"),"\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select count(murmur_hash3_64(l_comment)) from lineitem;\n+-----------------------------------+\n| count(murmur_hash3_64(l_comment)) |\n+-----------------------------------+\n|                         600037902 |\n+-----------------------------------+\n1 row in set (17.18 sec)\n\nmysql> select count(xxhash_64(l_comment)) from lineitem;\n+-----------------------------+\n| count(xxhash_64(l_comment)) |\n+-----------------------------+\n|                   600037902 |\n+-----------------------------+\n1 row in set (8.41 sec)\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"XXHASH_64,HASH"))}p.isMDXComponent=!0}}]);