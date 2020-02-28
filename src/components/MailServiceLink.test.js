import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import MailServiceLink from './MailServiceLink.vue';

describe('components/MailServiceLink.vue', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);

  const topBarConfig = {
    mailservice: {
      url: 'mailservice-url.com',
      description: 'mailservice description',
    },
  };

  const topBar = {
    namespaced: true,
    getters: {
      config: () => topBarConfig,
    },
  };

  let wrapper;

  describe('when component is mounted', () => {
    beforeAll(() => {
      const store = new Vuex.Store({ modules: { topBar } });
      wrapper = shallowMount(MailServiceLink, { localVue, store });
    });

    afterAll(() => {
      wrapper.destroy();
      jest.clearAllMocks();
    });

    it('should render the html correctly', () => {
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});
