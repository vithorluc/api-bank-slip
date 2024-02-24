---

# API Bank Slip

This API serves as a test for validating bank slip codes.

## Technologies Used

- Node.js
- JavaScript
- Express.js
- Jest (for unit testing)

## Dependencies (required for API functionality)

- babel-cli
- babel-preset-env
- body-parser
- config
- consign
- cors
- dotenv
- express
- moment-timezone

## Operation

Before starting, make sure to install the necessary dependencies:

```sh
npm install
```

To start the API in the development environment, use the following command, which will transpile the code using Babel:

```sh
npm run dev
```

## Unit Testing

To run unit tests, use the following command:

```sh
npm run test
```

## Routes

This API has only one endpoint, exclusively designed for validating bank slips:

| Route            | Response                            |
| ---------------- | ----------------------------------- |
| /bankslip/:code  | barCode, expirationDate, amount     |

## Directory Architecture

The project directory structure is organized as follows:

```sh
- src
    - config          # Project configurations
    - controllers     # Business logic controllers
    - routes          # API route definitions
    - services        # Application services
    - utils           # Miscellaneous utilities
```
