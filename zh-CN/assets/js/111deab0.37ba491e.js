"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[94522],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>y});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),v=i,y=u["".concat(c,".").concat(v)]||u[v]||d[v]||o;return t?r.createElement(y,a(a({ref:n},s),{},{components:t})):r.createElement(y,a({ref:n},s))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=v;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},813910:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(58168),i=(t(296540),t(15680));const o={title:"IPV4_CIDR_TO_RANGE",language:"zh-CN"},a=void 0,l={unversionedId:"sql-manual/sql-functions/ip-functions/ipv4-cidr-to-range",id:"sql-manual/sql-functions/ip-functions/ipv4-cidr-to-range",title:"IPV4_CIDR_TO_RANGE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/ip-functions/ipv4-cidr-to-range.md",sourceDirName:"sql-manual/sql-functions/ip-functions",slug:"/sql-manual/sql-functions/ip-functions/ipv4-cidr-to-range",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/ipv4-cidr-to-range",draft:!1,tags:[],version:"current",frontMatter:{title:"IPV4_CIDR_TO_RANGE",language:"zh-CN"},sidebar:"docs",previous:{title:"IS_IPV4_MAPPED",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/is-ipv4-mapped"},next:{title:"IPV6_CIDR_TO_RANGE",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/ipv6-cidr-to-range"}},c={},p=[{value:"IPV4_CIDR_TO_RANGE",id:"ipv4_cidr_to_range",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"ipv4_cidr_to_range"},"IPV4_CIDR_TO_RANGE"),(0,i.yg)("version",{since:"dev"},(0,i.yg)("p",null,"IPV4_CIDR_TO_RANGE")),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"STRUCT<IPV4, IPV4> IPV4_CIDR_TO_RANGE(IPV4 ip_v4, INT16 cidr)")),(0,i.yg)("p",null,"\u63a5\u6536\u4e00\u4e2aIPv4\u548c\u4e00\u4e2a\u5305\u542bCIDR\u7684Int16\u503c\u3002\u8fd4\u56de\u4e00\u4e2a\u7ed3\u6784\u4f53\uff0c\u5176\u4e2d\u5305\u542b\u4e24\u4e2aIPv4\u5b57\u6bb5\u5206\u522b\u8868\u793a\u5b50\u7f51\u7684\u8f83\u4f4e\u8303\u56f4\uff08min\uff09\u548c\u8f83\u9ad8\u8303\u56f4\uff08max\uff09\u3002"),(0,i.yg)("h3",{id:"notice"},"notice"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"\u5982\u679c\u5165\u53c2\u4e3aNULL\uff0c\u5219\u8fd4\u56deNULL\uff0c\u8868\u793a\u65e0\u6548\u8f93\u5165")),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'mysql> SELECT ipv4_cidr_to_range(ipv4_string_to_num(\'192.168.5.2\'), 16);\n+------------------------------------------------------------+\n| ipv4_cidr_to_range(ipv4_string_to_num(\'192.168.5.2\'), 16)  |\n+------------------------------------------------------------+\n| {"min": "192.168.0.0", "max": "192.168.255.255"}           |\n+------------------------------------------------------------+\n\nmysql> SELECT ipv4_cidr_to_range(to_ipv4(\'192.168.5.2\'), 16);\n+--------------------------------------------------+\n| ipv4_cidr_to_range(to_ipv4(\'192.168.5.2\'), 16)   |\n+--------------------------------------------------+\n| {"min": "192.168.0.0", "max": "192.168.255.255"} |\n+--------------------------------------------------+\n\nmysql> SELECT ipv4_cidr_to_range(NULL, NULL);\n+--------------------------------+\n| ipv4_cidr_to_range(NULL, NULL) |\n+--------------------------------+\n| NULL                           |\n+--------------------------------+\n')),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("p",null,"IPV4_CIDR_TO_RANGE, IP"))}d.isMDXComponent=!0}}]);