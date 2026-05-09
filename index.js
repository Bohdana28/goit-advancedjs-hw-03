import{a as l,S as p,i as n}from"./assets/vendor-73qhTu8_.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();l.defaults.baseURL="https://pixabay.com/api/";const g="44023316-0d50012e2ff9db94e7166d7a8";function y(a){return l.get("",{params:{key:g,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),h=new p(".gallery a",{captionsData:"alt",captionDelay:250});function b(a){const r=a.map(({webformatURL:s,largeImageURL:o,tags:e,likes:t,views:i,comments:f,downloads:m})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${o}">
          <img class="gallery-image" src="${s}" alt="${e}" loading="lazy" />
          <div class="info">
            <p><b>Likes</b>${t}</p>
            <p><b>Views</b>${i}</p>
            <p><b>Comments</b>${f}</p>
            <p><b>Downloads</b>${m}</p>
          </div>
        </a>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){c.innerHTML=""}function S(){u.classList.add("is-active")}function q(){u.classList.remove("is-active")}const d=document.querySelector(".form");d.addEventListener("submit",v);document.querySelector(".js-gallery");document.querySelector(".js-loader");function v(a){a.preventDefault();const r=a.currentTarget.elements["search-text"].value.trim();if(r===""){n.warning({massage:"Please enter a search query.",position:"topRight"});return}L(),S(),y(r).then(s=>{const o=s.hits;if(!o||o.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(o)}).catch(()=>{n.error({message:"Oops! Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{q(),d.reset()})}
//# sourceMappingURL=index.js.map
