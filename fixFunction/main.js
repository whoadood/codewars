// The function is not returning the correct values. Can you figure out why?

// Example (Input --> Output ):


function getPlanetName(id){
  switch(id){
    case 1:
      return 'Mercury'
      break;
    case 2:
      return 'Venus'
      break;
    case 3:
      return 'Earth'
      break;
    case 4:
      return 'Mars'
      break;
    case 5:
      return 'Jupiter'
      break;
    case 6:
      return 'Saturn'
      break;
    case 7:
      return 'Uranus'
      break;
    case 8:
      return 'Neptune'
      break;
  }
}


console.log(getPlanetName(2))		// 'Venus'
console.log(getPlanetName(5))		// 'Jupiter'
console.log(getPlanetName(3))		// 'Earth'