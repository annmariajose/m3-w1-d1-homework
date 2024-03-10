var http = require('http');

var server = http.createServer(function(req, res) {
    if (req.method === 'GET') {
        var fileUrl = req.url;

        if (fileUrl === '/') {
            res.setHeader('Content-Type', 'text/html');
            res.end(`<html><body><h1>Home Page.</h1></body></html>`);
        } else if (fileUrl === '/about') {
            res.setHeader('Content-Type', 'text/html');
            res.end(`<html><body><h1>About Page.</h1></body></html>`);
        } else if (fileUrl === '/contact') {
            res.setHeader('Content-Type', 'text/html');
            res.end(`<html><body><h1>Contact Page.</h1></body></html>`);
        } else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end(`<html><body><h1>Invalid Request!</h1></body></html>`);
        }
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end(`<html><body><h1>Invalid Request!</h1></body></html>`);
    }
});

server.listen(5000, 'localhost', () => {
    console.log(`The NodeJS server on port 5000 is now running....`);
});