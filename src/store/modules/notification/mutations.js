import types from './types';
// import notificationTemplate from '../../../helpers/notificationTemplate';

const state = {
  notifications: [],
};

const mutations = {
  [types.SET_NOTIFICATIONS](state, notifications) {
    state.notifications = notifications;
  },
};

export { state, mutations };
