const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express()
app.use(cors())
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/calendario',{
    useNewUrlParser:true,
    useUnifiedtopology:true
})

const Evento = mongoose.model('Evento', {
    dia:String,
    horainicio:String,
    horafinal:String,
    nombreEvento:String,
    nombreMaestro:String,
    grado:Number,
    grupo:String

})

app.get('/eventos', async (req, res) => {
    const eventos = await Evento.find();
    res.json(eventos)
})

app.post('/evento', async (req, res) => {
    const nuevo = new Evento(req.body);
    await nuevo.save();
    res.json(nuevo);
})

app.listen(3001, () => {
    console.log('Servidor Backend corriendo en http://localhost:3001')
})
