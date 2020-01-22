document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */

    //zadanie 0
    const htmlWithClassTitle = document.getElementsByClassName('title')[0];
    const htmlWithClassTitleByQuery = document.querySelector('#title');

    function getDataAnimation(htmlElement) {
        const dataAnimation = htmlElement.getAttribute('data-animation');
        return dataAnimation;
    }

    getDataAnimation(htmlWithClassTitle);

    //zadanie 1
    const htmlElementByIdHome = document.querySelector('#home');
    const firstHtmlLiWithDataDirection = document.querySelector('li[data-direction]');
    const firstHtmlWithClassBlock = document.querySelector('.block');

    //zadanie 2
    const allLiIncludedInNavTag = document.querySelectorAll('nav li');
    const allParagraphsWithinDivs = document.querySelectorAll('div p');
    const sallDivsInsideArticle = document.querySelectorAll('article div');

    //zadanie 3
    const htmlTagArticleWithClassFirst = document.querySelector('article.first');

    console.log(htmlTagArticleWithClassFirst.querySelectorAll('h1').length);

});






