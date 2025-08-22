class Product {
    constructor(name, price, quantitity){
        this.name = name;
        this.price = price;
        this.quantitity = quantitity;
    }

    total(){
        return this.price * this.quantitity;
    }
    add(amount){
        this.quantity += amount;
    }
    remove(amount){
        if(this.quantitity >= amount){
            this.quantitity -= amount;
        }
    label(){
        return "Dados: " + this.name + ", " + this.price.toFixed(2);
    }
    }
}