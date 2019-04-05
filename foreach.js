theNumbers = [11, 12, 13, 14, 15];

console.log("loop with for");
for ( var j = 0; j < theNumbers.length; j++ ){
	console.log(theNumbers[j]);
}

// foreach works with callback function, written as anonymous function here with the arrow
console.log("foreach callback");
theNumbers.forEach( number => console.log(number) );
