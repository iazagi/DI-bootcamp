//WITH PARSING and WITHOUT ADDEVENT HANDLER
//Point the project: retrieve the data from this api: https://jsonplaceholder.typicode.com/users
//and display the data on the page
//XMLHTTREQUEST

//add event listeners

let btn = document.getElementById("btn");
btn.addEventListener("click", makeRequest);
let objxhr;

//MAKING THE REQUEST

//1.create the XMLHTTPREQUEST object
function makeRequest() {
	objxhr = new XMLHttpRequest();

	//2. Make the request
	objxhr.open("GET", "https://jsonplaceholder.typicode.com/users");

	//3. Send the request to the server
	objxhr.send();


	// CHECK THE RESPONSE OR CHECK THE DATA PROCESSING FROM THE SERVER

	//process the data

	objxhr.onprogress = function(){
		document.body.style.backgroundColor = "blue";
		console.log("THE SERVER IS PROCESSING THE DATA")
	}


	objxhr.onload = function () {
		document.body.style.backgroundColor = "white";
		if (objxhr.status === 200) {
			console.log("SUCCESS")
			let result = JSON.parse(objxhr.response)
			console.log(result)

			result.forEach(element => {
				let para  = document.createElement("p");
				let text = document.createTextNode(element["email"]);
				para.appendChild(text);
				document.body.appendChild(para)
			})

		} else {
			console.log("ERROR FROM THE STATUS")
		}
	}



//Point the project: retrieve the data from this api: https://jsonplaceholder.typicode.com/users
//and display the data on the page
//XMLHTTREQUEST

//add event listeners

let btn = document.getElementById("btn");
btn.addEventListener("click", makeRequest);
let objxhr;

//MAKING THE REQUEST

//1.create the XMLHTTPREQUEST object
function makeRequest() {
	objxhr = new XMLHttpRequest();

	//2. Make the request
	objxhr.open("GET", "https://jsonplaceholder.typicode.com/users");
	objxhr.responseType = "json";
	//3. Send the request to the server
	objxhr.send();


	// CHECK THE RESPONSE OR CHECK THE DATA PROCESSING FROM THE SERVER

	//process the data

	objxhr.onprogress = function(){
		document.body.style.backgroundColor = "blue";
		console.log("THE SERVER IS PROCESSING THE DATA")
	}


	objxhr.onload = function () {
		document.body.style.backgroundColor = "white";
		if (objxhr.status === 200) {
			console.log("SUCCESS")
			let result = objxhr.response
			console.log(result)

			result.forEach(element => {
				let para  = document.createElement("p");
				let text = document.createTextNode(element["email"]);
				para.appendChild(text);
				document.body.appendChild(para)
			})

		} else {
			console.log("ERROR FROM THE STATUS")
		}
	}

	// 7. when the request couldn't be made - when there is a NETWORK error
	objxhr.onerror = function() {
		console.log("error", xhr);
	};


	// XMLHTTPREQUEST is a WEBAPI and ASYNCHRONOUS so non blocking the loop
	for(let i = 0; i<15; i++){
		console.log("in the loop", i)
	}

}