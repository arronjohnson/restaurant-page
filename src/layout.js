import generateContentHome from "./home.js";
import generateContentMenu from "./menu.js";
import generateContentContact from "./contact.js";

const linkNames = ["Home", "Menu", "Contact"];
const linkInfo = [
  ["https://github.com/arronjohnson", "fa-brands fa-github"],
  ["https://www.linkedin.com/in/arronjohnson-uk/", "fa-brands fa-linkedin"],
  ["http://arronjohnson.me/", "fa-solid fa-earth-europe"],
  ["http://arronjohnson.me/", "fa-solid fa-envelope"],
];

export default function generateLayout() {
  generateNav();
  generateMain();
  generateFooter();
  generateContentHome();
}

function toggleActiveLink(el) {
  const links = document.querySelectorAll("nav li");
  links.forEach((link) => link.removeAttribute("class"));
  el.className = "active";
}

function navOnClick(navItem, linkText) {
  resetContent();
  toggleActiveLink(navItem);
  switch (linkText) {
    case "Menu":
      generateContentMenu();
      break;
    case "Contact":
      generateContentContact();
      break;
    default:
      generateContentHome();
  }
}

function generateNav() {
  const navList = document.createElement("ul");

  for (let i = 0; i < linkNames.length; i++) {
    const link = document.createElement("a");
    const linkText = linkNames[i];
    link.setAttribute("href", "#");
    link.textContent = linkText;

    const navItem = document.createElement("li");
    navItem.appendChild(link);
    navItem.addEventListener("click", () => navOnClick(navItem, linkText));

    // set Home to the default active tab
    if (linkText === "Home") {
      navItem.className = "active";
    }

    navList.appendChild(navItem);
  }

  const nav = document.createElement("nav");
  nav.appendChild(navList);
  document.body.appendChild(nav);
}

function generateMain() {
  const main = document.createElement("main");
  const content = document.createElement("div");
  content.id = "content";
  content.appendChild(main);
  document.body.appendChild(content);
}

function resetContent() {
  const main = document.querySelector("main");
  main.innerHTML = "";
}

function generateFooter() {
  const footerIcons = document.createElement("div");
  footerIcons.className = "footer-icons";

  for (let i = 0; i < linkInfo.length; i++) {
    const icon = document.createElement("i");
    icon.className = linkInfo[i][1];

    const link = document.createElement("a");
    link.setAttribute("href", linkInfo[i][0]);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
    link.appendChild(icon);
    footerIcons.appendChild(link);
  }

  const footerText = document.createElement("p");
  footerText.className = "footer-text";
  footerText.textContent = "Copyright ?? Arron Johnson 2022";

  const footer = document.createElement("footer");
  footer.className = "footer";
  footer.appendChild(footerIcons);
  footer.appendChild(footerText);
  document.body.appendChild(footer);
}
