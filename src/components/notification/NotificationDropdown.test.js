import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import NotificationDropdown from './NotificationDropdown.vue';

jest.mock('@/i18n', () => ({
  t: jest.fn((str) => str),
}));

describe('components/notification/NotificationDropdown', () => {
  const readedNotifications = [
    {
      id: '1',
      data: {
      },
      created_at: '12/05/2020',
      read: true,
    },
    {
      id: '2',
      data: {
      },
      created_at: '12/05/2020',
      read: true,
    },
  ];

  const unreadNotifications = [
    {
      id: '1',
      data: {
      },
      created_at: '12/05/2020',
      read: false,
    },
    {
      id: '2',
      data: {
      },
      created_at: '12/05/2020',
      read: false,
    },
  ];

  const notification = {
    namespaced: true,
    getters: {
      notifications: jest.fn(() => ({ items: readedNotifications, totalItems: 2 })),
    },
  };
  const localVue = createLocalVue();
  localVue.use(Vuex);

  let wrapper;

  describe('when component is mounted', () => {
    describe('and notificationsOpen is truthy', () => {
      beforeAll(() => {
        const store = new Vuex.Store({ modules: { notification } });
        wrapper = shallowMount(NotificationDropdown, { localVue, store });
        wrapper.setData({ notificationsOpen: true });
      });

      afterAll(() => {
        wrapper.destroy();
      });

      it('should renders html correctly', () => {
        expect(wrapper.element).toMatchSnapshot();
      });
    });

    describe('and notificationsOpen is false', () => {
      beforeAll(() => {
        const store = new Vuex.Store({ modules: { notification } });
        wrapper = shallowMount(NotificationDropdown, { localVue, store });
        wrapper.setData({ notificationsOpen: false });
      });

      afterAll(() => {
        wrapper.destroy();
      });

      it('should renders html correctly', () => {
        expect(wrapper.element).toMatchSnapshot();
      });
    });
  });

  describe('computed', () => {
    describe('newNotifications', () => {
      describe('when notificationsReaded data is true', () => {
        beforeAll(() => {
          const store = new Vuex.Store({ modules: { notification } });
          wrapper = shallowMount(NotificationDropdown, { localVue, store });
          wrapper.setData({ notificationsReaded: true });
        });

        afterAll(() => {
          wrapper.destroy();
        });

        it('should return false', () => {
          expect(wrapper.vm.newNotifications).toBeFalsy();
        });
      });

      describe('when all notifications are readed', () => {
        beforeAll(() => {
          const store = new Vuex.Store({ modules: { notification } });
          wrapper = shallowMount(NotificationDropdown, { localVue, store });
        });

        afterAll(() => {
          wrapper.destroy();
        });

        it('should return false', () => {
          expect(wrapper.vm.newNotifications).toBeFalsy();
        });
      });

      describe('when there is an unread notification', () => {
        beforeAll(() => {
          notification.getters.notifications
            .mockImplementationOnce(() => ({ items: unreadNotifications, totalItems: 2 }));
          const store = new Vuex.Store({ modules: { notification } });
          wrapper = shallowMount(NotificationDropdown, { localVue, store });
        });

        afterAll(() => {
          wrapper.destroy();
        });

        it('should return true', () => {
          expect(wrapper.vm.newNotifications).toBeTruthy();
        });
      });
    });
  });

  describe('methods', () => {
    let initialValue;

    describe('toggleNotifications', () => {
      beforeAll(() => {
        const store = new Vuex.Store({ modules: { notification } });
        wrapper = shallowMount(NotificationDropdown, { localVue, store });
        initialValue = wrapper.vm.$data.notificationsOpen;
        wrapper.vm.toggleNotifications();
      });

      afterAll(() => {
        wrapper.destroy();
      });
      it('should invert the previous notificationsOpen value', () => {
        expect(wrapper.vm.$data.notificationsOpen).toEqual(!initialValue);
      });
    });

    describe('closeNotifications', () => {
      describe('when the component contains the event target', () => {
        const event = {};

        beforeAll(() => {
          const store = new Vuex.Store({ modules: { notification } });
          wrapper = shallowMount(NotificationDropdown, { localVue, store });
          wrapper.setData({ notificationsOpen: true });
          event.target = wrapper.vm.$el;
          wrapper.vm.closeNotifications(event);
        });

        afterAll(() => {
          wrapper.destroy();
        });

        it('should not set to false the notifciationsOpen value', () => {
          expect(wrapper.vm.$data.notificationsOpen).toBeTruthy();
        });
      });

      describe('when the components does not contains the event target', () => {
        const event = {};

        beforeAll(() => {
          const store = new Vuex.Store({ modules: { notification } });
          wrapper = shallowMount(NotificationDropdown, { localVue, store });
          wrapper.setData({ notificationsOpen: true });
          event.target = document.body;
          wrapper.vm.closeNotifications(event);
        });

        afterAll(() => {
          wrapper.destroy();
        });

        it('should not set to false the notifciationsOpen value', () => {
          expect(wrapper.vm.$data.notificationsOpen).toBeFalsy();
        });
      });
    });

    describe('readNotifications', () => {
      beforeAll(() => {
        const store = new Vuex.Store({ modules: { notification } });
        wrapper = shallowMount(NotificationDropdown, { localVue, store });
        wrapper.vm.readNotifications();
      });

      afterAll(() => {
        wrapper.destroy();
      });

      it('should notificationsReaded data to true', () => {
        expect(wrapper.vm.$data.notificationsReaded).toBeTruthy();
      });
    });
  });

  describe('lifecycle hooks', () => {
    describe('created()', () => {
      beforeAll(() => {
        window.addEventListener = jest.fn();
        const store = new Vuex.Store({ modules: { notification } });
        wrapper = shallowMount(NotificationDropdown, { localVue, store });
      });

      afterAll(() => {
        wrapper.destroy();
      });

      it('should add closeNotifications to the window click event listener', () => {
        expect(window.addEventListener).toHaveBeenCalledWith('click', wrapper.vm.closeNotifications);
      });
    });

    describe('beforeDestroy()', () => {
      beforeAll(() => {
        window.removeEventListener = jest.fn();
        const store = new Vuex.Store({ modules: { notification } });
        wrapper = shallowMount(NotificationDropdown, { localVue, store });
        wrapper.destroy();
      });

      afterAll(() => {
        wrapper.destroy();
      });

      it('should remove closeNotifications to the window click event listener', () => {
        expect(window.removeEventListener).toHaveBeenCalledWith('click', wrapper.vm.closeNotifications);
      });
    });
  });
});
