// Write a function that returns an array of strings populated from the slices of n-length characters of the given word (a slice after another while n-length applies onto the 
// word).

// Examples

// collect("intercontinentalisationalism", 6)
// ➞ ["ationa", "interc", "ntalis", "ontine"]

// collect("strengths", 3)
// ➞ ["eng", "str", "ths"]

// collect("pneumonoultramicroscopicsilicovolcanoconiosis", 15)
// ➞ ["croscopicsilico", "pneumonoultrami", "volcanoconiosis"]

// Notes

//     Ensure that the resulting array is lexicographically ordered.
//     Return an empty array if the given string is less than n.
//     You are expected to solve this challenge via a recursive approach.

function collect(s, n,) {
    s = s.slice(0,s.length - (s.length % n));
    return s ? [s.slice(0,n), ...collect(s.slice(n),n)].sort() : [];
}

console.log(collect("intercontinentalisationalism", 6));
// ➞ ["ationa", "interc", "ntalis", "ontine"]

console.log(collect("strengths", 3));
// // ➞ ["eng", "str", "ths"]

console.log(collect("pneumonoultramicroscopicsilicovolcanoconiosis", 15));
// // ➞ ["croscopicsilico", "pneumonoultrami", "volcanoconiosis"]

// function collect(s, n) {
// 	return s.length >= n ? [s.slice(0, n), ...collect(s.slice(n), n)].sort() : [];
// }

// function collect(s, n, res=[]) {
// 	if (s.length < n) {
// 		return res.sort();
// 	}
// 	return collect(s.slice(n), n, res.concat(s.slice(0, n)));
// }

// const collect = (s, n, k=Array()) => {
//     return s.length < n ? k.sort() :
//         collect(s.slice(n), n, [...k, s.slice(0, n)])
//   }

