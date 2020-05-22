import Notifications from '../../../services/api/klickart/notifications';
import { generateJWTToken } from '../../../services/security/jwt/jwtToken';
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

actions.readNotifications = (context, notifications) => {
  if (!notifications.length) {
    return;
  }

  const notificationsIds = notifications
    .filter((notification) => !notification.read)
    .map((notification) => notification.id);

  if (notificationsIds.length) {
    const notificationRequest = new Notifications();
    const requestConfig = {
      headers: {
        Authorization: `Bearer ${generateJWTToken()}`,
      },
    };

    notificationRequest.post('read', { notifications: notificationsIds }, requestConfig);
  }
};
export default actions;
