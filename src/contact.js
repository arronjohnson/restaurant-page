export default function generateContentContact() {
  const header = document.createElement("h1");
  header.textContent = "Our Location";

  const main = document.querySelector("main");
  main.appendChild(header);
}
