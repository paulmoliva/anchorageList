import {
  fetchCategories,
  postNewCategory,
  postNewSubcategory
} from '../util/categories_api_util';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_SINGLE_CATEGORY = 'RECEIVE_SINGLE_CATEGORY';
export const RECEIVE_SINGLE_SUBCATEGORY = 'RECEIVE_SINGLE_SUBCATEGORY';

export const requestAllCategories = () => dispatch => {
  return fetchCategories()
  .then( categories => dispatch(receiveCategories(categories)));
};

export const createCategory = category => dispatch => {
  return postNewCategory(category)
  .then( newCategory => dispatch(receiveSingleCategory(newCategory)));
};

export const createSubcategory = subcategory => dispatch => {
  return postNewSubcategory(subcategory)
  .then( newSubcategory => dispatch(receiveSingleSubcategory(newSubcategory)));
};

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  payload: categories
});

export const receiveSubcategories = categories => ({
  type: RECEIVE_CATEGORIES,
  payload: categories
});

export const receiveSingleCategory = category => ({
  type: RECEIVE_SINGLE_CATEGORY,
  payload: category
});

export const receiveSingleSubcategory = subcategory => ({
  type: RECEIVE_SINGLE_SUBCATEGORY,
  payload: subcategory
});
