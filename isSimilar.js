// Create a function that recursively checks if each and every element in the first object is similar to that of the second object's (i.e. type, value, 
// index, key, etc.), returns true if it is and false otherwise.

// Objects referred to in this challenge are instances of Array, Map, or Object. An object's element can be another object within another object and so on. 
// Whilst this challenge can be equivocally easy with JSON.stringify, it is humbly by the author's intent that the concept of recursion is imposed.

// Examples

// isSimilar(["cars", "trains", ["roads", ["railways"]]], ["cars", "trains", ["roads", ["railways"]]]) ➞ true

// isSimilar({"pairs": [[3, 5], [1, 7], [2, 6], [0, 8]]}, {"pairs": [[3, 5], [1, 1], [2, 6], [0, 8]]}) ➞ false

// isSimilar({"Sam": 4, "Elliot": 4, "equality": true}, {"Sam": 4, "Elliot": 5, "equality": false}) ➞ false

// isSimilar([{"D": [0, 3]}, {"X": [1, 3]}, {"D": [3, 7]}], [{"D": [0, 3]}, {"X": [1, 3]}, {"D": [3, 7]}]) ➞ true

// Function to flatten array of objects
const flat_Arr_Obj = (arr) => {
    for (let i in arr) {
        arr[i] = Object.values(Object.assign([],arr[i]))
        .reduce((a,i)=> a.concat(i),[]);
    }
}

// function to flatten nested array and dictionary object
const flat_Obj = (arr) => Object.values(arr).reduce((a,i) => a.concat(i),[]);

function isSimilar(arrX,arrY) {
    // if arrX/arrY are arrays consisting of dictionaries
    if ([...Object.values(arrX)].every((i) => i instanceof Object && !Array.isArray(i))) {
        flat_Arr_Obj(arrX);
        flat_Arr_Obj(arrY);
    }
    // if arrX is a dictionary object or if arrX consists of Array instances       
    if (!Array.isArray(arrX) || [...Object.values(arrX)].some((i) => i instanceof Array)) {
        return isSimilar(flat_Obj(arrX),flat_Obj(arrY));
    }
    // compare equality between arrX and arrY
    return arrX.every((e,i) => e == arrY[i]);   
}

// console.log(isSimilar(["cars", "trains", ["roads", ["railways"]]], ["cars", "trains", ["roads", ["railways"]]])); // ➞ true
// console.log(isSimilar({"pairs": [[3, 5], [1, 7], [2, 6], [0, 8]]}, {"pairs": [[3, 5], [1, 1], [2, 6], [0, 8]]})); // ➞ false
// console.log(isSimilar({"Sam": 4, "Elliot": 4, "equality": true}, {"Sam": 4, "Elliot": 5, "equality": false})); // ➞ false
// console.log(isSimilar([{"D": [0, 3]}, {"X": [1, 3]}, {"D": [3, 7]}], [{"D": [0, 3]}, {"X": [1, 3]}, {"D": [3, 7]}])); // ➞ true

let [objVector, resVector] = [[
    [["cars", "trains", ["roads", ["railways"]]], ["cars", "trains", ["roads", ["railways"]]]],
    [{"pairs": [[3, 5], [1, 7], [2, 6], [0, 8]]}, {"pairs": [[3, 5], [1, 1], [2, 6], [0, 8]]}],
    [{"Sam": 4, "Elliot": 4, "equality": true}, {"Sam": 4, "Elliot": 5, "equality": false}],
    [[{"D": [0, 3]}, {"X": [1, 3]}, {"D": [3, 7]}], [{"D": [0, 3]}, {"X": [1, 3]}, {"D": [3, 7]}]],
    [{"Sam": 4, "Elliot": 6, "equality": false, "difference": 2}, {"Sam": 4, "Elliot": 6, "equality": false, "difference": 2}],
    [[3, [[4, 3, 2, 1], [3, 2, 1], [1]]], [3, [[1, 2, 3, 4], [1, 2, 3], [1]]]],
    [[{"D": [1, 4]}, {"E": [2, 6]}, {"E": [3, 6]}, {"P": [4, 6]}], [{"D": [1, 4]}, {"E": [2, 6]}, {"E": [3, 6]}, {"P": [4, 6]}]],
    [{"Peter": 6, "Paul": 6, "equality": true}, {"Peter": 6, "Paul": 6, "equality": true}],
    [{"r": 255, "g": 255, "b": 255}, {"r": 255, "g": 254, "b": 255}]],
    [true, false, false, true, true, false, true, true, false]]

for (let i = 0; i < objVector.length; i++) {
    console.log(isSimilar(objVector[i][0],objVector[i][1]));
}

// Check arrX and arrY elements for objects and keep reducing untill there are no objects present in arrX and arrY
// Could use two separate if statements for this.  One for arrX and one for arrY.
// At the end the return value is a comparison of the values of x and y.  Could use every fumction comparing each element of x and y.