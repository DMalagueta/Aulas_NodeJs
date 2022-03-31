const moment = require('moment');
const { render } = require("../core/view")
const { getLog } = require("../services/access-log.service")

module.exports = async () => {    
    const log = await getLog();
    const list = log.map(l => `
        <tr>
            <td>${l.url}</td>
            <td>${moment(l.time).format('DD/MM/YYYY HH:mm:ss')}</td>
            <td>${l.from}</td>
        </tr>
    `).join('\n');

    return await render('access-list', { list });
}