(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c4ff3"],{"3ce2":function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{staticClass:"or-dialog-wrapper",attrs:{title:e.title,visible:e.editVisible,"before-close":e.handleClose,"close-on-click-modal":!1,"custom-class":"or-dialog",width:"300px",top:"50px"},on:{"update:visible":function(t){e.editVisible=t}}},[r("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.saveBusy,expression:"saveBusy"}],ref:"form",attrs:{model:e.form.fields,rules:e.form.rules,"label-width":"50px"}},[r("el-form-item",{attrs:{prop:"name",label:"姓名"}},[r("el-input",{model:{value:e.form.fields.name,callback:function(t){e.$set(e.form.fields,"name","string"===typeof t?t.trim():t)},expression:"form.fields.name"}},[r("el-radio-group",{attrs:{slot:"append",size:"mini"},slot:"append",model:{value:e.form.fields.gender,callback:function(t){e.$set(e.form.fields,"gender",t)},expression:"form.fields.gender"}},[r("el-radio-button",{attrs:{label:"男"}}),r("el-radio-button",{attrs:{label:"女"}})],1)],1)],1),r("el-form-item",{attrs:{prop:"education",label:"学历"}},[r("el-select",{attrs:{placeholder:"选择学历"},model:{value:e.form.fields.education,callback:function(t){e.$set(e.form.fields,"education",t)},expression:"form.fields.education"}},e._l(e.edus,function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})}),1)],1),r("el-form-item",{attrs:{prop:"income",label:"收入"}},[r("el-input",{model:{value:e.form.fields.income,callback:function(t){e.$set(e.form.fields,"income",e._n(t))},expression:"form.fields.income"}})],1),r("el-form-item",{attrs:{prop:"status",label:"状态"}},[r("el-select",{attrs:{placeholder:"状态"},model:{value:e.form.fields.status,callback:function(t){e.$set(e.form.fields,"status",t)},expression:"form.fields.status"}},e._l(e.sts,function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})}),1)],1),r("el-form-item",{attrs:{prop:"remark",label:"备注"}},[r("el-input",{model:{value:e.form.fields.remark,callback:function(t){e.$set(e.form.fields,"remark","string"===typeof t?t.trim():t)},expression:"form.fields.remark"}})],1)],1),r("span",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.handleClose}},[e._v("取消")]),r("el-button",{attrs:{type:"primary",loading:e.saveBusy},on:{click:e.handleSave}},[e._v("保存")])],1)],1)},s=[],n=(r("8e6e"),r("ac6a"),r("456d"),r("7f7f"),r("bd86")),o=r("2f62"),a=r("308c");function l(e,t){var r=Object.keys(e);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(e)),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(r,!0).forEach(function(t){Object(n["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var u,f,d={data:function(){var e=this;return{saveBusy:!1,form:{fields:e.createFields(),rules:{}}}},computed:{editVisible:function(){return!0},activeRow:function(){return!0},activeUid:function(){return!0}},watch:{editVisible:function(e){e&&this.update()}},methods:{setState:function(){},createFields:function(){return{}},handleClose:function(){return!this.saveBusy&&this.setState({editVisible:!1}),!this.saveBusy},update:function(){var e=this;this.activeUid?this.form.fields=c({},this.activeRow):this.form.fields=this.createFields(),this.$nextTick(function(){return e.$refs.form.clearValidate()})},handleSave:function(){var e=this;this.$refs.form.validate(function(t){t&&e.runSave()})},runSave:function(){var e=this;this.saveBusy=!0,this.save({vm:this,fields:this.form.fields}).then(function(){e.$nextTick(function(){e.saveBusy=!1,e.handleClose()})}).catch(function(){e.saveBusy=!1})},save:function(){}}},m=d,p=r("2877"),b=Object(p["a"])(m,u,f,!1,null,null,null),v=b.exports;function h(e,t){var r=Object.keys(e);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(e)),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(r,!0).forEach(function(t){Object(n["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var O=Object(o["a"])("mixins"),g=O.mapState,w=O.mapMutations,j=O.mapGetters,k=O.mapActions,x={mixins:[v],data:function(){var e=this;return{saveBusy:!1,edus:["专科","本科","硕士研究生","博士研究生","其他"],sts:["在职","待业","退休","创业","游学"],form:{fields:e.createFields(),rules:y({},a["c"].check("name",{message:"姓名为长度在2-10之间的非空字符",min:2,max:10}),{},a["c"].noEmpty("education",{message:"请选择学历"}),{},a["c"].noEmpty("status",{message:"请选择状态"}))}}},watch:{editVisible:function(e){e&&this.update()}},computed:y({},g(["editVisible","activeUid"]),{},j(["activeRow"]),{title:function(){return"".concat(this.form.fields.name," 个人信息")}}),methods:y({},w(["setState"]),{},k(["save"]),{createFields:function(){var e={guid:"",id:"",name:"",gender:"女",income:0,remark:"",education:"",status:""};return Object.assign({},e)}})},P=x,S=Object(p["a"])(P,i,s,!1,null,null,null);t["default"]=S.exports}}]);