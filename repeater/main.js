// Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.
// Example: (Input1, Input2 --> Output)

// "a", 5 --> "aaaaa"



function repeater(string, n){
	let answer = string
	for(let i = 1; i < n; i++){
		answer += string
	}
	return answer
}

console.log(repeater('a', 5))		// 'aaaaa'
console.log(repeater('Na', 16))		// 'NaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNa'
console.log(repeater('Wub ', 6))		// 'Wub Wub Wub Wub Wub Wub '