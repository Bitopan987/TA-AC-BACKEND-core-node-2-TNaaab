var http = require('http');
var fs = require('fs');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  res.setHeader('Content-type', 'text/plain');
  fs.createReadStream('./readme.txt').pipe(res);
}

server.listen(5000, () => {
  console.log('Listening to port 5000');
});
