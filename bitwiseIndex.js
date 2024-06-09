// Finding an even integer in an array is kind of trivial and superficial to most programming enthusiasts. This challenge will take it to the next level.

// Write a function that returns the largest even integer in an array with its corresponding index and the parity of that index, 
// but determining the parity of that index is limited to not using the modulo operator %. Therefore, devise a way to resolve it.

// Although these tasks are achievable with the use of some built-in Array functions, the purpose and intent of this challenge is for your to solve it recursively.
// Output Structure

// {"@odd|even index " + index_of_largest: largest_integer}

// Examples

// bitwiseIndex([107, 19, 36, -18, -78, 24, 97]) ➞ {"@even index 2": 36}

// bitwiseIndex([31, 7, 2, 13, 7, 9, 10, 13]) ➞ {"@even index 6": 10}

// bitwiseIndex([4, 4, 4, 4, 4, 4]) ➞ {"@even index 0": 4}

// bitwiseIndex([-31, -7, -13, -7, -9, -13]) ➞ "No even integer found!"

// Notes

//     The use of the modulo operator %, indexOf() and max() functions are restricted.

function bitwiseIndex(arr,largest_Even=-Infinity, index=0, i=0) {

	if (i < arr.length) {

		if (!(arr[i] & 1) && arr[i] > largest_Even) {
			largest_Even = arr[i];
			index = i;
		}

		return bitwiseIndex(arr,largest_Even,index,++i);
	}
	
	let odd_Even = !(index & 1) ? "even" : "odd";

	return largest_Even == -Infinity ? 
		"No even integer found!" : {[`@${odd_Even} index ${index}`] : largest_Even};
	
}

console.log(bitwiseIndex([107, 19, 36, -18, -78, 24, 97])) // ➞ {"@even index 2": 36}
console.log(bitwiseIndex([31, 7, 2, 13, 7, 9, 10, 13])) // ➞ {"@even index 6": 10}
console.log(bitwiseIndex([4, 4, 4, 4, 4, 4])) // ➞ {"@even index 0": 4}
console.log(bitwiseIndex([-31, -7, -13, -7, -9, -13])) // ➞ "No even integer found!"
console.log(bitwiseIndex([1, 128, 9, 56, -1, 7, 18, 49]))

// function bitwiseIndex(arr, i = 0, x = [0, -Infinity]) {
// 	if (i === arr.length) {
// 		if (x[1] === -Infinity) return "No even integer found!";
// 		return {[`@${["even", "odd"][x[0] & 1]} index ${x[0]}`]: x[1]}; // I like this
// 	}
// 	if (!(arr[i] & 1) && arr[i] > x[1]) x = [i, arr[i]];
// 	return bitwiseIndex(arr, i + 1, x);
// }