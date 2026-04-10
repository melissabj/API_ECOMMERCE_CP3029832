require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());

app.post('/payments', (req, res) => { // [Endpoint: 64]
    const { amount } = req.body;
    // Simulação: aprovado se o valor for menor que 1000 [Endpoint: 67]
    const status = amount < 1000 ? 'APROVADO' : 'RECUSADO';
    res.json({ status });
});

app.listen(process.env.PORT, () => console.log(`Serviço de pagamento (Payment Service) rodando na porta = ${process.env.PORT}`));