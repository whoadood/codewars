// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.
// Valid inputs examples:

// Examples of valid inputs:
// 1.2.3.4
// 123.45.67.89

// Invalid input examples:

// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089

// Notes:

//     Leading zeros (e.g. 01.02.03.04) are considered invalid
//     Inputs are guaranteed to be a single string


function isValidIP(str) {
	let arr = str.split('.')
	console.log()
	if(arr.length !== 4 && arr.every(x => x.length >= 1)) return false
	if(arr.join('') !== arr.join('').trim()) return false
	if(!arr.every(x => x <= 255 && x >= 0)) return false
	if(arr.every(x => x.length === 3 && Number(x) < 100)) return false
	//if(arr.every(x => Number(x.charAt(0)) === 0 && x.length > 1)) return false
	if(arr.every(x => x.match(/[a-zA-Z]/gm))) return false
	return true
}

//console.log(isValidIP("0.0.0.0"))		// true
//console.log(isValidIP("12.255.56.1"))		// true
//console.log(isValidIP("137.255.156.100"))	// true
//console.log(isValidIP(''))			// false
//console.log(isValidIP('abc.def.ghi.jkl'))	// false
//console.log(isValidIP('123.456.789.0'))		// false
//console.log(isValidIP('12.34.56'))		// false
//console.log(isValidIP('01.02.03.04'))		// false
//console.log(isValidIP('256.1.2.3'))		// false
//console.log(isValidIP('1.2.3.4.5'))		// false
//console.log(isValidIP('123,45,67,89'))		// false
//console.log(isValidIP('1e0.1e1.1e2.2e2'))	// false
//console.log(isValidIP(' 1.2.3.4'))		// false
//console.log(isValidIP('1.2.3.4 '))		// false
//console.log(isValidIP('12.34.56.-7'))		// false
//console.log(isValidIP('1.2.3.4\n'))		// false
//console.log(isValidIP('\n1.2.3.4'))		// false
console.log(isValidIP('201.012.208.220'))	// false
console.log(isValidIP('212.190..123'))		// false