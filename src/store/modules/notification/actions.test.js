// import MockAdapter from 'axios-mock-adapter';
import Notifications from '../../../services/api/klickart/notifications';
import actions from './actions';

const mockNotifications = [
  {
    id: 1,
    data: {
    },
    created_at: '12/05/2020',
    read: false,
  },
  {
    id: 2,
    data: {
    },
    created_at: '12/05/2020',
    read: false,
  },
];
const mockNotificationsData = {
  mockNotifications,
  total_notifications: 2,
};
const mockJWTToken = 'mockJWTToken';

jest.mock('@/i18n', () => (
  jest.fn().mockImplementation(() => { })
));

jest.mock('../../../services/api/klickart/notifications', () => jest.fn(() => ({
  get: jest.fn(() => Promise.resolve({ data: mockNotificationsData })),
  post: jest.fn(),
})));

jest.mock('../../../services/security/jwt/jwtToken', () => ({
  generateJWTToken: () => mockJWTToken,
}));

describe('scr/store/modules/notification/actions', () => {
  // const notifications = new Notifications();
  // const mockNotificationsRequest = new MockAdapter(notifications.axios);

  const commit = jest.fn();


  describe('getNotifications', () => {
    beforeAll(() => {
      actions.getNotifications({ commit });
    });

    afterAll(() => {
      jest.clearAllMocks();
    });

    it('should commit SET_NOTIFICATIONS with the notifications data', () => {
      expect(commit).toHaveBeenCalledWith('SET_NOTIFICATIONS', mockNotificationsData);
    });
  });

  describe('readNotifications', () => {
    afterAll(() => {
      jest.clearAllMocks();
    });

    describe('when there is no notifications', () => {
      beforeAll(() => {
        actions.readNotifications(null, []);
      });

      afterAll(() => {
        jest.clearAllMocks();
      });

      it('should return without creating an request', () => {
        expect(Notifications.mock.instances.length).toEqual(0);
      });
    });

    describe('when there is notifications', () => {
      describe('and they are all readed', () => {
        beforeAll(() => {
          const readedNotifications = [
            {
              id: 1,
              data: {
              },
              created_at: '12/05/2020',
              read: true,
            },
            {
              id: 2,
              data: {
              },
              created_at: '12/05/2020',
              read: true,
            },
          ];
          actions.readNotifications(null, readedNotifications);
        });

        afterAll(() => {
          jest.clearAllMocks();
        });

        it('should return without creating an request', () => {
          expect(Notifications.mock.instances.length).toEqual(0);
        });
      });

      describe('and there is unread notifications', () => {
        const notificationsId = [1, 2];
        const expectedPostData = { notifications: notificationsId };
        const expectedRequestConfig = {
          headers: {
            Authorization: `Bearer ${mockJWTToken}`,
          },
        };
        let notificationsInstace;

        beforeAll(() => {
          actions.readNotifications(null, mockNotifications);
          notificationsInstace = Notifications.mock.results[0].value;
        });

        afterAll(() => {
          jest.clearAllMocks();
        });

        it('should call notificationRequest with the correct params', () => {
          expect(notificationsInstace.post)
            .toHaveBeenCalledWith('read', expectedPostData, expectedRequestConfig);
        });
      });
    });
  });
});
