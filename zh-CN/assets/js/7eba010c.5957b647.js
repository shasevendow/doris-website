"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[33642],{15680:(e,l,t)=>{t.d(l,{xA:()=>u,yg:()=>y});var r=t(296540);function o(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function n(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);l&&(r=r.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?n(Object(t),!0).forEach((function(l){o(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function a(e,l){if(null==e)return{};var t,r,o=function(e,l){if(null==e)return{};var t,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],l.indexOf(t)>=0||(o[t]=e[t]);return o}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=r.createContext({}),p=function(e){var l=r.useContext(m),t=l;return e&&(t="function"==typeof e?e(l):i(i({},l),e)),t},u=function(e){var l=p(e.components);return r.createElement(m.Provider,{value:l},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var l=e.children;return r.createElement(r.Fragment,{},l)}},g=r.forwardRef((function(e,l){var t=e.components,o=e.mdxType,n=e.originalType,m=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=p(t),g=o,y=s["".concat(m,".").concat(g)]||s[g]||c[g]||n;return t?r.createElement(y,i(i({ref:l},u),{},{components:t})):r.createElement(y,i({ref:l},u))}));function y(e,l){var t=arguments,o=l&&l.mdxType;if("string"==typeof e||o){var n=t.length,i=new Array(n);i[0]=g;var a={};for(var m in l)hasOwnProperty.call(l,m)&&(a[m]=l[m]);a.originalType=e,a[s]="string"==typeof e?e:o,i[1]=a;for(var p=2;p<n;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},26306:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>a,toc:()=>p});var r=t(58168),o=(t(296540),t(15680));const n={title:"\u5e03\u9686\u8fc7\u6ee4\u5668\u7d22\u5f15",language:"zh-CN"},i=void 0,a={unversionedId:"table-design/index/bloomfilter",id:"version-2.1/table-design/index/bloomfilter",title:"\u5e03\u9686\u8fc7\u6ee4\u5668\u7d22\u5f15",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/table-design/index/bloomfilter.md",sourceDirName:"table-design/index",slug:"/table-design/index/bloomfilter",permalink:"/zh-CN/docs/table-design/index/bloomfilter",draft:!1,tags:[],version:"2.1",frontMatter:{title:"\u5e03\u9686\u8fc7\u6ee4\u5668\u7d22\u5f15",language:"zh-CN"},sidebar:"docs",previous:{title:"\u6392\u5e8f\u952e\u4e0e\u524d\u7f00\u7d22\u5f15",permalink:"/zh-CN/docs/table-design/index/prefix-index"},next:{title:"N-Gram \u7d22\u5f15",permalink:"/zh-CN/docs/table-design/index/ngram-bloomfilter-index"}},m={},p=[{value:"\u521b\u5efa BloomFilter \u7d22\u5f15",id:"\u521b\u5efa-bloomfilter-\u7d22\u5f15",level:2},{value:"\u67e5\u770b BloomFilter \u7d22\u5f15",id:"\u67e5\u770b-bloomfilter-\u7d22\u5f15",level:2},{value:"\u5220\u9664 BloomFilter \u7d22\u5f15",id:"\u5220\u9664-bloomfilter-\u7d22\u5f15",level:2},{value:"\u4fee\u6539 BloomFilter \u7d22\u5f15",id:"\u4fee\u6539-bloomfilter-\u7d22\u5f15",level:2},{value:"BloomFilter \u4f7f\u7528\u573a\u666f",id:"bloomfilter-\u4f7f\u7528\u573a\u666f",level:2},{value:"BloomFilter \u4f7f\u7528\u6ce8\u610f",id:"bloomfilter-\u4f7f\u7528\u6ce8\u610f",level:2}],u={toc:p},s="wrapper";function c(e){let{components:l,...n}=e;return(0,o.yg)(s,(0,r.A)({},u,n,{components:l,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"\u5e03\u9686\u8fc7\u6ee4\u5668\u7d22\u5f15\uff0c\u4e5f\u79f0 BloomFilter Index\u3002"),(0,o.yg)("p",null,"BloomFilter \u662f\u7531 Bloom \u5728 1970 \u5e74\u63d0\u51fa\u7684\u4e00\u79cd\u591a\u54c8\u5e0c\u51fd\u6570\u6620\u5c04\u7684\u5feb\u901f\u67e5\u627e\u7b97\u6cd5\u3002\u901a\u5e38\u5e94\u7528\u5728\u4e00\u4e9b\u9700\u8981\u5feb\u901f\u5224\u65ad\u67d0\u4e2a\u5143\u7d20\u662f\u5426\u5c5e\u4e8e\u96c6\u5408\uff0c\u4f46\u662f\u5e76\u4e0d\u4e25\u683c\u8981\u6c42 100% \u6b63\u786e\u7684\u573a\u5408\uff0cBloomFilter \u6709\u4ee5\u4e0b\u7279\u70b9\uff1a"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"\u7a7a\u95f4\u6548\u7387\u9ad8\u7684\u6982\u7387\u578b\u6570\u636e\u7ed3\u6784\uff0c\u7528\u6765\u68c0\u67e5\u4e00\u4e2a\u5143\u7d20\u662f\u5426\u5728\u4e00\u4e2a\u96c6\u5408\u4e2d\u3002")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"\u5bf9\u4e8e\u4e00\u4e2a\u5143\u7d20\u68c0\u6d4b\u662f\u5426\u5b58\u5728\u7684\u8c03\u7528\uff0cBloomFilter \u4f1a\u544a\u8bc9\u8c03\u7528\u8005\u4e24\u4e2a\u7ed3\u679c\u4e4b\u4e00\uff1a\u53ef\u80fd\u5b58\u5728\u6216\u8005\u4e00\u5b9a\u4e0d\u5b58\u5728\u3002")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"\u7f3a\u70b9\u662f\u5b58\u5728\u8bef\u5224\uff0c\u544a\u8bc9\u4f60\u53ef\u80fd\u5b58\u5728\uff0c\u4e0d\u4e00\u5b9a\u771f\u5b9e\u5b58\u5728\u3002"))),(0,o.yg)("p",null,"\u5e03\u9686\u8fc7\u6ee4\u5668\u5b9e\u9645\u4e0a\u662f\u7531\u4e00\u4e2a\u8d85\u957f\u7684\u4e8c\u8fdb\u5236\u4f4d\u6570\u7ec4\u548c\u4e00\u7cfb\u5217\u7684\u54c8\u5e0c\u51fd\u6570\u7ec4\u6210\u3002\u4e8c\u8fdb\u5236\u4f4d\u6570\u7ec4\u521d\u59cb\u5168\u90e8\u4e3a 0\uff0c\u5f53\u7ed9\u5b9a\u4e00\u4e2a\u5f85\u67e5\u8be2\u7684\u5143\u7d20\u65f6\uff0c\u8fd9\u4e2a\u5143\u7d20\u4f1a\u88ab\u4e00\u7cfb\u5217\u54c8\u5e0c\u51fd\u6570\u8ba1\u7b97\u6620\u5c04\u51fa\u4e00\u7cfb\u5217\u7684\u503c\uff0c\u6240\u6709\u7684\u503c\u5728\u4f4d\u6570\u7ec4\u7684\u504f\u79fb\u91cf\u5904\u7f6e\u4e3a 1\u3002"),(0,o.yg)("p",null,"\u4e0b\u56fe\u6240\u793a\u51fa\u4e00\u4e2a m=18, k=3\uff08m \u662f\u8be5 Bit \u6570\u7ec4\u7684\u5927\u5c0f\uff0ck \u662f Hash \u51fd\u6570\u7684\u4e2a\u6570\uff09\u7684 Bloom Filter \u793a\u4f8b\u3002\u96c6\u5408\u4e2d\u7684 x\u3001y\u3001z \u4e09\u4e2a\u5143\u7d20\u901a\u8fc7 3 \u4e2a\u4e0d\u540c\u7684\u54c8\u5e0c\u51fd\u6570\u6563\u5217\u5230\u4f4d\u6570\u7ec4\u4e2d\u3002\u5f53\u67e5\u8be2\u5143\u7d20 w \u65f6\uff0c\u901a\u8fc7 Hash \u51fd\u6570\u8ba1\u7b97\u4e4b\u540e\u56e0\u4e3a\u6709\u4e00\u4e2a\u6bd4\u7279\u4e3a 0\uff0c\u56e0\u6b64 w \u4e0d\u5728\u8be5\u96c6\u5408\u4e2d\u3002"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Bloom_filter.svg",src:t(315846).A,width:"2560",height:"960"})),(0,o.yg)("p",null,"\u540c\u6837\u662f\u5982\u679c\u67d0\u4e2a\u5143\u7d20\u7ecf\u8fc7\u54c8\u5e0c\u51fd\u6570\u8ba1\u7b97\u540e\u5f97\u5230\u6240\u6709\u7684\u504f\u79fb\u4f4d\u7f6e\uff0c\u82e5\u8fd9\u4e9b\u4f4d\u7f6e\u5168\u90fd\u4e3a 1\uff0c\u5219\u5224\u65ad\u8fd9\u4e2a\u5143\u7d20\u5728\u8fd9\u4e2a\u96c6\u5408\u4e2d\u3002"),(0,o.yg)("p",null,"\u5e03\u9686\u8fc7\u6ee4\u5668\uff0c\u5b83\u5141\u8bb8\u4f60\u5bf9\u5b58\u50a8\u5728\u6bcf\u4e2a\u6570\u636e\u5757\u7684\u6570\u636e\u505a\u4e00\u4e2a\u53cd\u5411\u6d4b\u8bd5\u3002\u5f53\u67d0\u884c\u88ab\u8bf7\u6c42\u65f6\uff0c\u901a\u8fc7\u5e03\u9686\u8fc7\u6ee4\u5668\u5148\u68c0\u67e5\u8be5\u884c\u662f\u5426\u4e0d\u5728\u8fd9\u4e2a\u6570\u636e\u5757\uff0c\u5e03\u9686\u8fc7\u6ee4\u5668\u8981\u4e48\u786e\u5b9a\u56de\u7b54\u8be5\u884c\u4e0d\u5728\uff0c\u8981\u4e48\u56de\u7b54\u5b83\u4e0d\u77e5\u9053\u3002\u8fd9\u5c31\u662f\u4e3a\u4ec0\u4e48\u6211\u4eec\u79f0\u5b83\u662f\u53cd\u5411\u6d4b\u8bd5\u3002\u5e03\u9686\u8fc7\u6ee4\u5668\u4e5f\u4e0d\u662f\u6ca1\u6709\u4ee3\u4ef7\u3002\u5b58\u50a8\u8fd9\u4e2a\u989d\u5916\u7684\u7d22\u5f15\u5c42\u6b21\u4f1a\u5360\u7528\u989d\u5916\u7684\u7a7a\u95f4\uff0c\u5e03\u9686\u8fc7\u6ee4\u5668\u968f\u7740\u5b83\u4eec\u7684\u7d22\u5f15\u5bf9\u8c61\u6570\u636e\u589e\u957f\u800c\u589e\u957f\u3002"),(0,o.yg)("p",null,"Doris \u7684 BloomFilter \u7d22\u5f15\u53ef\u4ee5\u901a\u8fc7\u5efa\u8868\u7684\u65f6\u5019\u6307\u5b9a\uff0c\u6216\u8005\u901a\u8fc7\u8868\u7684 ALTER \u64cd\u4f5c\u6765\u5b8c\u6210\u3002Bloom Filter \u672c\u8d28\u4e0a\u662f\u4e00\u79cd\u4f4d\u56fe\u7ed3\u6784\uff0c\u7528\u4e8e\u5feb\u901f\u7684\u5224\u65ad\u4e00\u4e2a\u7ed9\u5b9a\u7684\u503c\u662f\u5426\u5728\u4e00\u4e2a\u96c6\u5408\u4e2d\u3002\u8fd9\u79cd\u5224\u65ad\u4f1a\u4ea7\u751f\u5c0f\u6982\u7387\u7684\u8bef\u5224\u3002\u5373\u5982\u679c\u8fd4\u56de false\uff0c\u5219\u4e00\u5b9a\u4e0d\u5728\u8fd9\u4e2a\u96c6\u5408\u5185\u3002\u800c\u5982\u679c\u8303\u56f4 true\uff0c\u5219\u6709\u53ef\u80fd\u5728\u8fd9\u4e2a\u96c6\u5408\u5185\u3002"),(0,o.yg)("p",null,"BloomFilter \u7d22\u5f15\u4e5f\u662f\u4ee5 Block \u4e3a\u7c92\u5ea6\u521b\u5efa\u7684\u3002\u6bcf\u4e2a Block \u4e2d\uff0c\u6307\u5b9a\u5217\u7684\u503c\u4f5c\u4e3a\u4e00\u4e2a\u96c6\u5408\u751f\u6210\u4e00\u4e2a BloomFilter \u7d22\u5f15\u6761\u76ee\uff0c\u7528\u4e8e\u5728\u67e5\u8be2\u65f6\u5feb\u901f\u8fc7\u6ee4\u4e0d\u6ee1\u8db3\u6761\u4ef6\u7684\u6570\u636e\u3002"),(0,o.yg)("p",null,"\u4e0b\u9762\u901a\u8fc7\u5b9e\u4f8b\u6765\u770b\u770b Doris \u600e\u4e48\u521b\u5efa BloomFilter \u7d22\u5f15\u3002"),(0,o.yg)("h2",{id:"\u521b\u5efa-bloomfilter-\u7d22\u5f15"},"\u521b\u5efa BloomFilter \u7d22\u5f15"),(0,o.yg)("p",null,'Doris BloomFilter \u7d22\u5f15\u7684\u521b\u5efa\u662f\u901a\u8fc7\u5728\u5efa\u8868\u8bed\u53e5\u7684 PROPERTIES \u91cc\u52a0\u4e0a"bloom_filter_columns"="k1,k2,k3",\u8fd9\u4e2a\u5c5e\u6027\uff0ck1,k2,k3 \u662f\u8981\u521b\u5efa\u7684 BloomFilter \u7d22\u5f15\u7684 Key \u5217\u540d\u79f0\uff0c\u4f8b\u5982\u4e0b\u9762\u5bf9\u8868\u91cc\u7684 saler_id,category_id \u521b\u5efa\u4e86 BloomFilter \u7d22\u5f15\u3002'),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE IF NOT EXISTS sale_detail_bloom  (\n    sale_date date NOT NULL COMMENT "\u9500\u552e\u65f6\u95f4",\n    customer_id int NOT NULL COMMENT "\u5ba2\u6237\u7f16\u53f7",\n    saler_id int NOT NULL COMMENT "\u9500\u552e\u5458",\n    sku_id int NOT NULL COMMENT "\u5546\u54c1\u7f16\u53f7",\n    category_id int NOT NULL COMMENT "\u5546\u54c1\u5206\u7c7b",\n    sale_count int NOT NULL COMMENT "\u9500\u552e\u6570\u91cf",\n    sale_price DECIMAL(12,2) NOT NULL COMMENT "\u5355\u4ef7",\n    sale_amt DECIMAL(20,2)  COMMENT "\u9500\u552e\u603b\u91d1\u989d"\n)\nDuplicate  KEY(sale_date, customer_id,saler_id,sku_id,category_id)\nDISTRIBUTED BY HASH(saler_id) BUCKETS 10\nPROPERTIES (\n"replication_num" = "1",\n"bloom_filter_columns"="saler_id,category_id"\n);\n')),(0,o.yg)("h2",{id:"\u67e5\u770b-bloomfilter-\u7d22\u5f15"},"\u67e5\u770b BloomFilter \u7d22\u5f15"),(0,o.yg)("p",null,"\u67e5\u770b\u5728\u8868\u4e0a\u5efa\u7acb\u7684 BloomFilter \u7d22\u5f15\u662f\u4f7f\u7528\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE TABLE table_name;\n")),(0,o.yg)("h2",{id:"\u5220\u9664-bloomfilter-\u7d22\u5f15"},"\u5220\u9664 BloomFilter \u7d22\u5f15"),(0,o.yg)("p",null,"\u5220\u9664\u7d22\u5f15\u5373\u4e3a\u5c06\u7d22\u5f15\u5217\u4ece bloom_filter_columns \u5c5e\u6027\u4e2d\u79fb\u9664\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-SQL"},'ALTER TABLE table_name SET ("bloom_filter_columns" = "");\n')),(0,o.yg)("h2",{id:"\u4fee\u6539-bloomfilter-\u7d22\u5f15"},"\u4fee\u6539 BloomFilter \u7d22\u5f15"),(0,o.yg)("p",null,"\u4fee\u6539\u7d22\u5f15\u5373\u4e3a\u4fee\u6539\u8868\u7684 bloom_filter_columns \u5c5e\u6027\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-SQL"},'ALTER TABLE table_name SET ("bloom_filter_columns" = "k1,k3");\n')),(0,o.yg)("h2",{id:"bloomfilter-\u4f7f\u7528\u573a\u666f"},"BloomFilter \u4f7f\u7528\u573a\u666f"),(0,o.yg)("p",null,"\u6ee1\u8db3\u4ee5\u4e0b\u51e0\u4e2a\u6761\u4ef6\u65f6\u53ef\u4ee5\u8003\u8651\u5bf9\u67d0\u5217\u5efa\u7acb Bloom Filter \u7d22\u5f15\uff1a"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"\u9996\u5148 BloomFilter \u9002\u7528\u4e8e\u975e\u524d\u7f00\u8fc7\u6ee4\u3002")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"\u67e5\u8be2\u4f1a\u6839\u636e\u8be5\u5217\u9ad8\u9891\u8fc7\u6ee4\uff0c\u800c\u4e14\u67e5\u8be2\u6761\u4ef6\u5927\u591a\u662f in \u548c = \u8fc7\u6ee4\u3002")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"\u4e0d\u540c\u4e8e Bitmap, BloomFilter \u9002\u7528\u4e8e\u9ad8\u57fa\u6570\u5217\u3002\u6bd4\u5982 UserID\u3002\u56e0\u4e3a\u5982\u679c\u521b\u5efa\u5728\u4f4e\u57fa\u6570\u7684\u5217\u4e0a\uff0c\u6bd4\u5982\u201c\u6027\u522b\u201d\u5217\uff0c\u5219\u6bcf\u4e2a Block \u51e0\u4e4e\u90fd\u4f1a\u5305\u542b\u6240\u6709\u53d6\u503c\uff0c\u5bfc\u81f4 BloomFilter \u7d22\u5f15\u5931\u53bb\u610f\u4e49\u3002"))),(0,o.yg)("h2",{id:"bloomfilter-\u4f7f\u7528\u6ce8\u610f"},"BloomFilter \u4f7f\u7528\u6ce8\u610f"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"\u4e0d\u652f\u6301\u5bf9 Tinyint\u3001Float\u3001Double \u7c7b\u578b\u7684\u5217\u5efa Bloom Filter \u7d22\u5f15\u3002")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Bloom Filter \u7d22\u5f15\u53ea\u5bf9 in \u548c = \u8fc7\u6ee4\u67e5\u8be2\u6709\u52a0\u901f\u6548\u679c\u3002")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"\u5982\u679c\u8981\u67e5\u770b\u67d0\u4e2a\u67e5\u8be2\u662f\u5426\u547d\u4e2d\u4e86 Bloom Filter \u7d22\u5f15\uff0c\u53ef\u4ee5\u901a\u8fc7\u67e5\u8be2\u7684 Profile \u4fe1\u606f\u67e5\u770b\u3002"))))}c.isMDXComponent=!0},315846:(e,l,t)=>{t.d(l,{A:()=>r});const r=t.p+"assets/images/Bloom_filter.svg-e437ea5c65c96143c00cdb97711e1b10.png"}}]);