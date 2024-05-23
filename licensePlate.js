// Traveling through Europe one needs to pay attention to how the license plate in the given country is displayed. When crossing the border you need to park on the 
// shoulder, unscrew the plate, re-group the characters according to the local regulations, attach it back and proceed with the journey.

// Create a solution that can format the dmv number into a plate number with correct grouping. The function input consists of string s and group length n. The output 
// has to be upper case characters and digits. The new groups are made from right to left and connected by -. The original order of the dmv number is preserved.

// Examples

// licensePlate("5F3Z-2e-9-w", 4) ➞ "5F3Z-2E9W"

// licensePlate("2-5g-3-J", 2) ➞ "2-5G-3J"

// licensePlate("2-4A0r7-4k", 3) ➞ "24-A0R-74K"

// licensePlate("nlj-206-fv", 3) ➞ "NL-J20-6FV"

// Notes

//     You are expected to solve this challenge via a recursive approach.

function licensePlate(code, group, str="") {
    code = code.replace(/-/g,"").toUpperCase();
    return code ? code.length % group ? licensePlate(code.slice(1),group,str += code[0]) : 
    licensePlate(code.slice(group),group,str + `-${code.slice(0,group)}`) : str.replace(/^-/,"");
}


console.log(licensePlate("5F3Z-2e-9-w", 4)); // ➞ "5F3Z-2E9W"
console.log(licensePlate("2-5g-3-J", 2)); // ➞ "2-5G-3J"
console.log(licensePlate("2-4A0r7-4k", 3)); // ➞ "24-A0R-74K"
console.log(licensePlate("nlj-206-fv", 3)); // ➞ "NL-J20-6FV"

// function licensePlate(code, group, i = 0) {
// 	if (!code) return "";
// 	if (i === group) return licensePlate(code, group, 0) + "-";
// 	if (code[code.length - 1] === "-")
// 		return licensePlate(code.slice(0, -1), group, i);
// 	else
// 		return licensePlate(code.slice(0, -1), group, i + 1) + code[code.length - 1].toUpperCase();
// }

// const licensePlate = (s, n, w=null) => w == null ? licensePlate(s.replace(/-/g, ''), n, []) :
//   s.length ? licensePlate(s.slice(0, -n), n, [s.slice(-n), ...w]) : w.join('-').toUpperCase()