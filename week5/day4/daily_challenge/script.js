//1st Challenge
//Instructions
//Implement a simple version of Promise.all.
//This function should accept an array of promises and return an array of resolved values.
//If any of the promises are rejected, the function should catch them.

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3])
  .then((values) => {
  console.log(values);
});

//The Promise.all() method takes an iterable of promises as an input, 
//and returns a single Promise that resolves to an array of the results of the input promises.
// This returned promise will resolve when all of the input's promises have resolved,
// or if the input iterable contains no promises.//
// It rejects immediately upon any of the input promises rejecting or non-promises throwing an error,
// and will reject with this first rejection message / error.



/////////////////////////////2nd Challenge

//You will find the hour of sunrise of two cities, using the API https://sunrise-sunset.org/api.
//
//In the HTML file, create a form with 6 inputs:
//name of the first city, its latitude and its longitude
//name of the second city, its latitude and its longitude.
//
//Retrieve the input’s value and display the hour of the sunrise for both city ONLY when both promises are resolved
//Hint : Use Promise.all()

//document.getElementsByName("city_name1").addEventListener(`keyup`, function(e){
//  if(e.key == "enter"){
//    let c = e.value;
//    getCity();
//  }
//});
/*let city = `new york`;
//const api_url = `API https://sunrise-sunset.org/?q=${city}`;

async function getCity( ){
  
  if(city == null){
    throw new Error("Bad response from server");
  }else{
     const response = await Fetch(`API https://sunrise-sunset.org/json`);
     console.log(response);
     const data = await response.json();
     
     console.log(data);
     console.log("success");
    return data.latitude;

  }
}
getCity();


const response = fetch(`API https://sunrise-sunset.org/json`);
     console.log(response);
*/
