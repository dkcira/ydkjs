function foo(){
	a = 1; // a not formally declared
}

a; // oops,  auto global variable, will get ReferenceError