/////////////// dailly challenge day 2
/// retrieve th button

let button = document.getElementById("lib-button");

let span = document.getElementById("story");
let listOfWords = [];

// fuction retrieve values
function retrieveData(){
	//
	let allInputs = document.querySelectorAll("input");


	console.log(allInputs);
	//to retrieve the values from the input i need to loop through the inputs
	//and get the value
	for( let i=0 ;i>allInputs.length ;i++){
		listOfWords.push(allInputs[i].value);
	}

	///text we whant to put in the span in the html
	
	span.textcontent = "   ";
	console.log(listOfWords);
}


button.addEventListener("click", retrieveData);
/*
//1. Retrieve the button
let button = document.getElementById("lib-button");
let listWords = [];

// 3. Function retrieveData
function retrieveData(){
	// 3.1 - before we retrieve the data from the inputs, we need to retrieve
	// the inputs
	let allInputs = document.querySelectorAll("input");

	// 3.2 - to retrieve the values from the inputs, I need to loop through the inputs
	// and retrieve their value
	for(let i=0; i<allInputs.length;i++){
		// 3.3 - to retrieve the value from an input we use element.value
		// 3.3 - retrieve the value of every input and push each of them
		// to the array listWords
		listWords.push(allInputs[i].value);
	}
	// 3.4 - display the sentence on the page
	// retrieve the span that in inside the HTML file
	let span = document.getElementById("story");
	// we use element.textContent to add a text to the span
	span.textContent = `${listWords[2]} is ${listWords[1]} in ${listWords[4]}. He is ${listWords[3]} with a ${listWords[0]}`
}

// 2. Add the button a click event listener
//when we click on the button we call the function retrieveData
button.addEventListener("click", retrieveData);
*/

//////////////////   dom javaScript ductions
function welcomeUser () {
	let section = document.getElementById("container");
	let newDiv = document.createElement("div");
	newDiv.classList.add("box");
	let textDiv = document.createTextNode("Welcome new user");
	newDiv.appendChild(textDiv);

	section.appendChild(newDiv);
}

setTimeout(welcomeUser, 2000);



function welcome (){
	document.body.style.backgroundColor = "red";
	setTimeout(getBlue, 2000)
}

function getBlue(){
	document.body.style.backgroundColor = "blue";
}

setTimeout(welcome, 2000);

//////////////////////////////
