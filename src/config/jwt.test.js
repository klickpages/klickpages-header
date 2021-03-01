import { getJWTSecret, setJWTSecret } from './jwt';

describe('src/config/jwt', () => {
  const secret = '111222333';

  describe('setJWTSecret', () => {
    beforeAll(() => {
      setJWTSecret(secret);
    });

    it('should set the jwtSecret attribute', () => {
      expect(getJWTSecret()).toEqual(secret);
    });
  });

  describe('getJWTSecret', () => {
    describe('when its defined', () => {
      describe('should return the defined secret', () => {
        beforeAll(() => {
          setJWTSecret(secret);
        });

        it('should return the defined url attribute', () => {
          expect(getJWTSecret()).toEqual(secret);
        });
      });
    });
  });
});
