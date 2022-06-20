var fs = require('fs');
var data = require('./data.json');

console.log(data.name);

fs.readFile('./data.json', 'UTF-8' , (error, data) => {
    console.log(data);
    var dataP = JSON.parse(data);
    console.log(dataP);
});