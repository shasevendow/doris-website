"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[25723],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>o});var n=a(296540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var y=n.createContext({}),p=function(e){var t=n.useContext(y),a=t;return e&&(a="function"==typeof e?e(t):g(g({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(y.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},N=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,y=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(a),N=l,o=d["".concat(y,".").concat(N)]||d[N]||u[N]||r;return a?n.createElement(o,g(g({ref:t},m),{},{components:a})):n.createElement(o,g({ref:t},m))}));function o(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,g=new Array(r);g[0]=N;var i={};for(var y in t)hasOwnProperty.call(t,y)&&(i[y]=t[y]);i.originalType=e,i[d]="string"==typeof e?e:l,g[1]=i;for(var p=2;p<r;p++)g[p]=a[p];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},831158:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(58168),l=(a(296540),a(15680));const r={title:"\u7edf\u8ba1\u4fe1\u606f",language:"zh-CN"},g=void 0,i={unversionedId:"query/nereids/statistics",id:"query/nereids/statistics",title:"\u7edf\u8ba1\u4fe1\u606f",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/query/nereids/statistics.md",sourceDirName:"query/nereids",slug:"/query/nereids/statistics",permalink:"/zh-CN/docs/dev/query/nereids/statistics",draft:!1,tags:[],version:"current",frontMatter:{title:"\u7edf\u8ba1\u4fe1\u606f",language:"zh-CN"},sidebar:"docs",previous:{title:"\u5168\u65b0\u4f18\u5316\u5668\u4ecb\u7ecd",permalink:"/zh-CN/docs/dev/query/nereids/"},next:{title:"Pipeline \u6267\u884c\u5f15\u64ce",permalink:"/zh-CN/docs/dev/query/pipeline/pipeline-execution-engine"}},y={},p=[{value:"1. \u6536\u96c6\u7edf\u8ba1\u4fe1\u606f",id:"1-\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f",level:2},{value:"1.1 \u4f7f\u7528ANALYZE\u8bed\u53e5\u624b\u52a8\u6536\u96c6",id:"11-\u4f7f\u7528analyze\u8bed\u53e5\u624b\u52a8\u6536\u96c6",level:3},{value:"1.2 \u81ea\u52a8\u6536\u96c6",id:"12-\u81ea\u52a8\u6536\u96c6",level:3},{value:"2. \u4f5c\u4e1a\u7ba1\u7406",id:"2-\u4f5c\u4e1a\u7ba1\u7406",level:2},{value:"2.1 \u67e5\u770b\u7edf\u8ba1\u4f5c\u4e1a",id:"21-\u67e5\u770b\u7edf\u8ba1\u4f5c\u4e1a",level:3},{value:"2.2 \u67e5\u770b\u6bcf\u5217\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u60c5\u51b5",id:"22-\u67e5\u770b\u6bcf\u5217\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u60c5\u51b5",level:3},{value:"2.3 \u67e5\u770b\u5217\u7edf\u8ba1\u4fe1\u606f",id:"23-\u67e5\u770b\u5217\u7edf\u8ba1\u4fe1\u606f",level:3},{value:"2.4 \u8868\u6536\u96c6\u6982\u51b5",id:"24-\u8868\u6536\u96c6\u6982\u51b5",level:3},{value:"2.5 \u7ec8\u6b62\u7edf\u8ba1\u4f5c\u4e1a",id:"25-\u7ec8\u6b62\u7edf\u8ba1\u4f5c\u4e1a",level:3},{value:"3. \u4f1a\u8bdd\u53d8\u91cf\u53ca\u914d\u7f6e\u9879",id:"3-\u4f1a\u8bdd\u53d8\u91cf\u53ca\u914d\u7f6e\u9879",level:2},{value:"3.1 \u4f1a\u8bdd\u53d8\u91cf",id:"31-\u4f1a\u8bdd\u53d8\u91cf",level:3},{value:"3.2 FE\u914d\u7f6e\u9879",id:"32-fe\u914d\u7f6e\u9879",level:3},{value:"4. \u5e38\u89c1\u95ee\u9898",id:"4-\u5e38\u89c1\u95ee\u9898",level:2},{value:"4.1 ANALYZE\u63d0\u4ea4\u62a5\u9519\uff1aStats table not available...",id:"41-analyze\u63d0\u4ea4\u62a5\u9519stats-table-not-available",level:3},{value:"4.2 \u5927\u8868ANALYZE\u5931\u8d25",id:"42-\u5927\u8868analyze\u5931\u8d25",level:3}],m={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,l.yg)(d,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"\u7edf\u8ba1\u4fe1\u606f"},"\u7edf\u8ba1\u4fe1\u606f"),(0,l.yg)("p",null,"\u901a\u8fc7\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f\u6709\u52a9\u4e8e\u4f18\u5316\u5668\u4e86\u89e3\u6570\u636e\u5206\u5e03\u7279\u6027\uff0c\u5728\u8fdb\u884cCBO\uff08\u57fa\u4e8e\u6210\u672c\u4f18\u5316\uff09\u65f6\u4f18\u5316\u5668\u4f1a\u5229\u7528\u8fd9\u4e9b\u7edf\u8ba1\u4fe1\u606f\u6765\u8ba1\u7b97\u8c13\u8bcd\u7684\u9009\u62e9\u6027\uff0c\u5e76\u4f30\u7b97\u6bcf\u4e2a\u6267\u884c\u8ba1\u5212\u7684\u6210\u672c\u3002\u4ece\u800c\u9009\u62e9\u66f4\u4f18\u7684\u8ba1\u5212\u4ee5\u5927\u5e45\u63d0\u5347\u67e5\u8be2\u6548\u7387\u3002"),(0,l.yg)("p",null,"\u5f53\u524d\u6536\u96c6\u5217\u7684\u5982\u4e0b\u4fe1\u606f\uff1a"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"left"},"\u4fe1\u606f"),(0,l.yg)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"row_count")),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u603b\u884c\u6570")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"data_size")),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u603b\u6570\u636e\u91cf")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"avg_size_byte")),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u503c\u7684\u5e73\u5747\u2ed3\u5ea6")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"ndv")),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u4e0d\u540c\u503c\u6570\u91cf")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"min")),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u6700\u5c0f\u503c")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"max")),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u6700\u2f24\u503c")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"null_count")),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u7a7a\u503c\u6570\u91cf")))),(0,l.yg)("br",null),(0,l.yg)("h2",{id:"1-\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f"},"1. \u6536\u96c6\u7edf\u8ba1\u4fe1\u606f"),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"11-\u4f7f\u7528analyze\u8bed\u53e5\u624b\u52a8\u6536\u96c6"},"1.1 \u4f7f\u7528ANALYZE\u8bed\u53e5\u624b\u52a8\u6536\u96c6"),(0,l.yg)("p",null,"Doris\u652f\u6301\u7528\u6237\u901a\u8fc7\u63d0\u4ea4ANALYZE\u8bed\u53e5\u6765\u624b\u52a8\u89e6\u53d1\u7edf\u8ba1\u4fe1\u606f\u7684\u6536\u96c6\u548c\u66f4\u65b0\u3002"),(0,l.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-SQL"},"ANALYZE < TABLE table_name | DATABASE db_name >\n    [ (column_name [, ...]) ]\n    [ [ WITH SYNC ] [ WITH SAMPLE PERCENT | ROWS ] ];\n")),(0,l.yg)("p",null,"\u5176\u4e2d\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"table_name: \u6307\u5b9a\u7684\u76ee\u6807\u8868\u3002\u53ef\u4ee5\u662f \xa0",(0,l.yg)("inlineCode",{parentName:"li"},"db_name.table_name"),"\xa0 \u5f62\u5f0f\u3002"),(0,l.yg)("li",{parentName:"ul"},"column_name: \u6307\u5b9a\u7684\u76ee\u6807\u5217\u3002\u5fc5\u987b\u662f \xa0",(0,l.yg)("inlineCode",{parentName:"li"},"table_name"),"\xa0 \u4e2d\u5b58\u5728\u7684\u5217\uff0c\u591a\u4e2a\u5217\u540d\u79f0\u7528\u9017\u53f7\u5206\u9694\u3002"),(0,l.yg)("li",{parentName:"ul"},"sync\uff1a\u540c\u6b65\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f\u3002\u6536\u96c6\u5b8c\u540e\u8fd4\u56de\u3002\u82e5\u4e0d\u6307\u5b9a\u5219\u5f02\u6b65\u6267\u884c\u5e76\u8fd4\u56deJOB ID\u3002"),(0,l.yg)("li",{parentName:"ul"},"sample percent | rows\uff1a\u62bd\u6837\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f\u3002\u53ef\u4ee5\u6307\u5b9a\u62bd\u6837\u6bd4\u4f8b\u6216\u8005\u62bd\u6837\u884c\u6570\u3002")),(0,l.yg)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff08\u4e0d\u6307\u5b9aWITH SAMPLE)\uff0c\u4f1a\u5bf9\u4e00\u5f20\u8868\u5168\u91cf\u91c7\u6837\u3002 \u5bf9\u4e8e\u6bd4\u8f83\u5927\u7684\u8868\uff085GiB\u4ee5\u4e0a\uff09\uff0c\u4ece\u96c6\u7fa4\u8d44\u6e90\u7684\u89d2\u5ea6\u51fa\u53d1\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u6211\u4eec\u5efa\u8bae\u91c7\u6837\u6536\u96c6\uff0c\u91c7\u6837\u7684\u884c\u6570\u5efa\u8bae\u4e0d\u4f4e\u4e8e400\u4e07\u884c\u3002\u4e0b\u9762\u662f\u4e00\u4e9b\u4f8b\u5b50"),(0,l.yg)("p",null,"\u5bf9\u4e00\u5f20\u8868\u5168\u91cf\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ANALYZE TABLE lineitem;\n")),(0,l.yg)("p",null,"\u5bf9\u4e00\u5f20\u8868\u6309\u716710%\u7684\u6bd4\u4f8b\u91c7\u6837\u6536\u96c6\u7edf\u8ba1\u6570\u636e\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ANALYZE TABLE lineitem WITH SAMPLE PERCENT 10;\n")),(0,l.yg)("p",null,"\u5bf9\u4e00\u5f20\u8868\u6309\u91c7\u683710\u4e07\u884c\u6536\u96c6\u7edf\u8ba1\u6570\u636e"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ANALYZE TABLE lineitem WITH SAMPLE ROWS 100000;\n")),(0,l.yg)("br",null),(0,l.yg)("h3",{id:"12-\u81ea\u52a8\u6536\u96c6"},"1.2 \u81ea\u52a8\u6536\u96c6"),(0,l.yg)("p",null,"\u6b64\u529f\u80fd\u4ece2.0.3\u5f00\u59cb\u6b63\u5f0f\u652f\u6301\uff0c\u9ed8\u8ba4\u4e3a\u5168\u5929\u5f00\u542f\u72b6\u6001\u3002\u4e0b\u9762\u5bf9\u5176\u57fa\u672c\u8fd0\u884c\u903b\u8f91\u8fdb\u884c\u9610\u8ff0\uff0c\u5728\u6bcf\u6b21\u5bfc\u5165\u4e8b\u52a1\u63d0\u4ea4\u540e\uff0cDoris\u5c06\u8bb0\u5f55\u672c\u6b21\u5bfc\u5165\u4e8b\u52a1\u66f4\u65b0\u7684\u8868\u884c\u6570\u7528\u4ee5\u4f30\u7b97\u5f53\u524d\u5df2\u6709\u8868\u7684\u7edf\u8ba1\u6570\u636e\u7684\u5065\u5eb7\u5ea6\uff08\u5bf9\u4e8e\u6ca1\u6709\u6536\u96c6\u8fc7\u7edf\u8ba1\u6570\u636e\u7684\u8868\uff0c\u5176\u5065\u5eb7\u5ea6\u4e3a0\uff09\u3002\u5f53\u8868\u7684\u5065\u5eb7\u5ea6\u4f4e\u4e8e60\uff08\u53ef\u901a\u8fc7\u53c2\u6570",(0,l.yg)("inlineCode",{parentName:"p"},"table_stats_health_threshold"),"\u8c03\u8282\uff09\u65f6\uff0cDoris\u4f1a\u8ba4\u4e3a\u8be5\u8868\u7684\u7edf\u8ba1\u4fe1\u606f\u5df2\u7ecf\u8fc7\u65f6\uff0c\u5e76\u5728\u4e4b\u540e\u89e6\u53d1\u5bf9\u8be5\u8868\u7684\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u4f5c\u4e1a\u3002\u800c\u5bf9\u4e8e\u7edf\u8ba1\u4fe1\u606f\u5065\u5eb7\u5ea6\u9ad8\u4e8e60\u7684\u8868\uff0c\u5219\u4e0d\u4f1a\u91cd\u590d\u8fdb\u884c\u6536\u96c6\u3002"),(0,l.yg)("p",null,"\u7edf\u8ba1\u4fe1\u606f\u7684\u6536\u96c6\u4f5c\u4e1a\u672c\u8eab\u9700\u8981\u5360\u7528\u4e00\u5b9a\u7684\u7cfb\u7edf\u8d44\u6e90\uff0c\u4e3a\u4e86\u5c3d\u53ef\u80fd\u964d\u4f4e\u5f00\u9500\uff0cDoris\u4f1a\u4f7f\u7528\u91c7\u6837\u7684\u65b9\u5f0f\u53bb\u6536\u96c6\uff0c\u81ea\u52a8\u91c7\u6837\u9ed8\u8ba4\u91c7\u68374194304(2^22)\u884c\uff0c\u4ee5\u5c3d\u53ef\u80fd\u964d\u4f4e\u5bf9\u7cfb\u7edf\u9020\u6210\u7684\u8d1f\u62c5\u5e76\u5c3d\u5feb\u5b8c\u6210\u6536\u96c6\u4f5c\u4e1a\u3002\u5982\u679c\u5e0c\u671b\u91c7\u6837\u66f4\u591a\u7684\u884c\u4ee5\u83b7\u5f97\u66f4\u51c6\u786e\u7684\u6570\u636e\u5206\u5e03\u4fe1\u606f\uff0c\u53ef\u901a\u8fc7\u8c03\u6574\u53c2\u6570",(0,l.yg)("inlineCode",{parentName:"p"},"huge_table_default_sample_rows"),"\u589e\u5927\u91c7\u6837\u884c\u6570\u3002\u7528\u6237\u8fd8\u53ef\u901a\u8fc7\u53c2\u6570\u63a7\u5236\u5c0f\u8868\u5168\u91cf\u6536\u96c6\uff0c\u5927\u8868\u6536\u96c6\u65f6\u95f4\u95f4\u9694\u7b49\u884c\u4e3a\u3002\u8be6\u7ec6\u914d\u7f6e\u8bf7\u53c2\u8003\u8be6",(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/query/nereids/statistics#31-%E4%BC%9A%E8%AF%9D%E5%8F%98%E9%87%8F"},"3.1"),"\u3002"),(0,l.yg)("p",null,"\u5982\u679c\u62c5\u5fc3\u81ea\u52a8\u6536\u96c6\u4f5c\u4e1a\u5bf9\u4e1a\u52a1\u9020\u6210\u5e72\u6270\uff0c\u53ef\u7ed3\u5408\u81ea\u8eab\u9700\u6c42\u901a\u8fc7\u8bbe\u7f6e\u53c2\u6570",(0,l.yg)("inlineCode",{parentName:"p"},"auto_analyze_start_time"),"\u548c\u53c2\u6570",(0,l.yg)("inlineCode",{parentName:"p"},"auto_analyze_end_time"),"\u6307\u5b9a\u81ea\u52a8\u6536\u96c6\u4f5c\u4e1a\u5728\u4e1a\u52a1\u8d1f\u8f7d\u8f83\u4f4e\u7684\u65f6\u95f4\u6bb5\u6267\u884c\u3002\u4e5f\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u53c2\u6570",(0,l.yg)("inlineCode",{parentName:"p"},"enable_auto_analyze")," \u4e3a",(0,l.yg)("inlineCode",{parentName:"p"},"false"),"\u6765\u5f7b\u5e95\u5173\u95ed\u672c\u529f\u80fd\u3002"),(0,l.yg)("p",null,"External catalog \u9ed8\u8ba4\u4e0d\u53c2\u4e0e\u81ea\u52a8\u6536\u96c6\u3002\u56e0\u4e3a external catalog \u5f80\u5f80\u5305\u542b\u6d77\u91cf\u5386\u53f2\u6570\u636e\uff0c\u5982\u679c\u53c2\u4e0e\u81ea\u52a8\u6536\u96c6\uff0c\u53ef\u80fd\u5360\u7528\u8fc7\u591a\u8d44\u6e90\u3002\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e catalog \u7684 property \u6765\u6253\u5f00\u548c\u5173\u95ed external catalog \u7684\u81ea\u52a8\u6536\u96c6\u3002"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER CATALOG external_catalog SET PROPERTIES ('enable.auto.analyze'='true'); // \u6253\u5f00\u81ea\u52a8\u6536\u96c6\nALTER CATALOG external_catalog SET PROPERTIES ('enable.auto.analyze'='false'); // \u5173\u95ed\u81ea\u52a8\u6536\u96c6\n")),(0,l.yg)("br",null),(0,l.yg)("h2",{id:"2-\u4f5c\u4e1a\u7ba1\u7406"},"2. \u4f5c\u4e1a\u7ba1\u7406"),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"21-\u67e5\u770b\u7edf\u8ba1\u4f5c\u4e1a"},"2.1 \u67e5\u770b\u7edf\u8ba1\u4f5c\u4e1a"),(0,l.yg)("p",null,"\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"p"},"SHOW ANALYZE")," \u6765\u67e5\u770b\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u4f5c\u4e1a\u7684\u4fe1\u606f\u3002"),(0,l.yg)("p",null,"\u8bed\u6cd5\u5982\u4e0b\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-SQL"},'SHOW [AUTO] ANALYZE < table_name | job_id >\n    [ WHERE [ STATE = [ "PENDING" | "RUNNING" | "FINISHED" | "FAILED" ] ] ];\n')),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"AUTO\uff1a\u4ec5\u4ec5\u5c55\u793a\u81ea\u52a8\u6536\u96c6\u5386\u53f2\u4f5c\u4e1a\u4fe1\u606f\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\u9ed8\u8ba4\u53ea\u4fdd\u5b58\u8fc7\u53bb20000\u4e2a\u6267\u884c\u5b8c\u6bd5\u7684\u81ea\u52a8\u6536\u96c6\u4f5c\u4e1a\u7684\u72b6\u6001\u3002"),(0,l.yg)("li",{parentName:"ul"},"table_name\uff1a\u8868\u540d\uff0c\u6307\u5b9a\u540e\u53ef\u67e5\u770b\u8be5\u8868\u5bf9\u5e94\u7684\u7edf\u8ba1\u4f5c\u4e1a\u4fe1\u606f\u3002\u53ef\u4ee5\u662f \xa0",(0,l.yg)("inlineCode",{parentName:"li"},"db_name.table_name"),"\xa0 \u5f62\u5f0f\u3002\u4e0d\u6307\u5b9a\u65f6\u8fd4\u56de\u6240\u6709\u7edf\u8ba1\u4f5c\u4e1a\u4fe1\u606f\u3002"),(0,l.yg)("li",{parentName:"ul"},"job_id\uff1a\u7edf\u8ba1\u4fe1\u606f\u4f5c\u4e1a ID\uff0c\u6267\u884c ",(0,l.yg)("inlineCode",{parentName:"li"},"ANALYZE")," \u5f02\u6b65\u6536\u96c6\u65f6\u5f97\u5230\u3002\u4e0d\u6307\u5b9aid\u65f6\u6b64\u547d\u4ee4\u8fd4\u56de\u6240\u6709\u7edf\u8ba1\u4f5c\u4e1a\u4fe1\u606f\u3002")),(0,l.yg)("p",null,"\u8f93\u51fa\uff1a"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"left"},"\u5217\u540d"),(0,l.yg)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"job_id")),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u7edf\u8ba1\u4f5c\u4e1a ID")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"catalog_name")),(0,l.yg)("td",{parentName:"tr",align:"left"},"catalog \u540d\u79f0")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"db_name")),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u6570\u636e\u5e93\u540d\u79f0")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"tbl_name")),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u8868\u540d\u79f0")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"col_name")),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u5217\u540d\u79f0\u5217\u8868")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"job_type")),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u4f5c\u4e1a\u7c7b\u578b")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"analysis_type")),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u7edf\u8ba1\u7c7b\u578b")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"message")),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u4f5c\u4e1a\u4fe1\u606f")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"last_exec_time_in_ms")),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u4e0a\u6b21\u6267\u884c\u65f6\u95f4")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"state")),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u4f5c\u4e1a\u72b6\u6001")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"schedule_type")),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u8c03\u5ea6\u65b9\u5f0f")))),(0,l.yg)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f8b\u5b50\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show analyze 245073\\G;\n*************************** 1. row ***************************\n              job_id: 245073\n        catalog_name: internal\n             db_name: default_cluster:tpch\n            tbl_name: lineitem\n            col_name: [l_returnflag,l_receiptdate,l_tax,l_shipmode,l_suppkey,l_shipdate,l_commitdate,l_partkey,l_orderkey,l_quantity,l_linestatus,l_comment,l_extendedprice,l_linenumber,l_discount,l_shipinstruct]\n            job_type: MANUAL\n       analysis_type: FUNDAMENTALS\n             message:\nlast_exec_time_in_ms: 2023-11-07 11:00:52\n               state: FINISHED\n            progress: 16 Finished  |  0 Failed  |  0 In Progress  |  16 Total\n       schedule_type: ONCE\n")),(0,l.yg)("br",null),(0,l.yg)("h3",{id:"22-\u67e5\u770b\u6bcf\u5217\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u60c5\u51b5"},"2.2 \u67e5\u770b\u6bcf\u5217\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u60c5\u51b5"),(0,l.yg)("p",null,"\u6bcf\u4e2a\u6536\u96c6\u4f5c\u4e1a\u4e2d\u53ef\u4ee5\u5305\u542b\u4e00\u5230\u591a\u4e2a\u4efb\u52a1\uff0c\u6bcf\u4e2a\u4efb\u52a1\u5bf9\u5e94\u4e00\u5217\u7684\u6536\u96c6\u3002\u7528\u6237\u53ef\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u67e5\u770b\u5177\u4f53\u6bcf\u5217\u7684\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u5b8c\u6210\u60c5\u51b5\u3002"),(0,l.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW ANALYZE TASK STATUS [job_id]\n")),(0,l.yg)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f8b\u5b50\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mysql> show analyze task status 20038 ;\n+---------+----------+---------+----------------------+----------+\n| task_id | col_name | message | last_exec_time_in_ms | state    |\n+---------+----------+---------+----------------------+----------+\n| 20039   | col4     |         | 2023-06-01 17:22:15  | FINISHED |\n| 20040   | col2     |         | 2023-06-01 17:22:15  | FINISHED |\n| 20041   | col3     |         | 2023-06-01 17:22:15  | FINISHED |\n| 20042   | col1     |         | 2023-06-01 17:22:15  | FINISHED |\n+---------+----------+---------+----------------------+----------+\n\n\n")),(0,l.yg)("br",null),(0,l.yg)("h3",{id:"23-\u67e5\u770b\u5217\u7edf\u8ba1\u4fe1\u606f"},"2.3 \u67e5\u770b\u5217\u7edf\u8ba1\u4fe1\u606f"),(0,l.yg)("p",null,"\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"p"},"SHOW COLUMN STATS")," \u6765\u67e5\u770b\u5217\u7684\u5404\u9879\u7edf\u8ba1\u6570\u636e\u3002"),(0,l.yg)("p",null,"\u8bed\u6cd5\u5982\u4e0b\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-SQL"},"SHOW COLUMN [cached] STATS table_name [ (column_name [, ...]) ];\n")),(0,l.yg)("p",null,"\u5176\u4e2d\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"cached: \u5c55\u793a\u5f53\u524dFE\u5185\u5b58\u7f13\u5b58\u4e2d\u7684\u7edf\u8ba1\u4fe1\u606f\u3002"),(0,l.yg)("li",{parentName:"ul"},"table_name: \u6536\u96c6\u7edf\u8ba1\u4fe1\u606f\u7684\u76ee\u6807\u8868\u3002\u53ef\u4ee5\u662f \xa0",(0,l.yg)("inlineCode",{parentName:"li"},"db_name.table_name"),"\xa0 \u5f62\u5f0f\u3002"),(0,l.yg)("li",{parentName:"ul"},"column_name: \u6307\u5b9a\u7684\u76ee\u6807\u5217\uff0c\u5fc5\u987b\u662f \xa0",(0,l.yg)("inlineCode",{parentName:"li"},"table_name"),"\xa0 \u4e2d\u5b58\u5728\u7684\u5217\uff0c\u591a\u4e2a\u5217\u540d\u79f0\u7528\u9017\u53f7\u5206\u9694\u3002")),(0,l.yg)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f8b\u5b50\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show column stats lineitem(l_tax)\\G;\n*************************** 1. row ***************************\n  column_name: l_tax\n        count: 6001215.0\n          ndv: 9.0\n     num_null: 0.0\n    data_size: 4.800972E7\navg_size_byte: 8.0\n          min: 0.00\n          max: 0.08\n       method: FULL\n         type: FUNDAMENTALS\n      trigger: MANUAL\n  query_times: 0\n updated_time: 2023-11-07 11:00:46\n\n")),(0,l.yg)("br",null),(0,l.yg)("h3",{id:"24-\u8868\u6536\u96c6\u6982\u51b5"},"2.4 \u8868\u6536\u96c6\u6982\u51b5"),(0,l.yg)("p",null,"\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"p"},"SHOW TABLE STATS")," \u67e5\u770b\u8868\u7684\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u6982\u51b5\u3002"),(0,l.yg)("p",null,"\u8bed\u6cd5\u5982\u4e0b\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-SQL"},"SHOW TABLE STATS table_name;\n")),(0,l.yg)("p",null,"\u5176\u4e2d\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"table_name: \u76ee\u6807\u8868\u8868\u540d\u3002\u53ef\u4ee5\u662f \xa0",(0,l.yg)("inlineCode",{parentName:"li"},"db_name.table_name"),"\xa0 \u5f62\u5f0f\u3002")),(0,l.yg)("p",null,"\u8f93\u51fa\uff1a"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:"left"},"\u5217\u540d"),(0,l.yg)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"updated_rows")),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u81ea\u4e0a\u6b21ANALYZE\u4ee5\u6765\u8be5\u8868\u7684\u66f4\u65b0\u884c\u6570")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"query_times")),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u4fdd\u7559\u5217\uff0c\u540e\u7eed\u7248\u672c\u7528\u4ee5\u8bb0\u5f55\u8be5\u8868\u67e5\u8be2\u6b21\u6570")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"row_count")),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u884c\u6570\uff08\u4e0d\u53cd\u6620\u547d\u4ee4\u6267\u884c\u65f6\u7684\u51c6\u786e\u884c\u6570\uff09")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"updated_time")),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u4e0a\u6b21\u66f4\u65b0\u65f6\u95f4")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"columns")),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u6536\u96c6\u8fc7\u7edf\u8ba1\u4fe1\u606f\u7684\u5217")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:"left"},(0,l.yg)("inlineCode",{parentName:"td"},"trigger")),(0,l.yg)("td",{parentName:"tr",align:"left"},"\u89e6\u53d1\u65b9\u5f0f")))),(0,l.yg)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f8b\u5b50\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show table stats lineitem \\G;\n*************************** 1. row ***************************\nupdated_rows: 0\n query_times: 0\n   row_count: 6001215\nupdated_time: 2023-11-07\n     columns: [l_returnflag, l_receiptdate, l_tax, l_shipmode, l_suppkey, l_shipdate, l_commitdate, l_partkey, l_orderkey, l_quantity, l_linestatus, l_comment, l_extendedprice, l_linenumber, l_discount, l_shipinstruct]\n     trigger: MANUAL\n")),(0,l.yg)("br",null),(0,l.yg)("h3",{id:"25-\u7ec8\u6b62\u7edf\u8ba1\u4f5c\u4e1a"},"2.5 \u7ec8\u6b62\u7edf\u8ba1\u4f5c\u4e1a"),(0,l.yg)("p",null,"\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"p"},"KILL ANALYZE")," \u6765\u7ec8\u6b62\u6b63\u5728\u8fd0\u884c\u7684\u7edf\u8ba1\u4f5c\u4e1a\u3002"),(0,l.yg)("p",null,"\u8bed\u6cd5\u5982\u4e0b\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-SQL"},"KILL ANALYZE job_id;\n")),(0,l.yg)("p",null,"\u5176\u4e2d\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"job_id\uff1a\u7edf\u8ba1\u4fe1\u606f\u4f5c\u4e1a ID\u3002\u6267\u884c ",(0,l.yg)("inlineCode",{parentName:"li"},"ANALYZE")," \u5f02\u6b65\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f\u65f6\u6240\u8fd4\u56de\u7684\u503c\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,l.yg)("inlineCode",{parentName:"li"},"SHOW ANALYZE")," \u8bed\u53e5\u83b7\u53d6\u3002")),(0,l.yg)("p",null,"\u793a\u4f8b\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u7ec8\u6b62 ID \u4e3a 52357 \u7684\u7edf\u8ba1\u4f5c\u4e1a\u3002")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-SQL"},"mysql> KILL ANALYZE 52357;\n")),(0,l.yg)("br",null),(0,l.yg)("h2",{id:"3-\u4f1a\u8bdd\u53d8\u91cf\u53ca\u914d\u7f6e\u9879"},"3. \u4f1a\u8bdd\u53d8\u91cf\u53ca\u914d\u7f6e\u9879"),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"31-\u4f1a\u8bdd\u53d8\u91cf"},"3.1 \u4f1a\u8bdd\u53d8\u91cf"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u4f1a\u8bdd\u53d8\u91cf"),(0,l.yg)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"auto_analyze_start_time"),(0,l.yg)("td",{parentName:"tr",align:null},"\u81ea\u52a8\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u5f00\u59cb\u65f6\u95f4"),(0,l.yg)("td",{parentName:"tr",align:null},"00:00:00")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"auto_analyze_end_time"),(0,l.yg)("td",{parentName:"tr",align:null},"\u81ea\u52a8\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u7ed3\u675f\u65f6\u95f4"),(0,l.yg)("td",{parentName:"tr",align:null},"23:59:59")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"enable_auto_analyze"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5f00\u542f\u81ea\u52a8\u6536\u96c6\u529f\u80fd"),(0,l.yg)("td",{parentName:"tr",align:null},"true")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"huge_table_default_sample_rows"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5bf9\u5927\u8868\u7684\u91c7\u6837\u884c\u6570"),(0,l.yg)("td",{parentName:"tr",align:null},"4194304")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"huge_table_lower_bound_size_in_bytes"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5927\u5c0f\u8d85\u8fc7\u8be5\u503c\u7684\u7684\u8868\uff0c\u5728\u81ea\u52a8\u6536\u96c6\u65f6\u5c06\u4f1a\u81ea\u52a8\u901a\u8fc7\u91c7\u6837\u6536\u96c6\u7edf\u8ba1\u4fe1\u606f"),(0,l.yg)("td",{parentName:"tr",align:null},"0")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"huge_table_auto_analyze_interval_in_millis"),(0,l.yg)("td",{parentName:"tr",align:null},"\u63a7\u5236\u5bf9\u5927\u8868\u7684\u81ea\u52a8ANALYZE\u7684\u6700\u5c0f\u65f6\u95f4\u95f4\u9694\uff0c\u5728\u8be5\u65f6\u95f4\u95f4\u9694\u5185\u5927\u5c0f\u8d85\u8fc7huge_table_lower_bound_size_in_bytes * 5\u7684\u8868\u4ec5ANALYZE\u4e00\u6b21"),(0,l.yg)("td",{parentName:"tr",align:null},"0")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table_stats_health_threshold"),(0,l.yg)("td",{parentName:"tr",align:null},"\u53d6\u503c\u57280-100\u4e4b\u95f4\uff0c\u5f53\u81ea\u4e0a\u6b21\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u64cd\u4f5c\u4e4b\u540e\uff0c\u6570\u636e\u66f4\u65b0\u91cf\u8fbe\u5230 (100 - table_stats_health_threshold)% \uff0c\u8ba4\u4e3a\u8be5\u8868\u7684\u7edf\u8ba1\u4fe1\u606f\u5df2\u8fc7\u65f6"),(0,l.yg)("td",{parentName:"tr",align:null},"60")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"analyze_timeout"),(0,l.yg)("td",{parentName:"tr",align:null},"\u63a7\u5236ANALYZE\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u79d2"),(0,l.yg)("td",{parentName:"tr",align:null},"43200")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"auto_analyze_table_width_threshold"),(0,l.yg)("td",{parentName:"tr",align:null},"\u63a7\u5236\u81ea\u52a8\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u5904\u7406\u7684\u6700\u5927\u8868\u5bbd\u5ea6\uff0c\u5217\u6570\u5927\u4e8e\u8be5\u503c\u7684\u8868\u4e0d\u4f1a\u53c2\u4e0e\u81ea\u52a8\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6"),(0,l.yg)("td",{parentName:"tr",align:null},"100")))),(0,l.yg)("br",null),(0,l.yg)("h3",{id:"32-fe\u914d\u7f6e\u9879"},"3.2 FE\u914d\u7f6e\u9879"),(0,l.yg)("p",null,"\u4e0b\u9762\u7684FE\u914d\u7f6e\u9879\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u65e0\u9700\u5173\u6ce8"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"FE\u914d\u7f6e\u9879"),(0,l.yg)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"analyze_record_limit"),(0,l.yg)("td",{parentName:"tr",align:null},"\u63a7\u5236\u7edf\u8ba1\u4fe1\u606f\u4f5c\u4e1a\u6267\u884c\u8bb0\u5f55\u7684\u6301\u4e45\u5316\u884c\u6570"),(0,l.yg)("td",{parentName:"tr",align:null},"20000")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"stats_cache_size"),(0,l.yg)("td",{parentName:"tr",align:null},"FE\u4fa7\u7edf\u8ba1\u4fe1\u606f\u7f13\u5b58\u6761\u6570"),(0,l.yg)("td",{parentName:"tr",align:null},"500000")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"statistics_simultaneously_running_task_num"),(0,l.yg)("td",{parentName:"tr",align:null},"\u53ef\u540c\u65f6\u6267\u884c\u7684\u5f02\u6b65\u4f5c\u4e1a\u6570\u91cf"),(0,l.yg)("td",{parentName:"tr",align:null},"3")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"statistics_sql_mem_limit_in_bytes"),(0,l.yg)("td",{parentName:"tr",align:null},"\u63a7\u5236\u6bcf\u4e2a\u7edf\u8ba1\u4fe1\u606fSQL\u53ef\u5360\u7528\u7684BE\u5185\u5b58"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"2L * 1024 * 1024 * 1024")," (2GiB)")))),(0,l.yg)("br",null),(0,l.yg)("h2",{id:"4-\u5e38\u89c1\u95ee\u9898"},"4. \u5e38\u89c1\u95ee\u9898"),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"41-analyze\u63d0\u4ea4\u62a5\u9519stats-table-not-available"},"4.1 ANALYZE\u63d0\u4ea4\u62a5\u9519\uff1aStats table not available..."),(0,l.yg)("p",null,"\u6267\u884cANALYZE\u65f6\u7edf\u8ba1\u6570\u636e\u4f1a\u88ab\u5199\u5165\u5230\u5185\u90e8\u8868",(0,l.yg)("inlineCode",{parentName:"p"},"__internal_schema.column_statistics"),"\u4e2d\uff0cFE\u4f1a\u5728\u6267\u884cANALYZE\u524d\u68c0\u67e5\u8be5\u8868tablet\u72b6\u6001\uff0c\u5982\u679c\u5b58\u5728\u4e0d\u53ef\u7528\u7684tablet\u5219\u62d2\u7edd\u6267\u884c\u4f5c\u4e1a\u3002\u51fa\u73b0\u8be5\u62a5\u9519\u8bf7\u68c0\u67e5BE\u96c6\u7fa4\u72b6\u6001\u3002"),(0,l.yg)("p",null,"\u7528\u6237\u53ef\u901a\u8fc7",(0,l.yg)("inlineCode",{parentName:"p"},"SHOW BACKENDS\\G"),"\uff0c\u786e\u5b9aBE\u72b6\u6001\u662f\u5426\u6b63\u5e38\u3002\u5982\u679cBE\u72b6\u6001\u6b63\u5e38\uff0c\u53ef\u4f7f\u7528\u547d\u4ee4",(0,l.yg)("inlineCode",{parentName:"p"},"SHOW REPLICA STATUS FROM __internal_schema.[tbl_in_this_db]"),"\uff0c\u68c0\u67e5\u8be5\u5e93\u4e0btablet\u72b6\u6001\uff0c\u786e\u4fddtablet\u72b6\u6001\u6b63\u5e38\u3002"),(0,l.yg)("br",null),(0,l.yg)("h3",{id:"42-\u5927\u8868analyze\u5931\u8d25"},"4.2 \u5927\u8868ANALYZE\u5931\u8d25"),(0,l.yg)("p",null,"\u7531\u4e8eANALYZE\u80fd\u591f\u4f7f\u7528\u7684\u8d44\u6e90\u53d7\u5230\u6bd4\u8f83\u4e25\u683c\u7684\u9650\u5236\uff0c\u5bf9\u4e00\u4e9b\u5927\u8868\u7684ANALYZE\u64cd\u4f5c\u6709\u53ef\u80fd\u8d85\u65f6\u6216\u8005\u8d85\u51faBE\u5185\u5b58\u9650\u5236\u3002\u8fd9\u4e9b\u60c5\u51b5\u4e0b\uff0c\u5efa\u8bae\u4f7f\u7528 ",(0,l.yg)("inlineCode",{parentName:"p"},"ANALYZE ... WITH SAMPLE..."),"\u3002"))}u.isMDXComponent=!0}}]);