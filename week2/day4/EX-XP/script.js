

function infoAboutMe(){
    console.log("my name is israel and i love sleeping late ");
}

infoAboutMe();


///Part II : function with three parameters
function infoAboutPerson(personName, personAge, personFavoriteColor){
    console.log(` my name is ${personName} my age is ${personAge} and my favorit color is ${personFavoriteColor}`);

}
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");



////////////// Exercise 2 : Tips/////////////////

//Create a function named calculateTip() that takes no parameter.
//Inside the function, ask John for the amount of the bill.

//Here are the rules
//If the bill is between $50 and $200, tip 15%.
//Console.log the tip amount and the final bill (bill + tip).

//Call the calculateTip() function.

let TheBillPlusTip = 0;
function calculateTip(){
    let billAmount = prompt("how much is the bill??");
    if(billAmount < 50 && billAmount < 200){
        TheBillPlusTip = billAmount * 1.2 ; }
    if(billAmount > 50 && billAmount < 200){
        TheBillPlusTip = billAmount * 1.15 ; }
    if(billAmount > 200){
        TheBillPlusTip = billAmount * 1.1 ; }
    console.log(`the bill plus tip came out to : ${TheBillPlusTip}`);
}

calculateTip();


////////////Exercise 3 : Find The Numbers Divisible By 23 and sum them//////////
let arrayDivided = [];
let sum = 0;
function isDivisible(){
    for( let i = 0 ; i <= 500; i++ ) {
        if(i % 23 == 0){
             arrayDivided.push(i);
             sum += i;
        }
     
    }
    
}

isDivisible();
console.log(arrayDivided);

console.log(`th sum is : ${sum}`);

//////// Exercise 4 : Shopping List  /////////

let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingList =["banana", "apple", "orange" ];
    

///Create a function called myBill() that takes no parameters.
//function MyBill();

///The function should return the total price of your shoppingList. In order to do this you must follow these rules:
//The item must be in stock.
//If the item is in stock find out the price in the prices object.
let sumOfList = 0;
function MyBill(){
    for (let i of shoppingList){
        if (stock[i] -= 1){
            sumOfList += prices[i];
        }
    }
}
MyBill();
console.log(`the bill is : ${sumOfList}`);



///////////////Exercise 5 : What’s In My Wallet ?//////////////

// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.
let sumOfChange = 0;
let changeVal = [0.25 , 0.10, 0.05, 0.01];
function changeEnough(itemPrice, amountOfChange) {
        for(let i = 0 ; i < changeVal.length ; i++){
            sumOfChange += amountOfChange[i] * changeVal[i];
        }


    console.log(`the amount of change is : ${sumOfChange}`);
       if(sumOfChange > itemPrice){
        console.log("true");
       }else{
        console.log("false");
       }
}

changeEnough(4.25, [25, 20, 5, 0]);

changeEnough(14.11, [2,100,0,0]);
changeEnough(0.75, [0,0,20,5]);

//////////////Exercise 6 : Vacations Costs //////////////


//// main function with the bouns part
function totalVacationCost() {
     let numOfNights = 0;
     do {
        numOfNights = Number(prompt("Please enter a number of nights in the hotel> "));
    }
    while (isNaN(numOfNights) || numOfNights < 1);
    let hotelCosts = hotelCost(numOfNights);

    
    
    let destination = "";
    do {
        destination = prompt("What's your destination? ");
    }
    while (destination == "");
    let flightCost = planeRideCost(destination);
    
   
    let carRent;
    do {
        carRent = Number(prompt("Please enter a number of days to rent a car> "));
    }
    while (isNaN(carRent) || carRent < 1);
    let carCost = rentalCarCost(carRent);
   
    
    return carCost + hotelCosts + flightCost;
}



function hotelCost(numOfNights) {
    return numOfNights*140;
}

///destination  

function planeRideCost(destination) {
    let costs = 0;
    switch (destination.toLowerCase()) {
        case "london":
            costs = 183;
            break;
        case "paris":
            costs = 220;
            break;
        default:
            costs = 300;
    }
    return costs;
}

/////  car rent

function rentalCarCost(carRent) {
    return (carRent > 10) ? carRent*40*0.95 : carRent*40;
}


///// output
console.log(`Your total vacation costs will be $${totalVacationCost()}`);

