const { menu } = require('./io/output');
const router  = require('./core/router');

const app = async () => {
    const option = await menu(); 
    router(option, app);
};

app();