export default function generateContentMenu() {
  const header = document.createElement("h1");
  header.className = "logo menu";
  header.textContent = "Francescas";

  const desc = document.createElement("h2");
  desc.textContent = "Menu";

  const main = document.querySelector("main");
  main.appendChild(header);
  main.appendChild(desc);
}
