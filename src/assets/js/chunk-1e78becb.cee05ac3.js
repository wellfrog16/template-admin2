(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e78becb"],{"3a80":function(e,t,a){e.exports={wrapper:"count-to_wrapper_Y_2TW"}},"3bfc":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"el-fade-in-linear"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],class:[e.$style.main,"flex-center"],on:{click:e.backToTop}},[a("i",{staticClass:"el-icon-upload2"})])])},l=[],i=(a("c5f6"),a("2c38")),s={name:"BackToTop",props:{visibilityHeight:{type:Number,default:400},element:{type:String,default:"body"}},data:function(){return{visible:!1}},computed:{container:function(){return Object(i["a"])(this.element)}},mounted:function(){var e=this;this.container.on("scroll",function(){return e.handleScroll()})},beforeDestroy:function(){this.container.unbind()},methods:{handleScroll:function(){this.visible=this.container.scrollTop()>this.visibilityHeight},backToTop:function(){this.container.scrollTo(0,1e3)}}},o=s,c=a("dfaf"),r=a("2877");function u(e){this["$style"]=c["default"].locals||c["default"]}var p=Object(r["a"])(o,n,l,!1,u,null,null);t["a"]=p.exports},"47b5":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main-wrapper"},[a("el-card",{attrs:{shadow:"never"}},[a("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"复制",name:"tab-a"}},[a("clipboard")],1),a("el-tab-pane",{attrs:{label:"手势",name:"tab-b"}},[a("touch")],1),a("el-tab-pane",{attrs:{label:"返回顶部",name:"tab-c"}},[a("backtotop")],1),a("el-tab-pane",{attrs:{label:"数字动画",name:"tab-d"}},[a("count-to")],1)],1)],1)],1)},l=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{attrs:{inline:""}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1),a("el-form-item",[a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:success",value:e.handleClipboardSuccess,expression:"handleClipboardSuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:copy",value:e.content,expression:"content",arg:"copy"},{name:"permission",rawName:"v-permission",value:["editor"],expression:"['editor']"}],attrs:{type:"primary"}},[e._v("复制文本框信息")])],1)],1)},s=[],o={data:function(){return{content:""}},methods:{handleClipboardSuccess:function(e){this.$message.success("复制成功"),e.clearSelection()}}},c=o,r=a("2877"),u=Object(r["a"])(c,i,s,!1,null,null,null),p=u.exports,d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.$style.main},[a("div",{directives:[{name:"tap",rawName:"v-tap",value:e.handleTap,expression:"handleTap"},{name:"press",rawName:"v-press",value:e.handlePress,expression:"handlePress"},{name:"swipeleft",rawName:"v-swipeleft",value:e.handleSwipeleft,expression:"handleSwipeleft"},{name:"swiperight",rawName:"v-swiperight",value:e.handleSwiperight,expression:"handleSwiperight"},{name:"swipeup",rawName:"v-swipeup",value:e.handleSwipeup,expression:"handleSwipeup"},{name:"swipedown",rawName:"v-swipedown",value:e.handleSwipedown,expression:"handleSwipedown"}],class:[e.$style.box,"flex-center"]},[e._v("手势区域")]),a("div",{class:e.$style.log},[e._v(e._s(e.log))])])},f=[],h={data:function(){return{log:""}},methods:{handleTap:function(){this.log="tap"},handlePress:function(){this.log="press"},handleSwipeleft:function(){this.log="swipeleft"},handleSwiperight:function(){this.log="swiperight"},handleSwipeup:function(){this.log="swipeup"},handleSwipedown:function(){this.log="swipedown"}}},m=h,v=a("7db7");function b(e){this["$style"]=v["default"].locals||v["default"]}var w=Object(r["a"])(m,d,f,!1,b,null,null),_=w.exports,x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{class:e.$style.container}),a("backtotop",{attrs:{element:"#elMain"}})],1)},y=[],g=a("3bfc"),k={components:{Backtotop:g["a"]}},S=k,$=a("85ee");function N(e){this["$style"]=$["default"].locals||$["default"]}var C=Object(r["a"])(S,x,y,!1,N,null,null),T=C.exports,j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-button",{attrs:{type:"primary"},on:{click:e.handleClick}},[e._v("开始")]),a("el-divider",[a("i",{staticClass:"el-icon-eleme"})]),a("el-alert",{attrs:{type:"success",closable:!1}},[a("div",{class:e.$style.wrapper,attrs:{slot:"title"},slot:"title"},[a("vue-count-to",{ref:"myCount",attrs:{startVal:0,endVal:2019,duration:5e3,autoplay:!1}})],1)])],1)},O=[],E={methods:{handleClick:function(){this.$refs.myCount.start()}}},B=E,J=a("ea88");function P(e){this["$style"]=J["default"].locals||J["default"]}var H=Object(r["a"])(B,j,O,!1,P,null,null),V=H.exports,Y={components:{Clipboard:p,Touch:_,Backtotop:T,CountTo:V},data:function(){return{activeName:"tab-a"}},mounted:function(){},methods:{handleClick:function(){}}},D=Y,G=Object(r["a"])(D,n,l,!1,null,null,null);t["default"]=G.exports},"7db7":function(e,t,a){"use strict";var n=a("8ee0"),l=a.n(n);t["default"]=l.a},"85ee":function(e,t,a){"use strict";var n=a("df59"),l=a.n(n);t["default"]=l.a},"8bff":function(e,t,a){e.exports={main:"index_main_1SxY1"}},"8ee0":function(e,t,a){e.exports={main:"touch_main_2JRh4",box:"touch_box_2Gws4",log:"touch_log_2Q65B"}},df59:function(e,t,a){e.exports={container:"backtotop_container_2-usL"}},dfaf:function(e,t,a){"use strict";var n=a("8bff"),l=a.n(n);t["default"]=l.a},ea88:function(e,t,a){"use strict";var n=a("3a80"),l=a.n(n);t["default"]=l.a}}]);