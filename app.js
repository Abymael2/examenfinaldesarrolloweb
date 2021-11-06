const express = require('express');
const app = express();
const hbs = require('hbs');



require('dotenv').config();
const port = process.env.PORT;

//inplementar hbs
app.set('view engine', 'hbs');

//agregar o registrar el partial
hbs.registerPartials(__dirname + '/views/partials')

app.use(express.static('public'));

//elementos de la pagina principal
app.get('/', function(req, res){
    res.render('index', {
        nombre: ' Abimael',
        titulo: ' ExamenFinal'
    })
});

app.get('/vehiculo', function(req, res){
    res.render('vehiculo', {
        nombre: ' Abimael',
        titulo: ' ExamenFinal'
    })
});

app.get('/video', function(req, res){
    res.render('video', {
        nombre: ' Abimael',
        titulo: ' ExamenFinal'
    })
});



// app.get('/hola-mundo', function(req, res){
//     res.send('Hola mundo en su respectiva ruta');
// });

app.get('*', function(req, res){
    res.sendFile(__dirname+'/public/404.html');
});

app.listen(port, ()=>{
    console.log(`Ejemplo app escuchando desde http://localhost:${port}`);
});
