import { mutations } from './mutations';

describe('store/modules/notification/mutations', () => {
  const state = {
    notifications: [],
  };

  const notificationsData = {
    notifications: [
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
    ],
    total_items: 1,
  };

  describe('SET_NOTIFICATIONS', () => {
    beforeAll(() => {
      mutations.SET_NOTIFICATIONS(state, notificationsData);
    });

    it('should set notifications state with notifications', () => {
      expect(state.notifications).toEqual(notificationsData.notifications);
    });

    it('should set notifications state with notifications', () => {
      expect(state.totalItems).toEqual(notificationsData.total_items);
    });
  });
});
