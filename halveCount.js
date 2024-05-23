// Given two integers a and b, return how many times a can be halved while still being greater than b.
// Examples

// halveCount(4666, 544) ➞ 3
// // (4666 -> 2333 -> 1166.5 -> 583.25)

// halveCount(466, 54) ➞ 3
// // (466 -> 233 -> 116.5 -> 58.25)

// halveCount(1324, 98) ➞ 3
// // (1324 -> 662 -> 331 -> 165.5)

// halveCount(624, 8) ➞ 6
// // (624 -> 312 -> 156 -> 78 -> 39 -> 19.5 -> 9.75)

// halveCount(1000, 3) ➞ 8
// // (1000 -> 500 -> 250 -> 125 -> 62.5 -> 31.25 -> 15.625 -> 7.8125 -> 3.90625)

// Notes

//     Integer a will always be (at least) greater than the twice of b.
//     You are expected to solve this challenge via a recursive approach.

function halveCount(a, b, c=0) {
	return b + b < a ? halveCount(a/2,b,++c) : c;
}

console.log(halveCount(4666, 544)); // ➞ 3
// // (4666 -> 2333 -> 1166.5 -> 583.25)
console.log(halveCount(466, 54)); // ➞ 3
// // (466 -> 233 -> 116.5 -> 58.25)
console.log(halveCount(1324, 98)); // ➞ 3
// // (1324 -> 662 -> 331 -> 165.5)
console.log(halveCount(624, 8)); // ➞ 6
// // (624 -> 312 -> 156 -> 78 -> 39 -> 19.5 -> 9.75)
console.log(halveCount(1000, 3)); // ➞ 8
// // (1000 -> 500 -> 250 -> 125 -> 62.5 -> 31.25 -> 15.625 -> 7.8125 -> 3.90625)

// function halveCount(a, b) {
// 	return a > b ? 1 + halveCount(a / 2, b) : -1;
// }