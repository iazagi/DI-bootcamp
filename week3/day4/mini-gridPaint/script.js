let color_col = 3;
let color_row = 8;
let color_count = color_col * color_row;

let main_col = 60;
let main_row = 40;
let main_count = main_col * main_row;
let color= null;
let mousedown = false;

let sidebar = document.querySelector('#sidebar');
let main = document.querySelector('#main');
let buttonClear = document.querySelector(`#clear`);
let body = document.getElementsByTagName(`body`)[0];
let mainDivs = [];



for (let i = 0; i < color_count; i++) {
  let div = document.createElement('div');
  div.style.backgroundColor = generateRandomColor();
  div.addEventListener(`click`, function(event){
  		color =event.target.style.backgroundColor;
  })
  sidebar.appendChild(div)
}


for (var i = 0; i < main_count; i++) {
  let div = document.createElement('div');
  main.appendChild(div)
  div.addEventListener(`mousedown`, function(event){
  	if(color != null){
  	event.target.style.backgroundColor = color;
   }
   });
  div.addEventListener(`mouseover`, function(event){
  	if(mousedown && color !=null){
   		event.target.style.backgroundColor = color;
  	}
   })
  mainDivs.push(div);
  main.appendChild(div);
}
body.addEventListener(`mousedown`,function(event){
	mousedown = true;
});
body.addEventListener(`mouseup`,function(event){
	mousedown = false;
});

function generateRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

buttonClear.addEventListener(`click`, function(event){
	for(x of mainDivs){
		x.style.backgroundColor = "lightgray";
	}
})

	
 





// console.log(generateRandomColor())

/*

const canvas = document.getElementById("grid");
const ctx = canvas.getContext(`2d`);


	for(let i = 5; i <= 605 ; i = i + 30 ){
		//vertical lines
		ctx.moveTo(i,5);
		ctx.moveTo(i,605);

		//horizontal line
		ctx.moveTo(5, i);
		ctx.moveTo(605, i);

		ctx.strokeStyle = "#000";
		ctx.stroke();

	}
*/