"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[23803],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>h});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,h=m["".concat(i,".").concat(d)]||m[d]||p[d]||s;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<s;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},95392:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var n=a(58168),r=(a(296540),a(15680));const s={title:"SHOW-PROC",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-PROC",id:"version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-PROC",title:"SHOW-PROC",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-PROC.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-PROC",permalink:"/docs/sql-manual/sql-statements/Show-Statements/SHOW-PROC",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SHOW-PROC",language:"en"},sidebar:"docs",previous:{title:"SHOW-ROUTINE-LOAD-TASK",permalink:"/docs/sql-manual/sql-statements/Show-Statements/SHOW-ROUTINE-LOAD-TASK"},next:{title:"SHOW-TABLE-STATS",permalink:"/docs/sql-manual/sql-statements/Show-Statements/SHOW-TABLE-STATS"}},i={},u=[{value:"SHOW-PROC",id:"show-proc",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:u},m="wrapper";function p(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"show-proc"},"SHOW-PROC"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"SHOW PROC"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"The Proc system is a unique feature of Doris. Students who have used Linux may understand this concept better. In Linux systems, proc is a virtual file system, usually mounted in the /proc directory. Users can view the internal data structure of the system through this file system. For example, you can view the details of the specified pid process through /proc/pid."),(0,r.yg)("p",null,'Similar to the proc system in Linux, the proc system in Doris is also organized into a directory-like structure to view different system information according to the "directory path (proc path)" specified by the user.'),(0,r.yg)("p",null,"The proc system is designed mainly for system administrators, so that it is convenient for them to view some running states inside the system. Such as the tablet status of the table, the cluster balance status, the status of various jobs, and so on. is a very useful function"),(0,r.yg)("p",null,"There are two ways to view the proc system in Doris."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"View through the WEB UI interface provided by Doris, visit the address: ",(0,r.yg)("inlineCode",{parentName:"li"},"http://FE_IP:FE_HTTP_PORT")),(0,r.yg)("li",{parentName:"ol"},"Another way is by command")),(0,r.yg)("p",null,"All commands supported by Doris PROC can be seen through ",(0,r.yg)("inlineCode",{parentName:"p"},' SHOW PROC "/";')),(0,r.yg)("p",null,'After connecting to Doris through the MySQL client, you can execute the SHOW PROC statement to view the information of the specified proc directory. The proc directory is an absolute path starting with "/".'),(0,r.yg)("p",null,"The results of the show proc statement are presented in a two-dimensional table. And usually the first column of the result table is the next subdirectory of proc."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-none"},'mysql> show proc "/";\n+---------------------------+\n| name                      |\n+---------------------------+\n| auth                      |\n| backends                  |\n| bdbje                     |\n| brokers                   |\n| catalogs                  |\n| cluster_balance           |\n| cluster_health            |\n| colocation_group          |\n| current_backend_instances |\n| current_queries           |\n| current_query_stmts       |\n| dbs                       |\n| diagnose                  |\n| frontends                 |\n| jobs                      |\n| load_error_hub            |\n| monitor                   |\n| resources                 |\n| routine_loads             |\n| statistic                 |\n| stream_loads              |\n| tasks                     |\n| transactions              |\n| trash                     |\n+---------------------------+\n23 rows in set (0.00 sec)\n')),(0,r.yg)("p",null,"illustrate:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"auth: User name and corresponding permission information"),(0,r.yg)("li",{parentName:"ol"},"backends: Displays the node list of BE in the cluster, equivalent to ",(0,r.yg)("a",{parentName:"li",href:"/docs/sql-manual/sql-statements/Show-Statements/SHOW-BACKENDS"},"SHOW BACKENDS")),(0,r.yg)("li",{parentName:"ol"},"bdbje: To view the bdbje database list, you need to modify the ",(0,r.yg)("inlineCode",{parentName:"li"},"fe.conf")," file to add ",(0,r.yg)("inlineCode",{parentName:"li"},"enable_bdbje_debug_mode=true"),", and then start ",(0,r.yg)("inlineCode",{parentName:"li"},"FE")," through ",(0,r.yg)("inlineCode",{parentName:"li"},"sh start_fe.sh --daemon")," to enter the ",(0,r.yg)("inlineCode",{parentName:"li"},"debug")," mode. After entering ",(0,r.yg)("inlineCode",{parentName:"li"},"debug")," mode, only ",(0,r.yg)("inlineCode",{parentName:"li"},"http server")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"MySQLServer")," will be started and the ",(0,r.yg)("inlineCode",{parentName:"li"},"BDBJE")," instance will be opened, but no metadata loading and subsequent startup processes will be entered."),(0,r.yg)("li",{parentName:"ol"},"brokers : View cluster broker node information, equivalent to ",(0,r.yg)("a",{parentName:"li",href:"/docs/sql-manual/sql-statements/Show-Statements/SHOW-BROKER"},"SHOW BROKER")),(0,r.yg)("li",{parentName:"ol"},"catalogs : View the data catalogs that have been created currently, equivalent to ",(0,r.yg)("a",{parentName:"li",href:"/docs/sql-manual/sql-statements/Show-Statements/SHOW-CATALOGS"},"SHOW CATALOGS")),(0,r.yg)("li",{parentName:"ol"},"cluster_balance : To check the balance of the cluster, please refer to ",(0,r.yg)("a",{parentName:"li",href:"/docs/admin-manual/maint-monitor/tablet-repair-and-balance"},"Data Copy Management")),(0,r.yg)("li",{parentName:"ol"},"cluster_health: Run ",(0,r.yg)("code",null,"SHOW PROC '/cluster_health/tablet_health';")," statement to view the replica status of the entire cluster."),(0,r.yg)("li",{parentName:"ol"},"colocation_group : This command can view the existing Group information in the cluster. For details, please refer to the ",(0,r.yg)("a",{parentName:"li",href:"../../../query-acceleration/join-optimization/colocation-join.md"},"Colocation Join")," chapter"),(0,r.yg)("li",{parentName:"ol"},"current_backend_instances : Displays a list of be nodes that are currently executing jobs"),(0,r.yg)("li",{parentName:"ol"},"current_queries : View the list of queries being executed, the SQL statement currently running."),(0,r.yg)("li",{parentName:"ol"},"current_query_stmts: Returns the currently executing query."),(0,r.yg)("li",{parentName:"ol"},"dbs: Mainly used to view the metadata information of each database and the tables in the Doris cluster. This information includes table structure, partitions, materialized views, data shards and replicas, and more. Through this directory and its subdirectories, you can clearly display the table metadata in the cluster, and locate some problems such as data skew, replica failure, etc."),(0,r.yg)("li",{parentName:"ol"},"diagnose: Report and diagnose common management and control issues in the cluster, including replica balance and migration, transaction exceptions, etc."),(0,r.yg)("li",{parentName:"ol"},"frontends: Display all FE node information in the cluster, including IP address, role, status, whether it is a master, etc., equivalent to ",(0,r.yg)("a",{parentName:"li",href:"/docs/sql-manual/sql-statements/Show-Statements/SHOW-FRONTENDS"},"SHOW FRONTENDS")),(0,r.yg)("li",{parentName:"ol"},"jobs: show statistics of all kind of jobs. If a specific ",(0,r.yg)("inlineCode",{parentName:"li"},"dbId")," is given, will return statistics data of the database. If ",(0,r.yg)("inlineCode",{parentName:"li"},"dbId")," is -1, will return total statistics data of all databases"),(0,r.yg)("li",{parentName:"ol"},"load_error_hub: Doris supports centralized storage of error information generated by load jobs in an error hub. Then view the error message directly through the ",(0,r.yg)("code",null,"SHOW LOAD WARNINGS;")," statement. Shown here is the configuration information of the error hub."),(0,r.yg)("li",{parentName:"ol"},"monitor : shows the resource usage of FE JVM"),(0,r.yg)("li",{parentName:"ol"},"resources : View system resources, ordinary accounts can only see resources that they have USAGE_PRIV permission to use. Only the root and admin accounts can see all resources. Equivalent to ",(0,r.yg)("a",{parentName:"li",href:"/docs/sql-manual/sql-statements/Show-Statements/SHOW-RESOURCES"},"SHOW RESOURCES")),(0,r.yg)("li",{parentName:"ol"},"routine_loads: Display all routine load job information, including job name, status, etc."),(0,r.yg)("li",{parentName:"ol"},"statistics: It is mainly used to summarize and view the number of databases, tables, partitions, shards, and replicas in the Doris cluster. and the number of unhealthy copies. This information helps us to control the size of the cluster meta-information in general. It helps us view the cluster sharding situation from an overall perspective, and can quickly check the health of the cluster sharding. This further locates problematic data shards."),(0,r.yg)("li",{parentName:"ol"},"stream_loads: Returns the stream load task being executed."),(0,r.yg)("li",{parentName:"ol"},"tasks : Displays the total number of tasks of various jobs and the number of failures."),(0,r.yg)("li",{parentName:"ol"},"transactions : used to view the transaction details of the specified transaction id, equivalent to ",(0,r.yg)("a",{parentName:"li",href:"/docs/sql-manual/sql-statements/Show-Statements/SHOW-TRANSACTION"},"SHOW TRANSACTION")),(0,r.yg)("li",{parentName:"ol"},"trash: This statement is used to view the space occupied by garbage data in the backend. Equivalent to ",(0,r.yg)("a",{parentName:"li",href:"/docs/sql-manual/sql-statements/Show-Statements/SHOW-TRASH"},"SHOW TRASH"))),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},'For example, "/dbs" displays all databases, and "/dbs/10002" displays all tables under the database with id 10002'),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> show proc "/dbs/10002";\n+---------+----------------------+----------+---------------------+--------------+--------+------+--------------------------+--------------+\n| TableId | TableName            | IndexNum | PartitionColumnName | PartitionNum | State  | Type | LastConsistencyCheckTime | ReplicaCount |\n+---------+----------------------+----------+---------------------+--------------+--------+------+--------------------------+--------------+\n| 10065   | dwd_product_live     | 1        | dt                  | 9            | NORMAL | OLAP | NULL                     | 18           |\n| 10109   | ODS_MR_BILL_COSTS_DO | 1        | NULL                | 1            | NORMAL | OLAP | NULL                     | 1            |\n| 10119   | test                 | 1        | NULL                | 1            | NORMAL | OLAP | NULL                     | 1            |\n| 10124   | test_parquet_import  | 1        | NULL                | 1            | NORMAL | OLAP | NULL                     | 1            |\n+---------+----------------------+----------+---------------------+--------------+--------+------+--------------------------+--------------+\n4 rows in set (0.00 sec)\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Display information about the number of all database tables in the cluster."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show proc '/statistic';\n+-------+----------------------+----------+--------------+----------+-----------+------------+\n| DbId  | DbName               | TableNum | PartitionNum | IndexNum | TabletNum | ReplicaNum |\n+-------+----------------------+----------+--------------+----------+-----------+------------+\n| 10002 | default_cluster:test | 4        | 12           | 12       | 21        | 21         |\n| Total | 1                    | 4        | 12           | 12       | 21        | 21         |\n+-------+----------------------+----------+--------------+----------+-----------+------------+\n2 rows in set (0.00 sec)\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"The following command can view the existing Group information in the cluster."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"SHOW PROC '/colocation_group';\n\n+-------------+--------------+--------------+------------+----------------+----------+----------+\n| GroupId     | GroupName    | TableIds     | BucketsNum | ReplicationNum | DistCols | IsStable |\n+-------------+--------------+--------------+------------+----------------+----------+----------+\n| 10005.10008 | 10005_group1 | 10007, 10040 | 10         | 3              | int(11)  | true     |\n+-------------+--------------+--------------+------------+----------------+----------+----------+\n")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"GroupId: The cluster-wide unique identifier of a group, the first half is the db id, and the second half is the group id."),(0,r.yg)("li",{parentName:"ul"},"GroupName: The full name of the Group."),(0,r.yg)("li",{parentName:"ul"},"TabletIds: The id list of Tables contained in this Group."),(0,r.yg)("li",{parentName:"ul"},"BucketsNum: The number of buckets."),(0,r.yg)("li",{parentName:"ul"},"ReplicationNum: The number of replicas."),(0,r.yg)("li",{parentName:"ul"},"DistCols: Distribution columns, that is, the bucket column type."),(0,r.yg)("li",{parentName:"ul"},"IsStable: Whether the Group is stable (for the definition of stability, see the ",(0,r.yg)("inlineCode",{parentName:"li"},"Colocation replica balance and repair")," section)."))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Use the following commands to further view the data distribution of a Group:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW PROC '/colocation_group/10005.10008';\n\n+-------------+---------------------+\n| BucketIndex | BackendIds          |\n+-------------+---------------------+\n| 0           | 10004, 10002, 10001 |\n| 1           | 10003, 10002, 10004 |\n| 2           | 10002, 10004, 10001 |\n| 3           | 10003, 10002, 10004 |\n| 4           | 10002, 10004, 10003 |\n| 5           | 10003, 10002, 10001 |\n| 6           | 10003, 10004, 10001 |\n| 7           | 10003, 10004, 10002 |\n+-------------+---------------------+\n")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"BucketIndex: The index of the bucket sequence."),(0,r.yg)("li",{parentName:"ul"},"BackendIds: The list of BE node IDs where the data shards in the bucket are located."))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Display the total number of tasks of various jobs and the number of failures."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show proc '/tasks';\n+-------------------------+-----------+----------+\n| TaskType                | FailedNum | TotalNum |\n+-------------------------+-----------+----------+\n| CREATE                  | 0         | 0        |\n| DROP                    | 0         | 0        |\n| PUSH                    | 0         | 0        |\n| CLONE                   | 0         | 0        |\n| STORAGE_MEDIUM_MIGRATE  | 0         | 0        |\n| ROLLUP                  | 0         | 0        |\n| SCHEMA_CHANGE           | 0         | 0        |\n| CANCEL_DELETE           | 0         | 0        |\n| MAKE_SNAPSHOT           | 0         | 0        |\n| RELEASE_SNAPSHOT        | 0         | 0        |\n| CHECK_CONSISTENCY       | 0         | 0        |\n| UPLOAD                  | 0         | 0        |\n| DOWNLOAD                | 0         | 0        |\n| CLEAR_REMOTE_FILE       | 0         | 0        |\n| MOVE                    | 0         | 0        |\n| REALTIME_PUSH           | 0         | 0        |\n| PUBLISH_VERSION         | 0         | 0        |\n| CLEAR_ALTER_TASK        | 0         | 0        |\n| CLEAR_TRANSACTION_TASK  | 0         | 0        |\n| RECOVER_TABLET          | 0         | 0        |\n| STREAM_LOAD             | 0         | 0        |\n| UPDATE_TABLET_META_INFO | 0         | 0        |\n| ALTER                   | 0         | 0        |\n| INSTALL_PLUGIN          | 0         | 0        |\n| UNINSTALL_PLUGIN        | 0         | 0        |\n| Total                   | 0         | 0        |\n+-------------------------+-----------+----------+\n26 rows in set (0.01 sec)\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Display the replica status of the entire cluster."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show proc '/cluster_health/tablet_health';\n+----------+---------------------------+-----------+------------+-------------------+----------------------+----------------------+--------------+----------------------------+-------------------------+-------------------+---------------------+----------------------+----------------------+------------------+-----------------------------+-----------------+-------------+------------+\n| DbId     | DbName                    | TabletNum | HealthyNum | ReplicaMissingNum | VersionIncompleteNum | ReplicaRelocatingNum | RedundantNum | ReplicaMissingInClusterNum | ReplicaMissingForTagNum | ForceRedundantNum | ColocateMismatchNum | ColocateRedundantNum | NeedFurtherRepairNum | UnrecoverableNum | ReplicaCompactionTooSlowNum | InconsistentNum | OversizeNum | CloningNum |\n+----------+---------------------------+-----------+------------+-------------------+----------------------+----------------------+--------------+----------------------------+-------------------------+-------------------+---------------------+----------------------+----------------------+------------------+-----------------------------+-----------------+-------------+------------+\n| 25852112 | default_cluster:bowen     | 1920      | 1920       | 0                 | 0                    | 0                    | 0            | 0                          | 0                       | 0                 | 0                   | 0                    | 0                    | 0                | 0                           | 0               | 0           | 0          |\n| 25342914 | default_cluster:bw        | 128       | 128        | 0                 | 0                    | 0                    | 0            | 0                          | 0                       | 0                 | 0                   | 0                    | 0                    | 0                | 0                           | 0               | 0           | 0          |\n| 2575532  | default_cluster:cps       | 1440      | 1440       | 0                 | 0                    | 0                    | 0            | 0                          | 0                       | 0                 | 0                   | 0                    | 0                    | 0                | 0                           | 0               | 16          | 0          |\n| 26150325 | default_cluster:db        | 38374     | 38374      | 0                 | 0                    | 0                    | 0            | 0                          | 0                       | 0                 | 0                   | 0                    | 0                    | 0                | 0                           | 0               | 453         | 0          |\n+----------+---------------------------+-----------+------------+-------------------+----------------------+----------------------+--------------+----------------------------+-------------------------+-------------------+---------------------+----------------------+----------------------+------------------+-----------------------------+-----------------+-------------+------------+\n4 rows in set (0.01 sec)\n")),(0,r.yg)("p",{parentName:"li"},"View the replica status under a database, such as a database with a DbId of 25852112."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show proc '/cluster_health/tablet_health/25852112';\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Report and diagnose cluster management issues"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'MySQL > show proc "/diagnose";\n+-----------------+----------+------------+\n| Item            | ErrorNum | WarningNum |\n+-----------------+----------+------------+\n| cluster_balance | 2        | 0          |\n| Total           | 2        | 0          |\n+-----------------+----------+------------+\n\n2 rows in set\n')))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'View replica balance migration issues\n\n```sql\nMySQL > show proc "/diagnose/cluster_balance";\n+-----------------------+--------+-------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------+------------+\n| Item                  | Status | Content                                                                                                     | Detail Cmd                                                          | Suggestion |\n+-----------------------+--------+-------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------+------------+\n| Tablet Health         | ERROR  | healthy tablet num 691 < total tablet num 1014                                                              | show   proc "/cluster_health/tablet_health";                          | <null>     |\n| BeLoad Balance        | ERROR  | backend load not balance for tag {"location" : "default"}, low load backends [], high load backends  [10009] | show proc "/cluster_balance/cluster_load_stat/location_default/HDD" | <null>     |\n| Disk Balance          | OK     | <null>                                                                                                      | <null>                                                              | <null>     |\n| Colocate Group Stable | OK     | <null>                                                                                                      | <null>                                                              | <null>     |\n| History Tablet Sched  | OK     | <null>                                                                                                      | <null>                                                              | <null>     |\n+-----------------------+--------+-------------------------------------------------------------------------------------------------------------+---------------------------------------------------------------------+------------+\n\n5 rows in set\n```\n')),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SHOW, PROC\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}p.isMDXComponent=!0}}]);