import { combineReducers } from 'redux';
import serverReducer from './server_reducer';
import channelReducer from './channel_reducer';
import messageReducer from './message_reducer';
import userReducer from './user_reducer';
import dmReducer from './dm_reducer';
import friendReducer from './friend_reducer';


const entitiesReducer = combineReducers({
  users: userReducer,
  channels: channelReducer,
  dms: dmReducer,
  servers: serverReducer,
  messages: messageReducer,
});

export default entitiesReducer;
