import serverConfig from './server';
import developmentConfig from './environments/development';
import productionConfig from './environments/production';
import stagingConfig from './environments/staging';
import testConfig from './environments/test';
import AppConfig, { ENV } from './AppConfig';

export const checkRequiredEnvironmentVariables = (requiredEnvironmentVariables:string[]) => {
  requiredEnvironmentVariables.forEach((key: string) => {
    if (process.env[key] === undefined) {
      throw new Error(`Required environment variable "${key}" undefined`);
    }
  });
}
export const getEnvironment = () => process.env.NODE_ENV as ENV || ENV.development

checkRequiredEnvironmentVariables(["NODE_ENV"])
const env = getEnvironment();

const environments: {
  development: Partial<AppConfig>;
  production: Partial<AppConfig>;
  staging: Partial<AppConfig>;
  test: Partial<AppConfig>;
} = {
  development: developmentConfig,
  production: productionConfig,
  staging: stagingConfig,
  test: testConfig,
};
const environment = environments[env as keyof typeof environments]
const combinedServerConfig = {...serverConfig, ...environment.server}
delete environment.server;
export default {
    env,
    server:combinedServerConfig,
    ...environment
} as AppConfig;
