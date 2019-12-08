document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */


const titleE1 = document.querySelector("div .title");

function getDataAnimation(element) {
    return element.getAttribute("data-animation");
}

console.log(getDataAnimation(titleE1));

const home = document.querySelector("#home");
const home2 = document.queryElementbyId("home2");
const lielement = document.querySelector("li[data-direction]");
const element = document.querySelector(".block");

const list = document.querySelectorAll("nav li");
const paragraphs = document.querySelectorAll("div p");
const divs = document.querySelectorAll("article div");

console.table(list);
console.table(paragraphs);
console.table(divs);

const article = document.querySelector("article.first");
let result = article.getElementsByTagName("h1");
console.log(result.length);

});






