//1rst Daily Challenge
//Create two functions. Each function should return a promise.
//The first function called makeAllCaps(), takes an array of words as an argument
//If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
//else, reject the promise with a reason.
//The second function called sortWords(), takes an array of words uppercased as an argument
//If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
//else, reject the promise with a reason.


	let array = [1, "pear", "banana"];
	//let array = ["apple", "pear", "banana"];
	//let array = ["apple", "pear", "banana", "melon", "kiwi"];


const makeAllCaps = (words) => 
  new Promise ((resolve, reject) => {
    if (words.every(word => typeof word === 'string')){
      resolve(words.map(word => word.toUpperCase()))
    } else {
      reject(Error('No, the array you passed in contained an element that was not a string!'))
    }
  })

const sortWords = (words) => {
  return words.sort((a, b) => {
    if (a > b){
      return 1
    } else {
      return -1
    }
  })
}

makeAllCaps(array)
  .then(words => sortWords(words))
  .then(result => console.log(result))
  .catch(error => console.log(error))

////////////////////////////////////EX 2
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


const toJs = (str) => {
  return new Promise((resolve,reject) =>{
    if (str .length === 0){
      reject(`this string is empty -- errror`)

    }else{
      let obj = JSON.parse(str)
      console.log(`first function --ok--`);
      resolve(obj)
    }
  })
}

const toMorse = (obj) =>{
  return newp Promise ((resolve,reject)=>{
    let str = prompt("enter a word");
    let arrStr = str.split(``);
    let returnArr=[];

    for(let letter of arrStr){
      if(letter in obj){
        returnArr.push(obj[letter]);
      }else{
        reject(`one letter does not exist`);
      }
    }
    console.log(`A ok!`);
  })
  return returnArr
}

const displayResult = (arr)=>{
  let str = arr.join(` `);
  document.querySelector(`.container`).textContent = str
}

let object = toJs(morse)
  .then((value)=>toMorse(value));
  .then((response)=>displayResult(response));
  .catch((error)=>console.log(error + *catched*));