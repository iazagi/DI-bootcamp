//# Review on Javascript
//​
//​
//1. How to access the second element of the array `
//let arr = [3, 7, 10]
//console.log(arr[1])
//2. For the code below, what does `arrNums.splice(2, 0)` return?
//    javascript
//    let arrNums = [1, 2, 3, 4, 5];
//    console.log(arrNums.splice(2, 0));
 //   att postion 2 remove 0 elements

//3. What is the result of the following code :
 //   javascript
/*    const oneTwoThree = [1, 2, 3]
    const sevenEightNine = [7, 8, 9]
    
    const all = [4, 5, 6, ...oneTwoThree, ...sevenEightNine];
    console.log(all)
    [4, 5, 6,1, 2, 3,7, 8, 9]
*/
//4. What does the following code print to the console?
//javascript
/*   let golf = {
     type: "sport",
     clubs: {
       high_end: "taylor made",
       low_end: "rusty basement clubs"
     }
   }  
   golf.clubs.high_end = "callaway";
   console.log(golf.clubs.high_end);
  change the value of high_end to callaway
*/ 
/*5. Can we define the function as follows? If yes, what is it called, and explain how to invoke it.javascript
    const x = function(a, b){
       return a*b;
    }
      yes you can
  */

/*6. Variables created **without** any keyword, are always global, even if they are created inside a function ? Yes or No and explain
    function x() {
    	a = 5;
    }
    console.log(a);
   no a is not defined ;
*/ 
//#### Functions

/*//7. In JavaScript can we pass functions as arguments to other functions? What does this code return ?javascript
    function sayHello() {
       return "Hello, ";
    }
    function greeting(helloMessage, name) {
      console.log(helloMessage() + name);
    }
    greeting(sayHello, "JavaScript!");
    returns hello javascript
*/

/*//8. Transform this function into an arrow function javascript
   //   function sum(num1, num2){
    //      return num1 + num2
     // }
       let sum = (num1 , num2)=>num1+num2;
      sum(40,2)
      sum(42,0)
      console.log("the answer to everything is", sum(42,0))
  */    
  
/*// What does the following code print to the console? Explain the process and concept behind it
   
     function foo () {
       function bar() {
         return "Poppin' bottles";
       }
       return bar();
     }
     console.log(foo());
  */  // function with in a function returns "Poppin' bottles"

//#### DOM

/*10. Which of the following events will you add in the `addEventListener()`method? 
      ☐ click
      ☐ onclick
     click
     */ 
/*11. Does the `addEventListener()` method allow you to add many events to the same element?


    x.addEventListener("mouseover", func1);
    x.addEventListener("click", func2);
    x.addEventListener("mouseout", func3);`
   yes
   */


//12. DOM exercise

/*    //  1. Part I : Create a button in your HTML page, when the user will click the the button a paragraph will be added on the DOM with the content "New Paragraph". Use arrow functions
      let button = document.querySelector('#btn');
      console.log(button);
     button.addEventListener('click', () => {
      let newP = document.createElement('p');

      newP.textContent="hello hello";
      document.body.appendChild(newP);
  

     // 2. Part II : Add to each new paragraph a event listener of mouse over. When you hoover on a paragraph, it should become red
    
     newP.addEventListener('mouseover', () => {
        newP.style.color = "red";
     })

});

*///#### Array Methods

//14. What is the value of `passed` in the following code?

    
/*     let marks = [67, 60, 89, 90, 67, 42];
     
     let passed = marks.every(function(m) {
        return m >= 50
     });

     passed = true
    */

//15. What does the following code log?
/*
   let nums = [10, 50, 88];
   
   let bignums = nums.filter(function(n) {
      return n > 10;
   });
   
   console.log(bignums);
   bignums = [ 50, 88];
*/
//16. Use a javascript array method to square the value of every element in the array. 


/*   const input = [ 1, 2, 3, 4, 5 ];
   for(let i=0 ;i<input.length;i++){
    input[i] =Math.pow(input[i],2)
   }
   console.log(input) // [ 1, 4, 9, 16, 25]
  */ 

//16. Use 2 javascript array methods and chain them to return the sum of all the positives ones. 


/*     const secondInput = [ 1, -4, 12, 0, -3, 29, -150];
     //code
     console.log(total) //42
 */    

//17. Use 3 javascript methods and chain them to abbreviate the name and return the name initials.

     
/*     const input = 'George Raymond Richard Martin';
     let matches = input.match(/\b\w/g).join('');

     console.log(matches)//'GRRM'
   */ 

//#### Object and Classes
/*
18. How the objects are passed in JavaScript? By Value or By Reference ? Explain with an example
How are the objects passed by reference or by value JavaScript?
Javascript always pass by value so changing the value of the variable never changes the underlying
 primitive (String or number). However, when a variable refers to an object which includes array,
  the value is the reference to the object.
*/

//19. What will be printed in the console


/*    function Item(name, price) {
       this.name = name;
       this.price = price;
       this.displayInfo = function() {
       console.log(this.name + " is for $ " + this.price)
       }
    } 
    const cake = new Item("Chocolate Cake", 10);
    cake.displayInfo();
  pirnt out :Chocolate Cake is for $ 10
*/

//20. Refactor this code using Classes
// class Item {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//         this.displayInfo = function () {
//             console.log(this.name + " is for $ " + this.price);
//         };
//     }
//
//#### Promises

//21. What will be the output and why ? What will be the state of the promise ?

/*    Promise.resolve('Success!')
      .then(data => {
        return data.toUpperCase()
      })
      .then(data => {
        console.log(data)
      })
  output :SUCCESS  state of the promis= resolve;
  */
//22. What log will be made by the following code, after 2 seconds?

/*    const p = new Promise(function(resolve, reject) {
       setTimeout(function() {
          resolve("OK");
       }, 2000);
    });
    
    p.then().then(function(data) {
       console.log(data);
    });
    output ok
*/
//23. Consider the following async function and its output. What will be displayed to the console when calling the `f()` function? Explain the process
    
/*    async function f() {
      let result = 'first!';
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done!'), 1000);
      });
    
      result = await promise;
    
      console.log(result);
    }
    
    f();
    output : DONE
    */
    /*
24. Use async await, and fetch to a fact on cats and display it `https://catfact.ninja/fact`. 
    1. Create 2 functions : on to fetch data from API, the other one to display it on the page using the DOM
    2. Make sure to use try and catch 
    */
    // fetchUrl();
// async function fetchUrl() {
//     try {
//         let url = await fetch("https://catfact.ninja/fact")
//         let cat = await url.json();
// console.log(`cat`, cat);
//         displayCat(cat);
//     } catch (error) {
//         console.log('ooops', error);
//     }

// }

// function displayCat(cat){
//     let catFact = document.createElement('p');
//     catFact.textContent = `CAT fact : ${cat['fact']}`
//     document.body.appendChild(catFact);
// }

// // let url = fetch("https://catfact.ninja/fact")
// //     .then(url => url.json())
// //     .then(data => {
// //         let catFact = document.createElement('p');
// //         catFact.textContent = `CAT fact : ${data['fact']}`
// //         document.body.appendChild(catFact);
// //     })
