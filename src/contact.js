class Contact {
  constructor(text, icon) {
    this.text = text;
    this.icon = icon;
  }
}

const contactDetails = [
  new Contact("Email: francescaspizzeria@gmail.co.uk", "fa-envelope"),
  new Contact("Address: 101 Wood Lane, London, W12 7FA", "fa-location-dot"),
  new Contact("Tel: +44 (0) 20 8433 2000", "fa-phone"),
];

function addContactDetail(text, iconClass) {
  const textNode = document.createTextNode(` ${text}`);
  const icon = document.createElement("i");
  icon.className = iconClass;
  icon.classList.add("fa-solid");

  const para = document.createElement("p");
  para.className = "contact";
  para.appendChild(icon);
  para.appendChild(textNode);

  const main = document.querySelector("main");
  main.appendChild(para);
}

export default function generateContentContact() {
  const logo = document.createElement("h1");
  logo.className = "logo";
  logo.textContent = "Francescas";

  const desc = document.createElement("h2");
  desc.className = "desc";
  desc.textContent = "Get In Touch";

  const addendum = document.createElement("h2");
  addendum.className = "addendum";
  addendum.textContent = "We look forward to hearing from you!";

  const main = document.querySelector("main");
  main.appendChild(logo);
  main.appendChild(desc);

  for (let i = 0; i < contactDetails.length; i++) {
    addContactDetail(contactDetails[i].text, contactDetails[i].icon);
  }

  main.appendChild(addendum);
}
