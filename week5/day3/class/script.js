//## Exercise 1
//
//Write a function called `divide` that takes two parameters: a numerator and a denominator.
//Your function should return the result of numerator / denominator.
//However, if denominator is zero you should throw the error, "Attempted to divide by zero."

function divide(num1 ,num2){

  try{
    let result;

    if(num2 !== 0){
      result = num1/num2;
    }else{
      throw RangeError("you cannot divide by zero");
    }
    console.log(result);
  }catch (error) {
    console.log(error.message)
  } finally {
    console.log("-----CALCULATOR---------")
  }
}

divide(9,3);

/////function calculator(a,b){
/////  console.log("a is : ", a, "b is : ", b , "-----------")
/////  try {
/////    let result;
/////
/////    if (b !== 0) {
/////      result = a/b;
/////    } else {
/////      throw RangeError("You cannot divide by Zero")
/////    }
/////    console.log("result : ", result)
/////
/////  } catch (error) {
/////    console.log(error.message)
/////  } finally {
/////    console.log("-----CALCULATOR---------")
/////  }
/////}

//## Exercise 2
//
//Using the code below:
//
//```
//const someVar = 'Cannot be reassigned';
//try {
//  someVar = 'Still going to try';
//} catch(e) {
//  console.log(e);
//}
//
//console.log("after")
//```
//
//
//1. Which type of error will be thrown ? Look on the different types errors on the Google
//2. Is the console.log("after") will be shown on the console ?
const someVar = 'Cannot be reassigned';
try {
  someVar = 'Still going to try';
} 
catch(e) {
  console.log(e);
}

console.log("after")


//sulotion :
//1. The error thrown is a type error: Assignment to constant variable.
//2. the console.log("after") will be run because the error was caught.
// So the error doesn't crash the program