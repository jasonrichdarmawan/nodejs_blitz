var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    // reads the HTML file, and return the content
    fs.readFile('demofile1.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });

    // append Hello content! to mynewfile1.txt
    fs.appendFile('mynewfile1.txt', 'Hello content!', function(err) {
        if (err) throw err;
        console.log('Saved!');
    })

    // create a new, empty file
    fs.open('mynewfile2.txt', 'w', function(err, file) {
        if (err) throw err;
        console.log('Saved!');
    })

    // create a file named mynewfile3.txt
    fs.writeFile('mynewfile3.txt', 'Hello content!', function(err) {
        if (err) throw err;
        console.log('Saved!');
    })

    // delete mynewfile1.txt
    fs.unlink('mynewfile1.txt', function (err) {
        if (err) throw err;
        console.log('File deleted!');
    })

    fs.rename('mynewfile2.txt', 'mynewfile4.txt', function (err) {
        if (err) throw err;
        console.log('File Renamed!');
    })
}).listen(8080);