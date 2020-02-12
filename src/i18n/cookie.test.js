import { getLocale } from './cookie';

jest.mock('js-cookie', () => ({ get: () => 'pt-BR' }));

describe('i18n/cookie', () => {
  describe('when function getLocale is called', () => {
    it('should return locale key defined in cookie', () => {
      expect(getLocale()).toEqual('pt-BR');
    });
  });
});
