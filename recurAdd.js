// Create a function that sums up all the elements in the array recursively. The use of the array's built-in reduce() function is not allowed, thus, the approach is recursive.
// Examples

// recurAdd([1, 2, 3, 4, 10, 11]) ➞ 31

// recurAdd([-3, 4, 11, 10, 21, 32, -9]) ➞ 66

// recurAdd([-21, -7, 19, 3, 4, -8]) ➞ -10

// Notes

//     You're expected to solve this challenge using a recursive approach.

function recurAdd(arr) {
	return arr.length ? arr.pop() + recurAdd(arr) : 0;
}

console.log(recurAdd([1, 2, 3, 4, 10, 11])); // ➞ 31
console.log(recurAdd([-3, 4, 11, 10, 21, 32, -9])); // ➞ 66
console.log(recurAdd([-21, -7, 19, 3, 4, -8])); // ➞ -10

// const recurAdd = a => a.length ? a[0] + recurAdd(a.slice(1)) : 0;
