//array like object

function sum(a, b, c){
	// const args = [...arguments];
	// console.log(args);
	console.log(arguments);
	const result = a + b + c;
	return result;
}

// console.log(arguments);
const total = sum(53, 64, 75, 56, 64, 43);
// console.log(total);