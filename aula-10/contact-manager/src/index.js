require('dotenv').config();
const sessions = require('express-session');
const cookieParser = require('cookie-parser');

const { join } = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');

const routes = require('./routes');

const port = process.env.PORT || 3000;
const app = express();

// ---------- login --------------
const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
        secret: '1234',
        saveInitialized: true,
        cookie: { maxAge: oneDay},
        resave: false
}))

app.use(cookieParser());
const myuser = 'diogo';
const mypassword = '1234';

let session;

// ---------------------

app.engine('hbs', handlebars.engine({
    defaultLayout: 'main',
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', join(__dirname, '..', 'views'));

app.use(express.static(join(__dirname, '..', 'public')));
app.use(express.urlencoded({
    extended: true
}));

app.use(routes);
app.get('/', (req, res) => {
    session = req.session;
    if (session.userid){
        return res.redirect('/contacts');
    } 
    return res.redirect('/login');
    
});

app.post('/login',(req, res) => {
    const { name , password} = req.body;

    if (name == myuser && password == mypassword){
        session = req.session;
        session.userid = name;
        const username = session.userid;
        res.redirect('/contacts');
    }
    else{
        res.send('wrong')
    }
})

app.get('/logout',(req,res) => {
    req.session.destroy();
    res.redirect('/');
});



mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('error', err => console.log('[error]', 'Error connecting to database:', err.message));
mongoose.connection.once('open', () => {
    console.log('[info]', 'Connected to database');
    app.listen(port, () => console.log(`App started at http://localhost:${port}`));
});

