// Write a function that will return true if a given string (divided and grouped into a size) will contain a set of consecutive ascending numbers, otherwise, 
// return false.

// Examples

// ascending("123124125") ➞ true
// // Contains a set of consecutive ascending numbers
// // if grouped into 3's : 123, 124, 125

// ascending("101112131415") ➞ true
// // Contains a set of consecutive ascending numbers
// // if grouped into 2's : 10, 11, 12, 13, 14, 15

// ascending("32332432536") ➞ false
// // Regardless of the grouping size, the numbers can't be consecutive.

// ascending("326325324323") ➞ false
// // Though the numbers (if grouped into 3's) are consecutive but descending.

// ascending("666667") ➞ true
// // Consecutive numbers: 666 and 667.

// Notes

//     A number can consist of any number of digits, so long as the numbers are adjacent to each other, and the string has at least two of them.

function ascending(str,div = Math.floor(str.length / 2),l=0,r=div) {
	if (!(div)) {
		return false;
	}

	if (!(str.length % div)){
		if (r + div == str.length && str.slice(r,r+div) - str.slice(l,r) == 1) {
			return true;
		}
		if (str.slice(r,r+div) - str.slice(l,r) != 1) {
			return ascending(str,--div,l,r=div);
		}
		return ascending(str,div,l+=div,r+=div);
	}

	return ascending(str,--div,l,r=div);
}

console.log(ascending("123124125")) // ➞ true
// // Contains a set of consecutive ascending numbers
// // if grouped into 3's : 123, 124, 125

console.log(ascending("101112131415")) // ➞ true
// // Contains a set of consecutive ascending numbers
// // if grouped into 2's : 10, 11, 12, 13, 14, 15

console.log(ascending("32332432536")) // ➞ false
// // Regardless of the grouping size, the numbers can't be consecutive.

console.log(ascending("326325324323")) // ➞ false
// // Though the numbers (if grouped into 3's) are consecutive but descending.

console.log(ascending("666667")) // ➞ true
// // Consecutive numbers: 666 and 667.
