import axios from 'axios';
import Instance from './instance';

axios.create.mockReturnValue({
  interceptors: {
    response: {
      use: jest.fn(),
    },
  },
});
const mockURL = 'klkickartURL';
jest.mock('axios');
jest.mock('../../../config/klickart', () => ({
  getklickartURL: () => mockURL,
}));

describe('services/api/klickart/request/instance', () => {
  let expectedConfig;

  describe('When instance doesn`t have an instance variable setted', () => {
    beforeAll(() => {
      Instance();
    });

    afterAll(() => {
      jest.clearAllMocks();
    });

    it('should call axios.create', () => {
      expectedConfig = { baseURL: mockURL };

      expect(axios.create).toHaveBeenCalledWith(expectedConfig);
    });
  });

  describe('When instance have an instance variable setted', () => {
    let firstInstance;

    beforeAll(() => {
      firstInstance = Instance();
    });

    afterAll(() => {
      jest.clearAllMocks();
    });

    it('should return the first instance', () => {
      expect(Instance()).toEqual(firstInstance);
    });
  });
});
