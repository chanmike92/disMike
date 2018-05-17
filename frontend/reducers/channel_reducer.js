import { RECEIVE_A_CHANNEL, RECEIVE_ALL_CHANNELS, REMOVE_A_CHANNEL, CLEAR_STATE } from '../actions/channel_actions';
import { RECEIVE_A_SERVER } from '../actions/server_actions';
import { RECEIVE_A_MESSAGE } from '../actions/message_actions';
import { merge } from 'lodash';


const channelReducer = (oldState = {}, action) => {

  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_A_MESSAGE:
      const id = action.message.id
      const messagableId = action.message.messagable_id
      const updatedChannel = {[messagableId]: {message_ids: [...oldState[messagableId].message_ids, id]}}
      return merge({}, oldState, updatedChannel)
    case RECEIVE_ALL_CHANNELS:
      return action.channels;
    case RECEIVE_A_SERVER:
      return merge({}, oldState, action.payload.channels);
    case RECEIVE_A_CHANNEL:
      return merge({}, oldState, { [action.payload.channel.id]: action.payload.channel });
    case REMOVE_A_CHANNEL:
      const newState = merge({}, oldState);
      delete newState[action.channelId];
      return newState;
    case CLEAR_STATE:
      return {};
    default:
      return oldState;
  }
};

export default channelReducer;
