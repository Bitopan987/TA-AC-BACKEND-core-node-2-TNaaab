var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  var store = '';
  req.on('data', (chunk) => {
    store = store + chunk;
  });
  req.on('end', () => {
    res.end(store);
  });
}

server.listen(3456, () => {
  console.log('Listening to port 3456');
});
