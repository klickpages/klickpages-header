import types from './types';

const actions = {};

const mockNotifications = [
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

actions.getNotifications = ({ commit }) => {
  commit(types.SET_NOTIFICATIONS, mockNotifications);
};
export default actions;
