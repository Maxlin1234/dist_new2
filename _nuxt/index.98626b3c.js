import{_ as u,a as w}from"./Menu.7eae8191.js";import{_ as m}from"./nuxt-link.748a6ea7.js";import{S as C,a as h,_ as v}from"./client-only.d5e6ae7a.js";import{N as k}from"./navigation.3f533ab5.js";import{P as f}from"./pagination.a2d07d8e.js";import{o as a,b as l,f as s,e,w as r,u as n,q as x,F as b,l as B,c as S,t as g,m as y,i as L,a as M}from"./entry.41454f1e.js";const P=[{id:1,image:"/dark/assets/imgs/works/grid2/6.jpg",category:"Branding",title:"Artboard Studio"},{id:2,image:"/dark/assets/imgs/works/grid2/2.jpg",category:"Branding",title:"Artboard Studio"},{id:3,image:"/dark/assets/imgs/works/grid2/3.jpg",category:"Branding",title:"Artboard Studio"},{id:4,image:"/dark/assets/imgs/works/grid2/4.jpg",category:"Branding",title:"Artboard Studio"},{id:5,image:"/dark/assets/imgs/works/grid2/5.jpg",category:"Branding",title:"Artboard Studio"}],V={class:"container-fluid rest"},N={class:"row"},j={class:"col-12"},A={class:"work-crus work-crus2"},H={class:"item"},$={class:"img"},E=["src"],q={class:"cont"},z={class:"mb-5"},D={class:"fz-18"},F=L('<div class="swiper-controls work-controls arrow-out"><div class="container"><div class="d-flex"><div class="swiper-button-prev"><span class="left"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z" fill="currentColor"></path></svg></span></div><div class="swiper-button-next ml-auto"><span class="right"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z" fill="currentColor"></path></svg></span></div></div><div class="swiper-pagination"></div></div></div>',1),O={__name:"Carousel",props:["lightMode"],setup(c){const d={modules:[k,f],speed:1e3,spaceBetween:80,loop:!0,centeredSlides:!0,mousewheel:!0,slidesPerView:2,breakpoints:{0:{slidesPerView:1,spaceBetween:30},640:{slidesPerView:2,spaceBetween:60},768:{slidesPerView:2,spaceBetween:60},1024:{slidesPerView:2}},pagination:{el:".work-carsouel .swiper-pagination",clickable:!0},navigation:{nextEl:".work-carsouel .swiper-button-next",prevEl:".work-carsouel .swiper-button-prev"}};return(_,p)=>{const i=m,o=v;return a(),l("section",{class:y(`work-carsouel full-height valign section-padding ${c.lightMode?"light":""}`)},[s("div",V,[s("div",N,[s("div",j,[s("div",A,[e(o,null,{default:r(()=>[e(n(C),x(d,{id:"content-carousel-container-unq-w",class:"swiper-container"}),{default:r(()=>[(a(!0),l(b,null,B(n(P),t=>(a(),S(n(h),{key:t.id},{default:r(()=>[s("div",H,[s("div",$,[s("img",{src:t.image,alt:""},null,8,E),s("div",q,[s("span",z,g(t.category),1),s("h6",D,g(t.title),1)]),e(i,{to:"/dark/project-details1",class:"plink"})])])]),_:2},1024))),128))]),_:1},16)]),_:1}),F])])])])],2)}}},Q={__name:"index",setup(c){return M({titleTemplate:"%s - Carousel",bodyAttrs:{class:"main-bg"}}),(d,_)=>{const p=u,i=w,o=O;return a(),l("div",null,[e(p,{lightMode:!0,alwaysDark:!0}),e(i,{lightMode:!0}),s("main",null,[e(o,{lightMode:!0})])])}}};export{Q as default};
