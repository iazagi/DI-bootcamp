////////////////////////////////////Lesson on fetch

//I do a get request to the url
//the fetch method RETURNS A PROMISE
// THE PROMISE IS FULFILLED OR REJECTED
// The promise has a value, which is a reponse object
console.log(fetch('https://lisenakache.github.io/HttpRequestGithub/test.json'))


// Promise {<pending>}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: Response

fetch('https://lisenakache.github.io/HttpRequestGithub/test.json')
   .then(result => {
      // console.log(result) //Response object
      // console.log(result.json())
      
      // Promise
      // [[PromiseState]]: "fulfilled"
      // [[PromiseResult]]: Array(3)
      // 0: {name: 'Meowsy', species: 'cat', foods: {…}}
      // 1: {name: 'Barky', species: 'dog', foods: {…}}
      // 2: {name: 'Purrpaws', species: 'cat', foods: {…}}


      return result.json()
   })
   .then(animals => {
      animals.forEach(element => {
         let para =  document.createElement("p");
         let text = document.createTextNode(element["name"]);
         para.appendChild(text);
         document.body.appendChild(para)
      })
   })
   .catch(error => console.log(error))


////////////////////////////////////////CHECKING THE STATUS

fetch('https://lisenakache.github.io/HttpRequestGithub/tst.json')
   .then(result => {
      if(result.status !== 200) {
         throw new Error ("status incorrect")
      } else {
         return result.json()
      }
   })
   .then(animals => {
      animals.forEach(element => {
         let para =  document.createElement("p");
         let text = document.createTextNode(element["name"]);
         para.appendChild(text);
         document.body.appendChild(para)
      })
   })
   .catch(error => console.log("in the catch", error))



   let form = document.getElementById("formCategory");
form.addEventListener("submit", retrieveDataFromForm);

function retrieveDataFromForm(event){
   event.preventDefault();
   let inputCategory = event.target.elements.categoryInput;
   makeRequest(inputCategory.value)
}

//fetch method returns a promise
//this is why I can "consume" it with the .then
//the promise contains 2 things :
   // * state : fulfilled or rejected
   // * result : Response Object 

   //if the promise is fulfilled -> i go to the first then()
   //if the promise is rejected -> i go to the catch method 


//Response object looks like this:
// Response {type: 'cors', url: 'https://api.giphy.com/v1/gifs/random?tag=cat&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My', redirected: false, status: 200, ok: true, …}
// body: (...)
// bodyUsed: false
// headers: Headers {}
// ok: true
// redirected: false
// status: 200
// statusText: ""
// type: "cors"
// url: "https://api.giphy.com/v1/gifs/random?tag=cat&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
// [[Prototype]]: Response

//Let's say the promise is fulfilled, we go to the then() method
// the then method takes an argument -> result from the previous promise
// result from the previous promise -> Response object
// then the then() method return response.json()
// which is the data that the server sent back - parsed into a JS Object

//What does the first .then() returns
//returns response.json() -> it's a promise

   // Promise {<pending>}
   // [[Prototype]]: Promise
   // [[PromiseState]]: "fulfilled"
   // [[PromiseResult]]: Object
   // data: {type: 'gif', id: 'SjqU4gjf6FYpa', url: 'https://giphy.com/gifs/christmas-cat-SjqU4gjf6FYpa', slug: 'christmas-cat-SjqU4gjf6FYpa', bitly_gif_url: 'http://gph.is/XLzD1I', …}
   // meta: {msg: 'OK', status: 200, response_id: '21d3dcaf71e4a7de41d87c9e61d632301709b7b5'}
   // [[Prototype]]: Object

//because the first .then() method returns a promise
// I can consume it with another .then() method

//we enter the second .then() method
//what is the argument taken by the second .then() method ?
//it's the result of the previous promise : the gif object


function makeRequest(categoryUser){
   fetch(`https://api.giphy.com/v1/gifs/random?tag=${categoryUser}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
   .then(response => {
      // console.log(response) // RESPONSE OBJECT
      // console.log(response.json())
      // parsing the json string to a js object
      // and returns a promise

      if (response.status !== 200){
         throw new Error("Not good status")
      }
      return response.json()
   })
   .then(gif => {
      console.log(gif)
      let gifURL = gif["data"]["images"]["original"]["url"];
      let section = document.getElementById("container");
      let imageGif =  document.createElement("img");
      imageGif.setAttribute("src", gifURL)
      section.appendChild(imageGif);
      return "abc"
   })
   .then(string => console.log(string))
   .catch(error => error)
}