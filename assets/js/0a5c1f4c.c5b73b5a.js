"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[41776],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,g=d["".concat(i,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},221701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const o={title:"STDDEV,STDDEV_POP",language:"en"},s=void 0,l={unversionedId:"sql-manual/sql-functions/aggregate-functions/stddev",id:"sql-manual/sql-functions/aggregate-functions/stddev",title:"STDDEV,STDDEV_POP",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/aggregate-functions/stddev.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/stddev",permalink:"/docs/dev/sql-manual/sql-functions/aggregate-functions/stddev",draft:!1,tags:[],version:"current",frontMatter:{title:"STDDEV,STDDEV_POP",language:"en"},sidebar:"docs",previous:{title:"SUM",permalink:"/docs/dev/sql-manual/sql-functions/aggregate-functions/sum"},next:{title:"STDDEV_SAMP",permalink:"/docs/dev/sql-manual/sql-functions/aggregate-functions/stddev-samp"}},i={},c=[{value:"STDDEV,STDDEV_POP",id:"stddevstddev_pop",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"stddevstddev_pop"},"STDDEV,STDDEV_POP"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"stddev (expl)")),(0,a.yg)("p",null,"Returns the standard deviation of the expr expression"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"MySQL > select stddev(scan_rows) from log_statis group by datetime;\n+---------------------+\n| stddev(`scan_rows`) |\n+---------------------+\n|  2.3736656687790934 |\n+---------------------+\n\nMySQL > select stddev_pop(scan_rows) from log_statis group by datetime;\n+-------------------------+\n| stddev_pop(`scan_rows`) |\n+-------------------------+\n|      2.3722760595994914 |\n+-------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"STDDEV,STDDEV_POP,POP"))}p.isMDXComponent=!0}}]);