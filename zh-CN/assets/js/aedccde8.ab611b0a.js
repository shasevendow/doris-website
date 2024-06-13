"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[61872],{15680:(t,e,a)=>{a.d(e,{xA:()=>m,yg:()=>N});var n=a(296540);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function y(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),p=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):g(g({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(i.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},o=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,m=y(t,["components","mdxType","originalType","parentName"]),u=p(a),o=r,N=u["".concat(i,".").concat(o)]||u[o]||d[o]||l;return a?n.createElement(N,g(g({ref:e},m),{},{components:a})):n.createElement(N,g({ref:e},m))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,g=new Array(l);g[0]=o;var y={};for(var i in e)hasOwnProperty.call(e,i)&&(y[i]=e[i]);y.originalType=t,y[u]="string"==typeof t?t:r,g[1]=y;for(var p=2;p<l;p++)g[p]=a[p];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},223510:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>g,default:()=>d,frontMatter:()=>l,metadata:()=>y,toc:()=>p});var n=a(58168),r=(a(296540),a(15680));const l={title:"tables",language:"zh-CN"},g=void 0,y={unversionedId:"admin-manual/system-tables/tables",id:"admin-manual/system-tables/tables",title:"tables",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/system-tables/tables.md",sourceDirName:"admin-manual/system-tables",slug:"/admin-manual/system-tables/tables",permalink:"/zh-CN/docs/dev/admin-manual/system-tables/tables",draft:!1,tags:[],version:"current",frontMatter:{title:"tables",language:"zh-CN"},sidebar:"docs",previous:{title:"\u7528\u6237\u914d\u7f6e\u9879",permalink:"/zh-CN/docs/dev/admin-manual/config/user-property"},next:{title:"\u5ba1\u8ba1\u65e5\u5fd7\u63d2\u4ef6",permalink:"/zh-CN/docs/dev/admin-manual/audit-plugin"}},i={},p=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u6240\u5c5e\u6570\u636e\u5e93",id:"\u6240\u5c5e\u6570\u636e\u5e93",level:2},{value:"\u8868\u4fe1\u606f",id:"\u8868\u4fe1\u606f",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],m={toc:p},u="wrapper";function d(t){let{components:e,...a}=t;return(0,r.yg)(u,(0,n.A)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,r.yg)("p",null,"\u5b58\u50a8\u5f53\u524d Catalog \u4e0b\u6240\u6709\u7684\u8868\u4fe1\u606f\u3002"),(0,r.yg)("h2",{id:"\u6240\u5c5e\u6570\u636e\u5e93"},"\u6240\u5c5e\u6570\u636e\u5e93"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"information_schema")),(0,r.yg)("h2",{id:"\u8868\u4fe1\u606f"},"\u8868\u4fe1\u606f"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u5217\u540d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TABLE_CATALOG"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR(512)"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6240\u5c5e Catalog")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TABLE_SCHEMA"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR(64)"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6240\u5c5e Database")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TABLE_NAME"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR(64)"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8868\u540d\u79f0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TABLE_TYPE"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR(64)"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8868\u7c7b\u578b\uff0c\u5305\u62ec\uff1aSYSTEM VIEW\u3001VIEW\u3001BASE TABLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ENGINE"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR(64)"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8868\u5f15\u64ce\u7c7b\u578b")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"VERSION"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0\u6548\u503c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ROW_FORMAT"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR(10)"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0\u6548\u503c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TABLE_ROWS"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8868\u9884\u4f30\u884c\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"AVG_ROW_LENGTH"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8868\u5e73\u5747\u884c\u5927\u5c0f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATA_LENGTH"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8868\u9884\u4f30\u5927\u5c0f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MAX_DATA_LENGTH"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0\u6548\u503c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INDEX_LENGTH"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0\u6548\u503c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATA_FREE"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0\u6548\u503c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"AUTO_INCREMENT"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0\u6548\u503c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CREATE_TIME"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8868\u521b\u5efa\u65f6\u95f4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"UPDATE_TIME"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8868\u66f4\u65b0\u65f6\u95f4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CHECK_TIME"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0\u6548\u503c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TABLE_COLLATION"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR(32)"),(0,r.yg)("td",{parentName:"tr",align:null},"\u56fa\u5b9a\u503c\uff1autf-8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CHECKSUM"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0\u6548\u503c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CREATE_OPTIONS"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR(255)"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0\u6548\u503c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TABLE_COMMENT"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR(2048)"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8868\u6ce8\u91ca")))),(0,r.yg)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.yg)("p",null,"\u65e0"))}d.isMDXComponent=!0}}]);