"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[57180],{15680:(e,r,n)=>{n.d(r,{xA:()=>p,yg:()=>d});var t=n(296540);function l(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){l(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,l=function(e,r){if(null==e)return{};var n,t,l={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(l[n]=e[n]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m=t.createContext({}),g=function(e){var r=t.useContext(m),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=g(e.components);return t.createElement(m.Provider,{value:r},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},c=t.forwardRef((function(e,r){var n=e.components,l=e.mdxType,a=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=g(n),c=l,d=s["".concat(m,".").concat(c)]||s[c]||u[c]||a;return n?t.createElement(d,i(i({ref:r},p),{},{components:n})):t.createElement(d,i({ref:r},p))}));function d(e,r){var n=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=c;var o={};for(var m in r)hasOwnProperty.call(r,m)&&(o[m]=r[m]);o.originalType=e,o[s]="string"==typeof e?e:l,i[1]=o;for(var g=2;g<a;g++)i[g]=n[g];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},323647:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>g});var t=n(58168),l=(n(296540),n(15680));const a={title:"N-Gram \u7d22\u5f15",language:"zh-CN"},i=void 0,o={unversionedId:"table-design/index/ngram-bloomfilter-index",id:"version-2.1/table-design/index/ngram-bloomfilter-index",title:"N-Gram \u7d22\u5f15",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/table-design/index/ngram-bloomfilter-index.md",sourceDirName:"table-design/index",slug:"/table-design/index/ngram-bloomfilter-index",permalink:"/zh-CN/docs/table-design/index/ngram-bloomfilter-index",draft:!1,tags:[],version:"2.1",frontMatter:{title:"N-Gram \u7d22\u5f15",language:"zh-CN"},sidebar:"docs",previous:{title:"\u5e03\u9686\u8fc7\u6ee4\u5668\u7d22\u5f15",permalink:"/zh-CN/docs/table-design/index/bloomfilter"},next:{title:"\u4f4d\u56fe\u7d22\u5f15",permalink:"/zh-CN/docs/table-design/index/bitmap-index"}},m={},g=[{value:"NGram BloomFilter \u521b\u5efa",id:"ngram-bloomfilter-\u521b\u5efa",level:3},{value:"\u67e5\u770b NGram BloomFilter \u7d22\u5f15",id:"\u67e5\u770b-ngram-bloomfilter-\u7d22\u5f15",level:3},{value:"\u5220\u9664 NGram BloomFilter \u7d22\u5f15",id:"\u5220\u9664-ngram-bloomfilter-\u7d22\u5f15",level:3},{value:"\u4fee\u6539 NGram BloomFilter \u7d22\u5f15",id:"\u4fee\u6539-ngram-bloomfilter-\u7d22\u5f15",level:3},{value:"NGram BloomFilter \u4f7f\u7528\u6ce8\u610f",id:"ngram-bloomfilter-\u4f7f\u7528\u6ce8\u610f",level:3}],p={toc:g},s="wrapper";function u(e){let{components:r,...n}=e;return(0,l.yg)(s,(0,t.A)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"N-Gram \u7d22\u5f15\uff08N-Gram BloomFilter Index\uff09"),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"N-Gram BloomFilter \u7d22\u5f15\u4ece Doris 2.0 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002")),(0,l.yg)("p",null,"\u4e3a\u4e86\u63d0\u5347 LIKE \u7684\u67e5\u8be2\u6027\u80fd\uff0c\u589e\u52a0\u4e86 NGram BloomFilter \u7d22\u5f15\u3002"),(0,l.yg)("h3",{id:"ngram-bloomfilter-\u521b\u5efa"},"NGram BloomFilter \u521b\u5efa"),(0,l.yg)("p",null,"\u8868\u521b\u5efa\u65f6\u6307\u5b9a\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE table_ngrambf (\n  `siteid` int(11) NULL DEFAULT "10" COMMENT "",\n  `citycode` smallint(6) NULL COMMENT "",\n  `username` varchar(32) NULL DEFAULT "" COMMENT "",\n  INDEX idx_ngrambf (`username`) USING NGRAM_BF PROPERTIES("gram_size"="3", "bf_size"="256") COMMENT \'username ngram_bf index\'\n) ENGINE=OLAP\nAGGREGATE KEY(`siteid`, `citycode`, `username`) COMMENT "OLAP"\nDISTRIBUTED BY HASH(`siteid`) BUCKETS 10\nPROPERTIES (\n"replication_num" = "1"\n);\n')),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},'PROPERTIES("gram_size"="3", "bf_size"="256")\uff0c\u5206\u522b\u8868\u793a gram \u7684\u4e2a\u6570\u548c BloomFilter \u7684\u5b57\u8282\u6570\u3002')),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Gram \u7684\u4e2a\u6570\u8ddf\u5b9e\u9645\u67e5\u8be2\u573a\u666f\u76f8\u5173\uff0c\u901a\u5e38\u8bbe\u7f6e\u4e3a\u5927\u90e8\u5206\u67e5\u8be2\u5b57\u7b26\u4e32\u7684\u957f\u5ea6\uff0cBloomFilter \u5b57\u8282\u6570\uff0c\u53ef\u4ee5\u901a\u8fc7\u6d4b\u8bd5\u5f97\u51fa\uff0c\u901a\u5e38\u8d8a\u5927\u8fc7\u6ee4\u6548\u679c\u8d8a\u597d\uff0c\u53ef\u4ee5\u4ece 256 \u5f00\u59cb\u8fdb\u884c\u9a8c\u8bc1\u6d4b\u8bd5\u770b\u770b\u6548\u679c\u3002\u5f53\u7136\u5b57\u8282\u6570\u8d8a\u5927\u4e5f\u4f1a\u5e26\u6765\u7d22\u5f15\u5b58\u50a8\u3001\u5185\u5b58 cost \u4e0a\u5347\u3002")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u5982\u679c\u6570\u636e\u57fa\u6570\u6bd4\u8f83\u9ad8\uff0c\u5b57\u8282\u6570\u53ef\u4ee5\u4e0d\u7528\u8bbe\u7f6e\u8fc7\u5927\uff0c\u5982\u679c\u57fa\u6570\u4e0d\u662f\u5f88\u9ad8\uff0c\u53ef\u4ee5\u901a\u8fc7\u589e\u52a0\u5b57\u8282\u6570\u6765\u63d0\u5347\u8fc7\u6ee4\u6548\u679c\u3002"))),(0,l.yg)("h3",{id:"\u67e5\u770b-ngram-bloomfilter-\u7d22\u5f15"},"\u67e5\u770b NGram BloomFilter \u7d22\u5f15"),(0,l.yg)("p",null,"\u67e5\u770b\u6211\u4eec\u5728\u8868\u4e0a\u5efa\u7acb\u7684 NGram BloomFilter \u7d22\u5f15\u662f\u4f7f\u7528\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"show index from table_ngrambf;\n")),(0,l.yg)("h3",{id:"\u5220\u9664-ngram-bloomfilter-\u7d22\u5f15"},"\u5220\u9664 NGram BloomFilter \u7d22\u5f15"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"alter table table_ngrambf drop index idx_ngrambf;\n")),(0,l.yg)("h3",{id:"\u4fee\u6539-ngram-bloomfilter-\u7d22\u5f15"},"\u4fee\u6539 NGram BloomFilter \u7d22\u5f15"),(0,l.yg)("p",null,"\u4e3a\u5df2\u6709\u5217\u65b0\u589e NGram BloomFilter \u7d22\u5f15\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'alter table table_ngrambf add index idx_ngrambf(username) using NGRAM_BF PROPERTIES("gram_size"="2", "bf_size"="512")comment \'username ngram_bf index\' \n')),(0,l.yg)("h3",{id:"ngram-bloomfilter-\u4f7f\u7528\u6ce8\u610f"},"NGram BloomFilter \u4f7f\u7528\u6ce8\u610f"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"NGram BloomFilter \u53ea\u652f\u6301\u5b57\u7b26\u4e32\u5217")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"NGram BloomFilter \u7d22\u5f15\u548c BloomFilter \u7d22\u5f15\u4e3a\u4e92\u65a5\u5173\u7cfb\uff0c\u5373\u540c\u4e00\u4e2a\u5217\u53ea\u80fd\u8bbe\u7f6e\u4e24\u8005\u4e2d\u7684\u4e00\u4e2a")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"NGram \u5927\u5c0f\u548c BloomFilter \u7684\u5b57\u8282\u6570\uff0c\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u8c03\u4f18\uff0c\u5982\u679c NGram \u6bd4\u8f83\u5c0f\uff0c\u53ef\u4ee5\u9002\u5f53\u589e\u52a0 BloomFilter \u5927\u5c0f")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"\u5982\u679c\u8981\u67e5\u770b\u67d0\u4e2a\u67e5\u8be2\u662f\u5426\u547d\u4e2d\u4e86 NGram BloomFilter \u7d22\u5f15\uff0c\u53ef\u4ee5\u901a\u8fc7\u67e5\u8be2\u7684 Profile \u4fe1\u606f\u67e5\u770b"))))}u.isMDXComponent=!0}}]);