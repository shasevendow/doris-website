"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[66124],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=s(n),m=r,y=g["".concat(p,".").concat(m)]||g[m]||c[m]||o;return n?a.createElement(y,l(l({ref:t},u),{},{components:n})):a.createElement(y,l({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[g]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},537217:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(58168),r=(n(296540),n(15680));const o={title:"Doris on AWS",language:"zh-CN"},l=void 0,i={unversionedId:"install/cluster-deployment/doris-on-aws",id:"install/cluster-deployment/doris-on-aws",title:"Doris on AWS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/install/cluster-deployment/doris-on-aws.md",sourceDirName:"install/cluster-deployment",slug:"/install/cluster-deployment/doris-on-aws",permalink:"/zh-CN/docs/dev/install/cluster-deployment/doris-on-aws",draft:!1,tags:[],version:"current",frontMatter:{title:"Doris on AWS",language:"zh-CN"},sidebar:"docs",previous:{title:"\u670d\u52a1 Crash \u60c5\u51b5\u4e0b\u5982\u4f55\u8fdb\u5165\u5bb9\u5668",permalink:"/zh-CN/docs/dev/install/cluster-deployment/k8s-deploy/debug-crash"},next:{title:"\u6570\u636e\u5e93\u8fde\u63a5",permalink:"/zh-CN/docs/dev/db-connect/database-connect"}},p={},s=[{value:"\u4ec0\u4e48\u662f AWS CloudFormation\uff1f",id:"\u4ec0\u4e48\u662f-aws-cloudformation",level:2},{value:"\u4ec0\u4e48\u662f Doris on AWS CloudFormation\uff1f",id:"\u4ec0\u4e48\u662f-doris-on-aws-cloudformation",level:2},{value:"\u4f7f\u7528\u524d\u6ce8\u610f",id:"\u4f7f\u7528\u524d\u6ce8\u610f",level:2},{value:"\u5f00\u59cb\u90e8\u7f72",id:"\u5f00\u59cb\u90e8\u7f72",level:2},{value:"\u90e8\u7f72\u540e\uff0c\u5982\u4f55\u8fde\u63a5\u6570\u636e\u5e93",id:"\u90e8\u7f72\u540e\u5982\u4f55\u8fde\u63a5\u6570\u636e\u5e93",level:2}],u={toc:s},g="wrapper";function c(e){let{components:t,...o}=e;return(0,r.yg)(g,(0,a.A)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u5927\u5bb6\u5728 AWS \u4e0a\u5feb\u901f\u4f53\u9a8c Doris\uff0c\u63d0\u4f9b\u4e86 CloudFormation \u6a21\u7248\uff08CFT\uff09\uff0c\u5141\u8bb8\u5feb\u901f\u542f\u52a8\u548c\u8fd0\u884c\u96c6\u7fa4\u3002\u4f7f\u7528\u6a21\u677f\uff0c\u53ea\u9700\u6700\u5c11\u7684\u914d\u7f6e\uff0c\u5c31\u53ef\u4ee5\u81ea\u52a8\u914d\u7f6e AWS \u8d44\u6e90\uff0c\u5e76\u542f\u52a8 Doris \u96c6\u7fa4\u3002"),(0,r.yg)("p",null,"\u5f53\u7136\uff0c\u60a8\u4e5f\u53ef\u4ee5\u81ea\u884c\u8d2d\u4e70 AWS \u8d44\u6e90\uff0c\u91c7\u7528\u6807\u51c6\u7684\u624b\u52a8\u65b9\u5f0f\u8fdb\u884c\u96c6\u7fa4\u90e8\u7f72\u3002"),(0,r.yg)("h2",{id:"\u4ec0\u4e48\u662f-aws-cloudformation"},"\u4ec0\u4e48\u662f AWS CloudFormation\uff1f"),(0,r.yg)("p",null,"CloudFormation \u5141\u8bb8\u7528\u6237\u53ea\u7528\u4e00\u4e2a\u6b65\u9aa4\u5c31\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u201c\u8d44\u6e90\u5806\u6808\u201d\u3002\u8d44\u6e90\u662f\u6307\u7528\u6237\u6240\u521b\u5efa\u7684\u4e1c\u897f\uff08\u5982 EC2 \u5b9e\u4f8b\u3001VPC\u3001\u5b50\u7f51\u7b49\uff09\uff0c\u4e00\u7ec4\u8fd9\u6837\u7684\u8d44\u6e90\u79f0\u4e3a\u5806\u6808\u3002\u7528\u6237\u53ef\u4ee5\u7f16\u5199\u4e00\u4e2a\u6a21\u677f\uff0c\u4f7f\u7528\u5b83\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u6309\u7167\u7528\u6237\u7684\u610f\u613f\u901a\u8fc7\u4e00\u4e2a\u6b65\u9aa4\u521b\u5efa\u4e00\u4e2a\u8d44\u6e90\u5806\u6808\u3002\u8fd9\u6bd4\u624b\u52a8\u521b\u5efa\u5e76\u4e14\u914d\u7f6e\u66f4\u5feb\uff0c\u800c\u4e14\u53ef\u91cd\u590d\uff0c\u4e00\u81f4\u6027\u66f4\u597d\u3002\u5e76\u4e14\u53ef\u4ee5\u5c06\u6a21\u677f\u653e\u5165\u6e90\u4ee3\u7801\u505a\u7248\u672c\u63a7\u5236\uff0c\u5728\u4efb\u4f55\u65f6\u5019\u6839\u636e\u9700\u8981\u628a\u5b83\u7528\u4e8e\u4efb\u4f55\u76ee\u7684\u3002"),(0,r.yg)("h2",{id:"\u4ec0\u4e48\u662f-doris-on-aws-cloudformation"},"\u4ec0\u4e48\u662f Doris on AWS CloudFormation\uff1f"),(0,r.yg)("p",null,"\u5f53\u524d Doris \u63d0\u4f9b\u4e86 Doris CloudFormation Template\uff0c\u65b9\u4fbf\u7528\u6237\u76f4\u63a5\u4f7f\u7528\u8fd9\u4e2a\u6a21\u677f\u53ef\u4ee5\u5728 AWS \u4e0a\u5feb\u901f\u521b\u5efa Doris \u76f8\u5173\u7248\u672c\u7684\u96c6\u7fa4\uff0c\u4ee5\u4fbf\u4f53\u9a8c\u6700\u65b0\u7684 Doris \u529f\u80fd\u3002"),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"\u6ce8\u610f\uff1a"),(0,r.yg)("p",{parentName:"admonition"},"\u57fa\u4e8e CloudFormation \u6784\u5efa Doris \u96c6\u7fa4\u7684\u6a21\u677f\uff0c\u5f53\u524d\u4ec5\u652f\u6301 us-east-1\uff0cus-west-1\uff0cus-west-2 \u533a\u57df\u3002"),(0,r.yg)("p",{parentName:"admonition"},"Doris on AWS CloudFormation \u4e3b\u8981\u7528\u4e8e\u6d4b\u8bd5\u6216\u8005\u4f53\u9a8c\uff0c\u8bf7\u4e0d\u8981\u7528\u4e8e\u751f\u4ea7\u73af\u5883\u3002")),(0,r.yg)("h2",{id:"\u4f7f\u7528\u524d\u6ce8\u610f"},"\u4f7f\u7528\u524d\u6ce8\u610f"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u786e\u5b9a\u8981\u90e8\u7f72\u7684 VPC \u548c Subnet")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u786e\u5b9a\u7528\u6765\u767b\u5f55\u8282\u70b9\u7684 key pair")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u90e8\u7f72\u4e2d\u4f1a\u5efa\u7acb S3 \u7684 VPC Endpoint Interface"))),(0,r.yg)("h2",{id:"\u5f00\u59cb\u90e8\u7f72"},"\u5f00\u59cb\u90e8\u7f72"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"1. AWS \u63a7\u5236\u53f0\u4e0a\uff0c\u8fdb\u5165 CloudFormation\uff0c\u70b9\u51fb Create stack")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"\u5f00\u59cb\u90e8\u7f72-AWS \u63a7\u5236\u53f0 \u8fdb\u5165 CloudFormation",src:n(301461).A,width:"1280",height:"541"})),(0,r.yg)("p",null,"\u9009\u7528 Amazon S3 URL Template source\uff0c\u586b\u5199 Amazon S3 URL \u4e3a\u4e0b\u9762\u6a21\u677f\u94fe\u63a5\uff1a"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://sdb-cloud-third-party.s3.amazonaws.com/doris-cf/cloudformation_doris.template.yaml"},"https://sdb-cloud-third-party.s3.amazonaws.com/doris-cf/cloudformation_doris.template.yaml")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"2. \u914d\u7f6e\u6a21\u677f\u7684\u5177\u4f53\u53c2\u6570")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"\u914d\u7f6e\u6a21\u677f\u7684\u5177\u4f53\u53c2\u6570",src:n(36667).A,width:"1280",height:"537"})),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"\u914d\u7f6e\u6a21\u677f\u7684\u5177\u4f53\u53c2\u6570",src:n(223374).A,width:"1280",height:"566"})),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"\u914d\u7f6e\u6a21\u677f\u7684\u5177\u4f53\u53c2\u6570",src:n(826709).A,width:"1280",height:"291"})),(0,r.yg)("p",null,"\u4e3b\u8981\u53c2\u6570\u8bf4\u660e\u5982\u4e0b\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"VPC ID\uff1a\u8981\u90e8\u7f72\u5230\u7684 VPC")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Subnet ID\uff1a\u8981\u90e8\u7f72\u7684\u5b50\u7f51")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Key pair name\uff1a\u7528\u6765\u8fde\u63a5\u90e8\u7f72\u540e\u7684 BE \u548c FE \u8282\u70b9\u7684 public/private key pairs")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Version of Doris\uff1a\u9009\u62e9\u90e8\u7f72\u7684 Doris \u7248\u672c\uff0c\u6bd4\u5982 2.1.0\u30012.0.6 \u7b49")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Number of Doris FE\uff1aFE \u7684\u4e2a\u6570\uff0c\u6a21\u677f\u9ed8\u8ba4\u53ea\u80fd\u9009\u62e9 1 \u4e2a FE")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Fe instance type: FE \u7684\u8282\u70b9\u7c7b\u578b\uff0c\u53ef\u4ee5\u91c7\u7528\u9ed8\u8ba4\u503c")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Number of Doris Be\uff1aBE \u8282\u70b9\u7684\u4e2a\u6570\uff0c\u53ef\u4ee5\u9009\u62e9 1 \u4e2a\u6216\u8005 3 \u4e2a")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Be instance type\uff1aBE \u7684\u8282\u70b9\u7c7b\u578b\uff0c\u53ef\u4ee5\u91c7\u7528\u9ed8\u8ba4\u503c")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Meta data dir\uff1aFE \u8282\u70b9\u7684\u5143\u6570\u636e\u76ee\u5f55\uff0c\u53ef\u4ee5\u91c7\u7528\u9ed8\u8ba4\u503c")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Sys log level\uff1a\u8bbe\u7f6e\u7cfb\u7edf\u65e5\u5fd7\u7684\u7b49\u7ea7\uff0c\u53ef\u4ee5\u4f7f\u7528\u9ed8\u8ba4\u7684 info")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Volume type of Be nodes\uff1aBE \u8282\u70b9\u6302\u8f7d EBS \u7684 volume type\uff0c\u6bcf\u53f0\u8282\u70b9\u9ed8\u8ba4\u6302\u8f7d\u4e00\u5757\u78c1\u76d8\u3002\u53ef\u4ee5\u4f7f\u7528\u9ed8\u8ba4\u503c")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Volume size of Be nodes: BE \u8282\u70b9\u6302\u8f7d EBS \u7684\u5927\u5c0f\uff0c\u5355\u4f4d GB\uff0c\u53ef\u4ee5\u4f7f\u7528\u9ed8\u8ba4\u503c\u3002 "))),(0,r.yg)("h2",{id:"\u90e8\u7f72\u540e\u5982\u4f55\u8fde\u63a5\u6570\u636e\u5e93"},"\u90e8\u7f72\u540e\uff0c\u5982\u4f55\u8fde\u63a5\u6570\u636e\u5e93"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"1. \u90e8\u7f72\u6210\u529f\u540e\u7684\u5c55\u793a\u5982\u4e0b")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"\u5982\u4f55\u8fde\u63a5\u6570\u636e\u5e93",src:n(742092).A,width:"1280",height:"488"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"2. \u4f9d\u6b21\u5982\u4e0b\u9762\uff0c\u627e\u5230 FE \u7684\u8fde\u63a5\u5730\u5740\u3002\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u4ece FE Outputs \u91cc\uff0c\u53ef\u4ee5\u67e5\u770b\u5230\u5730\u5740\u4e3a 172.16.0.97\u3002")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"\u627e\u5230 FE \u7684\u8fde\u63a5\u5730\u5740",src:n(140678).A,width:"1280",height:"395"})),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"\u627e\u5230 FE \u7684\u8fde\u63a5\u5730\u5740",src:n(662163).A,width:"1280",height:"587"})),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"\u627e\u5230 FE \u7684\u8fde\u63a5\u5730\u5740",src:n(785484).A,width:"1280",height:"343"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"3. \u8fde\u63a5\u90e8\u7f72\u7684 Doris Cluster\uff0cDoris \u7684 CloudFormation \u90e8\u7f72\u540e\u7684\u4e00\u4e9b\u9ed8\u8ba4\u503c\uff1a")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"FE \u7684 IP\uff1a\u6309\u7167\u4e0a\u9762\u6b65\u9aa4 2 \u83b7\u53d6 FE \u7684 IP \u5730\u5740")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"FE \u7684 MySQL \u534f\u8bae\u7aef\u53e3\uff1a9030")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"FE \u7684 HTTP \u534f\u8bae\u7aef\u53e3\uff1a8030")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u9ed8\u8ba4\u7684 root \u5bc6\u7801\uff1a\u7a7a")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u9ed8\u8ba4\u7684 admin \u5bc6\u7801\uff1a\u7a7a"))))}c.isMDXComponent=!0},36667:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/configure-specific-parameters-1-02a68404da0de49413e927ce78c627f6.jpeg"},223374:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/configure-specific-parameters-2-ceb37fce06a8e3f6448969749668991a.jpeg"},826709:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/configure-specific-parameters-3-a7c6b3109399344bcd5075bb1e48a742.jpeg"},140678:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/find-connection-address-for-fe-1-c20545a89a9d7bca6322546206708018.jpeg"},662163:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/find-connection-address-for-fe-2-8f03647a1597f7668059b5fde4241b10.jpeg"},785484:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/find-connection-address-for-fe-3-413321f49156410699385c752184e825.jpeg"},742092:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/how-to-connect-to-the-database-5cf97ada6d5686eb8648a3fa4e22837e.jpeg"},301461:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/start-deployment-212dd402013fb3b8b495c22f639968f7.jpeg"}}]);