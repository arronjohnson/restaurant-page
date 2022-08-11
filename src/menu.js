export default function generateContentMenu() {
  const header = document.createElement("h1");
  header.className = "logo menu";
  header.textContent = "Francescas";

  const desc = document.createElement("h2");
  desc.className = "desc menu";
  desc.textContent = "Menu";

  const menuDiv = document.createElement("div");
  menuDiv.className = "menu";
  menuDiv.appendChild(header);
  menuDiv.appendChild(desc);

  const main = document.querySelector("main");
  main.appendChild(menuDiv);
}
