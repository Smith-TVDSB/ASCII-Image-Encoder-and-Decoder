const path = require('path');
const fs = require('fs');
const Jimp = require('jimp');

// Take a string of text and save it in the output folder
const stringToImage = (content, filename) => {
    // Divide the X by three because we can store 3 letters per pixel.
    new Jimp(Math.ceil(content.length / 3), 1, (err, image) => {
        if (err) throw err;
        // Iterate over the string by 3s. One iteration per pixel.
        for (let i = 0; i < content.length; i += 3) {
            // Get our Red Green Blue Alpha values.
            const r = content.charCodeAt(i);
            const g = content.charCodeAt(i + 1) ? content.charCodeAt(i + 1) : 0; // check if index exists, if not zero.
            const b = content.charCodeAt(i + 2) ? content.charCodeAt(i + 2) : 0; // check if index exists, if not zero.
            const a = 255; // Hard set for simplicity and visibility.

            // Create our RGBA value
            Jimp.rgbaToInt(r, g, b, a, async (error, hex) => {
                // Set the pixel, divide by 3 since 3 letters per pixel
                image.setPixelColor(hex, i / 3, 1);

                // If we have reached our last iteration, lets save the file.
                if(( i + 3 ) >= content.length) {
                    image.write(`output/${filename}.png`, (err) => {
                        if (err) throw err;
                        console.log(`[Encode] Image ${filename}.png was written.`)
                    });
                }
            });

        }
    });
};


const iterateFiles = () => {
    // Get the path of our Input folder.
    const directoryPath = path.join(__dirname, 'input');
    // Get all files as an Array.
    fs.readdir(directoryPath, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }

        // Turn each text file into an image.
        files.forEach(async (file) => {
            // If not a text file, skip.
            if (!file.endsWith(".txt"))
                return;
            const fileData = fs.readFileSync(`input/${file}`, 'ascii');
            stringToImage(fileData, file.replace(".txt", ""));
        });
    });
};

// Lets start our program
iterateFiles();