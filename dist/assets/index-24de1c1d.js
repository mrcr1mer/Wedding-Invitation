import{_ as u,u as q,o as n,c as o,r as I,n as T,a as p,b as B,d as t,t as v,F as h,e as k,f as i,w as $,p as b,g as x,h as D,i as N,j as W,k as y,l as F,m as C,q as P}from"./index-fc3ef85a.js";const A="/Wedding-Invitation/assets/date-aa38b305.svg",S="/Wedding-Invitation/assets/newlyweds-18c48f7d.jpg";const L={__name:"index",props:{mark:{type:Boolean,default:!1},borderRadius:{type:String,default:"50px"}},setup(e){return q(s=>({"55b93d5e":e.borderRadius})),(s,a)=>(n(),o("div",{class:T(["card",{mark:e.mark}])},[I(s.$slots,"default",{},void 0,!0)],2))}},j=u(L,[["__scopeId","data-v-8c55fbbe"]]);const z={__name:"index",props:{text:{type:String,default:""}},setup(e){const s=e,a=p(null),c=p(null);let _=0,r=0;const d=p([]),l=()=>{r+=c.value.offsetWidth,_*2>r&&(d.value.push(s.text),l())};return B(()=>{_=a.value.offsetWidth,l()}),(f,w)=>(n(),o("div",{ref_key:"marquee",ref:a,class:"marquee"},[t("span",{ref_key:"item",ref:c,class:"marquee__content"},v(e.text),513),(n(!0),o(h,null,k(d.value,g=>(n(),o("span",{key:g,class:"marquee__content"},v(g),1))),128))],512))}},E=u(z,[["__scopeId","data-v-a7a22a12"]]);const V=e=>(b("data-v-68829816"),e=e(),x(),e),R={class:"greeting"},U=V(()=>t("div",{class:"greeting__logo"},[t("img",{src:A,alt:"title"})],-1)),G={class:"greeting__marquee"},O=V(()=>t("div",{class:"greeting__image"},[t("img",{src:S,alt:"молодожены"})],-1)),H=V(()=>t("div",{class:"greeting__content"},[t("h1",{class:"greeting__title"},"Дорогие друзья и родные"),t("p",{class:"greeting__text"}," Весной состоится очень важное и радостное для нас событие наша свадьба "),t("p",{class:"greeting__text"}," Этот день невозможно представить без самых близких для нас людей, мы бы очень хотели,чтобы вы провели его вместе с нами ")],-1)),J={__name:"index",setup(e){return(s,a)=>(n(),o("section",null,[i(j,null,{default:$(()=>[t("div",R,[U,t("div",G,[i(E,{text:"Приглашение"})]),O,H])]),_:1})]))}},K=u(J,[["__scopeId","data-v-68829816"]]);const Q={},X=D('<div class="event-details" data-v-293a1c9b><div class="event-details__item first" data-v-293a1c9b><img src="'+S+'" alt="Молодожены" data-v-293a1c9b></div><div class="event-details__item second" data-v-293a1c9b><span data-v-293a1c9b>Когда?</span><time class="event-details__date" data-v-293a1c9b>27 августа 2023</time></div><div class="event-details__item third" data-v-293a1c9b><span data-v-293a1c9b>Когда?</span><div class="event-details__place" data-v-293a1c9b>Загородный отель &#39;АЛЬБАТРОС&#39;</div><span data-v-293a1c9b>с. Охотское</span></div><div class="event-details__item fourth" data-v-293a1c9b><img src="'+S+'" alt="Молодожены" data-v-293a1c9b></div></div>',1),Y=[X];function Z(e,s){return n(),o("section",null,Y)}const ee=u(Q,[["render",Z],["__scopeId","data-v-293a1c9b"]]),te={},se={class:"schedule"};function ae(e,s){return n(),o("div",se)}const ne=u(te,[["render",ae]]);const oe={class:"acceptable-colors"},_e={__name:"index",props:{colors:{type:Array,default:()=>[]}},setup(e){return(s,a)=>(n(),o("div",oe,[(n(!0),o(h,null,k(e.colors,(c,_)=>(n(),o("div",{class:"acceptable-colors__item",key:_,style:N({"--color":c})},null,4))),128))]))}},ce=u(_e,[["__scopeId","data-v-ba1f4054"]]),de={class:"dress-code"},le={__name:"index",setup(e){const s=["#fff","#000"];return(a,c)=>(n(),o("div",de,[i(ce,{colors:s})]))}};const m=e=>(b("data-v-6b966ddc"),e=e(),x(),e),ie=["datetime"],re={class:"date__item"},ue=m(()=>t("span",null,"дней",-1)),pe=m(()=>t("span",{class:"colon"},":",-1)),ve={class:"date__item"},me=m(()=>t("span",null,"часов",-1)),fe=m(()=>t("span",{class:"colon"},":",-1)),ge={class:"date__item"},he=m(()=>t("span",null,"минут",-1)),be=m(()=>t("span",{class:"colon"},":",-1)),xe={class:"date__item"},$e=m(()=>t("span",null,"секунд",-1)),ye={key:1,class:"time-up"},Se={__name:"index",props:{targetDate:{type:String,required:!0}},setup(e){const s=e,a=new Date(s.targetDate).getTime(),c=p(new Date().getTime()),_=p(a-c.value),r=W(()=>{if(_.value>0){const l=Math.floor(_.value/864e5),f=Math.floor(_.value%(1e3*60*60*24)/(1e3*60*60)).toString().padStart(2,"0"),w=Math.floor(_.value%(1e3*60*60)/(1e3*60)).toString().padStart(2,"0"),g=Math.floor(_.value%(1e3*60)/1e3).toString().padStart(2,"0");return{days:l,hours:f,minutes:w,seconds:g}}}),d=()=>{c.value=new Date().getTime(),_.value=a-c.value};return B(()=>{setInterval(d,1e3)}),(l,f)=>_.value>0?(n(),o("time",{key:0,class:"date",datetime:e.targetDate},[t("span",re,[t("strong",null,v(r.value.days),1),ue]),pe,t("span",ve,[t("strong",null,v(r.value.hours),1),me]),fe,t("span",ge,[t("strong",null,v(r.value.minutes),1),he]),be,t("span",xe,[t("strong",null,v(r.value.seconds),1),$e])],8,ie)):(n(),o("strong",ye,"Время вышло!"))}},Ie=u(Se,[["__scopeId","data-v-6b966ddc"]]),ke={class:"notes"},Ve=t("h2",null,"До свадьбы осталось",-1),we={__name:"index",setup(e){return(s,a)=>(n(),o("div",ke,[Ve,i(Ie,{"target-date":"2023-08-27"})]))}};const Ce=["type"],qe={__name:"index",props:{bgColor:{type:String,default:"#3c3f35"},type:{type:String,default:"button",validator(e){return["button","submit","clear"].includes(e)}}},emits:["click"],setup(e){return q(s=>({"1394503c":e.bgColor})),(s,a)=>(n(),o("button",{class:"button",onClick:a[0]||(a[0]=c=>s.$emit("click")),type:e.type},[I(s.$slots,"default",{},()=>[y("Отправить")],!0)],8,Ce))}},Be=u(qe,[["__scopeId","data-v-306517bf"]]);const Me=["placeholder","value"],Te={__name:"index",props:{modelValue:{type:String,default:""},placeholder:{type:String,default:""}},emits:["update:modelValue"],setup(e){const s=e,a=p(s.placeholder),c=()=>{a.value=""},_=()=>{a.value||(a.value=s.placeholder)};return(r,d)=>(n(),o("input",{type:"text",class:"input",placeholder:a.value,value:e.modelValue,onInput:d[0]||(d[0]=l=>r.$emit("update:modelValue",l.target.value)),onFocus:c,onBlur:_},null,40,Me))}},De=u(Te,[["__scopeId","data-v-b55dc23d"]]),Ne={class:"radio-button"},We=["id","name","value","checked"],Fe=["for"],Pe={__name:"index",props:{id:[String,Number],name:String,value:[String,Number],modelValue:[String,Number]},emits:["update:modelValue"],setup(e){return(s,a)=>(n(),o("div",Ne,[t("input",{type:"radio",class:"radio-button__input",id:e.id,name:e.name,value:e.value,checked:e.value===e.modelValue,onChange:a[0]||(a[0]=c=>s.$emit("update:modelValue",e.value))},null,40,We),t("label",{for:e.id,class:"radio-button__check-mark"},[I(s.$slots,"default")],8,Fe)]))}};const M=e=>(b("data-v-b1e9ea0f"),e=e(),x(),e),Ae={class:"attendee-info"},Le=M(()=>t("h1",{class:"attendee-info__title"},"Пожалуйста, подтвердите свое присутствие",-1)),je={class:"attendee-info__options"},ze=M(()=>t("span",null,"Присутствие?",-1)),Ee={__name:"index",setup(e){const s=p(""),a=p(""),c=[{label:"Я прийду/мы придём",value:"yes",id:0},{label:"Придти не получится",value:"no",id:1},{label:"Скажу ответ чуть позже",value:"later",id:2}],_=r=>{console.log(r)};return(r,d)=>(n(),o("div",Ae,[Le,t("form",{class:"attendee-info__form",onSubmit:d[2]||(d[2]=F(()=>{},["prevent"]))},[i(De,{modelValue:s.value,"onUpdate:modelValue":d[0]||(d[0]=l=>s.value=l),placeholder:"Ваша фамилия и имя"},null,8,["modelValue"]),t("div",je,[ze,(n(),o(h,null,k(c,l=>i(Pe,{id:l.id,value:l.value,name:"feedback",modelValue:a.value,"onUpdate:modelValue":d[1]||(d[1]=f=>a.value=f)},{default:$(()=>[y(v(l.label),1)]),_:2},1032,["id","value","modelValue"])),64))]),i(Be,{type:"submit",onClick:_},{default:$(()=>[y(" Отправить ")]),_:1})],32)]))}},Re=u(Ee,[["__scopeId","data-v-b1e9ea0f"]]);const Ue=e=>(b("data-v-9fb4a070"),e=e(),x(),e),Ge={class:"page"},Oe=Ue(()=>t("footer",null,"Ждем вас на торжестве",-1)),He={__name:"index",setup(e){return(s,a)=>(n(),o(h,null,[t("main",Ge,[i(K),i(ee),i(ne),i(le),i(we),i(Re)]),Oe],64))}},Je=u(He,[["__scopeId","data-v-9fb4a070"]]);const Ke={},Qe={class:"plug"};function Xe(e,s){return n(),o("div",Qe,"Зайдите с мобильного устройства")}const Ye=u(Ke,[["render",Xe],["__scopeId","data-v-2ac2ec7e"]]),et={__name:"index",setup(e){return(s,a)=>s.$platform.isMobile?(n(),C(Je,{key:0})):s.$platform.isWeb||s.$platform.isTablet?(n(),C(Ye,{key:1})):P("",!0)}};export{et as default};
