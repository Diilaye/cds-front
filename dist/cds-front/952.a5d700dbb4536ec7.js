"use strict";(self.webpackChunkcds_front=self.webpackChunkcds_front||[]).push([[952],{7952:(Ze,m,a)=>{a.r(m),a.d(m,{UserModule:()=>ve});var c=a(6895),d=a(646),e=a(1571);let h=(()=>{class n{static#e=this.\u0275fac=function(o){return new(o||n)};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-user"]],decls:1,vars:0,template:function(o,i){1&o&&e._UZ(0,"router-outlet")},dependencies:[d.lC]})}return n})();var g=a(2340),_=a(8613),f=a(4622),v=a(6199),Z=a(4873);function b(n,r){1&n&&(e.TgZ(0,"div",20)(1,"div",21),e._UZ(2,"img",22),e.qZA(),e.TgZ(3,"div",11)(4,"div",23),e._UZ(5,"span",24),e.qZA(),e.TgZ(6,"p",25),e._UZ(7,"span",26)(8,"span",27)(9,"span",27)(10,"span",28)(11,"span",29),e.qZA()()())}const A=function(n,r){return{"text-bg-success":n,"text-bg-danger":r}};function x(n,r){if(1&n&&(e.TgZ(0,"div",20)(1,"div",21),e._UZ(2,"img",30),e.qZA(),e.TgZ(3,"div",11)(4,"div",23),e._uU(5),e.qZA(),e.TgZ(6,"p")(7,"strong"),e._uU(8,"Type d'abonnement : "),e.qZA(),e._uU(9),e.qZA(),e.TgZ(10,"p")(11,"strong"),e._uU(12,"Email : "),e.qZA(),e._uU(13),e.qZA(),e.TgZ(14,"p")(15,"strong"),e._uU(16,"T\xe9l\xe9phone : "),e.qZA(),e._uU(17),e.qZA(),e.TgZ(18,"p")(19,"strong"),e._uU(20,"Adresse : "),e.qZA(),e._uU(21),e.qZA(),e.TgZ(22,"p")(23,"strong"),e._uU(24,"Status : "),e.qZA(),e.TgZ(25,"span",31),e._uU(26),e.qZA()()()()),2&n){const t=e.oxw();let o;e.xp6(2),e.s9C("src",null!==(o=null==t.userDetails||null==t.userDetails.profile?null:t.userDetails.profile.url)&&void 0!==o?o:"assets/images/bg.jpg",e.LSH),e.xp6(3),e.AsE(" ",null==t.userDetails?null:t.userDetails.prenom," ",null==t.userDetails?null:t.userDetails.nom," "),e.xp6(4),e.hij(" ",t.typeabonnements[+(null==t.userDetails?null:t.userDetails.typeAbonnement)-1].name_plan,""),e.xp6(4),e.hij(" ",null==t.userDetails?null:t.userDetails.email,""),e.xp6(4),e.hij(" ",null==t.userDetails?null:t.userDetails.telephone,""),e.xp6(4),e.AsE(" ",null==t.userDetails?null:t.userDetails.pays," ",null==t.userDetails?null:t.userDetails.ville," "),e.xp6(4),e.Q6J("ngClass",e.WLB(10,A,!t.inactive,t.inactive)),e.xp6(1),e.hij(" ",null==t.userDetails?null:t.userDetails.active," ")}}const T=function(){return["/partenaire/list"]};function q(n,r){if(1&n&&(e.TgZ(0,"div",8)(1,"h6",9),e._uU(2,"Partenaires"),e.qZA(),e.TgZ(3,"span",10),e._uU(4),e.qZA()()),2&n){const t=e.oxw();e.Q6J("routerLink",e.DdM(2,T)),e.xp6(4),e.Oqu(t.partenaireLength)}}function y(n,r){if(1&n&&(e.TgZ(0,"div",15)(1,"h6",9),e._uU(2,"Partenaires"),e.qZA(),e.TgZ(3,"span",10),e._uU(4),e.qZA()()),2&n){const t=e.oxw();e.xp6(4),e.Oqu(t.partenaireLength)}}function U(n,r){1&n&&(e.TgZ(0,"div",32),e._uU(1," On \xe9tudie votre adh\xe9sion , vous recevez un message une fois activ\xe9. "),e.qZA())}const C=function(){return["/message/recive"]};let w=(()=>{class n{constructor(t,o,i,s,u,p){this.userService=t,this.typeASer=o,this.route=i,this.router=s,this.messageS=u,this.ptService=p,this.loading=!1,this.typeabonnements=[],this.messageLength=0,this.partenaireLength=0,this.url="",this.urlp="",this.autorize=!0}ngOnInit(){this.typeabonnements=this.typeASer.plansabonnements,this.getOneUser(),this.url=`${g.N.api}/messages/allUser`,this.urlp=`${g.N.api}/partenaires/allByUser`,this.getMessages(),this.getPartenaires(),this.ptService.sharedData=this.userId}getOneUser(){this.loading=!0,this.autorize=!1,console.log("breukh avant "),this.route.paramMap.subscribe(t=>{this.userId=t.get("id"),this.ptService.sharedData=this.userId,console.log("User ID:",this.userId),this.userService.byId(this.userId).subscribe(o=>{this.loading=!1,this.userDetails=o.data.users,this.userconnected=this.userService.getUser()?.user,console.log("userconnected ",this.userconnected),this.autorize="utilisateur"==this.userconnected?.role,console.log("User Details:",o),console.log("after"),console.log("after autorize ",this.autorize)},o=>{this.loading=!1,console.log("erreur ",o)})})}getPartenaires(){this.ptService.all(this.urlp).subscribe({next:t=>{this.partenaireLength=t.data.length??0},error:t=>{console.log("error ",t)}})}getMessages(){this.messageS.all(this.url).subscribe({next:t=>{this.messageLength=t.data.length??0},error:t=>{console.log("error ",t)}})}get role(){return this.userconnected&&"utilisateur"===this.userconnected?.role}get inactive(){return"inactive"===this.userDetails?.active}abonnement(){this.inactive||this.userService.transaction().subscribe({next:t=>{console.log("data ",t.data.url),window.open(t.data.url,"_blank")},error:t=>{console.log("error ",t)}})}static#e=this.\u0275fac=function(o){return new(o||n)(e.Y36(_.K),e.Y36(f.q),e.Y36(d.gz),e.Y36(d.F0),e.Y36(v.e),e.Y36(Z.g))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-details"]],decls:31,vars:11,consts:[[1,"container-fluid","mybg-color","mt-5","pt-5"],[1,"row","d-flex","justify-content-center","align-items-center","mybg-color","gap-2"],[1,"col-md","mx-auto","mb-4","shadow","rounded-3"],["class","row  ","style","border-radius: 100%;",4,"ngIf"],[1,"col-md","mx-auto"],[1,"row"],[1,"col",3,"hidden"],[1,"card","border-0","cursor-pointer","mb-4","bg-body-white","rounded",2,"height","10rem","cursor","pointer"],[1,"d-flex","shadow","rounded-4","flex-column","justify-content-center","align-items-center","h-100",3,"routerLink"],[1,"card-title"],[1,"badge","bg-danger"],[1,"col"],["class","d-flex shadow rounded-4 flex-column justify-content-center align-items-center h-100",3,"routerLink",4,"ngIf"],["class","d-flex shadow rounded-4 flex-column justify-content-center align-items-center h-100",4,"ngIf"],[1,"card","border-0","cursor-pointer","mb-5","bg-body-white","rounded",2,"height","10rem","cursor","pointer"],[1,"d-flex","shadow","rounded-4","flex-column","justify-content-center","align-items-center","h-100"],[1,"card","border-0","cursor-pointer","mb-5","bg-body-white","rounded",2,"height","10rem","cursor","pointer",3,"click"],[1,"card-title","text-center"],[1,"row","mx-auto","d-flex","justify-content-center","align-items-center","mb-4","gap-2",2,"background-color","rgb(237, 237, 237)",3,"hidden"],["class","mx-auto text-center fs-4",4,"ngIf"],[1,"row",2,"border-radius","100%"],[1,"col","mx-auto"],["src","assets/images/bg.jpg","height","300","width","300","alt","...",1,""],[1,"fs-3","fw-bold","mb-4","text-capitalize"],[1,"placeholder","col-6"],[1,"placeholder-glow"],[1,"placeholder","col-7","bg-secondary"],[1,"placeholder","col-4","bg-secondary"],[1,"placeholder","col-6","bg-secondary"],[1,"placeholder","col-8","bg-secondary"],["height","300","width","300","alt","...",1,"",3,"src"],[1,"badge",3,"ngClass"],[1,"mx-auto","text-center","fs-4"]],template:function(o,i){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e.YNc(3,b,12,0,"div",3),e.YNc(4,x,27,13,"div",3),e.qZA(),e.TgZ(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"h6",9),e._uU(11,"Messages"),e.qZA(),e.TgZ(12,"span",10),e._uU(13),e.qZA()()()(),e.TgZ(14,"div",11)(15,"div",7),e.YNc(16,q,5,3,"div",12),e.YNc(17,y,5,1,"div",13),e.qZA()()(),e.TgZ(18,"div",5)(19,"div",11)(20,"div",14)(21,"div",15)(22,"h6",9),e._uU(23,"Profil"),e.qZA()()()(),e.TgZ(24,"div",6)(25,"div",16),e.NdJ("click",function(){return i.abonnement()}),e.TgZ(26,"div",15)(27,"h6",17),e._uU(28,"Payez votre abonnemnt"),e.qZA()()()()()()(),e.TgZ(29,"div",18),e.YNc(30,U,2,0,"div",19),e.qZA()()),2&o&&(e.xp6(3),e.Q6J("ngIf",i.loading),e.xp6(1),e.Q6J("ngIf",!i.loading),e.xp6(3),e.Q6J("hidden",!i.autorize),e.xp6(2),e.Q6J("routerLink",e.DdM(10,C)),e.xp6(4),e.Oqu(i.messageLength),e.xp6(3),e.Q6J("ngIf",!i.inactive),e.xp6(1),e.Q6J("ngIf",i.inactive),e.xp6(7),e.Q6J("hidden",!i.autorize),e.xp6(5),e.Q6J("hidden",!i.autorize),e.xp6(1),e.Q6J("ngIf",i.role&&i.inactive))},dependencies:[c.mk,c.O5,d.rH],styles:["*[_ngcontent-%COMP%]{background-color:#fdfbf1;color:#000}"]})}return n})();var l=a(433);const N=function(n,r){return{"bg-success":n,"bg-danger":r}},S=function(n){return["/user/details/",n]};function I(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"tr",28)(1,"td",29),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4,"Personne moins de 30 ans"),e.qZA(),e.TgZ(5,"td")(6,"div",30)(7,"input",31),e.NdJ("change",function(i){const u=e.CHM(t).$implicit,p=e.oxw(2);return e.KtG(p.onActivate(u.id,i))}),e.qZA()()(),e.TgZ(8,"td"),e._uU(9),e.qZA(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td",32)(15,"button",33),e._UZ(16,"i",34),e.qZA(),e.TgZ(17,"button",35),e._UZ(18,"i",36),e.qZA(),e.TgZ(19,"a",37),e._UZ(20,"i",38),e.qZA()()()}if(2&n){const t=r.$implicit,o=e.oxw(2);e.xp6(2),e.AsE("",t.nom," ",t.prenom," "),e.xp6(5),e.s9C("id","flexSwitchCheckDefault-"+t.id),e.Q6J("ngClass",e.WLB(9,N,o.etat(t.active),!o.etat(t.active)))("ngModel",o.etat(t.active)),e.xp6(2),e.Oqu(t.email),e.xp6(2),e.Oqu(t.telephone),e.xp6(2),e.Oqu(t.dateNaiss),e.xp6(6),e.Q6J("routerLink",e.VKq(12,S,t.id))}}function J(n,r){if(1&n&&(e.TgZ(0,"div",24)(1,"table",25)(2,"thead")(3,"tr")(4,"th",26),e._uU(5,"Nom complet"),e.qZA(),e.TgZ(6,"th",26),e._uU(7,"Type d'abonnement"),e.qZA(),e.TgZ(8,"th",26),e._uU(9,"Status"),e.qZA(),e.TgZ(10,"th",26),e._uU(11,"Email"),e.qZA(),e.TgZ(12,"th",26),e._uU(13,"T\xe9l\xe9phone"),e.qZA(),e.TgZ(14,"th",26),e._uU(15,"Date naissance"),e.qZA(),e.TgZ(16,"th",26),e._uU(17,"Actions"),e.qZA()()(),e.TgZ(18,"tbody"),e.YNc(19,I,21,14,"tr",27),e.qZA()()()),2&n){const t=e.oxw();e.xp6(19),e.Q6J("ngForOf",t.data)}}function k(n,r){1&n&&(e.TgZ(0,"div",39)(1,"div",40)(2,"span",41),e._uU(3,"Loading..."),e.qZA()()())}let E=(()=>{class n{constructor(t){this.userService=t,this.data=[],this.searchText=""}ngOnInit(){this.findAllUsers()}findAllUsers(){this.userService.all().subscribe({next:t=>{console.log("data data data : ",t.data),this.data=t.data.users},error:t=>{console.log("error ",t)}})}onActivate(t,o){const s={id:t,active:this.getEtat(o.target.checked)};this.userService.update(t,s).subscribe(u=>{this.findAllUsers(),console.log("data ",u.data)},u=>{console.log("erreur ",u)})}etat(t){return"active"===t}getEtat(t){return t?"active":"inactive"}static#e=this.\u0275fac=function(o){return new(o||n)(e.Y36(_.K))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-list"]],decls:39,vars:3,consts:[[1,"container-fluid","mybg-color","pb-5","mt-5","pt-5"],[1,"d-flex","justify-content-between","align-items-center"],["routerLink","/user/add","type","button",1,"btn","btn-warning","rounded-pill"],["aria-hidden","true",1,"fa","fa-add"],[1,"container","pl-2","pr-2","pb-2","shadow","rounded-5",2,"max-height","500px","overflow-y","auto"],[1,"row","row-cols-lg-auto","g-3","align-items-center","mt-3","mb-2"],[1,"col-md-6"],["for","inlineFormSelectPref",1,"visually-hidden"],["id","inlineFormSelectPref",1,"form-select",3,"ngModel","ngModelChange"],["selected",""],["value","nantes"],["value","rennes"],["value","anger"],["value","le mans"],["value","brest"],["value","Caen"],["value","quimper"],["value","saint-nazaire"],["value","autres"],[1,"col-12"],["type","button",1,"btn","btn-success",3,"click"],[1,"fa-solid","fa-arrows-rotate"],["class","table-responsive",4,"ngIf","ngIfElse"],["placeholder",""],[1,"table-responsive"],[1,"table","table-white","table-border-0","no-border"],["scope","col"],["class","",4,"ngFor","ngForOf"],[1,""],["scope","row"],[1,"form-check","form-switch"],["type","checkbox","role","switch",1,"form-check-input",3,"ngClass","id","ngModel","change"],[1,"gap-1","d-flex"],["type","button",1,"btn","btn-danger","btn-sm"],["aria-hidden","true",1,"fa","fa-trash"],["type","button",1,"btn","btn-warning","btn-sm"],[1,"fas","fa-edit"],["type","button",1,"btn","btn-success","btn-sm",3,"routerLink"],["aria-hidden","true",1,"fa","fa-eye"],[1,"text-center","mx-auto","mt-5"],["role","status",1,"spinner-border","text-secondary"],[1,"visually-hidden"]],template:function(o,i){if(1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h5"),e._uU(3,"Utilisateur"),e.qZA(),e.TgZ(4,"button",2),e._UZ(5,"i",3),e._uU(6," Ajouter utilisateur "),e.qZA()()(),e.TgZ(7,"div",4)(8,"form",5)(9,"div",6)(10,"label",7),e._uU(11,"Ville de r\xe9sidence"),e.qZA(),e.TgZ(12,"select",8),e.NdJ("ngModelChange",function(u){return i.searchText=u}),e.TgZ(13,"option",9),e._uU(14,"S\xe9lectionnez une ville..."),e.qZA(),e.TgZ(15,"option",10),e._uU(16,"Nantes"),e.qZA(),e.TgZ(17,"option",11),e._uU(18,"Rennes"),e.qZA(),e.TgZ(19,"option",12),e._uU(20,"Anger"),e.qZA(),e.TgZ(21,"option",13),e._uU(22,"Le mans"),e.qZA(),e.TgZ(23,"option",14),e._uU(24,"Brest"),e.qZA(),e.TgZ(25,"option",15),e._uU(26,"Caen"),e.qZA(),e.TgZ(27,"option",16),e._uU(28,"Quimper"),e.qZA(),e.TgZ(29,"option",17),e._uU(30,"Saint-nazaire"),e.qZA(),e.TgZ(31,"option",18),e._uU(32,"Autres"),e.qZA()()(),e.TgZ(33,"div",19)(34,"button",20),e.NdJ("click",function(){return i.findAllUsers()}),e._UZ(35,"i",21),e.qZA()()(),e.YNc(36,J,20,1,"div",22),e.YNc(37,k,4,0,"ng-template",null,23,e.W1O),e.qZA()),2&o){const s=e.MAs(38);e.xp6(12),e.Q6J("ngModel",i.searchText),e.xp6(24),e.Q6J("ngIf",i.data&&i.data.length>0)("ngIfElse",s)}},dependencies:[c.mk,c.sg,c.O5,d.rH,l._Y,l.YN,l.Kr,l.Wl,l.EJ,l.JJ,l.JL,l.On,l.F]})}return n})();var Q=a(3900),Y=a(629),R=a(2965),L=a(6046);const D=function(n){return{active:n}};function M(n,r){if(1&n&&(e.TgZ(0,"li",19)(1,"a",20),e._uU(2),e.qZA()()),2&n){const t=r.$implicit,o=e.oxw();e.xp6(1),e.Q6J("ngClass",e.VKq(2,D,t.id===o.currentStep)),e.xp6(1),e.hij(" ",t.name," ")}}function F(n,r){if(1&n&&(e.TgZ(0,"div",21),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.hij(" ",t.errorMessage," ")}}function O(n,r){1&n&&(e.TgZ(0,"div",40),e._uU(1," Renseigner l'email "),e.qZA())}function j(n,r){if(1&n&&(e.TgZ(0,"option",41),e._uU(1),e.qZA()),2&n){const t=r.$implicit;e.xp6(1),e.hij(" ",t.name_plan," ")}}function P(n,r){1&n&&(e.TgZ(0,"div",40),e._uU(1," Renseigner le mot de passe "),e.qZA())}function z(n,r){1&n&&(e.TgZ(0,"div",40),e._uU(1," Confirmer le mot de passe saisie. "),e.qZA())}function V(n,r){1&n&&(e.TgZ(0,"div",40),e._uU(1," Les deux mots de passe ne correspondent pas. "),e.qZA())}const K=function(n,r){return{"fa-eye":n,"fa-eye-slash":r}};function B(n,r){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"form",22)(2,"div",23)(3,"label",24),e._uU(4,"Email"),e.qZA(),e._UZ(5,"input",25),e.YNc(6,O,2,0,"div",26),e.qZA(),e.TgZ(7,"div",23)(8,"label",27),e._uU(9,"Type abonnement"),e.qZA(),e.TgZ(10,"select",28)(11,"option",29),e._uU(12,"S\xe9l\xe9ctionnez"),e.qZA(),e.YNc(13,j,2,1,"option",30),e.qZA()(),e.TgZ(14,"div",23)(15,"label",31),e._uU(16,"Mot de passe"),e.qZA(),e.TgZ(17,"div",32),e._UZ(18,"input",33),e.TgZ(19,"button",34),e.NdJ("click",function(i){e.CHM(t);const s=e.oxw();return e.KtG(s.togglePasswordVisibility(i))}),e._UZ(20,"i",35),e.qZA()(),e.YNc(21,P,2,0,"div",26),e.qZA(),e.TgZ(22,"div",23)(23,"label",36),e._uU(24,"Confirmation de mot de passe"),e.qZA(),e._UZ(25,"input",37),e.YNc(26,z,2,0,"div",26),e.YNc(27,V,2,0,"div",26),e.qZA(),e.TgZ(28,"div",23)(29,"label",38),e._uU(30,"Profil"),e.qZA(),e.TgZ(31,"input",39),e.NdJ("change",function(i){e.CHM(t);const s=e.oxw();return e.KtG(s.displayFileName(i,1))}),e.qZA()()(),e.BQk()}if(2&n){const t=e.oxw();let o;e.xp6(1),e.Q6J("formGroup",t.steps[0]),e.xp6(5),e.Q6J("ngIf",(null==t.email?null:t.email.invalid)&&((null==t.email?null:t.email.dirty)||(null==t.email?null:t.email.touched))),e.xp6(7),e.Q6J("ngForOf",t.plansabonnements),e.xp6(5),e.s9C("type",t.showPassword?"text":"password"),e.xp6(2),e.Q6J("ngClass",e.WLB(9,K,!t.showPassword,t.showPassword)),e.xp6(1),e.Q6J("ngIf",(null==t.password?null:t.password.invalid)&&((null==t.password?null:t.password.dirty)||(null==t.password?null:t.password.touched))),e.xp6(4),e.s9C("type",t.showPassword?"text":"password"),e.xp6(1),e.Q6J("ngIf",(null==t.confirmpassword?null:t.confirmpassword.invalid)&&((null==t.confirmpassword?null:t.confirmpassword.dirty)||(null==t.confirmpassword?null:t.confirmpassword.touched))),e.xp6(1),e.Q6J("ngIf",t.steps[0].hasError("passwordMismatch")&&(null==(o=t.steps[0].get("confirmpassword"))?null:o.touched)&&(null==(o=t.steps[0].get("confirmpassword"))?null:o.dirty))}}function H(n,r){1&n&&(e.TgZ(0,"div",40),e._uU(1," Renseigner le nom "),e.qZA())}function G(n,r){1&n&&(e.TgZ(0,"div",40),e._uU(1," Renseigner le pr\xe9nom "),e.qZA())}function $(n,r){1&n&&(e.TgZ(0,"div",40),e._uU(1," Renseigner la date de naissance! "),e.qZA())}function W(n,r){1&n&&(e.TgZ(0,"div",40),e._uU(1," Renseigner le sexe "),e.qZA())}function X(n,r){1&n&&(e.TgZ(0,"div",40),e._uU(1," Renseignez un Num\xe9ro de t\xe9l\xe9phone valide "),e.qZA())}function ee(n,r){1&n&&(e.TgZ(0,"div",40),e._uU(1," Renseigner le pays "),e.qZA())}function te(n,r){1&n&&(e.TgZ(0,"div",40),e._uU(1," Renseigner la ville "),e.qZA())}function ne(n,r){1&n&&(e.TgZ(0,"div",40),e._uU(1," Renseigner le domicile! "),e.qZA())}function oe(n,r){1&n&&(e.TgZ(0,"div",40),e._uU(1," Renseigner le code postal! "),e.qZA())}function ie(n,r){1&n&&(e.TgZ(0,"div",40),e._uU(1," Renseigner le rue "),e.qZA())}function le(n,r){1&n&&(e.TgZ(0,"div",40),e._uU(1," Renseigner la ville de r\xe9sidence "),e.qZA())}function re(n,r){1&n&&(e.TgZ(0,"div",40),e._uU(1," Renseigner le Num\xe9ro s\xe9curit\xe9 "),e.qZA())}function se(n,r){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"form",22)(2,"div",42)(3,"label",43),e._uU(4,"Nom"),e.qZA(),e._UZ(5,"input",44),e.YNc(6,H,2,0,"div",26),e.qZA(),e.TgZ(7,"div",42)(8,"label",43),e._uU(9,"Pr\xe9nom"),e.qZA(),e._UZ(10,"input",45),e.YNc(11,G,2,0,"div",26),e.qZA(),e.TgZ(12,"div",42)(13,"label",46),e._uU(14,"Date naissance"),e.qZA(),e._UZ(15,"input",47),e.YNc(16,$,2,0,"div",26),e.qZA(),e.TgZ(17,"div",42)(18,"label",48),e._uU(19,"Sexe"),e.qZA(),e.TgZ(20,"select",49)(21,"option",29),e._uU(22,"S\xe9l\xe9ctionnez"),e.qZA(),e.TgZ(23,"option",41),e._uU(24,"Homme"),e.qZA(),e.TgZ(25,"option",50),e._uU(26,"Femme"),e.qZA()(),e.YNc(27,W,2,0,"div",26),e.qZA(),e.TgZ(28,"div",51)(29,"label",52),e._uU(30,"T\xe9l\xe9phone"),e.qZA(),e.TgZ(31,"input",53),e.NdJ("keypress",function(i){e.CHM(t);const s=e.oxw();return e.KtG(s.validateInput(i))}),e.qZA(),e.YNc(32,X,2,0,"div",26),e.qZA(),e.TgZ(33,"div",51)(34,"label",54),e._uU(35,"Pays"),e.qZA(),e.TgZ(36,"select",55)(37,"option",56),e._uU(38,"France"),e.qZA()(),e.YNc(39,ee,2,0,"div",26),e.qZA(),e.TgZ(40,"div",51)(41,"label",57),e._uU(42,"Ville"),e.qZA(),e._UZ(43,"input",58),e.YNc(44,te,2,0,"div",26),e.qZA(),e.TgZ(45,"div",51)(46,"label",59),e._uU(47,"Domicile"),e.qZA(),e._UZ(48,"input",60),e.YNc(49,ne,2,0,"div",26),e.qZA(),e.TgZ(50,"div",51)(51,"label",61),e._uU(52,"Code postal"),e.qZA(),e._UZ(53,"input",62),e.YNc(54,oe,2,0,"div",26),e.qZA(),e.TgZ(55,"div",51)(56,"label",63),e._uU(57,"Rue"),e.qZA(),e._UZ(58,"input",64),e.YNc(59,ie,2,0,"div",26),e.qZA(),e.TgZ(60,"div",51)(61,"label",65),e._uU(62,"Ville de r\xe9sidence"),e.qZA(),e.TgZ(63,"select",66)(64,"option",29),e._uU(65,"S\xe9lectionner"),e.qZA(),e.TgZ(66,"option",67),e._uU(67,"Nantes"),e.qZA(),e.TgZ(68,"option",68),e._uU(69,"Rennes"),e.qZA(),e.TgZ(70,"option",69),e._uU(71,"Anger"),e.qZA(),e.TgZ(72,"option",70),e._uU(73,"Le mans"),e.qZA(),e.TgZ(74,"option",71),e._uU(75,"Brest"),e.qZA(),e.TgZ(76,"option",72),e._uU(77,"Caen"),e.qZA(),e.TgZ(78,"option",73),e._uU(79,"Quimper"),e.qZA(),e.TgZ(80,"option",74),e._uU(81,"Saint-nazaire"),e.qZA(),e.TgZ(82,"option",75),e._uU(83,"Autres"),e.qZA()(),e.YNc(84,le,2,0,"div",26),e.qZA(),e.TgZ(85,"div",51)(86,"label",76),e._uU(87,"Num\xe9ro s\xe9curit\xe9 sociale"),e.qZA(),e.TgZ(88,"input",77),e.NdJ("keypress",function(i){e.CHM(t);const s=e.oxw();return e.KtG(s.validateInput(i))}),e.qZA(),e.YNc(89,re,2,0,"div",26),e.qZA(),e.TgZ(90,"div",42)(91,"label",38),e._uU(92,"Cni"),e.qZA(),e.TgZ(93,"input",78),e.NdJ("change",function(i){e.CHM(t);const s=e.oxw();return e.KtG(s.displayFileName(i,2))}),e.qZA()()(),e.BQk()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("formGroup",t.steps[1]),e.xp6(5),e.Q6J("ngIf",(null==t.nom?null:t.nom.invalid)&&((null==t.nom?null:t.nom.dirty)||(null==t.nom?null:t.nom.touched))),e.xp6(5),e.Q6J("ngIf",(null==t.prenom?null:t.prenom.invalid)&&((null==t.prenom?null:t.prenom.dirty)||(null==t.prenom?null:t.prenom.touched))),e.xp6(5),e.Q6J("ngIf",(null==t.dateNaiss?null:t.dateNaiss.invalid)&&((null==t.dateNaiss?null:t.dateNaiss.dirty)||(null==t.dateNaiss?null:t.dateNaiss.touched))),e.xp6(11),e.Q6J("ngIf",(null==t.sexe?null:t.sexe.invalid)&&((null==t.sexe?null:t.sexe.dirty)||(null==t.sexe?null:t.sexe.touched))),e.xp6(5),e.Q6J("ngIf",(null==t.telephone?null:t.telephone.invalid)&&((null==t.telephone?null:t.telephone.dirty)||(null==t.telephone?null:t.telephone.touched))),e.xp6(7),e.Q6J("ngIf",(null==t.pays?null:t.pays.invalid)&&((null==t.pays?null:t.pays.dirty)||(null==t.pays?null:t.pays.touched))),e.xp6(5),e.Q6J("ngIf",(null==t.ville?null:t.ville.invalid)&&((null==t.ville?null:t.ville.dirty)||(null==t.ville?null:t.ville.touched))),e.xp6(5),e.Q6J("ngIf",(null==t.domicile?null:t.domicile.invalid)&&((null==t.domicile?null:t.domicile.dirty)||(null==t.domicile?null:t.domicile.touched))),e.xp6(5),e.Q6J("ngIf",(null==t.code_postal?null:t.code_postal.invalid)&&((null==t.code_postal?null:t.code_postal.dirty)||(null==t.code_postal?null:t.code_postal.touched))),e.xp6(5),e.Q6J("ngIf",(null==t.rue?null:t.rue.invalid)&&((null==t.rue?null:t.rue.dirty)||(null==t.rue?null:t.rue.touched))),e.xp6(25),e.Q6J("ngIf",(null==t.villeResidence?null:t.villeResidence.invalid)&&((null==t.villeResidence?null:t.villeResidence.dirty)||(null==t.villeResidence?null:t.villeResidence.touched))),e.xp6(5),e.Q6J("ngIf",(null==t.numeroSecuriteSocial?null:t.numeroSecuriteSocial.invalid)&&((null==t.numeroSecuriteSocial?null:t.numeroSecuriteSocial.dirty)||(null==t.numeroSecuriteSocial?null:t.numeroSecuriteSocial.touched)))}}function ae(n,r){1&n&&(e.TgZ(0,"div",40),e._uU(1," Renseigner le nom "),e.qZA())}function ue(n,r){1&n&&(e.TgZ(0,"div",40),e._uU(1," Renseigner le pr\xe9nom "),e.qZA())}function ce(n,r){1&n&&(e.TgZ(0,"div",40),e._uU(1," Renseigner le Num\xe9ro de t\xe9l\xe9phone "),e.qZA())}function de(n,r){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"form",22)(2,"div",42)(3,"label",43),e._uU(4,"Nom"),e.qZA(),e._UZ(5,"input",44),e.YNc(6,ae,2,0,"div",26),e.qZA(),e.TgZ(7,"div",42)(8,"label",43),e._uU(9,"Pr\xe9nom"),e.qZA(),e._UZ(10,"input",45),e.YNc(11,ue,2,0,"div",26),e.qZA(),e.TgZ(12,"div",51)(13,"label",79),e._uU(14,"T\xe9l\xe9phone"),e.qZA(),e.TgZ(15,"input",80),e.NdJ("keypress",function(i){e.CHM(t);const s=e.oxw();return e.KtG(s.validateInput(i))}),e.qZA(),e.YNc(16,ce,2,0,"div",26),e.qZA()(),e.BQk()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("formGroup",t.steps[2]),e.xp6(5),e.Q6J("ngIf",(null==t.nom?null:t.nom.invalid)&&((null==t.nom?null:t.nom.dirty)||(null==t.nom?null:t.nom.touched))),e.xp6(5),e.Q6J("ngIf",(null==t.prenom?null:t.prenom.invalid)&&((null==t.prenom?null:t.prenom.dirty)||(null==t.prenom?null:t.prenom.touched))),e.xp6(5),e.Q6J("ngIf",(null==t.phone?null:t.phone.invalid)&&((null==t.phone?null:t.phone.dirty)||(null==t.phone?null:t.phone.touched)))}}function pe(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"button",81),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.next())}),e._uU(1,"Suivant"),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("disabled",!t.isStepValid())}}function me(n,r){1&n&&e._UZ(0,"span",84)}function ge(n,r){1&n&&(e.TgZ(0,"span"),e._uU(1,"Valider"),e.qZA())}function _e(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"button",82),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.onSubmit())}),e.YNc(1,me,1,0,"span",83),e.YNc(2,ge,2,0,"span",14),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("disabled",!t.isStepValid()),e.xp6(1),e.Q6J("ngIf",t.loading),e.xp6(1),e.Q6J("ngIf",!t.loading)}}const fe=[{path:"",component:h,children:[{path:"list",component:E},{path:"details/:id",component:w},{path:"add",component:(()=>{class n{constructor(t,o,i,s,u,p){this.fb=t,this.authService=o,this.fileService=i,this.tAbonnementS=s,this.contactService=u,this.router=p,this.steps=[],this.currentStep=1,this.plansabonnements=[],this.loading=!1,this.selectedImage="",this.selectedImage2="",this.selectedImage3="",this.errorMessage="",this.stepsItems=[],this.showPassword=!1,this.typeAbonnement=()=>this.steps[0].get("typeAbonnement"),this.profile=()=>this.steps[0].get("profile"),this.form=this.fb.group({email:[""],typeAbonnement:[""],password:[""],profile:[""],cni:[""],nom:[""],prenom:[""],telephone:[""],dateNaiss:[""],ville:[""],domicile:[""],numeroSecuriteSocial:[""],villeResidence:[""],pays:[""],rue:[""],numero_rue:[""],code_postal:[""],sexe:[""],contactReferent:[""]}),this.plansabonnements=this.tAbonnementS.plansabonnements,this.stepsItems=[{id:1,name:"Infos compte"},{id:2,name:"Infos utilisateur"},{id:3,name:"Infos contact"}],this.steps.push(this.fb.group({typeAbonnement:["",[l.kI.required]],profile:["",[l.kI.required]],email:["",[l.kI.required,l.kI.email]],password:["",[l.kI.required,l.kI.minLength(6)]],confirmpassword:["",[l.kI.required,l.kI.minLength(6)]]},{validators:this.passwordMatchValidator})),this.steps.push(this.fb.group({nom:["",[l.kI.required]],prenom:["",[l.kI.required,l.kI.minLength(3)]],telephone:["",[l.kI.required,l.kI.pattern("(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))s*[)]?[-s.]?[(]?[0-9]{1,3}[)]?([-s.]?[0-9]{3})([-s.]?[0-9]{3,4})")]],dateNaiss:["",[l.kI.required]],ville:["",[l.kI.required]],domicile:["",[l.kI.required]],numeroSecuriteSocial:["",[l.kI.required,l.kI.pattern(/^\d{13}$/)]],villeResidence:["",[l.kI.required]],pays:["",[l.kI.required]],rue:[""],numero_rue:[""],code_postal:[""],sexe:["",[l.kI.required]]})),this.steps.push(this.fb.group({nom:["",[l.kI.required,l.kI.minLength(3)]],prenom:["",[l.kI.required,l.kI.minLength(3)]],phone:["",[l.kI.required,l.kI.pattern("(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))s*[)]?[-s.]?[(]?[0-9]{1,3}[)]?([-s.]?[0-9]{3})([-s.]?[0-9]{3,4})")]]}))}ngOnInit(){}displayFileName(t,o){console.log("Nom du fichier :",t.target.files[0].name),console.log("Nom du index :",o),1===o?this.selectedImage=URL.createObjectURL(t.target.files[0]):2===o?this.selectedImage2=URL.createObjectURL(t.target.files[0]):3===o&&(this.selectedImage3=URL.createObjectURL(t.target.files[0]));const s=t.target.files[0];if(s){const u=new FileReader;u.onloadend=()=>{this.saveFile(u.result,o)},u.readAsDataURL(s)}}saveFile(t,o){this.fileService.create({image:t}).subscribe(s=>{1===o?this.form.patchValue({profile:s.data.id}):2===o&&this.form.patchValue({cni:s.data.id}),console.log("data ",s.data.id)},s=>{console.error("file upload error:",s)})}togglePasswordVisibility(t){t.preventDefault(),this.showPassword=!this.showPassword}get nom(){return this.steps[1].get("nom")}get email(){return this.steps[0].get("email")}get password(){return this.steps[0].get("password")}get prenom(){return this.steps[1].get("prenom")}get ville(){return this.steps[1].get("ville")}get villeResidence(){return this.steps[1].get("villeResidence")}get telephone(){return this.steps[1].get("telephone")}get rue(){return this.steps[1].get("rue")}get pays(){return this.steps[1].get("pays")}get code_postal(){return this.steps[1].get("code_postal")}get numeroSecuriteSocial(){return this.steps[1].get("numeroSecuriteSocial")}get numero_rue(){return this.steps[1].get("numero_rue")}get dateNaiss(){return this.steps[1].get("dateNaiss")}get domicile(){return this.steps[1].get("domicile")}get sexe(){return this.steps[1].get("sexe")}get cni(){return this.steps[1].get("cni")}get nomref(){return this.steps[2].get("nom")}get prenomref(){return this.steps[2].get("prenom")}get phone(){return this.steps[2].get("phone")}get confirmpassword(){return this.steps[0].get("confirmpassword")}next(){console.log("currentStep : ",this.currentStep),console.log("currentStep : ",this.steps[this.currentStep-1]),this.steps[this.currentStep-1].valid&&this.currentStep++}previous(){this.currentStep--}isStepValid(){return console.log("currentStep : ",this.currentStep),console.log("currentStep : ",this.steps[this.currentStep-1]),this.steps[this.currentStep-1].valid}paathForm(t){console.log(this.form.value),this.form.patchValue({contactReferent:t,typeAbonnement:this.typeAbonnement,email:this.email?.value,nom:this.nom?.value,prenom:this.prenom?.value,password:this.password?.value,telephone:this.telephone?.value,domicile:this.domicile?.value,rue:this.rue?.value,numero_rue:this.numero_rue?.value,code_postal:this.code_postal?.value,sexe:this.sexe?.value,villeResidence:this.villeResidence?.value,numeroSecuriteSocial:this.numeroSecuriteSocial?.value,ville:this.ville?.value,dateNaiss:this.dateNaiss?.value,pays:this.pays?.value})}keyPress(t){let i=String.fromCharCode(t.charCode);/[0-9\+\-\ ]/.test(i)||t.preventDefault()}validateInput(t){/^\d+$/.test(t.key)||t.preventDefault()}onSubmit(){console.log("values form : ",this.steps.values),this.loading=!0,this.contactService.create(this.steps[2].getRawValue()).pipe((0,Q.w)(t=>(this.paathForm(t.data.id),this.authService.register(this.form.getRawValue())))).subscribe({next:t=>(this.loading=!1,this.router.navigateByUrl("/dashboard")),error:t=>{this.loading=!1,console.error("Register error:",t)}})}passwordMatchValidator(t){const o=t.get("password")?.value,i=t.get("confirmpassword")?.value;return o&&i&&o!==i?{passwordMismatch:!0}:null}static#e=this.\u0275fac=function(o){return new(o||n)(e.Y36(l.qu),e.Y36(Y.e),e.Y36(R.I),e.Y36(f.q),e.Y36(L.y),e.Y36(d.F0))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-add"]],decls:26,vars:8,consts:[[1,"container-fluid","mybg-color","pb-2","pt-3","mt-5"],[1,"d-flex","justify-content-start","gap-5","gx-5","align-items-center"],["aria-label","breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item","text-secondary"],["routerLink","/dashboard"],["aria-current","page",1,"breadcrumb-item","active"],[1,"container","pl-2","pr-2","shadow","rounded-3"],[1,"card","border-0"],[1,"card-body"],[1,"card-title","text-center"],[1,"nav","nav-underline","mx-auto","mb-3"],["class","nav-item",4,"ngFor","ngForOf"],["class","alert alert-danger","role","alert",4,"ngIf"],[4,"ngIf"],[1,"d-grid","gap-2","d-md-flex","justify-content-md-end","mt-3"],["type","button",1,"btn","btn-secondary","me-md-2",3,"disabled","click"],["class","btn btn-primary float-end btn-sm","type","button",3,"disabled","click",4,"ngIf"],["type","button","class","btn  mybg-color  btn-sm",3,"disabled","click",4,"ngIf"],[1,"nav-item"],["aria-current","page","href","javascript:void(0)",1,"nav-link",3,"ngClass"],["role","alert",1,"alert","alert-danger"],[1,"row","g-3",3,"formGroup"],[1,"col-md-6"],["for","email",1,"form-label"],["type","text","id","email","formControlName","email","placeholder","prenom",1,"form-control"],["class","text-danger",4,"ngIf"],["for","typeAbonnement",1,"form-label"],["id","typeAbonnement","placeholder","Selectionner","formControlName","typeAbonnement",1,"form-select"],["value","","selected",""],["value","homme",4,"ngFor","ngForOf"],["for","password",1,"form-label"],[1,"input-group"],["id","email","formControlName","password","placeholder","mot de passe",1,"form-control",3,"type"],["type","button",1,"btn","btn-outline-secondary",3,"click"],[1,"fa","fa-eye-slash",3,"ngClass"],["for","confirmpassword",1,"form-label"],["id","email","formControlName","confirmpassword","placeholder","mot de passe",1,"form-control",3,"type"],["for","formFile",1,"form-label"],["type","file","formControlName","profile","accept","image/*,.pdf","id","profil",1,"form-control",3,"change"],[1,"text-danger"],["value","homme"],[1,"col-md-4"],["for","objectEmail",1,"form-label"],["type","text","id","nom","formControlName","nom","placeholder","nom",1,"form-control"],["type","text","id","prneom","formControlName","prenom","placeholder","prenom",1,"form-control"],["for","dateNaiss",1,"form-label"],["type","date","id","dateNaiss","formControlName","dateNaiss","placeholder","date Naiss",1,"form-control"],["for","sexe",1,"form-label"],["id","sexe","placeholder","Selectionner","formControlName","sexe",1,"form-select"],["value","femme"],[1,"col-sm-4"],["for","telephone",1,"form-label"],["type","text","id","telephone","formControlName","telephone","placeholder","t\xe9l\xe9phone",1,"form-control",3,"keypress"],["for","pays",1,"form-label"],["id","sexe","placeholder","Selectionner","formControlName","pays",1,"form-select"],["selected","","value","france"],["for","ville",1,"form-label"],["type","text","id","ville","formControlName","ville","placeholder","ville",1,"form-control"],["for","domicile",1,"form-label"],["type","text","id","domicile","formControlName","domicile","placeholder","domicile",1,"form-control"],["for","code_postal",1,"form-label"],["type","text","id","code_postal","formControlName","code_postal","placeholder","code postal",1,"form-control"],["for","rue",1,"form-label"],["type","text","id","rue","formControlName","rue","placeholder","rue",1,"form-control"],["for","villeResidence",1,"form-label"],["id","villeResidence","placeholder","Selectionner","formControlName","villeResidence",1,"form-select"],["value","nantes"],["value","rennes"],["value","anger"],["value","le mans"],["value","brest"],["value","Caen"],["value","quimper"],["value","saint-nazaire"],["value","autres"],["for","numeroSecuriteSocial",1,"form-label"],["type","text","id","numeroSecuriteSocial","formControlName","numeroSecuriteSocial","maxlength","13","placeholder","numeroSecuriteSocial",1,"form-control",3,"keypress"],["type","file","id","cni","accept","image/*,.pdf","formControlName","cni",1,"form-control",3,"change"],["for","phone",1,"form-label"],["type","text","id","phone","formControlName","phone","placeholder","t\xe9l\xe9phone",1,"form-control",3,"keypress"],["type","button",1,"btn","btn-primary","float-end","btn-sm",3,"disabled","click"],["type","button",1,"btn","mybg-color","btn-sm",3,"disabled","click"],["class","spinner-border spinner-border-sm","role","status","aria-hidden","true",4,"ngIf"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(o,i){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div")(3,"nav",2)(4,"ol",3)(5,"li",4)(6,"a",5),e._uU(7,"Utilisateurs"),e.qZA()(),e.TgZ(8,"li",6),e._uU(9,"Ajout"),e.qZA()()()()()(),e.TgZ(10,"div",7)(11,"div",8)(12,"div",9)(13,"h5",10),e._uU(14,"Ajout utilisateur "),e.qZA(),e.TgZ(15,"ul",11),e.YNc(16,M,3,4,"li",12),e.qZA(),e.YNc(17,F,2,1,"div",13),e.YNc(18,B,32,12,"ng-container",14),e.YNc(19,se,94,13,"ng-container",14),e.YNc(20,de,17,4,"ng-container",14),e.TgZ(21,"div",15)(22,"button",16),e.NdJ("click",function(){return i.previous()}),e._uU(23,"Pr\xe9cdent"),e.qZA(),e.YNc(24,pe,2,1,"button",17),e.YNc(25,_e,3,3,"button",18),e.qZA()()()()),2&o&&(e.xp6(16),e.Q6J("ngForOf",i.stepsItems),e.xp6(1),e.Q6J("ngIf",i.errorMessage),e.xp6(1),e.Q6J("ngIf",1===i.currentStep),e.xp6(1),e.Q6J("ngIf",2===i.currentStep),e.xp6(1),e.Q6J("ngIf",3===i.currentStep),e.xp6(2),e.Q6J("disabled",1===i.currentStep),e.xp6(2),e.Q6J("ngIf",i.currentStep<3),e.xp6(1),e.Q6J("ngIf",3===i.currentStep))},dependencies:[c.mk,c.sg,c.O5,d.rH,l._Y,l.YN,l.Kr,l.Fj,l.EJ,l.JJ,l.JL,l.nD,l.sg,l.u],styles:[".mybg-color[_ngcontent-%COMP%]{background-color:#0f7231;color:#fff}.w-col[_ngcontent-%COMP%]{color:#fff}.green-color[_ngcontent-%COMP%]{color:#394f47}"]})}return n})()}]}];let he=(()=>{class n{static#e=this.\u0275fac=function(o){return new(o||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[d.Bz.forChild(fe),d.Bz]})}return n})(),ve=(()=>{class n{static#e=this.\u0275fac=function(o){return new(o||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[c.ez,he,l.UX,l.u5]})}return n})()}}]);