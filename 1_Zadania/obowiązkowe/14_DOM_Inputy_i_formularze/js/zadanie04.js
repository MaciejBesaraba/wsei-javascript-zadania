class Card {

    constructor(number) {
        this._number = number;
    }

    get number() {
        return this._number;
    }

    set number(value) {
        this._number = value;
    }

    get type() {
        if (/^4\d*$/.exec(this._number)) {
            return 'Visa';
        }
        if (/^5\d*$/.exec(this._number)) {
            return 'MasterCard';
        }
        if (/^3(4|7)\d*$/.exec(this._number)) {
            return 'AmericanExpress';
        }
        return '';
    }

    get isValid() {
        return this._number.match(/^4\d{12,15}$/) ||
               this._number.match(/^5\d{15}$/) ||
               this._number.match(/^3(4|7)\d{13}$/);
    }

}

document.addEventListener("DOMContentLoaded", function () {

    const numberEl = document.querySelector("#name");
    const typeEl = document.querySelector("#type");

    const card = new Card(numberEl.value);

    numberEl.oninput = () => {
        card.number = numberEl.value;
        typeEl.innerHTML = card.type;
        if (card.isValid) {
            numberEl.style.borderColor = 'green';
        } else {
            numberEl.style.borderColor = '';
        }
    };

});