document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    // Task 0
    function getDatasInfo(elements) {
        return Array.from(elements).map(el => el.dataset);
    }

    getDatasInfo(links);

    // Task 1
    logHtmlElement(homeElement);
    logHtmlCollection(childElements);
    logHtmlElement(banner);
    logHtmlCollection(blocks);
    logHtmlCollection(links);

    function logHtmlElement(htmlElement, prefix='\t') {
        console.log(htmlElement);
        console.log(`${prefix}tag=${htmlElement.tagName}`);
        console.log(`${prefix}class=${htmlElement.className}`);
    }

    function logHtmlCollection(htmlCollection) {
        console.log(htmlCollection);
        Array.from(htmlCollection).forEach(element => {
            logHtmlElement(element, '\t\t');
        });
    }

    // Task 2
    blocks.forEach(block => {
        console.log(`innerHtml=${block.innerHTML}`);
        console.log(`outerHtml=${block.outerHTML}`);
        block.innerHTML = `Nowa wartość diva o klasie blocks`;
    });

    // InnerHtml returns content of html element as string
    // OuterHtml on top of InnerHtml also includes html element's own tag with attributes

    // Task 3
    const mainFooter = document.getElementById('mainFooter');

    function getId(element) {
        return element.id;
    }

    getId(mainFooter);

    // Task 4
    function getTags(elements) {
        return Array.from(elements).map(el => el.tagName);
    }

    getTags(childElements);

    // Task 5
    function getClassInfo(element) {
        // TODO not a return expected
        return element.classList;
    }

    getClassInfo(banner);

    // Task 6
    const liElements = document.querySelectorAll('nav li');

    function setDataDirection(elements) {
        Array.from(elements).forEach(el => {
            if (!el.getAttribute('data-direction')) {
                el.setAttribute('data-direction', 'top');
            }
        });
    }

    setDataDirection(liElements);
});
