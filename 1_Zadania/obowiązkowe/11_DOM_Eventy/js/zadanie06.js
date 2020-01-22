document.addEventListener("DOMContentLoaded", function () {
    const globalX = document.querySelector('span#globalX');
    const globalY = document.querySelector('span#globalY');
    const localX = document.querySelector('span#localX');
    const localY= document.querySelector('span#localY');

    const box = document.querySelector('div#box');

    let isMouseOver = false;


    box.addEventListener('mouseover', function() {
        isMouseOver = true;
    });

    box.addEventListener('mouseout', function() {
        isMouseOver = false;
        clear();
    });


    document.body.addEventListener('mousemove', function (event) {
        if (isMouseOver) {
            globalX.innerHTML = event.clientX;
            globalY.innerHTML = event.clientY;
        }
    });

    box.addEventListener('mousemove', function (event) {
        if (isMouseOver) {
            var rect = event.target.getBoundingClientRect();

            localX.innerHTML = event.clientX - rect.left;
            localY.innerHTML = event.clientY - rect.top;
        }
    });

    function clear() {
        globalX.innerHTML = '';
        globalY.innerHTML = '';
        localX.innerHTML = '';
        localY.innerHTML = '';
    }
});