(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ba29c308"],{"6d75":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page",style:t.background},[s("div",{staticClass:"Common page-width content"},[1==t.ok?s("div",{staticClass:"reg-page"},[s("div",{staticClass:"title row"},[t._v("感谢你的注册")]),s("div",{staticClass:"info"},[t._v("验证邮件已经在发送到你邮箱的路上 完成邮箱认证后即可登录")])]):t._e(),0==t.ok?s("div",{staticClass:"reg-page"},[s("div",{staticClass:"title row"},[t._v("注册账户")]),s("el-input",{staticClass:"row",attrs:{placeholder:"请输入你的邮箱 例如xxx@xxx.com"},model:{value:t.input_email,callback:function(e){t.input_email=e},expression:"input_email"}},[s("template",{slot:"prepend"},[t._v("邮箱")])],2),s("el-input",{staticClass:"row",attrs:{placeholder:"请输入内容"},model:{value:t.input_username,callback:function(e){t.input_username=e},expression:"input_username"}},[s("template",{slot:"prepend"},[t._v("用户名")])],2),s("el-input",{staticClass:"row",attrs:{placeholder:"登陆密码","show-password":""},model:{value:t.input_password,callback:function(e){t.input_password=e},expression:"input_password"}},[s("template",{slot:"prepend"},[t._v("密码")])],2),s("el-input",{staticClass:"row",attrs:{placeholder:"重复输入一次登录密码","show-password":""},model:{value:t.input_repassword,callback:function(e){t.input_repassword=e},expression:"input_repassword"}},[s("template",{staticStyle:{width:"100px"},slot:"prepend"},[t._v("再输入一次密码")])],2),s("div",{staticClass:"bytton",on:{click:function(e){return t.SendRegister()}}},[t._v("立即注册")])],1):t._e()])])},i=[],n={name:"register",data:function(){return{ok:!1,input_email:"",input_password:"",input_repassword:"",input_username:"",background:"background-image: url(http://127.0.0.1:8888/static/com/image/register-background.jpg);"}},methods:{SendRegister:function(){var t=this;this.$http.authRegister(this.input_email,this.input_password,this.input_repassword,this.input_username).then((function(e){200==e.code&&(t.ok=!0)})).catch((function(t){console.log("error",t)}))}},created:function(){var t=this.$authUser.getUser();t&&this.$router.push({name:"home"})}},r=n,o=(s("a6da"),s("2877")),p=Object(o["a"])(r,a,i,!1,null,"5ab2ff6c",null);e["default"]=p.exports},a6da:function(t,e,s){"use strict";var a=s("aef3"),i=s.n(a);i.a},aef3:function(t,e,s){}}]);
//# sourceMappingURL=chunk-ba29c308.2f9a05ec.js.map