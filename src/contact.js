export default function generateContentContact() {
  const header = document.createElement("h2");
  header.className = "location";
  header.textContent = "Our Location";

  const main = document.querySelector("main");
  main.appendChild(header);
}
