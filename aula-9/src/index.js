require('dotenv').config();

/* const dotenv = require('dotenv');
dotenv.config() */

const express = require('express');

const app = express();

app.set('view engine', 'hbs');

app.use(express.urlencoded({
    extended:false,
}))


app.get('/', (req, res) => {
    res.send('hello, world');
});

app.get('/about', (req, res) => {
    res.send('This is about page!');
})

app.get ('/hello', (req, res) => {
    //const name = req.params.name || 'no name';
    const { name = 'No Name' } = req.query;
    res.send(`Hello, ${name}!`);
})

app.get ('/hello/:name', (req, res) => {
    //const name = req.params.name || 'no name';
    const { name = 'No Name' } = req.params;
    //res.send(`Hello, ${name}!`);

    res.render('index', {name})
})

const products = [
    { id:1 , name: 'playstation', price:499},
    { id:2 , name: 'nitendo', price:200},
    { id:3 , name: 'xbox', price:499},
];

app.get('/products/:id', (req, res) => {
    const {id } = req.params;
    const product = products.find(p => p.id == id);

    if (!product) {
        return res.status(404).json({
            code: 404,
            message: 'Product not found'
        })
    }
    return res.json(product);
})

app.post('/save', (req, res) => {
    console.log(req.body);

    const {name, price} = req.body;
    
    products.push({id:Math.round(Math.random()* 10000), name,price});

    res.redirect('/hello/saved');
    
})

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Listening on porto ${port}`);
})