# API_ECOMMERCE_CP3029832
Atividade de API com 5 micros-serviços para conexão com banco de dados utilizando Node.js com Express, Prisma e node fetch proporcionado pelo node nativo.

## Tecnologias Utilizadas
* **Ambiente de Execução:** Node.js (v18+)
* **Framework Web:** Express.js
* **Banco de Dados:** MongoDB (Instâncias isoladas para cada serviço)
* **ORM:** Prisma 7
* **Comunicação Inter-serviços:** Fetch API (Nativa do Node)
* **Testes de API:** Thunder Client (VS Code)

## 🏗️ Estrutura do Projeto
O sistema é composto por 5 microsserviços independentes:

* `product-service` (Porta 3001) - Cadastro e consulta de catálogo.
* `user-service` (Porta 3002) - Gerenciamento de clientes.
* `inventory-service` (Porta 3003) - Controle de estoque.
* `payment-service` (Porta 3004) - Simulação de pagamentos.
* `order-service` (Porta 3005) - Orquestrador do fluxo de pedidos.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
1. Certifique-se de ter o **Node.js** instalado.
2. O **MongoDB Community Edition** deve estar rodando localmente na porta padrão `27017`.

### Passo a Passo

1. **Configuração dos Bancos de Dados:**
   Em cada uma das 5 pastas de serviço, verifique ou crie o arquivo `.env` apontando para sua respectiva database:
   * Product: `mongodb://localhost:27017/product_db?directConnection=true`
   * User: `mongodb://localhost:27017/user_db?directConnection=true`
   * Inventory: `mongodb://localhost:27017/inventory_db?directConnection=true`
   * Payment: `mongodb://localhost:27017/payment_db?directConnection=true`
   * Order: `mongodb://localhost:27017/order_db?directConnection=true`

2. **Instalação e Inicialização:**
   Abra 5 terminais no VS Code (um para cada serviço) e execute em cada um deles:
   ```bash
   # Instalar as dependências
   npm install
   
   # Gerar os arquivos de tipagem do Prisma
   npx prisma generate
   
   # Iniciar o servidor
   node server.js
