import{_ as f,a as h}from"./Menu.7eae8191.js";import{_ as k}from"./nuxt-link.748a6ea7.js";import{o as a,b as r,f as t,F as d,l as m,u as _,t as l,e as o,w as y,j as b,a as v}from"./entry.41454f1e.js";const g=[{id:1,number:"01",type:"Design",title:"Everybody sunshine",image:"/dark/assets/imgs/works/full/1.jpg"},{id:2,number:"02",type:"Branding",title:"Who Dares Wins",image:"/dark/assets/imgs/works/full/2.jpg"},{id:3,number:"03",type:"Branding",title:"Fountain Studio",image:"/dark/assets/imgs/works/full/3.jpg"},{id:4,number:"04",type:"Photography",title:"April willow flower",image:"/dark/assets/imgs/works/full/4.jpg"},{id:5,number:"05",type:"Design",title:"Step Over",image:"/dark/assets/imgs/works/full/1.jpg"},{id:6,number:"06",type:"ART Design",title:"Snowy Zero",image:"/dark/assets/imgs/works/full/2.jpg"},{id:7,number:"07",type:"Design",title:"Fun Bike",image:"/dark/assets/imgs/works/full/3.jpg"},{id:8,number:"08",type:"Apps",title:"Mobile Apps",image:"/dark/assets/imgs/works/full/4.jpg"}],w={class:"inter-links-center horizontal section-padding d-flex align-items-center"},x={class:"container-xxl"},L={class:"row justify-content-center"},S={class:"col-lg-10"},j={class:"links-text d-flex justify-content-center"},A={class:"rest"},E=["data-tab"],D={class:"num"},M={class:"tag sub-title"},T={class:"text"},q={class:"links-img"},B=["id"],N=["src"],$={__name:"InteractiveCenterHorizontal",setup(p){function c(e){var i=e.currentTarget.getAttribute("data-tab");if(document.querySelectorAll(".links-text li").forEach(n=>{n.classList.remove("current"),n.classList.add("no-active")}),e.currentTarget.classList.add("current"),e.currentTarget.classList.remove("no-active"),document.querySelectorAll(".links-img .img").forEach(n=>n.classList.remove("current")),document.querySelector("#"+i).classList.add("current"),e.currentTarget.classList.contains("current"))return!1}function u(){document.querySelectorAll(".links-text li").forEach(e=>e.classList.remove("current")),document.querySelectorAll(".links-img .img").forEach(e=>e.classList.remove("current")),document.querySelectorAll(".links-text li").forEach(e=>e.classList.remove("no-active"))}return(e,i)=>{const n=k;return a(),r("section",w,[t("div",x,[t("div",L,[t("div",S,[t("div",j,[t("ul",A,[(a(!0),r(d,null,m(_(g),s=>(a(),r("li",{"data-tab":`tab-${s.id}`,key:s.id,onMouseenter:c,onMouseleave:u},[t("h2",null,[t("span",D,l(s.number)+".",1),o(n,{to:"/dark/project-details1"},{default:y(()=>[t("span",M,l(s.type),1),b(),t("span",T,l(s.title),1)]),_:2},1024)])],40,E))),128))])])])])]),t("div",q,[(a(!0),r(d,null,m(_(g),s=>(a(),r("div",{class:"img",id:`tab-${s.id}`,key:s.id},[t("img",{src:s.image,alt:""},null,8,N)],8,B))),128))])])}}},C={__name:"index",setup(p){return v({titleTemplate:"%s - Interactive Horizontal",bodyAttrs:{class:"main-bg inter-center"}}),(c,u)=>{const e=f,i=h,n=$;return a(),r("div",null,[o(e,{alwaysDark:!0}),o(i,{lightMode:!0}),t("main",null,[o(n)])])}}};export{C as default};
