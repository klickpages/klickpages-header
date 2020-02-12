const url = {};

const validLocales = ['en', 'es', 'pt-BR'];

const isLocaleValid = locale => validLocales.includes(locale);

const getFirstPath = (path) => {
  const paths = path.split('/');
  let i = 0;

  while (!paths[i] && i < paths.length) i += 1;
  return paths[i];
};

url.getLocale = (path) => {
  const locale = getFirstPath(path);

  if (isLocaleValid(locale)) {
    return locale;
  }

  return null;
};

url.hasLocale = path => !!url.getLocale(path);

export default url;
