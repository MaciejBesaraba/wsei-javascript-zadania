document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */


const titleE1 = document.querySelector("div .title");

function getDataAnimation(element) {
    return element.getAttribute("data-animation");
}

console.log(getDataAnimation(titleE1));

});