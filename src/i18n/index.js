import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { getLocale as urlGetLocale } from '../helpers/url';
import config from './config';
import { getLocale } from './cookie';

Vue.use(VueI18n);

const loadLocaleMessages = () => {
  const locales = require.context('@/locales', true, /[A-Za-z0-9-_,\s]+\.json$/i);
  const messages = {};

  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);

    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });

  return messages;
};

export const getDefinedLocale = () => {
  const urlLocale = urlGetLocale(window.location.pathname);
  const cookieLocale = getLocale();

  return urlLocale || cookieLocale || config.DEFAULT_LOCALE;
};

const i18n = new VueI18n({
  locale: getDefinedLocale(),
  messages: loadLocaleMessages(),
});

export const $t = i18n.t;

export default i18n;
