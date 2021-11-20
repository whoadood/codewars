// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'


function switcheroo(x){
	let answer = x.split('').map(x => {
		if(x === 'a') return 'b'
		if(x === 'b') return 'a'
		return x
	})
	return answer.join('')
}


console.log(switcheroo('abc'))			// 'bac'
console.log(switcheroo('aaabcccbaaa'))		// 'bbbacccabbb'
console.log(switcheroo('ccccc'))		// 'ccccc'