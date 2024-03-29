// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.


function hasUniqueChars(str){
	let arr = str.split('')
	let compArr = [...new Set(arr)]
	return arr.join('') === compArr.join('') ? true : false
}


console.log(hasUniqueChars("  nAa"))		// false		// because there are two spaces ' '
console.log(hasUniqueChars("abcdef")) 		// true
console.log(hasUniqueChars("aA"))		// true 	 	// case - sensitivity
console.log(hasUniqueChars("++-"))		// false		// because there are two '+'