/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import 'dotenv/config';
import Koa from 'koa';
import pino from 'pino';
import cors from '@koa/cors';
import helmet from 'koa-helmet';
import bodyParser from 'koa-bodyparser';
import { koaSwagger } from 'koa2-swagger-ui';
import Router from 'koa-router';
import serve from 'koa-static';
import mount from 'koa-mount';
import HealthMonitor from '../lib/HealthMonitor';
import errorHandler from '../server/middleware/error-handler';
import logRequest from '../server/middleware/log-request';
import config from '../config';
import health from '../server/modules/health';

const logger: pino.Logger = pino(config.server.logger);
const app = new Koa();

app.use(helmet.contentSecurityPolicy(config.server.helmet));
app.use(logRequest(logger));
app.use(errorHandler(logger));
app.use(bodyParser(config.server.bodyParser));
app.use(cors(config.server.cors));
app.use(mount(config.specPath, serve(config.specFolder)));

const router = new Router();
router.get(
  config.swaggerPath,
  koaSwagger({
    routePrefix: false,
    specPrefix: config.specPath,
    swaggerOptions: { url: `${config.specPath}/openapi.json` },
  }),
);
app.use(router.routes());

// register healt module
export const healthMonitor = new HealthMonitor();
health(app, healthMonitor);

// register other modules

export default app.listen(config.server.port);

// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
logger.info(`API listening on port ${config.server.port}`);
