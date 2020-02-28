import TopBarRequest from '../../../services/klickartRequest/topBar';
import types from './types';

const actions = {};

actions.getConfig = ({ commit }, klickartUrl) => {
  const topBarRequest = new TopBarRequest({ klickartUrl });
  return topBarRequest
    .get()
    .then(({ data }) => {
      commit(types.SET_CONFIG, data);
    });
};
export default actions;
