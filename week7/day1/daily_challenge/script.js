const main = require('./main');
const http = require('http');

const b = 5;
const sum = main.largeNumber + b;
console.log(`the sum is ${sum}`);

const server = http.createServer((req, res)=>{
 res.setHeader(`content-Type`, `text/html`);
 res.write(`my module is: \n ${sum}`)
 res.end('<h1> Hi there at the frontend </h1>')
});
server.listen(3000);
