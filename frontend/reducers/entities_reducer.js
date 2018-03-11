import { combineReducers } from 'redux';
import serverReducer from './server_reducer';
import channelReducer from './channel_reducer';

const entitiesReducer = combineReducers({
  channels: channelReducer,
  servers: serverReducer
});

export default entitiesReducer;
