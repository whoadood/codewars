// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

function solution(nums){
	if(nums == null || nums == undefined) return []
	return nums.sort((a,b)=>a-b)

}



console.log(solution([1,2,3,10,5]))			// [1,2,3,5,10]
console.log(solution(null))				// []
console.log(solution([]))				// []
console.log(solution([20, 2, 10]))			// [2,10,20]
console.log(solution([2, 20, 10]))			// [2,10,20]