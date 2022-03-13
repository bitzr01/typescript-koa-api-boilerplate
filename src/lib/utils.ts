import config from '../config';

export const getApiPrefix = (path: string): string => {
  if (path.length) return `/${config.prefix}/v${config.version}/${path}`;
  return `/${config.prefix}/v${config.version}`;
};
