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
//       var jsondata = JSON.parse(store);
//       res.setHeader('Content-type', 'text/html');
//       res.end(`<h2>${jsondata.name}</h2><p>${jsondata.email}</p>`);
//     }
//     if (dataformat === 'application/x-www-form-urlencoded') {
//       var formdata = qs.parse(store);
//       res.setHeader('Content-type', 'text/html');
//       res.end(`<h2>${formdata.name}</h2><p>${formdata.email}</p>`);
//     }
//   });
// }

// server.listen(9000, () => {
//   console.log('Listening to port 9000');
// });
