import { expect } from 'chai';
import { describe, it } from 'mocha';
import {
  getEnvironment,
  checkRequiredEnvironmentVariables,
} from '../../../src/config';

describe('Config', () => {
  it('Should throw if required environment variable is not set', async () => {
    expect(()=>{checkRequiredEnvironmentVariables(['NONEXISTING'])}).to.throw();
  });
  it('Should not throw if required environment variable is set', async () => {
    process.env.knownenvvar = 'var';
    expect(()=>{checkRequiredEnvironmentVariables(['knownenvvar'])}).to.not.throw();
  });
  it('Should get env from NODE_ENV', async () => {
    expect(getEnvironment()).to.eql(process.env.NODE_ENV);
  });
  it('Should default to development when NODE_ENV not set', async () => {
    delete process.env.NODE_ENV
    expect(getEnvironment()).to.eql('development');
  });
});
