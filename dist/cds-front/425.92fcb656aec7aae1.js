"use strict";(self.webpackChunkcds_front=self.webpackChunkcds_front||[]).push([[425],{5425:(ie,_,l)=>{l.r(_),l.d(_,{MessageModule:()=>se});var c=l(6895),u=l(646),e=l(1571);let v=(()=>{class n{static#e=this.\u0275fac=function(o){return new(o||n)};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-message"]],decls:1,vars:0,template:function(o,s){1&o&&e._UZ(0,"router-outlet")},dependencies:[u.lC]})}return n})();var h=l(4332),f=l.n(h),m=l(6199),a=l(433),b=l(9837);const Z=["myModal"];function x(n,i){1&n&&(e.TgZ(0,"div",9)(1,"div",10)(2,"span",11),e._uU(3,"Loading..."),e.qZA()()())}function T(n,i){1&n&&(e.TgZ(0,"span",28),e._uU(1,"envoy\xe9"),e.qZA())}function A(n,i){1&n&&(e.TgZ(0,"span",28),e._uU(1,"envoy\xe9"),e.qZA())}function y(n,i){1&n&&(e.TgZ(0,"span",29),e._uU(1,"re\xe7u"),e.qZA())}function C(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"tr",17)(1,"td",18),e._uU(2),e.qZA(),e.TgZ(3,"td",19),e._uU(4),e.qZA(),e.TgZ(5,"td",20),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e.YNc(10,T,2,0,"span",21),e.YNc(11,A,2,0,"span",21),e.YNc(12,y,2,0,"span",22),e.qZA(),e.TgZ(13,"td",23)(14,"button",24),e.NdJ("click",function(){const r=e.CHM(t).$implicit,d=e.oxw(3);return e.KtG(d.showValidation(r.id))}),e._UZ(15,"i",25),e.qZA(),e.TgZ(16,"a",26),e.NdJ("click",function(){const r=e.CHM(t).$implicit,d=e.oxw(3),p=e.MAs(14);return e.KtG(d.open(p,r.id,r.status))}),e._UZ(17,"i",27),e.qZA()()()}if(2&n){const t=i.$implicit,o=i.index;e.xp6(2),e.hij("",o+1," "),e.xp6(2),e.Oqu(t.objectEmail),e.xp6(2),e.Oqu(t.message),e.xp6(2),e.AsE("",t.send.prenom," ",t.send.nom,""),e.xp6(2),e.Q6J("ngIf","no-read"==t.status),e.xp6(1),e.Q6J("ngIf","read"==t.status),e.xp6(1),e.Q6J("ngIf","replay"==t.status)}}function U(n,i){if(1&n&&(e.TgZ(0,"div",13)(1,"table",14)(2,"thead")(3,"tr")(4,"th",15),e._uU(5,"#"),e.qZA(),e.TgZ(6,"th",15),e._uU(7,"Objet"),e.qZA(),e.TgZ(8,"th",15),e._uU(9,"Message"),e.qZA(),e.TgZ(10,"th",15),e._uU(11,"Utilisateur"),e.qZA(),e.TgZ(12,"th",15),e._uU(13,"Status"),e.qZA(),e.TgZ(14,"th",15),e._uU(15,"Actions"),e.qZA()()(),e.TgZ(16,"tbody"),e.YNc(17,C,18,8,"tr",16),e.qZA()()()),2&n){const t=e.oxw(2);e.xp6(17),e.Q6J("ngForOf",t.data)}}function q(n,i){if(1&n&&e.YNc(0,U,18,1,"div",12),2&n){const t=e.oxw(),o=e.MAs(12);e.Q6J("ngIf",t.data&&t.data.length>0)("ngIfElse",o)}}function M(n,i){1&n&&(e.TgZ(0,"div",9)(1,"p"),e._uU(2,"Aucune donn\xe9e disponible."),e.qZA()())}function I(n,i){1&n&&(e.TgZ(0,"div",9)(1,"div",10)(2,"span",11),e._uU(3,"Loading..."),e.qZA()()())}function F(n,i){}function j(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"form",34)(1,"div",35)(2,"div",36)(3,"div",37)(4,"label",38),e._uU(5,"Objet"),e.qZA(),e._UZ(6,"input",39),e.qZA(),e.TgZ(7,"div",37)(8,"label",40),e._uU(9,"Contenu"),e.qZA(),e._UZ(10,"textarea",41),e.qZA(),e.TgZ(11,"div",37)(12,"label",38),e._uU(13,"Utilisateur"),e.qZA(),e._UZ(14,"input",42),e.qZA()()(),e.TgZ(15,"div",43)(16,"button",44),e.NdJ("click",function(){e.CHM(t);const s=e.oxw(2);return e.KtG(s.closeModal())}),e._uU(17,"Fermer"),e.qZA()()(),e.YNc(18,F,0,0,"ng-template")}if(2&n){const t=e.oxw(2);e.Q6J("formGroup",t.replay)}}function N(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",30)(1,"h5",31),e._uU(2,"Message"),e.qZA(),e.TgZ(3,"button",32),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.closeModal())}),e.qZA()(),e.YNc(4,I,4,0,"div",5),e.YNc(5,j,19,1,"ng-template",null,33,e.W1O)}if(2&n){const t=e.MAs(6),o=e.oxw();e.xp6(4),e.Q6J("ngIf",o.modalLoad)("ngIfElse",t)}}let J=(()=>{class n{constructor(t,o,s){this.messageService=t,this.fb=o,this.modalService=s,this.data=[],this.loading=!1,this.modalLoad=!1,this.replay=this.fb.group({messageF:[""],objectEmail:[""],user:[""]})}ngOnInit(){this.getMessages()}getMessages(){this.loading=!0,this.messageService.all().subscribe({next:t=>{this.loading=!1,console.log("data message ",t),t.data&&Array.isArray(t.data)&&(this.data=t.data.slice().reverse())},error:t=>{this.loading=!1,console.log("error ",t)}})}onDelete(t){this.messageService.delete(t).subscribe({next:o=>{this.getMessages(),console.log("data ",o.data)},error:o=>{console.log("erreur ",o)}})}showToast(t){f().success({title:"Succ\xe9s",message:t,position:"topRight"})}showValidation(t){f().question({timeout:0,close:!1,overlay:!0,displayMode:0,id:"question",zindex:999,title:"Suppression",message:"Voulez-vous supprimer ce partenaire ?",position:"center",buttons:[['<button class="font-bold btn btn-success" style="color: green!important">Confirmer</button>',(o,s)=>{this.onDelete(t),o.hide({transitionOut:"fadeOut"},s,"button"),this.showToast("Message supprim\xe9 avec succ\xe9s.")},!0],['<button class="btn btn-danger" style="color: red!important">Annuler</button>',(o,s)=>{o.hide({transitionOut:"fadeOut"},s,"button")},!1]]})}open(t,o,s){this.replay.reset(),this.getOneMessage(o),this.modalService.open(t)}closeModal(){this.replay.reset(),this.modalService.dismissAll()}getOneMessage(t){this.modalLoad=!0,this.messageService.byId(t).subscribe({next:o=>{console.log("data ",o.data),this.replay.patchValue({messageF:o.data.message,objectEmail:o.data.objectEmail,user:o.data.send.prenom+" "+o.data.send.nom}),this.modalLoad=!1},error:o=>{console.log("error ",o),this.modalLoad=!1}})}static#e=this.\u0275fac=function(o){return new(o||n)(e.Y36(m.e),e.Y36(a.qu),e.Y36(b.FF))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-list"]],viewQuery:function(o,s){if(1&o&&e.Gf(Z,5),2&o){let r;e.iGM(r=e.CRH())&&(s.myModal=r.first)}},decls:15,vars:2,consts:[[1,"container-fluid","mybg-color","pb-5","mt-5","pt-5"],[1,"d-flex","justify-content-between","align-items-center"],["type","button","routerLink","/message/add",1,"btn","btn-warning","rounded-pill"],["aria-hidden","true",1,"fa","fa-add"],[1,"container","pl-2","pr-2","pb-2","shadow","rounded-5",2,"max-height","500px","overflow-y","auto"],["class","text-center mx-auto mt-5",4,"ngIf","ngIfElse"],["content",""],["noData",""],["myModal",""],[1,"text-center","mx-auto","mt-5"],["role","status",1,"spinner-border","text-secondary"],[1,"visually-hidden"],["class","table-responsive",4,"ngIf","ngIfElse"],[1,"table-responsive"],[1,"table","table-white","table-border-0","no-border"],["scope","col"],["class","",4,"ngFor","ngForOf"],[1,""],["scope","row"],[1,"text-truncate",2,"max-width","10px"],[1,"text-truncate",2,"max-width","20px"],["class","badge bg-success",4,"ngIf"],["class","badge bg-primary",4,"ngIf"],[1,"gap-1","d-flex"],["type","button",1,"btn","btn-danger","btn-sm",3,"click"],["aria-hidden","true",1,"fa","fa-trash"],["type","button",1,"btn","btn-success","btn-sm",3,"click"],["aria-hidden","true",1,"fa","fa-eye"],[1,"badge","bg-success"],[1,"badge","bg-primary"],[1,"modal-header"],["id","modalTitleId",1,"modal-title"],["type","button",1,"btn-close",3,"click"],["contentModal",""],[3,"formGroup"],[1,"modal-body"],[1,"row","g-3"],[1,"col-md-12"],["for","validationCustom01",1,"form-label"],["type","text","id","objet","formControlName","objectEmail","value","Mark",1,"form-control"],["for","messageF",1,"form-label"],["id","messageF","formControlName","messageF","rows","3",1,"form-control"],["type","text","id","user","formControlName","user","value","user",1,"form-control"],[1,"modal-footer"],["type","button",1,"btn","btn-secondary",3,"click"]],template:function(o,s){if(1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h5"),e._uU(3,"Messagerie"),e.qZA(),e.TgZ(4,"button",2),e._UZ(5,"i",3),e._uU(6," Envoie Message "),e.qZA()()(),e.TgZ(7,"div",4),e.YNc(8,x,4,0,"div",5),e.YNc(9,q,1,2,"ng-template",null,6,e.W1O),e.YNc(11,M,3,0,"ng-template",null,7,e.W1O),e.qZA(),e.YNc(13,N,7,2,"ng-template",null,8,e.W1O)),2&o){const r=e.MAs(10);e.xp6(8),e.Q6J("ngIf",s.loading)("ngIfElse",r)}},dependencies:[c.sg,c.O5,u.rH,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u]})}return n})();var g=l(2340),Y=l(8613);function w(n,i){1&n&&(e.TgZ(0,"div",31),e._uU(1," Veuillez renseigner l'objet "),e.qZA())}function E(n,i){if(1&n&&(e.TgZ(0,"option",32),e._uU(1),e.qZA()),2&n){const t=i.$implicit;e.s9C("value",t.id),e.xp6(1),e.AsE("",t.prenom," ",t.nom,"")}}function O(n,i){1&n&&(e.TgZ(0,"div",31),e._uU(1," Veuillez selectionner un utilisateur "),e.qZA())}function k(n,i){1&n&&(e.TgZ(0,"div",31),e._uU(1," Veuillez renseigner le contenu du message "),e.qZA())}function L(n,i){1&n&&e._UZ(0,"span",33)}function S(n,i){1&n&&(e.TgZ(0,"span"),e._uU(1,"Valider "),e.qZA())}let Q=(()=>{class n{constructor(t,o,s,r){this.messageService=t,this.userService=o,this.fb=s,this.router=r,this.users=[],this.loading=!1,this.form=this.fb.group({messageF:["",a.kI.required,a.kI.minLength(3)],objectEmail:["",a.kI.required,a.kI.minLength(3)],recive:["",a.kI.required]})}ngOnInit(){this.getAllUsers()}get message(){return this.form.get("messageF")}get objet(){return this.form.get("objectEmail")}get recive(){return this.form.get("recive")}onSubmit(){let t=this.form.getRawValue();this.loading=!0,this.messageService.create(t).subscribe(o=>{console.log("data ",o.data),this.loading=!1,this.router.navigateByUrl("/message/list")},o=>{this.loading=!1,console.log("erreur ",o)})}getAllUsers(){this.userService.all(`${g.N.api}/${this.userService.uri()}/all?perPage=3000`).subscribe(t=>{this.users=t.data.users,console.log("User Details:",t)},t=>{console.log("erreur ",t)})}static#e=this.\u0275fac=function(o){return new(o||n)(e.Y36(m.e),e.Y36(Y.K),e.Y36(a.qu),e.Y36(u.F0))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-add"]],decls:41,vars:8,consts:[[1,"container-fluid","mybg-color","pb-5","mt-5","pt-5"],["role","alert","aria-live","assertive","aria-atomic","true",1,"toast","align-items-center","text-bg-primary","border-0"],[1,"d-flex"],[1,"toast-body"],["type","button","data-bs-dismiss","toast","aria-label","Close",1,"btn-close","btn-close-white","me-2","m-auto"],[1,"d-flex","justify-content-start","gap-5","gx-5","align-items-center"],["aria-label","breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item","text-secondary"],["routerLink","/message/list"],["aria-current","page",1,"breadcrumb-item","active"],[1,"container","pl-2","pr-2","shadow","rounded-5",2,"max-height","500px","overflow-y","auto"],[1,"card","border-0"],[1,"card-body"],[1,"card-title","text-center"],[1,"row","g-3",3,"formGroup","submit"],[1,"col-6"],["for","objectEmail",1,"form-label"],["type","text","id","objectEmail","formControlName","objectEmail","placeholder","Objet email",1,"form-control"],["class","text-danger",4,"ngIf"],[1,"col-md-6"],["for","recive",1,"form-label"],["id","recive","placeholder","Selectionner","formControlName","recive",1,"form-select"],[3,"value",4,"ngFor","ngForOf"],[1,"col-12"],["for","messageF",1,"form-label"],["id","messageF","formControlName","messageF","rows","3",1,"form-control"],[1,"col-12","justify-content-end","mt-3"],["type","submit",1,"btn","mybg-color",3,"disabled"],["class","spinner-border spinner-border-sm","role","status","aria-hidden","true",4,"ngIf"],[4,"ngIf"],[1,"text-danger"],[3,"value"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(o,s){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._uU(4," Hello, world! This is a toast message. "),e.qZA(),e._UZ(5,"button",4),e.qZA()(),e.TgZ(6,"div",5)(7,"div")(8,"nav",6)(9,"ol",7)(10,"li",8)(11,"a",9),e._uU(12,"Message"),e.qZA()(),e.TgZ(13,"li",10),e._uU(14,"Envoie"),e.qZA()()()()()(),e.TgZ(15,"div",11)(16,"div",12)(17,"div",13)(18,"h5",14),e._uU(19,"Envoie message "),e.qZA(),e.TgZ(20,"form",15),e.NdJ("submit",function(){return s.onSubmit()}),e.TgZ(21,"div",16)(22,"label",17),e._uU(23,"Objet du message"),e.qZA(),e._UZ(24,"input",18),e.YNc(25,w,2,0,"div",19),e.qZA(),e.TgZ(26,"div",20)(27,"label",21),e._uU(28,"Utilisateur"),e.qZA(),e.TgZ(29,"select",22),e.YNc(30,E,2,3,"option",23),e.qZA(),e.YNc(31,O,2,0,"div",19),e.qZA(),e.TgZ(32,"div",24)(33,"label",25),e._uU(34,"Contenu"),e.qZA(),e._UZ(35,"textarea",26),e.YNc(36,k,2,0,"div",19),e.qZA(),e.TgZ(37,"div",27)(38,"button",28),e.YNc(39,L,1,0,"span",29),e.YNc(40,S,2,0,"span",30),e.qZA()()()()()()),2&o&&(e.xp6(20),e.Q6J("formGroup",s.form),e.xp6(5),e.Q6J("ngIf",(null==s.objet?null:s.objet.invalid)&&((null==s.objet?null:s.objet.dirty)||(null==s.objet?null:s.objet.touched))),e.xp6(5),e.Q6J("ngForOf",s.users),e.xp6(1),e.Q6J("ngIf",(null==s.recive?null:s.recive.invalid)&&((null==s.recive?null:s.recive.dirty)||(null==s.recive?null:s.recive.touched))),e.xp6(5),e.Q6J("ngIf",(null==s.message?null:s.message.invalid)&&((null==s.message?null:s.message.dirty)||(null==s.message?null:s.message.touched))),e.xp6(2),e.Q6J("disabled",s.loading||s.form.invalid),e.xp6(1),e.Q6J("ngIf",s.loading),e.xp6(1),e.Q6J("ngIf",!s.loading))},dependencies:[c.sg,c.O5,u.rH,a._Y,a.YN,a.Kr,a.Fj,a.EJ,a.JJ,a.JL,a.sg,a.u],styles:[".mybg-color[_ngcontent-%COMP%]{background-color:#0f7231;color:#fff}"]})}return n})();var R=l(629);const G=["myModal"];function H(n,i){1&n&&(e.TgZ(0,"div",11)(1,"div",12)(2,"span",13),e._uU(3,"Loading..."),e.qZA()()())}const V=function(n,i){return{"text-bg-success":n,"text-bg-danger":i}};function z(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"tr",20)(1,"td",21),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td")(8,"span",22),e._uU(9),e.qZA()(),e.TgZ(10,"td",23)(11,"button",24),e.NdJ("click",function(){const r=e.CHM(t).$implicit,d=e.oxw(3),p=e.MAs(15);return e.KtG(d.open(p,r.id,r.status))}),e._UZ(12,"i",25),e.qZA()()()}if(2&n){const t=i.$implicit,o=i.index,s=e.oxw(3);e.xp6(2),e.Oqu(o+1),e.xp6(2),e.Oqu(t.objectEmail),e.xp6(2),e.Oqu(t.message),e.xp6(2),e.Q6J("ngClass",e.WLB(5,V,s.status(t.status),!s.status(t.status))),e.xp6(1),e.hij(" ",s.statusText(t.status)," ")}}function K(n,i){if(1&n&&(e.TgZ(0,"div",16)(1,"table",17)(2,"thead")(3,"tr")(4,"th",18),e._uU(5,"#"),e.qZA(),e.TgZ(6,"th",18),e._uU(7,"Objet"),e.qZA(),e.TgZ(8,"th",18),e._uU(9,"Message"),e.qZA(),e.TgZ(10,"th",18),e._uU(11,"Status"),e.qZA(),e.TgZ(12,"th",18),e._uU(13,"Actions"),e.qZA()()(),e.TgZ(14,"tbody"),e.YNc(15,z,13,8,"tr",19),e.qZA()()()),2&n){const t=e.oxw(2);e.xp6(15),e.Q6J("ngForOf",t.data)}}function $(n,i){1&n&&(e.TgZ(0,"div",11)(1,"p"),e._uU(2,"Aucune donn\xe9e disponible."),e.qZA()())}function B(n,i){if(1&n&&(e.YNc(0,K,16,1,"div",14),e.YNc(1,$,3,0,"ng-template",null,15,e.W1O)),2&n){const t=e.MAs(2),o=e.oxw();e.Q6J("ngIf",o.data&&o.data.length>0)("ngIfElse",t)}}function W(n,i){if(1&n&&(e.TgZ(0,"div",44),e._uU(1),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.hij(" ",t.errorMessage," ")}}function D(n,i){1&n&&(e.TgZ(0,"div",45),e._uU(1," Objet obligatoire! "),e.qZA())}function X(n,i){1&n&&(e.TgZ(0,"div",45),e._uU(1," Contenu obligatoire! "),e.qZA())}function P(n,i){1&n&&e._UZ(0,"span",46)}function ee(n,i){1&n&&(e.TgZ(0,"span"),e._uU(1,"Valider "),e.qZA())}function te(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",26)(1,"h5",27),e._uU(2,"Message"),e.qZA(),e.TgZ(3,"button",28),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.closeModal())}),e.qZA()(),e.TgZ(4,"form",29),e.NdJ("submit",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.onSubmit())}),e.TgZ(5,"div",30)(6,"div",31),e.YNc(7,W,2,1,"div",32),e.TgZ(8,"div",33)(9,"label",34),e._uU(10,"Objet"),e.qZA(),e._UZ(11,"input",35),e.YNc(12,D,2,0,"div",36),e.qZA(),e.TgZ(13,"div",33)(14,"label",37),e._uU(15,"Contenu"),e.qZA(),e._UZ(16,"textarea",38),e.YNc(17,X,2,0,"div",36),e.qZA()()(),e.TgZ(18,"div",39)(19,"button",40),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.closeModal())}),e._uU(20,"Fermer"),e.qZA(),e.TgZ(21,"button",41),e.YNc(22,P,1,0,"span",42),e.YNc(23,ee,2,0,"span",43),e.qZA()()()}if(2&n){const t=e.oxw();e.xp6(4),e.Q6J("formGroup",t.replay),e.xp6(3),e.Q6J("ngIf",t.errorMessage),e.xp6(5),e.Q6J("ngIf",(null==t.objet?null:t.objet.invalid)&&((null==t.objet?null:t.objet.dirty)||(null==t.objet?null:t.objet.touched))),e.xp6(5),e.Q6J("ngIf",(null==t.message?null:t.message.invalid)&&((null==t.message?null:t.message.dirty)||(null==t.message?null:t.message.touched))),e.xp6(4),e.Q6J("disabled",t.loadingForm),e.xp6(1),e.Q6J("ngIf",t.loadingForm),e.xp6(1),e.Q6J("ngIf",!t.loadingForm)}}const ne=[{path:"",component:v,children:[{path:"list",component:J},{path:"add",component:Q},{path:"recive",component:(()=>{class n{constructor(t,o,s,r,d){this.messageService=t,this.fb=o,this.modalService=s,this.authService=r,this.location=d,this.data=[],this.loading=!1,this.loadingForm=!1,this.errorMessage="",this.url=`${g.N.api}/messages/allUser`,this.replay=this.fb.group({messageF:["",a.kI.required,a.kI.minLength(3)],objectEmail:["",a.kI.required,a.kI.minLength(3)]})}get message(){return this.replay.get("messageF")}get objet(){return this.replay.get("objectEmail")}ngOnInit(){this.url=`${g.N.api}/messages/allUser`,this.getUserConnected(),this.getMessages()}goBack(){this.location.back()}getMessages(){this.loading=!0,this.messageService.all(this.url).subscribe({next:t=>{this.loading=!1,console.log("data message ",t),t.data&&Array.isArray(t.data)&&(this.data=t.data.slice().reverse())},error:t=>{this.loading=!1,console.log("error ",t)}})}onUpdate(t,o){"no-read"===o&&this.messageService.update(t,{id:t,status:"read"}).subscribe({next:r=>{console.log("data ",r.data),this.getMessages()},error:r=>{console.log("error ",r),this.errorMessage="Erreur survenu"}})}onSubmit(){let t=this.replay.getRawValue();this.loadingForm=!0,this.messageService.replay(t).subscribe({next:o=>{console.log("data ",o.data),this.loadingForm=!1,this.closeModal(),this.getMessages()},error:o=>{console.log("error ",o),this.loadingForm=!1,this.errorMessage="Erreur survenu"}})}getOneMessage(t){this.messageService.byId(t).subscribe({next:o=>{console.log("data ",o.data),this.replay.patchValue({messageF:o.data.message,objectEmail:o.data.objectEmail})},error:o=>{console.log("error ",o)}})}getUserConnected(){this.authService.currentUser().subscribe({next:t=>{this.userconnected=t.data.user,console.log("error log ",t.data.user)},error:t=>{console.log("error log ",t)}})}openModal(t,o){this.onUpdate(t,o),this.replay.reset(),this.modalService.open(this.myModal,{backdrop:"static",keyboard:!1})}status(t){return"read"===t}statusText(t){return"read"===t?"lue":"non lue"}open(t,o,s){this.onUpdate(o,s),this.replay.reset(),this.modalService.open(t)}closeModal(){this.replay.reset(),this.modalService.dismissAll()}static#e=this.\u0275fac=function(o){return new(o||n)(e.Y36(m.e),e.Y36(a.qu),e.Y36(b.FF),e.Y36(R.e),e.Y36(c.Ye))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-recive"]],viewQuery:function(o,s){if(1&o&&e.Gf(G,5),2&o){let r;e.iGM(r=e.CRH())&&(s.myModal=r.first)}},decls:16,vars:2,consts:[[1,"container-fluid","mybg-color","pb-5","mt-5","pt-5"],[1,"d-flex","justify-content-start","gap-5","gx-5","align-items-center"],["aria-label","breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item","text-primary"],[2,"cursor","pointer",3,"click"],["aria-current","page",1,"breadcrumb-item","active","text-white"],[1,"container","pl-2","pr-2","pb-2","shadow","rounded-5",2,"max-height","500px","overflow-y","auto"],["class","text-center mx-auto mt-5",4,"ngIf","ngIfElse"],["content",""],["myModal",""],[1,"text-center","mx-auto","mt-5"],["role","status",1,"spinner-border","text-secondary"],[1,"visually-hidden"],["class","table-responsive",4,"ngIf","ngIfElse"],["noData",""],[1,"table-responsive"],[1,"table","table-white","table-border-0","no-border"],["scope","col"],["class","",4,"ngFor","ngForOf"],[1,""],["scope","row"],[1,"badge",3,"ngClass"],[1,"gap-1","d-flex"],["title","Replay",1,"btn","btn-success","btn-sm",3,"click"],[1,"fa-solid","fa-reply"],[1,"modal-header"],["id","modalTitleId",1,"modal-title"],["type","button",1,"btn-close",3,"click"],[3,"formGroup","submit"],[1,"modal-body"],[1,"row","g-3"],["class","alert alert-danger","role","alert",4,"ngIf"],[1,"col-md-12"],["for","validationCustom01",1,"form-label"],["type","text","id","objet","formControlName","objectEmail","value","Mark",1,"form-control"],["class","text-danger",4,"ngIf"],["for","messageF",1,"form-label"],["id","messageF","formControlName","messageF","rows","3",1,"form-control"],[1,"modal-footer"],["type","button",1,"btn","btn-secondary",3,"click"],["type","submit",1,"btn","mybg-color",3,"disabled"],["class","spinner-border spinner-border-sm","role","status","aria-hidden","true",4,"ngIf"],[4,"ngIf"],["role","alert",1,"alert","alert-danger"],[1,"text-danger"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(o,s){if(1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div")(3,"nav",2)(4,"ol",3)(5,"li",4)(6,"a",5),e.NdJ("click",function(){return s.goBack()}),e._uU(7,"retour"),e.qZA()(),e.TgZ(8,"li",6),e._uU(9,"Messages"),e.qZA()()()()()(),e.TgZ(10,"div",7),e.YNc(11,H,4,0,"div",8),e.YNc(12,B,3,2,"ng-template",null,9,e.W1O),e.qZA(),e.YNc(14,te,24,7,"ng-template",null,10,e.W1O)),2&o){const r=e.MAs(13);e.xp6(11),e.Q6J("ngIf",s.loading)("ngIfElse",r)}},dependencies:[c.mk,c.sg,c.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u],styles:[".mybg-color[_ngcontent-%COMP%]{background-color:#0f7231;color:#fff}"]})}return n})()}]}];let oe=(()=>{class n{static#e=this.\u0275fac=function(o){return new(o||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[u.Bz.forChild(ne),u.Bz]})}return n})(),se=(()=>{class n{static#e=this.\u0275fac=function(o){return new(o||n)};static#t=this.\u0275mod=e.oAB({type:n});static#n=this.\u0275inj=e.cJS({imports:[c.ez,oe,a.UX]})}return n})()}}]);