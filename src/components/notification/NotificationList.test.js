import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import NotificationList from './NotificationList.vue';

jest.mock('@/i18n', () => ({
  t: jest.fn((str) => str),
}));

const $t = jest.fn().mockImplementation((msg) => msg);

console.error = jest.fn();

describe('components/notification/NotificationList', () => {
  const notifications = [
    {
      id: '1',
      data: {
        ptBR: {
          title: 'Teste',
          description: 'notificacao de teste',
          link: '',
          linkText: '',
        },
        en: {
          title: 'Test',
          description: 'test notification',
          link: '',
          linkText: '',
        },
        es: {
          title: 'Prueba',
          description: 'notificación de prueba',
          link: '',
          linkText: '',
        },
      },
      created_at: '12/05/2020',
    },
    {
      id: '2',
      data: {
        ptBR: {
          title: 'Teste com Link',
          description: 'notificacao de teste com Link',
          link: 'https://jwt.io/introduction/',
          linkText: 'json.io',
        },
        en: {
          title: 'Test with link',
          description: 'test notification with link',
          link: 'https://jwt.io/introduction/',
          linkText: 'json.io',
        },
        es: {
          title: 'Prueba',
          description: 'notificación de prueba con enlace',
          link: 'https://jwt.io/introduction/',
          linkText: 'json.io',
        },
      },
      created_at: '12/05/2020',
    },
  ];

  const notification = {
    namespaced: true,
    getters: {
      notifications: jest.fn(() => notifications),
    },
    actions: {
      getNotifications: jest.fn()
        .mockImplementation(() => Promise.resolve()),
      readNotifications: jest.fn(),
    },
  };
  const localVue = createLocalVue();
  localVue.use(Vuex);

  let wrapper;

  describe('when components is mounted', () => {
    describe('and there is notifications', () => {
      beforeAll(() => {
        const store = new Vuex.Store({ modules: { notification } });
        wrapper = shallowMount(NotificationList, { store, localVue, mocks: { $t } });
      });

      afterAll(() => {
        wrapper.destroy();
      });

      it('should render html correctly', () => {
        expect(wrapper.element).toMatchSnapshot();
      });
    });

    describe('and there is no notifications', () => {
      beforeAll(() => {
        notification.getters.notifications.mockImplementationOnce(() => []);
        const store = new Vuex.Store({ modules: { notification } });
        wrapper = shallowMount(NotificationList, { store, localVue, mocks: { $t } });
      });

      afterAll(() => {
        wrapper.destroy();
      });

      it('should render html correctly', () => {
        expect(wrapper.element).toMatchSnapshot();
      });
    });

    describe('and there occurs an error while trying to retrieve the notifications', () => {
      const mockError = 'mockError';

      beforeAll(() => {
        notification.getters.notifications.mockImplementationOnce(() => []);
        notification.actions.getNotifications
          .mockImplementationOnce(() => Promise.reject(mockError));
        const store = new Vuex.Store({ modules: { notification } });
        wrapper = shallowMount(NotificationList, { store, localVue, mocks: { $t } });
      });

      afterAll(() => {
        wrapper.destroy();
      });

      it('should render html correctly', () => {
        expect(wrapper.element).toMatchSnapshot();
      });

      it('should log the error on the console', () => {
        expect(console.error).toHaveBeenCalledWith(mockError);
      });
    });
  });

  describe('computed', () => {
    describe('emptyNotifications', () => {
      describe('when there is no notification', () => {
        beforeAll(() => {
          notification.getters.notifications.mockImplementationOnce(() => []);
          const store = new Vuex.Store({ modules: { notification } });
          wrapper = shallowMount(NotificationList, { store, localVue, mocks: { $t } });
        });

        afterAll(() => {
          wrapper.destroy();
        });

        it('should return true', () => {
          expect(wrapper.vm.emptyNotifications).toBeTruthy();
        });
      });

      describe('when there is notifications', () => {
        beforeAll(() => {
          const store = new Vuex.Store({ modules: { notification } });
          wrapper = shallowMount(NotificationList, { store, localVue, mocks: { $t } });
        });

        afterAll(() => {
          wrapper.destroy();
        });

        it('should return false', () => {
          expect(wrapper.vm.emptyNotifications).toBeFalsy();
        });
      });
    });

    describe('showNotificationError', () => {
      const dummyMethod = () => {};

      describe('when currentNotificationStatus is equal to empty', () => {
        beforeAll(() => {
          const store = new Vuex.Store({ modules: { notification } });
          wrapper = shallowMount(NotificationList, {
            store,
            localVue,
            mocks: { $t },
            methods: { refreshNotifications: dummyMethod },
          });
          wrapper.setData({ currentNotificationsStatus: 'empty' });
        });

        afterAll(() => {
          wrapper.destroy();
        });

        it('should return true', () => {
          expect(wrapper.vm.showNotificationError).toBeTruthy();
        });
      });

      describe('when currentNotificationStatus is equal to error', () => {
        beforeAll(() => {
          const store = new Vuex.Store({ modules: { notification } });
          wrapper = shallowMount(NotificationList, {
            store,
            localVue,
            mocks: { $t },
            methods: { refreshNotifications: dummyMethod },
          });
          wrapper.setData({ currentNotificationsStatus: 'error' });
        });

        afterAll(() => {
          wrapper.destroy();
        });

        it('should return true', () => {
          expect(wrapper.vm.showNotificationError).toBeTruthy();
        });
      });

      describe('when currentNotificationStatus is equal to success', () => {
        beforeAll(() => {
          const store = new Vuex.Store({ modules: { notification } });
          wrapper = shallowMount(NotificationList, {
            store,
            localVue,
            mocks: { $t },
            methods: { refreshNotifications: dummyMethod },
          });
          wrapper.setData({ currentNotificationsStatus: 'success' });
        });

        afterAll(() => {
          wrapper.destroy();
        });

        it('should return false', () => {
          expect(wrapper.vm.showNotificationError).toBeFalsy();
        });
      });
    });

    describe('errorMessage', () => {
      const dummyMethod = () => {};

      describe('when currentNotificationStatus is equal to empty', () => {
        beforeAll(() => {
          const store = new Vuex.Store({ modules: { notification } });
          wrapper = shallowMount(NotificationList, {
            store,
            localVue,
            mocks: { $t },
            methods: { refreshNotifications: dummyMethod },
          });
          wrapper.setData({ currentNotificationsStatus: 'empty' });
        });

        afterAll(() => {
          wrapper.destroy();
        });

        it('should return $t(\'notifications.noNotifications\')', () => {
          expect(wrapper.vm.errorMessage).toEqual($t('notifications.noNotifications'));
        });
      });

      describe('when currentNotificationStatus is equal to error', () => {
        beforeAll(() => {
          const store = new Vuex.Store({ modules: { notification } });
          wrapper = shallowMount(NotificationList, {
            store,
            localVue,
            mocks: { $t },
            methods: { refreshNotifications: dummyMethod },
          });
          wrapper.setData({ currentNotificationsStatus: 'error' });
        });

        afterAll(() => {
          wrapper.destroy();
        });

        it('should return $t(\'notifications.unableLoad\')', () => {
          expect(wrapper.vm.errorMessage).toEqual($t('notifications.unableLoad'));
        });
      });

      describe('when currentNotificationStatus is neither error or empty', () => {
        beforeAll(() => {
          const store = new Vuex.Store({ modules: { notification } });
          wrapper = shallowMount(NotificationList, {
            store,
            localVue,
            mocks: { $t },
            methods: { refreshNotifications: dummyMethod },
          });
          wrapper.setData({ currentNotificationsStatus: 'success' });
        });

        afterAll(() => {
          wrapper.destroy();
        });

        it('should return an empty string', () => {
          expect(wrapper.vm.errorMessage).toEqual('');
        });
      });
    });
  });

  describe('whatchers', () => {
    describe('notificationsOpen', () => {
      describe('when change value to false', () => {
        beforeAll(() => {
          const store = new Vuex.Store({ modules: { notification } });
          wrapper = shallowMount(NotificationList, {
            store,
            localVue,
            props: { notificationsOpen: true },
            mocks: { $t },
          });
          jest.clearAllMocks();

          wrapper.setProps({ notificationsOpen: false });
        });

        afterAll(() => {
          wrapper.destroy();
        });

        it('should return without calling readNotifications', () => {
          expect(notification.actions.readNotifications).not.toHaveBeenCalled();
        });
      });

      describe('when newValue is true', () => {
        beforeAll(() => {
          const store = new Vuex.Store({ modules: { notification } });
          wrapper = shallowMount(NotificationList, {
            store,
            localVue,
            mocks: { $t },
          });

          wrapper.setProps({ notificationsOpen: true });
        });

        afterAll(() => {
          wrapper.destroy();
        });

        it('should call readNotifications', () => {
          expect(notification.actions.readNotifications).toHaveBeenCalled();
        });
      });
    });
  });

  describe('methods', () => {
    describe('sendReadNotification', () => {
      beforeAll(() => {
        const store = new Vuex.Store({ modules: { notification } });
        wrapper = shallowMount(NotificationList, {
          store,
          localVue,
          mocks: { $t },
        });

        wrapper.vm.sendReadNotification();
      });

      afterAll(() => {
        wrapper.destroy();
      });

      it('should call readNotifications action with the notifications', () => {
        expect(notification.actions.readNotifications)
          .toHaveBeenCalledWith(expect.any(Object), notifications);
      });
    });
  });
});
