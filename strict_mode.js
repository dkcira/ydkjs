// ES5 added a "strict mode", whici tightens the rules
// you can opt in to strict mode for individual functions or entire files

function foo(){
	"use strict";
	// this code is strict mode
	function bar(){
		// this code is strict mode;
	}
}

// this code is not strict mode