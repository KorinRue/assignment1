// My script for assignment 1


/*
var firstArray = ["biking", "reading", "making maps", "bassett hounds"];
console.log(firstArray[0]);
console.log(firstArray[4]);
*/


// for loop through an array
var firstArray = ["biking", "reading", "making maps", "bassett hounds"];
for (var i = 0; i < firstArray.length; i++) {
	console.log(firstArray[i]);
}



/*
// Class 3 Javascript Variable and Comparison Review

// variable types
var stringVar = "This is a string";
var numVar = 42;
var stringNum = "42";
var booleanVar = true;

// comparisons
var a = 23;
var b = 18;
var compare = a < b;
console.log(compare);
var c = 47;
var d = 16;
var compare2 = c >= d;
console.log(compare2);
var e = "This is a string!";
var f = "This is also a string!";
var compare3 = e !== f;
console.log(compare3);
var g = "This is a string!";
var h = "This is also a string!";
var compare4 = g === h;
console.log(compare4);

// if, else statements
var i = 6, j = 26;
if (i >= j) {       // is this true?
	console.log("i is > or = j");
} else {
	console.log("i is NOT > or = j");
}
var k = "Nairobi", l = "Nairobi";
if (k === l) {      // is this true?
	console.log("k is = to l");
} else {
	console.log("k is NOT = to l");
}
// variable values
var m = 16;
m = 113;
console.log(m);
// functions!
// Defining a function
//  function name    declare  (input, parameter)
var addingFortyTwo = function (num) {
//	do something to input
	var output = num + 42;
//	send output back
	return output;
};
// Using a function
var whatsthis = addingFortyTwo(10);
console.log(whatsthis);
// again
var whatsthat = addingFortyTwo(1000);
console.log(whatsthat);
// multiple parameters
var rectVolume = function (height, width, depth) {
	var volume = height * width * depth;
	return volume;
};
var vol = rectVolume(10, 15, 20);
console.log(vol);
// variable scope
var globalvar = "This var is global";
var globalFunction = function () {
	var localvar = "Only exists inside this function";
	console.log(globalvar);
} 
globalFunction();
//console.log(localvar);
// for loops
var n = 8;
for (var i = 1; i < 10; i++) {
	n = n + 3; 
	console.log(n);
}
console.log(n);
// arrays
var firstArray = [12, 34, 56, "cat", "dog", "fish"];
console.log(firstArray[0]);
console.log(firstArray[4]);
// for loop through an array
for (var i = 0; i < firstArray.length; i++) {
	console.log("Array item number", i, firstArray[i]);
}
// while loops 
var cardType = ["ace", "king", "queen", "jack"];
var card = "2 of clubs";
while (card !== "ace") {
	console.log("Our card was", card);
	var randNumZeroToThree = Math.floor(Math.random() * 4);
	card = cardType[randNumZeroToThree];
	console.log("Our card is", card);
}
// foreach loop
firstArray.forEach(
	function printValue(value) {
		console.log("Array item", value);
	}
);
// logical operators
var thirsty = true;
var water = true;
var coffee = false;
// and
if (thirsty && water) {
	console.log("Drink up!");
} else {
	console.log("Where’s the water fountain?");
}
// or
if (thirsty && (water || coffee)) {
	console.log("You have water or coffee");
} else {
	console.log("Where’s the water fountain or Starbucks?");
}
// not
if (!thirsty) {
	console.log("I am NOT thirsty");
} else {
	console.log("I am thirsty");
}
// objects
var drinksIHave = {};
drinksIHave.milk = "2% Organic";
drinksIHave.water = "tap";
drinksIHave.beer = "Abita Amber";
drinksIHave.wine = "Cabernet";
console.log(drinksIHave.beer);

*/