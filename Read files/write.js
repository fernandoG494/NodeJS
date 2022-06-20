var fs = require('fs');

var data = {
    name: 'Bob'
}

fs.writeFile('./Read\ Files/data.json', JSON.stringify(data), (err) => {
    console.log('write finished', err);
});
