require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);
const User = mongoose.model('User', { name: String, email: String });

app.post('/users', async (req, res) => { // [Endpoint: 42], cadastra e guarda no banco de dados um novo usuário
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
});
app.get('/users/:id', async (req, res) => res.json(await User.findById(req.params.id))); // [Endpoint: 43], responsável por mostrar um usuário por id
app.get('/users', async (req, res) => res.json(await User.find())); // [Endpoint: 44], mostra todos os usuários

app.listen(process.env.PORT, () => console.log(`Serviço de suários (User Service) rodando na porta = ${process.env.PORT}`));