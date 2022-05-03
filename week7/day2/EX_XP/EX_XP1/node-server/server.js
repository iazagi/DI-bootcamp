const http = require('http');
const user = {
  firstname : 'john',
  lastname : 'doe'
};
const server = http.createServer((req, res) => {
  res.setHeader('content-Type','Application/json')

   res.end(JSON.stringify(user));

});
server.listen(8080);
