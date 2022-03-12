import pino from 'pino';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import { KoaHelmetContentSecurityPolicyConfiguration } from 'koa-helmet';

export interface ServerConfig {
  port: number;
  logger: pino.LoggerOptions;
  bodyParser: bodyParser.Options;
  cors: cors.Options;
  helmet: KoaHelmetContentSecurityPolicyConfiguration;
}

export default {
  port: 420,
  logger: {},
  bodyParser: { enableTypes: ['json'], jsonLimit: '10mb' },
  cors: {
    allowMethods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH'],
    allowHeaders: ['Content-Type', 'Authorization'],
    exposeHeaders: ['Content-Length', 'Date', 'X-Request-Id'],
    credentials: true,
    origin: 'http://localhost:3000',
    // optionSuccessStatus: 200,
  },
  helmet: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", 'cdnjs.cloudflare.com'],
      styleSrc: [
        "'self'",
        "'unsafe-inline'",
        'cdnjs.cloudflare.com',
        'fonts.googleapis.com',
      ],
      fontSrc: ["'self'", 'fonts.gstatic.com'],
      imgSrc: ["'self'", 'data:', 'online.swagger.io', 'validator.swagger.io'],
    },
  },
} as ServerConfig;
