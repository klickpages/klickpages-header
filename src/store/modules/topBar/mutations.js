import types from './types';

const state = {
  config: {
    klicksend: {
      url: '',
      enabled: true,
    },
    home: {
      title: '',
      url: '',
    },
    klicktest: {
      title: '',
      description: '',
      url: '',
      enabled: true,
    },
    klicktimer: {
      title: '',
      description: '',
      url: '',
      enabled: true,
    },
    klickbox: {
      title: '',
      description: '',
      url: '',
      enabled: true,
    },
    klickredirect: {
      title: '',
      description: '',
      url: '',
    },
    mailservice: {
      description: '',
      url: '',
    },
    profile: {
      title: '',
      url: '',
    },
    domain: {
      title: '',
      url: '',
    },
    logout: {
      title: '',
      url: '',
    },
    upgrade: {
      title: '',
      description: '',
      url: '',
    },
  },
};

const mutations = {
  [types.SET_CONFIG](state, config) {
    state.config = config;
  },
};

export { state, mutations };
