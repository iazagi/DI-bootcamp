

/*
let h1 = document.querySelector("h1");
console.log(h1.innerText);

document.getElementsByTagName("article")[0].lastElementChild.remove();

let h2Red = document.getElementsByTagName("h2")[0];

h2Red.addEventListener("click" , () => h2Red.style.backgroundColor= "red");

let h3Disaper =document.querySelector("h3");

h3Disaper.addEventListener("click", () => h3Disaper.style.display = "none");

let allP = document.querySelectorAll("p");

let myBtn = document.createElement("button");
let myArticle = document.getElementsByTagName("article")[0];

myBtn.innerText = "Cilk on me!!";


//myBtn.addEventListener("click", () => myArticle.style.fontWidth = "bold");
myBtn.onclick = () => myArticle.style.fontWidth = "bold";

myArticle.appendChild(myBtn);


h1.addEventListener("mouseenter", function () {
	let fSize = Math.floor(Math.random() *100)+"px";
	h1.style.fontSize = fSize;
});
*/
////////////////// EX-2////////////
/*
function submitButton(event) {
	////stop refresing the page
    event.preventDefault();

    // Retrieve the inputs by their id and console.log them.

    console.log(`by ID -> ${document.getElementById('fname').value} ${document.getElementById('lname').value}`);
    // Retrieve the inputs by their name attribute and console.log them.
   
    console.log(`by NAME -> ${document.getElementsByName('fname')[0].value} ${document.getElementsByName('lname')[0].value}`);



    let answer = document.createElement('ul');
    answer.className = 'userAnswer';
    document.getElementsByTagName('form')[0].appendChild(answer);

    // When the user submits the form (ie. submit event listener)
    // get the values of the input tags, make sure that they are not empty,
    // create an li per input value,
    // then append them to a the <ul class="usersAnswer"></ul>, below the form.
    

    const data = new FormData(event.target);
    for (let item of data.entries()) {
        if (item[1]=="") {
            alert(`You're missing a value in ${item[0]} field`);
        } else {
            let Li = document.createElement('li');
            Li.innerText = item[1];
            answer.appendChild(Li);
        }
    }
}

const form = document.querySelector('#form1');
form.addEventListener('submit', submitButton);
*/

//Create a global variable named allBoldItems.

//Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
/*
let arrBoldItem = document.body.children[0];

function getBold_items(){
	return arrBoldItem.getElementsByTagName(`strong`);

}

function highLight(elements , color){
	for (let element of elements){
		element.style.color = color;
	}
}

let boldItem = getBold_items();
highLight(boldItem , "blue");

//function return_normal(elements , color){
//	for (let element of elements){
//		element.style.color = color;
//	}
//}

//return_normal(boldItem , "black");

arrBoldItem.addEventListener('mouseenter',() => highLight(boldItem, "blue"));
arrBoldItem.addEventListener('mouseout',() => highLight(boldItem, "black"));

*/

///////////// EX -4 //////////////

function claVolume (e){
	//e.preventDefault();
	let radius = document.getElementById("#radius").value;
	let volume = (4/3)*Math.PI*Math.pow(radius, 3); 
	console.log(volume);
	document.getElementById("#volume").value = volume;
}
//console.log(radius);

//claVolume();
let myForm = document.querySelector("#myForm");
myForm.addEventListener(`click`, claVolume);
//myForm.getElementsByTagName("submit").onclick(claVolume());