var a = "42"
var b = 42

console.log(`${a == b}`);   // true due to coercion
console.log(`${a === b}`);  // false because === checks the type too
