import { mutations } from './mutations';

describe('store/modules/notification/mutations', () => {
  const state = {
    notifications: [],
  };

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
  ];

  describe('SET_NOTIFICATIONS', () => {
    beforeAll(() => {
      mutations.SET_NOTIFICATIONS(state, notifications);
    });

    it('should set config state with notifications', () => {
      expect(state.notifications).toEqual(notifications);
    });
  });
});
