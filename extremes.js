// Write a function that extracts the upper and lower bounds of the elements in the array, value-wise, including its corresponding index, 
// array-wise. Although these tasks are achievable with the use of some built-in Array functions, the purpose and intent of this challenge is 
// for your to solve it recursively.

// Output Structure

// [{index: lower_bound}, {index: upper_bound}]

// Examples

// extremes([107, 19, -18, -79, 36, 23, 97]) ➞ [{3: -79}, {0: 107}]

// extremes([31, 7, 2, 13, 7, 9, 10, 13]) ➞ [{2: 2}, {0: 31}]

// extremes([4, 4, 4, 4, 4, 4]) ➞ "No bounds!"

// Notes

//     Return "No bounds!" if the lower bound happens to be equal to its supposed upper bound (because logically and numerically, lower and 
//     upper bound values cannot be equal, thus, their respective names (see above example).
//     The use of Math's max() and min() functions are restricted.

function extremes(arr, i = 0, smallest = [0,Infinity], largest = [0,-Infinity]) {
    
    if (i < arr.length){
        
        if (arr[i] < smallest[1]) {
            smallest[0] = i;
            smallest[1] = arr[i];
            
        }
        if (arr[i] > largest[1]) {
            largest[0] = i; 
            largest[1] = arr[i];    
        }
        
        return extremes(arr,++i,smallest,largest);
    }
        
    return smallest[1] != largest[1] ? 
        [{[smallest[0]]:smallest[1]},{[largest[0]]:largest[1]}] : "No bounds!";  
}

// console.log(extremes([107, 19, -18, -79, 36, 23, 97])) // ➞ [{3: -79}, {0: 107}]
// console.log(extremes([31, 7, 2, 13, 7, 9, 10, 13])) // ➞ [{2: 2}, {0: 31}]
// console.log(extremes([4, 4, 4, 4, 4, 4])) // ➞ "No bounds!"

// let [numVectors, resVectors] = [[
//     [107, 19, -18, -79, 36, 23, 97],
//     [31, 7, 2, 13, 7, 9, 10, 13],
//     [4, 4, 4, 4, 4, 4],
//     [-31, -7, -13, -7, -9, -13],
//     [1, 3, 9, 5, -1, 7, 9, 49],
//     [63, 77, 13, 75, 91, 113],
//     [6, 6, 6, 6, 6, 6]], [
//     [{3: -79}, {0: 107}],
//     [{2: 2}, {0: 31}],
//     "No bounds!",
//     [{0: -31}, {1: -7}],
//     [{4: -1}, {7: 49}],
//     [{2: 13}, {5: 113}],
//     "No bounds!"
//   ]];

//   for (let i = 0; i < numVectors.length; i++){
//     console.log(extremes(numVectors[i]));
//   }

// Non recursive solution

// function extremes(arr) {
//     let bounds = [{},{}];
//     bounds[0][arr.indexOf(Math.min(...arr))] = Math.min(...arr);
//     bounds[1][arr.indexOf(Math.max(...arr))] = Math.max(...arr);

//     return bounds[0][0] != bounds[1][0] ? bounds : "No bounds!";

// }

// More concise solution

// function extremes(arr, p = 0, l = 0, u = 0) {
// 	if (p >= arr.length)
// 		return l === u ? "No bounds!" : [{[l]: arr[l]}, {[u]: arr[u]}];
// 	if (arr[p] < arr[l]) l = p;
// 	if (arr[p] > arr[u]) u = p;
// 	return extremes(arr, p + 1, l, u);
// }

// More concise solution

// function extremes(arr, p = 0, l = 0, u = 0) {
// 	if (p >= arr.length)
// 		return l === u ? "No bounds!" : [{[l]: arr[l]}, {[u]: arr[u]}];
// 	if (arr[p] < arr[l]) l = p;
// 	if (arr[p] > arr[u]) u = p;
// 	return extremes(arr, p + 1, l, u);
// }




