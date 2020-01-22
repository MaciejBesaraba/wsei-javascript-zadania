document.addEventListener("DOMContentLoaded", function () {

    const list = document.querySelector('ul.list');

    document.querySelector('#remove').onclick = function() {
        list.innerHTML = '';
    }

});