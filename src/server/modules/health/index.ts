import Koa from 'koa';
import Router from 'koa-router';
import { getApiPrefix } from '../../../lib/utils';

import HealthMonitor from '../../../lib/HealthMonitor';
import HealthController from './controller';

/* binding routes to controller methods */
export default (server: Koa, healthMonitor: HealthMonitor): void => {
  const controller = new HealthController(healthMonitor);
  const router: Router = new Router({ prefix: getApiPrefix('') });

  router.get('/health', controller.getHealth.bind(controller));

  server.use(router.routes());
};
