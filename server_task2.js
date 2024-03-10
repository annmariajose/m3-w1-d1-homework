var http = require('http');
var path = require('path');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    if (req.method === 'GET') {
        var fileUrl = req.url;
        if (fileUrl === '/') {
            fileUrl = '/home';
        }
        var filePath = path.resolve('./' + fileUrl + '.html');

        fs.access(filePath, function(err) {
            if (err) {
                res.statusCode = 404;
                res.setHeader('Content-Type', 'text/html');
                res.end(`<html><body><h1>Error 404: ${fileUrl} not found</h1></body></html>`);
                return;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            fs.createReadStream(filePath).pipe(res);
        });
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end(`<html><body><h1>Error 404: ${fileUrl} not found</h1></body></html>`);
        return;
    }
});

server.listen(5000, 'localhost', () => {
    console.log(`The NodeJS server on port 5000 is now running....`);
});