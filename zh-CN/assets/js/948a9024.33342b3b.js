"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[14788],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(296540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),d=l,y=p["".concat(i,".").concat(d)]||p[d]||m[d]||a;return t?r.createElement(y,o(o({ref:n},c),{},{components:t})):r.createElement(y,o({ref:n},c))}));function y(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[p]="string"==typeof e?e:l,o[1]=s;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},15315:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=t(58168),l=(t(296540),t(15680));const a={title:"NUMBERS",language:"zh-CN"},o=void 0,s={unversionedId:"sql-manual/sql-functions/table-functions/numbers",id:"sql-manual/sql-functions/table-functions/numbers",title:"NUMBERS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/table-functions/numbers.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/numbers",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/table-functions/numbers",draft:!1,tags:[],version:"current",frontMatter:{title:"NUMBERS",language:"zh-CN"},sidebar:"docs",previous:{title:"EXPLODE_BITMAP",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/table-functions/explode-bitmap"},next:{title:"EXPLODE_NUMBERS",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/table-functions/explode-numbers"}},i={},u=[{value:"<code>numbers</code>",id:"numbers",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function m(e){let{components:n,...t}=e;return(0,l.yg)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"numbers"},(0,l.yg)("inlineCode",{parentName:"h2"},"numbers")),(0,l.yg)("h3",{id:"description"},"description"),(0,l.yg)("p",null,"\u8868\u51fd\u6570\uff0c\u751f\u6210\u4e00\u5f20\u53ea\u542b\u6709\u4e00\u5217\u7684\u4e34\u65f6\u8868\uff0c\u5217\u540d\u4e3a",(0,l.yg)("inlineCode",{parentName:"p"},"number"),"\uff0c\u5982\u679c\u6307\u5b9a\u4e86",(0,l.yg)("inlineCode",{parentName:"p"},"const_value"),"\uff0c\u5219\u6240\u6709\u5143\u7d20\u503c\u5747\u4e3a",(0,l.yg)("inlineCode",{parentName:"p"},"const_value"),"\uff0c\u5426\u5219\u4e3a[0,",(0,l.yg)("inlineCode",{parentName:"p"},"number"),")\u9012\u589e\u3002"),(0,l.yg)("h4",{id:"syntax"},"syntax"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'numbers(\n  "number" = "n"\n  <, "const_value" = "x">\n  );\n')),(0,l.yg)("p",null,"\u53c2\u6570\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"number"),": \u884c\u6570\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"const_value")," : \u5e38\u91cf\u503c\u3002")),(0,l.yg)("h3",{id:"example"},"example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'mysql> select * from numbers("number" = "5");\n+--------+\n| number |\n+--------+\n|      0 |\n|      1 |\n|      2 |\n|      3 |\n|      4 |\n+--------+\n5 rows in set (0.11 sec)\n\nmysql> select * from numbers("number" = "5", "const_value" = "-123");\n+--------+\n| number |\n+--------+\n|   -123 |\n|   -123 |\n|   -123 |\n|   -123 |\n|   -123 |\n+--------+\n5 rows in set (0.12 sec)\n')),(0,l.yg)("h3",{id:"keywords"},"keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"numbers, const_value\n")))}m.isMDXComponent=!0}}]);