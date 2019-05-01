(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b8a70"],{3030:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-dialog",{staticClass:"or-dialog",attrs:{title:e.title,visible:e.editVisible,"before-close":e.handleClose,"close-on-click-modal":!1,width:"700px",top:"50px"},on:{"update:visible":function(t){e.editVisible=t}}},[s("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.saveBusy,expression:"saveBusy"}],ref:"form",attrs:{model:e.form.fields,rules:e.form.rules,"label-width":"80px"}},[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{prop:"name",label:"姓名"}},[s("el-input",{model:{value:e.form.fields.name,callback:function(t){e.$set(e.form.fields,"name","string"===typeof t?t.trim():t)},expression:"form.fields.name"}},[s("el-radio-group",{attrs:{slot:"append",size:"mini"},slot:"append",model:{value:e.form.fields.gender,callback:function(t){e.$set(e.form.fields,"gender",t)},expression:"form.fields.gender"}},[s("el-radio-button",{attrs:{label:"男"}}),s("el-radio-button",{attrs:{label:"女"}})],1)],1)],1)],1),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{prop:"education",label:"学历"}},[s("el-select",{attrs:{placeholder:"选择学历"},model:{value:e.form.fields.education,callback:function(t){e.$set(e.form.fields,"education",t)},expression:"form.fields.education"}},e._l(e.edus,function(e){return s("el-option",{key:e,attrs:{label:e,value:e}})}),1)],1)],1)],1),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{prop:"birthday",label:"出生日期"}},[s("el-date-picker",{attrs:{type:"date",placeholder:"选择出生日期","value-format":"yyyy-MM-dd",clearable:!1},model:{value:e.form.fields.birthday,callback:function(t){e.$set(e.form.fields,"birthday",t)},expression:"form.fields.birthday"}})],1)],1),s("el-col",{attrs:{span:11}},[s("el-form-item",{attrs:{prop:"id",label:"身份证"}},[s("span",{directives:[{name:"show",rawName:"v-show",value:e.form.fields.guid,expression:"form.fields.guid"}]},[e._v(e._s(e.form.fields.id))]),s("el-input",{directives:[{name:"show",rawName:"v-show",value:!e.form.fields.guid,expression:"!form.fields.guid"}],model:{value:e.form.fields.id,callback:function(t){e.$set(e.form.fields,"id",t)},expression:"form.fields.id"}})],1)],1)],1),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:23}},[s("el-form-item",{attrs:{prop:"county",label:"区域"}},[s("el-input",{model:{value:e.form.fields.county,callback:function(t){e.$set(e.form.fields,"county","string"===typeof t?t.trim():t)},expression:"form.fields.county"}})],1)],1)],1),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{prop:"zip",label:"邮编"}},[s("el-input",{model:{value:e.form.fields.zip,callback:function(t){e.$set(e.form.fields,"zip","string"===typeof t?t.trim():t)},expression:"form.fields.zip"}})],1)],1),s("el-col",{attrs:{span:11}},[s("el-form-item",{attrs:{prop:"email",label:"Email"}},[s("el-input",{model:{value:e.form.fields.email,callback:function(t){e.$set(e.form.fields,"email","string"===typeof t?t.trim():t)},expression:"form.fields.email"}})],1)],1)],1),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{prop:"income",label:"收入"}},[s("el-input",{model:{value:e.form.fields.income,callback:function(t){e.$set(e.form.fields,"income",e._n(t))},expression:"form.fields.income"}})],1)],1),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{prop:"status",label:"状态"}},[s("el-select",{attrs:{placeholder:"状态"},model:{value:e.form.fields.status,callback:function(t){e.$set(e.form.fields,"status",t)},expression:"form.fields.status"}},e._l(e.sts,function(e){return s("el-option",{key:e,attrs:{label:e,value:e}})}),1)],1)],1)],1),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:23}},[s("el-form-item",{attrs:{prop:"remark",label:"备注"}},[s("el-input",{model:{value:e.form.fields.remark,callback:function(t){e.$set(e.form.fields,"remark","string"===typeof t?t.trim():t)},expression:"form.fields.remark"}})],1)],1)],1)],1),s("span",{attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:e.handleClose}},[e._v("取消")]),s("el-button",{attrs:{type:"primary",loading:e.saveBusy},on:{click:e.handleSave}},[e._v("保存")])],1)],1)},l=[],a=(s("96cf"),s("3b8d")),r=s("5176"),o=s.n(r),n=(s("7f7f"),s("cebc")),f=s("4d5a"),d=s("308c"),c=s("2f62"),m=Object(c["a"])("complexTable"),u=m.mapState,p=m.mapMutations,b=m.mapGetters,h={guid:"",id:"",name:"",gender:"女",county:"",email:"",zip:"",income:0,remark:"",education:"",status:"",birthday:""},v={data:function(){var e=this;return{saveBusy:!1,edus:["专科","本科","硕士研究生","博士研究生","其他"],sts:["在职","待业","退休","创业","游学"],form:{fields:e.createFields(),rules:Object(n["a"])({},d["b"].check({key:"name",message:"姓名为长度在2-10之间的非空字符",min:2,max:10}),d["b"].check({key:"education",message:"请选择学历"}),d["b"].check({key:"status",message:"请选择状态"}),d["b"].check({key:"birthday",message:"请选择出生日期"}),d["b"].check({key:"email",message:"请输入正确的email",type:"email"}),d["b"].check({key:"zip",message:"请输入正确的邮编",type:"string",len:6}))}}},watch:{editVisible:function(e){e&&this.update()}},computed:Object(n["a"])({},u(["editVisible","activeIndex"]),b(["activeRow"]),{title:function(){return"".concat(this.form.fields.name," 个人信息")}}),methods:Object(n["a"])({},p(["setState","listUpdate","listInsert"]),{createFields:function(){return o()({},h)},handleClose:function(){return!this.saveBusy&&this.setState({editVisible:!1}),!this.saveBusy},update:function(){var e=this;this.activeRow.guid?this.form.fields=Object(n["a"])({},this.activeRow):this.form.fields=this.createFields(),this.$nextTick(function(){return e.$refs.form.clearValidate()})},handleSave:function(){var e=this;this.$refs.form.validate(function(t){t&&e.save()})},save:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t,s,i=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.saveBusy=!0,!this.form.fields.guid){e.next=8;break}return e.next=4,f["a"].update(this.form.fields);case 4:t=e.sent,t&&this.listUpdate({item:this.form.fields}),e.next=12;break;case 8:return e.next=10,f["a"].insert(this.form.fields);case 10:s=e.sent,s&&(this.form.fields.guid=s.guid,this.listInsert({item:this.form.fields}));case 12:this.$nextTick(function(){i.saveBusy=!1,i.handleClose()});case 13:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()})},k=v,y=s("2877"),g=Object(y["a"])(k,i,l,!1,null,null,null);t["default"]=g.exports}}]);