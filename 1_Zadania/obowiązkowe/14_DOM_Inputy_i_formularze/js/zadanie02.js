document.addEventListener("DOMContentLoaded", function () {

    const imgs = Array.from(document.querySelectorAll('img'));
    const select = document.querySelector('select');

    update(select.value);

    select.addEventListener("change", function() {
        update(this.value);
    });

    function update(optionValue) {
        hide();
        if (optionValue === 'Os X') {
            optionValue = 'Apple';
        }
        show(optionValue);
    }

    function hide() {
        imgs.forEach(img => img.style.display = 'none');
    }

    function show(optionValue) {
        imgs.forEach(img => {
            if (img.alt === optionValue) {
                img.style.display = 'block';
            }
        });
    }

});