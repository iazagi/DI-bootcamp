let number =  14 ;

let compareToTen =new Promise(function(resolve, reject){
	setTimeout(()=>{
		if(number > 10){
			resolve(`${number} is greater then 10 success!`);
		}else{
			reject(`${number} is less then 10 error!`)
		}
	},2000)
})
compareToTen.then(result => console.log(result));
compareToTen.catch(error => console.log(error));

//number=15 ;
//console.log(compareToTen)  

//Exercise 2 : Promises
//Instructions
//Create a promise that resolves itself in 4 seconds and returns a “success” string.
//How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
//Add code to catch errors and console.log ‘Ooops something went wrong’.
let timeResolve =new Promise(function(resolve, reject){
	setTimeout(()=>{
		if(time){
			resolve(`EX-2 success!`);
		}else{
			reject(`EX-2 Ooops something went wrong`)
		}
	},4000)
})
timeResolve.then(result => console.log(result));
timeResolve.catch(error => console.log(error));
let time = true ;
console.log(timeResolve);

///exercise 3 : Resolve & Reject
///nstructions
///use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
///use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

let num = 3;

let promise = new Promise(function(resolve,reject){
	setTimeout(()=>{
		if(num == 3){
			resolve(`EX-3 success!`);
		}else{
			reject(`EX-3 Boooo!`);
		}
	},2000)
})
promise.then(result => console.log(result));
promise.catch(error => console.log(error));

