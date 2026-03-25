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

    applyDiscount(products, discount){
    }
}

class perishableProductProperties extends productProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }
    toString() {
        return `${super.toString()}, Expiration Date: ${this.expirationDate}`
    }
}

// Two instances of perishableProductProperties with sample data
const steak = new perishableProductProperties("Steak", 29.99, 1, "2026-03-27")
const milk = new perishableProductProperties("Milk", 5.48, 2, "2026-04-14")