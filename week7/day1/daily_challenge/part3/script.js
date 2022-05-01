const toDay = require('./main');
const http = require('http');
let day = toDay.toDay();

const server = http.createServer((req, res) => {
    res.setHeader(`content-type`, `text/html`);
    res.write("the date and time are currently : ");
    res.end(day);
});
server.listen(8000);
