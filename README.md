# api-bank-slip

Está api é um teste para validação de códigos de barra digitáveis.

## tecnologias ultilizadas

- node
- jasvascript
- express
- jest (testes unitários)

## dependências (apenas para funcionamento da api)

- babel-cli
- babel-preset-env
- body-parser
- config
- consign
- cors
- dotenv
- express
- moment-timezone
- supertest

## Funcionamento

Inicialmente fazer as instalações das dependências necessárias

```sh
    npm install
```

Para ver a API funcionando basta rodar o seguinte comando que usará o babel para transpilar
em ambiente de desenvolvimento o código

```sh
    npm run dev
```

## para rodas os testes unitários

```sh
   npm run test
```

## rotas

Essa api possui apenas 1 endpoint. Seu funcionamento é unicamente arquitetado para
validação de boletos

| Rota            | retorno                         |
| --------------- | ------------------------------- |
| /bankslip/:code | barCode, expirationDate, amount |

## arquitetura

```sh
   - src
        - config
        - controllers
        - routes
        - services
        - utils
```
