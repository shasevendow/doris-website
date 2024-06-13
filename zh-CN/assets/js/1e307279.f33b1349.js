"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[50543],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>m});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),y=u(t),d=a,m=y["".concat(i,".").concat(d)]||y[d]||p[d]||l;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[y]="string"==typeof e?e:a,o[1]=c;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},317221:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=t(58168),a=(t(296540),t(15680));const l={title:"QUERY",language:"zh-CN"},o=void 0,c={unversionedId:"sql-manual/sql-functions/table-functions/query",id:"sql-manual/sql-functions/table-functions/query",title:"QUERY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/table-functions/query.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/query",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/table-functions/query",draft:!1,tags:[],version:"current",frontMatter:{title:"QUERY",language:"zh-CN"},sidebar:"docs",previous:{title:"TASKS",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/table-functions/tasks"},next:{title:"\u7a97\u53e3\u51fd\u6570",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/window-functions/window-function"}},i={},u=[{value:"query",id:"query",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Prac",id:"best-prac",level:3}],s={toc:u},y="wrapper";function p(e){let{components:n,...t}=e;return(0,a.yg)(y,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"query"},"query"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"query"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("p",null,"query \u8868\u51fd\u6570\uff08table-valued-function,tvf\uff09\uff0c\u53ef\u7528\u4e8e\u5c06\u67e5\u8be2\u8bed\u53e5\u76f4\u63a5\u900f\u4f20\u5230\u67d0\u4e2a catalog \u8fdb\u884c\u6570\u636e\u67e5\u8be2"),(0,a.yg)("admonition",{title:"note",type:"info"},(0,a.yg)("p",{parentName:"admonition"},"Doris 2.1.3 \u7248\u672c\u5f00\u59cb\u652f\u6301\uff0c\u5f53\u524d\u4ec5\u652f\u6301\u900f\u4f20\u67e5\u8be2 jdbc catalog\u3002\n\u9700\u8981\u5148\u5728 Doris \u4e2d\u521b\u5efa\u5bf9\u5e94\u7684 catalog\u3002")),(0,a.yg)("h4",{id:"syntax"},"syntax"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'query(\n  "catalog" = "catalog_name", \n  "query" = "select * from db_name.table_name where condition"\n  );\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e")),(0,a.yg)("p",null,"query\u8868\u51fd\u6570 tvf\u4e2d\u7684\u6bcf\u4e00\u4e2a\u53c2\u6570\u90fd\u662f\u4e00\u4e2a ",(0,a.yg)("inlineCode",{parentName:"p"},'"key"="value"')," \u5bf9\u3002\n\u76f8\u5173\u53c2\u6570\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"catalog"),"\uff1a (\u5fc5\u586b) catalog\u540d\u79f0\uff0c\u9700\u8981\u6309\u7167catalog\u7684\u540d\u79f0\u586b\u5199\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"query"),"\uff1a (\u5fc5\u586b) \u9700\u8981\u6267\u884c\u7684\u67e5\u8be2\u8bed\u53e5\u3002")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("p",null,"\u4f7f\u7528 query \u51fd\u6570\u67e5\u8be2 jdbc \u6570\u636e\u6e90\u4e2d\u7684\u8868"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'select * from query("catalog" = "jdbc", "query" = "select * from db_name.table_name where condition");\n')),(0,a.yg)("p",null,"\u53ef\u4ee5\u914d\u5408",(0,a.yg)("inlineCode",{parentName:"p"},"desc function"),"\u4f7f\u7528"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'desc function query("catalog" = "jdbc", "query" = "select * from db_name.table_name where condition");\n')),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"query, table-valued-function, tvf\n")),(0,a.yg)("h3",{id:"best-prac"},"Best Prac"),(0,a.yg)("p",null,"\u900f\u4f20\u67e5\u8be2 jdbc catalog \u6570\u636e\u6e90\u4e2d\u7684\u8868"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'select * from query("catalog" = "jdbc", "query" = "select * from test.student");\n+------+---------+\n| id   | name    |\n+------+---------+\n| 1    | alice   |\n| 2    | bob     |\n| 3    | jack    |\n+------+---------+\nselect * from query("catalog" = "jdbc", "query" = "select * from test.score");\n+------+---------+\n| id   | score   |\n+------+---------+\n| 1    | 100     |\n| 2    | 90      |\n| 3    | 80      |\n+------+---------+\n')),(0,a.yg)("p",null,"\u900f\u4f20\u5173\u8054\u67e5\u8be2 jdbc catalog \u6570\u636e\u6e90\u4e2d\u7684\u8868"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'select * from query("catalog" = "jdbc", "query" = "select a.id, a.name, b.score from test.student a join test.score b on a.id = b.id");\n+------+---------+---------+\n| id   | name    | score   |\n+------+---------+---------+\n| 1    | alice   | 100     |\n| 2    | bob     | 90      |\n| 3    | jack    | 80      |\n+------+---------+---------+\n')))}p.isMDXComponent=!0}}]);