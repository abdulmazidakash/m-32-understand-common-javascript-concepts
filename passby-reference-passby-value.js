function changeNumber(num){
	num = num + 10;
	console.log('inside function', num);
}

const myNumber = 10;
changeNumber(myNumber);
console.log('outside function', myNumber);

function changeName(person){
	person.name = 'rahim';
	console.log('inside function', person.name);
}

const person = {name: 'karim'};
changeName(person);
console.log('outside function', person.name);