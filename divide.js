// Create a function that returns the integral part from the result of a division between two numbers. This process of division can be achieved via repetitive 
// subtraction, thus, it can be done recursively.

// Examples

// divide(10, 2) ➞ 5

// divide(-51, -4) ➞ 12

// divide(3, 9) ➞ 0

// divide(-21, 5) ➞ -4

// divide(1024, 7) ➞ 146

// divide(273, -6) ➞ -45

// Notes

//     There will be no zero-values for the divisor.
//     You're expected to solve this challenge using a recursive approach.

function divide(x, y, i=0, a=x, b=y) {
	x = Math.abs(x);
	y = Math.abs(y);

	if (x>=y) {
		return divide(x-y, y, ++i, a, b);
	}

	if ((a < 0 && b < 0) || (a > 0 && b > 0)) {
		return i
	}

	return -i;
}



// Write if statement (x-(+y if y is < 0 and so on)).  Work out the logic.
console.log(divide(10, 2)); // ➞ 5

console.log(divide(-51, -4)); // ➞ 12

console.log(divide(3, 9)); // ➞ 0

console.log(divide(-21, 5)); // ➞ -4

console.log(divide(1024, 7)); // ➞ 146

console.log(divide(273, -6)); // ➞ -45


// function divide(x, y) {
// 	if (y<0) return divide(-x, -y)
// 	if (x<0) return -divide(-x,y)
// 	return x<y? 0 : 1+divide(x-y,y)
// }

