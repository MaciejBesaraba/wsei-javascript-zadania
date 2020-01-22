//zadanie 0
class Car {

    constructor(brand, color) {
        this._brand = brand;
        this._color = color;
        this._kilometers = 0;
    }

    get brand() {
        return this._brand;
    }

    get color() {
        return this._color;
    }

    get numberOfKilometers() {
        return this._kilometers;
    }

    toString() {
        return `${this.color} ${this.brand}, ${this.numberOfKilometers}km`
    }

    printCarInfo() {
        console.log(this.toString());
    }

    drive(km) {
        if (km < 0) {
            throw 'number is less than 0';
        }
        this._kilometers += km;
    }
}

const car = new Car('Mercedes', 'Czarny');
car.printCarInfo();
car.drive(20);
car.printCarInfo();


//zadanie 1
Car.prototype.technicalReviewDates = [];
Car.prototype.addReview = function(isoDateTimeString) {
    this.technicalReviewDates.push(isoDateTimeString);
}

Car.prototype.getReviews = function(isoDateTimeString) {
    return this.technicalReviewDates;
}

car.addReview("2018-01-03T10:00:00+01:00");
console.log(car.technicalReviewDates);


//zadanie 2
var calculator = {
    save: function (newA, newB) {
        this.a = newA;
        this.b = newB;
    },

    sum: function () {
        return this.a + this.b;
    },

    multiply: function () {
        return this.a * this.b;
    }
};

calculator.save(2, 3);
console.log(calculator.sum());
console.log(calculator.multiply());


//zadanie 3
const stairs = {
    step: 0,

    up: function() {
        this.step += 1;
    },

    down: function() {
        this.step -= 1;
    },

    printStep: function() {
        console.log(this.step);
    }
}

stairs.up();
stairs.up();
stairs.up();
stairs.down();
stairs.printStep();