var obj = {
	a: "hello world",
	b: 42,
	c: true
};

console.log(`${obj.a}`);
console.log(`${obj.b}`);
console.log(`${obj.c}`);

console.log(`${obj['a']}`);
console.log(`${obj['b']}`);
console.log(`${obj['c']}`);


var b = 'a';

console.log(`${obj[b]}`); // 'hello world'
console.log(`${obj['b']}`); // 42