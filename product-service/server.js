require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);
const Product = mongoose.model('Product', { name: String, price: Number });

app.get('/products', async (req, res) => res.json(await Product.find())); // [Endpoint: 33], lista todos os produtos
app.get('/products/:id', async (req, res) => res.json(await Product.findById(req.params.id))); // [Endpoint: 34], lista o produto por id
app.post('/products', async (req, res) => { // [Endpoint: 35], cria e posta um novo produto para dentro do banco de dados
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
});

app.listen(process.env.PORT, () => console.log(`Serviço de catálogo (Product Service) rodando na porta = ${process.env.PORT}`));