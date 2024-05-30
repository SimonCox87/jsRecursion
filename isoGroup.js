// Write a function that extracts the max value of a number in an array. If there are two or more max values, return it as an array, otherwise, 
// return the number. This process could be relatively easy with some of the built-in Array functions, but the required approach is recursive.
// Examples

// isoGroup([31, 7, 2, 13, 7, 9, 10, 13]) ➞ 31

// isoGroup([1, 3, 9, 5, 1, 7, 9, -9]) ➞ [9, 9]

// isoGroup([97, 19, -18, 97, 36, 23, -97]) ➞ [97, 97]

// isoGroup([-31, -7, -13, -7, -9, -13]) ➞ [-7, -7]

// isoGroup([-1, -3, -9, -5, -1, -7, -9, -9]) ➞ [-1, -1]

// isoGroup([107, 19, -18, 79, 36, 23, 97]) ➞ 107

function isoGroup(arr,i=0,max=[-Infinity]) {
    if (i == arr.length){
        return max.length > 1 ? max : max[0];
    }
    if (arr[i] == max[0]) max.push(arr[i]);
    if (arr[i] > max[0]) max = [arr[i]];
	return isoGroup(arr,++i,max);
}

// console.log(isoGroup([31, 7, 2, 13, 7, 9, 10, 13])) // ➞ 31
// console.log(isoGroup([1, 3, 9, 5, 1, 7, 9, -9])) // ➞ [9, 9]
// console.log(isoGroup([97, 19, -18, 97, 36, 23, -97])) // ➞ [97, 97]
// console.log(isoGroup([-31, -7, -13, -7, -9, -13])) // ➞ [-7, -7]
// console.log(isoGroup([-1, -3, -9, -5, -1, -7, -9, -9])) // ➞ [-1, -1]
// console.log(isoGroup([107, 19, -18, 79, 36, 23, 97])) // ➞ 107

// const isoGroup = (r, m=Math.max(...r), x=[]) => {
//     if (r[0] == null) return x[1] ? x : x[0]
//     return isoGroup(r.slice(1), m, r[0] == m ? [...x, m] : x)
//   }