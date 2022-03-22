const { menu } = require('./io/output');
const router  = require('./core/router');
const {readdir} = require('fs/promises');
const {join} = require('path');

const app = async () => {
    const option = await menu(); 
    router(option, app);
};

app();