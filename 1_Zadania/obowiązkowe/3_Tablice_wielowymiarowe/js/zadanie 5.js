// zadanie 5

function create2DArray(rows, columns){
    var counter = 1;
    var array1 = [];

    for(let i = 0; i < rows; i++){
        var array2 = [];
        for(let j = 0; j < columns; j++){
        array2.push(counter);
        counter++;

        }
        array1.push(array2);
    }
    return array1;
}

create2DArray(4,4); 