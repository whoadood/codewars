// Description:

// Move all exclamation marks to the end of the sentence
// Examples

// remove("Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi Hi!!"
// remove("Hi! Hi! Hi!") === "Hi Hi Hi!!!"
// remove("Hi! !Hi Hi!") === "Hi Hi Hi!!!"
// remove("Hi! Hi!! Hi!") === "Hi Hi Hi!!!!"

function remove(s){
	let split = s.split('')
	let filtered = split.filter(x => x !== '!')
	return filtered
}


console.log(remove("Hi!"))			// "Hi!")
console.log(remove("Hi! Hi!"))			// "Hi Hi!!")
console.log(remove("Hi! Hi! Hi!"))		// "Hi Hi Hi!!!")
console.log(remove("Hi! !Hi Hi!"))		// "Hi Hi Hi!!!")
console.log(remove("Hi! Hi!! Hi!"))		// "Hi Hi Hi!!!!")