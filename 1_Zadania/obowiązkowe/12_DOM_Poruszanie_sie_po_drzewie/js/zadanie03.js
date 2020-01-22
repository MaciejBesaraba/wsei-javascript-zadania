document.addEventListener("DOMContentLoaded", function () {
    Array.from(document.querySelectorAll('.listContainer')).forEach(container => {
        container.addEventListener('mouseover', function() {
            setColors(this);
        });
        container.addEventListener('mouseout', function() {
            clearColors(this);
        });
    });


    function setColors(listEl) {
        const firstEl = listEl.querySelector('ul').firstElementChild;
        const lastEl = listEl.querySelector('ul').lastElementChild;
        const childern = listEl.querySelector('ul').children;

        Array.from(childern).forEach(child => child.style.backgroundColor = 'green');
        firstEl.style.backgroundColor = 'red';
        lastEl.style.backgroundColor = 'blue';
    }

    function clearColors(listEl) {
        const firstEl = listEl.querySelector('ul').firstElementChild;
        const lastEl = listEl.querySelector('ul').lastElementChild;
        const childern = listEl.querySelector('ul').children;

        Array.from(childern).forEach(child => child.style.backgroundColor = '');
        firstEl.style.backgroundColor = '';
        lastEl.style.backgroundColor = '';
    }
});