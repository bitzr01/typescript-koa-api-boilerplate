# TypeScript KOA Boilerplate

Basic boilerplate for Node.js development with TypeScript, KOA, koa-router, koa-helmet, @koa/cors, koa-bodyparser, ESLint, Prettier, Airbnb styleguide, Mocha, Chai, istanbul, tsc-watch, supertest, sinon.js, pino, tsc-watch

[![Node.js CI](https://github.com/bitzr01/typescript-koa-api-boilerplate/actions/workflows/node.js.yml/badge.svg)](https://github.com/bitzr01/typescript-koa-api-boilerplate/actions/workflows/node.js.yml)

[![Coverage Status](https://coveralls.io/repos/github/bitzr01/typescript-koa-api-boilerplate/badge.svg?branch=master)](https://coveralls.io/github/bitzr01/typescript-koa-api-boilerplate?branch=master)

[![CodeQL](https://github.com/bitzr01/typescript-koa-api-boilerplate/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/bitzr01/typescript-koa-api-boilerplate/actions/workflows/codeql-analysis.yml)

[<img alt="MIT Licence" src="https://badges.frapsoft.com/os/mit/mit.svg?v=103">](https://opensource.org/licenses/mit-license.php)

This boilerplate includes the following features:

-   Koa HTTP server with [koa-router](https://github.com/ZijianHe/koa-router), [koa-helmet](https://github.com/venables/koa-helmet#readme), [@koa/cors](https://github.com/koajs/cors), [koa-bodyparser](https://github.com/koajs/bodyparser)
-   Error handling
-   Health module
-   Request logging with [pino](https://github.com/pinojs/pino)
-   Easy development with [tsc-watch](https://github.com/gilamran/tsc-watch#readme) and [pino-pretty](https://github.com/pinojs/pino-pretty)
-   Linting with [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) and.
-   Formatting with [Prettier](https://prettier.io/) and [Airbnb styleguide](https://github.com/airbnb/javascript).
-   Testing with Test Coverage using [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/) and [istanbul/nyc](https://istanbul.js.org/)


## Commands

> Run

```zsh
yarn install
yarn clean       # remove all generated
yarn build       # clean and build dist
yarn start       # start server
yarn dev         # tsc-watch and start server with debugger
```

> Test

```zsh
yarn test        # Run all test
yarn coverage    # Calculate the coverage of all
yarn lint        # Lint all sourcecode
```

## Config
the default server config src/config/server.ts is ovverwritten with anything that is set in the different environment configs src/config/environments.

required environment variables:
NODE_ENV

modules need to be registered in src/bin/server.ts
