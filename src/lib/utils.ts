import config from '../config';

// eslint-disable-next-line import/prefer-default-export
export const getApiPrefix = (path: string): string => {
  if (path.length) return `/${config.prefix}/v${config.version}/${path}`;
  return `/${config.prefix}/v${config.version}`;
};
