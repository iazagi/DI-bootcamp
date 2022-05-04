const express = require('express');
const app = express();

app.listen(3000, ()=>{
  console.log('listen on port 3000');
})

app.use('/', express.static(__dirname + '/public'))
app.use('/pic', express.static(__dirname + '/images'))

app.get('/users', (req,res) => {
  const user = {
    firstname: 'John',
    lastname: 'Doe'
  }
  res.json(user);
})

app.get('/:p',(req,res) => {
  // const id = req.params.p;
  res.send(req.params.p)
})
app.get('/:p/:p1',(req,res) => {
  // const id = req.params.p;
  res.send(req.params)
})
