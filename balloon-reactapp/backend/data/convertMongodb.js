const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'readableData.json');
const outputFile = path.join(__dirname, 'mongoData.json');

// Read the JSON file
const data = JSON.parse(fs.readFileSync(inputFile, 'utf-8'));

// Convert each object to a JSON string and write it to the new file
const outputStream = fs.createWriteStream(outputFile);
data.forEach(obj => {
    outputStream.write(JSON.stringify(obj) + '\n');
});
outputStream.end();
//export mongo file to local: mongoexport --uri="mongodb+srv://ziweihu98:<password>@bostonggevents.u1njw0p.mongodb.net/test" --collection=events --out=/Users/ziweihu/Desktop/Event_Planning_Project/balloon-reactapp/backend/data/mongoData.json
 
//mongoimport --uri "mongodb+srv://ziweihu98:6991591@bostonggevents.u1njw0p.mongodb.net/test" --collection events --file /Users/ziweihu/Desktop/Event_Planning_Project/balloon-reactapp/backend/data/mongoData.json
