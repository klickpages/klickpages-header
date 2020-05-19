import KlicknotificationRequest from '../../../services/api/klicknotification';
import types from './types';

const actions = {};

actions.getNotifications = ({ commit }, userID) => {
  const klicknotificationRequest = new KlicknotificationRequest({ userID });
  return klicknotificationRequest
    .get()
    .then(({ data }) => {
      commit(types.SET_NOTIFICATIONS, data);
    });
};
export default actions;
