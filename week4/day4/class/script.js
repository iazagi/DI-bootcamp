/*
/////Review daily challenge & array/object destructuring
let colors = ["blue", "red"];
let first = colors[0];
let second = colors[1];

//array destructuring
let [firstColor, secondColor, thirdColor] = colors;
console.log(`firstColor ${firstColor}`) //blue
console.log(`secondColor ${secondColor}`) //red
console.log(`thirdColor ${thirdColor}`) //undefined


let family = {
  lastName : "Smith",
  member : 3, 
  age: 40,
  a : "a", 
  b : "b", 
}

let numMember = family["member"];
let lastnameFamily = family["lastName"];


//destructure the object
//we need to use the same name as the propeties object
let {lastName, age} = family;
console.log(`lastName ${lastName}`); //"Smith"
console.log(`age ${age}`); //40


let {lastName : familyName , member } = family;
console.log(`familyName ${familyName}`); //"Smith"
console.log(`member ${member}`); //3



//DAILY CHALLENGE

let inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

// object destructuring
let car = inventory[0];
let {id, car_year} = car;


function findHonda () {
  let firstHonda = inventory.find(element => element["car_make"] === "Honda");
  
  //object destructuring
  let {car_make , car_model : model, car_year : year} = firstHonda;

  let sentence = `This is a ${car_make} ${model} ${year}`;
  // let sentence = `This is a ${firstHonda["car_make"]} ${firstHonda["car_model"]}  ${firstHonda["car_year"]}`;

  console.log(sentence);
}

findHonda();

//PART II

let numbers = [1, 4, 0, 2];
let newNumbers = numbers.sort(); //[0,1,2,4]

//WHAT HAPPENS BEHIND THE SCENE
let newArray = numbers.sort(function (a, b) {
  if (b > a) {
    return - 1
  } else if (a > b) {
    return 1
  } else {
    return 0;
  }
})

console.log(newArray)

// SORT THE INVENTORY DEPENDING ON THE VALUE OF car_year
let newArrayCar = inventory.sort(function (a, b) {
  console.log("a", a)
  console.log("b",b)
  console.log("---")

  if (b["car_year"]> a["car_year"]) {
    return 1
  } else if (a["car_year"] > b["car_year"]) {
    return -1
  } else {
    return 0;
  }
})


console.log(newArrayCar);


//SORT DOCUMENTATION
// function compare(a, b) {
//   if (a is less than b by some ordering criterion) {
//     return -1;
//   }
//   if (a is greater than b by the ordering criterion) {
//     return 1;
//   }
//   // a must be equal to b
//   return 0;
// }



///Lesson on objects, this keyword, function constructor


let personTwo = {
  firstname : "Theo",
  age : 40,
  // method
  greeting : function(){
    console.log(this) //refers to this object
    console.log(`Hello ${this.firstname}`) //"Theo"
  }
}

// let ageOfPerson = personTwo["age"];
// let ageOfPerson = personTwo.age;

//call the method of the object
personTwo.greeting()

let personTwo = {
  firstname : "Theo",
  age : 40,
  // method
  greeting : () => this; //window object
  //we cannot use Arrow functions for object method
}

console.log(personTwo.greeting())

// constructor function
function Character(wizardName, wizardHouse, isGoodStudent){
  this.name= wizardName,
  this.house= wizardHouse,
  this.goodstudent= isGoodStudent,

  this.greeting = function() {
    // -> if we call this method from the firstCharacter object
    // -> this refers the firstCharacter object
    // -> this.name - the name  firstCharacter object
    console.log(`Hello everyone, my name is ${this.name}`)
  }
}

// object - instance of the Character constructor function
const firstCharacter = new Character("Harry", "Gryfindor", true);
// { 
// goodstudent: true
// greeting: ƒ ()
// house: "Gryfindor"
// name: "Harry"
// }

const secondCharacter = new Character("Hermione", "Gryfindor", false);

// firstCharacter.greeting();
// secondCharacter.greeting();

// changed the value of the "house" property inside the firstCharacter object
firstCharacter["house"] = "ABC";

console.log(firstCharacter)
console.log(secondCharacter)


*/

//////  EX  # Part I

//1) Create a TV function constructor with properties brand, channel and volume. Channel should be 1 by default. Volume should be 50 by default.
//2) Add methods to increase and decrease volume. When the methods are called it will increase or decrease the volume by 1.
//3) Create an object for the LG TV
//4) Call the inscrease method, and check if the volume changed


function tv(brand, channel=1, volume=50 ){
  this.brand = brand,
  this.channel = channel,
  this.volume = volume,
  this.increaseVolume =function(){this.volume++};
  this.decreaseVolume =function(){this.volume--};
}

const firstTv = new tv("LG", 1 ,40);
const secondTv = new tv("sony");

console.log(secondTv);

secondTv.increaseVolume();
firstTv.increaseVolume();
console.log(firstTv);


//## Object destructuring - Look at the today's lesson to do those exercises
//## Exercise1
//Pass this object {name: 'Harry Potter',house: 'Gryfindor',goodstudent : false}as an argument of the getDetails function.
//Destructure the object in the parameter (ie. you should have 3 parameters : name, house and goodstudents) and console.log them
/*function getDetails(<fillInHere>) {
  console.log(name, house, goodstudent)
}

getDetails({name: 'Harry Potter',house: 'Gryfindor',goodstudent : false});




//## Exercise3
//Pass this object
const elonPerson = {
    first: 'Elon',
    last: 'Musk',
    housesLocation : ["new york", "paris"],
    twitter: '@elonmusk',
    company: 'Space X',
    houses : {
      amount: 2,
      value : "5Million"
    }
}
//as an argument of the getElonMuskDetails function.
//Destructure the object in the parameter and console.log
//- his first name, last name, the 2 cities where he owns an appartment, and the value of the houses
function getElonMuskDetails(here){
  console.log()
}

getElonMuskDetails(elonPerson)*/