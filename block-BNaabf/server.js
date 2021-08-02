var http = require('http');
var fs = require('fs');
var qs = require('querystring');
var server = http.createServer(handleRequest);
function handleRequest(req, res) {
  var store = '';
  req.on('data', (chunk) => {
    store += chunk;
  });
  req.on('end', () => {
    console.log(store);
    if (req.method === 'GET' && req.url === '/form') {
      console.log('welcome');
      res.setHeader('Content-type', 'text/html');
      fs.createReadStream('./form.html').pipe(res);
    }
    if (req.url === '/form' && req.method === 'POST') {
      var dataObject = qs.parse(store);
      console.log(dataObject);
      res.setHeader('Content-type', 'text/html');
      res.write(`<h2>${dataObject.name}</h2>`);
      res.write(`<h3>${dataObject.email}</h3>`);
      res.write(`<p>${dataObject.age}</p>`);
      res.end();
    }
  });
}
server.listen(5678, () => {
  console.log('Listening to port 5678');
});
