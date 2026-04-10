require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);
const Order = mongoose.model('Order', { 
    userId: String, productId: String, quantity: Number, status: String, total: Number 
});

app.post('/orders', async (req, res) => { // [Endpoint: 48, 84]
    const { userId, productId, quantity } = req.body;

    try {
        // 1. Consulta Catálogo [Endpoint: 52, 86]
        const prod = await axios.get(`${process.env.PRODUCT_URL}/products/${productId}`);
        
        // 2. Verifica Estoque [Endpoint: 53, 87]
        const stock = await axios.get(`${process.env.INVENTORY_URL}/inventory/${productId}`);
        if (stock.data.quantity < quantity) return res.status(400).json({ error: "Estoque insuficiente" }); // [Endpoint: 61, 174]

        // 3. Registra Pedido como CRIADO [Endpoint: 54, 88]
        const total = prod.data.price * quantity;
        let order = new Order({ userId, productId, quantity, total, status: 'CRIADO' });
        await order.save();

        // 4. Solicita Pagamento [Endpoint: 55, 89]
        const pay = await axios.post(`${process.env.PAYMENT_URL}/payments`, { amount: total });

        // 5. Atualiza Status [Endpoint: 56, 91, 92]
        order.status = pay.data.status === 'APROVADO' ? 'PAGO' : 'CANCELADO';
        await order.save();

        // 6. Se aprovado, dá baixa no estoque [Endpoint: 93]
        if (order.status === 'PAGO') {
            await axios.put(`${process.env.INVENTORY_URL}/inventory/${productId}`, { quantity });
        }

        res.status(201).json(order);
    } catch (err) {
        res.status(500).json({ error: "Falha na integração" });
    }
});

app.listen(process.env.PORT, () => console.log(`Serviço de pedidos (Order Service) rodando na porta = ${process.env.PORT}`));