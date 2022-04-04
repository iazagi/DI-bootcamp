/*// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}
/////input :3

//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}
/////input :5

//#3
function q3() {
    window.a = "hello";
}
/////input :

function q32() {
    alert(a); "hello"
}
/////input : nudefine
//#4
var a = 1;
function q4() {
    var a = "test";
    console.log(a);
}
/////input : test 
//#5

var a = 2;
if (true) {
    var a = 5;
    alert(a);
    //input alert 5
}
/////input :5
alert(a);





///Exercise 2 : Ternary Operator
//Transform the winBattle() function to an arrow function.
//Create a variable called experiencePoints.
//Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
//Console.log the experiencePoints variable.


//function winBattle(){
//    return true;
//}

const winBattle = () => true;

let experiencePoints = winBattle ? 10 : 1;
    
   console.log(experiencePoints) ;

////EX 3
///Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. Use ternary operator
//Check out the example below to see the expected output


let passOver = (event) => typeof(event) === `string` ? true : false;

/// ex 4
//Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
//Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")

let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors .forEach((color , index) => console.log(`${index + 1}# choice: ${colors[index]}`));
console.log(colors.included("violet") ? "yeah" : "no...");



//Exercise 5 : Colors #2

//Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.
//” “3rd choice is Red.” ect…

let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];

color.forEach((event , index) =>{
    let count = index>2 ? ordinal[0] : (index==0 ? ordinal[1] : (index==1 ? ordinal[2] : ordinal[3]));
    console.log(`${index+1}${count} choice is ${event}`);
});


///Exercise 6 : Bank Details

//Create a global variable called bankAmount which value is the amount of money currently in your account.
let bankAmount = 0;
//Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
const tax = 1.17 ;

//Create an array with all your monthly expenses, both positive and negative (money made and money spent).
let cashFlow =  ["+200", "-100", "+146", "+167", "-2900"];

//Example : let details = ["+200", "-100", "+146", "+167", "-2900"]
//Create a program that modifies the expenses (ie. the positive AND the negative expenses) so that they will include taxes (multiply each expense by the VAT).
cashFlow.forEach((cashFlow) => bankAmount += Number(cashFlow) + Number(cashFlow) * tax);
//Display your current bankAccount standing at the end of the month.
console.log(bankAmount);
*/














