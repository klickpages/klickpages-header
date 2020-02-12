import axios from 'axios';

let instance;

export default (klickartUrl) => {
  if (instance) return instance;

  instance = axios.create({ baseURL: klickartUrl });

  return instance;
};
