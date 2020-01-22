document.addEventListener("DOMContentLoaded", function () {
    const list = document.querySelector('ul.menu');

    document.querySelector('a.button').onclick = function() {
        list.appendChild(createListElement());
    };

    function createListElement() {
        const newListElement = document.createElement('li');
        newListElement.innerHTML = `Element ${list.children.length + 1} - w chwili dodania było ${list.children.length} elementów`;
        return newListElement;
    }
});