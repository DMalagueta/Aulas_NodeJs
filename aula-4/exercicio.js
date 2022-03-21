const { spawn } = require('child_process');
const { resolve, join, extname } = require('path');
const { createInterface } = require('readline');
const { randomUUID } = require('crypto');

const convertToGrayscale = async (image, target = null) => new Promise((resolve, reject) => {
    console.log(target);
    const ext = extname(image);
    console.log(ext);
    const pathTo = target 
    ? resolve(target, randomUUID().concat(ext)) 
    : join(__dirname, 'data', randomUUID().concat(ext));
    console.log(pathTo);
    const convert = spawn('convert', [image, '-grayscale', 'Rec709luminance', pathTo]);


    convert.stdout.on('data', data => console.log(data.toString()));
    convert.stderr.on('data', data => console.log(data.toString()));

    convert.on('error', error => reject(error));
    convert.on('close', () => resolve());
});

// const target = './';
// const pathTo = target 
//     ? resolve(target, randomUUID()) 
//     : join(__dirname, 'data', randomUUID());
// console.log(pathTo);

(async () => {
    // const originalImage = join(__dirname, 'data', 'bit-and-coin.png');
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Source: ', async (source) => {
        const originalImage = resolve(source);
        
        rl.question('Target: ', async (target) => {
            await convertToGrayscale(originalImage, target);
            rl.close();
        })
    });
})();