const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'readableData.json');
const outputFile = path.join(__dirname, 'mongoData1.json');

// Read the JSON file
const data = JSON.parse(fs.readFileSync(inputFile, 'utf-8'));

// Convert each object to a JSON string and write it to the new file
const outputStream = fs.createWriteStream(outputFile);
data.forEach(obj => {
    outputStream.write(JSON.stringify(obj) + '\n');
});
outputStream.end();
