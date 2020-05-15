import Vue from 'vue';
import Vuex from 'vuex';
import topBar from './modules/topBar';
import notification from './modules/notification';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    topBar,
    notification,
  },
});
