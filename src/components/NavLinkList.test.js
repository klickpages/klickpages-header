import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import NavLinkList from './NavLinkList.vue';

describe('components/NavLinkList.vue', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);

  let wrapper;

  const topBar = {
    namespaced: true,
    getters: {
      config: () => ({
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
      }),
    },
  };

  describe('when component is mounted', () => {
    beforeAll(() => {
      const store = new Vuex.Store({ modules: { topBar } });
      wrapper = shallowMount(NavLinkList, { localVue, store });
    });

    it('should renders correctly', () => {
      expect(wrapper.element).toMatchSnapshot();
    });

    it('should contains navbar__menu class', () => {
      expect(wrapper.contains('.navbar__menu')).toBe(true);
    });

    afterAll(() => {
      wrapper.destroy();
      jest.clearAllMocks();
    });
  });
});
