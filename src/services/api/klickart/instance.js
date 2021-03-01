import axios from 'axios';
import { getklickartURL } from '../../../config/klickart';

let instance;

export default () => {
  if (instance) return instance;

  instance = axios.create({ baseURL: getklickartURL() });

  return instance;
};
