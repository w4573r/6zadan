const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;
    const fileName = queryObject.file;

    if (!fileName) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('błąd przy wpisywaniu');
        return;
    }

    fs.stat(fileName, (err, stats) => {
        if (err || !stats.isFile()) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('plik nie istnieje');
            return;
        }
});
});