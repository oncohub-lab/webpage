import { combineReducers } from 'redux';
import { ctrlReducer } from './ctrlReducer';

const rootReducer = combineReducers({
  ctrlReducer: ctrlReducer,
});

export default rootReducer;
