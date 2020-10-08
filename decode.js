const getPixels = require("get-pixels");
const inputFolder = './input/';
const fs = require('fs');

// Get all of the files in the input directory
fs.readdir(inputFolder, (err, files) => {

    // Iterate over each file.
    files.forEach(file => {
        // If it's not an image, it isn't for us.
        if (!(file.endsWith(".png") || file.endsWith(".jpg"))) {
            return;
        }
        // Decode the current image
        decodeImage(file);
    });
});

const stringFromCharArray = (charArray)=>{
    let finalString = "";
    // Iterate over each RGB value of the image.
    for (let i = 0; i < charArray.length; i++) {
        const currentCharCode = charArray[i];
        // If it is not a supported character, skip it.
        if (currentCharCode < 32 || currentCharCode > 126)
            continue;
        // Append the current real ascii letter to the String.
        finalString = finalString + String.fromCharCode(currentCharCode);
    }
    return finalString;
};


const decodeImage = (file) =>{
    // Get the pixels of the current image as an array.
    getPixels(`${inputFolder}/${file}`, (err, pixels) => {
        if (err) {
            return console.error(`Could not get pixels of file ${file}! Error: ${err}`)
        }
        // Get the raw data values.
        const pixelData = pixels.data;
        console.log(`======= Output of Image Data for ${file} is Below ========`);
        const finalString = stringFromCharArray(pixelData);
        // Write the file to our output folder with its respective file name.
        fs.writeFile(`./output/${file.replace(".png", "").replace(".jpg", "")}.txt`, finalString, (err) => {
            if (err) {
                console.error(err)
            }
        });
        console.log(finalString);
        console.log("=============================================================")
    })
};


