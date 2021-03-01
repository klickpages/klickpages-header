import getters from './getters';

describe('store/modules/notification/getters', () => {
  let state;

  beforeEach(() => {
    state = {
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
    };
  });

  it('notifications', () => {
    const notifications = getters.notifications(state);

    expect(notifications).toEqual(state.notifications);
  });
});
