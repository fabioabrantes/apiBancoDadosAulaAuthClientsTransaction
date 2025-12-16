# API BancoDados Aula (Auth, Clients & Transactions)

Uma **API RESTful em TypeScript** para gerenciar recursos como autenticação, clientes e transações — usando **Node.js** com **Prisma ORM** para acesso a banco de dados.

> Este projeto foi criado para fins educacionais e de estudo, demonstrando integração entre lógica de negócio, autenticação e banco de dados.

---

## 🧱 Estrutura do Projeto

O repositório contém as seguintes pastas:

- `prisma/` – arquivos de configuração do Prisma para modelar o banco de dados e gerar o client. :contentReference[oaicite:0]{index=0}  
- `src/` – código-fonte da API (handlers, rotas, lógica de autenticação, transações etc.). :contentReference[oaicite:1]{index=1}  
- `.env.example` – exemplo de variáveis de ambiente pra configurar a conexão com o banco. :contentReference[oaicite:2]{index=2}  
- `package.json` & `tsconfig.json` – configuração do projeto e dependências (TypeScript, Prisma etc.). :contentReference[oaicite:3]{index=3}

---

## 🚀 Tecnologias Usadas

✔ **Node.js** — ambiente de execução  
✔ **TypeScript** — tipagem estática  
✔ **Prisma** — ORM moderno para banco de dados (PostgreSQL, MySQL etc.) :contentReference[oaicite:4]{index=4}  
✔ **Express (ou framework similar)** — servidor HTTP  
✔ **dotenv** — para variáveis de ambiente

---

## 🔧 Instalação

> Clone o projeto:

```bash
git clone https://github.com/fabioabrantes/apiBancoDadosAulaAuthClientsTransaction.git
cd apiBancoDadosAulaAuthClientsTransaction
