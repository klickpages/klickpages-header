import KlickpagesHeader from './components/KlickpagesHeader.vue';
import topBar from './store/modules/topBar';
import notification from './store/modules/notification';

export default {
  install(Vue, options) {
    if (!options || !options.store) {
      throw new Error('Please initialise plugin with a Vuex store.');
    }

    options.store.registerModule('topBar', topBar);
    options.store.registerModule('notification', notification);

    Vue.component('klickpages-header', KlickpagesHeader);
  },
};
