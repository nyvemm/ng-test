# Sawada - Backend - NG <> TRYBE

Esse projeto é um teste para a vaga de desenvolvedor na empresa NG.CASH.

---

### Requerimentos

Para rodar o projeto é necessário instalar as seguintes ferramentas:

- [Node.js](https://nodejs.org/en/) - v19.1.0 ou superior
- [Docker](https://www.docker.com/) - Para subir, rodar e testar a aplicação
- [Docker Compose](https://docs.docker.com/compose/) - Para criar e rodar os containers

### Tecnologias

- [Typescript](https://www.typescriptlang.org/) - Javascript com tipagem
- [Express.js](https://expressjs.com/) - Framework web minimalista para Node.js
- [Knex.js](http://knexjs.org/) - Query builder para Node.js
- [PostgreSQL](https://www.postgresql.org/) - Banco de dados relacional
- [Husky](https://typicode.github.io/husky/#/) - Git hooks para automatizar tarefas
- [Jest](https://jestjs.io/) - Framework de testes para Javascript
- [Prettier](https://prettier.io/) - Formatação de código automática
- [Joi Validator](https://joi.dev/) - Validação de dados de entrada
- [Crypto.js](https://cryptojs.gitbook.io/docs/) - Biblioteca de criptografia
- [JsonWebToken](https://jwt.io/) - Autenticação via token

As outras dependências podem ser encontradas no arquivo `package.json`.

---

### Como rodar o projeto

O projeto foi desenvolvido utilizando o Docker. Para subir o projeto bastar rodar o comando `docker-compose up`
ou `npm run up` no terminal. O projeto estará disponível em `http://localhost:3000`.

### Como rodar os testes

Para rodar os testes, basta rodar o comando `npm run test` na raiz do projeto.

### Como rodar os testes com o coverage

Para rodar os testes com o coverage, basta rodar o comando `npm run test:coverage` na raiz do projeto.

### Como rodar o projeto sem o Docker

> **Observação:** É necessário ter o PostgreSQL instalado na máquina.

1- Crie um banco de dados PostgreSQL com o nome `backend`

2 -Sete as variáveis de ambiente localmente no `PATH` do seu sistema operacional. Um exemplo de variáveis de ambiente:

```bash
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=backend
JWT_SECRET=123456
```

3 - Rode as migrations com o comando `npm run migrate:latest`

4 - Rode o comando `npm run dev` na raiz do projeto para iniciar o servidor.

5 - O projeto estará disponível em `http://localhost:3000`.

### Como resetar o banco de dados

Para resetar o banco de dados, basta rodar o comando `npm run rollback` na raiz do projeto e depois rodar o
comando `npm run migrate` novamente.

---

### Documentação da API

Além da documentação também é possível testar a API utilizando o [Postman](https://www.postman.com/). Para isso, basta
importar o arquivo `NG.postman_collection.json` que está no diretório:

```bash
./docs/NG.postman_collection.json
```

---


> POST /signup

Escopo: Cadastrar um usuário

Request:

```json
{
  "username": "username",
  "password": "password",
  "confirmPassword": "password"
}
```

Response:

> 201 - OK  (Se o usuário foi cadastrado com sucesso)

> 400 - Bad Request (Se a requisição não for válida)

> 409 - Conflict (Se o usuário já existir)

> 500 - Internal Server Error (Se ocorrer algum erro interno)

---

> POST /login

Escopo: Autenticar um usuário

Request:

```json
{
  "username": "username",
  "password": "password"
}
```

Response:

Após a autenticação, o usuário receberá um token JWT nos cookies da aplicação.

> 200 - OK  (Se o usuário foi autenticado com sucesso)

> 400 - Bad Request (Se a requisição não for válida)

> 401 - Unauthorized (Se o usuário não existir ou a senha estiver incorreta)

> 500 - Internal Server Error (Se ocorrer algum erro interno)

---

> POST /logout

Escopo: Deslogar um usuário

Authorization:

Esse endpoint requer autenticação. Para isso, o usuário deve enviar o token JWT no header da requisição.

Response:

Após a desautenticação, o token JWT será removido dos cookies da aplicação e não será mais válido.

> 200 - OK  (Se o usuário foi deslogado com sucesso)

> 500 - Internal Server Error (Se ocorrer algum erro interno)

---

> GET /balance

Escopo: Obter o saldo da conta do usuário

Authorization:

Esse endpoint requer autenticação. Para isso, o usuário deve enviar o token JWT no header da requisição.

Response:

```json
{
  "userId": 1,
  "accountId": 1,
  "username": "username",
  "balance": "1000.00"
}
```

> 200 - OK  (Se o saldo foi obtido com sucesso)

> 401 - Unauthorized (Se o usuário não estiver autenticado)

> 500 - Internal Server Error (Se ocorrer algum erro interno)


---

> POST /transactions

Escopo: Criar uma transação

Authorization:

Esse endpoint requer autenticação. Para isso, o usuário deve enviar o token JWT no header da requisição.

Request:

```json
{
  "creditedAccountId": 1,
  "value": "100.00"
}
```

Response:

> 201 - OK  (Se a transação foi criada com sucesso)

> 400 - Bad Request (Se a requisição não for válida)

> 401 - Unauthorized (Se o usuário não estiver autenticado)

> 403 - Forbidden (Se o usuário não tiver saldo suficiente para realizar a transação)

> 403 - Forbidden (Se o usuário tentar transferir para a própria conta)

> 500 - Internal Server Error (Se ocorrer algum erro interno)

---

> GET /transactions

Escopo: Obter as transações do usuário

Authorization:

Esse endpoint requer autenticação. Para isso, o usuário deve enviar o token JWT no header da requisição.

Query Params:

- `page` - Número da página (Opcional, padrão: 1)
- `limit` - Quantidade de transações por página (Opcional, padrão: 50)
- `startDate` - Data inicial (Opcional, aceita o formato ISO 8601)
- `endDate` - Data final (Opcional, aceita o formato ISO 8601)
- `type` - Tipo da transação (Opcional, aceita os valores `cash-in` ou `cash-out`)

Response:

```json
[
  {
    "id": 1,
    "debitedAccountId": 1,
    "creditedAccountId": 2,
    "debitedAccountUsername": "username",
    "creditedAccountUsername": "username2",
    "value": "100.00",
    "createdAt": "2020-10-01T00:00:00.000Z"
  },
  {
    "id": 2,
    "debitedAccountId": 2,
    "creditedAccountId": 1,
    "debitedAccountUsername": "username2",
    "creditedAccountUsername": "username",
    "value": "100.00",
    "createdAt": "2020-10-01T00:00:00.000Z"
  }
]
```

> 200 - OK  (Se as transações foram obtidas com sucesso)

> 400 - Bad Request (Se a requisição não for válida)

> 401 - Unauthorized (Se o usuário não estiver autenticado)

> 500 - Internal Server Error (Se ocorrer algum erro interno) 

