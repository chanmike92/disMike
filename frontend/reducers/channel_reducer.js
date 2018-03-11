import { RECEIVE_A_CHANNEL, RECEIVE_ALL_CHANNELS } from '../actions/channel_actions';
import { merge } from 'lodash';


const channelReducer = (oldState = {}, action) => {

  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ALL_CHANNELS:
      return action.channels;
    case RECEIVE_A_CHANNEL:
      return merge({}, oldState, { [action.channel.id]: action.channel });
    default:
      return oldState;
  }
};

export default channelReducer;
