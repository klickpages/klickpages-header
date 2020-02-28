import { mutations } from './mutations';
import topBarConfigDataTemplate from '../../../helpers/dataTemplate';


describe('store/modules/topBar/mutations', () => {
  const state = {
    config: {},
  };

  const topBarConfig = {
    config: topBarConfigDataTemplate,
  };

  describe('SET_CONFIG', () => {
    beforeAll(() => {
      mutations.SET_CONFIG(state, topBarConfig);
    });

    it('should set config state with topBarConfig', () => {
      expect(state.config).toEqual(topBarConfig);
    });
  });
});
