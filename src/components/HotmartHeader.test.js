import { shallowMount } from '@vue/test-utils';
import HotmartHeader from './HotmartHeader.vue';

describe('components/HotmartHeader.vue', () => {
  let wrapper;

  const hotmartSrc = 'hotmartprourl.com.br';

  const propsData = {
    hotmartSrc,
  };

  describe('when component is mounted', () => {
    wrapper = shallowMount(HotmartHeader, { propsData });
  });

  afterAll(() => {
    wrapper.destroy();
  });

  it('should return propsData correctly', () => {
    expect(wrapper.props().hotmartSrc).toBe('hotmartprourl.com.br');
  });
});
