import{a as f,S as i,i as p}from"./assets/vendor-BMHzDZyJ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function g(o){const r="https://pixabay.com",n="/api/",a=new URLSearchParams({key:"50274791-f4b76ab6fee4d49d8c558ca21",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}${n}?${a}`;return f.get(e).then(t=>t.data.hits).catch(t=>{console.log("Помилка при запиті до Pixabay:",t)})}const l=document.querySelector(".gallery"),y=new i(".gallery a"),c=document.querySelector(".loader-container");function h(o){const r=o.map(n=>{const{webformatURL:a,largeImageURL:e,tags:t,likes:s,views:d,comments:u,downloads:m}=n;return`
        <li><a class="gallery-link" href="${e}">
          <div class="gallery-item">
            <img class="gallery-image" src="${a}" alt="${t}" loading="lazy" />
            <div class="gallery-info">
              <p><b>Likes:</b> ${s}</p>
              <p><b>Views:</b> ${d}</p>
              <p><b>Comments:</b> ${u}</p>
              <p><b>Downloads:</b> ${m}</p>
            </div>
          </div>
        </a></li>
      `}).join("");l.insertAdjacentHTML("beforeend",r),y.refresh()}function b(){l.innerHTML=""}function L(){c.classList.remove("hidden")}function v(){c.classList.add("hidden")}const w=document.querySelector(".gallery"),$=document.querySelector(".form");$.addEventListener("submit",o=>{o.preventDefault();const r=o.target.elements["search-text"].value;L(),g(r).then(n=>{if(r.trim()===""||n.length===0)p.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"});else{const a=h(n);w.insertAdjacentHTML("beforeend",a)}}).finally(()=>{v()}),o.target.reset(),b()});new i(".gallery-item a",{captionsData:"alt",captionDelay:250});console.log("hello");
//# sourceMappingURL=index.js.map
