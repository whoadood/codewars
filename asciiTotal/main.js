// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

// examples:

// uniTotal("a") == 97 uniTotal("aaa") == 291


function uniTotal(){
	 return arguments[0].split('').reduce((i,s)=>s.charCodeAt(0)+i,0) 
	//return arguments[0].split('').map(x => x.charCodeAt()).reduce((acc, cur) => acc += cur,0)
}




console.log(uniTotal(""))				// 0
console.log(uniTotal("a"))				// 97
console.log(uniTotal("b"))				// 98
console.log(uniTotal("c"))				// 99
console.log(uniTotal("d"))				// 100
console.log(uniTotal("e"))				// 101
console.log(uniTotal("aaa"))				// 291
console.log(uniTotal("Mary Had A Little Lamb"))		// 1873