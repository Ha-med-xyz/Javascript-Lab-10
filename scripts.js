class productProperties {
    // Initialize product properties
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    // Method to return total value of product in stock (quantity * price)
    getTotalValue(){
        return this.price * this.quantity;
    }
    // Method to return a string description of the product
    toString() {
        return `Product, ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`
    }
}

class perishableProductProperties extends productProperties {
    }