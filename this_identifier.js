// this usually points to an object.
// if inside a function, it depends on how the function is called.

function foo(){
	console.log(this.bar);
}

var bar = "global";

var obj1 = {
	bar: "obj1",
	foo: foo
};

var obj2 = {
	bar: "obj2"
};

//---

foo(); // global, or undefined when in strict mode
obj1.foo(); // "obj1"
foo.call(obj2); // "obj2"
new foo(); //undefined