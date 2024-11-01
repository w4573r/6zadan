const fs = require('fs');
const path = require('path');
const EventEmitter = require('events');

const events = new EventEmitter();

function analyzeDirectory(directoryPath) {
    console.log(`Analiza katalogu: ${directoryPath}`);

    events.emit('analysisStarted');

    fs.readdir(directoryPath, (err, items) => {
        if (err) return console.error('Nie można odczytać katalogu');

        items.forEach(item => {
            const itemPath = path.join(directoryPath, item);
            fs.stat(itemPath, (err, stats) => {
                if (err) return console.error('Nie można sprawdzić pliku');

                if (stats.isFile()) {
                    events.emit('AnalizaPliku', item);
                    console.log(`plik: ${item}, rozmiar: ${stats.size}, data modyfikacji: ${stats.mtime}`);
                } else {
                    console.log(`Folder: ${item}`);
                }
});
});
    
    events.emit('AnalizaZakonczona');
    console.log('analiza katalogu zakończona.');
});
}