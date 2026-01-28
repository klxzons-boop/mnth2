const orders = [
  {
    id: 1,
    customer: "Jhon",
    items: [
      { name: "Ноутбук", price: 50000, quantity: 1 },
      { name: "Мышь", price: 1500, quantity: 2 }
    ]
  },
  {
    id: 2,
    customer: "Alan",
    items: [
      { name: "Телефон", price: 30000, quantity: 1 },
      { name: "Чехол", price: 1000, quantity: 3 }
    ]
  },
  {
    id: 3,
    customer: "Jane",
    items: [
      { name: "Клавиатура", price: 2500, quantity: 1 },
      { name: "Монитор", price: 12000, quantity: 1 }
    ]
  }
];

let totalIncome = 0;
let maxOrder = 0;
let bestCustomer = "";

let products = {};
let mostPopularProduct = "";
let maxCount = 0;

for (let i = 0; i < orders.length; i++) {
  let orderSum = 0;

  for (let j = 0; j < orders[i].items.length; j++) {
    let item = orders[i].items[j];
    orderSum += item.price * item.quantity;

    if (products[item.name]) {
      products[item.name] += item.quantity;
    } else {
      products[item.name] = item.quantity;
    }
  }

  console.log("Сумма заказа клиента", orders[i].customer, ":", orderSum);

  totalIncome += orderSum;

  if (orderSum > maxOrder) {
    maxOrder = orderSum;
    bestCustomer = orders[i].customer;
  }
}

console.log("Общий доход магазина:", totalIncome);
console.log("Самый дорогой заказ сделал:", bestCustomer);

console.log("Список проданных товаров:");

for (let product in products) {
  console.log(product, ":", products[product]);

  if (products[product] > maxCount) {
    maxCount = products[product];
    mostPopularProduct = product;
  }
}

console.log("Самый популярный товар:", mostPopularProduct); 