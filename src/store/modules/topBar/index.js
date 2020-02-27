import { state, mutations } from './mutations';
import getters from './getters';
import actions from './actions';

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
