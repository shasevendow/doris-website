"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[71334],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>y});var r=t(296540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=l,y=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(y,o(o({ref:n},s),{},{components:t})):r.createElement(y,o({ref:n},s))}));function y(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},227951:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(58168),l=(t(296540),t(15680));const a={title:"Linux \u5e73\u53f0\u76f4\u63a5\u7f16\u8bd1",language:"zh-CN"},o=void 0,i={unversionedId:"install/source-install/compilation-linux",id:"version-2.0/install/source-install/compilation-linux",title:"Linux \u5e73\u53f0\u76f4\u63a5\u7f16\u8bd1",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/install/source-install/compilation-linux.md",sourceDirName:"install/source-install",slug:"/install/source-install/compilation-linux",permalink:"/zh-CN/docs/2.0/install/source-install/compilation-linux",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Linux \u5e73\u53f0\u76f4\u63a5\u7f16\u8bd1",language:"zh-CN"},sidebar:"docs",previous:{title:"\u4f7f\u7528 LDB Toolchain \u7f16\u8bd1\uff08\u63a8\u8350\uff09",permalink:"/zh-CN/docs/2.0/install/source-install/compilation-with-ldb-toolchain"},next:{title:"Arm \u5e73\u53f0\u4e0a\u7f16\u8bd1",permalink:"/zh-CN/docs/2.0/install/source-install/compilation-arm"}},u={},c=[{value:"1 \u786e\u4fdd\u62e5\u6709\u4ee5\u4e0b\u7cfb\u7edf\u4f9d\u8d56",id:"1-\u786e\u4fdd\u62e5\u6709\u4ee5\u4e0b\u7cfb\u7edf\u4f9d\u8d56",level:2},{value:"2 \u4e0e\u4f7f\u7528 Docker \u5f00\u53d1\u955c\u50cf\u7f16\u8bd1\u4e00\u6837\uff0c\u7f16\u8bd1\u4e4b\u524d\u5148\u68c0\u67e5\u662f\u5426\u652f\u6301 AVX2 \u6307\u4ee4",id:"2-\u4e0e\u4f7f\u7528-docker-\u5f00\u53d1\u955c\u50cf\u7f16\u8bd1\u4e00\u6837\u7f16\u8bd1\u4e4b\u524d\u5148\u68c0\u67e5\u662f\u5426\u652f\u6301-avx2-\u6307\u4ee4",level:2},{value:"3 \u652f\u6301\u5219\u4f7f\u7528\u4e0b\u9762\u547d\u4ee4\u8fdb\u884c\u7f16\u8bd1",id:"3-\u652f\u6301\u5219\u4f7f\u7528\u4e0b\u9762\u547d\u4ee4\u8fdb\u884c\u7f16\u8bd1",level:2},{value:"4 \u7f16\u8bd1\u5b8c\u6210\u540e\uff0c\u4ea7\u51fa\u6587\u4ef6\u5728 <code>output/</code> \u76ee\u5f55\u4e2d\u3002",id:"4-\u7f16\u8bd1\u5b8c\u6210\u540e\u4ea7\u51fa\u6587\u4ef6\u5728-output-\u76ee\u5f55\u4e2d",level:2}],s={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,l.yg)(p,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"\u8fd9\u91cc\u4f7f\u7528 Ubuntu 16.04 \u53ca\u4ee5\u4e0a\u7cfb\u7edf\u6765\u76f4\u63a5\u7f16\u8bd1\u3002"),(0,l.yg)("h2",{id:"1-\u786e\u4fdd\u62e5\u6709\u4ee5\u4e0b\u7cfb\u7edf\u4f9d\u8d56"},"1 \u786e\u4fdd\u62e5\u6709\u4ee5\u4e0b\u7cfb\u7edf\u4f9d\u8d56"),(0,l.yg)("p",null,"GCC 10+, Oracle JDK 8+, Python 2.7+, Apache Maven 3.5+, CMake 3.19.2+ , Bison 3.0+"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"sudo apt install build-essential openjdk-8-jdk maven cmake byacc flex automake libtool-bin bison binutils-dev libiberty-dev zip unzip libncurses5-dev curl git ninja-build python\nsudo add-apt-repository ppa:ubuntu-toolchain-r/ppa\nsudo apt update\nsudo apt install gcc-10 g++-10 \nsudo apt-get install autoconf automake libtool autopoint\n")),(0,l.yg)("h2",{id:"2-\u4e0e\u4f7f\u7528-docker-\u5f00\u53d1\u955c\u50cf\u7f16\u8bd1\u4e00\u6837\u7f16\u8bd1\u4e4b\u524d\u5148\u68c0\u67e5\u662f\u5426\u652f\u6301-avx2-\u6307\u4ee4"},"2 \u4e0e\u4f7f\u7528 Docker \u5f00\u53d1\u955c\u50cf\u7f16\u8bd1\u4e00\u6837\uff0c\u7f16\u8bd1\u4e4b\u524d\u5148\u68c0\u67e5\u662f\u5426\u652f\u6301 AVX2 \u6307\u4ee4"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"$ cat /proc/cpuinfo | grep avx2\n")),(0,l.yg)("h2",{id:"3-\u652f\u6301\u5219\u4f7f\u7528\u4e0b\u9762\u547d\u4ee4\u8fdb\u884c\u7f16\u8bd1"},"3 \u652f\u6301\u5219\u4f7f\u7528\u4e0b\u9762\u547d\u4ee4\u8fdb\u884c\u7f16\u8bd1"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"# \u9ed8\u8ba4\u7f16\u8bd1\u51fa\u652f\u6301 AVX2 \u7684\n$ sh build.sh\n\n# \u5982\u4e0d\u652f\u6301 AVX2 \u9700\u8981\u52a0 USE_AVX2=0\n$ USE_AVX2=0 sh build.sh\n\n# \u5982\u9700\u7f16\u8bd1 Debug \u7248\u672c\u7684 BE\uff0c\u589e\u52a0 BUILD_TYPE=Debug\n$ BUILD_TYPE=Debug sh build.sh\n")),(0,l.yg)("h2",{id:"4-\u7f16\u8bd1\u5b8c\u6210\u540e\u4ea7\u51fa\u6587\u4ef6\u5728-output-\u76ee\u5f55\u4e2d"},"4 \u7f16\u8bd1\u5b8c\u6210\u540e\uff0c\u4ea7\u51fa\u6587\u4ef6\u5728 ",(0,l.yg)("inlineCode",{parentName:"h2"},"output/")," \u76ee\u5f55\u4e2d\u3002"))}d.isMDXComponent=!0}}]);