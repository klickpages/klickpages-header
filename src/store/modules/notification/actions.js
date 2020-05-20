import Notifications from '../../../services/api/klickart/notifications';
import types from './types';

const actions = {};

actions.getNotifications = ({ commit }) => {
  const notificationRequest = new Notifications();
  return notificationRequest
    .get()
    .then(({ data }) => {
      commit(types.SET_NOTIFICATIONS, data);
    });
};
export default actions;
