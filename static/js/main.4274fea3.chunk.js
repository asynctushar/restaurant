(this.webpackJsonprestaurant=this.webpackJsonprestaurant||[]).push([[0],{105:function(e,t,n){},106:function(e,t,n){},174:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(27),r=n.n(s),i=(n(103),n(104),n(105),n(106),n(20)),o=n(21),l=n(24),j=n(23),d=n(175),m=n(176),u=n(177),b=n(178),h=n(179),O=n(180),x=n(25),p=n(2),f=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={isNavOpen:!1},e.togglerHandeler=function(){e.setState({isNavOpen:!e.state.isNavOpen})},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"Navigation",children:Object(p.jsx)(d.a,{dark:!0,color:"dark",expand:"sm",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(m.a,{href:"/",children:"Grand Restaurant"}),Object(p.jsx)(u.a,{onClick:this.togglerHandeler}),Object(p.jsx)(b.a,{isOpen:this.state.isNavOpen,navbar:!0,children:Object(p.jsxs)(h.a,{className:"ml-auto float-left text-left",navbar:!0,children:[Object(p.jsx)(O.a,{children:Object(p.jsx)(x.b,{to:"/",exact:!0,className:"nav-link",children:"Home"})}),Object(p.jsx)(O.a,{children:Object(p.jsx)(x.b,{to:"/blog",exact:!0,className:"nav-link",children:"Blog"})}),Object(p.jsx)(O.a,{children:Object(p.jsx)(x.b,{to:"/recipe",exact:!0,className:"nav-link",children:"Recipe"})}),Object(p.jsx)(O.a,{children:Object(p.jsx)(x.b,{to:"/gallery",exact:!0,className:"nav-link",children:"Gallery"})}),Object(p.jsx)(O.a,{children:Object(p.jsx)(x.b,{to:"/contact",exact:!0,className:"nav-link",children:"Contact"})}),Object(p.jsx)(O.a,{children:Object(p.jsx)(x.b,{to:"/about",exact:!0,className:"nav-link",children:"About"})})]})})]})})})}}]),n}(c.a.Component),g=function(){return Object(p.jsx)("div",{children:Object(p.jsx)(f,{})})},v=n(181),y=n(182),N=n(183),w=n(184),C=n(185),S=function(e){return Object(p.jsx)("li",{children:Object(p.jsxs)(v.a,{children:[Object(p.jsx)(y.a,{top:!0,src:e.item.image,alt:e.item.name}),Object(p.jsxs)(N.a,{style:{textAlign:"left"},children:[Object(p.jsx)(w.a,{children:Object(p.jsx)("h2",{children:e.item.name})}),Object(p.jsx)("br",{}),Object(p.jsx)(C.a,{children:e.item.description}),Object(p.jsxs)("h3",{children:["Price: ",e.item.price," "]})]})]})})},k=function(e){return Object(p.jsx)("div",{className:"col-sm-6 col-md-6 col-lg-4 col-xl-3",children:Object(p.jsx)(v.a,{color:"light",className:"text-dark my-3 w-100 shadow-lg rounded",children:Object(p.jsxs)(N.a,{children:[Object(p.jsx)(y.a,{src:e.dishesItem.image,style:{height:"200px"}}),Object(p.jsx)("br",{}),Object(p.jsx)(w.a,{style:{cursor:"pointer",fontWeight:"bold",display:"inline-block",paddingTop:20},className:"cardtitle",onClick:e.listItem,children:e.dishesItem.name})]})})})},D=n(97),I=n.n(D),T=function(e){return Object(p.jsx)("li",{className:"mt-3",children:Object(p.jsx)(v.a,{children:Object(p.jsxs)(N.a,{children:[Object(p.jsx)("h2",{children:e.comment.author}),Object(p.jsx)("br",{}),Object(p.jsxs)("h5",{children:["Rating: ",e.comment.rating]}),Object(p.jsx)("br",{}),Object(p.jsx)("p",{style:{fontWeight:"bold"},children:e.comment.comment}),Object(p.jsx)("p",{style:{fontSize:"12px"},children:I()(e.comment.date,"fullDate")})]})})})},F=n(55),L=n(186),E=n(187),q=n(188),H=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={author:"",rating:"",comment:""},e.onChangeHandeler=function(t){e.setState(Object(F.a)({},t.target.name,t.target.value))},e.onSubmitHandeler=function(t){e.props.addComment(e.props.dishId,e.state.author,e.state.rating,e.state.comment),e.setState({author:"",rating:"",comment:""}),t.preventDefault()},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsx)("div",{children:Object(p.jsxs)(L.a,{onSubmit:function(t){return e.onSubmitHandeler(t)},children:[Object(p.jsx)(E.a,{type:"text",name:"author",placeholder:"Your Name",value:this.state.author,onChange:function(t){return e.onChangeHandeler(t)},required:!0}),Object(p.jsx)("br",{}),Object(p.jsxs)(E.a,{type:"select",name:"rating",value:this.state.rating,onChange:function(t){return e.onChangeHandeler(t)},children:[Object(p.jsx)("option",{children:"1"}),Object(p.jsx)("option",{children:"2"}),Object(p.jsx)("option",{children:"3"}),Object(p.jsx)("option",{children:"4"}),Object(p.jsx)("option",{children:"5"})]}),Object(p.jsx)("br",{}),Object(p.jsx)(E.a,{type:"textarea",name:"comment",placeholder:"Your Comment",value:this.state.comment,onChange:function(t){return e.onChangeHandeler(t)},required:!0}),Object(p.jsx)("br",{}),Object(p.jsx)(q.a,{type:"submit",children:"Submit"})]})})}}]),n}(a.Component),M=function(){return Object(p.jsx)("div",{className:"col-12",style:{padding:"50px"},children:Object(p.jsx)("span",{className:"fa fa-spinner text-primary fa-3x fa-fw fa-pulse"})})},A=n(189),R=n(195),G=n(190),_=n(191),P=n(18),z=n(44),B=n.n(z),J=n(71),Y="ADD_COMMENT",W="LOAD_COMMENTS",V="COMMENTS_LOADING",$="LOAD_DISHES",K="DISHES_LOADING",Q="DISHES_LOAD_FAILED",U=n(38),X=n.n(U),Z="https://restaurant-project-78e90-default-rtdb.asia-southeast1.firebasedatabase.app/data/",ee=function(e,t){return{type:Y,payload:e,key:t}},te=function(e){return{type:W,payload:e}},ne=function(){return function(e){e({type:V}),function(){var t=Object(J.a)(B.a.mark((function t(){var n;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,X()(Z+"CommentsData.json");case 3:n=t.sent,e(te(n.data)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}()()}},ae=function(){return function(e){e({type:K}),function(){var t=Object(J.a)(B.a.mark((function t(){var n;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,X()(Z+"DISHES.json");case 3:n=t.sent,e((c=n.data,{type:$,payload:c})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e((a=t.t0.message,{type:Q,payload:a}));case 10:case"end":return t.stop()}var a,c}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}()()}},ce=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={selectedItem:null,modelToggler:!1},e.listItem=function(t){e.setState({selectedItem:t,modelToggler:!e.state.modelToggler})},e.modelTogglerHandeler=function(){e.setState({modelToggler:!e.state.modelToggler})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComment()}},{key:"render",value:function(){var e=this;if(this.props.Dishes.isLoading)return Object(p.jsx)("div",{children:Object(p.jsx)(M,{})});if(null!==this.props.Dishes.errMessage)return Object(p.jsx)(A.a,{color:"danger",children:this.props.Dishes.errMessage});var t=this.props.Dishes.dishes.map((function(t){return Object(p.jsx)(k,{dishesItem:t,listItem:e.listItem.bind(e,t)},t.id)})),n=null;null!=this.state.selectedItem&&(n=Object(p.jsx)("ul",{className:"row text-center",children:Object(p.jsx)(S,{item:this.state.selectedItem})}));var a=null;this.props.CommentsData.isLoading?a=Object(p.jsx)(M,{}):null!=this.state.selectedItem&&(a=this.props.CommentsData.comments.map((function(t){return t.dishId===e.state.selectedItem.id?Object(p.jsx)(T,{comment:t},t.id):null})));var c=null;return this.state.selectedItem&&(c=this.state.selectedItem.id),Object(p.jsxs)("div",{className:"List ",children:[Object(p.jsx)("div",{className:" d-flex flex-wrap m-2 text-center",children:t}),Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)(R.a,{isOpen:this.state.modelToggler,size:"lg",contentClassName:"my-modal-style",children:[Object(p.jsxs)(G.a,{children:[n,Object(p.jsx)("ul",{children:a}),Object(p.jsx)("br",{}),Object(p.jsx)(H,{dishId:c,addComment:this.props.addComment})]}),Object(p.jsx)(_.a,{children:Object(p.jsx)(q.a,{onClick:this.modelTogglerHandeler,children:"Close"})})]})})]})}}]),n}(a.Component),se=Object(P.connect)((function(e){return{Dishes:e.dishes,CommentsData:e.comments}}),(function(e){return{addComment:function(t,n,a,c){e(function(e,t,n,a){return function(c){var s={dishId:e,comment:a,rating:n,author:t,id:Math.random().toString()};s.date=(new Date).toISOString(),X.a.post(Z+"/CommentsData.json",s).then((function(e){console.log(JSON.parse(e.config.data)),c(ee(JSON.parse(e.config.data),e.data.name))})).catch((function(e){return console.log(e)}))}}(t,n,a,c))},fetchDishes:function(){return e(ae())},fetchComment:function(){return e(ne())}}}))(ce),re=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return document.title="Grand Restaurant",Object(p.jsx)("div",{children:Object(p.jsx)(se,{})})}}]),n}(a.Component),ie=function(){return document.title="Gallery",Object(p.jsx)("div",{})},oe=function(){return document.title="Blog",Object(p.jsx)("div",{})},le=n(192),je=n(193),de=n(194),me=n(12),ue=function(e){return e&&e.length},be=function(e){return!isNaN(Number(e))},he=function(e){return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)},Oe=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={alertShow:!1,alertText:null,alertType:null},e.submitHandeler=function(t){X.a.post(Z+"feedback",t).then((function(e){return e.status})).then((function(t){201===t&&(e.setState({alertShow:!0,alertText:"Submitted Successfully",alertType:"success"}),setTimeout((function(){e.setState({alertShow:!1})}),8e3))})).catch((function(t){e.setState({alertText:"Submit Failed",alertShow:!0,alertType:"danger"}),setTimeout((function(){e.setState({alertShow:!1})}),8e3)})),e.props.resetFeedbackForm()},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return document.title="Contact",Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"row row-content",style:{paddingLeft:"20px",textAlign:"center"},children:[Object(p.jsx)("div",{className:"col-12",children:Object(p.jsx)("h3",{children:"Send us your Feedback "})}),Object(p.jsxs)("div",{className:"col-12 col-lg-8 mx-auto mt-4",children:[Object(p.jsx)(A.a,{isOpen:this.state.alertShow,color:this.state.alertType,children:this.state.alertText}),Object(p.jsxs)(me.Form,{model:"feedback",onSubmit:function(t){return e.submitHandeler(t)},children:[Object(p.jsxs)(le.a,{row:!0,children:[Object(p.jsx)(je.a,{htmlFor:"firstname",md:3,children:"First Name : "}),Object(p.jsxs)(de.a,{md:9,children:[Object(p.jsx)(me.Control.text,{model:".firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:ue}}),Object(p.jsx)(me.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required"}})]})]}),Object(p.jsxs)(le.a,{row:!0,children:[Object(p.jsx)(je.a,{htmlFor:"lastname",md:3,children:"Last Name : "}),Object(p.jsxs)(de.a,{md:9,children:[Object(p.jsx)(me.Control.text,{model:".lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:ue}}),Object(p.jsx)(me.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required"}})]})]}),Object(p.jsxs)(le.a,{row:!0,children:[Object(p.jsx)(je.a,{htmlFor:"telnum",md:3,children:" Mobile : "}),Object(p.jsxs)(de.a,{md:9,children:[Object(p.jsx)(me.Control.text,{model:".telnum",name:"telnum",placeholder:"Mobile",className:"form-control",validators:{required:ue,isNumber:be}}),Object(p.jsx)(me.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required ",isNumber:"Please insert number."}})]})]}),Object(p.jsxs)(le.a,{row:!0,children:[Object(p.jsx)(je.a,{htmlFor:"email",md:3,children:"Email : "}),Object(p.jsxs)(de.a,{md:9,children:[Object(p.jsx)(me.Control.text,{model:".email",name:"email",placeholder:"Email",className:"form-control",validators:{required:ue,validEmail:he}}),Object(p.jsx)(me.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required ",validEmail:"Please insert Valid email."}})]})]}),Object(p.jsxs)(le.a,{row:!0,children:[Object(p.jsx)(de.a,{md:{size:5,offset:3},children:Object(p.jsx)(le.a,{check:!0,children:Object(p.jsxs)(je.a,{check:!0,children:[Object(p.jsx)(me.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," ",Object(p.jsx)("strong",{children:"May we contact you?"})]})})}),Object(p.jsx)(de.a,{md:{size:3,offset:1},children:Object(p.jsxs)(me.Control.select,{model:".contactType",name:"contactType",className:"form-control",children:[Object(p.jsx)("option",{children:"Mobile"}),Object(p.jsx)("option",{children:"Email"})]})})]}),Object(p.jsxs)(le.a,{row:!0,children:[Object(p.jsx)(je.a,{htmlFor:"message",md:3,children:"Your Feedback :"}),Object(p.jsxs)(de.a,{md:9,children:[Object(p.jsx)(me.Control.textarea,{model:".message",name:"message",rows:"12",className:"form-control",validators:{required:ue}}),Object(p.jsx)(me.Errors,{className:"text-danger",model:".message",show:"touched",messages:{required:"Required"}})]})]}),Object(p.jsx)(le.a,{children:Object(p.jsx)(de.a,{md:{size:9,offset:3},children:Object(p.jsx)(q.a,{type:"submit",color:"primary",children:"Send Feedback"})})})]})]})]})})}}]),n}(c.a.Component),xe=Object(P.connect)(null,(function(e){return{resetFeedbackForm:function(){e(me.actions.reset("feedback"))}}}))(Oe),pe=function(){return document.title="Recipe",Object(p.jsx)("div",{})},fe=function(){return document.title="About",Object(p.jsx)("div",{})},ge=n(9),ve=function(){return Object(p.jsx)("div",{children:Object(p.jsxs)(ge.c,{children:[Object(p.jsx)(ge.a,{path:"/",exact:!0,component:re}),Object(p.jsx)(ge.a,{path:"/blog",exact:!0,component:oe}),Object(p.jsx)(ge.a,{path:"/gallery",exact:!0,component:ie}),Object(p.jsx)(ge.a,{path:"/recipe",exact:!0,component:pe}),Object(p.jsx)(ge.a,{path:"/contact",exact:!0,component:xe}),Object(p.jsx)(ge.a,{path:"/about",exact:!0,component:fe})]})})},ye=function(){return Object(p.jsx)("div",{className:"Footer",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row justify-content-center",children:Object(p.jsx)("div",{className:"col-auto",children:Object(p.jsx)("p",{children:"Grand Restaurant \xa9 Copyright 2021"})})})})})},Ne=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(g,{}),Object(p.jsx)(ve,{}),Object(p.jsx)(ye,{})]})},we=n(31),Ce=n(11),Se=Object(we.combineReducers)(Object(Ce.a)({dishes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,dishes:[],errMessage:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return Object(Ce.a)(Object(Ce.a)({},e),{},{isLoading:!0,dishes:[]});case $:return Object(Ce.a)(Object(Ce.a)({},e),{},{isLoading:!1,dishes:t.payload});case Q:return Object(Ce.a)(Object(Ce.a)({},e),{},{isLoading:!1,errMessage:t.payload});default:return e}},comments:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:var n=[Object(Ce.a)(Object(Ce.a)({},t.payload),{},{key:t.key})];return Object(Ce.a)(Object(Ce.a)({},e),{},{comments:e.comments.concat(n)});case V:return Object(Ce.a)(Object(Ce.a)({},e),{},{isLoading:!0,comments:[]});case W:var a=[];for(var c in t.payload)a.push(Object(Ce.a)(Object(Ce.a)({},t.payload[c]),{},{id:c}));return Object(Ce.a)(Object(Ce.a)({},e),{},{isLoading:!1,comments:a});default:return e}}},Object(me.createForms)({feedback:{firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"mobile",message:""}}))),ke=n(98),De=Object(we.createStore)(Se,Object(we.applyMiddleware)(ke.a));var Ie=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(P.Provider,{store:De,children:Object(p.jsx)(x.a,{children:Object(p.jsx)(Ne,{})})})})},Te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,196)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(p.jsx)(Ie,{}),document.getElementById("root")),Te()}},[[174,1,2]]]);
//# sourceMappingURL=main.4274fea3.chunk.js.map