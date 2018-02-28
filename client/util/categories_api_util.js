import axios from 'axios';

import receiveCategories from '../actions/categories_actions';

export const fetchCategories = () => {
  return axios.get('/api/categories');
};

export const fetchSUbcategories = () => {
  return axios.get('/api/subcategories');
};

export const postNewCategory = category => {
  return axios.post('/api/categories');
};

export const postNewSubcategory = subcategory => {
  return axios.post('/api/subcategories');
};
