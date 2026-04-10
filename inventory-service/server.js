require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);
const Inventory = mongoose.model('Inventory', { productId: String, quantity: Number });
app.post('/inventory', async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        
        // Verifica se já existe estoque para esse produto
        let stock = await Inventory.findOne({ productId });
        
        if (stock) {
            stock.quantity += quantity; // Se já existe, soma
        } else {
            stock = new Inventory({ productId, quantity }); // Se não existe, cria novo
        }
        
        await stock.save();
        res.status(201).json(stock);
    } catch (err) {
        res.status(500).json({ error: "Erro ao criar estoque" });
    }
});

app.get('/inventory/:productId', async (req, res) => { // [Endpoint: 59]
    const stock = await Inventory.findOne({ productId: req.params.productId });
    res.json(stock || { quantity: 0 });
});

app.put('/inventory/:productId', async (req, res) => { // [Endpoint: 60]
    const { quantity } = req.body;
    const stock = await Inventory.findOneAndUpdate(
        { productId: req.params.productId },
        { $inc: { quantity: -quantity } }, // Decrementa o estoque [Endpoint: 93]
        { new: true }
    );
    res.json(stock);
});

app.listen(process.env.PORT, () => console.log(`Serviço de estoque (Inventory Service) rodando na porta = ${process.env.PORT}`));