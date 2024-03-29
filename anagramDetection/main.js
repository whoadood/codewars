// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
// Examples

//     "foefet" is an anagram of "toffee"

//     "Buckethead" is an anagram of "DeathCubeK"

// write the function isAnagram
var isAnagram = function(test, original) {
	const arrTest = test.toLowerCase().trim().split('')
	const arrOrig = original.toLowerCase().trim().split('')
	const areSameWord = test !== original
	const equalLengths = test.length === original.length
	const sameChar = arrTest.every(x => arrOrig.includes(x))
	const sameCahrOpp = arrOrig.every(x => arrTest.includes(x))
	return equalLengths && sameChar && areSameWord && sameCahrOpp ? true : false
};



console.log(isAnagram("foefet", "toffee"))				//	 true
console.log(isAnagram("Buckethead", "DeathCubeK"))			//	 true
console.log(isAnagram("Twoo", "WooT"))				//	 true
console.log(isAnagram("dumble", "bumble"))			//	 false
console.log(isAnagram("ound", "round"))				//	 false
console.log(isAnagram("apple", "pale"))				//	 false
console.log(isAnagram('lisa', 'lisa'))				// 	 false
//console.log(isAnagram('trouble', 'brubble'))