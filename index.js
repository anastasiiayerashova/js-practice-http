import{a as w,i as d}from"./assets/vendor-DM1_jADJ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const o={form:document.querySelector(".js-search-form"),container:document.querySelector(".js-cards-container"),loadMoreBtn:document.querySelector(".js-load-more"),loader:document.querySelector(".js-loader")},L="8f1159dd082647efb71a49f696ece6e7",M="https://newsapi.org/v2/",h=6;async function p(s,r=1){const a=new URLSearchParams({q:s,apiKey:L,language:"en",pageSize:h,page:r}),c=`${M}/everything?${a}`,{data:{articles:e,totalResults:t,status:n,message:l=""}}=await w.get(c);if(n!=="ok")throw new Error(l);if(e.length===0)throw new Error("No articles found");return{articles:e,totalResults:t}}function f(s,r=90){return s.length<=r?s:`${s.slice(0,r-3)}...`}function A(s){const r=new Date,a=new Date(s),c=Math.floor((r-a)/1e3),e=Math.floor(c/60),t=Math.floor(e/60),n=Math.floor(t/24);return n>0?`Last updated ${n} day${n>1?"s":""} ago`:t>0?`Last updated ${t} hour${t>1?"s":""} ago`:e>0?`Last updated ${e} minute${e>1?"s":""} ago`:"Last updated just now"}function m(s,r){const c=s.filter(e=>e.title!=="[Removed]"&&e.urlToImage!==null).map(({title:e,description:t,url:n,urlToImage:l,publishedAt:y})=>`<article class="card">
        <img
          class="card-img-top"
          src="${l||"https://placehold.co/600x400?text=Hot news"}"
          alt="${e}"
        />
        <div class="card-body">
          <h5 class="card-title">${f(e,30)}</h5>
          <p class="card-text">
            ${f(t)}
          </p>
          <p class="card-text">
            <small class="text-body-secondary">${A(y)}</small>
          </p>
          <a href="${n}" class="btn btn-outline-primary" target="_blank" rel="noopener noreferrer" >Read more</a>
        </div>
      </article>`).join("");r.insertAdjacentHTML("beforeend",c)}document.head.insertAdjacentHTML("beforeend",`<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;1,500&display=swap" rel="stylesheet">`);let i=1,u=null,g=0;o.form.addEventListener("submit",$);o.loadMoreBtn.addEventListener("click",b);async function $(s){s.preventDefault();const r=s.currentTarget;u=r.elements.newsKeyword.value,o.loadMoreBtn.classList.add("is-hidden"),o.container.innerHTML="",i=1;try{const{articles:a,totalResults:c}=await p(u,i);i===1&&d.success({message:"First page 😎"}),g=Math.ceil(c/h),m(a,o.container),o.loadMoreBtn.classList.remove("is-hidden")}catch(a){o.loadMoreBtn.classList.add("is-hidden"),d.error({message:a.message})}finally{r.reset()}}async function b(){i+=1;try{o.loader.classList.remove("is-hidden");const{articles:s,totalResults:r}=await p(u,i);m(s,o.container),v(),i>=Math.min(g,16)&&(o.loadMoreBtn.classList.add("is-hidden"),d.success({message:"Last page 🥺"}))}catch(s){console.log(s)}finally{o.loader.classList.add("is-hidden")}}function v(){const r=o.container.lastElementChild.getBoundingClientRect().height;window.scrollBy({top:r*2,left:0,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
