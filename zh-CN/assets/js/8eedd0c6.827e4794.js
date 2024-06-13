"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[32641],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>m});var i=a(296540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(a),u=o,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||n;return a?i.createElement(m,r(r({ref:t},p),{},{components:a})):i.createElement(m,r({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,r=new Array(n);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<n;c++)r[c]=a[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},665438:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var i=a(58168),o=(a(296540),a(15680));const n={title:"JD.com's exploration and practice with Apache Doris in real time OLAP",description:"This article discusses the exploration and practice of the search engine team in JD.com  using Apache Flink and Apache Doris in real-time data analysis. The popularity of stream computing is increasing day by day: More papers are published on Google Dataflow; Apache Flink has become the one of the most popular engine in the world; There is wide application of real-time analytical databases more than ever before, such as Apache Doris; Stream computing engines are really flourishing. However, no engine is perfect enough to solve every problem. It is important to find a  suitable OLAP engine for the business. We hope that JD.com's practice in  real-time OLAP and stream computing may give you some inspiration.",date:"2022-12-02",author:"Li Zhe",tags:["Best Practice"],image:"/images/user-jd.jpg"},r=void 0,s={permalink:"/zh-CN/blog/JD_OLAP",source:"@site/blog/JD_OLAP.md",title:"JD.com's exploration and practice with Apache Doris in real time OLAP",description:"This article discusses the exploration and practice of the search engine team in JD.com  using Apache Flink and Apache Doris in real-time data analysis. The popularity of stream computing is increasing day by day: More papers are published on Google Dataflow; Apache Flink has become the one of the most popular engine in the world; There is wide application of real-time analytical databases more than ever before, such as Apache Doris; Stream computing engines are really flourishing. However, no engine is perfect enough to solve every problem. It is important to find a  suitable OLAP engine for the business. We hope that JD.com's practice in  real-time OLAP and stream computing may give you some inspiration.",date:"2022-12-02T00:00:00.000Z",formattedDate:"2022\u5e7412\u67082\u65e5",tags:[{label:"Best Practice",permalink:"/zh-CN/blog/tags/best-practice"}],hasTruncateMarker:!1,authors:[{name:"Li Zhe"}],frontMatter:{title:"JD.com's exploration and practice with Apache Doris in real time OLAP",description:"This article discusses the exploration and practice of the search engine team in JD.com  using Apache Flink and Apache Doris in real-time data analysis. The popularity of stream computing is increasing day by day: More papers are published on Google Dataflow; Apache Flink has become the one of the most popular engine in the world; There is wide application of real-time analytical databases more than ever before, such as Apache Doris; Stream computing engines are really flourishing. However, no engine is perfect enough to solve every problem. It is important to find a  suitable OLAP engine for the business. We hope that JD.com's practice in  real-time OLAP and stream computing may give you some inspiration.",date:"2022-12-02",author:"Li Zhe",tags:["Best Practice"],image:"/images/user-jd.jpg"},prevItem:{title:"Apache Doris announced the official release of version 1.2.0",permalink:"/zh-CN/blog/release-note-1.2.0"},nextItem:{title:"Apache Doris helped Netease create a refined operation DMP system",permalink:"/zh-CN/blog/Netease"}},l={authorsImageUrls:[void 0]},c=[{value:"About JD.com",id:"about-jdcom",level:2},{value:"JD Search Box&#39;s Requirement: Real-time Data Analysis",id:"jd-search-boxs-requirement-real-time-data-analysis",level:2},{value:"The Evolution of the Real-time Architecture",id:"the-evolution-of-the-real-time-architecture",level:2},{value:"Optimization during the Promotion",id:"optimization-during-the-promotion",level:2},{value:"Look Ahead",id:"look-ahead",level:2}],p={toc:c},h="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(h,(0,i.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"kv",src:a(164096).A,width:"900",height:"383"})),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Guide:\nThis article discusses the exploration and practice of the search engine team in JD.com  using Apache Flink and Apache Doris in real-time data analysis. The popularity of stream computing is increasing day by day: More papers are published on Google Dataflow; Apache Flink has become the one of the most popular engine in the world; There is wide application of real-time analytical databases more than ever before, such as Apache Doris; Stream computing engines are really flourishing. However, no engine is perfect enough to solve every problem. It is important to find a  suitable OLAP engine for the business. We hope that JD.com's practice in  real-time OLAP and stream computing may give you some inspiration.")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Author: Li Zhe, data engineer of JD.com, who focused on offline data, stream computing and application development.")),(0,o.yg)("h2",{id:"about-jdcom"},"About JD.com"),(0,o.yg)("p",null,"JD.com (NASDAQ: JD), a leading e-commerce company in China, had a net income of RMB 951.6 billion in 2021. JD Group owns JD Retail, JD Global, JD Technology, JD Logistics, JD Cloud, etc. Jingdong Group was officially listed on the NASDAQ Stock Exchange in May 2014."),(0,o.yg)("h2",{id:"jd-search-boxs-requirement-real-time-data-analysis"},"JD Search Box's Requirement: Real-time Data Analysis"),(0,o.yg)("p",null,"JD search box, as the entrance of the e-commerce platform, provides a link betwee merchants and users. Users can express their needs through the search box. In order to better understand user intentions and quickly improve the conversion rate, multiple A/B tests are running online at the same time, which apply to multiple products. The category, organization, and brand all need to be monitored online for better conversion. At present, JD search box demands real-time data in application mainly includes three parts:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"The overall data of JD search box."),(0,o.yg)("li",{parentName:"ol"},"Real-time monitoring of the A/B test."),(0,o.yg)("li",{parentName:"ol"},"Top list of hot search words to reflect changes in public opinion. Words trending can reflect what users care")),(0,o.yg)("p",null,"The analysis mentioned above needs to refine the data to the SKU-level. At the same time, we also undertake the task of building a real-time data platform to show our business analysists different real-time stream computing data."),(0,o.yg)("p",null,"Although different business analysists care about different data granularity, time frequency, and dimensions, we are hoping to establish a unified real-time OLAP data warehouse and provide a set of safe, reliable and flexible real-time data services."),(0,o.yg)("p",null,"At present, the newly generated exposure logs every day reach hundreds of millions. The logs willl increase by 10 times if they are stored as SKU. And they would grow to billions of records if based on A/B test. Aggregation queries cross multi-dimension require second-level response time. "),(0,o.yg)("p",null,"Such an amount of data also brings huge challenges to the team: 2 billion rows have been created daily; Up to 60 million rows need to be imported per minute; Data latency should be limited to 1 minute; MDX query needs to be executed within 3 seconds; QPS has reached above 20. Yet a new reliable OLAP database with high stability should be able to respond to priority 0 emergency."),(0,o.yg)("h2",{id:"the-evolution-of-the-real-time-architecture"},"The Evolution of the Real-time Architecture"),(0,o.yg)("p",null,"Our previous architecture is based on Apache Storm for a point-to-point data processing. This approach can quickly meet the needs of real-time reports during the stage of rapid business growth in the early days. However, with the continuous development of business, disadvantages gradually appear. For example, poor flexibility, poor data consistency, low development efficiency and increased resource costs."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"page_2",src:a(208881).A,width:"1684",height:"801"})),(0,o.yg)("p",null,"In order to solve the problems of the previous architecture, we first upgraded the architecture and replaced Apache Storm with Apache Flink to achieve high throughput. At the same time, according to the characteristics of the search data, the real-time data is processed hierarchically, which means the PV data flow, the SKU data flow and the A/B test data flow are created. It is expected to build the upper real-time OLAP layer based on the real-time flow."),(0,o.yg)("p",null,"When selecting OLAP database, the following points need to be considered:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"The data latency is at minute-level and the query response time is at second-level"),(0,o.yg)("li",{parentName:"ol"},"Suppots standard SQL, which reduces the cost of use"),(0,o.yg)("li",{parentName:"ol"},"Supports JOIN to facilitate adding dimension"),(0,o.yg)("li",{parentName:"ol"},"Traffic data can be deduplicated approximately, but order data must be exact deduplicated "),(0,o.yg)("li",{parentName:"ol"},"High throughput with tens of millions of records per minute and tens of billions of new records every day"),(0,o.yg)("li",{parentName:"ol"},"Query concurrency needs to be high because Front-end may need it")),(0,o.yg)("p",null,"By comparing the OLAP engines that support real-time import , we made an in-depth comparison among Apache Druid, Elasticsearch, Clickhouse and Apache Doris:"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"page_3",src:a(276840).A,width:"2667",height:"778"})),(0,o.yg)("p",null,"We found out that Doris and Clickhouse can meet our needs. But the concurrency of Clickhouse is low for us, which is a potential risk. Moreover, the data import of Clickhouse has no TRANSACTION and cannot achieve Exactly-once semantics. Clickhouse is not fully supportive of SQL."),(0,o.yg)("p",null,"Finally, we chose Apache Doris as our real-time OLAP database. For user behavior log data, we use Aggregation Key data table; As for E-commerce orders data, we use Unique Key data table. Moreover, we split the previous tasks and reuse the logic we tried before. Therefore, when Flink is processing, there will be new topic flow and real-time flow of different granularities generated in DWD. The new architecture is as follows:"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"page_4",src:a(856455).A,width:"3004",height:"1571"})),(0,o.yg)("p",null,"In the current technical architecture, flink task is very light. Based on the production data detail layer, we directly use Doris to act as the aggregation layer function.  And we ask Doris to complete window calculation which previously belongs to Flink. We also take advantage of the routine load to consume real-time data. Although the data is fine-grained before importing, based on the Aggregation Key, asynchronous aggregation will be automatically performed. The degree of aggregation is completely determined by the number of dimensions. By creating Rollup on the base table, double-write or multi-write and pre-aggregate operations are performed during import, which is similar to the function of materialized view, which can highly aggregate data to improve query performance."),(0,o.yg)("p",null,'Another advantage of using Kafka to directly connect to Doris at the detail layer is that it naturally supports data backtracking. Data backtracking means that when real-time data is out of order, the "late" data can be recalculated and the previous results can be updated. This is because delayed data can be written to the table whenever it arrives. The final solution is as follows:'),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"page_5",src:a(680670).A,width:"1116",height:"705"})),(0,o.yg)("h2",{id:"optimization-during-the-promotion"},"Optimization during the Promotion"),(0,o.yg)("p",null,"As mentioned above, we have established Aggregation Key of different granularities in Doris, including PV, SKU, and A/B test granularity. Here we take the exposure A/B test model with the largest amount of daily production data as an example to explain how to support the query of tens of billions of records per day during the big promotion period."),(0,o.yg)("p",null,"Strategy we used:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Monitoring: 10, 30, 60 minutes A/B test with indicators, such as exposure PV, UV, exposure SKU pieces, click PV, click UV and CTR."),(0,o.yg)("li",{parentName:"ul"},"Data Modeling: Use exposed real-time data to establish Aggregation Key; And perform HyperLogLog approximate calculation with UV and PV")),(0,o.yg)("p",null,"Clusters we had:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"30+ virtual machines with storage of NVMe SSD"),(0,o.yg)("li",{parentName:"ul"},"40+ partitions exposed by A/B test"),(0,o.yg)("li",{parentName:"ul"},"Tens of billions of new data are created every day"),(0,o.yg)("li",{parentName:"ul"},"2 Rollups")),(0,o.yg)("p",null,"Benefits overall:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Bucket Field can quickly locate tablet partition when querying"),(0,o.yg)("li",{parentName:"ul"},"Import 600 million records in 10 minutes"),(0,o.yg)("li",{parentName:"ul"},"2 Rollups have relatively low IO, which meet the requirement of the query")),(0,o.yg)("h2",{id:"look-ahead"},"Look Ahead"),(0,o.yg)("p",null,"JD search box introduced Apache Doris in May 2020, with a scale of 30+ BEs, 10+ routine load tasks running online at the same time. Replacing Flink's window computing with Doris can not only improve development efficiency, adapt to dimension changes, but also reduce computing resources. Apache Doris provides unified interface services ensuring data consistency and security.\nWe are also pushing the upgrade of JD search box's OLAP platform to the latest version. After upgrading, we plan to use the bitmap function to support accurate deduplication operations of UV and other indicators. In addition, we also plan to use the appropriate Flink window to develop the real-time stream computing of the aggregation layer to increase the richness and completeness of the data."))}d.isMDXComponent=!0},164096:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/kv-e94fd46c1522a3383d161daec2249d18.png"},208881:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/page_2-bc63d65e9c203504cbc7900319d0211c.png"},276840:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/page_3-578754e222201a65b0601326dc8b298b.png"},856455:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/page_4-1f5e1ab38f22766b4ac14b73ee164d59.png"},680670:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/page_5-e8fecc91db2d8fcc3495fb45a0e8e8c2.png"}}]);