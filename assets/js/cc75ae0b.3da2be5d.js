"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[63129],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),f=o,y=p["".concat(s,".").concat(f)]||p[f]||m[f]||l;return t?r.createElement(y,a(a({ref:n},u),{},{components:t})):r.createElement(y,a({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},423520:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=t(58168),o=(t(296540),t(15680));const l={title:"log10",language:"en"},a=void 0,i={unversionedId:"sql-manual/sql-functions/math-functions/log10",id:"version-1.2/sql-manual/sql-functions/math-functions/log10",title:"log10",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/math-functions/log10.md",sourceDirName:"sql-manual/sql-functions/math-functions",slug:"/sql-manual/sql-functions/math-functions/log10",permalink:"/docs/1.2/sql-manual/sql-functions/math-functions/log10",draft:!1,tags:[],version:"1.2",frontMatter:{title:"log10",language:"en"},sidebar:"docs",previous:{title:"ln",permalink:"/docs/1.2/sql-manual/sql-functions/math-functions/ln"},next:{title:"ceil",permalink:"/docs/1.2/sql-manual/sql-functions/math-functions/ceil"}},s={},c=[{value:"log10",id:"log10",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"log10"},"log10"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"DOUBLE log10(DOUBLE x)"),"\nReturns the natural logarithm of ",(0,o.yg)("inlineCode",{parentName:"p"},"x")," to base ",(0,o.yg)("inlineCode",{parentName:"p"},"10"),"."),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"Another alias for this function is ",(0,o.yg)("inlineCode",{parentName:"p"},"dlog10"),".")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select log10(1);\n+------------+\n| log10(1.0) |\n+------------+\n|          0 |\n+------------+\nmysql> select log10(10);\n+-------------+\n| log10(10.0) |\n+-------------+\n|           1 |\n+-------------+\nmysql> select log10(16);\n+--------------------+\n| log10(16.0)        |\n+--------------------+\n| 1.2041199826559248 |\n+--------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"LOG10, DLOG10\n")))}m.isMDXComponent=!0}}]);