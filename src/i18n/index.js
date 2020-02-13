import Vue from 'vue';
import VueI18n from 'vue-i18n';
import url from '../helpers/url';
import config from './config';
import { getLocale } from './cookie';

Vue.use(VueI18n);

const getDefinedLocale = () => {
  const urlLocale = url.getLocale(window.location.pathname);
  const cookieLocale = getLocale();

  return urlLocale || cookieLocale || config.DEFAULT_LOCALE;
};

const i18n = new VueI18n({
  locale: getDefinedLocale(),
});

export default i18n;
