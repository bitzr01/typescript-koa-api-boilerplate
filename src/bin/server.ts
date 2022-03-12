import Koa from 'koa';
import pino from 'pino';
import cors from '@koa/cors';
import helmet from 'koa-helmet';
import bodyParser from 'koa-bodyparser';
import HealthMonitor from '../lib/HealthMonitor';
import errorHandler from '../server/middleware/error-handler';
import logRequest from '../server/middleware/log-request';
import config from "../config";
import health from '../server/modules/health';

const logger: pino.Logger = pino(config.server.logger);

const app = new Koa();

app.use(helmet.contentSecurityPolicy(config.server.helmet));
app.use(logRequest(logger));
app.use(errorHandler(logger));
app.use(bodyParser(config.server.bodyParser));
app.use(cors(config.server.cors));

// register healt module
export const healthMonitor = new HealthMonitor();
health(app, healthMonitor)

// register other modules


export default app.listen(config.server.port);

logger.info(`XFun API running on port ${config.server.port}`);