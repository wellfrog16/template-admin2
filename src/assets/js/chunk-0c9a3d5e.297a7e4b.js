(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c9a3d5e"],{"4bb6":function(t,e,a){"use strict";var l=a("c361"),s=a.n(l);e["default"]=s.a},"8f1d":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{staticClass:"or-dialog-wrapper",attrs:{title:t.title,visible:t.previewVisible,"before-close":t.handleClose,"custom-class":"or-dialog",width:"700px",top:"0"},on:{"update:visible":function(e){t.previewVisible=e}}},[a("div",{staticClass:"detail-preview"},[a("el-row",[a("el-col",{attrs:{span:12}},[a("description-item",{attrs:{label:"姓名"}},[[a("span",[t._v(t._s(t.data.name))]),"男"===t.data.gender?a("i",{staticClass:"fas fa-male fa-lg fa-fw",class:t.style["c-male"]}):t._e(),"女"===t.data.gender?a("i",{staticClass:"fas fa-female fa-lg fa-fw",class:t.style["c-female"]}):t._e()]],2)],1),a("el-col",{attrs:{span:12}},[a("description-item",{attrs:{label:"学历",content:t.data.education}})],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("description-item",{attrs:{label:"生日",content:t.data.birthday}})],1),a("el-col",{attrs:{span:12}},[a("description-item",{attrs:{label:"身份证",content:t.data.id}})],1)],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("description-item",{attrs:{label:"区域",content:t.data.county}})],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("description-item",{attrs:{label:"邮编",content:t.data.zip}})],1),a("el-col",{attrs:{span:12}},[a("description-item",{attrs:{label:"Email",content:t.data.email}})],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("description-item",{attrs:{label:"收入"}},[[t._v(t._s(t._f("currency")(t.data.income,"￥",2)))]],2)],1)],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("description-item",{attrs:{label:"备注",content:t.data.remark}})],1)],1)],1),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:t.handleClose}},[t._v("确定")])],1)])},s=[],n=(a("7f7f"),a("cebc")),i=a("2f62"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{class:t.$style.main},[a("span",{class:t.$style.label},[t._v(t._s(t.label)+"： ")]),t._t("default",[t._v(t._s(t.content))])],2)},o=[],r={props:{label:{type:String,default:""},content:{type:String,default:""}}},p=r,d=a("4bb6"),f=a("2877");function u(t){this["$style"]=d["default"].locals||d["default"]}var b=Object(f["a"])(p,c,o,!1,u,null,null),m=b.exports,w=a("dbcd"),v=a.n(w),_=Object(i["a"])("complexTable"),h=_.mapState,y=_.mapMutations,g=_.mapGetters,C={components:{DescriptionItem:m},data:function(){return{style:v.a}},computed:Object(n["a"])({},h(["previewVisible"]),g(["activeRow"]),{data:function(){return this.activeRow||{}},title:function(){return"".concat(this.data.name," 个人信息")}}),methods:Object(n["a"])({},y(["setState"]),{handleClose:function(){this.setState({previewVisible:!1})}})},j=C,k=Object(f["a"])(j,l,s,!1,null,null,null);e["default"]=k.exports},c361:function(t,e,a){t.exports={label:"description-item_label_1TeiK"}}}]);