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

        if (eventType === 'rename') {

            fs.access(`${folderPath}/${filename}`, fs.constants.F_OK, (err) => {
                if (err) {
                    message = `Usunięto plik: ${filename}`;
                } else {
                    message = `Dodano plik: ${filename}`;
                }
                console.log(message);
                logToFile(message);
            });
    } else if (eventType === 'change') {
        message = `Zmieniono plik: ${filename}`;
        console.log(message);
        logToFile(message);
    }
}
});

console.log(`Rozpoczęto monitorowanie katalogu: ${folderPath}`);