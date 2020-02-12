import cookie from 'js-cookie';
import config from './config';

export const getLocale = () => cookie.get(config.LOCALE_KEY);

export default {
  getLocale,
};
