// A number is said to be Harshad if it's exactly divisible by the sum of its digits. Create a function that determines whether a number is a Harshad or not.
// Examples

// isHarshad(75) ➞ false
// // 7 + 5 = 12
// // 75 is not exactly divisible by 12
 
// isHarshad(171) ➞ true
// // 1 + 7 + 1 = 9
// // 9 exactly divides 171
 
// isHarshad(481) ➞ true

// isHarshad(89) ➞ false

// isHarshad(516) ➞ true

// isHarshad(200) ➞ true

// Notes

//     You are expected to solve this challenge via recursion.

// function isHarshad(n) {
// 	return !(n % [...String(n)].reduce((a,c) => a + parseInt(c,10),0));
// }

function isHarshad(n,m=[...String(n)],p=0) {
    return m.length ? isHarshad(n,m,p + +m.pop()) : !(n%p);
}

console.log(isHarshad(75)); // ➞ false
// // 7 + 5 = 12
// // 75 is not exactly divisible by 12
console.log(isHarshad(171)); // ➞ true
// // 1 + 7 + 1 = 9
// // 9 exactly divides 171
console.log(isHarshad(481)); // ➞ true
console.log(isHarshad(89)); // ➞ false
console.log(isHarshad(516)); // ➞ true
console.log(isHarshad(200)); // ➞ true

function isHarshad(n, m = 0, i = 0) {
	return `${n}`.length > i ? isHarshad(n, m + +`${n}`[i], i + 1) : n % m === 0;
}