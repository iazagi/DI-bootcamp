/*//Analyze these pieces of code before executing them. What will be the outputs ?
//-------------1----------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
//['bread',"apple", "orange", 'chicken',"carrot", "potato"]
//------2------
const country = "USA";
console.log([...country]);
// U
// S
// A
//------Bonus------
let newArray = [...[,,]];
console.log(newArray);
//undifind*/

//////////////////Exercise 2 : Employees


let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
//Using the map() method, say hello to the users using only their firstname (ie. “Hello Bradley”, “Hello Chloe” ect…)
let uesrsFirstName = users.map((element) => console.log(`hello  ${element["firstName"]}`));

//Using the filter() method, create a new array, containing only the Full Stack Residents.
let onlyFullstack = users.filter((element) => element["role"] === 'Full Stack Resident' );
console.log(onlyFullstack);

//Bonus : Chain the filter method with a map method, to congratulate the Full Stack Residents (ie. “Good job Bradley”, “Good Job Chloe” ect…)
let goodJob = users
					.filter((element) => element["role"] === 'Full Stack Resident' )
					.map((element) => console.log(`good job  ${element["firstName"]}`))
/////////////////// Exercise 3 : Star Wars

let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
///Use the reduce() method to combine all of these into a single string.
let sentence = epic.reduce((acc, element) => acc + ' ' + element);
console.log(sentence);

/////////////Exercise 4 : Employees #2

let student = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];


let newArray = student.filter((element)=>element["isPassed"]==true);



let newArray2 = student
						.filter((element)=>element["isPassed"]==true)
						.map((element)=>console.log(`Good Job ${element["name"]} you passed the course in ${element["course"]}`));