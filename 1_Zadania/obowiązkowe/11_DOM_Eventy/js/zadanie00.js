document.addEventListener("DOMContentLoaded", function () {

    // Task 0a
    document.querySelectorAll('div.parent').forEach(parent => {
        const children = parent.querySelector('.children');

        parent.addEventListener('mouseover', function() {
            children.style.display = 'block';
        });
        parent.addEventListener('mouseout', function() {
            children.style.display = 'none';
        });
    });

    // TODO task 0b

});