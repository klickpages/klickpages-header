import { createLocalVue, shallowMount } from '@vue/test-utils';

import NotificationError from './NotificationError.vue';

describe('components/notification/NotificationError', () => {
  const localVue = createLocalVue();
  let wrapper;

  describe('when components is mounted', () => {
    const propsData = {
      errorMessage: 'test error message',
    };

    beforeAll(() => {
      wrapper = shallowMount(NotificationError, { localVue, propsData });
    });

    afterAll(() => {
      wrapper.destroy();
    });

    it('should renders html correctly', () => {
      expect(wrapper.element).toMatchSnapshot();
    });
  });

  describe('methods', () => {
    describe('refreshNotifications', () => {
      const event = {
        stopPropagation: jest.fn(),
      };

      beforeAll(() => {
        wrapper = shallowMount(NotificationError, { localVue });
        wrapper.vm.refreshNotifications(event);
      });

      afterAll(() => {
        wrapper.destroy();
      });

      it('should stop event propagation', () => {
        expect(event.stopPropagation).toHaveBeenCalled();
      });

      it('should emmit refreshNotifications event', () => {
        expect(wrapper.emitted().refreshNotifications).toBeTruthy();
      });
    });
  });
});
