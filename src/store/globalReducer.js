import { combineReducers } from 'redux';
import { profileReducer } from './profile/reducers';

// COMBINED REDUCERS
const globalReducer = {
  profile: profileReducer,
};

export default combineReducers(globalReducer);
