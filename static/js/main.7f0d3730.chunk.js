(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{101:function(e,t,n){},106:function(e,t,n){},175:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(9),o=n.n(l),r=n(17),i=n(18),s=n(21),m=n(20),u=function(e){return c.a.createElement("ul",null,e.data.map((function(e){return c.a.createElement("li",{key:e.id},e.title)})))},p=function(e){return c.a.createElement("div",null,[1,2,3,4,5].map((function(t){return c.a.createElement("button",{key:t,onClick:function(){return e.getData(t)}},t)})))},d=(a.Component,n(11)),X=n(12),h=(n(101),function(e){return console.log(e),c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement("h2",null,"React"),c.a.createElement("p",null,"\u7528\u4e8e\u6784\u5efa\u7528\u6237\u754c\u9762\u7684 JavaScript \u5e93"),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){return e.history.push("/doc")}},"\u5feb\u901f\u5f00\u59cb"),c.a.createElement("button",{onClick:function(){return e.history.push("/core")}},"\u5165\u95e8\u6559\u7a0b")))}),b=(n(76),n(106),n(10)),E=(Object(X.g)((function(e){e.routes;return c.a.createElement("div",{className:"doc"},c.a.createElement("div",{className:"content"},c.a.createElement(X.a,{from:"/doc",to:"/doc/core"})),c.a.createElement("ol",null,c.a.createElement("li",null,c.a.createElement(d.b,{to:"/doc/core"},"\u6838\u5fc3\u6982\u5ff5")),c.a.createElement("li",null,c.a.createElement(d.b,{to:"/doc/guide"},"\u9ad8\u7ea7\u6307\u5f15")),c.a.createElement("li",null,c.a.createElement(d.b,{to:"/doc/api"},"API")),c.a.createElement("li",null,c.a.createElement(d.b,{to:"/doc/hooks"},"Hooks"))))})),function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={selectedTab:"blueTab"},a}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props.location.pathname;return c.a.createElement("div",{style:{position:"fixed",width:"100%",bottom:0}},c.a.createElement(b.d,{unselectedTintColor:"#949494",tintColor:"red",barTintColor:"white"},c.a.createElement(b.d.Item,{title:"\u9996\u9875",key:"home",icon:c.a.createElement("i",{className:"iconfont icon-shouye"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-shouye"}),selected:"/"===t,onPress:function(){e.props.history.push("/")},"data-seed":"logId"}),c.a.createElement(b.d.Item,{icon:c.a.createElement("i",{className:"iconfont icon-icon-"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-icon-"}),title:"\u8d2d\u7269\u8f66",key:"cart",selected:"/cart"===t,onPress:function(){e.props.history.push("/cart")}}),c.a.createElement(b.d.Item,{icon:c.a.createElement("i",{className:"iconfont icon-dingdanliebiao"}),selectedIcon:c.a.createElement("div",{style:{width:"22px",height:"22px",background:"url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat"}}),title:"\u8ba2\u5355\u5217\u8868",key:"Friend",selected:"/dingdan"===this.state.selectedTab,onPress:function(){e.props.history.push("./dingdan")}}),c.a.createElement(b.d.Item,{icon:c.a.createElement("i",{className:"iconfont icon-wode"}),selectedIcon:{uri:"https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg"},title:"\u6211\u7684\u6dd8\u5b9d",key:"my",selected:"./taobao"===this.state.selectedTab,onPress:function(){e.props.history.push("./taobao")}})))}}]),n}(c.a.Component)),g=Object(X.g)(E),f=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={selectedTab:"blueTab"},a}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props.location.pathname;return c.a.createElement("div",{style:{position:"fixed",width:"100%",bottom:0}},c.a.createElement(b.d,{unselectedTintColor:"#949494",tintColor:"red",barTintColor:"white"},c.a.createElement(b.d.Item,{title:"\u5e97\u94fa",key:"home",icon:c.a.createElement("i",{className:"iconfont icon-dianpu"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-dianpu"}),selected:"/"===t,onPress:function(){e.props.history.push("/")},"data-seed":"logId"}),c.a.createElement(b.d.Item,{icon:c.a.createElement("i",{className:"iconfont icon-kefu"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-kefu"}),title:"\u5ba2\u670d",key:"cart",selected:"/cart"===t,onPress:function(){e.props.history.push("/cart")},"data-seed":"logId1"}),c.a.createElement(b.d.Item,{icon:c.a.createElement("i",{className:"iconfont icon-shoucang"}),selectedIcon:c.a.createElement("div",{style:{width:"22px",height:"22px",background:"url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat"}}),title:"\u6536\u85cf",key:"Friend",selected:"greenTab"===this.state.selectedTab,onPress:function(){e.props.history.push("/friend")}}),c.a.createElement(b.d.Item,{icon:c.a.createElement("button",{style:{height:"35px",width:"100px",borderTopLeftRadius:"20px",borderTopRightRadius:"0px",borderBottomLeftRadius:"20px",borderBottomRightRadius:"0px",backgroundColor:"orange",color:"white"}},"\u52a0\u5165\u8d2d\u7269\u8f66"),key:"madd to cart",onPress:function(){window.location="http://www.alipay.com"}}),c.a.createElement(b.d.Item,{icon:c.a.createElement("button",{style:{height:"35px",width:"100px",borderTopLeftRadius:"0px",borderTopRightRadius:"20px",borderBottomLeftRadius:"0px",borderBottomRightRadius:"20px",backgroundColor:"red",color:"white"}},"\u7acb\u5373\u8d2d\u4e70"),key:"take it now",onPress:function(){window.location="http://www.alipay.com"}})))}}]),n}(c.a.Component),w=Object(X.g)(f),y=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).onChange=function(t){e.setState({value:t})},e.clear=function(){e.setState({value:""})},e}return Object(i.a)(n,[{key:"render",value:function(e){return c.a.createElement("div",null,c.a.createElement(b.e,null),c.a.createElement(b.f,null,c.a.createElement("div",{className:"sub-title"})),c.a.createElement(b.c,{placeholder:"\u641c\u7d22\u5b9d\u8d1d",maxLength:200}))}}]),n}(c.a.Component),j=Object(X.g)(y),v=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={data:["1","2","3"],imgHeight:176},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({data:["https://gw.alicdn.com/imgextra/i2/69/O1CN012kgqDf1CNdxWjfTPO_!!69-0-lubanu.jpg","https://gw.alicdn.com/imgextra/i3/105/O1CN01L6ja0a1Ce8DZ8aam2_!!105-0-lubanu.jpg","https://gw.alicdn.com/imgextra/i3/128/O1CN01Xg1Jrp1CofKQy0kOn_!!128-0-lubanu.jpg"]})}),100)}},{key:"render",value:function(){var e=this;return c.a.createElement(b.f,null,c.a.createElement(b.a,{autoplay:!0,infinite:!0,beforeChange:function(e,t){return console.log("slide from ".concat(e," to ").concat(t))},afterChange:function(e){return console.log("slide to",e)}},this.state.data.map((function(t,n){return c.a.createElement("a",{key:n,href:"http://www.alipay.com",style:{display:"inline-block",width:"100%",height:e.state.imgHeight}},c.a.createElement("img",{src:"".concat(t),alt:"",style:{width:"100%",verticalAlign:"top"},onLoad:function(){window.dispatchEvent(new Event("resize")),e.setState({imgHeight:"auto"})}}))}))))}}]),n}(c.a.Component),k=n(95),I=function(e){var t=e.className,n=void 0===t?"":t,a=Object(k.a)(e,["className"]);return c.a.createElement("div",Object.assign({className:"".concat(n," placeholder")},a),"\u521b\u610f\u9676\u74f7\u679c\u7bee")},_=Object(X.g)((function(e){return c.a.createElement("div",{style:{marginTop:"120px"}},c.a.createElement("div",{className:"sub-title"},"\u4f60\u53ef\u80fd\u8fd8\u559c\u6b22"),c.a.createElement(b.b,null,c.a.createElement(b.b.Item,null,c.a.createElement("img",{src:"https://gw.alicdn.com/bao/uploaded/i3/TB1IKZcNFXXXXbwXXXXXXXXXXXX_!!0-item_pic.jpg_500x500q90.jpg_.webp",onClick:function(){return e.history.push("/s2")},style:{width:"88%"}}),c.a.createElement(I,null)),c.a.createElement(b.b.Item,null,c.a.createElement("img",{src:"https://gw.alicdn.com/bao/uploaded/i3/TB1IKZcNFXXXXbwXXXXXXXXXXXX_!!0-item_pic.jpg_500x500q90.jpg_.webp",onClick:function(){e.history.push("/s2")},style:{width:"88%"}}),c.a.createElement(I,null))),c.a.createElement(b.b,null,c.a.createElement(b.b.Item,null,c.a.createElement("img",{src:"https://gw.alicdn.com/bao/uploaded/i3/TB1IKZcNFXXXXbwXXXXXXXXXXXX_!!0-item_pic.jpg_500x500q90.jpg_.webp",onClick:function(){e.history.push("/s2")},style:{width:"88%"}}),c.a.createElement(I,null)),c.a.createElement(b.b.Item,null,c.a.createElement("img",{src:"https://gw.alicdn.com/bao/uploaded/i3/TB1IKZcNFXXXXbwXXXXXXXXXXXX_!!0-item_pic.jpg_500x500q90.jpg_.webp",onClick:function(){e.history.push("/s2")},style:{width:"88%"}}),c.a.createElement(I,null))),c.a.createElement(b.b,null,c.a.createElement(b.b.Item,null,c.a.createElement("img",{src:"https://gw.alicdn.com/bao/uploaded/i3/TB1IKZcNFXXXXbwXXXXXXXXXXXX_!!0-item_pic.jpg_500x500q90.jpg_.webp",onClick:function(){e.history.push("/s2")},style:{width:"88%"}}),c.a.createElement(I,null)),c.a.createElement(b.b.Item,null,c.a.createElement("img",{src:"https://gw.alicdn.com/bao/uploaded/i3/TB1IKZcNFXXXXbwXXXXXXXXXXXX_!!0-item_pic.jpg_500x500q90.jpg_.webp",onClick:function(){e.history.push("/s2")},style:{width:"88%"}}),c.a.createElement(I,null))),c.a.createElement(b.b,null,c.a.createElement(b.b.Item,null,c.a.createElement("img",{src:"https://gw.alicdn.com/bao/uploaded/i3/TB1IKZcNFXXXXbwXXXXXXXXXXXX_!!0-item_pic.jpg_500x500q90.jpg_.webp",onClick:function(){e.history.push("/s2")},style:{width:"88%"}}),c.a.createElement(I,null)),c.a.createElement(b.b.Item,null,c.a.createElement("img",{src:"https://gw.alicdn.com/bao/uploaded/i3/TB1IKZcNFXXXXbwXXXXXXXXXXXX_!!0-item_pic.jpg_500x500q90.jpg_.webp",onClick:function(){e.history.push("/s2")},style:{width:"88%"}}),c.a.createElement(I,null))),c.a.createElement(b.b,null,c.a.createElement(b.b.Item,null,c.a.createElement("img",{src:"https://gw.alicdn.com/bao/uploaded/i3/TB1IKZcNFXXXXbwXXXXXXXXXXXX_!!0-item_pic.jpg_500x500q90.jpg_.webp",onClick:function(){e.history.push("/s2")},style:{width:"88%"}}),c.a.createElement(I,null)),c.a.createElement(b.b.Item,null,c.a.createElement("img",{src:"https://gw.alicdn.com/bao/uploaded/i3/TB1IKZcNFXXXXbwXXXXXXXXXXXX_!!0-item_pic.jpg_500x500q90.jpg_.webp",onClick:function(){e.history.push("/s2")},style:{width:"88%"}}),c.a.createElement(I,null))))})),x=function(){return c.a.createElement("div",null,c.a.createElement(d.b,{to:"/s1"},c.a.createElement(j,null)),c.a.createElement(v,null),c.a.createElement(d.b,{to:"./s2"},c.a.createElement(_,null)),c.a.createElement(g,null))},C=function(e){return c.a.createElement("div",null,"\u8d2d\u7269\u8f66",c.a.createElement("button",{onClick:e.history.goBack},"\u8fd4\u56de"),c.a.createElement(g,null))},O=function(e){return c.a.createElement("div",null,"\u8ba2\u5355\u5217\u8868",c.a.createElement(g,null))},N=function(e){return c.a.createElement("div",null,"\u6211\u7684\u6dd8\u5b9d",c.a.createElement(g,null))},T=Object(X.g)((function(e){return c.a.createElement("div",null,c.a.createElement(b.c,{placeholder:"\u641c\u7d22\u5b9d\u8d1d",onCancel:function(){e.history.goBack()},showCancelButton:!0}),c.a.createElement("div",null,c.a.createElement("p",null,"\u60a8\u597d\uff0c\u9875\u9762\u5df2\u8df3\u8f6c")))})),B=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(e){return Object(r.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("p",{onClick:function(){e.props.history.push("/")}},"<="),c.a.createElement("img",{src:"https://gw.alicdn.com/bao/uploaded/i1/TB19I8UHVXXXXcXXFXXXXXXXXXX_!!0-item_pic.jpg_500x500q90.jpg_.webp",style:{width:"100%"}})),c.a.createElement("div",null,c.a.createElement(w,null)))}}]),n}(c.a.Component),F=Object(X.g)(B),R=function(){return c.a.createElement(d.a,null,c.a.createElement(X.d,null,c.a.createElement(X.b,{exact:!0,path:"/",component:x}),c.a.createElement(X.b,{path:"/cart",component:C}),c.a.createElement(X.b,{path:"/dingdan",component:O}),c.a.createElement(X.b,{path:"/taobao",component:N}),c.a.createElement(X.b,{path:"/s1",component:T}),c.a.createElement(X.b,{path:"/s2",component:F}),c.a.createElement(X.b,{component:x})))};n(174);o.a.render(c.a.createElement(R,null),document.getElementById("root"))},76:function(e,t){},96:function(e,t,n){e.exports=n(175)}},[[96,1,2]]]);
//# sourceMappingURL=main.7f0d3730.chunk.js.map