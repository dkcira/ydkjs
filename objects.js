// refer to object values through keys
var obj = {
	a: "hello world",
	b: 42,
	c: true
};

console.log(obj.a);
console.log(obj.b);
console.log(obj.c);

console.log(obj['a']);
console.log(obj['b']);
console.log(obj['c']);

var b = 'a';

console.log(`${obj[b]}`); // 'hello world'
console.log(`${obj['b']}`); // 42

// student object
var student =  {
	name: 'James',
	age: 32,
	grades: ['A', 'B', 'A', 'C']
};

// dot notation for key
console.log(student.name);
// bracket notation
console.log(student['age']);

if ( 'name' in student){
	console.log(`this student has the name ${student.name}`);
}

for (key in student){
	console.log(key, ':', student[key]);
}

console.log('student keys:',Object.keys(student));
console.log('student values	:',Object.values(student));
console.log('student entries :', Object.entries(student));