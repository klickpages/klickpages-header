import types from './types';
import topBarConfigDataTemplate from '../../../helpers/dataTemplate';

const state = {
  config: topBarConfigDataTemplate,
  user: {
    name: '',
    id: '',
  },
};

const mutations = {
  [types.SET_CONFIG](state, config) {
    state.config = config;
  },
  [types.SET_USER](state, user) {
    state.user = user;
  },
};

export { state, mutations };
