(this.webpackJsonplogin_blackfor=this.webpackJsonplogin_blackfor||[]).push([[0],{21:function(e,a,t){e.exports=t.p+"static/media/logoHG.4d65b8f7.png"},22:function(e,a,t){e.exports=t.p+"static/media/computer.f5988b40.png"},23:function(e,a,t){e.exports=t(41)},28:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var n=t(1),s=t.n(n),l=t(18),r=t.n(l),o=(t(28),t(8)),i=t(9),c=t(11),u=t(10),m=(t(15),t(19)),d=t.n(m).a.initializeApp({apiKey:"AIzaSyD-Qbr2zKEtrkn3Am5YP-KiQrIzA9Bo-0Q",authDomain:"loginblackfor.firebaseapp.com",databaseURL:"https://loginblackfor.firebaseio.com",projectId:"loginblackfor",storageBucket:"loginblackfor.appspot.com",messagingSenderId:"599649939276",appId:"1:599649939276:web:233760decf54b1a27029e9"}),h=t(20),p=t(5),g=t(21),b=t.n(g),E=(t(38),function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).validateForm=function(){var e="",a="";return n.state.email?n.state.email.match(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i)||(e="Invalid E-mail"):e="Name cannot be empty",n.state.password?n.state.password.length<6&&(a="Password required at least 6 characters"):a="Password cannot be empty",!e&&!a||(n.setState({emailError:e,passwordError:a}),!1)},n.logIn=n.logIn.bind(Object(p.a)(n)),n.signUp=n.signUp.bind(Object(p.a)(n)),n.changePassword=n.changePassword.bind(Object(p.a)(n)),n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.handleChangeNewPassword=n.handleChangeNewPassword.bind(Object(p.a)(n)),n.showChangePasswordInput=n.showChangePasswordInput.bind(Object(p.a)(n)),n.state={email:"",password:"",emailRestore:""},n.state={checked:!1},n}return Object(i.a)(t,[{key:"handleChangeNewPassword",value:function(e){this.setState({emailRestore:e.target.value})}},{key:"handleChange",value:function(e){var a="input"===e.target.type;this.setState(Object(h.a)({},e.target.name,a?e.targe.checked:e.target.value))}},{key:"logIn",value:function(e){e.preventDefault();this.validateForm()&&this.setState({email:"",password:"",emailError:"",passwordError:""}),e.preventDefault(),d.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((function(e){})).catch((function(e){console.log(e)}))}},{key:"signUp",value:function(e){e.preventDefault();this.validateForm()&&this.setState({email:"",password:"",emailError:"",passwordError:""}),e.preventDefault(),d.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((function(){})).catch((function(e){console.log(e)}))}},{key:"changePassword",value:function(e){e.preventDefault(),console.log(this.state.emailRestore),d.auth().sendPasswordResetEmail(this.state.emailRestore).then((function(){})).catch((function(e){console.log(e)}))}},{key:"handleChangeCheckedSignUp",value:function(e){this.setState({checked:e})}},{key:"showChangePasswordInput",value:function(){document.getElementById("showInput").style.visibility="visible"}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"auth"},s.a.createElement("div",{className:"signIn-form"},s.a.createElement("img",{className:"logo",src:b.a,alt:"logo"}),s.a.createElement("form",null,s.a.createElement("div",{className:"email"},s.a.createElement("label",{htmlFor:"email",className:"emailLabel",style:{textAlign:"left"}},"E-mail"),s.a.createElement("br",null),s.a.createElement("input",{value:this.state.email,type:"email",placeholder:"e-mail@",className:"emailInput",name:"email",noValidate:!0,onChange:this.handleChange}),s.a.createElement("div",{className:"emailError"},this.state.emailError)),s.a.createElement("div",{className:"password"},s.a.createElement("label",{htmlFor:"password"},"Password "),s.a.createElement("br",null),s.a.createElement("input",{value:this.state.password,type:"password",className:"passwordInput",placeholder:"password",name:"password",noValidate:!0,onChange:this.handleChange}),s.a.createElement("div",{className:"passwordError"},this.state.passwordError)),s.a.createElement("div",{className:"logIn"},s.a.createElement("button",{onClick:this.logIn,type:"submit",className:"logInBtn",hidden:!!this.state.checked}," Log In "),s.a.createElement("button",{onClick:this.signUp,type:"submit",className:"signUpBtn",hidden:!this.state.checked}," sign Up ")),s.a.createElement("div",null,s.a.createElement("input",{name:"remember",type:"checkbox",defaultChecked:!0}),s.a.createElement("label",{className:"rememberMe"}," Remember Me \xa0\xa0\xa0\xa0"),s.a.createElement("label",{className:"forgotPassword",onClick:this.showChangePasswordInput,style:{color:"blue"}},s.a.createElement("b",null,"\xa0\xa0\xa0\xa0Forgot Password? ")),s.a.createElement("br",null),s.a.createElement("div",{className:"hiddenInput",id:"showInput",style:{visibility:"hidden"}},s.a.createElement("input",{type:"email",placeholder:"e-mail@",className:"emailChangePasswordInput",name:"emailChangePasswordInput",onChange:this.handleChangeNewPassword}),s.a.createElement("button",{className:"sendEmail",type:"submit",onClick:this.changePassword},"Send E-mail")))),s.a.createElement("div",{className:"signUp"},s.a.createElement("p",{className:"dontYouHaveAccount",onClick:function(){return e.handleChangeCheckedSignUp(!0)}},"Don't you have an account yet? ",s.a.createElement("b",{style:{color:"blue"}},"Join Hire Ground")))))}}]),t}(n.Component)),f=(t(39),function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).logOutFunction=n.logOutFunction.bind(Object(p.a)(n)),n}return Object(i.a)(t,[{key:"logOutFunction",value:function(){d.auth().signOut()}},{key:"render",value:function(){return s.a.createElement("div",{className:"Success"},s.a.createElement("h1",null,"Success"),s.a.createElement("button",{className:"logOut",onClick:this.logOutFunction},"Log Out"))}}]),t}(n.Component)),v=t(22),w=t.n(v),y=(t(40),function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={loading:!0,user:null},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.authListener()}},{key:"authListener",value:function(){var e=this;d.auth().onAuthStateChanged((function(a){a?(e.setState({user:a}),e.setState({loading:!1})):(e.setState({user:null}),e.setState({loading:!1}))}))}},{key:"render",value:function(){return this.state.loading?s.a.createElement("div",{className:"logInWindow"},"Loading ..."):null==this.state.user?s.a.createElement("div",{className:"logInWindow",style:{display:"flex",backgroundColor:"#4164e3",borderRadius:"4%"}},s.a.createElement(E,null),s.a.createElement("div",{className:"container"},s.a.createElement("img",{src:w.a,className:"computer",alt:"computer"}),s.a.createElement("br",null),s.a.createElement("h1",{className:"description"},s.a.createElement("b",null,"Locate certified suppliers")),s.a.createElement("p",{className:"information"},"Help our buyers locate certified around the country and help our suppliers generate more revenue."))):s.a.createElement("div",{className:"successWindow"},s.a.createElement(f,null))}}]),t}(n.Component));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(y,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.60116212.chunk.js.map