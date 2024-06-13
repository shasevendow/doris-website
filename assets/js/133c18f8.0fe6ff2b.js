"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[2276],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>f});var i=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=i.createContext({}),u=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},b=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),b=r,f=m["".concat(o,".").concat(b)]||m[b]||c[b]||a;return n?i.createElement(f,s(s({ref:t},p),{},{components:n})):i.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=b;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:r,s[1]=l;for(var u=2;u<a;u++)s[u]=n[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}b.displayName="MDXCreateElement"},727064:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=n(58168),r=(n(296540),n(15680));const a={title:"bitmap_subset_limit",language:"en"},s=void 0,l={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap_subset_limit",id:"version-1.2/sql-manual/sql-functions/bitmap-functions/bitmap_subset_limit",title:"bitmap_subset_limit",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/bitmap-functions/bitmap_subset_limit.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap_subset_limit",permalink:"/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_subset_limit",draft:!1,tags:[],version:"1.2",frontMatter:{title:"bitmap_subset_limit",language:"en"},sidebar:"docs",previous:{title:"bitmap_and_not",permalink:"/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_and_not"},next:{title:"bitmap_subset_in_range",permalink:"/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_subset_in_range"}},o={},u=[{value:"bitmap_subset_limit",id:"bitmap_subset_limit",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:u},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,i.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"bitmap_subset_limit"},"bitmap_subset_limit"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("h4",{id:"syntax"},"Syntax"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"BITMAP BITMAP_SUBSET_LIMIT(BITMAP src, BIGINT range_start, BIGINT cardinality_limit)")),(0,r.yg)("p",null,"Create subset of the BITMAP, begin with range from range_start, limit by cardinality_limit\nrange_start: start value for the range\ncardinality_limit: subset upper limit"),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> select bitmap_to_string(bitmap_subset_limit(bitmap_from_string('1,2,3,4,5'), 0, 3)) value;\n+-----------+\n| value     |\n+-----------+\n| 1,2,3 |\n+-----------+\n\nmysql> select bitmap_to_string(bitmap_subset_limit(bitmap_from_string('1,2,3,4,5'), 4, 3)) value;\n+-------+\n| value |\n+-------+\n| 4,5     |\n+-------+\n")),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"BITMAP_SUBSET_LIMIT,BITMAP_SUBSET,BITMAP\n")))}c.isMDXComponent=!0}}]);