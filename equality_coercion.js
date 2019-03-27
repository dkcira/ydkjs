var a = [1,2,3];
var b = [1,2,3];
var c = "1,2,3";

// == and === for non-primitive values check the references
// not the underlying values.
// arrays are by default coerced to strings by simply joining 
// all the values with commas (,) in between
// so when casting to string the arrays below will be the same
// but not when compared directly, because the references are different
console.log(a,b,c);
console.log(`${a == c}`); // true
console.log(`${b == c}`); // true
console.log(`${a == b}`); // false
console.log(a,b,c);
