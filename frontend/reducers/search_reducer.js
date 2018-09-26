import { combineReducers } from 'redux';

import userSearchReducer from './user_search_reducer.js';
import channelSearchReducer from './channel_search_reducer';
import serverSearchReducer from './server_search_reducer';

export default combineReducers({
  users: userSearchReducer,
  channels: channelSearchReducer,
  servers: serverSearchReducer,

});
