# Image ASCII Encoding and Decoding
This is a simple proof-of-concept repository for turning strings into images. This is definitely not the most efficient way considering I ignore the opacity value and use no compression, but it is what it is. 

## What does this project do?
Encoding - Will turn a .txt file inside of the input directory into a .png file in the output directory. How does it do this? Check out the Encoding section.

Decoding - Will turn an encoded.png/.jpg file from the input directory into a .txt file in the output directory.

## How are these files encoded?

As you know, every pixel has an RGB value, red, green, and blue respectively. 

An pixels properties appear like so:

![rgb values](https://i.imgur.com/fV9tk4D.png)

The parameters for R G and B must be between 0 and 255. This works out perfectly, and ill explain in a moment,

Every letter in the alphabet has a position, A is 1, B is 2 and Z is 26. Computers use a similar concept for handling text, but there are MANY more letters. This is due to having to account for symbols spaces and other characters.

Remember before how I said that the numbers worked out perfectly? This is because ASCII values (the computers dictionary) ends at position 255! The maximum of our RGB values.

Below is a helpful diagram showing how an image is created.

![How it works](https://i.imgur.com/aiEaKsl.png)

If you have any questions, feel free to open an issue or email me. :)

## Why this project? Because I'm not creative.
This repository is here because of an English assignment. 
No seriously. It's for English. You might be wondering, how 
can this be related to English? Code and english have many similarities, 
like copyright and refactoring laws. This repository is a proof of concept that you can re-use other peoples 
"media" without stealing their product or concept.

## Copyright huh?
Yes copyright. This little project would not be possible without the existence of the imported code. 

This project takes advantage of:

#### Northern E-Commerce
It should be noted I stole the entire idea of hiding text inside images from Northern E-Commerce,
 they use it as a hiring strategy shown in the image below.
 ![Devtools on Norther.co's website](https://i.imgur.com/qxGkzHb.png)
So uh thanks Northern I guess? I would ask for an interview but I hate web design. 

#### Get-Pixels
Get-Pixels is a simple library that allows converting an image to values for each pixel. It can be found here:

[Get-Pixels on NPM](https://www.npmjs.com/package/get-pixels)

Get-Pixels has an [MIT license](https://opensource.org/licenses/MIT).

#### Jimp
Jimp is a simple image manipulation library for Node. It allows modification of images in several formats. You can even change individual pixels like in this project!

[Jimp on NPM](https://www.npmjs.com/package/jimp)

Jimp has an [MIT license](https://opensource.org/licenses/MIT)

#### NodeJS (Duh)
NodeJS is one of the webs most popular programming languages. It is used everywhere and large corporations such as Google take advantage of it.

[NodeJS Home Page](https://nodejs.org/en/)

NodeJS has an [MIT license](https://opensource.org/licenses/MIT)

#### License
It should be noted that this project also has an MIT license. Use it as you wish, it's not my problem though.
