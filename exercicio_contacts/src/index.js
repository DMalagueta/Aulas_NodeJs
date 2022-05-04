require('dotenv').config();


const express = require('express');
const app = express();
const fs = require('fs');
const { join } = require('path');

const filePath = join(__dirname, '..', 'src', 'data.csv');

/* const contacts = [
    { id:1 , name: 'Diogo', email:'diogo@gmail.com', cellphone:913338882},
    { id:2 , name: 'Matateu', email:'matateu@gmail.com', cellphone:913338883},
    { id:3 , name: 'Jerubelo', email:'jerubelo@gmail.com', cellphone:913338885},
]; */

// Array
const list = async () => (await fs.readFileSync(filePath))
                .toString()
                .trim()
                .split(/\r?\n/)
                .splice(1)
                .map(line => {
                    const [id, name, email, cellphone] = line.split(',');
                    return { id, name, email, cellphone }
                })
                .sort((a, b) => a.name.localeCompare(b.name));

// Render da lista de contactos
const renderList = async(res) => {
    const contacts = await list();
    res.render('index',{contacts})
}

// Conversão de array em csv
function convertToCSV(arr) {
    const array = [Object.keys(arr[0])].concat(arr)
  
    return array.map(it => {
      return Object.values(it).toString()
    }).join('\n')
}

// Encontrar contacto on click
const findContact = async(req,res) => {
    const contacts = await list();
    const {id} = req.params;
    const contact = contacts.find(c => c.id == id);

    if (!contact) {
        return res.status(404).json({
            code: 404,
            message: 'Contact not found'
        })
    }
    
    res.render('contactInfo',{contact});
}

// Encontrar contacto para editar
const findContactToEdit = async(req,res) => {
    const contacts = await list();
    const {id} = req.params;
    const contact = contacts.find(c => c.id == id);
    res.render('edit', {contact})
}

// Eliminar Contacto
const deleteContact = async(req,res) => {
    const contacts = await list();
    const {id} = req.params;
    const contact = contacts.filter(c => c.id !== id);
    const csv = convertToCSV(contact);
    fs.writeFileSync(filePath, csv) 
}

app.set('view engine', 'hbs');
app.use(express.urlencoded({
    extended:false,
}))

// Index page
app.get('/', (req, res) =>{
    renderList(res)
});

// Criar Contacto page
app.get('/create', (req, res) =>{
    res.render('create')
});

// Contacto detalhado
app.get('/:id', (req, res) => {
    findContact(req,res);
})

// Criar Contacto
app.post('/save', (req, res) =>{
    const {name, email, cellphone} = req.body;

    fs.appendFile(filePath, `\n${Math.round(Math.random()* 10000)},${name}, ${email}, ${cellphone}`, err =>{
        if(err){
            console.error(err);
        }
    })

    /* contacts.push({id:Math.round(Math.random()* 10000), name,email, cellphone}); */
    res.redirect('/');
})

app.get('/edit/:id', (req, res) =>{
    findContactToEdit(req, res);
})

app.post('/edited:id', (req, res) =>{
    const { name, email, cellphone } = req.body;
    const { id } = req.params;
    deleteContact(req, res);
    fs.appendFile(filePath, `\n${id},${name}, ${email}, ${cellphone}`, err =>{
        if(err){
            console.error(err);
        }
    })

    res.redirect(`/${id}`);
})

app.get('/delete/:id', (req, res) =>{
    deleteContact(req, res);
    res.redirect('/');
})

app.get('/search/contact', async (req, res) =>{
    const { sname } = req.query;
    const name = sname.charAt(0).toUpperCase() + sname.slice(1)
    
    const contacts = await list();
    const contact = contacts.find(c => c.name == name);

    if (!contact){
        res.status(404).send(`
                <div style="text-align: center">
                    <h1 >Contacto ${sname} não encontrado</h1>
                    <a href='/' style='text-decoration:none; background-color:gray; padding:5px;color:white; border-radius:5px;'> Voltar</a>
                </div>
        `);
    }
    res.render('contactInfo', { contact });
})

const port = process.env.PORT || 3001;
app.listen(port, ()=>{
    console.log(`listening on ${port}`);
})