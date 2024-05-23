// Create a function that will build a staircase using the underscore _ and hash # symbols. A positive value denotes the staircase's upward direction and 
// downwards for a negative value.

// Examples

// staircase(3) ➞ "__#\n_##\n###"
// __#
// _##
// ###

// staircase(7) ➞ "______#\n_____##\n____###\n___####\n__#####\n_######\n#######"
// ______#
// _____##
// ____###
// ___####
// __#####
// _######
// #######

// staircase(2) ➞ "_#\n##"
// _#
// ##

// staircase(-8) ➞ "########\n_#######\n__######\n___#####\n____####\n_____###\n______##\n_______#"
// ########
// _#######
// __######
// ___#####
// ____####
// _____###
// ______##
// _______#

// Notes

//     All inputs are either positive or negative values.
//     The string to be returned should be adjoined with the newline character \n.
//     You're expected to solve this challenge using a recursive approach.

function staircase(n, i=0, str="") {
	return n > 0  && n != i ? staircase(n, ++i, str + "_".repeat(n-i) + "#".repeat(i) + "\n") :
		n < 0 && Math.abs(n) != 0? staircase(++n,++i,str + 
			"_".repeat(i-1) + "#".repeat(Math.abs(n-1))+ "\n") : str.replace(/\n$/,"");
}

console.log(staircase(3)) // ➞ "__#\n_##\n###"
// __#
// _##
// ###

// console.log(staircase(7)) // ➞ "______#\n_____##\n____###\n___####\n__#####\n_######\n#######"
// ______#
// _____##
// ____###
// ___####
// __#####
// _######
// #######

// console.log(staircase(2)) // ➞ "_#\n##"
// _#
// ##

// console.log(staircase(-8)) // ➞ "########\n_#######\n__######\n___#####\n____####\n_____###\n______##\n_______#"
// ########
// _#######
// __######
// ___#####
// ____####
// _____###
// ______##
// _______#

// function staircase(n, m = n) {
// 	if (m === 0)
// 	  return "";
// 	else if (m > 0)
// 	  return ("_".repeat(m - 1) + "#".repeat(n - m + 1) + "\n" + staircase(n, m - 1)).trim();
// 	else
// 	  return ("_".repeat(m - n) + "#".repeat(-m) + "\n" + staircase(n, m + 1)).trim();
//   }