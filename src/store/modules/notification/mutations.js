import types from './types';
// import notificationTemplate from '../../../helpers/notificationTemplate';

const state = {
  notifications: {
    items: [],
    totalItems: 0,
  },
};

const mutations = {
  [types.SET_NOTIFICATIONS](state, notificationsData) {
    state.notifications.items = state.notifications.items.concat(notificationsData.notifications);
    state.notifications.totalItems = notificationsData.total_items;
  },
};

export { state, mutations };
