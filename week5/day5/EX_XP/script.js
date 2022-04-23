
let container = document.getElementsByClassName("container");
let button = document.querySelector("#btn");
let names = document.querySelector('#name');
let height = document.querySelector('#height');
let gender = document.querySelector('#gender');
let birthYear = document.querySelector('#birth-year');
let homeWorld = document.querySelector('#homeworld');



async function getName() {
    let randNum = Math.floor((Math.random() * 88) + 1);
    const response = await fetch(`https://swapi.dev/api/people/${randNum}/`)
    if (response.status !== 200) {
        throw new Error('oops melfunction do try again');
    } else {
        loading();
        const data = await response.json();
        console.log(data);
        displayData(data); 
    }
}
// insert the data into the section
async function displayData(data) {
    try {
        let home = await fetch(data['homeworld']);
        let homeData = await home.json();
        console.log(homeData);
        names.innerText = `Name :  ${data['name']}`;
        height.innerText = `Height :  ${data['height']}`;
        gender.innerText = `Gender :  ${data['gender']}`;
        birthYear.innerText = `B-Day :  ${data['birth_year']}`;
        homeworld.innerText = `Home-World :  ${homeData['name']}`;

    } catch (error) {
        container.innerText = 'ERROR Loading';
    }

}
//loading grafic
function loading(){
    let strHTML = `<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i> <p>Loading...</p>`
    names.innerHTML = strHTML;
    height.innerText ='';
    gender.innerText ='';
    birthYear.innerText ='';
}

button.addEventListener("click", getName );
