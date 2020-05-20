import MockAdapter from 'axios-mock-adapter';
import TopBarRequest from '../../../services/api/klickart/topBar';
import actions from './actions';
import topBarConfigDataTemplate from '../../../helpers/dataTemplate';


jest.mock('@/i18n', () => (
  jest.fn().mockImplementation(() => { })
));

describe('store/modules/topBar/actions', () => {
  const topBarRequest = new TopBarRequest();
  const mockTopBarRequest = new MockAdapter(topBarRequest.axios);

  const commit = jest.fn();
  let mockedData;

  describe('getConfig', () => {
    beforeAll(() => {
      mockedData = topBarConfigDataTemplate;
    });

    afterAll(() => {
      jest.clearAllMocks();
    });

    it('should commit SET_CONFIG with topBar config data', (done) => {
      mockTopBarRequest.onGet().reply(200, mockedData);

      actions.getConfig({ commit }).then(() => {
        expect(commit).toHaveBeenCalledWith('SET_CONFIG', mockedData);

        done();
      });
    });
  });
});
