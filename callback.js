function greeting(greetingHandler, name){
	greetingHandler(name);
}

// const name = 'Halim mama';
// const numbers = [34, 45, 65];
// const laptop = {price: 45000, brand: 'lenovo', memory: '8gb'}
// console.log(greeting(numbers));
// console.log(name);
// console.log(greeting(laptop));

function greetingHandler(name){
	console.log('good morning', name);
}

function greetEvening(name){
	console.log('good evening', name);
}

function greetNight(name){
	console.log('good night', name);
}


greeting(greetingHandler, 'tom hanks')
greeting(greetingHandler, 'tom cruise')
greeting(greetingHandler, 'tom curren')
greeting(greetEvening, 'tom brady')
greeting(greetNight, 'tom harry')