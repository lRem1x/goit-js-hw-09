const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body"),o=document.querySelector(".box");o.style.display="flex",o.style.justifyContent="center",t.addEventListener("click",(function(o){r.style.backgroundColor=n(),l=setInterval((()=>{r.style.backgroundColor=n()}),1e3),t.setAttribute("disabled",!1),e.removeAttribute("disabled")})),e.addEventListener("click",(function(r){clearInterval(l),t.removeAttribute("disabled"),e.setAttribute("disabled",!1)})),e.setAttribute("disabled",!1);let l=null;function n(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}
//# sourceMappingURL=01-color-switcher.db8bd820.js.map