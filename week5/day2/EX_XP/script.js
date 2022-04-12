let objxhr;

function makeRequest(myAPI) {
	objxhr = new XMLHttpRequest();
	objxhr.open("GET", `https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
    objxhr.responseType = "json";
    objxhr.send();

	objxhr.onload = function () {
	    if (objxhr.status === 200) {
			let result = objxhr.response;
			console.log(result);
		} else {
			console.log("ERROR FROM THE STATUS")
		}
	}
}
makeRequest(objxhr);


//
//// Exercise 2: retrieve 10 gifs about the “sun”. The starting position of the results should be 2. Console.log the Javascript Object
//const exTwoApi = 'https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offeset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
//// I USED A TIME DELAY BECUASE FOR SOME REASON, SENDING TWO CONSECUTIVE REQUESTS CAUSES AN ERROR
//// OR A CUNFUSION BETWEEN THE TWO REQUESTS. I SUPPOSE IT'S DUE TO THE USE OF THE SAME KEY.
let objxhr2;

function makeRequest2(myAPI) {
	objxhr2 = new XMLHttpRequest();
	objxhr2.open("GET", `https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offeset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
    objxhr2.responseType = "json";
    objxhr2.send();

	objxhr2.onload = function () {
	    if (objxhr.status === 200) {
			let result = objxhr2.response;
			console.log(result);
		} else {
			console.log("ERROR FROM THE STATUS")
		}
	}
}
makeRequest2(objxhr2);