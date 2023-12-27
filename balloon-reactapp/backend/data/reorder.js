
const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'exportedData.json');
const outputFile = path.join(__dirname, 'sortedDatad.json');

//this file is used to sort the data expored from mongo db to more readable json formart
// Read the file line by line
const lines = fs.readFileSync(inputFile, 'utf-8').split('\n').filter(Boolean);

const sortedData = lines.map(line => {
    const item = JSON.parse(line);
    // Reorder keys
    const orderedItem = {
      name: item.name,
      description: item.description,
      price: item.price,
      image: item.image,
      imageList: item.imageList
      // Add other fields if necessary
    };
    return orderedItem;
  });
  
  // Write the sorted data to a new file
  fs.writeFileSync(outputFile, JSON.stringify(sortedData, null, 2));