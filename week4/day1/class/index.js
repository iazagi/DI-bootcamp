/*
let username = "John"; //ver global

function checkName (){
	console.log("In the function",username);//output john 
	username += "Smith"; //johnSmith;
	console.log("Still in the function",username); //johnsmite
}

console.log("before the function", username); //johnsmite

checkName()

console.log("after the function", username);//johnsmite

///ex2
let username = "John";

function checkName (){
	let username = "Tom"; //tom
	console.log("In the function",username); //tom
	username += "Smith";
	console.log("Still in the function",username); //tomsmith
}

console.log("before the function", username); //tom

checkName()

console.log("after the function", username); /john

///////ex3
1. Ask the user for his name and return it
	* first by using function declarations
	* then function expression,
	* then arrow function

	*/

function printName(){
	let name =prompt("whats your name?");
	return name;
}
console.log("printName()");

///////////////////  2   ///////////////////////////

const name =function() {
	let name =prompt("whats your name?");
	return name;
}
console.log("printName()");s

///////  3  

x =>() {
	let name =prompt("whats your name?");
	return name;
}

console.log(x);
