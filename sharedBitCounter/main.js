// Complete the method that returns true if 2 integers share at least two 1 bits, otherwise return false. For simplicity assume that all numbers are non-negative.
// Examples

//  7  =  0111 in binary
// 10  =  1010
// 15  =  1111

//     7 and 10 share only a single 1-bit (at index 2) --> false
//     7 and 15 share 3 1-bits (at indexes 1, 2, and 3) --> true
//     10 and 15 share 2 1-bits (at indexes 0 and 2) --> true

// Hint: you can do this with just string manipulation, but binary operators will make your life much easier.

function sharedBits(a, b) {
	const binaryA = a.toString(2)//.split('')
	const binaryB = b.toString(2)//.split('')
	console.log(binaryA)
	console.log(binaryB)
	console.log(makeLengthSix(binaryA))
	console.log(makeLengthSix(binaryB))
	console
	const answer = makeLengthSix(binaryA).split('').map((x, i) => x === binaryB[i] && x === '1' ? true : false)//.filter(x => x === true)
	
	return answer
}

function makeLengthSix(str) {
	const binaryArr = str.split('')
	while (binaryArr.length <= 6) {
		binaryArr.unshift('0')
	}
	return binaryArr.join('')
}





//console.log(sharedBits(2, 3))		// false
//console.log(sharedBits(7, 10))		// false
//console.log(sharedBits(43, 77))		// true
console.log(sharedBits(7, 15))		// true
console.log(sharedBits(23, 7))		// true