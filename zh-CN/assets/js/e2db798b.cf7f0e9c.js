"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[86082],{15680:(e,r,n)=>{n.d(r,{xA:()=>c,yg:()=>v});var t=n(296540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=t.createContext({}),o=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=o(e.components);return t.createElement(u.Provider,{value:r},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=o(n),m=a,v=p["".concat(u,".").concat(m)]||p[m]||y[m]||l;return n?t.createElement(v,i(i({ref:r},c),{},{components:n})):t.createElement(v,i({ref:r},c))}));function v(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var o=2;o<l;o++)i[o]=n[o];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48925:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var t=n(58168),a=(n(296540),n(15680));const l={title:"\u7528\u6237\u81ea\u5b9a\u4e49\u53d8\u91cf",language:"zh-CN"},i=void 0,s={unversionedId:"query/query-variables/user-defined-variables",id:"version-2.1/query/query-variables/user-defined-variables",title:"\u7528\u6237\u81ea\u5b9a\u4e49\u53d8\u91cf",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/query/query-variables/user-defined-variables.md",sourceDirName:"query/query-variables",slug:"/query/query-variables/user-defined-variables",permalink:"/zh-CN/docs/query/query-variables/user-defined-variables",draft:!1,tags:[],version:"2.1",frontMatter:{title:"\u7528\u6237\u81ea\u5b9a\u4e49\u53d8\u91cf",language:"zh-CN"},sidebar:"docs",previous:{title:"\u65f6\u533a",permalink:"/zh-CN/docs/query/query-variables/time-zone"},next:{title:"\u5168\u65b0\u4f18\u5316\u5668\u4ecb\u7ecd",permalink:"/zh-CN/docs/query/nereids/"}},u={},o=[{value:"\u4f7f\u7528\u6307\u5357",id:"\u4f7f\u7528\u6307\u5357",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u4f7f\u7528\u9650\u5236",id:"\u4f7f\u7528\u9650\u5236",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],c={toc:o},p="wrapper";function y(e){let{components:r,...n}=e;return(0,a.yg)(p,(0,t.A)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u81ea\u5b9a\u4e49\u53d8\u91cf\u6307\u7684\u662f\u7528\u6237\u53ef\u4ee5\u6839\u636e\u81ea\u8eab\u9700\u6c42\u901a\u8fc7SQL\u8bed\u53e5\u5c06\u503c\u5b58\u50a8\u5728\u81ea\u5b9a\u4e49\u7684\u53d8\u91cf\u4e2d\uff0c\u7136\u540e\u8be5\u53d8\u91cf\u53ef\u4ee5\u88ab\u5176\u4ed6SQL\u8bed\u53e5\u5f15\u7528\u3002\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u65e2\u53ef\u4ee5\u5b9e\u73b0\u503c\u7684\u4f20\u9012\uff0c\u53c8\u53ef\u4ee5\u7b80\u5316SQL\u7684\u7f16\u5199\u3002"),(0,a.yg)("h2",{id:"\u4f7f\u7528\u6307\u5357"},"\u4f7f\u7528\u6307\u5357"),(0,a.yg)("p",null,"\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u53d8\u91cf\u5f62\u5f0f\u4e3a\uff1a@var",(0,a.yg)("em",{parentName:"p"},"name\uff0c\u5176\u4e2d\u53d8\u91cf\u540d\u79f0\u7531\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u201c.\u201d\u3001\u201c"),"\u201d\u3001\u201c\xa5\u201d\u3001\u201c$\u201d\u7ec4\u6210\u3002\u4e0d\u8fc7\uff0c\u5728\u4ee5\u5b57\u7b26\u4e32\u6216\u8005\u6807\u8bc6\u7b26\u5f15\u7528\u65f6\u4e5f\u53ef\u4ee5\u5305\u542b\u5176\u4ed6\u5b57\u7b26\uff08\u4f8b\u5982\uff1a@","`","var-name`\uff09\uff0c\u4e0d\u652f\u6301\u7eaf\u6570\u5b57\u548c\u5355\u72ec\u201c.\u201d\u7684\u53d8\u91cf\u3002"),(0,a.yg)("h2",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,a.yg)("p",null,"\u7528\u6237\u81ea\u5b9a\u4e49\u53d8\u91cf\u53ef\u4ee5\u901a\u8fc7set\u8bed\u53e5\u5b9a\u4e49"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SET @var_name = expr [, @var_name = expr ...];\n")),(0,a.yg)("p",null,"\u4e5f\u53ef\u4ee5\u4f7f\u7528:= \u7528\u4f5c\u8d4b\u503c\u8fd0\u7b97\u7b26"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SET @var_name := expr [, @var_name = expr ...];\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u58f0\u660e\u81ea\u5b9a\u4e49\u53d8\u91cf\u65f6\uff0c\u5fc5\u987b\u52a0\u524d\u7f00 @;"),(0,a.yg)("li",{parentName:"ul"},"\u53ef\u540c\u65f6\u58f0\u660e\u591a\u4e2a\u81ea\u5b9a\u4e49\u53d8\u91cf\uff0c\u591a\u4e2a\u53d8\u91cf\u4e4b\u95f4\u7528\u9017\u53f7 (,) \u9694\u5f00;"),(0,a.yg)("li",{parentName:"ul"},"\u652f\u6301\u591a\u6b21\u58f0\u660e\u540c\u4e00\u81ea\u5b9a\u4e49\u53d8\u91cf\uff0c\u65b0\u58f0\u660e\u7684\u503c\u4f1a\u8986\u76d6\u539f\u6709\u503c;"),(0,a.yg)("li",{parentName:"ul"},"expr\u6682\u4e0d\u652f\u6301\u8868\u8fbe\u5f0f;"),(0,a.yg)("li",{parentName:"ul"},"\u5982\u5728\u4e00\u4e2a SQL \u8bed\u53e5\u4e2d\u5f15\u7528\u4e86\u6ca1\u6709\u58f0\u660e\u8fc7\u7684\u53d8\u91cf\uff0c\u8be5\u53d8\u91cf\u503c\u9ed8\u8ba4\u4e3a NULL \u4e14\u4e3a STRING \u7c7b\u578b\uff1b")),(0,a.yg)("p",null,"\u8bfb\u53d6\u7528\u6237\u81ea\u5b9a\u4e49\u53d8\u91cf\u53ef\u4ee5\u901a\u8fc7select\u8bed\u53e5\u67e5\u8be2"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT @var_name [, @var_name ...];\n")),(0,a.yg)("h2",{id:"\u4f7f\u7528\u9650\u5236"},"\u4f7f\u7528\u9650\u5236"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u6682\u4e0d\u652f\u6301\u67e5\u770b\u7528\u6237\u5df2\u6709\u7684\u81ea\u5b9a\u4e49\u53d8\u91cf\uff1b"),(0,a.yg)("li",{parentName:"ul"},"\u6682\u4e0d\u652f\u6301\u901a\u8fc7\u53d8\u91cf\u7ed9\u53d8\u91cf\u8d4b\u503c\uff1b"),(0,a.yg)("li",{parentName:"ul"},"\u6682\u4e0d\u652f\u6301\u58f0\u660e BITMAP\u3001HLL\u3001PERCENTILE \u548c ARRAY \u7c7b\u578b\u7684\u81ea\u5b9a\u4e49\u53d8\u91cf\uff0cJSON \u7c7b\u578b\u7684\u81ea\u5b9a\u4e49\u53d8\u91cf\u4f1a\u8f6c\u6362\u4e3a STRING \u7c7b\u578b\u8fdb\u884c\u5b58\u50a8\uff1b"),(0,a.yg)("li",{parentName:"ul"},"\u7528\u6237\u81ea\u5b9a\u4e49\u53d8\u91cf\u5c5e\u4e8e\u4f1a\u8bdd\u7ea7\u522b\u7684\u53d8\u91cf\uff0c\u5f53\u5ba2\u6237\u7aef\u65ad\u5f00\u65f6\uff0c\u5176\u6240\u6709\u7684\u4f1a\u8bdd\u53d8\u91cf\u4f1a\u88ab\u91ca\u653e\uff1b")),(0,a.yg)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> SET @v1=1, @v2:=2;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> select @v1,@v2;\n+------+------+\n| @v1  | @v2  |\n+------+------+\n|    1 |    2 |\n+------+------+\n1 row in set (0.00 sec)\n\nmysql> select @v1+@v2;\n+-------------+\n| (@v1 + @v2) |\n+-------------+\n|           3 |\n+-------------+\n1 row in set (0.01 sec)\n\nmysql> set @`var-name`=2;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> select @`var-name`;\n+-----------+\n| @var-name |\n+-----------+\n|         2 |\n+-----------+\n1 row in set (0.00 sec)\n\nmysql> SET @j := \'{"a": 1, "b": 2, "c": {"d": 4}}\';\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> select @j;\n+---------------------------------+\n| @j                              |\n+---------------------------------+\n| {"a": 1, "b": 2, "c": {"d": 4}} |\n+---------------------------------+\n1 row in set (0.00 sec)\n')))}y.isMDXComponent=!0}}]);