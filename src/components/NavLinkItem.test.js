import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import NavLinkItem from './NavLinkItem.vue';

describe('components/NavLinkItem.vue', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);

  let wrapper;

  const topBar = {
    namespaced: true,
    getters: {
      config: () => ({
        upgrade: {
          title: '',
          description: '',
          url: '',
        },
      }),
    },
  };

  const propsData = {
    url: 'https://url.com',
    icon: 'icon',
    linkTitle: 'linkTitle',
    linkDescription: 'linkDescription',
    enabled: true,
  };

  describe('when component is mounted', () => {
    describe('and enabled prop is true', () => {
      beforeAll(() => {
        const store = new Vuex.Store({ modules: { topBar } });
        wrapper = shallowMount(NavLinkItem, { localVue, store, propsData });
      });

      it('should renders correctly', () => {
        expect(wrapper.element).toMatchSnapshot();
      });

      it('should not contains locked class', () => {
        expect(wrapper.contains('.locked')).toBe(false);
      });

      it('should contains enabled link', () => {
        expect(wrapper.contains(`[href="${propsData.url}"]`)).toBe(true);
      });

      afterAll(() => {
        wrapper.destroy();
        jest.clearAllMocks();
      });
    });

    describe('and enabled prop is false', () => {
      beforeAll(() => {
        propsData.enabled = false;

        const store = new Vuex.Store({ modules: { topBar } });
        wrapper = shallowMount(NavLinkItem, { localVue, store, propsData });
      });

      it('should renders correctly', () => {
        expect(wrapper.element).toMatchSnapshot();
      });

      it('should contains locked class', () => {
        expect(wrapper.contains('.locked')).toBe(true);
      });

      it('should contains disabled link', () => {
        expect(wrapper.contains('[href="javascript:;"]')).toBe(true);
      });

      afterAll(() => {
        wrapper.destroy();
        jest.clearAllMocks();
      });
    });

    describe('and have linkDescription prop', () => {
      beforeAll(() => {
        const store = new Vuex.Store({ modules: { topBar } });
        wrapper = shallowMount(NavLinkItem, { localVue, store, propsData });
      });

      it('should renders correctly', () => {
        expect(wrapper.element).toMatchSnapshot();
      });

      it('should contains tooltip-status class', () => {
        expect(wrapper.contains('.tooltip-status')).toBe(true);
      });

      afterAll(() => {
        wrapper.destroy();
        jest.clearAllMocks();
      });
    });

    describe('and does not have linkDescription prop', () => {
      beforeAll(() => {
        propsData.linkDescription = '';

        const store = new Vuex.Store({ modules: { topBar } });
        wrapper = shallowMount(NavLinkItem, { localVue, store, propsData });
      });

      it('should renders correctly', () => {
        expect(wrapper.element).toMatchSnapshot();
      });

      it('should not contains tooltip-status class', () => {
        expect(wrapper.contains('.tooltip-status')).toBe(false);
      });

      afterAll(() => {
        wrapper.destroy();
        jest.clearAllMocks();
      });
    });
  });
});
