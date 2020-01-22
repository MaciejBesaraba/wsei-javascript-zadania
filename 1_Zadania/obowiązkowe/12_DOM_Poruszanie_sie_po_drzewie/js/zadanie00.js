document.addEventListener("DOMContentLoaded", function () {

    //1.1
    const firstEl = document.querySelector('.first').firstElementChild.children[2];

    //1.2
    const secondEl = document.querySelector('#second').parentElement.children[3];

    //1.3
    const childrens = document.querySelector('[data-ex="third"]')
                            .parentElement
                            .parentElement
                            .lastElementChild
                            .firstElementChild
                            .children;
    const thirdEl = childrens[Math.floor(childrens.length/2)];

    //1.4
    const forthEl = document.querySelector('.forth')
                            .parentElement
                            .querySelector(':scope > article')
                            .querySelectorAll(':scope > p')[1];

});
