var a = 42;
var b = "foo";

// b gets coerced into an invalid number value (NaN), hence all below are false
console.log(`${a < b}`);
console.log(`${a > b}`);
console.log(`${a == b}`);
