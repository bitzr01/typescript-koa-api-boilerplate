import { expect } from 'chai';
import { after, describe, it } from 'mocha';
import supertest, { SuperTest, Test } from 'supertest';
import server, {healthMonitor} from '../../../../../src/bin/server'

describe('GET /health', () => {
  const testServer = server;
  const app: SuperTest<Test> = supertest(testServer);

  it('Should return 200 when server is running healthy', async () => {
    const res = await app.get('/healthz').expect(200);

    expect(res.body.isShuttingDown).equals(false);
  });

  it('Should return 503 when server is shutting down', async () => {
    healthMonitor.shuttingDown()

    const res = await app.get('/healthz').expect(503);

    expect(res.body.isShuttingDown).equals(true);
  });
  it('Should return 503 when server is down', async () => {
    testServer.close()
    await app.get('/healthz').expect(503);

    
  });
  after(()=>{
    testServer.close()
  })
});
