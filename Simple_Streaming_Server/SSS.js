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
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        const fileStream = fs.createReadStream(fileName);
        fileStream.pipe(res);

        fileStream.on('error', () => {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('błąd z strumieniem');
        });
});
});
server.listen(3000, () => {
    console.log('Serwer działa na http://localhost:3000');
});