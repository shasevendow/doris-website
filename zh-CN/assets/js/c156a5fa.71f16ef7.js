"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[27],{15680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>T});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},E="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),E=p(n),u=a,T=E["".concat(c,".").concat(u)]||E[u]||d[u]||o;return n?r.createElement(T,s(s({ref:t},l),{},{components:n})):r.createElement(T,s({ref:t},l))}));function T(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[E]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},236540:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(58168),a=(n(296540),n(15680));const o={title:"TPCDS",language:"zh-CN"},s=void 0,i={unversionedId:"lakehouse/datalake-analytics/tpcds",id:"lakehouse/datalake-analytics/tpcds",title:"TPCDS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/lakehouse/datalake-analytics/tpcds.md",sourceDirName:"lakehouse/datalake-analytics",slug:"/lakehouse/datalake-analytics/tpcds",permalink:"/zh-CN/docs/dev/lakehouse/datalake-analytics/tpcds",draft:!1,tags:[],version:"current",frontMatter:{title:"TPCDS",language:"zh-CN"},sidebar:"docs",previous:{title:"TPCH",permalink:"/zh-CN/docs/dev/lakehouse/datalake-analytics/tpch"},next:{title:"Hive",permalink:"/zh-CN/docs/dev/lakehouse/datalake-building/hive-build"}},c={},p=[{value:"\u4f7f\u7528\u987b\u77e5",id:"\u4f7f\u7528\u987b\u77e5",level:2},{value:"\u7f16\u8bd1 TPCDS Connector",id:"\u7f16\u8bd1-tpcds-connector",level:2},{value:"\u90e8\u7f72 TPCDS Connector",id:"\u90e8\u7f72-tpcds-connector",level:2},{value:"\u521b\u5efa TPCDS Catalog",id:"\u521b\u5efa-tpcds-catalog",level:2},{value:"\u4f7f\u7528 TPCDS Catalog",id:"\u4f7f\u7528-tpcds-catalog",level:2},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:3},{value:"\u5feb\u901f\u6784\u5efa TPCDS \u6d4b\u8bd5\u6570\u636e\u96c6",id:"\u5feb\u901f\u6784\u5efa-tpcds-\u6d4b\u8bd5\u6570\u636e\u96c6",level:4}],l={toc:p},E="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(E,(0,r.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"\u4f7f\u7528\u987b\u77e5"},"\u4f7f\u7528\u987b\u77e5"),(0,a.yg)("p",null,"TPCDS Catalog \u901a\u8fc7 ",(0,a.yg)("a",{parentName:"p",href:"https://doris.apache.org/community/how-to-contribute/trino-connector-developer-guide"},"Trino Connector")," \u517c\u5bb9\u6846\u67b6\uff0c\u4f7f\u7528 ",(0,a.yg)("a",{parentName:"p",href:"https://trino.io/docs/current/connector/tpcds.html"},"TPCDS Connector")," \u6765\u5feb\u901f\u6784\u5efa TPCDS \u6d4b\u8bd5\u96c6\u3002"),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"\u8be5\u529f\u80fd\u81ea Doris 3.0.0 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002")),(0,a.yg)("h2",{id:"\u7f16\u8bd1-tpcds-connector"},"\u7f16\u8bd1 TPCDS Connector"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u9700\u8981 JDK 17 \u7248\u672c\u3002")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/trinodb/trino.git\ngit checkout 435\ncd trino/plugin/trino-tpcds\nmvn clean install -DskipTest\n")),(0,a.yg)("p",null,"\u5b8c\u6210\u7f16\u8bd1\u540e\uff0c\u4f1a\u5728 ",(0,a.yg)("inlineCode",{parentName:"p"},"trino/plugin/trino-tpcds/target/")," \u4e0b\u5f97\u5230 ",(0,a.yg)("inlineCode",{parentName:"p"},"trino-tpcds-435/")," \u76ee\u5f55\u3002"),(0,a.yg)("p",null,"\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4e0b\u8f7d\u9884\u7f16\u8bd1\u7684 ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/morningman/trino-connectors/releases/download/trino-connectors/trino-tpcds-435.tar.gz"},"trino-tpcds-435.tar.gz")," \u5e76\u89e3\u538b\u3002"),(0,a.yg)("h2",{id:"\u90e8\u7f72-tpcds-connector"},"\u90e8\u7f72 TPCDS Connector"),(0,a.yg)("p",null,"\u5c06 ",(0,a.yg)("inlineCode",{parentName:"p"},"trino-tpcds-435/")," \u76ee\u5f55\u653e\u5230\u6240\u6709 FE \u548c BE \u90e8\u7f72\u8def\u5f84\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"connectors/")," \u76ee\u5f55\u4e0b\u3002\uff08\u5982\u679c\u6ca1\u6709\uff0c\u53ef\u4ee5\u624b\u52a8\u521b\u5efa\uff09\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"\u251c\u2500\u2500 bin\n\u251c\u2500\u2500 conf\n\u251c\u2500\u2500 connectors\n\u2502\xa0\xa0 \u251c\u2500\u2500 trino-tpcds-435\n...\n")),(0,a.yg)("p",null,"\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u5efa\u8bae\u91cd\u542f FE\u3001BE \u8282\u70b9\u4ee5\u786e\u4fdd Connector \u53ef\u4ee5\u88ab\u6b63\u786e\u52a0\u8f7d\u3002"),(0,a.yg)("h2",{id:"\u521b\u5efa-tpcds-catalog"},"\u521b\u5efa TPCDS Catalog"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG `tpcds` PROPERTIES (\n    "type" = "trino-connector",\n    "trino.connector.name" = "tpcds",\n    "trino.tpcds.split-count" = "32"\n);\n')),(0,a.yg)("p",null,"\u5176\u4e2d ",(0,a.yg)("inlineCode",{parentName:"p"},"tpcds.split-count")," \u4e3a\u5e76\u53d1\u6570\uff0c\u5efa\u8bae\u8bbe\u7f6e\u4e3a BE \u5355\u673a\u6838\u6570\u7684 2 \u500d\uff0c\u53ef\u4ee5\u83b7\u5f97\u6700\u4f18\u7684\u5e76\u53d1\u5ea6\u3002\u63d0\u5347\u6570\u636e\u751f\u6210\u6548\u7387\u3002"),(0,a.yg)("h2",{id:"\u4f7f\u7528-tpcds-catalog"},"\u4f7f\u7528 TPCDS Catalog"),(0,a.yg)("p",null,"TPCDS Catalog \u4e2d\u9884\u5236\u4e86\u4e0d\u540c Scale Factor \u7684 TPCDS \u6570\u636e\u96c6\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"SHOW DATABASES")," \u548c ",(0,a.yg)("inlineCode",{parentName:"p"},"SHOW TABLES")," \u547d\u4ee4\u67e5\u770b\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> SWITCH tpcds;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> SHOW DATABASES;\n+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| mysql              |\n| sf1                |\n| sf100              |\n| sf1000             |\n| sf10000            |\n| sf100000           |\n| sf300              |\n| sf3000             |\n| sf30000            |\n| tiny               |\n+--------------------+\n11 rows in set (0.00 sec)\n\nmysql> USE sf1;\nmysql> SHOW TABLES;\n+------------------------+\n| Tables_in_sf1          |\n+------------------------+\n| call_center            |\n| catalog_page           |\n| catalog_returns        |\n| catalog_sales          |\n| customer               |\n| customer_address       |\n| customer_demographics  |\n| date_dim               |\n| dbgen_version          |\n| household_demographics |\n| income_band            |\n| inventory              |\n| item                   |\n| promotion              |\n| reason                 |\n| ship_mode              |\n| store                  |\n| store_returns          |\n| store_sales            |\n| time_dim               |\n| warehouse              |\n| web_page               |\n| web_returns            |\n| web_sales              |\n| web_site               |\n+------------------------+\n25 rows in set (0.00 sec)\n")),(0,a.yg)("p",null,"\u901a\u8fc7 SELECT \u8bed\u53e5\u53ef\u4ee5\u76f4\u63a5\u67e5\u8be2\u8fd9\u4e9b\u8868\u3002"),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"\u8fd9\u4e9b\u9884\u5236\u6570\u636e\u96c6\u7684\u6570\u636e\uff0c\u5e76\u6ca1\u6709\u5b9e\u9645\u5b58\u50a8\uff0c\u800c\u662f\u5728\u67e5\u8be2\u65f6\u5b9e\u65f6\u751f\u6210\u7684\u3002\u6240\u4ee5\u8fd9\u4e9b\u9884\u5236\u6570\u636e\u96c6\u4e0d\u9002\u5408\u7528\u6765\u76f4\u63a5\u8fdb\u884c Benchmark \u6d4b\u8bd5\u3002\u9002\u7528\u4e8e\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"INSERT INTO SELECT")," \u5c06\u6570\u636e\u96c6\u5199\u5165\u5230\u5176\u4ed6\u76ee\u7684\u8868\uff08\u5982 Doris \u5185\u8868\u3001Hive\u3001Iceberg \u7b49\u6240\u6709 Doris \u652f\u6301\u5199\u5165\u7684\u6570\u636e\u6e90\uff09\u540e\uff0c\u5bf9\u76ee\u7684\u8868\u8fdb\u884c\u6027\u80fd\u6d4b\u8bd5\u3002")),(0,a.yg)("h3",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,a.yg)("h4",{id:"\u5feb\u901f\u6784\u5efa-tpcds-\u6d4b\u8bd5\u6570\u636e\u96c6"},"\u5feb\u901f\u6784\u5efa TPCDS \u6d4b\u8bd5\u6570\u636e\u96c6"),(0,a.yg)("p",null,"\u53ef\u4ee5\u901a\u8fc7 CTAS \u8bed\u53e5\u5feb\u901f\u6784\u5efa\u4e00\u4e2a TPCDS \u6d4b\u8bd5\u6570\u636e\u96c6\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'CREATE TABLE hive.tpcds100.call_center            PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.call_center           ;\nCREATE TABLE hive.tpcds100.catalog_page           PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.catalog_page          ;\nCREATE TABLE hive.tpcds100.catalog_returns        PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.catalog_returns       ;\nCREATE TABLE hive.tpcds100.catalog_sales          PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.catalog_sales         ;\nCREATE TABLE hive.tpcds100.customer               PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.customer              ;\nCREATE TABLE hive.tpcds100.customer_address       PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.customer_address      ;\nCREATE TABLE hive.tpcds100.customer_demographics  PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.customer_demographics ;\nCREATE TABLE hive.tpcds100.date_dim               PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.date_dim              ;\nCREATE TABLE hive.tpcds100.dbgen_version          PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.dbgen_version         ;\nCREATE TABLE hive.tpcds100.household_demographics PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.household_demographics;\nCREATE TABLE hive.tpcds100.income_band            PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.income_band           ;\nCREATE TABLE hive.tpcds100.inventory              PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.inventory             ;\nCREATE TABLE hive.tpcds100.item                   PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.item                  ;\nCREATE TABLE hive.tpcds100.promotion              PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.promotion             ;\nCREATE TABLE hive.tpcds100.reason                 PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.reason                ;\nCREATE TABLE hive.tpcds100.ship_mode              PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.ship_mode             ;\nCREATE TABLE hive.tpcds100.store                  PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.store                 ;\nCREATE TABLE hive.tpcds100.store_returns          PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.store_returns         ;\nCREATE TABLE hive.tpcds100.store_sales            PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.store_sales           ;\nCREATE TABLE hive.tpcds100.time_dim               PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.time_dim              ;\nCREATE TABLE hive.tpcds100.warehouse              PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.warehouse             ;\nCREATE TABLE hive.tpcds100.web_page               PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.web_page              ;\nCREATE TABLE hive.tpcds100.web_returns            PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.web_returns           ;\nCREATE TABLE hive.tpcds100.web_sales              PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.web_sales             ;\nCREATE TABLE hive.tpcds100.web_site               PROPERTIES("file_format" = "parquet") AS SELECT * FROM tpcds.sf100.web_site              ;\n')),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"\u5728\u5305\u542b 3 \u4e2a 16C BE \u8282\u70b9\u7684 Doris \u96c6\u7fa4\u4e0a\uff0c\u521b\u5efa\u4e00\u4e2a TPCDS 1000 \u7684 Hive \u6570\u636e\u96c6\uff0c\u5927\u7ea6\u9700\u8981 3 \u5230 4 \u4e2a\u5c0f\u65f6\u3002")))}d.isMDXComponent=!0}}]);