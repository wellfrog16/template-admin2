(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ba736"],{"36eb":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-wrapper"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.handleDriver(t)}}},[e._v("开始引导")])],1)},i=[],r=n("2c38"),p={methods:{handleDriver:function(){var e=new r["d"]({allowClose:!1,doneBtnText:"完成",closeBtnText:"关闭",nextBtnText:"下一个",prevBtnText:"上一个"});e.defineSteps([{element:".aside-menu",popover:{title:"导航菜单",description:"这里是所有的页面菜单",position:"right-center"}},{element:"#asideToggle",popover:{title:"导航菜单大小控制",description:"点击来改变导航菜单的大小",position:"bottom-left"}},{element:"#breadcrumb",popover:{title:"面包屑导航",description:"标示出当前页面的分类位置",position:"bottom-left"}},{element:"#functions",popover:{title:"功能模块",description:"一些小功能存放区域",position:"bottom-right"}},{element:"#elMain",popover:{title:"主体展示区域",description:"具体的功能会在这里进行展示",position:"mid-center"}}]),e.start()}}},l=p,s=n("2877"),a=Object(s["a"])(l,o,i,!1,null,null,null);t["default"]=a.exports}}]);