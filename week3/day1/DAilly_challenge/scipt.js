/*
//document.getElementById("navBar").setAttribute("id","socialNetworkNavigation");


let addLi = document.createElement("li");//create a new Li
let liText = document.createTextNode("Logout") ;//text to add

addLi.appendChild(liText);

document.getElementsByTagName("ul")[0].appendChild(addLi);

let firstUl =document.getElementsByTagName("ul")[0];
console.log(firstUl.firstElementChild.textContent , firstUl.lastElementChild.textContent);


/*In the <div> above, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
We are going to add a new <li> to the <ul>.
First, create a new <li> tag (use the createElement method).
Create a new text node with “Logout” as its specified text.
Append the text node to the newly created list node (li).
Finally, append this updated list node to the unordered list above, using the appendChild method.
Bonus

*/



/*
//////Exercise 2 : Users

let nameChange = document.querySelectorAll(`.list`);
nameChange[0].lastElementChild.textContent = `Richard`;
//go to first ul and last child

//Change each first name of the two <ul>'s to your name.
nameChange[0].firstElementChild.textContent = `israel`;
nameChange[1].firstElementChild.textContent = `israel`;

/// At the end of each <ul> add a <li> that says “Hey students”

addLi = document.createElement("li");//create a new Li
liText = document.createTextNode("Hey students") ;//text to add

addLi.appendChild(liText);

document.getElementsByTagName("ul")[0].appendChild(addLi);

addLi = document.createElement("li");//create a new Li
liText = document.createTextNode("Hey students") ;//text to add

addLi.appendChild(liText);

document.getElementsByClassName("list")[1].appendChild(addLi);

*/

//Add a “light blue” background color and some padding to the <div>.
let container = document.querySelectorAll(`div`)[0];
container.style.backgroundColor = "lightblue";
container.style.padding = "20px";


let allternatUl = document.querySelectorAll(`ul`)[0];
allternatUl.firstElementChild.style.display = `none`;

allternatUl.lastElementChild.style.border ="2px solid black";

document.body.style.fontSize = "30px";
