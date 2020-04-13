(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},29:function(e,t,a){e.exports=a(66)},35:function(e,t,a){},37:function(e,t,a){},59:function(e,t,a){},61:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),o=a.n(c),s=(a(35),a(28)),l=a(2),i=a(3),m=a(5),u=a(4),h=a(6),d=a(70),p=a(72),f=a(71),b=a(69),E={isAuthenticated:!1,authenticate:function(e){var t=this;fetch("api/users",{credentials:"include"}).then(function(a){t.isAuthenticated=!0,"function"===typeof e&&e(a.json().user)}).catch(function(e){console.log("Error fetching authorized user.")})},signout:function(e){var t=this;fetch("api/users/logout",{method:"POST",credentials:"include"}).then(function(a){t.isAuthenticated=!1,"function"===typeof e&&e(!0)}).catch(function(t){console.log("Error logging out user."),"function"===typeof e&&e(!1)})}},g=a(68);a(37);var N=function(){return r.a.createElement("div",{className:"container jumbotron landing"},r.a.createElement("h1",{className:"text-center text-white"},"Address Book"))},v=(a(13),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"text-center"},r.a.createElement(N,null),r.a.createElement(g.a,{to:"/login",className:"btn btn-info btn-lg mx-5 px-5 text-decoration-none text-color"},"Login"),r.a.createElement(g.a,{to:"/register",className:"btn btn-info btn-lg mx-5 px-5 text-decoration-none text-color"},"Register"))}}]),t}(r.a.Component)),y=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.onLogin;return r.a.createElement("form",{ref:function(t){return e.form=t},onSubmit:function(a){return a.preventDefault(),t({username:e.usernameElem.value,password:e.passwordElem.value})}},r.a.createElement("div",{className:"form-group container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("label",{className:"pl-2"},"User Name:")),r.a.createElement("div",null,r.a.createElement("label",{className:"pl-4"},"Password:"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("input",{className:"form-control",ref:function(t){return e.usernameElem=t},type:"text",name:"username",placeholder:"Enter Username"})),r.a.createElement("div",{className:"col-6"},r.a.createElement("input",{className:"form-control",ref:function(t){return e.passwordElem=t},type:"password",name:"password",placeholder:"Password"}))),r.a.createElement("div",{className:"d-flex flex-row-reverse pt-2"},r.a.createElement("button",{className:"btn btn-info btn-lg px-5 text-color",type:"submit"},"Login"))))}}]),t}(r.a.Component),C="",O=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={redirectToReferrer:!1},a.login=function(e){console.log("Logging in "+e.username),fetch("api/users/login",{method:"POST",body:JSON.stringify(e),credentials:"include",headers:{"Content-Type":"application/json"}}).then(function(t){200===t.status&&E.authenticate(function(){C=e.username,a.setState({redirectToReferrer:!0})})}).catch(function(e){console.log("Error logging in.",e)})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=(this.props.location.state||{from:{pathname:"/contacts"}}).from;return this.state.redirectToReferrer?r.a.createElement(b.a,{to:e}):r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement(y,{onLogin:this.login}))}}]),t}(r.a.Component),x=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.onRegister;return console.log("Register form props are: ".concat(JSON.stringify(this.props))),r.a.createElement("form",{ref:function(t){return e.form=t},onSubmit:function(a){return a.preventDefault(),t({username:e.usernameElem.value,password:e.passwordElem.value})}},r.a.createElement("div",{className:"form-group container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("label",{className:"pl-2"},"User Name:")),r.a.createElement("div",null,r.a.createElement("label",{className:"pl-4"},"Password:"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("input",{className:"form-control",ref:function(t){return e.usernameElem=t},type:"text",name:"username",placeholder:"Enter Username"})),r.a.createElement("div",{className:"col-6"},r.a.createElement("input",{className:"form-control",ref:function(t){return e.passwordElem=t},type:"password",name:"password",placeholder:"Password"}))),r.a.createElement("div",{className:"d-flex flex-row-reverse pt-2"},r.a.createElement("button",{className:"btn btn-info btn-lg px-5 text-color",type:"submit"},"Register"))))}}]),t}(r.a.Component),j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={redirectToReferrer:!1},a.register=function(e){fetch("api/users/register",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"},credentials:"include"}).then(function(e){200===e.status&&(console.log("Succesfully registered user!"),window.location.assign("/login"))}).catch(function(e){console.log("Error registering user.",e)})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement(x,{onRegister:this.register}))}}]),t}(r.a.Component),S=a(27);var w=function(e){return r.a.createElement("input",Object.assign({className:"form-control"},e))};var k=function(e){return r.a.createElement("select",Object.assign({className:"form-control"},e),e.array.map(function(e){return r.a.createElement("option",null,e)}))},A=a(10),D=a.n(A),I={getContacts:function(e){return D.a.get("/api/users/"+e)},saveContact:function(e,t){return D.a.post("/api/users/"+e,t)},getContact:function(e){return D.a.get("/api/users/contact/"+e)},saveNote:function(e,t){return D.a.post("/api/users/"+e+"/note",t)},deleteNote:function(e,t){return D.a.delete("/api/users/"+e+"/note/"+t)},searchContacts:function(e,t){return D.a.get("/api/users/contacts/"+e+"/"+t)},deleteContact:function(e,t){return D.a.delete("/api/users/contact/".concat(e,"/").concat(t))},updateContact:function(e,t){return D.a.put("/api/users/"+e,t)}},M=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={months:["","January","February","March","April","May","June","July","August","September","October","November","December"],days:[],states:["","AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"],firstName:"",lastName:"",email:"",phoneNumber:"",birthMonth:"",birthDay:"",address:"",city:"",state:"",zip:"",redirectToReferrer:!1,updateRoute:!1,id:""},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(S.a)({},n,r))},a.handleFormSubmit=function(e){if(e.preventDefault(),!a.state.firstName||!a.state.lastName)return console.log("Please enter a first and last name"),!1;I.saveContact(C,{firstName:a.state.firstName,lastName:a.state.lastName,phoneNumber:a.state.phoneNumber,email:a.state.email,address:a.state.address,city:a.state.city,state:a.state.state,zip:a.state.zip,birthDay:a.state.birthDay,birthMonth:a.state.birthMonth}).then(function(e){200===e.status?a.setState({redirectToReferrer:!0}):console.log(e.status)}).catch(function(e){return console.log(e)})},a.handleUpdateSubmit=function(e){if(e.preventDefault(),!a.state.firstName||!a.state.lastName)return console.log("Please enter a first and last name"),!1;I.updateContact(a.state.id,{firstName:a.state.firstName,lastName:a.state.lastName,phoneNumber:a.state.phoneNumber,email:a.state.email,address:a.state.address,city:a.state.city,state:a.state.state,zip:a.state.zip,birthDay:a.state.birthDay,birthMonth:a.state.birthMonth}).then(function(e){200===e.status?a.setState({redirectToReferrer:!0}):console.log(e.status)}).catch(function(e){return console.log(e)})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"updateContact",value:function(){var e=this;I.getContact(this.props.match.params.id).then(function(t){console.log(t.data),e.setState({firstName:t.data.firstName,lastName:t.data.lastName,phoneNumber:t.data.phoneNumber,email:t.data.email,address:t.data.address,city:t.data.city,state:t.data.state,zip:t.data.zip,birthDay:t.data.birthDay,birthMonth:t.data.birthMonth})}).catch(function(e){return console.log(e)})}},{key:"componentDidMount",value:function(){this.props.match.params.id?this.setState({updateRoute:!0}):this.setState({updateRoute:!1}),this.setState({id:this.props.match.params.id}),this.updateContact();for(var e=[""],t=1;t<=31;t++)e.push(t);this.setState({days:e})}},{key:"render",value:function(){return this.state.redirectToReferrer?r.a.createElement(b.a,{to:"/contacts"}):r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-center"},this.state.updateRoute?"Update Contact":"New Contact"),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("label",null,"First Name"),r.a.createElement(w,{placeholder:"First Name",type:"text",value:this.state.firstName,onChange:this.handleInputChange,name:"firstName"})),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("label",null,"Last Name"),r.a.createElement(w,{placeholder:"Last Name",type:"text",value:this.state.lastName,onChange:this.handleInputChange,name:"lastName"})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("label",null,"Email"),r.a.createElement(w,{placeholder:"Email",type:"email",value:this.state.email,onChange:this.handleInputChange,name:"email"})),r.a.createElement("div",{className:"col-lg-2"},r.a.createElement("label",null,"Phone Number"),r.a.createElement(w,{placeholder:"Phone Number",type:"tel",value:this.state.phoneNumber,onChange:this.handleInputChange,name:"phoneNumber"})),r.a.createElement("div",{className:"col-lg-2"},r.a.createElement("label",null,"Birth Month"),r.a.createElement(k,{array:this.state.months,value:this.state.birthMonth,onChange:this.handleInputChange,name:"birthMonth"})),r.a.createElement("div",{className:"col-lg-2"},r.a.createElement("label",null,"Birth Day"),r.a.createElement(k,{array:this.state.days,value:this.state.birthDay,onChange:this.handleInputChange,name:"birthDay"})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Address"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6"},r.a.createElement(w,{placeholder:"Address",type:"text",value:this.state.address,onChange:this.handleInputChange,name:"address"})),r.a.createElement("div",{className:"col-lg-3"},r.a.createElement(w,{placeholder:"City",type:"text",value:this.state.city,onChange:this.handleInputChange,name:"city"})),r.a.createElement("div",{className:"col-lg-1"},r.a.createElement(k,{array:this.state.states,value:this.state.state,onChange:this.handleInputChange,name:"state"})),r.a.createElement("div",{className:"col-lg-2"},r.a.createElement(w,{placeholder:"Zip",type:"text",value:this.state.zip,onChange:this.handleInputChange,name:"zip"})))),this.state.updateRoute?r.a.createElement("button",{className:"btn btn-info btn-lg text-color",onClick:this.handleUpdateSubmit},"Update Contact"):r.a.createElement("button",{className:"btn btn-info btn-lg text-color",onClick:this.handleFormSubmit},"Add Contact")))}}]),t}(r.a.Component);a(59);var R=function(e){return r.a.createElement("div",{className:"contact-card container rounded mt-2 mb-2 p-3"},r.a.createElement("h2",{className:"text-white"},e.lastName,", ",e.firstName),r.a.createElement("h3",{className:"text-white"},e.address," ",e.city,", ",e.state,". ",e.zip),r.a.createElement(g.a,{to:"/details/"+e.id,className:"text-decoration-none btn btn-lg btn-info text-color"},"View More"))};var T=function(e){return r.a.createElement("div",{className:"form-group text-center"},r.a.createElement("select",{className:"form-control d-inline w-25 ml-5",onChange:e.option},r.a.createElement("option",{value:!1},"see options below"),r.a.createElement("option",{value:"lastName"},"Last Name"),r.a.createElement("option",{value:"firstName"},"First Name"),r.a.createElement("option",{value:"city"},"City"),r.a.createElement("option",{value:"state"},"State"),r.a.createElement("option",{value:"zip"},"Zip")),r.a.createElement("input",{className:"form-control w-25 mx-5 d-inline",onChange:e.input}),r.a.createElement("button",{className:"btn btn-info text-dark",onClick:e.onClick},"Search"))},z="",P=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[],option:"",input:""},a.handleOptionChange=function(e){"false"===e.target.value?a.setState({option:""}):a.setState({option:e.target.value})},a.handleInputChange=function(e){a.setState({input:e.target.value})},a.handleSearchSubmit=function(e){e.preventDefault(),a.state.option&&a.state.input?I.searchContacts(a.state.option,a.state.input).then(function(e){a.setState({contacts:e.data})}).catch(function(e){return console.log(e)}):console.log("please enter a valid option")},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;I.getContacts(C).then(function(t){z=t.data[0]._id,e.setState({contacts:t.data[0].contacts})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return this.state.contacts.length?r.a.createElement("div",null,r.a.createElement(T,{option:this.handleOptionChange,input:this.handleInputChange,onClick:this.handleSearchSubmit}),r.a.createElement("h1",{className:"text-center"},"Contacts Page"),r.a.createElement("div",{className:"container"},this.state.contacts.map(function(e){return r.a.createElement(R,{id:e._id,firstName:e.firstName,lastName:e.lastName,address:e.address,city:e.city,state:e.state,zip:e.zip})}))):r.a.createElement("div",{className:"text-center"},r.a.createElement(T,null),r.a.createElement("h1",null,"Contacts Page"),r.a.createElement("h2",null,"No Contacts Found"))}}]),t}(r.a.Component),L=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={contact:{},notes:!1,note:"",updated:!1,pathName:"",redirect:!1},a.handleInputChange=function(e){a.setState({note:e.target.value})},a.formSubmit=function(e){if(e.preventDefault(),!a.state.note)return!1;I.saveNote(a.state.contact._id,{body:a.state.note}).then(function(e){return a.setState({note:"",updated:!0})}).catch(function(e){return console.log(e)})},a.deleteNote=function(e){I.deleteNote(a.state.contact._id,e).then(function(e){return a.setState({updated:!0})}).catch(function(e){return console.log(e)})},a.updateContact=function(){a.setState({redirect:!0,pathName:"/update/".concat(a.state.contact._id)})},a.deleteContact=function(e){I.deleteContact(z,a.state.contact._id).then(function(e){a.setState({pathName:"/contacts",redirect:!0})}).catch(function(e){return console.log(e)})},a.getContactInfo=function(e){I.getContact(e).then(function(e){a.setState({contact:e.data}),0!==a.state.contact.notes.length&&a.setState({notes:!0})}).catch(function(e){return console.log(e)})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(z),I.getContact(this.props.match.params.id).then(function(t){e.setState({contact:t.data}),0!==e.state.contact.notes.length&&e.setState({notes:!0})}).catch(function(e){return console.log(e)})}},{key:"componentDidUpdate",value:function(){var e=this;this.state.updated&&I.getContact(this.props.match.params.id).then(function(t){e.setState({contact:t.data,updated:!1}),0!==e.state.contact.notes.length?e.setState({notes:!0}):e.setState({notes:!1})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this;return this.state.redirect?r.a.createElement(b.a,{to:this.state.pathName}):r.a.createElement("div",{className:"jumbotron container text-center background text-white"},r.a.createElement("h1",{className:""},"Contact Information"),r.a.createElement("br",null),r.a.createElement("h2",{className:""},this.state.contact.firstName," ",this.state.contact.lastName),r.a.createElement("div",{className:"mt-2"},r.a.createElement("h4",null,"Phone Number: ",this.state.contact.phoneNumber),r.a.createElement("h4",null,"Email: ",this.state.contact.email),r.a.createElement("h4",null,"Address: ",this.state.contact.address,", ",this.state.contact.city,", ",this.state.contact.state,". ",this.state.contact.zip),r.a.createElement("h4",null,"Birthday: ",this.state.contact.birthMonth," ",this.state.contact.birthDay)),r.a.createElement("button",{className:"btn btn-danger mx-2 text-color",onClick:this.deleteContact},"Delete Contact"),r.a.createElement("button",{className:"btn btn-info mx-2 text-color",onClick:this.updateContact},"Edit Contact"),r.a.createElement("br",null),r.a.createElement("div",{className:"mt-2"},r.a.createElement("h3",null,"Notes"),this.state.notes?this.state.contact.notes.map(function(t){return r.a.createElement("div",{className:"mb-4"},r.a.createElement("p",null,t.body),r.a.createElement("button",{className:"btn btn-danger text-color",onClick:function(){return e.deleteNote(t._id)}},"Delete Note"))}):r.a.createElement("h4",null,"No notes found, please enter one below"),r.a.createElement("br",null),r.a.createElement("form",null,r.a.createElement("textarea",{className:"form-control mx-auto w-50",onChange:this.handleInputChange,value:this.state.note}),r.a.createElement("button",{className:"btn btn-info btn-lg mt-2 text-color",onClick:this.formSubmit},"Add Note"))))}}]),t}(r.a.Component);a(61);var U=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light mb-5 nav"},r.a.createElement("h1",{className:"navbar-brand text-info"},"Address Book"),r.a.createElement("button",{className:"navbar-toggler bg-info",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(g.a,{to:"/contacts",className:"float-right nav-link text-info"},"View Contacts")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(g.a,{to:"/new",className:"float-right nav-link text-info"},"Add Contact")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(g.a,{to:"/",className:"float-right nav-link text-info",onClick:function(){E.signout()}},"Logout")))))};a(63).config();var J=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(U,null),r.a.createElement(p.a,null,r.a.createElement(f.a,{exact:!0,path:"/",component:v}),r.a.createElement(f.a,{path:"/login",component:O}),r.a.createElement(f.a,{path:"/register",component:j}),r.a.createElement(F,{path:"/new",component:M}),r.a.createElement(F,{path:"/update/:id",component:M}),r.a.createElement(F,{path:"/details/:id",component:L}),r.a.createElement(F,{path:"/contacts",component:P}),r.a.createElement(f.a,{component:v}))))}}]),t}(r.a.Component),F=function(e){var t=e.component,a=Object(s.a)(e,["component"]);return r.a.createElement(f.a,Object.assign({},a,{render:function(e){return E.isAuthenticated?r.a.createElement(t,e):r.a.createElement(b.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},_=J;o.a.render(r.a.createElement(_,null),document.getElementById("root"))}},[[29,2,1]]]);
//# sourceMappingURL=main.63c846ae.chunk.js.map