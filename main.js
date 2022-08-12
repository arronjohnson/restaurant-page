(()=>{"use strict";function e(){const e=document.createElement("h1");e.className="logo",e.textContent="Francescas";const t=document.createElement("h2");t.className="desc",t.textContent="Restaurant & Pizzeria";const n=document.createElement("p");n.textContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit.\n    Amet pariatur vitae excepturi. Tempore assumenda sunt magni quaerat,\n    adipisci autem et?";const a=document.querySelector("main");a.appendChild(e),a.appendChild(t),a.appendChild(n)}class t{constructor(e,t,n){this.name=e,this.desc=t,this.price=n}}const n=[new t("Pizza Margherita (v)","Tomato and Mozzarella Cheese","£9.95"),new t("Pizza Tropicana","Ham and Pineapple","£10.95"),new t("Pizza Pepperoni","Pepperoni","£10.95"),new t("Pizza Pollo","Chicken and Garlic","£10.95"),new t("Pizza Americano","Chicken, Pepperoni and Onions","£11.95"),new t("Pizza Francesca","Mixed Meats, Mushrooms, Peppers & Olives","£12.95"),new t("Pasta Arrabiata (v)","Tomato, Chilli, Garlic & Onions","£9.95"),new t("Pasta Carbonara","Bacon, Cream, Onions & Parmigiano Cheese","£10.95"),new t("Pasta Bolognese","Minced Beef, Tomato & Onions","£10.95"),new t("Pasta Pollo","Tomato, Cream, Basil, Garlic, Chicken & Onions","£11.95"),new t("Pasta Lasagna","Beef Bolognese in a creamy Bechamel Sauce with Mozzarella Cheese","£12.95")];class a{constructor(e,t){this.text=e,this.icon=t}}const o=[new a("Email: francescaspizzeria@gmail.co.uk","fa-envelope"),new a("Address: 101 Wood Lane, London, W12 7FA","fa-location-dot"),new a("Tel: +44 (0) 20 8433 2000","fa-phone")];function c(e,t){const n=document.createTextNode(` ${e}`),a=document.createElement("i");a.className=t,a.classList.add("fa-solid");const o=document.createElement("p");o.className="contact",o.appendChild(a),o.appendChild(n),document.querySelector("main").appendChild(o)}const s=["Home","Menu","Contact"],i=[["https://github.com/arronjohnson","fa-brands fa-github"],["https://www.linkedin.com/in/arronjohnson-uk/","fa-brands fa-linkedin"],["http://arronjohnson.me/","fa-solid fa-earth-europe"],["http://arronjohnson.me/","fa-solid fa-envelope"]];function d(t,a){var s;switch(document.querySelector("main").innerHTML="",s=t,document.querySelectorAll("nav li").forEach((e=>e.removeAttribute("class"))),s.className="active",a){case"Menu":!function(){const e=document.createElement("h1");e.className="logo menu",e.textContent="Francescas";const t=document.createElement("h2");t.className="desc menu",t.textContent="Menu";const a=document.createElement("hr"),o=document.createElement("div");o.className="menu",o.appendChild(e),o.appendChild(t),o.appendChild(a),document.querySelector("main").appendChild(o),function(){const e=document.querySelector("div.menu");for(let t=0;t<n.length;t++){const a=document.createElement("h3");a.textContent=n[t].name;const o=document.createElement("p");o.className="desc",o.textContent=n[t].desc;const c=document.createElement("p");c.className="price",c.textContent=n[t].price;const s=document.createElement("div");s.className="menu-item",s.appendChild(a),s.appendChild(o),s.appendChild(c),e.appendChild(s)}}()}();break;case"Contact":!function(){const e=document.createElement("h1");e.className="logo",e.textContent="Francescas";const t=document.createElement("h2");t.className="desc",t.textContent="Get In Touch";const n=document.createElement("h2");n.className="addendum",n.textContent="We look forward to hearing from you!";const a=document.querySelector("main");a.appendChild(e),a.appendChild(t);for(let e=0;e<o.length;e++)c(o[e].text,o[e].icon);a.appendChild(n)}();break;default:e()}}!function(){const e=document.createElement("ul");for(let t=0;t<s.length;t++){const n=document.createElement("a"),a=s[t];n.setAttribute("href","#"),n.textContent=a;const o=document.createElement("li");o.appendChild(n),o.addEventListener("click",(()=>d(o,a))),"Home"===a&&(o.className="active"),e.appendChild(o)}const t=document.createElement("nav");t.appendChild(e),document.body.appendChild(t)}(),function(){const e=document.createElement("main"),t=document.createElement("div");t.id="content",t.appendChild(e),document.body.appendChild(t)}(),function(){const e=document.createElement("div");e.className="footer-icons";for(let t=0;t<i.length;t++){const n=document.createElement("i");n.className=i[t][1];const a=document.createElement("a");a.setAttribute("href",i[t][0]),a.setAttribute("target","_blank"),a.setAttribute("rel","noopener noreferrer"),a.appendChild(n),e.appendChild(a)}const t=document.createElement("p");t.className="footer-text",t.textContent="Copyright © Arron Johnson 2022";const n=document.createElement("footer");n.className="footer",n.appendChild(e),n.appendChild(t),document.body.appendChild(n)}(),e()})();