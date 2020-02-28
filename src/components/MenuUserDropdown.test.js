import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import MenuUserDropdown from './MenuUserDropdown.vue';

describe('components/MenuUserDropdown.vue', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);

  const topBarConfig = {
    user: {
      name: 'Foo Bar',
    },
    profile: {
      url: 'profile-url.com',
      title: 'profile',
    },
    domain: {
      url: 'domain-url.com',
      title: 'domain',
    },
    logout: {
      url: 'logout-url.com',
      title: 'logout',
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
      wrapper = shallowMount(MenuUserDropdown, { localVue, store });
    });

    afterAll(() => {
      wrapper.destroy();
      jest.clearAllMocks();
    });

    it('should render the html correctly', () => {
      expect(wrapper.element).toMatchSnapshot();
    });

    it('should render the first letter of the name on the user button', () => {
      const userButton = wrapper.element.getElementsByClassName('btn-user')[0];
      expect(userButton.innerHTML).toEqual(topBarConfig.user.name[0]);
    });

    it('should render the user name in the menu', () => {
      const userNameSpan = wrapper.element.getElementsByClassName('user__text')[0];
      expect(userNameSpan.innerHTML).toEqual(topBarConfig.user.name);
    });
  });
});
