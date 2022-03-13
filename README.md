# TypeScript KOA API Boilerplate

Basic boilerplate for Node.js development with TypeScript, KOA, koa-router, koa-helmet, @koa/cors, koa-bodyparser, prisma, ESLint, Prettier, Airbnb styleguide, Mocha, Chai, istanbul, tsc-watch, supertest, oatts, portman, sinon.js, pino, tsc-watch

[![Node.js CI](https://github.com/bitzr01/typescript-koa-api-boilerplate/actions/workflows/node.js.yml/badge.svg)](https://github.com/bitzr01/typescript-koa-api-boilerplate/actions/workflows/node.js.yml)

[![Coverage Status](https://coveralls.io/repos/github/bitzr01/typescript-koa-api-boilerplate/badge.svg?branch=master)](https://coveralls.io/github/bitzr01/typescript-koa-api-boilerplate?branch=master)

[![CodeQL](https://github.com/bitzr01/typescript-koa-api-boilerplate/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/bitzr01/typescript-koa-api-boilerplate/actions/workflows/codeql-analysis.yml)

[<img alt="MIT Licence" src="https://badges.frapsoft.com/os/mit/mit.svg?v=103">](https://opensource.org/licenses/mit-license.php)

This boilerplate includes the following features:

-   Koa HTTP server with [koa-router](https://github.com/ZijianHe/koa-router), [koa-helmet](https://github.com/venables/koa-helmet#readme), [@koa/cors](https://github.com/koajs/cors), [koa-bodyparser](https://github.com/koajs/bodyparser)
-   Error handling
-   Health module
-   ORM with [prisma](https://github.com/prisma/prisma)
-   Input validation with [joi](https://github.com/sideway/joi)
-   Request logging with [pino](https://github.com/pinojs/pino)
-   Easy development with [tsc-watch](https://github.com/gilamran/tsc-watch#readme) and [pino-pretty](https://github.com/pinojs/pino-pretty)
-   Linting with [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) and.
-   Formatting with [Prettier](https://prettier.io/) and [Airbnb styleguide](https://github.com/airbnb/javascript).
-   Testing with Test Coverage using [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/) and [istanbul/nyc](https://istanbul.js.org/)
-   Integration tests with [SuperTest](https://github.com/visionmedia/supertest)
-   Contract tests generation from OpenApi spec with [oatts](https://github.com/google/oatts) or [portman](https://github.com/apideck-libraries/portman)
-   GitHub actions for CI and coverage reporting with [coveralls](https://coveralls.io/)


## OpenApi
We are working of a OpenApi 3.0 spec.
This means you start defining your endpoint in the spec.yml
Integration and contract tests are generated based on the spec using oatts and/or portman


## Commands

> Build

```zsh 
yarn install     # install dependency's
yarn clean       # remove all generated
yarn build       # clean and build dist
yarn dev         # tsc-watch and start server with debugger
yarn lint        # Lint all sourcecode
```

> Test

```zsh
yarn test        # Run all test
yarn test:gen    # generate contract tests with oatts
yarn portman     # generate postman collection and run newman tests
yarn coverage    # Calculate the coverage of all
```

> Run

```zsh
yarn start       # run server
```

## Config
the default config: `src/config/config.json` is overwritten with anything that is set in the different environment configs in `src/config/environments`

required environment variables:
NODE_ENV
DATABASE_URL


## Modules
modules need to be registered in src/bin/server.ts (look at health module)

