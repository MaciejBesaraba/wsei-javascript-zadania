document.addEventListener("DOMContentLoaded", function () {

    Array.from(document.querySelectorAll('.button')).forEach(button => {
        if (button != null) {
            button.onclick = function() {
                this.parentElement.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            }
        }
    });

});