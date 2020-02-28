import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import LocaleDropwdown from './LocaleDropdown.vue';

describe('components/LocaleDropdown.vue', () => {
  describe('when component is mounted', () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);

    const topBar = {
      namespaced: true,
    };

    let wrapper;

    describe('when is on pt-BR locale', () => {
      beforeAll(() => {
        topBar.getters = {
          config: () => ({
            locale: {
              current_locale: 'pt-BR',
              portuguese: 'Português',
              english: 'Inglês',
              spanish: 'Espanhol',
              selected: 'Selecionado',
            },
          }),
        };

        const store = new Vuex.Store({ modules: { topBar } });
        wrapper = shallowMount(LocaleDropwdown, { localVue, store });
      });

      afterAll(() => {
        wrapper.destroy();
        jest.clearAllMocks();
      });

      it('should renders html correctly', () => {
        expect(wrapper.element).toMatchSnapshot();
      });
    });

    describe('when is on en locale', () => {
      beforeAll(() => {
        topBar.getters = {
          config: () => ({
            locale: {
              current_locale: 'en',
              portuguese: 'Portuguese',
              english: 'English',
              spanish: 'Spanish',
              selected: 'Selected',
            },
          }),
        };

        const store = new Vuex.Store({ modules: { topBar } });
        wrapper = shallowMount(LocaleDropwdown, { localVue, store });
      });

      afterAll(() => {
        wrapper.destroy();
        jest.clearAllMocks();
      });

      it('should renders html correctly', () => {
        expect(wrapper.element).toMatchSnapshot();
      });
    });

    describe('when is on es locale', () => {
      beforeAll(() => {
        topBar.getters = {
          config: () => ({
            locale: {
              current_locale: 'es',
              portuguese: 'Portugués',
              english: 'Inglés',
              spanish: 'Español',
              selected: 'Seleccionado',
            },
          }),
        };

        const store = new Vuex.Store({ modules: { topBar } });
        wrapper = shallowMount(LocaleDropwdown, { localVue, store });
      });

      afterAll(() => {
        wrapper.destroy();
        jest.clearAllMocks();
      });

      it('should renders html correctly', () => {
        expect(wrapper.element).toMatchSnapshot();
      });
    });

    describe('when localePath method is called', () => {
      const currentLocale = 'pt-BR';
      const newLocale = 'en';
      const baseUrl = 'https://sample.klickpages.com';

      beforeAll(() => {
        topBar.getters = {
          config: () => ({
            locale: {
              current_locale: currentLocale,
              portuguese: 'Português',
              english: 'Inglês',
              spanish: 'Espanhol',
              selected: 'Selecionado',
            },
          }),
        };

        const store = new Vuex.Store({ modules: { topBar } });
        wrapper = shallowMount(LocaleDropwdown, { localVue, store });

        global.window = Object.create(window);
        Object.defineProperty(window, 'location', {
          value: {
            href: baseUrl,
          },
          writable: true,
        });
      });

      afterAll(() => {
        wrapper.destroy();
        jest.clearAllMocks();
      });

      describe('when the current locale is not on the url', () => {
        beforeAll(() => {
          window.location.href = baseUrl;
        });
        it('should return just the new locale', () => {
          expect(wrapper.vm.localePath(newLocale)).toEqual(`/${newLocale}`);
        });
      });

      describe('when the current locale is in the url', () => {
        const extendedUrl = `${baseUrl}/${currentLocale}/something`;

        beforeAll(() => {
          window.location.href = extendedUrl;
        });

        it('should return the previous url with the locale replaced', () => {
          expect(wrapper.vm.localePath(newLocale)).toEqual(`${baseUrl}/${newLocale}/something`);
        });
      });
    });
  });
});
