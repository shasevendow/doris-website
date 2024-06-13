"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[59557],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>f});var t=r(296540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),s=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):u(u({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),y=s(r),m=a,f=y["".concat(l,".").concat(m)]||y[m]||p[m]||i;return r?t.createElement(f,u(u({ref:n},c),{},{components:r})):t.createElement(f,u({ref:n},c))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,u=new Array(i);u[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[y]="string"==typeof e?e:a,u[1]=o;for(var s=2;s<i;s++)u[s]=r[s];return t.createElement.apply(null,u)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},317314:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>u,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var t=r(58168),a=(r(296540),r(15680));const i={title:"ARRAY_ENUMERATE_UNIQ",language:"zh-CN"},u=void 0,o={unversionedId:"sql-manual/sql-functions/array-functions/array-enumerate-uniq",id:"version-2.0/sql-manual/sql-functions/array-functions/array-enumerate-uniq",title:"ARRAY_ENUMERATE_UNIQ",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/array-functions/array-enumerate-uniq.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-enumerate-uniq",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-enumerate-uniq",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ARRAY_ENUMERATE_UNIQ",language:"zh-CN"},sidebar:"docs",previous:{title:"ARRAY_ENUMERATE",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-enumerate"},next:{title:"ARRAY_POPBACK",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-popback"}},l={},s=[{value:"array_enumerate_uniq",id:"array_enumerate_uniq",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s},y="wrapper";function p(e){let{components:n,...r}=e;return(0,a.yg)(y,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"array_enumerate_uniq"},"array_enumerate_uniq"),(0,a.yg)("version",{since:"2.0"},(0,a.yg)("p",null,"array_enumerate_uniq")),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"ARRAY<T> array_enumerate_uniq(ARRAY<T> arr)")),(0,a.yg)("p",null,"\u8fd4\u56de\u4e0e\u6e90\u6570\u7ec4\u5927\u5c0f\u76f8\u540c\u7684\u6570\u7ec4\uff0c\u6307\u793a\u6bcf\u4e2a\u5143\u7d20\u5728\u5177\u6709\u76f8\u540c\u503c\u7684\u5143\u7d20\u4e2d\u7684\u4f4d\u7f6e\uff0c\u4f8b\u5982 array_enumerate_uniq(","[1, 2, 1, 4]",") = ","[1, 1, 2, 1]","\n\u8be5\u51fd\u6570\u4e5f\u53ef\u63a5\u53d7\u591a\u4e2a\u5927\u5c0f\u76f8\u540c\u7684\u6570\u7ec4\u4f5c\u4e3a\u53c2\u6570\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u8fd4\u56de\u7684\u662f\u6570\u7ec4\u4e2d\u76f8\u540c\u4f4d\u7f6e\u7684\u5143\u7d20\u7ec4\u6210\u7684\u5143\u7ec4\u5728\u5177\u6709\u76f8\u540c\u503c\u7684\u5143\u7ec4\u4e2d\u7684\u4f4d\u7f6e\u3002\u4f8b\u5982 array_enumerate_uniq(","[1, 2, 1, 1, 2]",", ","[2, 1, 2, 2, 1]",") = ","[1, 1, 2, 3, 2]"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"mysql> select k2, array_enumerate_uniq([1, 2, 3, 1, 2, 3]);\n+-----------------------------------------------------+\n| array_enumerate_uniq(ARRAY(1, 2, 3, 1, 2, 3))       |\n+-----------------------------------------------------+\n| [1, 1, 1, 2, 2, 2]                                  |\n+-----------------------------------------------------+\nmysql> select array_enumerate_uniq([1, 1, 1, 1, 1], [2, 1, 2, 1, 2], [3, 1, 3, 1, 3]);\n+----------------------------------------------------------------------------------------+\n| array_enumerate_uniq(ARRAY(1, 1, 1, 1, 1), ARRAY(2, 1, 2, 1, 2), ARRAY(3, 1, 3, 1, 3)) |\n+----------------------------------------------------------------------------------------+\n| [1, 1, 2, 1, 3]                                                                        |\n+----------------------------------------------------------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ARRAY,ENUMERATE_UNIQ,ARRAY_ENUMERATE_UNIQ"))}p.isMDXComponent=!0}}]);