(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{TTih:function(t,n,l){"use strict";l.r(n);var a=l("8Y7J");class s{}var e=l("pMnS"),c=l("iInd");class r{constructor(){}ngOnInit(){}}var u=a.qb({encapsulation:0,styles:[[""]],data:{}});function o(t){return a.Ob(0,[(t()(),a.sb(0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),a.rb(1,212992,null,0,c.p,[c.b,a.O,a.j,[8,null],a.h],null,null)],(function(t,n){t(n,1,0)}),null)}function i(t){return a.Ob(0,[(t()(),a.sb(0,0,null,null,1,"toco-help",[],null,null,null,o,u)),a.rb(1,114688,null,0,r,[],null,null)],(function(t,n){t(n,1,0)}),null)}var b=a.ob("toco-help",r,i,{},{},[]),d=l("ZcxY"),p=a.qb({encapsulation:2,styles:[],data:{}});function h(t){return a.Ob(0,[a.Db(null,0)],null,null)}class m{constructor(t,n,l){this.metadata=t,this.activatedRoute=n,this.transServ=l}ngOnInit(){null==this.src&&(this.src=""),null==this.title&&(this.title=""),this.activatedRoute.data.subscribe({next:t=>{t&&(this.src=t.src+"."+this.transServ.currentLang+".md",this.title=t.title,this.metadata.meta.updateTag({name:"DC.title",content:t.title}),this.metadata.meta.updateTag({name:"DC.description",content:t.src.substring(0,160)}),this.transServ.onLangChange.subscribe(n=>{this.src=t.src+"."+this.transServ.currentLang+".md"}))},error:t=>{console.log(t)},complete:()=>{}})}}var f=l("BmYd"),g=l("TSSN"),v=a.qb({encapsulation:0,styles:[[""]],data:{}});function C(t){return a.Ob(0,[(t()(),a.sb(0,0,null,null,1,"div",[["class","mat-h4"],["markdown",""],["style","margin: 2em;"]],null,null,null,h,p)),a.rb(1,4767744,null,0,d.a,[a.k,d.c],{src:[0,"src"]},null)],(function(t,n){t(n,1,0,n.component.src)}),null)}function w(t){return a.Ob(0,[(t()(),a.sb(0,0,null,null,1,"toco-static-pages",[],null,null,null,C,v)),a.rb(1,114688,null,0,m,[f.fb,c.a,g.j],null,null)],(function(t,n){t(n,1,0)}),null)}var k=a.ob("toco-static-pages",m,w,{src:"src",title:"title"},{},[]),y=l("SVse"),S=l("IheW"),O=l("cUpR");const q={src:"assets/markdown/faq",title:"FAQ"},T={src:"assets/markdown/about",title:"Sobre Nosotros"},j={src:"assets/markdown/help",title:"Ayuda"},I={src:"assets/markdown/contact",title:"Contacto"},L={src:"assets/markdown/policy",title:"Pol\xedtica de Privacidad"};class A{}l.d(n,"HelpModuleNgFactory",(function(){return D}));var D=a.pb(s,[],(function(t){return a.Bb([a.Cb(512,a.j,a.ab,[[8,[e.a,b,k]],[3,a.j],a.w]),a.Cb(4608,y.n,y.m,[a.t,[2,y.E]]),a.Cb(4608,S.c,S.c,[S.g]),a.Cb(4608,d.c,d.c,[a.A,[2,S.c],O.b,d.d]),a.Cb(1073742336,y.c,y.c,[]),a.Cb(1073742336,c.o,c.o,[[2,c.t],[2,c.k]]),a.Cb(1073742336,d.b,d.b,[]),a.Cb(1073742336,A,A,[]),a.Cb(1073742336,s,s,[]),a.Cb(1024,c.i,(function(){return[[{path:"",component:r,children:[{path:"faq",component:m,data:q},{path:"about",component:m,data:T},{path:"help",component:m,data:j},{path:"contact",component:m,data:I},{path:"policy",component:m,data:L}]}]]}),[]),a.Cb(256,d.d,{gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1},[])])}))}}]);