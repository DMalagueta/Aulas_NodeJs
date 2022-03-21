const { exec, spawn } = require('child_process');


// exec('curl ifconfig.me', (err, stdout, stderr) => {
//     if (err) {
//         console.log('Error!', err.message);
//         return;
//     }

//     console.log(stdout);
// });

 const ls = spawn('ls', ['-lsah'], { shell: true });

 ls.stdout.on('data', (data) => console.log('stdout', data.toString()));
 ls.stderr.on('data', (data) => console.log('stderr', data.toString()));
 ls.on('error', (error) => console.log('error', error.message));
 ls.on('close', (code) => console.log('complete', code));
