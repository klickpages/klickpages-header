import { shallowMount, createLocalVue } from '@vue/test-utils';
import NotificationDropdown from './NotificationDropdown.vue';

jest.mock('@/i18n', () => ({
  t: jest.fn((str) => str),
}));

describe('components/notification/NotificationDropdown', () => {
  const localVue = createLocalVue();
  let wrapper;

  describe('when component is mounted', () => {
    describe('and notificationsOpen is truthy', () => {
      beforeAll(() => {
        wrapper = shallowMount(NotificationDropdown, { localVue });
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
        wrapper = shallowMount(NotificationDropdown, { localVue });
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

  describe('methods', () => {
    let initialValue;

    describe('toggleNotifications', () => {
      beforeAll(() => {
        wrapper = shallowMount(NotificationDropdown, { localVue });
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
          wrapper = shallowMount(NotificationDropdown, { localVue });
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
          wrapper = shallowMount(NotificationDropdown, { localVue });
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
  });

  describe('lifecycle hooks', () => {
    describe('created()', () => {
      beforeAll(() => {
        window.addEventListener = jest.fn();
        wrapper = shallowMount(NotificationDropdown, { localVue });
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
        wrapper = shallowMount(NotificationDropdown, { localVue });
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
