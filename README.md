# API_ECOMMERCE_CP3029832

# 🛒 E-commerce Microservices - IFSP Campinas (P1)

Sistema de e-commerce baseado em microsserviços com persistência isolada e comunicação REST.

## 📋 Descrição dos Serviços
- **Product Service (3001):** Gerencia o catálogo de produtos.
- **User Service (3002):** Gerencia usuários e clientes.
- **Inventory Service (3003):** Controle de estoque e disponibilidade.
- **Payment Service (3004):** Simulação de processamento de pagamentos.
- **Order Service (3005):** Orquestrador do fluxo de pedidos.

## 🛠️ Tecnologias e Regras
- **Node.js + Express:** Servidor e rotas.
- **Mongoose (MongoDB):** Persistência isolada por serviço.
- **Axios:** Comunicação inter-serviços via HTTP.

## 🚀 Como Executar
1. Certifique-se que o MongoDB está rodando localmente na porta 27017.
   
2. Em **cada pasta**, instale as dependências:
   ```bash
   npm install

3. Inicie os serviços em terminais separados:
```bash
node server.js
