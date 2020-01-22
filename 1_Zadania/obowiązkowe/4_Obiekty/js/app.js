//zadanie 0a
class Country {
    constructor(capital, population, president, primeMinisters) {
        this._capital = capital;
        this._population = population;
        this._president = president;
        this._primeMinisters = primeMinisters
    }


    set capital(capital) {
        if (this.isString(capital)) {
            throw new Error(`err::Capital=${capital} is not a string!`);
        }
        this._capital = capital;
    }

    set  population(population) {
        if (!this.isNumber(population)) {
            throw new Error(`err::Population=${population} is not a number!`)
        }
        this._population = population;
    }

    set president(president) {
        if (!this.isString(president)) {
            throw new Error(`err::President=${president} is not a string!`);
        }
        this._president = president;
    }

    set primeMinisters(primeMinisters) {
        if (this.isArray(primeMinisters)) {
            throw new Error(`err::PrimeMinisters=${primeMinisters} is not a array!`);
        }
        primeMinister.forEach(minister => {
            if (!this.isString(minister)) {
                throw new Error(`err::PrimeMinister=${minister} is not a string!`);
            }
        });
        this._primeMinisters = primeMinisters;
    }


    get capital() {
        return this._capital;
    }

    get population() {
        return this._population;
    }

    get president() {
        return this._president;
    }

    get primeMinisters() {
        return this._primeMinisters;
    }

    toString() {
        let repr = `Country with a capital in ${this.capital} `
        repr += `and population of ${this.population} `
        repr += `is governed by president ${this.president} `

        if (this.primeMinisters.length > 0) {
            repr += 'and following prime ministers:\n\t'
            repr += this.primeMinisters.join(',\n\t')
        }

        return repr;
    }


    isString(anyType) {
        return Object.prototype.toString.call(anyType) === "[object String]";
    }

    isNumber(anyType) {
        return Object.prototype.toString.call(anyType) === "[object Number]";
    }

    isArray(anyType) {
        return Object.prototype.toString.call(anyType) === "[object Array]";
    }
}

const country = new Country(
    "Capital",
    1900,
    "President",
    [
        "PrimeMinister1",
        "PrimeMinister2",
        "PrimeMinister3"
    ]
);
console.log(`country.capital = ${country.capital}`);
console.log(`country.population = ${country.population}`);
console.log(`country.president = ${country.president}`);
console.log(`country.primeMinisters = [${country.primeMinisters.join(', ')}]`);

console.log(`country.toString = ${country}`);


//zadanie 0b
class TimeMachine {
    shape = "shape";
    model = "model";

    run(date, place) {
        console.log('setting time travel destination\n...');
        console.log(`successfuly set destination to ${place}`);

        console.log('setting time travel date\n...');
        console.log(`successfully set date to ${date}`);

        console.log('time travel proccess initiated. staring travel\n...');
        setTimeout(_ => {
            console.log('successfuly finished time travel');
            console.log(`you are now in ${place}, the date is ${date}`);
        }, 3000);

    }
}

const timeMachine = new TimeMachine();
console.log(`timeMachine.shape=${timeMachine.shape}`);
console.log(`timeMachine.model=${timeMachine.model}`);
timeMachine.run(new Date(1756, 1, 1), "Paris");


//zadanie 1 
const book = {
    title: "title",
    author: "author",
    numberOfPages: 111
};

console.log(`book.title=${book.title}`);
console.log(`book.author=${book.author}`);
console.log(`book.numberOfPages=${book.numberOfPages}`);


//zadanie 2
class Person {};
Person.prototype.sayHello = function() {
    console.log("hello");
};

const person = new Person();
person.name = "name";
person.age = "age";

console.log(`person.name=${person.name}`);
console.log(`person.age=${person.age}`);
person.sayHello();


//zadanie 3
class MyFavouriteBreakfastRecipe {

    _title = "Bolognese"
    _ingredients = ["tomatoes", "noodles", "beef", "garlic", "pepper"];

    constructor() {
        this._servings = this._ingredients.length;
    }

    get title() {
        return this._title;
    }

    get ingredients() {
        return this._ingredients;
    }

    get servings() {
        return this._servings;
    }

    addIngredients(newIndredients) {
        newIndredients.forEach(ingredient => {
            if (ingredient === "olive") {
                throw new Error("you nut");
            }
            this._ingredients.push(ingredient);
        });
        this._servings = this.ingredients.length;
    }

}
const recipe = new MyFavouriteBreakfastRecipe();
try {
    recipe.addIngredients(["butter"]);
} catch {
    recipe.addIngredients(["pepper", "onion", "salt"]);
}
console.log(recipe.title);
console.log(recipe.servings);
console.log(recipe.ingredients);


//zadanie 4
var movie = {
    director: "Peter Jackson",
    writers: [" J.R.R. Tolkien ", "Fran Walsh", "Philippa Boyens", "Peter Jackson"],
    stars: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
    country: "New Zealand | USA",
    budget: "$93,000,000",
    imdbPoints: 8.8,
    year: 2001,
    time: "2h 58 min",
    category: " Adventure, Drama, Fantasy"
}

for (var attribute in movie) {
    console.log(`${attribute} = ${movie[attribute]}`);
}


//zadanie 5
var animals = [
    {
        type: "cat",
        breed: "persian",
        name: "Tiberius",
        health: [
            {
                date: "2012-03-03",
                visitType: "grafting"
            },
            {
                date: "2015-06-23",
                visitType: "bowel surgery"
            }
        ]
    },
    {
        type: "Guinea pig",
        breed: "The Rex",
        name: "Marko",
        health: [
            {
                date: "2015-12-04",
                visitType: "grafting"
            },
            {
                date: "2016-03-15",
                visitType: "ear cleaning"
            }
        ]
    }

]

for (let i = 0; i < animals.length; i++) {
    for (var attribute in animals[i]) {
        console.log(`${attribute} = ${animals[i][attribute]}`);
    }
}


//zadanie 6
var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

console.log(spoon.isExist ? 'no' : 'yes');