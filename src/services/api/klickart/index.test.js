import axios from 'axios';
import Klickart from './index';

jest.mock('axios');
axios.create.mockReturnValue({
  get: jest.fn(),
  delete: jest.fn(),
  put: jest.fn(),
  post: jest.fn(),
  interceptors: {
    response: {
      use: jest.fn(),
    },
  },
});

describe('services/api/klickart/request/index', () => {
  let klickart;
  let path;
  let emptyPath;
  let data;
  let configRequest;
  let config;

  beforeAll(() => {
    configRequest = {
      withCredentials: true,
    };

    path = 'test';

    emptyPath = '';

    data = {
      param: 'test',
    };

    config = {
      param: true,
    };

    const klickartConfig = {
      path: 'private/user',
    };

    klickart = new Klickart(klickartConfig);
  });

  it('should be an instance of Klickart ', () => {
    expect(klickart).toBeInstanceOf(Klickart);
  });

  it('should have an attribute axios ', () => {
    expect(klickart.axios).toBeDefined();
  });

  describe('When calling a get request', () => {
    it('should call axios get function without parameters', () => {
      klickart.get();

      expect(klickart.axios.get).toHaveBeenCalledWith(`${klickart.path}/${emptyPath}`, configRequest);
    });

    it('should call axios get function with parameters ', () => {
      klickart.get(path, config);

      expect(klickart.axios.get).toHaveBeenCalledWith(`${klickart.path}/${path}`, { ...configRequest, ...config });
    });
  });

  describe('When calling a delete request', () => {
    it('should call axios delete function without parameters', () => {
      klickart.delete();

      expect(klickart.axios.delete).toHaveBeenCalledWith(`${klickart.path}/${emptyPath}`, configRequest);
    });

    it('should call axios delete function with parameters ', () => {
      klickart.delete(path, config);

      expect(klickart.axios.delete).toHaveBeenCalledWith(`${klickart.path}/${path}`, { ...configRequest, ...config });
    });
  });

  describe('When calling a put request', () => {
    it('should call axios put function with data', () => {
      klickart.put(emptyPath, data);

      expect(klickart.axios.put).toHaveBeenCalledWith(`${klickart.path}/${emptyPath}`, data, configRequest);
    });

    it('should call axios put function with path and data', () => {
      klickart.put(path, data);

      expect(klickart.axios.put).toHaveBeenCalledWith(`${klickart.path}/${path}`, data, configRequest);
    });

    it('should call axios put function path, data and config', () => {
      klickart.put(path, data, config);

      expect(klickart.axios.put).toHaveBeenCalledWith(`${klickart.path}/${path}`, data, { ...configRequest, ...config });
    });
  });

  describe('When calling a post request', () => {
    it('should call axios post function with data', () => {
      klickart.post(emptyPath, data);

      expect(klickart.axios.post).toHaveBeenCalledWith(`${klickart.path}/${emptyPath}`, data, configRequest);
    });

    it('should call axios post function with path and data', () => {
      klickart.post(path, data);

      expect(klickart.axios.post).toHaveBeenCalledWith(`${klickart.path}/${path}`, data, configRequest);
    });

    it('should call axios post function path, data and config', () => {
      klickart.post(path, data, config);

      expect(klickart.axios.post).toHaveBeenCalledWith(`${klickart.path}/${path}`, data, { ...configRequest, ...config });
    });
  });
});
