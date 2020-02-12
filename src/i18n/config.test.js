import config from './config';

describe('i18n/config', () => {
  it('LOCALE_KEY', () => {
    expect(config.LOCALE_KEY).toEqual('klickpages_locale');
  });
  it('SET_PAYMENTS', () => {
    expect(config.DEFAULT_LOCALE).toEqual('pt-BR');
  });
});
