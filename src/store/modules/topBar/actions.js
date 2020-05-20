import TopBarRequest from '../../../services/api/klickart/topBar';
import types from './types';

const actions = {};

actions.getConfig = ({ commit }) => {
  const topBarRequest = new TopBarRequest();
  return topBarRequest
    .get()
    .then(({ data }) => {
      commit(types.SET_CONFIG, data);
    });
};
export default actions;
