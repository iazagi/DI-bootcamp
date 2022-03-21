/*
// primitive data types
// - String, Number, Boolean

// // complex data types
// - array


// let players = [["Jane", 22, 15], ["Marc", 45, 77]];

// objects

// let x = {
//   property: value,
//   property: value,    
// };

let player = {
	username : "Jane",
	age : 22,
	levelGame : 15,
	isGoodPlayer : true,
	products : ["gun","cat", "uniform"]
};


// Syntax: nameOfObject.nameOfProperty
let namePlayer = player.username;

// SYNTAX WE SHOULD USE
// Syntax: nameOfObject["nameOfProperty"]
let namePlayerOne = player["username"];

console.log(`The username of the player is ${namePlayer}`);
console.log(`The username of the player is ${namePlayerOne}`);

let levelPlayer = player["levelGame"];
console.log(`The level of the player is ${levelPlayer}`);

// console.log(player.products);

let productsPlayer = player["products"][1];
console.log(`The products of the player is ${productsPlayer}`);

// access the letter "u" from the "gun"
let letter = player["products"][0].charAt(1);
// player["products"][0][1];

//modify/add data inside the object

//retrieve the property and modify the value
// modify levelGame from 15 to 20

player["levelGame"] = 20;
// console.log(player);

// If the property doesn't exist, we add it to the object with the value "Smith"
player["lastName"] = "Smith";
console.log(player);



let players = [
	{
		username : "Jane",
		age : 22,
		levelGame : 15,
		isGoodPlayer : true,
		products : ["gun","cat", "uniform"],
	},
	{
		username : "Mark",
		age : 45,
		levelGame : 95,
		isGoodPlayer : true,
		products : ["dog", "arrow"],
	}
];

let playerTwo = players[1];


let ageMark = players[1]["age"];
console.log(ageMark);



/*

let a = 2;
//the same think
a = a + 3;
//or
a +=3;

let c = 3;
+1
c = 3 + 1;
or 
c += 1;
or
c ++ ;
*/


// // Exercise
/*
let userCart = {
	username : "John",
	password: 1234,
	isUserSignedIn : true,
	cart : {
		apple : 2,
		banana : 1,
		pear : 5,
	},
	prices : {
		apple : 0.5,
		banana : 0.8646466363,
		pear : 0.2
	}
};

// 1. Add the lastname Smith to the object

userCart["lastname"] = "Smith";

// 2. Change the price of the pear, so it will contain the Taxes. 17%

userCart["prices"]["pear"] *= 1.17;
console.log(userCart);
// 3. Ask the user for the fruit he wants between Apple, Banana and Pear.
// Make sure that your code accept all type of strings,
// for example "Banana" or "banana" or "BaNaNA"

let userFruit =prompt("what fruit do you want? apple banana pear");
let userFruitLower = userFruit.toLowerCase();
/*
you can do in one line:
let userFruit =prompt("what fruit do you want? apple banana pear").toLowerCase();

*/
//console.log(userFruitLower);

// 4. Console.log the price for the specific fruit the user wants

//console.log(`the price is ${userCart["prices"][userFruit]}`);





///////if and if else////////



let bankAmount = 10000;
let computerPrice = 8000;
let phonePrice = 4000;
let breadPrice = 10;


// currently true
if (bankAmount > computerPrice) {
	console.log("I'll buy a computer")
			// = 10000      - 8000
	bankAmount = bankAmount - computerPrice;
	console.log(`I have ${bankAmount} shekels left in my account`)
  
  // if the condition above is false
} else {
	console.log("I'll buy a phone");
	bankAmount = bankAmount - phonePrice;
	console.log(`I have ${bankAmount} shekels left in my account`)
}


let bankAmountOne = 10000;
let computerPriceOne = 8000;
let phonePriceOne = 4000;
let breadPriceOne = 10;


if (bankAmountOne >= computerPriceOne) {
	console.log("I'll buy a computer")
} else if (bankAmountOne >= phonePriceOne) {
	console.log("I'll buy a phone")
} else {
	console.log("I'll buy a bread")
}

// // syntax

// // if (condition is true) {

// // } else if (condition above is false,and condition here is true){

// // } else if (condition above is false,and condition here is true){

// // } else if (condition above is false,and condition here is true){

// // } else if (condition above is false,and condition here is true){

// // } else if (condition above is false,and condition here is true){

// // } else {

// // }

/*

let bankAmountTwo = 10000;
let computerPriceTwo = 8000;
let computerColor = "red";


// AND : means the two conditions need to be true
if (bankAmountTwo >= computerPriceTwo && computerColor === "blue") {
	console.log("Ill buy a computer")
} else if (computerColor !== "blue") {
	console.log("I'll buy a red computer")
} else {
	console.log("nothing")
}


// OR : means at least one of the condition needs to be true
if (bankAmountTwo >= computerPriceTwo || computerColor === "blue") {
	console.log("Ill buy a computer")
} else {
	console.log("nothing")
}


let player = {
	username : "Jane",
	age : 22,
	levelGame : 15,
	products : ["gun","cat", "uniform"]
};

// is the level game of player
// is bigger than 50 -> I want to add inside the object
// a property isGoodPlayer = true
// is between 50 not included and 15 included -> middle
// else bad


if (player["levelGame"] >= 50) {
	player["isGoodPlayer"] = "good";

} else if (player["levelGame"] > 15 && player["levelGame"] < 50) {
	player["isGoodPlayer"] = "middle";

} else {
	player["isGoodPlayer"] = "bad";
}

console.log(player)
*/


///////////conditions ex1///////
/*
let age = prompt("what is your age???");
if (age < 18) {
   console.log("Sorry you are too young to drive this car . powering off")
} else if (age == 18) {
   console.log("Congratulations on your first year of driving. Enjoy the ride!")
} else if (age > 18) {
   console.log("Powering On. Enjoy the ride!")
} 
*/


///////////  switch /////////////
/*
let fruit = 'Papayas';

switch (fruit) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log('Sorry, we are out of ' + fruit + '.');
}
*/

/////////  ex3 //////////

let a = 2 + 2;
// a will be =4  
switch (a) {
  case 3:
  //case != 4
    alert( 'Too small' );
    break;
  case 4:
    //case == 4 will alert on screen
    alert( 'Exactly!' );
    break;
  case 5:
    //case != 5
    alert( 'Too large' );
    break;
  default:
    alert( "I don't know such values" );
}




