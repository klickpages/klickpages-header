module.exports = {
  lintOnSave: false,
  pluginOptions: {
    i18n: {
      locale: 'pt-BR',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
  devServer: {
    disableHostCheck: true,
    public: '0.0.0.0:8080',
  },
};
