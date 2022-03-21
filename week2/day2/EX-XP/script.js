

//////////   EX1 /////////
// Create 2 variables, x and y. Each of them should have a different numeric value.
// Write an if/else statement that checks which number is bigger.
let x = 5;
let y = 2;

if(x > y) {
	console.log(`x is the biggest number`)
}else {
	console.log("y is the biggest number")
}



//////////// EX2   /////////////
/*
Create a variable called newDog where it’s value is “Chihuahua”.
Check and display how many letters are in newDog.
Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
Check if the variable newDog is equal to “Chihuahua”
if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
else, console.log ‘I dont care, I prefer cats’
*/

let newDog = "Chihuahua";
let newDogLen = newDog.length;
console.log(`dog name length: ${newDogLen}`)
newDog = newDog.toUpperCase();
console.log(newDog)
newDog = newDog.toLowerCase();
console.log(newDog)

if(newDog == "Chihuahua") {
	console.log(" I love Chihuahua , it's my favorite dog brand")
}else {
	console.log("I don't care ,I prefer cats")
}




//////////////  EX3 //////////
/*
Prompt the user for a number and save it to a variable.
Check whether the variable is even or odd.
If it is even, display: “x is an even number”. Where x is the actual number the user chose.
If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.
*/
let number = prompt("type any number please");
if((number % 2) == 0 ) {
	console.log(`${number} => is an even number `)
}else {
	console.log(`${number} => is an odd number `)
}


////////////// EX4 ///////////////////

/*
Using the array above, console.log the number of users that are connected to the group chat based on the following rules:
If there is no users (the users array is empty), console.log “no one is online”.
If there is 1 user, console.log “<name_user> is online”.
If there are 2 users, console.log “<name_user1> and <name_user2> are online”.
If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.
For example, if there are 5 users, it should display:
*/

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
let numberOfUsers = users.length;
if(numberOfUsers == 0) {
	console.log("no one is online")
}else if(numberOfUsers == 1){
	console.log(`${users[0]} is online`)
}else if(numberOfUsers == 2) {
	console.log(`${users[0]} and ${users[1]}  are online`)
}else if(numberOfUsers > 2) {
	let numMinesTwo = numberOfUsers-2;
	console.log(`${users[0]} and ${users[1]} and ${numMinesTwo} more are online`)
}