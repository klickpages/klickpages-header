import i18n from '../../i18n';
import TopBar from './topBar';
import Klickart from './index';

jest.mock('./index', () => (
  jest.fn().mockImplementation(() => { })
));

jest.mock('@/i18n', () => (
  jest.fn().mockImplementation(() => { })
));

i18n.locale = 'pt-BR';

describe('services/api/klickart/request/topBar', () => {
  let topBar;
  let expectedConfig = {};

  describe('When creating a new topBar', () => {
    beforeAll(() => {
      expectedConfig.path = `${i18n.locale}/partials/top_bar`;
      topBar = new TopBar();
    });

    it('should define a new topBar', () => {
      expect(topBar).toBeInstanceOf(Klickart);
    });

    it('should have called Klickart with the expected configurantions', () => {
      expect(Klickart).toHaveBeenCalledWith(expectedConfig);
    });
  });

  describe('When creating a new topBar with a configuration', () => {
    beforeAll(() => {
      const config = {
        param: true,
      };

      expectedConfig = {
        path: `${i18n.locale}/partials/top_bar`,
        param: true,
      };

      topBar = new TopBar(config);
    });

    it('should define a new topBar', () => {
      expect(topBar).toBeDefined();
    });

    it('should have called Klickart with the expected configurantions', () => {
      expect(Klickart).toHaveBeenCalledWith(expectedConfig);
    });
  });
});
