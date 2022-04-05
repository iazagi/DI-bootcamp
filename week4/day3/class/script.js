/*
const restautant = [20,15.2,10];
const TAXES = 1.17;

///we want to create a new array
//takes constains the prices * taxes;

let pricesIncudingTaxes = [];

function multiplyPrice() {
    for(let price of restautant){
        let newPrice = price*TAXES;
        pricesIncudingTaxes.push(newPrice);
    }
    console.log(pricesIncudingTaxes);
}
multiplyPrice();


///does the same as the first function
/// MAP method returs a new  array
/// whatever the callback function wil be pushed to the newPriceArray
///fuction exprecion
const restautant = [20,15.2,10];
const TAXES = 1.17;
let newPriceArray = restautant.map(function (element, index, array){return price*TAXES}) ;
console.log(newPriceArray);


// and now with an arrow puction
/// the arrow function for 1 line fuction
// automaticaly returns a value 

let newPriceArray = restautant.map(element=> price*TAXES) ;
console.log(newPriceArray);
*/


//////EX1

let famousPeople = [
    {
        name: "Angelina Jolie",
        job: "actor",
        age: 80
    },
    {
        name: "Georges Clooney",
        job: "actor",
        age: 2
    },
    {
        name: "Paris Hilton",
        job: "actor",
        age: 5
    },
    {
        name: "Kayne West",
        job: "singer",
        age: 16
    },
    {
        name: "Britney Spears",
        job: "singer",
        age: 100
    }
]

// 1. Use the map method, to create a new array that contains only the name of the actors

let actorsName = famousPeople.map(item => item["name"]);
console.log(actorsName);

// first loop item will be 

//      name: "Angelina Jolie",
//        job: "actor",
//        age: 80

// 2 loop :
//        name: "Georges Clooney",
//        job: "actor",
///        age: 2


// 2. Use the map method, to create a new array , that contains objects, each object contains
 //the name of the actor, and it's job

/*  let actorsJobAndName = famousPeople.map(function (element){
    let objActor = {
        name : element["name"],
        job : element["job"],
    }
    return objActor;
  })
*/
  ///// in arrow fuction =>

 //let actorsJobAndName = famousPeople.map(element => {name : element["name"], job : element["job"]};)
 //console.log(actorsJobAndName); 
// 3. BONUS: Use the for each method, to add the names and the job of the actors on the DOM
 //(in a paragraph, appended to a div with an id "container")




/*///  FILTER method

const number = [2,3,4,5,6];

///  create z new zrray
// array contain only elements that even

const newEvenArray= [];

function addToArray (){
    for(let num of number){
        if(num % 2 === 0){
            newEvenArray.push(num);
        }else{
            continue;
        }
    }
}
addToArray();

console.log(newEvenArray);


//// or in arrow function
const newArrayOfNumbers = number.fillter(function (element){ return element%2 === 0;})



//## Exercise 2
const studentsFootball = [
    {name: 'Rich', score: 33}, 
    {name: 'Peter', score: 55}
];*/

/*Using the map method, create a new array of objects, containing the properties name,
 scoreand a new property, named isAboveAverage
if the student has a score bigger that 50, the property isAboveAverage will be true,
 else it will be false*/


//////// WITH FUNCTION EXPRESSION
//const bestStudents = students.filter(function (element) {
//    return element["score"] > 50;
//})

//console.log(bestStudents);
// (2) [{…}, {…}]
// 0: {name: 'Peter', score: 55}
// 1: {name: 'John', score: 75}

//Behind the scenes
// 1st loop
// element = {name: 'Rich', score: 33}
// element["score"] > 50 -> false
// we skip the element

// 2nd loop
// element = {name: 'Peter', score: 55}
// element["score"] > 50 -> true
// we push the whole element inside the array

// 3rd loop
// element = {name: 'John', score: 75}
// element["score"] > 50 -> true
// we push the whole element inside the array


