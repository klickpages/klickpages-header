import jwt from 'jsonwebtoken';
import jwtConfig from './config';
import { getJWTSecret } from '../../../config/jwt';

export const generateJWTToken = () => jwt.sign({}, getJWTSecret(), jwtConfig);

export default { generateJWTToken };
