// The museum of incredible dull things

// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.
// Task

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.


function removeSmallest(numbers) {
	let min = numbers.indexOf(Math.min(...numbers))
	return numbers.slice(0,min).concat(numbers.slice(min+1))

}







console.log(removeSmallest([1, 2, 3, 4, 5]))		// [2, 3, 4, 5]
console.log(removeSmallest([5, 3, 2, 1, 4]))		// [5, 3, 2, 4]
console.log(removeSmallest([2, 2, 1, 2, 1]))		// [2, 2, 2, 1]
console.log(removeSmallest([]))				// []


// [ 4, 8, 1, 3, 7, 2, 2, 0, 2, 5, 3, 1, 5, 3, 2, 8, 1, 9, 7, 3, 2, 5, 3, 6, 5, 3, 6, 8 ] to deeply equal [ 48, 137, 220, 25, 315, 328, 197, 325, 365, 368 ]