//Exercise 1: Conversion
//Instructions
//Convert the below promise into async await:

//fetch("https://swapi.dev/api/starships/9/")
//    .then(response => response.json())
//    .then(result => console.log(result));


//async function fetchS() {
//  try {
//    const response = await fetch('https://swapi.dev/api/starships/9/')
//    const data = await response.json();
//    console.log(data);
//  } catch (e) {
//    console.log(e);
//  }
//}
//fetchS()
//
//Exercise 2: Analyze

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

///"calling: and "resolved" after 2 sec