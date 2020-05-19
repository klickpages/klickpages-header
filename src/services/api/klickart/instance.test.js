import axios from 'axios';
import Instance from './instance';

axios.create.mockReturnValue({
  interceptors: {
    response: {
      use: jest.fn(),
    },
  },
});

jest.mock('axios');

describe('services/api/klickart/request/instance', () => {
  let expectedConfig;

  describe('When instance doesn`t have an instance variable setted', () => {
    const klickartUrl = 'mockUrl';
    beforeAll(() => {
      Instance(klickartUrl);
    });

    afterAll(() => {
      jest.clearAllMocks();
    });

    it('should call axios.create', () => {
      expectedConfig = { baseURL: klickartUrl };

      expect(axios.create).toHaveBeenCalledWith(expectedConfig);
    });
  });
});
