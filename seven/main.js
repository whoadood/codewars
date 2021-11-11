// Write a function that removes every lone 9 that is inbetween 7s.

// sevenAte9('79712312') => '7712312'
// sevenAte9('79797') => '777'


function sevenAte9(str){
	for(let i = 0; i < str.length; i++){
		if(str[i] == '9' && str[i-1] == '7' && str[i+1] == '7'){
			return str[i]
		}
	}

}

console.log(sevenAte9('165561786121789797'))		// '16556178612178977'
console.log(sevenAte9('797'))				// '77'
console.log(sevenAte9('7979797'))			// '7777'