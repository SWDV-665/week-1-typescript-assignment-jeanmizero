// Grocery class
var Grocery = /** @class */ (function () {
    // Constructor
    function Grocery(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.subTotal = quantity * price;
    }
    return Grocery;
}());
// Initialize class object/ Create a Grocery items list
var cheese_item = new Grocery("Cheese", 3.5, 3.50);
var meat_item = new Grocery("Meat", 7, 6.5);
var icecream_item = new Grocery("Ice Cream", 1, 4.5);
var banana_item = new Grocery("Banana", 0.9, 3.5);
// Create an array
var groceries = [];
//Add items to an array
groceries.push(cheese_item);
groceries.push(meat_item);
groceries.push(icecream_item);
groceries.push(banana_item);
// Access the HTML element with Id
var table = document.getElementById('grocery');
groceries.map(function (grocery) {
    var name = grocery.name, quantity = grocery.quantity, price = grocery.price, subTotal = grocery.subTotal;
    var row = table.insertRow();
    row.innerHTML = "\n            <td id=\"name\">" + name + "</td>\n            <td id=\"qty\">" + quantity + "</td>\n            <td id=\"price\">" + price + "</td>\n            <td id=\"subtotal\">" + subTotal + "</td>";
});
