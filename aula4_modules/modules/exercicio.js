const { spawn } = require('child_process');
const { resolve, join, extname } = require('path');
const { createInterface } =  require('readline');
const { randomUUID } = require('crypto');

const convertToGrayscale = async (image) => new Promise((resolve, reject) => {
    const ext = extname(image);
    const pathTo = join(__dirname, '..', 'data', randomUUID() + ext);
    const convert = spawn('convert', [image, '-grayscale', 'Rec709luminance', pathTo])

    convert.stdout.on('data', data => console.log(data.toString()));
    convert.stderr.on('data', data => console.log(data.toString()));

    convert.on('error', error => reject(error));
    convert.on('close', () => resolve());
})

(async () => {
    // const originalImage = join(__dirname, '..', 'data', 'exemplo.jpeg');
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('source', async (answer) =>{

        const originalImage = resolve(answer);
        await convertToGrayscale(originalImage);
    })
})();