// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice stronger than love :-)

// The input will always be in lowercase and never be empty.


function wordsToMarks(string){
	let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
	let arr = string.split('').map(x => alphabet.indexOf(x) + 1)
	return arr.reduce((acc, cur) => acc += cur, 0)
}



console.log(wordsToMarks('love'))		// 54
console.log(wordsToMarks('friendship'))		// 108
console.log(wordsToMarks("attitude"))		// 100
console.log(wordsToMarks("friends"))		// 75
console.log(wordsToMarks("family"))		// 66
console.log(wordsToMarks("selfness"))		// 99
console.log(wordsToMarks("knowledge"))		// 96