import {fetchCategories} from '../util/categories_api_util';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

export const requestAllCategories = () => dispatch => {
  return fetchCategories()
  .then( categories => dispatch(receiveCategories(categories)));
};

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  payload: categories
});
