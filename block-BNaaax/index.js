var relativePath = './form.html';
// console.log(__dirname + './form.html');

var path = require('path');
var pathName = path.join(__dirname, 'form.html');
console.log(pathName, relativePath);
