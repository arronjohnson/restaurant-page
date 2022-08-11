export default function generateContentHome() {
  const logo = document.createElement("h1");
  logo.className = "logo";
  logo.textContent = "Francescas";

  const desc = document.createElement("h2");
  desc.className = "desc";
  desc.textContent = "Restaurant & Pizzeria";

  const para = document.createElement("p");
  para.textContent = `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    Amet pariatur vitae excepturi. Tempore assumenda sunt magni quaerat,
    adipisci autem et?`;

  const main = document.querySelector("main");
  main.appendChild(logo);
  main.appendChild(desc);
  main.appendChild(para);
}
