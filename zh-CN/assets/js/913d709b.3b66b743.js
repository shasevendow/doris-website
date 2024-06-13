"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[11616],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>f});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),u=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(a.Provider,{value:n},e.children)},p="mdxType",_={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),d=i,f=p["".concat(a,".").concat(d)]||p[d]||_[d]||o;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=d;var s={};for(var a in n)hasOwnProperty.call(n,a)&&(s[a]=n[a]);s.originalType=e,s[p]="string"==typeof e?e:i,l[1]=s;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},977002:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>_,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=t(58168),i=(t(296540),t(15680));const o={title:"IPV4_STRING_TO_NUM_OR_DEFAULT",language:"zh-CN"},l=void 0,s={unversionedId:"sql-manual/sql-functions/ip-functions/ipv4-string-to-num-or-default",id:"sql-manual/sql-functions/ip-functions/ipv4-string-to-num-or-default",title:"IPV4_STRING_TO_NUM_OR_DEFAULT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/ip-functions/ipv4-string-to-num-or-default.md",sourceDirName:"sql-manual/sql-functions/ip-functions",slug:"/sql-manual/sql-functions/ip-functions/ipv4-string-to-num-or-default",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/ipv4-string-to-num-or-default",draft:!1,tags:[],version:"current",frontMatter:{title:"IPV4_STRING_TO_NUM_OR_DEFAULT",language:"zh-CN"},sidebar:"docs",previous:{title:"INET_ATON",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/inet-aton"},next:{title:"IPV4_STRING_TO_NUM_OR_NULL",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/ipv4-string-to-num-or-null"}},a={},u=[{value:"IPV4_STRING_TO_NUM_OR_DEFAULT",id:"ipv4_string_to_num_or_default",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function _(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"ipv4_string_to_num_or_default"},"IPV4_STRING_TO_NUM_OR_DEFAULT"),(0,i.yg)("version",{since:"dev"},(0,i.yg)("p",null,"IPV4_STRING_TO_NUM_OR_DEFAULT")),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"BIGINT IPV4_STRING_TO_NUM_OR_DEFAULT(VARCHAR ipv4_string)")),(0,i.yg)("p",null,"\u83b7\u53d6\u5305\u542b IPv4 \u5730\u5740\u7684\u5b57\u7b26\u4e32\uff0c\u683c\u5f0f\u4e3a A.B.C.D\uff08\u70b9\u5206\u9694\u7684\u5341\u8fdb\u5236\u6570\u5b57\uff09\u3002\u8fd4\u56de\u4e00\u4e2a BIGINT \u6570\u5b57\uff0c\u8868\u793a\u76f8\u5e94\u7684\u5927\u7aef IPv4 \u5730\u5740\u3002"),(0,i.yg)("h3",{id:"notice"},"notice"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"\u5982\u679c\u8f93\u5165\u5b57\u7b26\u4e32\u4e0d\u662f\u6709\u6548\u7684 IPv4 \u5730\u5740\u6216\u8005NULL\uff0c\u5c06\u8fd4\u56de0")),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select ipv4_string_to_num_or_default('192.168.0.1'); \n+----------------------------------------------+ \n| ipv4_string_to_num_or_default('192.168.0.1') | \n+----------------------------------------------+ \n| 3232235521                                   | \n+----------------------------------------------+ \n1 row in set (0.01 sec)\n\nmysql> select str, ipv4_string_to_num_or_default(str) from ipv4_str; \n+-----------------+------------------------------------+ \n|str              | ipv4_string_to_num_or_default(str) | \n+-----------------+------------------------------------+ \n| 0.0.0.0         | 0                                  | \n| 127.0.0.1       | 2130706433                         | \n| 255.255.255.255 | 4294967295                         | \n| invalid         | 0                                  | \n+-----------------+------------------------------------+ \n4 rows in set (0.01 sec)\n\nmysql> select addr_src, ipv4_string_to_num_or_default(addr_src) from ipv4_string_test where addr_src is null;\n+----------+-----------------------------------------+\n| addr_src | ipv4_string_to_num_or_default(addr_src) |\n+----------+-----------------------------------------+\n| NULL     |                                       0 |\n+----------+-----------------------------------------+\n1 row in set (0.09 sec)\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("p",null,"IPV4_STRING_TO_NUM_OR_DEFAULT, IP"))}_.isMDXComponent=!0}}]);