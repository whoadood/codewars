// Introduction

// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.
// Task

// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1

// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1

// The other letters don't have power and are only victims.
// Example

// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!

// Alphabet war Collection

function alphabetWar(fight){
	const right = {
		'm': 4,
		'q': 3,
		'd': 2,
		'z': 1
	}
	const left = {
		'w': 4,
		'p': 3,
		'b': 2,
		's': 1
	}
	
	let fightArr = fight.split('')

	let rightPow = 0
	let leftPow = 0

	let rightFighters = fightArr.filter(x => {
		return right[x]
	}).map(x => right[x])//.reduce((acc, cur) => acc += cur)

	let leftFighters = fightArr.filter(x => {
		return left[x]
	}).map(x => left[x])//.reduce((acc, cur) => acc += cur)
	
	if(rightFighters.length > 0){
		rightPow = rightFighters.reduce((acc, cur) => acc += cur)
	}

	if(leftFighters.length > 0){
		leftPow = leftFighters.reduce((acc, cur) => acc += cur)
	}

	if(rightPow > leftPow) return 'Right side wins!'
	if(leftPow > rightPow) return 'Left side wins!'
	return `Let's fight again!`
	//return "Let's fight again!"
}

console.log( alphabetWar("z"))			// "Right side wins!" );
console.log( alphabetWar("zdqmwpbs"))		// "Let's fight again!" );
console.log( alphabetWar("zzzzs"))		// "Right side wins!" );
console.log( alphabetWar("wwwwww"))		// "Left side wins!" );