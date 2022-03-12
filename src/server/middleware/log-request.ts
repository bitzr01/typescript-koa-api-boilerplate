import { Context } from 'koa';
import { IMiddleware } from 'koa-router';
import { Logger } from 'pino';

interface LogData {
  method: string;
  path: string;
  statusCode: number;
  timeMs: number;
}
/* A middleware that logs the request and response. */
export default (logger: Logger): IMiddleware =>
  async (ctx: Context, next: () => Promise<unknown>) => {
    const start = Date.now();

    await next();

    const message = `[${ctx.status}] ${ctx.method} ${ctx.path}`;
    const logData: LogData = {
      method: ctx.method,
      path: ctx.path,
      statusCode: ctx.status,
      timeMs: Date.now() - start,
    };

    if (ctx.status >= 400) {
      logger.error(message, logData, ctx.body);
    } else {
      logger.info(message, logData);
    }
  };
