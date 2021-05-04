import { combineReducers } from 'redux';
// import { linesReducer } from './lines/reducers';
// import { authReducer } from './auth/reducers';
import { navigationReducer } from './navigation/reducers';

// COMBINED REDUCERS
const globalReducer = {
  // auth: authReducer,
  // lines: linesReducer,
  navigation: navigationReducer,
};

export default combineReducers(globalReducer);
