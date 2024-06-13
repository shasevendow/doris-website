"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[30948],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>d});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(a),g=r,d=p["".concat(o,".").concat(g)]||p[g]||u[g]||l;return a?n.createElement(d,s(s({ref:t},m),{},{components:a})):n.createElement(d,s({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=g;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<l;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},299927:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(58168),r=(a(296540),a(15680));const l={title:"CREATE-SQL-BLOCK-RULE",language:"en"},s=void 0,i={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-SQL-BLOCK-RULE",id:"sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-SQL-BLOCK-RULE",title:"CREATE-SQL-BLOCK-RULE",description:"\x3c!--",source:"@site/docs/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-SQL-BLOCK-RULE.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Create",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-SQL-BLOCK-RULE",permalink:"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-SQL-BLOCK-RULE",draft:!1,tags:[],version:"current",frontMatter:{title:"CREATE-SQL-BLOCK-RULE",language:"en"},sidebar:"docs",previous:{title:"CREATE-WORKLOAD-GORUP",permalink:"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-WORKLOAD-GROUP"},next:{title:"CREATE-ASYNC-MATERIALIZED-VIEW",permalink:"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-ASYNC-MATERIALIZED-VIEW"}},o={},c=[{value:"CREATE-SQL-BLOCK-RULE",id:"create-sql-block-rule",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"APPENDIX",id:"appendix",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"create-sql-block-rule"},"CREATE-SQL-BLOCK-RULE"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"CREATE SQL BLOCK RULE"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This statement creates a SQL blocking rule. it can restrict any kind of sql statements(no matter DDL or DML statement)."),(0,r.yg)("p",null,"Supports configuring SQL blacklists by user:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Refuse to specify SQL by regular matching"),(0,r.yg)("li",{parentName:"ul"},"Check if a sql reaches one of these limits by setting partition_num, tablet_num, cardinality",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"partition_num, tablet_num, cardinality can be set together, once a query reaches one of these limits, the query will be intercepted")))),(0,r.yg)("p",null,"grammar:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE SQL_BLOCK_RULE rule_name\n[PROPERTIES ("key"="value", ...)];\n')),(0,r.yg)("p",null,"Parameter Description:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"sql: matching rule (based on regular matching, special characters need to be translated,for example",(0,r.yg)("inlineCode",{parentName:"li"},"select *"),"use",(0,r.yg)("inlineCode",{parentName:"li"},"select \\\\*"),'), optional, the default value is "NULL"'),(0,r.yg)("li",{parentName:"ul"},"sqlHash: sql hash value, used for exact matching, we will print this value in ",(0,r.yg)("inlineCode",{parentName:"li"},"fe.audit.log"),', optional, this parameter and sql can only be selected one, the default value is "NULL"'),(0,r.yg)("li",{parentName:"ul"},"partition_num: the maximum number of partitions a scan node will scan, the default value is 0L"),(0,r.yg)("li",{parentName:"ul"},"tablet_num: The maximum number of tablets that a scanning node will scan, the default value is 0L"),(0,r.yg)("li",{parentName:"ul"},"cardinality: the rough scan line number of a scan node, the default value is 0L"),(0,r.yg)("li",{parentName:"ul"},"global: Whether to take effect globally (all users), the default is false"),(0,r.yg)("li",{parentName:"ul"},"enable: whether to enable blocking rules, the default is true")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a block rule named test_rule"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE SQL_BLOCK_RULE test_rule\nPROPERTIES(\n"sql"="select \\\\* from order_analysis",\n"global"="false",\n"enable"="true"\n);\n')),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"Notes:"),(0,r.yg)("p",{parentName:"blockquote"},"That the sql statement here does not end with a semicolon")),(0,r.yg)("p",{parentName:"li"},"When we execute the sql we just defined in the rule, an exception error will be returned. The example is as follows:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"select * from order_analysis;\nERROR 1064 (HY000): errCode = 2, detailMessage = sql match regex sql block rule: order_analysis_rule\n")))),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create test_rule2, limit the maximum number of scanned partitions to 30, and limit the maximum scan base to 10 billion rows. The example is as follows:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},' CREATE SQL_BLOCK_RULE test_rule2\n PROPERTIES (\n "partition_num" = "30",\n "cardinality" = "10000000000",\n "global" = "false",\n "enable" = "true"\n );\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create SQL BLOCK RULE with special chars"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE SQL_BLOCK_RULE test_rule3\nPROPERTIES\n( \n"sql" = "select count\\\\(1\\\\) from db1.tbl1"\n);\nCREATE SQL_BLOCK_RULE test_rule4\nPROPERTIES\n( \n"sql" = "select \\\\* from db1.tbl1"\n);\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"In SQL",(0,r.yg)("em",{parentName:"p"},"BLOCK_RULE, SQL matching is based on regular expressions. If want to match more patterns of SQL, need to write the corresponding regex. For example, to ignore spaces in SQL and not query tables that start with 'order"),"', as shown below:   "),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},' CREATE SQL_BLOCK_RULE test_rule4 \n PROPERTIES(\n   "sql"="\\\\s*select\\\\s*\\\\*\\\\s*from order_\\\\w*\\\\s*",\n   "global"="false",\n   "enable"="true"\n );\n')))),(0,r.yg)("h3",{id:"appendix"},"APPENDIX"),(0,r.yg)("p",null,"Here are some commonly used regular expressions:"),(0,r.yg)("blockquote",null,(0,r.yg)("pre",{parentName:"blockquote"},(0,r.yg)("code",{parentName:"pre"},". \uff1aMatches any single character except for a newline character \\n.\n\n* \uff1aMatches the preceding element zero or more times. For example, a matches zero or more 'a'.\n\n+ \uff1aMatches the preceding element one or more times. For example, a+ matches one or more 'a'.\n\n? \uff1aMatches the preceding element zero or one time. For example, a? matches zero or one 'a'.\n\n[] \uff1aUsed to define a character set. For example, [aeiou] matches any one vowel letter.\n\n[^] \uff1aIn a character set, use ^ to indicate negation, matching characters that are not in the set. For example, [^0-9] matches any non-digit character.\n\n() \uff1aUsed for grouping expressions and applying quantifiers. For example, (ab)+ matches consecutive 'ab'.\n\n| \uff1aRepresents logical OR. For example, a|b matches 'a' or 'b'.\n\n^ \uff1aMatches the beginning of a string. For example, ^abc matches a string that starts with 'abc'.\n\n$ \uff1aMatches the end of a string. For example, xyz$ matches a string that ends with 'xyz'.\n\n\\ \uff1aUsed to escape special characters to treat them as ordinary characters. For example, \\\\. matches the period character '.'.\n\n\\s \uff1aMatches any whitespace character, including spaces, tabs, newline characters, etc.\n\n\\d \uff1aMatches any digit character, equivalent to [0-9].\n\n\\w \uff1aMatches any word character, including letters, digits, and underscores, equivalent to [a-zA-Z0-9_].\n"))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"CREATE, SQL_BLCOK_RULE\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);