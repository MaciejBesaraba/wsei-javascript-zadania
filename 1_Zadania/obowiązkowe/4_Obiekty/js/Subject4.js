//zadanie 0a 

const city = {
    capital: "Warszawa";
    population: 1000000;
    president: "Trzaskowski";
    primeMinister: ["Adam, Bogdan"];

};

console.log(city.capital + city.population + city.president + city.primeMinister);


//zadanie 0b

const timeMachine = {
    shape: "Portal";
    model: "";
    run : function(date, place) {
        console.log('Przeniosłeś się do ${place} + i jest obecnie ${date} + date');
    }
};

timeMachine.run("20-11-2030", "Sydney");


//zadanie 1

const book = {
    title: 'test',
    author: 'author',
    numberOfPages: 'number',
};

for (const key of book) {
    console.log(book[key]);
}


//zadanie 2

var person = {
    name: 'Andrzej',
    age: 12,
    sayHello: function(){
        console.log("hello");
    }
}

console.log(person.name);
console.log(person.age);
person.sayHello();


//zadanie 3

const recipe = {
    title: 'przepis',
    servings: 0
    
}

recipe.ingredients = [];
recipe.addIngedient = function(ingredient) {
    this.ingredient.push(ingredient);
    this.servings++;
}

recipe.addIngedient('składnik 1');
recipe.addIngedient('składnik 2');

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

for (const show in movie) {
    console.log(movie[show]);
}


// zadanie 5

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

for (let index = 0; index < animal.length; index++) {
    for (const key in animal[index]) {
            console.log(animal[index][key]);
    }
}


// zadanie 6

var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

console.log(spoon.isExist);