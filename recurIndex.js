// Create a recursive function that identifies the very first item that has recurred in the string argument passed. It returns the identified item with the index 
// where it first appeared and the very next index where it resurfaced - entirely as an object; or an empty object if the passed argument is either null, undefined, 
// empty string, or no recurring item exists.

// Examples

// recurIndex("KDXTDATTDD") ➞ {"D": [1, 4]}
// // D first appeared at index 1, resurfaced at index 4
// //  though D resurfaced yet again at index 8, it's no longer significant
// // T appeared and resurfaced at indices 3 and 6 but D completed the cycle first

// recurIndex("AKEDCBERSD") ➞ {"E": [2, 6]}

// recurIndex("DXKETRETXD") ➞ {"E": [3, 6]}

// recurIndex("ABCKPEPGBC") ➞ {"P": [4, 6]}

// recurIndex("ABCDEFGHIJ") ➞ {}

// recurIndex(undefined) ➞ {}

// Notes

//     It is expected from the challenge-takers to come up with a solution using the concept of recursion or the so-called recursive approach.

function recurIndex(s, s_Obj={}, i=0) {
  function earliest_Reocurr(s_Obj, i=1, s_Keys=Object.keys(s_Obj), earliest=s_Keys[0]) {

    if (i < s_Keys.length) {
      if (s_Obj[s_Keys[i]][1] < s_Obj[earliest][1]) {
        earliest = s_Keys[i];
      }
    return earliest_Reocurr(s_Obj,++i,s_Keys,earliest);
    }
    return {[earliest]: s_Obj[earliest]};
  
  }

  if (s) {
    if (s.slice(1).includes(s[0]) && !(s[0] in s_Obj)) {
     s_Obj[s[0]] = [i, s.slice(1).indexOf(s[0]) + i + 1];
    }
    return recurIndex(s.slice(1),s_Obj,++i);
  }

return Object.keys(s_Obj).length ? earliest_Reocurr(s_Obj) : {};
}


// console.log(recurIndex("AKEDCBERSD")) // ➞ {"E": [2, 6]}
// console.log(recurIndex("DXKETRETXD")) // ➞ {"E": [3, 6]}
// console.log(recurIndex("ABCKPEPGBC")) // ➞ {"P": [4, 6]}
// console.log(recurIndex("ABCDEFGHIJ")) // ➞ {}
// console.log(recurIndex(undefined)) // ➞ {}
// console.log(recurIndex("KDXTDATTDD")) // ➞ {"D": [1, 4]}
// console.log(recurIndex("DXTDDTXD")) // ➞ {"D": [4, 7]}
// console.log(recurIndex("ARXYZETUVXWVUECBSDER")) // ➞ {"V": [6, 9]}

let [strVectors, objRes] = [[
  'KDXTDATTDD', 'AKEDCBERSD', 'DXKETRETXD', 'ABCKPEPGBC',
  'ABCDEFGHIJ', undefined, 'DXTDDTXD', 'XYZETUVXWVU',
  'YZTQMNTERXHQRX', 'ARDECBSDER', '', 'ABCDEFGABCD', null, 'KLMNONMLK'],
  [{"D": [1, 4]}, {"E": [2, 6]}, {"E": [3, 6]}, {"P": [4, 6]},
  {}, {}, {"D": [0, 3]}, {"X": [0, 7]},
  {"T": [2, 6]}, {"D": [2, 7]}, {}, {"A": [0, 7]}, {}, {"N": [3, 5]}
]]

for (let i = 0; i < strVectors.length; i++) {
  console.log([strVectors[i],recurIndex(strVectors[i]), objRes[i]]);
}

// function recurIndex(s, prev=null) {
// 	if (prev == null) {
// 		prev = {} 
// 	}
// 	if (s==null || s == undefined || s=='') return {}
// 	if ([...Object.keys(prev)].includes(s[0])){
// 		return {[s[0]]: [prev[s[0]], [...Object.keys(prev)].length]}
// 	}
// 	prev[s[0]] = [...Object.keys(prev)].length
//   return recurIndex(s.slice(1),prev)
// }
