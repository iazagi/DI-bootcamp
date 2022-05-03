const exp = require('express');
const app = exp();
const bp = require('body-parser');

//app.use(bp.urlencoded({ extended: false }));
//app.use(bp.json());

///EX1
app.get("/aboutme/:hobby" , (req,res) => {
  console.log(req.params);
  if(!isNaN(req.params.hobby)){
    res.status(404).send(404);
    console.log("no data");
  }
  res.send('my hobby is to drink beer and eat stack')
});

app.get('/pic', (req,res) => {
  res.send('<img src="https://www.pixelstalk.net/wp-content/uploads/2016/08/Free-Best-nd-Beautiful-Images.jpg"></img>');
});


app.get('/', (req, res)  => {

});

app.post('/formData', (req,res) => {
  res.send('${req.body.email} sent you a massage : ${req.body,massage}')
});

app.listen(3000)
