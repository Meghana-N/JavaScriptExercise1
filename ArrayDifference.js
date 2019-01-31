
    var array1 = [1,21,44]
    var array2 = [43,21,1]
    var temporary = [];
    array1 = array1.toString().split(',').map(Number);
    array2 = array2.toString().split(',').map(Number);
    
    for (var i in array1) {
    if(!array2.includes(array1[i])) temporary.push(array1[i]);
    }
    for(i in array2) {
    if(!array1.includes(array2[i])) temporary.push(array2[i]);
    }
    console.log(temporary);