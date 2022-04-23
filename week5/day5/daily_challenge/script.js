let select = document.querySelectorAll(".currency");//select in the html
let input_currency = document.getElementById('input_currency');//input html
let output_currency = document.getElementById('output_currency');//input html

fetch(`https://api.frankfurter.app/currencies`)///fetch the api currencies that are available  in the api
  .then((data) => data.json())//from json to object
  .then((data) => {
    console.log(data);
    const entries = Object.entries(data);//recive an array of curcncy type 
    console.log(data)
    //loop to get in the select item in the html the array of currncy
    for (var i = 0; i < entries.length; i++) {
      select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
      select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
    }
    
});

function convert(){
  let input_currency_val = input_currency.value;
  //checks that the currencies are difrent
  if(select[0].value != select[1].value ){
    //alert("yes")
    //https://${host}/latest?amount=10&from=GBP&to=USD`) 
    fetch(`https://api.frankfurter.app/latest?amount=${input_currency_val}&from=${select[0].value}&to=${select[1].value}`)
      .then((val) => val.json())
      .then((val) => {
        output_currency.value = Object.values(val.rates)[0]
        console.log(Object.values(val.rates)[0])
    });
  }else{
    alert("Please select two different currencies")
  }
}
