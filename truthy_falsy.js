// truthy-falsy when values are coerced into booleans

// the list of "falsy" JS values
// "" (empty string)
// 0, -0, NaN (invalid number)
// null, undefined
// false

if( ! "" ){
  console.log("falsy")
}


// the rest is "truthy"
// 42
// true
// [ ], [1, "2", 3] (arrays)
// { }, {a:42} (objects)
// function foo(){...} (functions)

if ( [1, "2", 3] ){
  console.log("truthy")
}
