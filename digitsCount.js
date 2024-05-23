// Create a function that will recursively count the number of digits of a number. Conversion of the number to a string is not allowed, thus, the approach is 
// recursive.
// Examples

// digitsCount(4666) ➞ 4

// digitsCount(544) ➞ 3

// digitsCount(121317) ➞ 6

// digitsCount(0) ➞ 1

// digitsCount(12345) ➞ 5

// digitsCount(1289396387328L) ➞ 13

// Notes

//     All inputs are integers but some are in exponential form, deal with it accordingly.
//     You are expected to come up with a solution using the concept of recursion or the so-called recursive approach.

function digitsCount(num,) {
	return Math.abs(num / 10) > 1 ?  1 + digitsCount(num/10) : 1;
}

console.log(digitsCount(4666)); // ➞ 4
console.log(digitsCount(544)); // ➞ 3
console.log(digitsCount(121317)); // ➞ 6
console.log(digitsCount(0)); // ➞ 1
console.log(digitsCount(12345)); // ➞ 5
console.log(digitsCount(1289396387328)); // ➞ 13
console.log(digitsCount(3.2e6));
console.log(digitsCount(-231.2e6));
console.log(digitsCount(314890e3));

// const digitsCount = n =>
//  Math.abs(n) < 10 ? 1 : digitsCount(Math.ceil(n / 10)) + 1;