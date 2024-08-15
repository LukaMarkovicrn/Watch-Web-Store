(function(){"use strict";var e={3392:function(e,t,r){var a=r(6369),o=function(){var e=this,t=e._self._c;return t("div",[t("AppHeader"),t("router-view"),t("AppFooter")],1)},i=[],s=function(){var e=this,t=e._self._c;return t("div",[t("nav",{staticClass:"navbar navbar-expand-lg"},[t("div",{staticClass:"nav-wrapper container-fluid text-center"},[t("div",{staticClass:"row w-100"},[e._m(0),t("div",{staticClass:"col-8 collapse navbar-collapse flex"},[t("ul",{staticClass:"navbar mb-lg-0"},[t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[e._v("Pocetna")])],1),t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link",attrs:{to:"/proizvodi"}},[e._v("Katalog")])],1)])]),t("div",{staticClass:"col-2 flex items"},[t("div",{staticClass:"korpa"},[t("router-link",{attrs:{to:"/korpa"}},[t("img",{staticClass:"bag",attrs:{src:r(4187),alt:"bag"}}),e.brojProizvodaUKorpi>0?t("span",{staticClass:"align-items-center justify-content-center badge rounded-pill"},[e._v(" "+e._s(e.brojProizvodaUKorpi)+" ")]):e._e()])],1),e.token?e._e():t("router-link",{attrs:{to:"/login"}},[t("img",{staticClass:"user",attrs:{src:r(2315),alt:"user"}})]),e.token?t("b-dropdown",{attrs:{right:"",variant:"link","toggle-class":"customDropdown","no-caret":""},scopedSlots:e._u([{key:"button-content",fn:function(){return[t("img",{attrs:{src:r(2315),alt:"user"}})]},proxy:!0}],null,!1,4258881728)},[t("b-dropdown-item",{staticClass:"dropdown",attrs:{href:"#"}},[e.token?t("router-link",{staticClass:"dropdown-item",attrs:{to:"/korisnik"}},[e._v("Detalji")]):e._e()],1),t("b-dropdown-item",{staticClass:"dropdown-item dropdown",attrs:{href:"#"},on:{click:e.logout}},[e._v("Odjavi se")])],1):e._e()],1)])])])])},n=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"col-2 flex"},[t("a",{attrs:{href:"/"}},[t("img",{staticClass:"logo",attrs:{src:r(6949),alt:"logo"}})])])}],l=(r(560),r(3822)),c={computed:{brojProizvodaUKorpi(){return this.$store.getters.ukupnoProizvoda},...(0,l.rn)(["token","user_id"])},methods:{...(0,l.OI)(["removeToken","setToken","removeUser","removeSveIzKorpe"]),logout(){this.removeToken(),this.removeUser(),this.removeSveIzKorpe(),this.$router.push({name:"Pocetna"})}},mounted(){localStorage.token&&this.setToken(localStorage.token)}},d=c,u=r(1001),p=(0,u.Z)(d,s,n,!1,null,null,null),v=p.exports,A=function(){var e=this;e._self._c;return e._m(0)},m=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"footer"},[t("footer",{staticClass:"futer"},[t("img",{attrs:{src:r(8055),alt:""}})])])}],h={},f=(0,u.Z)(h,A,m,!1,null,"e2efe938",null),g=f.exports,b={components:{AppHeader:v,AppFooter:g},mounted(){this.$store.commit("updateKorpaFromLocalStorage")}},k=b,z=(0,u.Z)(k,o,i,!1,null,null,null),C=z.exports,y=r(2631),P=function(){var e=this;e._self._c;return e._m(0)},x=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"pocetna",attrs:{id:"app"}},[t("div",{staticClass:"slika"},[t("div",{staticClass:"tekst"},[t("h2",[e._v("Vereničko Prstenje")]),t("hr"),t("p",[e._v("Nova kolekcija")])]),t("img",{attrs:{src:r(9096),alt:""}})])])}],w={name:"Pocetna",components:{}},j=w,K=(0,u.Z)(j,P,x,!1,null,"5500fa54",null),S=K.exports,I=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"proizvodi-page"}},[t("b-container",{staticClass:"bv-example-row"},[t("b-row",[t("b-col",{attrs:{cols:"2"}},[t("div",{staticClass:"filteri"},[t("h4",[e._v("Kategorije")]),t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedCategory,expression:"selectedCategory"}],attrs:{type:"checkbox",value:"1"},domProps:{checked:Array.isArray(e.selectedCategory)?e._i(e.selectedCategory,"1")>-1:e.selectedCategory},on:{change:function(t){var r=e.selectedCategory,a=t.target,o=!!a.checked;if(Array.isArray(r)){var i="1",s=e._i(r,i);a.checked?s<0&&(e.selectedCategory=r.concat([i])):s>-1&&(e.selectedCategory=r.slice(0,s).concat(r.slice(s+1)))}else e.selectedCategory=o}}}),e._v(" Prstenje")]),t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedCategory,expression:"selectedCategory"}],attrs:{type:"checkbox",value:"2"},domProps:{checked:Array.isArray(e.selectedCategory)?e._i(e.selectedCategory,"2")>-1:e.selectedCategory},on:{change:function(t){var r=e.selectedCategory,a=t.target,o=!!a.checked;if(Array.isArray(r)){var i="2",s=e._i(r,i);a.checked?s<0&&(e.selectedCategory=r.concat([i])):s>-1&&(e.selectedCategory=r.slice(0,s).concat(r.slice(s+1)))}else e.selectedCategory=o}}}),e._v(" Ogrlice")]),t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedCategory,expression:"selectedCategory"}],attrs:{type:"checkbox",value:"3"},domProps:{checked:Array.isArray(e.selectedCategory)?e._i(e.selectedCategory,"3")>-1:e.selectedCategory},on:{change:function(t){var r=e.selectedCategory,a=t.target,o=!!a.checked;if(Array.isArray(r)){var i="3",s=e._i(r,i);a.checked?s<0&&(e.selectedCategory=r.concat([i])):s>-1&&(e.selectedCategory=r.slice(0,s).concat(r.slice(s+1)))}else e.selectedCategory=o}}}),e._v(" Narukvice")]),t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedCategory,expression:"selectedCategory"}],attrs:{type:"checkbox",value:"4"},domProps:{checked:Array.isArray(e.selectedCategory)?e._i(e.selectedCategory,"4")>-1:e.selectedCategory},on:{change:function(t){var r=e.selectedCategory,a=t.target,o=!!a.checked;if(Array.isArray(r)){var i="4",s=e._i(r,i);a.checked?s<0&&(e.selectedCategory=r.concat([i])):s>-1&&(e.selectedCategory=r.slice(0,s).concat(r.slice(s+1)))}else e.selectedCategory=o}}}),e._v(" Mindjuse")]),t("hr"),t("h4",[e._v("Materijali")]),t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedMaterial,expression:"selectedMaterial"}],attrs:{type:"checkbox",value:"1"},domProps:{checked:Array.isArray(e.selectedMaterial)?e._i(e.selectedMaterial,"1")>-1:e.selectedMaterial},on:{change:function(t){var r=e.selectedMaterial,a=t.target,o=!!a.checked;if(Array.isArray(r)){var i="1",s=e._i(r,i);a.checked?s<0&&(e.selectedMaterial=r.concat([i])):s>-1&&(e.selectedMaterial=r.slice(0,s).concat(r.slice(s+1)))}else e.selectedMaterial=o}}}),e._v(" Srebro")]),t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedMaterial,expression:"selectedMaterial"}],attrs:{type:"checkbox",value:"2"},domProps:{checked:Array.isArray(e.selectedMaterial)?e._i(e.selectedMaterial,"2")>-1:e.selectedMaterial},on:{change:function(t){var r=e.selectedMaterial,a=t.target,o=!!a.checked;if(Array.isArray(r)){var i="2",s=e._i(r,i);a.checked?s<0&&(e.selectedMaterial=r.concat([i])):s>-1&&(e.selectedMaterial=r.slice(0,s).concat(r.slice(s+1)))}else e.selectedMaterial=o}}}),e._v(" Zlato")]),t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedMaterial,expression:"selectedMaterial"}],attrs:{type:"checkbox",value:"3"},domProps:{checked:Array.isArray(e.selectedMaterial)?e._i(e.selectedMaterial,"3")>-1:e.selectedMaterial},on:{change:function(t){var r=e.selectedMaterial,a=t.target,o=!!a.checked;if(Array.isArray(r)){var i="3",s=e._i(r,i);a.checked?s<0&&(e.selectedMaterial=r.concat([i])):s>-1&&(e.selectedMaterial=r.slice(0,s).concat(r.slice(s+1)))}else e.selectedMaterial=o}}}),e._v(" Roze Zlato")])])]),t("b-col",{attrs:{cols:"10"}},[t("div",{staticClass:"proizvodi"},e._l(e.currentPageItems,(function(e){return t("ProizvodKartica",{key:e.id,attrs:{proizvod:e}})})),1),t("div",{staticClass:"dugmici"},[t("button",{on:{click:function(t){e.prev(),e.scrollToTop()}}},[e._v("<")]),t("button",{on:{click:function(t){e.next(),e.scrollToTop()}}},[e._v(">")])])])],1)],1)],1)},q=[],U=function(){var e=this,t=e._self._c;return t("div",{staticClass:"proizvod",on:{click:function(t){return e.kliknutProizvod()}}},[t("div",{staticClass:"slika"},[t("img",{attrs:{src:e.proizvod.slika,alt:""}})]),t("h3",[e._v(e._s(e.proizvod.naziv))]),t("h4",[e._v(e._s(e.proizvod.cena.toLocaleString())+" RSD")])])},H=[],O={name:"ProizvodKartica",props:{proizvod:Object},methods:{kliknutProizvod(){this.$router.push({name:"Proizvod",params:{id:this.proizvod.id}})}}},N=O,T=(0,u.Z)(N,U,H,!1,null,"e3a491a8",null),B=T.exports,F={name:"Proizvodi",components:{ProizvodKartica:B},data(){return{perPage:10,pageNumber:0,selectedCategory:[],selectedMaterial:[]}},computed:{...(0,l.rn)(["proizvodi"]),filteredCategory(){return this.selectedCategory.length?this.proizvodi.filter((e=>this.selectedCategory.includes(e.kategorija_id.toString()))):this.proizvodi},filteredProducts(){return this.selectedMaterial.length?(console.log(this.selectedMaterial),console.log(this.filteredCategory),this.filteredCategory.filter((e=>this.selectedMaterial.includes(e.materijal[0].materijal_id.toString())))):this.filteredCategory},currentPageItems(){return this.filteredProducts.slice(this.pageNumber*this.perPage,this.pageNumber*this.perPage+this.perPage)}},methods:{...(0,l.nv)(["fetchProizvodi"]),next(){10*(this.pageNumber+1)<this.proizvodi.length&&this.pageNumber++},prev(){this.pageNumber>0&&this.pageNumber--},scrollToTop(){window.scrollTo({top:0,left:0,behavior:"smooth"})}},mounted(){this.fetchProizvodi()}},L=F,V=(0,u.Z)(L,I,q,!1,null,"3484c8e5",null),Z=V.exports,G=function(){var e=this,t=e._self._c;return t("div",{staticClass:"proizvod"},[t("b-container",{staticClass:"bv-example-row"},[t("b-row",[t("b-col",{staticClass:"slika",attrs:{cols:"6"}},[t("img",{attrs:{src:e.proizvod.slika,alt:""}})]),t("b-col",{staticClass:"opis",attrs:{cols:"6"}},[t("h3",[e._v(e._s(e.proizvod.naziv))]),t("hr"),t("h5",[e._v("Kategorija: "+e._s(e.proizvod.kategorija.naziv))]),t("p",[e._v(e._s(e.proizvod.opis))]),t("div",{staticClass:"wrapper"},[t("div",{staticClass:"quantityWrapper"},[t("div",{staticClass:"quantity"},[t("h5",[e._v("Kolicina")]),t("b-input-group",[t("b-btn",{staticClass:"minus",attrs:{variant:"info"},on:{click:function(t){return e.decrement()}}},[e._v("-")]),t("b-form-input",{staticClass:"broj",attrs:{type:"number",min:"0.00",value:e.quantity,disabled:""}}),t("b-btn",{staticClass:"plus",attrs:{variant:"info"},on:{click:function(t){return e.increment()}}},[e._v("+")])],1)],1),t("div",{staticClass:"uKorpiWrapper"},[t("div",{staticClass:"dodajDugme"},[t("button",{staticClass:"korpaDugme",on:{click:function(t){return e.dodajUKorpu()}}},[e._v("Dodaj u Korpu")])]),e.ukupnaKolicina?t("div",{staticClass:"uKorpi"},[t("div",{staticClass:"korpaStavke"},[t("div",{staticClass:"h6Div"},[t("h6",[e._v("U korpi: "+e._s(e.ukupnaKolicina))])]),t("button",{staticClass:"izbaciDugme",on:{click:function(t){return e.izbaciIzKorpe()}}},[e._v("X")])])]):e._e()])]),t("div",{staticClass:"cena"},[t("h4",[e._v(e._s(e.proizvod.cena.toLocaleString())+" RSD")])])])])],1)],1)],1)},R=[],D={name:"Proizvod",components:{},data(){return{proizvod:null,quantity:1}},methods:{...(0,l.nv)(["getProizvod"]),...(0,l.OI)(["addUKorpu","removeIzKorpe"]),increment(){this.quantity++},decrement(){1!==this.quantity&&this.quantity--},dodajUKorpu(){this.$store.getters.user_id?this.addUKorpu({proizvod:this.proizvod,kolicina:this.quantity}):this.$router.push("/login")},izbaciIzKorpe(){this.removeIzKorpe(this.proizvod)}},computed:{ukupnaKolicina(){return this.$store.getters.kolicinaProizvoda(this.proizvod)}},mounted(){console.log(this.$route.params.id),this.getProizvod(this.$route.params.id).then((e=>{console.log(e),this.proizvod=e})),console.log(this.proizvod)}},X=D,M=(0,u.Z)(X,G,R,!1,null,"4b5e9668",null),Y=M.exports,E=function(){var e=this,t=e._self._c;return t("div",{staticClass:"narudzbina"},[t("div",{staticClass:"podaci"},[t("KorpaForma")],1),t("div",{staticClass:"korpa"},[t("h2",[e._v("Vaša Korpa")]),t("hr"),e._l(e.korpa,(function(e){return t("ProizvodIzKorpe",{key:e.id,attrs:{proizvod:e}})})),e.korpa.length?e._e():t("p",[e._v("Nemate ništa u korpi 😢")]),t("hr"),t("div",{staticClass:"ukupno"},[t("h3",[e._v("Ukupna Cena: "+e._s(e.ukupnaCena.toLocaleString())+" RSD")])])],2)])},J=[],W=function(){var e=this,t=e._self._c;return t("div",{staticClass:"proizvodIzKorpe"},[t("div",{staticClass:"slika"},[t("img",{attrs:{src:e.proizvod.slika,alt:""}})]),t("div",{staticClass:"tekst"},[t("h3",[e._v(e._s(e.proizvod.naziv))]),t("div",{staticClass:"cenakol"},[t("h3",{staticClass:"kolicina"},[e._v(e._s(e.proizvod.quantity)+"x")]),t("h3",[e._v(e._s(e.cena.toLocaleString())+" RSD")])]),t("span",{staticClass:"close",on:{click:function(t){return e.izbaciIzKorpe()}}},[e._v("×")])])])},Q=[],_={name:"ProizvodIzKorpe",props:{proizvod:Object},methods:{...(0,l.OI)(["removeIzKorpe"]),izbaciIzKorpe(){this.removeIzKorpe(this.proizvod)}},computed:{cena(){return this.proizvod.cena*this.proizvod.quantity}}},$=_,ee=(0,u.Z)($,W,Q,!1,null,"684dc540",null),te=ee.exports,re=function(){var e=this,t=e._self._c;return t("div",{staticClass:"forma"},[t("h2",[e._v("Narudžbina")]),t("b-container",{attrs:{fluid:""}},[t("b-row",[t("b-col",[t("label",{attrs:{for:"ime_prezime"}},[e._v("Ime i Prezime")]),t("b-form-input",{attrs:{id:"ime_prezime",state:e.validnoImeIPrezime},model:{value:e.narudzbina.ime_prezime,callback:function(t){e.$set(e.narudzbina,"ime_prezime",t)},expression:"narudzbina.ime_prezime"}})],1)],1),t("b-row",[t("b-col",[t("label",[e._v("Adresa")]),t("b-form-input",{attrs:{id:"adresa",state:e.validnaAdresa},model:{value:e.narudzbina.adresa,callback:function(t){e.$set(e.narudzbina,"adresa",t)},expression:"narudzbina.adresa"}})],1)],1),t("b-row",[t("b-col",[t("label",[e._v("Broj Telefona")]),t("b-form-input",{attrs:{id:"telefon",state:e.validanBrojTelefona},model:{value:e.narudzbina.telefon,callback:function(t){e.$set(e.narudzbina,"telefon",t)},expression:"narudzbina.telefon"}})],1)],1)],1),t("div",{staticClass:"dugme"},[t("b-button",{staticClass:"posalji",on:{click:function(t){return e.posalji()}}},[e._v("Pošalji")])],1)],1)},ae=[],oe={data(){return{narudzbina:{ime_prezime:null,adresa:null,telefon:null,cena:this.$store.getters.ukupnaCena,vreme_narucivanja:new Date,status:"Novo",user_id:this.$store.getters.user_id,korpa:this.$store.getters.proizvodiIzKorpe}}},computed:{validnoImeIPrezime(){return null==this.narudzbina.ime_prezime?null:this.narudzbina.ime_prezime.length>4},validnaAdresa(){return null==this.narudzbina.adresa?null:this.narudzbina.adresa.length>4},validanBrojTelefona(){return null==this.narudzbina.telefon?null:this.narudzbina.telefon.length>6}},methods:{...(0,l.nv)(["sendNarudzbina"]),posalji(){console.log(this.$store.getters.user),console.log(this.$store.getters.ukupnaCena),this.$store.getters.user_id?0!==this.$store.getters.proizvodiIzKorpe.length?this.validnoImeIPrezime&&this.validnaAdresa&&this.validanBrojTelefona?(this.sendNarudzbina(this.narudzbina),alert("Vasa narudzbina je poslata"),this.$store.commit("removeSveIzKorpe"),this.narudzbina.ime_prezime=null,this.narudzbina.adresa=null,this.narudzbina.telefon=null):alert("nije se poslalo"):alert("Korpa je prazna"):this.$router.push("/login")}}},ie=oe,se=(0,u.Z)(ie,re,ae,!1,null,"e98593d4",null),ne=se.exports,le={components:{ProizvodIzKorpe:te,KorpaForma:ne},computed:{korpa(){return this.$store.getters.proizvodiIzKorpe},ukupnaCena(){return this.$store.getters.ukupnaCena}}},ce=le,de=(0,u.Z)(ce,E,J,!1,null,"044834da",null),ue=de.exports,pe=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"login-page"}},[t("div",{attrs:{id:"login"}},[t("h2",[e._v("Ulogujte se")]),t("b-form",{on:{submit:e.onSubmit}},[t("b-form-group",{staticClass:"label",attrs:{label:"Username:","label-for":"username"}},[t("b-form-input",{attrs:{id:"username",required:""},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),t("b-form-group",{staticClass:"label",attrs:{label:"Password:","label-for":"password"}},[t("b-form-input",{attrs:{id:"password",type:"password",required:""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),t("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Uloguj se")])],1),t("h3",[e._v("Nemate Nalog?")]),t("router-link",{attrs:{to:"/register"}},[t("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Napravi Nalog")])],1)],1)])},ve=[],Ae={name:"Login",data(){return{form:{username:"",password:""}}},methods:{...(0,l.nv)(["login"]),async onSubmit(e){e.preventDefault();try{await this.login(this.form).then((e=>{this.$store.getters.user_id&&this.$router.push({name:"Proizvodi"})}))}catch(t){console.error("Login failed:",t)}}}},me=Ae,he=(0,u.Z)(me,pe,ve,!1,null,"42ae9474",null),fe=he.exports,ge=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"register-page"}},[t("div",{attrs:{id:"register"}},[t("h2",[e._v("Napravite nalog")]),t("b-form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[t("b-form-group",{staticClass:"label",attrs:{label:"Email adresa:","label-for":"email"}},[t("b-form-input",{attrs:{id:"email",type:"email",required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),t("b-form-group",{staticClass:"label",attrs:{label:"Username:","label-for":"username"}},[t("b-form-input",{attrs:{id:"username",required:""},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),t("b-form-group",{staticClass:"label",attrs:{label:"Password:","label-for":"password"}},[t("b-form-input",{attrs:{id:"password",type:"password",required:""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),t("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Napravi")])],1)],1)])},be=[],ke={name:"Register",components:{},data(){return{form:{email:"",username:"",password:""}}},methods:{...(0,l.nv)(["register"]),async onSubmit(e){e.preventDefault();try{await this.register(this.form).then((e=>{this.$store.getters.user_id&&this.$router.push({name:"Proizvodi"})}))}catch(t){console.error("Registration failed:",t)}}}},ze=ke,Ce=(0,u.Z)(ze,ge,be,!1,null,"b585a708",null),ye=Ce.exports,Pe=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"korisnik-page"}},[t("div",{attrs:{id:"korisnik"}},[t("img",{attrs:{src:r(8013),alt:"profile picture"}}),t("div",{staticClass:"podaci"},[t("h3",[e._v("Username: "),t("b",[e._v(e._s(e.user.username))])]),t("h3",[e._v("Email: "),t("b",[e._v(e._s(e.user.email))])])])])])},xe=[],we={computed:{...(0,l.rn)(["user"])},methods:{...(0,l.nv)(["getUser"])},mounted(){this.getUser(this.$store.getters.user_id)}},je=we,Ke=(0,u.Z)(je,Pe,xe,!1,null,"68353c14",null),Se=Ke.exports;a["default"].use(y.ZP);const Ie=[{path:"/",name:"Pocetna",component:S},{path:"/proizvodi",name:"Proizvodi",component:Z},{path:"/proizvod/:id",name:"Proizvod",component:Y},{path:"/korpa",name:"Korpa",component:ue},{path:"/login",name:"Login",component:fe},{path:"/register",name:"Register",component:ye},{path:"/korisnik",name:"Korisnik",component:Se}],qe=new y.ZP({mode:"history",base:"/",routes:Ie});var Ue=qe;a["default"].use(l.ZP);var He=new l.ZP.Store({state:{proizvodi:[],korpa:[],token:"",user_id:null,user:null},getters:{kolicinaProizvoda:e=>t=>{const r=e.korpa.find((e=>e.id===t.id));return r?r.quantity:null},proizvodiIzKorpe:e=>e.korpa,ukupnaCena:e=>e.korpa.reduce(((e,t)=>e+t.cena*t.quantity),0),ukupnoProizvoda:e=>e.korpa.reduce(((e,t)=>e+t.quantity),0),user:e=>e.user,user_id:e=>e.user_id},mutations:{setProizvodi(e,t){e.proizvodi=t},addProizvod(e,t){e.proizvodi[t.id]=t},addUKorpu(e,{proizvod:t,kolicina:r}){const a=e.korpa.find((e=>e.id===t.id));a?a.quantity+=r:e.korpa.push({...t,quantity:r}),console.log(e.korpa),localStorage.setItem("korpa",JSON.stringify(e.korpa))},removeIzKorpe(e,t){const r=e.korpa.find((e=>e.id===t.id));r&&(r.quantity>1?r.quantity--:e.korpa=e.korpa.filter((e=>e.id!==t.id))),localStorage.setItem("korpa",JSON.stringify(e.korpa))},updateKorpaFromLocalStorage(e){const t=localStorage.getItem("korpa");t&&(e.korpa=JSON.parse(t))},setToken(e,t){e.token=t,localStorage.token=t},removeToken(e){e.token="",localStorage.token=""},setUser(e,t){e.user_id=t},removeUser(e){e.user=null,e.user_id=null},addUser(e,t){e.user=t},removeSveIzKorpe(e){e.korpa=[],localStorage.removeItem("korpa")}},actions:{async fetchProizvodi({commit:e}){fetch("http://localhost:9000/proizvod",{method:"GET",headers:{Authorization:`Bearer ${localStorage.token}`,"Content-Type":"application/json"}}).then((e=>e.json())).then((t=>e("setProizvodi",t)))},async getProizvod({commit:e,state:t},r){return new Promise(((a,o)=>{t.proizvodi[r-1]?a(t.proizvodi[r-1]):fetch(`http://localhost:9000/proizvod/${r}`,{method:"GET",headers:{Authorization:`Bearer ${localStorage.token}`,"Content-Type":"application/json"}}).then((e=>e.json())).then((t=>{e("addProizvod",t),a(t)}))}))},async sendNarudzbina({commit:e},t){fetch("http://localhost:9000/narudzbina",{method:"POST",headers:{Authorization:`Bearer ${localStorage.token}`,"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>e.json())).then((e=>{console.log(e)}))},async register({commit:e},t){console.log(JSON.stringify(t));const r=await fetch("http://127.0.0.1:9001/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),a=await r.json();a.token?(e("setToken",a.token),e("setUser",a.id)):alert("Register failed")},async login({commit:e},t){const r=await fetch("http://127.0.0.1:9001/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),a=await r.json();console.log(a),a.token?(e("setToken",a.token),e("setUser",a.id)):alert("Login failed")},async getUser({commit:e,state:t},r){return new Promise(((a,o)=>{null!==t.user?a(t.user):fetch(`http://localhost:9000/user/${r}`,{method:"GET",headers:{Authorization:`Bearer ${localStorage.token}`,"Content-Type":"application/json"}}).then((e=>e.json())).then((t=>{e("addUser",t),a(t)}))}))}},modules:{}}),Oe=r(6681),Ne=r(9425);r(7024);a["default"].use(Oe.XG7),a["default"].use(Ne.A7),a["default"].config.productionTip=!1,new a["default"]({router:Ue,store:He,render:e=>e(C)}).$mount("#app")},4187:function(e){e.exports="data:image/png;base64,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"},8055:function(e){e.exports="data:image/png;base64,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"},6949:function(e){e.exports="data:image/png;base64,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"},9096:function(e,t,r){e.exports=r.p+"img/pocetna.f32e5a20.jpg"},8013:function(e,t,r){e.exports=r.p+"img/profile-picture.b3be3914.png"},2315:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMOSURBVFiF7ZTNa1RXGMZ/77k3yWhjTfEDutF8qJsg3agUozNJV9JYnJmmf0C30m4CKkSXTa2CDYgrKd2KjmTGVqVKqTFRkGhBsVlYksksKi40+JEYrN45bxf3KvmazBkd68Zn9XLvc97nd95zz4X3eseSShe0bE2ttr58C7oTZH341P4N5pyn3tHRocz9twbQtD3dhejPwLISlicCX+cHs/2uPU2F4afCcPlVjXZMx57WT8ee1luRzxDOAh8qZJrjqbRrX6cJhGNnFFgmqj35odzBBSHjqf3Ad8BjT/31LsfhNIHwzMOdlwoHGB/M9kaTWG4JvnHp7XYEol8AqLE/lm2o9AFotKY6AEoLwAfU3Chn9YvF62El66oHAEVHH8XgxcvvymmNE4DAGMCUFjeX82pdbFNUjVYNQNFsaNbucl4L3QCiOP0LnABMIMeBCZSd0VVbUE3x5AGgE3hgqPnJpbfzn3BtIp0yqqcAH+GsUfpixh8GeGaDLdHOO4FAla7CUPZMVQEAGhPJvaJyaDGPiu4rXM4ddu3pBNDYnv4Uq70CHQ5rFPgD1Z7xodzwGwG0tn5VO72ieAR0N+H38hDltKLnPc/+NVX77B5A/fPYx4H6Gw36OUoX0ABY4NjSCX/PyEjmecUAa7Z1fuRJbT9CO/CvID9Q6/Xlf888Xgy6sT3ZIEo3KnuBOoFL1mi6MJB75AwQ7jy4CCSAgrHaNXYl9+diwXPVnEhvVqsZhLUCl5ZM+DsWmsSC13B6xYu+KPwfsX6i0nCA/OX+69RIQuCuQkd4lPM1bwIt29NtVnQQCAS7KT945nal4TPVtC31CYZhwFcjbYWB/msz38+bgBX9HjCIHnrTcIDxK9lbKnIEMFjtnft+FkBzfNdGIA5MLpUa57tcTnVBcBCYEuhY1/Zla0kAVS8ZVnJiZCAzVS2AO1d/mQQ5CUjRs8mSAIgmAAS9UK3wV1J+i6pEaQDYABBYc7Pa+cYLbkYgG2Y+9+f4VgJ4xo41xVNVBbA2KoRVs8BmuZSK7/tr6P/IeC93/Qe2xRr2sDCMpQAAAABJRU5ErkJggg=="}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var i=t[a]={exports:{}};return e[a].call(i.exports,i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(t,a,o,i){if(!a){var s=1/0;for(d=0;d<e.length;d++){a=e[d][0],o=e[d][1],i=e[d][2];for(var n=!0,l=0;l<a.length;l++)(!1&i||s>=i)&&Object.keys(r.O).every((function(e){return r.O[e](a[l])}))?a.splice(l--,1):(n=!1,i<s&&(s=i));if(n){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[a,o,i]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,i,s=a[0],n=a[1],l=a[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(o in n)r.o(n,o)&&(r.m[o]=n[o]);if(l)var d=l(r)}for(t&&t(a);c<s.length;c++)i=s[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(d)},a=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(3392)}));a=r.O(a)})();
//# sourceMappingURL=app.5f28c4ab.js.map