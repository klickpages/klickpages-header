import KlickpagesHeader from './components/KlickpagesHeader.vue';
import topBar from './store/modules/topBar';

export default {
  install(Vue, options) {
    if (!options || !options.store) {
      throw new Error('Please initialise plugin with a Vuex store.');
    }

    options.store.registerModule('topBar', topBar);

    Vue.component('klickpages-header', KlickpagesHeader);
  },
};
