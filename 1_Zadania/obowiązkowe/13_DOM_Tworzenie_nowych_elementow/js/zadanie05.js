document.addEventListener("DOMContentLoaded", function () {

    const list1 = document.querySelector('#list1');
    const list2 = document.querySelector('#list2');

    Array.from(document.querySelectorAll('li a')).forEach(button => {
        button.onclick = function() {
            const li = button.parentElement;
            const ul = li.parentElement;

            ul.removeChild(li);

            if (ul.id === 'list1') {
                list2.appendChild(li);
            } else {
                list1.appendChild(li);
            }
        }
    });

});