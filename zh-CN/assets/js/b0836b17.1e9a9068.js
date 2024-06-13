"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[74550],{15680:(e,a,r)=>{r.d(a,{xA:()=>u,yg:()=>y});var n=r(296540);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function l(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?l(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function c(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var o=n.createContext({}),s=function(e){var a=n.useContext(o),r=a;return e&&(r="function"==typeof e?e(a):p(p({},a),e)),r},u=function(e){var a=s(e.components);return n.createElement(o.Provider,{value:a},e.children)},i="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var r=e.components,t=e.mdxType,l=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),i=s(r),g=t,y=i["".concat(o,".").concat(g)]||i[g]||m[g]||l;return r?n.createElement(y,p(p({ref:a},u),{},{components:r})):n.createElement(y,p({ref:a},u))}));function y(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=r.length,p=new Array(l);p[0]=g;var c={};for(var o in a)hasOwnProperty.call(a,o)&&(c[o]=a[o]);c.originalType=e,c[i]="string"==typeof e?e:t,p[1]=c;for(var s=2;s<l;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},768978:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var n=r(58168),t=(r(296540),r(15680));const l={title:"SET-PROPERTY",language:"zh-CN"},p=void 0,c={unversionedId:"sql-manual/sql-reference/Account-Management-Statements/SET-PROPERTY",id:"version-1.2/sql-manual/sql-reference/Account-Management-Statements/SET-PROPERTY",title:"SET-PROPERTY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Account-Management-Statements/SET-PROPERTY.md",sourceDirName:"sql-manual/sql-reference/Account-Management-Statements",slug:"/sql-manual/sql-reference/Account-Management-Statements/SET-PROPERTY",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Account-Management-Statements/SET-PROPERTY",draft:!1,tags:[],version:"1.2",frontMatter:{title:"SET-PROPERTY",language:"zh-CN"},sidebar:"docs",previous:{title:"width_bucket",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/width-bucket"},next:{title:"REVOKE",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Account-Management-Statements/REVOKE"}},o={},s=[{value:"SET PROPERTY",id:"set-property",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:s},i="wrapper";function m(e){let{components:a,...r}=e;return(0,t.yg)(i,(0,n.A)({},u,r,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"set-property"},"SET PROPERTY"),(0,t.yg)("h3",{id:"name"},"Name"),(0,t.yg)("p",null,"SET PROPERTY"),(0,t.yg)("h3",{id:"description"},"Description"),(0,t.yg)("p",null," \u8bbe\u7f6e\u7528\u6237\u7684\u5c5e\u6027\uff0c\u5305\u62ec\u5206\u914d\u7ed9\u7528\u6237\u7684\u8d44\u6e90\u3001\u5bfc\u5165cluster\u7b49"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY [FOR 'user'] 'key' = 'value' [, 'key' = 'value']\n")),(0,t.yg)("p",null,"\u8fd9\u91cc\u8bbe\u7f6e\u7684\u7528\u6237\u5c5e\u6027\uff0c\u662f\u9488\u5bf9 user \u7684\uff0c\u800c\u4e0d\u662f user_identity\u3002\u5373\u5047\u8bbe\u901a\u8fc7 CREATE USER \u8bed\u53e5\u521b\u5efa\u4e86\u4e24\u4e2a\u7528\u6237 'jack'@'%' \u548c 'jack'@'192.%'\uff0c\u5219\u4f7f\u7528 SET PROPERTY \u8bed\u53e5\uff0c\u53ea\u80fd\u9488\u5bf9 jack \u8fd9\u4e2a\u7528\u6237\uff0c\u800c\u4e0d\u662f 'jack'@'%' \u6216 'jack'@'192.%'"),(0,t.yg)("p",null,"key:"),(0,t.yg)("p",null,"\u8d85\u7ea7\u7528\u6237\u6743\u9650:"),(0,t.yg)("p",null,"\u200b        max_user_connections: \u6700\u5927\u8fde\u63a5\u6570\u3002"),(0,t.yg)("p",null,"\u200b        max_query_instances: \u7528\u6237\u540c\u4e00\u65f6\u95f4\u70b9\u6267\u884c\u67e5\u8be2\u53ef\u4ee5\u4f7f\u7528\u7684instance\u4e2a\u6570\u3002"),(0,t.yg)("p",null,"\u200b        sql_block_rules: \u8bbe\u7f6e sql block rules\u3002\u8bbe\u7f6e\u540e\uff0c\u8be5\u7528\u6237\u53d1\u9001\u7684\u67e5\u8be2\u5982\u679c\u5339\u914d\u89c4\u5219\uff0c\u5219\u4f1a\u88ab\u62d2\u7edd\u3002"),(0,t.yg)("p",null,"\u200b        cpu_resource_limit: \u9650\u5236\u67e5\u8be2\u7684cpu\u8d44\u6e90\u3002\u8be6\u89c1\u4f1a\u8bdd\u53d8\u91cf ",(0,t.yg)("inlineCode",{parentName:"p"},"cpu_resource_limit")," \u7684\u4ecb\u7ecd\u3002-1 \u8868\u793a\u672a\u8bbe\u7f6e\u3002"),(0,t.yg)("p",null,"\u200b        exec_mem_limit: \u9650\u5236\u67e5\u8be2\u7684\u5185\u5b58\u4f7f\u7528\u3002\u8be6\u89c1\u4f1a\u8bdd\u53d8\u91cf ",(0,t.yg)("inlineCode",{parentName:"p"},"exec_mem_limit")," \u7684\u4ecb\u7ecd\u3002-1 \u8868\u793a\u672a\u8bbe\u7f6e\u3002"),(0,t.yg)("p",null,"\u200b        resource.cpu_share: cpu\u8d44\u6e90\u5206\u914d\u3002\uff08\u5df2\u5e9f\u5f03\uff09"),(0,t.yg)("p",null,"\u200b        load_cluster.{cluster_name}.priority: \u4e3a\u6307\u5b9a\u7684cluster\u5206\u914d\u4f18\u5148\u7ea7\uff0c\u53ef\u4ee5\u4e3a HIGH \u6216 NORMAL"),(0,t.yg)("p",null,"\u200b        resource_tags\uff1a\u6307\u5b9a\u7528\u6237\u7684\u8d44\u6e90\u6807\u7b7e\u6743\u9650\u3002"),(0,t.yg)("p",null,"\u200b        query_timeout\uff1a\u6307\u5b9a\u7528\u6237\u7684\u67e5\u8be2\u8d85\u65f6\u6743\u9650\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"\u6ce8\uff1a`cpu_resource_limit`, `exec_mem_limit` \u4e24\u4e2a\u5c5e\u6027\u5982\u679c\u672a\u8bbe\u7f6e\uff0c\u5219\u9ed8\u8ba4\u4f7f\u7528\u4f1a\u8bdd\u53d8\u91cf\u4e2d\u503c\u3002\n")),(0,t.yg)("p",null,"\u666e\u901a\u7528\u6237\u6743\u9650\uff1a"),(0,t.yg)("p",null,"\u200b        quota.normal: normal\u7ea7\u522b\u7684\u8d44\u6e90\u5206\u914d\u3002"),(0,t.yg)("p",null,"\u200b        quota.high: high\u7ea7\u522b\u7684\u8d44\u6e90\u5206\u914d\u3002"),(0,t.yg)("p",null,"\u200b        quota.low: low\u7ea7\u522b\u7684\u8d44\u6e90\u5206\u914d\u3002"),(0,t.yg)("p",null,"\u200b        load_cluster.{cluster_name}.hadoop_palo_path: palo\u4f7f\u7528\u7684hadoop\u76ee\u5f55\uff0c\u9700\u8981\u5b58\u653eetl\u7a0b\u5e8f\u53caetl\u751f\u6210\u7684\u4e2d\u95f4\u6570\u636e\u4f9bDoris\u5bfc\u5165\u3002\u5bfc\u5165\u5b8c\u6210\u540e\u4f1a\u81ea\u52a8\u6e05\u7406\u4e2d\u95f4"),(0,t.yg)("p",null,"\u6570\u636e\uff0cetl\u7a0b\u5e8f\u81ea\u52a8\u4fdd\u7559\u4e0b\u6b21\u4f7f\u7528\u3002"),(0,t.yg)("p",null,"\u200b        load_cluster.{cluster_name}.hadoop_configs: hadoop\u7684\u914d\u7f6e\uff0c\u5176\u4e2dfs.default.name\u3001mapred.job.tracker\u3001hadoop.job.ugi\u5fc5\u987b\u586b\u5199\u3002"),(0,t.yg)("p",null,"\u200b        load_cluster.{cluster_name}.hadoop_http_port: hadoop hdfs name node http\u7aef\u53e3\u3002\u5176\u4e2d hdfs \u9ed8\u8ba4\u4e3a8070\uff0cafs \u9ed8\u8ba4 8010\u3002"),(0,t.yg)("p",null,"\u200b        default_load_cluster: \u9ed8\u8ba4\u7684\u5bfc\u5165cluster\u3002"),(0,t.yg)("h3",{id:"example"},"Example"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u4fee\u6539\u7528\u6237 jack \u6700\u5927\u8fde\u63a5\u6570\u4e3a1000"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'max_user_connections' = '1000';\n"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u4fee\u6539\u7528\u6237 jack \u7684cpu_share\u4e3a1000"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'resource.cpu_share' = '1000';\n"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u4fee\u6539 jack \u7528\u6237\u7684normal\u7ec4\u7684\u6743\u91cd"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'quota.normal' = '400';\n"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u4e3a\u7528\u6237 jack \u6dfb\u52a0\u5bfc\u5165cluster"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack'\n    'load_cluster.{cluster_name}.hadoop_palo_path' = '/user/doris/doris_path',\n    'load_cluster.{cluster_name}.hadoop_configs' = 'fs.default.name=hdfs://dpp.cluster.com:port;mapred.job.tracker=dpp.cluster.com:port;hadoop.job.ugi=user,password;mapred.job.queue.name=job_queue_name_in_hadoop;mapred.job.priority=HIGH;';\n"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u5220\u9664\u7528\u6237 jack \u4e0b\u7684\u5bfc\u5165cluster\u3002"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'load_cluster.{cluster_name}' = '';\n"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u4fee\u6539\u7528\u6237 jack \u9ed8\u8ba4\u7684\u5bfc\u5165cluster"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'default_load_cluster' = '{cluster_name}';\n"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u4fee\u6539\u7528\u6237 jack \u7684\u96c6\u7fa4\u4f18\u5148\u7ea7\u4e3a HIGH"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'load_cluster.{cluster_name}.priority' = 'HIGH';\n"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u4fee\u6539\u7528\u6237jack\u7684\u67e5\u8be2\u53ef\u7528instance\u4e2a\u6570\u4e3a3000"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'max_query_instances' = '3000';\n"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u4fee\u6539\u7528\u6237jack\u7684sql block rule"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'sql_block_rules' = 'rule1, rule2';\n"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u4fee\u6539\u7528\u6237jack\u7684 cpu \u4f7f\u7528\u9650\u5236"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'cpu_resource_limit' = '2';\n"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u4fee\u6539\u7528\u6237\u7684\u8d44\u6e90\u6807\u7b7e\u6743\u9650"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'resource_tags.location' = 'group_a, group_b';\n"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u4fee\u6539\u7528\u6237\u7684\u67e5\u8be2\u5185\u5b58\u4f7f\u7528\u9650\u5236\uff0c\u5355\u4f4d\u5b57\u8282"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'exec_mem_limit' = '2147483648';\n"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u4fee\u6539\u7528\u6237\u7684\u67e5\u8be2\u8d85\u65f6\u9650\u5236\uff0c\u5355\u4f4d\u79d2"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SET PROPERTY FOR 'jack' 'query_timeout' = '500';\n")))),(0,t.yg)("h3",{id:"keywords"},"Keywords"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"SET, PROPERTY\n")),(0,t.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);