import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import MenuSwitch from './MenuSwitch.vue';

describe('components/MenuSwitch.vue', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);

  let wrapper;

  const topBar = {
    namespaced: true,
  };

  describe('when component is mounted', () => {
    describe('and klicksend topBarConfig is enabled', () => {
      beforeAll(() => {
        topBar.getters = {
          config: () => ({
            klicksend: {
              enabled: true,
            },
          }),
        };

        const store = new Vuex.Store({ modules: { topBar } });
        wrapper = shallowMount(MenuSwitch, { localVue, store });
      });

      it('should renders correctly', () => {
        expect(wrapper.element).toMatchSnapshot();
      });

      it('should contains menu--switch class', () => {
        expect(wrapper.contains('.menu--switch')).toBe(true);
      });

      afterAll(() => {
        wrapper.destroy();
        jest.clearAllMocks();
      });
    });

    describe('and klicksend topBarConfig is not enabled', () => {
      beforeAll(() => {
        topBar.getters = {
          config: () => ({
            klicksend: {
              enabled: false,
            },
          }),
        };

        const store = new Vuex.Store({ modules: { topBar } });
        wrapper = shallowMount(MenuSwitch, { localVue, store });
      });

      it('should renders correctly', () => {
        expect(wrapper.element).toMatchSnapshot();
      });

      afterAll(() => {
        wrapper.destroy();
        jest.clearAllMocks();
      });
    });
  });
});
