const fs =require('fs');
// //EX1
// fs.readFile('./Ftext.txt', (err, data)=>{
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log(data);
//   }
// })
// console.log('\n');

//EX2
// creat a new text file and write to in
// fs.writeFile('./data.txt','hello new text file',(err,data)=>{
//   if(err){
//     console.log(err);
//   }
//   console.log(data);
// })


//EX3
// // append soting in to it (buy orange juice)
// let addText = "buy sum orange juice";
// fs.appendFile('./data.txt', addText+ '\n', (err,data)=>{
//   if(err){
//     console.log(err);
//   }
//   console.log(data);
// })
// console.log('new  ', '\n',);



//EX4
///delete
fs.unlink('data.txt', (err)=>{
  console.log("delete complited");
})
