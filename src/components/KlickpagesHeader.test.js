import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import KlickpagesHeader from './KlickpagesHeader.vue';

describe('components/KlickpagesHeader.vue', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);

  let wrapper;

  const klickartUrl = 'art.klickpages.com.br';

  const topBar = {
    namespaced: true,
  };

  const propsData = {
    klickartUrl,
  };

  describe('when component is mounted', () => {
    beforeAll(() => {
      topBar.actions = {
        getConfig: jest.fn().mockImplementation(() => Promise.resolve()),
      };

      const store = new Vuex.Store({ modules: { topBar } });
      wrapper = shallowMount(KlickpagesHeader, { propsData, localVue, store });
    });

    it('should call getTopBarConfig action with the klickartUrl', () => {
      expect(topBar.actions.getConfig).toHaveBeenCalledWith(expect.any(Object), klickartUrl);
    });

    describe('and getTopBarConfig action fails', () => {
      const error = 'Test error';
      beforeAll(() => {
        topBar.actions = {
          getConfig: jest.fn().mockImplementation(() => Promise.reject(error)),
        };

        const store = new Vuex.Store({ modules: { topBar } });
        wrapper = shallowMount(KlickpagesHeader, { propsData, localVue, store });
        jest.spyOn(global.console, 'error');
      });

      it('should call console.error with error', () => {
        expect(console.error).toHaveBeenCalledWith(error);
      });
    });

    afterAll(() => {
      wrapper.destroy();
      jest.clearAllMocks();
    });
  });
});
