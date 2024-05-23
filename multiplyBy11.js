// Given a positive number as a string, multiply the number by 11 and also return it as a string. However, there is a catch:

// You are NOT ALLOWED to simply cast the numeric string into an integer!

// Now, how is this challenge even possible? Despite this, there is still a way to solve it, and it involves thinking about how someone might multiply by 11 in their
// head. See the tips below for guidance.

// Examples

// multiplyBy11("11") ➞ "121"

// multiplyBy11("111111111") ➞ "1222222221"

// multiplyBy11("1213200020") ➞ "13345200220"

// multiplyBy11("1217197941") ➞ "13389177351"

// multiplyBy11("9473745364784876253253263723") ➞ "104211199012633638785785900953"

// Tip

// There is a simple trick to multiplying any two-digit number by 11 in your head:

//     Add the two digits together
//     Place the sum between the two digits!
//     Note if the total goes over, carry the sum on to the next digit


// 23 * 11
// Add together 2 and 3 to make 5
// Place 5 between the two digits to make 253

// 77 * 11
// Add together 7 and 7 to make 14
// Place 4 between the two digits to make 747
// Carry the 1 to make 847

function multiplyBy11(s,i=s.length-1,j=0,s_Array=[]) {

    s = [...s];

    if (i >= 0) {
        s_Array = s_Array.concat(+s[i] + (+s[i-1] || 0));
        if (+s_Array[j-1] > 9) {
            s_Array[j-1] = String(s_Array[j-1])[1];
            s_Array[j] += 1;

        }

        return multiplyBy11(s,--i,++j,s_Array);
    }

    return s_Array.reverse().concat(s[s.length-1]).join("");

}

console.log(multiplyBy11("11")) // ➞ "121"
console.log(multiplyBy11("111111111")) // ➞ "1222222221"
console.log(multiplyBy11("1213200020")) // ➞ "13345200220"
console.log(multiplyBy11("1217197941")) // ➞ "13389177351"
console.log(multiplyBy11("9473745364784876253253263723")) // ➞ "104211199012633638785785900953"

// function multiplyBy11(s, ans = s.slice(-1), i = s.length - 1, carry = 0) {
//     if (i >= 0) {
//       const n = +s[i] + (+s[i-1] || 0) + carry;
//       return multiplyBy11(s, (n % 10) + ans, i - 1, n / 10 | 0);
//     } else {
//       return (carry || "") + ans;
//     }
//   }


