import jwt from 'jsonwebtoken';
import jwtConfig from './config';
import { generateJWTToken } from './jwtToken';

const mockSecret = 'secret';
jest.mock('jsonwebtoken', () => ({
  sign: jest.fn(),
}));
jest.mock('../../../config/jwt', () => ({
  getJWTSecret: () => mockSecret,
}));

describe('src/services/security/jwt/jwtToken', () => {
  describe('generateJWTToken', () => {
    beforeAll(() => {
      generateJWTToken();
    });
    it('should call jwt with the correct params', () => {
      expect(jwt.sign).toHaveBeenCalledWith({}, mockSecret, jwtConfig);
    });
  });
});
