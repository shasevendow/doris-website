"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[58728],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(t),f=a,y=u["".concat(c,".").concat(f)]||u[f]||g[f]||l;return t?r.createElement(y,i(i({ref:n},p),{},{components:t})):r.createElement(y,i({ref:n},p))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=f;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},232732:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=t(58168),a=(t(296540),t(15680));const l={title:"PERCENTILE",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-functions/aggregate-functions/percentile",id:"version-2.1/sql-manual/sql-functions/aggregate-functions/percentile",title:"PERCENTILE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/aggregate-functions/percentile.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/percentile",permalink:"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/percentile",draft:!1,tags:[],version:"2.1",frontMatter:{title:"PERCENTILE",language:"zh-CN"},sidebar:"docs",previous:{title:"APPROX_COUNT_DISTINCT",permalink:"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/approx-count-distinct"},next:{title:"PERCENTILE_ARRAY",permalink:"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/percentile-array"}},c={},s=[{value:"PERCENTILE",id:"percentile",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:s},u="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"percentile"},"PERCENTILE"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"PERCENTILE(expr, DOUBLE p)")),(0,a.yg)("p",null,"\u8ba1\u7b97\u7cbe\u786e\u7684\u767e\u5206\u4f4d\u6570\uff0c\u9002\u7528\u4e8e\u5c0f\u6570\u636e\u91cf\u3002\u5148\u5bf9\u6307\u5b9a\u5217\u964d\u5e8f\u6392\u5217\uff0c\u7136\u540e\u53d6\u7cbe\u786e\u7684\u7b2c p \u4f4d\u767e\u5206\u6570\u3002p\u7684\u503c\u4ecb\u4e8e0\u52301\u4e4b\u95f4"),(0,a.yg)("p",null,"\u53c2\u6570\u8bf4\u660e\nexpr\uff1a\u5fc5\u586b\u3002\u503c\u4e3a\u6574\u6570\uff08\u6700\u5927\u4e3abigint\uff09 \u7c7b\u578b\u7684\u5217\u3002\np\uff1a\u5e38\u91cf\u5fc5\u586b\u3002\u9700\u8981\u7cbe\u786e\u7684\u767e\u5206\u4f4d\u6570\u3002\u53d6\u503c\u4e3a ","[0.0,1.0]","\u3002"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"MySQL > select `table`, percentile(cost_time,0.99) from log_statis group by `table`;\n+---------------------+---------------------------+\n| table    |        percentile(`cost_time`, 0.99) |\n+----------+--------------------------------------+\n| test     |                                54.22 |\n+----------+--------------------------------------+\n\nMySQL > select percentile(NULL,0.3) from table1;\n+-----------------------+\n| percentile(NULL, 0.3) |\n+-----------------------+\n|                  NULL |\n+-----------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"PERCENTILE"))}g.isMDXComponent=!0}}]);