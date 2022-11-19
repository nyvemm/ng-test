# Sawada - Frontend - NG <> TRYBE

Esse projeto é um teste para a vaga de desenvolvedor na empresa NG.CASH.

---

### Requerimentos

Para rodar o projeto é necessário instalar as seguintes ferramentas:

- [Node.js](https://nodejs.org/en/) - v19.1.0 ou superior
- [Yarn](https://yarnpkg.com/) - Gerenciador de pacotes
- [Docker](https://www.docker.com/) - Para subir, rodar e testar a aplicação
- [Docker Compose](https://docs.docker.com/compose/) - Para criar e rodar os containers

### Tecnologias

- [Typescript](https://www.typescriptlang.org/) - Javascript com tipagem
- [Vite](https://vitejs.dev/) - Ferramenta de build para aplicações web modernas
- [React](https://reactjs.org/) - Biblioteca para construção de interfaces
- [Redux](https://redux.js.org/) - Gerenciamento de estado
- [Redux Saga](https://redux-saga.js.org/) - Middleware para gerenciamento de efeitos colaterais
- [React Router](https://reactrouter.com/) - Roteamento de páginas
- [Styled Components](https://styled-components.com/) - Estilização de componentes
- [Axios](https://www.npmjs.com/package/axios) - Cliente HTTP
- [Husky](https://typicode.github.io/husky/#/) - Git hooks para automatizar tarefas
- [Jest](https://jestjs.io/) - Framework de testes para Javascript
- [Prettier](https://prettier.io/) - Formatação de código automática
- [YUP](https://www.npmjs.com/package/yup) - Validação de dados de entrada
- [Formik](https://formik.org/) - Biblioteca para criação de formulários

As outras dependências podem ser encontradas no arquivo `package.json`.

---

### Como rodar o projeto

O projeto foi desenvolvido utilizando o Docker. Para subir o projeto bastar rodar o comando `docker-compose up`
ou `yarn up` no terminal. O projeto estará disponível em `http://localhost:5173`.

### Como rodar os testes

Para rodar os testes, basta rodar o comando `yarn test` na raiz do projeto.

### Como rodar os testes com o coverage

Para rodar os testes com o coverage, basta rodar o comando `yarn test:coverage` na raiz do projeto.

### Como rodar o projeto sem o Docker

> **Observação:** É necessário ter o backend rodando para que o frontend funcione corretamente.

1 - Instale as dependências do projeto com o comando `yarn install` na raiz do projeto.

2 - Rode o comando `yarn dev` para iniciar o projeto.

3 - O projeto estará disponível em `http://localhost:5173`.

### Principais casos de uso

- [x] Cadastro de usuário
- [x] Login de usuário
- [x] Exibição de saldo
- [x] Criação de transação
- [x] Exibição de transações

