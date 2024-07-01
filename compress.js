// The function is given an array of characters. Recursively compress the array into a string using the following rules. For each group of consecutively repeating 
// characters:

//     If the number of repeating characters is one, append the string with only this character.
//     If the number n of repeating characters x is greater than one, append the string with "x" + n.

// Examples

// compress(["t", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "s", "s", "s", "h"]) ➞ "te14s3h"

// compress(["a", "a", "b", "b", "c", "c", "c"]) ➞ "a2b2c3"

// compress(["a"]) ➞ "a"

// compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]) ➞ "ab12"

// compress(["a", "a", "a", "b", "b", "a", "a"]) ➞ "a3b2a2"

// Notes

//     You are expected to solve this challenge using the concept of recursion.

function compress(c,i=0,repeat=1,compression="") {
	if (i == c.length) {
        return compression;
  }
  
  if (c[i].length > 1){
    compression += [c[i][0],c[i].length].join("");
    return compress(c,++i,repeat,compression);
  }

  if (c[i].length == 1 && c[i] != c[i+1]) {
      compression+=c[i];
      if (repeat > 1) {
          compression+=repeat;
      }
      repeat = 1;
  }
  else {
      repeat+=1;
  }

  return compress(c,++i,repeat,compression);
}

console.log(compress(["t", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "s", "s", "s", "h"])) // ➞ "te14s3h"
console.log(compress(["a", "a", "b", "b", "c", "c", "c"])) // ➞ "a2b2c3"
console.log(compress(["a"])) // ➞ "a"
console.log(compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])) // ➞ "ab12"
console.log(compress(["a", "a", "a", "b", "b", "a", "a"])) // ➞ "a3b2a2"


// for (let i = 0; i < 20; i++) {
//   let [actual, expected] = [Array(), Array()]
//   for (let k = 0; k < Math.random() * 200 + 1; k++) {
//     let [c, n] = [String.fromCharCode(97 + k % 26),
//                   Math.round(Math.random() * 200 + 1)]
//     actual = [...actual, c.repeat(n)]
//     expected = [...expected, n > 1 ? c + n : c]

//   }
//   console.log(compress(actual)==expected.join(''),compress(actual),expected.join(""))


// }

// a31b38c92d27e141f36g67h46i161j56kl96m12n121o85p20q137r25s79t115u86
// a31b38c92d27e141f36g67h46i161j56k11l96m12n121o85p20q137r25s79t115u86

// a102b36c90d183e93f78g142h102i10j180k15l19m97n126op48
// a102b36c90d183e93f78g142h102i10j180k15l19m97n126o15p48

// a149b174c34d179e97f32g170h89i167j47k73l19m110n88o165p108q147rs55t157u3
// a149b174c34d179e97f32g170h89i167j47k73l19m110n88o165p108q147r18s55t157u3

console.log(compress("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkllllllllllllllllllllllllllllllllllllllllllmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnoooooooooooooooooooooooooooooooooooooooooppppppppppppppppppppppqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssttttttttttttttttttttttttttttttttuuuuuuvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvwxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxyyyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbb"))