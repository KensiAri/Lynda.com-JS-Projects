// function findBiggestFraction(a,b){
// 	a>b ? console.log("a: " + a) : console.log("b: " + b);
// }

// var firstFraction = 3/4
// var secondFraction = 1/2

// findBiggestFraction(firstFraction,secondFraction);

// To Get a Value Stored and Returned to You use a 'result' variable

function findBiggestFraction(a,b){
	var result;
	a>b ? result = "firstFraction" + a : result = "secondFraction" + b;
	return result;
}

var firstFraction = 3/4
var secondFraction = 1/2

var fractionResult = findBiggestFraction(firstFraction,secondFraction);
console.log(fractionResult);

console.log("First fraction result: " + firstFraction);
console.log("Second fraction result: " + secondFraction);
console.log("Fraction " + fractionResult[0] + " with a value of " + fractionResult[1] + " is the biggest!");