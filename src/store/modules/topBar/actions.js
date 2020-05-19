import TopBarRequest from '../../../services/api/klickart/topBar';
import types from './types';

const actions = {};

actions.getConfig = ({ commit }) => {
  const topBarRequest = new TopBarRequest();
  return topBarRequest
    .get()
    .then(({ data }) => {
      const { user, ...config } = data;
      commit(types.SET_CONFIG, config);
      commit(types.SET_USER, user);
    });
};
export default actions;
