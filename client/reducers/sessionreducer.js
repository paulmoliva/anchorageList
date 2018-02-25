import {
  RECEIVE_CURRENT_USER,
  CLEAR_CURRENT_USER
} from '../actions/sessionActions';

const sessionReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      const currentUser = action.payload.data;
      return {currentUser:currentUser};
    case CLEAR_CURRENT_USER:
      return {currentUser: null};
    default:
      return state;
  }
};

export default sessionReducer;
