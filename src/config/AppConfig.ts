import { ServerConfig } from "./server";

export default interface AppConfig {
    env: ENV;
    server: Partial<ServerConfig>;
}
export enum ENV {
    development = 'development',
    production = 'production',
    staging = 'staging',
    test = 'test'
}