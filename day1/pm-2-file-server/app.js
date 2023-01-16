var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('demofile1.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });

    // create a file named mynewfile1.txt
    fs.appendFile('mynewfile1.txt', 'Hello content!', function(err) {
        if (err) throw err;
        console.log('Saved!');
    })

    // create a new, empty file
    fs.open('mynewfile2.txt', 'w', function(err, file) {
        if (err) throw err;
        console.log('Saved!');
    })
}).listen(8080);