(()=>{"use strict";const e=(()=>{const e=new Set,t=e=>`tab-${e.replaceAll(" ","-")}-${Math.floor(1e4*Math.random())}`;return{createTab:o=>{const l=document.querySelector("#tab-panel");let n=document.createElement("li");n.classList="tab",n.textContent=o;let a=t(o);for(;e.has(a);){if(e.size>9999)throw"Max number of tabs reached!";a=t(o)}return n.id=a,l.appendChild(n),e.add(a),a},deleteTab:e=>{document.querySelector(`[id='${e}']`).remove()},addEventHandler:(e,t)=>{document.querySelector(`[id='${e}']`).addEventListener("click",t)},getTab:e=>document.querySelector(`[id='${e}']`)}})(),t=(()=>{let e=[];const t=e=>{document.querySelector(`[id='${e}']`).style.display=null},o=()=>{for(let t of e)document.getElementById(t).style.display="none"};return{createAssociatedPanel:l=>{let n=document.querySelector("#content"),a=document.createElement("div");a.classList="content-panel";let c=l.replace("tab","panel");return a.id=`${c}`,n.appendChild(a),e.push(c),o(),t(c),c},deletePanel:e=>{document.querySelector(`[id='${e}']`).remove()},hidePanel:e=>{document.querySelector(`[id='${e}']`).style.display="none"},showPanel:t,getAssociatedPanelId:e=>e.replace("tab","panel"),getPanel:e=>document.querySelector(`[id='${e}']`),hideAllPanels:o,addCardToPanel:(e,t)=>{document.getElementById(t).appendChild(e)}}})(),o=(e,t="")=>{let o=document.createElement("div");o.classList="food-card";let l=document.createElement("div");l.classList="food-card-picture";let n=document.createElement("img");n.alt="broken",n.src=e,l.appendChild(n),o.appendChild(l);let a=document.createElement("div");return a.classList="food-card-description",a.textContent=t,o.appendChild(a),o},l=o=>{let l=e.createTab(o);t.createAssociatedPanel(l),console.log(l),e.addEventHandler(l,(e=>{t.hideAllPanels(),t.showPanel(t.getAssociatedPanelId(e.target.id))}))},n=(e,t,l)=>{document.querySelectorAll(".content-panel")[l].appendChild(o(e,t))};(()=>{let e=document.createElement("ul");e.id="tab-panel",document.querySelector("#content").appendChild(e)})(),l("Home"),l("Menu"),l("Testimonials"),l("Contact"),n("https://www.w3schools.com/images/w3schools_green.jpg","wow a box",2),n("https://www.w3schools.com/images/w3schools_green.jpg","wow a box",2),n("https://www.w3schools.com/images/w3schools_green.jpg","wow a box",2),n("https://www.w3schools.com/images/w3schools_green.jpg","wow a box",1),n("https://www.w3schools.com/images/w3schools_green.jpg","wow a box",0)})();