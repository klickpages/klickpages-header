import config from './config';

describe('src/services/security/jwt/config', () => {
  it('should return an object with algorithm key equals to HS512', () => {
    expect(config.algorithm).toEqual('HS512');
  });

  it('should return an object with expiresIn key equals to 5 minutes in seconds', () => {
    expect(config.expiresIn).toEqual(5 * 60);
  });
});
