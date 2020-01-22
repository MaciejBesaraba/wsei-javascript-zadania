//zadanie 0

function checkArray(ddarray) { 
    var result = [];
    for (let i = 0; i < ddarray.length; i++) {
        const isNotOdd = ddarray[i].filter(number => number % 2 != 0).lengh > 0;
        result.push(!isNotOdd);

    }
    return result;
}

checkArray([
    [11,12],
    [42,2],
    [-4,-120],
    [0,0],
    [1,34],

])