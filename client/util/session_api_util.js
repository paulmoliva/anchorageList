import axios from 'axios';

export const postNewUser = user => {
  return axios.post('/api/signup', user);
};

export const postUserLogin = user => {
  return axios.post('/api/login', user);
};
