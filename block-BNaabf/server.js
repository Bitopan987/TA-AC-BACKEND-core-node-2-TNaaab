var http = require('http');
var fs = require('fs');
var server = http.createServer(handleRequest);
function handleRequest(req, res) {
  var store = '';
  req.on('data', (chunk) => {
    store += chunk;
  });

  req.on('end', () => {
    if (req.method === 'GET' && req.url === '/form') {
      res.setHeader('Content-type', 'text/html');
      fs.createReadStream('./form.html').pipe(res);
    }
  });
  if (req.method === 'POST' && req.url === '/form') {
    res.setHeader('Content-type', 'text/html');
    fs.createReadStream('./form.html').pipe(res);
  }
}

server.listen(5678, () => {
  console.log('Listening to port 5678');
});
