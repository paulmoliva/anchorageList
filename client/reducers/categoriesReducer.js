import  {RECEIVE_CATEGORIES} from '../actions/categories_actions';
import merge from 'lodash/merge';

const categoriesReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_CATEGORIES:
      let newState = {};
      action.payload.data.forEach( el => {
        newState[el['_id']] = el;
      });
      return {
        byID: newState
      };
    default:
      return state;
  }
};

export default categoriesReducer;
