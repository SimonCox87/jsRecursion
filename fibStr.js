// A Fibonacci string is a precedence of the Fibonacci series. It works with any two characters of the English alphabet (as opposed to the numbers 0 and 1 in the 
// Fibonacci series) as the initial items and concatenates them together as it progresses similarly to that of the Fibonacci series. See examples for more details.
// Examples

// fibStr(3, ["j", "h"]) ➞ "j, h, hj"

// fibStr(5, ["e", "a"]) ➞ "e, a, ae, aea, aeaae"

// fibStr(6, ["n", "k"]) ➞ "n, k, kn, knk, knkkn, knkknknk"

// Notes

//     All values for n will be at least 2.
//     It is expected from the challenge-takers to come up with a solution using the concept of recursion or the so-called recursive approach.

// function fib(n) {
//     return n > 2 ? fib(n-1) + fib(n-2) : 1
// }


// for (let i = 1; i < 11; i++) {
//     console.log(fib(i));
// }

function fibStr(n, str, i=n-2) {
    return i ? fibStr(n, str.concat(str[str.length-1] + str[str.length-2]),--i) : str.join(", ");
}

console.log(fibStr(3, ["j", "h"])); // ➞ "j, h, hj"
console.log(fibStr(5, ["e", "a"])); // ➞ "e, a, ae, aea, aeaae"
console.log(fibStr(6, ["n", "k"])); // ➞ "n, k, kn, knk, knkkn, knkknknk"

// const fibStr = (n, arr) => (n<=2) ? arr.join(', ') : fibStr(n-1, arr.concat(arr[arr.length-1]+arr[arr.length-2]))

// function fibStr(n, str) {
//     return n > 2 ? fibStr(--n, str.concat(str[str.length-1] + str[str.length-2])) : str.join(", ");
// }