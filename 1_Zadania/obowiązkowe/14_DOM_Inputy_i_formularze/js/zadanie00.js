document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector('form');
    const errorMessage = document.querySelector('.error-message');

    form.onsubmit = function() {
        return validate();
    }

    function validate() {
        if (!getValue('email').includes('@')) {
            errorMessage.innerHTML = 'Email musi posiadać znak @';
            return false;
        }
        if (getValue('name').length < 7) {
            errorMessage.innerHTML = 'Twoje imię jest za krótkie';
            return false;
        }
        if (getValue('surname').length < 7) {
            errorMessage.innerHTML = 'Twoje nazwisko jest za krótkie';
            return false;
        }
        const pass1 = getValue('pass1');
        const pass2 = getValue('pass2');
        if (!(pass1 && pass2 && pass1 === pass2)) {
            errorMessage.innerHTML = 'Hasła nie są takie same lub puste';
            return false;
        }
        if (!document.querySelector(`#agree`).checked) {
            errorMessage.innerHTML = 'Musisz zaakceptować warunki';
            return false;
        }

        errorMessage.innerHTML = '';
        return true;
    }

    function getValue(id) {
        return document.querySelector(`#${id}`).value;
    }

});