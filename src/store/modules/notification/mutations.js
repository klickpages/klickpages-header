import types from './types';
// import notificationTemplate from '../../../helpers/notificationTemplate';

const state = {
  notifications: [],
  totalItems: 0,
};

const mutations = {
  [types.SET_NOTIFICATIONS](state, notificationsData) {
    state.notifications = notificationsData.notifications;
    state.totalItems = notificationsData.total_items;
  },
};

export { state, mutations };
