const http = require('http');

const server = http.createServer( (req,res) => {
    // console.log('get a req from client');
    // console.log(req.headers);
    // console.log(req.url);
    console.log(req.method);
    // res.end(' hello from my first server on port 8080')
    if(req.url == '/'){
      res.end('Home')
    }
    else if(req.url == '/about'){
      res.end('About')
    }
    else{
      res.end('Page not found')
    }
})

server.listen(8080, () => {
  console.log('listen to port 8080');
})
