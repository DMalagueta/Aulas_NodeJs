const {exec , spawn } = require('child_process');
const path = require('path');

/* exec('curl ifconfig.me', (err, stdout, stderr) => {

    if (err){
        console.log('error', err.message);
        return;
    }

    console.log(stdout);
}) //fetch sistema operativo pedidos http e obter a resposta */

const ls = spawn('ls', ['-lsah'], {shell:true});

ls.stdout.on('data', (data) => console.log('stdout', data.toString()))
ls.stderr.on('data', (data) => console.log('stderr', data.toString()))
ls.on('error', (error) => console.log('stdout', error.message))
ls.on('close', (code) => console.log('complete', code))

/* const filePath = path.join(__dirname, '..', 'data', 'exemplo.jpeg');

console.log(filePath);

exec(`convert ${filePath} -grayscale Rec709luminance bww.jpeg`, (err, stdout, stderr) => {
    if(err) {
        console.log('error', err.message);
    }
    console.log('converted');
}); */