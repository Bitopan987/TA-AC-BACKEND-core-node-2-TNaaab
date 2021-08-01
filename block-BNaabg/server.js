const { readSync } = require('fs');
var http = require('http');
var fs = require('fs');
var url = require('url');
var server = http.createServer(handleRequest);
var userPath = __dirname + '/users/';
function handleRequest(req, res) {
  var parseUrl = url.parse(req.url, true);
  var store = '';
  req.on('data', (chunk) => {
    store += chunk;
  });

  req.on('end', () => {
    if (req.method === 'POST' && req.url === '/users') {
      var username = JSON.parse(store).username;
      fs.open(userPath + username + '.json', 'wx', (err, fd) => {
        if (err) return console.log(err);
        fs.writeFile(fd, store, (err) => {
          if (err) return console.log(err);
          fs.close(fd, () => {
            return res.end(`${username} created successfully`);
          });
        });
      });
    }
    if (parseUrl.pathname === '/users' && req.method === 'GET') {
      var userName = parseUrl.query.username;
      console.log(userPath + userName + '.json');
      fs.readFile(userPath + userName + '.json', (err, content) => {
        res.setHeader('Content-Type', 'application/json');
        if (err) return console.log(err);
        return res.end(content);
      });
    }

    if (parseUrl.pathname === '/users' && req.method === 'PUT') {
      var userName = parseUrl.query.username;
      fs.open(userPath + userName + '.json', 'r+', (err, fd) => {
        if (err) return console.log(err);
        fs.ftruncate(fd, (err) => {
          if (err) return console.log(err);
          fs.writeFile(fd, store, (err) => {
            if (err) return console.log(err);
            fs.close(fd, () => {
              return res.end(`${userName} updated successfully`);
            });
          });
        });
      });
    }
    if (parseUrl.pathname === '/users' && req.method === 'DELETE') {
      var userName = parseUrl.query.username;
      fs.unlink(userPath + userName + '.json', (err) => {
        if (err) return console.log(err);
        return res.end(`${userName} is deleted`);
      });
    }
    if (req.url === '*') {
      res.statusCode = 404;
      res.end('Page Not Found');
    }
  });
}

server.listen(3000, () => {
  console.log('listening to port 3000');
});
