# API_ECOMMERCE_CP3029832

# 🛒 E-commerce Microservices - IFSP Campinas (P1)

Sistema de e-commerce baseado em microsserviços com persistência isolada e comunicação REST[Endpoints: 6, 9].

## 📋 Descrição dos Serviços [Endpoint: 129]
- **Product Service (3001):** Gerencia o catálogo de produtos[Endpoint: 31].
- **User Service (3002):** Gerencia usuários e clientes[Endpoint: 37].
- **Inventory Service (3003):** Controle de estoque e disponibilidade[Endpoint: 57].
- **Payment Service (3004):** Simulação de processamento de pagamentos[Endpoint: 62].
- **Order Service (3005):** Orquestrador do fluxo de pedidos[Endpoint: 46].

## 🛠️ Tecnologias e Regras [Endpoint: 94]
- **Node.js + Express:** Servidor e rotas.
- **Mongoose (MongoDB):** Persistência isolada por serviço[Endpoints: 17, 96].
- **Axios:** Comunicação inter-serviços via HTTP[Endpoints: 16, 98].

## 🚀 Como Executar [Endpoints: 127, 151]
1. Certifique-se que o MongoDB está rodando localmente na porta 27017.
2. Em **cada pasta**, instale as dependências:
   ```bash
   npm install
3. Inicie os serviços em terminais separados:
```bash
node server.js
