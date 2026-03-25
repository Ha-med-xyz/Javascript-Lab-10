class productProperties {
    // Initialize product properties
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    // Method to return total value of product in stock (quantity * price)
    getTotalValue() {
        return this.price * this.quantity;
    }
    // Method to return a string description of the product
    toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`
    }
    // Static method belongs to productProperties class
    static applyDiscount(products, discount) {
        // Iterates over array and changes price using (1 - discount) multiplication
        products.forEach(product => {
            product.price = (product.price * (1 - discount));
        });
    }
}

class perishableProductProperties extends productProperties {
    // Initialize new property expiration date alonside other properties
    constructor(name, price, quantity, expirationDate) {
        // Use super to call parent constructor within subclass
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }
    // Override toString()
    toString() {
        return `${super.toString()}, Expiration Date: ${this.expirationDate}`
    }
}

class store {
    // Initialize inventory array
    constructor() {
        this.inventory = [];
    }
    // Method to push product into inventory array
    addProduct(product) {
        this.inventory.push(product);
    }
    // Method to return the total value of products in inventory by iterating over each item in the array
    getInventoryValue() {
        // Initial variable
        let total = 0;
        this.inventory.forEach(product => {
            // Calls method on each product to get its value (price * quantity) and adds to total
            total += product.getTotalValue();
        });
        return total;
    }
    // Method to find and return a product in the inventory array by its name or return null if not found
    findProductByName(name) {
        // Utilizes find() to search inventory array for a product by its name
        let foundProduct = this.inventory.find(product => product.name.toLowerCase() === name.toLowerCase());
        // Return either the product or null if not found
        return foundProduct || null;
    }
}

// Create 5 products

// Two instances of perishable products with sample data
const steak = new perishableProductProperties("Steak", 29.99, 1, "2026-03-27");
const milk = new perishableProductProperties("Milk", 5.48, 2, "2026-04-14");

// Three instances of regular products with sample data
const football = new productProperties ("Football", 14.99, 8);
const bike = new productProperties ("Bike", 121.68, 10);
const jacket = new productProperties ("Jacket", 39.00, 4);