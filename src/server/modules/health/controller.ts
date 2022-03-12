import { Context } from 'koa';

import HealthMonitor from '../../../lib/HealthMonitor';

export default class HealthController {
  private health: HealthMonitor;

  /**
   * Controller constructor taking a HealthMonitor object
   * @param {HealthMonitor} health - HealthMonitor
   * @returns None
   */
  constructor(health: HealthMonitor) {
    this.health = health;
  }

  /**
   * Get the health status of the server.
   * @param {Context} ctx - Context
   * @returns None
   */
  public getHealth(ctx: Context): void {
    const status = this.health.getStatus();

    ctx.body = status;
    const cc: boolean = status.isShuttingDown;
    ctx.status = cc ? 503 : 200;
  }
}