/*//WITH ARROW FUNCTION
const bestStudentsArrow = students.filter(element => element["score"] > 50)

console.log(bestStudentsArrow);
// (2) [{…}, {…}]
// 0: {name: 'Peter', score: 55}
// 1: {name: 'John', score: 75}

//filter with several conditions
const bestStudentsMoreConditions = students.filter(element => 
    element["score"] > 50 && element["name"].length === 4)

console.log(bestStudentsMoreConditions); 
// 0: {name: 'John', score: 75}*/



/*
//# Filter
//## Exercise 1:  create a new array that filters only the positive value
let numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];
 let numberPlus = numbers.filter(element => element>0);
 console.log(numberPlus);

## Exercise 2: Suppose you have a list of Star Trek characters,
and you want to get just the characters that appeared in Star Trek: The Next Generation.
Use filter() to filter the array of characters below
const characters = [
   { name: 'James T. Kirk', series: ['Star Trek'] },
   { name: 'Spock', series: ['Star Trek', 'Star Trek: The Next Generation'] },
   { name: 'Jean-Luc Picard', series: ['Star Trek: The Next Generation'] },
   { name: 'Worf', series: ['Star Trek: The Next Generation', 'Star Trek: Deep Space Nine'] }
]; 


let playInTheNextGeneration = characters.filter (element => element["series"].includes("Star Trek: The Next Generation"))
console.log(playInTheNextGeneration);



/*## Exercise 3 NOT MANDATORY - send me the result by slack
Use the filter method to create an array without duplicates. The result should be ["blue","red","yellow"]
let colors = ["blue", "red", "red", "blue", "yellow"]*/




/*///////// REDUCE
const numbers = [10,20,35,40];

// without reduce - find the total sum of the array
let total = 0;

function sumUp (){
    for(let num of numbers){
        total += num
    }
}

sumUp()

console.log(total)

// WITH REDUCE

let sum =  numbers.reduce(function (accumulator,element) {
    console.log(`accumulator : ${accumulator}`);
    console.log(`element : ${element}`)
    return accumulator + element;
})

console.log(sum) //65*/


//WITH ARROW FUNCTIONS
// let sumValue = numbers.reduce((accumulator,element) => accumulator + element)

// console.log(sumValue)

// BEHIND THE SCENES
// 1st loop
// accumulator = 10;
// element = 20;
// return 10+20 -> 30

// 2nd loop
// accumulator = 30;
// element = 35
// return 30+35 -> 65


// 3rd loop
// accumulator = 65;
// element = 40
// return 40+65 -> 105


/*// REDUCE WITH INITIAL VALUE
let sumValue =  numbers.reduce(function (accumulator,element) {
    console.log(`accumulator : ${accumulator}`);
    console.log(`element : ${element}`)
    return accumulator + element;
}, 1000)

console.log(sumValue) // 1105

// 1st loop
// accumulator = 1000;
// element = 10;
// return 1000+10 -> 1010

// 2nd loop
// accumulator = 1010;
// element = 20
// return 1010+20 -> 1030

// 3rd loop
// accumulator = 1030;
// element = 35
// return 1030+35 -> 1065

// 4th loop
// accumulator = 1065;
// element = 40
// return 1065+40 -> 1105

// WITH ARRAY OF STRING
//INITIAL VALUE IS AN EMPTY STRING
let names = ["John", "Sara", "Teo"];

// FIND THE SECRET SOCIETY NAME : result "JST"

                                        // accumulator, element
const specialSociety = names.reduce(function(word, username) {
    console.log(`word : ${word}`)
    console.log(`username : ${username}`)
    let firstLetter = username.charAt(0); //first letter of the username
    return word + firstLetter;
}, "")


// console.log(specialSociety)
// 1th loop
// word : ""
// username : "John"
// firstLetter : "J"
// return word + firstLetter -> ""+"J" -> "J"

// 2h loop
// word : "J"
// username : "Sara"
// firstLetter : "S"
// return word + firstLetter -> "J"+"S"

//WITH ARROW FUNCTION
const specialSocietyArrow = names.reduce((word, username) => word + username.charAt(0), "")


console.log(specialSocietyArrow)
*/





