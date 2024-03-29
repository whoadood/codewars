// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// hello "john"   => "Hello, John!"
// hello "aliCE"  => "Hello, Alice!"
// hello          => "Hello, World!" # name not given
// hello ""       => "Hello, World!" # name is an empty String

function hello(name) {
	return name ? `Hello, ${name.toLowerCase().replace(name.charAt(0), name.charAt(0).toUpperCase())}!` : 'Hello, World!'
}


console.log(hello('johN'))		// 'Hello, John!'
console.log(hello('alice'))		// 'Hello, Alice!'
console.log(hello())			// 'Hello, World!'
console.log(hello(''))			// 'Hello, World!'