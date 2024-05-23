// Create a function that recursively counts the integer's number of digits.
// Examples

// count(318) ➞ 3

// count(-92563) ➞ 5

// count(4666) ➞ 4

// count(-314890) ➞ 6

// count(654321) ➞ 6

// count(638476) ➞ 6

// Notes

//     You are expected to solve this challenge via recursion.

function count(n) {
	return !n ? 1 : Math.abs(n) >= 1 ? 1 + count(n/10) : 0;
}

// const count = (n) => Math.abs(n) >= 1 ? 1 + count(n/10) : 0;

console.log(count(318)); // ➞ 3
console.log(count(-92563)); // ➞ 5
console.log(count(4666)); // ➞ 4
console.log(count(-314890)); // ➞ 6
console.log(count(654321)); // ➞ 6
console.log(count(638476)); // ➞ 6

// const count = n => Math.abs(n) < 10 ? 1 : 1 + count(n/10)
