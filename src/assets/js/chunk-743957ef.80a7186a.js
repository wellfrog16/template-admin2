(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-743957ef"],{"116e":function(e,t,n){e.exports={checkbox:"search_checkbox_3BOV5"}},"2c60":function(e,t,n){"use strict";var r=n("116e"),a=n.n(r);t["default"]=a.a},ae60:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"container-complex-table main-wrapper"},[n("x-search"),n("x-table"),n("x-pagination")],1)},a=[],i=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),o=n("2f62"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search"},[n("el-form",{ref:"form",attrs:{inline:!0,model:e.form.fields,rules:e.form.rules},nativeOn:{submit:function(e){e.preventDefault()}}},[n("el-form-item",[n("el-input",{attrs:{placeholder:"请输入查询内容","prefix-icon":"el-icon-search",autocomplete:"on",maxlength:"20",clearable:""},on:{clear:e.handleSearch},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSearch(t)}},model:{value:e.form.fields.q,callback:function(t){e.$set(e.form.fields,"q",t)},expression:"form.fields.q"}})],1),n("el-form-item",[n("el-select",{staticStyle:{width:"120px"},attrs:{clearable:"",placeholder:"所有学历"},on:{clear:e.handleSearch},model:{value:e.form.fields.education,callback:function(t){e.$set(e.form.fields,"education",t)},expression:"form.fields.education"}},e._l(e.edus,function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})}),1)],1),n("el-form-item",[n("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleSearch}},[e._v("查询")])],1)],1),n("div",[n("el-button",{attrs:{type:"primary",icon:"el-icon-refresh"},on:{click:e.handleRefresh}},[e._v("刷新")]),n("el-button",{attrs:{type:"primary",icon:"button-fix-icon fas fa-file-export fa-sm"},on:{click:e.handleDownload}},[e._v("导出")])],1)],1)},s=[],l=n("75fc"),u=(n("96cf"),n("3b8d")),f=n("4d5a"),p=n("f121"),d=n("a97b"),h=n("0e9a");function m(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach(function(t){Object(i["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var y=Object(o["a"])("lazyTable"),O=y.mapState,v=y.mapMutations,w={data:function(){return{edus:["专科","本科","硕士研究生","博士研究生","其他"],form:{fields:{q:"",education:""},rules:{}}}},computed:b({},O(["list","filters","infiniteState","isLoadMore"])),watch:{isLoadMore:function(e){e&&this.loadList()}},mounted:function(){this.init()},methods:b({},v(["setState"]),{init:function(){var e=b({},this.filters);delete e[d["a"]],delete e[d["b"]],this.form.fields=Object.assign(this.form.fields,e)},handleSearch:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.checkParams();case 2:if(!e.sent){e.next=5;break}this.setState({list:[]}),this.infiniteState.reset();case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),handleRefresh:function(){this.setState({list:[],filters:b({},p["a"].page)}),this.infiniteState.reset()},checkParams:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$refs.form.validate();case 2:return t=e.sent,t&&this.setState({filters:b({},this.form.fields,Object(i["a"])({},d["a"],1))}),e.abrupt("return",t);case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),loadList:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){var t,n,r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f["a"].list(this.filters);case 2:t=e.sent,t&&(n=Object(l["a"])(this.list),t.list.length>0&&(n=[].concat(Object(l["a"])(this.list),Object(l["a"])(t.list)),this.setState({filters:Object(i["a"])({},d["a"],+this.filters[d["a"]]+1)})),this.setState({list:n,total:t.total,isLoadMore:!1}),this.$nextTick(function(){t.list.length>0?r.infiniteState.loaded():r.infiniteState.complete()}));case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),handleCreate:function(){this.setState({activeUid:0,editVisible:!0})},handleDownload:function(){h["a"].export2excel({data:this.list,headerProp:["name","income","education","status","remark"],headerName:["姓名","收入","学历","状态","备注"],name:"导出.xlsx"})}})},g=w,S=n("2c60"),j=n("2877");function k(e){this["$style"]=S["default"].locals||S["default"]}var x=Object(j["a"])(g,c,s,!1,k,null,null),P=x.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-table",{ref:"table",staticClass:"table",attrs:{height:"500",border:"",stripe:"",data:e.list},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"60",align:"center"}}),n("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.name))]),n("i",{staticClass:"fas fa-lg fa-fw",class:e._f("genderFilter")(t.row.gender)})]}}])}),n("el-table-column",{attrs:{prop:"income",label:"收入",width:"150",align:"right",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(e._f("currency")(t.row.income,"￥",2))+"\n        ")]}}])}),n("el-table-column",{attrs:{prop:"education",label:"学历",width:"150",align:"center"}}),n("el-table-column",{attrs:{prop:"status",label:"状态",width:"80",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tag",{attrs:{type:e._f("statusFilter")(t.row.status)}},[e._v(e._s(t.row.status))])]}}])}),n("el-table-column",{attrs:{prop:"remark",label:"备注","show-overflow-tooltip":"","min-width":"300"}}),n("el-table-column",{attrs:{label:"操作",width:"64"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"warning",size:"mini",icon:"el-icon-delete"},on:{click:function(n){return e.handleDelete(t.row)}}})]}}])}),n("infinite-loading",{attrs:{slot:"append","force-use-infinite-wrapper":".el-table__body-wrapper"},on:{infinite:e.infiniteHandler},slot:"append"})],1)},D=[],R=(n("7514"),n("dbcd")),$=n.n(R);function T(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(n,!0).forEach(function(t){Object(i["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var E=Object(o["a"])("lazyTable"),U=E.mapState,M=E.mapMutations,B={filters:{statusFilter:function(e){var t=[{key:"在职",value:"info"},{key:"待业",value:"danger"},{key:"退休",value:""},{key:"创业",value:"success"},{key:"游学",value:"warning"}],n=t.find(function(t){return t.key===e});return n?n.value:""},genderFilter:function(e){return"男"===e?["fa-male",$.a["c-male"]]:["fa-female",$.a["c-female"]]}},data:function(){return{style:$.a}},computed:C({},U(["list","colums"])),mounted:function(){this.setState({components:{table:this.$refs.table}})},methods:C({},M(["setState","listRemove"]),{infiniteHandler:function(e){this.setState({infiniteState:e,isLoadMore:!0})},handleDelete:function(e,t){var n=this;this.$confirm("确认要删除这条数据吗","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){n.remove(e,t)}).catch(function(){})},remove:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t){var n,r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.setState({activeUid:t.id,loading:!0}),e.next=3,f["a"].remove({id:t.id});case 3:n=e.sent,n&&this.listRemove({multipleSelection:[t]}),this.$nextTick(function(){return r.setState({loading:!1})});case 6:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),handleSelectionChange:function(e){this.setState({multipleSelection:e})}})},L=B,q=Object(j["a"])(L,_,D,!1,null,null,null),z=q.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pagination flex-row-center"},[n("el-dropdown",{attrs:{"split-button":"",type:"primary"},on:{click:e.handleClick,command:e.handleCommand}},[n("i",{staticClass:"el-icon-delete"}),e._v(" 删除选中\n        "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"a"}},[e._v("转为退休")]),n("el-dropdown-item",{attrs:{command:"b"}},[e._v("转为创业")])],1)],1)],1)},X=[];function H(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(n,!0).forEach(function(t){Object(i["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var N=Object(o["a"])("lazyTable"),V=N.mapState,G=N.mapMutations,A=N.mapGetters,I={computed:J({},V(["components","multipleSelection"]),{},A(["multipleSelectionUid"])),methods:J({},G(["setState","listRemove","listUpdateStatus"]),{handleClick:function(){var e=this;this.multipleSelectionUid&&this.$confirm("确认要删除这些数据吗","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.batchRemove()}).catch(function(){})},batchRemove:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){var t,n=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,f["a"].remove({id:this.multipleSelectionUid});case 3:t=e.sent,t&&this.listRemove({multipleSelection:this.multipleSelection}),this.$nextTick(function(){return n.setState({loading:!1})});case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),handleCommand:function(e){var t=this,n={a:function(){t.changeStatus("退休")},b:function(){t.changeStatus("创业")}};this.multipleSelectionUid&&this.$confirm("确认要批量修改这些数据吗","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){n[e]()}).catch(function(){})},changeStatus:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t){var n,r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,f["a"].updateStatus({status:t});case 3:n=e.sent,n&&this.listUpdateStatus({status:t}),this.components.table.clearSelection(),this.$nextTick(function(){return r.setState({loading:!1})});case 7:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()})},K=I,Q=Object(j["a"])(K,F,X,!1,null,null,null),W=Q.exports;function Y(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(n,!0).forEach(function(t){Object(i["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var ee=Object(o["a"])("lazyTable"),te=ee.mapState,ne=ee.mapMutations,re={components:{XSearch:P,XTable:z,XPagination:W},computed:Z({},te(["loading"])),mounted:function(){},beforeRouteUpdate:function(e,t,n){this.setState({filters:e.query}),n()},methods:Z({},ne(["setState"]))},ae=re,ie=Object(j["a"])(ae,r,a,!1,null,null,null);t["default"]=ie.exports}}]);