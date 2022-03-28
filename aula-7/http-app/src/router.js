
const indexAction = require('./actions/index');
const aboutAction = require('./actions/about');
const contactAction = require('./actions/contacts');
const { parse } = require('url');

/* const routes = {
    '/' : 'My Index Page',
    '/about' : 'About Page',
    '/contacts' : 'Contacts Page',

}; */

const routes = new Map();
routes.set('/', indexAction);
routes.set('/about', aboutAction);
routes.set('/contacts', contactAction);

const router = async (request, response) => {
    const parsedUrl = parse(request.url, true);
    const route = parsedUrl.pathname;
    if (!routes.has(route)) {
        throw new Error('404 Not Found');
    }

    console.log('[info]',route);

    const action = routes.get(route);

    return await action(request, response, parsedUrl.query);
}

module.exports = router;