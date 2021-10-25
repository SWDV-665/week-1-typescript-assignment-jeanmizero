// Grocery class
class Grocery {
    name: string;
    quantity: number;
    price: number;
    subTotal: number;
    // Constructor
    constructor(name: string, quantity: number, price: number) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.subTotal = quantity * price;
    }
}
// Initialize class object/ Create a Grocery items list
const cheese_item = new Grocery("Cheese",  3.5, 3.50);
const meat_item = new Grocery("Meat", 7, 6.5);
const icecream_item = new Grocery("Ice Cream", 1, 4.5);
const banana_item = new Grocery("Banana", 0.9, 3.5);

// Create an array
let groceries: Grocery[] = [];

//Add items to an array
groceries.push(cheese_item);
groceries.push(meat_item);
groceries.push(icecream_item);
groceries.push(banana_item);

// Access the HTML element with Id
const table = document.getElementById('grocery') as HTMLTableElement;

groceries.map(grocery => {
    const {name, quantity, price, subTotal} = grocery;
    const row = table.insertRow()
    row.innerHTML = `
            <td id="name">${name}</td>
            <td id="qty">${quantity}</td>
            <td id="price">${price}</td>
            <td id="subtotal">${subTotal}</td>`;
});
