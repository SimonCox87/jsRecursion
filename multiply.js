// Create a function that returns the product of two integers. This process of multiplication can be achieved via repetitive addition, thus, the process can be 
// done recursively.

// Examples

// multiply(10, 2) ➞ 20

// multiply(-51, -4) ➞ 204

// multiply(3, 9) ➞ 27

// multiply(-21, 5) ➞ -105

// multiply(1024, 7) ➞ 7168

// multiply(273, -6) ➞ -1638

// Notes

//     You're expected to solve this challenge using a recursive approach.    

function multiply(x, y, z=x, i=Math.abs(y)) {
    if (i>1){
        return multiply(x+z, y, z, --i);
    }

    if ((x < 0 && y < 0) || (x > 0 && y < 0)) {
        return -x;
    }

    return x;

}

console.log(multiply(10, 2)) // ➞ 20
console.log(multiply(-51, -4)) // ➞ 204
console.log(multiply(3, 9)) // ➞ 27
console.log(multiply(-21, 5)) // ➞ -105
console.log(multiply(1024, 7)) // ➞ 7168
console.log(multiply(273, -6)) // ➞ -1638

// let [numVector, resVector] = [
//     [[10, 2], [-51, -4], [3, 9], [-21, 5], [1024, 7], [273, -6], [0, 4],[-300,2]],
//     [20, 204, 27, -105, 7168, -1638, 0]
//   ]
//   for (let i = 0; i < numVector.length; i++) {
//     console.log(multiply(numVector[i][0],numVector[i][1]))
//   }

// function multiply(x, y) {
// 	if (y<0) return multiply(-x,-y)
// 	return y==0? 0 : x + multiply(x,y-1)
// }

// function multiply(x, y) {
// 	if(y<0){return multiply(-x,-y)}
// 	if(y===0){return 0}
//   return x+multiply(x,y-1)
	// }