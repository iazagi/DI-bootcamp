
const express = require('express');
const bp = require('body-parser');
const {products} = require('./modules/data.js');

const app = express();


app.listen(5000,  () => {
  console.log('server in listening on port 5000');
})

app.use('/',express.static(__dirname+'/public'))
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());
// CRUD = Create, Read, Update, Delete
// app.get GET rtrieving data
// app.post POST send new data
// app.put PUT modify / update data
// app.delete DELETE delete data

// res.status(200) ok
// 201 Creared
// 204 No Content
// 400 Bad request
// 401 Unauthorized
 // 403 Forbidden
 // 404 not Found
 // 500 server error

app.get('/api/products', (req, res) => {
    const partial = products.map(product=>{
      return { name:product.name, price:product.price}
    })
    res.json(partial);
})

app.get('/api/products/:id',(req,res)=>{
  const pid = req.params.id;
  const product = products.find(product => {
    return product.id==pid
  });
  if(!product){
    return res.status(404).send('Not Found')
  }
  res.json(product)
})

app.get('/api/search',(req,res)=>{
  // console.log(req.query);
  const name = req.query.name;
  const res_products = products.filter(product => {
    return product.name.toLowerCase().includes(name.toLowerCase())
  })
  if(res_products.length === 0) {
    return res.status(200).send('No match to search query')
  }
  res.json(res_products)
})

app.post('/api/products', (req,res) => {
  const {name,price} = req.body;
  const new_product = {
    id: products.length+1,
    name: name,
    price: price
  }
  products.push(new_product)
  res.json(products)
})
