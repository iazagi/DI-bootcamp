////


//Instructions
//In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

//Create a class named Video. The class should be constructed with the following parameters:
//title (a string)
//uploader (a string, the person who uploaded it)
//time (a number, the duration of the video - in seconds)
class Video{
  constructor(title, uploader, time){
    this.videoTitle = title;
    this.videoUpLoader = uploader;
    this.videoTime = time;
  }
  //Create a method called watch() which displays a string as follows:
  //“uploader parameter watched all time parameter of title parameter!”
      watch() {
        let sentence = `${this.uploader} watched all ${this.time} seconds of ${this.title}`;
        console.log(sentence);
    }
}


//Instantiate a new Video instance and call the watch() method.

let video1 = new Video("big in japan", "alphaville", 450 );
Video.watch();

//Instantiate a second Video instance with different values.

let video2 = new Video("poison", "alice cooper", 450 );
Video.watch();


//Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
//Think of the best data structure to save this information within the array.
//Bonus: Loop through the array to instantiate those instances.