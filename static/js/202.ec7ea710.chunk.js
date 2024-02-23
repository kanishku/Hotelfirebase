"use strict";(self.webpackChunkhotel_dashboard=self.webpackChunkhotel_dashboard||[]).push([[202],{5202:function(e,t,n){n.r(t);var s=n(4165),r=n(1413),a=n(5861),i=n(885),c=n(3014),o=n(2791),l=n(7689),d=n(5573),u=n(7084),h=n(184);t.default=function(){var e=(0,l.UO)().id,t=(0,c.JU)(d.RZ,"hotels/".concat(e)),n=(0,o.useState)(!1),p=(0,i.Z)(n,2),f=p[0],v=p[1],x=(0,o.useState)({}),m=(0,i.Z)(x,2),j=m[0],g=m[1];return(0,o.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(){var n,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,(0,c.QT)(t);case 3:(n=e.sent).exists()?(a=(0,r.Z)({id:n.id},n.data()),g(a),v(!1)):console.log("No such document");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),f?(0,h.jsx)("div",{className:"loading"}):(0,h.jsx)("div",{className:"hotel-details",children:Object.keys(j)&&Object.keys(j).length?(0,h.jsx)(u.Z,{hotel:j,detailsPage:!0}):null})}},7084:function(e,t,n){n.d(t,{Z:function(){return d}});var s=n(885),r=n(2791),a=n(7689),i=n(1087),c=n(5573),o=n(184);var l=function(e){var t=e.editDescription,n=e.setEditDescription,i=e.id,l=(0,r.useState)(""),d=(0,s.Z)(l,2),u=d[0],h=d[1],p=(0,a.s0)();return(0,o.jsxs)("div",{className:"edit",children:[(0,o.jsx)("label",{children:"Please enter the new hotel description below:"}),(0,o.jsx)("textarea",{required:!0,name:"description",id:"description",value:u,onChange:function(e){return h(e.target.value)}}),(0,o.jsx)("button",{className:"update-button",onClick:function(){return(0,c.cB)(i,{description:u}),n(!t),void p("/")},children:"Update Hotel"})]})};var d=function(e){var t=e.hotel,n=e.detailsPage,d=(0,r.useState)(!1),u=(0,s.Z)(d,2),h=u[0],p=u[1],f=(0,a.s0)();return(0,o.jsxs)("div",{className:"hotel-preview",children:[(0,o.jsxs)("div",{className:"image-container",children:[(0,o.jsx)("img",{className:"location-image",src:t.location,alt:"Hotel"}),(0,o.jsxs)("div",{className:"highlights",children:[(0,o.jsxs)("div",{className:"highlights-text",children:[(0,o.jsx)("h2",{children:t.title}),(0,o.jsx)("p",{className:"region",children:t.region})]}),(0,o.jsxs)("div",{className:"highlights-price",children:[(0,o.jsxs)("h2",{className:"per-night",children:["\xa3",t.perNight]}),(0,o.jsx)("p",{children:"per night"})]})]})]}),(0,o.jsxs)("div",{className:"description",children:[(0,o.jsxs)("span",{className:"reviews",children:[(0,o.jsxs)("strong",{className:"review-number",children:[t.stars," stars"]})," (based on ",t.review," reviews)"]}),(0,o.jsx)("hr",{}),(0,o.jsxs)("span",{className:"feature",children:["Main Feature: ",null===t||void 0===t?void 0:t.feature]}),n?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("p",{className:"description-text",children:[t.description," ",(0,o.jsx)("strong",{className:"edit-text",onClick:function(){return p(!h)},children:"Edit Description"}),h?(0,o.jsx)(l,{editDescription:h,setEditDescription:p,id:t.id}):null]}),(0,o.jsx)("button",{onClick:function(){return(0,c.vX)(t.id,f)},children:"Delete Hotel"})]}):(0,o.jsx)(i.rU,{to:"/hotels/".concat(t.id),children:(0,o.jsx)("button",{className:"moreinfo-btn",children:"View More Information"})})]})]})}},5573:function(e,t,n){n.d(t,{vU:function(){return d},vX:function(){return u},RZ:function(){return o},RJ:function(){return l},cB:function(){return h}});var s=n(4165),r=n(1413),a=n(5861),i=n(3014),c=(0,n(2426).ZF)({apiKey:"AIzaSyBQqWEPEyTND3gsdb9jidAyfAx_X6TwZFQ",authDomain:"hotel-dashboard-7382a.firebaseapp.com",projectId:"hotel-dashboard-7382a",storageBucket:"hotel-dashboard-7382a.appspot.com",messagingSenderId:"932112069738",appId:"1:932112069738:web:c7c290689f6c302c4fc613",measurementId:"G-P7W6VR1NZH"}),o=(0,i.ad)(c),l=(0,i.hJ)(o,"hotels"),d=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(t){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.ET)(l,(0,r.Z)({},t));case 2:n=e.sent,console.log("The new hotel was created at ".concat(n.path));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(t,n){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,i.JU)(o,"hotels/".concat(t)),e.next=3,(0,i.oe)(r);case 3:console.log("The hotel has now been deleted"),n("/");case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(t,n){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,i.JU)(o,"hotels/".concat(t)),e.next=3,(0,i.pl)(r,n,{merge:!0});case 3:console.log("The value has been written to the database");case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=202.ec7ea710.chunk.js.map