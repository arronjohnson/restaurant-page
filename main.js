(()=>{"use strict";function e(){document.querySelector("main").innerHTML=""}!function(){const e=["Home","Menu","Contact"],t=document.createElement("ul");for(let n=0;n<e.length;n++){const o=document.createElement("a");o.setAttribute("href","#"),o.textContent=e[n];const c=document.createElement("li");c.appendChild(o),t.appendChild(c)}const n=document.createElement("nav");n.appendChild(t),document.getElementById("content").appendChild(n)}(),function(){const e=document.createElement("main");document.getElementById("content").appendChild(e)}(),function(){const e=[["https://github.com/arronjohnson","fa-brands fa-github"],["https://www.linkedin.com/in/arronjohnson-uk/","fa-brands fa-linkedin"],["http://arronjohnson.me/","fa-solid fa-earth-europe"],["http://arronjohnson.me/","fa-solid fa-envelope"]],t=document.createElement("div");t.className="footer-icons";for(let n=0;n<e.length;n++){const o=document.createElement("i");o.className=e[n][1];const c=document.createElement("a");c.setAttribute("href",e[n][0]),c.setAttribute("target","_blank"),c.setAttribute("rel","noopener noreferrer"),c.appendChild(o),t.appendChild(c)}const n=document.createElement("p");n.className="footer-text",n.textContent="Copyright © Arron Johnson 2022";const o=document.createElement("footer");o.className="footer",o.appendChild(t),o.appendChild(n),document.getElementById("content").appendChild(o)}(),function(){const e=document.createElement("h1");e.className="logo",e.textContent="Francescas",document.querySelector("main").appendChild(e)}(),e(),function(){const e=document.createElement("h1");e.className="logo menu",e.textContent="Francescas";const t=document.createElement("h2");t.textContent="Menu";const n=document.querySelector("main");n.appendChild(e),n.appendChild(t)}(),e(),function(){const e=document.createElement("h1");e.textContent="Our Location",document.querySelector("main").appendChild(e)}()})();