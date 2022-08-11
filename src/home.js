export default function generateContentHome() {
  const logo = document.createElement("h1");
  logo.className = "logo";
  logo.textContent = "Francescas";

  const main = document.querySelector("main");
  main.appendChild(logo);
}
