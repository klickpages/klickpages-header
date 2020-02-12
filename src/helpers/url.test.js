import url from './url';

describe('url', () => {
  describe('getLocale', () => {
    describe('when locale is valid', () => {
      it('returns the locale', () => {
        const path = '/pt-BR/auth?token=123';
        expect(url.getLocale(path)).toEqual('pt-BR');
      });
    });

    describe('when locale is invalid', () => {
      it('returns null', () => {
        const path = '/ru/auth?token=123';
        expect(url.getLocale(path)).toEqual(null);
      });
    });
  });
});
