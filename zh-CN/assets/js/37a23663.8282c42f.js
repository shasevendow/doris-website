"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[15914],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,y=p["".concat(i,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},717522:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=n(58168),a=(n(296540),n(15680));const l={title:"DROP-ROLE",language:"zh-CN"},o=void 0,c={unversionedId:"sql-manual/sql-reference/Account-Management-Statements/DROP-ROLE",id:"version-1.2/sql-manual/sql-reference/Account-Management-Statements/DROP-ROLE",title:"DROP-ROLE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Account-Management-Statements/DROP-ROLE.md",sourceDirName:"sql-manual/sql-reference/Account-Management-Statements",slug:"/sql-manual/sql-reference/Account-Management-Statements/DROP-ROLE",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Account-Management-Statements/DROP-ROLE",draft:!1,tags:[],version:"1.2",frontMatter:{title:"DROP-ROLE",language:"zh-CN"},sidebar:"docs",previous:{title:"CREATE-ROLE",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Account-Management-Statements/CREATE-ROLE"},next:{title:"CREATE-USER",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Account-Management-Statements/CREATE-USER"}},i={},s=[{value:"DROP-ROLE",id:"drop-role",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"drop-role"},"DROP-ROLE"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"DROP ROLE"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8bed\u53e5\u7528\u6237\u5220\u9664\u89d2\u8272"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"  DROP ROLE [IF EXISTS] role1;\n")),(0,a.yg)("p",null,"\u5220\u9664\u89d2\u8272\u4e0d\u4f1a\u5f71\u54cd\u4ee5\u524d\u5c5e\u4e8e\u89d2\u8272\u7684\u7528\u6237\u7684\u6743\u9650\u3002 \u5b83\u4ec5\u76f8\u5f53\u4e8e\u89e3\u8026\u6765\u81ea\u7528\u6237\u7684\u89d2\u8272\u3002 \u7528\u6237\u4ece\u89d2\u8272\u83b7\u5f97\u7684\u6743\u9650\u4e0d\u4f1a\u6539\u53d8"),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u5220\u9664\u4e00\u4e2a\u89d2\u8272")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DROP ROLE role1;\n")),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"DROP, ROLE\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);