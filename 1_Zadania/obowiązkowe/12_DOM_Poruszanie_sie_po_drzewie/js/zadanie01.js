document.addEventListener("DOMContentLoaded", function () {

    Array.from(document.querySelectorAll('.button')).forEach(button => {
        if (button != null) {
            button.onclick = function() {
                let display = this.nextElementSibling.style.display;
                if (display === 'none') {
                    this.nextElementSibling.style.display = 'block';
                } else {
                    this.nextElementSibling.style.display = 'none';
                }
            }
        }
    });

});