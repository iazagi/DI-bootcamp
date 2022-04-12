function addGif(giff){
	let inDiv = document.createElement("div");
	inDiv.className = gifInfo;
	let image = document.createElement("img");
	image.src = giff;
	let button = document.createElement("button");
	button.textcontent="clear all";
	button.addEventListener("click", (element) => element.target.parentNode.remove());
	inDiv.appendChild(image);
	inDiv.appendChild(button);

	document.querySelector(`.gifInfo`).appendChild(inDiv);
}


function makeRequest(query) {
	let myApi = `https://api.giphy.com/v1/gifs/search?q=${query}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`;
    xhr = new XMLHttpRequest();
	xhr.open("GET", myApi);
    xhr.responseType = "json";
    xhr.send();
    
    let result;
	xhr.onload = function () {
	    if (xhr.status === 200) {
			result = xhr.response.data;
            let randNum = Math.floor(Math.random() * 50);///get a random number from 0 to 50
            let Gif = result[randNum].images.original.url;/// thaking the img in to a var
            addGif(Gif);/// calling fuction that enters a gif into the dom
		} else {
			console.log("ERROR FROM THE STATUS")
		}
	}
}


document.getElementsByClassName("submit").addEventListener(`click`, (element) => {
	element.preventDefault();
	let Q = document.forms[0]["input"].value;
	makeRequest(Q);
})
document.getElementsByClassName("btnClean").addEventListener(`click` ,(element) =>{
	let removeAll =document.querySelectorAll(".gif");
	for(inDiv of removeAll){
		inDiv.remove();
	}
})