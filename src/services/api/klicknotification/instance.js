import axios from 'axios';
import { getKlicknotificationURL } from '../../../config/klicknotification';

let instance;

export default () => {
  if (instance) return instance;
  const klicknotificationURL = getKlicknotificationURL();

  instance = axios.create({ baseURL: klicknotificationURL });

  return instance;
};
