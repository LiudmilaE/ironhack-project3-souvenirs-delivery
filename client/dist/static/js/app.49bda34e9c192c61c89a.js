webpackJsonp([0],{"/ER3":function(t,e){},"/Uby":function(t,e,r){"use strict";var a=r("cZxk"),s=r("poz5"),i=r("VU/8"),n=i(a.a,s.a,!1,null,null,null);e.a=n.exports},"1B3o":function(t,e){},"3Fl1":function(t,e,r){"use strict";var a=r("Z5Fx");e.a={data:function(){return{souvenirTitle:"",description:""}},props:["trip"],methods:{addOrder:function(){var t={travelerId:this.trip.travelerId,tripId:this.trip._id,souvenirTitle:this.souvenirTitle,description:this.description};Object(a.a)(t).then(function(t){console.log("Order request is added!")}),this.$router.push("/")}}}},"3RnE":function(t,e,r){"use strict";function a(t){r("vANv")}var s=r("lAvY"),i=r("JIZ+"),n=r("VU/8"),o=a,c=n(s.a,i.a,!1,o,"data-v-ef1d7cd4",null);e.a=c.exports},"4HGA":function(t,e,r){"use strict";function a(t){r("RhEI")}var s=r("Yinh"),i=r("fgWs"),n=r("VU/8"),o=a,c=n(s.a,i.a,!1,o,"data-v-3779a44e",null);e.a=c.exports},"4qZx":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),r("section",{staticClass:"container"},[r("div",{staticClass:"columns is-vcentered"},[r("div",{staticClass:"column is-6"},[r("p",{staticClass:"title is-3"},[t._v("Going to travel?")]),t._v(" "),t._m(1),t._v(" "),r("router-link",{attrs:{to:"/trips"}},[r("span",{staticClass:"button is-primary is-large is-outlined"},[t._v("Make an order")])])],1),t._v(" "),r("div",{staticClass:"column is-6"},[r("p",{staticClass:"title is-3"},[t._v("Looking for a special food?")]),t._v(" "),t._m(2),t._v(" "),r("router-link",{attrs:{to:"/trips/new"}},[r("span",{staticClass:"button is-primary is-large is-outlined"},[t._v("Register your new trip")])])],1)])])])},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"hero is-info is-medium has-text-centered"},[r("div",{staticClass:"hero-body",attrs:{id:"img-about"}},[r("div",{staticClass:"container"},[r("h2",{staticClass:"title is-2"},[t._v("How does it work?")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ol",[r("li",[t._v("Search for a traveler")]),t._v(" "),r("li",[t._v("Book free space in traveler's baggage")]),t._v(" "),r("li",[t._v("Schedule the pick up")]),t._v(" "),r("li",[t._v("Pick up your order")]),t._v(" "),r("li",[t._v("Enjoy tasty food")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ol",[r("li",[t._v("Register your travel")]),t._v(" "),r("li",[t._v("Get baggage sharing requests")]),t._v(" "),r("li",[t._v("Schedule your apointment with client")]),t._v(" "),r("li",[t._v("Meet the client")]),t._v(" "),r("li",[t._v("Earn money")])])}],i={render:a,staticRenderFns:s};e.a=i},"7Otq":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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"},"9mLz":function(t,e){},"9xIH":function(t,e){},"Arp+":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[t.error?r("b-notification",{attrs:{type:"is-danger","has-icon":""}},[t._v("\n\t\t"+t._s(t.error.message)+"\n\t")]):t._e(),t._v(" "),r("form",{on:{submit:function(e){e.preventDefault(),t.signup(e)}}},[r("b-field",{attrs:{label:"Username"}},[r("b-input",{attrs:{required:"",maxlength:"30"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),t._v(" "),r("b-field",{attrs:{label:"Email"}},[r("b-input",{attrs:{type:"email",required:"",maxlength:"50"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),r("b-field",{attrs:{label:"First Name"}},[r("b-input",{attrs:{required:"",maxlength:"30"},model:{value:t.firstName,callback:function(e){t.firstName=e},expression:"firstName"}})],1),t._v(" "),r("b-field",{attrs:{label:"Last Name"}},[r("b-input",{attrs:{required:"",maxlength:"30"},model:{value:t.lastName,callback:function(e){t.lastName=e},expression:"lastName"}})],1),t._v(" "),r("b-field",{attrs:{label:"Current country where you live"}},[r("b-select",{attrs:{icon:"globe","icon-pack":"fa"},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}},[r("option",{attrs:{disabled:"",value:""}},[t._v("Please select one")]),t._v(" "),t._l(t.options,function(e){return r("option",{domProps:{value:e}},[t._v(t._s(e))])})],2)],1),t._v(" "),r("b-field",{attrs:{label:"Password"}},[r("b-input",{attrs:{type:"password",required:"","password-reveal":""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),r("button",{staticClass:"button is-primary"},[t._v("Signup")])],1),t._v(" "),r("p",{staticClass:"has-text-centered"},[t._v("Already registered? "),t.$root.user?t._e():r("router-link",{attrs:{to:"/login"}},[t._v("\n\t\tLogin")])],1)],1)},s=[],i={render:a,staticRenderFns:s};e.a=i},Bbdl:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"notification"},[t.$root.user?r("h2",{staticClass:"title"},[t._v("Welcome to your profile page!")]):t._e(),t._v(" "),r("br"),t._v(" "),r("user-card",{attrs:{user:t.user}}),t._v(" "),r("br"),t._v(" "),r("router-link",{attrs:{to:"/trips/new"}},[r("span",{staticClass:"button is-primary is-large is-outlined"},[t._v("Register your new trip")])]),t._v(" "),r("hr"),t._v(" "),r("h3",{staticClass:"subtitle"},[t._v("Your trips")]),t._v(" "),t.trips.length>0?r("div",{staticClass:"columns"},t._l(t.trips,function(t){return r("trip-card",{key:t.id,staticClass:"column",attrs:{trip:t}})})):t._e(),t._v(" "),r("hr"),t._v(" "),r("h3",{staticClass:"subtitle"},[t._v("Your orders")]),t._v(" "),t.orders.length>0?r("div",{staticClass:"columns"},t._l(t.orders,function(t){return r("order-card",{key:t.id,staticClass:"column",attrs:{order:t}})})):t._e(),t._v(" "),r("br")],1)])},s=[],i={render:a,staticRenderFns:s};e.a=i},Cgsl:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card",attrs:{user:t.user}},[r("div",{staticClass:"card-content"},[r("div",{staticClass:"media"},[t._m(0),t._v(" "),r("div",{staticClass:"media-content"},[r("p",{staticClass:"title is-4"},[t._v(t._s(t.user.firstName)+" "+t._s(t.user.lastName))]),t._v(" "),r("p",{staticClass:"subtitle is-6"},[t._v("@"+t._s(t.user.username))])])]),t._v(" "),r("div",{staticClass:"content"},[t._v("\n\t\t\tCurrent country - "+t._s(t.user.country)+".\t\n\t\t")])])])},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"media-left"},[r("figure",{staticClass:"image is-96x96"},[r("img",{attrs:{src:"https://bulma.io/images/placeholders/96x96.png",alt:"Placeholder image"}})])])}],i={render:a,staticRenderFns:s};e.a=i},CyLf:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"box",attrs:{trip:t.trip}},[r("header",{staticClass:"card-header"},[r("p",{staticClass:"card-header-title"},[r("span",{staticClass:"emoji"},[t._v("✈")]),t._v("\n\t\t\t\tTrip from "+t._s(t.trip.from)+" to "+t._s(t.trip.to)+".\n\t\t\t")])]),t._v(" "),r("div",{staticClass:"card-content"},[r("div",{staticClass:"content"},[t.trip.travelerId!==t.user._id?r("p",[t._v("View traveler details "+t._s(t.trip.travelerId))]):t._e(),t._v(" "),t.trip.acceptOrders?r("p",[t._v("Still accept orders")]):r("p",[t._v("Stoped accept orders")]),t._v(" "),r("p",[t._v("Delivery price "+t._s(t.trip.deliveryPrice))]),t._v(" "),r("time",[t._v(t._s(t.trip.tripDate))]),t._v(" "),t.orders.length>0?r("div",t._l(t.orders,function(e){return r("order-card",{key:t.order.id,attrs:{order:e}})})):t._e()]),t._v(" "),t.showForm?r("trip-edit-form",{attrs:{trip:t.trip}}):t._e()],1),t._v(" "),t.user&&t.trip.travelerId===t.user._id?r("footer",{staticClass:"card-footer"},[r("a",{staticClass:"card-footer-item",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.showForm=!t.showForm}}},[t._v("Edit")]),t._v(" "),t.trip.travelerId===t.user._id?r("a",{staticClass:"card-footer-item",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.deleteTrip(e)}}},[t._v("Delete")]):t._e()]):t._e(),t._v(" "),t.user&&t.trip.acceptOrders&&t.trip.travelerId!==t.user._id?r("footer",{staticClass:"card-footer"},[r("button",{staticClass:"button is-primary is-medium",on:{click:function(e){t.isComponentModalActive=!0}}},[t._v("\n            Add Order\n        ")]),t._v(" "),r("b-modal",{attrs:{active:t.isComponentModalActive,"has-modal-card":""},on:{"update:active":function(e){t.isComponentModalActive=e}}},[r("order-form",{attrs:{trip:t.trip}})],1)],1):t._e()])},s=[],i={render:a,staticRenderFns:s};e.a=i},EV9z:function(t,e,r){"use strict";function a(t){r("9xIH")}var s=r("9mLz"),i=r.n(s),n=r("4qZx"),o=r("VU/8"),c=a,l=o(i.a,n.a,!1,c,"data-v-56dcab18",null);e.a=l.exports},FX9o:function(t,e){},Ftmc:function(t,e,r){"use strict";function a(t){r("Fuv7")}var s=r("QZma"),i=r("CyLf"),n=r("VU/8"),o=a,c=n(s.a,i.a,!1,o,null,null);e.a=c.exports},Fuv7:function(t,e){},IH31:function(t,e,r){"use strict";var a=r("Vovw"),s=r("Cgsl"),i=r("VU/8"),n=i(a.a,s.a,!1,null,null,null);e.a=n.exports},"JIZ+":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"box",attrs:{order:t.order}},[r("header",{staticClass:"card-header"},[r("p",{staticClass:"card-header-title"},[r("span",{staticClass:"emoji"},[t._v("⏳")]),t._v("\n\t\t\tOrder of "+t._s(t.order.souvenirTitle)+".\n\t\t")])]),t._v(" "),r("div",{staticClass:"card-content"},[r("div",{staticClass:"content"},[r("p",[t._v(t._s(t.order.description))])])]),t._v(" "),t.user&&t.order.clientId===t.user._id?r("footer",{staticClass:"card-footer"},[r("a",{staticClass:"card-footer-item",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.deleteOrder(e)}}},[t._v("Delete")])]):t._e(),t._v(" "),t.user&&t.order.travelerId===t.user._id&&"pending"===t.order.status?r("footer",{staticClass:"card-footer"},[r("a",{staticClass:"card-footer-item",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.acceptOrder(e)}}},[t._v("Accept request")]),t._v(" "),r("a",{staticClass:"card-footer-item",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.rejectOrder(e)}}},[t._v("Reject request")])]):t._e()])},s=[],i={render:a,staticRenderFns:s};e.a=i},M93x:function(t,e,r){"use strict";function a(t){r("FX9o")}var s=r("xJD8"),i=r("MTSB"),n=r("VU/8"),o=a,c=n(s.a,i.a,!1,o,null,null);e.a=c.exports},MTSB:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("nav",{staticClass:"navbar is-primary",attrs:{role:"navigation","aria-label":"main navigation"}},[r("div",{staticClass:"navbar-brand"},[r("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[r("span",{staticClass:"emoji"},[t._v(" ✈ ")]),t._v("\n\t\t\t\t\tSouvenirs Delivery \n\t\t\t\t")]),t._v(" "),t._m(0),t._v(" "),t._m(1)],1),t._v(" "),r("div",{staticClass:"navbar-menu",attrs:{id:"navMenu"}},[r("div",{staticClass:"navbar-end"},[t.$root.user?t._e():r("router-link",{staticClass:"navbar-item",attrs:{to:"/login"}},[t._v("\n\t\t\t\t\t\t\tLogin\n\t\t\t\t\t")]),t._v(" "),t.$root.user?t._e():r("router-link",{staticClass:"navbar-item",attrs:{to:"/signup"}},[t._v("\n\t\t\t\t\t\t\tSignup\n\t\t\t\t\t")]),t._v(" "),r("router-link",{staticClass:"navbar-item",attrs:{to:"/about"}},[t._v("\n\t\t\t\t\t\t\tHow does it work?\n\t\t\t\t\t")]),t._v(" "),t.$root.user?r("router-link",{staticClass:"navbar-item",attrs:{to:"/profile"}},[t._v("\n\t\t\t\t\t\t\tMy Profile\n\t\t\t\t\t")]):t._e(),t._v(" "),t.$root.user?r("a",{staticClass:"navbar-item",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.logout(e)}}},[t._v("\n\t\t\t\t\t\t\tLogout\n\t\t\t\t\t")]):t._e()],1)])]),t._v(" "),r("div",[r("router-view")],1),t._v(" "),t._m(2)])},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"gh-btn navbar-item",attrs:{title:"Github",id:"gh-btn",target:"_blank","aria-label":"Star on GitHub",href:"https://github.com/LiudmilaE/ironhack-project3-souvenirs-delivery"}},[r("i",{staticClass:"fa fa-github fa-2",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"navbar-burger burger",attrs:{"data-target":"navMenu"}},[r("span"),t._v(" "),r("span"),t._v(" "),r("span")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("div",{staticClass:"content has-text-centered"},[a("p",[t._v(" ©\n\t\t        "),a("strong",[t._v("Souvenirs Delivery")]),t._v(" by "),a("a",{attrs:{href:"https://www.linkedin.com/in/liudmyla-iefremova/",target:"_blank"}},[t._v("Liudmyla Iefremova")]),t._v(". The source code is available on\n\t\t        "),a("a",{attrs:{href:"https://github.com/LiudmilaE/ironhack-project3-souvenirs-delivery",target:"_blank"}},[a("i",{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}}),t._v(" GitHub")]),t._v(". Powered by "),a("a",{attrs:{target:"_blank",href:"https://vuejs.org/"}},[a("img",{attrs:{src:r("7Otq"),id:"vue-logo",alt:"Vue.js"}})])])])])])}],i={render:a,staticRenderFns:s};e.a=i},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("7+uW"),s=r("M93x"),i=r("YaEn"),n=r("Pfph"),o=r("MMSg"),c=r.n(o),l=r("doPI");r.n(l);a.a.use(c.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:i.a,render:function(t){return t(s.a)},data:{user:null},created:function(){Object(n.a)(this.$root)}})},Nnj1:function(t,e,r){"use strict";function a(t){r("/ER3")}var s=r("3Fl1"),i=r("lQyT"),n=r("VU/8"),o=a,c=n(s.a,i.a,!1,o,"data-v-b5aa4d6c",null);e.a=c.exports},PRy2:function(t,e,r){"use strict";var a=r("/Uby");e.a={data:function(){return{}},components:{SearchBar:a.a}}},Pfph:function(t,e,r){"use strict";function a(t){var e=t.token,r=t.user;d.a.defaults.headers.common.Authorization="Bearer "+e,localStorage.setItem("token",e),localStorage.setItem("user",l()(r))}function s(t){var e=localStorage.getItem("token"),r=localStorage.getItem("user");if(e&&r){var s=JSON.parse(r);a({token:e,user:s}),t.user=s}}function i(t,e,r){return v.post("/login",{username:t,password:e}).then(function(t){return a(t.data),r.user=t.data.user,t.data})}function n(t){localStorage.removeItem("token"),t.user=null,delete d.a.defaults.headers.common.Authorization}function o(t){return v.post("/signup",t).then(function(t){return t.data})}e.a=s,e.b=i,e.c=n,e.d=o;var c=r("mvHQ"),l=r.n(c),u=r("mtWM"),d=r.n(u),v=d.a.create({baseURL:"/api"})},QRL1:function(t,e,r){"use strict";var a=r("Pfph");e.a={data:function(){return{error:null,username:"",email:"",password:"",firstName:"",lastName:"",country:"",options:["Ukraine","France"]}},methods:{signup:function(){var t=this;this.error=null,Object(a.d)({username:this.username,email:this.email,firstName:this.firstName,lastName:this.lastName,password:this.password,country:this.country}).then(function(){t.$router.push("/login")}).catch(function(e){t.error=e.response.data.error,console.error("Signup err",e.response.data.error)})}}}},QZma:function(t,e,r){"use strict";var a=r("Nnj1"),s=r("3RnE"),i=r("m7M/"),n=r("fFjU"),o=r("Z5Fx");e.a={data:function(){return{user:this.$root.user||null,isComponentModalActive:!1,order:"",showForm:!1,orders:[]}},components:{OrderForm:a.a,TripEditForm:i.a,OrderCard:s.a},props:["trip"],methods:{deleteTrip:function(){Object(n.b)(this.trip._id),this.$router.push("/")}},created:function(){var t=this;Object(o.c)().then(function(e){var r=t.trip._id;t.orders=e.filter(function(t){return t.tripId===r})})}}},RhEI:function(t,e){},TkKu:function(t,e,r){"use strict";var a=r("IH31"),s=r("Ftmc"),i=r("3RnE"),n=r("fFjU"),o=r("Z5Fx");e.a={data:function(){return{user:this.$root.user||null,trips:[],orders:[]}},created:function(){var t=this;Object(n.c)().then(function(e){var r=t.$root.user._id;t.trips=e.filter(function(t){return t.travelerId===r})}),Object(o.c)().then(function(e){var r=t.$root.user._id;t.orders=e.filter(function(t){return t.clientId===r})})},components:{UserCard:a.a,TripCard:s.a,OrderCard:i.a}}},Vovw:function(t,e,r){"use strict";e.a={data:function(){return{}},props:["user"],methods:{search:function(){searchTraveler(console.log("searchTraveler was called!"))}}}},WPzt:function(t,e,r){"use strict";var a=r("fFjU");e.a={data:function(){return{tripDate:"",deliveryPrice:"",acceptOrders:!0,error:null}},props:["trip"],methods:{updateTrip:function(){var t=this;this.error=null;var e={acceptOrders:this.acceptOrders,tripDate:this.tripDate,deliveryPrice:this.deliveryPrice};Object(a.d)(this.trip._id,e).then(function(){t.$router.push("/")}).catch(function(e){t.error=e.response.data.error,console.error("Trip edit err",e.response.data.error)})}}}},YaEn:function(t,e,r){"use strict";var a=r("7+uW"),s=r("/ocq"),i=r("wD/n"),n=r("EV9z"),o=r("tYer"),c=r("fpQY"),l=r("b99U"),u=r("jcpu"),d=r("4HGA"),v=r("Pfph");a.a.use(s.a);var p=new s.a({mode:"history",routes:[{path:"/",component:i.a},{path:"/about",component:n.a},{path:"/login",component:c.a,meta:{requiresNonAuth:!0}},{path:"/signup",component:o.a,meta:{requiresNonAuth:!0}},{path:"/profile",component:l.a,meta:{requiresAuth:!0}},{path:"/trips",component:u.a},{path:"/trips/new",component:d.a,meta:{requiresAuth:!0}}]});p.beforeEach(function(t,e,r){if(t.meta.requiresAuth&&(Object(v.a)(p.app.$root),!p.app.$root.user))return r({path:"/login",query:{redirect:encodeURIComponent(t.fullPath)}});r()}),p.beforeEach(function(t,e,r){if(t.meta.requiresNonAuth&&(Object(v.a)(p.app.$root),p.app.$root.user))return r("/");r()}),e.a=p},Yinh:function(t,e,r){"use strict";var a=r("fFjU");e.a={data:function(){return{from:"",to:"",options:["Ukraine","France"],tripDate:"",deliveryPrice:"",error:null}},methods:{addTrip:function(){var t=this;this.error=null,Object(a.a)({from:this.from,to:this.to,tripDate:this.tripDate,deliveryPrice:this.deliveryPrice}).then(function(){t.$router.push("/")}).catch(function(e){t.error=e.response.data.error,console.error("Trip add err",e.response.data.error)})}}}},Z5Fx:function(t,e,r){"use strict";function a(){return l.get("/").then(function(t){return t.data})}function s(t){return l.post("/",t).then(function(t){return t.data})}function i(t,e){return l.patch("/"+t,e).then(function(t){return t.data})}function n(t){return l.delete("/"+t).then(function(t){console.log("Order is deleted")})}e.c=a,e.a=s,e.d=i,e.b=n;var o=r("mtWM"),c=r.n(o),l=c.a.create({baseURL:"/api/orders"})},b99U:function(t,e,r){"use strict";function a(t){r("mnNb")}var s=r("TkKu"),i=r("Bbdl"),n=r("VU/8"),o=a,c=n(s.a,i.a,!1,o,null,null);e.a=c.exports},cZxk:function(t,e,r){"use strict";var a=r("IH31"),s=r("Ftmc");r("fFjU");e.a={data:function(){return{trips:[],query:""}},components:{UserCard:a.a,TripCard:s.a}}},doPI:function(t,e){},fFjU:function(t,e,r){"use strict";function a(t){return l.get("/",{params:t}).then(function(t){return t.data})}function s(t){return l.post("/",t).then(function(t){return t.data})}function i(t,e){return l.patch("/"+t,e).then(function(t){return t.data})}function n(t){return l.delete("/"+t).then(function(t){console.log("Trip is deleted")})}e.c=a,e.a=s,e.d=i,e.b=n;var o=r("mtWM"),c=r.n(o),l=c.a.create({baseURL:"/api/trips"})},fgWs:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[t.error?r("b-notification",{attrs:{type:"is-danger","has-icon":""}},[t._v("\n\t\t\t"+t._s(t.error.message)+"\n\t\t")]):t._e(),t._v(" "),r("form",{on:{submit:function(e){e.preventDefault(),t.addTrip(e)}}},[r("b-field",{attrs:{label:"Country, you will travel from"}},[r("b-select",{attrs:{icon:"globe","icon-pack":"fa"},model:{value:t.from,callback:function(e){t.from=e},expression:"from"}},[r("option",{attrs:{disabled:"",value:""}},[t._v("Please select one")]),t._v(" "),t._l(t.options,function(e){return r("option",{domProps:{value:e}},[t._v(t._s(e))])})],2)],1),t._v(" "),r("b-field",{attrs:{label:"Country, you are going to"}},[r("b-select",{attrs:{icon:"globe","icon-pack":"fa"},model:{value:t.to,callback:function(e){t.to=e},expression:"to"}},[r("option",{attrs:{disabled:"",value:""}},[t._v("Please select one")]),t._v(" "),t._l(t.options,function(e){return r("option",{domProps:{value:e}},[t._v(t._s(e))])})],2)],1),t._v(" "),r("b-field",{attrs:{label:"Trip Date"}},[r("b-input",{attrs:{type:"date",required:"",maxlength:"30"},model:{value:t.tripDate,callback:function(e){t.tripDate=e},expression:"tripDate"}})],1),t._v(" "),r("b-field",{attrs:{label:"Delivery Price in USD"}},[r("b-input",{attrs:{type:"number",required:"",maxlength:"30"},model:{value:t.deliveryPrice,callback:function(e){t.deliveryPrice=e},expression:"deliveryPrice"}})],1),t._v(" "),r("button",{staticClass:"button is-primary"},[t._v("Add trip details")])],1)],1)},s=[],i={render:a,staticRenderFns:s};e.a=i},fpQY:function(t,e,r){"use strict";function a(t){r("jv9g")}var s=r("nlR8"),i=r("xGOk"),n=r("VU/8"),o=a,c=n(s.a,i.a,!1,o,"data-v-403c28f4",null);e.a=c.exports},jcpu:function(t,e,r){"use strict";var a=r("xC+/"),s=r("rSZu"),i=r("VU/8"),n=i(a.a,s.a,!1,null,null,null);e.a=n.exports},jv9g:function(t,e){},lAvY:function(t,e,r){"use strict";var a=r("Z5Fx");e.a={data:function(){return{user:this.$root.user||null}},props:["order"],methods:{deleteOrder:function(){Object(a.b)(this.order._id),this.$router.push("/")},acceptOrder:function(){var t=this;this.error=null;var e={status:"accepted"};Object(a.d)(this.order._id,e).then(function(){t.$router.push("/")}).catch(function(e){t.error=e.response.data.error,console.error("Order edit err",e.response.data.error)})},rejectOrder:function(){var t=this;this.error=null;var e={status:"rejected"};Object(a.d)(this.order._id,e).then(function(){t.$router.push("/")}).catch(function(e){t.error=e.response.data.error,console.error("Order edit err",e.response.data.error)})}}}},lNGL:function(t,e){},lQyT:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{attrs:{trip:t.trip},on:{submit:function(e){e.preventDefault(),t.addOrder(e)}}},[r("div",{staticClass:"modal-card"},[t._m(0),t._v(" "),r("section",{staticClass:"modal-card-body"},[r("b-field",{attrs:{label:"Souvenir Title"}},[r("b-input",{attrs:{type:"text",placeholder:"KitKat Melon",required:""},model:{value:t.souvenirTitle,callback:function(e){t.souvenirTitle=e},expression:"souvenirTitle"}})],1),t._v(" "),r("b-field",{attrs:{label:"Description"}},[r("b-input",{attrs:{type:"textarea",placeholder:"Description of the souvenir",required:""},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1)],1),t._v(" "),r("footer",{staticClass:"modal-card-foot"},[r("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(e){t.$parent.close()}}},[t._v("Close")]),t._v(" "),r("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[t._v("Add order")])])])])},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"modal-card-head"},[r("p",{staticClass:"modal-card-title"},[t._v("Fill details of your order")])])}],i={render:a,staticRenderFns:s};e.a=i},"m7M/":function(t,e,r){"use strict";var a=r("WPzt"),s=r("woLJ"),i=r("VU/8"),n=i(a.a,s.a,!1,null,null,null);e.a=n.exports},mnNb:function(t,e){},nlR8:function(t,e,r){"use strict";var a=r("Pfph");e.a={data:function(){return{username:"",password:""}},methods:{login:function(){var t=this;Object(a.b)(this.username,this.password,this.$root).then(function(e){t.$router.push("/")})}}}},poz5:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container"},[r("b-field",[r("b-input",{attrs:{placeholder:"Search by country...",type:"search",icon:"search",expanded:""},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}}),t._v(" "),r("p",{staticClass:"control"},[r("router-link",{attrs:{to:t.query?"/trips?from="+t.query:"/trips"}},[r("button",{staticClass:"button is-primary",attrs:{id:"search-btn"}},[t._v("Search")])])],1)],1)],1)},s=[],i={render:a,staticRenderFns:s};e.a=i},rSZu:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container"},[t._m(0),t._v(" "),t.trips&&t.trips.length>0?r("div",{staticClass:"column"},t._l(t.trips,function(t){return r("trip-card",{key:t.id,attrs:{trip:t}})})):r("p",{staticClass:"subtitle"},[t._v("No trips found...")])])},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h2",{staticClass:"title"},[r("span",{staticClass:"emoji"},[t._v("🗺")]),t._v("Trips Page ")])}],i={render:a,staticRenderFns:s};e.a=i},tYer:function(t,e,r){"use strict";function a(t){r("1B3o")}var s=r("QRL1"),i=r("Arp+"),n=r("VU/8"),o=a,c=n(s.a,i.a,!1,o,"data-v-13a2e29d",null);e.a=c.exports},ul59:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"hero is-info is-medium"},[r("div",{staticClass:"hero-body",attrs:{id:"img-hero"}},[t._m(0),t._v(" "),r("search-bar")],1)]),t._v(" "),r("section",{staticClass:"hero is-primary",attrs:{id:"extra-income"}},[r("div",{staticClass:"hero-body"},[r("div",{staticClass:"container has-text-centered"},[r("h2",{staticClass:"title is-3 is-spaced"},[t._v("\n\t\t\t\t\tEarn extra income\n\t\t\t\t")]),t._v(" "),r("h3",{staticClass:"subtitle is-4"},[t._v("Are you going to travel soon? Register your spare space in baggage, bring tasty food from your hometown and earn some extra income\n\t\t\t\t")]),t._v(" "),r("router-link",{attrs:{to:"/trips/new"}},[r("span",{staticClass:"button is-primary is-large is-inverted is-outlined",attrs:{id:"trip-btn"}},[t._v("Register your trip")])])],1)])])])},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("h1",{staticClass:"title is-1"},[t._v("Souvenirs Delivery")]),t._v(" "),r("h2",{staticClass:"subtitle is-3"},[t._v("There is always something tasty to discover in any country!")])])}],i={render:a,staticRenderFns:s};e.a=i},vANv:function(t,e){},"wD/n":function(t,e,r){"use strict";function a(t){r("lNGL")}var s=r("PRy2"),i=r("ul59"),n=r("VU/8"),o=a,c=n(s.a,i.a,!1,o,"data-v-926dfbb8",null);e.a=c.exports},woLJ:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container",attrs:{trip:t.trip}},[t.error?r("b-notification",{attrs:{type:"is-danger","has-icon":""}},[t._v("\n\t\t\t"+t._s(t.error.message)+"\n\t\t")]):t._e(),t._v(" "),r("form",{on:{submit:function(e){e.preventDefault(),t.updateTrip(e)}}},[r("b-field",{attrs:{label:"Trip Date"}},[r("b-input",{attrs:{type:"date",required:"",maxlength:"30"},model:{value:t.tripDate,callback:function(e){t.tripDate=e},expression:"tripDate"}})],1),t._v(" "),r("b-field",{attrs:{label:"Still has space to accept orders?"}},[r("div",{staticClass:"field"},[r("b-checkbox",{model:{value:t.acceptOrders,callback:function(e){t.acceptOrders=e},expression:"acceptOrders"}},[t._v("\n                "+t._s(t.acceptOrders?"Yes":"No")+"\n            ")])],1)]),t._v(" "),r("b-field",{attrs:{label:"Delivery Price in USD"}},[r("b-input",{attrs:{type:"number",required:"",maxlength:"30"},model:{value:t.deliveryPrice,callback:function(e){t.deliveryPrice=e},expression:"deliveryPrice"}})],1),t._v(" "),r("button",{staticClass:"button is-primary"},[t._v("Edit trip details")])],1)],1)},s=[],i={render:a,staticRenderFns:s};e.a=i},"xC+/":function(t,e,r){"use strict";var a=r("Ftmc"),s=r("fFjU");e.a={data:function(){return{trips:[]}},components:{TripCard:a.a},created:function(){var t=this;Object(s.c)(this.$route.query).then(function(e){t.trips=e})}}},xGOk:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("form",{on:{submit:function(e){e.preventDefault(),t.login(e)}}},[r("b-field",{attrs:{label:"Username"}},[r("b-input",{attrs:{maxlength:"50"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),t._v(" "),r("b-field",{attrs:{label:"Password"}},[r("b-input",{attrs:{type:"password","password-reveal":""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),r("button",{staticClass:"button is-primary"},[t._v("Login")])],1),t._v(" "),r("p",{staticClass:"has-text-centered"},[t._v("\nYou don't have an account yet? "),t.$root.user?t._e():r("router-link",{attrs:{to:"/signup"}},[t._v("\n\t\t\t\tSignup\n\t\t\t")])],1)])},s=[],i={render:a,staticRenderFns:s};e.a=i},xJD8:function(t,e,r){"use strict";var a=r("Pfph");document.addEventListener("DOMContentLoaded",function(){var t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);t.length>0&&t.forEach(function(t){t.addEventListener("click",function(){var e=t.dataset.target,r=document.getElementById(e);t.classList.toggle("is-active"),r.classList.toggle("is-active")})})}),e.a={name:"app",methods:{logout:function(){Object(a.c)(this.$root),this.$router.push("/")}}}}},["NHnr"]);
//# sourceMappingURL=app.49bda34e9c192c61c89a.js.map