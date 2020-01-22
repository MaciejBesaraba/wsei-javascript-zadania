document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    // Task 0
    const listElements = document.querySelectorAll('.ex5 li');

    listElements[4].className = 'big';

    for (let i = 1; i < listElements.length + 1; i++) {
        const element = listElements[i - 1];
        if (i % 2 == 0) {
            element.style.backgroundColor = 'green';
        }
        if (i % 3 == 0) {
            element.style.textDecoration = "underline";
        }
    }

    // Task 1
    const imgChrome = document.querySelector(".ex1 .chrome");
    imgChrome.style.backgroundImage = "url('assets/img/chrome.png')";

    const imgEdge = document.querySelector(".ex1 .edge");
    imgEdge.style.backgroundImage = "url('assets/img/edge.png')";

    const imgFirefox = document.querySelector(".ex1 .firefox");
    imgFirefox.style.backgroundImage = "url('assets/img/firefox.png')";

    const anchors = document.querySelectorAll('.ex1 a');

    const anchorChrome = anchors[0];
    anchorChrome.innerHTML = 'Chrome';
    anchorChrome.href = 'https://www.google.pl/chrome/';

    const anchorEdge = anchors[1];
    anchorEdge.innerHTML = 'Microsoft Edge'
    anchorEdge.href = 'https://www.microsoft.com/en-us/windows/microsoft-edge';

    const anchorFirefox = anchors[2];
    anchorFirefox.innerHTML = 'Firefox';
    anchorFirefox.href = 'https://www.mozilla.org/en-US/firefox/new/';

    imgChrome.style.width = '100px';
    
    /*
    This segment of code is written in style attribute to not interfere with .css files.
    Since attribute has higher priority than css it will override any colliding attributes defined there
    */

    // Task 2
    const htmlName = document.querySelector('#name');
    htmlName.innerHTML = 'Maciej Besaraba';
    const htmlColor = document.querySelector('#fav_color');
    htmlColor.innerHTML = 'turquoise';
    const htmlMeal = document.querySelector('#fav_meal');
    htmlMeal.innerHTML = 'dumplings';

    // Task 3
    document.querySelector('.ex3 ul').className = 'menu';
    document.querySelectorAll('.ex3 li').forEach(el => {
        el.classList.add('menuElement');
        el.classList.remove('error');
    });

    // Task 4
    const liTags = document.querySelectorAll('.ex4 li');
    for (let i = 1; i < liTags.length + 1; i++) {
        liTags[i - 1].setAttribute('data-id', i);
    }

});