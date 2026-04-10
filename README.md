# API_ECOMMERCE_CP3029832

# 🛒 E-commerce Microservices - IFSP Campinas (P1)

[cite_start]Sistema de e-commerce baseado em microsserviços com persistência isolada e comunicação REST[cite: 6, 9].

## [cite_start]📋 Descrição dos Serviços [cite: 129]
- [cite_start]**Product Service (3001):** Gerencia o catálogo de produtos[cite: 31].
- [cite_start]**User Service (3002):** Gerencia usuários e clientes[cite: 37].
- [cite_start]**Inventory Service (3003):** Controle de estoque e disponibilidade[cite: 57].
- [cite_start]**Payment Service (3004):** Simulação de processamento de pagamentos[cite: 62].
- [cite_start]**Order Service (3005):** Orquestrador do fluxo de pedidos[cite: 46].

## [cite_start]🛠️ Tecnologias e Regras [cite: 94]
- **Node.js + Express:** Servidor e rotas.
- [cite_start]**Mongoose (MongoDB):** Persistência isolada por serviço[cite: 17, 96].
- [cite_start]**Axios:** Comunicação inter-serviços via HTTP[cite: 16, 98].

## [cite_start]🚀 Como Executar [cite: 127, 151]
1. Certifique-se que o MongoDB está rodando localmente na porta 27017.
2. Em **cada pasta**, instale as dependências:
   ```bash
   npm install
3. Inicie os serviços em terminais separados:
```bash
node server.js
