//zadanie 0
function distFromAvarage(numbers) {
    const average = numbers.reduce((a, b) => a + b) / numbers.length;

    return numbers.map(number => number - average);
} 

distFromAvarage([1,2,3,4,5,6,7]);
distFromAvarage([1,1,1,1]);
distFromAvarage([2,8,3,7]);


//zadanie 1
const favoriteFruits = ['grapefruit', 'apple', 'orange', 'mango', 'kiwi'];

console.log(favoriteFruits[0]);
console.log(favoriteFruits[favoriteFruits.length - 1]);

for (let i = 0; i < favoriteFruits.length; i++) {
    console.log(favoriteFruits[i]);
}

//zadanie 2
function createArray(number) {
    var newArray = [];

    for (var counter = 1; counter <= number; counter++) {
        newArray.push(counter);
    }

    return newArray;
}

console.log("tablica z liczbami do 6 = " + createArray(6));
console.log("tablica z liczbami do 1 = " + createArray(1));
console.log("Test dla liczby ujemnej (powinna być pusta tablica) " + createArray(-6));
console.log("Test dla zera (powinna być pusta tablica) " + createArray(0));


//zadanie 3
function printTable(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

printTable(['one', 'two', 'three']);


//zadanie 4
function multiply(array) {
    return array.reduce((a, b) => a * b);
}

multiply([1,2,3,4,5,6,7]);
multiply([1,1,1,1]);
multiply([2,8,3,7]);


//zadanie 5
function getEvenAvarage(numbers) {
    const even = numbers.filter(number => number % 2 == 0);
    const average = even.reduce((a, b) => a + b, 0) / even.length;

    return average ? average : null;
}

getEvenAvarage([1,2,3,4,5,6,7]);
getEvenAvarage([1,1,1,1]);
getEvenAvarage([2,8,3,7,4]);


//zadanie 6
function sortArray(numbers) {
    return numbers.sort();
}

sortArray([0, 13, 456, -32, 911, 74, 3, -4, 0, -4, -32, 12312, 456]);


//zadanie 7
function addArrays(tab1, tab2) {
    return tab1.map(number => {
        const sum = number + tab2.shift();
        return sum ? sum : number;
    }).concat(tab2);
}

console.log(addArrays([], []));
console.log(addArrays([4,0,1,3,4], [1,9,6,7,8,17])); // => [5,9,7,10,12,17]
console.log(addArrays([8,3,22], [1,3,2]));           // => [9,6,24]
console.log(addArrays([2,3,1,5,3,5], [3,1,76,1]));   // => [5,4,77,6,3,5]