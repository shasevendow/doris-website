"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[39096],{15680:(e,a,t)=>{t.d(a,{xA:()=>m,yg:()=>y});var r=t(296540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),d=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},m=function(e){var a=d(e.components);return r.createElement(s.Provider,{value:a},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),g=d(t),u=n,y=g["".concat(s,".").concat(u)]||g[u]||p[u]||l;return t?r.createElement(y,o(o({ref:a},m),{},{components:t})):r.createElement(y,o({ref:a},m))}));function y(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=u;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[g]="string"==typeof e?e:n,o[1]=i;for(var d=2;d<l;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},540482:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=t(58168),n=(t(296540),t(15680));const l={title:"Doris Streamloader",language:"en"},o=void 0,i={unversionedId:"ecosystem/doris-streamloader",id:"ecosystem/doris-streamloader",title:"Doris Streamloader",description:"\x3c!--",source:"@site/docs/ecosystem/doris-streamloader.md",sourceDirName:"ecosystem",slug:"/ecosystem/doris-streamloader",permalink:"/docs/dev/ecosystem/doris-streamloader",draft:!1,tags:[],version:"current",frontMatter:{title:"Doris Streamloader",language:"en"},sidebar:"docs",previous:{title:"AutoMQ Load",permalink:"/docs/dev/ecosystem/automq-load"},next:{title:"Hive Bitmap UDF",permalink:"/docs/dev/ecosystem/hive-bitmap-udf"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Installation",id:"installation",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Result description",id:"result-description",level:2},{value:"Best practice",id:"best-practice",level:2},{value:"Parameter suggestions",id:"parameter-suggestions",level:3},{value:"Recommended commands",id:"recommended-commands",level:3},{value:"FAQ",id:"faq",level:3}],m={toc:d},g="wrapper";function p(e){let{components:a,...t}=e;return(0,n.yg)(g,(0,r.A)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"overview"},"Overview"),(0,n.yg)("p",null,"Doris Streamloader is a client tool designed for loading data into Apache Doris. In comparison to single-threaded load using ",(0,n.yg)("inlineCode",{parentName:"p"},"curl"),", it reduces the load latency of large datasets by its concurrent loading capabilities. It comes with the following features:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Parallel loading"),": multi-threaded load for the Stream Load method. You can set the parallelism level using the ",(0,n.yg)("inlineCode",{parentName:"li"},"workers")," parameter."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Multi-file load:")," simultaneously load of multiple files and directories with one shot. It supports recursive file fetching and allows you to specify file names with wildcard characters."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Path traversal support:")," support path traversal when the source files are in directories"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Resilience and continuity:")," in case of partial load failures, it can resume data loading from the point of failure."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Automatic retry mechanism:")," in case of loading failures, it can automatically retry a default number of times. If the loading remains unsuccessful, it will print the command for manual retry.")),(0,n.yg)("h2",{id:"installation"},"Installation"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Version 1.0")),(0,n.yg)("p",null,"Source Code: ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris-streamloader/"},"https://github.com/apache/doris-streamloader/")),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Version"),(0,n.yg)("th",{parentName:"tr",align:null},"Date"),(0,n.yg)("th",{parentName:"tr",align:null},"Architecture"),(0,n.yg)("th",{parentName:"tr",align:null},"Link"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"v1.0"),(0,n.yg)("td",{parentName:"tr",align:null},"20240131"),(0,n.yg)("td",{parentName:"tr",align:null},"x64"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://apache-doris-releases.oss-accelerate.aliyuncs.com/apache-doris-streamloader-1.0.1-bin-x64.tar.xz"},"https://apache-doris-releases.oss-accelerate.aliyuncs.com/apache-doris-streamloader-1.0.1-bin-x64.tar.xz"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"v1.0"),(0,n.yg)("td",{parentName:"tr",align:null},"20240131"),(0,n.yg)("td",{parentName:"tr",align:null},"arm64"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://apache-doris-releases.oss-accelerate.aliyuncs.com/apache-doris-streamloader-1.0.1-bin-arm64.tar.xz"},"https://apache-doris-releases.oss-accelerate.aliyuncs.com/apache-doris-streamloader-1.0.1-bin-arm64.tar.xz"))))),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"The obtained result is the executable binary.")),(0,n.yg)("h2",{id:"how-to-use"},"How to use"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"\ndoris-streamloader --source_file={FILE_LIST} --url={FE_OR_BE_SERVER_URL}:{PORT} --header={STREAMLOAD_HEADER} --db={TARGET_DATABASE} --table={TARGET_TABLE}\n\n\n")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"1. ",(0,n.yg)("inlineCode",{parentName:"strong"},"FILE_LIST")," support:")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Single file"),(0,n.yg)("p",{parentName:"li"},"  E.g. Load a single file"))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'```json\n\ndoris-streamloader --source_file="dir" --url="http://localhost:8330" --header="column_separator:|?columns:col1,col2" --db="testdb" --table="testtbl"\n\n```\n')),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Single directory"),(0,n.yg)("p",{parentName:"li"},"  E.g. Load a single directory"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-json"},'doris-streamloader --source_file="dir" --url="http://localhost:8330" --header="column_separator:|?columns:col1,col2" --db="testdb" --table="testtbl"        \n'))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"File names with wildcard characters (enclosed in quotes)"),(0,n.yg)("p",{parentName:"li"},"  E.g. Load file0.csv, file1.csv, file2.csv"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-json"},'doris-streamloader --source_file="file*" --url="http://localhost:8330" --header="column_separator:|?columns:col1,col2" --db="testdb" --table="testtbl"\n'))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"A list of files separated by commas"),(0,n.yg)("p",{parentName:"li"},"  E.g. Load file0.csv, file1.csv, file2.csv"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-json"},' doris-streamloader --source_file="file0.csv,file1.csv,file2.csv" --url="http://localhost:8330" --header="column_separator:|?columns:col1,col2" --db="testdb" --table="testtbl"\n'))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"A list of directories separated by commas"),(0,n.yg)("p",{parentName:"li"},"E.g. Load dir1, dir2, dir3"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-json"},' doris-streamloader --source_file="dir1,dir2,dir3" --url="http://localhost:8330" --header="column_separator:|?columns:col1,col2" --db="testdb" --table="testtbl" \n')))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"2. ",(0,n.yg)("inlineCode",{parentName:"strong"},"STREAMLOAD_HEADER")," supports all streamload headers separated with '?' if there is more than one")),(0,n.yg)("p",null,"Example:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},'doris-streamloader --source_file="data.csv" --url="http://localhost:8330" --header="column_separator:|?columns:col1,col2" --db="testdb" --table="testtbl"\n')),(0,n.yg)("p",null,"The parameters above are required, and the following parameters are optional: "),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"),(0,n.yg)("th",{parentName:"tr",align:null},"Default Value"),(0,n.yg)("th",{parentName:"tr",align:null},"Suggestions"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--u"),(0,n.yg)("td",{parentName:"tr",align:null},"Username of the database"),(0,n.yg)("td",{parentName:"tr",align:null},"root"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--p"),(0,n.yg)("td",{parentName:"tr",align:null},"Password"),(0,n.yg)("td",{parentName:"tr",align:null},"empty string"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--compress"),(0,n.yg)("td",{parentName:"tr",align:null},"Whether to compress data upon HTTP transmission"),(0,n.yg)("td",{parentName:"tr",align:null},"false"),(0,n.yg)("td",{parentName:"tr",align:null},"Remain as default. Compression and decompression can increase pressure on Doris Streamloader side and the CPU resources on Doris BE side, so it is advised to only enable this when network bandwidth is constrained.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--timeout"),(0,n.yg)("td",{parentName:"tr",align:null},"Timeout of the HTTP request sent to Doris (seconds)"),(0,n.yg)("td",{parentName:"tr",align:null},"60","*","60","*","10"),(0,n.yg)("td",{parentName:"tr",align:null},"Remain as default")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--batch"),(0,n.yg)("td",{parentName:"tr",align:null},"Granularity of batch reading and sending of files (rows)"),(0,n.yg)("td",{parentName:"tr",align:null},"4096"),(0,n.yg)("td",{parentName:"tr",align:null},"Remain as default")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--batch_byte"),(0,n.yg)("td",{parentName:"tr",align:null},"Granularity of batch reading and sending of files (byte)"),(0,n.yg)("td",{parentName:"tr",align:null},"943718400 (900MB)"),(0,n.yg)("td",{parentName:"tr",align:null},"Remain as default")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--workers"),(0,n.yg)("td",{parentName:"tr",align:null},"Concurrency  level of data loading"),(0,n.yg)("td",{parentName:"tr",align:null},"0"),(0,n.yg)("td",{parentName:"tr",align:null},'"0" means the auto mode, in which the streamload speed is based on the data size and disk throughput. You can dial this up for a high-performance cluster, but it is advised to keep it below 10. If you observe excessive memory usage (via the memtracker in log), you can dial this down.')),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--disk_throughput"),(0,n.yg)("td",{parentName:"tr",align:null},"Disk throughput (MB/s)"),(0,n.yg)("td",{parentName:"tr",align:null},"800"),(0,n.yg)("td",{parentName:"tr",align:null},"Usually remain as default. This parameter is a basis of the automatic inference of workers. You can adjust this based on your needs to get a more appropriate value of workers.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--streamload_throughput"),(0,n.yg)("td",{parentName:"tr",align:null},"Streamload throughput (MB/s)"),(0,n.yg)("td",{parentName:"tr",align:null},"100"),(0,n.yg)("td",{parentName:"tr",align:null},"Usually remain as default. The default value is derived from the streamload throughput and predicted performance provided by the daily performance testing environment. To get a more appropriate value of workers, you can configure this based on your measured streamload throughput: (LoadBytes",(0,n.yg)("em",{parentName:"td"},"1000)/(LoadTimeMs"),"1024*1024)")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--max_byte_per_task"),(0,n.yg)("td",{parentName:"tr",align:null},"Maximum data size for each load task. For a dataset exceeding this size, the remaining part will be split into a new load task."),(0,n.yg)("td",{parentName:"tr",align:null},"107374182400 (100G)"),(0,n.yg)("td",{parentName:"tr",align:null},'This is recommended to be large in order to reduce the number of load versions. However, if you encounter a "body exceed max size" and try to avoid adjusting the streaming_load_max_mb parameter (which requires restarting the backend), or if you encounter a "-238 TOO MANY SEGMENT" error, you can temporarily dial this down.')),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--check_utf8"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("p",null,"Whether to check the encoding of the data that has been loaded: "),"   ",(0,n.yg)("p",null," 1) false, direct load of raw data without checking;  2)  true, replacing non UTF-8 characters with \ufffd ")),(0,n.yg)("td",{parentName:"tr",align:null},"true"),(0,n.yg)("td",{parentName:"tr",align:null},"Remain as default")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--debug"),(0,n.yg)("td",{parentName:"tr",align:null},"Print debug log"),(0,n.yg)("td",{parentName:"tr",align:null},"false"),(0,n.yg)("td",{parentName:"tr",align:null},"Remain as default")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--auto_retry"),(0,n.yg)("td",{parentName:"tr",align:null},"The list of failed workers and tasks for auto retry"),(0,n.yg)("td",{parentName:"tr",align:null},"empty string"),(0,n.yg)("td",{parentName:"tr",align:null},'This is only used when there is an load failure. The serial numbers of the failed workers and tasks will be shown and all you need is to copy and execute the the entire command. For example, if --auto_retry="1,1;2,1", that means the failed tasks include the first task in the first worker and the first task in the second worker.')),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--auto_retry_times"),(0,n.yg)("td",{parentName:"tr",align:null},"Times of auto retries"),(0,n.yg)("td",{parentName:"tr",align:null},"3"),(0,n.yg)("td",{parentName:"tr",align:null},"Remain as default. If you don't need retries, you can set this to 0.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--auto_retry_interval"),(0,n.yg)("td",{parentName:"tr",align:null},"Interval of auto retries"),(0,n.yg)("td",{parentName:"tr",align:null},"60"),(0,n.yg)("td",{parentName:"tr",align:null},"Remain as default. If the load failure is caused by a Doris downtime, it is recommended to set this parameter based on the restart interval of Doris.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"--log_filename"),(0,n.yg)("td",{parentName:"tr",align:null},"Path for log storage"),(0,n.yg)("td",{parentName:"tr",align:null},'""'),(0,n.yg)("td",{parentName:"tr",align:null},'Logs are printed to the console by default. To print them to a log file, you can set the path, such as --log_filename="/var/log".')))),(0,n.yg)("h2",{id:"result-description"},"Result description"),(0,n.yg)("p",null,"A result will be returned no matter the data loading succeeds or fails. "),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Status"),(0,n.yg)("td",{parentName:"tr",align:null},"Loading succeeded or failed")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"TotalRows"),(0,n.yg)("td",{parentName:"tr",align:null},"Total number of rows")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"FailLoadRows"),(0,n.yg)("td",{parentName:"tr",align:null},"Number of rows failed to be loaded")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"LoadedRows"),(0,n.yg)("td",{parentName:"tr",align:null},"Number of rows loaded")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"FilteredRows"),(0,n.yg)("td",{parentName:"tr",align:null},"Number of rows filtered")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"UnselectedRows"),(0,n.yg)("td",{parentName:"tr",align:null},"Number of rows unselected")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"LoadBytes"),(0,n.yg)("td",{parentName:"tr",align:null},"Number of bytes loaded")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"LoadTimeMs"),(0,n.yg)("td",{parentName:"tr",align:null},"Actual loading time")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"LoadFiles"),(0,n.yg)("td",{parentName:"tr",align:null},"List of loaded files")))),(0,n.yg)("p",null,"Examples: "),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"If the loading succeeds, you will see a result like: "),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-Go"},'Load Result: {\n        "Status": "Success",\n        "TotalRows": 120,\n        "FailLoadRows": 0,\n        "LoadedRows": 120,\n        "FilteredRows": 0,\n        "UnselectedRows": 0,\n        "LoadBytes": 40632,\n        "LoadTimeMs": 971,\n        "LoadFiles": [\n                "basic.csv",\n                "basic_data1.csv",\n                "basic_data2.csv",\n                "dir1/basic_data.csv",\n                "dir1/basic_data.csv.1",\n                "dir1/basic_data1.csv"\n        ]\n}\n'))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"If the loading fails (or partially fails), you will see a retry message: "),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-Go"},'load has some error and auto retry failed, you can retry by : \n./doris-streamloader --source_file /mnt/disk1/laihui/doris/tools/tpch-tools/bin/tpch-data/lineitem.tbl.1  --url="http://127.0.0.1:8239" --header="column_separator:|?columns: l_orderkey, l_partkey, l_suppkey, l_linenumber, l_quantity, l_extendedprice, l_discount, l_tax, l_returnflag,l_linestatus, l_shipdate,l_commitdate,l_receiptdate,l_shipinstruct,l_shipmode,l_comment,temp" --db="db" --table="lineitem1" -u root -p "" --compress=false --timeout=36000 --workers=3 --batch=4096 --batch_byte=943718400 --max_byte_per_task=1073741824 --check_utf8=true --report_duration=1 --auto_retry="2,1;1,1;0,1" --auto_retry_times=0 --auto_retry_interval=60\n')))),(0,n.yg)("p",null,"You can copy and execute the command. The failure message will also be provided:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-Go"},'Load Result: {\n      "Status": "Failed",\n      "TotalRows": 1,\n      "FailLoadRows": 1,\n      "LoadedRows": 0,\n      "FilteredRows": 0,\n      "UnselectedRows": 0,\n      "LoadBytes": 0,\n      "LoadTimeMs": 104,\n      "LoadFiles": [\n              "/mnt/disk1/laihui/doris/tools/tpch-tools/bin/tpch-data/lineitem.tbl.1"\n      ]\n}\n\n')),(0,n.yg)("h2",{id:"best-practice"},"Best practice"),(0,n.yg)("h3",{id:"parameter-suggestions"},"Parameter suggestions"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Required parameters:",(0,n.yg)("br",{parentName:"p"}),"\n",(0,n.yg)("inlineCode",{parentName:"p"},"--source_file=FILE_LIST --url=FE_OR_BE_SERVER_URL_WITH_PORT --header=STREAMLOAD_HEADER --db=TARGET_DATABASE --table=TARGET_TABLE"),"\nIf you need to load multiple files, you should configure all of them at a time in ",(0,n.yg)("inlineCode",{parentName:"p"},"source_file"),".")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"The default value of ",(0,n.yg)("inlineCode",{parentName:"p"},"workers")," is the number of CPU cores. When that is large, for example, 96 cores, the value of ",(0,n.yg)("inlineCode",{parentName:"p"},"workers")," should be dialed down. ",(0,n.yg)("strong",{parentName:"p"},"The recommended value for most cases is 8."))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"max_byte_per_task"),' is recommended to be large in order to reduce the number of load versions. However, if you encounter a "body exceed max size" and try to avoid adjusting the streaming_load_max_mb parameter (which requires restarting the backend), or if you encounter a ',(0,n.yg)("inlineCode",{parentName:"p"},"-238 TOO MANY SEGMENT")," error, you can temporarily dial this down. ",(0,n.yg)("strong",{parentName:"p"},"For most cases, this can remain as default.")))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Two parameters that impacts the number of versions:")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"workers"),": The more ",(0,n.yg)("inlineCode",{parentName:"li"},"workers"),", the higher concurrency level, and thus the more versions. The recommended value for most cases is 8."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"max_byte_per_task"),":  The larger ",(0,n.yg)("inlineCode",{parentName:"li"},"max_byte_per_task")," , the larger data size in one single version, and thus the less versions. However, if this is excessively high, it could easily cause an ",(0,n.yg)("inlineCode",{parentName:"li"},"-238 TOO MANY SEGMENT ")," error. For most cases, this can remain as default. ")),(0,n.yg)("h3",{id:"recommended-commands"},"Recommended commands"),(0,n.yg)("p",null,"In most cases, you only need to set the required parameters and ",(0,n.yg)("inlineCode",{parentName:"p"},"workers"),". "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-text"},'./doris-streamloader --source_file="demo.csv,demoFile*.csv,demoDir" --url="http://127.0.0.1:8030" --header="column_separator:," --db="demo" --table="test_load" --u="root" --workers=8\n')),(0,n.yg)("h3",{id:"faq"},"FAQ"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Before resumable loading was available, to fix any partial failures in loading would require deleting the current table and starting over. In this case, Doris Streamloader would retry automatically. If the retry fails, a retry command will be printed so you can copy and execute it.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"The default maximum data loading size for Doris Streamloader is limited by BE config ",(0,n.yg)("inlineCode",{parentName:"p"},"streaming_load_max_mb")," (default: 100GB). If you don't want to restart BE, you can also dial down ",(0,n.yg)("inlineCode",{parentName:"p"},"max_byte_per_task"),"."),(0,n.yg)("p",{parentName:"li"},"To show current ",(0,n.yg)("inlineCode",{parentName:"p"},"streaming_load_max_mb"),": "),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-Go"},'curl "http://127.0.0.1:8040/api/show_config"\n'))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"If you encounter an ",(0,n.yg)("inlineCode",{parentName:"p"},"-238 TOO MANY SEGMENT ")," error, you can dial down ",(0,n.yg)("inlineCode",{parentName:"p"},"max_byte_per_task"),"."))))}p.isMDXComponent=!0}}]);