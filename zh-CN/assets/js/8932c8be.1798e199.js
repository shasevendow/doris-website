"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[42267],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>_});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),f=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=f(e.components);return r.createElement(c.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=f(t),d=i,_=s["".concat(c,".").concat(d)]||s[d]||u[d]||o;return t?r.createElement(_,a(a({ref:n},p),{},{components:t})):r.createElement(_,a({ref:n},p))}));function _(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[s]="string"==typeof e?e:i,a[1]=l;for(var f=2;f<o;f++)a[f]=t[f];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},625708:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>f});var r=t(58168),i=(t(296540),t(15680));const o={title:"IPV6_CIDR_TO_RANGE",language:"zh-CN"},a=void 0,l={unversionedId:"sql-manual/sql-functions/ip-functions/ipv6-cidr-to-range",id:"sql-manual/sql-functions/ip-functions/ipv6-cidr-to-range",title:"IPV6_CIDR_TO_RANGE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/ip-functions/ipv6-cidr-to-range.md",sourceDirName:"sql-manual/sql-functions/ip-functions",slug:"/sql-manual/sql-functions/ip-functions/ipv6-cidr-to-range",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/ipv6-cidr-to-range",draft:!1,tags:[],version:"current",frontMatter:{title:"IPV6_CIDR_TO_RANGE",language:"zh-CN"},sidebar:"docs",previous:{title:"IPV4_CIDR_TO_RANGE",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/ipv4-cidr-to-range"},next:{title:"IS_IP_ADDRESS_IN_RANGE",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/is-ip-address-in-range"}},c={},f=[{value:"IPV6_CIDR_TO_RANGE",id:"ipv6_cidr_to_range",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:f},s="wrapper";function u(e){let{components:n,...t}=e;return(0,i.yg)(s,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"ipv6_cidr_to_range"},"IPV6_CIDR_TO_RANGE"),(0,i.yg)("version",{since:"dev"},(0,i.yg)("p",null,"IPV6_CIDR_TO_RANGE")),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"STRUCT<IPV6, IPV6> IPV6_CIDR_TO_RANGE(IPV6 ip_v6, INT16 cidr)")),(0,i.yg)("p",null,"\u63a5\u6536\u4e00\u4e2aIPv6\u548c\u4e00\u4e2a\u5305\u542bCIDR\u7684Int16\u503c\u3002\u8fd4\u56de\u4e00\u4e2a\u7ed3\u6784\u4f53\uff0c\u5176\u4e2d\u5305\u542b\u4e24\u4e2aIPv6\u5b57\u6bb5\u5206\u522b\u8868\u793a\u5b50\u7f51\u7684\u8f83\u4f4e\u8303\u56f4\uff08min\uff09\u548c\u8f83\u9ad8\u8303\u56f4\uff08max\uff09\u3002"),(0,i.yg)("h3",{id:"notice"},"notice"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"\u5982\u679c\u5165\u53c2\u4e3aNULL\uff0c\u5219\u8fd4\u56deNULL\uff0c\u8868\u793a\u65e0\u6548\u8f93\u5165")),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'mysql> SELECT ipv6_cidr_to_range(ipv6_string_to_num(\'2001:0db8:0000:85a3:0000:0000:ac1f:8001\'), 32);\n+---------------------------------------------------------------------------------------+\n| ipv6_cidr_to_range(ipv6_string_to_num(\'2001:0db8:0000:85a3:0000:0000:ac1f:8001\'), 32) |\n+---------------------------------------------------------------------------------------+\n| {"min": "2001:db8::", "max": "2001:db8:ffff:ffff:ffff:ffff:ffff:ffff"}                |\n+---------------------------------------------------------------------------------------+\n\nmysql> SELECT ipv6_cidr_to_range(to_ipv6(\'2001:0db8:0000:85a3:0000:0000:ac1f:8001\'), 32);\n+----------------------------------------------------------------------------+\n| ipv6_cidr_to_range(to_ipv6(\'2001:0db8:0000:85a3:0000:0000:ac1f:8001\'), 32) |\n+----------------------------------------------------------------------------+\n| {"min": "2001:db8::", "max": "2001:db8:ffff:ffff:ffff:ffff:ffff:ffff"}     |\n+----------------------------------------------------------------------------+\n\nmysql> SELECT ipv6_cidr_to_range(NULL, NULL);\n+--------------------------------+\n| ipv6_cidr_to_range(NULL, NULL) |\n+--------------------------------+\n| NULL                           |\n+--------------------------------+\n')),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("p",null,"IPV6_CIDR_TO_RANGE, IP"))}u.isMDXComponent=!0}}]);