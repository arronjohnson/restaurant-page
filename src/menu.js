class Dish {
  constructor(name, desc, price) {
    this.name = name;
    this.desc = desc;
    this.price = price;
  }
}

// prettier-ignore
const dishInfo = [
  new Dish("Pizza Margherita (v)", "Tomato and Mozzarella Cheese", "£9.95"),
  new Dish("Pizza Tropicana", "Ham and Pineapple", "£10.95"),
  new Dish("Pizza Pepperoni", "Pepperoni", "£10.95"),
  new Dish("Pizza Pollo", "Chicken and Garlic", "£10.95"),
  new Dish("Pizza Americano", "Chicken, Pepperoni and Onions", "£11.95"),
  new Dish("Pizza Francesca", "Mixed Meats, Mushrooms, Peppers & Olives", "£12.95"),
  new Dish("Pasta Arrabiata (v)", "Tomato, Chilli, Garlic & Onions", "£9.95"),
  new Dish("Pasta Carbonara", "Bacon, Cream, Onions & Parmigiano Cheese","£10.95"),
  new Dish("Pasta Bolognese", "Minced Beef, Tomato & Onions", "£10.95"),
  new Dish("Pasta Pollo", "Tomato, Cream, Basil, Garlic, Chicken & Onions", "£11.95"),
  new Dish("Pasta Lasagna", "Beef Bolognese in a creamy Bechamel Sauce with Mozzarella Cheese", "£12.95"),
];

function generateDishes() {
  const menuDiv = document.querySelector("div.menu");

  for (let i = 0; i < dishInfo.length; i++) {
    const name = document.createElement("h3");
    name.textContent = dishInfo[i].name;

    const desc = document.createElement("p");
    desc.className = "desc";
    desc.textContent = dishInfo[i].desc;

    const price = document.createElement("p");
    price.className = "price";
    price.textContent = dishInfo[i].price;

    const menuItem = document.createElement("div");
    menuItem.className = "menu-item";
    menuItem.appendChild(name);
    menuItem.appendChild(desc);
    menuItem.appendChild(price);
    menuDiv.appendChild(menuItem);
  }
}

export default function generateContentMenu() {
  const header = document.createElement("h1");
  header.className = "logo menu";
  header.textContent = "Francescas";

  const desc = document.createElement("h2");
  desc.className = "desc menu";
  desc.textContent = "Menu";

  const divider = document.createElement("hr");

  const menuDiv = document.createElement("div");
  menuDiv.className = "menu";
  menuDiv.appendChild(header);
  menuDiv.appendChild(desc);
  menuDiv.appendChild(divider);

  const main = document.querySelector("main");
  main.appendChild(menuDiv);

  generateDishes();
}
