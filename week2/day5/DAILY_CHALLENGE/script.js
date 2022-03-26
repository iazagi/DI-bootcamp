///////////////daily challenge//////
//////////// Daily Challenge: 99 Bottles Of Beer

let bottlePlus = 1;
let numberOfBottles = +prompt("enter how many bottles of beer is on the wall :");
while (numberOfBottles >= 0) {
    let bottleWord = "bottle";
   	let themOrIt = " them";
   	if( bottlePlus === 1){
   		themOrIt = "it";
   	}
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log(`Take ${bottlePlus} down, pass ${themOrIt} around,`);
	numberOfBottles = numberOfBottles - bottlePlus;
	bottlePlus++;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}