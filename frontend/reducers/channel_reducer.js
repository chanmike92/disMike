import { RECEIVE_A_CHANNEL, RECEIVE_ALL_CHANNELS, REMOVE_A_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_A_SERVER } from '../actions/server_actions';
import { merge } from 'lodash';


const channelReducer = (oldState = {}, action) => {

  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ALL_CHANNELS:
      return action.channels;
    case RECEIVE_A_SERVER:
      
      return merge({}, oldState, action.payload.channels);
    case RECEIVE_A_CHANNEL:
      return merge({}, oldState, { [action.payload.channel.id]: action.payloadchannel });
    case REMOVE_A_CHANNEL:
      const newState = merge({}, oldState);
      delete newState[action.channel.id];
      return newState;
    default:
      return oldState;
  }
};

export default channelReducer;
