// Write a recursive function that will return the longest word in a sentence. In cases where more than one word is found, return the first one.
// Examples

// findLongest("I will and ever will be gratefully and perpetually loving you Tesh!😘") ➞ "perpetually"

// findLongest("A thing of beauty is a joy forever.") ➞ "forever"

// findLongest("Forgetfulness is by all means powerless!") ➞ "forgetfulness"

// findLongest("The word strengths is the longest and most commonly used word with a single vowel.") ➞ "strengths"

// Notes

//     Special characters and symbols don't count as part of the word.

// Function to filter out special characters from a string including emojis.
const filter_func = (str) => {
    str = str.replace(/(?:'.+)|[$&+,:;=?@#|'<>.^*()%!-""/`¬_[{}~£]|]/g,"")
        .replace(
            /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,"");
    
    return str;
}
 
// Recursive function to find the longest word in the sentence
function findLongest(sentence,filtered_word = "",word = "",i=0) {

    filtered_word = filter_func(sentence).toLowerCase().split(" ");

    if (i == filtered_word.length){
        return word;
    }

    if (filtered_word[i].length > word.length){
        word = filtered_word[i];
    }

    return findLongest(sentence,filtered_word,word, ++i);
}

// console.log(filter_func("they're")); // ➞ "perpetually"

console.log(findLongest("I will and ever will be gratefully and perpetually loving you Tesh!😘")); // ➞ "perpetually"
console.log(findLongest("A thing of beauty is a joy forever.")); // ➞ "forever"
console.log(findLongest("Forgetfulness is by all means powerless!")); // ➞ "forgetfulness"
console.log(findLongest("The word strengths is the longest and most commonly used word with a single vowel.")); // ➞ "strengths"

// // Write a separate function that replaces special characters

let [strVector, resVector] = [[
	"I will and ever will be gratefully and perpetually loving you Tesh!😘",
	"Hello darkness my old friend.", "Yourself is your soul's captain and fate's master.",
	"The pretty daughter's toy, a doll, is as pretty as her.",
	"A thing of beauty is a joy forever.", "Forgetfulness is by all means powerless!",
	"\"Strengths\" is the longest and most commonly used word that contains only a single vowel."
], [
  "perpetually", "darkness", "yourself", "daughter", "forever", "forgetfulness", "strengths"
]]

for (let i = 0; i < strVector.length; i++) {
    console.log([findLongest(strVector[i]),resVector[i]])
};

