const fs = require('fs');

const folderPath = './test';

function logToFile(message) {
    const logFilePath = './zmiany.txt';
    fs.appendFile(logFilePath, message + '\n', (err) => {
        if (err) throw err;
    });
}

fs.watch(folderPath, (eventType, filename) => {
    if (filename) {
        let message;
    }
});