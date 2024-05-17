(this["webpackJsonpsplitter-simple-example"]=this["webpackJsonpsplitter-simple-example"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(22),r=n(4),c=n(2),i=(n(28),n(29),n(6)),o=n(5),s=n.n(o),l=n(7),d=n(10),u=n(40),p=(n(31),n(8)),j=n(1);var b=function(e){var t=e.organizations,n=e.setSelectedOrganization,a=e.setOrganizations,i=e.handleUpdateClick,o=Object(c.useState)(""),b=Object(r.a)(o,2),m=b[0],O=b[1],h=function(){var e=Object(l.a)(s.a.mark((function e(t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,u.a.post("".concat(p.a,"/organization/add"),{name:m});case 4:r=e.sent,n(r.data),a((function(e){return[].concat(Object(d.a)(e),[r.data])})),O(""),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error("Error adding organization:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"tile-y",children:[Object(j.jsxs)("form",{onSubmit:h,style:{marginBottom:"10px"},children:[Object(j.jsx)("input",{type:"text",value:m,onChange:function(e){return O(e.target.value)},placeholder:"Enter organization name",required:!0}),Object(j.jsx)("button",{type:"submit",children:"Add Organization"})]}),t.map((function(e,t){return Object(j.jsxs)("div",{style:{margin:"5px"},children:[Object(j.jsx)("div",{style:{cursor:"pointer",display:"inline-block"},onClick:function(){return n(e)},children:Object(j.jsx)("strong",{children:e.name})}),Object(j.jsx)("button",{style:{marginLeft:"10px"},onClick:function(){return i({type:"organization",data:e})},children:"Update"})]},t)}))]})};var m=function(e){var t=e.organizationId,n=e.departments,a=e.setDepartments,i=e.setSelectedDepartment,o=e.handleUpdateClick,b=Object(c.useState)(""),m=Object(r.a)(b,2),O=m[0],h=m[1],x=function(){var e=Object(l.a)(s.a.mark((function e(){var r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,O){e.next=3;break}throw new Error("Department name cannot be empty");case 3:if(!n.find((function(e){return e.name===O}))){e.next=5;break}throw new Error("Department name already exists");case 5:if(t){e.next=7;break}throw new Error("Organization ID is required");case 7:return e.next=9,u.a.post("".concat(p.a,"/organization/").concat(t,"/add-department"),{name:O});case 9:r=e.sent,c=r.data,h(""),a([].concat(Object(d.a)(n),[c])),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.error("Error creating department:",e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"tile-y",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"text",value:O,placeholder:"Enter department name",onChange:function(e){return h(e.target.value)},required:!0}),Object(j.jsx)("button",{onClick:x,children:"Create New Department"})]}),n.map((function(e,t){return Object(j.jsxs)("div",{style:{margin:"5px"},children:[Object(j.jsx)("div",{style:{cursor:"pointer",display:"inline-block"},onClick:function(){return i(e)},children:Object(j.jsx)("strong",{children:e.name})}),Object(j.jsx)("button",{style:{marginLeft:"10px"},onClick:function(){return o({type:"department",data:e})},children:"Update"})]},t)}))]})};var O=function(e){var t=e.organizationId,n=e.selectedDepartment,a=e.handleUpdateClick,i=Object(c.useState)(""),o=Object(r.a)(i,2),d=o[0],b=o[1],m=Object(c.useState)(""),O=Object(r.a)(m,2),h=O[0],x=O[1],f=Object(c.useState)([]),v=Object(r.a)(f,2),g=v[0],y=v[1];Object(c.useEffect)((function(){n?k():y([])}),[n]);var k=function(){var e=Object(l.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!n){e.next=6;break}return e.next=4,u.a.get("".concat(p.a,"/organization/").concat(t,"/").concat(n._id,"/employees"));case 4:a=e.sent,y(a.data);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Error fetching employees:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.post("".concat(p.a,"/organization/").concat(t,"/").concat(n._id,"/add-employee"),{name:d,position:h});case 3:e.sent,k(),b(""),x(""),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error("Error adding employee:",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"tile-y",children:n?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"text",value:d,onChange:function(e){return b(e.target.value)},placeholder:"Enter employee name",required:!0}),Object(j.jsx)("input",{type:"text",value:h,onChange:function(e){return x(e.target.value)},placeholder:"Enter employee position",required:!0}),Object(j.jsx)("button",{onClick:C,children:"Add Employee"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("strong",{children:"List of Employees:"}),Object(j.jsx)("ul",{children:g.map((function(e,t){return Object(j.jsxs)("li",{style:{margin:"5px"},children:[Object(j.jsxs)("span",{children:[e.name," - ",e.position]}),Object(j.jsx)("button",{style:{marginLeft:"10px"},onClick:function(){return a({type:"employee",data:e})},children:"Update"})]},t)}))})]})]}):Object(j.jsx)("div",{children:"Please select a department to view employees."})})};n(37);var h=function(e){var t=e.show,n=e.handleClose,a=e.handleSave,r=e.title,c=e.children;return Object(j.jsx)("div",{className:"modal ".concat(t?"show":""),onClick:n,children:Object(j.jsxs)("div",{className:"modal-content",onClick:function(e){return e.stopPropagation()},children:[Object(j.jsxs)("div",{className:"modal-header",children:[Object(j.jsx)("h4",{className:"modal-title",children:r}),Object(j.jsx)("button",{className:"close",onClick:n,children:"\xd7"})]}),Object(j.jsx)("div",{className:"modal-body",children:c}),Object(j.jsxs)("div",{className:"modal-footer",children:[Object(j.jsx)("button",{className:"btn btn-secondary",onClick:n,children:"Close"}),Object(j.jsx)("button",{className:"btn btn-primary",onClick:a,children:"Save changes"})]})]})})},x=n(13);var f=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(null),d=Object(r.a)(o,2),f=d[0],v=d[1],g=Object(c.useState)(null),y=Object(r.a)(g,2),k=y[0],C=y[1],w=Object(c.useState)(null),z=Object(r.a)(w,2),S=z[0],E=z[1],N=Object(c.useState)(!1),D=Object(r.a)(N,2),U=D[0],_=D[1];Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("".concat(p.a,"/organization"));case 3:t=e.sent,a(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching organizations:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var q=function(e){E(e),_(!0)},I=function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"organization"!==S.type){e.next=6;break}return e.next=4,u.a.put("".concat(p.a,"/organization/update/").concat(S.data._id),{name:S.data.name});case 4:e.next=14;break;case 6:if("department"!==S.type){e.next=11;break}return e.next=9,u.a.put("".concat(p.a,"/organization/").concat(f._id,"/update-department/").concat(S.data._id),{name:S.data.name});case 9:e.next=14;break;case 11:if("employee"!==S.type){e.next=14;break}return e.next=14,u.a.put("".concat(p.a,"/organization/").concat(f._id,"/").concat(k._id,"/update-employee/").concat(S.data._id),{name:S.data.name,position:S.data.position});case 14:_(!1),E(null),window.location.reload(),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),console.error("Error updating data:",e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(x.b,{direction:x.a.Horizontal,children:[Object(j.jsx)(b,{organizations:n,setSelectedOrganization:function(e){v(e),C(null)},setOrganizations:a,handleUpdateClick:q}),f&&Object(j.jsxs)(x.b,{direction:x.a.Vertical,children:[Object(j.jsx)(m,{organizationId:f._id,departments:f.departments,setDepartments:function(e){v(Object(i.a)(Object(i.a)({},f),{},{departments:e}))},setSelectedDepartment:C,handleUpdateClick:q}),Object(j.jsx)(O,{organizationId:f._id,departments:f.departments,selectedDepartment:k,handleUpdateClick:q})]})]}),S&&Object(j.jsx)(h,{show:U,handleClose:function(){return _(!1)},handleSave:I,title:"Update ".concat(S.type.charAt(0).toUpperCase()+S.type.slice(1)),children:Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"text",value:S.data.name,onChange:function(e){return E(Object(i.a)(Object(i.a)({},S),{},{data:Object(i.a)(Object(i.a)({},S.data),{},{name:e.target.value})}))},placeholder:"Enter name",required:!0}),"employee"===S.type&&Object(j.jsx)("input",{type:"text",value:S.data.position,onChange:function(e){return E(Object(i.a)(Object(i.a)({},S),{},{data:Object(i.a)(Object(i.a)({},S.data),{},{position:e.target.value})}))},placeholder:"Enter position",required:!0})]})})]})},v="ScrollableChildren";var g=function(){var e=Object(c.useState)(v),t=Object(r.a)(e,2),n=t[0];return t[1],Object(j.jsx)("div",{className:"app",children:Object(j.jsx)("div",{className:"splits",children:n===v&&Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(f,{})})})})},y=document.getElementById("root");Object(a.render)(Object(j.jsx)(g,{}),y)},8:function(e){e.exports=JSON.parse('{"a":"http://13.234.254.110:5000/api"}')}},[[39,1,2]]]);
//# sourceMappingURL=main.c8df09ba.chunk.js.map