import { shallowMount } from '@vue/test-utils';
import HotmartHeader from './HotmartHeader.vue';

describe('components/HotmartHeader.vue', () => {
  let wrapper;

  const hotmartProURL = 'hotmartprourl.com.br';

  const propsData = {
    hotmartProURL,
  };

  describe('when component is mounted', () => {
    wrapper = shallowMount(HotmartHeader, { propsData });
  });

  afterAll(() => {
    wrapper.destroy();
  });

  it('should return propsData correctly', () => {
    expect(wrapper.props().hotmartProURL).toBe('hotmartprourl.com.br');
  });
});
