//// ex1

function myMove(){
   let box = document.getElementById(`animate`);
   let pos = 0 ;
   let id = setInterval(function(){4
      if(pos >= 400){
         clearInterval(id);
      }
      pos++;
      box.style.left = pos+`px`;
   },5)
}


//// ex2
let element = document.getElementById("box1");
element.setAttribute('draggable','true');

element.addEventListener("dragend", function(event) {
    let _x = event.clientX;
    let _y = event.clientY;
    console.log(_x, _y);
    if (_x < 300 && _y < 350 && _y > 50) {
      event.target.style.left = _x + "px";
      event.target.style.top = _y + "px";
      event.target.style.position = "absolute";
    }
  });




