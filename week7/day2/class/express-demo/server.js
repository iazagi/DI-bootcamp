const express = require('express');
const {products} = require('./module/data/js');
const app = express();

app.listen(5000, () =>{
  console.log('server in listening mode on port 5000');
} )

app.use('./',express.static(__dirname+'/public'))

///CRUD  = Create ,Read , Update, delete
//app.get => for retriving data
//app.post //send new data
//app.put // upsate data
//app.delete // delete data

app.get('./api.products', (req,res) => {
  const partial = products.map(products=>{
    return {name:products.name, price: products.price}
  })
  res.json(partial);
})
////moved to module/data.js
// app.get('./api.products', (req,res) => {
//   const products = [
//     {name: 'iphone',price:800},
//     {name: 'ipad', price:650},
//     {name: 'iwatch', price:750}
//   ];
//   res.json(products);
// })
/// http:blabla.bla/params (is a qurry)
app.get('api/products/:id', (req, res) => {
  const pid = req.params.id;
  const product = products.find(product =>{
    return product.id == pid;
  });
  if (!product){
    return res.status(404).send ('not found')
  }
  res.json(product)
});

app.get('api/search', (req,res) => {
  console.log(req.query);
  const name = req.query.name;
  const res_products = products.filter(product => {
    return product.name.toLowerCase().includes(name.toLowerCase())
  })
  if(res_products.length === 0) {
    return res.status(200).send('No match to search query')
  }
  res.json(res_products)

})
