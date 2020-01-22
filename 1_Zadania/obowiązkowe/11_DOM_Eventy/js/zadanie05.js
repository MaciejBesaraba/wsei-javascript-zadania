document.addEventListener("DOMContentLoaded", function () {
    Array.from(document.querySelectorAll('div')).forEach(div => {
        div.onclick = function() {
            this.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        }
    });
});