let sentence = "The movie is that bad, I like it";
let SentenceArry = sentence.split(" ");
//creat wordNot looking for the word "not"
let wordNot =  SentenceArry.indexOf("not");
//  creat wordBad looking for the word "bad"
let wordBad =  SentenceArry.indexOf("bad");

/*
If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
For example, the result here should be : “The movie is good, I like it”
If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.
*/

if (wordBad > wordNot && wordBad > -1 && wordNot > -1) {
	SentenceArry.splice(wordNot , wordbad-wordNot);
	SentenceArry.splice( wordNot, 1, "good");
	sentence = SentenceArry.join(" ");
}
console.log(sentence);