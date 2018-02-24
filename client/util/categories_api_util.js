import axios from 'axios';

import receiveCategories from '../actions/categories_actions';

export const fetchCategories = () => {
  return axios.get('/api/categories');
};
