var relativePathofIndex = '../client/index.js';
var path = require('path');
var absPathofIndex = path.join(__dirname, '..', 'client/index.js');
console.log(absPathofIndex, relativePathofIndex);
