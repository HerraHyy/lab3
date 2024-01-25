const name = "Tomi";
const message = `Hello, my name is ${name}.`;
console.log(message);
// Hello, my name is Tomi.

const person = { name: "John", age: 25, email: "john@example.com" };
const jsonPerson = JSON.stringify(person);
console.log(jsonPerson);
// {"name":"John","age":25,"email":"

const jsonString = '{"name": "Alice", "age": 30, "email": "alice@example.com"}';
const parsedPerson = JSON.parse(jsonString);
console.log(parsedPerson);
// { name: 'Alice', age: 30, email: '

// JSON.stringify() converts a JavaScript object --> a JSON string. !!!
// JSON.parse() converts a JSON string --> JavaScript object. !!!


/* const firstName = "John";
const lastName = "Doe";
const address = "123 Main Street\nApt 4B\nCity: Example"; */
const firstName = "John";
const lastName = "Doe";
const address = `123 Main Street
Apt 4B
City: Example`;

/* const name = "Alice";
const age = 30;
const greeting = "Hello, my name is " + name + " and I am " + age + " years old."; */

const name = "Alice";
const age = 30;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;

const userJSON = '{"name": "Emily", "age": 25, "city": "San Francisco"}';

const userObject = JSON.parse(userJSON);
const userName = userObject.name;
console.log(userName); // Outputs: Emily

const product = { name: "Product A", price: 15.99, category: "Electronics" };

const productJSON = JSON.stringify(product);
console.log(productJSON); // Outputs: {"name":"Product A","price":15.99,"category":"Electronics"}

const orders = [
    { orderID: 1, product: "Widget", quantity: 5 },
    { orderID: 2, product: "Gadget", quantity: 3 },
  ];
  
const ordersJSON = JSON.stringify(orders);
console.log(ordersJSON); 
// Outputs: [{"orderID":1,"product":"Widget","quantity":5},{"orderID":2,"product":"Gadget","quantity":3}]

// JSON.stringify() converts a JavaScript object into a JSON string.
// JSON.parse() converts a JSON string into a JavaScript object.
