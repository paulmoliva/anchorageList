import  RECEIVE_CATEGORIES from '../actions/categoriesActions';
import merge from 'lodash/merge';

const categoriesReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_CATEGORIES:
      return merge(state, action.payload);
    default:
      return state;
  }
};

export default categoriesReducer;
