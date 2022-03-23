
///// EX 1 /////




function NameAndAgeOutput(MyAge){
    console.log(`my mum age is ${MyAge*2} and my dad age is ${(MyAge*2)*1.2}`)
*1.2
}
MyAge = 6;
NameAndAgeOutput(8);

NameAndAgeOutput(15);

NameAndAgeOutput(MyAge);




function enoughChange(itemPrice, amountOfChange) {
    // Change will always be represented in the following order: quarters, dimes, nickels, pennies.
    // A quarters is 0.25, A dimes is 0.10, A nickel is 0.05, A penny is 0.01
    const changeVals = [0.25, 0.1, 0.05, 0.01];
    let changeSum = 0;
    for (i = 0; i<changeVals.length; i++) {
        changeSum += amountOfChange[i] * changeVals[i];
    }
    console.log(`Change sum is: ${changeSum}`);
    // In the function, determine whether or not you can afford the item.
    // If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
    // If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false
    return (itemPrice < changeSum);
}
// The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)
console.log(enoughChange(4.25, [25, 20, 5, 0]));

// changeEnough(14.11, [2,100,0,0]) => returns false
console.log(enoughChange(14.11, [2,100,0,0]));

// changeEnough(0.75, [0,0,20,5]) => returns true
console.log(enoughChange(0.75, [0,0,20,5]));