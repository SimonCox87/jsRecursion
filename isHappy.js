// A happy number is a number which yields a 1 by repeatedly summing up the square of its digits. If such a process results in an endless cycle of numbers 
// containing 4, the number is said to be an unhappy number.

// Create a function that accepts a number and determines whether the number is a happy number or not. Return true if so, false otherwise.
// Examples

// isHappy(67) ➞ false

// isHappy(89) ➞ false

// isHappy(139) ➞ true

// isHappy(1327) ➞ false

// isHappy(2871) ➞ false

// isHappy(3970) ➞ true

// Notes

//     You are expected to solve this challenge via recursion.

function isHappy(n) {
    return n == 1 ? true : n == 4 ? false : 
        isHappy([...String(n)].reduce((a,i) => a + Number(i ** 2),0));	
}

console.log(isHappy(67)); // ➞ false
console.log(isHappy(89)); // ➞ false
console.log(isHappy(139)); // ➞ true
console.log(isHappy(1327)); // ➞ false
console.log(isHappy(2871)); // ➞ false
console.log(isHappy(3970)); // ➞ true
