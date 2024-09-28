//int a = 5;
//string b = 'alim halim khalim';
//bool c = true;
//object student = {name: 'noya daman', id: 55};
//int [] numbers = [12, 3,4,45];

//dynamic type language
const a = 5;
const b = 'samsu kopai na akhon ar';
const ages = [5,64, 64, 64,8,86];
const student = {id: 45, class: 7};

console.log(typeof a, typeof b, typeof ages, typeof student);

let x = 5;
let y = x;
console.log(x, y);

y = 7;
console.log(x, y);

let p = {job: 'web developer'};
let q = p;
q.job = {job: 'Backend end'};
console.log(p, q);
