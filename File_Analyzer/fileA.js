const fs = require('fs');
const path = require('path');
const EventEmitter = require('events');

const events = new EventEmitter();

function analyzeDirectory(directoryPath) {
    console.log(`Analiza katalogu: ${directoryPath}`);

    events.emit('analysisStarted');

    fs.readdir(directoryPath, (err, items) => {
        if (err) return console.error('Nie można odczytać katalogu');

});
}