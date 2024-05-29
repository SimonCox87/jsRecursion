// A number is said to be Disarium if the sum of its digits raised to their respective positions is the number itself. Create a function that 
// determines whether a number is a Disarium or not.

// Examples

// isDisarium(75) ➞ false
// // 7^1 + 5^2 = 7 + 25 = 32

// isDisarium(135) ➞ true
// // 1^1 + 3^2 + 5^3 = 1 + 9 + 125 = 135

// isDisarium(518) ➞ false

// isDisarium(518) ➞ true

// isDisarium(544) ➞ false

// isDisarium(8) ➞ true

// isDisarium(466) ➞ false

// Notes

//     Position of the digit is not likely its index.
//     You are expected to solve this challenge via recursion.

function isDisarium(n,m=0,i=1) {
    n = String(n);
	return i <= n.length ? isDisarium(n,m+n[i-1]**i,++i): n == m;
}

// console.log(isDisarium(75)) // ➞ false
// // // 7^1 + 5^2 = 7 + 25 = 32
// console.log(isDisarium(135)) // ➞ true
// // // 1^1 + 3^2 + 5^3 = 1 + 9 + 125 = 135
// console.log(isDisarium(518)) // ➞ true
// console.log(isDisarium(544)) // ➞ false
// console.log(isDisarium(8)) // ➞ true
// console.log(isDisarium(466)) // ➞ false

let [numVector, resVector] = [
    [6, 75, 135, 466, 372, 175, 1, 696, 876, 89, 518, 598],
    [true, false, true, false, false, true, true, false, false, true, true, true]
  ]

for (let i = 0; i < numVector.length; i++){
    console.log([isDisarium(numVector[i]),resVector[i]]);
}