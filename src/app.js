/* Counter code ----------------------------------------------- */
/* export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
 -------------------------------------------------------------------*/

 const meynLista = document.getElementById("lista");
const orderListName = document.getElementById("text1");
const orderListId = document.getElementById("text2");
const inp1 = document.querySelector(".inp1");
const inp2 = document.querySelector(".inp2");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");

let menu = [
  { name: "hawaii", pris: 9 },
  { name: "vega", pris: 7 },
  { name: "kebab", pris: 20 },
  { name: "kyckling", pris: 10 },
];

// Add new pizzas to the menu
function addNewPizza(pizzaObject) {
  menu.push(pizzaObject);
}
addNewPizza({ name: "sambusa", pris: 19 });
addNewPizza({ name: "suqaar", pris: 13 });
addNewPizza({ name: "laxoox", pris: 11 });

// Display the menu
function displayMenu() {
  let newLista = [];
  menu.forEach((obj) => {
    let lista = `Name: ${obj.name} - Pris: ${obj.pris}<br><br>`;
    newLista.push(lista);
  });
  meynLista.innerHTML = newLista.join(""); // Concatenate the list items
}
displayMenu();

let dailyInkom = 100;
let nextOrderId = 1;
let orders = []; // Array to track orders

// Find a pizza based on user input
function findPizza() {
  orderListName.innerHTML = ""; // Clear previous results
  let getPizza = menu.find((menuPizza) => menuPizza.name === inp1.value);
  if (getPizza) {
    dailyInkom += getPizza.pris;
    let order = { id: nextOrderId++, pizza: getPizza, status: "order" };
    orders.push(order); // Save the order in the orders array
    orderListName.innerHTML = `Order created for ${getPizza.name} (ID: ${order.id}) - Pris: ${getPizza.pris}`;
    return order;
  } else {
    orderListName.innerHTML = `Pizzan "${inp1.value}" hittades inte på menyn.`;
    console.log(`Pizzan "${inp1.value}" hittades inte på menyn.`);
    return null;
  }
}

// Get an order by ID and mark it as completed
function getOrderId() {
  orderListId.innerHTML = ""; // Clear previous results
  let getId = orders.find((order) => order.id === parseInt(inp2.value)); // Find the order by ID
  if (getId) {
    getId.status = "Completed"; // Update the order status
    orderListId.innerHTML = `Order ID: ${getId.id} is completed.`;
    return getId;
  } else {
    orderListId.innerHTML = `Beställning med ID ${inp2.value} hittades inte.`;
    return null;
  }
}

// Event listeners for buttons
btn1.addEventListener("click", (event) => {
  event.preventDefault();
  findPizza(); // Find pizza and create order
});

btn2.addEventListener("click", (event) => {
  event.preventDefault();
  getOrderId(); // Get order by ID and complete it
});