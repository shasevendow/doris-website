"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[83671],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>u});var i=a(296540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),d=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(a),g=n,u=p["".concat(l,".").concat(g)]||p[g]||h[g]||r;return a?i.createElement(u,s(s({ref:t},c),{},{components:a})):i.createElement(u,s({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:n,s[1]=o;for(var d=2;d<r;d++)s[d]=a[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}g.displayName="MDXCreateElement"},98683:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=a(58168),n=(a(296540),a(15680));const r={title:"Empowering cyber security by enabling 7 times faster log analysis",description:"This is about how a cyber security service provider built its log storage and analysis system (LSAS) and realized 3X data writing speed, 7X query execution speed, and visualized management.",date:"2023-12-07",author:"Apache Doris",tags:["Best Practice"],image:"/images/cyber-security.png"},s=void 0,o={permalink:"/blog/empowering-cyber-security-by-enabling-seven-times-faster-log-analysis",source:"@site/blog/empowering-cyber-security-by-enabling-seven-times-faster-log-analysis.md",title:"Empowering cyber security by enabling 7 times faster log analysis",description:"This is about how a cyber security service provider built its log storage and analysis system (LSAS) and realized 3X data writing speed, 7X query execution speed, and visualized management.",date:"2023-12-07T00:00:00.000Z",formattedDate:"December 7, 2023",tags:[{label:"Best Practice",permalink:"/blog/tags/best-practice"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Empowering cyber security by enabling 7 times faster log analysis",description:"This is about how a cyber security service provider built its log storage and analysis system (LSAS) and realized 3X data writing speed, 7X query execution speed, and visualized management.",date:"2023-12-07",author:"Apache Doris",tags:["Best Practice"],image:"/images/cyber-security.png"},prevItem:{title:"Apache Doris 2.0.3 just released",permalink:"/blog/release-note-2.0.3"},nextItem:{title:"How big data is saving lives in real time: IoV data analytics helps prevent accidents",permalink:"/blog/how-big-data-is-saving-lives-in-real-time-iov-data-analytics-helps-prevent-accidents"}},l={authorsImageUrls:[void 0]},d=[{value:"Log storage &amp; analysis platform",id:"log-storage--analysis-platform",level:2},{value:"Slow data writing",id:"slow-data-writing",level:3},{value:"Slow query execution",id:"slow-query-execution",level:3},{value:"Architectural upgrade",id:"architectural-upgrade",level:2},{value:"300% data writing speed",id:"300-data-writing-speed",level:3},{value:"60% storage cost",id:"60-storage-cost",level:3},{value:"690% query speed",id:"690-query-speed",level:3},{value:"Visualized operation &amp; maintenance",id:"visualized-operation--maintenance",level:3}],c={toc:d},p="wrapper";function h(e){let{components:t,...r}=e;return(0,n.yg)(p,(0,i.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"This is about how a cyber security service provider built its log storage and analysis system (LSAS) and realized 3X data writing speed, 7X query execution speed, and visualized management. "),(0,n.yg)("h2",{id:"log-storage--analysis-platform"},"Log storage & analysis platform"),(0,n.yg)("p",null,"In this use case, the LSAS collects system logs from its enterprise users, scans them, and detects viruses. It also provides data management and file tracking services. "),(0,n.yg)("p",null,"Within the LSAS, it scans local files and uploads the file information as MD5 values to its cloud engine and identifies suspicious viruses. The cloud engine returns a log entry to tell the risk level of the files. The log entry includes messages like ",(0,n.yg)("inlineCode",{parentName:"p"},"file_name"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"file_size"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"file_level"),", and ",(0,n.yg)("inlineCode",{parentName:"p"},"event_time"),". Such information goes into a Topic in Apache Kafka, and then the real-time data warehouse normalizes the log messages. After that, all log data will be backed up to the offline data warehouse. Some log data requires further security analysis, so it will be pulled into the analytic engine and the self-developed Extended Detection and Response system (XDR) for more comprehensive detection. "),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"cyber-security-log-storage-and-analysis-platform",src:a(32942).A,width:"1280",height:"536"})),(0,n.yg)("p",null,"The above process comes down to log writing and analysis, and the company faced some issues in both processes with their old system, which used StarRocks as the analytic engine."),(0,n.yg)("h3",{id:"slow-data-writing"},"Slow data writing"),(0,n.yg)("p",null,"The cloud engine interacts with tens of millions of terminal software and digests over 100 billion logs every day. The enormous data size poses a big challenge. The LSAS used to rely on StarRocks for log storage. With the ever-increasing daily log influx, data writing gradually slows down. The severe backlogs during peak times undermines system stability. They tried scaling the cluster from 3 nodes to 13 nodes, but the writing speed wasn't substantially improved."),(0,n.yg)("h3",{id:"slow-query-execution"},"Slow query execution"),(0,n.yg)("p",null,"From an execution standpoint, extracting security information from logs involves a lot of keyword matching in the text fields (URL, payload, etc.). The StarRocks-based system does that by the SQL LIKE operator, which implements full scanning and brutal-force matching. In that way, queries on a 100-billion-row table often take one or several minutes. After screening out irrelevant data based on time range, the query response time still ranges from seconds to dozens of seconds, and it gets worse with concurrent queries."),(0,n.yg)("h2",{id:"architectural-upgrade"},"Architectural upgrade"),(0,n.yg)("p",null,"In the search for a new database tool, the cyber security company set their eye on ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/"},"Apache Doris"),", which happened to have sharpened itself up in ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/blog/release-note-2.0.0"},"version 2.0")," for log analysis. It supports ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/data-table/index/inverted-index/"},"inverted index")," to empower text search, and ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/data-table/index/ngram-bloomfilter-index?_highlight=ngram"},"NGram BloomFilter")," to speed up the LIKE operator. "),(0,n.yg)("p",null,"Although StarRocks was a fork of Apache Doris, it has rewritten part of the code and is now very different from Apache Doris in terms of features. The foregoing inverted index and NGram BloomFilter are a fragment of the current advancements that Apache Doris has made."),(0,n.yg)("p",null,"They tried Apache Doris out to evaluate its writing speed, query performance, and the associated storage and maintenance costs. "),(0,n.yg)("h3",{id:"300-data-writing-speed"},"300% data writing speed"),(0,n.yg)("p",null,"To test the peak performance of Apache Doris, they only used 3 servers and connected it to Apache Kafka to receive their daily data input, and this is the test result compared to the old StarRocks-based LSAS."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"apache-doris-vs-starrocks-writing-throughput",src:a(985303).A,width:"1280",height:"403"})),(0,n.yg)("p",null,"Based on the peak performance of Apache Doris, it's estimated that a 3-server cluster with 30% of CPU usage will be able to handle the writing workload. That can save them over 70% of hardware resources. Notably, in this test, they enabled inverted index for half of the fields. If it were disabled, the writing speed could be increased by another 50%."),(0,n.yg)("h3",{id:"60-storage-cost"},"60% storage cost"),(0,n.yg)("p",null,"With inverted index enabled, Apache Doris used even smaller storage space than the old system without inverted indexes. The data compression ratio was 1: 5.7 compared to the previous 1: 4.3."),(0,n.yg)("p",null,"In most databases and similar tools, the index file is often 2~4 times the size of the data file it belongs to, but in Apache Doris, the index-data size is basically one to one. That means Apache Doris can save a lot of storage space for users. This is because it has adopted columnar storage and the ZStandard compression. With data and indexes being stored column by column, it is easier to compress them, and the ZStandard algorithm is faster with higher compression ratio so it is perfect for log processing. "),(0,n.yg)("h3",{id:"690-query-speed"},"690% query speed"),(0,n.yg)("p",null,"To compare the query performance before and after upgrading, they tested the old and the new systems with 79 of their frequently executed SQL statements on the same 100 billion rows of log data with the same cluster size of 10 backend nodes."),(0,n.yg)("p",null,"They jotted down the query response time as follows:"),(0,n.yg)("p",null,"The new Apache Doris-based system is faster in all 79 queries. On average, it reduces the query execution time by a factor of 7."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"apache-doris-vs-starrocks-query-performance",src:a(829631).A,width:"1280",height:"1017"})),(0,n.yg)("p",null,"Among these queries, the greatest increases in speed were enabled by a few features and optimizations of Apache Doris for log analysis."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"1. Inverted index accelerating keyword searches: Q23, Q24, Q30, Q31, Q42, Q43, Q50")),(0,n.yg)("p",null,"Example: Q43 was sped up 88.2 times."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-SQL"},"SELECT count() from table2 \nWHERE ( event_time >= 1693065600000 and event_time < 1693152000000) \n  AND (rule_hit_big MATCH 'xxxx');\n")),(0,n.yg)("p",null,"How is ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/data-table/index/inverted-index/"},"inverted index"),' implemented? Upon data writing, Apache Doris tokenizes the texts into words, and takes notes of which word exists in which rows. For example, the word "machine" is in Row 127 and Row 201. In keyword searches, the system can quickly locate the relevant data by tracking the row numbers in the indexes.'),(0,n.yg)("p",null,"Inverted index is much more efficient than brutal-force scanning in text searches. For one thing, it doesn't have to read that much data. For another, it doesn't require text matching. So it is able to increase execution speed by orders of magnitudes."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"cyber-security-inverted-index",src:a(480101).A,width:"961",height:"720"})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"2. NGram BloomFilter accelerating the LIKE operator: Q75, Q76, Q77, Q78")),(0,n.yg)("p",null,"Example: Q75 was sped up 44.4 times."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-SQL"},"SELECT * FROM table1\nWHERE  ent_id = 'xxxxx'   \n   AND event_date = '2023-08-27'   \n   AND file_level = 70     \n   AND rule_group_id LIKE 'adid:%'     \nORDER BY event_time LIMIT 100\uff1b\n")),(0,n.yg)("p",null,"For non-verbatim searches, the LIKE operator is an important implementation method, so Apache Doris 2.0 introduces the ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/data-table/index/ngram-bloomfilter-index"},"NGram BloomFilter")," to empower that. "),(0,n.yg)("p",null,"Different from regular BloomFilter, the NGram BloomFilter does not put the entire text into the filter, but splits it into continuous sub-strings of length N, and then puts the sub-strings into the filter. For a query like ",(0,n.yg)("inlineCode",{parentName:"p"},"cola LIKE '%pattern%'"),", it splits ",(0,n.yg)("inlineCode",{parentName:"p"},"'pattern'")," into several strings of length N, and sees if each of these sub-strings exists in the dataset. The absence of any sub-string in the dataset will indicate that the dataset does not contain the word ",(0,n.yg)("inlineCode",{parentName:"p"},"'pattern'"),", so it will be skipped in data scanning, and that's how the NGram BloomFilter accelerates queries."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"3. Optimizations for Top-N queries: Q19~Q29")),(0,n.yg)("p",null,"Example: Q22 was sped up 50.3 times."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-SQL"},"SELECT * FROM table1\nwhere event_date = '2023-08-27' and file_level = 70 \n  and ent_id = 'nnnnnnn' and file_name = 'xxx.exe'\norder by event_time limit 100;\n")),(0,n.yg)("p",null,"Top-N queries are to find the N logs that fit into the specified conditions. It is a common type of query in log analysis, with the SQl being like ",(0,n.yg)("inlineCode",{parentName:"p"},"SELECT * FROM t WHERE xxx ORDER BY xx LIMIT n"),". Apache Doris has optimized itself for that. Based on the intermediate status of queries, it figures out the dynamic range of the ranking field and implements automatic predicate pushdown to reduce data scanning. In some cases, this can decrease the scanned data volume by an order of magnitude."),(0,n.yg)("h3",{id:"visualized-operation--maintenance"},"Visualized operation & maintenance"),(0,n.yg)("p",null,"For more efficient cluster maintenance, VeloDB, the commercial supporter of Apache Doris , has contributed a visualized cluster management tool called ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris-manager"},"Doris Manager")," to the Apache Doris project. Everyday management and maintenance operations can be done via the Doris Manager, including cluster monitoring, inspection, configuration modification, scaling, and upgrading. The visualized tool can save a lot of manual efforts and avoid the risks of maloperations on Doris."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"doris-manager-for-visualized-operation-and-maintenance",src:a(517248).A,width:"1280",height:"642"})),(0,n.yg)("p",null,"Apart from cluster management, Doris Manager provides a visualized WebUI for log analysis (think of Kibana), so it's very friendly to users who are familiar with the ELK Stack. It supports keyword searches, trend charts, field filtering, and detailed data listing and collapsed display, so it enables interactive analysis and easy drilling down of logs."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"doris-manager-webui-showcase",src:a(616344).A,width:"1280",height:"687"})),(0,n.yg)("p",null,"After a month-long trial run, they officially replaced their old LSAS with the Apache Doris-based system for production, and achieved great results as they expected. Now, they ingest their 100s of billions of new logs every day via the ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/data-operate/import/import-way/routine-load-manual/"},"Routine Load")," method at a speed 3 times as fast as before. Among the 7-time overall query performance increase, they benefit from a speedup of over 20 times in full-text searches. And they enjoy easier maintenance and interactive analysis. Their next step is to expand the coverage of JSON data type and delve into semi-structured data analysis. Luckily, the upcoming Apache Doris 2.1 will provide more schema-free support. It will have a new Variant data type, support JSON data of any structures, and allow for flexible changes in field numbers and field types. Relevant updates will be released on the ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/"},"Apache Doris website")," and the ",(0,n.yg)("a",{parentName:"p",href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-2kl08hzc0-SPJe4VWmL_qzrFd2u2XYQA"},"Apache Doris community"),"."))}h.isMDXComponent=!0},829631:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/apache-doris-vs-starrocks-query-performance-d4377592d59672165b17a6bc5158d8fe.png"},985303:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/apache-doris-vs-starrocks-writing-throughput-e462779d45f4ba298ecbdc75b2f90b68.png"},480101:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/cyber-security-inverted-index-20f3d1267475f3074304b15f8a901db3.png"},32942:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/cyber-security-log-storage-and-analysis-platform-83b6323a2b975c59ddcf59de91f96847.png"},517248:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/doris-manager-for-visualized-operation-and-maintenance-b1f63cbae23f025b6ac4d49bf6b9ca36.png"},616344:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/doris-manager-webui-showcase-cba1b2b240ff03357c833aae15e614da.png"}}]);