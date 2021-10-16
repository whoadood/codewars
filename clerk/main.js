// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

// Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.




function tickets(peopleInLine){
  let answer = peopleInLine.reduce((a,b) =>{
	if(b === 25){
		return a + b
	}else{
		if(a + (b-25) > 0){
			return a + (b - 25)
		}else{
			return 'no'
		}
	}
	})
	return answer
}


console.log(tickets([25, 25, 50, 50]))		// yes
console.log(tickets([25, 100]))			// no