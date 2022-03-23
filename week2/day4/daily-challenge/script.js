/*Prompt the user for several words (separated by commas).
Put the words into an array.
Console.log the words one per line, in a rectangular frame as seen below.
Check out the Hints and Requirements below.
For example, if the user gives you:
Hello, World, in, a, frame
you will transform it to : ["Hello", "World", "in", "a", "frame"]
that will get displayed as:
*/

let sentence = prompt("please enter a cople of word here : ");
let sentenceToWord = sentence.split(",");
let bigWord = largeWord(sentenceToWord);


function largeWord (array) {
    let len = 0;
    for (word of array) {
        if (word.length > len) len = word.length;
    }
    return len;
}


function printWord(word, maxLength) {
    let addSpace = maxLength - word.length;
    console.log(`* ${word}${" ".repeat(addSpace)} *`);

}


console.log("*".repeat(bigWord+4));

for (word of sentenceToWord) {
    printWord(word, bigWord);
}

console.log("*".repeat(bigWord+4));