//////////////////////## Exercise 1
const students = [
    {name: 'Rich', score: 33}, 
    {name: 'Peter', score: 55},
    {name: 'John', score: 75}
];
//Find the sum of the score of the students using reduce


let sumOfScores = students.reduce((accumulator, element) => accumulator + element["score"], 0);
console.log(sumOfScores);


//create a new array - containing only the voters who voted
// -> property voted to be true


let arrayOfVoters = voters.filter(element => element["voted"]);
console.log(arrayOfVoters)
// (3) [{…}, {…}, {…}]
// 0: {name: 'Bob', age: 30, voted: true}
// 1: {name: 'Jake', age: 32, voted: true}
// 2: {name: 'Bob', age: 30, voted: true}

// THE SAME
// let arrayOfVoters = voters.filter(element => element["voted"]===true);
// console.log(arrayOfVoters)

let numOfPeople = arrayOfVoters.length;
console.log(numOfPeople) //3

let numPeopleWhoVotedCheck = voters.reduce((acc, element) => {
    if(element["voted"]) {
        return ++acc;
    } else {
        return acc;
    }   
}, 0)

console.log(numPeopleWhoVotedCheck) //3

// because true is 1 and false is 0
let numPeopleWhoVoted = voters.reduce((acc, element) => {
    return acc + element["voted"];  
}, 0)

console.log(numPeopleWhoVoted) //3




//# Exercise2

let voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Bob' , age: 30, voted: true},
];

//1. Turn an array of voter objects into a count of how many people voted
let peopleVot = voters.fillter(element) => element["voted"] === true;
//let peopleVot = voters.fillter(element) => element["voted"];///the same
console.log(peopleVot);

//2. Do the exercise using reduce only

let numPeopleWhoVoted = voters.reduce((acc, element) =>{
    if(element["voted"]){
        return acc++;
    }else{
    return acc;
    }
} , 0)
console.log(numPeopleWhoVoted);
//or
let numPeopleWhoVoted = voters.reduce((acc, element) =>acc +  element["voted"] , 0 )
console.log(numPeopleWhoVoted);

//3. Then do it by chaning filter and reduce




/////////////////////////////CHAINING METHODS
let wizards = [
    {
        name: 'Harry Potter',
        house: 'Gryfindor'
    },
    {
        name: 'Cedric Diggory',
        house: 'Hufflepuff'
    },
    {
        name: 'Tonks',
        house: 'Hufflepuff'
    },
    {
        name: 'Ronald Weasley',
        house: 'Gryfindor'
    },
    {
        name: 'Hermione Granger',
        house: 'Gryfindor'
    }
];

//Push in a array the names of all the people living in gryfindor

// find the ppl living in Gryfindor
// pushed inside the array
let wizardGryfindor = wizards.filter(element => element["house"] === "Gryfindor");
console.log(wizardGryfindor)
// (3) [{…}, {…}, {…}]
// 0: {name: 'Harry Potter', house: 'Gryfindor'}
// 1: {name: 'Ronald Weasley', house: 'Gryfindor'}
// 2: {name: 'Hermione Granger', house: 'Gryfindor'}


let namesWizardGryfindor = wizardGryfindor.map(element => element["name"]);
console.log(namesWizardGryfindor)
// ['Harry Potter', 'Ronald Weasley', 'Hermione Granger']

//CHAINING
let names = wizards
            .filter(element => element["house"] === "Gryfindor")
            .map(element => element["name"])

console.log(names) //['Harry Potter', 'Ronald Weasley', 'Hermione Granger']

// Chain other methods
// let names =  wizards
//          .filter(element => element["house"] === "Gryfindor")
//          .map(element => element["name"])
//          .join("-")
//          .length
