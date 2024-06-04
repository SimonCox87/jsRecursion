// Write a function that will return true if a given string (divided and grouped into a size) will contain a set of consecutive numbers (regardless of 
// orientation: whether ascending or descending), otherwise, return false.

// Examples

// isConsecutive("121314151617") ➞ true
// // Contains a set of consecutive ascending numbers
// // if grouped into 2's : 12, 13, 14, 15, 16, 17

// isConsecutive("123124125") ➞ true
// // Contains a set of consecutive ascending numbers
// // if grouped into 3's : 123, 124, 125

// isConsecutive("32332432536") ➞ false
// // Regardless of the grouping size, the numbers can't be consecutive.

// isConsecutive("326325324323") ➞ true
// // Contains a set of consecutive descending numbers
// // if grouped into 3's : 326, 325, 324, 323

// isConsecutive("667666") ➞ true
// // Consecutive descending numbers: 667 and 666.

// isConsecutive("999897959493") ➞ false

// Notes

//     A number can consist of any number of digits, so long as the numbers are adjacent to each other, and the string has at least two of them.


function isConsecutive(number, divisor = Math.floor(number.length / 2)) {
    
    function compare(num, div, slices=[], left_Bound=0, right_Bound=div) {
        if (left_Bound < num.length - div) {
            if (Math.abs(num.slice(left_Bound,right_Bound) - num.slice(right_Bound,right_Bound+div)) != 1 ||
                slices.includes(num.slice(right_Bound,right_Bound+div))) {
                    
                    return false;
                }

            return compare(num,div,slices.concat(num.slice(left_Bound,right_Bound)),left_Bound+=div,right_Bound+=div);
    
        }
        return true;
    }

    if (divisor > 0) {
        if (!(number.length % divisor)) {
            if (compare(number,divisor)) {
                return true;

            }
        }
        return isConsecutive(number,--divisor);

    }
    return false;
}

console.log(isConsecutive("121314151617")) // ➞ true
// // Contains a set of consecutive ascending numbers
// // // if grouped into 2's : 12, 13, 14, 15, 16, 17
console.log(isConsecutive("123124125")) // ➞ true
// // // Contains a set of consecutive ascending numbers
// // // if grouped into 3's : 123, 124, 125
console.log(isConsecutive("32332432536")) // ➞ false
// // // Regardless of the grouping size, the numbers can't be consecutive.
console.log(isConsecutive("326325324323")) // ➞ true
// // // Contains a set of consecutive descending numbers
// // // if grouped into 3's : 326, 325, 324, 323
console.log(isConsecutive("667666")) // ➞ true
// // // Consecutive descending numbers: 667 and 666.
console.log(isConsecutive("999897959493")) // ➞ false
// console.log(isConsecutive("273274273274"));
// console.log(isConsecutive("1716171819181920"));
// console.log(isConsecutive("12131213"));

// Rudimentary method divide numbeber by 2 and then slice number by Math.floor(s / 2).  If the numbers are not descending decrement the slicing number
// by one.  Check that this number is divisble by new slicing number.  If it is not divisible decrement the number again by one (so return the function).  
// If the there are ascending (or descending) groups return true.  Default return is False, so if number is not ascending or descending

// Create a recursive function that finds all the divisors of a number that lives inside the main function.  Call this divisor.  This does a modulo calculation
// on the length of a number beginning with halving the number and decrementing this down by one and then storing all the divisors in an array

// The main recursive function will contain the array with which the divisors are stored (have a look at the qualify.js) file for this.  The main function
// will then split the string and check that it ascends or decends by one(?).  The moment that it doesn't ascend or descend, break the loop and move on to the 
// next divisor.  Keep on doing this.  If ascended/descended return true straightaway.

// If all checks are made return False, which will be the default return value.

// function isConsecutive(s, sl = Math.floor(s.length / 2), i=0, j=sl, ascend=true ) {
//     let s_Len = s.length;

//     if (i < s_Len - sl){
//         if(Math.abs(s.slice(i,j)-s.slice(j,j+sl)) != 1) {
//             ascend = false;
//         }
//         return isConsecutive(s,sl,i+=sl,j+=sl,sl_Arr,ascend)
//     }

// return ascend;
// }

// function isConsecutive(s, sl, i=0, j=sl) {
//     let s_Len = s.length;
//     return i < s_Len - sl ? Math.abs(s.slice(i,j)-s.slice(j,j+sl)) != 1 ? 
//         false : isConsecutive(s,sl,i+=sl,j+=sl) : true;
// }

// console.log(isConsecutive("121314151617",)) // ➞ true

// Tests

// let [actualParam, expected] = [
//     [
//       "121314151617", "123124125", "667666", "23242526", "444445", "1234567", "123412351236",
//       "57585960616263", "500001500002500003", "919920921", "12341235123612371238", "326325324323",
//       "54321", "56555453", "32332432536", "2324256", "1235", "121316", "12131213", "90090190290",
//       "35236237238", "999897959493", "171615141312119", "1716171819181920", "273274273274"
//     ], [
//       true, true, true, true, true, true, true, true, true, true, true, true, true, true,
//       false, false, false, false, false, false, false, false, false, false, false
//     ]
//   ]

// for (let i = 0; i < actualParam.length; i++) {
//     console.log([isConsecutive(actualParam[i]),expected[i]]);
// }

// function compare(num, div, slices=[], left_Bound=0, right_Bound=div) {
//     return left_Bound < num.length - div ? 
//         Math.abs(num.slice(left_Bound,right_Bound) - num.slice(right_Bound,right_Bound+div)) != 1 || 
//         slices.includes(num.slice(right_Bound,right_Bound+div)) ? false : 
//             compare(num,div, slices.concat(num.slice(left_Bound,right_Bound)),left_Bound+=div,right_Bound+=div) : true;
// }



// function compare(num, div, slices=[], left_Bound=0, right_Bound=div) {
//     if (left_Bound < num.length - div) {
//         if (Math.abs(num.slice(left_Bound,right_Bound) - num.slice(right_Bound,right_Bound+div)) != 1 ||
//             slices.includes(num.slice(right_Bound,right_Bound+div))) {
//                 return false;
//             }
//         return compare(num,div,slices.concat(num.slice(left_Bound,right_Bound)),left_Bound+=div,right_Bound+=div);

//     }
//     return true;
// }


