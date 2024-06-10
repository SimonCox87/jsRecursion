// Write a function that returns the smallest integer in an array with its corresponding index and its parity. Although these tasks can be equivocally 
// achievable with the use of some built-in and Array functions, the purpose and intent of this challenge is for you to solve it recursively.

// Output Structure

// {"@index " + index_of_smallest: smallest_integer, "parity": "odd|even"}

// Examples

// bitwiseOneZero([107, 19, -18, -79, 36, 23, 97]) ➞ {"@index 3": -79, "parity": "odd"}

// bitwiseOneZero([31, 7, 2, 13, 7, 9, 10, 13]) ➞ {"@index 2": 2, "parity": "even"}

// bitwiseOneZero([3, 3, 3, 3, 3, 3]) ➞ {"@index 0": 3, "parity": "odd"}

// Notes

//     The use of indexOf() and min() are restricted.

function bitwiseOneZero(arr, smallest=Infinity,i=0,index=0) {
	if (i < arr.length) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            index = i;
        }
        return bitwiseOneZero(arr,smallest,++i,index);
    }

    return {[`@index ${index}`]: smallest, "parity": ["even","odd"][smallest & 1]}
}

console.log(bitwiseOneZero([107, 19, -18, -79, 36, 23, 97])) // ➞ {"@index 3": -79, "parity": "odd"}
console.log(bitwiseOneZero([31, 7, 2, 13, 7, 9, 10, 13])) // ➞ {"@index 2": 2, "parity": "even"}
console.log(bitwiseOneZero([3, 3, 3, 3, 3, 3])) // ➞ {"@index 0": 3, "parity": "odd"}

