(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d225fb6"],{e75c:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{staticClass:"or-dialog-wrapper",attrs:{title:e.title,visible:e.editVisible,"before-close":e.handleClose,"close-on-click-modal":!1,"custom-class":"or-dialog",width:"300px",top:"50px"},on:{"update:visible":function(t){e.editVisible=t}}},[r("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.saveBusy,expression:"saveBusy"}],ref:"form",attrs:{model:e.form.fields,rules:e.form.rules,"label-width":"50px"}},[r("el-form-item",{attrs:{prop:"name",label:"姓名"}},[r("el-input",{model:{value:e.form.fields.name,callback:function(t){e.$set(e.form.fields,"name","string"===typeof t?t.trim():t)},expression:"form.fields.name"}},[r("el-radio-group",{attrs:{slot:"append",size:"mini"},slot:"append",model:{value:e.form.fields.gender,callback:function(t){e.$set(e.form.fields,"gender",t)},expression:"form.fields.gender"}},[r("el-radio-button",{attrs:{label:"男"}}),r("el-radio-button",{attrs:{label:"女"}})],1)],1)],1),r("el-form-item",{attrs:{prop:"education",label:"学历"}},[r("el-select",{attrs:{placeholder:"选择学历"},model:{value:e.form.fields.education,callback:function(t){e.$set(e.form.fields,"education",t)},expression:"form.fields.education"}},e._l(e.edus,function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})}),1)],1),r("el-form-item",{attrs:{prop:"income",label:"收入"}},[r("el-input",{model:{value:e.form.fields.income,callback:function(t){e.$set(e.form.fields,"income",e._n(t))},expression:"form.fields.income"}})],1),r("el-form-item",{attrs:{prop:"status",label:"状态"}},[r("el-select",{attrs:{placeholder:"状态"},model:{value:e.form.fields.status,callback:function(t){e.$set(e.form.fields,"status",t)},expression:"form.fields.status"}},e._l(e.sts,function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})}),1)],1),r("el-form-item",{attrs:{prop:"remark",label:"备注"}},[r("el-input",{model:{value:e.form.fields.remark,callback:function(t){e.$set(e.form.fields,"remark","string"===typeof t?t.trim():t)},expression:"form.fields.remark"}})],1)],1),r("span",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.handleClose}},[e._v("取消")]),r("el-button",{attrs:{type:"primary",loading:e.saveBusy},on:{click:e.handleSave}},[e._v("保存")])],1)],1)},a=[],i=(r("8e6e"),r("ac6a"),r("456d"),r("96cf"),r("3b8d")),n=(r("7f7f"),r("bd86")),o=r("2f62"),l=r("4d5a"),c=r("308c");function u(e,t){var r=Object.keys(e);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(e)),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(r,!0).forEach(function(t){Object(n["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d=Object(o["a"])("baseForm"),m=d.mapState,p=d.mapMutations,b=d.mapGetters,h={guid:"",id:"",name:"",gender:"女",income:0,remark:"",education:"",status:""},v={data:function(){var e=this;return{saveBusy:!1,edus:["专科","本科","硕士研究生","博士研究生","其他"],sts:["在职","待业","退休","创业","游学"],form:{fields:e.createFields(),rules:f({},c["c"].check("name",{message:"姓名为长度在2-10之间的非空字符",min:2,max:10}),{},c["c"].noEmpty("education",{message:"请选择学历"}),{},c["c"].noEmpty("status",{message:"请选择状态"}))}}},watch:{editVisible:function(e){e&&this.update()}},computed:f({},m(["editVisible","activeUid"]),{},b(["activeRow"]),{title:function(){return"".concat(this.form.fields.name," 个人信息")}}),methods:f({},p(["setState"]),{createFields:function(){return Object.assign({},h)},handleClose:function(){return!this.saveBusy&&this.setState({editVisible:!1}),!this.saveBusy},update:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.activeUid){e.next=6;break}return e.next=3,l["a"].detail();case 3:this.form.fields=f({},this.activeRow),e.next=7;break;case 6:this.form.fields=this.createFields();case 7:this.$nextTick(function(){return t.$refs.form.clearValidate()});case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),handleSave:function(){var e=this;this.$refs.form.validate(function(t){t&&e.save()})},save:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.saveBusy=!0,!this.form.fields.id){e.next=6;break}return e.next=4,l["a"].update(this.form.fields);case 4:e.next=8;break;case 6:return e.next=8,l["a"].insert(this.form.fields);case 8:this.$nextTick(function(){t.saveBusy=!1,t.handleClose(),t.setState({overdue:!0})});case 9:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()})},g=v,k=r("2877"),y=Object(k["a"])(g,s,a,!1,null,null,null);t["default"]=y.exports}}]);