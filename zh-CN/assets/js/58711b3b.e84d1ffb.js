"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[19150],{15680:(e,n,r)=>{r.d(n,{xA:()=>d,yg:()=>u});var t=r(296540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),i=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},d=function(e){var n=i(e.components);return t.createElement(l.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=i(r),m=a,u=p["".concat(l,".").concat(m)]||p[m]||f[m]||o;return r?t.createElement(u,s(s({ref:n},d),{},{components:r})):t.createElement(u,s({ref:n},d))}));function u(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[p]="string"==typeof e?e:a,s[1]=c;for(var i=2;i<o;i++)s[i]=r[i];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},934288:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var t=r(58168),a=(r(296540),r(15680));const o={title:"\u7cfb\u7edf\u8868",language:"zh-CN"},s=void 0,c={unversionedId:"admin-manual/rowsets",id:"version-2.1/admin-manual/rowsets",title:"\u7cfb\u7edf\u8868",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/rowsets.md",sourceDirName:"admin-manual",slug:"/admin-manual/rowsets",permalink:"/zh-CN/docs/admin-manual/rowsets",draft:!1,tags:[],version:"2.1",frontMatter:{title:"\u7cfb\u7edf\u8868",language:"zh-CN"},sidebar:"docs",previous:{title:"Compaction \u8c03\u6574",permalink:"/zh-CN/docs/admin-manual/compaction"},next:{title:"Spark Doris Connector",permalink:"/zh-CN/docs/ecosystem/spark-doris-connector"}},l={},i=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"Example",id:"example",level:2},{value:"KeyWords",id:"keywords",level:2}],d={toc:i},p="wrapper";function f(e){let{components:n,...r}=e;return(0,a.yg)(p,(0,t.A)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"\u81ea Doris 1.2 \u7248\u672c\u8d77\u652f\u6301 ",(0,a.yg)("inlineCode",{parentName:"p"},"rowset")," ")),(0,a.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"rowsets")," \u662f Doris \u5185\u7f6e\u7684\u4e00\u5f20\u7cfb\u7edf\u8868\uff0c\u5b58\u653e\u5728",(0,a.yg)("inlineCode",{parentName:"p"},"information_schema"),"\u6570\u636e\u5e93\u4e0b\u3002\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"rowsets")," \u7cfb\u7edf\u8868\u53ef\u4ee5\u67e5\u770b\u5404\u4e2a",(0,a.yg)("inlineCode",{parentName:"p"},"BE")," \u5f53\u524d rowsets \u60c5\u51b5\u3002"),(0,a.yg)("p",null,"rowsets \u8868\u7ed3\u6784\u4e3a\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"MySQL [(none)]> desc information_schema.rowsets;\n+------------------------+------------+------+-------+---------+-------+\n| Field                  | Type       | Null | Key   | Default | Extra |\n+------------------------+------------+------+-------+---------+-------+\n| BACKEND_ID             | BIGINT     | Yes  | false | NULL    |       |\n| ROWSET_ID              | VARCHAR(*) | Yes  | false | NULL    |       |\n| TABLET_ID              | BIGINT     | Yes  | false | NULL    |       |\n| ROWSET_NUM_ROWS        | BIGINT     | Yes  | false | NULL    |       |\n| TXN_ID                 | BIGINT     | Yes  | false | NULL    |       |\n| NUM_SEGMENTS           | BIGINT     | Yes  | false | NULL    |       |\n| START_VERSION          | BIGINT     | Yes  | false | NULL    |       |\n| END_VERSION            | BIGINT     | Yes  | false | NULL    |       |\n| INDEX_DISK_SIZE        | BIGINT     | Yes  | false | NULL    |       |\n| DATA_DISK_SIZE         | BIGINT     | Yes  | false | NULL    |       |\n| CREATION_TIME          | BIGINT     | Yes  | false | NULL    |       |\n| NEWEST_WRITE_TIMESTAMP | BIGINT     | Yes  | false | NULL    |       |\n+------------------------+------------+------+-------+---------+-------+\n")),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"select * from information_schema.rowsets where BACKEND_ID = 10004 limit 10;\n+------------+--------------------------------------------------+-----------+-----------------+--------+--------------+---------------+-------------+-----------------+----------------+---------------+------------------------+------------------------+\n| BACKEND_ID | ROWSET_ID                                        | TABLET_ID | ROWSET_NUM_ROWS | TXN_ID | NUM_SEGMENTS | START_VERSION | END_VERSION | INDEX_DISK_SIZE | DATA_DISK_SIZE | CREATION_TIME | OLDEST_WRITE_TIMESTAMP | NEWEST_WRITE_TIMESTAMP |\n+------------+--------------------------------------------------+-----------+-----------------+--------+--------------+---------------+-------------+-----------------+----------------+---------------+------------------------+------------------------+\n|      10004 | 02000000000000994847fbd41a42297d7c7a57d3bcb46f8c |     10771 |           66850 |      6 |            1 |             3 |           3 |            2894 |         688855 |    1659964582 |             1659964581 |             1659964581 |\n|      10004 | 020000000000008d4847fbd41a42297d7c7a57d3bcb46f8c |     10771 |           66850 |      2 |            1 |             2 |           2 |            2894 |         688855 |    1659964575 |             1659964574 |             1659964574 |\n|      10004 | 02000000000000894847fbd41a42297d7c7a57d3bcb46f8c |     10771 |               0 |      0 |            0 |             0 |           1 |               0 |              0 |    1659964567 |             1659964567 |             1659964567 |\n|      10004 | 020000000000009a4847fbd41a42297d7c7a57d3bcb46f8c |     10773 |           66639 |      6 |            1 |             3 |           3 |            2897 |         686828 |    1659964582 |             1659964581 |             1659964581 |\n|      10004 | 020000000000008e4847fbd41a42297d7c7a57d3bcb46f8c |     10773 |           66639 |      2 |            1 |             2 |           2 |            2897 |         686828 |    1659964575 |             1659964574 |             1659964574 |\n|      10004 | 02000000000000884847fbd41a42297d7c7a57d3bcb46f8c |     10773 |               0 |      0 |            0 |             0 |           1 |               0 |              0 |    1659964567 |             1659964567 |             1659964567 |\n|      10004 | 02000000000000984847fbd41a42297d7c7a57d3bcb46f8c |     10757 |           66413 |      6 |            1 |             3 |           3 |            2893 |         685381 |    1659964582 |             1659964581 |             1659964581 |\n|      10004 | 020000000000008c4847fbd41a42297d7c7a57d3bcb46f8c |     10757 |           66413 |      2 |            1 |             2 |           2 |            2893 |         685381 |    1659964575 |             1659964574 |             1659964574 |\n|      10004 | 02000000000000874847fbd41a42297d7c7a57d3bcb46f8c |     10757 |               0 |      0 |            0 |             0 |           1 |               0 |              0 |    1659964567 |             1659964567 |             1659964567 |\n|      10004 | 020000000000009c4847fbd41a42297d7c7a57d3bcb46f8c |     10739 |            1698 |      8 |            1 |             3 |           3 |             454 |          86126 |    1659964582 |             1659964582 |             1659964582 |\n+------------+--------------------------------------------------+-----------+-----------------+--------+--------------+---------------+-------------+-----------------+----------------+---------------+------------------------+------------------------+\n")),(0,a.yg)("h2",{id:"keywords"},"KeyWords"),(0,a.yg)("p",null,"rowsets, information_schema"))}f.isMDXComponent=!0}}]);