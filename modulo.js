// The modulo operation can also be done by repetitive subtraction or addition. In this challenge, you're going to create a function that mimics such an operation 
// and returns the modulo of the two given numbers by recursively subtracting or adding them.

// Examples

// modulo(100, 25) ➞ 0

// modulo(-51, -4) ➞ -3

// modulo(3, 9) ➞ 3

// modulo(-21, 5) ➞ -1

// modulo(1024, 7) ➞ 2

// modulo(273, -6) ➞ 3

// Notes

//     There will be no zero-values for the modulo divisor.

function modulo(x, y,a = x, b = y) {
    a = Math.abs(a);
    b = Math.abs(b);

    if (a >= b) {
        return modulo(x, y, a - b, b);
    }

    return x < 0 ? -a : a;
    
}



console.log(modulo(100, 25)) // ➞ 0
console.log(modulo(-51, -4)) // ➞ -3
console.log(modulo(3, 9)) // ➞ 3
console.log(modulo(-21, 5)) // ➞ -1
console.log(modulo(1024, 7)) // ➞ 2
console.log(modulo(273, -6)) // ➞ 3

function modulo(x, y) {
	if (Math.abs(x) < Math.abs(y)) return x;
	if (x*y > 0) return modulo(x-y, y);
	else return modulo(x+y, y);
}

