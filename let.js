// ES6: declare variables to belong to individual blocks (pairs of { .. }), using the let keyword.

function foo(){
	var a = 1;
	if(a >= 1){
		let b = 2;
		while(b < 5){
			let c = b * 2;
			b++;
			console.log(a + c);
		}
	}
}

foo();