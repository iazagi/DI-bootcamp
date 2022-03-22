
let people = ["Greg", "Mary", "Devon", "James"]
/*
//// Part 1 remove greg

people.Shift();


//// part 2 james to jason


people.splice(2 ,1 , "jason");


/// part 3 enter my name 

people.push( prompt("enter your name :"));


//////consloe log marry


consloe.log(people.indexOf("Mary"));


 Write code to make a copy of the people array using the slice method.
The copy should NOT include “Mary” or your name.
Hint: remember that now the people array should look like this let people = ["Mary", "Devon", "Jason", "Yourname"];
Hint: Check out the documentation for the slice method

let lengthOfPeople = people.length
let newPeople = people.slice(1,lengthOfPeople);
console.log(newPeople);

//////// part 6 ////
//Write code that gives the index of “Foo”. Why does it return -1 ?


console.log(people.indexOf("foo"));

// you get -1 do to foo not being a part of the array



////// part 7 /////
//Create a variable called last which value is the last element of the array.

let lastOne = people[people.length-1];
console.log(`the last one in the array IS : ${lastOne}`);



/////// loop part///////


//console log alll array with loop

for(let i = 0 ; i <= people.length ; i++){
	console.log(people[i]);
}

// or 

for( let name in people) {
	console.log(people[name]);
}


////////// loop part 2

for( let name in people) {
	console.log(people[name]);
	if(people[name] == "jason") {
		break;
	}
}



///////////////////////////// Exercise 2 : Your Favorite Colors/////////

let colors = ["blue", "yellow", "brown", "black", "white"];
let num = 0;
for(let i in colors){
	num++
	console.log(`My #${(num)} choice is :  ${colors[i]}`);
}


/////BOuns ///

let suffix = ["st", "se", "rd", "th", "th"];
for(let i = 1 ; i<=5 ; i++) {
	console.log(`My #${i}${suffix[i-1]} choice is :  ${colors[i-1]}`);
}




////////////// Exercise 3 : Repeat The Question//////////////////

let numberInput =parseInt(prompt("please enter a number (!10) :"));
if(Number.isFinite(numberInput) ) {
	console.log("Its a number great");
}else{
	console.log("not a number!!!!!!");
}

/////////part 2
////// if smaller then 10 keep asking


while( numberInput < 10){
	numberInput = parseInt(prompt("please enter a number (!10) :"));
	if(numberInput > 10) {
		break;
	}
}

*/

/////////////Exercise 4 : Building Management///////////

let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}


///Console.log the number of floors in the building

console.log(`the building has ${building["numberOfFloors"]} of floors`);

/////Console.log how many apartments are on the floors 1 and 3.

console.log(`on the floor 1 you have ${building["numberOfAptByFloor"]["firstFloor"]} 
	apprtments  and on the 3 floor you have ${building["numberOfAptByFloor"]["thirdFloor"]} artments`);

////Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(`${building["nameOfTenants"][1]} has ${building["numberOfRoomsAndRent"][building["nameOfTenants"][1].toLowerCase()][0]} rooms in the apartment.`);


///Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

//if(building["numberOfRoomsAndRent"]["sarah"][1] + building["numberOfRoomsAndRent"]["David"][1] > building["numberOfRoomsAndRent"]["dan"][1] ) {
//	building["numberOfRoomsAndRent"]["dan"][1] = 1200;
//}
if (building["numberOfRoomsAndRent"]["sarah"][1] + building["numberOfRoomsAndRent"]["david"][1] > building["numberOfRoomsAndRent"]["dan"][1]) {
    building["numberOfRoomsAndRent"]["dan"][1] = 1200;   
}

/////////////////////Exercise 5 : Family////////////

let Family = {
	LastName :`choen`,
	city : `holon`,
	state : `israel`,
	numberOfMembers : 5,
}

//Using a for loop, console.log the keys of the object.
for(let i in Family){
	console.log(i);
}


///Using a for loop, console.log the values of the object.


for(let i in Family){
	console.log(Family[i]);
}



////////////////   Exercise 6 ///////////////

let details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}

let output = "";
for( let i in details) {
    output += `${i} ${details[i]} `;
}
console.log(output);




////////////////// Exercise 7 : Secret Group//////////

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

names.sort();
let secretGroup="";
for (let member in names) {
    secretGroup += names[member][0];
}
console.log(secretGroup);