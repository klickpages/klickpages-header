import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import KlickpagesHeader from './KlickpagesHeader.vue';
import { setklickartURL } from '../config/klickart';
import { setJWTSecret } from '../config/jwt';

global.console = { error: jest.fn() };
jest.mock('@/i18n', () => ({
  t: jest.fn((str) => str),
}));
jest.mock('../config/klickart', () => ({
  setklickartURL: jest.fn(),
}));
jest.mock('../config/jwt', () => ({
  setJWTSecret: jest.fn(),
}));

describe('components/KlickpagesHeader.vue', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);

  let wrapper;

  const klickartURL = 'art.klickpages.com.br';
  const jwtSecret = '986392d822a953640a12c03aa3dc6799';

  const topBar = {
    namespaced: true,
  };

  const propsData = {
    klickartURL,
    jwtSecret,
  };

  describe('when component is mounted', () => {
    beforeAll(() => {
      topBar.actions = {
        getConfig: jest.fn().mockImplementation(() => Promise.resolve()),
      };

      topBar.getters = {
        config: () => ({
          user: {
            ucode: '132ccb93-82ba-4fdc-b626-e2944889acbc',
          },
        }),
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

    it('should call setJWTSecret', () => {
      expect(setJWTSecret).toHaveBeenCalledWith(jwtSecret);
    });

    it('should contains hotmart-pro class', () => {
      expect(wrapper.contains('.hotmart-pro')).toBe(true);
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
