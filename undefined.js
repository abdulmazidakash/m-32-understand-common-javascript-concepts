/**
 * 8 ways to get undefined
 * 
 * 1. variable that is not initialized will give undefined
 * 2. function with no return
 * 3. parameter that is not passed will be defined
 * 4. if return has nothing on the right side will return undefined
 * 5. property that doesn't exists outside on the object will give you undefined
 * 6. accessing array elements outside of the index range
 * 7. deleting an element inside an array 
 * 8. set a value directly to undefined
 * 
 */

let first;
// console.log(first);

function second(a, b){
	const total = a + b;
}

const result = second();
// console.log(result);

function third(a, b, c, d){
	const total = a + b + c + d;
	console.log(a, b, c, d);
}

// third(2, 3);

function noNegative(a, b){
	if (a < 0 || b < 0){
		return;
	}
	return a + b;
}

const total = noNegative(2, -5);
// console.log(total);

const fifth = {id: 2, name: 'ponchom', age: 45};
// console.log(fifth.age, fifth.salary);

const sixth = [23, 45, 65, 76, 76, 98];

//you should not do it. Instead use splice
// delete sixth[1];
// console.log(sixth[1], sixth[5], sixth[200]);
// console.log(sixth);

const eighth = undefined;
// console.log(eighth);

const ninth = null;
// console.log(ninth);

const data = {results: [], updated: null};

console.log(typeof undefined);
console.log(typeof null);