webpackJsonp([1],{"0hlf":function(t,e){},"1Wpz":function(t,e){t.exports={"route-info":"Current page",search:"Search","contact-list":"Contact List","add-contact":"Add Contact","edit-contact":"Edit Contact","list-contact-name":"Name","list-contact-gender":"Gender","list-contact-gender-male":"Male","list-contact-gender-female":"Female","list-contact-country":"Country","list-contact-email":"Email","list-contact-postal-code":"Postal Code","list-contact-no-data":"(none)",help:"Help"}},CqGX:function(t,e){t.exports={"route-info":"现在位置",search:"检索","contact-list":"通讯录","add-contact":"添加好友","edit-contact":"更改信息","list-contact-name":"姓名","list-contact-gender":"性别","list-contact-gender-male":"男","list-contact-gender-female":"女","list-contact-country":"国籍","list-contact-email":"Email 地址","list-contact-postal-code":"邮政编码","list-contact-no-data":"（未知）",help:"帮助"}},EnYR:function(t,e){t.exports={p1:"蛋糕伊普森坐啊美特馅饼巧克力蛋糕。 蛋白杏仁饼干布丁顶部糕点甘草棉花糖棒棒糖布朗尼焦糖。 棉花糖松饼芝麻饼芝麻饼冻豆巧克力棒熊爪。 棉花糖杯子蛋糕糖果棒棒糖丹麦语。 棉花糖姜饼丹麦苹果派胡萝卜蛋糕甜面包卷糖果。 蛋糕果冻o蛋糕。 巧克力棒棒糖焦糖软糖es蛋糕。 馅饼点心蛋糕甜点丹麦语。 糖果杏仁饼姜饼布丁。",p2:"糖梅子芝士蛋糕硅片软糖熊蛋糕华夫饼甜甜圈棉花糖。 松饼结冰巧克力蛋糕糕点棒棒糖馅饼糖果。 甘草糖梅子糖果糖果软糖燕麦蛋糕。 太妃糖薄酥饼果冻o糕点巧克力棉花糖甜心软糖卷果冻豆。 苹果派焦糖巧克力棒馅饼苹果派点心薄酥饼果冻o苹果派。 熊爪水果蛋糕巧克力蛋糕。",p3:"粉末甜芝士蛋糕巧克力棒蛋糕蛋奶酥挞燕麦蛋糕。 水果蛋糕蛋白杏仁饼干丹麦软糖卷提拉米苏派。 胡萝卜蛋糕糕点巧克力蛋糕甜点巧克力蛋糕水果蛋糕杏仁饼姜饼。 布朗尼蛋糕胡萝卜蛋糕燕麦蛋糕糖果。 糖果巧克力棒芝麻抓住果冻蛋糕羊角面包果冻豆糖果派。 柠檬滴蛋糕芝麻扑通软糖棉花糖甜点。 胡萝卜蛋糕水果蛋糕果冻o冰淇淋。"}},H6q8:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),o={methods:{toggleSidebar(){this.$store.commit("toggleSidebar")}},computed:{sidebarStatus:{get:function(){return this.$store.getters.sidebarStatus}}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"sidebar"},[a("ul",[a("li",{on:{click:function(e){t.toggleSidebar()}}},[a("router-link",{attrs:{to:{name:"ui.contact-list"}}},[a("i",{staticClass:"fa fa-address-book",attrs:{"aria-hidden":"true"}}),t._v("\n          "+t._s(t.$t("ui.contact-list"))+"\n        ")])],1),t._v(" "),a("li",{on:{click:function(e){t.toggleSidebar()}}},[a("router-link",{attrs:{to:{name:"ui.help"}}},[a("i",{staticClass:"fa fa-question-circle",attrs:{"aria-hidden":"true"}}),t._v("\n          "+t._s(t.$t("ui.help"))+"\n        ")])],1)])]),t._v(" "),a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.sidebarStatus,expression:"sidebarStatus"}],staticClass:"sidebar-overlay",on:{click:function(e){t.toggleSidebar()}}})])],1)},staticRenderFns:[]};var i=a("VU/8")(o,s,!1,function(t){a("q+2V")},null,null).exports,r=a("TXmL"),c=a("1Wpz"),l=a.n(c),d=a("j2HR"),u=a.n(d);var m={ui:l.a,help:u.a},p=a("CqGX"),h=a.n(p),v=a("EnYR"),g=a.n(v);var C={ui:h.a,help:g.a};n.a.use(r.a);const f={en:m,cn:C};var b=new r.a({locale:"en",fallbackLocale:"en",messages:f}),y={data:function(){return{language:""}},methods:{toggleSidebar(){this.$store.commit("toggleSidebar")},setLanguage:function(t){b.locale=t}},computed:{contactFilter:{get:function(){return this.$store.state.contactFilter},set:function(t){this.$store.commit("filterContacts",t)}}}},_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"topbar-row"},[a("div",{staticClass:"menu"},[a("i",{staticClass:"fa fa-bars fa-2x",attrs:{"aria-hidden":"true"},on:{click:function(e){t.toggleSidebar()}}})]),t._v(" "),a("div",{staticClass:"title"},[t._v(t._s(t.$t(t.$route.name)))])]),t._v(" "),a("div",{staticClass:"topbar-row"},["ui.contact-list"===t.$route.name?a("div",{staticClass:"search"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.contactFilter,expression:"contactFilter"}],attrs:{placeholder:t.$t("ui.search")},domProps:{value:t.contactFilter},on:{input:function(e){e.target.composing||(t.contactFilter=e.target.value)}}}),t._v(" "),a("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"},on:{click:function(e){t.contactFilter=""}}})]):t._e(),t._v(" "),a("div",{staticClass:"language"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.language,expression:"language"}],on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.language=e.target.multiple?a:a[0]},function(e){t.setLanguage(t.language)}]}},[a("option",{attrs:{disabled:"",value:""}},[t._v("Language")]),t._v(" "),a("option",{domProps:{value:"en"}},[t._v("EN")]),t._v(" "),a("option",{domProps:{value:"cn"}},[t._v("CN")])])])])])},staticRenderFns:[]};var S=a("VU/8")(y,_,!1,function(t){a("hzcM")},null,null).exports,k=a("mtWM"),E=a.n(k),M=a("PfiZ"),T=a.n(M),w=a("NYxO"),N=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},G={components:{sidebar:i,topbar:S},name:"App",created(){E.a.get("http://www.mocky.io/v2/5a71e4f72f0000de117764e6").then(t=>{this.saveContacts(t.data.data)}).catch(t=>{this.saveErrors(t)}),this.saveCountries(T.a)},methods:{toggleSidebar(){this.$store.commit("toggleSidebar")},saveResponse(t){this.$store.commit("saveResponse",t)},saveErrors(t){this.$store.commit("saveErrors",t)},saveContacts(t){this.$store.commit("setContacts",t)},saveCountries(t){this.$store.commit("setCountries",t)}},computed:N({},Object(w.b)({sidebarStatus:"sidebarStatus",getContacts:"getContacts",getErrors:"getErrors"})),data:()=>({countries:T.a})},P={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"wrapper"},[e("topbar",{staticClass:"header-temp"}),this._v(" "),e("div",{staticClass:"secondary"},[e("transition",{attrs:{name:"fade"}},[e("sidebar",{directives:[{name:"show",rawName:"v-show",value:this.sidebarStatus,expression:"sidebarStatus"}],staticClass:"sidebar-temp"})],1),this._v(" "),e("div",{staticClass:"circle"},[e("router-link",{staticClass:"circle",attrs:{to:{name:"ui.add-contact"}}},[e("i",{staticClass:"fa fa-plus fa-2x circle",attrs:{"aria-hidden":"true"}})])],1),this._v(" "),e("div",{staticClass:"main-temp"},[e("router-view")],1)],1)],1)])},staticRenderFns:[]};var x=a("VU/8")(G,P,!1,function(t){a("Uyto")},null,null).exports,F=a("/ocq"),B={name:"modal",methods:{close(){this.$emit("close")}}},A={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"modal-fade"}},[a("div",{staticClass:"modal-background"},[a("div",{staticClass:"modal-main",attrs:{role:"dialog","aria-labelledby":"modalTitle","aria-describedby":"modalDescription"}},[a("header",{staticClass:"modal-head",attrs:{id:"modalTitle"}},[t._t("header",[t._v("\n          This is our header title\n\n          "),a("button",{staticClass:"btn-close",attrs:{type:"button","aria-label":"Close modal"},on:{click:t.close}},[t._v("x")])])],2),t._v(" "),a("section",{staticClass:"modal-soul",attrs:{id:"modalDescription"}},[t._t("body",[t._v("\n          I'm the default body!\n        ")])],2),t._v(" "),a("footer",{staticClass:"modal-foot"},[t._t("footer",[t._v("\n          I'm the default footer!\n\n          "),a("button",{staticClass:"btn-green",attrs:{type:"button","areia-label":"Close modal"},on:{click:t.close}},[t._v("Close me!")])])],2)])])])},staticRenderFns:[]};var I=a("VU/8")(B,A,!1,function(t){a("p3bF")},null,null).exports,L=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},R={name:"ListContacts",components:{modal:I},data:()=>({isModalVisible:!1}),computed:L({},Object(w.b)({contacts:"getContacts"}),{filteredContacts:function(){return this.contacts.filter(function(t){return!t.hide})}}),methods:L({},Object(w.c)({sortContacts:"sortContacts",requestEditContact:"requestEditContact"}),{filterCountry(t){this.$store.commit("filterContacts",`country:${t}`)},filterGender(t){this.$store.commit("filterContacts",`gender:${t}`)},showModal(){this.isModalVisible=!0},closeModal(){this.isModalVisible=!1}})},$={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"contacts"}},[a("table",{staticClass:"table contact-list"},[a("tbody",[a("tr",[a("th",{staticClass:"contact-avatar"}),t._v(" "),a("th",{staticClass:"contact-name",on:{click:function(e){t.sortContacts("name")}}},[t._v(t._s(t.$t("ui.list-contact-name")))]),t._v(" "),a("th",{staticClass:"contact-gender",on:{click:function(e){t.sortContacts("gender")}}},[t._v(t._s(t.$t("ui.list-contact-gender")))]),t._v(" "),a("th",{staticClass:"contact-country",on:{click:function(e){t.sortContacts("country")}}},[t._v(t._s(t.$t("ui.list-contact-country")))]),t._v(" "),a("th",{staticClass:"contact-email",on:{click:function(e){t.sortContacts("email")}}},[t._v(t._s(t.$t("ui.list-contact-email")))]),t._v(" "),a("th",{staticClass:"contact-postal",on:{click:function(e){t.sortContacts("postalCode")}}},[t._v(t._s(t.$t("ui.list-contact-postal-code")))]),t._v(" "),a("th",{staticClass:"contact-edit"})]),t._v(" "),t._l(t.filteredContacts,function(e,n){return a("tr",{key:n},[a("td",{staticClass:"contact-avatar"},[a("img",{staticClass:"profile-picture",style:Math.random()>.85&&"transform-origin: center; transform: rotate(180deg);",attrs:{src:"https://robohash.org/"+e.name.split(" ").join("")+".jpg?size=50x50&set=set4"}})]),t._v(" "),a("td",{staticClass:"contact-name"},[t._v(t._s(e.name)+" ")]),t._v(" "),a("td",{staticClass:"contact-gender"},[a("a",{attrs:{href:"#","data-toggle":"tooltip",title:"Show only "+e.gender},on:{click:function(a){t.filterGender(e.gender)}}},[t._v(t._s(t.$t("ui.list-contact-gender-"+e.gender)))])]),t._v(" "),a("td",{staticClass:"contact-country"},[a("a",{attrs:{href:"#","data-toggle":"tooltip",title:"Show only "+e.country},on:{click:function(a){t.filterCountry(e.country)}}},[a("span",{class:"flag-icon flag-icon-"+e.country.toLowerCase()+" fa-2x"})])]),t._v(" "),a("td",{staticClass:"contact-email"},[t._v(t._s(e.email))]),t._v(" "),a("td",{staticClass:"contact-postal"},[t._v(t._s(e.postalCode||t.$t("ui.list-contact-no-data")))]),t._v(" "),a("td",{staticClass:"contact-edit"},[a("router-link",{attrs:{to:{name:"ui.edit-contact",query:{id:t.contacts.indexOf(e)}}}},[a("button",{on:{click:function(a){t.requestEditContact(e)}}},[t._v("Edit")])])],1)])})],2)]),t._v(" "),t.filteredContacts.length?t._e():a("span",[t._v("The Aperture Science Enrichment Center apologize for the fact that you have no friends.")])])},staticRenderFns:[]};var O=a("VU/8")(R,$,!1,function(t){a("0hlf")},null,null).exports,H=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},U={name:"AddContacts",data:()=>({customGenderField:!1,userName:"",userEmail:"",gender:"",genderText:"",country:"",postalCode:"",contactPackage:{}}),created(){"ui.edit-contact"===this.$route.name&&(this.userName=this.getContactToEdit.name,this.userEmail=this.getContactToEdit.email,this.gender=this.genderText||this.getContactToEdit.gender,this.country=this.getContactToEdit.country,this.postalCode=this.getContactToEdit.postalCode)},computed:H({},Object(w.b)({contacts:"getContacts",getContactToEdit:"getContactToEdit",countries:"getCountries"})),methods:H({toggleDisable(){return this.customGenderField=!this.customGenderField,this.customGenderField},disableTextField(){if(!0===this.customGenderField)return this.customGenderField=!1,this.customGenderField},readData(){this.contactPackage={name:this.userName,email:this.userEmail,gender:this.genderText||this.gender,country:this.country,postalCode:this.postalCode,index:this.getContactToEdit.index||null},"ui.add-contact"===this.$route.name?this.$store.commit("addContacts",this.contactPackage):this.$store.commit("editContact",this.contactPackage),this.$router.push("/list")},validateData(){let t=document.getElementsByClassName("needs-validation");Array.prototype.filter.call(t,t=>{t.addEventListener("submit",e=>{if(!1===t.checkValidity())return e.preventDefault(),void e.stopPropagation();t.classList.add("was-validated"),this.readData()},!1)})}},Object(w.c)({addContacts:"addContacts",editContact:"editContact"}))},V={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"temp"},[a("a",{staticClass:"back-button btn btn-default",attrs:{href:"javascript:history.go(-1)"}},[t._v("Back")]),t._v(" "),a("form",{staticClass:"needs-validation"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"contactName"}},[t._v("Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],staticClass:"form-control",attrs:{type:"text",id:"contactName",placeholder:"Name",required:""},domProps:{value:t.userName},on:{input:function(e){e.target.composing||(t.userName=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"contactEmail"}},[t._v("Email address")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.userEmail,expression:"userEmail"}],staticClass:"form-control",attrs:{type:"email",id:"contactEmail","aria-describedby":"emailHelp",placeholder:"Enter email",required:""},domProps:{value:t.userEmail},on:{input:function(e){e.target.composing||(t.userEmail=e.target.value)}}}),t._v(" "),a("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[t._v("We'll never share your email with anyone else.")])]),t._v(" "),a("div",{staticClass:"form-check form-check-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.gender,expression:"gender"}],staticClass:"form-check-input",attrs:{type:"radio",name:"genderSelect",id:"genderMale",value:"male"},domProps:{checked:t._q(t.gender,"male")},on:{change:[function(e){t.gender="male"},t.disableTextField]}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"genderMale"}},[t._v("Male")])]),t._v(" "),a("div",{staticClass:"form-check form-check-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.gender,expression:"gender"}],staticClass:"form-check-input",attrs:{type:"radio",name:"genderSelect",id:"genderFemale",value:"female"},domProps:{checked:t._q(t.gender,"female")},on:{change:[function(e){t.gender="female"},t.disableTextField]}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"genderFemale"}},[t._v("Female")])]),t._v(" "),a("div",{staticClass:"form-check form-check-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.gender,expression:"gender"}],staticClass:"form-check-input",attrs:{type:"radio",name:"genderSelect",id:"genderOther",value:"other"},domProps:{checked:t._q(t.gender,"other")},on:{change:[function(e){t.gender="other"},t.toggleDisable]}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"genderOther"}},[t._v("Other")])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"otherText"}},[t._v("Gender")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.genderText,expression:"genderText"}],staticClass:"form-control",attrs:{type:"text",id:"customGender","aria-describedby":"genderHelp",placeholder:"Please enter your gender",disabled:0==t.customGenderField,required:"other"==t.gender},domProps:{value:t.genderText},on:{input:function(e){e.target.composing||(t.genderText=e.target.value)}}}),t._v(" "),"other"==t.gender?a("small",{staticClass:"form-text text-muted",attrs:{id:"genderHelp"}},[t._v("If you select Other, please enter your gender")]):t._e()]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.country,expression:"country"}],staticClass:"custom-select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.country=e.target.multiple?a:a[0]}}},[a("option",{attrs:{selected:""}},[t._v("SELECT COUNTRY ----")]),t._v(" "),t._l(t.countries,function(e,n){return a("option",{key:n,domProps:{value:n}},[t._v(t._s(e))])})],2),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"postalCode"}},[t._v("Postal Code")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.postalCode,expression:"postalCode"}],staticClass:"form-control",attrs:{type:"text",id:"contactPostalCode",placeholder:"Postal Code",required:""},domProps:{value:t.postalCode},on:{input:function(e){e.target.composing||(t.postalCode=e.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:t.validateData}},[t._v("Submit")])])])},staticRenderFns:[]};var j=a("VU/8")(U,V,!1,function(t){a("H6q8")},null,null).exports,K={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"temp"},[a("p",[t._v(t._s(t.$t("help.p1")))]),t._v(" "),a("p",[t._v(t._s(t.$t("help.p2")))]),t._v(" "),a("p",[t._v(t._s(t.$t("help.p3")))])])},staticRenderFns:[]};var q=a("VU/8")({name:"Help"},K,!1,function(t){a("Ylqr")},"data-v-cab9e712",null).exports;n.a.use(F.a);var D=new F.a({mode:"history",routes:[{path:"/",redirect:"/list"},{path:"/list",name:"ui.contact-list",component:O},{path:"/add",name:"ui.add-contact",component:j},{path:"/edit",name:"ui.edit-contact",component:j,props:t=>({query:t.query.id})},{path:"/help",name:"ui.help",component:q}]});n.a.use(w.a);var z="",W={name:"name",email:"email",gender:"gender",sex:"gender",country:"country",postal:"postalCode",postalcode:"postalCode"};var Y=new w.a.Store({state:{sideBar:!1,contacts:[],fullContacts:[],countries:[],contactFilter:"",contactToEdit:{},errors:[]},getters:{sidebarStatus:t=>t.sideBar,getErrors:t=>t.errors,getContacts:t=>t.contacts,getContactFilter:t=>t.contactFilter,getContactToEdit:t=>t.contactToEdit,getCountries:t=>t.countries},mutations:{toggleSidebar(t){t.sideBar=!t.sideBar},saveErrors(t,e){t.errors.push(e)},setContacts(t,e){t.contacts=e,t.fullContacts=e},setCountries(t,e){t.countries=e},addContacts(t,e){t.contacts.push(e)},requestEditContact:(t,e)=>(t.contactToEdit=e,t.contactToEdit.index=t.contacts.indexOf(e),t.contactToEdit),editContact(t,e){t.contactToEdit=e,t.contacts[t.contactToEdit.index]=t.contactToEdit,delete t.contacts[t.contactToEdit.index].index},sortContacts(t,e){var a;e===z?(a=-1,z=""):(a=1,z=e),t.contacts=t.contacts.sort(function(t,n){return void 0===t[e]?-a:void 0===n[e]?a:t[e]>n[e]?a:t[e]<n[e]?-a:0})},filterContacts(t,e){(t.contactFilter=e||"",t.fullContacts.length)?(e=e.toLowerCase())?e.split(" ").forEach(function(e){var a=null,n=e.split(":");2===n.length&&(a=W[n[0].toLowerCase()]||null)&&(e=n[1]),t.contacts=t.fullContacts.filter(function(t){if(a){if(t[a]&&-1!==t[a].toLowerCase().indexOf(e))return!0}else for(var n in t)if(t.hasOwnProperty(n)&&"string"==typeof t[n]&&-1!==t[n].toLowerCase().indexOf(e))return!0;return!1})}):t.contacts=t.fullContacts:t.contacts=[]}}});n.a.config.productionTip=!1,new n.a({el:"#app",router:D,i18n:b,store:Y,components:{App:x},template:"<App/>"})},PfiZ:function(t,e){t.exports={BD:"Bangladesh",BE:"Belgium",BF:"Burkina Faso",BG:"Bulgaria",BA:"Bosnia and Herzegovina",BB:"Barbados",WF:"Wallis and Futuna",BL:"Saint Barthelemy",BM:"Bermuda",BN:"Brunei",BO:"Bolivia",BH:"Bahrain",BI:"Burundi",BJ:"Benin",BT:"Bhutan",JM:"Jamaica",BV:"Bouvet Island",BW:"Botswana",WS:"Samoa",BQ:"Bonaire, Saint Eustatius and Saba ",BR:"Brazil",BS:"Bahamas",JE:"Jersey",BY:"Belarus",BZ:"Belize",RU:"Russia",RW:"Rwanda",RS:"Serbia",TL:"East Timor",RE:"Reunion",TM:"Turkmenistan",TJ:"Tajikistan",RO:"Romania",TK:"Tokelau",GW:"Guinea-Bissau",GU:"Guam",GT:"Guatemala",GS:"South Georgia and the South Sandwich Islands",GR:"Greece",GQ:"Equatorial Guinea",GP:"Guadeloupe",JP:"Japan",GY:"Guyana",GG:"Guernsey",GF:"French Guiana",GE:"Georgia",GD:"Grenada",GB:"United Kingdom",GA:"Gabon",SV:"El Salvador",GN:"Guinea",GM:"Gambia",GL:"Greenland",GI:"Gibraltar",GH:"Ghana",OM:"Oman",TN:"Tunisia",JO:"Jordan",HR:"Croatia",HT:"Haiti",HU:"Hungary",HK:"Hong Kong",HN:"Honduras",HM:"Heard Island and McDonald Islands",VE:"Venezuela",PR:"Puerto Rico",PS:"Palestinian Territory",PW:"Palau",PT:"Portugal",SJ:"Svalbard and Jan Mayen",PY:"Paraguay",IQ:"Iraq",PA:"Panama",PF:"French Polynesia",PG:"Papua New Guinea",PE:"Peru",PK:"Pakistan",PH:"Philippines",PN:"Pitcairn",PL:"Poland",PM:"Saint Pierre and Miquelon",ZM:"Zambia",EH:"Western Sahara",EE:"Estonia",EG:"Egypt",ZA:"South Africa",EC:"Ecuador",IT:"Italy",VN:"Vietnam",SB:"Solomon Islands",ET:"Ethiopia",SO:"Somalia",ZW:"Zimbabwe",SA:"Saudi Arabia",ES:"Spain",ER:"Eritrea",ME:"Montenegro",MD:"Moldova",MG:"Madagascar",MF:"Saint Martin",MA:"Morocco",MC:"Monaco",UZ:"Uzbekistan",MM:"Myanmar",ML:"Mali",MO:"Macao",MN:"Mongolia",MH:"Marshall Islands",MK:"Macedonia",MU:"Mauritius",MT:"Malta",MW:"Malawi",MV:"Maldives",MQ:"Martinique",MP:"Northern Mariana Islands",MS:"Montserrat",MR:"Mauritania",IM:"Isle of Man",UG:"Uganda",TZ:"Tanzania",MY:"Malaysia",MX:"Mexico",IL:"Israel",FR:"France",IO:"British Indian Ocean Territory",SH:"Saint Helena",FI:"Finland",FJ:"Fiji",FK:"Falkland Islands",FM:"Micronesia",FO:"Faroe Islands",NI:"Nicaragua",NL:"Netherlands",NO:"Norway",NA:"Namibia",VU:"Vanuatu",NC:"New Caledonia",NE:"Niger",NF:"Norfolk Island",NG:"Nigeria",NZ:"New Zealand",NP:"Nepal",NR:"Nauru",NU:"Niue",CK:"Cook Islands",XK:"Kosovo",CI:"Ivory Coast",CH:"Switzerland",CO:"Colombia",CN:"China",CM:"Cameroon",CL:"Chile",CC:"Cocos Islands",CA:"Canada",CG:"Republic of the Congo",CF:"Central African Republic",CD:"Democratic Republic of the Congo",CZ:"Czech Republic",CY:"Cyprus",CX:"Christmas Island",CR:"Costa Rica",CW:"Curacao",CV:"Cape Verde",CU:"Cuba",SZ:"Swaziland",SY:"Syria",SX:"Sint Maarten",KG:"Kyrgyzstan",KE:"Kenya",SS:"South Sudan",SR:"Suriname",KI:"Kiribati",KH:"Cambodia",KN:"Saint Kitts and Nevis",KM:"Comoros",ST:"Sao Tome and Principe",SK:"Slovakia",KR:"South Korea",SI:"Slovenia",KP:"North Korea",KW:"Kuwait",SN:"Senegal",SM:"San Marino",SL:"Sierra Leone",SC:"Seychelles",KZ:"Kazakhstan",KY:"Cayman Islands",SG:"Singapore",SE:"Sweden",SD:"Sudan",DO:"Dominican Republic",DM:"Dominica",DJ:"Djibouti",DK:"Denmark",VG:"British Virgin Islands",DE:"Germany",YE:"Yemen",DZ:"Algeria",US:"United States",UY:"Uruguay",YT:"Mayotte",UM:"United States Minor Outlying Islands",LB:"Lebanon",LC:"Saint Lucia",LA:"Laos",TV:"Tuvalu",TW:"Taiwan",TT:"Trinidad and Tobago",TR:"Turkey",LK:"Sri Lanka",LI:"Liechtenstein",LV:"Latvia",TO:"Tonga",LT:"Lithuania",LU:"Luxembourg",LR:"Liberia",LS:"Lesotho",TH:"Thailand",TF:"French Southern Territories",TG:"Togo",TD:"Chad",TC:"Turks and Caicos Islands",LY:"Libya",VA:"Vatican",VC:"Saint Vincent and the Grenadines",AE:"United Arab Emirates",AD:"Andorra",AG:"Antigua and Barbuda",AF:"Afghanistan",AI:"Anguilla",VI:"U.S. Virgin Islands",IS:"Iceland",IR:"Iran",AM:"Armenia",AL:"Albania",AO:"Angola",AQ:"Antarctica",AS:"American Samoa",AR:"Argentina",AU:"Australia",AT:"Austria",AW:"Aruba",IN:"India",AX:"Aland Islands",AZ:"Azerbaijan",IE:"Ireland",ID:"Indonesia",UA:"Ukraine",QA:"Qatar",MZ:"Mozambique"}},Uyto:function(t,e){},Ylqr:function(t,e){},hzcM:function(t,e){},j2HR:function(t,e){t.exports={p1:"Cupcake ipsum dolor sit amet tart chocolate cake. Macaroon pudding topping pastry liquorice cotton candy lollipop brownie caramels. Marshmallow muffin sesame snaps sesame snaps jelly beans chocolate bar bear claw. Marshmallow cupcake bonbon chupa chups danish. Cotton candy gingerbread danish apple pie carrot cake sweet roll candy. Cake jelly-o cake. Chocolate chupa chups caramels soufflé gummies cake. Pie dessert cake dessert danish. Candy marzipan gingerbread pudding.",p2:"Sugar plum cheesecake wafer gummi bears cake wafer donut cotton candy. Muffin icing chocolate cake pastry chupa chups tart candy. Liquorice sugar plum candy candy jelly beans oat cake. Toffee wafer jelly-o pastry chocolate marshmallow sweet tootsie roll jelly beans. Apple pie caramels chocolate bar tart apple pie dessert wafer jelly-o apple pie. Bear claw fruitcake chocolate cake.",p3:"Powder sweet cheesecake chocolate bar cake soufflé tart oat cake. Fruitcake macaroon danish tootsie roll tiramisu pie. Carrot cake pastry chocolate cake dessert halvah chocolate cake fruitcake marzipan gingerbread. Brownie cake carrot cake oat cake candy. Bonbon chocolate bar sesame snaps jelly cake croissant jelly beans bonbon pie. Lemon drops cake sesame snaps jelly beans cotton candy dessert. Carrot cake fruitcake jelly jelly-o ice cream."}},p3bF:function(t,e){},"q+2V":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.387dc565a48bd152edd9.js.map