const http = require('http');
const fs = require('fs');

// Create a server with the HTTP variable
const server = http.createServer((req, res) => {
    fs.readFile('home.html', (err, data) => {
        if (req.url === '/' || req.url === '/home') {
            res.writeHead(200, {'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        } else if (err) throw err;
    });

    fs.readFile('about.html', (err, data) => {
        if (req.url === '/about') {
            res.writeHead(200, {'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        } else if (err) throw err;
    });

    fs.readFile('contact.html', (err, data) => {
        if (req.url === '/contact') {
            res.writeHead(200, {'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        } else if (err) throw err;
    });

});

// Create a port
server.listen(4000, '127.0.0.1');

console.log('Yes, you have created a server');
