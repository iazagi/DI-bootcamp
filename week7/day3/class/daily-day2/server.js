const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('listen on port 3000');
});

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/aboutMe/:hobby', (req,res)=>{
  console.log('hobby',req.params.hobby);
  const hobby = req.params.hobby;
  if(typeof hobby === 'string' || hobby instanceof String){
    return res.json(req.params)
  }
  res.status(404).send('Not a string')
})

app.get('/pic', (req,res) => {
  res.sendFile(__dirname+'/images/img.html');
})

app.get('/form', (req,res)=>{
  res.sendFile(__dirname +'/public/form.html')
})

app.post('/formData', (req,res)=>{
  console.log(req.body);
  const {email, message} = req.body;
  res.send(`${email} sent you a message ${message}.`)
})
