// A Fibonacci word is a specific sequence of binary digits (or symbols from any two-letter alphabet). The Fibonacci word is formed via repeated concatenation in the 
// same fashion that the Fibonacci numbers are formed via repeated addition.

// Create a function that takes a number n as an argument and returns the first n elements of the Fibonacci word sequence.
// Examples

// generateWord(1) ➞ "invalid"
// // if n < 2 then return "invalid".

// generateWord(3) ➞ "b, a, ab"

// generateWord(7) ➞ "b, a, ab, aba, abaab, abaababa, abaababaabaab"

// Notes

//     You are expected to solve this challenge via recursion.

function generateWord(n,word=["b","a"], i=n-2) {
	return n < 2 ? "invalid" : i ? generateWord(--n,word.concat(word[word.length-1] + 
		word[word.length-2]),--i) : word.join(", ");
}

console.log(generateWord(1)); // ➞ "invalid"
// if n < 2 then return "invalid".

console.log(generateWord(3)); // ➞ "b, a, ab"

console.log(generateWord(7)); // ➞ "b, a, ab, aba, abaab, abaababa, abaababaabaab"

// const generateWord = (n, w = ['b', 'a']) => {
// 	return n < 2 ? 'invalid' : w.length == n ? w.join(', ') :
// 		generateWord(n, [...w, w[w.length - 1] + w[w.length - 2]])
//   }

