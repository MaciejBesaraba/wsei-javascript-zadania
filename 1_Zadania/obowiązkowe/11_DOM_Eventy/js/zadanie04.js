document.addEventListener("DOMContentLoaded", function () {
    const counter = document.querySelector('span');
    const buttons = Array.from(document.querySelectorAll('button')).forEach(button => {
        button.onclick = function() {
            counter.innerHTML = +counter.innerHTML + 1;
        }
    });
});