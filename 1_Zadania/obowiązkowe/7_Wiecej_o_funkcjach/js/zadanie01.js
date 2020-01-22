
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//Deklaracja funkcji
function sortArray() {

    //Definicja i przypisanie zmiennej
    var points = [41, 3, 6, 1, 114, 54, 64];

    //Wywołanie obiektowej metody tablicy - sortowanie
    //funkcja oceni, czy dwa elementy tablicy powinny być podmienione
    points.sort(function (a, b) {
        //Zwraca rezultat odejmowania dwóch elementów tablicy
        //jeśli wartość zwracana jest większa niż 0, zwracane elementy zostaną podmienione
        return a - b;
    });

    //Zwracanie powiązania tablicy z metody
    return points;
}

//Wywołanie funkcji
sortArray();
