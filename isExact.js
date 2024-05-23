// Create a recursive function that tests if a number is the exact upper bound of the factorial of n. If so, return an array of the exact factorial bound and n, or 
// otherwise, the string "Not an exact bound!".

// Examples

// isExact(6) ➞ [6, 3]

// isExact(24) ➞ [24, 4]

// isExact(125) ➞ "Not an exact bound!"

// isExact(720) ➞ [720, 6]

// isExact(1024) ➞ "Not an exact bound!"

// isExact(40320) ➞ [40320, 8]

// Notes

//     It is expected from the challenge-takers to come up with a solution using the concept of recursion or the so-called recursive approach.

function isExact(n,i=1, k=1) {
    return k < n ? isExact(n, ++i, k*=i) : n == k ? [n,i] : "Not an exact bound!"

    if(k < n) {
        return isExact(n, ++i, k *= i);
    }

    return n == k ? [n,i] : "Not an exact bound!";
}

console.log(isExact(6)); // ➞ [6, 3]
console.log(isExact(24)); // ➞ [24, 4]
console.log(isExact(125)); // ➞ "Not an exact bound!"
console.log(isExact(720)); // ➞ [720, 6]
console.log(isExact(1024)); // ➞ "Not an exact bound!"
console.log(isExact(40320)); // ➞ [40320, 8]

