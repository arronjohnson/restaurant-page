export function generateNav() {
  const linkNames = ["Home", "Menu", "Contact"];
  const navList = document.createElement("ul");

  for (let i = 0; i < linkNames.length; i++) {
    const link = document.createElement("a");
    link.setAttribute("href", "#");
    link.textContent = linkNames[i];

    const navItem = document.createElement("li");
    navItem.appendChild(link);
    navList.appendChild(navItem);
  }

  const nav = document.createElement("nav");
  nav.appendChild(navList);

  const content = document.getElementById("content");
  content.appendChild(nav);
}

export function generateMain() {
  const main = document.createElement("main");
  const content = document.getElementById("content");
  content.appendChild(main);
}

export function resetContent() {
  const main = document.querySelector("main");
  main.innerHTML = "";
}

export function generateFooter() {
  const linkInfo = [
    ["https://github.com/arronjohnson", "fa-brands fa-github"],
    ["https://www.linkedin.com/in/arronjohnson-uk/", "fa-brands fa-linkedin"],
    ["http://arronjohnson.me/", "fa-solid fa-earth-europe"],
    ["http://arronjohnson.me/", "fa-solid fa-envelope"],
  ];

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
  footerText.textContent = "Copyright © Arron Johnson 2022";

  const footer = document.createElement("footer");
  footer.className = "footer";
  footer.appendChild(footerIcons);
  footer.appendChild(footerText);

  const content = document.getElementById("content");
  content.appendChild(footer);
}
