import bodyParser from 'koa-bodyparser';
import pino from 'pino';
import cors from '@koa/cors';
import { KoaHelmetContentSecurityPolicyConfiguration } from 'koa-helmet';
import { deepmerge } from 'deepmerge-ts';
import jsonConfig from './config.json';
import * as envs from './environments';

export interface AppConfig {
  env: ENV;
  server: ServerConfig;
}

export interface ServerConfig {
  port: number;
  host: string;
  logger: pino.LoggerOptions;
  bodyParser: bodyParser.Options;
  cors: cors.Options;
  helmet: KoaHelmetContentSecurityPolicyConfiguration;
}

export enum ENV {
  development = 'development',
  production = 'production',
  staging = 'staging',
  test = 'test',
}

export const checkRequiredEnvironmentVariables = (
  requiredEnvironmentVariables: string[],
) => {
  requiredEnvironmentVariables.forEach((key: string) => {
    if (process.env[key] === undefined) {
      throw new Error(`Required environment variable "${key}" undefined`);
    }
  });
};

export const getEnvironment = () =>
  (process.env.NODE_ENV as ENV) || ENV.development;

const requiredEnvironmentVariables = ['NODE_ENV', 'DATABASE_URL'];

checkRequiredEnvironmentVariables(requiredEnvironmentVariables);
const env = getEnvironment();

// eslint-disable-next-line import/namespace
const environmentConfig = envs[env as keyof typeof envs] as Partial<AppConfig>;
const config: AppConfig = deepmerge(jsonConfig, environmentConfig) as AppConfig;
config.env = env;
export default config;
