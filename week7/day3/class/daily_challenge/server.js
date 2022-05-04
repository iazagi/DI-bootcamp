const express =require('express');
const app = express();

app.use(express.urlencoded)

app.listen(3000, () => {
  console.log('listen on port 3000')
});

app.get('/aboutMe/:hobby', (req,res) => {
  console.log('hobby', req.params.hobby);
  const hobby = req.params.hobby;
  if (typeof hobby === 'string' || hobby instanceof string){
    return  res.json(req.params)
  }
  res.status(404).send('not string ');

})

app.get("/pic", (req,res) => {
  res.sendfile(__dirname+'/images/img.html');
})
