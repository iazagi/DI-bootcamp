const http = require('http');
const server = http.createServer((req, res) => {
	console.log('get a req from server');
	res.end('hello from my first server');
})

server.listen(6000);