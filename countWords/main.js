// Kate likes to count words in text blocks. By words she means continuous sequences of English alphabetic characters (from a to z ). Here are examples:

// Hello there, little user5453 374 ())$. I’d been using my sphere as a stool. Slow-moving target 839342 was hit by OMGd-63 or K4mp. contains "words" ['Hello', 'there', 'little', 'user', 'I', 'd', 'been', 'using', 'my','sphere', 'as', 'a', 'stool', 'Slow', 'moving', 'target', 'was', 'hit', 'by', 'OMGd', 'or', 'K', 'mp']

// Kate doesn't like some of words and doesn't count them. Words to be excluded are "a", "the", "on", "at", "of", "upon", "in" and "as", case-insensitive.

// Today Kate's too lazy and have decided to teach her computer to count "words" for her.
// Example Input 1

// Hello there, little user5453 374 ())$.
// Example Output 1

// 4
// Example Input 2

// I’d been using my sphere as a stool. I traced counterclockwise circles on it with my fingertips and it shrank until I could palm it. My bolt had shifted while I’d been sitting. I pulled it up and yanked the pleats straight as I careered around tables, chairs, globes, and slow-moving fraas. I passed under a stone arch into the Scriptorium. The place smelled richly of ink. Maybe it was because an ancient fraa and his two fids were copying out books there. But I wondered how long it would take to stop smelling that way if no one ever used it at all; a lot of ink had been spent there, and the wet smell of it must be deep into everything.
// Example Output 2

// 112

function wordCount(s) {
	const exceptions = ["a", "the", "on", "at", "of", "upon", "in", "as"]
	//let ron = s.replace(`'`, '')
	//let arr = ron.replace(/\W|\d/gi, ',').split(',').filter(x => x.length >= 1)
	//return arr.filter(x => exceptions.includes(x) === false)
	let close = s.split(/\W|\d/gm).filter(x => x !== '')
	return close.filter(x => exceptions.includes(x) === false).length
}

//console.log(wordCount('hello there on the comp of at upon'))				// 3
//console.log(wordCount("hello there"))							// 2
//console.log(wordCount("hello there and a hi"))						// 4
//console.log(wordCount("I'd like to say goodbye"))					// 6
//console.log(wordCount("Slow-moving user6463 has been here"))				// 6
//console.log(wordCount("%^&abc!@# wer45tre"))						// 3
//console.log(wordCount("abc123abc123abc"))						// 3
//console.log(wordCount("Really2374239847 long ^&#$&(*@# sequence"))			// 3
let longText = "I’d been using my sphere as a stool. I traced counterclockwise circles on it with my fingertips and it shrank until I could palm it. My bolt had shifted while I’d been sitting. I pulled it up and yanked the pleats straight as I careered around tables, chairs, globes, and slow-moving fraas. I passed under a stone arch into the Scriptorium. The place smelled richly of ink. Maybe it was because an ancient fraa and his two fids were copying out books there. But I wondered how long it would take to stop smelling that way if no one ever used it at all; a lot of ink had been spent there, and the wet smell of it must be deep into everything."
console.log(wordCount(longText))							// 112