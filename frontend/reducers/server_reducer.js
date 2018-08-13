import { RECEIVE_A_SERVER, REMOVE_A_SERVER, RECEIVE_ALL_SERVERS } from '../actions/server_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { REMOVE_A_CHANNEL, RECEIVE_NEW_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_CURRENT_USER_SESSION } from '../actions/user_actions';
import { merge } from 'lodash';


const serverReducer = (oldState = {}, action) => {

  Object.freeze(oldState);
  let newState;
  let currentServer;
  let channelIds;
  let channel;
  switch(action.type) {
    case RECEIVE_CURRENT_USER_SESSION:
      return merge({}, oldState, action.payload.servers);
    case RECEIVE_ALL_SERVERS:
      return merge({}, oldState, action.payload.servers);
    case RECEIVE_A_SERVER:
      return Object.assign({}, oldState, { [action.payload.server.id]: action.payload.server });
    case RECEIVE_NEW_CHANNEL:
      newState = merge({}, oldState);
      currentServer = newState[action.payload.channel.server_id];
      channelIds = currentServer.channel_ids.concat(action.payload.channel.id);
      
      channel = merge({}, currentServer, { channel_ids: channelIds });
      return merge({}, oldState, { [action.payload.channel.server_id]: channel });
    case REMOVE_A_CHANNEL:
      newState = merge({}, oldState);
      currentServer = newState[action.serverId];
      channelIds = currentServer.channel_ids.filter(id => id !== action.channelId);
      channel = Object.assign(currentServer, { channel_ids: channelIds });
      return Object.assign({}, oldState, { [action.serverId]: channel });
    case REMOVE_A_SERVER:
      newState = merge({}, oldState);
      delete newState[action.serverId];
      return newState;
    default:
      return oldState;
  }
};

export default serverReducer;
