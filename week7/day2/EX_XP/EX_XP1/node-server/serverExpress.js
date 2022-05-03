const express = require('express');
const app = express();

app.get('/', (req,res) => {
  res.send('<h1>THIS IS AN HTML TAG</h1>');
})

app.listen(3000, () =>{
  console.log('server in listening mode on port 3000');
} )
