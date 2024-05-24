// Write a function that, given the startOfRange and endOfRange values, returns an array containing all the numbers inclusive to that range. See examples below.
// Examples

// reversibleInclusiveList(1, 5) ➞ [1, 2, 3, 4, 5]

// reversibleInclusiveList(2, 8) ➞ [2, 3, 4, 5, 6, 7, 8]

// reversibleInclusiveList(10, 20) ➞[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// reversibleInclusiveList(24, 17) ➞[24, 23, 22, 21, 20, 19, 18, 17]

// Notes

//     The sort order of the resulting array is dependent of the input values.
//     All inputs provided in the test scenarios are valid.
//     If startOfRange is greater than endOfRange, return an descendingly sorted array, otherwise, ascendingly sorted.
//     You are expected to solve this challenge via a recursive approach.

// function reversibleInclusiveList(startOfRange, endOfRange, incArray = [startOfRange]) {
// 	if (startOfRange < endOfRange) {
// 		return reversibleInclusiveList(++startOfRange,endOfRange,incArray.concat(startOfRange));

// 	}

// 	if (startOfRange > endOfRange) {
// 		return reversibleInclusiveList(--startOfRange,endOfRange,incArray.concat(startOfRange));

// 	}
	
// 	return incArray;
// }

function reversibleInclusiveList(startOfRange, endOfRange) {
	let posOrNeg = 1
	if (startOfRange > endOfRange){
		posOrNeg = -1
	}

	return startOfRange != endOfRange ? 
		[startOfRange,...reversibleInclusiveList(startOfRange + posOrNeg,endOfRange)] : [endOfRange]

}


console.log(reversibleInclusiveList(1, 5)) // ➞ [1, 2, 3, 4, 5]
console.log(reversibleInclusiveList(2, 8)) // ➞ [2, 3, 4, 5, 6, 7, 8]
console.log(reversibleInclusiveList(10, 20)) // ➞[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
console.log(reversibleInclusiveList(24, 17)) // ➞[24, 23, 22, 21, 20, 19, 18, 17]


