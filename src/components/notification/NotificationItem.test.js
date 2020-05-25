import { shallowMount, createLocalVue } from '@vue/test-utils';
import { getDefinedLocale } from '@/i18n';

import NotificationItem from './NotificationItem.vue';

jest.mock('@/i18n', () => ({
  t: jest.fn((str) => str),
  getDefinedLocale: jest.fn().mockImplementation(() => 'pt-BR'),
}));

describe('components/notification/NotificationItem', () => {
  const localVue = createLocalVue();
  const notification = {
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
  };

  let wrapper;
  const propsData = { notification };

  describe('when component is mounted', () => {
    beforeAll(() => {
      wrapper = shallowMount(NotificationItem, { localVue, propsData });
    });

    afterAll(() => {
      wrapper.destroy();
    });

    it('should renders html correctly', () => {
      expect(wrapper.element).toMatchSnapshot();
    });
  });

  describe('computed', () => {
    describe('locale', () => {
      describe('when locale is pt-BR', () => {
        beforeAll(() => {
          wrapper = shallowMount(NotificationItem, { localVue, propsData });
        });

        afterAll(() => {
          wrapper.destroy();
        });

        it('should return ptBR', () => {
          expect(wrapper.vm.locale).toEqual('ptBR');
        });
      });

      describe('when is different from pt-BR', () => {
        const locale = 'en';

        beforeAll(() => {
          getDefinedLocale.mockImplementation(() => locale);
          wrapper = shallowMount(NotificationItem, { localVue, propsData });
        });

        afterAll(() => {
          wrapper.destroy();
        });

        it('should return the defined locale', () => {
          expect(wrapper.vm.locale).toEqual(locale);
        });
      });
    });
  });
});
