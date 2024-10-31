const fs = require('fs/promises');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => resolve(answer));
    });
}

async function main() {
    try {
        
        const name = await askQuestion("wpisz imie: ");
        const surname = await askQuestion("wpisz nazwisko: ");
        const age = await askQuestion("wpisz wiek: ");
        
        
        const userData = {
            imię: name,
            nazwisko: surname,
            wiek: age
        };

        await fs.writeFile("data.json", JSON.stringify(userData, null, 2));
        console.log("Dane zapisano do pliku data.json");

    }
}