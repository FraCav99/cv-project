(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{16:function(e,t,s){},17:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s(1),i=s.n(a),c=s(10),l=s.n(c),r=s(2),o=s(3),d=s(5),j=s(4),m=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(r.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).toggleMenu=function(){var e=document.querySelector(".Menu");window.innerWidth<=966&&e.classList.toggle("side-menu-active")},e.applyListItemEffect=function(e){"li"===e.target.tagName.toLowerCase()&&(document.querySelectorAll(".menu-body ul li").forEach((function(e){e.classList.remove("focus-list-element")})),e.target.classList.add("focus-list-element"))},e.showPersonalInfo=function(e){var t=document.querySelector(".Main"),s=document.querySelector(".PersonalInfo"),n=document.querySelector(".Education"),a=document.querySelector(".WorkExp");"Personal Info"===e.target.textContent?(s.classList.remove("not-visible"),n.classList.add("not-visible"),a.classList.add("not-visible")):"Education"===e.target.textContent?(s.classList.add("not-visible"),n.classList.remove("not-visible"),a.classList.add("not-visible")):"Work Experiences"===e.target.textContent&&(s.classList.add("not-visible"),n.classList.add("not-visible"),a.classList.remove("not-visible")),t.classList.add("not-visible")},e}return Object(o.a)(s,[{key:"render",value:function(){var e=this.toggleMenu,t=this.applyListItemEffect,s=this.showPersonalInfo;return Object(n.jsxs)("div",{className:"Menu",children:[Object(n.jsxs)("div",{className:"menu-header",children:[Object(n.jsx)("h1",{children:"CV-Builder"}),Object(n.jsx)("a",{href:"https://github.com/FraCav99/cv-project",children:Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(n.jsx)("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})})]}),Object(n.jsx)("div",{className:"menu-body",onClick:function(e){t(e),s(e)},children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{onClick:e,children:"Personal Info"}),Object(n.jsx)("li",{onClick:e,children:"Education"}),Object(n.jsx)("li",{onClick:e,children:"Work Experiences"})]})})]})}}]),s}(a.Component),u=s.p+"static/media/undraw_files_6b3d.6cf1bf2f.svg",b=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(r.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).toggleMenu=function(){document.querySelector(".Menu").classList.toggle("side-menu-active")},e}return Object(o.a)(s,[{key:"render",value:function(){var e=this.toggleMenu;return Object(n.jsxs)("div",{className:"Main",children:[Object(n.jsx)("div",{className:"main-header",children:Object(n.jsxs)("div",{className:"burger-menu",onClick:e,children:[Object(n.jsx)("span",{className:"line line-1"}),Object(n.jsx)("span",{className:"line line-2"}),Object(n.jsx)("span",{className:"line line-3"})]})}),Object(n.jsxs)("div",{className:"main-body",children:[Object(n.jsx)("div",{className:"image-container",children:Object(n.jsx)("img",{src:u,alt:"main-img"})}),Object(n.jsxs)("div",{className:"text-content",children:[Object(n.jsx)("p",{children:"Start building your CV!"}),Object(n.jsx)("p",{children:"Select one index from the side menu."})]})]})]})}}]),s}(a.Component),h=s(7),p=s(6),x=s.p+"static/media/undraw_personal_information_962o.42177c18.svg",v=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(r.a)(this,s),(e=t.call(this)).toggleMenu=function(){document.querySelector(".Menu").classList.toggle("side-menu-active")},e.toggleModal=function(){var t=document.querySelector(".close-button-info"),s=document.querySelector(".personal-info-modal"),n=document.querySelector(".info-body");e.setState({personalInfo:e.initialPersonalInfoState,errors:e.initialErrorsState}),t.classList.toggle("not-visible"),s.classList.toggle("not-visible"),n.classList.toggle("not-visible")},e.handleChange=function(t){e.setState({personalInfo:Object(p.a)(Object(p.a)({},e.state.personalInfo),{},Object(h.a)({},t.target.name,t.target.value))})},e.validate=function(){var t=!1,s=e.state.personalInfo,n={};return s.firstName||(t=!0,n.firstNameError="Cannot be empty"),s.lastName||(t=!0,n.lastNameError="Cannot be empty"),s.role||(t=!0,n.roleError="Cannot be empty"),s.address||(t=!0,n.addressError="Cannot be empty"),s.phoneNumber&&10!==!s.phoneNumber.length&&!/[a-zA-Z]/g.test(s.phoneNumber)||(t=!0,n.phoneNumberError="Cannot be empty and must be 10 digits long"),s.email&&s.email.includes("@")||(t=!0,n.emailError='Cannot be empty and must contain "@"'),Object.keys(n).length>0&&n.constructor===Object&&e.setState({errors:n}),t},e.handleSubmit=function(t){t.preventDefault();var s=e.state.personalInfo;e.validate()||(e.setState({personalInfo:s,isSubmitted:!0}),e.initialPersonalInfoState=s,e.toggleModal())},e.state={personalInfo:{firstName:"",lastName:"",role:"",address:"",phoneNumber:"",email:""},errors:{},isSubmitted:!1},e.initialErrorsState=e.state.errors,e.initialPersonalInfoState=e.state.personalInfo,e}return Object(o.a)(s,[{key:"render",value:function(){var e=this.toggleMenu,t=this.toggleModal,s=this.handleChange,a=this.handleSubmit,i=this.state,c=i.errors,l=i.personalInfo,r=i.isSubmitted;return Object(n.jsxs)("div",{className:"PersonalInfo not-visible",children:[Object(n.jsxs)("div",{className:"info-header",children:[Object(n.jsxs)("div",{className:"burger-menu",onClick:e,children:[Object(n.jsx)("span",{className:"line line-1"}),Object(n.jsx)("span",{className:"line line-2"}),Object(n.jsx)("span",{className:"line line-3"})]}),Object(n.jsx)("h2",{children:"Personal Info"}),Object(n.jsx)("div",{className:"close-button-info not-visible",onClick:t,children:Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(n.jsx)("path",{d:"M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"})})})]}),r?Object(n.jsxs)("div",{className:"info-body",children:[Object(n.jsxs)("div",{className:"info-container",children:[Object(n.jsxs)("div",{className:"left-panel",children:[Object(n.jsxs)("div",{className:"first-row",children:[Object(n.jsx)("label",{children:"First Name"}),Object(n.jsx)("p",{children:l.firstName})]}),Object(n.jsxs)("div",{className:"second-row",children:[Object(n.jsx)("label",{children:"Last Name"}),Object(n.jsx)("p",{children:l.lastName})]}),Object(n.jsxs)("div",{className:"third-row",children:[Object(n.jsx)("label",{children:"Role"}),Object(n.jsx)("p",{children:l.role})]})]}),Object(n.jsxs)("div",{className:"right-panel",children:[Object(n.jsxs)("div",{className:"first-row",children:[Object(n.jsxs)("label",{children:[Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(n.jsx)("path",{d:"M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"})}),"Address"]}),Object(n.jsx)("p",{children:l.address})]}),Object(n.jsxs)("div",{className:"second-row",children:[Object(n.jsxs)("label",{children:[Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(n.jsx)("path",{d:"M17.5 2c.276 0 .5.224.5.5v19c0 .276-.224.5-.5.5h-11c-.276 0-.5-.224-.5-.5v-19c0-.276.224-.5.5-.5h11zm2.5 0c0-1.104-.896-2-2-2h-12c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2h12c1.104 0 2-.896 2-2v-20zm-9.5 1h3c.276 0 .5.224.5.501 0 .275-.224.499-.5.499h-3c-.275 0-.5-.224-.5-.499 0-.277.225-.501.5-.501zm1.5 18c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm5-3h-10v-13h10v13z"})}),"Phone Number"]}),Object(n.jsx)("p",{children:l.phoneNumber})]}),Object(n.jsxs)("div",{className:"third-row",children:[Object(n.jsxs)("label",{children:[Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(n.jsx)("path",{d:"M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"})}),"Email"]}),Object(n.jsx)("p",{children:l.email})]})]})]}),Object(n.jsx)("div",{className:"button-container",children:Object(n.jsx)("button",{className:"add-info-btn",onClick:t,children:"Edit info"})})]}):Object(n.jsxs)("div",{className:"info-body",children:[Object(n.jsx)("div",{className:"image-container",children:Object(n.jsx)("img",{src:x,alt:"Personal-info-img"})}),Object(n.jsx)("div",{className:"button-container",children:Object(n.jsx)("button",{className:"add-info-btn",onClick:t,children:"Add info"})})]}),Object(n.jsx)("div",{className:"personal-info-modal not-visible",children:Object(n.jsxs)("form",{children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"First Name"}),c.firstNameError&&Object(n.jsx)("small",{className:"error-pop-up",children:c.firstNameError}),Object(n.jsx)("input",{type:"text",className:"input-field",value:l.firstName,onChange:s,name:"firstName"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"Last Name"}),c.lastNameError&&Object(n.jsx)("small",{className:"error-pop-up",children:c.lastNameError}),Object(n.jsx)("input",{type:"text",className:"input-field",value:l.lastName,onChange:s,name:"lastName"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"Role"}),c.roleError&&Object(n.jsx)("small",{className:"error-pop-up",children:c.roleError}),Object(n.jsx)("input",{type:"text",className:"input-field",value:l.role,onChange:s,name:"role"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"Address"}),c.addressError&&Object(n.jsx)("small",{className:"error-pop-up",children:c.addressError}),Object(n.jsx)("input",{type:"text",className:"input-field",value:l.address,onChange:s,name:"address"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"Phone Number"}),c.phoneNumberError&&Object(n.jsx)("small",{className:"error-pop-up",children:c.phoneNumberError}),Object(n.jsx)("input",{type:"text",name:"phoneNumber",maxLength:"10",value:l.phoneNumber,onChange:s,className:"input-field"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"Email"}),c.emailError&&Object(n.jsx)("small",{className:"error-pop-up",children:c.emailError}),Object(n.jsx)("input",{type:"text",name:"email",className:"input-field",value:l.email,onChange:s})]}),r?Object(n.jsx)("button",{type:"submit",onClick:a,children:"Edit info"}):Object(n.jsx)("button",{type:"submit",onClick:a,children:"Add info"})]})})]})}}]),s}(a.Component),O=s(8),g=s.p+"static/media/undraw_road_to_knowledge_m8s0.63ca498e.svg",w=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(r.a)(this,s),(e=t.call(this)).toggleMenu=function(){document.querySelector(".Menu").classList.toggle("side-menu-active")},e.toggleModal=function(){var t=document.querySelector(".close-button-education"),s=document.querySelector(".education-modal"),n=document.querySelector(".education-body"),a=document.querySelector(".add-education-btn");document.querySelectorAll(".input-field").forEach((function(e){return e.value=""})),e.setState({errors:{}}),t.classList.toggle("not-visible"),s.classList.toggle("not-visible"),n.classList.toggle("not-visible"),e.state.education.length>0&&a.classList.toggle("not-visible")},e.validate=function(){var t=!1,s={},n=/[a-zA-Z]/g,a=document.getElementById("school").value,i=document.getElementById("city").value,c=document.getElementById("startDate").value,l=document.getElementById("endDate").value,r=document.getElementById("degree").value;return a||(t=!0,s.school="Cannot be empty"),i||(t=!0,s.city="Cannot be empty"),(!c||n.test(c)||c.length<4)&&(t=!0,s.startDate="Cannot be empty and must be at least 4 digits long"),n.test(l)&&(t=!0,s.endDate="Must be at least 4 digits long and must contains digits"),r||(t=!0,s.degree="Cannot be empty"),Object.keys(s).length>0&&s.constructor===Object&&e.setState({errors:s}),t},e.addItem=function(t){t.preventDefault();var s={};e.validate()||(s.school=document.getElementById("school").value,s.city=document.getElementById("city").value,s.startDate=document.getElementById("startDate").value,s.endDate=document.getElementById("endDate").value,s.degree=document.getElementById("degree").value,s.description=document.getElementById("description").value,e.setState({education:[].concat(Object(O.a)(e.state.education),[s])}),e.toggleModal())},e.toggleEditModal=function(t){var s=e.state,n=s.education,a=s.isEdited,i=t.currentTarget.parentNode.parentNode.parentNode.getAttribute("id");a?e.setState({tempEduItem:{},isEdited:!1,eduItemId:""}):e.setState({tempEduItem:n[i],isEdited:!0,eduItemId:i}),e.toggleModal()},e.handleEditChange=function(t){e.setState({tempEduItem:Object(p.a)(Object(p.a)({},e.state.tempEduItem),{},Object(h.a)({},t.target.id,t.target.value))})},e.editArray=function(e,t,s){return e[t]=s,e},e.editItem=function(t){if(t.preventDefault(),!e.validate()){var s=e.state,n=s.education,a=s.tempEduItem,i=s.eduItemId;e.setState({isEdited:!1,education:e.editArray(n,i,a)}),e.toggleModal()}},e.deleteItem=function(t){var s=e.state.education,n=t.currentTarget.parentNode.parentNode.parentNode.getAttribute("id");e.setState({education:e.filterArray(s,n)})},e.state={education:[],eduItemId:"",tempEduItem:{},isEdited:!1,errors:{}},e}return Object(o.a)(s,[{key:"filterArray",value:function(e,t){return t>-1&&e.splice(t,1),e}},{key:"render",value:function(){var e=this.toggleMenu,t=this.toggleModal,s=this.toggleEditModal,a=this.addItem,i=this.handleEditChange,c=this.editItem,l=this.deleteItem,r=this.state,o=r.errors,d=r.education,j=r.tempEduItem,m=r.isEdited;return Object(n.jsxs)("div",{className:"Education not-visible",children:[Object(n.jsxs)("div",{className:"education-header",children:[Object(n.jsxs)("div",{className:"burger-menu",onClick:e,children:[Object(n.jsx)("span",{className:"line line-1"}),Object(n.jsx)("span",{className:"line line-2"}),Object(n.jsx)("span",{className:"line line-3"})]}),Object(n.jsx)("h2",{children:"Education"}),m?Object(n.jsx)("div",{className:"close-button-education not-visible",onClick:s,children:Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(n.jsx)("path",{d:"M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"})})}):Object(n.jsx)("div",{className:"close-button-education not-visible",onClick:t,children:Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(n.jsx)("path",{d:"M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"})})})]}),d.length>0?Object(n.jsx)("div",{className:"education-body",children:d.map((function(e,t){return Object(n.jsxs)("div",{id:t,className:"education-item",children:[Object(n.jsxs)("div",{className:"item-header",children:[Object(n.jsxs)("span",{children:[e.startDate,"-",e.endDate||"Present"]}),Object(n.jsxs)("div",{className:"action-buttons",children:[Object(n.jsx)("svg",{onClick:s,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(n.jsx)("path",{d:"M7.127 22.564l-7.126 1.436 1.438-7.125 5.688 5.689zm-4.274-7.104l5.688 5.689 15.46-15.46-5.689-5.689-15.459 15.46z"})}),Object(n.jsx)("svg",{onClick:l,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(n.jsx)("path",{d:"M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"})})]})]}),Object(n.jsxs)("div",{className:"item-main",children:[Object(n.jsx)("p",{className:"degree-title",children:e.degree}),Object(n.jsxs)("p",{className:"location",children:[e.city,", ",e.school]})]}),Object(n.jsx)("div",{className:"item-description",children:Object(n.jsx)("p",{children:e.description})})]},t)}))}):Object(n.jsxs)("div",{className:"education-body",children:[Object(n.jsx)("div",{className:"image-container",children:Object(n.jsx)("img",{src:g,alt:"education-experience"})}),Object(n.jsx)("div",{className:"button-container",children:Object(n.jsx)("button",{onClick:t,children:"Add Education"})})]}),Object(n.jsx)("div",{className:"education-modal not-visible",children:Object(n.jsxs)("form",{children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"School"}),o.school&&Object(n.jsx)("small",{className:"error-pop-up",children:o.school}),m?Object(n.jsx)("input",{type:"text",id:"school",onChange:i,value:j.school,className:"input-field"}):Object(n.jsx)("input",{type:"text",id:"school",className:"input-field"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"City"}),o.city&&Object(n.jsx)("small",{className:"error-pop-up",children:o.city}),m?Object(n.jsx)("input",{type:"text",id:"city",onChange:i,value:j.city,className:"input-field"}):Object(n.jsx)("input",{type:"text",id:"city",className:"input-field"})]}),Object(n.jsxs)("div",{className:"period",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"From"}),o.startDate&&Object(n.jsx)("small",{className:"error-pop-up",children:o.startDate}),m?Object(n.jsx)("input",{type:"text",id:"startDate",onChange:i,value:j.startDate,className:"input-field"}):Object(n.jsx)("input",{type:"text",id:"startDate",className:"input-field"})]}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("label",{children:["To",Object(n.jsx)("small",{children:' ("Present" if empty)'})]}),o.endDate&&Object(n.jsx)("small",{className:"error-pop-up",children:o.endDate}),m?Object(n.jsx)("input",{type:"text",id:"endDate",onChange:i,value:"Present"!==j.endDate?j.endDate:null,className:"input-field"}):Object(n.jsx)("input",{type:"text",id:"endDate",className:"input-field"})]})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"Degree"}),o.degree&&Object(n.jsx)("small",{className:"error-pop-up",children:o.degree}),m?Object(n.jsx)("input",{type:"text",id:"degree",onChange:i,value:j.degree,className:"input-field"}):Object(n.jsx)("input",{type:"text",id:"degree",className:"input-field"})]}),Object(n.jsxs)("div",{className:"description",children:[Object(n.jsxs)("label",{children:["Description",Object(n.jsx)("small",{children:"(optional)"})]}),m?Object(n.jsx)("textarea",{rows:"7",id:"description",onChange:i,value:j.description,className:"input-field"}):Object(n.jsx)("textarea",{rows:"7",id:"description",className:"input-field"})]}),m?Object(n.jsx)("button",{type:"submit",onClick:c,children:"Edit Education"}):Object(n.jsx)("button",{type:"submit",onClick:a,children:"Add Education"})]})}),d.length>0&&Object(n.jsx)("button",{className:"add-education-btn",onClick:t,children:Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(n.jsx)("path",{d:"M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"})})})]})}}]),s}(a.Component),N=s.p+"static/media/undraw_Work_time_re_hdyv.b820d014.svg",f=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(r.a)(this,s),(e=t.call(this)).toggleMenu=function(){document.querySelector(".Menu").classList.toggle("side-menu-active")},e.toggleModal=function(){var t=document.querySelector(".close-button-work"),s=document.querySelector(".work-modal"),n=document.querySelector(".work-body"),a=document.querySelector(".add-work-btn");document.querySelectorAll(".work-input-field").forEach((function(e){return e.value=""})),e.setState({errors:{}}),t.classList.toggle("not-visible"),s.classList.toggle("not-visible"),n.classList.toggle("not-visible"),e.state.works.length>0&&a.classList.toggle("not-visible")},e.validate=function(){var t=!1,s={},n=/[a-zA-Z]/g,a=document.getElementById("companyName").value,i=document.getElementById("workCity").value,c=document.getElementById("workStartDate").value,l=document.getElementById("workEndDate").value,r=document.getElementById("role").value;return a||(t=!0,s.companyName="Cannot be empty"),i||(t=!0,s.workCity="Cannot be empty"),(!c||n.test(c)||c.length<4)&&(t=!0,s.workStartDate="Cannot be empty and must be at least 4 digits long"),n.test(l)&&(t=!0,s.workEndDate="Must be at least 4 digits long and must contains digits"),r||(t=!0,s.role="Cannot be empty"),Object.keys(s).length>0&&s.constructor===Object&&e.setState({errors:s}),t},e.addItem=function(t){t.preventDefault();var s={};e.validate()||(s.companyName=document.getElementById("companyName").value,s.workCity=document.getElementById("workCity").value,s.workStartDate=document.getElementById("workStartDate").value,s.workEndDate=document.getElementById("workEndDate").value,s.role=document.getElementById("role").value,s.workDescr=document.getElementById("workDescr").value,e.setState({works:[].concat(Object(O.a)(e.state.works),[s])}),e.toggleModal())},e.toggleEditModal=function(t){var s=e.state,n=s.works,a=s.isEdited,i=t.currentTarget.parentNode.parentNode.parentNode.getAttribute("id");a?e.setState({tempWorkItem:{},isEdited:!1,workItemId:""}):e.setState({tempWorkItem:n[i],isEdited:!0,workItemId:i}),e.toggleModal()},e.handleEditChange=function(t){e.setState({tempWorkItem:Object(p.a)(Object(p.a)({},e.state.tempWorkItem),{},Object(h.a)({},t.target.id,t.target.value))})},e.editArray=function(e,t,s){return e[t]=s,e},e.editItem=function(t){if(t.preventDefault(),!e.validate()){var s=e.state,n=s.works,a=s.tempWorkItem,i=s.workItemId;e.setState({isEdited:!1,works:e.editArray(n,i,a)}),e.toggleModal()}},e.deleteItem=function(t){var s=e.state.works,n=t.currentTarget.parentNode.parentNode.parentNode.getAttribute("id");e.setState({works:e.filterArray(s,n)})},e.state={works:[],workItemId:"",tempWorkItem:{},isEdited:!1,errors:{}},e}return Object(o.a)(s,[{key:"filterArray",value:function(e,t){return t>-1&&e.splice(t,1),e}},{key:"render",value:function(){var e=this.toggleMenu,t=this.toggleModal,s=this.toggleEditModal,a=this.addItem,i=this.handleEditChange,c=this.editItem,l=this.deleteItem,r=this.state,o=r.errors,d=r.works,j=r.tempWorkItem,m=r.isEdited;return Object(n.jsxs)("div",{className:"WorkExp not-visible",children:[Object(n.jsxs)("div",{className:"work-header",children:[Object(n.jsxs)("div",{className:"burger-menu",onClick:e,children:[Object(n.jsx)("span",{className:"line line-1"}),Object(n.jsx)("span",{className:"line line-2"}),Object(n.jsx)("span",{className:"line line-3"})]}),Object(n.jsx)("h2",{children:"Work Experiences"}),m?Object(n.jsx)("div",{className:"close-button-work not-visible",onClick:s,children:Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(n.jsx)("path",{d:"M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"})})}):Object(n.jsx)("div",{className:"close-button-work not-visible",onClick:t,children:Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(n.jsx)("path",{d:"M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"})})})]}),d.length>0?Object(n.jsx)("div",{className:"work-body",children:d.map((function(e,t){return Object(n.jsxs)("div",{id:t,className:"work-item",children:[Object(n.jsxs)("div",{className:"item-header",children:[Object(n.jsxs)("span",{children:[e.workStartDate,"-",e.workEndDate||"Present"]}),Object(n.jsxs)("div",{className:"action-buttons",children:[Object(n.jsx)("svg",{onClick:s,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(n.jsx)("path",{d:"M7.127 22.564l-7.126 1.436 1.438-7.125 5.688 5.689zm-4.274-7.104l5.688 5.689 15.46-15.46-5.689-5.689-15.459 15.46z"})}),Object(n.jsx)("svg",{onClick:l,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(n.jsx)("path",{d:"M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"})})]})]}),Object(n.jsxs)("div",{className:"item-main",children:[Object(n.jsx)("p",{className:"role-title",children:e.role}),Object(n.jsxs)("p",{className:"location",children:[e.workCity,", ",e.companyName]})]}),Object(n.jsx)("div",{className:"item-description",children:Object(n.jsx)("p",{children:e.workDescr})})]},t)}))}):Object(n.jsxs)("div",{className:"work-body",children:[Object(n.jsx)("div",{className:"image-container",children:Object(n.jsx)("img",{src:N,alt:"work-experiences"})}),Object(n.jsx)("div",{className:"button-container",children:Object(n.jsx)("button",{onClick:t,children:"Add Work"})})]}),Object(n.jsx)("div",{className:"work-modal not-visible",children:Object(n.jsxs)("form",{children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"Company Name"}),o.companyName&&Object(n.jsx)("small",{className:"error-pop-up",children:o.companyName}),m?Object(n.jsx)("input",{type:"text",id:"companyName",onChange:i,value:j.companyName,className:"work-input-field"}):Object(n.jsx)("input",{type:"text",id:"companyName",className:"work-input-field"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"City"}),o.workCity&&Object(n.jsx)("small",{className:"error-pop-up",children:o.workCity}),m?Object(n.jsx)("input",{type:"text",id:"workCity",onChange:i,value:j.workCity,className:"work-input-field"}):Object(n.jsx)("input",{type:"text",id:"workCity",className:"work-input-field"})]}),Object(n.jsxs)("div",{className:"period",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"From"}),o.workStartDate&&Object(n.jsx)("small",{className:"error-pop-up",children:o.workStartDate}),m?Object(n.jsx)("input",{type:"text",id:"workStartDate",onChange:i,value:j.workStartDate,className:"work-input-field"}):Object(n.jsx)("input",{type:"text",id:"workStartDate",className:"work-input-field"})]}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("label",{children:["To",Object(n.jsx)("small",{children:' ("Present" if empty)'})]}),o.workEndDate&&Object(n.jsx)("small",{className:"error-pop-up",children:o.workEndDate}),m?Object(n.jsx)("input",{type:"text",id:"workEndDate",onChange:i,value:"Present"!==j.workEndDate?j.workEndDate:null,className:"work-input-field"}):Object(n.jsx)("input",{type:"text",id:"workEndDate",className:"work-input-field"})]})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"Role"}),o.role&&Object(n.jsx)("small",{className:"error-pop-up",children:o.role}),m?Object(n.jsx)("input",{type:"text",id:"role",onChange:i,value:j.role,className:"work-input-field"}):Object(n.jsx)("input",{type:"text",id:"role",className:"work-input-field"})]}),Object(n.jsxs)("div",{className:"description",children:[Object(n.jsxs)("label",{children:["Description",Object(n.jsx)("small",{children:"(optional)"})]}),m?Object(n.jsx)("textarea",{rows:"7",id:"workDescr",onChange:i,value:j.workDescr,className:"work-input-field"}):Object(n.jsx)("textarea",{rows:"7",id:"workDescr",className:"work-input-field"})]}),m?Object(n.jsx)("button",{type:"submit",onClick:c,children:"Edit Work"}):Object(n.jsx)("button",{type:"submit",onClick:a,children:"Add Work"})]})}),d.length>0&&Object(n.jsx)("button",{className:"add-work-btn",onClick:t,children:Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(n.jsx)("path",{d:"M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"})})})]})}}]),s}(a.Component),y=(s(16),function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(m,{}),Object(n.jsx)(b,{}),Object(n.jsx)(v,{}),Object(n.jsx)(w,{}),Object(n.jsx)(f,{})]})}}]),s}(a.Component));l.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(y,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.443990d0.chunk.js.map