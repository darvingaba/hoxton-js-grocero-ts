import "./reset.css";
import "./index.css";

type StoreItems = {
  id: number;
  name: string;
  price: number;
  itemNumber: number;
};
type state = {
  items: StoreItems[];
};

let state: state = {
  items: [
    {
      id: 1,
      name: "beetroot",
      price: 0.35,
      itemNumber: 0,
    },
    {
      id: 2,
      name: "carrot",
      price: 0.35,
      itemNumber: 0,
    },
    {
      id: 3,
      name: "apple",
      price: 0.35,
      itemNumber: 2,
    },
    {
      id: 4,
      name: "apricot",
      price: 0.35,
      itemNumber: 0,
    },
    {
      id: 5,
      name: "avocado",
      price: 0.35,
      itemNumber: 0,
    },
    {
      id: 6,
      name: "banana",
      price: 0.35,
      itemNumber: 0,
    },
    {
      id: 7,
      name: "bell-pepper",
      price: 0.35,
      itemNumber: 0,
    },
    {
      id: 8,
      name: "berry",
      price: 0.35,
      itemNumber: 0,
    },
    {
      id: 9,
      name: "blueberry",
      price: 0.35,
      itemNumber: 0,
    },
    {
      id: 10,
      name: "eggplant",
      price: 0.35,
      itemNumber: 0,
    },
  ],
};

function getItemImagePath(item: { id: StoreItems; name: StoreItems; }) {
  let id = String(item.id).padStart(3, "0");
  return `/icons/${id}-${item.name}.svg`;
}

function increaseQuantity(item: StoreItems) {
  return item.itemNumber++;
}
function decreaseQuantity(item: StoreItems) {
  if (item.itemNumber > 0) {
    item.itemNumber--;
  }
}

function createItem(item:StoreItems) {
  let liEl = document.createElement("li");
  let divEl = document.createElement("div");
  divEl.className = "store--item-icon";
  let imgEl = document.createElement("img");

  imgEl.src = getItemImagePath(item);
  imgEl.alt = item.name;

  divEl.appendChild(imgEl);
  let buttonEl = document.createElement("button");
  buttonEl.textContent = "Add to cart";

  buttonEl.addEventListener("click", function () {
    item.itemNumber++;
    render();
  });

  liEl.append(divEl, buttonEl);

  let storeUl = document.querySelector(".item-list.store--item-list");
  storeUl?.append(liEl);
}
function getItems() {
  return state.items.filter((item) => item.itemNumber > 0);
}
for (let item of state.items) {
  createItem(item);
}

for (let item of getItems()) {
  cartItem(item);
}

function cartItem(item: StoreItems) {
  let cartUl = document.querySelector(".item-list.cart--item-list");
  cartUl.textContent = "";
  let liEl = document.createElement("li");

  let imgEl = document.createElement("img");
  imgEl.className = "cart--item-icon";
  imgEl.src = getItemImagePath(item);
  imgEl.alt = item.name;

  let pEl = document.createElement("span");
  pEl.textContent = item.name.toUpperCase();

  let buttonEl = document.createElement("button");
  buttonEl.textContent = "-";
  buttonEl.addEventListener("click", function () {
    item.itemNumber--;
    numberOfItems.textContent = item.itemNumber;
    render();
  });
  let numberOfItems = document.createElement("span");
  numberOfItems.textContent = item.itemNumber;
  console.log(numberOfItems);

  let buttonEl2 = document.createElement("button");
  buttonEl2.textContent = "+";
  buttonEl2.addEventListener("click", function () {
    item.itemNumber++;
    numberOfItems.textContent = item.itemNumber;
    render();
  });

  liEl.append(imgEl, pEl, buttonEl, numberOfItems, buttonEl2);
  cartUl.append(liEl);
}

function getPrice(item: StoreItems) {
  return item.price;
}
function getNumberOfItems(item: StoreItems) {
  return item.itemNumber;
}
function totalPrice() {
  let spanEl = document.querySelector(".total-number");
  let total = 0;
  spanEl.innerHTML = "";
  for (let item of state.items) {
    total += getNumberOfItems(item) * getPrice(item);
  }
  spanEl.textContent = `£${total.toFixed(2)}`;
  console.log(total);
}

console.log(state.items);

function render() {
  createItem();
  cartItem();
  totalPrice();
}

render();
