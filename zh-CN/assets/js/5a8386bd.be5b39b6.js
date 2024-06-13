"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[77030],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>y});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),g=a,y=p["".concat(l,".").concat(g)]||p[g]||m[g]||i;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},956982:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(58168),a=(r(296540),r(15680));const i={title:"Apache Doris announced the official release of version 1.2.7",description:"Dear community, Apache Doris 1.2.7 is now available, with several enhancements and bug fixes based on 1.2.0\uff0cenabling smoother user experience.",date:"2023-09-04",author:"Apache Doris",tags:["Release Notes"],image:"/images/1.2.7.png"},o=void 0,s={permalink:"/zh-CN/blog/release-note-1.2.7",source:"@site/blog/release-note-1.2.7.md",title:"Apache Doris announced the official release of version 1.2.7",description:"Dear community, Apache Doris 1.2.7 is now available, with several enhancements and bug fixes based on 1.2.0\uff0cenabling smoother user experience.",date:"2023-09-04T00:00:00.000Z",formattedDate:"2023\u5e749\u67084\u65e5",tags:[{label:"Release Notes",permalink:"/zh-CN/blog/tags/release-notes"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Apache Doris announced the official release of version 1.2.7",description:"Dear community, Apache Doris 1.2.7 is now available, with several enhancements and bug fixes based on 1.2.0\uff0cenabling smoother user experience.",date:"2023-09-04",author:"Apache Doris",tags:["Release Notes"],image:"/images/1.2.7.png"},prevItem:{title:"Log analysis: how to digest 15 billion logs per day and keep big queries within 1 second",permalink:"/zh-CN/blog/Log-Analysis-How-to-Digest-15-Billion-Logs-Per-Day-and-Keep-Big-Queries-Within-1-Second"},nextItem:{title:"Apache Doris announced the official release of version 2.0.1",permalink:"/zh-CN/blog/release-note-2.0.1"}},l={authorsImageUrls:[void 0]},c=[{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"New Features",id:"new-features",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Fixed some query issues."),(0,a.yg)("li",{parentName:"ul"},"Fix some storage issues."),(0,a.yg)("li",{parentName:"ul"},"Fix some decimal precision issues."),(0,a.yg)("li",{parentName:"ul"},"Fix query error caused by invalid ",(0,a.yg)("inlineCode",{parentName:"li"},"sql_select_limit")," session variable's value."),(0,a.yg)("li",{parentName:"ul"},"Fix the problem that hdfs short-circuit read cannot be used."),(0,a.yg)("li",{parentName:"ul"},"Fix the problem that Tencent Cloud cosn cannot be accessed."),(0,a.yg)("li",{parentName:"ul"},"Fix several issues with hive catalog kerberos access."),(0,a.yg)("li",{parentName:"ul"},"Fix the problem that stream load profile cannot be used."),(0,a.yg)("li",{parentName:"ul"},"Fix promethus monitoring parameter format problem."),(0,a.yg)("li",{parentName:"ul"},"Fix the table creation timeout issue when creating a large number of tablets.")),(0,a.yg)("h2",{id:"new-features"},"New Features"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Unique Key model supports array type as value column"),(0,a.yg)("li",{parentName:"ul"},"Added ",(0,a.yg)("inlineCode",{parentName:"li"},"have_query_cache")," variable for compatibility with MySQL ecosystem."),(0,a.yg)("li",{parentName:"ul"},"Added ",(0,a.yg)("inlineCode",{parentName:"li"},"enable_strong_consistency_read")," to support strong consistent read between sessions"),(0,a.yg)("li",{parentName:"ul"},"FE metrics supports user-level query counter")))}m.isMDXComponent=!0}}]);