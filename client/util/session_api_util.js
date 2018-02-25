import axios from 'axios';

export const postNewUser = user => {
  return axios.post('/api/users/signup', user);
};

export const postUserLogin = user => {
  return axios.post('/api/users/login', user);
};

export const postUserLogout = user => {
  return axios.post('/api/users/logout', user);
};
