(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f0ec4f5"],{bd01:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[!0===t.ok?a("div",{staticClass:"loginok"},[a("div",{staticClass:"Common page-width"},[t._v("登录成功 正在为你跳转到首页")])]):t._e(),a("div",{staticClass:"page",style:t.background},[a("div",{staticClass:"Common page-width content"},[a("div",{staticClass:"reg-page"},[a("div",{staticClass:"title row"},[t._v("登录你的账户")]),a("el-input",{staticClass:"row",attrs:{placeholder:"请输入你的邮箱 例如xxx@xxx.com"},model:{value:t.input_email,callback:function(e){t.input_email=e},expression:"input_email"}},[a("template",{slot:"prepend"},[t._v("邮箱")])],2),a("el-input",{staticClass:"row",attrs:{placeholder:"登陆密码","show-password":""},model:{value:t.input_password,callback:function(e){t.input_password=e},expression:"input_password"}},[a("template",{slot:"prepend"},[t._v("密码")])],2),a("div",{staticClass:"bytton",on:{click:function(e){return t.SendRegister()}}},[t._v("立即登录")])],1)])])])},i=[],n={name:"login",data:function(){return{ok:!1,input_email:"",input_password:"",background:"background-image: url(https://illya-support.weivird.com/static/com/image/login-background.jpg);"}},methods:{SendRegister:function(){var t=this;this.$http.authLogin(this.input_email,this.input_password).then((function(e){200==e.code&&(t.ok=!0,t.$authUser.setUser(e.data.token,e.data.id,e.data.username,e.data.head),setTimeout((function(){t.$router.push({name:"home"})}),3e3))})).catch((function(t){console.log("error",t)}))}},created:function(){var t=this.$authUser.getUser();t&&this.$router.push({name:"home"})}},o=n,c=(a("ffb9"),a("2877")),r=Object(c["a"])(o,s,i,!1,null,"22c93043",null);e["default"]=r.exports},dc07:function(t,e,a){},ffb9:function(t,e,a){"use strict";var s=a("dc07"),i=a.n(s);i.a}}]);
//# sourceMappingURL=chunk-0f0ec4f5.023e97d4.js.map