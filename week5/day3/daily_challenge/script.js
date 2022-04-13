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
