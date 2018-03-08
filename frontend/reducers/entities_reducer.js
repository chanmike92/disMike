import { combineReducers } from 'redux';
import serverReducer from './server_reducer';

const entitiesReducer = combineReducers({
  servers: serverReducer
});

export default entitiesReducer;
