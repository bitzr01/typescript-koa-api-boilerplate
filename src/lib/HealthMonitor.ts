import moment from 'moment';

export interface Status {
  startTime: string;
  upTime: string;
  isShuttingDown: boolean;
}

export default class HealthMonitor {
  private startTime: number;

  private isShuttingDown: boolean;

  /**
   * Constructor function that sets the isShuttingDown flag to false and sets the startTime to the
  current time.
   * @returns None
   */
  constructor() {
    this.isShuttingDown = false;
    this.startTime = Date.now();
  }

  /**
   * "The shuttingDown function is called when the server is shutting down."
   * @returns None
   */
  public shuttingDown(): void {
    this.isShuttingDown = true;
  }

  /**
   * return a status object with the start time, up time, and whether the server is shutting down.
   * @returns The status object.
   */
  public getStatus(): Status {
    return {
      startTime: new Date(this.startTime).toISOString(),
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      upTime: moment(this.startTime).fromNow(true),
      isShuttingDown: this.isShuttingDown,
    };
  }
}
