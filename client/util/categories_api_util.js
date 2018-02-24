import axios from 'axios';

import receiveCategories from '../actions/categoriesActions';

export const fetchCategories = () => dispatch => {
  return axios.get('/api/categories')
  .then(() => dispatch(receiveCategories));
};
