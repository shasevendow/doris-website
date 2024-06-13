"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[82529],{15680:(e,a,t)=>{t.d(a,{xA:()=>s,yg:()=>u});var n=t(296540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),m=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},s=function(e){var a=m(e.components);return n.createElement(p.Provider,{value:a},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),y=m(t),g=r,u=y["".concat(p,".").concat(g)]||y[g]||d[g]||i;return t?n.createElement(u,l(l({ref:a},s),{},{components:t})):n.createElement(u,l({ref:a},s))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=g;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[y]="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=t[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},528861:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=t(58168),r=(t(296540),t(15680));const i={title:"ALTER-ROUTINE-LOAD",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-statements/Data-Manipulation-Statements/Load/ALTER-ROUTINE-LOAD",id:"sql-manual/sql-statements/Data-Manipulation-Statements/Load/ALTER-ROUTINE-LOAD",title:"ALTER-ROUTINE-LOAD",description:"\x3c!--",source:"@site/docs/sql-manual/sql-statements/Data-Manipulation-Statements/Load/ALTER-ROUTINE-LOAD.md",sourceDirName:"sql-manual/sql-statements/Data-Manipulation-Statements/Load",slug:"/sql-manual/sql-statements/Data-Manipulation-Statements/Load/ALTER-ROUTINE-LOAD",permalink:"/docs/dev/sql-manual/sql-statements/Data-Manipulation-Statements/Load/ALTER-ROUTINE-LOAD",draft:!1,tags:[],version:"current",frontMatter:{title:"ALTER-ROUTINE-LOAD",language:"en"},sidebar:"docs",previous:{title:"CREATE-ROUTINE-LOAD",permalink:"/docs/dev/sql-manual/sql-statements/Data-Manipulation-Statements/Load/CREATE-ROUTINE-LOAD"},next:{title:"PAUSE-ROUTINE-LOAD",permalink:"/docs/dev/sql-manual/sql-statements/Data-Manipulation-Statements/Load/PAUSE-ROUTINE-LOAD"}},p={},m=[{value:"ALTER-ROUTINE-LOAD",id:"alter-routine-load",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],s={toc:m},y="wrapper";function d(e){let{components:a,...t}=e;return(0,r.yg)(y,(0,n.A)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"alter-routine-load"},"ALTER-ROUTINE-LOAD"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"ALTER ROUTINE LOAD"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This syntax is used to modify an already created routine import job."),(0,r.yg)("p",null,"Only jobs in the PAUSED state can be modified."),(0,r.yg)("p",null,"grammar:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER ROUTINE LOAD FOR [db.]job_name\n[job_properties]\nFROM data_source\n[data_source_properties]\n")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"[db.]job_name")),(0,r.yg)("p",{parentName:"li"},"Specifies the job name to modify.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"tbl_name")),(0,r.yg)("p",{parentName:"li"},"Specifies the name of the table to be imported.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"job_properties")),(0,r.yg)("p",{parentName:"li"},"Specifies the job parameters that need to be modified. Currently, only the modification of the following parameters is supported:"),(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"desired_concurrent_number")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"max_error_number")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"max_batch_interval")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"max_batch_rows")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"max_batch_size")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"jsonpaths")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"json_root")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"strip_outer_array")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"strict_mode")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"timezone")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"num_as_string")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"fuzzy_parse")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"partial_columns")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"max_filter_ratio"))))),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"data_source")),(0,r.yg)("p",{parentName:"li"},"The type of data source. Currently supports:"),(0,r.yg)("p",{parentName:"li"},"KAFKA")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"data_source_properties")),(0,r.yg)("p",{parentName:"li"},"Relevant properties of the data source. Currently only supports:"),(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"kafka_partitions")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"kafka_offsets")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"kafka_broker_list")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"kafka_topic")),(0,r.yg)("li",{parentName:"ol"},"Custom properties, such as ",(0,r.yg)("inlineCode",{parentName:"li"},"property.group.id"))),(0,r.yg)("p",{parentName:"li"},"Note:"),(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"kafka_partitions")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"kafka_offsets")," are used to modify the offset of the kafka partition to be consumed, only the currently consumed partition can be modified. Cannot add partition.")))),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Change ",(0,r.yg)("inlineCode",{parentName:"p"},"desired_concurrent_number")," to 1"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER ROUTINE LOAD FOR db1.label1\nPROPERTIES\n(\n    "desired_concurrent_number" = "1"\n);\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Modify ",(0,r.yg)("inlineCode",{parentName:"p"},"desired_concurrent_number")," to 10, modify the offset of the partition, and modify the group id."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER ROUTINE LOAD FOR db1.label1\nPROPERTIES\n(\n    "desired_concurrent_number" = "10"\n)\nFROM kafka\n(\n    "kafka_partitions" = "0, 1, 2",\n    "kafka_offsets" = "100, 200, 100",\n    "property.group.id" = "new_group"\n);\n')))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"ALTER, ROUTINE, LOAD\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}d.isMDXComponent=!0}}]);