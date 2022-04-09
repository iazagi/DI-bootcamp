
//////////////////////////////////////////Lesson on Currying
//
//
////with currying
//function getPriceWithTaxes(tax) {
//    return function (price) {
//      return (price*tax).toFixed(2)
//    }
//}
//
//let taxIsrael = getPriceWithTaxes(1.17);
//let firstMeat =  taxIsrael(23);
//let secondMeat =  taxIsrael(100);
//let thirdMeat =  taxIsrael(76);
//
//let taxUSA = getPriceWithTaxes(1.20);
//let firstMeat =  taxUSA(23);
//let secondMeat =  taxUSA(100);
//let thirdMeat =  taxUSA(76);
//
//
//
//function tableMultiplication(table){
//      return function (number){
//        console.log(table*number)
//      }
//}
//
//let tableof5 = tableMultiplication(5);
//
//let multiplyBy1 = tableof5(1);
//let multiplyBy2 = tableof5(2);
//let multiplyBy3 = tableof5(3);
//let multiplyBy4 = tableof5(4);
//
//
//
//Create a curried function, that returns the volume of an object
//the volume is calculated like this length * weight * height
//
//Call the function twice, for products of length 10cm. Weight and Height can differ
//
//Call the function twice, for products of length 10cm and weight 2 grams,  height can differ

function CalVolume(length) {
    return function(weight){
      return  function(height){
        console.log(`calculation : ${length}*${weight}*${height}`);
        return length*weight*height
      }
     }
}

let firstVolume = CalVolume(3);
firstVolume(4)(5);
console.log(CalVolume)


///////////////////////////////////////////Lesson on closures



// 2. This is the function
function makeJuice (sizeJuice) {

  //initialize an empty array
  let ingredients = [];

  // declare the inner function
  // 2. Here
  // 6. Here
  function addIngredients (newIngredient){
    //3. "apple" -> push it to the ingredients
    //7. "banana" -> push it to the ingredients
    ingredients.push(newIngredient)
    console.log(`Ingredients array : ${ingredients}`) //4. ["apple"]
                              //6. ["apple", "banana"]
  }

  // return the reference of the addIngredients function
  return addIngredients;

}

// GOAL: make the addIngredients function available in the global scope
const newJuice = makeJuice("small");
//newJuice is equal to the reference of the addIngredients functions
// ƒ addIngredients (newIngredient){
//  ingredients.push(newIngredient)
//  console.log(`Ingredients array : ${ingredients}`)
// }
newJuice("apple") // 1. Call the function addIngredients() with "apple"
newJuice("banana") // 5. Call the function addIngredients() with "banana"

//Also
makeJuice("small")("apple");

// reset - the ingredients array
// makeJuice("small")("apple")
// makeJuice("small")("banana")


A closure is a function having access
to the parent scope even after a parent function has closed

Closures keep local variables alive 
from functions that should have destroyed them a long time ago.;




// -----------------------
///////////////////////////////////////// COMPOSITION & CURRYING
// -----------------------

// Function composition is the process of combining 
// two or more functions to produce a new function.

// in other terms we are solving a problem reducing it 
// into smaller solutions that in 
// themselves don't accomplish much but together can solve complex tasks.

const double = x => x * 2
const square = (w) => w * w


// Tradition approach
let doubleNumber = double(2);
let squareNumber = square(doubleNumber)

//composition approach
let squareNum = square(double(2))
let squareNumTwo = square(double(8))

// console.log("squareNum", squareNum)
// console.log("squareNumTwo", squareNumTwo)

//----
//2nd function
const g = n => {
  console.log("in the g function")
  return n + 1;
}

//3rd function
const f = n => {
  console.log("in the f function")
  return n * 2;
}

// 1st function
const h = x => {
  console.log("in the h function")
  return f(g(x));
}

let result = h(20);
console.log(result) //=> 42

////////////////////////Ex

// "John" -> return ["J", "o", "h", "n"]
//     -> return ["J", "O", "H", "N"]
//     -> "J.0.H.N"

//Create 3 function
// 1. First, that split the name
// 2. Then the second one make every letter uppercase 
// 3. Finally, the last one add . between each letter (join)

const splitsName = username => username.split("");

const letterUppercase = splittedUserName =>{ splittedUserName.forEach((element, index) =>
                      splittedUserName[index] = splittedUserName[index].uppercase())
                      return splittedUserName;
                    }

const joinLetter = arrayUppercase = > arrayUppercase.join(".");

let newName =joinLetter(letterUppercase(splitsName("john")));
console.log(newName);
            

