document.addEventListener("DOMContentLoaded", function () {

    document.querySelector('#remove').onclick = function() {
        this.outerHTML = '';
    }

});