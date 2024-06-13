"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[35397],{15680:(e,a,r)=>{r.d(a,{xA:()=>c,yg:()=>d});var n=r(296540);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function l(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?l(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function m(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var i=n.createContext({}),p=function(e){var a=n.useContext(i),r=a;return e&&(r="function"==typeof e?e(a):o(o({},a),e)),r},c=function(e){var a=p(e.components);return n.createElement(i.Provider,{value:a},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var r=e.components,t=e.mdxType,l=e.originalType,i=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),y=p(r),u=t,d=y["".concat(i,".").concat(u)]||y[u]||g[u]||l;return r?n.createElement(d,o(o({ref:a},c),{},{components:r})):n.createElement(d,o({ref:a},c))}));function d(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=r.length,o=new Array(l);o[0]=u;var m={};for(var i in a)hasOwnProperty.call(a,i)&&(m[i]=a[i]);m.originalType=e,m[y]="string"==typeof e?e:t,o[1]=m;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},376269:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>m,toc:()=>p});var n=r(58168),t=(r(296540),r(15680));const l={title:"\u5185\u5b58\u8ddf\u8e2a\u5668",language:"zh-CN"},o=void 0,m={unversionedId:"admin-manual/memory-management/memory-tracker",id:"version-2.1/admin-manual/memory-management/memory-tracker",title:"\u5185\u5b58\u8ddf\u8e2a\u5668",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/memory-management/memory-tracker.md",sourceDirName:"admin-manual/memory-management",slug:"/admin-manual/memory-management/memory-tracker",permalink:"/zh-CN/docs/admin-manual/memory-management/memory-tracker",draft:!1,tags:[],version:"2.1",frontMatter:{title:"\u5185\u5b58\u8ddf\u8e2a\u5668",language:"zh-CN"},sidebar:"docs",previous:{title:"HTTP \u5b89\u5168\u4f20\u8f93",permalink:"/zh-CN/docs/admin-manual/auth/fe-certificate"},next:{title:"\u5185\u5b58\u8d85\u9650\u9519\u8bef\u5206\u6790",permalink:"/zh-CN/docs/admin-manual/memory-management/memory-limit-exceeded-analysis"}},i={},p=[{value:"\u539f\u7406",id:"\u539f\u7406",level:2},{value:"\u67e5\u770b\u7edf\u8ba1\u7ed3\u679c",id:"\u67e5\u770b\u7edf\u8ba1\u7ed3\u679c",level:2},{value:"\u9996\u9875 <code>/mem_tracker</code>",id:"\u9996\u9875-mem_tracker",level:3},{value:"Global Type <code>/mem_tracker?type=global</code>",id:"global-type-mem_trackertypeglobal",level:3},{value:"Query Type <code>/mem_tracker?type=query</code>",id:"query-type-mem_trackertypequery",level:3},{value:"Load Type <code>/mem_tracker?type=load</code>",id:"load-type-mem_trackertypeload",level:3}],c={toc:p},y="wrapper";function g(e){let{components:a,...r}=e;return(0,t.yg)(y,(0,n.A)({},c,r,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"\u5185\u5b58\u8ddf\u8e2a\u5668"},"\u5185\u5b58\u8ddf\u8e2a\u5668"),(0,t.yg)("p",null,"\u5185\u5b58\u8ddf\u8e2a\u5668\uff08Memory Tracker\uff09\u8bb0\u5f55\u4e86 Doris BE \u8fdb\u7a0b\u5185\u5b58\u4f7f\u7528\uff0c\u5305\u62ec\u67e5\u8be2\u3001\u5bfc\u5165\u3001Compaction\u3001Schema Change \u7b49\u4efb\u52a1\u751f\u547d\u5468\u671f\u4e2d\u4f7f\u7528\u7684\u5185\u5b58\uff0c\u4ee5\u53ca\u5404\u9879\u7f13\u5b58\uff0c\u7528\u4e8e\u5185\u5b58\u63a7\u5236\u548c\u5206\u6790\u3002"),(0,t.yg)("version",{since:"1.2.0"},(0,t.yg)("h2",{id:"\u539f\u7406"},"\u539f\u7406"),(0,t.yg)("p",null,"\u7cfb\u7edf\u4e2d\u6bcf\u4e2a\u67e5\u8be2\u3001\u5bfc\u5165\u7b49\u4efb\u52a1\u521d\u59cb\u5316\u65f6\u90fd\u4f1a\u521b\u5efa\u81ea\u5df1\u7684 Memory Tracker\uff0c\u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\u5c06 Memory Tracker \u653e\u5165 TLS\uff08Thread Local Storage\uff09\u4e2d\uff0cBE\u8fdb\u7a0b\u7684\u6bcf\u6b21\u5185\u5b58\u7533\u8bf7\u548c\u91ca\u653e\uff0c\u90fd\u5c06\u5728 Mem Hook \u4e2d\u6d88\u8d39 Memory Tracker\uff0c\u5e76\u6700\u7ec8\u6c47\u603b\u540e\u5c55\u793a\u3002"),(0,t.yg)("p",null,"\u8be6\u7ec6\u8bbe\u8ba1\u5b9e\u73b0\u53ef\u4ee5\u53c2\u9605:\n",(0,t.yg)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/DORIS/DSIP-002%3A+Refactor+memory+tracker+on+BE"},"https://cwiki.apache.org/confluence/display/DORIS/DSIP-002%3A+Refactor+memory+tracker+on+BE"),"\n",(0,t.yg)("a",{parentName:"p",href:"https://shimo.im/docs/DT6JXDRkdTvdyV3G"},"https://shimo.im/docs/DT6JXDRkdTvdyV3G")),(0,t.yg)("h2",{id:"\u67e5\u770b\u7edf\u8ba1\u7ed3\u679c"},"\u67e5\u770b\u7edf\u8ba1\u7ed3\u679c"),(0,t.yg)("p",null,"\u5b9e\u65f6\u7684\u5185\u5b58\u7edf\u8ba1\u7ed3\u679c\u901a\u8fc7 Doris BE \u7684 Web \u9875\u9762\u67e5\u770b http://ip:webserver_port/mem_tracker\u3002\uff08webserver_port\u9ed8\u8ba48040\uff09\n\u5386\u53f2\u67e5\u8be2\u7684\u5185\u5b58\u7edf\u8ba1\u7ed3\u679c\u53ef\u4ee5\u67e5\u770b",(0,t.yg)("inlineCode",{parentName:"p"},"fe/log/fe.audit.log"),"\u4e2d\u6bcf\u4e2a\u67e5\u8be2\u7684",(0,t.yg)("inlineCode",{parentName:"p"},"peakMemoryBytes"),"\uff0c\u6216\u8005\u5728",(0,t.yg)("inlineCode",{parentName:"p"},"be/log/be.INFO"),"\u4e2d\u641c\u7d22",(0,t.yg)("inlineCode",{parentName:"p"},"Deregister query/load memory tracker, queryId"),"\u67e5\u770b\u5355\u4e2aBE\u4e0a\u6bcf\u4e2a\u67e5\u8be2\u7684\u5185\u5b58\u5cf0\u503c\u3002"),(0,t.yg)("h3",{id:"\u9996\u9875-mem_tracker"},"\u9996\u9875 ",(0,t.yg)("inlineCode",{parentName:"h3"},"/mem_tracker")),(0,t.yg)("p",null,(0,t.yg)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13197424/202889634-fbfdd2a1-e272-4101-8744-baf05c15c2dc.png",alt:"image"})),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"Type: \u5c06 Doris BE \u4f7f\u7528\u7684\u5185\u5b58\u5206\u4e3a\u5982\u4e0b\u51e0\u7c7b")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"process: \u8fdb\u7a0b\u603b\u5185\u5b58\uff0c\u6240\u6709\u5176\u4ed6type\u7684\u603b\u548c\u3002"),(0,t.yg)("li",{parentName:"ul"},"global: \u751f\u547d\u5468\u671f\u548c\u8fdb\u7a0b\u76f8\u540c\u7684\u5168\u5c40 Memory Tracker\uff0c\u4f8b\u5982\u5404\u4e2aCache\u3001Tablet Manager\u3001Storage Engine\u7b49\u3002"),(0,t.yg)("li",{parentName:"ul"},"query: \u6240\u6709\u67e5\u8be2\u7684\u5185\u5b58\u603b\u548c\u3002"),(0,t.yg)("li",{parentName:"ul"},"load: \u6240\u6709\u5bfc\u5165\u7684\u5185\u5b58\u603b\u548c\u3002"),(0,t.yg)("li",{parentName:"ul"},"tc/jemalloc_cache: \u901a\u7528\u5185\u5b58\u5206\u914d\u5668 TCMalloc \u6216 Jemalloc \u7684\u7f13\u5b58\uff0c\u5728 http://ip:webserver_port/memz \u53ef\u4ee5\u5b9e\u65f6\u67e5\u770b\u5230\u5185\u5b58\u5206\u914d\u5668\u539f\u59cb\u7684profile\u3002"),(0,t.yg)("li",{parentName:"ul"},"compaction\u3001schema_change\u3001consistency\u3001batch_load\u3001clone: \u5206\u522b\u5bf9\u5e94\u6240\u6709Compaction\u3001Schema Change\u3001Consistency\u3001Batch Load\u3001Clone\u4efb\u52a1\u7684\u5185\u5b58\u603b\u548c\u3002")),(0,t.yg)("ol",{start:2},(0,t.yg)("li",{parentName:"ol"},"Current Consumption(Bytes): \u5f53\u524d\u5185\u5b58\u503c\uff0c\u5355\u4f4dB\u3002"),(0,t.yg)("li",{parentName:"ol"},"Current Consumption(Normalize): \u5f53\u524d\u5185\u5b58\u503c\u7684 .G.M.K \u683c\u5f0f\u5316\u8f93\u51fa\u3002"),(0,t.yg)("li",{parentName:"ol"},"Peak Consumption(Bytes): BE\u8fdb\u7a0b\u542f\u52a8\u540e\u7684\u5185\u5b58\u5cf0\u503c\uff0c\u5355\u4f4dB\uff0cBE\u91cd\u542f\u540e\u91cd\u7f6e\u3002"),(0,t.yg)("li",{parentName:"ol"},"Peak Consumption(Normalize): BE\u8fdb\u7a0b\u542f\u52a8\u540e\u5185\u5b58\u5cf0\u503c\u7684 .G.M.K \u683c\u5f0f\u5316\u8f93\u51fa\uff0cBE\u91cd\u542f\u540e\u91cd\u7f6e\u3002")),(0,t.yg)("h3",{id:"global-type-mem_trackertypeglobal"},"Global Type ",(0,t.yg)("inlineCode",{parentName:"h3"},"/mem_tracker?type=global")),(0,t.yg)("p",null,(0,t.yg)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13197424/202910945-7ee2bb56-c0a3-4ccb-9422-841c64c65bad.png",alt:"image"})),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"Label: Memory Tracker\u540d\u79f0"),(0,t.yg)("li",{parentName:"ol"},"Parent Label: \u7528\u4e8e\u8868\u660e\u4e24\u4e2a Memory Tracker \u7684\u7236\u5b50\u5173\u7cfb\uff0cChild Tracker \u8bb0\u5f55\u7684\u5185\u5b58\u662f Parent Tracker \u7684\u5b50\u96c6\uff0cParent \u76f8\u540c\u7684\u4e0d\u540c Tracker \u8bb0\u5f55\u7684\u5185\u5b58\u53ef\u80fd\u5b58\u5728\u4ea4\u96c6\u3002")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Orphan: \u9ed8\u8ba4\u6d88\u8d39\u7684 Tracker\uff0c\u6ca1\u6709\u5355\u72ec\u6307\u5b9a Tracker \u7684\u5185\u5b58\u5c06\u9ed8\u8ba4\u8bb0\u5f55\u5230 Orphan\uff0cOrphan \u4e2d\u9664\u4e86\u4e0b\u8ff0\u7ec6\u5206\u7684 Child Tracker \u5916\uff0c\u8fd8\u5305\u62ec BRPC \u5728\u5185\u7684\u4e00\u4e9b\u4e0d\u65b9\u4fbf\u51c6\u786e\u7ec6\u5206\u7edf\u8ba1\u7684\u5185\u5b58\u3002"),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"LoadChannelMgr: \u6240\u6709\u5bfc\u5165\u7684 Load Channel \u9636\u6bb5\u5185\u5b58\u603b\u548c\uff0c\u7528\u4e8e\u5c06 Scan \u540e\u7684\u6570\u636e\u5199\u5165\u5230\u78c1\u76d8\u7684 Segment \u6587\u4ef6\u4e2d\uff0cOrphan\u7684\u5b50\u96c6\u3002"),(0,t.yg)("li",{parentName:"ul"},"StorageEngine:\uff0c\u5b58\u50a8\u5f15\u64ce\u52a0\u8f7d\u6570\u636e\u76ee\u5f55\u8fc7\u7a0b\u4e2d\u6d88\u8017\u7684\u5185\u5b58\uff0cOrphan\u7684\u5b50\u96c6\u3002"),(0,t.yg)("li",{parentName:"ul"},"SegCompaction: \u6240\u6709 SegCompaction \u4efb\u52a1\u7684\u5185\u5b58\u603b\u548c\uff0cOrphan\u7684\u5b50\u96c6\u3002"),(0,t.yg)("li",{parentName:"ul"},"SegmentMeta: memory use by segment meta data such as footer or index page\uff0cOrphan\u7684\u5b50\u96c6\u3002"),(0,t.yg)("li",{parentName:"ul"},"TabletManager: \u5b58\u50a8\u5f15\u64ce get\u3001add\u3001delete Tablet \u8fc7\u7a0b\u4e2d\u6d88\u8017\u7684\u5185\u5b58\uff0cOrphan\u7684\u5b50\u96c6\u3002"),(0,t.yg)("li",{parentName:"ul"},"BufferAllocator: \u4ec5\u7528\u4e8e\u975e\u5411\u91cf\u5316Partitioned Agg\u8fc7\u7a0b\u4e2d\u7684\u5185\u5b58\u590d\u7528\uff0cOrphan\u7684\u5b50\u96c6\u3002"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"DataPageCache: \u7528\u4e8e\u7f13\u5b58\u6570\u636e Page\uff0c\u7528\u4e8e\u52a0\u901f Scan\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"IndexPageCache: \u7528\u4e8e\u7f13\u5b58\u6570\u636e Page \u7684\u7d22\u5f15\uff0c\u7528\u4e8e\u52a0\u901f Scan\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"SegmentCache: \u7528\u4e8e\u7f13\u5b58\u5df2\u6253\u5f00\u7684 Segment\uff0c\u5982\u7d22\u5f15\u4fe1\u606f\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"DiskIO: \u7528\u4e8e\u7f13\u5b58 Disk IO \u6570\u636e\uff0c\u4ec5\u5728\u975e\u5411\u91cf\u5316\u4f7f\u7528\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"ChunkAllocator: \u7528\u4e8e\u7f13\u5b582\u7684\u5e42\u5927\u5c0f\u7684\u5185\u5b58\u5757\uff0c\u5728\u5e94\u7528\u5c42\u5185\u5b58\u590d\u7528\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"LastSuccessChannelCache: \u7528\u4e8e\u7f13\u5b58\u5bfc\u5165\u63a5\u6536\u7aef\u7684 LoadChannel\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"DeleteBitmap AggCache: Gets aggregated delete_bitmap on rowset_id and version\u3002"))),(0,t.yg)("h3",{id:"query-type-mem_trackertypequery"},"Query Type ",(0,t.yg)("inlineCode",{parentName:"h3"},"/mem_tracker?type=query")),(0,t.yg)("p",null,(0,t.yg)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13197424/202924569-c4f3c556-2f92-4375-962c-c71147704a27.png",alt:"image"})),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"Limit: \u5355\u4e2a\u67e5\u8be2\u4f7f\u7528\u7684\u5185\u5b58\u4e0a\u9650\uff0c",(0,t.yg)("inlineCode",{parentName:"li"},"show session variables"),"\u67e5\u770b\u548c\u4fee\u6539",(0,t.yg)("inlineCode",{parentName:"li"},"exec_mem_limit"),"\u3002"),(0,t.yg)("li",{parentName:"ol"},"Label: \u5355\u4e2a\u67e5\u8be2\u7684 Tracker \u7684 Label \u547d\u540d\u89c4\u5219\u4e3a",(0,t.yg)("inlineCode",{parentName:"li"},"Query#Id=xxx"),"\u3002"),(0,t.yg)("li",{parentName:"ol"},"Parent Label: Parent \u662f ",(0,t.yg)("inlineCode",{parentName:"li"},"Query#Id=xxx")," \u7684 Tracker \u8bb0\u5f55\u67e5\u8be2\u4e0d\u540c\u7b97\u5b50\u6267\u884c\u8fc7\u7a0b\u4f7f\u7528\u7684\u5185\u5b58\u3002")),(0,t.yg)("h3",{id:"load-type-mem_trackertypeload"},"Load Type ",(0,t.yg)("inlineCode",{parentName:"h3"},"/mem_tracker?type=load")),(0,t.yg)("p",null,(0,t.yg)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13197424/202925855-936889e3-c910-4ca5-bc12-1b9849a09c33.png",alt:"image"})),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"Limit: \u5bfc\u5165\u5206\u4e3a Fragment Scan \u548c Load Channel \u5199 Segment \u5230\u78c1\u76d8\u4e24\u4e2a\u9636\u6bb5\u3002Scan \u9636\u6bb5\u7684\u5185\u5b58\u4e0a\u9650\u901a\u8fc7",(0,t.yg)("inlineCode",{parentName:"li"},"show session variables"),"\u67e5\u770b\u548c\u4fee\u6539",(0,t.yg)("inlineCode",{parentName:"li"},"load_mem_limit"),"\uff1bSegment \u5199\u78c1\u76d8\u9636\u6bb5\u6bcf\u4e2a\u5bfc\u5165\u6ca1\u6709\u5355\u72ec\u7684\u5185\u5b58\u4e0a\u9650\uff0c\u800c\u662f\u6240\u6709\u5bfc\u5165\u7684\u603b\u4e0a\u9650\uff0c\u5bf9\u5e94 be.conf \u4e2d\u7684 ",(0,t.yg)("inlineCode",{parentName:"li"},"load_process_max_memory_limit_percent"),"\u3002"),(0,t.yg)("li",{parentName:"ol"},"Label: \u5355\u4e2a\u5bfc\u5165 Scan \u9636\u6bb5 Tracker \u7684 Label \u547d\u540d\u89c4\u5219\u4e3a",(0,t.yg)("inlineCode",{parentName:"li"},"Load#Id=xxx"),"\uff1b\u5355\u4e2a\u5bfc\u5165 Segment \u5199\u78c1\u76d8\u9636\u6bb5 Tracker \u7684 Label \u547d\u540d\u89c4\u5219\u4e3a",(0,t.yg)("inlineCode",{parentName:"li"},"LoadChannel#senderIp=xxx#loadID=xxx"),"\u3002"),(0,t.yg)("li",{parentName:"ol"},"Parent Label: Parent\u662f ",(0,t.yg)("inlineCode",{parentName:"li"},"Load#Id=xxx")," \u7684 Tracker \u8bb0\u5f55\u5bfc\u5165 Scan \u9636\u6bb5\u4e0d\u540c\u7b97\u5b50\u6267\u884c\u8fc7\u7a0b\u4f7f\u7528\u7684\u5185\u5b58\uff1bParent\u662f ",(0,t.yg)("inlineCode",{parentName:"li"},"LoadChannelMgrTrackerSet")," \u7684 Tracker \u8bb0\u5f55 Segment \u5199\u78c1\u76d8\u9636\u6bb5\u6bcf\u4e2a\u4e2d\u95f4\u6570\u636e\u7ed3\u6784 MemTable \u7684 Insert \u548c Flush \u78c1\u76d8\u8fc7\u7a0b\u4f7f\u7528\u7684\u5185\u5b58\uff0c\u7528 Label \u6700\u540e\u7684 ",(0,t.yg)("inlineCode",{parentName:"li"},"loadID")," \u5173\u8054 Segment \u5199\u78c1\u76d8\u9636\u6bb5 Tracker\u3002"))))}g.isMDXComponent=!0}}]);