// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.
// Example:

// function Fighter(name, health, damagePerAttack) {
//         this.name = name;
//         this.health = health;
//         this.damagePerAttack = damagePerAttack;
//         this.toString = function() { return this.name; }
// }

class Fighter {
	constructor(name, health, damagePerAttack) {
		this.name = name,
		this.health = health,
		this.damagePerAttack = damagePerAttack
	}
}


function declareWinner(fighter1, fighter2, firstAttacker) {
	const fighterATurns = () => {
		return Math.ceil(fighter2.health / fighter1.damagePerAttack)
	}
	const fighterBTurns = () => {
		return Math.ceil(fighter1.health / fighter2.damagePerAttack)
	}
	if(fighterATurns() < fighterBTurns()) return fighter1.name
	if(fighterBTurns() < fighterATurns()) return fighter2.name
	if(fighterATurns() === fighterBTurns()) return firstAttacker
}

console.log((declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew")))		// "Lew"
console.log((declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry")))		// "Harry"
console.log((declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry")))		// "Harald"
console.log((declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald")))	// "Harald"
console.log((declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry")))	// "Harald"
console.log((declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald")))	// "Harald"