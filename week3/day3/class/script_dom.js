///EX1////
/*
function show(){
	let banner = document.getElementById("ban");
	banner.classList.replace("banner" , "banner-show");
}

setTimeout(show ,3000 );
*/

/// Ex2 functions

let timeId = setInterval(decreaseNumber , 1000);
let spanTime = document.getElementById("time");
let counter = 10;

function decreaseNumber (){
	if(counter >= 0){
		spanTime.textcontent = counter;
		counter--;
	}else{
		spanTime.textcontent = "DONE";
		clearInterval(timeId);
	}
}