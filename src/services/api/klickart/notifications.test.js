import i18n from '../../../i18n';
import Notifications from './notifications';
import Klickart from './index';

jest.mock('./index', () => (
  jest.fn().mockImplementation(() => { })
));

jest.mock('@/i18n', () => (
  jest.fn().mockImplementation(() => { })
));

i18n.locale = 'pt-BR';

describe('services/api/klickart/request/notifications', () => {
  let notifications;
  let expectedConfig = {};

  describe('When creating a new topBar', () => {
    beforeAll(() => {
      expectedConfig.path = `${i18n.locale}/notifications`;
      notifications = new Notifications();
    });

    it('should define a new notifications', () => {
      expect(notifications).toBeInstanceOf(Klickart);
    });

    it('should have called Klickart with the expected configurantions', () => {
      expect(Klickart).toHaveBeenCalledWith(expectedConfig);
    });
  });

  describe('When creating a new notifications with a configuration', () => {
    beforeAll(() => {
      const config = {
        param: true,
      };

      expectedConfig = {
        path: `${i18n.locale}/notifications`,
        param: true,
      };

      notifications = new Notifications(config);
    });

    it('should define a new topBar', () => {
      expect(notifications).toBeDefined();
    });

    it('should have called Klickart with the expected configurantions', () => {
      expect(Klickart).toHaveBeenCalledWith(expectedConfig);
    });
  });
});
