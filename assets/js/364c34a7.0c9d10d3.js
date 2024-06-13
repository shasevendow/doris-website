"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[76626],{15680:(e,r,o)=>{o.d(r,{xA:()=>p,yg:()=>g});var t=o(296540);function a(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function n(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function l(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?n(Object(o),!0).forEach((function(r){a(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function i(e,r){if(null==e)return{};var o,t,a=function(e,r){if(null==e)return{};var o,t,a={},n=Object.keys(e);for(t=0;t<n.length;t++)o=n[t],r.indexOf(o)>=0||(a[o]=e[o]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)o=n[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var u=t.createContext({}),s=function(e){var r=t.useContext(u),o=r;return e&&(o="function"==typeof e?e(r):l(l({},r),e)),o},p=function(e){var r=s(e.components);return t.createElement(u.Provider,{value:r},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var o=e.components,a=e.mdxType,n=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(o),d=a,g=m["".concat(u,".").concat(d)]||m[d]||c[d]||n;return o?t.createElement(g,l(l({ref:r},p),{},{components:o})):t.createElement(g,l({ref:r},p))}));function g(e,r){var o=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=o.length,l=new Array(n);l[0]=d;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<n;s++)l[s]=o[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,o)}d.displayName="MDXCreateElement"},184691:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var t=o(58168),a=(o(296540),o(15680));const n={title:"Workload Group",language:"en"},l=void 0,i={unversionedId:"admin-manual/resource-admin/workload-group",id:"version-2.0/admin-manual/resource-admin/workload-group",title:"Workload Group",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/admin-manual/resource-admin/workload-group.md",sourceDirName:"admin-manual/resource-admin",slug:"/admin-manual/resource-admin/workload-group",permalink:"/docs/2.0/admin-manual/resource-admin/workload-group",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Workload Group",language:"en"},sidebar:"docs",previous:{title:"CCR (Cross Cluster Replication)",permalink:"/docs/2.0/admin-manual/data-admin/ccr"},next:{title:"Resource Group",permalink:"/docs/2.0/admin-manual/resource-admin/multi-tenant"}},u={},s=[{value:"Workload group properties",id:"workload-group-properties",level:2},{value:"Workload group usage",id:"workload-group-usage",level:2},{value:"Query queue Function",id:"query-queue-function",level:3}],p={toc:s},m="wrapper";function c(e){let{components:r,...o}=e;return(0,a.yg)(m,(0,t.A)({},p,o,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"The workload group can limit the use of compute and memory resources on a single be node for tasks within the group. Currently, query binding to workload groups is supported."),(0,a.yg)("h2",{id:"workload-group-properties"},"Workload group properties"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"cpu_share: Required, used to set how much cpu time the workload group can acquire, which can achieve soft isolation of cpu resources. cpu_share is a relative value indicating the weight of cpu resources available to the running workload group. For example, if a user creates 3 workload groups rg-a, rg-b and rg-c with cpu_share of 10, 30 and 40 respectively, and at a certain moment rg-a and rg-b are running tasks while rg-c has no tasks, then rg-a can get 25% (10 / (10 + 30)) of the cpu resources while workload group rg-b can get 75% of the cpu resources. If the system has only one workload group running, it gets all the cpu resources regardless of the value of its cpu_share.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"memory_limit: Required, set the percentage of be memory that can be used by the workload group. The absolute value of the workload group memory limit is: ",(0,a.yg)("inlineCode",{parentName:"p"},"physical_memory * mem_limit * memory_limit"),", where mem_limit is a be configuration item. The total memory_limit of all workload groups in the system must not exceed 100%. Workload groups are guaranteed to use the memory_limit for the tasks in the group in most cases. When the workload group memory usage exceeds this limit, tasks in the group with larger memory usage may be canceled to release the excess memory, refer to enable_memory_overcommit.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"enable_memory_overcommit: Optional, enable soft memory isolation for the workload group, default is false. if set to false, the workload group is hard memory isolated and the tasks with the largest memory usage will be canceled immediately after the workload group memory usage exceeds the limit to release the excess memory. if set to true, the workload group is hard memory isolated and the tasks with the largest memory usage will be canceled immediately after the workload group memory usage exceeds the limit to release the excess memory. if set to true, the workload group is softly isolated, if the system has free memory resources, the workload group can continue to use system memory after exceeding the memory_limit limit, and when the total system memory is tight, it will cancel several tasks in the group with the largest memory occupation, releasing part of the excess memory to relieve the system memory pressure. It is recommended that when this configuration is enabled for a workload group, the total memory_limit of all workload groups should be less than 100%, and the remaining portion should be used for workload group memory overcommit."))),(0,a.yg)("h2",{id:"workload-group-usage"},"Workload group usage"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Enable the experimental_enable_workload_group configuration, set in fe.conf to")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"experimental_enable_workload_group=true\n")),(0,a.yg)("p",null,"The system will automatically create a default workload group named ",(0,a.yg)("inlineCode",{parentName:"p"},"normal")," after this configuration is enabled. "),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"To create a workload group:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'create workload group if not exists g1\nproperties (\n    "cpu_share"="10".\n    "memory_limit"="30%".\n    "enable_memory_overcommit"="true"\n).\n')),(0,a.yg)("p",null,"For details on creating a workload group, see ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-WORKLOAD-GROUP"},"CREATE-WORKLOAD-GROUP"),", and to delete a workload group, refer to ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-WORKLOAD-GROUP"},"DROP-WORKLOAD-GROUP"),"; to modify a workload group, refer to ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-WORKLOAD-GROUP"},"ALTER-WORKLOAD-GROUP"),"; to view the workload group, refer to: ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.0/sql-manual/sql-functions/table-functions/workload-group"},"WORKLOAD_GROUPS()")," and ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-WORKLOAD-GROUPS"},"SHOW-WORKLOAD-GROUPS"),"."),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"turn on the pipeline execution engine, the workload group cpu isolation is based on the implementation of the pipeline execution engine, so you need to turn on the session variable:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"set experimental_enable_pipeline_engine = true.\n")),(0,a.yg)("ol",{start:4},(0,a.yg)("li",{parentName:"ol"},"Bind the workload group.")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Bind the user to the workload group by default by setting the user property to ",(0,a.yg)("inlineCode",{parentName:"li"},"normal"),".")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"set property 'default_workload_group' = 'g1'.\n")),(0,a.yg)("p",null,"The current user's query will use 'g1' by default."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Specify the workload group via the session variable, which defaults to null.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"set workload_group = 'g2'.\n")),(0,a.yg)("p",null,"session variable ",(0,a.yg)("inlineCode",{parentName:"p"},"workload_group")," takes precedence over user property ",(0,a.yg)("inlineCode",{parentName:"p"},"default_workload_group"),", in case ",(0,a.yg)("inlineCode",{parentName:"p"},"workload_group")," is empty, the query will be bound to ",(0,a.yg)("inlineCode",{parentName:"p"},"default_workload_group"),", in case session variable ",(0,a.yg)("inlineCode",{parentName:"p"}," workload_group")," is not empty, the query will be bound to ",(0,a.yg)("inlineCode",{parentName:"p"},"workload_group"),"."),(0,a.yg)("p",null,"If you are a non-admin user, you need to execute ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-WORKLOAD-GROUPS"},"SHOW-WORKLOAD-GROUPS")," to check if the current user can see the workload group, if not, the workload group may not exist or the current user does not have permission to execute the query. If you cannot see the workload group, the workload group may not exist or the current user does not have privileges. To authorize the workload group, refer to: ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.0/sql-manual/sql-reference/Account-Management-Statements/GRANT"},"grant statement"),"."),(0,a.yg)("ol",{start:5},(0,a.yg)("li",{parentName:"ol"},"Execute the query, which will be associated with the g1 workload group.")),(0,a.yg)("h3",{id:"query-queue-function"},"Query queue Function"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'create workload group if not exists test_group\nproperties (\n    "cpu_share"="10",\n    "memory_limit"="30%",\n    "max_concurrency" = "10",\n    "max_queue_size" = "20",\n    "queue_timeout" = "3000"\n);\n')),(0,a.yg)("p",null,"The current workload group supports the function of querying queues, which can be specified when creating a new group. The following three parameters are required:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"max_concurrency, the maximum number of queries allowed by the current group; Queries exceeding the maximum concurrency will enter the queue logic"),(0,a.yg)("li",{parentName:"ul"},"max_queue_size, the length of the query waiting queue; When the queue is full, new queries will be rejected"),(0,a.yg)("li",{parentName:"ul"},"queue_timeout, the time the query waits in the queue. If the query wait time exceeds this value, the query will be rejected, and the time unit is milliseconds")),(0,a.yg)("p",null,"It should be noted that the current queuing design is not aware of the number of FEs, and the queuing parameters only works in a single FE, for example:"),(0,a.yg)("p",null,"A Doris cluster is configured with a work load group and set max_concurrency=1,\nIf there is only 1 FE in the cluster, then this workload group will only run one SQL at the same time from the Doris cluster perspective,\nIf there are 3 FEs, the maximum number of query that can be run in Doris cluster is 3."))}c.isMDXComponent=!0}}]);