function getProducts(){
  fetch('http://localhost:5000/api/search?name=ip')
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
  .catch(e=>{
    console.log(e);
  })

}

getProducts()
