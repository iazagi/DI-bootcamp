// EX-1 find sum

//let sumOf = (first , second)=> first + second ;
//console.log(sumOf(8,8));

// EX-2 kg and grams

//let weightGr = function (w){return w * 1000 }
//console.log(weightGr(5));
 //EX 2

//declaration function as to be named fuction expression can be ananumes ;

// uuse line arrow function4
// EX-2
let weightGr = (w) => w*1000;
console.log(weightGr(8));

//EX 3
//Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
//The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to 
//<partner's name> with <number of children> kids."

//(function(numChildren , partnerName, geoLoction, jobTitle){
//	let sentence = document.createElement("p");
//	sentence.innerText = ` you will be a ${jobTitle} in ${geoLoction}, and married to ${partnerName} with ${numChildren} kids.`;
//	document.body.appendChild(sentence);
//})(3, "vered", "tel-aviv", "programer")


////  EX-4

/*
(function(userName, image){
	let div = document.createElement("div");
	let myUser = document.createTextNode(userName);
	let userImg = document.createElement("img");
	userImg.src = image; 
	div.appendChild(myUser);
	div.appendChild(userImg);
	let navnav = document.getElementsByClassName("navbar")[0];
	navnav.appendChild(div);

})("israel",mario.png )
//// does not work ??
*/
/// EX - 5 juice bar

function makeJuice(sizeBev){

	let sizeBevrege = sizeBev;

	function addIngredients(fing, sing, ting){
		let sentence = document.createElement("p");
		sentence.innerText = `The client wants a ${sizeBevrege} juice, containing ${"fing"}, ${"sing"}, ${"ting"}". `:
		document.body.appendChild(sentence);
	}


}
makeJuice("banana","apple","pear");