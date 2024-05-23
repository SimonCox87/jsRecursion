// The nesting of arrays can be viewed indirectly as curves and barriers of the real data embedded in arrays, thus, defeats the very purpose of directly accessing 
// them thru indexes and slices. In this challenge, a function is required to flatten those curves (i.e. level, iron, compress, raze, topple) and expose those data 
// as a single array and not as an array of arrays.

// Examples

// flatten([[[[[["direction"], [372], ["one"], [[[[[["Era"]]]], "Sruth", 3337]]], "First"]]]])
// ➞ ["direction", 372, "one", "Era", "Sruth", 3337, "First"]

// flatten([[4666], [5394], [466], [[["Saskia", [[[[["DXTD"]], "Lexi"]]]]]]])
// ➞ [4666, 5394, 466, "Saskia", "DXTD", "Lexi"]

// flatten([[696], ["friend"], ["power"], [[[["Marcus"]]]], ["philus"]])
// ➞ [696, "friend", "power", "Marcus", "philus"]

// flatten([[["deep"], [[["ocean"]]], [["Marge"]], ["rase", 876]]])
// ➞ ["deep", "ocean", "Marge", "rase", 876]

// Notes

//     There are no empty arrays to handle.
//     You're expected to solve this challenge using a recursive approach.

function flatten(r) {
    if ([...r].some((i) => Array.isArray(i))) {
        return flatten(r.reduce((a,i) => a.concat(i),[]));
    }

    return r;  
      
}

    // return [...r].some((i) => Array.isArray(i)) ? flatten(r.reduce((a,i) => a.concat(i),[])) : r;

console.log(flatten([[[[[["direction"], [372], ["one"], [[[[[["Era"]]]], "Sruth", 3337]]], "First"]]]]));
// ➞ ["direction", 372, "one", "Era", "Sruth", 3337, "First"]

console.log(flatten([[4666], [5394], [466], [[["Saskia", [[[[["DXTD"]], "Lexi"]]]]]]]));
// ➞ [4666, 5394, 466, "Saskia", "DXTD", "Lexi"]

console.log(flatten([[696], ["friend"], ["power"], [[[["Marcus"]]]], ["philus"]]));
// ➞ [696, "friend", "power", "Marcus", "philus"]

console.log(flatten([[["deep"], [[["ocean"]]], [["Marge"]], ["rase", 876]]]));
// ➞ ["deep", "ocean", "Marge", "rase", 876]

// Iterate through each item in the unflattened array
// If item is an instanceof 'object' 
// If item of object is not instanceof object concatenate flattened array with element.
// Write out the whole process on a piece of paper.