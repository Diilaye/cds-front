"use strict";(self.webpackChunkcds_front=self.webpackChunkcds_front||[]).push([[134],{5134:(Z,v,a)=>{a.r(v),a.d(v,{SecureModule:()=>P});var l=a(6895),c=a(646),d=a(5481),t=a(1571),m=a(629);function o(n,h){1&n&&t._UZ(0,"div",11)}function T(n,h){if(1&n&&(t.TgZ(0,"a",13),t._uU(1),t.qZA()),2&n){const e=h.$implicit;t.Q6J("routerLink",e.link),t.xp6(1),t.hij(" ",e.name," ")}}function r(n,h){if(1&n&&(t.TgZ(0,"div",11),t.YNc(1,T,2,2,"a",12),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.menu)}}let g=(()=>{class n{constructor(e,s){this.router=e,this.authService=s,this.userconnected=d.g.user,this.menu=[],this.menu=[{name:"Dashbord",link:"/dashboard",acces:"super"},{name:"Utilisateur",link:"/dashboard",acces:"super"},{name:"Message",link:"/message/list",acces:"super"}]}ngOnInit(){this.getUserConnected()}getUserConnected(){this.authService.currentUser().subscribe({next:e=>{this.userconnected=e.data.user,console.log("error log ",e.data.user)},error:e=>{console.log("error log ",e)}})}logOut(){localStorage.removeItem("token"),localStorage.removeItem("userconnected"),d.g.user=null,this.router.navigate(["/"])}static#t=this.\u0275fac=function(s){return new(s||n)(t.Y36(c.F0),t.Y36(m.e))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-secure"]],decls:14,vars:2,consts:[[1,"navbar","shadow","navbar-expand-lg","mybg-color","text-white","fixed-top"],[1,"container-fluid","texte-white"],["href","javascript:void(0)",1,"navbar-brand"],["src","assets/images/cds.jpg","alt","Bootstrap","width","200","height","auto"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],["class","navbar-nav mx-auto",4,"ngIf"],[1,"d-flex","my-2","my-lg-0"],["type","button",1,"btn","btn-white","my-2","my-sm-0",2,"color","rgb(255, 255, 255)",3,"click"],["aria-hidden","true",1,"fa","fa-sign-out"],[1,"navbar-nav","mx-auto"],["class","nav-link active w-col","style","color: rgb(255, 255, 255);",3,"routerLink",4,"ngFor","ngForOf"],[1,"nav-link","active","w-col",2,"color","rgb(255, 255, 255)",3,"routerLink"]],template:function(s,i){1&s&&(t.TgZ(0,"nav",0)(1,"div",1)(2,"a",2),t._UZ(3,"img",3),t.qZA(),t.TgZ(4,"button",4),t._UZ(5,"span",5),t.qZA(),t.TgZ(6,"div",6),t.YNc(7,o,1,0,"div",7),t.YNc(8,r,2,1,"div",7),t.TgZ(9,"div",8)(10,"a",9),t.NdJ("click",function(){return i.logOut()}),t._UZ(11,"i",10),t._uU(12," D\xe9connexion "),t.qZA()()()()(),t._UZ(13,"router-outlet")),2&s&&(t.xp6(7),t.Q6J("ngIf",i.userconnected&&"super"!==i.userconnected.role),t.xp6(1),t.Q6J("ngIf",i.userconnected&&"super"===i.userconnected.role))},dependencies:[l.sg,l.O5,c.lC,c.rH]})}return n})();var _=a(8613),A=a(4873),b=a(6199),u=a(433);function U(n,h){1&n&&(t.TgZ(0,"div",49)(1,"span",50),t._uU(2,"Loading..."),t.qZA()())}const C=function(n,h){return{"bg-success":n,"bg-danger":h}},x=function(n){return["/user/details/",n]};function E(n,h){if(1&n){const e=t.EpF();t.TgZ(0,"tr",37)(1,"td",38),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td")(6,"div",39)(7,"input",40),t.NdJ("change",function(i){const f=t.CHM(e).$implicit,L=t.oxw(2);return t.KtG(L.onActivate(f.id,i))}),t.qZA()(),t.YNc(8,U,3,0,"div",41),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td",42)(16,"button",43),t._UZ(17,"i",44),t.qZA(),t.TgZ(18,"button",45),t._UZ(19,"i",46),t.qZA(),t.TgZ(20,"a",47),t._UZ(21,"i",48),t.qZA()()()}if(2&n){const e=h.$implicit,s=t.oxw(2);t.xp6(2),t.AsE("",e.nom," ",e.prenom,""),t.xp6(2),t.Oqu(e.villeResidence?e.villeResidence:"........."),t.xp6(2),t.Q6J("hidden",s.loading&&e.id===s.currentId),t.xp6(1),t.s9C("id","flexSwitchCheckDefault-"+e.id),t.Q6J("ngClass",t.WLB(12,C,s.etat(e.active),!s.etat(e.active)))("ngModel",s.etat(e.active)),t.xp6(1),t.Q6J("ngIf",s.loading&&e.id===s.currentId),t.xp6(2),t.Oqu(e.email),t.xp6(2),t.Oqu(e.telephone),t.xp6(2),t.Oqu(e.dateNaiss),t.xp6(6),t.Q6J("routerLink",t.VKq(15,x,e.id))}}function y(n,h){if(1&n&&(t.TgZ(0,"div",33)(1,"table",34)(2,"thead")(3,"tr")(4,"th",35),t._uU(5,"Nom complet"),t.qZA(),t.TgZ(6,"th",35),t._uU(7,"Ville"),t.qZA(),t.TgZ(8,"th",35),t._uU(9,"Status"),t.qZA(),t.TgZ(10,"th",35),t._uU(11,"Email"),t.qZA(),t.TgZ(12,"th",35),t._uU(13,"T\xe9l\xe9phone"),t.qZA(),t.TgZ(14,"th",35),t._uU(15,"Date naissance"),t.qZA(),t.TgZ(16,"th",35),t._uU(17,"Actions"),t.qZA()()(),t.TgZ(18,"tbody"),t.YNc(19,E,22,17,"tr",36),t.qZA()()()),2&n){const e=t.oxw();t.xp6(19),t.Q6J("ngForOf",e.filteredData)}}function D(n,h){1&n&&(t.TgZ(0,"div",51)(1,"div",52)(2,"span",50),t._uU(3,"Loading..."),t.qZA()()())}let M=(()=>{class n{constructor(e,s,i){this.userService=e,this.ptService=s,this.msService=i,this.data=[],this.searchText="",this.filteredData=[],this.loading=!1,this.currentId="",this.userCount=0,this.messageCount=0,this.partenaireCount=0}ngOnInit(){this.findAllUsers(),this.filterData(),this.loadStatistics()}loadStatistics(){this.msService.all().subscribe(e=>{this.messageCount=e.data.length}),this.ptService.all().subscribe(e=>{this.partenaireCount=e.data.length})}findAllUsers(){this.searchText="",this.userService.all().subscribe({next:e=>{console.log("data data data : ",e.data),e.data&&Array.isArray(e.data.users)&&(this.userCount=e.data.users.length,this.data=e.data.users.slice().reverse(),this.filteredData=e.data.users.slice().reverse())},error:e=>{console.log("error ",e)}})}filterData(){if(this.data&&this.searchText){const e=this.searchText.toLowerCase();this.filteredData=this.data.filter(s=>s.villeResidence.toLowerCase()===e)}else this.filteredData=this.data}onActivate(e,s){this.currentId=e,this.loading=!0;const p={id:e,active:this.getEtat(s.target.checked)};this.userService.update(e,p).subscribe(f=>{this.loading=!1,this.findAllUsers(),console.log("data ",f.data)},f=>{this.loading=!1,console.log("erreur ",f)})}etat(e){return"active"===e}getEtat(e){return e?"active":"inactive"}static#t=this.\u0275fac=function(s){return new(s||n)(t.Y36(_.K),t.Y36(A.g),t.Y36(b.e))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-dashboard"]],decls:78,vars:7,consts:[[1,"container-fluid","mybg-color","pb-5","mt-5","pt-5"],[1,"d-flex","justify-content-between","align-items-center"],["routerLink","/user/add","type","button",1,"btn","btn-warning","rounded-pill"],["aria-hidden","true",1,"fa","fa-add"],[1,"container","pl-2","pr-2","pt-2"],[1,"row"],[1,"col-xl-3","col-md-6","mb-4"],[1,"card","border-left-success","shadow","h-100","py-2"],[1,"card-body"],[1,"row","no-gutters","align-items-center"],[1,"col","mr-2"],[1,"text-xs","font-weight-bold","text-success","text-uppercase","mb-1"],[1,"h5","mb-0","font-weight-bold","text-gray-800"],[1,"container","pl-2","pr-2","pb-2","shadow","rounded-5","mb-2",2,"max-height","500px","overflow-y","auto"],[1,"row","row-cols-lg-auto","g-3","align-items-center","mt-3","mb-2"],[1,"col-md-6"],["for","inlineFormSelectPref",1,"visually-hidden"],["name","searchText","id","inlineFormSelectPref",1,"form-select",3,"ngModel","change","ngModelChange"],["selected","","value",""],["value","nantes"],["value","rennes"],["value","anger"],["value","le mans"],["value","brest"],["value","Caen"],["value","quimper"],["value","saint-nazaire"],["value","autres"],[1,"col-12"],["type","button",1,"btn","btn-success",3,"click"],[1,"fa-solid","fa-arrows-rotate"],["class","table-responsive",4,"ngIf","ngIfElse"],["placeholder",""],[1,"table-responsive"],[1,"table","table-white","table-border-0","no-border"],["scope","col"],["class","",4,"ngFor","ngForOf"],[1,""],["scope","row"],[1,"form-check","form-switch",3,"hidden"],["type","checkbox","role","switch",1,"form-check-input",3,"ngClass","id","ngModel","change"],["class","spinner-grow spinner-grow-sm text-secondary","role","status",4,"ngIf"],[1,"gap-1","d-flex"],["type","button",1,"btn","btn-danger","btn-sm"],["aria-hidden","true",1,"fa","fa-trash"],["type","button",1,"btn","btn-warning","btn-sm"],[1,"fas","fa-edit"],["type","button",1,"btn","btn-success","btn-sm",3,"routerLink"],["aria-hidden","true",1,"fa","fa-eye"],["role","status",1,"spinner-grow","spinner-grow-sm","text-secondary"],[1,"visually-hidden"],[1,"text-center","mx-auto","mt-5"],["role","status",1,"spinner-border","text-secondary"]],template:function(s,i){if(1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h5"),t._uU(3,"Utilisateur"),t.qZA(),t.TgZ(4,"button",2),t._UZ(5,"i",3),t._uU(6," Ajouter utilisateur "),t.qZA()()(),t.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"div",9)(13,"div",10)(14,"div",11),t._uU(15," Total utilisateur "),t.qZA(),t.TgZ(16,"div",5)(17,"div",12),t._uU(18),t.qZA()()()()()()(),t.TgZ(19,"div",6)(20,"div",7)(21,"div",8)(22,"div",9)(23,"div",10)(24,"div",11),t._uU(25," Total messages "),t.qZA(),t.TgZ(26,"div",12),t._uU(27),t.qZA()()()()()(),t.TgZ(28,"div",6)(29,"div",7)(30,"div",8)(31,"div",9)(32,"div",10)(33,"div",11),t._uU(34," Total messages "),t.qZA(),t.TgZ(35,"div",12),t._uU(36),t.qZA()()()()()(),t.TgZ(37,"div",6)(38,"div",7)(39,"div",8)(40,"div",9)(41,"div",10)(42,"div",11),t._uU(43," Total partenaires "),t.qZA(),t.TgZ(44,"div",12),t._uU(45),t.qZA()()()()()()()(),t.TgZ(46,"div",13)(47,"form",14)(48,"div",15)(49,"label",16),t._uU(50,"Ville de r\xe9sidence"),t.qZA(),t.TgZ(51,"select",17),t.NdJ("change",function(){return i.filterData()})("ngModelChange",function(f){return i.searchText=f}),t.TgZ(52,"option",18),t._uU(53,"S\xe9lectionnez une ville..."),t.qZA(),t.TgZ(54,"option",19),t._uU(55,"Nantes"),t.qZA(),t.TgZ(56,"option",20),t._uU(57,"Rennes"),t.qZA(),t.TgZ(58,"option",21),t._uU(59,"Anger"),t.qZA(),t.TgZ(60,"option",22),t._uU(61,"Le mans"),t.qZA(),t.TgZ(62,"option",23),t._uU(63,"Brest"),t.qZA(),t.TgZ(64,"option",24),t._uU(65,"Caen"),t.qZA(),t.TgZ(66,"option",25),t._uU(67,"Quimper"),t.qZA(),t.TgZ(68,"option",26),t._uU(69,"Saint-nazaire"),t.qZA(),t.TgZ(70,"option",27),t._uU(71,"Autres"),t.qZA()()(),t.TgZ(72,"div",28)(73,"button",29),t.NdJ("click",function(){return i.findAllUsers()}),t._UZ(74,"i",30),t.qZA()()(),t.YNc(75,y,20,1,"div",31),t.YNc(76,D,4,0,"ng-template",null,32,t.W1O),t.qZA()),2&s){const p=t.MAs(77);t.xp6(18),t.hij(" ",i.userCount," "),t.xp6(9),t.hij(" ",i.messageCount," "),t.xp6(9),t.Oqu(i.messageCount),t.xp6(9),t.hij(" ",i.partenaireCount," "),t.xp6(6),t.Q6J("ngModel",i.searchText),t.xp6(24),t.Q6J("ngIf",i.data&&i.data.length>0)("ngIfElse",p)}},dependencies:[l.mk,l.sg,l.O5,c.rH,u._Y,u.YN,u.Kr,u.Wl,u.EJ,u.JJ,u.JL,u.On,u.F]})}return n})();const S=[{path:"",component:g,canActivate:[a(5240).a],children:[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"dashboard",component:M},{path:"user",loadChildren:()=>Promise.all([a.e(592),a.e(445)]).then(a.bind(a,445)).then(n=>n.UserModule)},{path:"message",loadChildren:()=>a.e(425).then(a.bind(a,5425)).then(n=>n.MessageModule)},{path:"partenaire",loadChildren:()=>Promise.all([a.e(592),a.e(968)]).then(a.bind(a,5968)).then(n=>n.PartenaireModule)}]}];let I=(()=>{class n{static#t=this.\u0275fac=function(s){return new(s||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[c.Bz.forChild(S),c.Bz]})}return n})(),P=(()=>{class n{static#t=this.\u0275fac=function(s){return new(s||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[l.ez,I,u.u5,u.UX]})}return n})()},6199:(Z,v,a)=>{a.d(v,{e:()=>m});var l=a(2671),c=a(2340),d=a(1571),t=a(529);let m=(()=>{class o extends l.v{uri(){return"messages"}constructor(r){super(r),this.http=r}replay(r){return this.http.post(`${c.N.api}/${this.uri()}/replay`,r)}static#t=this.\u0275fac=function(g){return new(g||o)(d.LFG(t.eN))};static#e=this.\u0275prov=d.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()},4873:(Z,v,a)=>{a.d(v,{g:()=>m});var l=a(2340),c=a(2671),d=a(1571),t=a(529);let m=(()=>{class o extends c.v{uri(){return"partenaires"}constructor(r){super(r),this.http=r}all(r=null){return null==r&&(r=`${l.N.api}/${this.uri()}/allByUser`),this.http.get(`${r}`)}static#t=this.\u0275fac=function(g){return new(g||o)(d.LFG(t.eN))};static#e=this.\u0275prov=d.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()},8613:(Z,v,a)=>{a.d(v,{K:()=>m});var l=a(2340),c=a(2671),d=a(1571),t=a(529);let m=(()=>{class o extends c.v{uri(){return"users"}constructor(r){super(r),this.http=r}update(r,g){return this.http.put(`${l.N.api}/${this.uri()}/${r}`,g)}transaction(){return this.http.post(`${l.N.api}/transactions`,{})}all(r=null){return null==r&&(r=`${l.N.api}/${this.uri()}/all`),this.http.get(`${r}`)}getUser(){const r=localStorage.getItem("userconnected");return r?JSON.parse(r):null}static#t=this.\u0275fac=function(g){return new(g||o)(d.LFG(t.eN))};static#e=this.\u0275prov=d.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})()}}]);