"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[8593],{15680:(e,a,t)=>{t.d(a,{xA:()=>y,yg:()=>u});var r=t(296540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),s=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},y=function(e){var a=s(e.components);return r.createElement(l.Provider,{value:a},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,y=m(e,["components","mdxType","originalType","parentName"]),c=s(t),d=n,u=c["".concat(l,".").concat(d)]||c[d]||p[d]||o;return t?r.createElement(u,i(i({ref:a},y),{},{components:t})):r.createElement(u,i({ref:a},y))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=d;var m={};for(var l in a)hasOwnProperty.call(a,l)&&(m[l]=a[l]);m.originalType=e,m[c]="string"==typeof e?e:n,i[1]=m;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},734102:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>m,toc:()=>s});var r=t(58168),n=(t(296540),t(15680));const o={title:"BE OOM Analysis",language:"en"},i=void 0,m={unversionedId:"admin-manual/memory-management/be-oom-analysis",id:"version-2.1/admin-manual/memory-management/be-oom-analysis",title:"BE OOM Analysis",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/admin-manual/memory-management/be-oom-analysis.md",sourceDirName:"admin-manual/memory-management",slug:"/admin-manual/memory-management/be-oom-analysis",permalink:"/docs/admin-manual/memory-management/be-oom-analysis",draft:!1,tags:[],version:"2.1",frontMatter:{title:"BE OOM Analysis",language:"en"},sidebar:"docs",previous:{title:"Memory Limit Exceeded Analysis",permalink:"/docs/admin-manual/memory-management/memory-limit-exceeded-analysis"},next:{title:"Monitor Metrics",permalink:"/docs/admin-manual/maint-monitor/monitor-metrics/metrics"}},l={},s=[{value:"Solution",id:"solution",level:2},{value:"Memory analysis",id:"memory-analysis",level:2}],y={toc:s},c="wrapper";function p(e){let{components:a,...t}=e;return(0,n.yg)(c,(0,r.A)({},y,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Ideally, in ",(0,n.yg)("a",{parentName:"p",href:"/docs/admin-manual/memory-management/memory-limit-exceeded-analysis"},"Memory Limit Exceeded Analysis"),", we regularly detect the remaining available memory of the operating system and respond in time when the memory is insufficient , such as triggering the memory GC to release the cache or cancel the memory overrun query, but because refreshing process memory statistics and memory GC both have a certain lag, and it is difficult for us to completely catch all large memory applications, there are still OOM risk."),(0,n.yg)("h2",{id:"solution"},"Solution"),(0,n.yg)("p",null,"Refer to ",(0,n.yg)("a",{parentName:"p",href:"/docs/admin-manual/config/be-config"},"BE Configuration Items")," to reduce ",(0,n.yg)("inlineCode",{parentName:"p"},"mem_limit")," and increase ",(0,n.yg)("inlineCode",{parentName:"p"},"max_sys_mem_available_low_water_mark_bytes")," in ",(0,n.yg)("inlineCode",{parentName:"p"},"be.conf"),"."),(0,n.yg)("h2",{id:"memory-analysis"},"Memory analysis"),(0,n.yg)("p",null,"If you want to further understand the memory usage location of the BE process before OOM and reduce the memory usage of the process, you can refer to the following steps to analyze."),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"dmesg -T")," confirms the time of OOM and the process memory at the time of OOM.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Check whether there is a ",(0,n.yg)("inlineCode",{parentName:"p"},"Memory Tracker Summary")," log at the end of be/log/be.INFO. If it indicates that BE has detected memory overrun, go to step 3, otherwise go to step 8."))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"Memory Tracker Summary:\n    Type=consistency, Used=0(0 B), Peak=0(0 B)\n    Type=batch_load, Used=0(0 B), Peak=0(0 B)\n    Type=clone, Used=0(0 B), Peak=0(0 B)\n    Type=schema_change, Used=0(0 B), Peak=0(0 B)\n    Type=compaction, Used=0(0 B), Peak=0(0 B)\n    Type=load, Used=0(0 B), Peak=0(0 B)\n    Type=query, Used=206.67 MB(216708729 B), Peak=565.26 MB(592723181 B)\n    Type=global, Used=930.42 MB(975614571 B), Peak=1017.42 MB(1066840223 B)\n    Type=tc/jemalloc_cache, Used=51.97 MB(54494616 B), Peak=-1.00 B(-1 B)\n    Type=process, Used=1.16 GB(1246817916 B), Peak=-1.00 B(-1 B)\n    MemTrackerLimiter Label=Orphan, Type=global, Limit=-1.00 B(-1 B), Used=474.20 MB(497233597 B), Peak=649.18 MB(680718208 B)\n    MemTracker Label=BufferAllocator, Parent Label=Orphan, Used=0(0 B), Peak=0(0 B)\n    MemTracker Label=LoadChannelMgr, Parent Label=Orphan, Used=0(0 B), Peak=0(0 B)\n    MemTracker Label=StorageEngine, Parent Label=Orphan, Used=320.56 MB(336132488 B), Peak=322.56 MB(338229824 B)\n    MemTracker Label=SegCompaction, Parent Label=Orphan, Used=0(0 B), Peak=0(0 B)\n    MemTracker Label=SegmentMeta, Parent Label=Orphan, Used=948.64 KB(971404 B), Peak=943.64 KB(966285 B)\n    MemTracker Label=TabletManager, Parent Label=Orphan, Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=DataPageCache, Type=global, Limit=-1.00 B(-1 B), Used=455.22 MB(477329882 B), Peak=454.18 MB(476244180 B)\n    MemTrackerLimiter Label=IndexPageCache, Type=global, Limit=-1.00 B(-1 B), Used=1.00 MB(1051092 B), Peak=0(0 B)\n    MemTrackerLimiter Label=SegmentCache, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=DiskIO, Type=global, Limit=2.47 GB(2655423201 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=ChunkAllocator, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=LastSuccessChannelCache, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=DeleteBitmap AggCache, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n")),(0,n.yg)("ol",{start:3},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"When the end of be/log/be.INFO before OOM contains the system memory exceeded log, refer to ",(0,n.yg)("a",{parentName:"p",href:"/docs/admin-manual/memory-management/memory-limit-exceeded-analysis"},"Memory Limit Exceeded Analysis"),". The log analysis method in md) looks at the memory usage of each category of the process. If the current ",(0,n.yg)("inlineCode",{parentName:"p"},"type=query")," memory usage is high, if the query before OOM is known, continue to step 4, otherwise continue to step 5; if the current ",(0,n.yg)("inlineCode",{parentName:"p"},"type=load")," memory usage is more, continue to step 6, if the current ",(0,n.yg)("inlineCode",{parentName:"p"},"type= Global "),"memory is used too much and continue to step 7.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"type=query")," query memory usage is high, and the query before OOM is known, such as test cluster or scheduled task, restart the BE node, refer to ",(0,n.yg)("a",{parentName:"p",href:"/docs/admin-manual/memory-management/memory-tracker"},"Memory Tracker")," View real-time memory tracker statistics, retry the query after ",(0,n.yg)("inlineCode",{parentName:"p"},"set global enable_profile=true"),", observe the memory usage location of specific operators, confirm whether the query memory usage is reasonable, and further consider optimizing SQL memory usage, such as adjusting the join order .")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"type=query")," query memory usage is high, and the query before OOM is unknown, such as in an online cluster, then search ",(0,n.yg)("inlineCode",{parentName:"p"},"Deregister query/load memory tracker from the back to the front in "),"be/log/be.INFO",(0,n.yg)("inlineCode",{parentName:"p"},", queryId")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"Register query/load memory tracker, query/load id"),", if the same query id prints the above two lines of logs at the same time, it means that the query or import is successful. If there is only Register but no Deregister, the query or import is still before OOM In this way, all running queries and imports before OOM can be obtained, and the memory usage of suspicious large-memory queries can be analyzed according to the method in step 4.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"type=load")," imports a lot of memory.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"When the ",(0,n.yg)("inlineCode",{parentName:"p"},"type=global")," memory is used for a long time, continue to check the ",(0,n.yg)("inlineCode",{parentName:"p"},"type=global")," detailed statistics in the second half of the ",(0,n.yg)("inlineCode",{parentName:"p"},"Memory Tracker Summary")," log. When DataPageCache, IndexPageCache, SegmentCache, ChunkAllocator, LastSuccessChannelCache, etc. use a lot of memory, refer to ",(0,n.yg)("a",{parentName:"p",href:"/docs/admin-manual/config/be-config"},"BE Configuration Item")," to consider modifying the size of the cache; when Orphan memory usage is too large, Continue the analysis as follows."))),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"If the sum of the tracker statistics of ",(0,n.yg)("inlineCode",{parentName:"li"},"Parent Label=Orphan")," only accounts for a small part of the Orphan memory, it means that there is currently a large amount of memory that has no accurate statistics, such as the memory of the brpc process. At this time, you can consider using the heap profile ",(0,n.yg)("a",{parentName:"li",href:"https://doris.apache.org/community/developer-guide/debug-tool"},"Memory Tracker")," to further analyze memory locations."),(0,n.yg)("li",{parentName:"ul"},"If the tracker statistics of ",(0,n.yg)("inlineCode",{parentName:"li"},"Parent Label=Orphan")," account for most of Orphan\u2019s memory, when ",(0,n.yg)("inlineCode",{parentName:"li"},"Label=TabletManager")," uses a lot of memory, further check the number of tablets in the cluster. If there are too many tablets, delete them and they will not be used table or data; when ",(0,n.yg)("inlineCode",{parentName:"li"},"Label=StorageEngine")," uses too much memory, further check the number of segment files in the cluster, and consider manually triggering compaction if the number of segment files is too large;")),(0,n.yg)("ol",{start:8},(0,n.yg)("li",{parentName:"ol"},"If ",(0,n.yg)("inlineCode",{parentName:"li"},"be/log/be.INFO")," does not print the ",(0,n.yg)("inlineCode",{parentName:"li"},"Memory Tracker Summary")," log before OOM, it means that BE did not detect the memory limit in time, observe Grafana memory monitoring to confirm the memory growth trend of BE before OOM, if OOM is reproducible, consider adding ",(0,n.yg)("inlineCode",{parentName:"li"},"memory_debug=true")," in ",(0,n.yg)("inlineCode",{parentName:"li"},"be.conf"),", after restarting the cluster, the cluster memory statistics will be printed every second, observe the last ",(0,n.yg)("inlineCode",{parentName:"li"},"Memory Tracker Summary")," log before OOM, and continue to step 3 for analysis;")))}p.isMDXComponent=!0}}]);