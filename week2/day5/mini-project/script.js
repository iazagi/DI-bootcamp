

function playTheGame() {  
   let userAnswer = confirm(`Do you want to play the game ?`);
   console.log(userAnswer);  
   
   if (userAnswer === false) {
       alert("Good Bye");
    }
    else {
        alert ("Lets Play !:)");
        propmtUser();
    }
}

let computerNumber = Math.floor(Math.random() * 11);

let counter = 0;
function propmtUser(){
    let userNumber = Number(prompt("Whats your Number bro ?"));
    counter++;
    if (counter >= 3){
        alert (`Sorry YOU lose no other chance :(`)
        return
    }
    console.log(userNumber);
    if (isNaN(userNumber)){
            alert(`Sorry Not a number, Goodbye`);
        
    }
    else if (userNumber < 0 ||userNumber > 10 ) {
            alert(`Sorry it's not a good number, Goodbye`);
    }
    else { 
            test(userNumber,computerNumber)
    }
}



function  test(userNum,computerNum){
    console.log(counter,userNum,computerNum);
    
    if (userNum === computerNum){
        alert(`WINNER`);

    }
    else if (userNum > computerNum){
        alert(`Your number is bigger then the computer's, guess again`);
        propmtUser();
    }
    else if (userNum < computerNum){
        alert(`Your number is smaller then the computer's, guess again`);
        propmtUser();
    }

     
}






