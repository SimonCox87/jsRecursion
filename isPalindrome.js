// A palindrome is a series of letters or numbers that reads equivocally backwards. Write a recursive function that determines whether a given string is a 
// palindrome or not.

// Examples

// isPalindrome("Go hang a salami, I'm a lasagna hog!") ➞ true

// isPalindrome("This phrase, surely, is not a palindrome!") ➞ false

// isPalindrome("Eva, can I see bees in a cave?") ➞ true

function reg(str) {
    return str.toLowerCase().replace(/\W/g,"");
}

function isPalindrome(p,i=0,j=reg(p).length-1 ,pal=p[i]==p[j]) {
    p = reg(p);
    if (p.length <= 2) {
        return p[0] == p[p.length - 1];
    }
    return i != Math.floor((reg(p).length-1) / 2)-1 ? isPalindrome(p,++i,--j, p[i]==p[j]) : pal;
}

console.log(isPalindrome("hello"));
// console.log(isPalindrome("One true fortune, but no!"));
// console.log(isPalindrome("Can I be iconic?"));
// console.log(isPalindrome("abba"))
console.log(isPalindrome("Go hang a salami, I'm a lasagna hog!")); // ➞ true
// console.log(isPalindrome("This phrase, surely, is not a palindrome!")); // ➞ false
// console.log(isPalindrome("Eva, can I see bees in a cave?")); // ➞ true
// console.log(isPalindrome("Not a palindrome"));
// console.log(isPalindrome("Don't nod."))

// const recursive = f => (`${f}`.match(RegExp(`${f.name}`,'gm'))||[]).length > +(/function/.test(f))
// Test.assertNotEquals(recursive(isPalindrome), false, "Recursion is required!")

// let [strVector, resVector] = [
//   [
//     "Maneuquenam", "Not a palindrome", "A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!",
//     "Go hang a salami, I'm a lasagna hog!", "This phrase is really this!", "Red rum, sir, is murder.",
//     "Big step on no pets, Gib!", "One true fortune, but no!", "Don't nod.", "I did, did I?", "My gym.",
//     "Top spot.", "Was it a cat I saw?", "No lemon, no melon.", "Eva, can I see bees in a cave?",
//     "Can I be iconic?", "Madam I'm Adam.", "The man on the moon are them.", "Sit on a potato pan, Otis.",
//     "Truly, a classic cadillac!", "Able was I, ere I saw Elba.", "Step on no pets!"
//   ], [
//     true, false, true, true, false, true, true, false, true, true, true,
// 		true, true, true, true, false, true, false, true, false, true, true
//   ]
// ]
// for (let i in strVector){
//     console.log(`${strVector[i]} => ${isPalindrome(strVector[i])} => ${resVector[i]}`);
// }

// One true fortune, but no! => true => false
// Can I be iconic? => true => false

// function isPalindrome(p) {
// 	p = p.toLowerCase().replace(/\W/g,'')
// 	if (p.length <2) return true
// 	return p[0] == p.slice(-1)[0] && isPalindrome(p.slice(1,-1))
// }

// function isPalindrome(p) {
//     var p = p.replace(/\W/g,'').toLowerCase();
//       if(p.length < 2) return true;
//       if(p[0] === p.slice(-1)) return isPalindrome(p.slice(1,-1))
//       return false;;	
//   }

// function isPalindrome(p) {
// 	p = p.toLowerCase().replace(/[^a-z]/g, '');
// 	if (p.length <= 1) {
// 		return true;
// 	}
// 	return p[0] === p[p.length-1] && isPalindrome(p.slice(1, -1));
// }
