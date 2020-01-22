//zadanie 0

class Basket {

    constructor() {
        this._products = [];
    }

    get sum() {
        return this._products.reduce((a, b) => a + b.price, 0);
    }


    addProduct(name, price) {
        this._products.push(new Product(name, price));
    }

    showBasket() {
        console.log(`Your basket (${this.sum} zł):\n`,
            this._products.map(
                product => product.toString()
            ).join(',\n')
        );
    }
}

class Product {
    constructor(name, price) {
        this._name = name;
        this._price = price;
    }

    get price() {
        return this._price;
    }

    toString() {
        return `Product: ${this._name} - ${this._price} zł`;
    }
}

var aliceBasket = new Basket();
aliceBasket.addProduct("pomidor",10);
aliceBasket.addProduct("arbuz",40);
aliceBasket.showBasket();

var bruceBasket = new Basket();
bruceBasket.addProduct("rice", 10);
bruceBasket.addProduct("grzyby mun",50);
bruceBasket.addProduct("tofu",20);
bruceBasket.showBasket();