(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-050c0dd1"],{"0e58":function(e,t,i){"use strict";var a=i("7f40"),n=i.n(a);t["default"]=n.a},"197b":function(e,t,i){e.exports={location:"index_location_2xC8v"}},2008:function(e,t,i){e.exports={windows:"index_windows_FcOWq",alert:"index_alert_h1205",placeholder:"index_placeholder_19veO",upload:"index_upload_31RhV","placeholder-opacity":"index_placeholder-opacity_20r8y","button-select":"index_button-select_2VNnM"}},"386d":function(e,t,i){"use strict";var a=i("cb7c"),n=i("83a1"),s=i("5f1b");i("214f")("search",1,function(e,t,i,o){return[function(i){var a=e(this),n=void 0==i?void 0:i[t];return void 0!==n?n.call(i,a):new RegExp(i)[t](String(a))},function(e){var t=o(i,e,this);if(t.done)return t.value;var l=a(e),r=String(this),c=l.lastIndex;n(c,0)||(l.lastIndex=0);var d=s(l,r);return n(l.lastIndex,c)||(l.lastIndex=c),null===d?-1:d.index}]})},"469f":function(e,t,i){i("6c1c"),i("1654"),e.exports=i("7d7b")},"5d73":function(e,t,i){e.exports=i("469f")},"73c3":function(e,t,i){"use strict";var a=i("197b"),n=i.n(a);t["default"]=n.a},"7d7b":function(e,t,i){var a=i("e4ae"),n=i("7cd6");e.exports=i("584a").getIterator=function(e){var t=n(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return a(t.call(e))}},"7dba":function(e,t,i){"use strict";var a=i("2008"),n=i.n(a);t["default"]=n.a},"7f40":function(e,t,i){e.exports={main:"index_main_2gswx",container:"index_container_23lPQ",search:"index_search_GKqnI"}},"83a1":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},8760:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"main-wrapper"},[i("el-row",{attrs:{gutter:20}},[i("x-camera-upload"),i("x-map-point")],1)],1)},n=[],s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("x-col",{attrs:{title:"拍照上传",icon:"fas fa-camera fa-lg fa-fw"}},[i("el-alert",{attrs:{title:"用于拍照上传或者上传图片",type:"info",closable:!1}}),i("el-divider",[i("i",{staticClass:"fas fa-camera fa-lg fa-fw"})]),i("el-button",{attrs:{type:"primary"},on:{click:e.handleOpen}},[e._v("人像上传")]),i("camera-upload",{attrs:{visible:e.cameraUploadVisible,onSubmit:e.handleSubmit,upload:!1,"http-request":e.httpRequest},on:{"update:visible":function(t){e.cameraUploadVisible=t}}})],1)},o=[],l=i("fe27"),r=i("a97b"),c=Object(l["a"])({baseURL:"http://127.0.0.1:8001/service/file/upload"}),d=function(e){var t=e;e instanceof FormData||(t=new FormData,t.append(r["g"],e));var i={headers:{"Content-Type":"multipart/form-data"}};return c.post("",t,i).then(function(e){return e.data})},u=d,h=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-col",{attrs:{span:12}},[i("el-card",{class:e.$style.card,attrs:{shadow:"hover"}},[i("div",{class:e.$style.header,attrs:{slot:"header"},slot:"header"},[i("i",{class:e.icon}),i("span",[e._v(e._s(e.title))])]),e._t("default")],2)],1)},p=[],f={props:{icon:String,title:String}},v=f,b=i("9f29"),m=i("2877");function w(e){this["$style"]=b["default"].locals||b["default"]}var g=Object(m["a"])(v,h,p,!1,w,null,null),y=g.exports,x=function(){var e,t=this,i=t.$createElement,a=t._self._c||i;return a("div",[a("el-dialog",{staticClass:"or-dialog-wrapper",attrs:{title:t.title,visible:t.visible,"before-close":t.handleClose,"close-on-click-modal":!1,"append-to-body":!0,"custom-class":"or-dialog",width:t.dialogWidth,top:"0"},on:{"update:visible":function(e){t.visible=e}}},[a("el-card",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],class:t.$style.windows,style:t.windowStyle},[a("el-image",{directives:[{name:"show",rawName:"v-show",value:t.imageVisible,expression:"imageVisible"}],attrs:{src:t.fixedImageUrl,fit:"contain"}}),a("video",{directives:[{name:"show",rawName:"v-show",value:t.videoVisible,expression:"videoVisible"}],attrs:{width:t.width,height:t.height}}),a("canvas",{directives:[{name:"show",rawName:"v-show",value:t.canvasVisible,expression:"canvasVisible"}],attrs:{width:t.width,height:t.height}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.alertVisible,expression:"alertVisible"}],class:t.$style.alert},[a("transition",{attrs:{name:"el-fade-in-linear"}},[a("el-alert",{directives:[{name:"show",rawName:"v-show",value:t.alertSuccessVisible,expression:"alertSuccessVisible"}],attrs:{title:"提示",type:"success",center:"","show-icon":"",closable:!1,description:t.description}})],1),a("transition",{attrs:{name:"el-fade-in-linear"}},[a("el-alert",{directives:[{name:"show",rawName:"v-show",value:t.alertErrorVisible,expression:"alertErrorVisible"}],attrs:{title:"提示",type:"error",center:"","show-icon":"",closable:!1,description:t.description}})],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.placeholderVisible,expression:"placeholderVisible"}],class:[(e={},e[t.$style["placeholder-opacity"]]=t.placeholderOpacity,e),t.$style.placeholder]},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"},{name:"show",rawName:"v-show",value:t.cameraVisible,expression:"cameraVisible"}],staticClass:"flex-center",attrs:{disabled:t.loading},on:{click:t.handleOpenCamera}},[a("i",{staticClass:"fas fa-camera fa-5x"})]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.uploadVisible,expression:"uploadVisible"}],staticClass:"flex-center"},[a("el-upload",{ref:"upload",staticClass:"fullsize",class:t.$style.upload,attrs:{action:"",accept:".jpg,.png,.jpeg","on-change":t.handleUploadChange,"on-success":t.handleUploadSuccess,"on-error":t.handleUploadError,"file-list":t.fileList,"show-file-list":!1,"auto-upload":!1,"http-request":t.customUpload}},[a("div",{staticClass:"flex-center abs-fullsize",attrs:{slot:"trigger"},slot:"trigger"},[a("i",{staticClass:"fas fa-upload fa-5x"})])])],1)])],1),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{directives:[{name:"show",rawName:"v-show",value:t.cancelVisible,expression:"cancelVisible"}],attrs:{loading:t.loading,disabled:t.loading},on:{click:t.handleClose}},[t._v("取消")]),a("el-button",{directives:[{name:"show",rawName:"v-show",value:t.saveVisible,expression:"saveVisible"}],attrs:{loading:t.loading,disabled:t.loading,type:"primary"},on:{click:t.handleSave}},[t._v(t._s(t.submitText))]),a("el-button",{directives:[{name:"show",rawName:"v-show",value:t.backVisible,expression:"backVisible"}],attrs:{loading:t.loading,disabled:t.loading},on:{click:t.handleBack}},[t._v("返回")]),a("el-button",{directives:[{name:"show",rawName:"v-show",value:t.videoVisible,expression:"videoVisible"}],attrs:{loading:t.loading,disabled:t.loading,type:"primary"},on:{click:t.handleShoot}},[t._v("拍摄")])],1)],1)],1)},k=[],S=i("a745"),C=i.n(S);function V(e){if(C()(e))return e}var _=i("5d73"),U=i.n(_);function W(e,t){var i=[],a=!0,n=!1,s=void 0;try{for(var o,l=U()(e);!(a=(o=l.next()).done);a=!0)if(i.push(o.value),t&&i.length===t)break}catch(r){n=!0,s=r}finally{try{a||null==l["return"]||l["return"]()}finally{if(n)throw s}}return i}function O(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function $(e,t){return V(e)||W(e,t)||O()}i("6762"),i("2fdb"),i("c5f6");var E=i("d225"),M=i("b0b4");i("7f7f");function N(e,t){var i=e.video;i&&(i.srcObject=t,i.play(),e.successCallback&&e.successCallback(i))}function j(e,t){throw e.successCallback&&e.successCallback(t),new Error("访问用户媒体设备失败".concat(t.name,", ").concat(t.message))}var I=function(){function e(t,i){Object(E["a"])(this,e);var a=Object.assign({width:480,height:320,successCallback:function(){},errorCallback:function(){}},i);this.video=t,this.constraints={video:{width:a.width,height:a.height}},this.canvas=a.canvas,this.successCallback=a.successCallback,this.errorCallback=a.errorCallback}return Object(M["a"])(e,[{key:"getUserMedia",value:function(e,t){var i=this.constraints;navigator.mediaDevices.getUserMedia?navigator.mediaDevices.getUserMedia(i).then(e).catch(t):navigator.webkitGetUserMedia?navigator.webkitGetUserMedia(i,e,t):navigator.mozGetUserMedia?navigator.mozGetUserMedia(i,e,t):navigator.getUserMedia&&navigator.getUserMedia(i,e,t)}},{key:"start",value:function(){var e=this;if(!this.constructor.isSupport())throw new Error("不支持访问用户媒体");this.getUserMedia(function(t){N(e,t)},function(t){j(e,t)})}},{key:"stop",value:function(){var e=this.video;e.pause(),e.srcObject&&(e.srcObject.getVideoTracks()[0].stop(),e.srcObject=null)}},{key:"shoot",value:function(){var e=this.canvas,t=this.video,i=this.constraints,a=i.video,n=a.width,s=a.height,o=e.getContext("2d");o.drawImage(t,0,0,n,s)}}],[{key:"isSupport",value:function(){return!!(navigator.mediaDevices.getUserMedia||navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia)}}]),e}(),F=I,q="upload",L="camera",P="image",B="vidoe",R="canvas",T="placeholder",D="照片拍摄成功",G="打开摄像头失败",A={props:{name:{type:String,default:"avatar"},visible:{type:Boolean,default:!1},title:{type:String,default:"拍照上传"},type:{type:Array,default:function(){return[q,L]}},width:{type:Number,default:480},height:{type:Number,default:320},upload:{type:Boolean,default:!0},onSuccess:{type:Function},onError:{type:Function},onSubmit:{type:Function},submitText:{type:String,default:"保存"},src:{type:String},httpRequest:{type:Function},beforeUpload:{type:Function,default:function(){return!0}}},data:function(){return{loading:!1,currentWindow:"",lastWindow:T,imageUrl:"",currentFile:null,fileList:[],camera:null,isShooted:!1,alertVisible:!1,alertSuccessVisible:!1,alertErrorVisible:!1,canvas:null,description:""}},computed:{dialogWidth:function(){var e=40,t=2;return"".concat(this.width+e+t,"px")},windowStyle:function(){return{width:"".concat(this.width,"px"),height:"".concat(this.height,"px")}},cameraVisible:function(){return this.type.includes(L)},uploadVisible:function(){return this.type.includes(q)},imageVisible:function(){return this.currentWindow===P},videoVisible:function(){return this.currentWindow===B},canvasVisible:function(){return this.currentWindow===R},placeholderOpacity:function(){return this.currentWindow===T},placeholderVisible:function(){return this.currentWindow===T||this.imageVisible||this.canvasVisible},backVisible:function(){return this.videoVisible},saveVisible:function(){var e=this.isImageSelected||this.isShooted,t=[R,P].includes(this.currentWindow);return e&&t},cancelVisible:function(){return!this.videoVisible},fixedImageUrl:function(){return this.imageUrl||this.src||""},isImageSelected:function(){return""!==this.imageUrl},uploadDisabled:function(){return this.loading||this.currentWindow===B}},watch:{visible:function(e){e&&this.initWindow()}},methods:{initWindow:function(){this.currentWindow="",this.isShooted=!1,this.imageUrl="",this.fileList=[],this.lastWindow=T,this.toggleWindow(T),this.src&&(this.lastWindow=P,this.toggleWindow(P))},handleClose:function(){this.loading||(this.closeCamera(),this.$emit("update:visible",!1))},handleSave:function(){var e=this;this.isImageSelected&&this.lastWindow===P&&(this.upload&&this.uploadImage(),!this.upload&&this.onSubmit(this.currentFile)),this.isShooted&&this.lastWindow===R&&(this.upload&&this.canvas.toBlob(function(t){return e.uploadShoot(t)}),!this.upload&&this.canvas.toBlob(function(t){return e.onSubmit(t)}))},handleOpenCamera:function(){var e=this;if(!this.videoVisible){if(this.loading=!0,this.toggleWindow(B),!this.camera){var t=document.querySelector(".".concat(this.$style.windows)),i=t.querySelector("video"),a=t.querySelector("canvas");this.canvas=a;var n={canvas:a,width:this.width,height:this.height,successCallback:function(){e.loading=!1}};this.camera=new F(i,n)}try{this.camera.start()}catch(s){this.description=G,this.showAlert("Error")}}},closeCamera:function(){this.camera&&this.camera.stop()},handleShoot:function(){this.camera.shoot(),this.closeCamera(),this.isShooted=!0,this.toggleWindow(R),this.lastWindow=R,this.description=D,this.showAlert("Success")},handleBack:function(){this.closeCamera(),this.showLastWindow(),this.currentWindow===B&&this.closeCamera()},submitUpload:function(){this.$refs.upload.submit()},showLastWindow:function(){this.toggleWindow(this.lastWindow)},toggleWindow:function(e){this.currentWindow=e},handleUploadChange:function(e,t){this.toggleWindow(P),this.lastWindow=P,e.response||this.preview(e,t)},preview:function(e,t){var i=this;t.length>1&&t.splice(0,1);var a=window,n=a.event,s=$(n.target.files,1);this.currentFile=s[0];var o=new FileReader;o.onload=function(e){i.imageUrl=e.target.result},o.readAsDataURL(this.currentFile)},showAlert:function(e){var t=this;this.alertVisible=!0,this["alert".concat(e,"Visible")]=!0,setTimeout(function(){t["alert".concat(e,"Visible")]=!1},1500)},uploadImage:function(){this.$refs.upload.submit()},uploadShoot:function(e){this.myUpload(e)},customUpload:function(e){this.myUpload(e.file)},myUpload:function(e){var t=this,i=this.beforeUpload(e);!0===i&&(this.loading=!0,this.httpRequest(e).then(function(i){return t.handleUploadSuccess(i,e)}).catch(function(i){return t.handleUploadError(i,e)}))},handleUploadSuccess:function(e,t){this.loading=!1,this.onSuccess&&this.onSuccess(e,t),this.handleClose()},handleUploadError:function(e,t){this.loading=!1,this.onError&&this.onError(e,t)}}},z=A,X=i("7dba");function Z(e){this["$style"]=X["default"].locals||X["default"]}var J=Object(m["a"])(z,x,k,!1,Z,null,null),H=J.exports,K={components:{XCol:y,CameraUpload:H},data:function(){return{httpRequest:u,cameraUploadVisible:!1}},methods:{handleOpen:function(){this.cameraUploadVisible=!0},handleSubmit:function(e){var t=new FormData;u(t)}}},Q=K,Y=Object(m["a"])(Q,s,o,!1,null,null,null),ee=Y.exports,te=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("x-col",{attrs:{title:"地图选点",icon:"el-icon-location"}},[i("el-alert",{attrs:{title:"百度地图选点返回坐标",type:"info",closable:!1}}),i("el-divider",[i("i",{staticClass:"el-icon-location"})]),i("el-button",{attrs:{type:"primary"},on:{click:e.handleOpen}},[e._v("选择地点")]),i("map-point",{attrs:{visible:e.visible},on:{"update:visible":function(t){e.visible=t}},model:{value:e.myPoint,callback:function(t){e.myPoint=t},expression:"myPoint"}}),i("p",{class:e.$style.location},[i("el-alert",{attrs:{type:"info",closable:!1}},[e._v("\n            经度："+e._s(e.myPoint.lng||"-")+"\n            "),i("br"),e._v("维度："+e._s(e.myPoint.lat||"-")+"\n        ")])],1)],1)},ie=[],ae=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{class:[e.$style.main,"or-dialog-wrapper"],attrs:{title:"选择地点",visible:e.visible,width:e.dialogWidth,"custom-class":"or-dialog","append-to-body":"","close-on-click-modal":!1,"before-close":e.handleBeforeClose,top:"0"},on:{"update:visible":function(t){e.visible=t}}},[i("div",{class:e.$style.container,style:e.containerStyle}),i("div",{class:e.$style.search},[i("el-input",{attrs:{placeholder:"请输入查询地址",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSearch(t)}},model:{value:e.key,callback:function(t){e.key=t},expression:"key"}},[i("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.handleSearch},slot:"append"})],1)],1),i("span",{attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:e.handleClose}},[e._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v("确 定")])],1)])},ne=[],se=(i("386d"),i("2c38")),oe={props:{value:{type:Object,default:function(){return{lng:null,lat:null}}},city:{type:String,default:"上海"},visible:{type:Boolean,default:!1}},data:function(){return{point:"",key:"",local:null,map:null}},computed:{dialogWidth:function(){var e=parseInt(.8*document.body.clientWidth,0),t=1e3;return"".concat(e>t?t:e,"px")},containerStyle:function(){var e=parseInt(.8*document.body.clientHeight,0),t=600;return e="".concat(e>t?t:e,"px"),{height:e}}},watch:{visible:function(e){var t=this;e&&this.$nextTick(function(){return t.init()}),!e&&this.destroy()}},methods:{init:function(){var e=this;this.map=new se["b"].Map(document.querySelector(".".concat(this.$style.container)),{enableMapClick:!1});var t=this.map,i=null;if(null!==this.value.lng){var a=new se["b"].Point(this.value.lng,this.value.lat);i=new se["b"].Marker(a),t.addOverlay(i),t.centerAndZoom(a,14)}else t.centerAndZoom(this.city,14);t.enableScrollWheelZoom(),t.addControl(new se["b"].NavigationControl),setTimeout(function(){t.addControl(new se["b"].ScaleControl)},1e3),this.local=new se["b"].LocalSearch(t,{renderOptions:{map:t}});var n=new se["b"].Geocoder;t.addEventListener("click",function(a){e.point=a.point,n.getLocation(e.point,function(){i&&t.removeOverlay(i),i=new se["b"].Marker(e.point),t.addOverlay(i)})})},destroy:function(){this.map=null},handleSearch:function(){this.local.search(this.key)},handleClose:function(){this.$emit("update:visible",!1),this.$emit("on-close")},handleBeforeClose:function(){this.handleClose()},handleSubmit:function(){this.$emit("input",this.point),this.handleClose()}}},le=oe,re=i("0e58");function ce(e){this["$style"]=re["default"].locals||re["default"]}var de=Object(m["a"])(le,ae,ne,!1,ce,null,null),ue=de.exports,he={components:{XCol:y,MapPoint:ue},data:function(){return{myPoint:{lng:null,lat:null},visible:!1}},methods:{handleOpen:function(){this.visible=!0}}},pe=he,fe=i("73c3");function ve(e){this["$style"]=fe["default"].locals||fe["default"]}var be=Object(m["a"])(pe,te,ie,!1,ve,null,null),me=be.exports,we={components:{XCameraUpload:ee,XMapPoint:me}},ge=we,ye=Object(m["a"])(ge,a,n,!1,null,null,null);t["default"]=ye.exports},"9f29":function(e,t,i){"use strict";var a=i("f3f8"),n=i.n(a);t["default"]=n.a},f3f8:function(e,t,i){e.exports={card:"col_card_2hS7O",header:"col_header_1L5nN"}}}]);