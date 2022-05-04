const fs = require('fs');

copy
fs.copyFile('./products','./prod2', err => {
  if(err){
    console.log(err);
  }
})
DELETE
fs.unlink('./bbb', err=>{
  if(err){
    console.log(err);
  }
})

append
let str = 'e f '
fs.appendFile('./bbb', str, err =>{
  if(err){
    console.log(err);
  }
})

write to a file
let value = '123456';

const products = [
  {id:1,name:'iPhone',price:800},
  {id:2,name:'iPad', price:650},
  {id:3,name:'iWatch', price:750},
  {id:4,name:'iMac', price:1750}
];

fs.writeFile('./products', JSON.stringify(products), (err) => {
  if(err){
    console.log(err);
  }
})

console.log(1);
// read from a file
fs.readFile('./a_file_name', (err, data)=>{
  if(err){
    console.log(err);
  }
  else{
    console.log('readFile', JSON.parse(data.toString()));
  }
})
const f = fs.readFileSync('./a_file_name');
console.log('readFileSync',f.toString());

console.log(2);
