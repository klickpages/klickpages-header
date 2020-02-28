import getters from './getters';
import topBarConfigDataTemplate from '../../../helpers/dataTemplate';


describe('store/modules/topBar/getters', () => {
  let state;

  beforeEach(() => {
    state = {
      config: topBarConfigDataTemplate,
    };
  });

  it('config', () => {
    const topBarConfig = getters.config(state);

    expect(topBarConfig).toEqual(state.config);
  });
});
