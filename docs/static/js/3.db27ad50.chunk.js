(this.webpackJsonpcra=this.webpackJsonpcra||[]).push([[3],{54:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return u}));var a=n(2),i=n.n(a),o=n(4),r=n(1),c=n(0),l=n.n(c);function u(t){var e=Object(c.useState)(1),n=Object(r.a)(e,2),a=n[0],u=n[1],p=Object(c.useState)(!1),s=Object(r.a)(p,2),f=s[0],d=s[1],b=Object(c.useState)([]),m=Object(r.a)(b,2),h=m[0],x=m[1],g=function(){var t=Object(o.a)(i.a.mark((function t(e){var n,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.page,a=e.limit,d(!0),t.abrupt("return",fetch("https://picsum.photos/v2/list?page=".concat(n,"&limit=").concat(a)).then((function(t){return d(!1),t.json()})));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();Object(c.useEffect)((function(){g({page:a,limit:15}).then((function(t){return x(t)}))}),[a]);var y=function(e){return function(n){t.onChange&&t.onChange(e)}};return t.open?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{position:"absolute",background:"#000",top:0,bottom:0,left:0,right:0,opacity:.5},onClick:function(){t.onClose&&t.onClose()}},"\xa0"),l.a.createElement("div",null,l.a.createElement("div",{style:{position:"absolute",border:"1px solid #ccc",background:"#fff",opacity:1,boxShadow:"10px 10px 10px #333",width:"530px",height:"350px",overflow:"auto",top:"100px",left:"50%",marginLeft:"-250px",padding:"20px"}},l.a.createElement("ul",{style:{listStyle:"none",margin:0,padding:0}},h.map((function(t,e){return l.a.createElement("li",{key:t.id,style:{float:"left",marginLeft:"5px"}},l.a.createElement("img",{src:"https://picsum.photos/id/".concat(t.id,"/200"),alt:"",style:{width:"100px",height:"100px",cursor:"pointer",background:"#eee"},onClick:y(t)}))}))),l.a.createElement("div",{style:{position:"absolute",bottom:"5px",textAlign:"center",width:"90%"}},l.a.createElement("button",{disabled:f,style:{width:"50px",fontSize:"16px",margin:"10px"},onClick:function(){return u(1)}}," << "),l.a.createElement("button",{disabled:f,style:{width:"100px",fontSize:"16px",margin:"10px"},onClick:function(){return u(a-1)}}," < "),l.a.createElement("button",{disabled:f,style:{width:"100px",fontSize:"16px"},onClick:function(){return u(a+1)}}," > "))))):null}}}]);
//# sourceMappingURL=3.db27ad50.chunk.js.map