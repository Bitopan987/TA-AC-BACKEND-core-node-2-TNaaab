// console.log(__filename);
// var path = require('path');
// console.log(__dirname + './app.js');
// console.log('./index.html');
// var pathOfIndex = path.join(__dirname, 'index.html');
// console.log(pathOfIndex);

// var http = require('http');
// var server = http.createServer(handleRequest);
// function handleRequest(req, res) {
//   var store = '';
//   req.on('data', (chunk) => {
//     store += chunk;
//   });

//   req.on('end', () => {
//     if (req.method === 'POST' && req.url === '/') {
//       res.writeHead(201, { 'Content-type': 'application/json' });
//       res.end(store);
//     }
//   });
// }

// server.listen(5000, () => {
//   console.log('Listening to port 5000');
// });

// var http = require('http');
// var qs = require('querystring');
// var server = http.createServer(handleRequest);
// function handleRequest(req, res) {
//   var dataformat = req.headers['content-type'];
//   var store = '';
//   req.on('data', (chunk) => {
//     store += chunk;
//   });

//   req.on('end', () => {
//     if (dataformat === 'application/json') {
//       var parsedata = JSON.parse(store);
//       res.end(store);
//     }
//     if (dataformat === 'application/x-www-form-urlencoded') {
//       var parsedata = qs.parse(store);
//       res.end(JSON.stringify(parsedata));
//     }
//   });
// }

// server.listen(9000, () => {
//   console.log('Listening to port 9000');
// });

var http = require('http');
var qs = require('querystring');
var server = http.createServer(handleRequest);
function handleRequest(req, res) {
  var dataformat = req.headers['content-type'];
  var store = '';
  req.on('data', (chunk) => {
    store += chunk;
  });

  req.on('end', () => {
    if (dataformat === 'application/json') {
      var jsondata = JSON.parse(store);
      res.setHeader('Content-type', 'text/html');
      res.end(`<h2>${jsondata.name}</h2><p>${jsondata.email}</p>`);
    }
    if (dataformat === 'application/x-www-form-urlencoded') {
      var formdata = qs.parse(store);
      res.setHeader('Content-type', 'text/html');
      res.end(`<h2>${formdata.name}</h2><p>${formdata.email}</p>`);
    }
  });
}

server.listen(9000, () => {
  console.log('Listening to port 9000');
});
