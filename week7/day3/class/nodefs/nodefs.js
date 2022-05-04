const fs = require('fs');

fs.readFile('./a_file_name', (err, data) => {
  if(err){
    console.log(err);
  }else{
    console.log(data);
  }
})
