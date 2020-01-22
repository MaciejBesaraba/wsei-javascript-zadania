/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//Deklaracja funkcji i stworzenie jej zakresu 
function jeden() {

    //Deklaracja i przypisanie zmiennej w okreslonym zakresie
    var zmienna1 = 1;

    //Deklaracja drugiej funkcji i stworzenie nowego zakresu
    function dwa() {

        //Zakres metody jeden jest czescia metody dwa, więc wszystkie definicje będą przekazywane z zewnętrznego zakresu
        console.log(zmienna1);

        //Zadeklarowanie i przypisanie nowej zmiennej zmienna2
        var zmienna2 = 3;
    }

    //Wywołanie funkcji
    dwa();

}

//Wywołanie funkcji
jeden()