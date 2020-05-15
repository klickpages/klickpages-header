import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { getDefinedLocale } from '@/i18n';
import NotificationList from './NotificationList.vue';

jest.mock('@/i18n', () => ({
  t: jest.fn((str) => str),
  getDefinedLocale: jest.fn().mockImplementation(() => 'pt-BR'),
}));

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
      notifications: () => notifications,
    },
    actions: {
      getNotifications: jest.fn()
        .mockImplementation(() => Promise.resolve()),
    },
  };
  const localVue = createLocalVue();
  localVue.use(Vuex);

  let wrapper;

  describe('when components is mounted', () => {
    describe('and there is notifications', () => {
      beforeAll(() => {
        const store = new Vuex.Store({ modules: { notification } });
        wrapper = shallowMount(NotificationList, { store, localVue });
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
        notification.getters.notifications = jest.fn().mockImplementationOnce(() => []);
        const store = new Vuex.Store({ modules: { notification } });
        wrapper = shallowMount(NotificationList, { store, localVue });
      });

      afterAll(() => {
        wrapper.destroy();
      });

      it('should render html correctly', () => {
        expect(wrapper.element).toMatchSnapshot();
      });
    });
  });

  describe('when getNotifications fails', () => {
    const mockError = 'mockError';

    beforeAll(() => {
      notification.actions.getNotifications = jest.fn()
        .mockImplementationOnce(() => Promise.reject(mockError));
      const store = new Vuex.Store({ modules: { notification } });
      wrapper = shallowMount(NotificationList, { store, localVue });
    });

    afterAll(() => {
      wrapper.destroy();
    });

    it('should log the error on the console', () => {
      expect(console.error).toHaveBeenCalledWith(mockError);
    });
  });

  describe('computed', () => {
    describe('locale', () => {
      describe('when locale is pt-BR', () => {
        beforeAll(() => {
          const store = new Vuex.Store({ modules: { notification } });
          wrapper = shallowMount(NotificationList, { store, localVue });
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
          getDefinedLocale.mockImplementationOnce(() => locale);
          const store = new Vuex.Store({ modules: { notification } });
          wrapper = shallowMount(NotificationList, { store, localVue });
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
