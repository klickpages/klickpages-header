import instance from './instance';

const configRequest = () => ({
  withCredentials: true,
});

export default class Klicknotification {
  constructor(config = {}) {
    this.path = `/users/${config.userID}/notifications`;
    this.axios = instance();
  }

  get(resource = '', config = {}) {
    return this.axios.get(`${this.path}/${resource}`, Object.assign({}, configRequest(), config));
  }

  post(resource = '', data, config = {}) {
    return this.axios.post(`${this.path}/${resource}`, data, Object.assign({}, configRequest(), config));
  }
}
