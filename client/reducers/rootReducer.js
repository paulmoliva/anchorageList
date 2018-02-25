import { combineReducers } from 'redux';

import categoriesReducer from './categoriesReducer';
import sessionReducer from './sessionReducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  session: sessionReducer
});

export default rootReducer;
