let morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`

//const toJs = (str) => {
//    return new Promise((resolve, reject) => {
//        if (str.length === 0) {
//            reject('this string is empty -- ERROR IN 1st FUNCTION')
//        } else {
//        let obj = JSON.parse(str)
//        console.log('first function --OK--')
//      resolve(obj)
//    }
//  })
//}
const toJo2 = (str) =>{
    async function toJs(){
        if(str.length === 0){
            throw new Error( 'this string is empty -- ERROR IN 1st FUNCTION');
        }else{
            let obj = JSON.parse(str);
            console.log('first function --OK--');
            return obj;
        }
    }
}



const toMorse = (obj) =>{
    return new Promise((resolve , reject)=>{
       let str = prompt('enter a word')
       let arrStr = str.split('')
       let returnArr=[]
        
       for(let i = 0 ; i < arrStr.length ; i++){
           if(arrStr[i] in obj){
               returnArr.push(obj[arrStr[i]])
           }else{
               reject('One letter of the prompt doesnt exist in the object ERROR SECOND FUNCTION')
           }
       }//end of loop
       console.log('second function --OK--')
       resolve(returnArr)

    })//end of promise

}
const toMorse = (obj) =>{
    async function toMorse =(obj) =>{}
}

async function displayResult =(arr)=>{
    
    let toMorse = await toMorse()
    let str =''
    arr.forEach(element => {
        str+= `${element}\n`
    });
    console.log('Third function --OK--')
    document.querySelector('.container').innerText = str
}


//----------------------
// ASYNC AWAIT USING FETCH
// ----------------------

// ---------------
// ERROR HANDLING
//-----------------

let btn = document.getElementById("btn");
btn.addEventListener("click", displayAll)

// 2.
async function getUser () { 
    //2.1 waits for the promise returned by the FETCH API to be settled
    // and assign the result of the promise to the variable response
    let response = await fetch('https://jsonplaceholder.typicode.com/users/1')
    //2.2 check the status of the response
    if (response.status >= 400 && response.status < 600){
        //2.3 if there is an error from the server -> throw an error : rejected promise
        throw new Error("Bad response from server");
        //2.4 if there is no error from the server -> resolve the promise
        // the result of the promise will be response.json()
        // which is itself a promise
    } else {
        return response.json();
    }
}


async function getGifs(user) {
    ////2.1 waits for the promise returned by the FETCH API to be settled
    // and assign the result of the promise to the variable responsegif
    let responsegif = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${user.username}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
    //2.2 check the status of the response
    if (responsegif.status >= 400 && responsegif.status < 600) {
        //2.3 if there is an error from the server -> throw an error : rejected promise
        throw new Error("Bad response from server");
        //2.4 if there is no error from the server -> resolve the promise
        // the result of the promise will be response.json()
        // which is itself a promise
    } else {
        return responsegif.json();
    }
}

//when we click on the button, we call this function
async function displayAll(){
    try {
        let user = await getUser(); //waiting for the getUser promise to be settled
        let gif = await getGifs(user); //waiting for getGifs promise to be settled
        console.log(gif["data"]["title"])
    } catch (err){
        console.log(err.message)
    }
}

