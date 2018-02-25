const CREATE_USER = 'CREATE_USER';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
const LOGIN_USER = 'LOGIN_USER';

import { postNewUser, postUserLogin } from '../util/session_api_util';

export const createUser = user => dispatch => {
  return postNewUser(user)
  .then( newUser => dispatch(receiveCurrentUser(newUser)));
};

export const loginUser = user => dispatch => {
  return postUserLogin(user)
  .then( currentUser => dispatch(receiveCurrentUser(currentUser)));
};

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  payload: user
});
