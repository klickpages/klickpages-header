import { shallowMount, createLocalVue } from '@vue/test-utils';
import topBarRequest from '../services/klickartRequest/topBar';
import KlickpagesHeader from './KlickpagesHeader';

const mockHtml = 'mockedHTML';
jest.mock('../services/klickartRequest/topBar');

describe('components/KlickpagesHeader.vue', () => {
  const localVue = createLocalVue();
  let wrapper;

  describe('when component is mounted', () => {
    const klickartUrl = 'art.klickpages.com.br';
    const propsData = {
      klickartUrl,
    };

    beforeAll(() => {
      topBarRequest.mockImplementation(() => ({
        get: () => Promise.resolve({ data: mockHtml }),
      }));
      wrapper = shallowMount(KlickpagesHeader, { propsData, localVue });
    });

    it('should call topBarRequest with the klickartUrl', () => {
      expect(topBarRequest).toHaveBeenCalledWith({ klickartUrl });
    });

    it('should override the component html with the html returned by the request', () => {
      expect(wrapper.element).toMatchSnapshot();
    });
  });
});
