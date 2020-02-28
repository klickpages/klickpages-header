import types from './types';
import topBarConfigDataTemplate from '../../../helpers/dataTemplate';

const state = {
  config: topBarConfigDataTemplate,
};

const mutations = {
  [types.SET_CONFIG](state, config) {
    state.config = config;
  },
};

export { state, mutations };
