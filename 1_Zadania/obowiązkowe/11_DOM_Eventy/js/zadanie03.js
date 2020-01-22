document.addEventListener("DOMContentLoaded", function () {
    const spanCounters = document.querySelectorAll('span');
    const buttons = document.querySelectorAll('button');

    for (let i = 0; i < buttons.length; i++) {
        setOnclickCounter(buttons[i], spanCounters[i]);
    }

    function setOnclickCounter(button, spanCounter) {
        button.onclick = function() {
            spanCounter.innerHTML = +spanCounter.innerHTML + 1;
        }
    }
});