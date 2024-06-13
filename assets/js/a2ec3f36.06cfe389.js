"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[85002],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>u});var a=n(296540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(n),y=i,u=d["".concat(s,".").concat(y)]||d[y]||g[y]||o;return n?a.createElement(u,r(r({ref:t},p),{},{components:n})):a.createElement(u,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var m=2;m<o;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},31004:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=n(58168),i=(n(296540),n(15680));const o={title:"Time Zone",language:"en"},r=void 0,l={unversionedId:"query/query-variables/time-zone",id:"query/query-variables/time-zone",title:"Time Zone",description:"\x3c!--",source:"@site/docs/query/query-variables/time-zone.md",sourceDirName:"query/query-variables",slug:"/query/query-variables/time-zone",permalink:"/docs/dev/query/query-variables/time-zone",draft:!1,tags:[],version:"current",frontMatter:{title:"Time Zone",language:"en"},sidebar:"docs",previous:{title:"SQL Mode",permalink:"/docs/dev/query/query-variables/sql-mode"},next:{title:"User Defined Variables",permalink:"/docs/dev/query/query-variables/user-defined-variables"}},s={},m=[{value:"Basic concepts",id:"basic-concepts",level:2},{value:"Specific operations",id:"specific-operations",level:2},{value:"Data source",id:"data-source",level:2},{value:"Impact of time zone",id:"impact-of-time-zone",level:2},{value:"1. functions",id:"1-functions",level:3},{value:"2. Values of time types",id:"2-values-of-time-types",level:3},{value:"3. Daylight Saving Time",id:"3-daylight-saving-time",level:3},{value:"Usage",id:"usage",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Time Zone Sensitive Data",id:"time-zone-sensitive-data",level:3},{value:"Daylight Saving Time",id:"daylight-saving-time",level:3},{value:"Information Update",id:"information-update",level:3},{value:"Extended Reading",id:"extended-reading",level:2}],p={toc:m},d="wrapper";function g(e){let{components:t,...n}=e;return(0,i.yg)(d,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"time-zone"},"Time Zone"),(0,i.yg)("p",null,"Doris supports custom time zone settings"),(0,i.yg)("h2",{id:"basic-concepts"},"Basic concepts"),(0,i.yg)("p",null,"The following two time zone related parameters exist within Doris:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"system_time_zone")," : When the server starts up, it will be set automatically according to the time zone set by the machine, and cannot be modified after it is set."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"time_zone")," : The current time zone of the cluster.")),(0,i.yg)("h2",{id:"specific-operations"},"Specific operations"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"SHOW VARIABLES LIKE '% time_zone%'")),(0,i.yg)("p",{parentName:"li"},"View the current time zone related configuration")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"SET [global] time_zone = 'Asia/Shanghai'")),(0,i.yg)("p",{parentName:"li"},"This command sets the time zone at the session level. If the ",(0,i.yg)("inlineCode",{parentName:"p"},"global")," keyword is used, Doris FE persists the parameter and it takes effect for all new sessions afterwards."))),(0,i.yg)("h2",{id:"data-source"},"Data source"),(0,i.yg)("p",null,"The time zone data contains the name of the time zone, the corresponding time offset, and the change of daylight saving time. On the machine where the BE is located, the sources of the data are as follows:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"the directory returned by command ",(0,i.yg)("inlineCode",{parentName:"li"},"TZDIR"),". If was not supported, the directory ",(0,i.yg)("inlineCode",{parentName:"li"},"/usr/share/zoneinfo"),"."),(0,i.yg)("li",{parentName:"ol"},"the ",(0,i.yg)("inlineCode",{parentName:"li"},"zoneinfo")," directory generated under the Doris BE deployment directory. The ",(0,i.yg)("inlineCode",{parentName:"li"},"resource/zoneinfo.tar.gz")," directory from the Doris Repository.")),(0,i.yg)("p",null,"Look up the above data sources in order and use the current item if found. If neither is found, the Doris BE will fail to start, please rebuild the BE correctly or get the distribution."),(0,i.yg)("h2",{id:"impact-of-time-zone"},"Impact of time zone"),(0,i.yg)("h3",{id:"1-functions"},"1. functions"),(0,i.yg)("p",null,"Includes values displayed by time functions such as ",(0,i.yg)("inlineCode",{parentName:"p"},"NOW()")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"CURTIME()"),", and also time values in ",(0,i.yg)("inlineCode",{parentName:"p"},"show load"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"show backends"),"."),(0,i.yg)("p",null,"However, it does not affect the less than value of the time-type partitioned columns in ",(0,i.yg)("inlineCode",{parentName:"p"},"create table"),", nor does it affect the display of values stored as ",(0,i.yg)("inlineCode",{parentName:"p"},"date/datetime")," types."),(0,i.yg)("p",null,"Functions affected by time zone:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"FROM_UNIXTIME"),": Given a UTC timestamp, return its date and time in the time zone specified by Doris session ",(0,i.yg)("inlineCode",{parentName:"p"},"time_zone"),". For example, when ",(0,i.yg)("inlineCode",{parentName:"p"},"time_zone")," is ",(0,i.yg)("inlineCode",{parentName:"p"},"CST"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"FROM_UNIXTIME(0)")," returns ",(0,i.yg)("inlineCode",{parentName:"p"},"1970-01-01 08: 00:00"),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"UNIX_TIMESTAMP"),": Given a date and time, return its UTC timestamp in the time zone specified by Doris session ",(0,i.yg)("inlineCode",{parentName:"p"},"time_zone"),", such as when ",(0,i.yg)("inlineCode",{parentName:"p"},"time_zone")," is ",(0,i.yg)("inlineCode",{parentName:"p"},"CST")," ",(0,i.yg)("inlineCode",{parentName:"p"},"UNIX_TIMESTAMP('1970-01-01 08:00:00 ')")," returns ",(0,i.yg)("inlineCode",{parentName:"p"},"0"),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"CURTIME"),": Returns the time in the time zone specified by the current Doris session ",(0,i.yg)("inlineCode",{parentName:"p"},"time_zone"),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"NOW"),": Returns the date and time of the current Doris session ",(0,i.yg)("inlineCode",{parentName:"p"},"time_zone")," specified time zone.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"CONVERT_TZ"),": Convert a datetime from one specified time zone to another."))),(0,i.yg)("h3",{id:"2-values-of-time-types"},"2. Values of time types"),(0,i.yg)("p",null,"For ",(0,i.yg)("inlineCode",{parentName:"p"},"DATE")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"DATETIME")," types, we support time zone conversion when importing data."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},'If the data has a time zone, such as "2020-12-12 12:12:12+08:00", and the current Doris ',(0,i.yg)("inlineCode",{parentName:"p"},"time_zone = +00:00")," or the header ",(0,i.yg)("inlineCode",{parentName:"p"},"timezone")," specified by Stream Load is ",(0,i.yg)("inlineCode",{parentName:"p"},"+00: 00"),', then the data is imported into Doris and the actual value is "2020-12-12 04:12:12".')),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},'If the data does not contain a time zone, such as "2020-12-12 12:12:12", the time is considered to be an absolute time and no conversion occurs.'))),(0,i.yg)("h3",{id:"3-daylight-saving-time"},"3. Daylight Saving Time"),(0,i.yg)("p",null,"Daylight Saving Time is essentially the actual time offset of a named time zone, which changes on certain dates."),(0,i.yg)("p",null,"For example, the ",(0,i.yg)("inlineCode",{parentName:"p"},"America/Los_Angeles")," time zone contains a Daylight Saving Time adjustment that begins and ends approximately in March and November of each year. That is, the ",(0,i.yg)("inlineCode",{parentName:"p"},"America/Los_Angeles")," actual time zone offset changes from ",(0,i.yg)("inlineCode",{parentName:"p"},"-08:00")," to ",(0,i.yg)("inlineCode",{parentName:"p"},"-07:00")," at the start of Daylight Savings Time in March, and from ",(0,i.yg)("inlineCode",{parentName:"p"},"-07:00")," to ",(0,i.yg)("inlineCode",{parentName:"p"},"-08:00")," at the end of Daylight Savings Time in November.\nIf you do not want Daylight Saving Time to be turned on, set ",(0,i.yg)("inlineCode",{parentName:"p"},"time_zone")," to ",(0,i.yg)("inlineCode",{parentName:"p"},"-08:00")," instead of ",(0,i.yg)("inlineCode",{parentName:"p"},"America/Los_Angeles"),"."),(0,i.yg)("h2",{id:"usage"},"Usage"),(0,i.yg)("p",null,"Time zone values can be given in a variety of formats. The following standard formats are well supported in Doris:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'standard named time zone formats, such as "Asia/Shanghai", "America/Los_Angeles".')),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'standard offset formats, such as "+02:30", "-10:00".')),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"abbreviated time zone formats, currently only support:"),(0,i.yg)("ol",{parentName:"li"},(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'"GMT", "UTC", equivalent to "+00:00" time zone')),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'"CST", which is equivalent to the "Asia/Shanghai" time zone')))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'single letter Z, for Zulu time zone, equivalent to "+00:00" time zone'))),(0,i.yg)("p",null,"Note: Some other formats are currently supported in some imports in Doris due to different implementations. ",(0,i.yg)("strong",{parentName:"p"},"Production environments should not rely on these formats that are not listed here, and their behaviour may change at any time"),", so keep an eye on the relevant changelog for version updates."),(0,i.yg)("h2",{id:"best-practices"},"Best Practices"),(0,i.yg)("h3",{id:"time-zone-sensitive-data"},"Time Zone Sensitive Data"),(0,i.yg)("p",null,"The time zone issue involves three main influences:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"session variable ",(0,i.yg)("inlineCode",{parentName:"p"},"time_zone")," -- cluster timezone")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"header ",(0,i.yg)("inlineCode",{parentName:"p"},"timezone")," specified during import(Stream Load, Broker Load etc.) -- importing timezone")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'timezone type literal "+08:00" in "2023-12-12 08:00:00+08:00" -- data timezone'))),(0,i.yg)("p",null,"We can understand it as follows:"),(0,i.yg)("p",null,"Doris is currently compatible with importing data in various time zones into Doris. Since Doris's own ",(0,i.yg)("inlineCode",{parentName:"p"},"DATETIME")," and other time types do not contain time zone information, and the data will not change with time zone changes after being imported, when time data is imported into Doris, it can be divided into the following two categories:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Absolute time"),(0,i.yg)("p",{parentName:"li"},"Absolute time means that the data scene it is associated with has nothing to do with time zones. This type of data should be imported without any time zone suffix and will be stored as-is.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Time in a specific time zone"),(0,i.yg)("p",{parentName:"li"},"The time in a specific time zone means that the data scenario it is associated with is related to the time zone. For this type of data, it should be imported with a specific time zone suffix. When imported, they will be converted to the Doris cluster ",(0,i.yg)("inlineCode",{parentName:"p"},"time_zone")," time zone or the header ",(0,i.yg)("inlineCode",{parentName:"p"},"timezone")," specified in Stream Load/Broker Load."),(0,i.yg)("p",{parentName:"li"},"This type of data is converted to absolute time storage in the time zone specified during import after import, so subsequent imports and queries should maintain this time zone to avoid confusion in the meaning of the data."))),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"For the Insert statement, we can illustrate it through the following example:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"Doris > select @@time_zone;\n+---------------+\n| @@time_zone   |\n+---------------+\n| Asia/Shanghai |\n+---------------+\n\nDoris > insert into dt values('2020-12-12 12:12:12+02:00'); --- The imported data specifies a time zone of +02:00\n\nDoris > select * from dt;\n+---------------------+\n| dt                  |\n+---------------------+\n| 2020-12-12 18:12:12 | --- Is converted to the Doris cluster time zone Asia/Shanghai, subsequent imports and queries should maintain this time zone.\n+---------------------+\n\nDoris > set time_zone = 'America/Los_Angeles';\n\nDoris > select * from dt;\n+---------------------+\n| dt                  |\n+---------------------+\n| 2020-12-12 18:12:12 | --- If time_zone is modified, the time value will not change accordingly, and its meaning during query will be confused.\n+---------------------+\n"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"For import methods such as Stream Load and Broker Load, we can achieve this by specifying header ",(0,i.yg)("inlineCode",{parentName:"p"},"timezone"),". For example, for Stream Load, we can illustrate it through the following example:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-shell"},'cat dt.csv\n2020-12-12 12:12:12+02:00\n\ncurl --location-trusted -u root: \\\n -H "Expect:100-continue" \\\n -H "strict_mode: true" \\\n -H "timezone: Asia/Shanghai" \\\n -T dt.csv -XPUT \\\n http://127.0.0.1:8030/api/test/dt/_stream_load\n')),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"Doris > select @@time_zone;\n+---------------+\n| @@time_zone   |\n+---------------+\n| Asia/Shanghai |\n+---------------+\n\nDoris > select * from dt;\n+---------------------+\n| dt                  |\n+---------------------+\n| 2020-12-12 18:12:12 | --- Is converted to the Doris cluster time zone Asia/Shanghai, subsequent imports and queries should maintain this time zone.\n+---------------------+\n")),(0,i.yg)("admonition",{parentName:"li",type:"tip"},(0,i.yg)("ul",{parentName:"admonition"},(0,i.yg)("li",{parentName:"ul"},"In import methods such as Stream Load and Broker Load, the header ",(0,i.yg)("inlineCode",{parentName:"li"},"timezone")," will overwrite the Doris cluster ",(0,i.yg)("inlineCode",{parentName:"li"},"time_zone"),", so it should be consistent during import."),(0,i.yg)("li",{parentName:"ul"},"In import methods such as Stream Load and Broker Load, the header ",(0,i.yg)("inlineCode",{parentName:"li"},"timezone")," will affect the functions used in import conversion."),(0,i.yg)("li",{parentName:"ul"},"If the header ",(0,i.yg)("inlineCode",{parentName:"li"},"timezone")," is not specified when importing, the East Eighth Zone will be used by default."))))),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"To sum up, the best practice for dealing with time zone issues is:")),(0,i.yg)("admonition",{title:"Best Practices",type:"info"},(0,i.yg)("ol",{parentName:"admonition"},(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Confirm the time zone represented by the cluster and set ",(0,i.yg)("inlineCode",{parentName:"p"},"time_zone")," before use, and do not change it after that.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Set header ",(0,i.yg)("inlineCode",{parentName:"p"},"timezone")," to be consistent with cluster ",(0,i.yg)("inlineCode",{parentName:"p"},"time_zone")," when importing.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"For absolute time, import without time zone suffix; for time with time zone, import with specific time zone suffix, and it will be converted to Doris ",(0,i.yg)("inlineCode",{parentName:"p"},"time_zone")," time zone after import.")))),(0,i.yg)("h3",{id:"daylight-saving-time"},"Daylight Saving Time"),(0,i.yg)("p",null,"The start and end times for Daylight Saving Time are taken from the ",(0,i.yg)("a",{parentName:"p",href:"#data-source"},"current time zone data source")," and may not necessarily correspond exactly to the actual officially recognised times for the current year's time zone location. This data is maintained by ICANN. If you need to ensure that Daylight Saving Time behaves as specified for the current year, please make sure that data source selected by Doris is the latest ICANN published time zone data. See below for download access."),(0,i.yg)("h3",{id:"information-update"},"Information Update"),(0,i.yg)("p",null,"Real-world time zone and daylight saving time data may change from time to time for a variety of reasons, and IANA periodically records these changes and updates the corresponding time zone files. If you want the time zone information in Doris to be up to date with the latest IANA data, do one of the followings:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Use the Package Manager to update")),(0,i.yg)("p",null,"Depending on the package manager used by the current operating system, you can update the time zone data directly using the corresponding command:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"# yum\n> sudo yum update tzdata\n# apt\n> sudo apt update tzdata\n")),(0,i.yg)("p",null,"The data updated in this way is located under the system ",(0,i.yg)("inlineCode",{parentName:"p"},"$TZDIR")," (typically ",(0,i.yg)("inlineCode",{parentName:"p"},"usr/share/zoneinfo"),")."),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},"pull the IANA time zone database manually (recommended)")),(0,i.yg)("p",null,"Most Linux distributions have a package manager where tzdata is not synchronised in a timely manner. If the accuracy of the time zone data is important, you can pull the data published by IANA on a regular basis:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"wget https://www.iana.org/time-zones/repository/tzdb-latest.tar.lz\n")),(0,i.yg)("p",null,"Then generate the specific zoneinfo data according the README file in the extracted folder. The generated data should be copied to override ",(0,i.yg)("inlineCode",{parentName:"p"},"$TZDIR")," folder."),(0,i.yg)("p",null,"Please note that all the above operations ",(0,i.yg)("strong",{parentName:"p"},"must")," be restarted **on the corresponding BE to take effect after they are done on the BE machine."),(0,i.yg)("h2",{id:"extended-reading"},"Extended Reading"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones"},"List of tz database time zones"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://www.iana.org/time-zones"},"IANA Time Zone Database"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"https://mm.icann.org/pipermail/tz-announce/"},"The tz-announce Archives")))))}g.isMDXComponent=!0}}]);