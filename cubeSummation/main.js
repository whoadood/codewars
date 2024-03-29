// Write a function cubeSum(n, m) that will calculate a sum of cubes of numbers in a given range, starting from the smaller (but not including it) to the larger (including). The first argument is not necessarily the larger number.

// If both numbers are the same, then the range is empty and the result should be 0.

// Examples:

function cubeSum(n, m){
	let total = 0
	const arr = [n, m]
	const min = Math.min(...arr)
	const max = Math.max(...arr)
	for (let i = min + 1; i <= max; i++) {
		total += Math.pow(i,3)
	}
	return total
}




console.log(cubeSum(5, 0))		// 225
console.log(cubeSum(2, 3))		// 27