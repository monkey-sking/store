(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"9wEh":function(e,t,a){e.exports={tabBarIcon:"tabBarIcon___2UzHF",homeIcon:"homeIcon___2Ufcb",subscribe:"subscribe___1hRv8",my:"my___qSs-Y","fixed-bottom":"fixed-bottom___3SOa0",avatar:"avatar___cLhLo"}},t3KT:function(e,t,a){"use strict";a.r(t);a("v1HX");var n=a("yu99"),c=a("ODXe"),o=a("q1tI"),i=a.n(o),r=a("9kvl"),l=a("9wEh"),s=a.n(l),m=e=>{var t=e.icon;return i.a.createElement("div",{className:"".concat(s.a.tabBarIcon," ").concat(s.a[t])})},b=[{title:"\u9996\u9875",link:"/menu",icon:i.a.createElement(m,{icon:"homeIcon"})},{title:"\u8ba2\u9605",link:"/menu/subscribe",icon:i.a.createElement(m,{icon:"subscribe"})},{title:"",link:"/menu/myInfo",icon:i.a.createElement(m,{icon:""})}],u=e=>{var t=e.children,a=e.location,l=a.query,m=l.scriptable,u=Object(r["d"])("initialiseModel",(e=>e)),d=u.setScriptable,_=u.isScriptable,p=Object(r["d"])("boxjsModel",(e=>e)),h=Object(o["useState"])([]),f=Object(c["a"])(h,2),E=f[0],k=f[1];return Object(o["useEffect"])((()=>{!!m===_||_||d(!!m);var e=p.data.usercfgs?p.data.usercfgs.icon:"https://gitee.com/scriptableJS/store/raw/master/public/icon.png";b[2].icon=i.a.createElement("img",{alt:"\u5934\u50cf",src:e,className:s.a.avatar}),k(b)}),[p.data,_,m,d]),i.a.createElement(i.a.Fragment,null,t,i.a.createElement("footer",{className:s.a["fixed-bottom"]},i.a.createElement(n["a"],{unselectedTintColor:"#949494",tintColor:"#33A3F4",barTintColor:"white",noRenderContent:!0},E.map((e=>i.a.createElement(n["a"].Item,{title:e.title,key:e.link,icon:e.icon,selectedIcon:e.icon,selected:a.pathname===e.link,onPress:()=>{a.pathname!==e.link&&r["a"].push(e.link)}}))))))};t["default"]=u}}]);