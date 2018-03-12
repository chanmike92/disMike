import { combineReducers } from 'redux';
import serverReducer from './server_reducer';
import channelReducer from './channel_reducer';
import messageReducer from './message_reducer';

const entitiesReducer = combineReducers({
  channels: channelReducer,
  servers: serverReducer,
  messages: messageReducer
});

export default entitiesReducer;
