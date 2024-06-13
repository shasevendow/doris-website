"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[80631],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>y});var t=r(296540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),u=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=u(e.components);return t.createElement(i.Provider,{value:n},e.children)},p="mdxType",_={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,y=p["".concat(i,".").concat(m)]||p[m]||_[m]||s;return r?t.createElement(y,o(o({ref:n},c),{},{components:r})):t.createElement(y,o({ref:n},c))}));function y(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<s;u++)o[u]=r[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},658558:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>_,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var t=r(58168),a=(r(296540),r(15680));const s={title:"ST_AREA",language:"zh-CN"},o=void 0,l={unversionedId:"sql-manual/sql-functions/spatial-functions/st-area",id:"version-2.0/sql-manual/sql-functions/spatial-functions/st-area",title:"ST_AREA",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/spatial-functions/st-area.md",sourceDirName:"sql-manual/sql-functions/spatial-functions",slug:"/sql-manual/sql-functions/spatial-functions/st-area",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/spatial-functions/st-area",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ST_AREA",language:"zh-CN"},sidebar:"docs",previous:{title:"ST_ANGLE_SPHERE",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/spatial-functions/st-angle-sphere"},next:{title:"ST_POINT",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/spatial-functions/st-point"}},i={},u=[{value:"ST_Area_Square_Meters,ST_Area_Square_Km",id:"st_area_square_metersst_area_square_km",level:2},{value:"Syntax",id:"syntax",level:3},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function _(e){let{components:n,...r}=e;return(0,a.yg)(p,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"st_area_square_metersst_area_square_km"},"ST_Area_Square_Meters,ST_Area_Square_Km"),(0,a.yg)("h3",{id:"syntax"},"Syntax"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DOUBLE ST_Area_Square_Meters(GEOMETRY geo)\nDOUBLE ST_Area_Square_Km(GEOMETRY geo)\n")),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("p",null,"\u8ba1\u7b97\u5730\u7403\u7403\u9762\u4e0a\u533a\u57df\u7684\u9762\u79ef\uff0c\u76ee\u524d\u53c2\u6570geo\u652f\u6301St_Point,St_LineString,St_Circle\u548cSt_Polygon\u3002"),(0,a.yg)("p",null,"\u5982\u679c\u8f93\u5165\u7684\u662fSt_Point,St_LineString\uff0c\u5219\u8fd4\u56de\u96f6\u3002"),(0,a.yg)("p",null,"\u5176\u4e2d\uff0cST_Area_Square_Meters(GEOMETRY geo)\u8fd4\u56de\u7684\u5355\u4f4d\u662f\u5e73\u65b9\u7c73\uff0cST_Area_Square_Km(GEOMETRY geo)\u8fd4\u56de\u7684\u5355\u4f4d\u662f\u5e73\u65b9\u5343\u7c73\u3002"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> SELECT ST_Area_Square_Meters(ST_Circle(0, 0, 1));\n+-------------------------------------------------+\n| st_area_square_meters(st_circle(0.0, 0.0, 1.0)) |\n+-------------------------------------------------+\n|                              3.1415926535897869 |\n+-------------------------------------------------+\n1 row in set (0.04 sec)\n\nmysql> SELECT ST_Area_Square_Km(ST_Polygon(\"POLYGON ((0 0, 1 0, 1 1, 0 1, 0 0))\"));\n+----------------------------------------------------------------------+\n| st_area_square_km(st_polygon('POLYGON ((0 0, 1 0, 1 1, 0 1, 0 0))')) |\n+----------------------------------------------------------------------+\n|                                                   12364.036567076409 |\n+----------------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> SELECT ST_Area_Square_Meters(ST_Point(0, 1));\n+-------------------------------------------+\n| st_area_square_meters(st_point(0.0, 1.0)) |\n+-------------------------------------------+\n|                                         0 |\n+-------------------------------------------+\n1 row in set (0.05 sec)\n\nmysql> SELECT ST_Area_Square_Meters(ST_LineFromText(\"LINESTRING (1 1, 2 2)\"));\n+-----------------------------------------------------------------+\n| st_area_square_meters(st_linefromtext('LINESTRING (1 1, 2 2)')) |\n+-----------------------------------------------------------------+\n|                                                               0 |\n+-----------------------------------------------------------------+\n1 row in set (0.03 sec)\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ST_Area_Square_Meters,ST_Area_Square_Km,ST_Area,ST,Area"))}_.isMDXComponent=!0}}]);