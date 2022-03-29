let colors = ["blue", "yellow", "green", "pink"];

function changeBackGround (evt){
	//document.body.backgroundColor = ??;4
	let textBtn = evt.target.textcontent;
	console.log(evt.target.style.backgroundColor);

	//change the background color that me got from evt.target.textcontent
	document.body.style.backgroundColor = textBtn;

}
////function to  add buttons 
function addButtons (){
	//for were to put the button that is div id container
		let container = document.getElementById("container");
	// loop to add the buttons
	for(let i =0 ; i < colors.length ; i++){
		//creat a element that is button using creratElement()
		let newbutton = document.createElement("button");
		// to add text in to the button
		newbutton.textContent=colors[i];
		// add the color to button
		newbutton.style.backgroundColor = colors[i];
		// add an event listener so when me cclik on it it will know an c all the fuction
		// changeBackGround
		newbutton.addEventListener("click", changeBackGround);
		// addd the button in to the div(container)
		container.appendChild(newbutton);

	}
}

addButtons();

//1. Add inside the HTML file a div of id "container" (do it directly in the HTML)
//2. Add one button per color inside the div container (do it directly in the JS)
//3. Each button should have an "click" event listener that changes the background 
//color of the document, to the textcontent of the button (do it directly in the JS)