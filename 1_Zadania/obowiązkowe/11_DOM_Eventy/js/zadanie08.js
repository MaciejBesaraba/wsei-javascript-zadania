document.addEventListener("DOMContentLoaded", function () {

    const windowHeight = document.querySelector('#windowHeight');
    const windowWidth = document.querySelector('#windowWidth');

    function update() {
        windowHeight.innerHTML = document.documentElement.clientHeight;
        windowWidth.innerHTML = document.documentElement.clientWidth;
    }

    update();

    window.addEventListener("resize", update);

});