// The Farey sequence of order n is the set of all fractions with a denominator between 1 and n (reduced to its lowest terms and ordered ascendingly). Given an n, 
// write a function that returns the Farey sequence as an array with a string representation of each fraction of the form "numerator/denominator".
// Examples

// farey(1) ➞ ["0/1", "1/1"]

// farey(5) ➞ ["0/1", "1/5", "1/4", "1/3", "2/5", "1/2", "3/5", "2/3", "3/4", "4/5", "1/1"]

// farey(7) ➞ ["0/1", "1/7", "1/6", "1/5", "1/4", "2/7", "1/3", "2/5", "3/7", "1/2", "4/7", "3/5", "2/3", "5/7", "3/4", "4/5", "5/6", "6/7", "1/1"]

// Notes

//     The sequence should always start with "0/1" and end with "1/1".
//     It is expected from the challenge-takers to come up with a solution using the concept of recursion or the so-called recursive approach.
//     You can read on more topics about recursion (see Resources tab) if you aren't familiar with it yet or hasn't fully understood the concept behind it before 
//     taking up this challenge or unless otherwise.
//     There will be no exceptions to handle, all inputs are positive integers.

function farey(s,a=0,b=1,c=1,d=s,f=[`${a}/${b}`,`${c}/${d}`]) {
	let k = Math.floor((s + b)/d);
	
	new_C = (k*c)-a;
	new_D = (k*d)-b;

	return d==1 ? f : farey(s,a=c,b=d,c=new_C,d=new_D,f.concat(`${c}/${d}`));
}

console.log(farey(1)) // ➞ ["0/1", "1/1"]

console.log(farey(5)) // ➞ ["0/1", "1/5", "1/4", "1/3", "2/5", "1/2", "3/5", "2/3", "3/4", "4/5", "1/1"]

console.log(farey(7)) // ➞ ["0/1", "1/7", "1/6", "1/5", "1/4", "2/7", "1/3", "2/5", "3/7", "1/2", "4/7", "3/5", "2/3", "5/7", "3/4", "4/5", "5/6", "6/7", "1/1"]

// https://en.wikipedia.org/wiki/Farey_sequence
