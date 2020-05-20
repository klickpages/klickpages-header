import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import KlickpagesHeader from './KlickpagesHeader.vue';
import { setklickartURL } from '../config/klickart';

global.console = { error: jest.fn() };
jest.mock('@/i18n', () => ({
  t: jest.fn((str) => str),
}));
jest.mock('../config/klickart', () => ({
  setklickartURL: jest.fn(),
}));

describe('components/KlickpagesHeader.vue', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);

  let wrapper;

  const klickartURL = 'art.klickpages.com.br';

  const topBar = {
    namespaced: true,
  };

  const propsData = {
    klickartURL,
  };

  describe('when component is mounted', () => {
    beforeAll(() => {
      topBar.actions = {
        getConfig: jest.fn().mockImplementation(() => Promise.resolve()),
      };

      const store = new Vuex.Store({ modules: { topBar } });
      wrapper = shallowMount(KlickpagesHeader, { propsData, localVue, store });
    });

    afterAll(() => {
      wrapper.destroy();
      jest.clearAllMocks();
    });

    it('should call getTopBarConfig action', () => {
      expect(topBar.actions.getConfig)
        .toHaveBeenCalledWith(expect.any(Object), undefined);
    });

    it('should call setKlickartURL', () => {
      expect(setklickartURL).toHaveBeenCalledWith(klickartURL);
    });

    describe('and getTopBarConfig action fails', () => {
      const error = 'Test error';
      beforeAll(() => {
        topBar.actions = {
          getConfig: jest.fn().mockImplementation(() => Promise.reject(error)),
        };

        const store = new Vuex.Store({ modules: { topBar } });
        wrapper = shallowMount(KlickpagesHeader, { propsData, localVue, store });
      });

      it('should call console.error with error', () => {
        expect(console.error).toHaveBeenCalledWith(error);
      });
    });
  });
});
