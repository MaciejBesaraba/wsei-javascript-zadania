
function hello() {
    console.log('hello1, deklaracja przed wywołaniem');
}

hello();
hello2();

function hello2() {
    console.log('hello2, deklaracja po wywołaniu');
}

//obie funkcje są wywoływane niezależnie od kolejności wykonania w pliku


if (helloAsVariable !== undefined) {
    helloAsVariable();
} else {
    console.log('could not call function as variable before its created');
}


var helloAsVariable = function() {
    console.log('hello, as a function stored in variable');
}

helloAsVariable();

//zmienna tworząca funkcje nie jest jeszcze stworzona, więc nie ma
//odniesienia do funkcji, która mogłaby być wywołana