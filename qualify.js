// In this challenge, we'll take recursion to the next level, where we will embed a recursive function within a recursive function.

// Write a function that sorts the strings in an array (if the string is a palindrome, it will become part of the sorted array) and finds the longest non-palindromic 
// string.

// Although these tasks are achievable with the use of some built-in Array functions, the purpose and intent of this challenge is for you to solve it recursively.
// Output Structure

// {longest: longest_non_palindromic, length: longest_length, palindromes: [...palindromic_strings]}

// Examples

// qualify(["wow", "relevance", "radar", "soundly", "intelligence", "racecar", "gradually"]) ➞ 
// {"longest": "intelligence", "length": 12, "palindromes": ["racecar", "radar", "wow"]}

// qualify(["persistence", "anna", "civic", "perseverance", "kayak", "irrefutability"]) ➞ 
// {"longest": "irrefutability", "length": 14, "palindromes": ["anna", "civic", "kayak"]}

// qualify(["level", "resistance", "madam", "arrogance", "unconsiderably", "mom", "noon"]) ➞ 
// {"longest": "unconsiderably", "length": 14, "palindromes": ["level", "madam", "mom", "noon"]}

// Notes

//     All items in the array are lowercase.
//     In cases where two longest words are found, return the first.
//     The use of reduce(), reduceRight(), map(), filter(), indexOf() and max() functions are restricted.

// function palindromes(s, l=0, r=s.length-1) {

//     return l<r ? s[l] != s[r] ? false : palindromes(s, ++l, --r) : true;
//     // if (l<r) {
//     //     if (s[l] != s[r]) {
//     //         return false;
//     //     }
//     //     else {
//     //         return palindromes(s, ++l, --r);
//     //     }
//     // }

//     // return true;
// }

// console.log(palindromes("intelligence"))

// function longest(arr, i = 0, word="") {

//     if (i == arr.length) {
//         return {"longest" : word, "length" : word.length};
//     }
//     if (arr[i].length > word.length) {
//         word = arr[i];
//     }
//     return longest(arr, ++i, word);
// }

// console.log(longest(["wow", "relevance", "radar", "soundly", "intelligence", "racecar", "gradually"]))

function qualify(arr,i=0, word="",pals=[]) {
	function palindromes(s, l=0, r=s.length-1) {
		return l<r ? s[l] != s[r] ? false : palindromes(s, ++l, --r) : true;
	}

    if (i < arr.length) {
        if (arr[i].length > word.length) {
            word = arr[i];
        }

        if (palindromes(arr[i])) {
            pals.push(arr[i]);
        }

        return qualify(arr, ++i, word, pals);    
    }
    
	return {"longest" : word, "length" : word.length, "palindromes" : pals.sort()};
}

console.log(qualify(["wow", "radar", "soundly", "intelligence", "racecar", "gradually"])) // ➞ 
// // {"longest": "intelligence", "length": 12, "palindromes": ["racecar", "radar", "wow"]}
console.log(qualify(["persistence", "anna", "civic", "perseverance", "kayak", "irrefutability"])) // ➞ 
// // {"longest": "irrefutability", "length": 14, "palindromes": ["anna", "civic", "kayak"]}
console.log(qualify(["level", "resistance", "madam", "arrogance", "unconsiderably", "mom", "noon"])) // ➞ 
// // {"longest": "unconsiderably", "length": 14, "palindromes": ["level", "madam", "mom", "noon"]}
